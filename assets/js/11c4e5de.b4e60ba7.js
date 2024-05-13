"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[8044],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),k=o,u=d["".concat(s,".").concat(k)]||d[k]||m[k]||i;return a?n.createElement(u,r(r({ref:t},c),{},{components:a})):n.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=k;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},30668:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=a(87462),o=(a(67294),a(3905));const i={title:"\u91cd\u8bd5\u4ea4\u6613",sidebar_position:11,tags:["solana-cook-book","transactions"]},r="\u91cd\u8bd5\u4ea4\u6613",l={unversionedId:"guides/retrying-transactions",id:"guides/retrying-transactions",title:"\u91cd\u8bd5\u4ea4\u6613",description:"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u770b\u4f3c\u6709\u6548\u7684\u4ea4\u6613\u53ef\u80fd\u5728\u8f93\u5165\u533a\u5757\u4e4b\u524d\u4f1a\u88ab\u4e22\u5f03\u3002\u8fd9\u79cd\u60c5\u51b5\u6700\u5e38\u53d1\u751f\u5728\u7f51\u7edc\u62e5\u5835\u671f\u95f4\uff0c\u5f53\u4e00\u4e2aRPC\u8282\u70b9\u65e0\u6cd5\u5c06\u4ea4\u6613\u91cd\u65b0\u5e7f\u64ad\u7ed9\u533a\u5757\u94fe\u7684\u9886\u5bfc\u8282\u70b9\u65f6\u3002\u5bf9\u4e8e\u6700\u7ec8\u7528\u6237\u6765\u8bf4\uff0c\u4ed6\u4eec\u7684\u4ea4\u6613\u53ef\u80fd\u4f1a\u5b8c\u5168\u6d88\u5931\u3002\u867d\u7136RPC\u8282\u70b9\u914d\u5907\u4e86\u901a\u7528\u7684\u91cd\u65b0\u5e7f\u64ad\u7b97\u6cd5\uff0c\u4f46\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u5f00\u53d1\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u91cd\u65b0\u5e7f\u64ad\u903b\u8f91\u3002",source:"@site/docs/cookbook-zh/guides/retrying-transactions.md",sourceDirName:"guides",slug:"/guides/retrying-transactions",permalink:"/solana-co-learn/cookbook-zh/guides/retrying-transactions",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/guides/retrying-transactions.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"transactions",permalink:"/solana-co-learn/cookbook-zh/tags/transactions"}],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:11,frontMatter:{title:"\u91cd\u8bd5\u4ea4\u6613",sidebar_position:11,tags:["solana-cook-book","transactions"]},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u6237\u6620\u5c04",permalink:"/solana-co-learn/cookbook-zh/guides/account-maps"},next:{title:"\u8c03\u8bd5 Solana \u7a0b\u5e8f",permalink:"/solana-co-learn/cookbook-zh/guides/debugging-solana-programs"}},s={},p=[{value:"\u4ea4\u6613\u7684\u65c5\u7a0b",id:"\u4ea4\u6613\u7684\u65c5\u7a0b",level:2},{value:"\u5ba2\u6237\u7aef\u5982\u4f55\u63d0\u4ea4\u4ea4\u6613",id:"\u5ba2\u6237\u7aef\u5982\u4f55\u63d0\u4ea4\u4ea4\u6613",level:3},{value:"RPC\u8282\u70b9\u5982\u4f55\u5e7f\u64ad\u4ea4\u6613",id:"rpc\u8282\u70b9\u5982\u4f55\u5e7f\u64ad\u4ea4\u6613",level:3},{value:"\u4ea4\u6613\u5982\u4f55\u88ab\u4e22\u5f03",id:"\u4ea4\u6613\u5982\u4f55\u88ab\u4e22\u5f03",level:2},{value:"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u4e4b\u524d",id:"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u4e4b\u524d",level:3},{value:"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u540e\uff0c\u4f46\u5c1a\u672a\u6700\u7ec8\u786e\u8ba4\u4e4b\u524d",id:"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u540e\u4f46\u5c1a\u672a\u6700\u7ec8\u786e\u8ba4\u4e4b\u524d",level:3},{value:"\u5904\u7406\u88ab\u4e22\u5f03\u7684\u4ea4\u6613",id:"\u5904\u7406\u88ab\u4e22\u5f03\u7684\u4ea4\u6613",level:2},{value:"\u6df1\u5165\u4e86\u89e3sendTransaction",id:"\u6df1\u5165\u4e86\u89e3sendtransaction",level:3},{value:"\u81ea\u5b9a\u4e49\u91cd\u64ad\u903b\u8f91",id:"\u81ea\u5b9a\u4e49\u91cd\u64ad\u903b\u8f91",level:2},{value:"\u8df3\u8fc7\u9884\u68c0\u7684\u540e\u679c",id:"\u8df3\u8fc7\u9884\u68c0\u7684\u540e\u679c",level:3},{value:"\u4f55\u65f6\u91cd\u65b0\u7b7e\u7f72\u4ea4\u6613",id:"\u4f55\u65f6\u91cd\u65b0\u7b7e\u7f72\u4ea4\u6613",level:3},{value:"\u81f4\u8c22",id:"\u81f4\u8c22",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...i}=e;return(0,o.kt)(d,(0,n.Z)({},c,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u91cd\u8bd5\u4ea4\u6613"},"\u91cd\u8bd5\u4ea4\u6613"),(0,o.kt)("p",null,"\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u4e00\u4e2a\u770b\u4f3c\u6709\u6548\u7684\u4ea4\u6613\u53ef\u80fd\u5728\u8f93\u5165\u533a\u5757\u4e4b\u524d\u4f1a\u88ab\u4e22\u5f03\u3002\u8fd9\u79cd\u60c5\u51b5\u6700\u5e38\u53d1\u751f\u5728\u7f51\u7edc\u62e5\u5835\u671f\u95f4\uff0c\u5f53\u4e00\u4e2aRPC\u8282\u70b9\u65e0\u6cd5\u5c06\u4ea4\u6613\u91cd\u65b0\u5e7f\u64ad\u7ed9\u533a\u5757\u94fe\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#leader"},"\u9886\u5bfc"),"\u8282\u70b9\u65f6\u3002\u5bf9\u4e8e\u6700\u7ec8\u7528\u6237\u6765\u8bf4\uff0c\u4ed6\u4eec\u7684\u4ea4\u6613\u53ef\u80fd\u4f1a\u5b8c\u5168\u6d88\u5931\u3002\u867d\u7136RPC\u8282\u70b9\u914d\u5907\u4e86\u901a\u7528\u7684\u91cd\u65b0\u5e7f\u64ad\u7b97\u6cd5\uff0c\u4f46\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u4e5f\u53ef\u4ee5\u5f00\u53d1\u81ea\u5df1\u7684\u81ea\u5b9a\u4e49\u91cd\u65b0\u5e7f\u64ad\u903b\u8f91\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"tip \u4e8b\u5b9e\u8868")),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"RPC\u8282\u70b9\u5c06\u5c1d\u8bd5\u4f7f\u7528\u901a\u7528\u7b97\u6cd5\u91cd\u65b0\u5e7f\u64ad\u4ea4\u6613"),(0,o.kt)("li",{parentName:"ul"},"\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u91cd\u65b0\u5e7f\u64ad\u903b\u8f91"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4eba\u5458\u5e94\u8be5\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"sendTransaction")," JSON-RPC\u65b9\u6cd5\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"maxRetries"),"\u53c2\u6570"),(0,o.kt)("li",{parentName:"ul"},"\u5f00\u53d1\u4eba\u5458\u5e94\u8be5\u542f\u7528\u9884\u68c0\u67e5\uff0c\u4ee5\u4fbf\u5728\u63d0\u4ea4\u4ea4\u6613\u4e4b\u524d\u5f15\u53d1\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},"\u5728\u91cd\u65b0\u7b7e\u7f72\u4efb\u4f55\u4ea4\u6613\u4e4b\u524d\uff0c",(0,o.kt)("strong",{parentName:"li"},"\u975e\u5e38\u91cd\u8981"),"\u7684\u662f\u786e\u4fdd\u521d\u59cb\u4ea4\u6613\u7684\u5757\u54c8\u5e0c\u5df2\u8fc7\u671f"))),(0,o.kt)("h2",{id:"\u4ea4\u6613\u7684\u65c5\u7a0b"},"\u4ea4\u6613\u7684\u65c5\u7a0b"),(0,o.kt)("h3",{id:"\u5ba2\u6237\u7aef\u5982\u4f55\u63d0\u4ea4\u4ea4\u6613"},"\u5ba2\u6237\u7aef\u5982\u4f55\u63d0\u4ea4\u4ea4\u6613"),(0,o.kt)("p",null,"\u5728Solana\u4e2d\uff0c\u6ca1\u6709\u5185\u5b58\u6c60\uff08mempool\uff09\u7684\u6982\u5ff5\u3002\u65e0\u8bba\u662f\u901a\u8fc7\u7f16\u7a0b\u8fd8\u662f\u7531\u6700\u7ec8\u7528\u6237\u53d1\u8d77\uff0c\u6240\u6709\u7684\u4ea4\u6613\u90fd\u4f1a\u88ab\u9ad8\u6548\u5730\u8def\u7531\u5230\u9886\u5bfc\u8282\u70b9\uff0c\u4ee5\u4fbf\u5c06\u5b83\u4eec\u5904\u7406\u6210\u533a\u5757\u3002\u6709\u4e24\u79cd\u4e3b\u8981\u7684\u65b9\u5f0f\u53ef\u4ee5\u5c06\u4ea4\u6613\u53d1\u9001\u7ed9\u9886\u5bfc\u8282\u70b9\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7RPC\u670d\u52a1\u5668\u548c",(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/clients/jsonrpc-api#sendtransaction"},"sendTransaction")," JSON-RPC \u65b9\u6cd5\u8fdb\u884c\u4ee3\u7406\u53d1\u9001"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7",(0,o.kt)("a",{parentName:"li",href:"https://docs.rs/solana-client/1.7.3/solana_client/tpu_client/index.html"},"TPU\u5ba2\u6237")," \u7aef\u76f4\u63a5\u53d1\u9001\u7ed9\u9886\u5bfc\u8282\u70b9")),(0,o.kt)("p",null,"\u7edd\u5927\u591a\u6570\u6700\u7ec8\u7528\u6237\u5c06\u901a\u8fc7RPC\u670d\u52a1\u5668\u63d0\u4ea4\u4ea4\u6613\u3002\u5f53\u5ba2\u6237\u7aef\u63d0\u4ea4\u4ea4\u6613\u65f6\uff0c\u63a5\u6536\u7684RPC\u8282\u70b9\u4f1a\u5c1d\u8bd5\u5c06\u4ea4\u6613\u5e7f\u64ad\u7ed9\u5f53\u524d\u548c\u4e0b\u4e00\u4e2a\u9886\u5bfc\u8282\u70b9\u3002\u5728\u4ea4\u6613\u88ab\u9886\u5bfc\u8282\u70b9\u5904\u7406\u4e4b\u524d\uff0c\u9664\u4e86\u5ba2\u6237\u7aef\u548c\u4e2d\u7ee7\u7684RPC\u8282\u70b9\u77e5\u9053\u7684\u5185\u5bb9\u5916\uff0c\u6ca1\u6709\u5173\u4e8e\u4ea4\u6613\u7684\u8bb0\u5f55\u3002\u5728TPU\u5ba2\u6237\u7aef\u7684\u60c5\u51b5\u4e0b\uff0c\u91cd\u65b0\u5e7f\u64ad\u548c\u9886\u5bfc\u8282\u70b9\u7684\u8f6c\u53d1\u5b8c\u5168\u7531\u5ba2\u6237\u7aef\u8f6f\u4ef6\u5904\u7406\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Transaction Journey",src:a(63649).Z,width:"3488",height:"1884"})),(0,o.kt)("h3",{id:"rpc\u8282\u70b9\u5982\u4f55\u5e7f\u64ad\u4ea4\u6613"},"RPC\u8282\u70b9\u5982\u4f55\u5e7f\u64ad\u4ea4\u6613"),(0,o.kt)("p",null,"\u5f53RPC\u8282\u70b9\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u63a5\u6536\u5230\u4e00\u4e2a\u4ea4\u6613\u540e\uff0c\u5b83\u4f1a\u5c06\u4ea4\u6613\u8f6c\u6362\u4e3a",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/User_Datagram_Protocol"},"UDP")," \u6570\u636e\u5305\uff0c\u7136\u540e\u5c06\u5176\u8f6c\u53d1\u7ed9\u76f8\u5173\u7684\u9886\u5bfc\u3002UDP\u5141\u8bb8\u9a8c\u8bc1\u8282\u70b9\u4e4b\u95f4\u5feb\u901f\u901a\u4fe1\uff0c\u4f46\u4e0d\u63d0\u4f9b\u5173\u4e8e\u4ea4\u6613\u4f20\u9012\u7684\u4efb\u4f55\u4fdd\u8bc1\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3aSolana\u7684\u9886\u5bfc\u8282\u70b9\u8c03\u5ea6\u5728\u6bcf\u4e2a",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/terminology#epoch"},"\u7eaa\u5143")," \uff08\u5927\u7ea62\u5929\uff09\u4e4b\u524d\u5c31\u5df2\u77e5\uff0c\u6240\u4ee5RPC\u8282\u70b9\u4f1a\u76f4\u63a5\u5c06\u5176\u4ea4\u6613\u5e7f\u64ad\u7ed9\u5f53\u524d\u548c\u4e0b\u4e00\u4e2a\u9886\u5bfc\u8282\u70b9\u3002\u8fd9\u4e0e\u5176\u4ed6\u6d41\u8a00\u534f\u8bae\uff08\u5982\u4ee5\u592a\u574a\uff09\u968f\u673a\u5e7f\u64ad\u548c\u5e7f\u6cdb\u4f20\u64ad\u6574\u4e2a\u7f51\u7edc\u7684\u4ea4\u6613\u7684\u65b9\u5f0f\u5f62\u6210\u5bf9\u6bd4\u3002\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cRPC\u8282\u70b9\u4f1a\u6bcf\u4e24\u79d2\u5c1d\u8bd5\u5c06\u4ea4\u6613\u8f6c\u53d1\u7ed9\u9886\u5bfc\u8282\u70b9\uff0c\u76f4\u5230\u4ea4\u6613\u88ab\u786e\u8ba4\u6216\u4ea4\u6613\u7684\u5757\u54c8\u5e0c\u8fc7\u671f\uff08\u5728\u672c\u6587\u64b0\u5199\u65f6\u4e3a150\u4e2a\u533a\u5757\u6216\u7ea61\u5206\u949f19\u79d2\uff09\u3002\u5982\u679c\u5f85\u91cd\u65b0\u5e7f\u64ad\u7684\u961f\u5217\u5927\u5c0f\u8d85\u8fc7",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/blob/bfbbc53dac93b3a5c6be9b4b65f679fdb13e41d9/send-transaction-service/src/send_transaction_service.rs#L20"},"10,000 transactions")," \u4e2a\u4ea4\u6613\uff0c\u5219\u65b0\u63d0\u4ea4\u7684\u4ea4\u6613\u5c06\u88ab\u4e22\u5f03\u3002RPC\u8fd0\u8425\u5546\u53ef\u4ee5\u8c03\u6574\u547d\u4ee4\u884c",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/blob/bfbbc53dac93b3a5c6be9b4b65f679fdb13e41d9/validator/src/main.rs#L1172"},"\u53c2\u6570")," \u4ee5\u66f4\u6539\u6b64\u91cd\u8bd5\u903b\u8f91\u7684\u9ed8\u8ba4\u884c\u4e3a\u3002"),(0,o.kt)("p",null,"\u5f53RPC\u8282\u70b9\u5e7f\u64ad\u4e00\u4e2a\u4ea4\u6613\u65f6\uff0c\u5b83\u4f1a\u5c1d\u8bd5\u5c06\u4ea4\u6613\u8f6c\u53d1\u7ed9\u9886\u5bfc\u8282\u70b9\u7684\u4ea4\u6613\u5904\u7406\u5355\u5143\uff08TPU\uff09\u3002TPU\u5c06\u4ea4\u6613\u5904\u7406\u5206\u4e3a\u4e94\u4e2a\u4e0d\u540c\u7684\u9636\u6bb5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/fetch_stage.rs#L21"},"Fetch Stage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/tpu.rs#L91"},"SigVerify Stage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/banking_stage.rs#L249"},"Banking Stage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/poh/src/poh_service.rs"},"Proof of History Service")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/core/src/tpu.rs#L136"},"Broadcast Stage"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"TPU Overview",src:a(86252).Z,width:"1772",height:"1056"})),(0,o.kt)("p",null,"Image Courtesy of Jito Labs"),(0,o.kt)("p",null,"\u5728\u8fd9\u4e94\u4e2a\u9636\u6bb5\u4e2d\uff0cFetch\u9636\u6bb5\u8d1f\u8d23\u63a5\u6536\u4ea4\u6613\u3002\u5728Fetch\u9636\u6bb5\u4e2d\uff0c\u9a8c\u8bc1\u8282\u70b9\u4f1a\u6839\u636e\u4e09\u4e2a\u7aef\u53e3\u5bf9\u4f20\u5165\u7684\u4ea4\u6613\u8fdb\u884c\u5206\u7c7b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/gossip/src/contact_info.rs#L27"},"tpu")," \u5904\u7406\u5e38\u89c4\u4ea4\u6613\uff0c\u4f8b\u5982\u4ee3\u5e01\u8f6c\u8d26\u3001NFT\u94f8\u9020\u548c\u7a0b\u5e8f\u6307\u4ee4\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/gossip/src/contact_info.rs#L31"},"tpu_vote")," \u4e13\u95e8\u5904\u7406\u6295\u7968\u4ea4\u6613\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/solana-labs/solana/blob/cd6f931223181d5a1d47cba64e857785a175a760/gossip/src/contact_info.rs#L29"},"tpu_forwards")," \u5c06\u672a\u5904\u7406\u7684\u6570\u636e\u5305\u8f6c\u53d1\u7ed9\u4e0b\u4e00\u4e2a\u9886\u5bfc\u8282\u70b9\uff0c\u5982\u679c\u5f53\u524d\u9886\u5bfc\u65e0\u6cd5\u5904\u7406\u6240\u6709\u4ea4\u6613\u3002")),(0,o.kt)("p",null,"\u5982\u9700\u4e86\u89e3\u66f4\u591a\u5173\u4e8eTPU\u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003",(0,o.kt)("a",{parentName:"p",href:"https://jito-labs.medium.com/solana-validator-101-transaction-processing-90bcdc271143"},"Jito Labs\u51fa\u8272\u7684\u6587\u7ae0"),"."),(0,o.kt)("h2",{id:"\u4ea4\u6613\u5982\u4f55\u88ab\u4e22\u5f03"},"\u4ea4\u6613\u5982\u4f55\u88ab\u4e22\u5f03"),(0,o.kt)("p",null,"\u5728\u4ea4\u6613\u7684\u6574\u4e2a\u8fc7\u7a0b\u4e2d\uff0c\u6709\u51e0\u79cd\u60c5\u51b5\u4e0b\u4ea4\u6613\u53ef\u80fd\u610f\u5916\u4ece\u7f51\u7edc\u4e2d\u4e22\u5931\u3002"),(0,o.kt)("h3",{id:"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u4e4b\u524d"},"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u4e4b\u524d"),(0,o.kt)("p",null,"\u5982\u679c\u7f51\u7edc\u4e22\u5f03\u4e00\u4e2a\u4ea4\u6613\uff0c\u901a\u5e38\u662f\u5728\u4ea4\u6613\u88ab\u9886\u5bfc\u5904\u7406\u4e4b\u524d\u53d1\u751f\u3002UDP ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Packet_loss"},"\u6570\u636e\u5305\u4e22\u5931")," \u662f\u53ef\u80fd\u53d1\u751f\u8fd9\u79cd\u60c5\u51b5\u7684\u6700\u7b80\u5355\u539f\u56e0\u3002\u5728\u7f51\u7edc\u8d1f\u8f7d\u9ad8\u5cf0\u671f\uff0c\u9a8c\u8bc1\u8282\u70b9\u53ef\u80fd\u4f1a\u88ab\u5927\u91cf\u9700\u8981\u5904\u7406\u7684\u4ea4\u6613\u538b\u5012\u3002\u867d\u7136\u9a8c\u8bc1\u8282\u70b9\u53ef\u4ee5\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"p"},"tpu_forwards"),",\u7aef\u53e3\u8f6c\u53d1\u591a\u4f59\u7684\u4ea4\u6613\uff0c\u4f46",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/blob/master/core/src/banking_stage.rs#L389"},"\u8f6c\u53d1"),". \u7684\u6570\u636e\u91cf\u662f\u6709\u9650\u7684\u3002\u6b64\u5916\uff0c\u6bcf\u4e2a\u8f6c\u53d1\u4ec5\u9650\u4e8e\u9a8c\u8bc1\u8282\u70b9\u4e4b\u95f4\u7684\u5355\u4e00\u8df3\u8dc3\u3002\u4e5f\u5c31\u662f\u8bf4\uff0c\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"tpu_forwards"),"\u7aef\u53e3\u63a5\u6536\u7684\u4ea4\u6613\u4e0d\u4f1a\u88ab\u8f6c\u53d1\u7ed9\u5176\u4ed6\u9a8c\u8bc1\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u8fd8\u6709\u4e24\u4e2a\u8f83\u5c11\u4e3a\u4eba\u77e5\u7684\u539f\u56e0\uff0c\u53ef\u80fd\u5bfc\u81f4\u4ea4\u6613\u5728\u88ab\u5904\u7406\u4e4b\u524d\u88ab\u4e22\u5f03\u3002\u7b2c\u4e00\u79cd\u60c5\u51b5\u6d89\u53ca\u901a\u8fc7RPC\u6c60\u63d0\u4ea4\u7684\u4ea4\u6613\u3002\u5076\u5c14\uff0cRPC\u6c60\u7684\u4e00\u90e8\u5206\u53ef\u80fd\u4f1a\u9886\u5148\u4e8e\u5176\u4ed6\u90e8\u5206\u3002\u5f53\u6c60\u4e2d\u7684\u8282\u70b9\u9700\u8981\u5171\u540c\u5de5\u4f5c\u65f6\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u95ee\u9898\u3002\u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\uff0c\u4ea4\u6613\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/programming-model/transactions#recent-blockhash"},"recentBlockhash")," \u4ece\u6c60\u4e2d\u7684\u5148\u8fdb\u90e8\u5206\uff08\u540e\u7aefA\uff09\u67e5\u8be2\u3002\u5f53\u4ea4\u6613\u63d0\u4ea4\u5230\u6ede\u540e\u7684\u6c60\u4e2d\uff08\u540e\u7aefB\uff09\u65f6\uff0c\u8282\u70b9\u5c06\u65e0\u6cd5\u8bc6\u522b\u5148\u8fdb\u7684\u5757\u54c8\u5e0c\u5e76\u4e22\u5f03\u4ea4\u6613\u3002\u5982\u679c\u5f00\u53d1\u4eba\u5458\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u4e2d\u542f\u7528\u4e86",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#sendtransaction"},"preflight checks"),"\uff0c \u53ef\u4ee5\u5728\u63d0\u4ea4\u4ea4\u6613\u65f6\u68c0\u6d4b\u5230\u6b64\u95ee\u9898\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dropped via RPC Pool",src:a(42346).Z,width:"4416",height:"2344"})),(0,o.kt)("p",null,"\u7f51\u7edc\u5206\u53c9\u4e5f\u53ef\u80fd\u6682\u65f6\u7684\u5bfc\u81f4\u4ea4\u6613\u4e22\u5931\u3002\u5982\u679c\u9a8c\u8bc1\u5728\u94f6\u884c\u9636\u6bb5\u91cd\u65b0\u64ad\u653e\u5176\u5757\u7684\u901f\u5ea6\u8f83\u6162\uff0c\u53ef\u80fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u5c11\u6570\u6d3e\u5206\u53c9\u3002\u5f53\u5ba2\u6237\u7aef\u6784\u5efa\u4e00\u4e2a\u4ea4\u6613\u65f6\uff0c\u4ea4\u6613\u53ef\u80fd\u5f15\u7528\u4ec5\u5b58\u5728\u4e8e\u5c11\u6570\u6d3e\u5206\u53c9\u4e0a\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"recentBlockhash"),"\u3002\u5728\u63d0\u4ea4\u4ea4\u6613\u540e\uff0c\u96c6\u7fa4\u53ef\u80fd\u5728\u4ea4\u6613\u88ab\u5904\u7406\u4e4b\u524d\u5207\u6362\u5230\u5176\u4ed6\u5206\u53c9\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7531\u4e8e\u627e\u4e0d\u5230\u5757\u54c8\u5e0c\uff0c\u4ea4\u6613\u88ab\u4e22\u5f03\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dropped due to Minority Fork (Before Processed)",src:a(41482).Z,width:"4154",height:"2272"})),(0,o.kt)("h3",{id:"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u540e\u4f46\u5c1a\u672a\u6700\u7ec8\u786e\u8ba4\u4e4b\u524d"},"\u5728\u4ea4\u6613\u88ab\u5904\u7406\u540e\uff0c\u4f46\u5c1a\u672a\u6700\u7ec8\u786e\u8ba4\u4e4b\u524d"),(0,o.kt)("p",null,"\u5982\u679c\u4e00\u4e2a\u4ea4\u6613\u5f15\u7528\u4e86\u6765\u81ea\u5c11\u6570\u6d3e\u5206\u53c9\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"recentBlockhash"),"\uff0c\u8be5\u4ea4\u6613\u6709\u53ef\u80fd\u8fd8\u4f1a\u8fdb\u884c\u5904\u7406\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4ea4\u6613\u5c06\u7531\u5c11\u6570\u6d3e\u5206\u53c9\u4e0a\u7684\u9886\u5bfc\u8282\u70b9\u8fdb\u884c\u5904\u7406\u3002\u5f53\u8fd9\u4e2a\u9886\u5bfc\u8bd5\u56fe\u4e0e\u4e0d\u8ba4\u53ef\u5c11\u6570\u6d3e\u5206\u53c9\u7684\u5927\u591a\u6570\u9a8c\u8bc1\u8282\u70b9\u8fbe\u6210\u5171\u8bc6\u65f6\uff0c\u5b83\u5c06\u65e0\u6cd5\u4e0e\u5b83\u4eec\u5206\u4eab\u5df2\u5904\u7406\u7684\u4ea4\u6613\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u4ea4\u6613\u5728\u6700\u7ec8\u786e\u5b9a\u4e4b\u524d\u5c06\u88ab\u4e22\u5f03\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Dropped due to Minority Fork (After Processed)",src:a(61132).Z,width:"4580",height:"2432"})),(0,o.kt)("h2",{id:"\u5904\u7406\u88ab\u4e22\u5f03\u7684\u4ea4\u6613"},"\u5904\u7406\u88ab\u4e22\u5f03\u7684\u4ea4\u6613"),(0,o.kt)("p",null,"\u867d\u7136RPC\u8282\u70b9\u4f1a\u5c1d\u8bd5\u91cd\u65b0\u5e7f\u64ad\u4ea4\u6613\uff0c\u4f46\u5b83\u4eec\u4f7f\u7528\u7684\u7b97\u6cd5\u662f\u901a\u7528\u7684\uff0c\u5f80\u5f80\u4e0d\u9002\u5408\u7279\u5b9a\u5e94\u7528\u7684\u9700\u6c42\u3002\u4e3a\u4e86\u5e94\u5bf9\u7f51\u7edc\u62e5\u5835\u7684\u65f6\u5019\uff0c\u5e94\u7528\u7a0b\u5e8f\u5f00\u53d1\u4eba\u5458\u5e94\u8be5\u81ea\u5b9a\u4e49\u81ea\u5df1\u7684\u91cd\u65b0\u5e7f\u64ad\u903b\u8f91\u3002"),(0,o.kt)("h3",{id:"\u6df1\u5165\u4e86\u89e3sendtransaction"},"\u6df1\u5165\u4e86\u89e3sendTransaction"),(0,o.kt)("p",null,"\u5728\u63d0\u4ea4\u4ea4\u6613\u65b9\u9762\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction")," RPC\u65b9\u6cd5\u662f\u5f00\u53d1\u8005\u53ef\u7528\u7684\u4e3b\u8981\u5de5\u5177\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u4ec5\u8d1f\u8d23\u5c06\u4ea4\u6613\u4ece\u5ba2\u6237\u7aef\u4f20\u9012\u5230RPC\u8282\u70b9\u3002\u5982\u679c\u8282\u70b9\u63a5\u6536\u5230\u4ea4\u6613\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u5c06\u8fd4\u56de\u7528\u4e8e\u8ddf\u8e2a\u4ea4\u6613\u7684\u4ea4\u6613ID\u3002\u6210\u529f\u7684\u54cd\u5e94\u5e76\u4e0d\u8868\u793a\u8be5\u4ea4\u6613\u5c06\u7531\u96c6\u7fa4\u5904\u7406\u6216\u6700\u7ec8\u786e\u5b9a\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Tips")),(0,o.kt)("h2",{parentName:"admonition",id:"\u8bf7\u6c42\u53c2\u6570"},"\u8bf7\u6c42\u53c2\u6570"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transaction"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," -  \u5b8c\u5168\u7b7e\u540d\u7684\u4ea4\u6613\uff0c\u4ee5\u7f16\u7801\u5b57\u7b26\u4e32\u5f62\u5f0f\u8868\u793a"),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"configuration object"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"object")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skipPreflight"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"boolean")," - \u5982\u679c\u4e3a true\uff0c\u5219\u8df3\u8fc7\u9884\u68c0\u4e8b\u52a1\u68c0\u67e5\uff08\u9ed8\u8ba4\u4e3a false\uff09"),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"preflightCommitment"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - \u7528\u4e8e\u9488\u5bf9\u94f6\u884c\u63d2\u69fd\u8fdb\u884c\u9884\u68c0\u6a21\u62df\u7684",(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/clients/jsonrpc-api#configuring-state-commitment"},"\u627f\u8bfa"),' \u7ea7\u522b\uff08\u9ed8\u8ba4\u4e3a"finalized"\uff09'),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"encoding"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string"),' - \u7528\u4e8e\u4ea4\u6613\u6570\u636e\u7684\u7f16\u7801\u65b9\u5f0f\u3002\u53ef\u4ee5\u9009\u62e9 "base58"\uff08\u8f83\u6162\uff09\u6216 "base64"\uff08\u9ed8\u8ba4\u4e3a "base58")'),(0,o.kt)("li",{parentName:"ul"},"(\u53ef\u9009) ",(0,o.kt)("inlineCode",{parentName:"li"},"maxRetries"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"usize")," -  RPC\u8282\u70b9\u91cd\u8bd5\u5c06\u4ea4\u6613\u53d1\u9001\u7ed9\u9886\u5bfc\u8005\u7684\u6700\u5927\u6b21\u6570\u3002\u5982\u679c\u672a\u63d0\u4f9b\u6b64\u53c2\u6570\uff0cRPC\u8282\u70b9\u5c06\u91cd\u8bd5\u4ea4\u6613\uff0c\u76f4\u5230\u4ea4\u6613\u6700\u7ec8\u786e\u5b9a\u6216\u5757\u54c8\u5e0c\u8fc7\u671f\u4e3a\u6b62")),(0,o.kt)("h2",{parentName:"admonition",id:"\u54cd\u5e94"},"\u54cd\u5e94"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"transaction id"),": ",(0,o.kt)("inlineCode",{parentName:"li"},"string")," - \u7b2c\u4e00\u4e2a\u5d4c\u5165\u5728\u4ea4\u6613\u4e2d\u7684\u4ea4\u6613\u7b7e\u540d\uff0c\u4ee5base-58\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u5f62\u5f0f\u8868\u793a\u3002\u53ef\u4ee5\u4f7f\u7528\u8be5\u4ea4\u6613ID\u4e0e ",(0,o.kt)("a",{parentName:"li",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getsignaturestatuses"},"getSignatureStatuses")," \u4e00\u8d77\u4f7f\u7528\uff0c\u4ee5\u8f6e\u8be2\u83b7\u53d6\u72b6\u6001\u66f4\u65b0\u3002"))),(0,o.kt)("h2",{id:"\u81ea\u5b9a\u4e49\u91cd\u64ad\u903b\u8f91"},"\u81ea\u5b9a\u4e49\u91cd\u64ad\u903b\u8f91"),(0,o.kt)("p",null,"\u4e3a\u4e86\u5f00\u53d1\u81ea\u5df1\u7684\u91cd\u65b0\u5e7f\u64ad\u903b\u8f91\uff0c\u5f00\u53d1\u8005\u5e94\u8be5\u5229\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"maxRetries"),"\u53c2\u6570\u3002\u5982\u679c\u63d0\u4f9b\u4e86",(0,o.kt)("inlineCode",{parentName:"p"},"maxRetries"),"\uff0c\u5b83\u5c06\u8986\u76d6RPC\u8282\u70b9\u7684\u9ed8\u8ba4\u91cd\u8bd5\u903b\u8f91\uff0c\u5141\u8bb8\u5f00\u53d1\u4eba\u5458\u5728",(0,o.kt)("a",{parentName:"p",href:"https://github.com/solana-labs/solana/blob/98707baec2385a4f7114d2167ef6dfb1406f954f/validator/src/main.rs#L1258-L1274"},"\u5408\u7406\u8303\u56f4\u5185")," \u624b\u52a8\u63a7\u5236\u91cd\u8bd5\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,"\u624b\u52a8\u91cd\u8bd5\u4ea4\u6613\u7684\u5e38\u89c1\u6a21\u5f0f\u6d89\u53ca\u4e34\u65f6\u5b58\u50a8\u6765\u81ea",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getlatestblockhash"},"getLatestBlockhash")," \u7684",(0,o.kt)("inlineCode",{parentName:"p"},"lastValidBlockHeight"),"\u3002\u4e00\u65e6\u5b58\u50a8\u4e86\u8be5\u503c\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getblockheight"},"\u8f6e\u8be2\u96c6\u7fa4\u7684blockheight"),"\uff0c \u5e76\u5728\u9002\u5f53\u7684\u65f6\u95f4\u95f4\u9694\u5185\u624b\u52a8\u91cd\u8bd5\u4ea4\u6613\u3002\u5728\u7f51\u7edc\u62e5\u5835\u7684\u65f6\u671f\uff0c\u5c06",(0,o.kt)("inlineCode",{parentName:"p"},"maxRetries"),"\u8bbe\u7f6e\u4e3a0\u5e76\u901a\u8fc7\u81ea\u5b9a\u4e49\u7b97\u6cd5\u624b\u52a8\u91cd\u65b0\u5e7f\u64ad\u662f\u6709\u4f18\u52bf\u7684\u3002\u4e00\u4e9b\u5e94\u7528\u7a0b\u5e8f\u53ef\u80fd\u91c7\u7528",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Exponential_backoff"},"\u6307\u6570\u9000\u907f"),"\uff0c \u800c\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\uff08\u5982",(0,o.kt)("a",{parentName:"p",href:"https://www.mango.markets/"},"Mango")," \uff09\u9009\u62e9\u5728\u6052\u5b9a\u95f4\u9694\u5185",(0,o.kt)("a",{parentName:"p",href:"https://github.com/blockworks-foundation/mango-ui/blob/b6abfc6c13b71fc17ebbe766f50b8215fa1ec54f/src/utils/send.tsx#L713"},"\u6301\u7eed\u91cd\u65b0\u63d0\u4ea4")," \u4ea4\u6613\uff0c\u76f4\u5230\u53d1\u751f\u8d85\u65f6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"while (blockheight < lastValidBlockHeight) {\n  connection.sendRawTransaction(rawTransaction, {\n    skipPreflight: true,\n  });\n  await sleep(500);\n  blockheight = await connection.getBlockHeight();\n}\n")),(0,o.kt)("p",null,"\u5f53\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"getLatestBlockhash"),"\u8fdb\u884c\u8f6e\u8be2\u65f6\uff0c\u5e94\u7528\u7a0b\u5e8f\u5e94\u8be5\u6307\u5b9a\u5176\u9884\u671f\u7684",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#configuring-state-commitment"},"\u627f\u8bfa")," \u7ea7\u522b\u3002\u901a\u8fc7\u5c06\u627f\u8bfa\u7ea7\u522b\u8bbe\u7f6e\u4e3a",(0,o.kt)("inlineCode",{parentName:"p"},"confirmed"),"\uff08\u5df2\u6295\u7968\uff09\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"finalized"),"\uff08\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"confirmed"),"\u4e4b\u540e\u7ea630\u4e2a\u5757\uff09\uff0c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u907f\u514d\u4ece\u5c11\u6570\u6d3e\u5206\u53c9\u8f6e\u8be2\u5757\u54c8\u5e0c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u5e94\u7528\u7a0b\u5e8f\u53ef\u4ee5\u8bbf\u95ee\u8d1f\u8f7d\u5747\u8861\u5668\u540e\u9762\u7684RPC\u8282\u70b9\uff0c\u8fd8\u53ef\u4ee5\u9009\u62e9\u5c06\u5176\u5de5\u4f5c\u8d1f\u8f7d\u5206\u914d\u7ed9\u7279\u5b9a\u8282\u70b9\u3002\u4e3a\u6570\u636e\u5bc6\u96c6\u578b\u8bf7\u6c42\u63d0\u4f9b\u670d\u52a1\u7684RPC\u8282\u70b9\uff08\u4f8b\u5982",(0,o.kt)("a",{parentName:"p",href:"/solana-co-learn/cookbook-zh/guides/get-program-accounts"},"getProgramAccounts"),"\uff09\u53ef\u80fd\u4f1a\u6ede\u540e\uff0c\u5e76\u4e14\u53ef\u80fd\u4e0d\u9002\u5408\u8f6c\u53d1\u4ea4\u6613\u3002\u5bf9\u4e8e\u5904\u7406\u65f6\u95f4\u654f\u611f\u4ea4\u6613\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u6700\u597d\u62e5\u6709\u4e13\u7528\u8282\u70b9\u4ec5\u5904\u7406",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u64cd\u4f5c\u3002"),(0,o.kt)("h3",{id:"\u8df3\u8fc7\u9884\u68c0\u7684\u540e\u679c"},"\u8df3\u8fc7\u9884\u68c0\u7684\u540e\u679c"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u5c06\u5728\u63d0\u4ea4\u4ea4\u6613\u4e4b\u524d\u6267\u884c\u4e09\u4e2a\u9884\u68c0\u67e5\u3002\u5177\u4f53\u800c\u8a00\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u5c06\u4f1a\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9a8c\u8bc1\u6240\u6709\u7b7e\u540d\u662f\u5426\u6709\u6548"),(0,o.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u5f15\u7528\u7684\u5757\u54c8\u5e0c\u662f\u5426\u5728\u6700\u8fd1\u7684150\u4e2a\u5757\u5185"),(0,o.kt)("li",{parentName:"ul"},"\u9488\u5bf9\u9884\u68c0\u67e5\u7684",(0,o.kt)("inlineCode",{parentName:"li"},"preFlightCommitment"),"\uff0c\u6a21\u62df\u4ea4\u6613\u4e0e\u94f6\u884c\u69fd\u4f4d\u4e4b\u95f4\u7684\u4ea4\u4e92")),(0,o.kt)("p",null,"\u5982\u679c\u5176\u4e2d\u4efb\u4f55\u4e00\u4e2a\u9884\u68c0\u67e5\u5931\u8d25\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"sendTransaction"),"\u5c06\u5728\u63d0\u4ea4\u4ea4\u6613\u4e4b\u524d\u5f15\u53d1\u9519\u8bef\u3002\u9884\u68c0\u67e5\u5e38\u5e38\u80fd\u591f\u9632\u6b62\u4ea4\u6613\u4e22\u5931\uff0c\u5e76\u4f7f\u5ba2\u6237\u7aef\u80fd\u591f\u4f18\u96c5\u5730\u5904\u7406\u9519\u8bef\u3002\u4e3a\u4e86\u786e\u4fdd\u8fd9\u4e9b\u5e38\u89c1\u9519\u8bef\u5f97\u5230\u8003\u8651\uff0c\u5efa\u8bae\u5f00\u53d1\u4eba\u5458\u5c06skipPreflight\u8bbe\u7f6e\u4e3afalse\u3002"),(0,o.kt)("h3",{id:"\u4f55\u65f6\u91cd\u65b0\u7b7e\u7f72\u4ea4\u6613"},"\u4f55\u65f6\u91cd\u65b0\u7b7e\u7f72\u4ea4\u6613"),(0,o.kt)("p",null,"\u5c3d\u7ba1\u5c3d\u529b\u8fdb\u884c\u91cd\u65b0\u5e7f\u64ad\uff0c\u4f46\u6709\u65f6\u5ba2\u6237\u7aef\u53ef\u80fd\u9700\u8981\u91cd\u65b0\u7b7e\u7f72\u4ea4\u6613\u3002\u5728\u91cd\u65b0\u7b7e\u7f72\u4efb\u4f55\u4ea4\u6613\u4e4b\u524d\uff0c\u975e\u5e38\u91cd\u8981\u7684\u662f\u786e\u4fdd\u521d\u59cb\u4ea4\u6613\u7684\u5757\u54c8\u5e0c\u5df2\u7ecf\u8fc7\u671f\u3002\u5982\u679c\u521d\u59cb\u5757\u54c8\u5e0c\u4ecd\u7136\u6709\u6548\uff0c\u90a3\u4e48\u4e24\u4e2a\u4ea4\u6613\u90fd\u6709\u53ef\u80fd\u88ab\u7f51\u7edc\u63a5\u53d7\u3002\u5bf9\u4e8e\u6700\u7ec8\u7528\u6237\u6765\u8bf4\uff0c\u8fd9\u5c06\u770b\u8d77\u6765\u597d\u50cf\u4ed6\u4eec\u65e0\u610f\u4e2d\u53d1\u9001\u4e86\u76f8\u540c\u7684\u4ea4\u6613\u4e24\u6b21\u3002"),(0,o.kt)("p",null,"\u5728Solana\u4e2d\uff0c\u4e00\u65e6\u6240\u5f15\u7528\u7684\u5757\u54c8\u5e0c\u65e9\u4e8e\u4ece",(0,o.kt)("inlineCode",{parentName:"p"},"getLatestBlockhash"),"\u63a5\u6536\u5230\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"lastValidBlockHeight"),"\uff0c\u53ef\u4ee5\u5b89\u5168\u5730\u4e22\u5f03\u5df2\u4e22\u5f03\u7684\u4ea4\u6613\u3002\u5f00\u53d1\u8005\u5e94\u8be5\u901a\u8fc7\u67e5\u8be2 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.solana.com/developing/clients/jsonrpc-api#getepochinfo"},(0,o.kt)("inlineCode",{parentName:"a"},"getEpochInfo"))," \u5e76\u5c06\u5176\u4e0e\u54cd\u5e94\u4e2d\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"blockHeight"),"\u8fdb\u884c\u6bd4\u8f83\u6765\u8ddf\u8e2al",(0,o.kt)("inlineCode",{parentName:"p"},"astValidBlockHeight"),"\u3002\u4e00\u65e6\u4e00\u4e2a\u5757\u54c8\u5e0c\u65e0\u6548\uff0c\u5ba2\u6237\u7aef\u53ef\u4ee5\u4f7f\u7528\u65b0\u67e5\u8be2\u7684\u5757\u54c8\u5e0c\u91cd\u65b0\u7b7e\u7f72\u3002"),(0,o.kt)("h2",{id:"\u81f4\u8c22"},"\u81f4\u8c22"),(0,o.kt)("p",null,"\u975e\u5e38\u611f\u8c22 Trent Nelson\u3001",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jacobvcreech"},"Jacob Creech"),", White Tiger\u3001Le Yafo\u3001",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/buffalu__"},"Buffalu"),", \u548c ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/jito_labs"},"Jito Labs")," \u7684\u5ba1\u67e5\u548c\u53cd\u9988\u3002"))}m.isMDXComponent=!0},61132:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dropped-minority-fork-post-process-6f4b90214858c19a83ba0fa0077a4d1f.png"},41482:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dropped-minority-fork-pre-process-d19cf0e4462c18c97094e7c3a197b0b6.png"},42346:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dropped-via-rpc-pool-1938a528dbb43265fd2b6b93465bfbda.png"},86252:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tpu-jito-labs-5123149c7c3367cdd79f8c8e0c7f7e4e.png"},63649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/tx-journey-01360153fe3ef323901e517136215d71.png"}}]);