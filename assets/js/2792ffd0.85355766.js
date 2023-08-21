"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9021],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>d});var a=t(7294);function A(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){A(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,A=function(e,n){if(null==e)return{};var t,a,A={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(A[t]=e[t]);return A}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(A[t]=e[t])}return A}var c=a.createContext({}),p=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(c.Provider,{value:n},e.children)},i="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},k=a.forwardRef((function(e,n){var t=e.components,A=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),i=p(t),k=A,d=i["".concat(c,".").concat(k)]||i[k]||m[k]||o;return t?a.createElement(d,r(r({ref:n},s),{},{components:t})):a.createElement(d,r({ref:n},s))}));function d(e,n){var t=arguments,A=n&&n.mdxType;if("string"==typeof e||A){var o=t.length,r=new Array(o);r[0]=k;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[i]="string"==typeof e?e:A,r[1]=l;for(var p=2;p<o;p++)r[p]=t[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},3527:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=t(7462),A=(t(7294),t(3905));const o={sidebar_position:118,sidebar_label:"Solana\u7684RPC\u4ecb\u7ecd",sidebar_class_name:"green"},r="Solana\u7684RPC\u4ecb\u7ecd",l={unversionedId:"Solana-Bootcamp-zh/week2/solana-rpc-intro",id:"Solana-Bootcamp-zh/week2/solana-rpc-intro",title:"Solana\u7684RPC\u4ecb\u7ecd",description:"RPC \u4ecb\u7ecd",source:"@site/docs/Solana-Bootcamp-zh/week2/solana-rpc-intro.md",sourceDirName:"Solana-Bootcamp-zh/week2",slug:"/Solana-Bootcamp-zh/week2/solana-rpc-intro",permalink:"/all-in-one-solana/docs/Solana-Bootcamp-zh/week2/solana-rpc-intro",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Solana-Bootcamp-zh/week2/solana-rpc-intro.md",tags:[],version:"current",sidebarPosition:118,frontMatter:{sidebar_position:118,sidebar_label:"Solana\u7684RPC\u4ecb\u7ecd",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"week2 \u901a\u8fc7RPC\u4e0eSolana\u4ea4\u4e92",permalink:"/all-in-one-solana/docs/Solana-Bootcamp-zh/week2/"},next:{title:"\u63a5\u53e3RPC",permalink:"/all-in-one-solana/docs/Solana-Bootcamp-zh/week2/interface-rpc"}},c={},p=[{value:"RPC \u4ecb\u7ecd",id:"rpc-\u4ecb\u7ecd",level:2},{value:"HTTP \u63a5\u53e3",id:"http-\u63a5\u53e3",level:2},{value:"Websocket \u63a5\u53e3",id:"websocket-\u63a5\u53e3",level:2}],s={toc:p},i="wrapper";function m(e){let{components:n,...o}=e;return(0,A.kt)(i,(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,A.kt)("h1",{id:"solana\u7684rpc\u4ecb\u7ecd"},"Solana\u7684RPC\u4ecb\u7ecd"),(0,A.kt)("h2",{id:"rpc-\u4ecb\u7ecd"},"RPC \u4ecb\u7ecd"),(0,A.kt)("p",null,"RPC \u662f\u4ec0\u4e48\uff1f"),(0,A.kt)("blockquote",null,(0,A.kt)("p",{parentName:"blockquote"},"In distributed computing, a remote procedure call (RPC) is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network)"),(0,A.kt)("p",{parentName:"blockquote"},"-- wikipedia")),(0,A.kt)("p",null,"\u5199\u4ee3\u7801\u7684\u5e94\u8be5\u90fd\u77e5\u9053 RPC \u662f\u5565\uff0c\u4f46\u662f RPC \u8ddf\u533a\u5757\u94fe\u662f\u4ec0\u4e48\u5173\u7cfb\u5462\uff1f"),(0,A.kt)("p",null,"\u5f15\u7528 Polkadot \u7684\u4e00\u4e2a\u67b6\u6784\u56fe\uff1a"),(0,A.kt)("p",null,(0,A.kt)("img",{src:t(8021).Z})),(0,A.kt)("p",null,"RPC \u4f5c\u4e3a\u533a\u5757\u94fe\u7cfb\u7edf\u4e0e\u5916\u754c\u4ea4\u4e92\u7684\u4e00\u5c42\u63a5\u53e3\u8c03\u7528\u3002\u88ab\u666e\u901a\u7528\u6237\u76f4\u63a5\u4f7f\u7528\u3002"),(0,A.kt)("p",null,"\u4f46\u662f\u4e3a\u4ec0\u4e48\u666e\u901a\u7528\u6237\u53c8\u611f\u77e5\u4e0d\u5230 RPC \u7684\u5b58\u5728\u5462\uff1f\u666e\u901a\u7528\u6237\u53ea\u77e5\u9053\u94b1\u5305\uff0c\u62c9\u8d77\u3001\u786e\u5b9a -> \u5e01\u6ca1\u4e86\u3002"),(0,A.kt)("p",null,"\u8fd9\u91cc\u662f\u56e0\u4e3a\u6211\u4eec\u8fd9\u5e2e\u7a0b\u5e8f\u5458\uff0c\u5e2e\u5fd9\u5c06\u4e2d\u95f4\u7684\u8fc7\u7a0b\u90fd\u901a\u8fc7\u4ee3\u7801\u6765\u4e32\u8054\u8d77\u6765\u4e86\u3002\u6240\u4ee5 RPC \u53c8\u662f\u7528\u6237\u754c\u9762\u548c\u533a\u5757\u94fe\u4e4b\u95f4\u7684\u6865\u6881\u3002"),(0,A.kt)("p",null,"Solana \u63d0\u4f9b\u7684 RPC \u5206\u4e3a\u4e3b\u52a8\u8bf7\u6c42\u7684 HTTP \u63a5\u53e3\u548c\u6d88\u606f\u63a8\u9001\u7684 Websocket \u63a5\u53e3\u3002\u53ea\u662f\u5355\u6b21\u67e5\u8be2\u4e00\u822c\u4f7f\u7528 HTTP \u63a5\u53e3\uff0c\u5982\u53d1\u9001\u4ea4\u6613\uff0c\u67e5\u8be2\u7528\u6237\u4f59\u989d\u3002\u800c\u5bf9\u4e8e\u94fe\u4e0a\u6570\u636e\u7684\u76d1\u63a7\u5219\u901a\u8fc7 Websocket \u63a5\u53e3\uff0c\u5982\u76d1\u63a7\u5408\u7ea6\u6267\u884c\u7684\u65e5\u5fd7\u3002"),(0,A.kt)("h2",{id:"http-\u63a5\u53e3"},"HTTP \u63a5\u53e3"),(0,A.kt)("p",null,"HTTP \u63a5\u53e3\u662f\u901a\u8fc7 ",(0,A.kt)("a",{parentName:"p",href:"https://www.jsonrpc.org/"},"JSON RPC")," \u7684\u683c\u5f0f\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\uff0cJSON RPC \u662f\u4e00\u79cd\u4ee5 JSSON \u4f5c\u4e3a\u5e8f\u5217\u5316\u5de5\u5177\uff0cHTTP \u4f5c\u4e3a\u4f20\u8f93\u534f\u8bae\u7684 RPC \u6a21\u5f0f\uff0c\u5176\u6709\u591a\u4e2a\u7248\u672c\uff0c\u5f53\u524d\u4f7f\u7528\u7684\u662f v2 \u7248\u672c\u3002"),(0,A.kt)("p",null,"\u5176\u8bf7\u6c42\u683c\u5f0f\u4e3a\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "method": "getBalance",\n    "params": [\n        "83astBRguLMdt2h5U1Tpdq5tjFoJ6noeGwaY3mDLVcri"\n    ]\n}\n')),(0,A.kt)("p",null,"\u8fd9\u91cc\u6700\u5916\u5c42\u662f\u4e00\u4e2a\u5b57\u5178\uff0c\u5176\u4e2d\u5404\u4e2a ",(0,A.kt)("inlineCode",{parentName:"p"},"Key")," \u662f\u56fa\u5b9a\u7684\uff0c\u5176\u4e2d ",(0,A.kt)("inlineCode",{parentName:"p"},"method")," \u8868\u793a RPC \u7684\u51fd\u6570\u65b9\u6cd5\u540d\u3002",(0,A.kt)("inlineCode",{parentName:"p"},"params")," \u8868\u793a\u8be5\u51fd\u6570\u7684\u53c2\u6570\u3002"),(0,A.kt)("p",null,"\u5bf9\u5e94\u7684\u8bf7\u6c42\u7ed3\u679c\u4e3a\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "result": {},\n    "id": 1\n}\n')),(0,A.kt)("p",null,"\u540c\u6837\u7684\uff0c\u8fd9\u91cc\u7684\u51e0\u4e2a\u5b57\u6bb5\u4e5f\u662f\u56fa\u5b9a\u7684\uff0c",(0,A.kt)("inlineCode",{parentName:"p"},"result")," \u8868\u793a\u8bf7\u6c42\u7684\u7ed3\u679c\u3002",(0,A.kt)("inlineCode",{parentName:"p"},"id")," \u548c\u8bf7\u6c42\u91cc\u9762\u7684 ",(0,A.kt)("inlineCode",{parentName:"p"},"id")," \u5bf9\u5e94\uff0c\u8868\u793a\u7684\u662f\u54ea\u4e2a\u8bf7\u6c42\u7684\u7ed3\u679c\u3002"),(0,A.kt)("p",null,"\u5728\u8bf7\u6c42\u67e5\u8be2\u7684\u65f6\u5019\uff0c\u5bf9\u67e5\u8be2\u7684\u7ed3\u679c\u6709\u4e09\u79cd\u72b6\u6001\u9009\u62e9\uff1a"),(0,A.kt)("ul",null,(0,A.kt)("li",{parentName:"ul"},"'",(0,A.kt)("inlineCode",{parentName:"li"},"finalized"),"' - \u8282\u70b9\u5c06\u67e5\u8be2\u7531\u8d85\u8fc7\u96c6\u7fa4\u4e2d\u8d85\u591a\u6570\u786e\u8ba4\u4e3a\u8fbe\u5230\u6700\u5927\u5c01\u9501\u671f\u7684\u6700\u65b0\u533a\u5757\uff0c\u8868\u793a\u96c6\u7fa4\u5df2\u5c06\u6b64\u533a\u5757\u786e\u8ba4\u4e3a\u5df2\u5b8c\u6210\u3002"),(0,A.kt)("li",{parentName:"ul"},"'",(0,A.kt)("inlineCode",{parentName:"li"},"confirmed"),"' - \u8282\u70b9\u5c06\u67e5\u8be2\u7531\u96c6\u7fa4\u7684\u8d85\u591a\u6570\u6295\u7968\u7684\u6700\u65b0\u533a\u5757\u3002"),(0,A.kt)("li",{parentName:"ul"},"'",(0,A.kt)("inlineCode",{parentName:"li"},"processed"),"' - \u8282\u70b9\u5c06\u67e5\u8be2\u6700\u65b0\u7684\u533a\u5757\u3002\u6ce8\u610f\uff0c\u8be5\u533a\u5757\u53ef\u80fd\u88ab\u96c6\u7fa4\u8df3\u8fc7\u3002\n\u72b6\u6001\u53c2\u6570\u53ef\u4ee5\u5728\"",(0,A.kt)("inlineCode",{parentName:"li"},"params"),'"\u6570\u7ec4\u7684\u6700\u540e\uff0c\u4ee5\u5b57\u5178\u7684\u5f62\u5f0f\u5e26\u5165\u8fdb\u53bb\u3002')),(0,A.kt)("p",null,'\u540c\u65f6 Solana \u4e5f\u5bf9\u5e38\u7528\u7684\u7ed3\u679c\u505a\u4e86\u4eba\u4e3a\u53ef\u8bfb\u7684\u4f18\u5316\u3002\u5f53\u4f20\u9012"',(0,A.kt)("inlineCode",{parentName:"p"},"encoding"),'":"',(0,A.kt)("inlineCode",{parentName:"p"},"jsonParsed"),'"\u4f1a\u8bb2\u7ed3\u679c\u5c3d\u91cf\u4ee5 JSON \u7684\u65b9\u5f0f\u8fd4\u56de\u3002',(0,A.kt)("inlineCode",{parentName:"p"},"encoding")," \u548c\u4e0a\u9762\u7684\u72b6\u6001\u653e\u5728\u540c\u4e00\u4e2a\u4f4d\u7f6e\u3002\u5982\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "commitment":"processed",\n    "encoding":"jsonParsed"\n}\n')),(0,A.kt)("h2",{id:"websocket-\u63a5\u53e3"},"Websocket \u63a5\u53e3"),(0,A.kt)("p",null,"Websocket \u662f HTTP \u4e3a\u4e86\u8865\u5145\u957f\u94fe\u63a5\uff0c\u800c\u589e\u52a0\u4e00\u4e2a\u7279\u6027\uff0c\u6982\u62ec\u6765\u8bf4\u5c31\u53ef\u4ee5\u8ba4\u4e3a\u8fd9\u4e2a\u662f\u4e00\u6761 TCP \u957f\u94fe\u63a5\u3002Solana \u901a\u8fc7\u8fd9\u6761\u957f\u8fde\u63a5\u6765\u7ed9\u5ba2\u6237\u7aef\u63a8\u9001\u6d88\u606f\u3002"),(0,A.kt)("p",null,"\u53ea\u662f\u8fd9\u91cc\u7684\u6d88\u606f\u7684\u5185\u5bb9\u4e5f\u662f\u91c7\u7528\u4e86 JSONRPC \u7684\u683c\u5f0f\uff0c\u5982\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "id": 1,\n    "method": "accountSubscribe",\n    "params": [\n        "CM78CPUeXjn8o3yroDHxUtKsZZgoy4GPkPPXfouKNH12",\n        {\n        "encoding": "jsonParsed",\n        "commitment": "finalized"\n        }\n    ]\n}\n')),(0,A.kt)("p",null,"\u8fd9\u6837\u7684\u6d88\u606f\u8ba2\u9605\u4e86 ",(0,A.kt)("inlineCode",{parentName:"p"},'Account("CM78CPUeXjn8o3yroDHxUtKsZZgoy4GPkPPXfouKNH12")'),"\u7684\u53d8\u5316\u6d88\u606f\u3002"),(0,A.kt)("p",null,"\u5f53\u6709\u53d8\u5316\u65f6\uff0c\u4e5f\u662f\u5c06\u7ed3\u679c\u6253\u5305\u6210\u4e00\u4e2a JSONRPC \u7684\u683c\u5f0f\u63a8\u9001\u7ed9\u5ba2\u6237\u7aef\uff1a"),(0,A.kt)("pre",null,(0,A.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "jsonrpc": "2.0",\n    "method": "accountNotification",\n    "params": {\n        "result": {\n        "context": {\n            "slot": 5199307\n        },\n        "value": {\n            "data": {\n            "program": "nonce",\n            "parsed": {\n                "type": "initialized",\n                "info": {\n                "authority": "Bbqg1M4YVVfbhEzwA9SpC9FhsaG83YMTYoR4a8oTDLX",\n                "blockhash": "LUaQTmM7WbMRiATdMMHaRGakPtCkc2GHtH57STKXs6k",\n                "feeCalculator": {\n                    "lamportsPerSignature": 5000\n                }\n                }\n            }\n            },\n            "executable": false,\n            "lamports": 33594,\n            "owner": "11111111111111111111111111111111",\n            "rentEpoch": 635,\n            "space": 80\n        }\n        },\n        "subscription": 23784\n    }\n}\n')),(0,A.kt)("p",null,"\u6bcf\u4e2a ",(0,A.kt)("inlineCode",{parentName:"p"},"Subscribe")," \u65b9\u6cd5\uff0c\u90fd\u5bf9\u5e94\u7684\u6709\u4e00\u4e2a ",(0,A.kt)("inlineCode",{parentName:"p"},"Unsubscribe")," \u65b9\u6cd5\uff0c\u5f53\u53d1\u9001\u6539\u65b9\u6cd5\u65f6\uff0c\u670d\u52a1\u5668\u540e\u7eed\u4e0d\u518d\u63a8\u9001\u6d88\u606f\u3002"))}m.isMDXComponent=!0},8021:(e,n,t)=>{t.d(n,{Z:()=>a});const a="data:image/png;base64,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"}}]);