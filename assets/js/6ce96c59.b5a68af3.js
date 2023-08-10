"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7483],{3905:(n,e,t)=>{t.d(e,{Zo:()=>u,kt:()=>k});var a=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,a,o=function(n,e){if(null==n)return{};var t,a,o={},r=Object.keys(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(a=0;a<r.length;a++)t=r[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var p=a.createContext({}),l=function(n){var e=a.useContext(p),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},u=function(n){var e=l(n.components);return a.createElement(p.Provider,{value:e},n.children)},s="mdxType",m={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(n,e){var t=n.components,o=n.mdxType,r=n.originalType,p=n.parentName,u=c(n,["components","mdxType","originalType","parentName"]),s=l(t),d=o,k=s["".concat(p,".").concat(d)]||s[d]||m[d]||r;return t?a.createElement(k,i(i({ref:e},u),{},{components:t})):a.createElement(k,i({ref:e},u))}));function k(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var r=t.length,i=new Array(r);i[0]=d;var c={};for(var p in e)hasOwnProperty.call(e,p)&&(c[p]=e[p]);c.originalType=n,c[s]="string"==typeof n?n:o,i[1]=c;for(var l=2;l<r;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7265:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>l});var a=t(7462),o=(t(7294),t(3905));const r={},i=void 0,c={unversionedId:"Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/README",id:"Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/README",title:"README",description:"---",source:"@site/docs/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/README.md",sourceDirName:"Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor",slug:"/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Solana-Co-Learn/module5/program-in-anchor/cpis-in-anchor/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"README",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/"},next:{title:"Anchor on the front-end",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/anchor-on-the-front-end/"}},p={},l=[{value:"sidebar_class_name: green",id:"sidebar_class_name-green",level:2},{value:"\u274c \u951a\u70b9\u9519\u8bef",id:"-\u951a\u70b9\u9519\u8bef",level:2},{value:"<code>constraint</code> \u7ea6\u675f",id:"constraint-\u7ea6\u675f",level:3}],u={toc:l},s="wrapper";function m(n){let{components:e,...t}=n;return(0,o.kt)(s,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("hr",null),(0,o.kt)("p",null,"sidebar_position: 85\nsidebar_label: \ud83d\udd00 Anchor\u7684CPIs"),(0,o.kt)("h2",{id:"sidebar_class_name-green"},"sidebar_class_name: green"),(0,o.kt)("h1",{id:"-anchor\u7684cpis"},"\ud83d\udd00 Anchor\u7684CPIs"),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u6dfb\u52a0",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u6765\u63d0\u5347\u7b49\u7ea7\u3002"),(0,o.kt)("p",null,"\u56de\u60f3\u4e00\u4e0b\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u662f\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke_signed")," \u5236\u4f5c\u7684\u3002"),(0,o.kt)("p",null,"Anchor\u8fd8\u63d0\u4f9b\u4e86\u4e00\u79cd\u5236\u4f5c",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u7684\u683c\u5f0f\u3002\u4f7f\u7528\u8fd9\u79cd\u683c\u5f0f\u9700\u8981\u8bbf\u95ee\u6240\u8c03\u7528\u7a0b\u5e8f\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u6a21\u5757\u3002\u5e38\u89c1\u7684\u7a0b\u5e8f\u6709\u4e00\u4e2a\u4f60\u53ef\u4ee5\u4f7f\u7528\u7684\u5305\uff0c\u4f8b\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"anchor_spl")," \u7528\u4e8e\u4ee4\u724c\u7a0b\u5e8f\u3002\u5426\u5219\uff0c\u4f60\u5c06\u9700\u8981\u4f7f\u7528\u6240\u8c03\u7528\u7a0b\u5e8f\u7684\u6e90\u4ee3\u7801\u6216\u5df2\u53d1\u5e03\u7684",(0,o.kt)("inlineCode",{parentName:"p"},"IDL"),"\u6765\u751f\u6210",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u6a21\u5757\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u53ef\u7528\u7684CPI\u6a21\u5757\uff0c\u60a8\u4ecd\u7136\u53ef\u4ee5\u76f4\u63a5\u5728\u6307\u4ee4\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke_signed")," \u3002\u5c31\u50cf\u951a\u5b9a\u6307\u4ee4\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"Context")," \u7c7b\u578b\u4e00\u6837\uff0c\u951a\u5b9aCPI\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext")," \u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext"),"\u63d0\u4f9b\u4e86\u6307\u4ee4\u6240\u9700\u7684\u6240\u6709\u8d26\u6237\u548c\u79cd\u5b50\u3002\u5f53\u6ca1\u6709PDA\u7b7e\u540d\u8005\u65f6\uff0c\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new"),"\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"CpiContext::new(cpi_program, cpi_accounts)\n")),(0,o.kt)("p",null,"\u5f53\u9700\u8981\u4e00\u4e2aPDA\u4f5c\u4e3a\u7b7e\u540d\u8005\u65f6\uff0c\u4f7f\u7528 CpiContext::new_with_signer \u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"CpiContext::new_with_signer(cpi_program, cpi_accounts, seeds)\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accounts")," - \u8d26\u6237\u5217\u8868"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"remaining_accounts")," - \u5982\u679c\u6709\u7684\u8bdd"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"program")," - \u7a0b\u5e8f\u6b63\u5728\u8c03\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"CPI")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"signer_seeds")," - \u5982\u679c\u9700\u8981\u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"li"},"PDA"),"\u7b7e\u7f72",(0,o.kt)("inlineCode",{parentName:"li"},"CPI"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub struct CpiContext<'a, 'b, 'c, 'info, T>\nwhere\n    T: ToAccountMetas + ToAccountInfos<'info>,\n{\n    pub accounts: T,\n    pub remaining_accounts: Vec<AccountInfo<'info>>,\n    pub program: AccountInfo<'info>,\n    pub signer_seeds: &'a [&'b [&'c [u8]]],\n}\n")),(0,o.kt)("p",null,"\u5f53\u4e0d\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"signer_seeds")," \u65f6\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new")," \uff08\u4e0d\u4f7f\u7528PDA\u7b7e\u540d\uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new(\n    program: AccountInfo<'info>,\n    accounts: T\n    ) -> Self {\n        Self {\n            accounts,\n            program,\n            remaining_accounts: Vec::new(),\n            signer_seeds: &[],\n        }\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext::new_with_signer")," \u7528\u4e8e\u79cd\u5b50\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"PDA"),"\u4e0a\u7b7e\u540d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn new_with_signer(\n        program: AccountInfo<'info>,\n        accounts: T,\n        signer_seeds: &'a [&'b [&'c [u8]]],\n    ) -> Self {\n        Self {\n            accounts,\n            program,\n            signer_seeds,\n            remaining_accounts: Vec::new(),\n        }\n    }\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"anchor_spl")," \u5305\u542b\u4e00\u4e2a ",(0,o.kt)("inlineCode",{parentName:"p"},"token")," \u6a21\u5757\uff0c\u7528\u4e8e\u7b80\u5316\u521b\u5efa",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u5230\u4ee4\u724c\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Structs")," \u8fd9\u662f\u6bcf\u4e2a\u76f8\u5e94\u7684\u4ee4\u724c\u7a0b\u5e8f\u6307\u4ee4\u6240\u9700\u7684\u8d26\u6237\u5217\u8868\u3002",(0,o.kt)("inlineCode",{parentName:"p"},"Functions")," \u8fd9\u662f\u6bcf\u4e2a\u76f8\u5e94\u6307\u4ee4\u7684CPI\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u8fd9\u91cc",(0,o.kt)("inlineCode",{parentName:"p"},"MintTo"),"\u662f\u6240\u9700\u7684\u8d26\u6237\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct MintTo<'info> {\n    pub mint: AccountInfo<'info>,\n    pub to: AccountInfo<'info>,\n    pub authority: AccountInfo<'info>,\n}\n")),(0,o.kt)("p",null,"\u8ba9\u6211\u4eec\u4e5f\u6765\u770b\u770b",(0,o.kt)("inlineCode",{parentName:"p"},"mint_to"),"\u5f15\u64ce\u7684\u5185\u90e8\u3002"),(0,o.kt)("p",null,"\u5b83\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"CpiContext")," \u6765\u6784\u5efa\u4e00\u4e2a",(0,o.kt)("inlineCode",{parentName:"p"},"CPI"),"\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"mint_to")," \u6307\u4ee4\u3002\u5b83\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"invoke_signed")," \u6765\u5236\u4f5cCPI\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"pub fn mint_to<'a, 'b, 'c, 'info>(\n    ctx: CpiContext<'a, 'b, 'c, 'info, MintTo<'info>>,\n    amount: u64,\n) -> Result<()> {\n    let ix = spl_token::instruction::mint_to(\n        &spl_token::ID,\n        ctx.accounts.mint.key,\n        ctx.accounts.to.key,\n        ctx.accounts.authority.key,\n        &[],\n        amount,\n    )?;\n    solana_program::program::invoke_signed(\n        &ix,\n        &[\n            ctx.accounts.to.clone(),\n            ctx.accounts.mint.clone(),\n            ctx.accounts.authority.clone(),\n        ],\n        ctx.signer_seeds,\n    )\n    .map_err(Into::into)\n}\n")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mint_to CPI"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'let auth_bump = *ctx.bumps.get("mint_authority").unwrap();\nlet seeds = &[\n    b"mint".as_ref(),\n    &[auth_bump],\n];\nlet signer = &[&seeds[..]];\n\nlet cpi_program = ctx.accounts.token_program.to_account_info();\n\nlet cpi_accounts = MintTo {\n    mint: ctx.accounts.token_mint.to_account_info(),\n    to: ctx.accounts.token_account.to_account_info(),\n    authority: ctx.accounts.mint_authority.to_account_info()\n};\n\nlet cpi_ctx = CpiContext::new_with_signer(cpi_program, cpi_accounts, signer);\n\ntoken::mint_to(cpi_ctx, amount)?;\n')),(0,o.kt)("p",null,"\u91cd\u6784\u8fd9\u4e2a\u6211\u4eec\u5f97\u5230\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'token::mint_to(\n    CpiContext::new_with_signer(\n        ctx.accounts.token_program.to_account_info(),\n        token::MintTo {\n            mint: ctx.accounts.mint_account.to_account_info(),\n            to: ctx.accounts.token_account.to_account_info(),\n            authority: ctx.accounts.mint_authority.to_account_info(),\n        },\n        &[&[\n            b"mint",\n            &[*ctx.bumps.get("mint_authority").unwrap()],\n        ]]\n    ),\n    amount,\n)?;\n')),(0,o.kt)("h2",{id:"-\u951a\u70b9\u9519\u8bef"},"\u274c \u951a\u70b9\u9519\u8bef"),(0,o.kt)("p",null,"\u9519\u8bef\u53ef\u4ee5\u5206\u4e3a\u4ee5\u4e0b\u51e0\u79cd\u7c7b\u578b\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"anchor\u6846\u67b6\u4ece\u5176\u81ea\u8eab\u4ee3\u7801\u5185\u90e8\u8fd4\u56de\u7684\u5185\u90e8\u9519\u8bef"),(0,o.kt)("li",{parentName:"ul"},"\u7528\u6237\uff08\u4f60\uff01\uff09\u53ef\u4ee5\u8fd4\u56de\u7684\u81ea\u5b9a\u4e49\u9519\u8bef")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"AnchorErrors"),"\u63d0\u4f9b\u4e86\u5404\u79cd\u4fe1\u606f\uff0c\u4f8b\u5982\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9519\u8bef\u540d\u79f0\u548c\u7f16\u53f7"),(0,o.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4e2d\u629b\u51fa\u951a\u7684\u4f4d\u7f6e"),(0,o.kt)("li",{parentName:"ul"},"\u8fdd\u53cd\u7ea6\u675f\u6761\u4ef6\u7684\u8d26\u6237")),(0,o.kt)("p",null,"\u6700\u7ec8\uff0c\u6240\u6709\u7684\u7a0b\u5e8f\u90fd\u4f1a\u8fd4\u56de\u76f8\u540c\u7684\u9519\u8bef\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/solana-program/latest/solana_program/program_error/enum.ProgramError.html?utm_source=buildspace.so&utm_medium=buildspace_project"},"ProgramError"),"\u3002"),(0,o.kt)("p",null,"Anchor\u6709\u8bb8\u591a\u4e0d\u540c\u7684\u5185\u90e8\u9519\u8bef\u4ee3\u7801\u3002\u8fd9\u4e9b\u4ee3\u7801\u4e0d\u662f\u4e3a\u7528\u6237\u4f7f\u7528\u7684\uff0c\u4f46\u7814\u7a76\u53c2\u8003\u8d44\u6599\u4ee5\u4e86\u89e3\u4ee3\u7801\u548c\u5176\u539f\u56e0\u4e4b\u95f4\u7684\u6620\u5c04\u662f\u5f88\u6709\u7528\u7684\u3002"),(0,o.kt)("p",null,"\u81ea\u5b9a\u4e49\u9519\u8bef\u4ee3\u7801\u7f16\u53f7\u4ece\u81ea\u5b9a\u4e49\u9519\u8bef\u504f\u79fb\u91cf\u5f00\u59cb\u3002"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"error_code")," \u5c5e\u6027\u4e3a\u60a8\u7684\u7a0b\u5e8f\u6dfb\u52a0\u72ec\u7279\u7684\u9519\u8bef\u3002\u53ea\u9700\u5c06\u5176\u6dfb\u52a0\u5230\u4e00\u4e2a\u60a8\u9009\u62e9\u7684\u679a\u4e3e\u4e2d\u5373\u53ef\u3002\u7136\u540e\uff0c\u60a8\u53ef\u4ee5\u5c06\u679a\u4e3e\u7684\u53d8\u4f53\u7528\u4f5c\u7a0b\u5e8f\u4e2d\u7684\u9519\u8bef\u3002"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528 msg \u4e3a\u5404\u4e2a\u53d8\u4f53\u6dfb\u52a0\u6d88\u606f\u3002\u5982\u679c\u53d1\u751f\u9519\u8bef\uff0c\u5ba2\u6237\u7aef\u5c06\u663e\u793a\u6b64\u9519\u8bef\u6d88\u606f\u3002\u8981\u5b9e\u9645\u629b\u51fa\u9519\u8bef\uff0c\u8bf7\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"err!")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"error!")," \u5b8f\u3002\u8fd9\u4e9b\u5b8f\u4f1a\u5c06\u6587\u4ef6\u548c\u884c\u4fe1\u606f\u6dfb\u52a0\u5230\u9519\u8bef\u4e2d\uff0c\u7136\u540e\u7531",(0,o.kt)("inlineCode",{parentName:"p"},"anchor"),"\u8bb0\u5f55\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {\n        if data.data >= 100 {\n            return err!(MyError::DataTooLarge);\n        }\n        ctx.accounts.my_account.set_inner(data);\n        Ok(())\n    }\n}\n\n#[error_code]\npub enum MyError {\n    #[msg("MyAccount may only hold data below 100")]\n    DataTooLarge\n}\n')),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"require")," \u5b8f\u6765\u7b80\u5316\u7f16\u5199\u9519\u8bef\u3002\u4e0a\u9762\u7684\u4ee3\u7801\u53ef\u4ee5\u7b80\u5316\u4e3a\u8fd9\u6837\uff08\u8bf7\u6ce8\u610f ",(0,o.kt)("inlineCode",{parentName:"p"},">=")," \u7ffb\u8f6c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"<")," \uff09\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},'#[program]\nmod hello_anchor {\n    use super::*;\n    pub fn set_data(ctx: Context<SetData>, data: MyAccount) -> Result<()> {\n        require!(data.data < 100, MyError::DataTooLarge);\n        ctx.accounts.my_account.set_inner(data);\n        Ok(())\n    }\n}\n\n#[error_code]\npub enum MyError {\n    #[msg("MyAccount may only hold data below 100")]\n    DataTooLarge\n}\n')),(0,o.kt)("h3",{id:"constraint-\u7ea6\u675f"},(0,o.kt)("inlineCode",{parentName:"h3"},"constraint")," \u7ea6\u675f"),(0,o.kt)("p",null,"\u5982\u679c\u8d26\u6237\u4e0d\u5b58\u5728\uff0c\u5219\u521d\u59cb\u5316\u4e00\u4e2a\u8d26\u6237\u3002\u5982\u679c\u8d26\u6237\u5df2\u5b58\u5728\uff0c\u5219\u4ecd\u9700\u68c0\u67e5\u5176\u4ed6\u9650\u5236\u6761\u4ef6\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u81ea\u5df1\u7684\u7f16\u8f91\u5668\uff0c\u60a8\u5fc5\u987b\u5728 ",(0,o.kt)("inlineCode",{parentName:"p"},"anchor-lang")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \u4e2d\u6dfb\u52a0 ",(0,o.kt)("inlineCode",{parentName:"p"},'features = ["init-if-needed"]')," \u3002"),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},'anchor-lang = {version = "0.26.0", features = ["init-if-needed"]}')," ."),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u4e00\u4e2a\u5173\u8054\u7684\u4ee4\u724c\u8d26\u6237\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"#[program]\nmod example {\n    use super::*;\n    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {\n        Ok(())\n    }\n}\n\n#[derive(Accounts)]\npub struct Initialize<'info> {\n    #[account(\n        init_if_needed,\n        payer = payer,\n        associated_token::mint = mint,\n        associated_token::authority = payer\n    )]\n    pub token_account: Account<'info, TokenAccount>,\n    pub mint: Account<'info, Mint>,\n     #[account(mut)]\n    pub payer: Signer<'info>,\n    pub system_program: Program<'info, System>,\n    pub token_program: Program<'info, Token>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    pub rent: Sysvar<'info, Rent>,\n}\n")),(0,o.kt)("p",null,"\u8fd9\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"init_if_needed")," \u751f\u6210\u7684\u4ee3\u7801\uff08\u6765\u81ea ",(0,o.kt)("inlineCode",{parentName:"p"},"anchor expand")," \u547d\u4ee4\u7684\u4ee3\u7801\u7247\u6bb5\uff09\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-rust"},"let token_account: anchor_lang::accounts::account::Account<TokenAccount> = {\n    if !true\n    || AsRef::<AccountInfo>::as_ref(&token_account).owner\n    == &anchor_lang::solana_program::system_program::ID\n    {\n      let payer = payer.to_account_info();\n      let cpi_program = associated_token_program.to_account_info();\n      let cpi_accounts = anchor_spl::associated_token::Create {\n        payer: payer.to_account_info(),\n        associated_token: token_account.to_account_info(),\n        authority: payer.to_account_info(),\n        mint: mint.to_account_info(),\n        system_program: system_program.to_account_info(),\n        token_program: token_program.to_account_info(),\n        rent: rent.to_account_info(),\n      };\n      let cpi_ctx = anchor_lang::context::CpiContext::new(\n        cpi_program,\n        cpi_accounts,\n      );\n      anchor_spl::associated_token::create(cpi_ctx)?;\n    }\n  ...\n}\n")))}m.isMDXComponent=!0}}]);