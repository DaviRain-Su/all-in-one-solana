"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[4364],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),s=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=s(e.components);return a.createElement(l.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),d=r,y=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,i(i({ref:n},p),{},{components:t})):a.createElement(y,i({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},87230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var a=t(87462),r=(t(67294),t(3905));const o={title:"\u547d\u540d\u670d\u52a1",sidebar_position:24,tags:["solana-cook-book","name-service"]},i="\u547d\u540d\u670d\u52a1",c={unversionedId:"references/name-service",id:"references/name-service",title:"\u547d\u540d\u670d\u52a1",description:"\u540d\u79f0\u6ce8\u518c\u8868",source:"@site/docs/cookbook-zh/references/name-service.md",sourceDirName:"references",slug:"/references/name-service",permalink:"/solana-co-learn/cookbook-zh/references/name-service",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/references/name-service.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"name-service",permalink:"/solana-co-learn/cookbook-zh/tags/name-service"}],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:24,frontMatter:{title:"\u547d\u540d\u670d\u52a1",sidebar_position:24,tags:["solana-cook-book","name-service"]},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613",permalink:"/solana-co-learn/cookbook-zh/references/offline-transactions"},next:{title:"\u6e38\u620f",permalink:"/solana-co-learn/cookbook-zh/references/gaming/"}},l={},s=[{value:"\u540d\u79f0\u6ce8\u518c\u8868",id:"\u540d\u79f0\u6ce8\u518c\u8868",level:2},{value:"\u89e3\u6790SOL\u57df\u540d",id:"\u89e3\u6790sol\u57df\u540d",level:2},{value:"\u53cd\u5411\u67e5\u627e",id:"\u53cd\u5411\u67e5\u627e",level:2},{value:"\u5b50\u57df\u540d\u67e5\u627e",id:"\u5b50\u57df\u540d\u67e5\u627e",level:2},{value:"\u67e5\u627e\u7531\u516c\u94a5\u62e5\u6709\u7684\u6240\u6709\u57df\u540d",id:"\u67e5\u627e\u7531\u516c\u94a5\u62e5\u6709\u7684\u6240\u6709\u57df\u540d",level:2},{value:"\u89e3\u6790\u4e00\u4e2aTwitter\u7528\u6237\u540d",id:"\u89e3\u6790\u4e00\u4e2atwitter\u7528\u6237\u540d",level:2},{value:"Twitter\u7528\u6237\u540d\u7684\u53cd\u5411\u67e5\u627e",id:"twitter\u7528\u6237\u540d\u7684\u53cd\u5411\u67e5\u627e",level:2}],p={toc:s},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u547d\u540d\u670d\u52a1"},"\u547d\u540d\u670d\u52a1"),(0,r.kt)("h2",{id:"\u540d\u79f0\u6ce8\u518c\u8868"},"\u540d\u79f0\u6ce8\u518c\u8868"),(0,r.kt)("p",null,"\u540d\u79f0\u6ce8\u518c\u8868\u5b58\u50a8\u4e0e\u57df\u540d\u6709\u5173\u7684\u4fe1\u606f\u3002\u5b83\u7531\u4e24\u90e8\u5206\u7ec4\u6210\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5934\u90e8 (Header)"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e (Data)")),(0,r.kt)("p",null,"\u57df\u540d\u7684\u6570\u636e\u59cb\u7ec8\u4ee5\u5934\u90e8\u4e3a\u524d\u7f00\u3002\u4ee5\u4e0b\u662f\u5934\u90e8\u5728 JavaScript \u4e2d\u7684\u7ed3\u6784\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'export class NameRegistryState {\n  parentName: PublicKey;\n  owner: PublicKey;\n  class: PublicKey;\n  data: Buffer | undefined;\n\n  static HEADER_LEN = 96;\n\n  static schema: Schema = new Map([\n    [\n      NameRegistryState,\n      {\n        kind: "struct",\n        fields: [\n          ["parentName", [32]],\n          ["owner", [32]],\n          ["class", [32]],\n        ],\n      },\n    ],\n  ]);\n  constructor(obj: {\n    parentName: Uint8Array;\n    owner: Uint8Array;\n    class: Uint8Array;\n  }) {\n    this.parentName = new PublicKey(obj.parentName);\n    this.owner = new PublicKey(obj.owner);\n    this.class = new PublicKey(obj.class);\n  }\n}\n\n')),(0,r.kt)("h2",{id:"\u89e3\u6790sol\u57df\u540d"},"\u89e3\u6790SOL\u57df\u540d"),(0,r.kt)("p",null,".SOL \u57df\u540d\u662f\u72ec\u7279\u7684\u3001\u6613\u4e8e\u7406\u89e3\u7684\u57df\u540d\uff0c\u53ef\u4ee5\u8f6c\u6362\u4e3a\u516c\u94a5\u3002\u8bb8\u591a\u94b1\u5305\u4f7f\u7528\u5b83\u4eec\u4f5c\u4e3a\u53d1\u9001\u4ee3\u5e01\u6216 SOL \u7684\u53e6\u4e00\u79cd\u9009\u9879\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6cd5\u5c06 .SOL \u57df\u540d\u8f6c\u6362\u4e3a\u5bf9\u5e94\u7684\u516c\u94a5\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const domain = "levi.sol";\nconst hashedName = await getHashedName(domain.replace(".sol", ""));\nconst nameAccountKey = await getNameAccountKey(\n  hashedName,\n  undefined,\n  new PublicKey("58PwtjSDuFHuUkYjH9BYnnQKHfwo9reZhC2zMJv9JPkx") // SOL TLD Authority\n);\nconst owner = await NameRegistryState.retrieve(\n  new Connection(clusterApiUrl("mainnet-beta")),\n  nameAccountKey\n);\nconsole.log(owner.registry.owner.toBase58());\n// JUskoxS2PTiaBpxfGaAPgf3cUNhdeYFGMKdL6mZKKfR\n')),(0,r.kt)("h2",{id:"\u53cd\u5411\u67e5\u627e"},"\u53cd\u5411\u67e5\u627e"),(0,r.kt)("p",null,"\u8fd9\u53ef\u4ee5\u7528\u4e8e\u4ece\u516c\u94a5\u89e3\u6790\u57df\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Public key of bonfida.sol\nconst domainKey = new PublicKey("Crf8hzfthWGbGbLTVCiqRqV5MVnbpHB1L9KQMd6gsinb");\n\nconst domainName = await performReverseLookup(connection, domainKey); // bonfida\n')),(0,r.kt)("h2",{id:"\u5b50\u57df\u540d\u67e5\u627e"},"\u5b50\u57df\u540d\u67e5\u627e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u6790\u4e00\u4e2a\u5b50\u57df\u540d\uff0c\u4f60\u9700\u8981\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u57df\u540d\u7684\u5bc6\u94a5"),(0,r.kt)("li",{parentName:"ol"},"\u57df\u540d\u7684\u5bc6\u94a5"),(0,r.kt)("li",{parentName:"ol"},"\u68c0\u7d22\u8d26\u6237\u4fe1\u606f")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const parentDomain = "bonfida";\nconst subDomain = "demo";\n\n// Step 1\nconst hashedParentDomain = await getHashedName(parentDomain);\nconst parentDomainKey = await getNameAccountKey(\n  hashedParentDomain,\n  undefined,\n  SOL_TLD_AUTHORITY\n);\n\n// Step 2\nconst subDomainKey = await getDNSRecordAddress(parentDomainKey, subDomain);\n\n// Step 3\nconst registry = await NameRegistryState.retrieve(connection, subDomainKey);\n\n')),(0,r.kt)("h2",{id:"\u67e5\u627e\u7531\u516c\u94a5\u62e5\u6709\u7684\u6240\u6709\u57df\u540d"},"\u67e5\u627e\u7531\u516c\u94a5\u62e5\u6709\u7684\u6240\u6709\u57df\u540d"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f7f\u7528\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"memcmp"),"\u8fc7\u6ee4\u5668\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"getProgramAccounts"),"\u8bf7\u6c42\u6765\u68c0\u7d22\u94b1\u5305\u7684\u6240\u6709\u57df\u540d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export async function findOwnedNameAccountsForUser(\n  connection: Connection,\n  userAccount: PublicKey\n): Promise<PublicKey[]> {\n  const filters = [\n    {\n      memcmp: {\n        offset: 32,\n        bytes: userAccount.toBase58(),\n      },\n    },\n  ];\n  const accounts = await connection.getProgramAccounts(NAME_PROGRAM_ID, {\n    filters,\n  });\n  return accounts.map((a) => a.publicKey);\n}\n\n")),(0,r.kt)("h2",{id:"\u89e3\u6790\u4e00\u4e2atwitter\u7528\u6237\u540d"},"\u89e3\u6790\u4e00\u4e2aTwitter\u7528\u6237\u540d"),(0,r.kt)("p",null,"Twitter\u7528\u6237\u540d\u53ef\u4ee5\u5728 ","[Solana\u540d\u79f0\u670d\u52a1\u4e0a\u6ce8\u518c]","(",(0,r.kt)("a",{parentName:"p",href:"https://naming.bonfida.org/#/twitter-registration"},"https://naming.bonfida.org/#/twitter-registration")," \u5e76\u53ef\u4ee5\u50cf.SOL\u57df\u540d\u4e00\u6837\u4f7f\u7528\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// Pubkey of the wallet you want to retrieve the Twitter handle\nconst pubkey = new PublicKey("FidaeBkZkvDqi1GXNEwB8uWmj9Ngx2HXSS5nyGRuVFcZ");\n\nconst [handle, registryKey] = await getHandleAndRegistryKey(connection, pubkey);\n\n')),(0,r.kt)("h2",{id:"twitter\u7528\u6237\u540d\u7684\u53cd\u5411\u67e5\u627e"},"Twitter\u7528\u6237\u540d\u7684\u53cd\u5411\u67e5\u627e"),(0,r.kt)("p",null,"\u4e3a\u4e86\u627e\u5230\u4e0eTwitter\u7528\u6237\u540d\u76f8\u5173\u8054\u7684SOL\u5730\u5740\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c\u53cd\u5411\u67e5\u627e\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const handle = "bonfida";\n\nconst registry = await getTwitterRegistry(connection, handle);\n')))}m.isMDXComponent=!0}}]);