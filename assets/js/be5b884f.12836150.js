"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4688],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),s=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(p.Provider,{value:n},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,k=u["".concat(p,".").concat(m)]||u[m]||d[m]||l;return t?a.createElement(k,i(i({ref:n},c),{},{components:t})):a.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[u]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=t[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5092:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=t(7462),r=(t(7294),t(3905));const l={sidebar_position:15,sidebar_label:"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4ea4\u4e92\u811a\u672c",sidebar_class_name:"green"},i="\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c",o={unversionedId:"Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/README",id:"Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/README",title:"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c",description:"\u51c6\u5907\u597d\u6233\u4e00\u4e0bSolana\u7f51\u7edc\u4e86\u5417\uff1f\u6211\u4eec\u5c06\u7f16\u5199\u4e00\u4e2a\u811a\u672c\uff0c\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5\u5bf9\uff0c\u7528devnet SOL\u8d44\u91d1\u8fdb\u884c\u5145\u503c\uff0c\u5e76\u4e0eSolana\u7f51\u7edc\u4e0a\u7684\u73b0\u6709\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002",source:"@site/docs/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/README.md",sourceDirName:"Solana-Co-Learn/module1/client-side-development/build-an-interaction-script",slug:"/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/",permalink:"/docs/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Solana-Co-Learn/module1/client-side-development/build-an-interaction-script/README.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,sidebar_label:"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4ea4\u4e92\u811a\u672c",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"\u270d\u5c06\u6570\u636e\u5199\u5165\u533a\u5757\u94fe",permalink:"/docs/Solana-Co-Learn/module1/client-side-development/write-data-to-the-blockchain/"},next:{title:"\u94b1\u5305\u548c\u524d\u7aef",permalink:"/docs/Solana-Co-Learn/module1/wallets-and-frontends/"}},p={},s=[{value:"\ud83d\udea7 \u5728\u672c\u5730\u8bbe\u7f6e Solana \u5ba2\u6237\u7aef",id:"-\u5728\u672c\u5730\u8bbe\u7f6e-solana-\u5ba2\u6237\u7aef",level:2},{value:"\u2699 \u8bbe\u7f6e\u5ba2\u6237\u7aef\u811a\u672c",id:"-\u8bbe\u7f6e\u5ba2\u6237\u7aef\u811a\u672c",level:2},{value:"\ud83d\uddb1 \u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f",id:"-\u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f",level:2},{value:"\ud83d\udea2 Ship \u6311\u6218 - \u4e00\u79cdSOL\u8f6c\u8d26\u811a\u672c",id:"-ship-\u6311\u6218---\u4e00\u79cdsol\u8f6c\u8d26\u811a\u672c",level:2}],c={toc:s},u="wrapper";function d(e){let{components:n,...l}=e;return(0,r.kt)(u,(0,a.Z)({},c,l,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"-\u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c"},"\ud83d\udcdd \u6784\u5efa\u4e00\u4e2a\u4e92\u52a8\u811a\u672c"),(0,r.kt)("p",null,"\u51c6\u5907\u597d\u6233\u4e00\u4e0bSolana\u7f51\u7edc\u4e86\u5417\uff1f\u6211\u4eec\u5c06\u7f16\u5199\u4e00\u4e2a\u811a\u672c\uff0c\u751f\u6210\u4e00\u4e2a\u5bc6\u94a5\u5bf9\uff0c\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"devnet")," SOL\u8d44\u91d1\u8fdb\u884c\u5145\u503c\uff0c\u5e76\u4e0eSolana\u7f51\u7edc\u4e0a\u7684\u73b0\u6709\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u7a0b\u5e8f\u662f\u4e00\u4e2a\u7b80\u5355\u7684\u201cping\u201d\u8ba1\u6570\u5668\uff1a\u6211\u4eec\u51fb\u4e2d\u5b83\uff0c\u5b83\u8bb0\u5f55\u6211\u4eec\u5bf9\u5b83\u7684ping\uff0c\u5e76\u589e\u52a0\u4e00\u4e2a\u8ba1\u6570\u5668\u3002\u6211\u4eec\u4ee5\u540e\u4f1a\u4ecb\u7ecdRust\u548c\u6211\u4eec\u81ea\u5df1\u7684\u7a0b\u5e8f\uff0c\u73b0\u5728\u6211\u4eec\u5c06\u4f7f\u7528JS/TS\u3002"),(0,r.kt)("h2",{id:"-\u5728\u672c\u5730\u8bbe\u7f6e-solana-\u5ba2\u6237\u7aef"},"\ud83d\udea7 \u5728\u672c\u5730\u8bbe\u7f6e Solana \u5ba2\u6237\u7aef"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6539\u53d8\u4e00\u4e0b\u65b9\u5f0f - \u6211\u4eec\u5c06\u79bb\u5f00",(0,r.kt)("inlineCode",{parentName:"p"},"React/Next.js"),"\uff0c\u5728\u8fd9\u91cc\u4f7f\u7528\u7eafTypeScript\u6784\u5efa\u4e00\u4e2a\u672c\u5730\u5ba2\u6237\u7aef\u3002\u8fd9\u6bd4\u642d\u5efa\u524d\u7aef\u5e76\u6784\u5efa\u5927\u91cf\u7684\u7528\u6237\u754c\u9762\u8981\u5feb\u5f97\u591a\u3002\u4f60\u53ef\u4ee5\u5728\u4e00\u4e2a\u5355\u72ec\u7684TS\u6587\u4ef6\u4e2d\u5de5\u4f5c\uff0c\u5e76\u5f02\u6b65\u8fd0\u884c\u5b83\u4e0e\u7f51\u7edc\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u5728\u60a8\u7684Solana\u5de5\u4f5c\u533a\u4e2d\u521b\u5efa\u4e00\u4e2a\u65b0\u6587\u4ef6\u5939\uff0c\u5e76\u4f7f\u7528\u8fd9\u4e2a\u65b9\u4fbf\u7684\u547d\u4ee4\u6765\u8bbe\u7f6e\u672c\u5730\u5ba2\u6237\u7aef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx create-solana-client solana-intro-client\n")),(0,r.kt)("p",null,"\u5982\u679c\u5b83\u8be2\u95ee\u60a8\u662f\u5426\u8981\u5b89\u88c5 ",(0,r.kt)("inlineCode",{parentName:"p"},"create-solana-client")," \u8f6f\u4ef6\u5305\uff0c\u8bf7\u8bf4\u201c\u662f\u201d\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u53ea\u9700\u5bfc\u822a\u5230\u76ee\u5f55\u5e76\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"VS Code")," \u4e2d\u542f\u52a8\u5b83"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd solana-intro-client\ncode .\n")),(0,r.kt)("h2",{id:"-\u8bbe\u7f6e\u5ba2\u6237\u7aef\u811a\u672c"},"\u2699 \u8bbe\u7f6e\u5ba2\u6237\u7aef\u811a\u672c"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"create-solana-client")," \u7684\u7f8e\u5999\u4e4b\u5904\u5728\u4e8e\u6211\u4eec\u53ef\u4ee5\u7acb\u5373\u5f00\u59cb\u7f16\u5199\u5ba2\u6237\u7aef\u4ee3\u7801\uff01\u8df3\u8f6c\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," \u5e76\u5bfc\u5165\u6211\u4eec\u7684\u4f9d\u8d56\u9879\u5e76\u6dfb\u52a0\u6b64 ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeKeypair")," \u51fd\u6570\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// We're adding these\nimport * as Web3 from '@solana/web3.js';\nimport * as fs from 'fs';\nimport dotenv from 'dotenv';\ndotenv.config();\n\nasync function main() {\n}\n\nmain()\n  .then(() => {\n    console.log('Finished successfully');\n    process.exit(0);\n  })\n  .catch((error) => {\n    console.log(error);\n    process.exit(1);\n  });\n")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u5728\u7ec8\u7aef\u4e2d\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \uff0c\u60a8\u5c06\u770b\u5230\u811a\u672c\u5df2\u8fd0\u884c\uff01\u53ea\u9700\u4e00\u4e2a\u547d\u4ee4\u5373\u53ef\u8bbe\u7f6e Solana \u5ba2\u6237\u7aef\u3002"),(0,r.kt)("p",null,"\u8ba9\u6211\u4eec\u6dfb\u52a0\u4e00\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeKeypair")," \u51fd\u6570\uff0c\u5982\u679c\u6211\u4eec\u6ca1\u6709\u5bc6\u94a5\u5bf9\uff0c\u5b83\u5c06\u81ea\u52a8\u4e3a\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u5bc6\u94a5\u5bf9\u3002\u5728\u5bfc\u5165\u4e4b\u540e\u6dfb\u52a0\u4ee5\u4e0b\u5185\u5bb9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function initializeKeypair(connection: Web3.Connection): Promise<Web3.Keypair> {\n  if (!process.env.PRIVATE_KEY) {\n    console.log('Generating new keypair... \ud83d\udddd\ufe0f');\n    const signer = Web3.Keypair.generate();\n\n    console.log('Creating .env file');\n    fs.writeFileSync('.env', `PRIVATE_KEY=[${signer.secretKey.toString()}]`);\n\n    return signer;\n  }\n\n  const secret = JSON.parse(process.env.PRIVATE_KEY ?? '') as number[];\n  const secretKey = Uint8Array.from(secret);\n  const keypairFromSecret = Web3.Keypair.fromSecretKey(secretKey);\n  return keypairFromSecret;\n}\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u975e\u5e38\u667a\u80fd\u7684\u51fd\u6570 - \u5b83\u4f1a\u68c0\u67e5\u60a8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\u4e2d\u662f\u5426\u6709\u79c1\u94a5\uff0c\u5982\u679c\u6ca1\u6709\uff0c\u5b83\u5c31\u4f1a\u521b\u5efa\u4e00\u4e2a\uff01"),(0,r.kt)("p",null,"\u60a8\u5df2\u7ecf\u719f\u6089\u8fd9\u91cc\u53d1\u751f\u7684\u4e00\u5207 - \u6211\u4eec\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Web3.Keypair.generate()")," \u51fd\u6570\u5e76\u5c06\u7ed3\u679c\u5199\u5165\u672c\u5730 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/dotenv"},(0,r.kt)("inlineCode",{parentName:"a"},"dotenv"))," \u6587\u4ef6\u3002\u521b\u5efa\u540e\uff0c\u6211\u4eec\u5c06\u8fd4\u56de\u5bc6\u94a5\u5bf9\uff0c\u4ee5\u4fbf\u6211\u4eec\u53ef\u4ee5\u5728\u811a\u672c\u7684\u5176\u4f59\u90e8\u5206\u4e2d\u4f7f\u7528\u5b83\u3002"),(0,r.kt)("p",null,"\u66f4\u65b0\u60a8\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"main")," \u51fd\u6570\u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \u8fd0\u884c\u811a\u672c\u6765\u6d4b\u8bd5\u5b83\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function main() {\n  const connection = new Web3.Connection(Web3.clusterApiUrl('devnet'));\n  const signer = await initializeKeypair(connection);\n\n  console.log(\"Public key:\", signer.publicKey.toBase58());\n}\n")),(0,r.kt)("p",null,"\u60a8\u5e94\u8be5\u5728\u7ec8\u7aef\u4e2d\u770b\u5230\u7c7b\u4f3c\u8fd9\u6837\u7684\u5185\u5bb9:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"> solana-course-client@1.0.0 start\n> ts-node src/index.ts\n\nGenerating new keypair... \ud83d\udddd\ufe0f\nCreating .env file\nPublic key: jTAsqBrjsYp4uEJNmED5R66gHPnFW4wvQrbmFG3c4QS\nFinished successfully\n")),(0,r.kt)("p",null,"\u597d\u7684\uff01\u5982\u679c\u60a8\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," \u6587\u4ef6\uff0c\u60a8\u5c06\u770b\u5230\u4e00\u4e2a\u5b57\u8282\u683c\u5f0f\u7684\u79c1\u94a5\uff01\u8be5\u5bc6\u94a5\u4e0e\u6587\u4ef6\u4e00\u6837\u4fdd\u5bc6\u3002\u5982\u679c\u60a8\u5c06\u6b64\u6587\u4ef6\u63a8\u9001\u5230\u516c\u5171 GitHub \u5b58\u50a8\u5e93\uff0c\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8bbf\u95ee\u5176\u4e2d\u7684\u8d44\u91d1\uff0c\u56e0\u6b64\u8bf7\u786e\u4fdd\u60a8\u4e0d\u8981\u5c06\u5176\u7528\u4e8e\u771f\u6b63\u7684\u8d27\u5e01\u7528\u9014\uff0c\u54c8\u54c8\u3002"),(0,r.kt)("p",null,"\u518d\u6b21\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \u5c06\u4f7f\u7528\u5b83\u800c\u4e0d\u662f\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u3002"),(0,r.kt)("p",null,"\u4fdd\u6301\u6d4b\u8bd5\u5e10\u6237\u72ec\u7acb\u975e\u5e38\u91cd\u8981\uff0c\u8fd9\u5c31\u662f\u4e3a\u4ec0\u4e48\u8fd9\u4e2a\u811a\u672c\u7279\u522b\u9177\u7684\u539f\u56e0 - \u5b83\u6d88\u9664\u4e86\u521b\u5efa\u548c\u7ba1\u7406\u6d4b\u8bd5\u94b1\u5305\u7684\u9ebb\u70e6\u3002"),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u6211\u4eec\u4e5f\u80fd\u81ea\u52a8\u83b7\u53d6 devnet SOL \u5c31\u597d\u4e86\u3002\u54e6\u7b49\u7b49\uff0c\u6211\u4eec\u53ef\u4ee5\uff01"),(0,r.kt)("p",null,"\u5feb\u6765\u770b\u770b\u8fd9\u4e2a\u8d85\u9177\u7684\u7a7a\u6295\u529f\u80fd-"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function airdropSolIfNeeded(\n  signer: Web3.Keypair,\n  connection: Web3.Connection\n) {\n  const balance = await connection.getBalance(signer.publicKey);\n  console.log('Current balance is', balance / Web3.LAMPORTS_PER_SOL, 'SOL');\n\n  // 1 SOL should be enough for almost anything you wanna do\n  if (balance / Web3.LAMPORTS_PER_SOL < 1) {\n    // You can only get up to 2 SOL per request\n    console.log('Airdropping 1 SOL');\n    const airdropSignature = await connection.requestAirdrop(\n      signer.publicKey,\n      Web3.LAMPORTS_PER_SOL\n    );\n\n    const latestBlockhash = await connection.getLatestBlockhash();\n\n    await connection.confirmTransaction({\n      blockhash: latestBlockhash.blockhash,\n      lastValidBlockHeight: latestBlockhash.lastValidBlockHeight,\n      signature: airdropSignature,\n    });\n\n    const newBalance = await connection.getBalance(signer.publicKey);\n    console.log('New balance is', newBalance / Web3.LAMPORTS_PER_SOL, 'SOL');\n  }\n}\n")),(0,r.kt)("p",null,"\u8fd9\u53ef\u80fd\u770b\u8d77\u6765\u6709\u70b9\u538b\u529b\u5c71\u5927\uff0c\u4f46\u5b9e\u9645\u4e0a\u4f60\u5bf9\u8fd9\u91cc\u53d1\u751f\u7684\u4e00\u5207\u90fd\u4e86\u5982\u6307\u638c\uff01\u6211\u4eec\u6b63\u5728\u5229\u7528\u6211\u4eec\u7684\u8001\u670b\u53cb ",(0,r.kt)("inlineCode",{parentName:"p"},"getBalance")," \u6765\u68c0\u67e5\u6211\u4eec\u662f\u5426\u7834\u4ea7\uff0c\u5982\u679c\u662f\u7684\u8bdd\uff0c\u6211\u4eec\u5c31\u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"requestAidrop")," \u51fd\u6570\u8ba9\u94b1\u6eda\u6eda\u800c\u6765\u3002"),(0,r.kt)("p",null,"\u533a\u5757\u54c8\u5e0c\u548c\u533a\u5757\u9ad8\u5ea6\u662f\u533a\u5757\u6807\u8bc6\u7b26\uff0c\u7528\u4e8e\u5411\u7f51\u7edc\u4f20\u8fbe\u6211\u4eec\u662f\u6700\u65b0\u7684\u5e76\u4e14\u4e0d\u4f1a\u53d1\u9001\u8fc7\u65f6\u7684\u4ea4\u6613\u3002"),(0,r.kt)("p",null,"\u4e0d\u8fc7\uff0c\u4e0d\u8981\u5c1d\u8bd5\u5faa\u73af\u8fd0\u884c\u5b83 - \u6c34\u9f99\u5934\u6709\u4e00\u4e2a\u51b7\u5374\u65f6\u95f4\uff0c\u5982\u679c\u4f60\u7ee7\u7eed\u5411\u5b83\u53d1\u9001\u5783\u573e\u90ae\u4ef6\uff0c\u8bf7\u6c42\u5c06\u4f1a\u5931\u8d25\uff0c\u54c8\u54c8\u3002"),(0,r.kt)("p",null,"\u786e\u4fdd\u5728\u521b\u5efa/\u83b7\u53d6\u5bc6\u94a5\u5bf9\u540e\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"p"},"initializeKeypair")," \u51fd\u6570\u4ee5\u8c03\u7528\u7a7a\u6295\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// When generating a keypair\n await airdropSolIfNeeded(signer, connection);\n\n // When creating it from the secret key\n await airdropSolIfNeeded(keypairFromSecret, connection);\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u5982\u679c\u60a8 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start")," \uff0c\u60a8\u5c06\u770b\u5230\u7a7a\u6295\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Current balance is 0 SOL\nAirdropping 1 SOL\nNew balance is 1 SOL\nPublic key: 7Fw3bXskk5eonycvET6BSufxAsuNudvuxF7MMnS8KMqX\n")),(0,r.kt)("p",null,"\u6211\u4eec\u51c6\u5907\u597d\u4e86 rrrrrrrrrrrrumble \ud83e\udd4a"),(0,r.kt)("h2",{id:"-\u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f"},"\ud83d\uddb1 \u8c03\u7528\u94fe\u4e0a\u7a0b\u5e8f"),(0,r.kt)("p",null,"\u662f\u65f6\u5019\u8ba9\u6211\u4eec\u7684\u5ba2\u6237\u53d1\u6325\u4f5c\u7528\u4e86\u3002\u6211\u4eec\u5c06\u5411Solana\u7f51\u7edc\u4e0a\u7684\u73b0\u6709\u7a0b\u5e8f\u5199\u5165\u6570\u636e\u3002\u4eba\u4eec\u8ba4\u4e3aSolana\u7684\u5f00\u53d1\u53ea\u662f\u5173\u4e8e\u7528Rust\u7f16\u5199\u7a0b\u5e8f\u3002\u4e0d\u5bf9\uff01\u5927\u90e8\u5206\u533a\u5757\u94fe\u5f00\u53d1\u662f\u4e0e\u73b0\u6709\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u6784\u5efa\u6570\u767e\u4e2a\u53ea\u4e0e\u5df2\u6709\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u7684\u5e94\u7528\u3002\u8fd9\u5c31\u662f\u4e50\u8da3\u5f00\u59cb\u7684\u5730\u65b9\uff01\u6211\u4eec\u4f1a\u4fdd\u6301\u7b80\u5355 - \u6211\u4eec\u7684\u5ba2\u6237\u7aef\u4f1a\u53d1\u9001\u4e00\u4e2a\u8ba1\u6570\u5668\u7a0b\u5e8f\uff0c\u8be5\u7a0b\u5e8f\u4f1a\u9012\u589e\u4e00\u4e2a\u8ba1\u6570\u5668\u3002\u4f60\u5c06\u544a\u8bc9\u7f51\u7edc\u4e0a\u7684\u6bcf\u4e2a\u4eba\u4f60\u662f\u4e00\u4e2a\u5f00\u53d1\u8005\u3002"),(0,r.kt)("p",null,"\u6211\u4eec\u9700\u8981\u544a\u8bc9\u5ba2\u6237\u5b83\u5c06\u4e0e\u54ea\u4e9b\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\u3002\u4ece\u9876\u90e8\u5f00\u59cb\uff0c\u5c06\u8fd9\u4e9b\u5730\u5740\u6dfb\u52a0\u5728\u5bfc\u5165\u8bed\u53e5\u7684\u4e0b\u65b9\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const PROGRAM_ID = new Web3.PublicKey("ChT1B39WKLS8qUrkLvFDXMhEJ4F1XZzwUNHUt4AU9aVa")\nconst PROGRAM_DATA_PUBLIC_KEY = new Web3.PublicKey("Ah9K7dQ8EHaZqcAsgBW8w37yN2eAy3koFmUn4x3CJtod")\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"PROGRAM_ID")," \u662f",(0,r.kt)("inlineCode",{parentName:"p"},"ping"),"\u7a0b\u5e8f\u672c\u8eab\u7684\u5730\u5740\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"PROGRAM_DATA_PUBLIC_KEY")," \u662f\u5b58\u50a8\u7a0b\u5e8f\u6570\u636e\u7684\u5e10\u6237\u7684\u5730\u5740\u3002\u8bf7\u8bb0\u4f4f - \u53ef\u6267\u884c\u4ee3\u7801\u548c\u72b6\u6001\u6570\u636e\u5355\u72ec\u5b58\u50a8\u5728 Solana \u4e0a\uff01"),(0,r.kt)("p",null,"\u7136\u540e\u6dfb\u52a0\u6b64\u51fd\u6570\u4ee5\u5728\u4efb\u4f55\u5730\u65b9 ",(0,r.kt)("inlineCode",{parentName:"p"},"ping")," \u7a0b\u5e8f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"async function pingProgram(connection: Web3.Connection, payer: Web3.Keypair) {\n  const transaction = new Web3.Transaction()\n  const instruction = new Web3.TransactionInstruction({\n    // Instructions need 3 things\n\n    // 1. The public keys of all the accounts the instruction will read/write\n    keys: [\n      {\n        pubkey: PROGRAM_DATA_PUBLIC_KEY,\n        isSigner: false,\n        isWritable: true\n      }\n    ],\n\n    // 2. The ID of the program this instruction will be sent to\n    programId: PROGRAM_ID\n\n    // 3. Data - in this case, there's none!\n  })\n\n  transaction.add(instruction)\n  const transactionSignature = await Web3.sendAndConfirmTransaction(connection, transaction, [payer])\n\n  console.log(\n    `Transaction https://explorer.solana.com/tx/${transactionSignature}?cluster=devnet`\n    )\n}\n")),(0,r.kt)("p",null,"\u8fd9\u5e76\u4e0d\u50cf\u770b\u8d77\u6765\u90a3\u4e48\u590d\u6742\uff01\u4f60\u5df2\u7ecf\u77e5\u9053\u4e86\u8fd9\u4e00\u90e8\u5206"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u8fdb\u884c\u4e00\u7b14\u4ea4\u6613"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5236\u4f5c\u4e00\u4efd\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06\u6307\u4ee4\u6dfb\u52a0\u5230\u4ea4\u6613\u4e2d"),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06\u4ea4\u6613\u53d1\u9001\u5230\u7f51\u7edc\uff01")),(0,r.kt)("p",null,"\u67e5\u770b\u4e0a\u9762\u7684\u4ee3\u7801\u6ce8\u91ca - \u6211\u56de\u987e\u4e00\u4e0b\u6307\u4ee4\u7684\u4e09\u4e2a\u90e8\u5206\u3002"),(0,r.kt)("p",null,"\u8fd9\u91cc\u7684\u91cd\u70b9\u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"keys")," \u503c - \u5b83\u662f\u4e00\u4e2a\u5305\u542b\u6bcf\u4e2a\u8d26\u6237\u5143\u6570\u636e\u7684\u6570\u7ec4\uff0c\u8fd9\u4e2a\u6307\u4ee4\u5c06\u4ece\u4e2d\u8bfb\u53d6\u6216\u5199\u5165\u3002\u5728\u6211\u4eec\u7684\u60c5\u51b5\u4e0b\uff0c\u6211\u544a\u8bc9\u4f60\u8fd9\u4e2a\u6307\u4ee4\u5c06\u5904\u7406\u54ea\u4e9b\u8d26\u6237\u3002"),(0,r.kt)("p",null,"\u4f60\u9700\u8981\u77e5\u9053\u8fd9\u5c06\u662f\u4ec0\u4e48 - \u4f60\u53ef\u4ee5\u901a\u8fc7\u9605\u8bfb\u7a0b\u5e8f\u672c\u8eab\u6216\u5176\u6587\u6863\u6765\u4e86\u89e3\u3002\u5982\u679c\u4f60\u4e0d\u77e5\u9053\u8fd9\u4e00\u70b9\uff0c\u5c31\u65e0\u6cd5\u4e0e\u7a0b\u5e8f\u8fdb\u884c\u4ea4\u4e92\uff0c\u56e0\u4e3a\u6307\u4ee4\u5c06\u65e0\u6548\u3002\u4f60\u5c06\u53d1\u9001\u4e00\u4e2a\u4f1a\u89e6\u53ca\u6570\u636e\u8d26\u6237\u7684\u4ea4\u6613\uff0c\u4f46\u4f60\u4e0d\u4f1a\u544a\u8bc9\u8fd0\u884c\u65f6\u662f\u54ea\u4e2a\u8d26\u6237\uff0c\u6240\u4ee5\u5b83\u5c06\u88ab\u4e22\u5f03\u3002"),(0,r.kt)("p",null,"\u53ef\u4ee5\u5c06\u5176\u60f3\u8c61\u4e3a\u5c1d\u8bd5\u5f00\u8f66\u524d\u5f80\u6ca1\u6709 GPS \u7684\u5730\u5740\u3002\u60a8\u77e5\u9053\u81ea\u5df1\u60f3\u53bb\u54ea\u91cc\uff0c\u4f46\u4e0d\u77e5\u9053\u5230\u8fbe\u90a3\u91cc\u7684\u8def\u7ebf\u3002"),(0,r.kt)("p",null,"\u7531\u4e8e\u6b64\u5199\u5165\u4e0d\u9700\u8981\u6570\u636e\u5e10\u6237\u7684\u7b7e\u540d\uff0c\u56e0\u6b64\u6211\u4eec\u5c06  ",(0,r.kt)("inlineCode",{parentName:"p"},"isSigner")," \u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"false"),"\u3002 ",(0,r.kt)("inlineCode",{parentName:"p"},"isWritable")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"\uff0c\u56e0\u4e3a\u8be5\u5e10\u6237\u6b63\u5728\u88ab\u5199\u5165\uff01"),(0,r.kt)("p",null,"\u901a\u8fc7\u544a\u8bc9\u7f51\u7edc\u6211\u4eec\u9700\u8981\u4e0e\u54ea\u4e9b\u5e10\u6237\u4ea4\u4e92\u4ee5\u53ca\u6211\u4eec\u662f\u5426\u6b63\u5728\u5411\u5b83\u4eec\u5199\u5165\u6570\u636e\uff0cSolana \u8fd0\u884c\u65f6\u5c31\u77e5\u9053\u53ef\u4ee5\u5e76\u884c\u8fd0\u884c\u54ea\u4e9b\u4e8b\u52a1\u3002\u8fd9\u5c31\u662f Solana \u5982\u6b64\u4e4b\u5feb\u7684\u90e8\u5206\u539f\u56e0\uff01"),(0,r.kt)("p",null,"\u5c06\u6b64\u51fd\u6570\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"await pingProgram(connection, signer)")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"main()")," \u5e76\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"npm start")," \u8fd0\u884c\u811a\u672c\u3002\u8bbf\u95ee\u8bb0\u5f55\u7684\u8d44\u6e90\u7ba1\u7406\u5668\u94fe\u63a5\uff0c\u60a8\u5c06\u5728\u9875\u9762\u5e95\u90e8\u770b\u5230\u60a8\u7f16\u5199\u7684\u6570\u636e\uff08\u60a8\u53ef\u4ee5\u5ffd\u7565\u5176\u4ed6\u6240\u6709\u5185\u5bb9\uff09-"),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(6245).Z,width:"2284",height:"402"})),(0,r.kt)("p",null,"\u60a8\u521a\u521a\u5c06\u6570\u636e\u5199\u5165\u533a\u5757\u94fe\u3002\u90a3\u6709\u591a\u5bb9\u6613\uff1f"),(0,r.kt)("p",null,"\u8fd9\u53ef\u80fd\u770b\u8d77\u6765\u5f88\u7b80\u5355\uff0c\u4f46\u60a8\u786e\u5b9e\u5df2\u7ecf\u53d6\u5f97\u4e86\u6210\u529f\u3002\u5f53\u63a8\u7279\u4e0a\u7684\u6bcf\u4e2a\u4eba\u90fd\u5728\u5927\u558a\u7334\u5b50\u56fe\u7247\u65f6\uff0c\u4f60\u6b63\u5728\u5efa\u9020GGGGGGGGGGGGGGGGGG\u3002\u60a8\u5728\u672c\u8282\u4e2d\u5b66\u5230\u7684\u5185\u5bb9 - \u4ece Solana \u7f51\u7edc\u8bfb\u53d6\u548c\u5199\u5165\u6570\u636e\uff0c\u8db3\u4ee5\u5236\u4f5c\u4ef7\u503c 1 \u4e07\u7f8e\u5143\u7684\u4ea7\u54c1\u3002\u60f3\u8c61\u4e00\u4e0b\u5728\u8fd9\u4e2a\u9879\u76ee\u7ed3\u675f\u65f6\u4f60\u80fd\u505a\u4ec0\u4e48 \ud83e\udd18"),(0,r.kt)("h2",{id:"-ship-\u6311\u6218---\u4e00\u79cdsol\u8f6c\u8d26\u811a\u672c"},"\ud83d\udea2 Ship \u6311\u6218 - \u4e00\u79cdSOL\u8f6c\u8d26\u811a\u672c"),(0,r.kt)("p",null,"\u65e2\u7136\u6211\u4eec\u5df2\u7ecf\u4e00\u8d77\u5b66\u4e60\u4e86\u5982\u4f55\u5c06\u4ea4\u6613\u53d1\u9001\u5230\u7f51\u7edc\uff0c\u73b0\u5728\u8f6e\u5230\u4f60\u72ec\u7acb\u5c1d\u8bd5\u4e86\u3002"),(0,r.kt)("p",null,"\u6309\u7167\u4e0a\u4e00\u6b65\u9aa4\u7684\u7c7b\u4f3c\u6d41\u7a0b\uff0c\u4ece\u5934\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u811a\u672c\uff0c\u4f7f\u60a8\u80fd\u591f\u5728Devnet\u4e0a\u5c06SOL\u4ece\u4e00\u4e2a\u8d26\u6237\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u8d26\u6237\u3002\u786e\u4fdd\u6253\u5370\u51fa\u4ea4\u6613\u7b7e\u540d\uff0c\u4ee5\u4fbf\u60a8\u53ef\u4ee5\u5728Solana Explorer\u4e0a\u67e5\u770b\u3002"),(0,r.kt)("p",null,"\u60f3\u60f3\u5230\u76ee\u524d\u4e3a\u6b62\u4f60\u5b66\u5230\u4e86\u4ec0\u4e48 -"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c06\u6570\u636e\u5199\u5165\u7f51\u7edc\u662f\u901a\u8fc7\u4e8b\u52a1\u8fdb\u884c\u7684"),(0,r.kt)("li",{parentName:"ul"},"\u4ea4\u6613\u9700\u8981\u6307\u4ee4"),(0,r.kt)("li",{parentName:"ul"},"\u6307\u4ee4\u544a\u8bc9\u7f51\u7edc\u5b83\u4eec\u89e6\u53ca\u54ea\u4e9b\u7a0b\u5e8f\u4ee5\u53ca\u5b83\u4eec\u7684\u529f\u80fd"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u7cfb\u7edf\u7a0b\u5e8f\u8fdb\u884cSOL\u7684\u8f6c\u79fb\uff08\u55ef\uff0c\u6211\u60f3\u77e5\u9053\u5b83\u53eb\u4ec0\u4e48\u3002\ud83e\udd14 \u8f6c\u79fb\uff1f\uff09")),(0,r.kt)("p",null,"\u60a8\u5728\u8fd9\u91cc\u6240\u9700\u8981\u505a\u7684\u5c31\u662f\u627e\u51fa\u786e\u5207\u7684\u51fd\u6570\u540d\u79f0\u662f\u4ec0\u4e48\u4ee5\u53ca\u6307\u4ee4\u5e94\u8be5\u662f\u4ec0\u4e48\u6837\u5b50\u3002\u6211\u4f1a\u4ece\u8c37\u6b4c\u5f00\u59cb\uff1aP"),(0,r.kt)("p",null,"\u9644\uff1a\u5982\u679c\u60a8\u786e\u5b9a\u5df2\u7ecf\u5f04\u6e05\u695a\u4e86\uff0c\u4f46\u8f6c\u8d26\u4ecd\u7136\u5931\u8d25\uff0c\u5219\u53ef\u80fd\u662f\u60a8\u8f6c\u8d26\u592a\u5c11 - \u5c1d\u8bd5\u81f3\u5c11\u8f6c\u8d26 0.1 SOL\u3002"),(0,r.kt)("p",null,"\u50cf\u5f80\u5e38\u4e00\u6837\uff0c\u5728\u5f15\u7528\u89e3\u51b3\u65b9\u6848\u4ee3\u7801\u4e4b\u524d\u5c1d\u8bd5\u81ea\u5df1\u6267\u884c\u6b64\u64cd\u4f5c\u3002\u5f53\u60a8\u786e\u5b9e\u9700\u8981\u53c2\u8003\u89e3\u51b3\u65b9\u6848\u65f6\uff0c",(0,r.kt)("a",{parentName:"p",href:"https://github.com/RustyCab/solana-send-sol-client"},"\u8bf7\u67e5\u770b\u6b64\u5904"),"\u3002 \ud83d\udc40"))}d.isMDXComponent=!0},6245:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/ping-solana-f389a9d2201cefa02bb91b1abd8d70a4.png"}}]);