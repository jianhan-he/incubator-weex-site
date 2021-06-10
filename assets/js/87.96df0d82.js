(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{324:function(t,e,s){"use strict";s.r(e);var n=s(0),a=Object(n.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),s("p",[t._v('"Downgrade" means to rendering Weex\'s pages as the normal web page.')]),s("p",[t._v('Weex supports cross-platform (Android, iOS, Web), with different SDK but same APIs, under the hood, it\'s using platform capability to render pages. However with the iteration of the platforms and app, version fragmentation problem is inevitable. If you are using the feature which only supported in a higher version, you can let your page "downgrade" at the lower versions (The web renderer of Weex, or the "WebSDK", is implemented in Javascript, so it can be updated dynamically).')]),t._m(1),t._m(2),t._m(3),t._m(4),t._m(5),t._m(6),t._m(7),t._m(8),t._m(9),s("ul",[s("li",[t._v("npm module: "),s("a",{attrs:{href:"https://www.npmjs.com/package/@weex-project/downgrade",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.npmjs.com/package/@weex-project/downgrade"),s("OutboundLink")],1)]),s("li",[t._v("source code: "),s("a",{attrs:{href:"https://github.com/weexteam/downgrade",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/weexteam/downgrade"),s("OutboundLink")],1)])]),t._m(10),t._m(11),s("p",[t._v("The APIs of this package are as follows:")]),t._m(12),s("p",[t._v("Force downgrade. Will downgrade immediately once you call this API.")]),t._m(13),t._m(14),t._m(15),t._m(16),t._m(17),t._m(18),t._m(19),t._m(20),t._m(21),t._m(22),s("p",[t._v("Weex provides a Webpack plugin "),s("a",{attrs:{href:"https://www.npmjs.com/package/webpack-plugin-downgrade",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("webpack-plugin-downgrade")]),s("OutboundLink")],1),t._v(" to inject downgrade codes to the generated file.")]),t._m(23),s("p",[t._v("Supported options as as follows:")]),t._m(24),t._m(25),t._m(26),t._m(27),t._m(28),t._m(29),t._m(30),s("p",[t._v("In the npm package and Webpack plugin, they are using a simple version of "),s("a",{attrs:{href:"https://semver.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Semantic Versioning"),s("OutboundLink")],1),t._v(" to verify the version number, but "),t._m(31)]),t._m(32),s("p",[t._v("The device mode string in defined by mobile device manufacturer.")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"downgrade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downgrade"}},[this._v("#")]),this._v(" Downgrade")])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("“Downgrade” is not a technical limitation, but it's useful to handle real world problems.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"emit-downgrade"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#emit-downgrade"}},[this._v("#")]),this._v(" Emit Downgrade")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v('In Weex, the "downgrade" behavior is emitted at the front-end and is implemented by the native. The trigger of it is by calling the '),e("code",[this._v("error")]),this._v(" method of the "),e("code",[this._v("instanceWrap")]),this._v(" module.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" instanceWrap "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("requireModule")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'instanceWrap'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ninstanceWrap"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("errorType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" errorCode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The "),e("code",[this._v("instanceWrap")]),this._v(" only contains one API which is "),e("code",[this._v("error")]),this._v(", the arguments of it will be used to differentiate the type and reason of the downgrade behavior, they are not restrictions but conventions.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("errorType")]),t._v(": "),s("code",[t._v("Number")]),t._v(" Error type, usually be "),s("code",[t._v("1")]),t._v(" when it was emitted at front-end.")]),s("li",[s("code",[t._v("errorCode")]),t._v(": "),s("code",[t._v("Number")]),t._v(" Error code, the meaning are as follows:\n"),s("ul",[s("li",[s("code",[t._v("1001")]),t._v(": The version of os (Android or iOS) is not satisfied.")]),s("li",[s("code",[t._v("1002")]),t._v(": The version of app is not satisfied.")]),s("li",[s("code",[t._v("1003")]),t._v(": The version of WeexSDK is not satisfied.")]),s("li",[s("code",[t._v("1004")]),t._v(": The device mode is not satisfied.")])])]),s("li",[s("code",[t._v("message")]),t._v(": "),s("code",[t._v("String")]),t._v(" Error message.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("blockquote",[e("p",[this._v("Calling the API anywhere in the page will trigger the downgrade immediately. It a common way to determine whether to downgrade at the beginning of the page by checking if environment meets the requirements.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"useful-tools"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#useful-tools"}},[this._v("#")]),this._v(" Useful Tools")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"npm-module"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#npm-module"}},[this._v("#")]),this._v(" Npm module")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("First install the "),e("code",[this._v("@weex-project/downgrade")]),this._v(" package, the import it to your code.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("import")]),this._v(" downgrade "),e("span",{pre:!0,attrs:{class:"token keyword"}},[this._v("from")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'@weex-project/downgrade'")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"force"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#force"}},[this._v("#")]),e("code",[this._v("force()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("downgrade"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[this._v("force")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(")")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"check-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#check-options"}},[this._v("#")]),e("code",[this._v("check(options)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Check if the environment satisfies the "),e("code",[this._v("options")]),this._v(", return the diagnose result, and "),e("strong",[this._v("will not emit downgrade.")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The format of "),e("code",[this._v("options")]),this._v(" will be explained later, the return value is as follow:")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("isDowngrade")]),t._v(": Should downgrade or not. (It's "),s("code",[t._v("true")]),t._v(" of the environment not satisfies the "),s("code",[t._v("options")]),t._v(")")]),s("li",[s("code",[t._v("errorType")]),t._v(": Error type, only exist when "),s("code",[t._v("isDowngrade")]),t._v(" is "),s("code",[t._v("true")]),t._v(".")]),s("li",[s("code",[t._v("code")]),t._v(": Error code, only exist when "),s("code",[t._v("isDowngrade")]),t._v(" is "),s("code",[t._v("true")]),t._v(".")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" downgrade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("check")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" osVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=9.0'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("result"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isDowngrade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Do something")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"condition-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#condition-options"}},[this._v("#")]),e("code",[this._v("condition(options)")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("strong",[this._v("Emit downgrade")]),this._v(" when the environment is not satisfies the "),e("code",[this._v("options")]),this._v(".")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("downgrade"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("condition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    appVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=7.8.0'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    weexVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<0.16.0'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"webpack-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack-plugin"}},[this._v("#")]),this._v(" Webpack Plugin")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// webpack.config.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" DowngradePlugin "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack-plugin-downgrade'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// other configs ...")]),t._v("\n\n  plugins"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DowngradePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* downgrade options */")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("force")]),t._v(": "),s("code",[t._v("Boolean")]),t._v(" Whether to force downgrade.")]),s("li",[s("code",[t._v("condition")]),t._v(": "),s("code",[t._v("Object")]),t._v(" The condition to emit downgrade.")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Force downgrade")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DowngradePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" force"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Downgrade if the environment satisfies the condition")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DowngradePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  condition"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      deviceModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone5,1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      osVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=4.4'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      weexVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<0.16.0'")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"downgrade-options"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#downgrade-options"}},[this._v("#")]),this._v(" Downgrade Options")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The downgrade configuration is a plain object which contains "),e("code",[this._v("ios")]),this._v(" and "),e("code",[this._v("android")]),this._v(" options, the config properties within them are the same. The page will be downgrade once any of the option is satisfied.")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("table",[s("thead",[s("tr",[s("th",[t._v("Option")]),s("th",[t._v("Data Format")]),s("th",[t._v("Note")])])]),s("tbody",[s("tr",[s("td",[s("code",[t._v("osVersion")])]),s("td",[t._v("Semantic Version")]),s("td",[t._v("Version range of mobile OS (Android or iOS).")])]),s("tr",[s("td",[s("code",[t._v("appVersion")])]),s("td",[t._v("Semantic Version")]),s("td",[t._v("Version range of App.")])]),s("tr",[s("td",[s("code",[t._v("weexVersion")])]),s("td",[t._v("Semantic Version")]),s("td",[t._v("Version range of Weex SDK.")])]),s("tr",[s("td",[s("code",[t._v("deviceModel")])]),s("td",[t._v("String Array")]),s("td",[t._v("Device model list.")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" options "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  android"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Downgrade if Android version is lower than 4.5")]),t._v("\n    osVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<4.5'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Only downgrade in the v8.1.10 of App")]),t._v("\n    appVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'8.1.10'")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n  ios"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Downgrade in WeexSDK v0.18.2 or lower")]),t._v("\n    weexVersion"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'<=0.18.2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Downgrade in iPhone 5 or iPhone 5s")]),t._v("\n    deviceModel"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone5,1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'iPhone6,1'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"semantic-version"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#semantic-version"}},[this._v("#")]),this._v(" Semantic Version")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("strong",[t._v("only supports "),s("code",[t._v(">")]),t._v(", "),s("code",[t._v("<")]),t._v(", "),s("code",[t._v("=")]),t._v(", "),s("code",[t._v(">=")]),t._v(", "),s("code",[t._v("<=")]),t._v(" those five compare operator")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"device-model"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#device-model"}},[this._v("#")]),this._v(" Device Model")])}],!1,null,null,null);e.default=a.exports}}]);