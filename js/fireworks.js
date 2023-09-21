"use strict";function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function createParticule(e,t){var a={};return a.x=e,a.y=t,a.color=colors[anime.random(0,colors.length-1)],a.radius=anime.random(16,32),a.endPos=setParticuleDirection(a),a.draw=function(){ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.fillStyle=a.color,ctx.fill()},a}function createCircle(e,t){var a={};return a.x=e,a.y=t,a.color="#F00",a.radius=0.1,a.alpha=0.5,a.lineWidth=6,a.draw=function(){ctx.globalAlpha=a.alpha,ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.lineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke(),ctx.globalAlpha=1},a}function renderParticule(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function animateParticules(e,t){for(var a=createCircle(e,t),n=[],i=0;i<numberOfParticules;i++){n.push(createParticule(e,t))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:0.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(e,t){var a;return function(){var n=this,i=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,i)},t)}}var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)}"use strict";function updateCoords(e){pointerX=(e.clientX||e.touches[0].clientX)-canvasEl.getBoundingClientRect().left,pointerY=e.clientY||e.touches[0].clientY-canvasEl.getBoundingClientRect().top}function setParticuleDirection(e){var t=anime.random(0,360)*Math.PI/180,a=anime.random(50,180),n=[-1,1][anime.random(0,1)]*a;return{x:e.x+n*Math.cos(t),y:e.y+n*Math.sin(t)}}function createParticule(e,t){var a={};return a.x=e,a.y=t,a.color=colors[anime.random(0,colors.length-1)],a.radius=anime.random(16,32),a.endPos=setParticuleDirection(a),a.draw=function(){ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.fillStyle=a.color,ctx.fill()},a}function createCircle(e,t){var a={};return a.x=e,a.y=t,a.color="#F00",a.radius=0.1,a.alpha=0.5,a.lineWidth=6,a.draw=function(){ctx.globalAlpha=a.alpha,ctx.beginPath(),ctx.arc(a.x,a.y,a.radius,0,2*Math.PI,!0),ctx.lineWidth=a.lineWidth,ctx.strokeStyle=a.color,ctx.stroke(),ctx.globalAlpha=1},a}function renderParticule(e){for(var t=0;t<e.animatables.length;t++){e.animatables[t].target.draw()}}function animateParticules(e,t){for(var a=createCircle(e,t),n=[],i=0;i<numberOfParticules;i++){n.push(createParticule(e,t))}anime.timeline().add({targets:n,x:function(e){return e.endPos.x},y:function(e){return e.endPos.y},radius:0.1,duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule}).add({targets:a,radius:anime.random(80,160),lineWidth:0,alpha:{value:0,easing:"linear",duration:anime.random(600,800)},duration:anime.random(1200,1800),easing:"easeOutExpo",update:renderParticule,offset:0})}function debounce(e,t){var a;return function(){var n=this,i=arguments;clearTimeout(a),a=setTimeout(function(){e.apply(n,i)},t)}}var canvasEl=document.querySelector(".fireworks");if(canvasEl){var ctx=canvasEl.getContext("2d"),numberOfParticules=30,pointerX=0,pointerY=0,tap="mousedown",colors=["#FF1461","#18FF92","#5A87FF","#FBF38C"],setCanvasSize=debounce(function(){canvasEl.width=2*window.innerWidth,canvasEl.height=2*window.innerHeight,canvasEl.style.width=window.innerWidth+"px",canvasEl.style.height=window.innerHeight+"px",canvasEl.getContext("2d").scale(2,2)},500),render=anime({duration:1/0,update:function(){ctx.clearRect(0,0,canvasEl.width,canvasEl.height)}});document.addEventListener(tap,function(e){"sidebar"!==e.target.id&&"toggle-sidebar"!==e.target.id&&"A"!==e.target.nodeName&&"IMG"!==e.target.nodeName&&(render.play(),updateCoords(e),animateParticules(pointerX,pointerY))},!1),setCanvasSize(),window.addEventListener("resize",setCanvasSize,!1)};

