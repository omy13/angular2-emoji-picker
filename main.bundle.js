webpackJsonp([1,4],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var EmojiPickerModule = EmojiPickerModule_1 = (function () {
    function EmojiPickerModule() {
    }
    EmojiPickerModule.forRoot = function () {
        return {
            ngModule: EmojiPickerModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services__["a" /* EmojiPickerOptions */]
            ]
        };
    };
    return EmojiPickerModule;
}());
EmojiPickerModule = EmojiPickerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
        ],
        exports: __WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DIRECTIVES */].concat(__WEBPACK_IMPORTED_MODULE_2__components__["a" /* COMPONENTS */]),
        declarations: __WEBPACK_IMPORTED_MODULE_4__pipes__["a" /* PIPES */].concat(__WEBPACK_IMPORTED_MODULE_3__directives__["a" /* DIRECTIVES */], __WEBPACK_IMPORTED_MODULE_2__components__["a" /* COMPONENTS */]),
        providers: [],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_2__components__["b" /* EmojiPickerComponent */]]
    })
], EmojiPickerModule);

var EmojiPickerModule_1;
//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaretEvent; });
var CaretEvent = (function () {
    function CaretEvent(data) {
        Object.assign(this, data);
    }
    CaretEvent.prototype.clone = function () {
        return new CaretEvent(Object.assign({}, this, {
            caretRange: this.caretRange && this.caretRange.cloneRange ? this.caretRange.cloneRange() : this.caretRange
        }));
    };
    CaretEvent.generateNullEvent = function () {
        return new CaretEvent({
            caretOffset: 0,
            textContent: ''
        });
    };
    CaretEvent.comparePropsOfObject = function (r1, r2) {
        for (var k in r1) {
            if (r1[k] !== r2[k]) {
                return false;
            }
        }
        return true;
    };
    CaretEvent.compare = function (e1, e2) {
        var changed = 
        /** different when either caretRange is omitted while other exists */
        (!e1.caretRange && e2.caretRange) ||
            (e1.caretRange && !e2.caretRange) ||
            /** different when offset has changed */
            (e1.caretOffset !== e2.caretOffset) ||
            /** different when textContent has changed */
            (e1.textContent !== e2.textContent) ||
            /** different when range object properties changed */
            !this.comparePropsOfObject(e1.caretRange, e2.caretRange);
        return !changed;
    };
    CaretEvent.generateCaretEvent = function (win, doc, element) {
        var caretOffset = 0, sel, caretRange, textContent = element.textContent;
        if (element.tagName.toLowerCase() === 'input') {
            return new CaretEvent({
                caretOffset: element.selectionEnd,
                textContent: element.value
            });
        }
        if (typeof win.getSelection != "undefined") {
            sel = win.getSelection();
            if (sel.rangeCount > 0) {
                var range = win.getSelection().getRangeAt(0);
                var preCaretRange = range.cloneRange();
                var nodeLength = element.textContent.length;
                preCaretRange.selectNodeContents(element);
                preCaretRange.setEnd(range.endContainer, range.endOffset > nodeLength ? nodeLength : range.endOffset);
                caretOffset = preCaretRange.toString().length;
                /** Keeping a reference of the range to emit */
                caretRange = range.cloneRange();
            }
        }
        else if ((sel = doc.selection) && sel.type != "Control") {
            var textRange = sel.createRange();
            var preCaretTextRange = doc.body.createTextRange();
            preCaretTextRange.moveToElementText(element);
            preCaretTextRange.setEndPoint("EndToEnd", textRange);
            caretOffset = preCaretTextRange.text.length;
            /** Keeping a reference of the range to emit and making it compatible */
            caretRange = textRange.duplicate();
            caretRange.insertNode = function (e) {
                var container = document.createElement("div");
                container.appendChild(e);
                caretRange.pasteHTML(container.innerHTML);
            };
        }
        return new CaretEvent({
            caretOffset: caretOffset,
            caretRange: caretRange,
            textContent: textContent
        });
    };
    return CaretEvent;
}());

//# sourceMappingURL=caret-event.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiEvent; });
var EmojiEvent = (function () {
    function EmojiEvent(data) {
        Object.assign(this, data);
    }
    EmojiEvent.fromArray = function (emojiArray) {
        return new EmojiEvent({ char: emojiArray[0], label: emojiArray[1] });
    };
    return EmojiEvent;
}());

