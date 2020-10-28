import { EventEmitter } from '@angular/core';
import { EmojiPickerOptions } from "../services";
export declare class EmojiButtonComponent {
    emojiPickerOptions: EmojiPickerOptions;
    emoji: any;
    dataToEmit: any;
    options: any;
    fitzpatrick: any;
    selectionEmitter: EventEmitter<any>;
    constructor(emojiPickerOptions: EmojiPickerOptions);
}