打开themes/next/layout/_layout.swig,在</body>上面写下如下代码：


{% if theme.fireworks %}<canvas class="fireworks" style="position: fixed;left: 0;top: 0;z-index: 1; pointer-events: none;" ></canvas> <script type="text/javascript" src="//cdn.bootcss.com/animejs/2.2.0/anime.min.js"></script> <script type="text/javascript" src="/js/src/fireworks.js"></script>
{% endif %}
打开主题配置文件，在里面最后写下：

# Fireworks
fireworks: true
4.添加动态背景
img

上面这种只是其中一种动态背景，新版的Next主题集成了该功能，只需要在主题配置中设置如下即可，下面每个模块只设置其中一个为true，具体效果如何可自己尝试：

# Canvas-nest
# Dependencies: https://github.com/theme-next/theme-next-canvas-nest
canvas_nest: # 网络背景enable: trueonmobile: true # display on mobile or notcolor: '0,0,0' # RGB values, use ',' to separateopacity: 0.5 # the opacity of line: 0~1zIndex: -1 # z-index property of the backgroundcount: 150 # the number of lines# JavaScript 3D library.
# Dependencies: https://github.com/theme-next/theme-next-three
# three_waves
three_waves: false
# canvas_lines
canvas_lines: false
# canvas_sphere
canvas_sphere: false# Canvas-ribbon
# Dependencies: https://github.com/theme-next/theme-next-canvas-ribbon
# size: The width of the ribbon.
# alpha: The transparency of the ribbon.
# zIndex: The display level of the ribbon.
canvas_ribbon:enable: falsesize: 300alpha: 0.6zIndex: -1
另外需要在blog中下载相应资源包，具体见上面的链接，下面我给出canvas_nest的下载方式：

git clone https://github.com/theme-next/theme-next-canvas-nest themes/next/source/lib/canvas-nest
5. 修改标签样式
博客底部的标签样式默认为#tag，我们可以将其改成：

1548273942824

只需要修改模板/themes/next/layout/_macro/post.swig，搜索 rel="tag">#，将 # 换成<i class="fa fa-tag"></i>

6. 作者头像设置
1548274016625

可以设置当鼠标放置在头像上时，头像自动旋转，具体设置如下：

avatar:# in theme directory(source/images): /images/avatar.gif# in site  directory(source/uploads): /uploads/avatar.gif# You can also use other linking images.url: /images/author.jpg  #将我们的头像图片放置在blog/themes/next/source/images目录下，填写具体地址# If true, the avatar would be dispalyed in circle.rounded: true #鼠标放在头像上时是否旋转# The value of opacity should be choose from 0 to 1 to set the opacity of the avatar.opacity: 1 #头像放缩指数# If true, the avatar would be rotated with the cursor.rotated: true #头像是否设为圆形，否则为矩形
7.文章结束标志
1548274181405

在路径 \themes\next\layout\_macro 中新建 passage-end-tag.swig 文件,并添加以下内容：

<div>{% if not is_index %}<div style="text-align:center;color: #ccc;font-size:14px;">-------------本文结束<i class="fa fa-paw"></i>感谢您的阅读-------------</div>{% endif %}
</div>

接着打开\themes\next\layout\_macro\post.swig文件，在post-body 之后(END POST BODY)， post-footer 之前添加如代码：


<div>{% if not is_index %}{% include 'passage-end-tag.swig' %}{% endif %}
</div>
然后打开主题配置文件（_config.yml),在末尾添加：

# 文章末尾添加“本文结束”标记
passage_end_tag:enabled: true
8.侧边栏设置
1548274885067

设置主题配置文件，其中social表示社交信息，我们可以填入我们相关的链接，格式为链接名:链接地址 || 链接图标，其中链接图标必须是FontAwesome网站中存在的图标名。

