import { ComponentFactoryResolver, ViewContainerRef, ElementRef, EventEmitter } from '@angular/core';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/distinctUntilChanged';
export declare class EmojiPickerApiDirective {
    private _cfr;
    private _vcr;
    private _el;
    private _directionCode;
    /** [emojiPickerDirection]="'top' || 'bottom' || 'left' || 'right'" defaults to 'bottom' */
    emojiPickerDirection: string;
    /** [emojiPickerPreserveSelection]="true || false" preserves or forgets prexisting selection while toggling picker */
    emojiPickerPreserveSelection: boolean;
    /** [(emojiPickerIf)]="true || false" opens up or closes the picker */
    emojiPickerIf: boolean;
    emojiPickerIfEmitter: EventEmitter<boolean>;
    /** (emojiPickerSelect)="eventHandler($event)" // emits emoji picking event */
    selectEmitter: EventEmitter<{}>;
    /** [emojiPickerAutofocus]="true || false"  */
    emojiPickerAutofocus: boolean;
    private _emojiPickerOpenState;
    private _destroyed;
    private _emojiPickerFactory;
    private _emojiPickerRef;
    private _emojiSubs;
    private _recordedSelection;
    constructor(_cfr: ComponentFactoryResolver, _vcr: ViewContainerRef, _el: ElementRef);
    openPicker(): void;
    closePicker(): void;
    recordSelection(): any;
    restoreSelection(): void;
    ngOnDestroy(): void;
}
