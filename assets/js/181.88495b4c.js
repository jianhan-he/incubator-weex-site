(window.webpackJsonp=window.webpackJsonp||[]).push([[181],{426:function(t,s,a){"use strict";a.r(s);var e=a(0),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),a("p",[a("a",{attrs:{href:"https://developer.apple.com/library/ios/documentation/Swift/Conceptual/BuildingCocoaApps/MixandMatch.html#//apple_ref/doc/uid/TP40014216-CH10-ID122",target:"_blank",rel:"noopener noreferrer"}},[t._v("Swift和Objective-C"),a("OutboundLink")],1),t._v(" 混编")]),a("p",[t._v("参考完整 "),a("a",{attrs:{href:"https://github.com/acton393/WeexSwiftSample.git",target:"_blank",rel:"noopener noreferrer"}},[t._v("例子"),a("OutboundLink")],1)]),t._m(1),t._m(2),t._m(3)])}),[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"使用-swift-扩展-weex"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-swift-扩展-weex"}},[this._v("#")]),this._v(" 使用 Swift 扩展 Weex")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用-swift-进行-module-扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用-swift-进行-module-扩展"}},[this._v("#")]),this._v(" 使用 Swift 进行 module 扩展")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("因为 module 暴露 method 是通过"),s("code",[this._v("Objective-C")]),this._v("宏来做的，调用的时候是通过反射，所以Swift扩展 module 通过"),s("code",[this._v("extension")]),s("code",[this._v("Objective-C")]),this._v("的类。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("新建 "),a("code",[t._v("WXSwiftTestModule.h/m")]),t._v(" 和 "),a("code",[t._v("WXSwiftTestModule.swift")]),t._v("文件， 在新建Swift文件的时候会提示\n"),a("img",{attrs:{src:"http://img3.tbcdn.cn/L1/461/1/b2ed3ee4a966953c0f98a17f34f6f05e7c91cc6b",alt:"img"}}),t._v("\n选择 "),a("code",[t._v("Create Bridging Header")]),t._v(", 因为我们要在 Swift 中访问 "),a("code",[t._v("Objective-C")]),t._v(" 的一些类，正是通过这个 header暴露 OC 的类给 Swift,header 格式为 "),a("code",[t._v("yourTarget-Bridging-Header.h")]),t._v("，我这里创建完header文件名称为："),a("code",[t._v("WeexDemo-Bridging-Header.h")])])]),a("li",[a("p",[a("code",[t._v("WXSwiftTestModule.h/m")]),t._v("中实现")]),a("ul",[a("li",[a("p",[t._v("WXSwiftTestModule.h 中")]),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Foundation")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Foundation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("WeexSDK")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("WeexSDK")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("h"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n@interface "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WXSwiftTestModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("NSObject")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("WXModuleProtocol")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n@end\n")])])])]),a("li",[a("p",[t._v("WXSwiftTestModule.m 中")]),a("p",[t._v("WeexDemo-Swift.h 这个文件需要编译一下才可以搜索到，具体的路径")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("weex/ios/playground/DerivedData/WeexDemo/Build/Intermediates/WeexDemo.build/Debug-iphonesimulator/WeexDemo.build/DerivedSources/WeexDemo-Swift.h\n")])])]),a("p",[t._v("路径具体需要根据自己工程而定")]),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[t._v("#"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WXSwiftTestModule.h"')]),t._v("\n#"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WeexDemo-Swift.h"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Swift类和方法 被 `Objective-C` 识别需要导入")]),t._v("\n\n@implementation "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("WXSwiftTestModule")]),t._v("\n#pragma clang diagnostic push "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//关闭unknow selector的warrning")]),t._v("\n#pragma clang diagnostic ignored "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"-Wundeclared-selector"')]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("WX_EXPORT_METHOD")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("@"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("selector")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printSome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Swift 中定义的方法，XCode 转换成的最终的方法名称，在`WeexDemo-Swift.h`里面查看")]),t._v("\n\n#pragma clang diagnostic pop\n\n@end\n")])])])])])]),a("li",[a("p",[t._v("Swift 中实现\n扩展 OC 的类 "),a("code",[t._v("WXSwiftTestModule")]),t._v(",增加了一个方法，这个方法就是我们要暴露出来，在 js 中可以调到的")]),a("ul",[a("li",[a("p",[t._v("WXSwiftTestModule.swift")]),a("div",{staticClass:"language-swift extra-class"},[a("pre",{pre:!0,attrs:{class:"language-swift"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("Foundation")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extension")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("WXSwiftTestModule")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  @"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("objc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("printSome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("func")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("String")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("WXModuleCallback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("print")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("callback")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("someThing"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[a("code",[t._v("WXSwiftTestModule")]),t._v(" 和"),a("code",[t._v("WXModuleCallback")]),t._v(" 因为是 OC 的，需要在 "),a("code",[t._v("WeexDemo-Bridging-Header")]),t._v(" 中暴露。")]),a("p",[t._v("注意：请在 Swift 文件中为方法添加 "),a("code",[t._v("@objc")]),t._v(" 修饰符，避免找不到方法的报错。")])]),a("li",[a("p",[t._v("WeexDemo-Bridging-Header.h中")]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('//\n//  Use this file to import your target\'s public headers that you would like to expose to Swift.\n//\n#import "WXSwiftTestModule.h"\n#import "WeexSDK.h"\n')])])]),a("p",[t._v("至此这个使用 Swift 开发的简单的 module 已经完成")])])]),a("h3",{attrs:{id:"module-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-使用"}},[t._v("#")]),t._v(" module 使用")]),a("ul",[a("li",[a("p",[t._v("注册 module")]),a("div",{staticClass:"language-Objective-C extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('[WXSDKEngine registerModule:@"swifter" withClass:[WXSwiftTestModule class]];\n\n')])])])]),a("li",[a("p",[t._v("前端脚本中用法")]),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Swift Module"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("text")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("ready")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" swifter "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" weex"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'swifter'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      swifter"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printSome")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.taobao.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("param")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("nativeLog")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("param"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])])])])}],!1,null,null,null);s.default=n.exports}}]);