# Posts / Categories / Tags in sidebar.
site_state: true # 是否在侧边栏加入日志、分类、标签等跳转链接# Social Links
# Usage: `Key: permalink || icon`
# Key is the link label showing to end users.
# Value before `||` delimeter is the target permalink.
# Value after `||` delimeter is the name of FontAwesome icon. If icon (with or without delimeter) is not specified, globe icon will be loaded.
social:GitHub: https://github.com/nightmaredimple || github #CSDN: https://blog.csdn.net/nightmare_dimple || crosshairs#E-Mail: mailto:yourname@gmail.com || envelope#Weibo: https://weibo.com/yourname || weibo#Google: https://plus.google.com/yourname || google#Twitter: https://twitter.com/yourname || twitter#FB Page: https://www.facebook.com/yourname || facebook#VK Group: https://vk.com/yourname || vk#StackOverflow: https://stackoverflow.com/yourname || stack-overflow#YouTube: https://youtube.com/yourname || youtube#Instagram: https://instagram.com/yourname || instagram#Skype: skype:yourname?call|chat || skypesocial_icons:enable: true #是否显示社交图标icons_only: false #是否仅显示社交图标transition: true # Follow me on GitHub banner in right-top corner.
# Usage: `permalink || title`
# Value before `||` delimeter is the target permalink.
# Value after `||` delimeter is the title and aria-label name.
github_banner: https://github.com/nightmaredimple || Follow me on GitHub #添加右上角github绑带# Blog rolls
links_icon: link
links_title: Links
links_layout: block
#links_layout: inline
#links:#Title: http://example.com# Sidebar Avatar
avatar: #头像设置# in theme directory(source/images): /images/avatar.gif# in site  directory(source/uploads): /uploads/avatar.gif# You can also use other linking images.url: /images/author.jpg# If true, the avatar would be dispalyed in circle.rounded: true# The value of opacity should be choose from 0 to 1 to set the opacity of the avatar.opacity: 1# If true, the avatar would be rotated with the cursor.rotated: true# Table Of Contents in the Sidebar
toc:enable: true #是否自动生成目录# Automatically add list number to toc.number: false #目录是否自动产生编号# If true, all words will placed on next lines if header width longer then sidebar width.wrap: false #标题过长是否换行# Maximum heading depth of generated toc. You can set it in one post through `toc_max_depth` var.max_depth: 6 #最大标题深度sidebar:# Sidebar Position, available values: left | right (only for Pisces | Gemini).position: left #侧边栏位置#position: right# Manual define the sidebar width.# If commented, will be default for:# Muse | Mist: 320# Pisces | Gemini: 240#width: 300# Sidebar Display, available values (only for Muse | Mist):#  - post    expand on posts automatically. Default.#  - always  expand for all pages automatically#  - hide    expand only when click on the sidebar toggle icon.#  - remove  Totally remove sidebar including sidebar toggle.display: post#display: always#display: hide#display: remove# Sidebar offset from top menubar in pixels (only for Pisces | Gemini).offset: 12 #侧边栏相对主菜单像素距离# Back to top in sidebar.b2t: true #是否提供一键置顶# Scroll percent label in b2t button.scrollpercent: true #是否显示当前阅读进度# Enable sidebar on narrow view (only for Muse | Mist).onmobile: false #手机上是否显示侧边栏
9.文章阴影设置
img

打开\themes\next\source\css\_custom\custom.styl,向里面加入：

// 主页文章添加阴影效果.post {margin-top: 60px;margin-bottom: 60px;padding: 25px;-webkit-box-shadow: 0 0 5px rgba(202, 203, 203, .5);-moz-box-shadow: 0 0 5px rgba(202, 203, 204, .5);}
10. 添加文章版权信息
1548336818289

要想开启博客的版权功能，需要设置主题配置文件：

creative_commons:license: by-nc-sasidebar: truepost: true
11.设置博客底部布局
1548338104016

这一部分对应主题配置文件中的：

