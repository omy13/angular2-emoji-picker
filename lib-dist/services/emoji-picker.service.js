import { Injectable } from '@angular/core';
var EmojiPickerOptions = (function () {
    function EmojiPickerOptions() {
        this._options = {};
    }
    EmojiPickerOptions.prototype.setEmojiSheet = function (config) {
        if (!config || !config.url || !config.locator) {
            return console.error('EmojiPickerService.setEmojiSheet: cannot accept data, missing arguments');
        }
        this._options = Object.assign({}, this._options, {
            sheet: config
        });
    };
    EmojiPickerOptions.prototype.getEmojiElement = function (event) {
        var emojiElement;
        var colonCode = ":" + event.label + ":";
        /** creating the right element */
        if (!this._options.sheet) {
            emojiElement = document.createTextNode(event.char);
        }
        else {
            emojiElement = document.createElement('img');
            emojiElement.style.backgroundImage = 'url(' + this._options.sheet.url + ')';
            emojiElement.style.backgroundPositionX = -this._options.sheet.locator(event.label).x * 25 + 'px';
            emojiElement.style.backgroundPositionY = -this._options.sheet.locator(event.label).y * 25 + 'px';
            emojiElement.style.display = 'inline-block';
            emojiElement.style.width = '25px';
            emojiElement.style.height = '25px';
            emojiElement.style.backgroundRepeat = 'no-repeat';
            emojiElement.style.backgroundSize = (25 * 1568 / 32) + 'px';
            emojiElement.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
        }
        emojiElement.setAttribute('data-emoji-char', event.char);
        emojiElement.setAttribute('data-emoji-colon', colonCode);
        return emojiElement;
    };
    Object.defineProperty(EmojiPickerOptions.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return EmojiPickerOptions;
}());
export { EmojiPickerOptions };
EmojiPickerOptions.decorators = [
    { type: Injectable },
];
/** @nocollapse */
EmojiPickerOptions.ctorParameters = function () { return []; };
//# sourceMappingURL=emoji-picker.service.js.map