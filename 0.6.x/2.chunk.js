(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{223:function(n,t){n.exports="# Breadcrumb\n\n<example />"},224:function(n,t){n.exports="# Breadcrumb  *面包屑*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | ---|\n| data | Array | [] | 面包屑对象数组,对象属性可选值为: <br />面包屑显示文字<br />地址<br />图标,可以使用Icon组件生成或者自定义图标组件|\n| title | String | 'title' | 面包屑标题键值, 默认是title |\n| url | String | 'url' |面包屑链接键值, 默认是url |\n| icon | String | 'icon' |面包屑图标键值, 默认是icon |\n| renderItem | Function | null | 自定义渲染,可以自行选择渲染结果, 参数为data |\n| separator | String\\|ReactNode | \"/\" | 面包屑分隔符,可以是字符串或自定义的元素|\n| keygen | String \\| Function | \"id\" | key生成规则,如果为function,参数为单条数据, 并以返回值作为key\n"},358:function(n,t){n.exports="/**\n * cn - 图标\n * en - icon\n */\n\nimport React from 'react'\nimport { Breadcrumb, Icon } from 'shineout'\n\n\nconst MyIcon = Icon('//at.alicdn.com/t/font_550076_aqfu50lfa47bke29.css')\n\nconst data = [{\n  id: '1',\n  icon: <MyIcon name=\"info\" />,\n  url: '#',\n}, {\n  id: '2',\n  title: 'Menu',\n}, {\n  id: '3',\n  title: 'Self',\n  url: 'https://www.baidu.com',\n}]\n\nexport default function () {\n  return (\n    <Breadcrumb data={data} />\n  )\n}\n"},359:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(1),c=Object(o.k)("//at.alicdn.com/t/font_550076_aqfu50lfa47bke29.css"),i=[{id:"1",icon:r.a.createElement(c,{name:"info"}),url:"#"},{id:"2",title:"Menu"},{id:"3",title:"Self",url:"https://www.baidu.com"}];t.default=function(){return r.a.createElement(o.b,{data:i})}},360:function(n,t){n.exports="/**\n * cn - 自定义分隔符(字符串和reactNode)\n * en - separator(string and reactNode)\n */\n\nimport React, { Fragment } from 'react'\nimport { Breadcrumb } from 'shineout'\n\nfunction Separator() {\n  return <span>~</span>\n}\n\nconst data = [{\n  title: 'Home',\n  url: '#',\n}, {\n  title: 'Self',\n  url: 'https://www.baidu.com',\n}]\n\nexport default function () {\n  return (\n    <Fragment>\n      <Breadcrumb keygen=\"title\" data={data} separator=\"|\" />\n      <Breadcrumb keygen={d => (`${d.title}2`)} data={data} separator={<Separator />} />\n    </Fragment>\n  )\n}\n\n"},361:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(1);function c(){return r.a.createElement("span",null,"~")}var i=[{title:"Home",url:"#"},{title:"Self",url:"https://www.baidu.com"}];t.default=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(o.b,{keygen:"title",data:i,separator:"|"}),r.a.createElement(o.b,{keygen:function(n){return n.title+"2"},data:i,separator:r.a.createElement(c,null)}))}},362:function(n,t){n.exports="/**\n * cn - 基本用法\n * en - base\n */\n\nimport React from 'react';\nimport { Breadcrumb } from 'shineout';\n\nconst data = [{\n  code: '1',\n  ti: 'Home',\n  ur: '#',\n}, {\n  code: '2',\n  ti: 'Menu',\n}, {\n  code: '3',\n  ti: 'Self',\n}]\n\nexport default function () {\n  return (\n    <Breadcrumb keygen=\"code\" data={data} title=\"ti\" />\n  )\n}\n"},363:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(1),c=[{code:"1",ti:"Home",ur:"#"},{code:"2",ti:"Menu"},{code:"3",ti:"Self"}];t.default=function(){return r.a.createElement(o.b,{keygen:"code",data:c,title:"ti"})}},939:function(n,t,e){"use strict";e.r(t);var a=e(0),r=e.n(a),o=e(7),c=e(6),i=e(2),u=e(224),d=e.n(u),l=e(223),m=e.n(l),s=Object(i.a)(d.a,m.a),f=[{name:"1-base",title:Object(i.a)("基本用法","base"),component:e(363).default,rawText:e(362)},{name:"2-separator",title:Object(i.a)("自定义分隔符(字符串和reactNode)","separator(string and reactNode)"),component:e(361).default,rawText:e(360)},{name:"3-icon",title:Object(i.a)("图标","icon"),component:e(359).default,rawText:e(358)}];t.default=Object(o.a)(function(n){return r.a.createElement(c.b,Object.assign({},n,{codes:void 0,source:s,examples:f}))})}}]);