footer:# Specify the date when the site was setup.# If not defined, current year will be used.since: 2019 #建站时间# Icon between year and copyright info.icon:# Icon name in fontawesome, see: https://fontawesome.com/v4.7.0/icons/# `heart` is recommended with animation in red (#ff0000).name: heart  #作者图标（默认是author人像)# If you want to animate the icon, set it to true.animated: true #图标是否闪动# Change the color of icon, using Hex Code.color: "#808080" #图标颜色# If not defined, `author` from Hexo main config will be used.copyright: 黄飘 #别填bool型，最后显示的东西是copyright || author，即左边没有设置的话就显示作者# -------------------------------------------------------------powered:# Hexo link (Powered by Hexo).enable: false #是否显示 Powered by hexo# Version info of Hexo after Hexo link (vX.X.X).version: false #是否显示Hexo版本theme:# Theme & scheme info link (Theme - NexT.scheme).enable: false #是否显示主题信息# Version info of NexT after scheme info (vX.X.X).version: false #是否显示主题版本# -------------------------------------------------------------# Beian icp information for Chinese users. In China, every legal website should have a beian icp in website footer.# http://www.miitbeian.gov.cnbeian:enable: false #是否显示网站备案信息icp:# -------------------------------------------------------------# Any custom text can be defined here.#custom_text: Hosted by <a href="https://pages.coding.me" class="theme-link" rel="noopener" target="_blank">Coding Pages</a>
12. 添加打赏
1548338764886

在主题配置文件中设置如下：

reward:enable: truecomment: 坚持原创技术分享，您的支持将鼓励我继续创作！wechatpay: /images/wechatpay.jpgalipay: /images/alipay.jpg#bitcoin: /images/bitcoin.jpg
自己获取自己的支付收款码，放置在next/source/images中

13. 添加页面宠物
1548338832593

首先在博客目录下执行：

npm install -save hexo-helper-live2d
然后在站点配置文件中加入：

live2d:enable: truescriptFrom: localpluginRootPath: live2dw/pluginJsPath: lib/pluginModelPath: assets/tagMode: falsemodel:use: live2d-widget-model-wanko  #选择哪种模型display: #放置位置和大小position: rightwidth: 150height: 300mobile:show: false #是否在手机端显示
上面模型的选择可在lived2d中选择，并下载相应的模型：

npm install live2d-widget-model-wanko
14.设置代码块样式
1548340016692

代码块的行号显示在上面已经介绍了，位于站点配置文件，对于代码块的主题我么还能设置其背景，增加复制按钮等，可修改主题配置文件如下：

# Code Highlight theme
# Available values: normal | night | night eighties | night blue | night bright
# https://github.com/chriskempson/tomorrow-theme
highlight_theme: night
codeblock:# Manual define the border radius in codeblock# Leave it empty for the default 1border_radius:# Add copy button on codeblockcopy_button:enable: true# Show text copy resultshow_result: true
15.设置博客摘要显示
1548340037906

对于摘要显示，首先我们需要开启摘要功能，修改主题配置文件：

# Automatically scroll page to section which is under <!-- more --> mark.
scroll_to_more: true #选取博客正文<!--more-->前的内容# Automatically saving scroll position on each post/page in cookies.
save_scroll: false# Automatically excerpt description in homepage as preamble text.
excerpt_description: true #自动截取摘要# Automatically Excerpt. Not recommend.
# Use <!-- more --> in the post to control excerpt accurately.
auto_excerpt: enable: false #自动截取一定程度的摘要length: 150# Read more button
# If true, the read more button would be displayed in excerpt section.
read_more_btn: true #显示阅读全文按钮
1548340204881

16.设置RSS订阅
img

在博客主目录下执行：

npm install --save hexo-generator-feed
在站点配置文件中修改：

# Extensions
## Plugins: http://hexo.io/plugins/
plugins: hexo-generate-feed
然后设置主题配置文件：

# Set rss to false to disable feed link.
# Leave rss as empty to use site's feed link.
# Set rss to specific value if you have burned your feed already.
rss: /atom.xml
17.修改文章链接样式
img

修改文件 themes\next\source\css\_common\components\post\post.styl，在末尾添加如下css样式，：