//# sourceMappingURL=emoji-event.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EMOJIS; });
var EMOJIS = [
    {
        "emojis": [
            [
                "😄",
                "smile"
            ],
            [
                "😃",
                "smiley"
            ],
            [
                "😀",
                "grinning"
            ],
            [
                "😊",
                "blush"
            ],
            [
                "☺",
                "relaxed"
            ],
            [
                "😉",
                "wink"
            ],
            [
                "😍",
                "heart_eyes"
            ],
            [
                "😘",
                "kissing_heart"
            ],
            [
                "😚",
                "kissing_closed_eyes"
            ],
            [
                "😗",
                "kissing"
            ],
            [
                "😙",
                "kissing_smiling_eyes"
            ],
            [
                "😜",
                "stuck_out_tongue_winking_eye"
            ],
            [
                "😝",
                "stuck_out_tongue_closed_eyes"
            ],
            [
                "😛",
                "stuck_out_tongue"
            ],
            [
                "😳",
                "flushed"
            ],
            [
                "😁",
                "grin"
            ],
            [
                "😔",
                "pensive"
            ],
            [
                "😌",
                "relieved"
            ],
            [
                "😒",
                "unamused"
            ],
            [
                "😞",
                "disappointed"
            ],
            [
                "😣",
                "persevere"
            ],
            [
                "😢",
                "cry"
            ],
            [
                "😂",
                "joy"
            ],
            [
                "😭",
                "sob"
            ],
            [
                "😪",
                "sleepy"
            ],
            [
                "😥",
                "disappointed_relieved"
            ],
            [
                "😰",
                "cold_sweat"
            ],
            [
                "😅",
                "sweat_smile"
            ],
            [
                "😓",
                "sweat"
            ],
            [
                "😩",
                "weary"
            ],
            [
                "😫",
                "tired_face"
            ],
            [
                "😨",
                "fearful"
            ],
            [
                "😱",
                "scream"
            ],
            [
                "😠",
                "angry"
            ],
            [
                "😡",
                "rage"
            ],
            [
                "😤",
                "triumph"
            ],
            [
                "😖",
                "confounded"
            ],
            [
                "😆",
                "laughing"
            ],
            [
                "😋",
                "yum"
            ],
            [
                "😷",
                "mask"
            ],
            [
                "😎",
                "sunglasses"
            ],
            [
                "😴",
                "sleeping"
            ],
            [
                "😵",
                "dizzy_face"
            ],
            [
                "😲",
                "astonished"
            ],
            [
                "😟",
                "worried"
            ],
            [
                "😦",
                "frowning"
            ],
            [
                "😧",
                "anguished"
            ],
            [
                "👿",
                "imp"
            ],
            [
                "😮",
                "open_mouth"
            ],
            [
                "😬",
                "grimacing"
            ],
            [
                "😐",
                "neutral_face"
            ],
            [
                "😕",
                "confused"
            ],
            [
                "😯",
                "hushed"
            ],
            [
                "😏",
                "smirk"
            ],
            [
                "😑",
                "expressionless"
            ],
            [
                "👲",
                "man_with_gua_pi_mao"
            ],
            [
                "👳",
                "man_with_turban"
            ],
            [
                "👮",
                "cop"
            ],
            [
                "👷",
                "construction_worker"
            ],
            [
                "💂",
                "guardsman"
            ],
            [
                "👶",
                "baby"
            ],
            [
                "👦",
                "boy"
            ],
            [
                "👧",
                "girl"
            ],
            [
                "👨",
                "man"
            ],
            [
                "👩",
                "woman"
            ],
            [
                "👴",
                "older_man"
            ],
            [
                "👵",
                "older_woman"
            ],
            [
                "👱",
                "person_with_blond_hair"
            ],
            [
                "👼",
                "angel"
            ],
            [
                "👸",
                "princess"
            ],
            [
                "😺",
                "smiley_cat"
            ],
            [
                "😸",
                "smile_cat"
            ],
            [
                "😻",
                "heart_eyes_cat"
            ],
            [
                "😽",
                "kissing_cat"
            ],
            [
                "😼",
                "smirk_cat"
            ],
            [
                "🙀",
                "scream_cat"
            ],
            [
                "😿",
                "crying_cat_face"
            ],
            [
                "😹",
                "joy_cat"
            ],
            [
                "😾",
                "pouting_cat"
            ],
            [
                "👹",
                "japanese_ogre"
            ],
            [
                "👺",
                "japanese_goblin"
            ],
            [
                "🙈",
                "see_no_evil"
            ],
            [
                "🙉",
                "hear_no_evil"
            ],
            [
                "🙊",
                "speak_no_evil"
            ],
            [
                "💀",
                "skull"
            ],
            [
                "👽",
                "alien"
            ],
            [
                "💩",
                "hankey"
            ],
            [
                "🔥",
                "fire"
            ],
            [
                "✨",
                "sparkles"
            ],
            [
                "🌟",
                "star2"
            ],
            [
                "💫",
                "dizzy"
            ],
            [
                "💥",
                "boom"
            ],
            [
                "💢",
                "anger"
            ],
            [
                "💦",
                "sweat_drops"
            ],
            [
                "💧",
                "droplet"
            ],
            [
                "💤",
                "zzz"
            ],
            [
                "💨",
                "dash"
            ],
            [
                "👂",
                "ear"
            ],
            [
                "👀",
                "eyes"
            ],
            [
                "👃",
                "nose"
            ],
            [
                "👅",
                "tongue"
            ],
            [
                "👄",
                "lips"
            ],
            [
                "👍",
                "+1"
            ],
            [
                "👎",
                "-1"
            ],
            [
                "👌",
                "ok_hand"
            ],
            [
                "👊",
                "facepunch"
            ],
            [
                "✊",
                "fist"
            ],
            [
                "✌",
                "v"
            ],
            [
                "👋",
                "wave"
            ],
            [
                "✋",
                "hand"
            ],
            [
                "👐",
                "open_hands"
            ],
            [
                "👆",
                "point_up_2"
            ],
            [
                "👇",
                "point_down"
            ],
            [
                "👉",
                "point_right"
            ],
            [
                "👈",
                "point_left"
            ],
            [
                "🙌",
                "raised_hands"
            ],
            [
                "🙏",
                "pray"
            ],
            [
                "☝",
                "point_up"
            ],
            [
                "👏",
                "clap"
            ],
            [
                "💪",
                "muscle"
            ],
            [
                "🚶",
                "walking"
            ],
            [
                "🏃",
                "runner"
            ],
            [
                "💃",
                "dancer"
            ],
            [
                "👫",
                "couple"
            ],
            [
                "👪",
                "family"
            ],
            [
                "💏",
                "couplekiss"
            ],
            [
                "💑",
                "couple_with_heart"
            ],
            [
                "👯",
                "dancers"
            ],
            [
                "🙆",
                "ok_woman"
            ],
            [
                "🙅",
                "no_good"
            ],
            [
                "💁",
                "information_desk_person"
            ],
            [
                "🙋",
                "raising_hand"
            ],
            [
                "💆",
                "massage"
            ],
            [
                "💇",
                "haircut"
            ],
            [
                "💅",
                "nail_care"
            ],
            [
                "👰",
                "bride_with_veil"
            ],
            [
                "🙎",
                "person_with_pouting_face"
            ],
            [
                "🙍",
                "person_frowning"
            ],
            [
                "🙇",
                "bow"
            ],
            [
                "🎩",
                "tophat"
            ],
            [
                "👑",
                "crown"
            ],
            [
                "👒",
                "womans_hat"
            ],
            [
                "👟",
                "athletic_shoe"
            ],
            [
                "👞",
                "mans_shoe"
            ],
            [
                "👡",
                "sandal"
            ],
            [
                "👠",
                "high_heel"
            ],
            [
                "👢",
                "boot"
            ],
            [
                "👕",
                "shirt"
            ],
            [
                "👔",
                "necktie"
            ],
            [
                "👚",
                "womans_clothes"
            ],
            [
                "👗",
                "dress"
            ],
            [
                "🎽",
                "running_shirt_with_sash"
            ],
            [
                "👖",
                "jeans"
            ],
            [
                "👘",
                "kimono"
            ],
            [
                "👙",
                "bikini"
            ],
            [
                "💼",
                "briefcase"
            ],
            [
                "👜",
                "handbag"
            ],
            [
                "👝",
                "pouch"
            ],
            [
                "👛",
                "purse"
            ],
            [
                "👓",
                "eyeglasses"
            ],
            [
                "🎀",
                "ribbon"
            ],
            [
                "🌂",
                "closed_umbrella"
            ],
            [
                "💄",
                "lipstick"
            ],
            [
                "💛",
                "yellow_heart"
            ],
            [
                "💙",
                "blue_heart"
            ],
            [
                "💜",
                "purple_heart"
            ],
            [
                "💚",
                "green_heart"
            ],
            [
                "❤",
                "heart"
            ],
            [
                "💔",
                "broken_heart"
            ],
            [
                "💗",
                "heartpulse"
            ],
            [
                "💓",
                "heartbeat"
            ],
            [
                "💕",
                "two_hearts"
            ],
            [
                "💖",
                "sparkling_heart"
            ],
            [
                "💞",
                "revolving_hearts"
            ],
            [
                "💘",
                "cupid"
            ],
            [
                "💌",
                "love_letter"
            ],
            [
                "💋",
                "kiss"
            ],
            [
                "💍",
                "ring"
            ],
            [
                "💎",
                "gem"
            ],
            [
                "👤",
                "bust_in_silhouette"
            ],
            [
                "💬",
                "speech_balloon"
            ],
            [
                "👣",
                "footprints"
            ]
        ],
        "name": "People",
        "icon": ["😄", "smile"]
    },
    {
        "emojis": [
            [
                "🐶",
                "dog"
            ],
            [
                "🐺",
                "wolf"
            ],
            [
                "🐱",
                "cat"
            ],
            [
                "🐭",
                "mouse"
            ],
            [
                "🐹",
                "hamster"
            ],
            [
                "🐰",
                "rabbit"
            ],
            [
                "🐸",
                "frog"
            ],
            [
                "🐯",
                "tiger"
            ],
            [
                "🐨",
                "koala"
            ],
            [
                "🐻",
                "bear"
            ],
            [
                "🐷",
                "pig"
            ],
            [
                "🐽",
                "pig_nose"
            ],
            [
                "🐮",
                "cow"
            ],
            [
                "🐗",
                "boar"
            ],
            [
                "🐵",
                "monkey_face"
            ],
            [
                "🐒",
                "monkey"
            ],
            [
                "🐴",
                "horse"
            ],
            [
                "🐑",
                "sheep"
            ],
            [
                "🐘",
                "elephant"
            ],
            [
                "🐼",
                "panda_face"
            ],
            [
                "🐧",
                "penguin"
            ],
            [
                "🐦",
                "bird"
            ],
            [
                "🐤",
                "baby_chick"
            ],
            [
                "🐥",
                "hatched_chick"
            ],
            [
                "🐣",
                "hatching_chick"
            ],
            [
                "🐔",
                "chicken"
            ],
            [
                "🐍",
                "snake"
            ],
            [
                "🐢",
                "turtle"
            ],
            [
                "🐛",
                "bug"
            ],
            [
                "🐝",
                "bee"
            ],
            [
                "🐜",
                "ant"
            ],
            [
                "🐞",
                "beetle"
            ],
            [
                "🐌",
                "snail"
            ],
            [
                "🐙",
                "octopus"
            ],
            [
                "🐚",
                "shell"
            ],
            [
                "🐠",
                "tropical_fish"
            ],
            [
                "🐟",
                "fish"
            ],
            [
                "🐬",
                "dolphin"
            ],
            [
                "🐳",
                "whale"
            ],
            [
                "🐎",
                "racehorse"
            ],
            [
                "🐲",
                "dragon_face"
            ],
            [
                "🐡",
                "blowfish"
            ],
            [
                "🐫",
                "camel"
            ],
            [
                "🐩",
                "poodle"
            ],
            [
                "🐾",
                "feet"
            ],
            [
                "💐",
                "bouquet"
            ],
            [
                "🌸",
                "cherry_blossom"
            ],
            [
                "🌷",
                "tulip"
            ],
            [
                "🍀",
                "four_leaf_clover"
            ],
            [
                "🌹",
                "rose"
            ],
            [
                "🌻",
                "sunflower"
            ],
            [
                "🌺",
                "hibiscus"
            ],
            [
                "🍁",
                "maple_leaf"
            ],
            [
                "🍃",
                "leaves"
            ],
            [
                "🍂",
                "fallen_leaf"
            ],
            [
                "🌿",
                "herb"
            ],
            [
                "🌾",
                "ear_of_rice"
            ],
            [
                "🍄",
                "mushroom"
            ],
            [
                "🌵",
                "cactus"
            ],
            [
                "🌴",
                "palm_tree"
            ],
            [
                "🌰",
                "chestnut"
            ],
            [
                "🌱",
                "seedling"
            ],
            [
                "🌼",
                "blossom"
            ],
            [
                "🌑",
                "new_moon"
            ],
            [
                "🌓",
                "first_quarter_moon"
            ],
            [
                "🌔",
                "moon"
            ],
            [
                "🌕",
                "full_moon"
            ],
            [
                "🌛",
                "first_quarter_moon_with_face"
            ],
            [
                "🌙",
                "crescent_moon"
            ],
            [
                "🌏",
                "earth_asia"
            ],
            [
                "🌋",
                "volcano"
            ],
            [
                "🌌",
                "milky_way"
            ],
            [
                "🌠",
                "stars"
            ],
            [
                "⭐",
                "star"
            ],
            [
                "☀",
                "sunny"
            ],
            [
                "⛅",
                "partly_sunny"
            ],
            [
                "☁",
                "cloud"
            ],
            [
                "⚡",
                "zap"
            ],
            [
                "☔",
                "umbrella"
            ],
            [
                "❄",
                "snowflake"
            ],
            [
                "⛄",
                "snowman"
            ],
            [
                "🌀",
                "cyclone"
            ],
            [
                "🌁",
                "foggy"
            ],
            [
                "🌈",
                "rainbow"
            ],
            [
                "🌊",
                "ocean"
            ]
        ],
        "name": "Nature",
        "icon": ["🌸", "cherry_blossom"]
    },
    {
        "emojis": [
            [
                "🎍",
                "bamboo"
            ],
            [
                "💝",
                "gift_heart"
            ],
            [
                "🎎",
                "dolls"
            ],
            [
                "🎒",
                "school_satchel"
            ],
            [
                "🎓",
                "mortar_board"
            ],
            [
                "🎏",
                "flags"
            ],
            [
                "🎆",
                "fireworks"
            ],
            [
                "🎇",
                "sparkler"
            ],
            [
                "🎐",
                "wind_chime"
            ],
            [
                "🎑",
                "rice_scene"
            ],
            [
                "🎃",
                "jack_o_lantern"
            ],
            [
                "👻",
                "ghost"
            ],
            [
                "🎅",
                "santa"
            ],
            [
                "🎄",
                "christmas_tree"
            ],
            [
                "🎁",
                "gift"
            ],
            [
                "🎋",
                "tanabata_tree"
            ],
            [
                "🎉",
                "tada"
            ],
            [
                "🎊",
                "confetti_ball"
            ],
            [
                "🎈",
                "balloon"
            ],
            [
                "🎌",
                "crossed_flags"
            ],
            [
                "🔮",
                "crystal_ball"
            ],
            [
                "🎥",
                "movie_camera"
            ],
            [
                "📷",
                "camera"
            ],
            [
                "📹",
                "video_camera"
            ],
            [
                "📼",
                "vhs"
            ],
            [
                "💿",
                "cd"
            ],
            [
                "📀",
                "dvd"
            ],
            [
                "💽",
                "minidisc"
            ],
            [
                "💾",
                "floppy_disk"
            ],
            [
                "💻",
                "computer"
            ],
            [
                "📱",
                "iphone"
            ],
            [
                "☎",
                "phone"
            ],
            [
                "📞",
                "telephone_receiver"
            ],
            [
                "📟",
                "pager"
            ],
            [
                "📠",
                "fax"
            ],
            [
                "📡",
                "satellite"
            ],
            [
                "📺",
                "tv"
            ],
            [
                "📻",
                "radio"
            ],
            [
                "🔊",
                "loud_sound"
            ],
            [
                "🔔",
                "bell"
            ],
            [
                "📢",
                "loudspeaker"
            ],
            [
                "📣",
                "mega"
            ],
            [
                "⏳",
                "hourglass_flowing_sand"
            ],
            [
                "⌛",
                "hourglass"
            ],
            [
                "⏰",
                "alarm_clock"
            ],
            [
                "⌚",
                "watch"
            ],
            [
                "🔓",
                "unlock"
            ],
            [
                "🔒",
                "lock"
            ],
            [
                "🔏",
                "lock_with_ink_pen"
            ],
            [
                "🔐",
                "closed_lock_with_key"
            ],
            [
                "🔑",
                "key"
            ],
            [
                "🔎",
                "mag_right"
            ],
            [
                "💡",
                "bulb"
            ],
            [
                "🔦",
                "flashlight"
            ],
            [
                "🔌",
                "electric_plug"
            ],
            [
                "🔋",
                "battery"
            ],
            [
                "🔍",
                "mag"
            ],
            [
                "🛀",
                "bath"
            ],
            [
                "🚽",
                "toilet"
            ],
            [
                "🔧",
                "wrench"
            ],
            [
                "🔩",
                "nut_and_bolt"
            ],
            [
                "🔨",
                "hammer"
            ],
            [
                "🚪",
                "door"
            ],
            [
                "🚬",
                "smoking"
            ],
            [
                "💣",
                "bomb"
            ],
            [
                "🔫",
                "gun"
            ],
            [
                "🔪",
                "hocho"
            ],
            [
                "💊",
                "pill"
            ],
            [
                "💉",
                "syringe"
            ],
            [
                "💰",
                "moneybag"
            ],
            [
                "💴",
                "yen"
            ],
            [
                "💵",
                "dollar"
            ],
            [
                "💳",
                "credit_card"
            ],
            [
                "💸",
                "money_with_wings"
            ],
            [
                "📲",
                "calling"
            ],
            [
                "📧",
                "e-mail"
            ],
            [
                "📥",
                "inbox_tray"
            ],
            [
                "📤",
                "outbox_tray"
            ],
            [
                "✉",
                "email"
            ],
            [
                "📩",
                "envelope_with_arrow"
            ],
            [
                "📨",
                "incoming_envelope"
            ],
            [
                "📫",
                "mailbox"
            ],
            [
                "📪",
                "mailbox_closed"
            ],
            [
                "📮",
                "postbox"
            ],
            [
                "📦",
                "package"
            ],
            [
                "📝",
                "memo"
            ],
            [
                "📄",
                "page_facing_up"
            ],
            [
                "📃",
                "page_with_curl"
            ],
            [
                "📑",
                "bookmark_tabs"
            ],
            [
                "📊",
                "bar_chart"
            ],
            [
                "📈",
                "chart_with_upwards_trend"
            ],
            [
                "📉",
                "chart_with_downwards_trend"
            ],
            [
                "📜",
                "scroll"
            ],
            [
                "📋",
                "clipboard"
            ],
            [
                "📅",
                "date"
            ],
            [
                "📆",
                "calendar"
            ],
            [
                "📇",
                "card_index"
            ],
            [
                "📁",
                "file_folder"
            ],
            [
                "📂",
                "open_file_folder"
            ],
            [
                "✂",
                "scissors"
            ],
            [
                "📌",
                "pushpin"
            ],
            [
                "📎",
                "paperclip"
            ],
            [
                "✒",
                "black_nib"
            ],
            [
                "✏",
                "pencil2"
            ],
            [
                "📏",
                "straight_ruler"
            ],
            [
                "📐",
                "triangular_ruler"
            ],
            [
                "📕",
                "closed_book"
            ],
            [
                "📗",
                "green_book"
            ],
            [
                "📘",
                "blue_book"
            ],
            [
                "📙",
                "orange_book"
            ],
            [
                "📓",
                "notebook"
            ],
            [
                "📔",
                "notebook_with_decorative_cover"
            ],
            [
                "📒",
                "ledger"
            ],
            [
                "📚",
                "books"
            ],
            [
                "📖",
                "book"
            ],
            [
                "🔖",
                "bookmark"
            ],
            [
                "📛",
                "name_badge"
            ],
            [
                "📰",
                "newspaper"
            ],
            [
                "🎨",
                "art"
            ],
            [
                "🎬",
                "clapper"
            ],
            [
                "🎤",
                "microphone"
            ],
            [
                "🎧",
                "headphones"
            ],
            [
                "🎼",
                "musical_score"
            ],
            [
                "🎵",
                "musical_note"
            ],
            [
                "🎶",
                "notes"
            ],
            [
                "🎹",
                "musical_keyboard"
            ],
            [
                "🎻",
                "violin"
            ],
            [
                "🎺",
                "trumpet"
            ],
            [
                "🎷",
                "saxophone"
            ],
            [
                "🎸",
                "guitar"
            ],
            [
                "👾",
                "space_invader"
            ],
            [
                "🎮",
                "video_game"
            ],
            [
                "🃏",
                "black_joker"
            ],
            [
                "🎴",
                "flower_playing_cards"
            ],
            [
                "🀄",
                "mahjong"
            ],
            [
                "🎲",
                "game_die"
            ],
            [
                "🎯",
                "dart"
            ],
            [
                "🏈",
                "football"
            ],
            [
                "🏀",
                "basketball"
            ],
            [
                "⚽",
                "soccer"
            ],
            [
                "⚾",
                "baseball"
            ],
            [
                "🎾",
                "tennis"
            ],
            [
                "🎱",
                "8ball"
            ],
            [
                "🎳",
                "bowling"
            ],
            [
                "⛳",
                "golf"
            ],
            [
                "🏁",
                "checkered_flag"
            ],
            [
                "🏆",
                "trophy"
            ],
            [
                "🎿",
                "ski"
            ],
            [
                "🏂",
                "snowboarder"
            ],
            [
                "🏊",
                "swimmer"
            ],
            [
                "🏄",
                "surfer"
            ],
            [
                "🎣",
                "fishing_pole_and_fish"
            ],
            [
                "☕",
                "coffee"
            ],
            [
                "🍵",
                "tea"
            ],
            [
                "🍶",
                "sake"
            ],
            [
                "🍺",
                "beer"
            ],
            [
                "🍻",
                "beers"
            ],
            [
                "🍸",
                "cocktail"
            ],
            [
                "🍹",
                "tropical_drink"
            ],
            [
                "🍷",
                "wine_glass"
            ],
            [
                "🍴",
                "fork_and_knife"
            ],
            [
                "🍕",
                "pizza"
            ],
            [
                "🍔",
                "hamburger"
            ],
            [
                "🍟",
                "fries"
            ],
            [
                "🍗",
                "poultry_leg"
            ],
            [
                "🍖",
                "meat_on_bone"
            ],
            [
                "🍝",
                "spaghetti"
            ],
            [
                "🍛",
                "curry"
            ],
            [
                "🍤",
                "fried_shrimp"
            ],
            [
                "🍱",
                "bento"
            ],
            [
                "🍣",
                "sushi"
            ],
            [
                "🍥",
                "fish_cake"
            ],
            [
                "🍙",
                "rice_ball"
            ],
            [
                "🍘",
                "rice_cracker"
            ],
            [
                "🍚",
                "rice"
            ],
            [
                "🍜",
                "ramen"
            ],
            [
                "🍲",
                "stew"
            ],
            [
                "🍢",
                "oden"
            ],
            [
                "🍡",
                "dango"
            ],
            [
                "🍳",
                "egg"
            ],
            [
                "🍞",
                "bread"
            ],
            [
                "🍩",
                "doughnut"
            ],
            [
                "🍮",
                "custard"
            ],
            [
                "🍦",
                "icecream"
            ],
            [
                "🍨",
                "ice_cream"
            ],
            [
                "🍧",
                "shaved_ice"
            ],
            [
                "🎂",
                "birthday"
            ],
            [
                "🍰",
                "cake"
            ],
            [
                "🍪",
                "cookie"
            ],
            [
                "🍫",
                "chocolate_bar"
            ],
            [
                "🍬",
                "candy"
            ],
            [
                "🍭",
                "lollipop"
            ],
            [
                "🍯",
                "honey_pot"
            ],
            [
                "🍎",
                "apple"
            ],
            [
                "🍏",
                "green_apple"
            ],
            [
                "🍊",
                "tangerine"
            ],
            [
                "🍒",
                "cherries"
            ],
            [
                "🍇",
                "grapes"
            ],
            [
                "🍉",
                "watermelon"
            ],
            [
                "🍓",
                "strawberry"
            ],
            [
                "🍑",
                "peach"
            ],
            [
                "🍈",
                "melon"
            ],
            [
                "🍌",
                "banana"
            ],
            [
                "🍍",
                "pineapple"
            ],
            [
                "🍠",
                "sweet_potato"
            ],
            [
                "🍆",
                "eggplant"
            ],
            [
                "🍅",
                "tomato"
            ],
            [
                "🌽",
                "corn"
            ]
        ],
        "name": "Objects",
        "icon": ["🔔", "bell"]
    },
    {
        "emojis": [
            [
                "🏠",
                "house"
            ],
            [
                "🏡",
                "house_with_garden"
            ],
            [
                "🏫",
                "school"
            ],
            [
                "🏢",
                "office"
            ],
            [
                "🏣",
                "post_office"
            ],
            [
                "🏥",
                "hospital"
            ],
            [
                "🏦",
                "bank"
            ],
            [
                "🏪",
                "convenience_store"
            ],
            [
                "🏩",
                "love_hotel"
            ],
            [
                "🏨",
                "hotel"
            ],
            [
                "💒",
                "wedding"
            ],
            [
                "⛪",
                "church"
            ],
            [
                "🏬",
                "department_store"
            ],
            [
                "🌇",
                "city_sunrise"
            ],
            [
                "🌆",
                "city_sunset"
            ],
            [
                "🏯",
                "japanese_castle"
            ],
            [
                "🏰",
                "european_castle"
            ],
            [
                "⛺",
                "tent"
            ],
            [
                "🏭",
                "factory"
            ],
            [
                "🗼",
                "tokyo_tower"
            ],
            [
                "🗾",
                "japan"
            ],
            [
                "🗻",
                "mount_fuji"
            ],
            [
                "🌄",
                "sunrise_over_mountains"
            ],
            [
                "🌅",
                "sunrise"
            ],
            [
                "🌃",
                "night_with_stars"
            ],
            [
                "🗽",
                "statue_of_liberty"
            ],
            [
                "🌉",
                "bridge_at_night"
            ],
            [
                "🎠",
                "carousel_horse"
            ],
            [
                "🎡",
                "ferris_wheel"
            ],
            [
                "⛲",
                "fountain"
            ],
            [
                "🎢",
                "roller_coaster"
            ],
            [
                "🚢",
                "ship"
            ],
            [
                "⛵",
                "boat"
            ],
            [
                "🚤",
                "speedboat"
            ],
            [
                "⚓",
                "anchor"
            ],
            [
                "🚀",
                "rocket"
            ],
            [
                "✈",
                "airplane"
            ],
            [
                "💺",
                "seat"
            ],
            [
                "🚉",
                "station"
            ],
            [
                "🚄",
                "bullettrain_side"
            ],
            [
                "🚅",
                "bullettrain_front"
            ],
            [
                "🚇",
                "metro"
            ],
            [
                "🚃",
                "railway_car"
            ],
            [
                "🚌",
                "bus"
            ],
            [
                "🚙",
                "blue_car"
            ],
            [
                "🚗",
                "car"
            ],
            [
                "🚕",
                "taxi"
            ],
            [
                "🚚",
                "truck"
            ],
            [
                "🚨",
                "rotating_light"
            ],
            [
                "🚓",
                "police_car"
            ],
            [
                "🚒",
                "fire_engine"
            ],
            [
                "🚑",
                "ambulance"
            ],
            [
                "🚲",
                "bike"
            ],
            [
                "💈",
                "barber"
            ],
            [
                "🚏",
                "busstop"
            ],
            [
                "🎫",
                "ticket"
            ],
            [
                "🚥",
                "traffic_light"
            ],
            [
                "⚠",
                "warning"
            ],
            [
                "🚧",
                "construction"
            ],
            [
                "🔰",
                "beginner"
            ],
            [
                "⛽",
                "fuelpump"
            ],
            [
                "🏮",
                "izakaya_lantern"
            ],
            [
                "🎰",
                "slot_machine"
            ],
            [
                "♨",
                "hotsprings"
            ],
            [
                "🗿",
                "moyai"
            ],
            [
                "🎪",
                "circus_tent"
            ],
            [
                "🎭",
                "performing_arts"
            ],
            [
                "📍",
                "round_pushpin"
            ],
            [
                "🚩",
                "triangular_flag_on_post"
            ]
        ],
        "name": "Places",
        "icon": ["🚙", "blue_car"]
    },
    {
        "emojis": [
            [
                "🔟",
                "keycap_ten"
            ],
            [
                "🔢",
                "1234"
            ],
            [
                "🔣",
                "symbols"
            ],
            [
                "⬆",
                "arrow_up"
            ],
            [
                "⬇",
                "arrow_down"
            ],
            [
                "⬅",
                "arrow_left"
            ],
            [
                "➡",
                "arrow_right"
            ],
            [
                "🔠",
                "capital_abcd"
            ],
            [
                "🔡",
                "abcd"
            ],
            [
                "🔤",
                "abc"
            ],
            [
                "↗",
                "arrow_upper_right"
            ],
            [
                "↖",
                "arrow_upper_left"
            ],
            [
                "↘",
                "arrow_lower_right"
            ],
            [
                "↙",
                "arrow_lower_left"
            ],
            [
                "↔",
                "left_right_arrow"
            ],
            [
                "↕",
                "arrow_up_down"
            ],
            [
                "◀",
                "arrow_backward"
            ],
            [
                "▶",
                "arrow_forward"
            ],
            [
                "🔼",
                "arrow_up_small"
            ],
            [
                "🔽",
                "arrow_down_small"
            ],
            [
                "↩",
                "leftwards_arrow_with_hook"
            ],
            [
                "↪",
                "arrow_right_hook"
            ],
            [
                "ℹ",
                "information_source"
            ],
            [
                "⏪",
                "rewind"
            ],
            [
                "⏩",
                "fast_forward"
            ],
            [
                "⏫",
                "arrow_double_up"
            ],
            [
                "⏬",
                "arrow_double_down"
            ],
            [
                "⤵",
                "arrow_heading_down"
            ],
            [
                "⤴",
                "arrow_heading_up"
            ],
            [
                "🆗",
                "ok"
            ],
            [
                "🆕",
                "new"
            ],
            [
                "🆙",
                "up"
            ],
            [
                "🆒",
                "cool"
            ],
            [
                "🆓",
                "free"
            ],
            [
                "🆖",
                "ng"
            ],
            [
                "📶",
                "signal_strength"
            ],
            [
                "🎦",
                "cinema"
            ],
            [
                "🈁",
                "koko"
            ],
            [
                "🈯",
                "u6307"
            ],
            [
                "🈳",
                "u7a7a"
            ],
            [
                "🈵",
                "u6e80"
            ],
            [
                "🈴",
                "u5408"
            ],
            [
                "🈲",
                "u7981"
            ],
            [
                "🉐",
                "ideograph_advantage"
            ],
            [
                "🈹",
                "u5272"
            ],
            [
                "🈺",
                "u55b6"
            ],
            [
                "🈶",
                "u6709"
            ],
            [
                "🈚",
                "u7121"
            ],
            [
                "🚻",
                "restroom"
            ],
            [
                "🚹",
                "mens"
            ],
            [
                "🚺",
                "womens"
            ],
            [
                "🚼",
                "baby_symbol"
            ],
            [
                "🚾",
                "wc"
            ],
            [
                "🅿",
                "parking"
            ],
            [
                "♿",
                "wheelchair"
            ],
            [
                "🚭",
                "no_smoking"
            ],
            [
                "🈷",
                "u6708"
            ],
            [
                "🈸",
                "u7533"
            ],
            [
                "🈂",
                "sa"
            ],
            [
                "Ⓜ",
                "m"
            ],
            [
                "🉑",
                "accept"
            ],
            [
                "㊙",
                "secret"
            ],
            [
                "㊗",
                "congratulations"
            ],
            [
                "🆑",
                "cl"
            ],
            [
                "🆘",
                "sos"
            ],
            [
                "🆔",
                "id"
            ],
            [
                "🚫",
                "no_entry_sign"
            ],
            [
                "🔞",
                "underage"
            ],
            [
                "⛔",
                "no_entry"
            ],
            [
                "✳",
                "eight_spoked_asterisk"
            ],
            [
                "❇",
                "sparkle"
            ],
            [
                "❎",
                "negative_squared_cross_mark"
            ],
            [
                "✅",
                "white_check_mark"
            ],
            [
                "✴",
                "eight_pointed_black_star"
            ],
            [
                "💟",
                "heart_decoration"
            ],
            [
                "🆚",
                "vs"
            ],
            [
                "📳",
                "vibration_mode"
            ],
            [
                "📴",
                "mobile_phone_off"
            ],
            [
                "🅰",
                "a"
            ],
            [
                "🅱",
                "b"
            ],
            [
                "🆎",
                "ab"
            ],
            [
                "🅾",
                "o2"
            ],
            [
                "💠",
                "diamond_shape_with_a_dot_inside"
            ],
            [
                "♻",
                "recycle"
            ],
            [
                "♈",
                "aries"
            ],
            [
                "♉",
                "taurus"
            ],
            [
                "♊",
                "gemini"
            ],
            [
                "♋",
                "cancer"
            ],
            [
                "♌",
                "leo"
            ],
            [
                "♍",
                "virgo"
            ],
            [
                "♎",
                "libra"
            ],
            [
                "♏",
                "scorpius"
            ],
            [
                "♐",
                "sagittarius"
            ],
            [
                "♑",
                "capricorn"
            ],
            [
                "♒",
                "aquarius"
            ],
            [
                "♓",
                "pisces"
            ],
            [
                "⛎",
                "ophiuchus"
            ],
            [
                "🔯",
                "six_pointed_star"
            ],
            [
                "🏧",
                "atm"
            ],
            [
                "💹",
                "chart"
            ],
            [
                "💲",
                "heavy_dollar_sign"
            ],
            [
                "💱",
                "currency_exchange"
            ],
            [
                "❌",
                "x"
            ],
            [
                "‼",
                "bangbang"
            ],
            [
                "⁉",
                "interrobang"
            ],
            [
                "❗",
                "exclamation"
            ],
            [
                "❓",
                "question"
            ],
            [
                "❕",
                "grey_exclamation"
            ],
            [
                "❔",
                "grey_question"
            ],
            [
                "⭕",
                "o"
            ],
            [
                "🔝",
                "top"
            ],
            [
                "🔚",
                "end"
            ],
            [
                "🔙",
                "back"
            ],
            [
                "🔛",
                "on"
            ],
            [
                "🔜",
                "soon"
            ],
            [
                "🔃",
                "arrows_clockwise"
            ],
            [
                "🕛",
                "clock12"
            ],
            [
                "🕐",
                "clock1"
            ],
            [
                "🕑",
                "clock2"
            ],
            [
                "🕒",
                "clock3"
            ],
            [
                "🕓",
                "clock4"
            ],
            [
                "🕔",
                "clock5"
            ],
            [
                "🕕",
                "clock6"
            ],
            [
                "🕖",
                "clock7"
            ],
            [
                "🕗",
                "clock8"
            ],
            [
                "🕘",
                "clock9"
            ],
            [
                "🕙",
                "clock10"
            ],
            [
                "🕚",
                "clock11"
            ],
            [
                "✖",
                "heavy_multiplication_x"
            ],
            [
                "➕",
                "heavy_plus_sign"
            ],
            [
                "➖",
                "heavy_minus_sign"
            ],
            [
                "➗",
                "heavy_division_sign"
            ],
            [
                "♠",
                "spades"
            ],
            [
                "♥",
                "hearts"
            ],
            [
                "♣",
                "clubs"
            ],
            [
                "♦",
                "diamonds"
            ],
            [
                "💮",
                "white_flower"
            ],
            [
                "💯",
                "100"
            ],
            [
                "✔",
                "heavy_check_mark"
            ],
            [
                "☑",
                "ballot_box_with_check"
            ],
            [
                "🔘",
                "radio_button"
            ],
            [
                "🔗",
                "link"
            ],
            [
                "➰",
                "curly_loop"
            ],
            [
                "〰",
                "wavy_dash"
            ],
            [
                "〽",
                "part_alternation_mark"
            ],
            [
                "🔱",
                "trident"
            ],
            [
                "◼",
                "black_medium_square"
            ],
            [
                "◻",
                "white_medium_square"
            ],
            [
                "◾",
                "black_medium_small_square"
            ],
            [
                "◽",
                "white_medium_small_square"
            ],
            [
                "▪",
                "black_small_square"
            ],
            [
                "▫",
                "white_small_square"
            ],
            [
                "🔺",
                "small_red_triangle"
            ],
            [
                "🔲",
                "black_square_button"
            ],
            [
                "🔳",
                "white_square_button"
            ],
            [
                "⚫",
                "black_circle"
            ],
            [
                "⚪",
                "white_circle"
            ],
            [
                "🔴",
                "red_circle"
            ],
            [
                "🔵",
                "large_blue_circle"
            ],
            [
                "🔻",
                "small_red_triangle_down"
            ],
            [
                "⬜",
                "white_large_square"
            ],
            [
                "⬛",
                "black_large_square"
            ],
            [
                "🔶",
                "large_orange_diamond"
            ],
            [
                "🔷",
                "large_blue_diamond"
            ],
            [
                "🔸",
                "small_orange_diamond"
            ],
            [
                "🔹",
                "small_blue_diamond"
            ]
        ],
        "name": "Symbols",
        "icon": ["🔠", "capital_abcd"]
    }
];
//# sourceMappingURL=emojis.data.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__caret_event__ = __webpack_require__(101);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__caret_event__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emoji_event__ = __webpack_require__(102);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__emoji_event__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiEmptyCategoryPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var EmojiEmptyCategoryPipe = (function () {
    function EmojiEmptyCategoryPipe() {
    }
    EmojiEmptyCategoryPipe.prototype.transform = function (categories) {
        return categories.filter(function (category) { return category.emojis.length !== 0; });
    };
    return EmojiEmptyCategoryPipe;
}());
EmojiEmptyCategoryPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Pipe */])({
        name: 'notEmptyEmojiCategory'
    })
], EmojiEmptyCategoryPipe);

