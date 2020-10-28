import { Injectable } from '@angular/core';
import { EmojiEvent } from './../lib';

@Injectable()
export class EmojiPickerOptions {
  private _options: { sheet? } = {};

  setEmojiSheet(config: EmojiPickerSheetOption) {
    if (!config || !config.url || !config.locator) {
      return console.error('EmojiPickerService.setEmojiSheet: cannot accept data, missing arguments');
    }

    this._options = Object.assign({}, this._options, {
      sheet: config
    });
  }

  getEmojiElement(event: EmojiEvent) {
    let emojiElement;
    const colonCode = `:${event.label}:`;

    /** creating the right element */
    if (!this._options.sheet) {
      emojiElement = document.createTextNode(event.char);
    } else {
      emojiElement = document.createElement('img');
      emojiElement.style.backgroundImage = 'url(' + this._options.sheet.url + ')';
      emojiElement.style.backgroundPositionX = - this._options.sheet.locator(event.label).x * 25 + 'px';
      emojiElement.style.backgroundPositionY = - this._options.sheet.locator(event.label).y * 25 + 'px';
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
  }

  get options() {
    return this._options;
  }
}

export interface EmojiPickerSheetOption {
  url: string;
  locator: Function;
}
