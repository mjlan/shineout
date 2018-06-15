(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{244:function(e,n){e.exports="# Alert\n\n<example />"},245:function(e,n){e.exports="# Alert *提示框*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| children | any | 无 | 内容，文字或react组件 |\n| className | string | 无 | 扩展className |\n| icon | ReactElement \\| boolean | 无 | 为true时，根据type属性显示状态图标。如果需要显示自定义图标，传入ReactElement。 |\n| iconSize | number | 14 | icon 的尺寸 |\n| onClose | func \\| boolean | 无 | 当 onClose 为空时，不显示关闭。如果需要关闭又不需要处理回调，设置为true即可 |\n| style | object | 无 | 最外层扩展样式 |\n| type | string | *warning* |  4 选 1，\\[*success*, *info*, *warning*, *danger(error)*] |"},449:function(e,n){e.exports='/**\n * cn - 图标 icon\n * en - with icon\n */\nimport React, { Fragment } from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Alert type="success" icon>Success Type.</Alert>\n      <Alert type="info" icon>Info Type.</Alert>\n      <Alert type="warning" icon>Warning Type.</Alert>\n      <Alert type="danger" icon>Danger Type.</Alert>\n\n      <Alert icon iconSize={24}>\n        <h3>Set iconSize</h3>\n        iconSize=24\n      </Alert>\n    </Fragment>\n  )\n}\n'},450:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1);n.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{type:"success",icon:!0},"Success Type."),o.a.createElement(a.a,{type:"info",icon:!0},"Info Type."),o.a.createElement(a.a,{type:"warning",icon:!0},"Warning Type."),o.a.createElement(a.a,{type:"danger",icon:!0},"Danger Type."),o.a.createElement(a.a,{icon:!0,iconSize:24},o.a.createElement("h3",null,"Set iconSize"),"iconSize=24"))}},451:function(e,n){e.exports="/**\n * cn - 关闭 onClose\n * en - onClose\n */\nimport React, { Fragment, PureComponent } from 'react'\nimport { Alert } from 'shineout'\n\nexport default class extends PureComponent {\n  constructor(props) {\n    super(props)\n\n    this.state = {\n      placeholder: '',\n    }\n\n    this.handleClose = this.handleClose.bind(this)\n  }\n\n  handleClose() {\n    this.setState({\n      placeholder: 'Alert was dismissed.',\n    })\n  }\n\n  render() {\n    const { placeholder } = this.state\n    return (\n      <Fragment>\n        <Alert onClose>\n          Alert onClose=true\n        </Alert>\n\n        <Alert onClose={this.handleClose}>\n          Alert onClose=function\n        </Alert>\n\n        {\n          placeholder && <Alert type=\"info\">{placeholder}</Alert>\n        }\n      </Fragment>\n    )\n  }\n}\n"},452:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),c=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={placeholder:""},t.handleClose=t.handleClose.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.PureComponent),l(n,[{key:"handleClose",value:function(){this.setState({placeholder:"Alert was dismissed."})}},{key:"render",value:function(){var e=this.state.placeholder;return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{onClose:!0},"Alert onClose=true"),o.a.createElement(a.a,{onClose:this.handleClose},"Alert onClose=function"),e&&o.a.createElement(a.a,{type:"info"},e))}}]),n}();n.default=c},453:function(e,n){e.exports='/**\n * cn - 类型 type\n * en - type\n */\nimport React, { Fragment } from \'react\'\nimport { Alert } from \'shineout\'\n\nexport default function () {\n  return (\n    <Fragment>\n      <Alert type="success">Success Type.</Alert>\n      <Alert type="info">Info Type.</Alert>\n      <Alert type="warning">Warning Type.</Alert>\n      <Alert type="danger">Danger Type.</Alert>\n    </Fragment>\n  )\n}\n'},454:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1);n.default=function(){return o.a.createElement(r.Fragment,null,o.a.createElement(a.a,{type:"success"},"Success Type."),o.a.createElement(a.a,{type:"info"},"Info Type."),o.a.createElement(a.a,{type:"warning"},"Warning Type."),o.a.createElement(a.a,{type:"danger"},"Danger Type."))}},455:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Alert } from 'shineout'\n\nexport default function () {\n  return (\n    <Alert>\n      <h3>Title</h3>\n      Some content.\n    </Alert>\n  )\n}\n"},456:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(1);n.default=function(){return o.a.createElement(a.a,null,o.a.createElement("h3",null,"Title"),"Some content.")}},929:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(7),l=t(6),c=t(2),i=t(245),s=t.n(i),u=t(244),p=t.n(u),f=Object(c.a)(s.a,p.a),m=[{name:"1-base",title:Object(c.a)("基本用法","Base"),component:t(456).default,rawText:t(455)},{name:"2-type",title:Object(c.a)("类型 type","type"),component:t(454).default,rawText:t(453)},{name:"3-close",title:Object(c.a)("关闭 onClose","onClose"),component:t(452).default,rawText:t(451)},{name:"4-icon",title:Object(c.a)("图标 icon","with icon"),component:t(450).default,rawText:t(449)}];n.default=Object(a.a)(function(e){return o.a.createElement(l.b,Object.assign({},e,{codes:void 0,source:f,examples:m}))})}}]);