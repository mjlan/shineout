(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{10:function(e,n,t){"use strict";var r=t(1);n.a=Object(r.k)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")},243:function(e,n){e.exports="# Tooltip\n\n<example />\n\n## API"},244:function(e,n){e.exports="# Tree *树形选择*\n\n<example name=\"data\" />\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| className | string | 无 | 扩展className |\n| onChange | function(array) | 无 | 设置 onChange 属性时，显示 选择框。参数为当前选中值，和 mode 属性相关 |\n| data | array[{children:[]}] | [] | 数据，子节点为children，如果 children 值为 null 或 长度为 0 时，视为叶子节点 |\n| defaultExpanded | array\\[key] | 无 | 默认展开的节点 key（非受控） |\n| disabled | boolean \\| function(d) | false | 显示选择框时有效，为 true 时，所有节点禁用选择，为函数时，根据函数返回结果确定是否禁用 |\n| expanded | array\\[key] | 无 | 展开的节点 key （受控） |\n| keygen | string \\| function(obj, parentKey):string | 必填 | 生成key的辅助方法<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| line | boolean | true | 是否显示连接线 |\n| loader | function(key) | 无 | 设置loader属性后，未定义children的节点视为动态加载节点，点击展开触发 loader事件，children 为 null 或者长度为 0 视为叶子节点 |\n| mode | \\[1\\|2\\|3\\|4] | 1 | 选中值模式<br />1: 只返回完全选中的节点，包含父节点<br />2: 返回全部选中的节点和半选中的父节点<br />3: 只返回选中的子节点<br />4: 如果父节点选中，只返回父节点 |\n| onExpanded | function(array) | 无 | 节点展开回调，参数为当前展开节点 key 数组 |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| defaultValue | array\\[key] | 无 | 默认选中的 key （非受控） | \n| value | array\\[key] | 无 | 选中的 key （受控） | \n| onDrop | function(data, key, targetKey, position) | 无 | 设置 onDrop 属性时，为可拖动状态<br />data: 拖动后重新排序的完整数据<br />key: 拖动的节点key<br />targetKey: 目标节点 key<br />position: 在目标节点的位置，以 0 开始 | "},29:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var r=t(22),a=t(23);var o=[],i=function e(n,t,i){var d=i.join("-"),l=Object(a.e)(5,0===n?1:0),c={id:d,text:d};return l>0&&n<10&&(c.children=Object(r.a)(l).map(function(t){return e(n+1,t,[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(i),[t]))})),o.push(d),c},d=Object(r.a)(4).map(function(e){return i(0,0,[e])});n.b=d},456:function(e,n){e.exports="/**\n * cn -\n *    -- 本页中用到的测试数据为随机生成，格式如下\n * en - Data\n */\nimport React, { Component } from 'react'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expand: false }\n  }\n\n  toggle = () => {\n    this.setState({ expand: !this.state.expand })\n  }\n\n  render() {\n    const { expand } = this.state\n    return (\n      <div>\n        Current node count: {allIds.length}. <a href=\"javascript:;\" onClick={this.toggle}>{expand ? 'Collapse' : 'Expand'} Code</a>\n        <pre style={{ display: expand ? 'block' : 'none' }}>\n          { JSON.stringify(data, null, 2) }\n        </pre>\n      </div>\n    )\n  }\n}\n"},457:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(29),i=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var d=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.toggle=function(){t.setState({expand:!t.state.expand})},t.state={expand:!1},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),i(n,[{key:"render",value:function(){var e=this.state.expand;return a.a.createElement("div",null,"Current node count: ",o.a.length,". ",a.a.createElement("a",{href:"javascript:;",onClick:this.toggle},e?"Collapse":"Expand"," Code"),a.a.createElement("pre",{style:{display:e?"block":"none"}},JSON.stringify(o.b,null,2)))}}]),n}();n.default=d},458:function(e,n){e.exports="/**\n * cn - 动态加载\n *    -- 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数\n * en - Lazy load\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\n\nconst initData = ['0', '1', '2', '3', '4'].map(i => ({ id: i }))\nconst createRange = () => Array.from({ length: Math.round(Math.random() * 4) }, (_, i) => i)\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: initData }\n  }\n\n  loader = (key) => {\n    const path = key.split(',')\n\n    setTimeout(() => {\n      this.setState(immer((draft) => {\n        let { data } = draft\n        path.forEach((pid, i) => {\n          data = data.find(d => d.id === pid)\n          if (i < path.length - 1) data = data.children\n        })\n        data.children = [...createRange().map(i => ({ id: `${data.id}-${i}` }))]\n      }))\n    }, 500)\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        loader={this.loader}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n\n"},459:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),i=t(1),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var l=["0","1","2","3","4"].map(function(e){return{id:e}}),c=function(){return Array.from({length:Math.round(4*Math.random())},function(e,n){return n})},u=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.loader=function(e){var n=e.split(",");setTimeout(function(){t.setState(Object(o.a)(function(e){var t=e.data;n.forEach(function(e,r){t=t.find(function(n){return n.id===e}),r<n.length-1&&(t=t.children)}),t.children=[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(c().map(function(e){return{id:t.id+"-"+e}})))}))},500)},t.keyGenerator=function(e,n){return(n+","+e.id).replace(/^,/,"")},t.renderItem=function(e){return"node "+e.id},t.state={data:l},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),d(n,[{key:"render",value:function(){return a.a.createElement(i.B,{data:this.state.data,keygen:this.keyGenerator,loader:this.loader,renderItem:this.renderItem})}}]),n}();n.default=u},460:function(e,n){e.exports="/**\n * cn - 拖动\n * en - Drag\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleDrop = (data, key, targetKey, position) => {\n    console.log(data, key, targetKey, position)\n    this.setState({ data })\n  }\n\n  renderItem = node => `node ${node.text}`\n\n  render() {\n    return (\n      <Tree\n        data={this.state.data}\n        keygen=\"id\"\n        defaultExpanded={this.defaultExpanded}\n        onDrop={this.handleDrop}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n\n"},461:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var l=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleDrop=function(e,n,r,a){console.log(e,n,r,a),t.setState({data:e})},t.renderItem=function(e){return"node "+e.text},t.state={data:i.b},t.defaultExpanded=["1"],t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),d(n,[{key:"render",value:function(){return a.a.createElement(o.B,{data:this.state.data,keygen:"id",defaultExpanded:this.defaultExpanded,onDrop:this.handleDrop,renderItem:this.renderItem})}}]),n}();n.default=l},462:function(e,n){e.exports="/**\n * cn - 禁用\n * en - disabled\n */\nimport React, { Component } from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default class extends Component {\n  handleChange = (value) => {\n    console.log(value)\n  }\n\n  isDisabled = node => node.id === '1-0'\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <Tree\n        data={data}\n        defaultExpanded={['1', '2']}\n        disabled={this.isDisabled}\n        keygen=\"id\"\n        onChange={this.handleChange}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n"},463:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function l(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var c=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var a=arguments.length,o=Array(a),i=0;i<a;i++)o[i]=arguments[i];return t=r=l(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(o))),r.handleChange=function(e){console.log(e)},r.isDisabled=function(e){return"1-0"===e.id},r.renderItem=function(e){return"node "+e.id},l(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),d(n,[{key:"render",value:function(){return a.a.createElement(o.B,{data:i.b,defaultExpanded:["1","2"],disabled:this.isDisabled,keygen:"id",onChange:this.handleChange,renderItem:this.renderItem})}}]),n}();n.default=c},464:function(e,n){e.exports="/**\n * cn - 可选择\n *    -- * Tree 放在 Form 组件内使用时，需要放在 Form.Field 组件内\n * en - onChange\n */\nimport React, { Component } from 'react'\nimport { Tree, Radio } from 'shineout'\nimport data from 'doc/data/tree'\n\nconst resultStyle = {\n  position: 'absolute',\n  right: 30,\n  top: 100,\n  bottom: 40,\n  width: 240,\n  overflow: 'auto',\n  background: '#f2f2f2',\n  padding: 10,\n  zIndex: 100,\n}\n\nconst modeList = [\n  { value: 0, text: 'mode=0 (full)' },\n  { value: 1, text: 'mode=1 (half)' },\n  { value: 2, text: 'mode=2 (child only)' },\n  { value: 3, text: 'mode=3 (shallow)' },\n]\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { mode: 0, value: [] }\n  }\n\n  handleChange = (value) => {\n    this.setState({ value })\n  }\n\n  handleModeChange = (mode) => {\n    this.setState({ mode, value: [] })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    const { mode, value } = this.state\n\n    return (\n      <div>\n        <Radio.Group\n          value={mode}\n          datum={{ format: 'value' }}\n          onChange={this.handleModeChange}\n          data={modeList}\n          renderItem=\"text\"\n        />\n\n        <br />\n\n        <Tree\n          data={data}\n          defaultExpanded={['1', '2']}\n          keygen=\"id\"\n          mode={mode}\n          onChange={this.handleChange}\n          renderItem={this.renderItem}\n          value={value}\n        />\n\n        <div style={resultStyle}>\n          Current select value:\n          <pre style={{ background: '#f2f2f2' }}>\n            {JSON.stringify(value, null, 2)}\n          </pre>\n        </div>\n      </div>\n    )\n  }\n}\n"},465:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var l={position:"absolute",right:30,top:100,bottom:40,width:240,overflow:"auto",background:"#f2f2f2",padding:10,zIndex:100},c=[{value:0,text:"mode=0 (full)"},{value:1,text:"mode=1 (half)"},{value:2,text:"mode=2 (child only)"},{value:3,text:"mode=3 (shallow)"}],u=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleChange=function(e){t.setState({value:e})},t.handleModeChange=function(e){t.setState({mode:e,value:[]})},t.renderItem=function(e){return"node "+e.id},t.state={mode:0,value:[]},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),d(n,[{key:"render",value:function(){var e=this.state,n=e.mode,t=e.value;return a.a.createElement("div",null,a.a.createElement(o.s.Group,{value:n,datum:{format:"value"},onChange:this.handleModeChange,data:c,renderItem:"text"}),a.a.createElement("br",null),a.a.createElement(o.B,{data:i.b,defaultExpanded:["1","2"],keygen:"id",mode:n,onChange:this.handleChange,renderItem:this.renderItem,value:t}),a.a.createElement("div",{style:l},"Current select value:",a.a.createElement("pre",{style:{background:"#f2f2f2"}},JSON.stringify(t,null,2))))}}]),n}();n.default=u},466:function(e,n){e.exports="/**\n * cn - 控制展开\n * en - Expanded\n */\nimport React, { Component } from 'react'\nimport { Button, Tree } from 'shineout'\nimport data, { allIds } from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { expanded: ['1'] }\n\n    this.collapseAll = this.handleExpand.bind(this, [])\n    this.expandAll = this.handleExpand.bind(this, [...allIds])\n  }\n\n  handleExpand = (expanded) => {\n    this.setState({ expanded })\n  }\n\n  renderItem = node => `node ${node.id}`\n\n  render() {\n    return (\n      <div>\n        <div style={{ marginBottom: 12 }}>\n          <Button onClick={this.expandAll}>Expand all</Button>\n          <Button onClick={this.collapseAll}>Collapse all</Button>\n        </div>\n        <Tree\n          data={data}\n          keygen=\"id\"\n          line={false}\n          expanded={this.state.expanded}\n          onExpand={this.handleExpand}\n          renderItem={this.renderItem}\n        />\n      </div>\n    )\n  }\n}\n"},467:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var l=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleExpand=function(e){t.setState({expanded:e})},t.renderItem=function(e){return"node "+e.id},t.state={expanded:["1"]},t.collapseAll=t.handleExpand.bind(t,[]),t.expandAll=t.handleExpand.bind(t,[].concat(function(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}(i.a))),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),d(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("div",{style:{marginBottom:12}},a.a.createElement(o.c,{onClick:this.expandAll},"Expand all"),a.a.createElement(o.c,{onClick:this.collapseAll},"Collapse all")),a.a.createElement(o.B,{data:i.b,keygen:"id",line:!1,expanded:this.state.expanded,onExpand:this.handleExpand,renderItem:this.renderItem}))}}]),n}();n.default=l},468:function(e,n){e.exports="/**\n * cn - 无连接线\n * en - Line\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default function () {\n  return (\n    <Tree\n      data={data}\n      defaultExpanded={['1', '2']}\n      line={false}\n      keygen=\"id\"\n      renderItem={n => `node ${n.id}`}\n    />\n  )\n}\n"},469:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29);n.default=function(){return a.a.createElement(o.B,{data:i.b,defaultExpanded:["1","2"],line:!1,keygen:"id",renderItem:function(e){return"node "+e.id}})}},470:function(e,n){e.exports="/**\n * cn - 点击事件\n * en - Click\n */\nimport React, { Component } from 'react'\nimport immer from 'immer'\nimport { Tree } from 'shineout'\nimport tree from 'doc/data/tree'\n\nexport default class extends Component {\n  constructor(props) {\n    super(props)\n    this.state = { active: undefined, data: tree }\n    this.defaultExpanded = ['1']\n  }\n\n  handleClick = (node, id) => {\n    console.log('click', id)\n    this.setState({ active: id })\n  }\n\n  handleEdit = (event) => {\n    const newText = event.target.value\n    const path = this.state.active.split(',')\n    this.setState(immer((draft) => {\n      let { data } = draft\n      path.forEach((id, index) => {\n        data = data.find(d => d.id === id)\n        if (index < path.length - 1) data = data.children\n      })\n      data.text = newText\n      draft.active = undefined\n    }))\n  }\n\n  handleKeyDown = (event) => {\n    if (event.keyCode === 13) event.target.blur()\n  }\n\n  keyGenerator = (node, parentKey) => `${parentKey},${node.id}`.replace(/^,/, '')\n\n  renderItem = (node, isExpanded, isActive) => (\n    isActive\n      ? (\n        <input\n          autoFocus\n          size=\"small\"\n          onBlur={this.handleEdit}\n          onKeyDown={this.handleKeyDown}\n          defaultValue={node.text}\n          type=\"text\"\n        />\n      )\n      : `node ${node.text}`\n  )\n\n  render() {\n    return (\n      <Tree\n        active={this.state.active}\n        data={this.state.data}\n        keygen={this.keyGenerator}\n        defaultExpanded={this.defaultExpanded}\n        onClick={this.handleClick}\n        onExpand={this.handleExpand}\n        renderItem={this.renderItem}\n      />\n    )\n  }\n}\n\n"},471:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(11),i=t(1),d=t(29),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.handleClick=function(e,n){console.log("click",n),t.setState({active:n})},t.handleEdit=function(e){var n=e.target.value,r=t.state.active.split(",");t.setState(Object(o.a)(function(e){var t=e.data;r.forEach(function(e,n){t=t.find(function(n){return n.id===e}),n<r.length-1&&(t=t.children)}),t.text=n,e.active=void 0}))},t.handleKeyDown=function(e){13===e.keyCode&&e.target.blur()},t.keyGenerator=function(e,n){return(n+","+e.id).replace(/^,/,"")},t.renderItem=function(e,n,r){return r?a.a.createElement("input",{autoFocus:!0,size:"small",onBlur:t.handleEdit,onKeyDown:t.handleKeyDown,defaultValue:e.text,type:"text"}):"node "+e.text},t.state={active:void 0,data:d.b},t.defaultExpanded=["1"],t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["Component"]),l(n,[{key:"render",value:function(){return a.a.createElement(i.B,{active:this.state.active,data:this.state.data,keygen:this.keyGenerator,defaultExpanded:this.defaultExpanded,onClick:this.handleClick,onExpand:this.handleExpand,renderItem:this.renderItem})}}]),n}();n.default=c},472:function(e,n){e.exports="/**\n * cn - 图标\n *    -- 在 renderItem 中根据状态展示不同的图标\n * en - Icons\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\nimport FontAwesome from '../Icon/FontAwesome'\n\nfunction renderItem(node, isExpanded) {\n  let icon\n  if (!node.children || node.children.lenght === 0) {\n    icon = <FontAwesome name=\"file-text-o\" />\n  } else if (isExpanded) {\n    icon = <FontAwesome name=\"folder-open\" style={{ color: '#ffd666' }} />\n  } else {\n    icon = <FontAwesome name=\"folder\" style={{ color: '#ffd666' }} />\n  }\n\n  return <span>{icon} {node.text}</span>\n}\n\nexport default function () {\n  return (\n    <Tree\n      data={data}\n      keygen=\"id\"\n      renderItem={renderItem}\n    />\n  )\n}\n"},473:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29),d=t(10);function l(e,n){var t=void 0;return t=e.children&&0!==e.children.lenght?n?a.a.createElement(d.a,{name:"folder-open",style:{color:"#ffd666"}}):a.a.createElement(d.a,{name:"folder",style:{color:"#ffd666"}}):a.a.createElement(d.a,{name:"file-text-o"}),a.a.createElement("span",null,t," ",e.text)}n.default=function(){return a.a.createElement(o.B,{data:i.b,keygen:"id",renderItem:l})}},474:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Tree } from 'shineout'\nimport data from 'doc/data/tree'\n\nexport default function () {\n  return (\n    <Tree\n      data={data}\n      keygen=\"id\"\n      defaultExpanded={['2']}\n      renderItem={n => `node ${n.text}`}\n    />\n  )\n}\n"},475:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(1),i=t(29);n.default=function(){return a.a.createElement(o.B,{data:i.b,keygen:"id",defaultExpanded:["2"],renderItem:function(e){return"node "+e.text}})}},949:function(e,n,t){"use strict";t.r(n);var r=t(0),a=t.n(r),o=t(7),i=t(6),d=t(2),l=t(244),c=t.n(l),u=t(243),s=t.n(u),f=Object(d.a)(c.a,s.a),p=[{name:"01-base",title:Object(d.a)("基本用法","Base"),component:t(475).default,rawText:t(474)},{name:"02-icon",title:Object(d.a)("图标 \n 在 renderItem 中根据状态展示不同的图标","Icons"),component:t(473).default,rawText:t(472)},{name:"03-click",title:Object(d.a)("点击事件","Click"),component:t(471).default,rawText:t(470)},{name:"04-noline",title:Object(d.a)("无连接线","Line"),component:t(469).default,rawText:t(468)},{name:"05-expanded",title:Object(d.a)("控制展开","Expanded"),component:t(467).default,rawText:t(466)},{name:"06-change",title:Object(d.a)("可选择 \n * Tree 放在 Form 组件内使用时，需要放在 Form.Field 组件内","onChange"),component:t(465).default,rawText:t(464)},{name:"07-disabled",title:Object(d.a)("禁用","disabled"),component:t(463).default,rawText:t(462)},{name:"08-drag",title:Object(d.a)("拖动","Drag"),component:t(461).default,rawText:t(460)},{name:"09-lazyload",title:Object(d.a)("动态加载 \n 数据过大，需要动态加载时，可以设置 loader 函数，当展开未定义 children（undefined）的节点时，触发此函数","Lazy load"),component:t(459).default,rawText:t(458)},{name:"data",title:Object(d.a)(" \n 本页中用到的测试数据为随机生成，格式如下","Data"),component:t(457).default,rawText:t(456)}];n.default=Object(o.a)(function(e){return a.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:f,examples:p}))})}}]);