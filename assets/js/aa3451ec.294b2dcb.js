"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[2409],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>d});var r=t(67294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function c(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,r,a=function(n,e){if(null==n)return{};var t,r,a={},o=Object.keys(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(r=0;r<o.length;r++)t=o[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=r.createContext({}),l=function(n){var e=r.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):c(c({},e),n)),t},u=function(n){var e=l(n.components);return r.createElement(s.Provider,{value:e},n.children)},p="mdxType",_={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(n,e){var t=n.components,a=n.mdxType,o=n.originalType,s=n.parentName,u=i(n,["components","mdxType","originalType","parentName"]),p=l(t),m=a,d=p["".concat(s,".").concat(m)]||p[m]||_[m]||o;return t?r.createElement(d,c(c({ref:e},u),{},{components:t})):r.createElement(d,c({ref:e},u))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var o=t.length,c=new Array(o);c[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=n,i[p]="string"==typeof n?n:a,c[1]=i;for(var l=2;l<o;l++)c[l]=t[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},49880:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>s,contentTitle:()=>c,default:()=>_,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var r=t(87462),a=(t(67294),t(3905));const o={title:"\u7f16\u5199\u7a0b\u5e8f",sidebar_position:19,tags:["solana-cook-book","program"]},c="\u7f16\u5199\u7a0b\u5e8f",i={unversionedId:"references/programs",id:"references/programs",title:"\u7f16\u5199\u7a0b\u5e8f",description:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u8f6c\u79fb SOL",source:"@site/docs/cookbook-zh/references/programs.md",sourceDirName:"references",slug:"/references/programs",permalink:"/solana-co-learn/cookbook-zh/references/programs",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/cookbook-zh/references/programs.md",tags:[{label:"solana-cook-book",permalink:"/solana-co-learn/cookbook-zh/tags/solana-cook-book"},{label:"program",permalink:"/solana-co-learn/cookbook-zh/tags/program"}],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:19,frontMatter:{title:"\u7f16\u5199\u7a0b\u5e8f",sidebar_position:19,tags:["solana-cook-book","program"]},sidebar:"tutorialSidebar",previous:{title:"\u8d26\u6237",permalink:"/solana-co-learn/cookbook-zh/references/accounts"},next:{title:"\u4ee3\u5e01",permalink:"/solana-co-learn/cookbook-zh/references/token"}},s={},l=[{value:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u8f6c\u79fb SOL",id:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u8f6c\u79fb-sol",level:2},{value:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u65f6\u949f",id:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u65f6\u949f",level:2},{value:"\u5728\u6307\u4ee4\u4e2d\u5c06\u65f6\u949f\u4f5c\u4e3a\u4e00\u4e2a\u8d26\u6237\u4f20\u9012",id:"\u5728\u6307\u4ee4\u4e2d\u5c06\u65f6\u949f\u4f5c\u4e3a\u4e00\u4e2a\u8d26\u6237\u4f20\u9012",level:3},{value:"\u5728\u6307\u4ee4\u5185\u90e8\u76f4\u63a5\u8bbf\u95ee\u65f6\u949f",id:"\u5728\u6307\u4ee4\u5185\u90e8\u76f4\u63a5\u8bbf\u95ee\u65f6\u949f",level:3},{value:"\u5982\u4f55\u66f4\u6539\u8d26\u6237\u5927\u5c0f",id:"\u5982\u4f55\u66f4\u6539\u8d26\u6237\u5927\u5c0f",level:2},{value:"\u8de8\u7a0b\u5e8f\u8c03\u7528\u7684\u65b9\u6cd5",id:"\u8de8\u7a0b\u5e8f\u8c03\u7528\u7684\u65b9\u6cd5",level:2},{value:"\u5982\u4f55\u521b\u5efaPDA",id:"\u5982\u4f55\u521b\u5efapda",level:2},{value:"\u5982\u4f55\u8bfb\u53d6\u8d26\u6237",id:"\u5982\u4f55\u8bfb\u53d6\u8d26\u6237",level:2},{value:"\u5982\u4f55\u9a8c\u8bc1\u8d26\u6237",id:"\u5982\u4f55\u9a8c\u8bc1\u8d26\u6237",level:2},{value:"\u5982\u4f55\u4ece\u4e00\u4e2a\u4ea4\u6613\u4e2d\u8bfb\u53d6\u591a\u4e2a\u6307\u4ee4",id:"\u5982\u4f55\u4ece\u4e00\u4e2a\u4ea4\u6613\u4e2d\u8bfb\u53d6\u591a\u4e2a\u6307\u4ee4",level:2}],u={toc:l},p="wrapper";function _(n){let{components:e,...t}=n;return(0,a.kt)(p,(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u7f16\u5199\u7a0b\u5e8f"},"\u7f16\u5199\u7a0b\u5e8f"),(0,a.kt)("h2",{id:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u8f6c\u79fb-sol"},"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u8f6c\u79fb SOL"),(0,a.kt)("p",null,'\u4f60\u7684Solana\u7a0b\u5e8f\u53ef\u4ee5\u5728\u4e0d"\u8c03\u7528"\u7cfb\u7edf\u7a0b\u5e8f\u7684\u60c5\u51b5\u4e0b\u5c06lamports\u4ece\u4e00\u4e2a\u8d26\u6237\u8f6c\u79fb\u7ed9\u53e6\u4e00\u4e2a\u8d26\u6237\u3002\u57fa\u672c\u89c4\u5219\u662f\uff0c\u4f60\u7684\u7a0b\u5e8f\u53ef\u4ee5\u5c06lamports\u4ece\u4f60\u7684\u7a0b\u5e8f\u6240\u62e5\u6709\u7684\u4efb\u4f55\u8d26\u6237\u8f6c\u79fb\u5230\u4efb\u4f55\u8d26\u6237\u3002'),(0,a.kt)("p",null,"\u63a5\u6536\u65b9\u8d26\u6237\u4e0d\u4e00\u5b9a\u8981\u662f\u4f60\u7684\u7a0b\u5e8f\u6240\u62e5\u6709\u7684\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"/// Transfers lamports from one account (must be program owned)\n/// to another account. The recipient can by any account\nfn transfer_service_fee_lamports(\n    from_account: &AccountInfo,\n    to_account: &AccountInfo,\n    amount_of_lamports: u64,\n) -> ProgramResult {\n    // Does the from account have enough lamports to transfer?\n    if **from_account.try_borrow_lamports()? < amount_of_lamports {\n        return Err(CustomError::InsufficientFundsForTransaction.into());\n    }\n    // Debit from_account and credit to_account\n    **from_account.try_borrow_mut_lamports()? -= amount_of_lamports;\n    **to_account.try_borrow_mut_lamports()? += amount_of_lamports;\n    Ok(())\n}\n\n/// Primary function handler associated with instruction sent\n/// to your program\nfn instruction_handler(accounts: &[AccountInfo]) -> ProgramResult {\n    // Get the 'from' and 'to' accounts\n    let account_info_iter = &mut accounts.iter();\n    let from_account = next_account_info(account_info_iter)?;\n    let to_service_account = next_account_info(account_info_iter)?;\n\n    // Extract a service 'fee' of 5 lamports for performing this instruction\n    transfer_service_fee_lamports(from_account, to_service_account, 5u64)?;\n\n    // Perform the primary instruction\n    // ... etc.\n\n    Ok(())\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u65f6\u949f"},"\u5982\u4f55\u5728\u7a0b\u5e8f\u4e2d\u83b7\u53d6\u65f6\u949f"),(0,a.kt)("p",null,"\u83b7\u53d6\u65f6\u949f\u7684\u65b9\u6cd5\u6709\u4e24\u79cd\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5c06",(0,a.kt)("inlineCode",{parentName:"li"},"SYSVAR_CLOCK_PUBKEY"),"\u4f5c\u4e3a\u6307\u4ee4\u7684\u53c2\u6570\u4f20\u5165\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5728\u6307\u4ee4\u5185\u90e8\u76f4\u63a5\u8bbf\u95ee\u65f6\u949f\u3002")),(0,a.kt)("p",null,"\u4e86\u89e3\u8fd9\u4e24\u79cd\u65b9\u6cd5\u4f1a\u5bf9\u4f60\u6709\u597d\u5904\uff0c\u56e0\u4e3a\u4e00\u4e9b\u4f20\u7edf\u7684\u7a0b\u5e8f\u4ecd\u7136\u5c06SYSVAR_CLOCK_PUBKEY\u4f5c\u4e3a\u4e00\u4e2a\u8d26\u6237\u6765\u4f7f\u7528\u3002"),(0,a.kt)("h3",{id:"\u5728\u6307\u4ee4\u4e2d\u5c06\u65f6\u949f\u4f5c\u4e3a\u4e00\u4e2a\u8d26\u6237\u4f20\u9012"},"\u5728\u6307\u4ee4\u4e2d\u5c06\u65f6\u949f\u4f5c\u4e3a\u4e00\u4e2a\u8d26\u6237\u4f20\u9012"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u4e00\u4e2a\u6307\u4ee4\uff0c\u8be5\u6307\u4ee4\u63a5\u6536\u4e00\u4e2a\u8d26\u6237\u7528\u4e8e\u521d\u59cb\u5316\uff0c\u5e76\u63a5\u6536 SYSVAR \u7684\u516c\u94a5\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let clock = Clock::from_account_info(&sysvar_clock_pubkey)?;\nlet current_timestamp = clock.unix_timestamp;\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u6211\u4eec\u901a\u8fc7\u5ba2\u6237\u7aef\u4f20\u9012\u65f6\u949f\u7684 SYSVAR \u516c\u5171\u5730\u5740:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'(async () => {\n  const programId = new PublicKey(\n    "77ezihTV6mTh2Uf3ggwbYF2NyGJJ5HHah1GrdowWJVD3"\n  );\n\n  // Passing Clock Sys Var\n  const passClockIx = new TransactionInstruction({\n    programId: programId,\n    keys: [\n      {\n        isSigner: false,\n        isWritable: true,\n        pubkey: helloAccount.publicKey,\n      },\n      {\n        is_signer: false,\n        is_writable: false,\n        pubkey: SYSVAR_CLOCK_PUBKEY,\n      },\n    ],\n  });\n\n  const transaction = new Transaction();\n  transaction.add(passClockIx);\n\n  const txHash = await connection.sendTransaction(transaction, [\n    feePayer,\n    helloAccount,\n  ]);\n\n  console.log(`Transaction succeeded. TxHash: ${txHash}`);\n})();\n')),(0,a.kt)("h3",{id:"\u5728\u6307\u4ee4\u5185\u90e8\u76f4\u63a5\u8bbf\u95ee\u65f6\u949f"},"\u5728\u6307\u4ee4\u5185\u90e8\u76f4\u63a5\u8bbf\u95ee\u65f6\u949f"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u521b\u5efa\u540c\u6837\u7684\u6307\u4ee4\uff0c\u4f46\u8fd9\u6b21\u6211\u4eec\u4e0d\u9700\u8981\u4ece\u5ba2\u6237\u7aef\u4f20\u9012",(0,a.kt)("inlineCode",{parentName:"p"},"SYSVAR_CLOCK_PUBKEY"),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let clock = Clock::get()?;\nlet current_timestamp = clock.unix_timestamp;\n")),(0,a.kt)("p",null,"\u73b0\u5728\uff0c\u5ba2\u6237\u7aef\u53ea\u9700\u8981\u4f20\u9012\u72b6\u6001\u548c\u652f\u4ed8\u8d26\u6237\u7684\u6307\u4ee4:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'(async () => {\n  const programId = new PublicKey(\n    "4ZEdbCtb5UyCSiAMHV5eSHfyjq3QwbG3yXb6oHD7RYjk"\n  );\n\n  // No more requirement to pass clock sys var key\n  const initAccountIx = new TransactionInstruction({\n    programId: programId,\n    keys: [\n      {\n        isSigner: false,\n        isWritable: true,\n        pubkey: helloAccount.publicKey,\n      },\n    ],\n  });\n\n  const transaction = new Transaction();\n  transaction.add(initAccountIx);\n\n  const txHash = await connection.sendTransaction(transaction, [\n    feePayer,\n    helloAccount,\n  ]);\n\n  console.log(`Transaction succeeded. TxHash: ${txHash}`);\n})();\n\n')),(0,a.kt)("h2",{id:"\u5982\u4f55\u66f4\u6539\u8d26\u6237\u5927\u5c0f"},"\u5982\u4f55\u66f4\u6539\u8d26\u6237\u5927\u5c0f"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"realloc"),"\u51fd\u6570\u6765\u66f4\u6539\u7a0b\u5e8f\u62e5\u6709\u7684\u8d26\u6237\u7684\u5927\u5c0f\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"realloc"),"\u51fd\u6570\u53ef\u4ee5\u5c06\u8d26\u6237\u7684\u5927\u5c0f\u8c03\u6574\u5230\u6700\u592710KB\u3002\u5f53\u4f60\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"realloc"),"\u589e\u52a0\u8d26\u6237\u7684\u5927\u5c0f\u65f6\uff0c\u4f60\u9700\u8981\u8f6c\u79fblamports\u4ee5\u4fdd\u6301\u8be5\u8d26\u6237\u7684\u79df\u91d1\u514d\u9664\u72b6\u6001\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// adding a publickey to the account\nlet new_size = pda_account.data.borrow().len() + 32;\n\nlet rent = Rent::get()?;\nlet new_minimum_balance = rent.minimum_balance(new_size);\n\nlet lamports_diff = new_minimum_balance.saturating_sub(pda_account.lamports());\ninvoke(\n    &system_instruction::transfer(funding_account.key, pda_account.key, lamports_diff),\n    &[\n        funding_account.clone(),\n        pda_account.clone(),\n        system_program.clone(),\n    ],\n)?;\n\npda_account.realloc(new_size, false)?;\n")),(0,a.kt)("h2",{id:"\u8de8\u7a0b\u5e8f\u8c03\u7528\u7684\u65b9\u6cd5"},"\u8de8\u7a0b\u5e8f\u8c03\u7528\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,"\u8de8\u7a0b\u5e8f\u8c03\u7528\uff0c\u7b80\u5355\u6765\u8bf4\uff0c\u5c31\u662f\u5728\u6211\u4eec\u7684\u7a0b\u5e8f\u4e2d\u8c03\u7528\u53e6\u4e00\u4e2a\u7a0b\u5e8f\u7684\u6307\u4ee4\u3002\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"Uniswap"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"swap"),"\u529f\u80fd\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"UniswapV2Router"),"\u5408\u7ea6\u8c03\u7528\u5fc5\u8981\u7684\u903b\u8f91\u8fdb\u884c\u4ea4\u6362\uff0c\u5e76\u8c03\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"ERC20"),"\u5408\u7ea6\u7684transfer\u51fd\u6570\u5c06\u4ee3\u5e01\u4ece\u4e00\u4e2a\u4eba\u8f6c\u79fb\u5230\u53e6\u4e00\u4e2a\u4eba\u3002\u540c\u6837\u7684\u65b9\u5f0f\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u7528\u7a0b\u5e8f\u7684\u6307\u4ee4\u6765\u5b9e\u73b0\u591a\u79cd\u76ee\u7684\u3002"),(0,a.kt)("p",null,"\u8ba9\u6211\u4eec\u6765\u770b\u770b\u6211\u4eec\u7684\u7b2c\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"SPL Token Program"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"transfer"),"\u6307\u4ee4\u3002\u8fdb\u884c\u8f6c\u8d26\u6240\u9700\u7684\u8d26\u6237\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6e90\u4ee3\u5e01\u8d26\u6237\uff08\u6211\u4eec\u6301\u6709\u4ee3\u5e01\u7684\u8d26\u6237\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u76ee\u6807\u4ee3\u5e01\u8d26\u6237\uff08\u6211\u4eec\u8981\u5c06\u4ee3\u5e01\u8f6c\u79fb\u81f3\u7684\u8d26\u6237\uff09"),(0,a.kt)("li",{parentName:"ol"},"\u6e90\u4ee3\u5e01\u8d26\u6237\u7684\u6301\u6709\u8005\uff08\u6211\u4eec\u5c06\u4e3a\u5176\u7b7e\u540d\u7684\u94b1\u5305\u5730\u5740\uff09")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let token_transfer_amount = instruction_data\n    .get(..8)\n    .and_then(|slice| slice.try_into().ok())\n    .map(u64::from_le_bytes)\n    .ok_or(ProgramError::InvalidAccountData)?;\n\nlet transfer_tokens_instruction = transfer(\n    &token_program.key,\n    &source_token_account.key,\n    &destination_token_account.key,\n    &source_token_account_holder.key,\n    &[&source_token_account_holder.key],\n    token_transfer_amount,\n)?;\n\nlet required_accounts_for_transfer = [\n    source_token_account.clone(),\n    destination_token_account.clone(),\n    source_token_account_holder.clone(),\n];\n\ninvoke(\n    &transfer_tokens_instruction,\n    &required_accounts_for_transfer,\n)?;\n")),(0,a.kt)("p",null,"\u76f8\u5e94\u7684\u5ba2\u6237\u7aef\u6307\u4ee4\u5982\u4e0b\u6240\u793a\u3002\u6709\u5173\u4e86\u89e3\u94f8\u5e01\u548c\u4ee3\u5e01\u521b\u5efa\u6307\u4ee4\uff0c\u8bf7\u53c2\u8003\u9644\u8fd1\u7684\u5b8c\u6574\u4ee3\u7801\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'(async () => {\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n  const programId = new PublicKey(\n    "EfYK91eN3AqTwY1C34W6a33qGAtQ8HJYVhNv7cV4uMZj"\n  );\n\n  const transferTokensIx = new TransactionInstruction({\n    programId: programId,\n    data: TOKEN_TRANSFER_AMOUNT_BUFFER,\n    keys: [\n      {\n        isSigner: false,\n        isWritable: true,\n        pubkey: SOURCE_TOKEN_ACCOUNT.publicKey,\n      },\n      {\n        isSigner: false,\n        isWritable: true,\n        pubkey: DESTINATION_TOKEN_ACCOUNT.publicKey,\n      },\n      {\n        isSigner: true,\n        isWritable: true,\n        pubkey: PAYER_KEYPAIR.publicKey,\n      },\n      {\n        isSigner: false,\n        isWritable: false,\n        pubkey: TOKEN_PROGRAM_ID,\n      },\n    ],\n  });\n\n  const transaction = new Transaction();\n  transaction.add(transferTokensIx);\n\n  const txHash = await connection.sendTransaction(transaction, [\n    PAYER_KEYPAIR,\n    TOKEN_MINT_ACCOUNT,\n    SOURCE_TOKEN_ACCOUNT,\n    DESTINATION_TOKEN_ACCOUNT,\n  ]);\n\n  console.log(`Token transfer CPI success: ${txHash}`);\n})();\n\n')),(0,a.kt)("p",null,"\u73b0\u5728\u8ba9\u6211\u4eec\u6765\u770b\u53e6\u4e00\u4e2a\u4f8b\u5b50\uff0c\u5373",(0,a.kt)("inlineCode",{parentName:"p"},"System Program"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"create_account"),"\u6307\u4ee4\u3002\u8fd9\u91cc\u4e0e\u4e0a\u9762\u63d0\u5230\u7684\u6307\u4ee4\u6709\u4e00\u70b9\u4e0d\u540c\u3002\u5728\u4e0a\u8ff0\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u5728",(0,a.kt)("inlineCode",{parentName:"p"},"invoke"),"\u51fd\u6570\u4e2d\u5c06",(0,a.kt)("inlineCode",{parentName:"p"},"token_program"),"\u4f5c\u4e3a\u8d26\u6237\u4e4b\u4e00\u4f20\u9012\u3002\u7136\u800c\uff0c\u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u60a8\u9700\u8981\u4f20\u9012\u8c03\u7528\u6307\u4ee4\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"program_id"),"\u3002\u5728\u6211\u4eec\u7684\u4f8b\u5b50\u4e2d\uff0c\u5b83\u5c06\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"System Program"),"\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"program_id"),'\uff08"11111111111111111111111111111111"\uff09\u3002\u6240\u4ee5\u73b0\u5728\u6240\u9700\u7684\u8d26\u6237\u5305\u62ec\uff1a'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let account_span = instruction_data\n    .get(..8)\n    .and_then(|slice| slice.try_into().ok())\n    .map(u64::from_le_bytes)\n    .ok_or(ProgramError::InvalidAccountData)?;\n\nlet lamports_required = (Rent::get()?).minimum_balance(account_span as usize);\n\nlet create_account_instruction = create_account(\n    &payer_account.key,\n    &general_state_account.key,\n    lamports_required,\n    account_span,\n    program_id,\n);\n\nlet required_accounts_for_create = [\n    payer_account.clone(),\n    general_state_account.clone(),\n    system_program.clone(),\n];\n\ninvoke(&create_account_instruction, &required_accounts_for_create)?;\n\n")),(0,a.kt)("p",null,"\u5bf9\u5e94\u7684\u5ba2\u6237\u7aef\u4ee3\u7801\u5982\u4e0b\u6240\u793a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'(async () => {\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n  const programId = new PublicKey(\n    "DkuQ5wsndkzXfgqDB6Lgf4sDjBi4gkLSak1dM5Mn2RuQ"\n  );\n\n  // Airdropping some SOL\n  await connection.confirmTransaction(\n    await connection.requestAirdrop(PAYER_KEYPAIR.publicKey, LAMPORTS_PER_SOL)\n  );\n\n  // Our program\'s CPI instruction (create_account)\n  const creataAccountIx = new TransactionInstruction({\n    programId: programId,\n    data: ACCOUNT_SPACE_BUFFER,\n    keys: [\n      {\n        isSigner: true,\n        isWritable: true,\n        pubkey: PAYER_KEYPAIR.publicKey,\n      },\n      {\n        isSigner: true,\n        isWritable: true,\n        pubkey: GENERAL_STATE_KEYPAIR.publicKey,\n      },\n      {\n        isSigner: false,\n        isWritable: false,\n        pubkey: SystemProgram.programId,\n      },\n    ],\n  });\n\n  const transaction = new Transaction();\n  // Adding up all the above instructions\n  transaction.add(creataAccountIx);\n\n  const txHash = await connection.sendTransaction(transaction, [\n    PAYER_KEYPAIR,\n    GENERAL_STATE_KEYPAIR,\n  ]);\n\n  console.log(`Create Account CPI Success: ${txHash}`);\n})();\n')),(0,a.kt)("h2",{id:"\u5982\u4f55\u521b\u5efapda"},"\u5982\u4f55\u521b\u5efaPDA"),(0,a.kt)("p",null,'\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff08Program Derived Address\uff0cPDA\uff09\u662f\u7a0b\u5e8f\u62e5\u6709\u7684\u8d26\u6237\uff0c\u4f46\u6ca1\u6709\u79c1\u94a5\u3002\u76f8\u53cd\uff0c\u5b83\u7684\u7b7e\u540d\u662f\u901a\u8fc7\u4e00\u7ec4\u79cd\u5b50\u548c\u4e00\u4e2a\u963b\u788d\u503c\uff08\u4e00\u4e2a\u786e\u4fdd\u5176\u4e0d\u5728\u66f2\u7ebf\u4e0a\u7684\u968f\u673a\u6570\uff09\u83b7\u53d6\u7684\u3002"\u751f\u6210"\u7a0b\u5e8f\u5730\u5740\u4e0e"\u521b\u5efa"\u5b83\u662f\u4e0d\u540c\u7684\u3002\u53ef\u4ee5\u4f7f\u7528',(0,a.kt)("inlineCode",{parentName:"p"},"Pubkey::find_program_address"),"\u6765\u751f\u6210PDA\u3002\u521b\u5efaPDA\u5b9e\u8d28\u4e0a\u610f\u5473\u7740\u521d\u59cb\u5316\u8be5\u5730\u5740\u7684\u7a7a\u95f4\u5e76\u5c06\u5176\u72b6\u6001\u8bbe\u7f6e\u4e3a\u521d\u59cb\u72b6\u6001\u3002\u666e\u901a\u7684\u5bc6\u94a5\u5bf9\u8d26\u6237\u53ef\u4ee5\u5728\u6211\u4eec\u7684\u7a0b\u5e8f\u4e4b\u5916\u521b\u5efa\uff0c\u7136\u540e\u5c06\u5176\u7528\u4e8e\u521d\u59cb\u5316PDA\u7684\u72b6\u6001\u3002\u4e0d\u5e78\u7684\u662f\uff0c\u5bf9\u4e8ePDA\u6765\u8bf4\uff0c\u5b83\u5fc5\u987b\u5728\u94fe\u4e0a\u521b\u5efa\uff0c\u56e0\u4e3a\u5b83\u672c\u8eab\u65e0\u6cd5\u4ee3\u8868\u81ea\u5df1\u8fdb\u884c\u7b7e\u540d\u3002\u56e0\u6b64\uff0c\u6211\u4eec\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"invoke_signed"),"\u6765\u4f20\u9012PDA\u7684\u79cd\u5b50\uff0c\u4ee5\u53ca\u8d44\u91d1\u8d26\u6237\u7684\u7b7e\u540d\uff0c\u4ece\u800c\u5b9e\u73b0\u4e86PDA\u7684\u8d26\u6237\u521b\u5efa\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let create_pda_account_ix = system_instruction::create_account(\n    &funding_account.key,\n    &pda_account.key,\n    lamports_required,\n    ACCOUNT_DATA_LEN.try_into().unwrap(),\n    &program_id,\n);\n\ninvoke_signed(\n    &create_pda_account_ix,\n    &[funding_account.clone(), pda_account.clone()],\n    &[signers_seeds],\n)?;\n")),(0,a.kt)("p",null,"\u53ef\u4ee5\u901a\u8fc7\u5ba2\u6237\u7aef\u6309\u5982\u4e0b\u65b9\u5f0f\u53d1\u9001\u6240\u9700\u7684\u8d26\u6237\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const PAYER_KEYPAIR = Keypair.generate();\n\n(async () => {\n  const connection = new Connection(clusterApiUrl("devnet"), "confirmed");\n  const programId = new PublicKey(\n    "6eW5nnSosr2LpkUGCdznsjRGDhVb26tLmiM1P8RV1QQp"\n  );\n\n  const [pda, bump] = await PublicKey.findProgramAddress(\n    [Buffer.from("customaddress"), PAYER_KEYPAIR.publicKey.toBuffer()],\n    programId\n  );\n\n  const createPDAIx = new TransactionInstruction({\n    programId: programId,\n    data: Buffer.from(Uint8Array.of(bump)),\n    keys: [\n      {\n        isSigner: true,\n        isWritable: true,\n        pubkey: PAYER_KEYPAIR.publicKey,\n      },\n      {\n        isSigner: false,\n        isWritable: true,\n        pubkey: pda,\n      },\n      {\n        isSigner: false,\n        isWritable: false,\n        pubkey: SystemProgram.programId,\n      },\n    ],\n  });\n\n  const transaction = new Transaction();\n  transaction.add(createPDAIx);\n\n  const txHash = await connection.sendTransaction(transaction, [PAYER_KEYPAIR]);\n})();\n')),(0,a.kt)("h2",{id:"\u5982\u4f55\u8bfb\u53d6\u8d26\u6237"},"\u5982\u4f55\u8bfb\u53d6\u8d26\u6237"),(0,a.kt)("p",null,"\u5728Solana\u4e2d\uff0c\u51e0\u4e4e\u6240\u6709\u7684\u6307\u4ee4\u90fd\u81f3\u5c11\u9700\u89812-3\u4e2a\u8d26\u6237\uff0c\u5e76\u4e14\u5728\u6307\u4ee4\u5904\u7406\u7a0b\u5e8f\u4e2d\u4f1a\u8bf4\u660e\u5b83\u671f\u671b\u7684\u8d26\u6237\u987a\u5e8f\u3002\u5982\u679c\u6211\u4eec\u5229\u7528Rust\u4e2d\u7684",(0,a.kt)("inlineCode",{parentName:"p"},"iter()"),"\u65b9\u6cd5\uff0c\u800c\u4e0d\u662f\u624b\u52a8\u7d22\u5f15\u8d26\u6237\uff0c\u90a3\u4e48\u8fd9\u5c06\u975e\u5e38\u7b80\u5355\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"next_account_info"),"\u65b9\u6cd5\u57fa\u672c\u4e0a\u662f\u5bf9\u53ef\u8fed\u4ee3\u5bf9\u8c61\u7684\u7b2c\u4e00\u4e2a\u7d22\u5f15\u8fdb\u884c\u5207\u7247\uff0c\u5e76\u8fd4\u56de\u8d26\u6237\u6570\u7ec4\u4e2d\u5b58\u5728\u7684\u8d26\u6237\u3002\u8ba9\u6211\u4eec\u770b\u4e00\u4e2a\u7b80\u5355\u7684\u6307\u4ee4\uff0c\u5b83\u671f\u671b\u4e00\u5806\u8d26\u6237\u5e76\u9700\u8981\u89e3\u6790\u6bcf\u4e2a\u8d26\u6237\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn process_instruction(\n    _program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {\n    // Fetching all the accounts as a iterator (facilitating for loops and iterations)\n    let accounts_iter = &mut accounts.iter();\n    // Payer account\n    let payer_account = next_account_info(accounts_iter)?;\n    // Hello state account\n    let hello_state_account = next_account_info(accounts_iter)?;\n    // Rent account\n    let rent_account = next_account_info(accounts_iter)?;\n    // System Program\n    let system_program = next_account_info(accounts_iter)?;\n\n    Ok(())\n}\n")),(0,a.kt)("h2",{id:"\u5982\u4f55\u9a8c\u8bc1\u8d26\u6237"},"\u5982\u4f55\u9a8c\u8bc1\u8d26\u6237"),(0,a.kt)("p",null,"\u7531\u4e8eSolana\u4e2d\u7684\u7a0b\u5e8f\u662f\u65e0\u72b6\u6001\u7684\uff0c\u4f5c\u4e3a\u7a0b\u5e8f\u521b\u5efa\u8005\uff0c\u6211\u4eec\u5fc5\u987b\u5c3d\u53ef\u80fd\u9a8c\u8bc1\u4f20\u9012\u7684\u8d26\u6237\uff0c\u4ee5\u907f\u514d\u4efb\u4f55\u6076\u610f\u8d26\u6237\u7684\u8fdb\u5165\u3002\u53ef\u4ee5\u8fdb\u884c\u7684\u57fa\u672c\u68c0\u67e5\u5305\u62ec\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u9884\u671f\u7684\u7b7e\u540d\u8d26\u6237\u662f\u5426\u5df2\u7b7e\u540d\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u9884\u671f\u7684\u72b6\u6001\u8d26\u6237\u662f\u5426\u5df2\u6807\u8bb0\u4e3a\u53ef\u5199\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u9884\u671f\u7684\u72b6\u6001\u8d26\u6237\u7684\u6240\u6709\u8005\u662f\u5426\u4e3a\u8c03\u7528\u7a0b\u5e8f\u7684\u7a0b\u5e8fID\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u5982\u679c\u9996\u6b21\u521d\u59cb\u5316\u72b6\u6001\uff0c\u8bf7\u68c0\u67e5\u8d26\u6237\u662f\u5426\u5df2\u7ecf\u521d\u59cb\u5316\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u68c0\u67e5\u662f\u5426\u6309\u9884\u671f\u4f20\u9012\u4e86\u4efb\u4f55\u8de8\u7a0b\u5e8f\u7684ID\uff08\u5728\u9700\u8981\u65f6\uff09\u3002")),(0,a.kt)("p",null,"\u4e0b\u9762\u662f\u4e00\u4e2a\u57fa\u672c\u7684\u6307\u4ee4\uff0c\u5b83\u4f7f\u7528\u4e0a\u8ff0\u68c0\u67e5\u521d\u59cb\u5316\u82f1\u96c4\u72b6\u6001\u8d26\u6237\u7684\u793a\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn process_instruction(\n    program_id: &Pubkey,\n    accounts: &[AccountInfo],\n    _instruction_data: &[u8],\n) -> ProgramResult {\n    let accounts_iter = &mut accounts.iter();\n    let payer_account = next_account_info(accounts_iter)?;\n    let hello_state_account = next_account_info(accounts_iter)?;\n    let system_program = next_account_info(accounts_iter)?;\n\n    let rent = Rent::get()?;\n\n    // Checking if payer account is the signer\n    if !payer_account.is_signer {\n        return Err(ProgramError::MissingRequiredSignature);\n    }\n\n    // Checking if hello state account is rent exempt\n    if !rent.is_exempt(hello_state_account.lamports(), 1) {\n        return Err(ProgramError::AccountNotRentExempt);\n    }\n\n    // Checking if hello state account is writable\n    if !hello_state_account.is_writable {\n        return Err(ProgramError::InvalidAccountData);\n    }\n\n    // Checking if hello state account\'s owner is the current program\n    if hello_state_account.owner.ne(&program_id) {\n        return Err(ProgramError::IllegalOwner);\n    }\n\n    // Checking if the system program is valid\n    if system_program.key.ne(&SYSTEM_PROGRAM_ID) {\n        return Err(ProgramError::IncorrectProgramId);\n    }\n\n    let mut hello_state = HelloState::try_from_slice(&hello_state_account.data.borrow())?;\n\n    // Checking if the state has already been initialized\n    if hello_state.is_initialized {\n        return Err(ProgramError::AccountAlreadyInitialized);\n    }\n\n    hello_state.is_initialized = true;\n    hello_state.serialize(&mut &mut hello_state_account.data.borrow_mut()[..])?;\n    msg!("Account initialized :)");\n\n    Ok(())\n}\n')),(0,a.kt)("h2",{id:"\u5982\u4f55\u4ece\u4e00\u4e2a\u4ea4\u6613\u4e2d\u8bfb\u53d6\u591a\u4e2a\u6307\u4ee4"},"\u5982\u4f55\u4ece\u4e00\u4e2a\u4ea4\u6613\u4e2d\u8bfb\u53d6\u591a\u4e2a\u6307\u4ee4"),(0,a.kt)("p",null,"Solana\u5141\u8bb8\u6211\u4eec\u67e5\u770b\u5f53\u524d\u4ea4\u6613\u4e2d\u7684\u6240\u6709\u6307\u4ee4\u3002\u6211\u4eec\u53ef\u4ee5\u5c06\u5b83\u4eec\u5b58\u50a8\u5728\u4e00\u4e2a\u53d8\u91cf\u4e2d\uff0c\u5e76\u5bf9\u5176\u8fdb\u884c\u8fed\u4ee3\u3002\u6211\u4eec\u53ef\u4ee5\u5229\u7528\u8fd9\u4e00\u70b9\u505a\u8bb8\u591a\u4e8b\u60c5\uff0c\u6bd4\u5982\u68c0\u67e5\u53ef\u7591\u7684\u4ea4\u6613\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"let mut idx = 0;\nlet num_instructions = read_u16(&mut idx, &instruction_sysvar)\n.map_err(|_| MyError::NoInstructionFound)?;\n\n\nfor index in 0..num_instructions {\n\n    let mut current = 2 + (index * 2) as usize;\n    let start = read_u16(&mut current, &instruction_sysvar).unwrap();\n\n    current = start as usize;\n    let num_accounts = read_u16(&mut current, &instruction_sysvar).unwrap();\n    current += (num_accounts as usize) * (1 + 32);\n\n}\n")))}_.isMDXComponent=!0}}]);