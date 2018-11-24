webpackJsonpShineoutDoc([15],{1065:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(57),r=e(56),l=e(32),c=e(1066),d=e.n(c),s=e(1067),u=e.n(s),p=Object(l.a)(d.a,u.a),h=[{name:"1-base",title:Object(l.a)("基本用法 \n Menu 通过数据来生成菜单项","Base \n Menu generates menu items through data."),component:e(1068).default,rawText:e(1069)},{name:"2-horizontal",title:Object(l.a)('水平布局 \n 设置 mode 为 "horizontal"，显示为水平布局（子菜单在右侧弹出）','Horizontal \n Set mode to "horizontal" to display it as horizontal layout (submenu pops up on the right).'),component:e(1070).default,rawText:e(1071)},{name:"3-vertical",title:Object(l.a)('垂直样式 \n 设置 mode 为 "vertical"，显示为垂直布局','Vertical \n Set mode to "vertical" to display it as vertical layout.'),component:e(1072).default,rawText:e(1073)},{name:"4-disabled",title:Object(l.a)("禁用菜单 \n 通过 disabled 属性可以禁用选项","Disabled \n Disable the option by the disabled property."),component:e(1074).default,rawText:e(1075)},{name:"5-selected",title:Object(l.a)("受控 \n active 参数控制选中选项","Controlled \n Set active property to control the actived option."),component:e(1076).default,rawText:e(1077)},{name:"6-itemRender",title:Object(l.a)("自定义渲染 \n 设置 renderItem 属性展现稍微复杂的内容","RenderItem \n Set the renderItem property to show format content."),component:e(1078).default,rawText:e(1079)},{name:"7-click",title:Object(l.a)("点击事件 \n 如果选项未设置单独的 onClick 事件，点击后会调用 Menu 定义的 onClick 事件","Click \n If the data item set the onClick event, this event is called. Otherwise, the onClick event defined by Menu is called."),component:e(1080).default,rawText:e(1081)},{name:"8-dark",title:Object(l.a)("暗系主题 \n 内置了一个暗色的主题，通过 theme 使用","Dark theme \n The dark theme."),component:e(1082).default,rawText:e(1083)}];t.default=Object(o.a)(function(n){return a.a.createElement(r.b,Object.assign({},n,{codes:void 0,source:p,examples:h}))})},1066:function(n,t){n.exports="# menu *菜单*\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | array | [] | 需要渲染成菜单的数据 |\n| disabled | function | d => d.disabled | 是否禁用选项 |\n| mode | string | 'inline'| 菜单样式,提供 'inline', 'vertical', 'horizontal'三种|\n| renderItem | string \\| function | 'title' | 元素渲染方式,如果为字符串,则会以对应的值作为显示内容;如果为函数,则以函数返回的结果作为显示内容,函数参数为对应的数据对象 |\n| keygen | string \\| function(obj):string \\| true | 必填 | 生成每一项key的辅助方法<br />为 true 时，以数据项本身作为key，相当于 (d => d)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d => d.id) |\n| active | function | null | 验证是否激活,参数为对应的数据对象,返回true则代表该菜单激活 |\n| defaultOpenKeys | array | [] | 初始展开的菜单;如果需要设置此值,则需要设置keygen,此值为一个包含key的数组 |\n| onClick | function | null | 子菜单点击事件,参数为当条数据|\n| style | object | 无 | 最外层扩展样式 |"},1067:function(n,t){n.exports="# Menu\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| data | array | [] | Menu items data |\n| disabled | function | d => d.disabled | Whether to be disabled |\n| mode | string | 'inline' | Options: 'inline', 'vertical', 'horizontal' |\n| renderItem | string \\| function | 'title' | Element render mode. <br />If it is a string, the corresponding value is taken as the display content; <br />If it is a function, the result returned by the function is taken as the display content. |\n| keygen | string \\| function(obj):string \\| true | required | Key generator<br />When it is true, the data itself is used as the key equivalent to (d => d)<br />When it is a function, use its return value.<br />When it is a string，ues the value of the string.For example, 'id' is the same thing as (d) => d.id. |\n| active | function | null | The item is actived when the active function return true. |\n| defaultOpenKeys | array | [] | Initial expanded menu |\n| onClick | function | null | The function will be called when the user clicks the menu item. |\n| style | object | - | Container element style |"},1068:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",onClick:!0,children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",onClick:function(){return console.log("only click")},children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.checkActive=function(n){return e.state.active===n.id},e.state={active:"1"},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:n.id})}},{key:"render",value:function(){return a.a.createElement(o.p,{keygen:"id",data:l,renderItem:function(n){return n.title},active:this.checkActive,style:{width:256},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1069:function(n,t){n.exports="/**\n * cn - 基本用法\n *    -- Menu 通过数据来生成菜单项\n * en - Base\n *    -- Menu generates menu items through data.\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  },\n  {\n    id: '3',\n    title: 'Navigation Two',\n    onClick: true,\n    children: [\n      {\n        id: '4',\n        title: 'Option 1',\n      }, {\n        id: '5',\n        title: 'Option 2',\n      },\n    ],\n  },\n  {\n    id: '6',\n    title: 'Navigation Three',\n    onClick: () => console.log('only click'),\n    children: [\n      {\n        id: '7',\n        title: 'Option 3',\n      },\n      {\n        id: '8',\n        title: 'Option 4',\n        children: [{\n          id: '9',\n          title: 'Optic 1',\n        }, {\n          id: '10',\n          title: 'Optic 2',\n        },\n        ],\n      },\n    ],\n  },\n  {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: '1',\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(d) {\n    this.setState({\n      active: d.id,\n    })\n  }\n\n  checkActive = d => this.state.active === d.id\n\n  render() {\n    return (\n      <Menu\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={this.checkActive}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1070:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4"}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{mode:"horizontal",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1071:function(n,t){n.exports="/**\n * cn - 水平布局\n *    -- 设置 mode 为 \"horizontal\"，显示为水平布局（子菜单在右侧弹出）\n * en - Horizontal\n *    -- Set mode to \"horizontal\" to display it as horizontal layout (submenu pops up on the right).\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n  render() {\n    return (\n      <Menu\n        mode=\"horizontal\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1072:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"21",title:"Navigation 21"},{id:"22",title:"Navigation 22"},{id:"23",title:"Navigation 23"},{id:"24",title:"Navigation 24"},{id:"25",title:"Navigation 25"},{id:"26",title:"Navigation 26"},{id:"27",title:"Navigation 27"},{id:"28",title:"Navigation 28"},{id:"29",title:"Navigation 29"},{id:"30",title:"Navigation 30",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"31",title:"Navigation 31"},{id:"32",title:"Navigation 32"},{id:"33",title:"Navigation 33"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{mode:"vertical",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256,height:300},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1073:function(n,t){n.exports="/**\n * cn - 垂直样式\n *    -- 设置 mode 为 \"vertical\"，显示为垂直布局\n * en - Vertical\n *    -- Set mode to \"vertical\" to display it as vertical layout.\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '21',\n    title: 'Navigation 21',\n  }, {\n    id: '22',\n    title: 'Navigation 22',\n  }, {\n    id: '23',\n    title: 'Navigation 23',\n  }, {\n    id: '24',\n    title: 'Navigation 24',\n  }, {\n    id: '25',\n    title: 'Navigation 25',\n  }, {\n    id: '26',\n    title: 'Navigation 26',\n  }, {\n    id: '27',\n    title: 'Navigation 27',\n  }, {\n    id: '28',\n    title: 'Navigation 28',\n  }, {\n    id: '29',\n    title: 'Navigation 29',\n  }, {\n    id: '30',\n    title: 'Navigation 30',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '31',\n    title: 'Navigation 31',\n  }, {\n    id: '32',\n    title: 'Navigation 32',\n  }, {\n    id: '33',\n    title: 'Navigation 33',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n\n  render() {\n    return (\n      <Menu\n        mode=\"vertical\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256, height: 300 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1074:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",disabled:!0,children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four",disabled:!0}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{mode:"inline",keygen:"id",data:l,disabled:function(n){return n.disabled},renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,onClick:this.handleClick})}}]),t}();t.default=c},1075:function(n,t){n.exports="/**\n * cn - 禁用菜单\n *    -- 通过 disabled 属性可以禁用选项\n * en - Disabled\n *    --Disable the option by the disabled property.\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    disabled: true,\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n    disabled: true,\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        disabled={d => d.disabled}\n        renderItem={d => d.title}\n        active={d => this.state.active.includes(d.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1076:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{mode:"inline",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,defaultOpenKeys:["3"],onClick:this.handleClick})}}]),t}();t.default=c},1077:function(n,t){n.exports="/**\n * cn - 受控\n *    -- active 参数控制选中选项\n * en - Controlled\n *    -- Set active property to control the actived option.\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        defaultOpenKeys={['3']}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1078:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=e(233),l=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var c={1:a.a.createElement(r.a,{name:"home"}),3:a.a.createElement(r.a,{name:"flag"}),6:a.a.createElement(r.a,{name:"tag"}),2:a.a.createElement(r.a,{name:"github"})},d=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}];function s(n){return n.title.startsWith("Navigation")?a.a.createElement("span",null,c[n.id],"  ",n.title):n.title}var u=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),l(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{mode:"inline",keygen:"id",data:d,renderItem:s,active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,defaultOpenKeys:["3"],onClick:this.handleClick})}}]),t}();t.default=u},1079:function(n,t){n.exports="/**\n * cn - 自定义渲染\n *    -- 设置 renderItem 属性展现稍微复杂的内容\n * en - RenderItem\n *    -- Set the renderItem property to show format content.\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\nimport Icon from '../Icon/FontAwesome'\n\nconst Icons = {\n  1: <Icon name=\"home\" />,\n  3: <Icon name=\"flag\" />,\n  6: <Icon name=\"tag\" />,\n  2: <Icon name=\"github\" />,\n}\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\nfunction renderItem(da) {\n  if (da.title.startsWith('Navigation')) {\n    return (<span>{Icons[da.id]}  {da.title}</span>)\n  }\n  return da.title\n}\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={renderItem}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        defaultOpenKeys={['3']}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1080:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){o.q.info("now select is "+n.title),this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{mode:"inline",keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},inlineIndent:24,defaultOpenKeys:["3"],onClick:this.handleClick})}}]),t}();t.default=c},1081:function(n,t){n.exports="/**\n * cn - 点击事件\n *    -- 如果选项未设置单独的 onClick 事件，点击后会调用 Menu 定义的 onClick 事件\n * en - Click\n *    -- If the data item set the onClick event, this event is called. Otherwise, the onClick event defined by Menu is called.\n */\nimport React from 'react'\nimport { Menu, Message } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(da) {\n    Message.info(`now select is ${da.title}`)\n    this.setState({\n      active: [da.id],\n    })\n  }\n\n  render() {\n    return (\n      <Menu\n        mode=\"inline\"\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        inlineIndent={24}\n        defaultOpenKeys={['3']}\n        onClick={this.handleClick}\n      />\n    )\n  }\n}\n"},1082:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=e(0),a=e.n(i),o=e(17),r=function(){function n(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}return function(t,e,i){return e&&n(t.prototype,e),i&&n(t,i),t}}();var l=[{id:"1",title:"Navigation One"},{id:"3",title:"Navigation Two",children:[{id:"4",title:"Option 1"},{id:"5",title:"Option 2"}]},{id:"6",title:"Navigation Three",children:[{id:"7",title:"Option 3"},{id:"8",title:"Option 4",children:[{id:"9",title:"Optic 1"},{id:"10",title:"Optic 2"}]}]},{id:"2",title:"Navigation Four"}],c=function(n){function t(n){!function(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var e=function(n,t){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?n:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,n));return e.state={active:["1"]},e.handleClick=e.handleClick.bind(e),e}return function(n,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);n.prototype=Object.create(t&&t.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(n,t):n.__proto__=t)}(t,a.a.Component),r(t,[{key:"handleClick",value:function(n){this.setState({active:[n.id]})}},{key:"render",value:function(){var n=this;return a.a.createElement(o.p,{keygen:"id",data:l,renderItem:function(n){return n.title},active:function(t){return n.state.active.includes(t.id)},style:{width:256},onClick:this.handleClick,theme:"dark"})}}]),t}();t.default=c},1083:function(n,t){n.exports="/**\n * cn - 暗系主题\n *    -- 内置了一个暗色的主题，通过 theme 使用\n * en - Dark theme\n *    -- The dark theme.\n */\nimport React from 'react'\nimport { Menu } from 'shineout'\n\nconst data = [\n  {\n    id: '1',\n    title: 'Navigation One',\n  }, {\n    id: '3',\n    title: 'Navigation Two',\n    children: [{\n      id: '4',\n      title: 'Option 1',\n    }, {\n      id: '5',\n      title: 'Option 2',\n    }],\n  }, {\n    id: '6',\n    title: 'Navigation Three',\n    children: [{\n      id: '7',\n      title: 'Option 3',\n    }, {\n      id: '8',\n      title: 'Option 4',\n      children: [{\n        id: '9',\n        title: 'Optic 1',\n      }, {\n        id: '10',\n        title: 'Optic 2',\n      }],\n    }],\n  }, {\n    id: '2',\n    title: 'Navigation Four',\n  },\n]\n\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      active: ['1'],\n    }\n    this.handleClick = this.handleClick.bind(this)\n  }\n\n  handleClick(da) {\n    this.setState({\n      active: [da.id],\n    })\n  }\n\n  render() {\n    return (\n      <Menu\n        keygen=\"id\"\n        data={data}\n        renderItem={d => d.title}\n        active={da => this.state.active.includes(da.id)}\n        style={{ width: 256 }}\n        onClick={this.handleClick}\n        theme=\"dark\"\n      />\n    )\n  }\n}\n"},233:function(n,t,e){"use strict";var i=e(17);t.a=Object(i.m)("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css","FontAwesome","fa")}});