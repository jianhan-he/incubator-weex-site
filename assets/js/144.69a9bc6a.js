(window.webpackJsonp=window.webpackJsonp||[]).push([[144],{388:function(t,e,r){"use strict";r.r(e);var s=r(0),i=Object(s.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"手势"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#手势"}},[t._v("#")]),t._v(" 手势 "),r("Badge",{attrs:{type:"warning",text:"该功能属于实验性功能"}})],1),r("p",[t._v("Weex 封装了原生的触摸事件以提供手势系统。使用手势类似于在 Weex 中使用事件，只需在节点上监听手势即可。")]),t._m(0),r("p",[t._v("目前，仅支持以下四种手势类型：")]),r("ul",[r("li",[t._m(1),r("table",[t._m(2),r("tbody",[t._m(3),t._m(4),t._m(5),r("tr",[r("td",[r("code",[t._v("stopPropagation")]),r("Badge",{attrs:{type:"info",text:"v0.18+"}})],1),r("td",[t._v("每个 touch 事件都会被传递过来, 可控制 touch 事件是否冒泡（返回 true）或者停止（返回 false）；用于解决事件冲突或者自定义手势")])])])]),t._m(6),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/3f03a4f64fd7e04db82bd42b555346a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("试一下"),r("OutboundLink")],1)])])]),r("ul",[r("li",[t._m(7),r("table",[t._m(8),r("tbody",[t._m(9),t._m(10),t._m(11),r("tr",[r("td",[r("code",[t._v("horizontalpan")]),r("Badge",{attrs:{type:"info",text:"v0.10+"}})],1),t._m(12)]),r("tr",[r("td",[r("code",[t._v("verticalpan")]),r("Badge",{attrs:{type:"info",text:"v0.10+"}})],1),t._m(13)])])])]),r("li",[t._m(14),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/2693655847d890fe96160cc7a955040b",target:"_blank",rel:"noopener noreferrer"}},[t._v("试一下"),r("OutboundLink")],1)])]),r("li",[t._m(15),r("p",[r("a",{attrs:{href:"http://dotwe.org/vue/a077a3cff49b1098f38349fd70f92de9",target:"_blank",rel:"noopener noreferrer"}},[t._v("试一下"),r("OutboundLink")],1)])])]),t._m(16),t._m(17),r("p",[t._v("开发者可以根据自己的情况选择合适的手势。")]),t._m(18),r("p",[t._v("以下属性可以在手势的回调中使用：")]),t._m(19),t._m(20),t._m(21),t._m(22),t._m(23),t._m(24),t._m(25),t._m(26),t._m(27),r("ul",[r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/3f03a4f64fd7e04db82bd42b555346a2",target:"_blank",rel:"noopener noreferrer"}},[t._v("Touch"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/2693655847d890fe96160cc7a955040b",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swipe"),r("OutboundLink")],1)]),r("li",[r("a",{attrs:{href:"http://dotwe.org/vue/a077a3cff49b1098f38349fd70f92de9",target:"_blank",rel:"noopener noreferrer"}},[t._v("LongPress"),r("OutboundLink")],1)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"手势类型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#手势类型"}},[this._v("#")]),this._v(" 手势类型")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("touch: 当触摸到一个点，移动或从触摸面移开时触发 "),e("code",[this._v("touch")]),this._v(" 手势。触摸手势很精准，它会返回所有详细的事件信息。所以，监听 "),e("code",[this._v("touch")]),this._v(" 手势可能很慢，即使只移动一丁点也需要处理大量事件。有三种类型的 "),e("code",[this._v("touch")]),this._v(" 手势：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("type")]),e("th",[this._v("描述")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("touchstart")])]),e("td",[this._v("将在触摸到触摸面上时触发")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("touchmove")])]),e("td",[this._v("将在触摸点在触摸面移动时被触发")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("touchend")])]),e("td",[this._v("将在从触摸面离开时被触发")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1rGU6n7voK1RjSZFNXXcxMVXa-251-282.gif",alt:""}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",[t._v("Pan："),r("code",[t._v("pan")]),t._v(" 手势也会返回触摸点在触摸面的移动信息，有点类似于 "),r("code",[t._v("touch")]),t._v(" 手势。但是 "),r("code",[t._v("pan")]),t._v(" 手势只会采样收集部分事件信息因此比 "),r("code",[t._v("touch")]),t._v(" 事件要快得多，当然精准性差于 "),r("code",[t._v("touch")]),t._v("。"),r("code",[t._v("pan")]),t._v(" 也有三种类型的手势，这些手势的意义与 "),r("code",[t._v("touch")]),t._v("s 完全一样：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("thead",[e("tr",[e("th",[this._v("type")]),e("th",[this._v("描述")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("panstart")])]),e("td",[this._v("pan 开始")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("panmove")])]),e("td",[this._v("pan 移动事件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("tr",[e("td",[e("code",[this._v("panend")])]),e("td",[this._v("pan 结束事件")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("手势的 "),e("code",[this._v("start/move/end")]),this._v(" 状态保存在 "),e("code",[this._v("state")]),this._v(" 特性中。目前该手势在 Android 下会与 click 事件冲突")])},function(){var t=this.$createElement,e=this._self._c||t;return e("td",[this._v("手势的 "),e("code",[this._v("start/move/end")]),this._v(" 状态保存在 "),e("code",[this._v("state")]),this._v(" 特性中。目前该手势在 Android 下会与 click 事件冲突")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Swipe: "),e("code",[this._v("swipe")]),this._v(" 将会在用户在屏幕上滑动时触发，一次连续的滑动只会触发一次 "),e("code",[this._v("swipe")]),this._v(" 手势。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("LongPress: "),e("code",[this._v("LongPress")]),this._v("将会在触摸点连续保持 500 ms 以上时触发")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("touch")]),this._v(" 和 "),e("code",[this._v("pan")]),this._v(" 非常接近，它们的特点可以总结成这样：")])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",[e("thead",[e("tr",[e("th",[this._v("type")]),e("th",[this._v("描述")])])]),e("tbody",[e("tr",[e("td",[e("code",[this._v("Touch")])]),e("td",[this._v("完整信息，精准、很慢")])]),e("tr",[e("td",[e("code",[this._v("Pan")])]),e("td",[this._v("抽样信息，很快，不够精准")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"属性"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#属性"}},[this._v("#")]),this._v(" 属性")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ul",[r("li",[r("code",[t._v("direction")]),t._v(": 仅在 "),r("code",[t._v("swipe")]),t._v(" 手势中存在，返回滑动方向，返回值可能为 "),r("code",[t._v("up")]),t._v(", "),r("code",[t._v("left")]),t._v(", "),r("code",[t._v("bottom")]),t._v(", "),r("code",[t._v("right")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[e("code",[this._v("changedTouches")]),this._v(": 一个数组，包含了当前手势的触摸点的运动轨迹")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"changedtouches"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#changedtouches"}},[this._v("#")]),this._v(" changedTouches")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("code",[this._v("changedTouches")]),this._v(" 是一个数组，其子元素中包含以下属性：")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("table",[r("thead",[r("tr",[r("th",[t._v("key")]),r("th",[t._v("描述")])])]),r("tbody",[r("tr",[r("td",[r("code",[t._v("identifier")])]),r("td",[t._v("触摸点的唯一标识符")])]),r("tr",[r("td",[r("code",[t._v("pageX")])]),r("td",[t._v("触摸点相对于文档左侧边缘的 X 轴坐标")])]),r("tr",[r("td",[r("code",[t._v("pageY")])]),r("td",[t._v("触摸点相对于文档顶部边缘的 Y 轴坐标")])]),r("tr",[r("td",[r("code",[t._v("screenX")])]),r("td",[t._v("触摸点相对于屏幕左侧边缘的 X 轴坐标")])]),r("tr",[r("td",[r("code",[t._v("screenY")])]),r("td",[t._v("触摸点相对于屏幕顶部边缘的 Y 轴坐标")])]),r("tr",[r("td",[r("code",[t._v("force")])]),r("td",[t._v("屏幕收到的按压力度，值的范围为 0~1")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("注意")]),e("p",[this._v("force 属性目前在支持 forceTouch iOS 设备才支持, iPhone 6s 及更新的 iOS 设备")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"约束"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#约束"}},[this._v("#")]),this._v(" 约束")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("目前，由于会触发大量事件冲突，Weex Android 还不支持在滚动类型的元素上监听手势，例如 "),e("code",[this._v("scroller")]),this._v(", "),e("code",[this._v("list")]),this._v(" 和 "),e("code",[this._v("webview")]),this._v(" 这三个组件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"demo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#demo"}},[this._v("#")]),this._v(" Demo")])}],!1,null,null,null);e.default=i.exports}}]);