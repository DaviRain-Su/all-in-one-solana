"use strict";(self.webpackChunkall_in_one_solana=self.webpackChunkall_in_one_solana||[]).push([[6260],{3905:(e,a,r)=>{r.d(a,{Zo:()=>p,kt:()=>g});var n=r(67294);function t(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function l(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?l(Object(r),!0).forEach((function(a){t(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,t=function(e,a){if(null==e)return{};var r,n,t={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||(t[r]=e[r]);return t}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(t[r]=e[r])}return t}var d=n.createContext({}),s=function(e){var a=n.useContext(d),r=a;return e&&(r="function"==typeof e?e(a):o(o({},a),e)),r},p=function(e){var a=s(e.components);return n.createElement(d.Provider,{value:a},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,t=e.mdxType,l=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(r),m=t,g=u["".concat(d,".").concat(m)]||u[m]||c[m]||l;return r?n.createElement(g,o(o({ref:a},p),{},{components:r})):n.createElement(g,o({ref:a},p))}));function g(e,a){var r=arguments,t=a&&a.mdxType;if("string"==typeof e||t){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var d in a)hasOwnProperty.call(a,d)&&(i[d]=a[d]);i.originalType=e,i[u]="string"==typeof e?e:t,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},97381:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>d,contentTitle:()=>o,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),t=(r(67294),r(3905));const l={sidebar_position:59,sidebar_label:"\u2757 \u9519\u8bef\u5904\u7406\u548c\u6570\u636e\u9a8c\u8bc1",sidebar_class_name:"green",tags:["security-and-validation","solana","native-solana-program","error-handle-and-data-validation"]},o="\u2757 \u9519\u8bef\u5904\u7406\u548c\u6570\u636e\u9a8c\u8bc1",i={unversionedId:"module3/security-and-validation/error-handling-and-data-validation/README",id:"module3/security-and-validation/error-handling-and-data-validation/README",title:"\u2757 \u9519\u8bef\u5904\u7406\u548c\u6570\u636e\u9a8c\u8bc1",description:"\u672c\u8282\u8bfe\u5c06\u4e3a\u4f60\u4ecb\u7ecd\u4e00\u4e9b\u7a0b\u5e8f\u5b89\u5168\u65b9\u9762\u7684\u57fa\u672c\u6ce8\u610f\u4e8b\u9879\u3002\u867d\u7136\u8fd9\u5e76\u975e\u5168\u9762\u7684\u6982\u8ff0\uff0c\u4f46\u5b83\u80fd\u8ba9\u4f60\u50cf\u653b\u51fb\u8005\u90a3\u6837\u601d\u8003\uff0c\u601d\u7d22\u91cd\u8981\u7684\u95ee\u9898\uff1a\u6211\u5982\u4f55\u7834\u89e3\u8fd9\u4e2a\u7a0b\u5e8f\uff1f",source:"@site/docs/Solana-Co-Learn/module3/security-and-validation/error-handling-and-data-validation/README.md",sourceDirName:"module3/security-and-validation/error-handling-and-data-validation",slug:"/module3/security-and-validation/error-handling-and-data-validation/",permalink:"/solana-co-learn/Solana-Co-Learn/module3/security-and-validation/error-handling-and-data-validation/",draft:!1,editUrl:"https://github.com/CreatorsDAO/solana-co-learn/tree/main/docs/Solana-Co-Learn/module3/security-and-validation/error-handling-and-data-validation/README.md",tags:[{label:"security-and-validation",permalink:"/solana-co-learn/Solana-Co-Learn/tags/security-and-validation"},{label:"solana",permalink:"/solana-co-learn/Solana-Co-Learn/tags/solana"},{label:"native-solana-program",permalink:"/solana-co-learn/Solana-Co-Learn/tags/native-solana-program"},{label:"error-handle-and-data-validation",permalink:"/solana-co-learn/Solana-Co-Learn/tags/error-handle-and-data-validation"}],version:"current",lastUpdatedBy:"Yanbo Wang",lastUpdatedAt:1715564363,formattedLastUpdatedAt:"May 13, 2024",sidebarPosition:59,frontMatter:{sidebar_position:59,sidebar_label:"\u2757 \u9519\u8bef\u5904\u7406\u548c\u6570\u636e\u9a8c\u8bc1",sidebar_class_name:"green",tags:["security-and-validation","solana","native-solana-program","error-handle-and-data-validation"]},sidebar:"tutorialSidebar",previous:{title:"\u5b89\u5168\u548c\u9a8c\u8bc1",permalink:"/solana-co-learn/Solana-Co-Learn/module3/security-and-validation/"},next:{title:"\ud83d\udd11 \u4fdd\u969c\u6211\u4eec\u7a0b\u5e8f\u7684\u5b89\u5168",permalink:"/solana-co-learn/Solana-Co-Learn/module3/security-and-validation/secure-our-program/"}},d={},s=[{value:"\ud83d\ude21 \u81ea\u5b9a\u4e49\u9519\u8bef",id:"-\u81ea\u5b9a\u4e49\u9519\u8bef",level:2},{value:"\u8fd4\u56de\u81ea\u5b9a\u4e49\u9519\u8bef",id:"\u8fd4\u56de\u81ea\u5b9a\u4e49\u9519\u8bef",level:3},{value:"\ud83d\udd13 \u57fa\u672c\u5b89\u5168\u51c6\u5219",id:"-\u57fa\u672c\u5b89\u5168\u51c6\u5219",level:2},{value:"\u6240\u6709\u6743\u68c0\u67e5",id:"\u6240\u6709\u6743\u68c0\u67e5",level:3},{value:"\u7b7e\u540d\u8005\u68c0\u67e5",id:"\u7b7e\u540d\u8005\u68c0\u67e5",level:3},{value:"\u6570\u636e\u9a8c\u8bc1",id:"\u6570\u636e\u9a8c\u8bc1",level:3},{value:"\u6574\u6570\u6ea2\u51fa\u548c\u4e0b\u6ea2",id:"\u6574\u6570\u6ea2\u51fa\u548c\u4e0b\u6ea2",level:3}],p={toc:s},u="wrapper";function c(e){let{components:a,...l}=e;return(0,t.kt)(u,(0,n.Z)({},p,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("h1",{id:"-\u9519\u8bef\u5904\u7406\u548c\u6570\u636e\u9a8c\u8bc1"},"\u2757 \u9519\u8bef\u5904\u7406\u548c\u6570\u636e\u9a8c\u8bc1"),(0,t.kt)("p",null,"\u672c\u8282\u8bfe\u5c06\u4e3a\u4f60\u4ecb\u7ecd\u4e00\u4e9b\u7a0b\u5e8f\u5b89\u5168\u65b9\u9762\u7684\u57fa\u672c\u6ce8\u610f\u4e8b\u9879\u3002\u867d\u7136\u8fd9\u5e76\u975e\u5168\u9762\u7684\u6982\u8ff0\uff0c\u4f46\u5b83\u80fd\u8ba9\u4f60\u50cf\u653b\u51fb\u8005\u90a3\u6837\u601d\u8003\uff0c\u601d\u7d22\u91cd\u8981\u7684\u95ee\u9898\uff1a\u6211\u5982\u4f55\u7834\u89e3\u8fd9\u4e2a\u7a0b\u5e8f\uff1f"),(0,t.kt)("h2",{id:"-\u81ea\u5b9a\u4e49\u9519\u8bef"},"\ud83d\ude21 \u81ea\u5b9a\u4e49\u9519\u8bef"),(0,t.kt)("p",null,(0,t.kt)("inlineCode",{parentName:"p"},"Rust"),"\u5177\u6709\u975e\u5e38\u5f3a\u5927\u7684\u9519\u8bef\u5904\u7406\u673a\u5236\u3002\u4f60\u53ef\u80fd\u5df2\u7ecf\u9047\u5230\u4e86\u4e00\u4e9b\u8981\u6c42\u4f60\u5fc5\u987b\u5904\u7406\u5f02\u5e38\u60c5\u51b5\u7684\u7f16\u8bd1\u5668\u89c4\u5219\u3002"),(0,t.kt)("p",null,"\u4e0b\u9762\u5c55\u793a\u4e86\u5982\u4f55\u4e3a\u6211\u4eec\u7684\u7b14\u8bb0\u7a0b\u5e8f\u521b\u5efa\u81ea\u5b9a\u4e49\u9519\u8bef\u7684\u65b9\u6cd5\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'use solana_program::{program_error::ProgramError};\nuse thiserror::Error;\n\n#[derive(Error)]\npub enum NoteError {\n  #[error("Wrong Note Owner")]\n  Forbidden,\n\n  #[error("test is too long")]\n  InvalidLength\n}\n')),(0,t.kt)("p",null,"\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"derive"),"\u5b8f\u5c5e\u6027\uff0c\u6211\u4eec\u53ef\u4ee5\u4f7f",(0,t.kt)("inlineCode",{parentName:"p"},"NoteError"),"\u679a\u4e3e\u5177\u6709\u9ed8\u8ba4\u7684\u9519\u8bef",(0,t.kt)("inlineCode",{parentName:"p"},"Trait"),"\u5b9e\u73b0\u3002"),(0,t.kt)("p",null,"\u6bcf\u79cd\u9519\u8bef\u7c7b\u578b\u6211\u4eec\u90fd\u4f1a\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},'#[error("...")]'),"\u6807\u8bb0\u63d0\u4f9b\u76f8\u5e94\u7684\u9519\u8bef\u4fe1\u606f\u3002"),(0,t.kt)("h3",{id:"\u8fd4\u56de\u81ea\u5b9a\u4e49\u9519\u8bef"},"\u8fd4\u56de\u81ea\u5b9a\u4e49\u9519\u8bef"),(0,t.kt)("p",null,"\u7a0b\u5e8f\u8fd4\u56de\u7684\u9519\u8bef\u5fc5\u987b\u662f",(0,t.kt)("inlineCode",{parentName:"p"},"ProgramError"),"\u7c7b\u578b\u3002\u901a\u8fc7",(0,t.kt)("inlineCode",{parentName:"p"},"impl"),"\uff0c\u6211\u4eec\u53ef\u4ee5\u5c06\u81ea\u5b9a\u4e49\u9519\u8bef\u4e0e",(0,t.kt)("inlineCode",{parentName:"p"},"ProgramError"),"\u7c7b\u578b\u8fdb\u884c\u8f6c\u6362\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{src:r(31742).Z,width:"1465",height:"683"})),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"impl From<NoteError> for ProgramError {\n    fn from(e: NoteError) -> Self {\n        ProgramError::Custom(e as u32)\n    }\n}\n")),(0,t.kt)("p",null,"\u7136\u540e\uff0c\u5f53\u6211\u4eec\u9700\u8981\u5b9e\u9645\u8fd4\u56de\u9519\u8bef\u65f6\uff0c\u6211\u4eec\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"p"},"into()"),"\u65b9\u6cd5\u5c06\u9519\u8bef\u8f6c\u6362\u4e3a",(0,t.kt)("inlineCode",{parentName:"p"},"ProgramError"),"\u7684\u5b9e\u4f8b\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"if pda != *note_pda.key {\n    return Err(NoteError::Forbidden.into());\n}\n")),(0,t.kt)("h2",{id:"-\u57fa\u672c\u5b89\u5168\u51c6\u5219"},"\ud83d\udd13 \u57fa\u672c\u5b89\u5168\u51c6\u5219"),(0,t.kt)("p",null,"\u4ee5\u4e0b\u51e0\u9879\u57fa\u672c\u7684\u5b89\u5168\u63aa\u65bd\u53ef\u4ee5\u589e\u5f3a\u7a0b\u5e8f\u7684\u5b89\u5168\u6027\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u6240\u6709\u6743\u68c0\u67e5 - \u786e\u4fdd\u8d26\u6237\u5f52\u8be5\u7a0b\u5e8f\u6240\u6709\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u7b7e\u540d\u8005\u68c0\u67e5 - \u9a8c\u8bc1\u4ea4\u6613\u7684\u7b7e\u540d\u8005\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u901a\u7528\u8d26\u6237\u9a8c\u8bc1 - \u6838\u5b9e\u8d26\u6237\u662f\u5426\u7b26\u5408\u9884\u671f\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u6570\u636e\u9a8c\u8bc1 - \u68c0\u67e5\u7528\u6237\u8f93\u5165\u7684\u6709\u6548\u6027\u3002")),(0,t.kt)("p",null,"\u603b\u7684\u6765\u8bf4\uff0c\u4f60\u5e94\u8be5\u59cb\u7ec8\u9a8c\u8bc1\u6765\u81ea\u7528\u6237\u7684\u8f93\u5165\u3002\u5f53\u5904\u7406\u7528\u6237\u63d0\u4f9b\u7684\u6570\u636e\u65f6\uff0c\u8fd9\u4e00\u70b9\u5c24\u4e3a\u91cd\u8981\u3002\u8bb0\u5f97 - \u7a0b\u5e8f\u4e0d\u4f1a\u4fdd\u5b58\u72b6\u6001\u3002\u5b83\u4eec\u4e0d\u77e5\u9053\u8c01\u662f\u6240\u6709\u8005\uff0c\u4e5f\u4e0d\u4f1a\u68c0\u67e5\u8c01\u5728\u8c03\u7528\u5b83\u4eec\uff0c\u9664\u975e\u4f60\u660e\u786e\u544a\u8bc9\u5b83\u4eec\u3002"),(0,t.kt)("h3",{id:"\u6240\u6709\u6743\u68c0\u67e5"},"\u6240\u6709\u6743\u68c0\u67e5"),(0,t.kt)("p",null,"\u6240\u6709\u6743\u68c0\u67e5\u7684\u76ee\u7684\u662f\u6838\u5b9e\u8d26\u6237\u662f\u5426\u5f52\u9884\u671f\u7684\u7a0b\u5e8f\u6240\u6709\u3002\u52a1\u5fc5\u786e\u4fdd\u53ea\u6709\u4f60\u80fd\u591f\u8bbf\u95ee\u5b83\u3002"),(0,t.kt)("p",null,"\u7528\u6237\u53ef\u80fd\u4f1a\u53d1\u9001\u7ed3\u6784\u4e0e\u8d26\u6237\u6570\u636e\u5339\u914d\u4f46\u7531\u4e0d\u540c\u7a0b\u5e8f\u521b\u5efa\u7684\u6570\u636e\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"if note_pda.owner != program_id {\n    return Err(ProgramError::InvalidNoteAccount);\n}\n")),(0,t.kt)("h3",{id:"\u7b7e\u540d\u8005\u68c0\u67e5"},"\u7b7e\u540d\u8005\u68c0\u67e5"),(0,t.kt)("p",null,"\u7b7e\u540d\u8005\u68c0\u67e5\u662f\u4e3a\u4e86\u9a8c\u8bc1\u8d26\u6237\u662f\u5426\u5df2\u5bf9\u4ea4\u6613\u7b7e\u540d\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'if !initializer.is_signer {\n    msg!("\u7f3a\u5c11\u5fc5\u8981\u7684\u7b7e\u540d");\n    return Err(ProgramError::MissingRequiredSignature)\n}\n')),(0,t.kt)("h3",{id:"\u6570\u636e\u9a8c\u8bc1"},"\u6570\u636e\u9a8c\u8bc1"),(0,t.kt)("p",null,"\u4f60\u8fd8\u5e94\u8be5\u5728\u9002\u5f53\u7684\u60c5\u51b5\u4e0b\u9a8c\u8bc1\u5ba2\u6237\u63d0\u4f9b\u7684\u6307\u4ee4\u6570\u636e\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'let (pda, bump_seed) = PubKey::find_program_address(&[initializer.key.as_ref(), title.as_bytes().as_ref(),], program_id);\n\nif pda != *note_pda.key() {\n    msg!("Invalid seeds for PDA");\n    return Err(ProgramError::InvalidArgument);\n}\n')),(0,t.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u7a0b\u5e8f\u662f\u4e00\u4e2a\u6e38\u620f\uff0c\u7528\u6237\u53ef\u80fd\u4f1a\u5206\u914d\u89d2\u8272\u5c5e\u6027\u70b9\u3002\u4f60\u53ef\u80fd\u9700\u8981\u9a8c\u8bc1\u5206\u914d\u7684\u79ef\u5206\u52a0\u4e0a\u73b0\u6709\u5206\u914d\u662f\u5426\u8d85\u51fa\u4e86\u6700\u5927\u9650\u5236\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},'if character.agility + new_agility > 100 {\n    msg!("\u5c5e\u6027\u70b9\u6570\u4e0d\u5f97\u8d85\u8fc7100");\n    return Err(AttributeError::TooHigh.into())\n}\n')),(0,t.kt)("h3",{id:"\u6574\u6570\u6ea2\u51fa\u548c\u4e0b\u6ea2"},"\u6574\u6570\u6ea2\u51fa\u548c\u4e0b\u6ea2"),(0,t.kt)("p",null,"Rust\u7684\u6574\u6570\u6709\u56fa\u5b9a\u7684\u5927\u5c0f\uff0c\u6240\u4ee5\u53ea\u80fd\u5bb9\u7eb3\u7279\u5b9a\u8303\u56f4\u7684\u6570\u5b57\u3002\u5982\u679c\u8fdb\u884c\u7b97\u672f\u8fd0\u7b97\u7684\u7ed3\u679c\u8d85\u51fa\u4e86\u8be5\u8303\u56f4\uff0c\u90a3\u4e48\u7ed3\u679c\u4f1a\u56de\u7ed5\u3002"),(0,t.kt)("p",null,(0,t.kt)("img",{src:r(29290).Z,width:"1280",height:"801"})),(0,t.kt)("p",null,"\u4e3a\u4e86\u907f\u514d\u6574\u6570\u6ea2\u51fa\u548c\u4e0b\u6ea2\uff0c\u4f60\u53ef\u4ee5\uff1a"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u786e\u4fdd\u903b\u8f91\u4e0a\u4e0d\u4f1a\u53d1\u751f\u6ea2\u51fa\u6216\u4e0b\u6ea2\u3002"),(0,t.kt)("li",{parentName:"ul"},"\u4f7f\u7528",(0,t.kt)("inlineCode",{parentName:"li"},"checked_add"),"\u7b49\u5df2\u68c0\u67e5\u7684\u6570\u5b66\u8fd0\u7b97\u7b26\u4ee3\u66ff",(0,t.kt)("inlineCode",{parentName:"li"},"+"),"\u3002")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-rust"},"let first_int: u8 = 5;\nlet second_int: u8 = 255;\nlet sum = first_int.checked_add(second_int);\n")),(0,t.kt)("p",null,"\u60f3\u8c61\u4e00\u4e0b\uff0c\u90a3\u4e9b\u6ca1\u6709\u91c7\u53d6\u6700\u57fa\u672c\u5b89\u5168\u63aa\u65bd\u7684\u7a0b\u5e8f\u90fd\u6709\u54ea\u4e9b\u6f0f\u6d1e\u7b49\u5f85\u88ab\u53d1\u73b0\uff0c\u90a3\u4e9b\u6f0f\u6d1e\u8d4f\u91d1\u5c31\u5728\u773c\u524d\ud83e\udd75\ud83e\udd11\u3002"))}c.isMDXComponent=!0},29290:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/1280px-Nuclear_Gandhi-7327785a34058cc3b5a132552da97fcf.png"},31742:(e,a,r)=>{r.d(a,{Z:()=>n});const n=r.p+"assets/images/convert-erorr-9d01d3fd551ff863dd5e0f30d8936d6b.png"}}]);