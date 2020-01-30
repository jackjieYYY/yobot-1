(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{222:function(t,r,e){"use strict";e.r(r);var a=e(0),o=Object(a.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"windows-运行包（新手推荐）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-运行包（新手推荐）"}},[t._v("#")]),t._v(" Windows 运行包（新手推荐）")]),t._v(" "),a("p",[t._v("在 windows 下使用运行包安装可以参考"),a("a",{attrs:{href:"../videos/Tutorial.mp4"}},[t._v("演示视频")])]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("如果按照此教程部署机器人，需要中等水平的电脑知识和经验。如果连用记事本打开一个 .json 文件都不会，建议在淘宝网直接搜索"),a("a",{attrs:{href:"https://s.taobao.com/search?q=QQ%E6%9C%BA%E5%99%A8%E4%BA%BA",target:"_blank",rel:"noopener noreferrer"}},[t._v("QQ 机器人"),a("OutboundLink")],1),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"准备服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#准备服务器"}},[t._v("#")]),t._v(" 准备服务器")]),t._v(" "),a("p",[t._v("选项 1：租一个服务器，"),a("a",{attrs:{href:"https://yobot.xyz/p/9/",target:"_blank",rel:"noopener noreferrer"}},[t._v("服务器选择参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("选项 2：在自己电脑运行")]),t._v(" "),a("h2",{attrs:{id:"安装酷q机器人"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装酷q机器人"}},[t._v("#")]),t._v(" 安装酷Q机器人")]),t._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[t._v("#")]),t._v(" 下载")]),t._v(" "),a("h4",{attrs:{id:"windows-使用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows-使用"}},[t._v("#")]),t._v(" Windows 使用")]),t._v(" "),a("p",[t._v("yobot 三代基于酷Q机器人和 httpapi 插件实现\n如果你第一次使用酷Q机器人，可以直接下载"),a("a",{attrs:{href:"https://ybdown.zimingdh.com/Packed_CoolQ_httpapi.7z",target:"_blank",rel:"noopener noreferrer"}},[t._v("酷Q-httpapi 整合包"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果你已经使用过酷Q机器人，可以下载"),a("a",{attrs:{href:"https://ybdown.zimingdh.com/Packed_httpapi.7z",target:"_blank",rel:"noopener noreferrer"}},[t._v("httpapi 插件"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果你已经使用过 httpapi 插件，或者想额外开启一个 httpapi 插件，可以下载"),a("a",{attrs:{href:"https://ybdown.zimingdh.com/mirror_of_httpapi.7z",target:"_blank",rel:"noopener noreferrer"}},[t._v("httpapi 插件分身版"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"环境搭建"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境搭建"}},[t._v("#")]),t._v(" 环境搭建")]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://cqhttp.cc/docs/",target:"_blank",rel:"noopener noreferrer"}},[t._v("httpapi插件文档"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("如果你的windows不是最新版，可能无法启动httpapi插件，请安装Visual C++ 可再发行软件包（"),a("a",{attrs:{href:"https://aka.ms/vs/16/release/vc_redist.x86.exe",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载"),a("OutboundLink")],1),t._v("）。如果你的系统是 Windows 7 或 Windows Server 2008、或者安装 Visual C++ 可再发行软件包之后仍然加载失败，则还需要安装通用 C 运行库更新（"),a("a",{attrs:{href:"https://support.microsoft.com/zh-cn/help/3118401/update-for-universal-c-runtime-in-windows",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击进入官网"),a("OutboundLink")],1),t._v("，选择你系统对应的版本下载安装）")]),t._v(" "),a("h3",{attrs:{id:"配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置"}},[t._v("#")]),t._v(" 配置")]),t._v(" "),a("p",[t._v("参考："),a("a",{attrs:{href:"https://cqhttp.cc/docs/#/Configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("httpapi插件文档配置说明"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("由于新装的 httpapi 启动时有时候会重置配置文件，所以如果 httpapi 启动后与下图不符请手动配置一下文件")]),t._v(" "),a("p",[t._v("配置文件位于："),a("code",[t._v("<酷Q运行目录>data\\app\\io.github.richardchien.coolqhttpapi\\config\\general.json")]),t._v("或 "),a("em",[t._v("QQ号.json")]),t._v(" ，将其修改为"),a("a",{attrs:{href:"../files/general.json"}},[t._v("这个链接")]),t._v("中的配置。")]),t._v(" "),a("p",[t._v("配置正确后，启动 httpapi 插件后会反复出现如下都提示")]),t._v(" "),a("p",[a("img",{attrs:{src:e(30),alt:"配置正确图片"}})]),t._v(" "),a("h2",{attrs:{id:"运行yobot服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行yobot服务"}},[t._v("#")]),t._v(" 运行yobot服务")]),t._v(" "),a("h3",{attrs:{id:"windows系统运行包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#windows系统运行包"}},[t._v("#")]),t._v(" Windows系统运行包")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://yuudi.github.io/yobot/v3/download-latest.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("点击下载运行包"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("下载yobot运行包，创建一个文件夹解压，启动 yobot.exe 即可。如需更改端口，请启动一次后修改 yobot_config.json 中的 port 字段并重启。")]),t._v(" "),a("p",[a("img",{attrs:{src:e(31),alt:"windows下正确启动图"}})]),t._v(" "),a("p",[a("img",{attrs:{src:e(32),alt:"windows下正确yobot与httpapi成功通信"}})]),t._v(" "),a("h2",{attrs:{id:"常见问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常见问题"}},[t._v("#")]),t._v(" 常见问题")]),t._v(" "),a("h3",{attrs:{id:"如何修改运行的端口号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何修改运行的端口号"}},[t._v("#")]),t._v(" 如何修改运行的端口号")]),t._v(" "),a("p",[t._v("需要修改服务程序的端口号和httpapi的配置文件")]),t._v(" "),a("p",[t._v("服务程序的配置文件在yobot\\yobot_config.json，port字段就是端口号，默认值为9222，可以修改为8000至65535之间的数。")]),t._v(" "),a("p",[t._v("httpapi的配置文件如"),a("a",{attrs:{href:"#%E9%85%8D%E7%BD%AE"}},[t._v("配置小节")]),t._v("所示，请将文件中默认端口9222(三处)改为与服务程序相同的端口号。")]),t._v(" "),a("h3",{attrs:{id:"酷q的日志显示了发送，实际却没有发送"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#酷q的日志显示了发送，实际却没有发送"}},[t._v("#")]),t._v(" 酷Q的日志显示了发送，实际却没有发送")]),t._v(" "),a("p",[t._v("这种情况一般是消息被腾讯屏蔽，常常发生在异地登陆时")]),t._v(" "),a("p",[t._v("解决方法：")]),t._v(" "),a("ul",[a("li",[t._v("关闭所有插件，机器人挂机一段时间")]),t._v(" "),a("li",[t._v("在远程主机上登录电脑版QQ发一些消息")]),t._v(" "),a("li",[t._v("在远程主机上登录QQ网页服务（比如QQ邮箱、QQ安全中心等）")]),t._v(" "),a("li",[t._v("在远程主机上玩一玩腾讯的游戏")]),t._v(" "),a("li",[t._v("下载QQ安全中心，确认异地登录")])]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" 注意事项")]),t._v(" "),a("ul",[a("li",[a("strong",[t._v("请不要使用重要的QQ号作为机器人")])]),t._v(" "),a("li",[t._v("系统至少要windows 7或者windows server 2008")]),t._v(" "),a("li",[t._v("机器人的数据都是分群存储的，一个机器人可以服务多个群")]),t._v(" "),a("li",[t._v("本机器人不包含“签到”、“宠物”等通用功能，如果需要可以在"),a("a",{attrs:{href:"https://cqp.cc/b/app",target:"_blank",rel:"noopener noreferrer"}},[t._v("酷Q插件社区"),a("OutboundLink")],1),t._v("搜索下载。")]),t._v(" "),a("li",[t._v("发送图片，发送语音等功能必须购买高级版才能使用，yobot三代所有功能均可用文字实现，不需要高级版")])]),t._v(" "),a("p",[t._v("容易引起封号的行为：")]),t._v(" "),a("ul",[a("li",[t._v("异地登录后立刻修改昵称头像（可以先修改再异地登录）")]),t._v(" "),a("li",[t._v("新注册的号在机房ip登录（ip真人鉴别有很多，比如"),a("a",{attrs:{href:"https://ip.rtbasia.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("这个"),a("OutboundLink")],1),t._v("）")]),t._v(" "),a("li",[t._v("机器人大量地发长消息（尤其是抽卡，条件允许可以改用图片抽卡）")]),t._v(" "),a("li",[t._v("机器人24小时不停发消息（如果真的有需求可以让两个账号轮班）")]),t._v(" "),a("li",[t._v("账号在短时间内加了大量的群（可以慢慢加，最好不超过10个群）")]),t._v(" "),a("li",[t._v("大量高危账号在同一个ip登录（可以慢慢加，一台服务器最好不超过5个账号）")])]),t._v(" "),a("p",[t._v("如果文中下载链接失效，可以使用"),a("a",{attrs:{href:"https://www.lanzous.com/b00n6dnqh",target:"_blank",rel:"noopener noreferrer"}},[t._v("备用网盘"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"感谢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#感谢"}},[t._v("#")]),t._v(" 感谢")]),t._v(" "),a("ul",[a("li",[t._v("感谢 "),a("strong",[t._v("@Ice咖啡丨福")]),t._v(" 在技术上的帮助")]),t._v(" "),a("li",[t._v("感谢 "),a("strong",[t._v("@ヒカリ")]),t._v(" 提供的竞技场数据")]),t._v(" "),a("li",[t._v("感谢 "),a("strong",[t._v("@超威懒猫")]),t._v(" 提供的活动日程数据")]),t._v(" "),a("li",[t._v("感谢 "),a("strong",[t._v("@黑白君")]),t._v(" 提供的酷Q Pro账户")]),t._v(" "),a("li",[t._v("感谢 "),a("strong",[t._v("@sana")]),t._v(" 对beta版本的测试与bug报告")])]),t._v(" "),a("h3",{attrs:{id:"开源软件许可"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开源软件许可"}},[t._v("#")]),t._v(" 开源软件许可")]),t._v(" "),a("ul",[a("li",[t._v("HoshinoBot: "),a("a",{attrs:{href:"https://github.com/Ice-Cirno/HoshinoBot",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/Ice-Cirno/HoshinoBot"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("aiocqhttp: "),a("a",{attrs:{href:"https://github.com/richardchien/python-aiocqhttp",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/richardchien/python-aiocqhttp"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("requests: "),a("a",{attrs:{href:"https://pypi.org/project/requests",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://pypi.org/project/requests"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("beautifulsoup4: "),a("a",{attrs:{href:"http://www.crummy.com/software/BeautifulSoup/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://www.crummy.com/software/BeautifulSoup/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("pillow: "),a("a",{attrs:{href:"http://python-pillow.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("http://python-pillow.org/"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("json5: "),a("a",{attrs:{href:"https://github.com/json5/json5",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/json5/json5"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("opencc-python: "),a("a",{attrs:{href:"https://github.com/yichen0831/opencc-python",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/yichen0831/opencc-python"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("feedparser: "),a("a",{attrs:{href:"https://github.com/kurtmckee/feedparser",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/kurtmckee/feedparser"),a("OutboundLink")],1)]),t._v(" "),a("li",[t._v("ics-python: "),a("a",{attrs:{href:"https://github.com/C4ptainCrunch/ics.py",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://github.com/C4ptainCrunch/ics.py"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=o.exports},30:function(t,r,e){t.exports=e.p+"assets/img/8ba6b840bab3ac25.4e757532.jpg"},31:function(t,r,e){t.exports=e.p+"assets/img/aaf38d1a5cbc1c87.43b223e0.jpg"},32:function(t,r,e){t.exports=e.p+"assets/img/8179fdd1e46690b2.9745b83b.jpg"}}]);