//# sourceMappingURL=emoji-empty-category.pipe.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_empty_category_pipe__ = __webpack_require__(105);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PIPES; });

var PIPES = [
    __WEBPACK_IMPORTED_MODULE_0__emoji_empty_category_pipe__["a" /* EmojiEmptyCategoryPipe */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerOptions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

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
    Object.defineProperty(EmojiPickerOptions.prototype, "options", {
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    return EmojiPickerOptions;
}());
EmojiPickerOptions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], EmojiPickerOptions);

//# sourceMappingURL=emoji-picker.service.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sheet_apple_map__ = __webpack_require__(109);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__sheet_apple_map__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EmojiPickerAppleSheetLocator;
function EmojiPickerAppleSheetLocator(label) {
    if (!SHEET_APPLE_MAP_OBJECT[label]) {
        console.error('EmojiPickerAppleSheetLocator: no emoji label found for ' + label);
        return { x: 0, y: 0 };
    }
    return {
        x: SHEET_APPLE_MAP_OBJECT[label][0],
        y: SHEET_APPLE_MAP_OBJECT[label][1]
    };
}
;
var SHEET_APPLE_MAP_OBJECT = {
    "100": [
        17,
        32
    ],
    "1234": [
        19,
        48
    ],
    "copyright": [
        0,
        0
    ],
    "registered": [
        0,
        1
    ],
    "bangbang": [
        0,
        2
    ],
    "interrobang": [
        0,
        3
    ],
    "tm": [
        0,
        4
    ],
    "information_source": [
        0,
        5
    ],
    "left_right_arrow": [
        0,
        6
    ],
    "arrow_up_down": [
        0,
        7
    ],
    "arrow_upper_left": [
        0,
        8
    ],
    "arrow_upper_right": [
        0,
        9
    ],
    "arrow_lower_right": [
        0,
        10
    ],
    "arrow_lower_left": [
        0,
        11
    ],
    "leftwards_arrow_with_hook": [
        0,
        12
    ],
    "arrow_right_hook": [
        0,
        13
    ],
    "watch": [
        0,
        14
    ],
    "hourglass": [
        0,
        15
    ],
    "keyboard": [
        0,
        16
    ],
    "eject": [
        0,
        17
    ],
    "fast_forward": [
        0,
        18
    ],
    "rewind": [
        0,
        19
    ],
    "arrow_double_up": [
        0,
        20
    ],
    "arrow_double_down": [
        0,
        21
    ],
    "black_right_pointing_double_triangle_with_vertical_bar": [
        0,
        22
    ],
    "black_left_pointing_double_triangle_with_vertical_bar": [
        0,
        23
    ],
    "black_right_pointing_triangle_with_double_vertical_bar": [
        0,
        24
    ],
    "alarm_clock": [
        0,
        25
    ],
    "stopwatch": [
        0,
        26
    ],
    "timer_clock": [
        0,
        27
    ],
    "hourglass_flowing_sand": [
        0,
        28
    ],
    "double_vertical_bar": [
        0,
        29
    ],
    "black_square_for_stop": [
        0,
        30
    ],
    "black_circle_for_record": [
        0,
        31
    ],
    "m": [
        0,
        32
    ],
    "black_small_square": [
        0,
        33
    ],
    "white_small_square": [
        0,
        34
    ],
    "arrow_forward": [
        0,
        35
    ],
    "arrow_backward": [
        0,
        36
    ],
    "white_medium_square": [
        0,
        37
    ],
    "black_medium_square": [
        0,
        38
    ],
    "white_medium_small_square": [
        0,
        39
    ],
    "black_medium_small_square": [
        0,
        40
    ],
    "sunny": [
        0,
        41
    ],
    "cloud": [
        0,
        42
    ],
    "umbrella": [
        0,
        43
    ],
    "snowman": [
        0,
        44
    ],
    "comet": [
        0,
        45
    ],
    "phone": [
        0,
        46
    ],
    "ballot_box_with_check": [
        0,
        47
    ],
    "umbrella_with_rain_drops": [
        0,
        48
    ],
    "coffee": [
        1,
        0
    ],
    "shamrock": [
        1,
        1
    ],
    "point_up": [
        1,
        2
    ],
    "skull_and_crossbones": [
        1,
        8
    ],
    "radioactive_sign": [
        1,
        9
    ],
    "biohazard_sign": [
        1,
        10
    ],
    "orthodox_cross": [
        1,
        11
    ],
    "star_and_crescent": [
        1,
        12
    ],
    "peace_symbol": [
        1,
        13
    ],
    "yin_yang": [
        1,
        14
    ],
    "wheel_of_dharma": [
        1,
        15
    ],
    "white_frowning_face": [
        1,
        16
    ],
    "relaxed": [
        1,
        17
    ],
    "female_sign": [
        1,
        18
    ],
    "male_sign": [
        1,
        19
    ],
    "aries": [
        1,
        20
    ],
    "taurus": [
        1,
        21
    ],
    "gemini": [
        1,
        22
    ],
    "cancer": [
        1,
        23
    ],
    "leo": [
        1,
        24
    ],
    "virgo": [
        1,
        25
    ],
    "libra": [
        1,
        26
    ],
    "scorpius": [
        1,
        27
    ],
    "sagittarius": [
        1,
        28
    ],
    "capricorn": [
        1,
        29
    ],
    "aquarius": [
        1,
        30
    ],
    "pisces": [
        1,
        31
    ],
    "spades": [
        1,
        32
    ],
    "clubs": [
        1,
        33
    ],
    "hearts": [
        1,
        34
    ],
    "diamonds": [
        1,
        35
    ],
    "hotsprings": [
        1,
        36
    ],
    "recycle": [
        1,
        37
    ],
    "wheelchair": [
        1,
        38
    ],
    "hammer_and_pick": [
        1,
        39
    ],
    "anchor": [
        1,
        40
    ],
    "crossed_swords": [
        1,
        41
    ],
    "staff_of_aesculapius": [
        1,
        42
    ],
    "scales": [
        1,
        43
    ],
    "alembic": [
        1,
        44
    ],
    "gear": [
        1,
        45
    ],
    "atom_symbol": [
        1,
        46
    ],
    "fleur_de_lis": [
        1,
        47
    ],
    "warning": [
        1,
        48
    ],
    "zap": [
        2,
        0
    ],
    "white_circle": [
        2,
        1
    ],
    "black_circle": [
        2,
        2
    ],
    "coffin": [
        2,
        3
    ],
    "funeral_urn": [
        2,
        4
    ],
    "soccer": [
        2,
        5
    ],
    "baseball": [
        2,
        6
    ],
    "snowman_without_snow": [
        2,
        7
    ],
    "partly_sunny": [
        2,
        8
    ],
    "thunder_cloud_and_rain": [
        2,
        9
    ],
    "ophiuchus": [
        2,
        10
    ],
    "pick": [
        2,
        11
    ],
    "helmet_with_white_cross": [
        2,
        12
    ],
    "chains": [
        2,
        13
    ],
    "no_entry": [
        2,
        14
    ],
    "shinto_shrine": [
        2,
        15
    ],
    "church": [
        2,
        16
    ],
    "mountain": [
        2,
        17
    ],
    "umbrella_on_ground": [
        2,
        18
    ],
    "fountain": [
        2,
        19
    ],
    "golf": [
        2,
        20
    ],
    "ferry": [
        2,
        21
    ],
    "boat": [
        2,
        22
    ],
    "skier": [
        2,
        23
    ],
    "ice_skate": [
        2,
        24
    ],
    "person_with_ball": [
        2,
        25
    ],
    "tent": [
        2,
        31
    ],
    "fuelpump": [
        2,
        32
    ],
    "scissors": [
        2,
        33
    ],
    "white_check_mark": [
        2,
        34
    ],
    "airplane": [
        2,
        35
    ],
    "email": [
        2,
        36
    ],
    "fist": [
        2,
        37
    ],
    "hand": [
        2,
        43
    ],
    "v": [
        3,
        0
    ],
    "writing_hand": [
        3,
        6
    ],
    "pencil2": [
        3,
        12
    ],
    "black_nib": [
        3,
        13
    ],
    "heavy_check_mark": [
        3,
        14
    ],
    "heavy_multiplication_x": [
        3,
        15
    ],
    "latin_cross": [
        3,
        16
    ],
    "star_of_david": [
        3,
        17
    ],
    "sparkles": [
        3,
        18
    ],
    "eight_spoked_asterisk": [
        3,
        19
    ],
    "eight_pointed_black_star": [
        3,
        20
    ],
    "snowflake": [
        3,
        21
    ],
    "sparkle": [
        3,
        22
    ],
    "x": [
        3,
        23
    ],
    "negative_squared_cross_mark": [
        3,
        24
    ],
    "question": [
        3,
        25
    ],
    "grey_question": [
        3,
        26
    ],
    "grey_exclamation": [
        3,
        27
    ],
    "exclamation": [
        3,
        28
    ],
    "heavy_heart_exclamation_mark_ornament": [
        3,
        29
    ],
    "heart": [
        3,
        30
    ],
    "heavy_plus_sign": [
        3,
        31
    ],
    "heavy_minus_sign": [
        3,
        32
    ],
    "heavy_division_sign": [
        3,
        33
    ],
    "arrow_right": [
        3,
        34
    ],
    "curly_loop": [
        3,
        35
    ],
    "loop": [
        3,
        36
    ],
    "arrow_heading_up": [
        3,
        37
    ],
    "arrow_heading_down": [
        3,
        38
    ],
    "arrow_left": [
        3,
        39
    ],
    "arrow_up": [
        3,
        40
    ],
    "arrow_down": [
        3,
        41
    ],
    "black_large_square": [
        3,
        42
    ],
    "white_large_square": [
        3,
        43
    ],
    "star": [
        3,
        44
    ],
    "o": [
        3,
        45
    ],
    "wavy_dash": [
        3,
        46
    ],
    "part_alternation_mark": [
        3,
        47
    ],
    "congratulations": [
        3,
        48
    ],
    "secret": [
        4,
        0
    ],
    "mahjong": [
        4,
        1
    ],
    "black_joker": [
        4,
        2
    ],
    "a": [
        4,
        3
    ],
    "b": [
        4,
        4
    ],
    "o2": [
        4,
        5
    ],
    "parking": [
        4,
        6
    ],
    "ab": [
        4,
        7
    ],
    "cl": [
        4,
        8
    ],
    "cool": [
        4,
        9
    ],
    "free": [
        4,
        10
    ],
    "id": [
        4,
        11
    ],
    "new": [
        4,
        12
    ],
    "ng": [
        4,
        13
    ],
    "ok": [
        4,
        14
    ],
    "sos": [
        4,
        15
    ],
    "up": [
        4,
        16
    ],
    "vs": [
        4,
        17
    ],
    "koko": [
        4,
        18
    ],
    "sa": [
        4,
        19
    ],
    "u7121": [
        4,
        20
    ],
    "u6307": [
        4,
        21
    ],
    "u7981": [
        4,
        22
    ],
    "u7a7a": [
        4,
        23
    ],
    "u5408": [
        4,
        24
    ],
    "u6e80": [
        4,
        25
    ],
    "u6709": [
        4,
        26
    ],
    "u6708": [
        4,
        27
    ],
    "u7533": [
        4,
        28
    ],
    "u5272": [
        4,
        29
    ],
    "u55b6": [
        4,
        30
    ],
    "ideograph_advantage": [
        4,
        31
    ],
    "accept": [
        4,
        32
    ],
    "cyclone": [
        4,
        33
    ],
    "foggy": [
        4,
        34
    ],
    "closed_umbrella": [
        4,
        35
    ],
    "night_with_stars": [
        4,
        36
    ],
    "sunrise_over_mountains": [
        4,
        37
    ],
    "sunrise": [
        4,
        38
    ],
    "city_sunset": [
        4,
        39
    ],
    "city_sunrise": [
        4,
        40
    ],
    "rainbow": [
        4,
        41
    ],
    "bridge_at_night": [
        4,
        42
    ],
    "ocean": [
        4,
        43
    ],
    "volcano": [
        4,
        44
    ],
    "milky_way": [
        4,
        45
    ],
    "earth_africa": [
        4,
        46
    ],
    "earth_americas": [
        4,
        47
    ],
    "earth_asia": [
        4,
        48
    ],
    "globe_with_meridians": [
        5,
        0
    ],
    "new_moon": [
        5,
        1
    ],
    "waxing_crescent_moon": [
        5,
        2
    ],
    "first_quarter_moon": [
        5,
        3
    ],
    "moon": [
        5,
        4
    ],
    "full_moon": [
        5,
        5
    ],
    "waning_gibbous_moon": [
        5,
        6
    ],
    "last_quarter_moon": [
        5,
        7
    ],
    "waning_crescent_moon": [
        5,
        8
    ],
    "crescent_moon": [
        5,
        9
    ],
    "new_moon_with_face": [
        5,
        10
    ],
    "first_quarter_moon_with_face": [
        5,
        11
    ],
    "last_quarter_moon_with_face": [
        5,
        12
    ],
    "full_moon_with_face": [
        5,
        13
    ],
    "sun_with_face": [
        5,
        14
    ],
    "star2": [
        5,
        15
    ],
    "stars": [
        5,
        16
    ],
    "thermometer": [
        5,
        17
    ],
    "mostly_sunny": [
        5,
        18
    ],
    "barely_sunny": [
        5,
        19
    ],
    "partly_sunny_rain": [
        5,
        20
    ],
    "rain_cloud": [
        5,
        21
    ],
    "snow_cloud": [
        5,
        22
    ],
    "lightning": [
        5,
        23
    ],
    "tornado": [
        5,
        24
    ],
    "fog": [
        5,
        25
    ],
    "wind_blowing_face": [
        5,
        26
    ],
    "hotdog": [
        5,
        27
    ],
    "taco": [
        5,
        28
    ],
    "burrito": [
        5,
        29
    ],
    "chestnut": [
        5,
        30
    ],
    "seedling": [
        5,
        31
    ],
    "evergreen_tree": [
        5,
        32
    ],
    "deciduous_tree": [
        5,
        33
    ],
    "palm_tree": [
        5,
        34
    ],
    "cactus": [
        5,
        35
    ],
    "hot_pepper": [
        5,
        36
    ],
    "tulip": [
        5,
        37
    ],
    "cherry_blossom": [
        5,
        38
    ],
    "rose": [
        5,
        39
    ],
    "hibiscus": [
        5,
        40
    ],
    "sunflower": [
        5,
        41
    ],
    "blossom": [
        5,
        42
    ],
    "corn": [
        5,
        43
    ],
    "ear_of_rice": [
        5,
        44
    ],
    "herb": [
        5,
        45
    ],
    "four_leaf_clover": [
        5,
        46
    ],
    "maple_leaf": [
        5,
        47
    ],
    "fallen_leaf": [
        5,
        48
    ],
    "leaves": [
        6,
        0
    ],
    "mushroom": [
        6,
        1
    ],
    "tomato": [
        6,
        2
    ],
    "eggplant": [
        6,
        3
    ],
    "grapes": [
        6,
        4
    ],
    "melon": [
        6,
        5
    ],
    "watermelon": [
        6,
        6
    ],
    "tangerine": [
        6,
        7
    ],
    "lemon": [
        6,
        8
    ],
    "banana": [
        6,
        9
    ],
    "pineapple": [
        6,
        10
    ],
    "apple": [
        6,
        11
    ],
    "green_apple": [
        6,
        12
    ],
    "pear": [
        6,
        13
    ],
    "peach": [
        6,
        14
    ],
    "cherries": [
        6,
        15
    ],
    "strawberry": [
        6,
        16
    ],
    "hamburger": [
        6,
        17
    ],
    "pizza": [
        6,
        18
    ],
    "meat_on_bone": [
        6,
        19
    ],
    "poultry_leg": [
        6,
        20
    ],
    "rice_cracker": [
        6,
        21
    ],
    "rice_ball": [
        6,
        22
    ],
    "rice": [
        6,
        23
    ],
    "curry": [
        6,
        24
    ],
    "ramen": [
        6,
        25
    ],
    "spaghetti": [
        6,
        26
    ],
    "bread": [
        6,
        27
    ],
    "fries": [
        6,
        28
    ],
    "sweet_potato": [
        6,
        29
    ],
    "dango": [
        6,
        30
    ],
    "oden": [
        6,
        31
    ],
    "sushi": [
        6,
        32
    ],
    "fried_shrimp": [
        6,
        33
    ],
    "fish_cake": [
        6,
        34
    ],
    "icecream": [
        6,
        35
    ],
    "shaved_ice": [
        6,
        36
    ],
    "ice_cream": [
        6,
        37
    ],
    "doughnut": [
        6,
        38
    ],
    "cookie": [
        6,
        39
    ],
    "chocolate_bar": [
        6,
        40
    ],
    "candy": [
        6,
        41
    ],
    "lollipop": [
        6,
        42
    ],
    "custard": [
        6,
        43
    ],
    "honey_pot": [
        6,
        44
    ],
    "cake": [
        6,
        45
    ],
    "bento": [
        6,
        46
    ],
    "stew": [
        6,
        47
    ],
    "fried_egg": [
        6,
        48
    ],
    "fork_and_knife": [
        7,
        0
    ],
    "tea": [
        7,
        1
    ],
    "sake": [
        7,
        2
    ],
    "wine_glass": [
        7,
        3
    ],
    "cocktail": [
        7,
        4
    ],
    "tropical_drink": [
        7,
        5
    ],
    "beer": [
        7,
        6
    ],
    "beers": [
        7,
        7
    ],
    "baby_bottle": [
        7,
        8
    ],
    "knife_fork_plate": [
        7,
        9
    ],
    "champagne": [
        7,
        10
    ],
    "popcorn": [
        7,
        11
    ],
    "ribbon": [
        7,
        12
    ],
    "gift": [
        7,
        13
    ],
    "birthday": [
        7,
        14
    ],
    "jack_o_lantern": [
        7,
        15
    ],
    "christmas_tree": [
        7,
        16
    ],
    "santa": [
        7,
        17
    ],
    "fireworks": [
        7,
        23
    ],
    "sparkler": [
        7,
        24
    ],
    "balloon": [
        7,
        25
    ],
    "tada": [
        7,
        26
    ],
    "confetti_ball": [
        7,
        27
    ],
    "tanabata_tree": [
        7,
        28
    ],
    "crossed_flags": [
        7,
        29
    ],
    "bamboo": [
        7,
        30
    ],
    "dolls": [
        7,
        31
    ],
    "flags": [
        7,
        32
    ],
    "wind_chime": [
        7,
        33
    ],
    "rice_scene": [
        7,
        34
    ],
    "school_satchel": [
        7,
        35
    ],
    "mortar_board": [
        7,
        36
    ],
    "medal": [
        7,
        37
    ],
    "reminder_ribbon": [
        7,
        38
    ],
    "studio_microphone": [
        7,
        39
    ],
    "level_slider": [
        7,
        40
    ],
    "control_knobs": [
        7,
        41
    ],
    "film_frames": [
        7,
        42
    ],
    "admission_tickets": [
        7,
        43
    ],
    "carousel_horse": [
        7,
        44
    ],
    "ferris_wheel": [
        7,
        45
    ],
    "roller_coaster": [
        7,
        46
    ],
    "fishing_pole_and_fish": [
        7,
        47
    ],
    "microphone": [
        7,
        48
    ],
    "movie_camera": [
        8,
        0
    ],
    "cinema": [
        8,
        1
    ],
    "headphones": [
        8,
        2
    ],
    "art": [
        8,
        3
    ],
    "tophat": [
        8,
        4
    ],
    "circus_tent": [
        8,
        5
    ],
    "ticket": [
        8,
        6
    ],
    "clapper": [
        8,
        7
    ],
    "performing_arts": [
        8,
        8
    ],
    "video_game": [
        8,
        9
    ],
    "dart": [
        8,
        10
    ],
    "slot_machine": [
        8,
        11
    ],
    "8ball": [
        8,
        12
    ],
    "game_die": [
        8,
        13
    ],
    "bowling": [
        8,
        14
    ],
    "flower_playing_cards": [
        8,
        15
    ],
    "musical_note": [
        8,
        16
    ],
    "notes": [
        8,
        17
    ],
    "saxophone": [
        8,
        18
    ],
    "guitar": [
        8,
        19
    ],
    "musical_keyboard": [
        8,
        20
    ],
    "trumpet": [
        8,
        21
    ],
    "violin": [
        8,
        22
    ],
    "musical_score": [
        8,
        23
    ],
    "running_shirt_with_sash": [
        8,
        24
    ],
    "tennis": [
        8,
        25
    ],
    "ski": [
        8,
        26
    ],
    "basketball": [
        8,
        27
    ],
    "checkered_flag": [
        8,
        28
    ],
    "snowboarder": [
        8,
        29
    ],
    "runner": [
        8,
        35
    ],
    "surfer": [
        8,
        41
    ],
    "sports_medal": [
        8,
        47
    ],
    "trophy": [
        8,
        48
    ],
    "horse_racing": [
        9,
        0
    ],
    "football": [
        9,
        6
    ],
    "rugby_football": [
        9,
        7
    ],
    "swimmer": [
        9,
        8
    ],
    "weight_lifter": [
        9,
        14
    ],
    "golfer": [
        9,
        20
    ],
    "racing_motorcycle": [
        9,
        26
    ],
    "racing_car": [
        9,
        27
    ],
    "cricket_bat_and_ball": [
        9,
        28
    ],
    "volleyball": [
        9,
        29
    ],
    "field_hockey_stick_and_ball": [
        9,
        30
    ],
    "ice_hockey_stick_and_puck": [
        9,
        31
    ],
    "table_tennis_paddle_and_ball": [
        9,
        32
    ],
    "snow_capped_mountain": [
        9,
        33
    ],
    "camping": [
        9,
        34
    ],
    "beach_with_umbrella": [
        9,
        35
    ],
    "building_construction": [
        9,
        36
    ],
    "house_buildings": [
        9,
        37
    ],
    "cityscape": [
        9,
        38
    ],
    "derelict_house_building": [
        9,
        39
    ],
    "classical_building": [
        9,
        40
    ],
    "desert": [
        9,
        41
    ],
    "desert_island": [
        9,
        42
    ],
    "national_park": [
        9,
        43
    ],
    "stadium": [
        9,
        44
    ],
    "house": [
        9,
        45
    ],
    "house_with_garden": [
        9,
        46
    ],
    "office": [
        9,
        47
    ],
    "post_office": [
        9,
        48
    ],
    "european_post_office": [
        10,
        0
    ],
    "hospital": [
        10,
        1
    ],
    "bank": [
        10,
        2
    ],
    "atm": [
        10,
        3
    ],
    "hotel": [
        10,
        4
    ],
    "love_hotel": [
        10,
        5
    ],
    "convenience_store": [
        10,
        6
    ],
    "school": [
        10,
        7
    ],
    "department_store": [
        10,
        8
    ],
    "factory": [
        10,
        9
    ],
    "izakaya_lantern": [
        10,
        10
    ],
    "japanese_castle": [
        10,
        11
    ],
    "european_castle": [
        10,
        12
    ],
    "waving_white_flag": [
        10,
        13
    ],
    "waving_black_flag": [
        10,
        14
    ],
    "rosette": [
        10,
        15
    ],
    "label": [
        10,
        16
    ],
    "badminton_racquet_and_shuttlecock": [
        10,
        17
    ],
    "bow_and_arrow": [
        10,
        18
    ],
    "amphora": [
        10,
        19
    ],
    "skin-tone-2": [
        10,
        20
    ],
    "skin-tone-3": [
        10,
        21
    ],
    "skin-tone-4": [
        10,
        22
    ],
    "skin-tone-5": [
        10,
        23
    ],
    "skin-tone-6": [
        10,
        24
    ],
    "rat": [
        10,
        25
    ],
    "mouse2": [
        10,
        26
    ],
    "ox": [
        10,
        27
    ],
    "water_buffalo": [
        10,
        28
    ],
    "cow2": [
        10,
        29
    ],
    "tiger2": [
        10,
        30
    ],
    "leopard": [
        10,
        31
    ],
    "rabbit2": [
        10,
        32
    ],
    "cat2": [
        10,
        33
    ],
    "dragon": [
        10,
        34
    ],
    "crocodile": [
        10,
        35
    ],
    "whale2": [
        10,
        36
    ],
    "snail": [
        10,
        37
    ],
    "snake": [
        10,
        38
    ],
    "racehorse": [
        10,
        39
    ],
    "ram": [
        10,
        40
    ],
    "goat": [
        10,
        41
    ],
    "sheep": [
        10,
        42
    ],
    "monkey": [
        10,
        43
    ],
    "rooster": [
        10,
        44
    ],
    "chicken": [
        10,
        45
    ],
    "dog2": [
        10,
        46
    ],
    "pig2": [
        10,
        47
    ],
    "boar": [
        10,
        48
    ],
    "elephant": [
        11,
        0
    ],
    "octopus": [
        11,
        1
    ],
    "shell": [
        11,
        2
    ],
    "bug": [
        11,
        3
    ],
    "ant": [
        11,
        4
    ],
    "bee": [
        11,
        5
    ],
    "beetle": [
        11,
        6
    ],
    "fish": [
        11,
        7
    ],
    "tropical_fish": [
        11,
        8
    ],
    "blowfish": [
        11,
        9
    ],
    "turtle": [
        11,
        10
    ],
    "hatching_chick": [
        11,
        11
    ],
    "baby_chick": [
        11,
        12
    ],
    "hatched_chick": [
        11,
        13
    ],
    "bird": [
        11,
        14
    ],
    "penguin": [
        11,
        15
    ],
    "koala": [
        11,
        16
    ],
    "poodle": [
        11,
        17
    ],
    "dromedary_camel": [
        11,
        18
    ],
    "camel": [
        11,
        19
    ],
    "dolphin": [
        11,
        20
    ],
    "mouse": [
        11,
        21
    ],
    "cow": [
        11,
        22
    ],
    "tiger": [
        11,
        23
    ],
    "rabbit": [
        11,
        24
    ],
    "cat": [
        11,
        25
    ],
    "dragon_face": [
        11,
        26
    ],
    "whale": [
        11,
        27
    ],
    "horse": [
        11,
        28
    ],
    "monkey_face": [
        11,
        29
    ],
    "dog": [
        11,
        30
    ],
    "pig": [
        11,
        31
    ],
    "frog": [
        11,
        32
    ],
    "hamster": [
        11,
        33
    ],
    "wolf": [
        11,
        34
    ],
    "bear": [
        11,
        35
    ],
    "panda_face": [
        11,
        36
    ],
    "pig_nose": [
        11,
        37
    ],
    "feet": [
        11,
        38
    ],
    "chipmunk": [
        11,
        39
    ],
    "eyes": [
        11,
        40
    ],
    "eye": [
        11,
        41
    ],
    "ear": [
        11,
        42
    ],
    "nose": [
        11,
        48
    ],
    "lips": [
        12,
        5
    ],
    "tongue": [
        12,
        6
    ],
    "point_up_2": [
        12,
        7
    ],
    "point_down": [
        12,
        13
    ],
    "point_left": [
        12,
        19
    ],
    "point_right": [
        12,
        25
    ],
    "facepunch": [
        12,
        31
    ],
    "wave": [
        12,
        37
    ],
    "ok_hand": [
        12,
        43
    ],
    "+1": [
        13,
        0
    ],
    "-1": [
        13,
        6
    ],
    "clap": [
        13,
        12
    ],
    "open_hands": [
        13,
        18
    ],
    "crown": [
        13,
        24
    ],
    "womans_hat": [
        13,
        25
    ],
    "eyeglasses": [
        13,
        26
    ],
    "necktie": [
        13,
        27
    ],
    "shirt": [
        13,
        28
    ],
    "jeans": [
        13,
        29
    ],
    "dress": [
        13,
        30
    ],
    "kimono": [
        13,
        31
    ],
    "bikini": [
        13,
        32
    ],
    "womans_clothes": [
        13,
        33
    ],
    "purse": [
        13,
        34
    ],
    "handbag": [
        13,
        35
    ],
    "pouch": [
        13,
        36
    ],
    "mans_shoe": [
        13,
        37
    ],
    "athletic_shoe": [
        13,
        38
    ],
    "high_heel": [
        13,
        39
    ],
    "sandal": [
        13,
        40
    ],
    "boot": [
        13,
        41
    ],
    "footprints": [
        13,
        42
    ],
    "bust_in_silhouette": [
        13,
        43
    ],
    "busts_in_silhouette": [
        13,
        44
    ],
    "boy": [
        13,
        45
    ],
    "girl": [
        14,
        2
    ],
    "man": [
        14,
        8
    ],
    "woman": [
        14,
        14
    ],
    "family": [
        14,
        20
    ],
    "couple": [
        14,
        21
    ],
    "two_men_holding_hands": [
        14,
        22
    ],
    "two_women_holding_hands": [
        14,
        23
    ],
    "cop": [
        14,
        24
    ],
    "dancers": [
        14,
        30
    ],
    "bride_with_veil": [
        14,
        31
    ],
    "person_with_blond_hair": [
        14,
        37
    ],
    "man_with_gua_pi_mao": [
        14,
        43
    ],
    "man_with_turban": [
        15,
        0
    ],
    "older_man": [
        15,
        6
    ],
    "older_woman": [
        15,
        12
    ],
    "baby": [
        15,
        18
    ],
    "construction_worker": [
        15,
        24
    ],
    "princess": [
        15,
        30
    ],
    "japanese_ogre": [
        15,
        36
    ],
    "japanese_goblin": [
        15,
        37
    ],
    "ghost": [
        15,
        38
    ],
    "angel": [
        15,
        39
    ],
    "alien": [
        15,
        45
    ],
    "space_invader": [
        15,
        46
    ],
    "imp": [
        15,
        47
    ],
    "skull": [
        15,
        48
    ],
    "information_desk_person": [
        16,
        0
    ],
    "guardsman": [
        16,
        6
    ],
    "dancer": [
        16,
        12
    ],
    "lipstick": [
        16,
        18
    ],
    "nail_care": [
        16,
        19
    ],
    "massage": [
        16,
        25
    ],
    "haircut": [
        16,
        31
    ],
    "barber": [
        16,
        37
    ],
    "syringe": [
        16,
        38
    ],
    "pill": [
        16,
        39
    ],
    "kiss": [
        16,
        40
    ],
    "love_letter": [
        16,
        41
    ],
    "ring": [
        16,
        42
    ],
    "gem": [
        16,
        43
    ],
    "couplekiss": [
        16,
        44
    ],
    "bouquet": [
        16,
        45
    ],
    "couple_with_heart": [
        16,
        46
    ],
    "wedding": [
        16,
        47
    ],
    "heartbeat": [
        16,
        48
    ],
    "broken_heart": [
        17,
        0
    ],
    "two_hearts": [
        17,
        1
    ],
    "sparkling_heart": [
        17,
        2
    ],
    "heartpulse": [
        17,
        3
    ],
    "cupid": [
        17,
        4
    ],
    "blue_heart": [
        17,
        5
    ],
    "green_heart": [
        17,
        6
    ],
    "yellow_heart": [
        17,
        7
    ],
    "purple_heart": [
        17,
        8
    ],
    "gift_heart": [
        17,
        9
    ],
    "revolving_hearts": [
        17,
        10
    ],
    "heart_decoration": [
        17,
        11
    ],
    "diamond_shape_with_a_dot_inside": [
        17,
        12
    ],
    "bulb": [
        17,
        13
    ],
    "anger": [
        17,
        14
    ],
    "bomb": [
        17,
        15
    ],
    "zzz": [
        17,
        16
    ],
    "boom": [
        17,
        17
    ],
    "sweat_drops": [
        17,
        18
    ],
    "droplet": [
        17,
        19
    ],
    "dash": [
        17,
        20
    ],
    "hankey": [
        17,
        21
    ],
    "muscle": [
        17,
        22
    ],
    "dizzy": [
        17,
        28
    ],
    "speech_balloon": [
        17,
        29
    ],
    "thought_balloon": [
        17,
        30
    ],
    "white_flower": [
        17,
        31
    ],
    "moneybag": [
        17,
        33
    ],
    "currency_exchange": [
        17,
        34
    ],
    "heavy_dollar_sign": [
        17,
        35
    ],
    "credit_card": [
        17,
        36
    ],
    "yen": [
        17,
        37
    ],
    "dollar": [
        17,
        38
    ],
    "euro": [
        17,
        39
    ],
    "pound": [
        17,
        40
    ],
    "money_with_wings": [
        17,
        41
    ],
    "chart": [
        17,
        42
    ],
    "seat": [
        17,
        43
    ],
    "computer": [
        17,
        44
    ],
    "briefcase": [
        17,
        45
    ],
    "minidisc": [
        17,
        46
    ],
    "floppy_disk": [
        17,
        47
    ],
    "cd": [
        17,
        48
    ],
    "dvd": [
        18,
        0
    ],
    "file_folder": [
        18,
        1
    ],
    "open_file_folder": [
        18,
        2
    ],
    "page_with_curl": [
        18,
        3
    ],
    "page_facing_up": [
        18,
        4
    ],
    "date": [
        18,
        5
    ],
    "calendar": [
        18,
        6
    ],
    "card_index": [
        18,
        7
    ],
    "chart_with_upwards_trend": [
        18,
        8
    ],
    "chart_with_downwards_trend": [
        18,
        9
    ],
    "bar_chart": [
        18,
        10
    ],
    "clipboard": [
        18,
        11
    ],
    "pushpin": [
        18,
        12
    ],
    "round_pushpin": [
        18,
        13
    ],
    "paperclip": [
        18,
        14
    ],
    "straight_ruler": [
        18,
        15
    ],
    "triangular_ruler": [
        18,
        16
    ],
    "bookmark_tabs": [
        18,
        17
    ],
    "ledger": [
        18,
        18
    ],
    "notebook": [
        18,
        19
    ],
    "notebook_with_decorative_cover": [
        18,
        20
    ],
    "closed_book": [
        18,
        21
    ],
    "book": [
        18,
        22
    ],
    "green_book": [
        18,
        23
    ],
    "blue_book": [
        18,
        24
    ],
    "orange_book": [
        18,
        25
    ],
    "books": [
        18,
        26
    ],
    "name_badge": [
        18,
        27
    ],
    "scroll": [
        18,
        28
    ],
    "memo": [
        18,
        29
    ],
    "telephone_receiver": [
        18,
        30
    ],
    "pager": [
        18,
        31
    ],
    "fax": [
        18,
        32
    ],
    "satellite_antenna": [
        18,
        33
    ],
    "loudspeaker": [
        18,
        34
    ],
    "mega": [
        18,
        35
    ],
    "outbox_tray": [
        18,
        36
    ],
    "inbox_tray": [
        18,
        37
    ],
    "package": [
        18,
        38
    ],
    "e-mail": [
        18,
        39
    ],
    "incoming_envelope": [
        18,
        40
    ],
    "envelope_with_arrow": [
        18,
        41
    ],
    "mailbox_closed": [
        18,
        42
    ],
    "mailbox": [
        18,
        43
    ],
    "mailbox_with_mail": [
        18,
        44
    ],
    "mailbox_with_no_mail": [
        18,
        45
    ],
    "postbox": [
        18,
        46
    ],
    "postal_horn": [
        18,
        47
    ],
    "newspaper": [
        18,
        48
    ],
    "iphone": [
        19,
        0
    ],
    "calling": [
        19,
        1
    ],
    "vibration_mode": [
        19,
        2
    ],
    "mobile_phone_off": [
        19,
        3
    ],
    "no_mobile_phones": [
        19,
        4
    ],
    "signal_strength": [
        19,
        5
    ],
    "camera": [
        19,
        6
    ],
    "camera_with_flash": [
        19,
        7
    ],
    "video_camera": [
        19,
        8
    ],
    "tv": [
        19,
        9
    ],
    "radio": [
        19,
        10
    ],
    "vhs": [
        19,
        11
    ],
    "film_projector": [
        19,
        12
    ],
    "prayer_beads": [
        19,
        13
    ],
    "twisted_rightwards_arrows": [
        19,
        14
    ],
    "repeat": [
        19,
        15
    ],
    "repeat_one": [
        19,
        16
    ],
    "arrows_clockwise": [
        19,
        17
    ],
    "arrows_counterclockwise": [
        19,
        18
    ],
    "low_brightness": [
        19,
        19
    ],
    "high_brightness": [
        19,
        20
    ],
    "mute": [
        19,
        21
    ],
    "speaker": [
        19,
        22
    ],
    "sound": [
        19,
        23
    ],
    "loud_sound": [
        19,
        24
    ],
    "battery": [
        19,
        25
    ],
    "electric_plug": [
        19,
        26
    ],
    "mag": [
        19,
        27
    ],
    "mag_right": [
        19,
        28
    ],
    "lock_with_ink_pen": [
        19,
        29
    ],
    "closed_lock_with_key": [
        19,
        30
    ],
    "key": [
        19,
        31
    ],
    "lock": [
        19,
        32
    ],
    "unlock": [
        19,
        33
    ],
    "bell": [
        19,
        34
    ],
    "no_bell": [
        19,
        35
    ],
    "bookmark": [
        19,
        36
    ],
    "link": [
        19,
        37
    ],
    "radio_button": [
        19,
        38
    ],
    "back": [
        19,
        39
    ],
    "end": [
        19,
        40
    ],
    "on": [
        19,
        41
    ],
    "soon": [
        19,
        42
    ],
    "top": [
        19,
        43
    ],
    "underage": [
        19,
        44
    ],
    "keycap_ten": [
        19,
        45
    ],
    "capital_abcd": [
        19,
        46
    ],
    "abcd": [
        19,
        47
    ],
    "symbols": [
        20,
        0
    ],
    "abc": [
        20,
        1
    ],
    "fire": [
        20,
        2
    ],
    "flashlight": [
        20,
        3
    ],
    "wrench": [
        20,
        4
    ],
    "hammer": [
        20,
        5
    ],
    "nut_and_bolt": [
        20,
        6
    ],
    "hocho": [
        20,
        7
    ],
    "gun": [
        20,
        8
    ],
    "microscope": [
        20,
        9
    ],
    "telescope": [
        20,
        10
    ],
    "crystal_ball": [
        20,
        11
    ],
    "six_pointed_star": [
        20,
        12
    ],
    "beginner": [
        20,
        13
    ],
    "trident": [
        20,
        14
    ],
    "black_square_button": [
        20,
        15
    ],
    "white_square_button": [
        20,
        16
    ],
    "red_circle": [
        20,
        17
    ],
    "large_blue_circle": [
        20,
        18
    ],
    "large_orange_diamond": [
        20,
        19
    ],
    "large_blue_diamond": [
        20,
        20
    ],
    "small_orange_diamond": [
        20,
        21
    ],
    "small_blue_diamond": [
        20,
        22
    ],
    "small_red_triangle": [
        20,
        23
    ],
    "small_red_triangle_down": [
        20,
        24
    ],
    "arrow_up_small": [
        20,
        25
    ],
    "arrow_down_small": [
        20,
        26
    ],
    "om_symbol": [
        20,
        27
    ],
    "dove_of_peace": [
        20,
        28
    ],
    "kaaba": [
        20,
        29
    ],
    "mosque": [
        20,
        30
    ],
    "synagogue": [
        20,
        31
    ],
    "menorah_with_nine_branches": [
        20,
        32
    ],
    "clock1": [
        20,
        33
    ],
    "clock2": [
        20,
        34
    ],
    "clock3": [
        20,
        35
    ],
    "clock4": [
        20,
        36
    ],
    "clock5": [
        20,
        37
    ],
    "clock6": [
        20,
        38
    ],
    "clock7": [
        20,
        39
    ],
    "clock8": [
        20,
        40
    ],
    "clock9": [
        20,
        41
    ],
    "clock10": [
        20,
        42
    ],
    "clock11": [
        20,
        43
    ],
    "clock12": [
        20,
        44
    ],
    "clock130": [
        20,
        45
    ],
    "clock230": [
        20,
        46
    ],
    "clock330": [
        20,
        47
    ],
    "clock430": [
        20,
        48
    ],
    "clock530": [
        21,
        0
    ],
    "clock630": [
        21,
        1
    ],
    "clock730": [
        21,
        2
    ],
    "clock830": [
        21,
        3
    ],
    "clock930": [
        21,
        4
    ],
    "clock1030": [
        21,
        5
    ],
    "clock1130": [
        21,
        6
    ],
    "clock1230": [
        21,
        7
    ],
    "candle": [
        21,
        8
    ],
    "mantelpiece_clock": [
        21,
        9
    ],
    "hole": [
        21,
        10
    ],
    "man_in_business_suit_levitating": [
        21,
        11
    ],
    "sleuth_or_spy": [
        21,
        17
    ],
    "dark_sunglasses": [
        21,
        23
    ],
    "spider": [
        21,
        24
    ],
    "spider_web": [
        21,
        25
    ],
    "joystick": [
        21,
        26
    ],
    "man_dancing": [
        21,
        27
    ],
    "linked_paperclips": [
        21,
        33
    ],
    "lower_left_ballpoint_pen": [
        21,
        34
    ],
    "lower_left_fountain_pen": [
        21,
        35
    ],
    "lower_left_paintbrush": [
        21,
        36
    ],
    "lower_left_crayon": [
        21,
        37
    ],
    "raised_hand_with_fingers_splayed": [
        21,
        38
    ],
    "middle_finger": [
        21,
        44
    ],
    "spock-hand": [
        22,
        1
    ],
    "black_heart": [
        22,
        7
    ],
    "desktop_computer": [
        22,
        8
    ],
    "printer": [
        22,
        9
    ],
    "three_button_mouse": [
        22,
        10
    ],
    "trackball": [
        22,
        11
    ],
    "frame_with_picture": [
        22,
        12
    ],
    "card_index_dividers": [
        22,
        13
    ],
    "card_file_box": [
        22,
        14
    ],
    "file_cabinet": [
        22,
        15
    ],
    "wastebasket": [
        22,
        16
    ],
    "spiral_note_pad": [
        22,
        17
    ],
    "spiral_calendar_pad": [
        22,
        18
    ],
    "compression": [
        22,
        19
    ],
    "old_key": [
        22,
        20
    ],
    "rolled_up_newspaper": [
        22,
        21
    ],
    "dagger_knife": [
        22,
        22
    ],
    "speaking_head_in_silhouette": [
        22,
        23
    ],
    "left_speech_bubble": [
        22,
        24
    ],
    "right_anger_bubble": [
        22,
        25
    ],
    "ballot_box_with_ballot": [
        22,
        26
    ],
    "world_map": [
        22,
        27
    ],
    "mount_fuji": [
        22,
        28
    ],
    "tokyo_tower": [
        22,
        29
    ],
    "statue_of_liberty": [
        22,
        30
    ],
    "japan": [
        22,
        31
    ],
    "moyai": [
        22,
        32
    ],
    "grinning": [
        22,
        33
    ],
    "grin": [
        22,
        34
    ],
    "joy": [
        22,
        35
    ],
    "smiley": [
        22,
        36
    ],
    "smile": [
        22,
        37
    ],
    "sweat_smile": [
        22,
        38
    ],
    "laughing": [
        22,
        39
    ],
    "innocent": [
        22,
        40
    ],
    "smiling_imp": [
        22,
        41
    ],
    "wink": [
        22,
        42
    ],
    "blush": [
        22,
        43
    ],
    "yum": [
        22,
        44
    ],
    "relieved": [
        22,
        45
    ],
    "heart_eyes": [
        22,
        46
    ],
    "sunglasses": [
        22,
        47
    ],
    "smirk": [
        22,
        48
    ],
    "neutral_face": [
        23,
        0
    ],
    "expressionless": [
        23,
        1
    ],
    "unamused": [
        23,
        2
    ],
    "sweat": [
        23,
        3
    ],
    "pensive": [
        23,
        4
    ],
    "confused": [
        23,
        5
    ],
    "confounded": [
        23,
        6
    ],
    "kissing": [
        23,
        7
    ],
    "kissing_heart": [
        23,
        8
    ],
    "kissing_smiling_eyes": [
        23,
        9
    ],
    "kissing_closed_eyes": [
        23,
        10
    ],
    "stuck_out_tongue": [
        23,
        11
    ],
    "stuck_out_tongue_winking_eye": [
        23,
        12
    ],
    "stuck_out_tongue_closed_eyes": [
        23,
        13
    ],
    "disappointed": [
        23,
        14
    ],
    "worried": [
        23,
        15
    ],
    "angry": [
        23,
        16
    ],
    "rage": [
        23,
        17
    ],
    "cry": [
        23,
        18
    ],
    "persevere": [
        23,
        19
    ],
    "triumph": [
        23,
        20
    ],
    "disappointed_relieved": [
        23,
        21
    ],
    "frowning": [
        23,
        22
    ],
    "anguished": [
        23,
        23
    ],
    "fearful": [
        23,
        24
    ],
    "weary": [
        23,
        25
    ],
    "sleepy": [
        23,
        26
    ],
    "tired_face": [
        23,
        27
    ],
    "grimacing": [
        23,
        28
    ],
    "sob": [
        23,
        29
    ],
    "open_mouth": [
        23,
        30
    ],
    "hushed": [
        23,
        31
    ],
    "cold_sweat": [
        23,
        32
    ],
    "scream": [
        23,
        33
    ],
    "astonished": [
        23,
        34
    ],
    "flushed": [
        23,
        35
    ],
    "sleeping": [
        23,
        36
    ],
    "dizzy_face": [
        23,
        37
    ],
    "no_mouth": [
        23,
        38
    ],
    "mask": [
        23,
        39
    ],
    "smile_cat": [
        23,
        40
    ],
    "joy_cat": [
        23,
        41
    ],
    "smiley_cat": [
        23,
        42
    ],
    "heart_eyes_cat": [
        23,
        43
    ],
    "smirk_cat": [
        23,
        44
    ],
    "kissing_cat": [
        23,
        45
    ],
    "pouting_cat": [
        23,
        46
    ],
    "crying_cat_face": [
        23,
        47
    ],
    "scream_cat": [
        23,
        48
    ],
    "slightly_frowning_face": [
        24,
        0
    ],
    "slightly_smiling_face": [
        24,
        1
    ],
    "upside_down_face": [
        24,
        2
    ],
    "face_with_rolling_eyes": [
        24,
        3
    ],
    "no_good": [
        24,
        4
    ],
    "ok_woman": [
        24,
        10
    ],
    "bow": [
        24,
        16
    ],
    "see_no_evil": [
        24,
        22
    ],
    "hear_no_evil": [
        24,
        23
    ],
    "speak_no_evil": [
        24,
        24
    ],
    "raising_hand": [
        24,
        25
    ],
    "raised_hands": [
        24,
        31
    ],
    "person_frowning": [
        24,
        37
    ],
    "person_with_pouting_face": [
        24,
        43
    ],
    "pray": [
        25,
        0
    ],
    "rocket": [
        25,
        6
    ],
    "helicopter": [
        25,
        7
    ],
    "steam_locomotive": [
        25,
        8
    ],
    "railway_car": [
        25,
        9
    ],
    "bullettrain_side": [
        25,
        10
    ],
    "bullettrain_front": [
        25,
        11
    ],
    "train2": [
        25,
        12
    ],
    "metro": [
        25,
        13
    ],
    "light_rail": [
        25,
        14
    ],
    "station": [
        25,
        15
    ],
    "tram": [
        25,
        16
    ],
    "train": [
        25,
        17
    ],
    "bus": [
        25,
        18
    ],
    "oncoming_bus": [
        25,
        19
    ],
    "trolleybus": [
        25,
        20
    ],
    "busstop": [
        25,
        21
    ],
    "minibus": [
        25,
        22
    ],
    "ambulance": [
        25,
        23
    ],
    "fire_engine": [
        25,
        24
    ],
    "police_car": [
        25,
        25
    ],
    "oncoming_police_car": [
        25,
        26
    ],
    "taxi": [
        25,
        27
    ],
    "oncoming_taxi": [
        25,
        28
    ],
    "car": [
        25,
        29
    ],
    "oncoming_automobile": [
        25,
        30
    ],
    "blue_car": [
        25,
        31
    ],
    "truck": [
        25,
        32
    ],
    "articulated_lorry": [
        25,
        33
    ],
    "tractor": [
        25,
        34
    ],
    "monorail": [
        25,
        35
    ],
    "mountain_railway": [
        25,
        36
    ],
    "suspension_railway": [
        25,
        37
    ],
    "mountain_cableway": [
        25,
        38
    ],
    "aerial_tramway": [
        25,
        39
    ],
    "ship": [
        25,
        40
    ],
    "rowboat": [
        25,
        41
    ],
    "speedboat": [
        25,
        47
    ],
    "traffic_light": [
        25,
        48
    ],
    "vertical_traffic_light": [
        26,
        0
    ],
    "construction": [
        26,
        1
    ],
    "rotating_light": [
        26,
        2
    ],
    "triangular_flag_on_post": [
        26,
        3
    ],
    "door": [
        26,
        4
    ],
    "no_entry_sign": [
        26,
        5
    ],
    "smoking": [
        26,
        6
    ],
    "no_smoking": [
        26,
        7
    ],
    "put_litter_in_its_place": [
        26,
        8
    ],
    "do_not_litter": [
        26,
        9
    ],
    "potable_water": [
        26,
        10
    ],
    "non-potable_water": [
        26,
        11
    ],
    "bike": [
        26,
        12
    ],
    "no_bicycles": [
        26,
        13
    ],
    "bicyclist": [
        26,
        14
    ],
    "mountain_bicyclist": [
        26,
        20
    ],
    "walking": [
        26,
        26
    ],
    "no_pedestrians": [
        26,
        32
    ],
    "children_crossing": [
        26,
        33
    ],
    "mens": [
        26,
        34
    ],
    "womens": [
        26,
        35
    ],
    "restroom": [
        26,
        36
    ],
    "baby_symbol": [
        26,
        37
    ],
    "toilet": [
        26,
        38
    ],
    "wc": [
        26,
        39
    ],
    "shower": [
        26,
        40
    ],
    "bath": [
        26,
        41
    ],
    "bathtub": [
        26,
        47
    ],
    "passport_control": [
        26,
        48
    ],
    "customs": [
        27,
        0
    ],
    "baggage_claim": [
        27,
        1
    ],
    "left_luggage": [
        27,
        2
    ],
    "couch_and_lamp": [
        27,
        3
    ],
    "sleeping_accommodation": [
        27,
        4
    ],
    "shopping_bags": [
        27,
        10
    ],
    "bellhop_bell": [
        27,
        11
    ],
    "bed": [
        27,
        12
    ],
    "place_of_worship": [
        27,
        13
    ],
    "octagonal_sign": [
        27,
        14
    ],
    "shopping_trolley": [
        27,
        15
    ],
    "hammer_and_wrench": [
        27,
        16
    ],
    "shield": [
        27,
        17
    ],
    "oil_drum": [
        27,
        18
    ],
    "motorway": [
        27,
        19
    ],
    "railway_track": [
        27,
        20
    ],
    "motor_boat": [
        27,
        21
    ],
    "small_airplane": [
        27,
        22
    ],
    "airplane_departure": [
        27,
        23
    ],
    "airplane_arriving": [
        27,
        24
    ],
    "satellite": [
        27,
        25
    ],
    "passenger_ship": [
        27,
        26
    ],
    "scooter": [
        27,
        27
    ],
    "motor_scooter": [
        27,
        28
    ],
    "canoe": [
        27,
        29
    ],
    "zipper_mouth_face": [
        27,
        30
    ],
    "money_mouth_face": [
        27,
        31
    ],
    "face_with_thermometer": [
        27,
        32
    ],
    "nerd_face": [
        27,
        33
    ],
    "thinking_face": [
        27,
        34
    ],
    "face_with_head_bandage": [
        27,
        35
    ],
    "robot_face": [
        27,
        36
    ],
    "hugging_face": [
        27,
        37
    ],
    "the_horns": [
        27,
        38
    ],
    "call_me_hand": [
        27,
        44
    ],
    "raised_back_of_hand": [
        28,
        1
    ],
    "left-facing_fist": [
        28,
        7
    ],
    "right-facing_fist": [
        28,
        13
    ],
    "handshake": [
        28,
        19
    ],
    "hand_with_index_and_middle_fingers_crossed": [
        28,
        20
    ],
    "face_with_cowboy_hat": [
        28,
        26
    ],
    "clown_face": [
        28,
        27
    ],
    "nauseated_face": [
        28,
        28
    ],
    "rolling_on_the_floor_laughing": [
        28,
        29
    ],
    "drooling_face": [
        28,
        30
    ],
    "lying_face": [
        28,
        31
    ],
    "face_palm": [
        28,
        32
    ],
    "sneezing_face": [
        28,
        38
    ],
    "pregnant_woman": [
        28,
        39
    ],
    "selfie": [
        28,
        45
    ],
    "prince": [
        29,
        2
    ],
    "man_in_tuxedo": [
        29,
        8
    ],
    "mother_christmas": [
        29,
        14
    ],
    "shrug": [
        29,
        20
    ],
    "person_doing_cartwheel": [
        29,
        26
    ],
    "juggling": [
        29,
        32
    ],
    "fencer": [
        29,
        38
    ],
    "wrestlers": [
        29,
        39
    ],
    "water_polo": [
        29,
        40
    ],
    "handball": [
        29,
        46
    ],
    "wilted_flower": [
        30,
        3
    ],
    "drum_with_drumsticks": [
        30,
        4
    ],
    "clinking_glasses": [
        30,
        5
    ],
    "tumbler_glass": [
        30,
        6
    ],
    "spoon": [
        30,
        7
    ],
    "goal_net": [
        30,
        8
    ],
    "first_place_medal": [
        30,
        9
    ],
    "second_place_medal": [
        30,
        10
    ],
    "third_place_medal": [
        30,
        11
    ],
    "boxing_glove": [
        30,
        12
    ],
    "martial_arts_uniform": [
        30,
        13
    ],
    "croissant": [
        30,
        14
    ],
    "avocado": [
        30,
        15
    ],
    "cucumber": [
        30,
        16
    ],
    "bacon": [
        30,
        17
    ],
    "potato": [
        30,
        18
    ],
    "carrot": [
        30,
        19
    ],
    "baguette_bread": [
        30,
        20
    ],
    "green_salad": [
        30,
        21
    ],
    "shallow_pan_of_food": [
        30,
        22
    ],
    "stuffed_flatbread": [
        30,
        23
    ],
    "egg": [
        30,
        24
    ],
    "glass_of_milk": [
        30,
        25
    ],
    "peanuts": [
        30,
        26
    ],
    "kiwifruit": [
        30,
        27
    ],
    "pancakes": [
        30,
        28
    ],
    "crab": [
        30,
        29
    ],
    "lion_face": [
        30,
        30
    ],
    "scorpion": [
        30,
        31
    ],
    "turkey": [
        30,
        32
    ],
    "unicorn_face": [
        30,
        33
    ],
    "eagle": [
        30,
        34
    ],
    "duck": [
        30,
        35
    ],
    "bat": [
        30,
        36
    ],
    "shark": [
        30,
        37
    ],
    "owl": [
        30,
        38
    ],
    "fox_face": [
        30,
        39
    ],
    "butterfly": [
        30,
        40
    ],
    "deer": [
        30,
        41
    ],
    "gorilla": [
        30,
        42
    ],
    "lizard": [
        30,
        43
    ],
    "rhinoceros": [
        30,
        44
    ],
    "shrimp": [
        30,
        45
    ],
    "squid": [
        30,
        46
    ],
    "cheese_wedge": [
        30,
        47
    ],
    "hash": [
        30,
        48
    ],
    "keycap_star": [
        31,
        0
    ],
    "zero": [
        31,
        1
    ],
    "one": [
        31,
        2
    ],
    "two": [
        31,
        3
    ],
    "three": [
        31,
        4
    ],
    "four": [
        31,
        5
    ],
    "five": [
        31,
        6
    ],
    "six": [
        31,
        7
    ],
    "seven": [
        31,
        8
    ],
    "eight": [
        31,
        9
    ],
    "nine": [
        31,
        10
    ],
    "flag-ac": [
        31,
        11
    ],
    "flag-ad": [
        31,
        12
    ],
    "flag-ae": [
        31,
        13
    ],
    "flag-af": [
        31,
        14
    ],
    "flag-ag": [
        31,
        15
    ],
    "flag-ai": [
        31,
        16
    ],
    "flag-al": [
        31,
        17
    ],
    "flag-am": [
        31,
        18
    ],
    "flag-ao": [
        31,
        19
    ],
    "flag-aq": [
        31,
        20
    ],
    "flag-ar": [
        31,
        21
    ],
    "flag-as": [
        31,
        22
    ],
    "flag-at": [
        31,
        23
    ],
    "flag-au": [
        31,
        24
    ],
    "flag-aw": [
        31,
        25
    ],
    "flag-ax": [
        31,
        26
    ],
    "flag-az": [
        31,
        27
    ],
    "flag-ba": [
        31,
        28
    ],
    "flag-bb": [
        31,
        29
    ],
    "flag-bd": [
        31,
        30
    ],
    "flag-be": [
        31,
        31
    ],
    "flag-bf": [
        31,
        32
    ],
    "flag-bg": [
        31,
        33
    ],
    "flag-bh": [
        31,
        34
    ],
    "flag-bi": [
        31,
        35
    ],
    "flag-bj": [
        31,
        36
    ],
    "flag-bl": [
        31,
        37
    ],
    "flag-bm": [
        31,
        38
    ],
    "flag-bn": [
        31,
        39
    ],
    "flag-bo": [
        31,
        40
    ],
    "flag-bq": [
        31,
        41
    ],
    "flag-br": [
        31,
        42
    ],
    "flag-bs": [
        31,
        43
    ],
    "flag-bt": [
        31,
        44
    ],
    "flag-bv": [
        31,
        45
    ],
    "flag-bw": [
        31,
        46
    ],
    "flag-by": [
        31,
        47
    ],
    "flag-bz": [
        31,
        48
    ],
    "flag-ca": [
        32,
        0
    ],
    "flag-cc": [
        32,
        1
    ],
    "flag-cd": [
        32,
        2
    ],
    "flag-cf": [
        32,
        3
    ],
    "flag-cg": [
        32,
        4
    ],
    "flag-ch": [
        32,
        5
    ],
    "flag-ci": [
        32,
        6
    ],
    "flag-ck": [
        32,
        7
    ],
    "flag-cl": [
        32,
        8
    ],
    "flag-cm": [
        32,
        9
    ],
    "flag-cn": [
        32,
        10
    ],
    "flag-co": [
        32,
        11
    ],
    "flag-cp": [
        32,
        12
    ],
    "flag-cr": [
        32,
        13
    ],
    "flag-cu": [
        32,
        14
    ],
    "flag-cv": [
        32,
        15
    ],
    "flag-cw": [
        32,
        16
    ],
    "flag-cx": [
        32,
        17
    ],
    "flag-cy": [
        32,
        18
    ],
    "flag-cz": [
        32,
        19
    ],
    "flag-de": [
        32,
        20
    ],
    "flag-dg": [
        32,
        21
    ],
    "flag-dj": [
        32,
        22
    ],
    "flag-dk": [
        32,
        23
    ],
    "flag-dm": [
        32,
        24
    ],
    "flag-do": [
        32,
        25
    ],
    "flag-dz": [
        32,
        26
    ],
    "flag-ea": [
        32,
        27
    ],
    "flag-ec": [
        32,
        28
    ],
    "flag-ee": [
        32,
        29
    ],
    "flag-eg": [
        32,
        30
    ],
    "flag-eh": [
        32,
        31
    ],
    "flag-er": [
        32,
        32
    ],
    "flag-es": [
        32,
        33
    ],
    "flag-et": [
        32,
        34
    ],
    "flag-eu": [
        32,
        35
    ],
    "flag-fi": [
        32,
        36
    ],
    "flag-fj": [
        32,
        37
    ],
    "flag-fk": [
        32,
        38
    ],
    "flag-fm": [
        32,
        39
    ],
    "flag-fo": [
        32,
        40
    ],
    "flag-fr": [
        32,
        41
    ],
    "flag-ga": [
        32,
        42
    ],
    "flag-gb": [
        32,
        43
    ],
    "flag-gd": [
        32,
        44
    ],
    "flag-ge": [
        32,
        45
    ],
    "flag-gf": [
        32,
        46
    ],
    "flag-gg": [
        32,
        47
    ],
    "flag-gh": [
        32,
        48
    ],
    "flag-gi": [
        33,
        0
    ],
    "flag-gl": [
        33,
        1
    ],
    "flag-gm": [
        33,
        2
    ],
    "flag-gn": [
        33,
        3
    ],
    "flag-gp": [
        33,
        4
    ],
    "flag-gq": [
        33,
        5
    ],
    "flag-gr": [
        33,
        6
    ],
    "flag-gs": [
        33,
        7
    ],
    "flag-gt": [
        33,
        8
    ],
    "flag-gu": [
        33,
        9
    ],
    "flag-gw": [
        33,
        10
    ],
    "flag-gy": [
        33,
        11
    ],
    "flag-hk": [
        33,
        12
    ],
    "flag-hm": [
        33,
        13
    ],
    "flag-hn": [
        33,
        14
    ],
    "flag-hr": [
        33,
        15
    ],
    "flag-ht": [
        33,
        16
    ],
    "flag-hu": [
        33,
        17
    ],
    "flag-ic": [
        33,
        18
    ],
    "flag-id": [
        33,
        19
    ],
    "flag-ie": [
        33,
        20
    ],
    "flag-il": [
        33,
        21
    ],
    "flag-im": [
        33,
        22
    ],
    "flag-in": [
        33,
        23
    ],
    "flag-io": [
        33,
        24
    ],
    "flag-iq": [
        33,
        25
    ],
    "flag-ir": [
        33,
        26
    ],
    "flag-is": [
        33,
        27
    ],
    "flag-it": [
        33,
        28
    ],
    "flag-je": [
        33,
        29
    ],
    "flag-jm": [
        33,
        30
    ],
    "flag-jo": [
        33,
        31
    ],
    "flag-jp": [
        33,
        32
    ],
    "flag-ke": [
        33,
        33
    ],
    "flag-kg": [
        33,
        34
    ],
    "flag-kh": [
        33,
        35
    ],
    "flag-ki": [
        33,
        36
    ],
    "flag-km": [
        33,
        37
    ],
    "flag-kn": [
        33,
        38
    ],
    "flag-kp": [
        33,
        39
    ],
    "flag-kr": [
        33,
        40
    ],
    "flag-kw": [
        33,
        41
    ],
    "flag-ky": [
        33,
        42
    ],
    "flag-kz": [
        33,
        43
    ],
    "flag-la": [
        33,
        44
    ],
    "flag-lb": [
        33,
        45
    ],
    "flag-lc": [
        33,
        46
    ],
    "flag-li": [
        33,
        47
    ],
    "flag-lk": [
        33,
        48
    ],
    "flag-lr": [
        34,
        0
    ],
    "flag-ls": [
        34,
        1
    ],
    "flag-lt": [
        34,
        2
    ],
    "flag-lu": [
        34,
        3
    ],
    "flag-lv": [
        34,
        4
    ],
    "flag-ly": [
        34,
        5
    ],
    "flag-ma": [
        34,
        6
    ],
    "flag-mc": [
        34,
        7
    ],
    "flag-md": [
        34,
        8
    ],
    "flag-me": [
        34,
        9
    ],
    "flag-mf": [
        34,
        10
    ],
    "flag-mg": [
        34,
        11
    ],
    "flag-mh": [
        34,
        12
    ],
    "flag-mk": [
        34,
        13
    ],
    "flag-ml": [
        34,
        14
    ],
    "flag-mm": [
        34,
        15
    ],
    "flag-mn": [
        34,
        16
    ],
    "flag-mo": [
        34,
        17
    ],
    "flag-mp": [
        34,
        18
    ],
    "flag-mq": [
        34,
        19
    ],
    "flag-mr": [
        34,
        20
    ],
    "flag-ms": [
        34,
        21
    ],
    "flag-mt": [
        34,
        22
    ],
    "flag-mu": [
        34,
        23
    ],
    "flag-mv": [
        34,
        24
    ],
    "flag-mw": [
        34,
        25
    ],
    "flag-mx": [
        34,
        26
    ],
    "flag-my": [
        34,
        27
    ],
    "flag-mz": [
        34,
        28
    ],
    "flag-na": [
        34,
        29
    ],
    "flag-nc": [
        34,
        30
    ],
    "flag-ne": [
        34,
        31
    ],
    "flag-nf": [
        34,
        32
    ],
    "flag-ng": [
        34,
        33
    ],
    "flag-ni": [
        34,
        34
    ],
    "flag-nl": [
        34,
        35
    ],
    "flag-no": [
        34,
        36
    ],
    "flag-np": [
        34,
        37
    ],
    "flag-nr": [
        34,
        38
    ],
    "flag-nu": [
        34,
        39
    ],
    "flag-nz": [
        34,
        40
    ],
    "flag-om": [
        34,
        41
    ],
    "flag-pa": [
        34,
        42
    ],
    "flag-pe": [
        34,
        43
    ],
    "flag-pf": [
        34,
        44
    ],
    "flag-pg": [
        34,
        45
    ],
    "flag-ph": [
        34,
        46
    ],
    "flag-pk": [
        34,
        47
    ],
    "flag-pl": [
        34,
        48
    ],
    "flag-pm": [
        35,
        0
    ],
    "flag-pn": [
        35,
        1
    ],
    "flag-pr": [
        35,
        2
    ],
    "flag-ps": [
        35,
        3
    ],
    "flag-pt": [
        35,
        4
    ],
    "flag-pw": [
        35,
        5
    ],
    "flag-py": [
        35,
        6
    ],
    "flag-qa": [
        35,
        7
    ],
    "flag-re": [
        35,
        8
    ],
    "flag-ro": [
        35,
        9
    ],
    "flag-rs": [
        35,
        10
    ],
    "flag-ru": [
        35,
        11
    ],
    "flag-rw": [
        35,
        12
    ],
    "flag-sa": [
        35,
        13
    ],
    "flag-sb": [
        35,
        14
    ],
    "flag-sc": [
        35,
        15
    ],
    "flag-sd": [
        35,
        16
    ],
    "flag-se": [
        35,
        17
    ],
    "flag-sg": [
        35,
        18
    ],
    "flag-sh": [
        35,
        19
    ],
    "flag-si": [
        35,
        20
    ],
    "flag-sj": [
        35,
        21
    ],
    "flag-sk": [
        35,
        22
    ],
    "flag-sl": [
        35,
        23
    ],
    "flag-sm": [
        35,
        24
    ],
    "flag-sn": [
        35,
        25
    ],
    "flag-so": [
        35,
        26
    ],
    "flag-sr": [
        35,
        27
    ],
    "flag-ss": [
        35,
        28
    ],
    "flag-st": [
        35,
        29
    ],
    "flag-sv": [
        35,
        30
    ],
    "flag-sx": [
        35,
        31
    ],
    "flag-sy": [
        35,
        32
    ],
    "flag-sz": [
        35,
        33
    ],
    "flag-ta": [
        35,
        34
    ],
    "flag-tc": [
        35,
        35
    ],
    "flag-td": [
        35,
        36
    ],
    "flag-tf": [
        35,
        37
    ],
    "flag-tg": [
        35,
        38
    ],
    "flag-th": [
        35,
        39
    ],
    "flag-tj": [
        35,
        40
    ],
    "flag-tk": [
        35,
        41
    ],
    "flag-tl": [
        35,
        42
    ],
    "flag-tm": [
        35,
        43
    ],
    "flag-tn": [
        35,
        44
    ],
    "flag-to": [
        35,
        45
    ],
    "flag-tr": [
        35,
        46
    ],
    "flag-tt": [
        35,
        47
    ],
    "flag-tv": [
        35,
        48
    ],
    "flag-tw": [
        36,
        0
    ],
    "flag-tz": [
        36,
        1
    ],
    "flag-ua": [
        36,
        2
    ],
    "flag-ug": [
        36,
        3
    ],
    "flag-um": [
        36,
        4
    ],
    "flag-un": [
        36,
        5
    ],
    "flag-us": [
        36,
        6
    ],
    "flag-uy": [
        36,
        7
    ],
    "flag-uz": [
        36,
        8
    ],
    "flag-va": [
        36,
        9
    ],
    "flag-vc": [
        36,
        10
    ],
    "flag-ve": [
        36,
        11
    ],
    "flag-vg": [
        36,
        12
    ],
    "flag-vi": [
        36,
        13
    ],
    "flag-vn": [
        36,
        14
    ],
    "flag-vu": [
        36,
        15
    ],
    "flag-wf": [
        36,
        16
    ],
    "flag-ws": [
        36,
        17
    ],
    "flag-xk": [
        36,
        18
    ],
    "flag-ye": [
        36,
        19
    ],
    "flag-yt": [
        36,
        20
    ],
    "flag-za": [
        36,
        21
    ],
    "flag-zm": [
        36,
        22
    ],
    "flag-zw": [
        36,
        23
    ],
    "male-farmer": [
        36,
        24
    ],
    "male-cook": [
        36,
        30
    ],
    "male-student": [
        36,
        36
    ],
    "male-singer": [
        36,
        42
    ],
    "male-artist": [
        36,
        48
    ],
    "male-teacher": [
        37,
        5
    ],
    "male-factory-worker": [
        37,
        11
    ],
    "man-boy": [
        37,
        17
    ],
    "man-girl": [
        37,
        18
    ],
    "male-technologist": [
        37,
        19
    ],
    "male-office-worker": [
        37,
        25
    ],
    "male-mechanic": [
        37,
        31
    ],
    "male-scientist": [
        37,
        37
    ],
    "male-astronaut": [
        37,
        43
    ],
    "male-firefighter": [
        38,
        0
    ],
    "female-farmer": [
        38,
        6
    ],
    "female-cook": [
        38,
        12
    ],
    "female-student": [
        38,
        18
    ],
    "female-singer": [
        38,
        24
    ],
    "female-artist": [
        38,
        30
    ],
    "female-teacher": [
        38,
        36
    ],
    "female-factory-worker": [
        38,
        42
    ],
    "woman-boy": [
        38,
        48
    ],
    "woman-girl": [
        39,
        0
    ],
    "female-technologist": [
        39,
        1
    ],
    "female-office-worker": [
        39,
        7
    ],
    "female-mechanic": [
        39,
        13
    ],
    "female-scientist": [
        39,
        19
    ],
    "female-astronaut": [
        39,
        25
    ],
    "female-firefighter": [
        39,
        31
    ],
    "woman-running": [
        39,
        37
    ],
    "man-running": [
        39,
        43
    ],
    "woman-surfing": [
        40,
        0
    ],
    "man-surfing": [
        40,
        6
    ],
    "woman-swimming": [
        40,
        12
    ],
    "man-swimming": [
        40,
        18
    ],
    "woman-lifting-weights": [
        40,
        24
    ],
    "man-lifting-weights": [
        40,
        30
    ],
    "woman-golfing": [
        40,
        36
    ],
    "man-golfing": [
        40,
        42
    ],
    "rainbow-flag": [
        40,
        48
    ],
    "eye-in-speech-bubble": [
        41,
        0
    ],
    "man-boy-boy": [
        41,
        1
    ],
    "man-girl-boy": [
        41,
        2
    ],
    "man-girl-girl": [
        41,
        3
    ],
    "man-man-boy": [
        41,
        4
    ],
    "man-man-boy-boy": [
        41,
        5
    ],
    "man-man-girl": [
        41,
        6
    ],
    "man-man-girl-boy": [
        41,
        7
    ],
    "man-man-girl-girl": [
        41,
        8
    ],
    "man-woman-boy": [
        41,
        9
    ],
    "man-woman-boy-boy": [
        41,
        10
    ],
    "man-woman-girl": [
        41,
        11
    ],
    "man-woman-girl-boy": [
        41,
        12
    ],
    "man-woman-girl-girl": [
        41,
        13
    ],
    "male-doctor": [
        41,
        14
    ],
    "male-judge": [
        41,
        20
    ],
    "male-pilot": [
        41,
        26
    ],
    "man-heart-man": [
        41,
        32
    ],
    "man-kiss-man": [
        41,
        33
    ],
    "woman-boy-boy": [
        41,
        34
    ],
    "woman-girl-boy": [
        41,
        35
    ],
    "woman-girl-girl": [
        41,
        36
    ],
    "woman-woman-boy": [
        41,
        37
    ],
    "woman-woman-boy-boy": [
        41,
        38
    ],
    "woman-woman-girl": [
        41,
        39
    ],
    "woman-woman-girl-boy": [
        41,
        40
    ],
    "woman-woman-girl-girl": [
        41,
        41
    ],
    "female-doctor": [
        41,
        42
    ],
    "female-judge": [
        41,
        48
    ],
    "female-pilot": [
        42,
        5
    ],
    "woman-heart-man": [
        42,
        11
    ],
    "woman-heart-woman": [
        42,
        12
    ],
    "woman-kiss-man": [
        42,
        13
    ],
    "woman-kiss-woman": [
        42,
        14
    ],
    "female-police-officer": [
        42,
        15
    ],
    "male-police-officer": [
        42,
        21
    ],
    "woman-with-bunny-ears-partying": [
        42,
        27
    ],
    "man-with-bunny-ears-partying": [
        42,
        28
    ],
    "blond-haired-woman": [
        42,
        29
    ],
    "blond-haired-man": [
        42,
        35
    ],
    "woman-wearing-turban": [
        42,
        41
    ],
    "man-wearing-turban": [
        42,
        47
    ],
    "female-construction-worker": [
        43,
        4
    ],
    "male-construction-worker": [
        43,
        10
    ],
    "woman-tipping-hand": [
        43,
        16
    ],
    "man-tipping-hand": [
        43,
        22
    ],
    "female-guard": [
        43,
        28
    ],
    "male-guard": [
        43,
        34
    ],
    "woman-getting-massage": [
        43,
        40
    ],
    "man-getting-massage": [
        43,
        46
    ],
    "woman-getting-haircut": [
        44,
        3
    ],
    "man-getting-haircut": [
        44,
        9
    ],
    "female-detective": [
        44,
        15
    ],
    "male-detective": [
        44,
        21
    ],
    "woman-gesturing-no": [
        44,
        27
    ],
    "man-gesturing-no": [
        44,
        33
    ],
    "woman-gesturing-ok": [
        44,
        39
    ],
    "man-gesturing-ok": [
        44,
        45
    ],
    "woman-bowing": [
        45,
        2
    ],
    "man-bowing": [
        45,
        8
    ],
    "woman-raising-hand": [
        45,
        14
    ],
    "man-raising-hand": [
        45,
        20
    ],
    "woman-frowning": [
        45,
        26
    ],
    "man-frowning": [
        45,
        32
    ],
    "woman-pouting": [
        45,
        38
    ],
    "man-pouting": [
        45,
        44
    ],
    "woman-rowing-boat": [
        46,
        1
    ],
    "man-rowing-boat": [
        46,
        7
    ],
    "woman-biking": [
        46,
        13
    ],
    "man-biking": [
        46,
        19
    ],
    "woman-mountain-biking": [
        46,
        25
    ],
    "man-mountain-biking": [
        46,
        31
    ],
    "woman-walking": [
        46,
        37
    ],
    "man-walking": [
        46,
        43
    ],
    "woman-facepalming": [
        47,
        0
    ],
    "man-facepalming": [
        47,
        6
    ],
    "woman-shrugging": [
        47,
        12
    ],
    "man-shrugging": [
        47,
        18
    ],
    "woman-cartwheeling": [
        47,
        24
    ],
    "man-cartwheeling": [
        47,
        30
    ],
    "woman-juggling": [
        47,
        36
    ],
    "man-juggling": [
        47,
        42
    ],
    "woman-wrestling": [
        47,
        48
    ],
    "man-wrestling": [
        48,
        0
    ],
    "woman-playing-water-polo": [
        48,
        1
    ],
    "man-playing-water-polo": [
        48,
        7
    ],
    "woman-playing-handball": [
        48,
        13
    ],
    "man-playing-handball": [
        48,
        19
    ],
    "woman-bouncing-ball": [
        48,
        25
    ],
    "man-bouncing-ball": [
        48,
        31
    ]
};
//# sourceMappingURL=sheet_apple_map.js.map

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: inline-block; }\n\n.emoji-button {\n  padding: 0;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  width: 34px;\n  height: 34px;\n  border: 5px solid transparent;\n  border-radius: 3px;\n  font-size: 24px;\n  line-height: 1.1;\n  -webkit-transition: all 0.2s;\n  transition: all 0.2s; }\n  .emoji-button:hover, .emoji-button:focus {\n    background: #F1F1F1;\n    border-color: #F1F1F1; }\n\n.emoji-button-from-sheet {\n  padding: 0;\n  border: none;\n  outline: none;\n  display: inline-block;\n  background-repeat: no-repeat;\n  /** box shaddowing the edges until I find a better sprite sheet */\n  box-shadow: 0 0 1px 1px white inset;\n  background-size: 1225px;\n  width: 25px;\n  height: 25px; }\n\n.emoji-button-from-sheet-enclosure {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0;\n  padding: 4.5px;\n  border-radius: 3px; }\n  .emoji-button-from-sheet-enclosure:hover, .emoji-button-from-sheet-enclosure:focus {\n    background: #F1F1F1;\n    border-color: #F1F1F1; }\n    .emoji-button-from-sheet-enclosure:hover .emoji-button-from-sheet, .emoji-button-from-sheet-enclosure:focus .emoji-button-from-sheet {\n      box-shadow: 0 0 1px 1px #F1F1F1 inset; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-button.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,sBAAqB,EACtB;;AAED;EACE,WAAU;EACV,cAAa;EACb,iBAAgB;EAChB,gBAAe;EACf,YCKmB;EDJnB,aCImB;EDHnB,8BAA6B;EAC7B,mBCDoB;EDEpB,gBAAmC;EACnC,iBAAgB;EAChB,6BAAoB;EAApB,qBAAoB,EAMrB;EAjBD;IAcM,oBAAmB;IACnB,sBAAqB,EACxB;;AAGH;EACE,WAAU;EACV,aAAY;EACZ,cAAa;EACb,sBAAqB;EACrB,6BAA4B;EAC5B,kEAAkE;EAClE,oCAAmC;EACnC,wBAAmC;EACnC,YAAW;EACX,aAAY,EACb;;AAED;EACE,sBAAqB;EACrB,gBAAe;EACf,eAAc;EACd,eAAc;EACd,mBC9BoB,EDwCrB;EAfD;IAQM,oBAAmB;IACnB,sBAAqB,EAKxB;IAdH;MAYQ,sCAAqC,EACtC","file":"emoji-button.scss","sourcesContent":["@import '_constants.scss';\n\n:host {\n  display: inline-block;\n}\n\n.emoji-button {\n  padding: 0;\n  outline: none;\n  background: none;\n  cursor: pointer;\n  width: $ep-emoji-width;\n  height: $ep-emoji-width;\n  border: 5px solid transparent;\n  border-radius: $ep-border-radius;\n  font-size: ($ep-emoji-width - 10px);\n  line-height: 1.1;\n  transition: all 0.2s;\n\n  &:hover, &:focus {\n      background: #F1F1F1;\n      border-color: #F1F1F1;\n  }\n}\n\n.emoji-button-from-sheet {\n  padding: 0;\n  border: none;\n  outline: none;\n  display: inline-block;\n  background-repeat: no-repeat;\n  /** box shaddowing the edges until I find a better sprite sheet */\n  box-shadow: 0 0 1px 1px white inset;\n  background-size: (25px * 1568 / 32);\n  width: 25px;\n  height: 25px;\n}\n\n.emoji-button-from-sheet-enclosure {\n  display: inline-block;\n  cursor: pointer;\n  line-height: 0;\n  padding: 4.5px;\n  border-radius: $ep-border-radius;\n\n  &:hover, &:focus {\n      background: #F1F1F1;\n      border-color: #F1F1F1;\n\n      .emoji-button-from-sheet {\n        box-shadow: 0 0 1px 1px #F1F1F1 inset;\n      }\n  }\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  margin: 0 0 10px; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-categories.scss"],"names":[],"mappings":"AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,oBAAe;MAAf,gBAAe;EACf,0BAA8B;MAA9B,uBAA8B;UAA9B,+BAA8B;EAC9B,iBAAgB,EACjB","file":"emoji-categories.scss","sourcesContent":["@import '_constants.scss';\n\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  margin: 0 0 10px;\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-category {\n  margin: 0;\n  font-size: 16px;\n  padding: 5px 0 5px 5px;\n  border-bottom: 1px solid #F0F0F0;\n  color: #777;\n  font-family: \"Arial\", \"Arial Black\", \"Tahoma\", \"Trebuchet MS\", \"Verdana\"; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-category.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACI,UAAS;EACT,gBCae;EDZf,uBAAoD;EACpD,iCCAqB;EDCrB,YCAoB;EDCpB,yECRwE,EDS3E","file":"emoji-category.scss","sourcesContent":["@import '_constants.scss';\n\n.emoji-category {\n    margin: 0;\n    font-size: $ep-font-size;\n    padding: $ep-padding/2 0 $ep-padding/2 $ep-padding/2;\n    border-bottom: $ep-border-size solid $ep-border-input;\n    color: $ep-category-title;\n    font-family: $ep-font-family;\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  width: 100vw;\n  height: 314px;\n  border-radius: 3px;\n  background: #FFF;\n  text-align: left;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, 0.2), 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12); }\n  @media (min-width: 258px) {\n    :host {\n      width: 258px; } }\n\nemoji-list {\n  -webkit-box-flex: 1;\n      -ms-flex-positive: 1;\n          flex-grow: 1; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-content.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,6BAAsB;EAAtB,8BAAsB;MAAtB,2BAAsB;UAAtB,uBAAsB;EACtB,aAAY;EACZ,cCuBe;EDtBf,mBCMoB;EDLpB,iBCHwB;EDIxB,iBAAgB;EAChB,yHAA4G,EAK7G;EAHC;IAVF;MAWM,aCQoD,EDNzD,EAAA;;AAED;EACE,oBAAY;MAAZ,qBAAY;UAAZ,aAAY,EACb","file":"emoji-content.scss","sourcesContent":["@import '_constants.scss';\n\n:host {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: $ep-height;\n  border-radius: $ep-border-radius;\n  background: $ep-background-panel;\n  text-align: left;\n  box-shadow: 0 11px 15px -7px rgba(0,0,0,.2), 0 24px 38px 3px rgba(0,0,0,.14), 0 9px 46px 8px rgba(0,0,0,.12);\n\n  @media(min-width: $ep-width) {\n      width: $ep-width;\n  }\n}\n\nemoji-list {\n  flex-grow: 1;\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-footer {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  border-top: 1px solid #F9F9F9;\n  border-radius: 0 0 3px 3px;\n  padding: 10px;\n  background: #FCFCFC; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-footer.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,0BAAmB;MAAnB,uBAAmB;UAAnB,oBAAmB;EACnB,0BAA8B;MAA9B,uBAA8B;UAA9B,+BAA8B;EAC9B,8BCFwB;EDGxB,2BCMoB;EDLpB,cCEe;EDDf,oBCN4B,EDO7B","file":"emoji-footer.scss","sourcesContent":["@import '_constants.scss';\n\n.emoji-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-top: $ep-border-size solid $ep-border-header;\n  border-radius: 0 0 $ep-border-radius $ep-border-radius;\n  padding: $ep-padding-results;\n  background: $ep-background-header;\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  display: block;\n  border-bottom: 1px solid #F9F9F9;\n  border-radius: 3px 3px 0 0;\n  padding: 10px;\n  background: #FCFCFC; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-header.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,eAAc;EACd,iCCAwB;EDCxB,2BAAsD;EACtD,cCIe;EDHf,oBCJ4B,EDK7B","file":"emoji-header.scss","sourcesContent":["@import '_constants.scss';\n\n:host {\n  display: block;\n  border-bottom: 1px solid $ep-border-header;\n  border-radius: $ep-border-radius $ep-border-radius 0 0;\n  padding: $ep-padding-results;\n  background: $ep-background-header;\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ":host {\n  overflow-y: auto; }\n\n.emoji-list {\n  padding: 0 10px 10px; }\n\n.emoji-buttons {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: 5px 0; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-list.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,iBAAgB,EACjB;;AAED;EACE,qBCGe,EDFhB;;AAED;EACE,qBAAa;EAAb,qBAAa;EAAb,cAAa;EACb,yBAAuB;MAAvB,sBAAuB;UAAvB,wBAAuB;EACvB,oBAAe;MAAf,gBAAe;EACf,cAAsB,EACvB","file":"emoji-list.scss","sourcesContent":["@import '_constants.scss';\n\n:host {\n  overflow-y: auto;\n}\n\n.emoji-list {\n  padding: 0 $ep-padding-results $ep-padding-results;\n}\n\n.emoji-buttons {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  margin: $ep-margin/2 0;\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, "input {\n  width: 100%;\n  padding: 5px 10px;\n  border: 1px solid #F0F0F0;\n  outline: none;\n  font-size: 14px;\n  font-weight: inherit;\n  box-sizing: border-box; }\n  input:focus {\n    border-color: #d7d7d7; }\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/emoji-search.scss","/Users/lsharir/500tech/EmojiPanel-for-Angular/src/src/styles/_constants.scss"],"names":[],"mappings":"AAEA;EACE,YAAW;EACX,kBCMe;EDLf,0BCCuB;EDAvB,cAAa;EACb,gBCWuB;EDVvB,qBAAoB;EACpB,uBAAsB,EAKvB;EAZD;IAUM,sBAA2C,EAC9C","file":"emoji-search.scss","sourcesContent":["@import '_constants.scss';\n\ninput {\n  width: 100%;\n  padding: $ep-padding/2 $ep-padding;\n  border: $ep-border-size solid $ep-border-input;\n  outline: none;\n  font-size: $ep-input-font-size;\n  font-weight: inherit;\n  box-sizing: border-box;\n\n  &:focus {\n      border-color: darken($ep-border-input, 10%);\n  }\n}\n","$ep-font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n\n// Colors\n$ep-background-header: #FCFCFC !default;\n$ep-border-header: #F9F9F9 !default;\n$ep-background-panel: #FFF !default;\n$ep-border-input: #F0F0F0 !default;\n$ep-category-title: #777 !default;\n\n// Padding and Borders\n$ep-padding: 10px;\n$ep-margin: 10px;\n$ep-padding-results: $ep-padding !default;\n$ep-border-radius: 3px !default;\n\n// Dimensions\n$ep-emoji-width: 34px !default;\n$ep-font-size: 16px;\n$ep-input-font-size: 14px;\n$ep-border-size: 1px;\n\n$ep-width: $ep-emoji-width * 7 + ($ep-padding-results * 2);\n\n$ep-height: \n  $ep-emoji-width * (5 + 1) +\n  $ep-padding * 5 +\n  $ep-border-size * 4 +\n  $ep-input-font-size + 3px +\n  $ep-font-size + 3px +\n  $ep-padding * 2;\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 17:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_button_component__ = __webpack_require__(89);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_button_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emoji_content_component__ = __webpack_require__(92);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__emoji_content_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker_component__ = __webpack_require__(96);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__emoji_picker_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__emoji_header_component__ = __webpack_require__(94);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__emoji_header_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__emoji_list_component__ = __webpack_require__(95);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_4__emoji_list_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__emoji_categories_component__ = __webpack_require__(90);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_5__emoji_categories_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__emoji_search_component__ = __webpack_require__(97);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__emoji_search_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__emoji_category_component__ = __webpack_require__(91);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_7__emoji_category_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__emoji_footer_component__ = __webpack_require__(93);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__emoji_footer_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9____ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COMPONENTS; });










var COMPONENTS = [
    __WEBPACK_IMPORTED_MODULE_9____["c" /* EmojiButtonComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["d" /* EmojiContentComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["b" /* EmojiPickerComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["e" /* EmojiListComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["f" /* EmojiHeaderComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["g" /* EmojiSearchComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["h" /* EmojiCategoriesComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["i" /* EmojiCategoryComponent */],
    __WEBPACK_IMPORTED_MODULE_9____["j" /* EmojiFooterComponent */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(9)();
// imports


// module
exports.push([module.i, ".emoji-toggle-button {\n  font-style: normal;\n  padding: 5px;\n  cursor: pointer;\n  font-size: 3rem;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n\n.emoji-content-editable {\n  background: #eee;\n  border: 1px solid #ccc;\n  padding: 0.5rem 0.25rem;\n}\n\npre.code-pre {\n  background: #1d1f20;\n  color: #fff;\n  white-space: pre-wrap;\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.code-pre .code-input {\n  color: #f3ef9c;\n  font-family: monospace;\n  background: none;\n  outline: none;\n  border: none;\n  text-align: center;\n  font-size: 0.75rem;\n}\n\n.code-pre .code-special {\n  color: #88d2d0;\n}\n\n.main {\n  text-align: center;\n}\n\nheader {\n  text-align: center;\n  font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n}\n", "", {"version":3,"sources":["/Users/lsharir/500tech/EmojiPanel-for-Angular/demo/src/app/app.component.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,aAAa;EACb,gBAAgB;EAChB,gBAAgB;EAChB,0BAAkB;KAAlB,uBAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;CACnB;;AAED;EACE,iBAAiB;EACjB,uBAAuB;EACvB,wBAAwB;CACzB;;AAED;EACE,oBAAoB;EACpB,YAAY;EACZ,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;CAClB;;AAED;EACE,eAAe;EACf,uBAAuB;EACvB,iBAAiB;EACjB,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,eAAe;CAChB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,yEAAyE;CAC1E","file":"app.component.css","sourcesContent":[".emoji-toggle-button {\n  font-style: normal;\n  padding: 5px;\n  cursor: pointer;\n  font-size: 3rem;\n  user-select: none;\n}\n\n.emoji-content-editable {\n  background: #eee;\n  border: 1px solid #ccc;\n  padding: 0.5rem 0.25rem;\n}\n\npre.code-pre {\n  background: #1d1f20;\n  color: #fff;\n  white-space: pre-wrap;\n  padding: 2rem 1rem;\n  line-height: 1.5;\n}\n\n.code-pre .code-input {\n  color: #f3ef9c;\n  font-family: monospace;\n  background: none;\n  outline: none;\n  border: none;\n  text-align: center;\n  font-size: 0.75rem;\n}\n\n.code-pre .code-special {\n  color: #88d2d0;\n}\n\n.main {\n  text-align: center;\n}\n\nheader {\n  text-align: center;\n  font-family: 'Arial', 'Arial Black', 'Tahoma', 'Trebuchet MS', 'Verdana';\n}\n"],"sourceRoot":""}]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 172:
/***/ (function(module, exports) {

module.exports = "<code><pre class=\"code-pre\"><![CDATA[\n  <div\n    contenteditable=\"true\"\n    (emojiPickerCaretEmitter)=\"handleCurrentCaret(]]><span class=\"code-special\">$event{{' = ' + eventPosMock}}</span><![CDATA[)\">\n    {{content}}\n  </div>\n\n  <i\n    class=\"emoji-toggle-button\"\n    (click)=\"toggled = !toggled\"\n    [(emojiPickerIf)]=\"]]><span class=\"code-special\">{{toggled}}</span><![CDATA[\"\n    [emojiPickerPreserveSelection]=\"false\"\n    [emojiPickerDirection]=\"']]><input class=\"code-input\" [style.width.px]=\"direction.length * 7.5\" type=\"text\" [(ngModel)]=\"direction\" /><![CDATA['\"\n    [emojiPickerAutofocus]=\"true\"\n    (emojiPickerSelect)=\"handleSelection(]]><span class=\"code-special\">$event{{' = ' + eventMock}}</span><![CDATA[)\">😄</i>\n]]></pre></code>\n\n<header>\n  <h1>Angular Emoji Picker</h1>\n</header>\n\n<div class=\"main\">\n  <div class=\"emoji-content-editable\"\n    (emojiPickerCaretEmitter)=\"handleCurrentCaret($event)\"\n    (input)=\"content = $event.target.textContent\"\n    [textContent]=\"content\"\n    contenteditable=\"true\"></div>\n  <i\n    class=\"emoji-toggle-button\"\n    (click)=\"toggled = !toggled\"\n    [(emojiPickerIf)]=\"toggled\"\n    [emojiPickerPreserveSelection]=\"false\"\n    [emojiPickerDirection]=\"direction\"\n    [emojiPickerAutofocus]=\"true\"\n    (emojiPickerSelect)=\"handleSelection($event)\">😄</i>\n</div>\n\n<footer>\n\n</footer>\n"

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(79);


/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_picker_module__ = __webpack_require__(100);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_picker_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib__ = __webpack_require__(104);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__lib__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services__ = __webpack_require__(34);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_2__services__["a"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ 34:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_picker_service__ = __webpack_require__(107);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_picker_service__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__emoji_picker_caret_directive__ = __webpack_require__(99);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_0__emoji_picker_caret_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__emoji_picker_api_directive__ = __webpack_require__(98);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__emoji_picker_api_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(55);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIRECTIVES; });



var DIRECTIVES = [
    __WEBPACK_IMPORTED_MODULE_2____["b" /* EmojiPickerApiDirective */],
    __WEBPACK_IMPORTED_MODULE_2____["c" /* EmojiPickerCaretDirective */]
];
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DIRECTIONS; });
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["top"] = 0] = "top";
    DIRECTIONS[DIRECTIONS["bottom"] = 1] = "bottom";
    DIRECTIONS[DIRECTIONS["left"] = 2] = "left";
    DIRECTIONS[DIRECTIONS["right"] = 3] = "right";
})(DIRECTIONS || (DIRECTIONS = {}));
//# sourceMappingURL=picker-directions.js.map

/***/ }),