// 文章内链接文本样式
.post-body p a{color: #0593d3;border-bottom: none;border-bottom: 1px solid #0593d3;&:hover {color: #fc6423;border-bottom: none;border-bottom: 1px solid #fc6423;}
}
18.增加阅读次数/时长和访客数
Next6版本集成了多种相关功能，除了已有的busuanzi，目前又加入了symbols-count-time，二者在主题配置文件中的相关设置方法如下：

# Post wordcount display settings
# Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:separated_meta: true #分隔符|item_text_post: true #是否统计站点总字数item_text_total: true #是否同级文章总字数awl: 2 #平均每个字符的长度wpm: 300 #words per minutebusuanzi_count:enable: true  #是否开启不蒜子统计功能total_visitors: true #是否统计总访客数total_visitors_icon: user #访客数图标为人像total_views: true #是否同级总访问数total_views_icon: eye #访问数图标为眼睛post_views: true #是否统计文章访问数post_views_icon: eye #访问数图标为眼睛
其中前者还需在站点配置文件中加入：

symbols_count_time:symbols: true #是否统计字数time: false #是否统计阅读时长total_symbols: true #是否统计总字数total_time: false #是否统计总阅读时长
相关依赖如下：

npm install hexo-symbols-count-time --save
不过symbols-count-time的数字经常不显示，不知道是不是我配置的问题，不过不担心，因为busuanzi自带了这些功能（除了阅读时长，不过这个意义不大），只需要修改next/layout/_partials/footer.swig文件如下：

