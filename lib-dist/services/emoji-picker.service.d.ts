import { EmojiEvent } from './../lib';
export declare class EmojiPickerOptions {
    private _options;
    setEmojiSheet(config: EmojiPickerSheetOption): void;
    getEmojiElement(event: EmojiEvent): any;
    readonly options: {
        sheet?: any;
    };
}
export interface EmojiPickerSheetOption {
    url: string;
    locator: Function;
}