/***/ 78:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 78;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(88);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_sheets__ = __webpack_require__(108);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(emojiPickerOptions) {
        this.emojiPickerOptions = emojiPickerOptions;
        this.direction = Math.random() > 0.5 ? (Math.random() > 0.5 ? 'top' : 'bottom') : (Math.random() > 0.5 ? 'right' : 'left');
        this.toggled = false;
        this.content = 'Type letters, enter emojis, go nuts...';
        this.emojiPickerOptions.setEmojiSheet({
            url: 'sheet_apple_32.png',
            locator: __WEBPACK_IMPORTED_MODULE_2__src_sheets__["a" /* EmojiPickerAppleSheetLocator */]
        });
    }
    AppComponent.prototype.handleSelection = function (event) {
        this.content = this.content.slice(0, this._lastCaretEvent.caretOffset) + event.char + this.content.slice(this._lastCaretEvent.caretOffset);
        this.eventMock = JSON.stringify(event);
    };
    AppComponent.prototype.handleCurrentCaret = function (event) {
        this._lastCaretEvent = event;
        this.eventPosMock = "{ caretOffset : " + event.caretOffset + ", caretRange: Range{...}, textContent: " + event.textContent + " }";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(172),
        styles: [__webpack_require__(170)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__src__["d" /* EmojiPickerOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__src__["d" /* EmojiPickerOptions */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(86);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__src__["a" /* EmojiPickerModule */].forRoot()
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 89:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services__ = __webpack_require__(34);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiButtonComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmojiButtonComponent = (function () {
    function EmojiButtonComponent(emojiPickerOptions) {
        this.emojiPickerOptions = emojiPickerOptions;
        this.selectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
    }
    return EmojiButtonComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emoji'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "emoji", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('dataToEmit'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "dataToEmit", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('options'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "options", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('fitzpatrick'),
    __metadata("design:type", Object)
], EmojiButtonComponent.prototype, "fitzpatrick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('selection'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _a || Object)
], EmojiButtonComponent.prototype, "selectionEmitter", void 0);
EmojiButtonComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-button',
        styles: [__webpack_require__(162)],
        template: "\n<button\n  *ngIf=\"!emojiPickerOptions.options.sheet; else sheetButton\"\n  class=\"emoji-button\"\n  (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n  {{emoji[0]}}\n</button>\n<ng-template #sheetButton>\n  <span class=\"emoji-button-from-sheet-enclosure\" \n      (click)=\"selectionEmitter.emit(dataToEmit || emoji)\">\n    <span\n      class=\"emoji-button-from-sheet\"\n      [style.backgroundImage]=\"'url(' + emojiPickerOptions.options.sheet.url + ')'\"\n      [style.backgroundPositionX]=\"-emojiPickerOptions.options.sheet.locator(emoji[1]).x * 25 + 'px'\"\n      [style.backgroundPositionY]=\"-emojiPickerOptions.options.sheet.locator(emoji[1]).y * 25 + 'px'\">\n    </span>\n  </span>\n</ng-template>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services__["a" /* EmojiPickerOptions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services__["a" /* EmojiPickerOptions */]) === "function" && _b || Object])
], EmojiButtonComponent);

