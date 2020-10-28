import { Injectable } from '@angular/core';
import { EmojiEvent } from './../lib';

@Injectable()
export class EmojiPickerOptions {
  private _options : any;

  setEmojiSheet(config: EmojiPickerSheetOption) {
    if (!config || !config.url || !config.locator) {
      return console.error('EmojiPickerService.setEmojiSheet: cannot accept data, missing arguments');
    }

    this._options = Object.assign({}, this._options, {
      sheet: config
    });
  }

  get options() {
    return this._options;
  }
}

interface EmojiPickerSheetOption {
  url: string;
  locator: Function;
}
