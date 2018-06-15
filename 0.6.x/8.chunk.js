(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{235:function(n,t){n.exports="# Popover\n\n<example />\n\n## API"},236:function(n,t){n.exports="# Popover *气泡*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| background | string | '#fff' | 弹出层背景色（含箭头） |\n| border | string | '#dee2e6' | 弹出层边框颜色（含箭头） |\n| className | string | 无 | 扩展className |\n| children | ReactElement | 必填 | 子元素只能为一个 ReactElement |\n| content | ReactElement \\| function | 必填 | 弹出内容 | \n| position | string | 'top' | 弹出层位置，可选值为 \\['top-left', 'top', 'top-right', 'left-top', 'left', 'left-bottom', 'right-top', 'right', 'right-bottom', 'bottom-left', 'bottom', 'bottom-right'] |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | 无 | 可选值为，\\['success', 'info', 'warning', 'danger'] |\n"},416:function(n,t){n.exports="/**\n * cn -\n *    -- 可以通过 background 和 color 自定义样式\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20, color: 'gold' }}>Some text</div>\n  return (\n    <Popover content={content} background=\"#555\" border=\"gold\" style={{ marginRight: 12 }}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},417:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(1);t.default=function(){var n=r.a.createElement("div",{style:{width:200,padding:20,color:"gold"}},"Some text");return r.a.createElement(i.r,{content:n,background:"#555",border:"gold",style:{marginRight:12}},r.a.createElement(i.c,null,"Hover"))}},418:function(n,t){n.exports="/**\n * cn - 样式\n * en - type\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst types = ['success', 'info', 'warning', 'danger']\n\nconst style = {\n  width: 100, textAlign: 'center', lineHeight: '30px', margin: 4, display: 'inline-block', border: 'solid 1px #eee',\n}\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return types.map((t, i) => (\n    <Popover content={content} type={t} key={i}>\n      <div style={style}>{t}</div>\n    </Popover>\n  ))\n}\n"},419:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(1),l=["success","info","warning","danger"],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){var n=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return l.map(function(t,e){return r.a.createElement(i.r,{content:n,type:t,key:e},r.a.createElement("div",{style:c},t))})}},420:function(n,t){n.exports="/**\n * cn - 关闭事件\n *    -- content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件\n * en - onClose\n */\nimport React from 'react'\nimport { Button, Popover, Message } from 'shineout'\n\nexport default function () {\n  const content = close => (\n    <div style={{ padding: 20 }}>\n      <div>Are you sure you want to close this panel?</div>\n      <div style={{ marginTop: 30, textAlign: 'right' }}>\n        <Button\n          size=\"small\"\n          onClick={() => {\n            close()\n            Message.success('Popover panel closed.')\n          }}\n        >\n          close\n        </Button>\n      </div>\n    </div>\n  )\n\n  return (\n    <Popover content={content} trigger=\"click\" style={{ marginRight: 12 }}>\n      <Button>Click me</Button>\n    </Popover>\n  )\n}\n"},421:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(1);t.default=function(){return r.a.createElement(i.r,{content:function(n){return r.a.createElement("div",{style:{padding:20}},r.a.createElement("div",null,"Are you sure you want to close this panel?"),r.a.createElement("div",{style:{marginTop:30,textAlign:"right"}},r.a.createElement(i.c,{size:"small",onClick:function(){n(),i.o.success("Popover panel closed.")}},"close")))},trigger:"click",style:{marginRight:12}},r.a.createElement(i.c,null,"Click me"))}},422:function(n,t){n.exports="/**\n * cn - 点击触发\n * en - Click\n */\nimport React from 'react'\nimport { Button, Popover, Card } from 'shineout'\n\nexport default function () {\n  const content = (\n    <Card style={{ width: 300, border: 0, background: 'transparent' }}>\n      <Card.Header>Header</Card.Header>\n      <Card.Body style={{ height: 80 }}>Body</Card.Body>\n    </Card>\n  )\n  return (\n    <Popover content={content} trigger=\"click\" style={{ marginRight: 12 }}>\n      <Button>Click me</Button>\n    </Popover>\n  )\n}\n"},423:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(1);t.default=function(){var n=r.a.createElement(i.d,{style:{width:300,border:0,background:"transparent"}},r.a.createElement(i.d.Header,null,"Header"),r.a.createElement(i.d.Body,{style:{height:80}},"Body"));return r.a.createElement(i.r,{content:n,trigger:"click",style:{marginRight:12}},r.a.createElement(i.c,null,"Click me"))}},424:function(n,t){n.exports="/**\n * cn - 弹出位置\n * en - Position\n */\nimport React from 'react'\nimport { Popover } from 'shineout'\n\nconst positions = [\n  [null, 'bottom-left', 'bottom', 'bottom-right', null],\n  ['right-top', null, null, null, 'left-top'],\n  ['right', null, null, null, 'left'],\n  ['right-bottom', null, null, null, 'left-bottom'],\n  [null, 'top-left', 'top', 'top-right', null],\n]\n\nconst style = {\n  width: 100, textAlign: 'center', lineHeight: '30px', margin: 4, display: 'inline-block', border: 'solid 1px #eee',\n}\n\nexport default function () {\n  const content = <div style={{ width: 240, padding: 30 }}>Some text</div>\n  return positions.map((row, i) => (\n    <div key={i}>\n      {\n        row.map((p, j) =>\n        (p ? (\n          <Popover content={content} position={p} key={j}>\n            <div style={style}>{p}</div>\n          </Popover>\n          )\n         : <div key={j} style={{ ...style, border: 0 }} />))\n      }\n    </div>\n  ))\n}\n"},425:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(1),l=[[null,"bottom-left","bottom","bottom-right",null],["right-top",null,null,null,"left-top"],["right",null,null,null,"left"],["right-bottom",null,null,null,"left-bottom"],[null,"top-left","top","top-right",null]],c={width:100,textAlign:"center",lineHeight:"30px",margin:4,display:"inline-block",border:"solid 1px #eee"};t.default=function(){var n=r.a.createElement("div",{style:{width:240,padding:30}},"Some text");return l.map(function(t,e){return r.a.createElement("div",{key:e},t.map(function(t,e){return t?r.a.createElement(i.r,{content:n,position:t,key:e},r.a.createElement("div",{style:c},t)):r.a.createElement("div",{key:e,style:Object.assign({},c,{border:0})})}))})}},426:function(n,t){n.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Button, Popover } from 'shineout'\n\nexport default function () {\n  const content = <div style={{ width: 200, padding: 20 }}>Some text</div>\n  return (\n    <Popover content={content} style={{ marginRight: 12 }}>\n      <Button>Hover</Button>\n    </Popover>\n  )\n}\n"},427:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(1);t.default=function(){var n=r.a.createElement("div",{style:{width:200,padding:20}},"Some text");return r.a.createElement(i.r,{content:n,style:{marginRight:12}},r.a.createElement(i.c,null,"Hover"))}},945:function(n,t,e){"use strict";e.r(t);var o=e(0),r=e.n(o),i=e(7),l=e(6),c=e(2),a=e(236),s=e.n(a),u=e(235),d=e.n(u),p=Object(c.a)(s.a,d.a),m=[{name:"1-base",title:Object(c.a)("基本用法","Base"),component:e(427).default,rawText:e(426)},{name:"2-position",title:Object(c.a)("弹出位置","Position"),component:e(425).default,rawText:e(424)},{name:"3-click",title:Object(c.a)("点击触发","Click"),component:e(423).default,rawText:e(422)},{name:"4-func",title:Object(c.a)("关闭事件 \n content 属性可以为一个函数，会传递 close 函数，用来在弹出面板内部处理关闭事件","onClose"),component:e(421).default,rawText:e(420)},{name:"5-type",title:Object(c.a)("样式","type"),component:e(419).default,rawText:e(418)},{name:"6-type",title:Object(c.a)(" \n 可以通过 background 和 color 自定义样式",""),component:e(417).default,rawText:e(416)}];t.default=Object(i.a)(function(n){return r.a.createElement(l.b,Object.assign({},n,{codes:void 0,source:p,examples:m}))})}}]);