var _a, _b;
//# sourceMappingURL=emoji-button.component.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiCategoriesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiCategoriesComponent = (function () {
    function EmojiCategoriesComponent() {
        this.categorySelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
    }
    EmojiCategoriesComponent.prototype.handleCategorySelection = function (event) {
        this.categorySelection.emit(event);
    };
    return EmojiCategoriesComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojisCategories'),
    __metadata("design:type", Object)
], EmojiCategoriesComponent.prototype, "emojisCategories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('categorySelection'),
    __metadata("design:type", Object)
], EmojiCategoriesComponent.prototype, "categorySelection", void 0);
EmojiCategoriesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-categories',
        styles: [__webpack_require__(163)],
        template: "\n  <ng-container *ngFor=\"let category of emojisCategories\">\n    <emoji-button \n      (selection)=\"handleCategorySelection($event)\"\n      [dataToEmit]=\"category\"\n      [emoji]=\"category.icon\"></emoji-button>\n  </ng-container>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiCategoriesComponent);

//# sourceMappingURL=emoji-categories.component.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiCategoryComponent = (function () {
    function EmojiCategoryComponent(_element) {
        this._element = _element;
    }
    EmojiCategoryComponent.prototype.scrollIntoView = function () {
        this._element.nativeElement.scrollIntoView();
    };
    return EmojiCategoryComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('category'),
    __metadata("design:type", Object)
], EmojiCategoryComponent.prototype, "category", void 0);
EmojiCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-category',
        styles: [__webpack_require__(164)],
        template: "\n  <p class=\"emoji-category\">{{category.name}}</p>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object])
], EmojiCategoryComponent);

