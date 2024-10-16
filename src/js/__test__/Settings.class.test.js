/* eslint-disable no-undef */

import Setting from '../Settings.class.js';

test.each([
    [[
        ['theme', Setting.standart.get('theme')[2]],
        ['music', Setting.standart.get('music')[2]],
        ['difficulty', Setting.standart.get('difficulty')[2]],
    ], { "difficulty": "hard", "music": "rock", "theme": "gray" }],
    [[
        ['music', Setting.standart.get('music')[10]],
        ['difficulty', Setting.standart.get('difficulty')[2]],
    ], { "difficulty": "hard", "music": "trance", "theme": "dark" }],
])('testing Setting.setting() with response = %j and expected = "%s"', (response, expected) => {
    Setting.manual = new Map(response)
    const set = new Setting()
    const result = set.setting();
    expect(result).toEqual(expected);
})