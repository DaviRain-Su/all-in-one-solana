"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[5553],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>k});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var p=a.createContext({}),u=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=u(e.components);return a.createElement(p.Provider,{value:n},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=u(t),s=i,k=m["".concat(p,".").concat(s)]||m[s]||d[s]||r;return t?a.createElement(k,l(l({ref:n},c),{},{components:t})):a.createElement(k,l({ref:n},c))}));function k(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o[m]="string"==typeof e?e:i,l[1]=o;for(var u=2;u<r;u++)l[u]=t[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},31577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>u});var a=t(87462),i=(t(67294),t(3905));const r={sidebar_position:83,sidebar_label:"\ud83d\udee3 Anchor\u4e2d\u7684PDA",sidebar_class_name:"green"},l="\ud83d\udee3 Anchor\u4e2d\u7684PDA\uff08\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff09",o={unversionedId:"module5/program-in-anchor/pdas-in-anchor/README",id:"module5/program-in-anchor/pdas-in-anchor/README",title:"\ud83d\udee3 Anchor\u4e2d\u7684PDA\uff08\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff09",description:"\u4f60\u505a\u5f97\u5f88\u597d\uff01\u8ba9\u6211\u4eec\u7ee7\u7eed\u6df1\u5165\u63a2\u8ba8\u3002",source:"@site/docs/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/README.md",sourceDirName:"module5/program-in-anchor/pdas-in-anchor",slug:"/module5/program-in-anchor/pdas-in-anchor/",permalink:"/solana-co-learn/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/README.md",tags:[],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:83,frontMatter:{sidebar_position:83,sidebar_label:"\ud83d\udee3 Anchor\u4e2d\u7684PDA",sidebar_class_name:"green"},sidebar:"tutorialSidebar",previous:{title:"Anchor \u4e2d\u7684Program",permalink:"/solana-co-learn/Solana-Co-Learn/module5/program-in-anchor/"},next:{title:"\u4f7f\u7528Anchor PDA\u6784\u5efa",permalink:"/solana-co-learn/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/"}},p={},u=[{value:"\ud83d\udee3 Anchor\u91cc\u7684PDAs",id:"-anchor\u91cc\u7684pdas",level:2},{value:"\ud83e\uddee \u91cd\u65b0\u5206\u914d",id:"-\u91cd\u65b0\u5206\u914d",level:2},{value:"\u274c <code>close</code> \u5173\u95ed\u64cd\u4f5c",id:"-close-\u5173\u95ed\u64cd\u4f5c",level:2}],c={toc:u},m="wrapper";function d(e){let{components:n,...t}=e;return(0,i.kt)(m,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"-anchor\u4e2d\u7684pda\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740"},"\ud83d\udee3 Anchor\u4e2d\u7684PDA\uff08\u7a0b\u5e8f\u6d3e\u751f\u5730\u5740\uff09"),(0,i.kt)("p",null,"\u4f60\u505a\u5f97\u5f88\u597d\uff01\u8ba9\u6211\u4eec\u7ee7\u7eed\u6df1\u5165\u63a2\u8ba8\u3002"),(0,i.kt)("p",null,"\u672c\u8bfe\u7a0b\u4e2d\uff0c\u6211\u4eec\u5c06\u6df1\u5165\u63a2\u8ba8\u5982\u4f55\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"#[account(...)]"),"\u5c5e\u6027\uff0c\u5e76\u6df1\u5165\u4e86\u89e3\u4ee5\u4e0b\u9650\u5236\u6761\u4ef6\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"seeds")," \u548c ",(0,i.kt)("inlineCode",{parentName:"li"},"bump")," - \u521d\u59cb\u5316\u548c\u9a8c\u8bc1",(0,i.kt)("inlineCode",{parentName:"li"},"PDA")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"realloc")," - \u91cd\u65b0\u5206\u914d\u8d26\u6237\u7a7a\u95f4"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close")," - \u5173\u95ed\u8d26\u6237")),(0,i.kt)("h2",{id:"-anchor\u91cc\u7684pdas"},"\ud83d\udee3 Anchor\u91cc\u7684PDAs"),(0,i.kt)("p",null,"\u6211\u4eec\u518d\u6b21\u56de\u987e\u4e00\u4e0b\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Unboxed-Software/solana-course/blob/main/content/pda.md?utm_source=buildspace.so&utm_medium=buildspace_project"},"PDA"),"\u662f\u901a\u8fc7\u4e00\u7cfb\u5217\u53ef\u9009\u7684\u79cd\u5b50\u3001\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"bump seed"),"\u548c\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"programId"),"\u6765\u884d\u751f\u7684\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u63d0\u4f9b\u4e86\u4e00\u79cd\u65b9\u4fbf\u7684\u65b9\u5f0f\u6765\u9a8c\u8bc1\u5e26\u6709",(0,i.kt)("inlineCode",{parentName:"p"},"seeds"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\u9650\u5236\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[account(seeds = [], bump)]\npub pda_account: Account<'info, AccountType>,\n")),(0,i.kt)("p",null,"\u5728\u8d26\u6237\u9a8c\u8bc1\u8fc7\u7a0b\u4e2d\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u4f1a\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"seeds"),"\u7ea6\u675f\u4e2d\u6307\u5b9a\u7684\u79cd\u5b50\u751f\u6210\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\uff0c\u5e76\u786e\u8ba4\u4f20\u5165\u6307\u4ee4\u7684\u8d26\u6237\u662f\u5426\u4e0e\u627e\u5230\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u5339\u914d\u3002"),(0,i.kt)("p",null,"\u5f53\u5305\u542b",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\u7ea6\u675f\uff0c\u4f46\u672a\u6307\u5b9a\u5177\u4f53\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\u65f6\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u5c06\u9ed8\u8ba4\u4f7f\u7528\u89c4\u8303",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\uff08\u5373\u627e\u5230\u6709\u6548",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u7684\u7b2c\u4e00\u4e2a",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\uff09\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\n#[instruction(instruction_data: String)]\npub struct Example<'info> {\n    #[account(seeds = [b\"example-seed\", user.key().as_ref(), instruction_data.as_ref()]\n    pub pad_account: Account<'info, AccountType>,\n    #[account(mut)]\n    pub user: Signer<'info>,\n}\n")),(0,i.kt)("p",null,"\u5728\u6b64\u793a\u4f8b\u4e2d\uff0c\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"p"},"seed"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\u7ea6\u675f\u9a8c\u8bc1",(0,i.kt)("inlineCode",{parentName:"p"},"pda_account"),"\u7684\u5730\u5740\u662f\u5426\u662f\u9884\u671f\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u3002"),(0,i.kt)("p",null,"\u63a8\u5bfc",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"seeds"),"\u5305\u62ec\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"example_seed")," - \u4e00\u4e2a\u786c\u7f16\u7801\u7684\u5b57\u7b26\u4e32\u503c"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"user.key()")," - \u4f20\u5165\u8d26\u6237\u7684\u516c\u94a5 ",(0,i.kt)("inlineCode",{parentName:"li"},"user")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"instruction_data")," - \u4f20\u5165\u6307\u4ee4\u7684\u6570\u636e",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,i.kt)("inlineCode",{parentName:"li"},"#[instruction(...)]"),"\u5c5e\u6027\u6765\u8bbf\u95ee\u8fd9\u4e9b\u6570\u636e")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn example_instruction(\n    ctx: Context<Example>,\n    input_one: String,\n    input_two: String,\n    input_three: String,\n) -> Result<()> {\n    // ....\n    Ok(()\n}\n\n#[derive(Accounts)]\n#[instruction(input_one: String, input_two: String)]\npub struct Example<'info> {\n    // ...\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"#[instruction(...)]"),"\u5c5e\u6027\u65f6\uff0c\u6307\u4ee4\u6570\u636e\u5fc5\u987b\u6309\u7167\u4f20\u5165\u6307\u4ee4\u7684\u987a\u5e8f\u6392\u5217"),(0,i.kt)("li",{parentName:"ul"},"\u4f60\u53ef\u4ee5\u5ffd\u7565\u4e0d\u9700\u8981\u7684\u6700\u540e\u4e00\u4e2a\u53c2\u6570\u53ca\u5176\u4e4b\u540e\u7684\u6240\u6709\u53c2\u6570")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\n#[instruction(input_one: String, input_two: String)]\npub struct Example<'info> {\n    // ...\n}\n")),(0,i.kt)("p",null,"\u5982\u679c\u8f93\u5165\u987a\u5e8f\u9519\u8bef\uff0c\u5c06\u4f1a\u5bfc\u81f4\u9519\u8bef"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct InitializedPda<'info> {\n    #[account(\n        init,\n        seeds = [b\"example_seed\", user.key().as_ref()]\n        bump,\n        payer = user,\n        space = 8 + 8\n    )]\n    pub pda_account: Account<'info, AccountType>,\n    #[account(mut)]\n    pub user: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n\n#[account]\npub struct AccountType  {\n    pub data: u64\n}\n")),(0,i.kt)("p",null,"\u4f60\u53ef\u4ee5\u5c06",(0,i.kt)("inlineCode",{parentName:"p"},"init"),"\u7ea6\u675f\u4e0e",(0,i.kt)("inlineCode",{parentName:"p"},"seeds"),"\u548c",(0,i.kt)("inlineCode",{parentName:"p"},"bump"),"\u7ea6\u675f\u7ec4\u5408\uff0c\u4ee5\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"p"},"PDA"),"\u521d\u59cb\u5316\u8d26\u6237\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"init"),"\u7ea6\u675f\u5fc5\u987b\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7ed3\u5408\u4f7f\u7528\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"payer")," - \u6307\u5b9a\u7528\u4e8e\u652f\u4ed8\u521d\u59cb\u5316\u8d39\u7528\u7684\u8d26\u6237"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"space")," - \u65b0\u8d26\u6237\u6240\u5206\u914d\u7684\u7a7a\u95f4\u5927\u5c0f"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"system_program")," - \u5728\u8d26\u6237\u9a8c\u8bc1\u7ed3\u6784\u4e2d\u5fc5\u987b\u5b58\u5728\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"system_program"))),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c",(0,i.kt)("inlineCode",{parentName:"p"},"init"),"\u4f1a\u5c06\u521b\u5efa\u8d26\u6237\u7684\u6240\u6709\u8005\u8bbe\u7f6e\u4e3a\u5f53\u524d\u6b63\u5728\u6267\u884c\u7684\u7a0b\u5e8f\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"init"),"\u4e0e",(0,i.kt)("inlineCode",{parentName:"li"},"seeds"),"\u548c",(0,i.kt)("inlineCode",{parentName:"li"},"bump"),"\u521d\u59cb\u5316",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\u8d26\u6237\u65f6\uff0c\u6240\u6709\u8005\u5fc5\u987b\u662f\u6b63\u5728\u6267\u884c\u7684\u7a0b\u5e8f"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u662f\u56e0\u4e3a\u521b\u5efa\u8d26\u6237\u9700\u8981\u7b7e\u540d\uff0c\u53ea\u6709\u6267\u884c\u7a0b\u5e8f\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\u624d\u80fd\u63d0\u4f9b"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u7528\u4e8e\u6d3e\u751f",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"programId"),"\u4e0e\u6b63\u5728\u6267\u884c\u7684\u7a0b\u5e8f\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"programId"),"\u4e0d\u5339\u914d\uff0c\u5219",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\u8d26\u6237\u521d\u59cb\u5316\u7684\u7b7e\u540d\u9a8c\u8bc1\u5c06\u5931\u8d25"),(0,i.kt)("li",{parentName:"ul"},"\u56e0\u4e3a",(0,i.kt)("inlineCode",{parentName:"li"},"init"),"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"find_program_address"),"\u6765\u63a8\u5bfc",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\uff0c\u6240\u4ee5\u4e0d\u9700\u8981\u6307\u5b9a",(0,i.kt)("inlineCode",{parentName:"li"},"bump"),"\u503c"),(0,i.kt)("li",{parentName:"ul"},"\u8fd9\u610f\u5473\u7740",(0,i.kt)("inlineCode",{parentName:"li"},"PDA"),"\u5c06\u4f7f\u7528\u89c4\u8303\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"bump"),"\u8fdb\u884c\u63a8\u5bfc"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e3a\u6267\u884c",(0,i.kt)("inlineCode",{parentName:"li"},"Anchor"),"\u7a0b\u5e8f\u6240\u521d\u59cb\u5316\u548c\u62e5\u6709\u7684\u8d26\u6237\u5206\u914d",(0,i.kt)("inlineCode",{parentName:"li"},"space"),"\u65f6\uff0c\u8bf7\u8bb0\u4f4f\u524d8\u4e2a\u5b57\u8282\u662f\u4fdd\u7559\u7ed9\u552f\u4e00\u8d26\u6237",(0,i.kt)("inlineCode",{parentName:"li"},"discriminator"),"\u7684\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Anchor"),"\u7a0b\u5e8f\u4f7f\u7528\u8be5",(0,i.kt)("inlineCode",{parentName:"li"},"discriminator"),"\u6765\u8bc6\u522b\u7a0b\u5e8f\u8d26\u6237\u7c7b\u578b")),(0,i.kt)("h2",{id:"-\u91cd\u65b0\u5206\u914d"},"\ud83e\uddee \u91cd\u65b0\u5206\u914d"),(0,i.kt)("p",null,"\u5728\u8bb8\u591a\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u80fd\u9700\u8981\u66f4\u65b0\u73b0\u6709\u8d26\u6237\u800c\u4e0d\u662f\u521b\u5efa\u65b0\u8d26\u6237\u3002",(0,i.kt)("inlineCode",{parentName:"p"},"Anchor"),"\u63d0\u4f9b\u4e86\u51fa\u8272\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"realloc"),"\u7ea6\u675f\uff0c\u4e3a\u73b0\u6709\u8d26\u6237\u91cd\u65b0\u5206\u914d\u7a7a\u95f4\u63d0\u4f9b\u4e86\u4e00\u79cd\u7b80\u4fbf\u7684\u65b9\u6cd5\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\n#[instruction(instruction_data: String)]\npub struct ReallocExampl<'info> {\n    #[account(\n        mut,\n        seeds = [b\"example_seed\", user.key().as_ref()]\n        bump,\n        realloc = 8 + 4 + instruction_data.len(),\n        realloc::payer = user,\n        realloc::zero = false,\n    )]\n    pub pda_account: Account<'info, AccountType>,\n    #[account(mut)]\n    pub user: Signer<'info>,\n    pub system_program: Program<'info, System>,\n}\n\n#[account]\npub struct AccountType  {\n    pub data: u64\n}\n")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"realloc"),"\u7ea6\u675f\u5fc5\u987b\u4e0e\u4ee5\u4e0b\u5185\u5bb9\u7ed3\u5408\u4f7f\u7528\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"mut")," - \u8d26\u6237\u5fc5\u987b\u8bbe\u7f6e\u4e3a\u53ef\u53d8"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"realloc::payer")," - \u8d26\u6237\u7a7a\u95f4\u7684\u589e\u52a0\u6216\u51cf\u5c11\u5c06\u76f8\u5e94\u589e\u52a0\u6216\u51cf\u5c11\u8d26\u6237\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"lamports")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"realloc::zero")," - \u4e00\u4e2a\u5e03\u5c14\u503c\uff0c\u7528\u4e8e\u6307\u5b9a\u662f\u5426\u5e94\u5c06\u65b0\u5185\u5b58\u521d\u59cb\u5316\u4e3a\u96f6"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"system_program")," - ",(0,i.kt)("inlineCode",{parentName:"li"},"realloc"),"\u7ea6\u675f\u8981\u6c42\u5728\u8d26\u6237\u9a8c\u8bc1\u7ed3\u6784\u4e2d\u5b58\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"system_program"))),(0,i.kt)("p",null,"\u4f8b\u5982\uff0c\u91cd\u65b0\u5206\u914d\u7528\u4e8e\u5b58\u50a8",(0,i.kt)("inlineCode",{parentName:"p"},"String"),"\u7c7b\u578b\u5b57\u6bb5\u7684\u8d26\u6237\u7684\u7a7a\u95f4\u3002"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"\u7c7b\u578b\u65f6\uff0c\u9664\u4e86",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"\u672c\u8eab\u6240\u9700\u7684\u7a7a\u95f4\u5916\uff0c\u8fd8\u9700\u8981\u989d\u5916\u76844\u4e2a\u5b57\u8282\u6765\u5b58\u50a8",(0,i.kt)("inlineCode",{parentName:"li"},"String"),"\u7684\u957f\u5ea6"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u8d26\u6237\u6570\u636e\u957f\u5ea6\u662f\u589e\u52a0\u7684\uff0c\u4e3a\u4e86\u4fdd\u6301\u79df\u91d1\u8c41\u514d\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Lamport"),"\u5c06\u4ece",(0,i.kt)("inlineCode",{parentName:"li"},"realloc::payer"),"\u8f6c\u79fb\u5230\u7a0b\u5e8f\u8d26\u6237"),(0,i.kt)("li",{parentName:"ul"},"\u5982\u679c\u957f\u5ea6\u51cf\u5c11\uff0c",(0,i.kt)("inlineCode",{parentName:"li"},"Lamport"),"\u5c06\u4ece\u7a0b\u5e8f\u8d26\u6237\u8f6c\u56de",(0,i.kt)("inlineCode",{parentName:"li"},"realloc::payer")),(0,i.kt)("li",{parentName:"ul"},"\u9700\u8981",(0,i.kt)("inlineCode",{parentName:"li"},"realloc::zero"),"\u7ea6\u675f\u6765\u786e\u5b9a\u91cd\u65b0\u5206\u914d\u540e\u662f\u5426\u5e94\u5bf9\u65b0\u5185\u5b58\u8fdb\u884c\u96f6\u521d\u59cb\u5316"),(0,i.kt)("li",{parentName:"ul"},"\u5728\u4e4b\u524d\u51cf\u5c0f\u8fc7\u7a7a\u95f4\u7684\u8d26\u6237\u4e0a\u589e\u52a0\u7a7a\u95f4\u65f6\uff0c\u5e94\u5c06\u6b64\u7ea6\u675f\u8bbe\u7f6e\u4e3atrue")),(0,i.kt)("h2",{id:"-close-\u5173\u95ed\u64cd\u4f5c"},"\u274c ",(0,i.kt)("inlineCode",{parentName:"h2"},"close")," \u5173\u95ed\u64cd\u4f5c"),(0,i.kt)("p",null,"\u5f53\u4f60\u7528\u5b8c\u4e00\u4e2a\u8d26\u6237\u5e76\u4e0d\u518d\u9700\u8981\u5b83\u65f6\u4f1a\u53d1\u751f\u4ec0\u4e48\u5462\uff1f\u4f60\u53ef\u4ee5\u5c06\u5b83\u5173\u95ed\uff01"),(0,i.kt)("p",null,"\u901a\u8fc7\u8fd9\u6837\u505a\uff0c\u4f60\u53ef\u4ee5\u817e\u51fa\u7a7a\u95f4\uff0c\u5e76\u6536\u56de\u7528\u4e8e\u652f\u4ed8\u79df\u91d1\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"SOL"),"\uff01"),(0,i.kt)("p",null,"\u6267\u884c\u5173\u95ed\u64cd\u4f5c\u662f\u901a\u8fc7\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"close")," \u7ea6\u675f\u6765\u5b8c\u6210\u7684\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn close(ctx: Context<Close>) -> Result<()> {\n    Ok(())\n}\n\n#[derive(Accounts)]\npub struct Close<'info> {\n    #[account(mut, close = receiver)]\n    pub data_account: Account<'info, AccountType>,\n    #[account(mut)]\n    pub receiver: Signer<'info>,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"close")," \u7ea6\u675f\u4f1a\u5728\u6307\u4ee4\u6267\u884c\u7ed3\u675f\u65f6\u5c06\u8d26\u6237\u6807\u8bb0\u4e3a\u5df2\u5173\u95ed\uff0c\u5e76\u901a\u8fc7\u5c06\u5176",(0,i.kt)("inlineCode",{parentName:"li"},"discriminator"),"\u8bbe\u7f6e\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"CLOSED_ACCOUNT_DISCRIMINATOR"),"\uff0c\u540c\u65f6\u5c06\u5176 ",(0,i.kt)("inlineCode",{parentName:"li"},"lamports")," \u53d1\u9001\u5230\u7279\u5b9a\u7684\u8d26\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5c06",(0,i.kt)("inlineCode",{parentName:"li"},"discriminator"),"\u8bbe\u7f6e\u4e3a\u7279\u5b9a\u7684\u53d8\u91cf\uff0c\u4ee5\u963b\u6b62\u8d26\u6237\u590d\u6d3b\u653b\u51fb\uff08\u4f8b\u5982\uff0c\u540e\u7eed\u6307\u4ee4\u91cd\u65b0\u6dfb\u52a0\u79df\u91d1\u8c41\u514d\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"lamports"),"\uff09\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06\u5173\u95ed\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"data_account")," \u7684\u8d26\u6237\uff0c\u5e76\u5c06\u7528\u4e8e\u79df\u91d1\u7684",(0,i.kt)("inlineCode",{parentName:"li"},"lamports"),"\u53d1\u9001\u5230\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"receiver")," \u7684\u8d26\u6237\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u7136\u800c\uff0c\u76ee\u524d\u4efb\u4f55\u4eba\u90fd\u53ef\u4ee5\u8c03\u7528\u5173\u95ed\u6307\u4ee4\u5e76\u5173\u95ed ",(0,i.kt)("inlineCode",{parentName:"li"},"data_account"),"\u3002")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn close(ctx: Context<Close>) -> Result<()> {\n    Ok(())\n}\n\n#[derive(Accounts)]\npub struct Close<'info> {\n    #[account(mut, close = receiver, has_one = receiver)]\n    pub data_account: Account<'info, AccountType>,\n    #[account(mut)]\n    pub receiver: Signer<'info>,\n}\n\n#[account]\npub struct AccountType {\n    pub data: String,\n    pub receiver: PubKey,\n}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"strong"},"has_one")," \u7ea6\u675f\u53ef\u4ee5\u7528\u6765\u6838\u5b9e\u4f20\u5165\u6307\u4ee4\u7684\u8d26\u6237\u662f\u5426\u4e0e\u5b58\u50a8\u5728 ",(0,i.kt)("inlineCode",{parentName:"strong"},"data")," \u8d26\u6237\u5b57\u6bb5\u4e2d\u7684\u8d26\u6237\u5339\u914d\u3002")),(0,i.kt)("li",{parentName:"ul"},"\u4f60\u5fc5\u987b\u5728\u6240\u4f7f\u7528\u7684\u8d26\u6237\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," \u5b57\u6bb5\u4e0a\u5e94\u7528\u7279\u5b9a\u7684\u547d\u540d\u89c4\u5219\uff0c\u4ee5\u4fbf\u8fdb\u884c ",(0,i.kt)("inlineCode",{parentName:"li"},"has_one")," \u7ea6\u675f\u68c0\u67e5\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"has_one = receiver"),"\u65f6\uff1a",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u8d26\u6237\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"data")," \u9700\u8981\u6709\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"receiver")," \u7684\u5b57\u6bb5\u4e0e\u4e4b\u5339\u914d\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u5728 ",(0,i.kt)("inlineCode",{parentName:"li"},"#[derive(Accounts)]")," \u7ed3\u6784\u4e2d\uff0c\u8d26\u6237\u540d\u79f0\u4e5f\u5fc5\u987b\u79f0\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"receiver"),"\u3002"))),(0,i.kt)("li",{parentName:"ul"},"\u8bf7\u6ce8\u610f\uff0c\u867d\u7136\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"close")," \u7ea6\u675f\u53ea\u662f\u4e00\u4e2a\u4f8b\u5b50\uff0c\u4f46 ",(0,i.kt)("inlineCode",{parentName:"li"},"has_one")," \u7ea6\u675f\u53ef\u4ee5\u6709\u66f4\u5e7f\u6cdb\u7684\u7528\u9014\u3002")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"\u8fd9\u91cc\u9700\u8981\u77e5\u9053\u7684\u662f ",(0,i.kt)("inlineCode",{parentName:"p"},"has_one")," \u8fd9\u4e2a\u9650\u5236\u662f\u5f88\u6709\u7528\u7684\u3002")))}d.isMDXComponent=!0}}]);