"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[5371],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>y});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function c(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=t.createContext({}),s=function(e){var n=t.useContext(o),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=s(e.components);return t.createElement(o.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,y=u["".concat(o,".").concat(m)]||u[m]||p[m]||i;return a?t.createElement(y,l(l({ref:n},d),{},{components:a})):t.createElement(y,l({ref:n},d))}));function y(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var c={};for(var o in n)hasOwnProperty.call(n,o)&&(c[o]=n[o]);c.originalType=e,c[u]="string"==typeof e?e:r,l[1]=c;for(var s=2;s<i;s++)l[s]=a[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,a)}m.displayName="MDXCreateElement"},98174:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>y,frontMatter:()=>c,metadata:()=>s,toc:()=>u});var t=a(87462),r=(a(67294),a(3905)),i=a(74866),l=a(85162);const c={title:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)",sidebar_position:22,tags:["solana-cook-book","nft"]},o="\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)",s={unversionedId:"references/nfts",id:"references/nfts",title:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)",description:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aNFT",source:"@site/docs/cookbook-zh/references/nfts.md",sourceDirName:"references",slug:"/references/nfts",permalink:"/solana-co-learn/cookbook-zh/references/nfts",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/references/nfts.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"nft",permalink:"/solana-co-learn/cookbook-zh/tags/nft"}],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:22,frontMatter:{title:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)",sidebar_position:22,tags:["solana-cook-book","nft"]},sidebar:"tutorialSidebar",previous:{title:"\u8d28\u62bc",permalink:"/solana-co-learn/cookbook-zh/references/staking"},next:{title:"\u53d1\u9001\u79bb\u7ebf\u4ea4\u6613",permalink:"/solana-co-learn/cookbook-zh/references/offline-transactions"}},d={},u=[{value:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aNFT",id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2anft",level:2},{value:"\u4e0a\u4f20\u5230 Arweave",id:"\u4e0a\u4f20\u5230-arweave",level:3},{value:"\u94f8\u9020\uff08Mint\uff09\u8be5 NFT",id:"\u94f8\u9020mint\u8be5-nft",level:3},{value:"\u5982\u4f55\u83b7\u53d6 NFT \u5143\u6570\u636e",id:"\u5982\u4f55\u83b7\u53d6-nft-\u5143\u6570\u636e",level:2},{value:"\u5982\u4f55\u83b7\u53d6NFT\u7684\u6240\u6709\u8005",id:"\u5982\u4f55\u83b7\u53d6nft\u7684\u6240\u6709\u8005",level:2},{value:"\u5982\u4f55\u83b7\u53d6 NFT \u7684\u94f8\u5e01\u5730\u5740",id:"\u5982\u4f55\u83b7\u53d6-nft-\u7684\u94f8\u5e01\u5730\u5740",level:2},{value:"Candy Machine V1",id:"candy-machine-v1",level:3},{value:"Candy Machine V2",id:"candy-machine-v2",level:3},{value:"\u5982\u4f55\u4ece\u94b1\u5305\u83b7\u53d6\u6240\u6709 NFT\uff1f",id:"\u5982\u4f55\u4ece\u94b1\u5305\u83b7\u53d6\u6240\u6709-nft",level:2},{value:"Candy Machine v2",id:"candy-machine-v2-1",level:2},{value:"\u5982\u4f55\u521b\u5efaCandy Machine",id:"\u5982\u4f55\u521b\u5efacandy-machine",level:3},{value:"\u5982\u4f55\u5220\u9664Candy Machine",id:"\u5982\u4f55\u5220\u9664candy-machine",level:3},{value:"\u5982\u4f55\u901a\u8fc7\u6743\u9650\u67e5\u627eCandy Machine",id:"\u5982\u4f55\u901a\u8fc7\u6743\u9650\u67e5\u627ecandy-machine",level:3},{value:"\u5982\u4f55\u901a\u8fc7\u94b1\u5305\u5730\u5740\u67e5\u627eCandy Machine",id:"\u5982\u4f55\u901a\u8fc7\u94b1\u5305\u5730\u5740\u67e5\u627ecandy-machine",level:3},{value:"\u5982\u4f55\u901a\u8fc7Candy Machine\u7684\u5730\u5740\u67e5\u627e\u5b83",id:"\u5982\u4f55\u901a\u8fc7candy-machine\u7684\u5730\u5740\u67e5\u627e\u5b83",level:3},{value:"\u5982\u4f55\u4eceCandy Machine\u627e\u5230\u94f8\u9020(mint)\u7684 NFT",id:"\u5982\u4f55\u4ececandy-machine\u627e\u5230\u94f8\u9020mint\u7684-nft",level:3},{value:"\u5982\u4f55\u5c06\u7269\u54c1\u63d2\u5165\u5230Candy Machine",id:"\u5982\u4f55\u5c06\u7269\u54c1\u63d2\u5165\u5230candy-machine",level:3},{value:"\u5982\u4f55\u4eceCandy Machine\u94f8\u9020(Mint)\u4e00\u4e2a NFT",id:"\u5982\u4f55\u4ececandy-machine\u94f8\u9020mint\u4e00\u4e2a-nft",level:3}],p={toc:u},m="wrapper";function y(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u975e\u540c\u8d28\u5316\u4ee3\u5e01-nfts"},"\u975e\u540c\u8d28\u5316\u4ee3\u5e01 (NFTs)"),(0,r.kt)("h2",{id:"\u5982\u4f55\u521b\u5efa\u4e00\u4e2anft"},"\u5982\u4f55\u521b\u5efa\u4e00\u4e2aNFT"),(0,r.kt)("p",null,"\u8981\u521b\u5efa\u4e00\u4e2a NFT\uff0c\u4f60\u9700\u8981\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5c06\u56fe\u50cf\u4e0a\u4f20\u5230\u50cf Arweave \u8fd9\u6837\u7684 IPFS \u7f51\u7edc\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5c06 JSON \u5143\u6570\u636e\u4e0a\u4f20\u5230\u50cf Arweave \u8fd9\u6837\u7684 IPFS \u7f51\u7edc\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8c03\u7528 Metaplex \u521b\u5efa\u4e00\u4e2a\u7528\u4e8e\u8be5 NFT \u7684\u8d26\u6237\u3002")),(0,r.kt)("h3",{id:"\u4e0a\u4f20\u5230-arweave"},"\u4e0a\u4f20\u5230 Arweave"),(0,r.kt)(i.Z,{mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"typescript",label:"typescript",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// 1. Upload image to Arweave\nconst data = fs.readFileSync("./code/nfts/arweave-upload/lowres-dog.png");\n\nconst transaction = await arweave.createTransaction({\n  data: data,\n});\n\ntransaction.addTag("Content-Type", "image/png");\n\nconst wallet = JSON.parse(fs.readFileSync("wallet.json", "utf-8"))\nawait arweave.transactions.sign(transaction, wallet);\n\nconst response = await arweave.transactions.post(transaction);\nconsole.log(response);\n\nconst id = transaction.id;\nconst imageUrl = id ? `https://arweave.net/${id}` : undefined;\n\n// 2. Upload metadata to Arweave\n\nconst metadataRequest = JSON.stringify(metadata);\n\nconst metadataTransaction = await arweave.createTransaction({\n  data: metadataRequest,\n});\n\nmetadataTransaction.addTag("Content-Type", "application/json");\n\nawait arweave.transactions.sign(metadataTransaction, wallet);\n\nawait arweave.transactions.post(metadataTransaction);\n\n'))),(0,r.kt)(l.Z,{value:"py",label:"Python",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-py"},"#  1. Load your arweave wallet\nyour_ar_wallet = Wallet('wallet.json')\n\n#  2. Upload image to Arweave\nwith open('./code/nfts/arweave-upload/lowres-dog.png', 'rb') as f:\n    img_in_bytes = f.read()\n\ntransaction = Transaction(your_ar_wallet, data=img_in_bytes)\ntransaction.add_tag('Content-Type', 'image/png')\ntransaction.sign()\ntransaction.send()\n\nimage_url = API_URL+\"/\"+transaction.id\n\n#  3. Upload metadata to Arweave\nmeta_transaction = Transaction(your_ar_wallet, data=json.dumps(metadata))\nmeta_transaction.add_tag('Content-Type', 'text/html')\nmeta_transaction.sign()\nmeta_transaction.send()\n\nmetadata_url = API_URL+\"/\"+meta_transaction.id\n\n")))),(0,r.kt)("h3",{id:"\u94f8\u9020mint\u8be5-nft"},"\u94f8\u9020\uff08Mint\uff09\u8be5 NFT"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u5df2\u7ecf\u4e0a\u4f20\u4e86\u56fe\u50cf\u548c\u5143\u6570\u636e\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u94f8\u9020\uff08Mint\uff09\u8be5 NFT\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const mintNFTResponse = await metaplex.nfts().create({\n  uri: "https://ffaaqinzhkt4ukhbohixfliubnvpjgyedi3f2iccrq4efh3s.arweave.net/KUAIIbk6p8oo4XHRcq0U__C2r0mwQaNl0gQow4Qp9yk",\n  maxSupply: 1,\n});\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"tip \u6ce8\u610f"),"\n\u4f60\u4e0d\u80fd\u4f7f\u7528\u4e0e\u4f60\u94b1\u5305\u4e0d\u540c\u7684\u521b\u4f5c\u8005\u4fe1\u606f\u6765\u94f8\u9020\uff08Mint\uff09 NFT\u3002\u5982\u679c\u9047\u5230\u521b\u4f5c\u8005\u7684\u95ee\u9898\uff0c\u8bf7\u786e\u4fdd\u4f60\u7684\u5143\u6570\u636e\u4e2d\u5c06\u4f60\u5217\u4e3a\u521b\u4f5c\u8005\u3002")),(0,r.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6-nft-\u5143\u6570\u636e"},"\u5982\u4f55\u83b7\u53d6 NFT \u5143\u6570\u636e"),(0,r.kt)("p",null,"Metaplex \u7684 NFT \u5143\u6570\u636e\u5b58\u50a8\u5728 Arweave \u4e0a\u3002\u4e3a\u4e86\u83b7\u53d6 Arweave \u7684\u5143\u6570\u636e\uff0c\u60a8\u9700\u8981\u83b7\u53d6 Metaplex PDA\uff08\u7a0b\u5e8f\u6d3e\u751f\u8d26\u6237\uff09\u5e76\u5bf9\u8d26\u6237\u6570\u636e\u8fdb\u884c\u89e3\u7801\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const connection = new Connection(clusterApiUrl("mainnet-beta"));\nconst keypair = Keypair.generate();\n\nconst metaplex = new Metaplex(connection);\nmetaplex.use(keypairIdentity(keypair));\n\nconst mintAddress = new PublicKey(\n  "Ay1U9DWphDgc7hq58Yj1yHabt91zTzvV2YJbAWkPNbaK"\n);\n\nconst nft = await metaplex.nfts().findByMint({ mintAddress });\n\nconsole.log(nft.json);\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6nft\u7684\u6240\u6709\u8005"},"\u5982\u4f55\u83b7\u53d6NFT\u7684\u6240\u6709\u8005"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u62e5\u6709 NFT \u7684\u94f8\u5e01\u5bc6\u94a5\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u67e5\u770b\u8be5\u94f8\u5e01\u5bc6\u94a5\u5bf9\u5e94\u7684\u6700\u5927\u4ee3\u5e01\u8d26\u6237\u6765\u627e\u5230\u5176\u5f53\u524d\u6240\u6709\u8005\u3002"),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0cNFT \u7684\u4f9b\u5e94\u91cf\u4e3a 1\uff0c\u5b83\u4eec\u662f\u4e0d\u53ef\u5206\u5272\u7684\uff0c\u8fd9\u610f\u5473\u7740\u5728\u4efb\u4f55\u65f6\u523b\u53ea\u6709\u4e00\u4e2a\u4ee3\u5e01\u8d26\u6237\u6301\u6709\u8be5\u4ee3\u5e01\uff0c\u800c\u5176\u4ed6\u6240\u6709\u4e0e\u8be5\u94f8\u5e01\u5bc6\u94a5\u76f8\u5173\u7684\u4ee3\u5e01\u8d26\u6237\u7684\u4f59\u989d\u90fd\u4e3a 0\u3002"),(0,r.kt)("p",null,"\u4e00\u65e6\u786e\u5b9a\u4e86\u6700\u5927\u4ee3\u5e01\u8d26\u6237\uff0c\u6211\u4eec\u53ef\u4ee5\u83b7\u53d6\u5b83\u7684\u6240\u6709\u8005\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const connection = new Connection("https://api.mainnet-beta.solana.com");\nconst tokenMint = "9ARngHhVaCtH5JFieRdSS5Y8cdZk2TMF4tfGSWFB9iSK";\nconst largestAccounts = await connection.getTokenLargestAccounts(\n  new PublicKey(tokenMint)\n);\nconst largestAccountInfo = await connection.getParsedAccountInfo(\n  largestAccounts.value[0].address\n);\nconsole.log(largestAccountInfo.value.data.parsed.info.owner);\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u83b7\u53d6-nft-\u7684\u94f8\u5e01\u5730\u5740"},"\u5982\u4f55\u83b7\u53d6 NFT \u7684\u94f8\u5e01\u5730\u5740"),(0,r.kt)("p",null,"\u5982\u679c\u4f60\u77e5\u9053Candy Machine\u7684\u516c\u94a5\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u4ee3\u7801\u83b7\u53d6\u4ece\u8be5Candy Machine\u751f\u6210\u7684\u6240\u6709 NFT \u94f8\u5e01\u5730\u5740\u7684\u5217\u8868\u3002\u8bf7\u6ce8\u610f\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4ee5\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"memcmp")," \u8fc7\u6ee4\u5668\uff0c\u56e0\u4e3a\u5728 v1 \u7248\u672c\u4e2d\uff0c\u7b2c\u4e00\u4e2a\u521b\u4f5c\u8005\u7684\u5730\u5740\u603b\u662fCandy Machine\u7684\u5730\u5740\u3002"),(0,r.kt)("h3",{id:"candy-machine-v1"},"Candy Machine V1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const getMintAddresses = async (firstCreatorAddress: PublicKey) => {\n  const metadataAccounts = await connection.getProgramAccounts(\n    TOKEN_METADATA_PROGRAM,\n    {\n      // The mint address is located at byte 33 and lasts for 32 bytes.\n      dataSlice: { offset: 33, length: 32 },\n\n      filters: [\n        // Only get Metadata accounts.\n        { dataSize: MAX_METADATA_LEN },\n\n        // Filter using the first creator.\n        {\n          memcmp: {\n            offset: CREATOR_ARRAY_START,\n            bytes: firstCreatorAddress.toBase58(),\n          },\n        },\n      ],\n    }\n  );\n\n  return metadataAccounts.map((metadataAccountInfo) =>\n    bs58.encode(metadataAccountInfo.account.data)\n  );\n};\n\ngetMintAddresses(candyMachineId);\n")),(0,r.kt)("h3",{id:"candy-machine-v2"},"Candy Machine V2"),(0,r.kt)("p",null,'\u5982\u679c\u4f60\u6b63\u5728\u4f7f\u7528Candy Machine v2\uff0c\u4f60\u9996\u5148\u9700\u8981\u8bbf\u95ee\u5176 "Candy Machine Creator" \u5730\u5740\uff0c\u8be5\u5730\u5740\u662f\u4e00\u4e2a\u7b80\u5355\u7684 PDA\uff0c\u4f7f\u7528',(0,r.kt)("inlineCode",{parentName:"p"},"candy_machine"),"\u548cCandy Machine v2 \u5730\u5740\u4f5c\u4e3a\u79cd\u5b50\u751f\u6210\u3002\u4e00\u65e6\u4f60\u83b7\u5f97\u4e86\u521b\u5efa\u8005\u5730\u5740\uff0c\u4f60\u53ef\u4ee5\u50cf\u5bf9\u5f85 v1 \u7248\u672c\u4e00\u6837\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const getCandyMachineCreator = async (\n  candyMachine: PublicKey\n): Promise<[PublicKey, number]> =>\n  PublicKey.findProgramAddress(\n    [Buffer.from("candy_machine"), candyMachine.toBuffer()],\n    CANDY_MACHINE_V2_PROGRAM\n  );\n\nconst candyMachineCreator = await getCandyMachineCreator(candyMachineId);\ngetMintAddresses(candyMachineCreator[0]);\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u4ece\u94b1\u5305\u83b7\u53d6\u6240\u6709-nft"},"\u5982\u4f55\u4ece\u94b1\u5305\u83b7\u53d6\u6240\u6709 NFT\uff1f"),(0,r.kt)("p",null,"\u5f53\u4ece\u94b1\u5305\u83b7\u53d6\u6240\u6709 NFT \u65f6\uff0c\u4f60\u9700\u8981\u83b7\u53d6\u6240\u6709\u7684\u4ee3\u5e01\u8d26\u6237\uff0c\u7136\u540e\u89e3\u6790\u51fa\u5176\u4e2d\u7684 NFT\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 Metaplex JS \u5e93\u4e2d\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/metaplex-foundation/js/blob/248b61baf89a69b88f9a461e32b1cbd54a9b0a18/src/programs/metadata/accounts/Metadata.ts#L220-L236"},(0,r.kt)("inlineCode",{parentName:"a"},"findDataByOwner"))," \u65b9\u6cd5\u6765\u5b8c\u6210\u8fd9\u4e2a\u8fc7\u7a0b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const connection = new Connection(clusterApiUrl("mainnet-beta"), "confirmed");\nconst keypair = Keypair.generate();\n\nconst metaplex = new Metaplex(connection);\nmetaplex.use(keypairIdentity(keypair));\n\nconst owner = new PublicKey("2R4bHmSBHkHAskerTHE6GE1Fxbn31kaD5gHqpsPySVd7");\nconst allNFTs = await metaplex.nfts().findAllByOwner({ owner });\n\nconsole.log(allNFTs);\n')),(0,r.kt)("h2",{id:"candy-machine-v2-1"},"Candy Machine v2"),(0,r.kt)("p",null,"Metaplex JS SDK \u73b0\u5728\u652f\u6301\u901a\u8fc7\u4ee3\u7801\u521b\u5efa\u548c\u66f4\u65b0Candy Machine v2\u3002\u5b83\u4f7f\u5f00\u53d1\u8005\u80fd\u591f\u4e0e\u7cd6\u679c\u673av2 \u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\uff0c\u521b\u5efa\u3001\u66f4\u65b0\u548c\u5220\u9664Candy Machine\uff0c\u5e76\u4ece\u4e2d\u94f8\u9020\uff08Mint\uff09 NFT\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u521b\u5efacandy-machine"},"\u5982\u4f55\u521b\u5efaCandy Machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const { candyMachine } = await metaplex.candyMachinesV2().create({\n  sellerFeeBasisPoints: 5, // 0.05% royalties\n  price: sol(0.0001), // 0.0001 SOL\n  itemsAvailable: toBigNumber(5), // 5 items available\n});\n\n/**\n * #1 Candy Machine ID - HSZxtWx6vgGWGsWu9SouXkHA2bAKCMtMZyMKzF2dvhrR\n */\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u5220\u9664candy-machine"},"\u5982\u4f55\u5220\u9664Candy Machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// creating a candy machine\nconst { candyMachine } = await metaplex.candyMachinesV2().create({\n  sellerFeeBasisPoints: 5, // 0.05% royalties\n  price: sol(0.0001), // 0.0001 SOL\n  itemsAvailable: toBigNumber(5), // 5 items available\n});\n\nconsole.log(`Candy Machine ID - ${candyMachine.address.toString()}`);\n\n// deleting the candy machine\nconst { response } = await metaplex.candyMachinesV2().delete({\n  candyMachine,\n});\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7\u6743\u9650\u67e5\u627ecandy-machine"},"\u5982\u4f55\u901a\u8fc7\u6743\u9650\u67e5\u627eCandy Machine"),(0,r.kt)("p",null,"\u8981\u67e5\u627e\u6240\u6709\u6743\u9650\u4e3a\u7279\u5b9a\u516c\u94a5\u7684 Candy Machine\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528  ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachinesV2Client.html#findAllBy"},(0,r.kt)("inlineCode",{parentName:"a"},"findAllBy"))," \u51fd\u6570\uff0c\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"authority"),"\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const candyMachines = await metaplex.candyMachinesV2().findAllBy({\n  type: "authority",\n  publicKey: authority,\n});\n\ncandyMachines.map((candyMachine, index) => {\n  console.log(`#${index + 1} Candy Machine ID - ${candyMachine.address}`);\n});\n\n/**\n * #1 Candy Machine ID - HSZxtWx6vgGWGsWu9SouXkHA2bAKCMtMZyMKzF2dvhrR\n */\n')),(0,r.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7\u94b1\u5305\u5730\u5740\u67e5\u627ecandy-machine"},"\u5982\u4f55\u901a\u8fc7\u94b1\u5305\u5730\u5740\u67e5\u627eCandy Machine"),(0,r.kt)("p",null,"\u8981\u901a\u8fc7\u94b1\u5305\u5730\u5740\u83b7\u53d6 Candy Machine \u5bf9\u8c61\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachinesV2Client.html#findAllBy"},(0,r.kt)("inlineCode",{parentName:"a"},"findAllBy"))," \u51fd\u6570\uff0c\u5e76\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"type")," \u53c2\u6570\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"wallet"),'\u3002\u4f60\u53ef\u4ee5\u4ece\u6d4f\u89c8\u5668\u7684 "Anchor data" \u9009\u9879\u5361\u4e2d\u83b7\u53d6 Candy Machine \u7684\u94b1\u5305\u5730\u5740\u3002'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const candyMachines = await metaplex.candyMachinesV2().findAllBy({\n  type: "wallet",\n  publicKey: wallet,\n});\n\ncandyMachines.map((candyMachine, index) => {\n  console.log(`#${index + 1} Candy Machine ID - ${candyMachine.address}`);\n});\n')),(0,r.kt)("h3",{id:"\u5982\u4f55\u901a\u8fc7candy-machine\u7684\u5730\u5740\u67e5\u627e\u5b83"},"\u5982\u4f55\u901a\u8fc7Candy Machine\u7684\u5730\u5740\u67e5\u627e\u5b83"),(0,r.kt)("p",null,"\u8981\u901a\u8fc7Candy Machine\u7684\u5730\u5740\u67e5\u627eCandy Machine\uff0c\u6211\u4eec\u9700\u8981\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://metaplex-foundation.github.io/js/classes/js.CandyMachinesV2Client.html#findByAddress"},(0,r.kt)("inlineCode",{parentName:"a"},"findByAddress"))," \u51fd\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const candyMachine = await metaplex.candyMachinesV2().findByAddress({\n  address: candyMachineId,\n});\n\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u4ececandy-machine\u627e\u5230\u94f8\u9020mint\u7684-nft"},"\u5982\u4f55\u4eceCandy Machine\u627e\u5230\u94f8\u9020(mint)\u7684 NFT"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const candyMachine = await metaplex.candyMachinesV2().findMintedNfts({\n  candyMachine: candyMachineId,\n});\n")),(0,r.kt)("h3",{id:"\u5982\u4f55\u5c06\u7269\u54c1\u63d2\u5165\u5230candy-machine"},"\u5982\u4f55\u5c06\u7269\u54c1\u63d2\u5165\u5230Candy Machine"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'await metaplex.candyMachines().insertItems({\n  candyMachineId,\n  items: [\n    { name: "My NFT #1", uri: "https://example.com/nft1" },\n    { name: "My NFT #2", uri: "https://example.com/nft2" },\n    { name: "My NFT #3", uri: "https://example.com/nft3" },\n  ],\n});\n')),(0,r.kt)("h3",{id:"\u5982\u4f55\u4ececandy-machine\u94f8\u9020mint\u4e00\u4e2a-nft"},"\u5982\u4f55\u4eceCandy Machine\u94f8\u9020(Mint)\u4e00\u4e2a NFT"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u94f8\u9020\u7684 NFT \u7684\u6240\u6709\u8005\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"metaplex.identity().publicKey"),"\u3002\u5982\u679c\u4f60\u5e0c\u671b\u5c06 NFT \u94f8\u9020\u5230\u5176\u4ed6\u94b1\u5305\u4e2d\uff0c\u53ef\u4ee5\u5c06\u65b0\u7684\u94b1\u5305\u516c\u94a5\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"newOwner"),"\u53c2\u6570\u4e00\u8d77\u4f20\u9012\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'// by default, the owner of the minted nft would be `metaplex.identity().publicKey`. if you want to mint the nft to some other wallet, pass that public key along with the `newOwner` parameter\nconst candyMachine = await metaplex.candyMachinesV2().mint({\n  candyMachine: candyMachineId,\n  // newOwner: new PublicKey("some-other-public-key");\n});\n')))}y.isMDXComponent=!0},85162:(e,n,a)=>{a.d(n,{Z:()=>l});var t=a(67294),r=a(86010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:n,hidden:a,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:a},n)}},74866:(e,n,a)=>{a.d(n,{Z:()=>M});var t=a(87462),r=a(67294),i=a(86010),l=a(12466),c=a(16550),o=a(91980),s=a(67392),d=a(50012);function u(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}function p(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??u(a);return function(e){const n=(0,s.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function y(e){let{queryString:n=!1,groupId:a}=e;const t=(0,c.k6)(),i=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,o._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(t.location.search);n.set(i,e),t.replace({...t.location,search:n.toString()})}),[i,t])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,i=p(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:i}))),[o,s]=y({queryString:a,groupId:t}),[u,h]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,i]=(0,d.Nk)(a);return[t,(0,r.useCallback)((e=>{a&&i.set(e)}),[a,i])]}({groupId:t}),f=(()=>{const e=o??u;return m({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&c(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);c(e),s(e),h(e)}),[s,h,i]),tabValues:i}}var f=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:n,block:a,selectedValue:c,selectValue:o,tabValues:s}=e;const d=[],{blockElementScrollPositionUntilNextRender:u}=(0,l.o5)(),p=e=>{const n=e.currentTarget,a=d.indexOf(n),t=s[a].value;t!==c&&(u(n),o(t))},m=e=>{let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const a=d.indexOf(e.currentTarget)+1;n=d[a]??d[0];break}case"ArrowLeft":{const a=d.indexOf(e.currentTarget)-1;n=d[a]??d[d.length-1];break}}n?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},n)},s.map((e=>{let{value:n,label:a,attributes:l}=e;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:c===n?0:-1,"aria-selected":c===n,key:n,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":c===n})}),a??n)})))}function g(e){let{lazy:n,children:a,selectedValue:t}=e;const i=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t}))))}function v(e){const n=h(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},r.createElement(k,(0,t.Z)({},e,n)),r.createElement(g,(0,t.Z)({},e,n)))}function M(e){const n=(0,f.Z)();return r.createElement(v,(0,t.Z)({key:String(n)},e))}}}]);