var _a;
//# sourceMappingURL=emoji-category.component.js.map

/***/ }),

/***/ 92:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_emojis_data__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiContentComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojiContentComponent = (function () {
    function EmojiContentComponent() {
        this.emojiSelectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this._emojis = __WEBPACK_IMPORTED_MODULE_1__lib_emojis_data__["a" /* EMOJIS */];
        this.emojis = this._emojis.slice();
        this.emojisCategories = this._emojis.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
    }
    EmojiContentComponent.prototype.searchHandler = function (value) {
        var _this = this;
        var filteredEmojis = this.emojisCategories.map(function (category) { return Object.assign({}, category, { emojis: [] }); });
        value = value.replace(/-/g, '').toLowerCase();
        Object.keys(this._emojis).forEach(function (i) {
            var category = _this._emojis[i];
            category.emojis.forEach(function (emoji) {
                if (emoji[1].indexOf(value) !== -1) {
                    filteredEmojis[i].emojis.push(emoji);
                }
            });
        });
        this.emojis = filteredEmojis;
    };
    EmojiContentComponent.prototype.categorySelectionHandler = function (event) {
        this.emojiListComponent.selectCategory(event);
    };
    return EmojiContentComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ViewChild */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_2____["e" /* EmojiListComponent */]; })),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2____["e" /* EmojiListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2____["e" /* EmojiListComponent */]) === "function" && _a || Object)
], EmojiContentComponent.prototype, "emojiListComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('emoji-selection'),
    __metadata("design:type", Object)
], EmojiContentComponent.prototype, "emojiSelectionEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('inputAutofocus'),
    __metadata("design:type", Boolean)
], EmojiContentComponent.prototype, "inputAutofocus", void 0);
EmojiContentComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-content',
        styles: [__webpack_require__(165)],
        template: "\n  <emoji-header \n    [emojisCategories]=\"emojisCategories\"\n    (categorySelection)=\"categorySelectionHandler($event)\"\n    [inputAutofocus]=\"inputAutofocus\"\n    (search)=\"searchHandler($event)\"></emoji-header>\n  <emoji-list [emojis]=\"emojis\" (emoji-selection)=\"emojiSelectionEmitter.emit($event)\"></emoji-list>\n  <emoji-footer></emoji-footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiContentComponent);