<script async src="https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js"></script>{% if config.symbols_count_time.total_symbols %}<span class="post-meta-divider">|</span><span class="post-meta-item-icon"><i class="fa fa-area-chart"></i></span>{% if theme.symbols_count_time.item_text_total %}<span class="post-meta-item-text">{{ __('symbols_count_time.count_total') + __('symbol.colon') }}</span>{% endif %}<span title="{{ __('post.totalcount') }}">{{ totalcount(site, '0,0.0a') }}字 </span><!--<span title="{{ __('symbols_count_time.count_total') }}">{{symbolsCountTotal(site)}}</span>-->{% endif %}
以及修改next/layout/_macro/post.swig文件中的symbol部分：

          {% if config.symbols_count_time.symbols or config.symbols_count_time.time %}<div class="post-symbolscount">{% if not theme.symbols_count_time.separated_meta %}<span class="post-meta-divider">|</span>{% endif %}{% if config.symbols_count_time.symbols %}<span class="post-meta-item-icon"><i class="fa fa-file-word-o"></i></span>{% if theme.symbols_count_time.item_text_post %}<span class="post-meta-item-text">{{ __('symbols_count_time.count') + __('symbol.colon') }}</span>{% endif %}<!-- <span title="{{ __('symbols_count_time.count') }}">{##}{{ symbolsCount(post.content) }}{##}</span> --><span title="{{ __('symbols_count_time.count') }}">{{ wordcount(post.content) }}字</span>{% endif %}
最终效果如下：

1548342001495

1548342014674

19.加入网易云音乐播放器
首先在网页搜索网易云音乐，选择音乐，并生成外链：

1548351757165

然后得到外链html代码：

1548351853181

将代码粘贴到一个合适的位置，建议放在侧边栏，在Blog/themes/next/layout/_macro/sidebar.swig文件下，选择位置复制进去，不同位置效果不同：

1548351938639

20. 参考资料
http://shenzekun.cn/hexo的next主题个性化配置教程.html
https://www.jianshu.com/p/1ff2fcbdd155
来源：我的博客

文章来源:https://blog.csdn.net/nightmare_dimple/article/details/86661502
本文来自互联网用户投稿，该文观点仅代表作者本人，不代表本站立场。本站仅提供信息存储空间服务，不拥有所有权，不承担相关法律责任。如若转载，请注明出处：https://www.xjx100.cn/news/480107.html 如若内容造成侵权/违法违规/事实不符，请联系我的编程人生网邮箱：809451989@qq.com进行投诉反馈，一经查实，立即删除！
相关文章
帝国CMS7.5正式版（后台模板深度美化）
帝国CMS7.5正式版（后台模板深度美化）
帝国CMS7.5后台美化版模板免费下载(含后台登陆美化界面) 在帝国CMS论坛收集的一款帝国CMS7.5后台整套模板,看着还不错,包含后台登陆界面模板,utf-8版,需要gbk的请自行转码。 文件&#xff1a;590m.com/f/25127180-498775922-39ce18&#xff08;访问密码&#xff1a;551685&…
阅读更多...
Ubuntu16.04,16.05系列最全深度美化教你如何变得有格调
Ubuntu16.04,16.05系列最全深度美化教你如何变得有格调
文章目录 Ubuntu16.04最全深度美化教你如何变得有格调美化过程主题管理工具主题扁平化主题主题配套图标 Arc Theme主题主题配套图标 numix-gtk-theme主题主题及图标 主题结语Mac主题&#xff08;如果你真的很喜欢的话&#xff09;主题及图标 图标Square-Beampaper-icon-theme其…
阅读更多...
Hexo-matery主题美化以及zeit部署
Hexo-matery主题美化以及zeit部署
简介 本文主要介绍Metery主题的安装使用&#xff0c;主题优化内容包括 添加404&#xff0c;诗词样式配置提出&#xff0c;在hexo项目_data/matery.yml中配置主题样式&#xff0c;可覆盖themes/matery/_config配置调整配色&#xff0c;去掉彩虹配置 部署到Zeit.io Github Pa…
阅读更多...
Next主题美化博客
Next主题美化博客
1.前言 在 Hexo 中有2份主要的配置文件&#xff0c;其名称都是_config.yml。 其中&#xff0c;一份位于博客根目录下&#xff0c;主要包含 Hexo 本身的配置&#xff1b;另一份位于themes/next/目录下&#xff0c;用于配置主题相关的选项。 2.Next主题安装 Hexo安装主题&…
阅读更多...
Hexo框架下用NexT(v7.0+)主题美化博客
Hexo框架下用NexT(v7.0+)主题美化博客
1. 前言 前文&#xff1a;Windows下通过GitHubHexo搭建个人博客的步骤&#xff1b; 博主的个人博客&#xff1a;https://hunter1023.github.io/ 按照本篇博客美化。 在 Hexo 中有2份主要的配置文件&#xff0c;其名称都是_config.yml。 其中&#xff0c;一份位于博客根目录下…
阅读更多...
黑苹果OC引导 多彩绚丽霓虹 主题及安装教程
黑苹果OC引导 多彩绚丽霓虹 主题及安装教程
本期给大家分享一款充满活力多姿多彩的主题&#xff0c;背景图纯黑&#xff0c;因此适合各分辨率下使用&#xff0c;如果喜欢可自行添加或制作好看的背景图替换&#xff08;背景图建议高斯模糊处理&#xff09;。 主题背景纯黑&#xff0c;各个分辨率的显示器均能使用&#xff…
阅读更多...
[3-7]xp系统美化主题包下载每日更新【heizt整理】
[3-7]xp系统美化主题包下载每日更新【heizt整理】
温馨提示: 1&#xff1a;此更新合集由heizt整理&#xff0c;由于深度美化主题包下载网站采用防盗链设计&#xff0c;直接点击会出现盗链接的提示&#xff0c;请下载时点击直接下载或用下载工具下载.2&#xff1a;以下所有软件均来自网络&#xff0c;请下载后自行查毒,下载链接并…
阅读更多...
Ubuntu 16.04 LTS深度美化!
Ubuntu 16.04 LTS深度美化!
目录 前言外观美化 主题图标指针字体运用和设置 终端美化实用工具配置推荐最后 前言 本篇尝试对ubuntu 16.04 LTS进行美化和优化, 基本上就是本人长期使用的经验分享, 如有不足, 欢迎指正交流!简单说下版本选择的原因, 没有去选择最新的版本, 而是选择了最新的长期支持版本, 也…
阅读更多...
