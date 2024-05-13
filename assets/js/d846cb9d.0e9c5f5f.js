"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[3096],{3905:(e,n,a)=>{a.d(n,{Zo:()=>c,kt:()=>f});var t=a(67294);function i(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){i(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,t,i=function(e,n){if(null==e)return{};var a,t,i={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(i[a]=e[a]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=t.createContext({}),o=function(e){var n=t.useContext(p),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},c=function(e){var n=o(e.components);return t.createElement(p.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},u=t.forwardRef((function(e,n){var a=e.components,i=e.mdxType,l=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=o(a),u=i,f=d["".concat(p,".").concat(u)]||d[u]||m[u]||l;return a?t.createElement(f,r(r({ref:n},c),{},{components:a})):t.createElement(f,r({ref:n},c))}));function f(e,n){var a=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var l=a.length,r=new Array(l);r[0]=u;var s={};for(var p in n)hasOwnProperty.call(n,p)&&(s[p]=n[p]);s.originalType=e,s[d]="string"==typeof e?e:i,r[1]=s;for(var o=2;o<l;o++)r[o]=a[o];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}u.displayName="MDXCreateElement"},92519:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>o});var t=a(87462),i=(a(67294),a(3905));const l={sidebar_position:39,sidebar_label:"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs",sidebar_class_name:"green",tags:["displayings-nfts","solana","nft","metaplex","candy"]},r="\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs",s={unversionedId:"module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/README",id:"module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/README",title:"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs",description:"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2aNFT\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684NFT\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u5229\u7528Candy Machine\u6765\u5b9e\u73b0\u2014\u2014\u8fd9\u662fSolana\u7684\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u4f7f\u521b\u4f5c\u8005\u80fd\u591f\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u867d\u7136\u8fd9\u5e76\u975e\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4f46\u5728Solana\u4e0a\u5b83\u5374\u6210\u4e86\u6807\u51c6\uff0c\u56e0\u4e3a\u5b83\u5177\u5907\u4e86\u8bb8\u591a\u6709\u7528\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u3002\u4f60\u662f\u5426\u611f\u53d7\u5230\u8fc7\u770b\u5230\u95ea\u4eae\u7684\u65b0iPhone\u65f6\u7684\u90a3\u80a1\u5174\u594b\u611f\uff1f\u7a00\u6709\u7684NFT\u6709\u70b9\u513f\u7c7b\u4f3c\u4e8e\u6b64\u3002\u5bf9\u4e8e\u4f18\u79c0\u7684\u827a\u672f\u5bb6\u800c\u8a00\uff0c\u4ec5\u4ec5\u662f\u89c2\u770b\u8fd9\u4e9bNFT\u4e5f\u6781\u5bcc\u4e50\u8da3\u3002\u6bd5\u7adf\uff0c\u827a\u672f\u7684\u672c\u8d28\u5c31\u662f\u7528\u6765\u6b23\u8d4f\u7684\uff01\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u5982\u679c\u6211\u4eec\u53ea\u6709Candy Machine\u7684\u5730\u5740\uff0c\u5e94\u8be5\u5982\u4f55\u5c55\u793aNFTs\u3002",source:"@site/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/README.md",sourceDirName:"module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine",slug:"/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/",permalink:"/solana-co-learn/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-candy-machine/README.md",tags:[{label:"displayings-nfts",permalink:"/solana-co-learn/Solana-Co-Learn/tags/displayings-nfts"},{label:"solana",permalink:"/solana-co-learn/Solana-Co-Learn/tags/solana"},{label:"nft",permalink:"/solana-co-learn/Solana-Co-Learn/tags/nft"},{label:"metaplex",permalink:"/solana-co-learn/Solana-Co-Learn/tags/metaplex"},{label:"candy",permalink:"/solana-co-learn/Solana-Co-Learn/tags/candy"}],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:39,frontMatter:{sidebar_position:39,sidebar_label:"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs",sidebar_class_name:"green",tags:["displayings-nfts","solana","nft","metaplex","candy"]},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udcf1 \u5728\u94b1\u5305\u4e2d\u5c55\u793aNFTs",permalink:"/solana-co-learn/Solana-Co-Learn/module2/displayings-nfts-in-a-ui/displaying-nfts-from-a-wallet/"},next:{title:"\u521b\u9020\u795e\u5947\u7684\u4e92\u8054\u7f51\u8d27\u5e01\u5e76\u51fa\u552eJPEG\u56fe\u7247",permalink:"/solana-co-learn/Solana-Co-Learn/module2/make-magic-internet-money-and-sell-jepgs/"}},p={},o=[{value:"\ud83e\udd41 \u8bf7\u51c6\u5907\u4e00\u4e2a\u7cd6\u679c\u673a",id:"-\u8bf7\u51c6\u5907\u4e00\u4e2a\u7cd6\u679c\u673a",level:2}],c={toc:o},d="wrapper";function m(e){let{components:n,...l}=e;return(0,i.kt)(d,(0,t.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-\u4ece\u7cd6\u679c\u673a\u5c55\u793anfts"},"\ud83d\uddbc \u4ece\u7cd6\u679c\u673a\u5c55\u793aNFTs"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5df2\u7ecf\u94f8\u9020\u4e86\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5c06\u5b66\u4e60\u5982\u4f55\u94f8\u9020\u4e00\u7cfb\u5217\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u4e3a\u6b64\uff0c\u6211\u4eec\u5c06\u5229\u7528Candy Machine\u6765\u5b9e\u73b0\u2014\u2014\u8fd9\u662f",(0,i.kt)("inlineCode",{parentName:"p"},"Solana"),"\u7684\u4e00\u4e2a\u7a0b\u5e8f\uff0c\u4f7f\u521b\u4f5c\u8005\u80fd\u591f\u5c06\u4ed6\u4eec\u7684\u8d44\u4ea7\u4e0a\u94fe\u3002\u867d\u7136\u8fd9\u5e76\u975e\u521b\u5efa\u7cfb\u5217\u7684\u552f\u4e00\u65b9\u5f0f\uff0c\u4f46\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"Solana"),"\u4e0a\u5b83\u5374\u6210\u4e86\u6807\u51c6\uff0c\u56e0\u4e3a\u5b83\u5177\u5907\u4e86\u8bb8\u591a\u6709\u7528\u7684\u529f\u80fd\uff0c\u4f8b\u5982\u673a\u5668\u4eba\u4fdd\u62a4\u548c\u5b89\u5168\u968f\u673a\u5316\u3002\u4f60\u662f\u5426\u611f\u53d7\u5230\u8fc7\u770b\u5230\u95ea\u4eae\u7684\u65b0iPhone\u65f6\u7684\u90a3\u80a1\u5174\u594b\u611f\uff1f\u7a00\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u6709\u70b9\u513f\u7c7b\u4f3c\u4e8e\u6b64\u3002\u5bf9\u4e8e\u4f18\u79c0\u7684\u827a\u672f\u5bb6\u800c\u8a00\uff0c\u4ec5\u4ec5\u662f\u89c2\u770b\u8fd9\u4e9b",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u4e5f\u6781\u5bcc\u4e50\u8da3\u3002\u6bd5\u7adf\uff0c\u827a\u672f\u7684\u672c\u8d28\u5c31\u662f\u7528\u6765\u6b23\u8d4f\u7684\uff01\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u63a2\u8ba8\u5982\u679c\u6211\u4eec\u53ea\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"Candy Machine"),"\u7684\u5730\u5740\uff0c\u5e94\u8be5\u5982\u4f55\u5c55\u793a",(0,i.kt)("inlineCode",{parentName:"p"},"NFTs"),"\u3002"),(0,i.kt)("p",null,"\u4f60\u80fd\u731c\u5230\u8fd9\u91cc\u6709\u4f55\u4e0d\u540c\u4e4b\u5904\u5417\uff1f\u6ca1\u9519\uff0c\u6211\u4eec\u4ec5\u5728",(0,i.kt)("inlineCode",{parentName:"p"},"SDK"),"\u4e0a\u91c7\u7528\u4e86\u4e00\u79cd\u4e0d\u540c\u7684\u65b9\u6cd5\uff01"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(99455).Z,width:"758",height:"844"})),(0,i.kt)("p",null,"\u7531\u4e8e\u8fd9\u91cc\u5e76\u6ca1\u6709\u94b1\u5305\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"walletAdapterIdentity"),"\uff0c\u53ea\u9700\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex"),"\u5bf9\u8c61\u5373\u53ef\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(45400).Z,width:"634",height:"253"})),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u6b64\u6709\u51e0\u4e2a\u9009\u62e9 - ",(0,i.kt)("inlineCode",{parentName:"p"},"findByAddress")," \u5c31\u662f\u6211\u4eec\u6240\u9700\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(22440).Z,width:"1441",height:"844"})),(0,i.kt)("p",null,"\u4e0e\u6211\u4eec\u4e3a\u5355\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u6240\u83b7\u53d6\u7684\u76f8\u4f3c\uff0c\u6211\u4eec\u5c06\u4f1a\u5f97\u5230\u6574\u4e2a\u7cd6\u679c\u673a\u5b9e\u4f8b\u7684\u5143\u6570\u636e\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"items")," \u5b57\u6bb5\u662f\u7cd6\u679c\u673a\u5185\u6240\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u7684\u6570\u7ec4\u3002\u6bcf\u4e2a\u9879\u76ee\u90fd\u4e0d\u4f1a\u76f4\u63a5\u5305\u542b\u6211\u4eec\u60f3\u8981\u7684\u5185\u5bb9\uff0c\u800c\u662f\u4f1a\u5f15\u5411\u4e00\u4e2a\u6211\u4eec\u53ef\u4ee5\u4ece\u4e2d\u63d0\u53d6\u8d44\u4ea7\u7684URI\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(2072).Z,width:"1177",height:"614"})),(0,i.kt)("p",null,"\u9274\u4e8e\u6536\u85cf\u54c1\u53ef\u80fd\u4f1a\u76f8\u5f53\u5e9e\u5927\uff0c\u6211\u4eec\u4e0d\u4f1a\u4e00\u6b21\u6027\u83b7\u53d6\u6240\u6709\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u76f8\u53cd\uff0c\u6211\u4eec\u5c06\u57fa\u4e8e\u5206\u9875\u7cfb\u7edf\uff0c\u53ea\u83b7\u53d6\u6211\u4eec\u60f3\u8981\u5c55\u793a\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002"),(0,i.kt)("p",null,"\u90a3\u4e48\uff0c\u8ba9\u6211\u4eec\u4e00\u8d77\u6765\u7ed8\u5236\u4e00\u4e9b\u50cf\u7d20\u5427\uff01"),(0,i.kt)("h2",{id:"-\u8bf7\u51c6\u5907\u4e00\u4e2a\u7cd6\u679c\u673a"},"\ud83e\udd41 \u8bf7\u51c6\u5907\u4e00\u4e2a\u7cd6\u679c\u673a"),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u4ece\u4e0a\u4e00\u8282\u7684\u8fdb\u5ea6\u7ee7\u7eed\uff0c\u6216\u8005\u4f7f\u7528\u6211\u4eec\u4e0a\u6b21\u4f7f\u7528\u7684\u76f8\u540c\u6a21\u677f\uff08\u4ece\u8d77\u59cb\u5206\u652f\u5f00\u59cb\u5373\u53ef\uff09\u3002"),(0,i.kt)("p",null,"\u8d76\u7d27\u8df3\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"FetchCandyMachine.tsx")," \u6587\u4ef6\u5427\u3002\u4f60\u4f1a\u53d1\u73b0\u4e00\u4e9b\u8bbe\u7f6e\u5df2\u7ecf\u4e3a\u4f60\u51c6\u5907\u597d\u4e86\u3002\u6211\u4eec\u5c06\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"getPage")," \u51fd\u6570\u4ece\u7cd6\u679c\u673a\u4e0a\u83b7\u53d6\u67d0\u201c\u9875\u9762\u201d\u4e0a\u7684\u7269\u54c1\u3002\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u4eec\u9700\u8981\u83b7\u53d6\u7cd6\u679c\u673a\u7684\u5143\u6570\u636e\u8d26\u6237\u3002"),(0,i.kt)("p",null,"\u5728\u7a7a\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCandyMachine")," \u51fd\u6570\u4e0a\u65b9\u8bbe\u7f6e ",(0,i.kt)("inlineCode",{parentName:"p"},"metaplex")," \u5bf9\u8c61\u7684\u8fde\u63a5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export const FetchCandyMachine: FC = () => {\n  // \u5360\u4f4d\u7b26 CMv2 \u5730\u5740\n  const [candyMachineAddress, setCandyMachineAddress] = useState("")\n  const [candyMachineData, setCandyMachineData] = useState(null)\n  const [pageItems, setPageItems] = useState(null)\n  const [page, setPage] = useState(1)\n\n  const { connection } = useConnection()\n  const metaplex = Metaplex.make(connection)\n')),(0,i.kt)("p",null,"\u5728\u521b\u5efa\u6709\u72b6\u6001\u53d8\u91cf\u65f6\uff0c\u8bf7\u786e\u4fdd\u6dfb\u52a0\u4f60\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"Candy Machine"),"\u5730\u5740\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export const FetchCandyMachine: FC = () => {\n  const [candyMachineAddress, setCandyMachineAddress] = useState("CM_ADDRESS_HERE")\n  ...\n')),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u5b8c\u5584 ",(0,i.kt)("inlineCode",{parentName:"p"},"fetchCandyMachine")," \u51fd\u6570\u3002\u6211\u4eec\u5c06\u4f7f\u7528\u4e4b\u524d\u770b\u5230\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"findByAddress")," \u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'export const FetchCandyMachine: FC = () => {\n  ...\n\n  // \u901a\u8fc7\u5730\u5740\u83b7\u53d6\u7cd6\u679c\u673a\n  const fetchCandyMachine = async () => {\n\n    // \u8bbe\u7f6e\u9875\u9762\u4e3a1 - \u6211\u4eec\u60f3\u8981\u5728\u83b7\u53d6\u65b0\u7cd6\u679c\u673a\u65f6\u59cb\u7ec8\u4f4d\u4e8e\u7b2c\u4e00\u9875\n    setPage(1)\n\n    // \u83b7\u53d6\u7cd6\u679c\u673a\u6570\u636e\n    try {\n      const candyMachine = await metaplex\n        .candyMachinesV2()\n        .findByAddress({ address: new PublicKey(candyMachineAddress) })\n\n      setCandyMachineData(candyMachine)\n    } catch (e) {\n      alert("\u8bf7\u8f93\u5165\u6709\u6548\u7684CMv2\u5730\u5740\u3002")\n    }\n  }\n  ...\n}\n')),(0,i.kt)("p",null,"\u6ce8\u610f\uff1a",(0,i.kt)("inlineCode",{parentName:"p"},"Metaplex CLI"),"\u7684\u6700\u65b0\u7248\u672c\u5728\u51fd\u6570\u8c03\u7528\u7684\u672b\u5c3e\u4e0d\u9700\u8981 ",(0,i.kt)("inlineCode",{parentName:"p"},"run()"),"\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u6765\u5230\u91cd\u8981\u7684\u90e8\u5206 - \u6d4f\u89c8\u6211\u4eec\u5c06\u83b7\u53d6\u7684CM\u6570\u636e\u3002\u4ee5\u4e0b\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"getPage")," \u51fd\u6570\u7684\u6837\u5b50\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export const FetchCandyMachine: FC = () => {\n  ...\n\n  // \u5206\u9875\n  const getPage = async (page, perPage) => {\n    const pageItems = candyMachineData.items.slice(\n      (page - 1) * perPage,\n      page * perPage\n    )\n\n    // \u83b7\u53d6\u9875\u9762\u4e2dNFT\u7684\u5143\u6570\u636e\n    let nftData = []\n    for (let i = 0; i < pageItems.length; i++) {\n      let fetchResult = await fetch(pageItems[i].uri)\n      let json = await fetchResult.json()\n      nftData.push(json)\n    }\n\n    // \u8bbe\u7f6e\u72b6\u6001\n    setPageItems(nftData)\n  }\n  ...\n}\n\n")),(0,i.kt)("p",null,"\u6211\u4eec\u5728\u8fd9\u91cc\u505a\u7684\u662f\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," \u6570\u7ec4\u5207\u5272\u6210\u5927\u5c0f\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"\u7684\u90e8\u5206\u3002\u7136\u540e\u6211\u4eec\u83b7\u53d6\u9875\u9762\u4e0a\u6bcf\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u7684\u5143\u6570\u636e\uff0c\u5e76\u5c06\u5176\u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"nftData")," \u4e2d\u3002\u6700\u540e\uff0c\u6211\u4eec\u5c06 ",(0,i.kt)("inlineCode",{parentName:"p"},"pageItems")," \u72b6\u6001\u53d8\u91cf\u8bbe\u7f6e\u4e3a\u521a\u521a\u83b7\u53d6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"nftData"),"\u3002"),(0,i.kt)("p",null,"\u8fd9\u610f\u5473\u7740\u6211\u4eec\u7684\u5e94\u7528\u7a0b\u5e8f\u5728\u4efb\u4f55\u65f6\u5019\u53ea\u4f1a\u6e32\u67d3\u5f53\u524d\u9875\u9762\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u3002\u76f8\u5f53\u68d2\uff01"),(0,i.kt)("p",null,"\u8ba9\u6211\u4eec\u586b\u5199 ",(0,i.kt)("inlineCode",{parentName:"p"},"prev")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"next")," \u51fd\u6570\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"// \u4e0a\u4e00\u9875\nconst prev = async () => {\n  if (page - 1 < 1) {\n    setPage(1)\n  } else {\n    setPage(page - 1)\n  }\n}\n\n// \u4e0b\u4e00\u9875\nconst next = async () => {\n  setPage(page + 1)\n}\n")),(0,i.kt)("p",null,"\u5f53\u7528\u6237\u70b9\u51fb\u201c\u4e0a\u4e00\u9875\u201d\u548c\u201c\u4e0b\u4e00\u9875\u201d\u6309\u94ae\u65f6\uff0c\u8fd9\u4e9b\u529f\u80fd\u5c06\u8fd0\u884c\u3002\u8fd9\u4e9b\u6309\u94ae\u53ea\u4f1a\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"pageItems")," \u4e0d\u4e3a\u7a7a\u65f6\u663e\u793a\uff08\u5373\u5f53\u6211\u4eec\u83b7\u53d6\u4e86CM\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u65f6\uff09\u3002"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u9700\u8981\u4e00\u4e9b ",(0,i.kt)("inlineCode",{parentName:"p"},"useEffects")," \u6765\u5f00\u59cb\u3002\u6574\u4e2a\u8fc7\u7a0b\u4e00\u5f00\u59cb\u53ef\u80fd\u6709\u70b9\u590d\u6742\uff0c\u6240\u4ee5\u8ba9\u6211\u4eec\u4e00\u6b65\u4e00\u6b65\u89e3\u91ca\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"\u5728\u9875\u9762\u52a0\u8f7d\u65f6\u8fd0\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchCandyMachine")," \u51fd\u6570\uff08\u5982\u679c ",(0,i.kt)("inlineCode",{parentName:"li"},"candyMachineAddress")," \u4e0d\u4e3a\u7a7a\uff09\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:2},(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u5f53\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"fetchCandyMachine")," \u83b7\u53d6\u7cd6\u679c\u673a\u65f6\uff0c\u5c06 ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," \u8bbe\u7f6e\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"1"),"\uff0c\u8fd9\u6837\u4f60\u5c31\u53ef\u4ee5\u4ece\u7b2c\u4e00\u9875\u5f00\u59cb\u3002"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("ol",{parentName:"li",start:3},(0,i.kt)("li",{parentName:"ol"},"\u6bcf\u5f53 ",(0,i.kt)("inlineCode",{parentName:"li"},"candyMachineData")," \u6216 ",(0,i.kt)("inlineCode",{parentName:"li"},"page")," \u53d1\u751f\u53d8\u5316\u65f6\uff08\u5373\u8f93\u5165\u65b0\u7684CM\u5730\u5740\u6216\u70b9\u51fb\u4e0b\u4e00\u4e2a/\u4e0a\u4e00\u4e2a\u6309\u94ae\uff09\uff0c\u91cd\u65b0\u52a0\u8f7d\u9875\u9762\u3002")))),(0,i.kt)("p",null,"\u4ee5\u4e0b\u662f\u4ee3\u7801\u793a\u4f8b\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"export const FetchCandyMachine: FC = () => {\n  ...\n\n  // \u9875\u9762\u52a0\u8f7d\u65f6\u83b7\u53d6\u5360\u4f4d\u7b26\u7cd6\u679c\u673a\n  useEffect(() => {\n    fetchCandyMachine()\n  }, [])\n\n  // \u5f53\u9875\u9762\u6216\u7cd6\u679c\u673a\u53d1\u751f\u53d8\u5316\u65f6\u83b7\u53d6NFT\u7684\u5143\u6570\u636e\n  useEffect(() => {\n    if (!candyMachineData) {\n      return\n    }\n    getPage(page, 9)\n  }, [candyMachineData, page])\n\n}\n")),(0,i.kt)("p",null,"\u5feb\u5230 ",(0,i.kt)("inlineCode",{parentName:"p"},"localhost:3000")," \u4e0a\u8bd5\u8bd5\u5427\uff01\u4f60\u5e94\u8be5\u80fd\u591f\u770b\u5230\u4f60\u7684\u7cd6\u679c\u673a\u4e0a",(0,i.kt)("inlineCode",{parentName:"p"},"NFT"),"\u7684\u7b2c\u4e00\u9875\u3002"))}m.isMDXComponent=!0},99455:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/candy-machine-nft-675170f974878ca6293f960241c6dbb4.png"},2072:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/find-by-address-result-e5eff2626f5a58314f6e35abbc359cf7.png"},22440:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/find-by-address-49e6b96be47f6f70559de3e8d31af886.png"},45400:(e,n,a)=>{a.d(n,{Z:()=>t});const t=a.p+"assets/images/find-nf-5e8b6b7e1b3ecec69d59cf99f80a82c5.png"}}]);