var _a;
//# sourceMappingURL=emoji-content.component.js.map

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiFooterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiFooterComponent = (function () {
    function EmojiFooterComponent() {
    }
    return EmojiFooterComponent;
}());
EmojiFooterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-footer',
        styles: [__webpack_require__(166)],
        template: "\n  <footer class=\"emoji-footer\"></footer>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiFooterComponent);

//# sourceMappingURL=emoji-footer.component.js.map

/***/ }),

/***/ 94:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiHeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiHeaderComponent = (function () {
    function EmojiHeaderComponent() {
        this.categorySelection = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.searchEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
    }
    return EmojiHeaderComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojisCategories'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "emojisCategories", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('inputAutofocus'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "inputAutofocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('categorySelection'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "categorySelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('search'),
    __metadata("design:type", Object)
], EmojiHeaderComponent.prototype, "searchEmitter", void 0);
EmojiHeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-header',
        styles: [__webpack_require__(167)],
        template: "\n  <emoji-categories [emojisCategories]=\"emojisCategories\" (categorySelection)=\"categorySelection.emit($event)\"></emoji-categories>\n  <emoji-search (search)=\"searchEmitter.emit($event)\" [inputAutofocus]=\"inputAutofocus\"></emoji-search>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiHeaderComponent);

