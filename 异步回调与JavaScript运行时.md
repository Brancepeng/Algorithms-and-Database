 1.什么是JavaScript运行时?

JavaScript 运行时是执行 JavaScript 代码的环境。它提供了 JavaScript 语言的实现，以及必要的功能，例如库、API 和执行 JavaScript 代码的机制。

JavaScript 代码可以在各种环境中运行，例如 Web 浏览器、服务器端平台（如 Node.js）或移动应用程序。这些环境中的每一个都有自己的 JavaScript 运行时，可提供一组不同的特性和功能。

例如，Web 浏览器的 JavaScript 运行时提供 API 用于与文档对象模型 (DOM) 交互并处理鼠标单击和键盘按下等事件，而 Node.js 运行时提供用于文件系统访问、网络通信和运行服务器端的 API代码。

总之，JavaScript 运行时为执行 JavaScript 代码提供了必要的基础设施，并提供对各种功能和 API 的访问，使开发人员能够构建复杂的交互式应用程序。 */

例如,我们编写的JavaScript代码在Chrome的JavaScript runtime中执行的.runtime中执行的.runtime中执行的.runtime中执行的.

Chrome Browser javascript runtime 包括以下组件: 

1. v8 javascript engine 

这里是执行JavaScript代码的v8引擎,由一个a call stack(调用栈,JavaScript代码执行的地方),和 a memory heap(堆,一块内存区,用于存储JavaScript代码运行时的所有变量).

2. WEB/Browser APIS

比如DOM,timers(定时器),storage(浏览器缓存)等等,这些给JavaScript引擎添加了新的功能,但是并不是JavaScript语言的一部分.所有api由浏览器提供.
3.事件循环 event loop


综上,要运行java代码,不仅需要JavaScript engine,而且还需要JavaScript Runtime.

*/
