import { Component, Input, EventEmitter, Output } from '@angular/core';
import { EmojiPickerOptions } from "../services";

@Component({
  selector: 'emoji-button',
  styles: [`:host{display:inline-block}.emoji-button{padding:0;outline:0;background:0 0;cursor:pointer;width:34px;height:34px;border:5px solid transparent;border-radius:3px;font-size:24px;line-height:1.1;-webkit-transition:all .2s;transition:all .2s}.emoji-button-from-sheet-enclosure:focus,.emoji-button-from-sheet-enclosure:hover,.emoji-button:focus,.emoji-button:hover{background:#f1f1f1;border-color:#f1f1f1}.emoji-button-from-sheet{padding:0;border:0;outline:0;display:inline-block;background-repeat:no-repeat;-webkit-box-shadow:0 0 1px 1px #fff inset;box-shadow:0 0 1px 1px #fff inset;background-size:1225px;width:25px;height:25px}.emoji-button-from-sheet-enclosure{display:inline-block;cursor:pointer;line-height:0;padding:4.5px;border-radius:3px}.emoji-button-from-sheet-enclosure:focus .emoji-button-from-sheet,.emoji-button-from-sheet-enclosure:hover .emoji-button-from-sheet{-webkit-box-shadow:0 0 1px 1px #f1f1f1 inset;box-shadow:0 0 1px 1px #f1f1f1 inset}`],
  template: `
<button
  *ngIf="!emojiPickerOptions.options.sheet; else sheetButton"
  class="emoji-button"
  (click)="selectionEmitter.emit(dataToEmit || emoji)">
  {{emoji[0]}}
</button>
<ng-template #sheetButton>
  <span class="emoji-button-from-sheet-enclosure" 
      (click)="selectionEmitter.emit(dataToEmit || emoji)">
    <span
      class="emoji-button-from-sheet"
      [style.backgroundImage]="'url(' + emojiPickerOptions.options.sheet.url + ')'"
      [style.backgroundPositionX]="-emojiPickerOptions.options.sheet.locator(emoji[1]).x * 25 + 'px'"
      [style.backgroundPositionY]="-emojiPickerOptions.options.sheet.locator(emoji[1]).y * 25 + 'px'">
    </span>
  </span>
</ng-template>
  `
})

export class EmojiButtonComponent {
  @Input('emoji') emoji;
  @Input('dataToEmit') dataToEmit;
  @Input('options') options;
  @Input('fitzpatrick') fitzpatrick;

  @Output('selection') selectionEmitter : EventEmitter<any> = new EventEmitter();

  constructor(public emojiPickerOptions: EmojiPickerOptions) {}
}