//# sourceMappingURL=emoji-header.component.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1____ = __webpack_require__(17);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EmojiListComponent = (function () {
    function EmojiListComponent() {
        this.emojiSelectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
    }
    EmojiListComponent.prototype.selectCategory = function (event) {
        this.emojiCategoryComponents.forEach(function (categoryCmp) {
            if (categoryCmp['category'].name === event.name) {
                categoryCmp.scrollIntoView();
            }
        });
    };
    return EmojiListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ViewChildren */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1____["i" /* EmojiCategoryComponent */]; })),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* QueryList */]) === "function" && _a || Object)
], EmojiListComponent.prototype, "emojiCategoryComponents", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojis'),
    __metadata("design:type", Object)
], EmojiListComponent.prototype, "emojis", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('emoji-selection'),
    __metadata("design:type", Object)
], EmojiListComponent.prototype, "emojiSelectionEmitter", void 0);
EmojiListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-list',
        styles: [__webpack_require__(168)],
        template: "\n  <div class=\"emoji-list\">\n    <ng-container *ngFor=\"let emojiCategory of emojis | notEmptyEmojiCategory\">\n      <emoji-category [category]=\"emojiCategory\"></emoji-category>\n      <div class=\"emoji-buttons\">\n        <emoji-button \n        *ngFor=\"let emoji of emojiCategory.emojis\"\n        (selection)=\"emojiSelectionEmitter.emit($event)\"\n        [emoji]=\"emoji\"></emoji-button>\n      </div>\n    </ng-container>\n  </div>\n  "
    }),
    __metadata("design:paramtypes", [])
], EmojiListComponent);

var _a;
//# sourceMappingURL=emoji-list.component.js.map

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmojiPickerComponent = (function () {
    function EmojiPickerComponent(_renderer, _el) {
        var _this = this;
        this._renderer = _renderer;
        this._el = _el;
        this.selectionEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this.pickerCloseEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this._windowResize = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this._windowResize
            .takeUntil(this._destroyed)
            .debounceTime(100)
            .subscribe(function (event) {
            _this.setPosition(_this._currentTarget, _this._currentDirection);
        });
    }
    EmojiPickerComponent.prototype.setPosition = function (target, directionCode) {
        if (directionCode === void 0) { directionCode = __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].bottom; }
        if (!target) {
            return console.error('Emoji-Picker: positioning failed due to missing target element or direction code');
        }
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', '');
        /** Store anchor and direction */
        this._currentTarget = target;
        this._currentDirection = directionCode;
        var targetBorders = target.nativeElement.getBoundingClientRect(), thisBorders = this._el.nativeElement.getBoundingClientRect();
        var heightCorrection = 0, widthCorrection = 0;
        /** Setting up centering of picker for all cases */
        switch (this._currentDirection) {
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].top:
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].bottom:
                widthCorrection = targetBorders.left - thisBorders.left + (targetBorders.width - thisBorders.width) / 2;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].left:
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].right:
                heightCorrection = targetBorders.top - thisBorders.top + (targetBorders.height - thisBorders.height) / 2;
                break;
        }
        /** Setting up relative positioning for all cases */
        switch (this._currentDirection) {
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].top:
                heightCorrection = targetBorders.top - thisBorders.bottom;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].left:
                widthCorrection = targetBorders.left - thisBorders.right;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].right:
                widthCorrection = targetBorders.right - thisBorders.left;
                break;
            case __WEBPACK_IMPORTED_MODULE_1__lib_picker_directions__["a" /* DIRECTIONS */].bottom:
                heightCorrection = targetBorders.bottom - thisBorders.top;
                break;
        }
        /** Correcting positioning due to overflow problems */
        if (thisBorders.bottom + heightCorrection > window.innerHeight) {
            heightCorrection += window.innerHeight - (thisBorders.bottom + heightCorrection);
        }
        if (thisBorders.top + heightCorrection < 0) {
            heightCorrection -= (thisBorders.top + heightCorrection);
        }
        if (thisBorders.right + widthCorrection > window.innerWidth) {
            widthCorrection += window.innerWidth - (thisBorders.right + widthCorrection);
        }
        if (thisBorders.left + widthCorrection < 0) {
            widthCorrection -= (thisBorders.left + widthCorrection);
        }
        /** set the position adjustments to the emoji picker element */
        this._renderer.setElementStyle(this._el.nativeElement, 'transform', "translate(" + widthCorrection + "px," + heightCorrection + "px)");
    };
    EmojiPickerComponent.prototype.setAutofocus = function (value) {
        this.emojiPickerAutofocus = value;
    };
    EmojiPickerComponent.prototype.onBackground = function (event) {
        /** internal mousedowns are ignored */
        if (event === this._lastHostMousedownEvent || event.emojiPickerExempt) {
            return;
        }
        this.pickerCloseEmitter.emit(event);
    };
    EmojiPickerComponent.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiPickerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('emoji-select'),
    __metadata("design:type", Object)
], EmojiPickerComponent.prototype, "selectionEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('picker-close'),
    __metadata("design:type", Object)
], EmojiPickerComponent.prototype, "pickerCloseEmitter", void 0);
EmojiPickerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-picker',
        styles: [':host { position: absolute; z-index: 9999; }'],
        template: "\n  <emoji-content (emoji-selection)=\"selectionEmitter.emit($event)\" [inputAutofocus]=\"emojiPickerAutofocus\"></emoji-content>\n  ",
        host: {
            '(document:mousedown)': 'onBackground($event)',
            '(mousedown)': '_lastHostMousedownEvent = $event',
            '(window:resize)': '_windowResize.next($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object])
], EmojiPickerComponent);

var _a, _b;
//# sourceMappingURL=emoji-picker.component.js.map

/***/ }),

/***/ 97:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_throttleTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiSearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmojiSearchComponent = (function () {
    function EmojiSearchComponent(_renderer) {
        var _this = this;
        this._renderer = _renderer;
        this.searchEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this._searchValue = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._searchValue
            .takeUntil(this._destroyed)
            .subscribe(function (value) {
            _this.searchEmitter.emit(value);
        });
    }
    EmojiSearchComponent.prototype.ngAfterViewInit = function () {
        if (this.inputAutofocus) {
            this._renderer.invokeElementMethod(this.input.nativeElement, 'focus');
        }
    };
    EmojiSearchComponent.prototype.handleInputChange = function (event) {
        this._searchValue.next(event);
    };
    EmojiSearchComponent.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiSearchComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('inputAutofocus'),
    __metadata("design:type", Boolean)
], EmojiSearchComponent.prototype, "inputAutofocus", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('search'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]) === "function" && _a || Object)
], EmojiSearchComponent.prototype, "searchEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["i" /* ViewChild */])('input'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _b || Object)
], EmojiSearchComponent.prototype, "input", void 0);
EmojiSearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'emoji-search',
        styles: [__webpack_require__(169)],
        template: "\n  <input type=\"text\" autocomplete=\"off\" #input (input)=\"handleInputChange($event.target.value)\" placeholder=\"Search\"/>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["j" /* Renderer */]) === "function" && _c || Object])
], EmojiSearchComponent);

var _a, _b, _c;
//# sourceMappingURL=emoji-search.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_picker_directions__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6____ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerApiDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var EmojiPickerApiDirective = (function () {
    function EmojiPickerApiDirective(_cfr, _vcr, _el) {
        var _this = this;
        this._cfr = _cfr;
        this._vcr = _vcr;
        this._el = _el;
        this._directionCode = __WEBPACK_IMPORTED_MODULE_5__lib_picker_directions__["a" /* DIRECTIONS */].bottom;
        this.emojiPickerIfEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        /** (emojiPickerSelect)="eventHandler($event)" // emits emoji picking event */
        this.selectEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this._emojiPickerOpenState = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._destroyed = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._emojiSubs = [];
        this._emojiPickerOpenState
            .takeUntil(this._destroyed)
            .distinctUntilChanged()
            .subscribe(function (value) {
            if (value) {
                _this.openPicker();
            }
            else {
                _this.closePicker();
            }
        });
    }
    Object.defineProperty(EmojiPickerApiDirective.prototype, "emojiPickerDirection", {
        /** [emojiPickerDirection]="'top' || 'bottom' || 'left' || 'right'" defaults to 'bottom' */
        set: function (direction) {
            if (__WEBPACK_IMPORTED_MODULE_5__lib_picker_directions__["a" /* DIRECTIONS */][direction] === undefined) {
                console.error("Emoji-Picker: direction '" + direction + "' passed as input does not exist in DIRECTIONS table, defaulting to 'bottom'");
                this._directionCode = __WEBPACK_IMPORTED_MODULE_5__lib_picker_directions__["a" /* DIRECTIONS */].bottom;
            }
            else {
                this._directionCode = __WEBPACK_IMPORTED_MODULE_5__lib_picker_directions__["a" /* DIRECTIONS */][direction];
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerApiDirective.prototype, "emojiPickerIf", {
        /** [(emojiPickerIf)]="true || false" opens up or closes the picker */
        set: function (condition) {
            this._emojiPickerOpenState.next(condition);
        },
        enumerable: true,
        configurable: true
    });
    EmojiPickerApiDirective.prototype.openPicker = function () {
        var _this = this;
        this._emojiPickerFactory = this._emojiPickerFactory || this._cfr.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_4__components__["b" /* EmojiPickerComponent */]);
        this._emojiPickerRef = this._emojiPickerRef || this._vcr.createComponent(this._emojiPickerFactory);
        this.recordSelection();
        this._emojiPickerRef.instance.setPosition(this._el, this._directionCode);
        this._emojiPickerRef.instance.setAutofocus(this.emojiPickerAutofocus);
        this._emojiSubs.push(this._emojiPickerRef.instance.pickerCloseEmitter.subscribe(function (event) { return _this.emojiPickerIfEmitter.emit(false); }), this._emojiPickerRef.instance.selectionEmitter.subscribe(function (event) { return _this.selectEmitter.emit(__WEBPACK_IMPORTED_MODULE_6____["b" /* EmojiEvent */].fromArray(event)); }));
        this.restoreSelection();
    };
    EmojiPickerApiDirective.prototype.closePicker = function () {
        if (!this._emojiPickerRef || !this._emojiPickerRef.destroy) {
            return;
        }
        this._emojiSubs.forEach(function (subscription) { return subscription.unsubscribe(); });
        this._emojiPickerRef.destroy();
        this._emojiSubs = [];
        delete this._emojiPickerRef;
    };
    EmojiPickerApiDirective.prototype.recordSelection = function () {
        if (!this.emojiPickerPreserveSelection) {
            return;
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                return this._recordedSelection = sel.getRangeAt(0);
            }
        }
        else if (document['selection'] && document['selection'].createRange) {
            return this._recordedSelection = document['selection'].createRange();
        }
    };
    EmojiPickerApiDirective.prototype.restoreSelection = function () {
        if (!this.emojiPickerPreserveSelection || !this._recordedSelection) {
            return;
        }
        if (window.getSelection) {
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(this._recordedSelection);
        }
        else if (document['selection'] && this._recordedSelection.select) {
            this._recordedSelection.select();
        }
    };
    EmojiPickerApiDirective.prototype.ngOnDestroy = function () {
        this._destroyed.next(true);
    };
    return EmojiPickerApiDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojiPickerDirection'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], EmojiPickerApiDirective.prototype, "emojiPickerDirection", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojiPickerPreserveSelection'),
    __metadata("design:type", Boolean)
], EmojiPickerApiDirective.prototype, "emojiPickerPreserveSelection", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojiPickerIf'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], EmojiPickerApiDirective.prototype, "emojiPickerIf", null);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('emojiPickerIfChange'),
    __metadata("design:type", Object)
], EmojiPickerApiDirective.prototype, "emojiPickerIfEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('emojiPickerSelect'),
    __metadata("design:type", Object)
], EmojiPickerApiDirective.prototype, "selectEmitter", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Input */])('emojiPickerAutofocus'),
    __metadata("design:type", Boolean)
], EmojiPickerApiDirective.prototype, "emojiPickerAutofocus", void 0);
EmojiPickerApiDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Directive */])({
        selector: '[emojiPickerIf]',
        host: {
            '(mousedown)': '$event.emojiPickerExempt = true' // marking off event listening on anchor
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["p" /* ComponentFactoryResolver */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* ViewContainerRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _c || Object])
], EmojiPickerApiDirective);

var _a, _b, _c;
//# sourceMappingURL=emoji-picker-api.directive.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src__ = __webpack_require__(25);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerCaretDirective; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmojiPickerCaretDirective = (function () {
    function EmojiPickerCaretDirective(_el) {
        var _this = this;
        this._el = _el;
        this.caretEmitter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["g" /* EventEmitter */]();
        this._caretEvent$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._destroyed$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this._lastCaretEvent = __WEBPACK_IMPORTED_MODULE_4__src__["c" /* CaretEvent */].generateNullEvent();
        this._caretEvent$
            .takeUntil(this._destroyed$)
            .distinctUntilChanged(function (event1, event2) {
            return __WEBPACK_IMPORTED_MODULE_4__src__["c" /* CaretEvent */].compare(event1, event2);
        })
            .subscribe(function (event) {
            _this.caretEmitter.emit(event);
            _this._lastCaretEvent = event.clone();
        });
    }
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "doc", {
        get: function () {
            if (!this._doc) {
                this._doc = this._el.nativeElement.ownerDocument || this._el.nativeElement.document || document;
            }
            return this._doc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(EmojiPickerCaretDirective.prototype, "win", {
        get: function () {
            if (!this._win) {
                this._win = this.doc.defaultView || this.doc.parentWindow || window;
            }
            return this._win;
        },
        enumerable: true,
        configurable: true
    });
    EmojiPickerCaretDirective.prototype.ngOnInit = function () {
        if (!this._el.nativeElement.getAttribute('contenteditable') && this._el.nativeElement.tagName.toLowerCase() !== 'input') {
            throw new Error('(emojiPickerPositionEmitter) should only work on contenteditable enabled or input elements');
        }
    };
    EmojiPickerCaretDirective.prototype.ngOnDestroy = function () {
        this._destroyed$.next(true);
    };
    EmojiPickerCaretDirective.prototype.updateCaretPosition = function () {
        var cEvent = __WEBPACK_IMPORTED_MODULE_4__src__["c" /* CaretEvent */].generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        this._caretEvent$.next(cEvent);
    };
    EmojiPickerCaretDirective.prototype.updateCaretDueMutation = function () {
        var _this = this;
        var cEvent = __WEBPACK_IMPORTED_MODULE_4__src__["c" /* CaretEvent */].generateCaretEvent(this.win, this.doc, this._el.nativeElement);
        var textMovement = cEvent.textContent.length - this._lastCaretEvent.textContent.length;
        cEvent.caretOffset = this._lastCaretEvent.caretOffset + textMovement;
        /** change detection after DOMSubtreeModified event is weird
         * ChangeDetectorRef.detectChanges(), ChangeDetectorRef.markForCheck(), ApplicationRef.tick(), NgZone.run()
         * all of those methods did not work as expected.
         * As a temporary hack I am emitting an event after a short timeout, which is fine due to the _caretEvent$ smart stream
         */
        setTimeout(function () {
            _this._caretEvent$.next(cEvent);
        });
    };
    return EmojiPickerCaretDirective;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* Output */])('emojiPickerCaretEmitter'),
    __metadata("design:type", Object)
], EmojiPickerCaretDirective.prototype, "caretEmitter", void 0);
EmojiPickerCaretDirective = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Directive */])({
        selector: '[emojiPickerCaretEmitter]',
        host: {
            '(keyup)': 'updateCaretPosition()',
            '(mouseup)': 'updateCaretPosition()',
            '(selectstart)': 'updateCaretPosition()',
            '(focus)': 'updateCaretPosition()',
            '(DOMSubtreeModified)': 'updateCaretDueMutation($event)'
        }
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["f" /* ElementRef */]) === "function" && _a || Object])
], EmojiPickerCaretDirective);

var _a;
//# sourceMappingURL=emoji-picker-caret.directive.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.bundle.js.map