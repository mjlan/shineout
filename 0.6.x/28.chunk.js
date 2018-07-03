(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{1007:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(7),a=o(6),l=o(2),d=o(281),u=o.n(d),i=o(280),m=o.n(i),s=Object(l.a)(u.a,m.a),f=[{name:"1-base",title:Object(l.a)("基本用法","Base"),component:o(919).default,rawText:o(918)},{name:"2-checked",title:Object(l.a)("状态 \n checked 有三个值，选中、未选中、半选。checked 设置时为受控组件（此示例没有处理）。","Checked"),component:o(917).default,rawText:o(916)},{name:"3-value",title:Object(l.a)("选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue，未选中返回 undefined。","Value"),component:o(915).default,rawText:o(914)},{name:"4-array",title:Object(l.a)("一组多选框","Group"),component:o(913).default,rawText:o(912)},{name:"4-group",title:Object(l.a)("\n 复杂的数据可以使用 datum 进行处理",""),component:o(911).default,rawText:o(910)},{name:"4-rawgroup",title:Object(l.a)(" \n React 组件方式",""),component:o(909).default,rawText:o(908)},{name:"5-block",title:Object(l.a)("垂直布局","Block"),component:o(907).default,rawText:o(906)},{name:"6-disabled",title:Object(l.a)("禁用","Disabled"),component:o(905).default,rawText:o(904)},{name:"7-disabled",title:Object(l.a)("\n 使用 datum disabled 实现有条件禁用","Disabled"),component:o(903).default,rawText:o(902)},{name:"8-input",title:Object(l.a)("带输入","Base"),component:o(901).default,rawText:o(900)}];n.default=Object(c.a)(function(e){return r.a.createElement(a.b,Object.assign({},e,{codes:void 0,source:s,examples:f}))})},280:function(e,n){e.exports="# Checkbox\n\n<example />"},281:function(e,n){e.exports="# Checkbox *复选框*\n\nCheckbox 可以单独使用。一组Checkbox使用时，使用一个Array类型的属性 data 来控制选项。\n\n<example />\n\n## API\n\n### Checkbox\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | 无 | checked 传入时为受控组件 |\n| disabled | bool | false | 是否禁用 |\n| htmlValue | any | true | 选中时返回值 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value,checked) | 无 | 选中时，value 为 htmlValue，checked 为 true<br />未选中时，value 为 undefined，checked 为 false |\n| value | any | 无 | 如果 checked 未设置，checked 状态为 value === htmlValue |\n\n### Checkbox.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | array | 必填 | 数据项 |\n| datum | object | 无 | 数据处理，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置 |\n| defaultValue | array | | 初始值 |\n| disabled | bool | false | 是否禁用 |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string | index | 生成每一项key的辅助方法<br />不填的情况下，会使用index(不推荐，在某些情况下可能会有问题)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | array | | 在Form中，value会被表单接管，value无效 |"},900:function(e,n){e.exports="/**\n * cn - 带输入\n * en - Base\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox inputable onChange={d => console.log(d)}>more...</Checkbox>\n  )\n}\n"},901:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1);n.default=function(){return r.a.createElement(c.e,{inputable:!0,onChange:function(e){return console.log(e)}},"more...")}},902:function(e,n){e.exports="/**\n * cn - \\n 使用 datum disabled 实现有条件禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox.Group\n        data={data}\n        datum={{ disabled: d => d === 'yellow' }}\n        value={['blue']}\n        renderItem={d => d}\n      />\n    </div>\n  )\n}\n"},903:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1),a=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(c.e.Group,{data:a,datum:{disabled:function(e){return"yellow"===e}},value:["blue"],renderItem:function(e){return e}}))}},904:function(e,n){e.exports="/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox.Group\n        disabled\n        data={data}\n        value={['blue', 'cyan']}\n        renderItem={d => d}\n      />\n      <br />\n      <Checkbox disabled checked={false}>not checked</Checkbox>\n      <Checkbox disabled checked>checked</Checkbox>\n      <Checkbox disabled checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},905:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1),a=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(c.e.Group,{disabled:!0,data:a,value:["blue","cyan"],renderItem:function(e){return e}}),r.a.createElement("br",null),r.a.createElement(c.e,{disabled:!0,checked:!1},"not checked"),r.a.createElement(c.e,{disabled:!0,checked:!0},"checked"),r.a.createElement(c.e,{disabled:!0,checked:"indeterminate"},"indeterminate"))}},906:function(e,n){e.exports="/**\n * cn - 垂直布局\n * en - Block\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen=\"id\"\n      block\n      data={data}\n      datum={{ format: 'color' }}\n      onChange={d => console.log(d)}\n      value={['blue', 'cyan']}\n      renderItem=\"color\"\n    />\n  )\n}\n"},907:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1),a=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return r.a.createElement(c.e.Group,{keygen:"id",block:!0,data:a,datum:{format:"color"},onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:"color"})}},908:function(e,n){e.exports="/**\n * cn -\n *    -- React 组件方式\n * en -\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Checkbox.Group value={[3, 5]} onChange={(value) => { console.log(value) }}>\n      {\n        data.map(d => (\n          <Checkbox key={d.id} htmlValue={d.id}>{d.color}</Checkbox>\n        ))\n      }\n    </Checkbox.Group>\n  )\n}\n\n"},909:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1),a=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return r.a.createElement(c.e.Group,{value:[3,5],onChange:function(e){console.log(e)}},a.map(function(e){return r.a.createElement(c.e,{key:e.id,htmlValue:e.id},e.color)}))}},910:function(e,n){e.exports="/**\n * cn -  \\n 复杂的数据可以使用 datum 进行处理\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nfunction renderItem(d) {\n  const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\n  return <span style={style}>{d.color}</span>\n}\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen=\"id\"\n      data={data}\n      datum={{ format: 'color' }}\n      onChange={d => console.log(d)}\n      value={['blue', 'cyan']}\n      renderItem={renderItem}\n    />\n  )\n}\n"},911:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1),a=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];function l(e){var n={borderBottom:"solid 1px "+e.color,paddingBottom:2};return r.a.createElement("span",{style:n},e.color)}n.default=function(){return r.a.createElement(c.e.Group,{keygen:"id",data:a,datum:{format:"color"},onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:l})}},912:function(e,n){e.exports="/**\n * cn - 一组多选框\n * en - Group\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen={c => c}\n      data={data}\n      onChange={c => console.log(c)}\n      value={['blue', 'cyan']}\n      renderItem={renderItem}\n    />\n  )\n}\n"},913:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1),a=["red","orange","yellow","green","cyan","blue","violet"];function l(e){var n={borderBottom:"solid 1px "+e,paddingBottom:2};return r.a.createElement("span",{style:n},e)}n.default=function(){return r.a.createElement(c.e.Group,{keygen:function(e){return e},data:a,onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:l})}},914:function(e,n){e.exports='/**\n * cn - 选中值 \\n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue，未选中返回 undefined。\n * en - Value\n */\nimport React from \'react\'\nimport { Checkbox } from \'shineout\'\n\nexport default function () {\n  return (\n    <Checkbox onChange={v => console.log(v)} htmlValue="ok" value="ok">\n      value is "ok"\n    </Checkbox>\n  )\n}\n'},915:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1);n.default=function(){return r.a.createElement(c.e,{onChange:function(e){return console.log(e)},htmlValue:"ok",value:"ok"},'value is "ok"')}},916:function(e,n){e.exports="/**\n * cn - 状态 \\n checked 有三个值，选中、未选中、半选。checked 设置时为受控组件（此示例没有处理）。\n * en - Checked\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox checked={false}>not checked</Checkbox>\n      <Checkbox checked>checked</Checkbox>\n      <Checkbox checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},917:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1);n.default=function(){return r.a.createElement("div",null,r.a.createElement(c.e,{checked:!1},"not checked"),r.a.createElement(c.e,{checked:!0},"checked"),r.a.createElement(c.e,{checked:"indeterminate"},"indeterminate"))}},918:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox>Checkbox</Checkbox>\n  )\n}\n"},919:function(e,n,o){"use strict";o.r(n);var t=o(0),r=o.n(t),c=o(1);n.default=function(){return r.a.createElement(c.e,null,"Checkbox")}}}]);