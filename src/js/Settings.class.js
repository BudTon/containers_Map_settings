export default class Setting {
    constructor(theme, music, difficulty) {
        this.theme = theme
        this.music = music
        this.difficulty = difficulty
    }
    setting() {
        const resultSetting = new Map(Setting.default)
        Setting.manual.forEach((valueMan, keyMan) => {
            if (valueMan) {
                resultSetting.set(keyMan, valueMan)
            }
        }
        )
        return new Setting(
            resultSetting.get('theme'),
            resultSetting.get('music'),
            resultSetting.get('difficulty'),
        )
    }

}

Setting.default = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
])

Setting.standart = new Map([
    ['theme', ['dark', 'light', 'gray']],
    ['music', ['trance', 'pop', 'rock', 'chillout', 'off']],
    ['difficulty', ['easy', 'normal', 'hard', 'nightmare']],
])

Setting.manual = new Map([
    ['theme', Setting.standart.get('theme')[2]],
    ['music', Setting.standart.get('music')[2]],
    ['difficulty', Setting.standart.get('difficulty')[2]],
])

// module.exports = {
//     Setting,
// }
