(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{302:function(e,t,o){"use strict";o.r(t);var r=o(0),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"content"},[e._m(0),o("p",[e._v("Weex encapsulates native touch events to provide a gesture system. Using gesture is similar to use event in Weex.")]),e._m(1),o("p",[e._v("For now, there are four types of gestures:")]),e._m(2),o("p",[e._v("The Touch gesture and Pan is very close to each other, with following features hold:")]),e._m(3),o("p",[e._v("Users may choose their gesture according to their situation.")]),e._m(4),o("p",[e._v("The following properties can be used in gesture callback:")]),e._m(5),e._m(6),e._m(7),e._m(8),e._m(9),o("p",[o("a",{attrs:{href:"http://dotwe.org/vue/91b6929f4f9f97a099a30c516dc2db06",target:"_blank",rel:"noopener noreferrer"}},[e._v("have a try"),o("OutboundLink")],1)]),e._m(10),e._m(11)])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("Experiment Feature")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"type"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#type"}},[this._v("#")]),this._v(" Type")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("strong",[e._v("Touch")]),e._v(". Touch gesture is fired when a touch point is placed, moved or removed from the touch surface. Touch gesture is accuracy as it will report every trivial event. As a result, listening to touch gesture may be slow, a great deal of events needs to be processed even a small move happened. There are three types of Touch gesture:\n"),o("ul",[o("li",[o("code",[e._v("touchstart")]),e._v(" will be fired when a touch point is placed on the touch surface.")]),o("li",[o("code",[e._v("touchmove")]),e._v(" will be fired when a touch point is moved along the touch surface.")]),o("li",[o("code",[e._v("touchend")]),e._v(" will be fired when a touch point is removed from the touch surface.")]),o("li",[o("code",[e._v("stopPropagation")]),e._v("  every touch event will be fired, you can control touch event whether should be bubbled by return true(should bubble) or false(touch event consumed by this view, will not be bubbled). this can be used to handle touch confliction between views. (since v0.18+)")])])]),o("li",[o("strong",[e._v("Pan")]),e._v(". Pan gesture also report motion of touch point on the touch surface, which is similar to touch gesture. But Pan gesture is sampled and faster than the touch event. As consequence, it is less accuracy than touch gesture. There are also three types of Pan gesture, and the meaning of these types is very close to types of Touch.\n"),o("ul",[o("li",[o("code",[e._v("panstart")]),e._v(" will be fired when pan start")]),o("li",[o("code",[e._v("panmove")]),e._v("  will be fired when pan move")]),o("li",[o("code",[e._v("panend")]),e._v(" will be fired when pan end")])])]),o("li",[o("strong",[e._v("Horizontal/Vertical Pan")]),o("span",{staticClass:"api-version"},[e._v("v0.10+")]),e._v(" . Mainly used for cell swipe gestures before conflict resolving system is completed. start/move/end state of the gesture will be passed by "),o("code",[e._v("state")]),e._v(" property. "),o("strong",[e._v("Note")]),e._v(": These gestures are in conflict with click event on Android currently.\n"),o("ul",[o("li",[o("code",[e._v("horizontalpan")])]),o("li",[o("code",[e._v("verticalpan")])])])]),o("li",[o("strong",[e._v("Swipe")]),e._v(". Swipe is fired when user swipe a touch point on the screen. A serial of motion will only trigger one Swipe gesture.")]),o("li",[o("strong",[e._v("LongPress")]),e._v(". LongPress is fired when a touch point is held for 500 ms or more.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("strong",[this._v("Touch")]),this._v(". Not sampled, accuracy, but slow.")]),t("li",[t("strong",[this._v("Pan")]),this._v(". Sampled, fast, less accuracy.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[this._v("#")]),this._v(" Properties")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",[e._v("direction")]),e._v(". Only exists for "),o("strong",[e._v("Swipe")]),e._v(" gesture. Indicate the direcion of the swipe, choose from "),o("code",[e._v("up")]),e._v(", "),o("code",[e._v("left")]),e._v(", "),o("code",[e._v("bottom")]),e._v(", "),o("code",[e._v("right")]),e._v(".")]),o("li",[o("code",[e._v("changedTouches")]),e._v(". An array of motion for every touch pointer that has contribute to the current gesture.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h3",{attrs:{id:"changedtouches"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#changedtouches"}},[this._v("#")]),this._v(" changedTouches")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("changedTouches")]),this._v(" is an array, with the following properties in its children:")])},function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ul",[o("li",[o("code",[e._v("identifier")]),e._v(". A unique identifier for a touch pointer.")]),o("li",[o("code",[e._v("pageX")]),e._v(". The X coordinate of the touch pointer relative to the left edge of the document.")]),o("li",[o("code",[e._v("pageY")]),e._v(". The Y coordinate of the touch pointer relative to the top of the document.")]),o("li",[o("code",[e._v("screenX")]),e._v(". The X coordinate of the touch point relative to the left edge of the screen.")]),o("li",[o("code",[e._v("screenY")]),e._v(". The Y coordinate of the touch point relative to the top edge of the screen.")]),o("li",[o("code",[e._v("force")]),e._v(". A float value that represents the amount of pressure the user is applying to the touch surface. This is a value between 0.0 (no pressure) and 1.0 (the maximum amount of pressure the hardware can recognize).")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("blockquote",[t("p",[this._v("iOS only and force is included in iPhone 6S and later models")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"constrain"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#constrain"}},[this._v("#")]),this._v(" Constrain")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Currently, Weex Android do not support listening to gesture on "),t("code",[this._v("scroller")]),this._v(", "),t("code",[this._v("list")]),this._v(" and "),t("code",[this._v("webview")]),this._v(", as it would lead a large amount of event conflicting.")])}],!1,null,null,null);t.default=s.exports}}]);