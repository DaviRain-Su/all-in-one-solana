"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4845],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>_});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=o.createContext({}),u=function(e){var n=o.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},l=function(e){var n=u(e.components);return o.createElement(m.Provider,{value:n},e.children)},s="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},d=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,m=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=u(t),d=r,_=s["".concat(m,".").concat(d)]||s[d]||p[d]||a;return t?o.createElement(_,i(i({ref:n},l),{},{components:t})):o.createElement(_,i({ref:n},l))}));function _(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var m in n)hasOwnProperty.call(n,m)&&(c[m]=n[m]);c.originalType=e,c[s]="string"==typeof e?e:r,i[1]=c;for(var u=2;u<a;u++)i[u]=t[u];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3900:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var o=t(7462),r=(t(7294),t(3905));const a={},i=void 0,c={unversionedId:"Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/README",id:"Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/README",title:"README",description:"---",source:"@site/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/README.md",sourceDirName:"Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis",slug:"/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-cpis/README.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\ud83d\udee3 Anchor\u4e2d\u7684PDA",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/pdas-in-anchor/"},next:{title:"README",permalink:"/all-in-one-solana/docs/Solana-Co-Learn/module5/program-in-anchor/build-with-anchor-pdas/"}},m={},u=[{value:"sidebar_class_name: green",id:"sidebar_class_name-green",level:2},{value:"\u521b\u5efa ErrorCode",id:"\u521b\u5efa-errorcode",level:2},{value:"\u66f4\u65b0 <code>add_movie_review</code>",id:"\u66f4\u65b0-add_movie_review",level:2},{value:"\u66f4\u65b0 <code>AddMovieReview</code> \u4e0a\u4e0b\u6587",id:"\u66f4\u65b0-addmoviereview-\u4e0a\u4e0b\u6587",level:2},{value:"\u5c06 <code>ErrorCode</code> \u6dfb\u52a0\u5230 <code>update_movie_review</code> \u4e2d",id:"\u5c06-errorcode-\u6dfb\u52a0\u5230-update_movie_review-\u4e2d",level:2},{value:"\u6dfb\u52a0 <code>AddComment</code> \u4e0a\u4e0b\u6587",id:"\u6dfb\u52a0-addcomment-\u4e0a\u4e0b\u6587",level:3},{value:"\u6784\u5efa\uff0c\u90e8\u7f72\uff0c\u6d4b\u8bd5",id:"\u6784\u5efa\u90e8\u7f72\u6d4b\u8bd5",level:2}],l={toc:u},s="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(s,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"sidebar_position: 86\nsidebar_label: \u4f7f\u7528Anchor CPIs\u6784\u5efa"),(0,r.kt)("h2",{id:"sidebar_class_name-green"},"sidebar_class_name: green"),(0,r.kt)("h1",{id:"\u4f7f\u7528anchor-cpis\u6784\u5efa"},"\u4f7f\u7528Anchor CPIs\u6784\u5efa"),(0,r.kt)("p",null,"\u56de\u5230\u672a\u6765\u3002\u6211\u4eec\u5c06\u4ee5CPIs\u7ed3\u675f\u6211\u4eec\u7684\u7535\u5f71\u8bc4\u8bba\u8282\u76ee\uff0c\u6765\u4e2a\u5706\u6ee1\u6536\u5b98\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e00\u6b21\uff0c\u8ba9\u6211\u4eec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6307\u4ee4\u4ee5\u521b\u5efa\u5e26\u6709\u5143\u6570\u636e\u7684\u4ee3\u5e01\u94f8\u9020"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6307\u793a\u4ee5\u6dfb\u52a0\u8bc4\u8bba"),(0,r.kt)("li",{parentName:"ul"},"\u521b\u5efa\u8bc4\u8bba\u65f6\u94f8\u9020\u8584\u8377\u4ee3\u5e01"),(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u8bc4\u8bba\u65f6\u94f8\u9020\u8584\u8377\u4ee3\u5e01")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u4ee3\u7801")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8d77\u59cb\u4ee3\u7801\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://beta.solpg.io/63184c17bb7e0b5f4ca6dfa5?utm_source=buildspace.so&utm_medium=buildspace_project"},"https://beta.solpg.io/63184c17bb7e0b5f4ca6dfa5")),(0,r.kt)("li",{parentName:"ul"},"\u6211\u4eec\u5c06\u5728\u4e4b\u524d\u7684PDA\u6f14\u793a\u57fa\u7840\u4e0a\u8fdb\u884c\u6269\u5c55")),(0,r.kt)("p",null,"\u6211\u4eec\u8981\u505a\u7684\u7b2c\u4e00\u4ef6\u4e8b\u662f\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"create_reward_mint")," \u6307\u4ee4\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn create_reward_mint(\n        ctx: Context<CreateTokenReward>,\n        uri: String,\n        name: String,\n        symbol: String,\n    ) -> Result<()> {\n        msg!("Create Reward Token");\n\n        let seeds = &["mint".as_bytes(), &[*ctx.bumps.get("reward_mint").unwrap()]];\n\n        let signer = [&seeds[..]];\n\n        let account_info = vec![\n            ctx.accounts.metadata.to_account_info(),\n            ctx.accounts.reward_mint.to_account_info(),\n            ctx.accounts.user.to_account_info(),\n            ctx.accounts.token_metadata_program.to_account_info(),\n            ctx.accounts.token_program.to_account_info(),\n            ctx.accounts.system_program.to_account_info(),\n            ctx.accounts.rent.to_account_info(),\n        ];\n\n        invoke_signed(\n            &create_metadata_accounts_v2(\n                ctx.accounts.token_metadata_program.key(),\n                ctx.accounts.metadata.key(),\n                ctx.accounts.reward_mint.key(),\n                ctx.accounts.reward_mint.key(),\n                ctx.accounts.user.key(),\n                ctx.accounts.user.key(),\n                name,\n                symbol,\n                uri,\n                None,\n                0,\n                true,\n                true,\n                None,\n                None,\n            ),\n            account_info.as_slice(),\n            &signer,\n        )?;\n\n        Ok(())\n    }\n')),(0,r.kt)("p",null,"\u8fd9\u4e2a\u5f88\u957f\u4f46\u975e\u5e38\u7b80\u5355\uff01\u6211\u4eec\u6b63\u5728\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"Token"),"\u5143\u6570\u636e\u7a0b\u5e8f\u521b\u5efa\u4e00\u4e2aCPI\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"create_metadata_account_v2")," \u6307\u4ee4\u3002"),(0,r.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u770b\u5230\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"CreateTokenReward")," \u4e0a\u4e0b\u6587\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u5173\u4e8e /// ",(0,r.kt)("a",{parentName:"p",href:"https://book.anchor-lang.com/anchor_in_depth/the_accounts_struct.html#safety-checks?utm_source=buildspace.so&utm_medium=buildspace_project"},"CHECK"),": \u7684\u8be6\u7ec6\u4fe1\u606f\u5728\u8fd9\u91cc\uff1a\u5b89\u5168\u68c0\u67e5\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\npub struct CreateTokenReward<'info> {\n    #[account(\n        init,\n        seeds = [\"mint\".as_bytes()],\n        bump,\n        payer = user,\n        mint::decimals = 6,\n        mint::authority = reward_mint,\n\n    )]\n    pub reward_mint: Account<'info, Mint>,\n\n    #[account(mut)]\n    pub user: Signer<'info>,\n    pub system_program: Program<'info, System>,\n    pub rent: Sysvar<'info, Rent>,\n    pub token_program: Program<'info, Token>,\n\n    /// CHECK:\n    #[account(mut)]\n    pub metadata: AccountInfo<'info>,\n    /// CHECK:\n    pub token_metadata_program: AccountInfo<'info>,\n}\n")),(0,r.kt)("h2",{id:"\u521b\u5efa-errorcode"},"\u521b\u5efa ErrorCode"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u8bc4\u7ea7\u7684\u9519\u8bef\u4ee3\u7801"),(0,r.kt)("li",{parentName:"ul"},"\uff08Anchor\u5904\u7406\u4e86\u6211\u4eec\u5728\u539f\u751f\u7248\u672c\u4e2d\u7684\u5176\u4ed6\u68c0\u67e5\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'#[error_code]\npub enum ErrorCode {\n    #[msg("Rating greater than 5 or less than 1")]\n    InvalidRating,\n}\n')),(0,r.kt)("h2",{id:"\u66f4\u65b0-add_movie_review"},"\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"add_movie_review")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"ErrorCode")," \u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u8bc4\u8bba\u8ba1\u6570\u5668\u8d26\u6237"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"CPI"),"\u7ed9 ",(0,r.kt)("inlineCode",{parentName:"li"},"mintTo")," \u6307\u4ee4\uff0c\u5c06\u4ee3\u5e01\u94f8\u9020\u7ed9\u5ba1\u6838\u8005")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'ub fn add_movie_review(\n        ctx: Context<AddMovieReview>,\n        title: String,\n        description: String,\n        rating: u8,\n    ) -> Result<()> {\n        msg!("Movie Review Account Created");\n        msg!("Title: {}", title);\n        msg!("Description: {}", description);\n        msg!("Rating: {}", rating);\n\n        if rating > 5 || rating < 1 {\n            msg!("Rating cannot be higher than 5");\n            return err!(ErrorCode::InvalidRating);\n        }\n\n        let movie_review = &mut ctx.accounts.movie_review;\n        movie_review.reviewer = ctx.accounts.initializer.key();\n        movie_review.title = title;\n        movie_review.rating = rating;\n        movie_review.description = description;\n\n        msg!("Movie Comment Counter Account Created");\n        let movie_comment_counter = &mut ctx.accounts.movie_comment_counter;\n        movie_comment_counter.counter = 0;\n        msg!("Counter: {}", movie_comment_counter.counter);\n\n        let seeds = &["mint".as_bytes(), &[*ctx.bumps.get("reward_mint").unwrap()]];\n\n        let signer = [&seeds[..]];\n\n        let cpi_ctx = CpiContext::new_with_signer(\n            ctx.accounts.token_program.to_account_info(),\n            token::MintTo {\n                mint: ctx.accounts.reward_mint.to_account_info(),\n                to: ctx.accounts.token_account.to_account_info(),\n                authority: ctx.accounts.reward_mint.to_account_info(),\n            },\n            &signer,\n        );\n\n        token::mint_to(cpi_ctx, 10000000)?;\n        msg!("Minted Tokens");\n        Ok(())\n    }\n')),(0,r.kt)("h2",{id:"\u66f4\u65b0-addmoviereview-\u4e0a\u4e0b\u6587"},"\u66f4\u65b0 ",(0,r.kt)("inlineCode",{parentName:"h2"},"AddMovieReview")," \u4e0a\u4e0b\u6587"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"li"},"movie_review")),(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"li"},"movie_comment_counter")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"init_if_needed")," \u6765\u521d\u59cb\u5316\u4ee4\u724c\u8d26\u6237")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\n#[instruction(title:String, description:String)]\npub struct AddMovieReview<'info> {\n    #[account(\n        init,\n        seeds = [title.as_bytes(), initializer.key().as_ref()],\n        bump,\n        payer = initializer,\n        space = 8 + 32 + 1 + 4 + title.len() + 4 + description.len()\n    )]\n    pub movie_review: Account<'info, MovieAccountState>,\n    #[account(\n        init,\n        seeds = [\"counter\".as_bytes(), movie_review.key().as_ref()],\n        bump,\n        payer = initializer,\n        space = 8 + 8\n    )]\n    pub movie_comment_counter: Account<'info, MovieCommentCounter>,\n    #[account(mut,\n        seeds = [\"mint\".as_bytes()],\n        bump\n    )]\n    pub reward_mint: Account<'info, Mint>,\n    #[account(\n        init_if_needed,\n        payer = initializer,\n        associated_token::mint = reward_mint,\n        associated_token::authority = initializer\n    )]\n    pub token_account: Account<'info, TokenAccount>,\n    #[account(mut)]\n    pub initializer: Signer<'info>,\n    pub token_program: Program<'info, Token>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    pub rent: Sysvar<'info, Rent>,\n    pub system_program: Program<'info, System>,\n}\n")),(0,r.kt)("h2",{id:"\u5c06-errorcode-\u6dfb\u52a0\u5230-update_movie_review-\u4e2d"},"\u5c06 ",(0,r.kt)("inlineCode",{parentName:"h2"},"ErrorCode")," \u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"h2"},"update_movie_review")," \u4e2d"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"li"},"ErrorCode")," \u68c0\u67e5\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"update_movie_review")," \u6307\u4ee4")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},'pub fn update_movie_review(\n        ctx: Context<UpdateMovieReview>,\n        title: String,\n        description: String,\n        rating: u8,\n    ) -> Result<()> {\n        msg!("Updating Movie Review Account");\n        msg!("Title: {}", title);\n        msg!("Description: {}", description);\n        msg!("Rating: {}", rating);\n\n        if rating > 5 || rating < 1 {\n            msg!("Rating cannot be higher than 5");\n            return err!(ErrorCode::InvalidRating);\n        }\n\n        let movie_review = &mut ctx.accounts.movie_review;\n        movie_review.rating = rating;\n        movie_review.description = description;\n\n        Ok(())\n    }\n    ```\n\n### \u6dfb\u52a0 `add_comment`\n\n- Create `add_comment instruction`\n- \u8bbe\u7f6e `movie_comment` \u6570\u636e\n- CPI\u7ed9 `mintTo` \u6307\u4ee4\uff0c\u5c06\u4ee3\u5e01\u94f8\u9020\u7ed9\u5ba1\u6838\u8005\n\n```rust\npub fn add_comment(ctx: Context<AddComment>, comment: String) -> Result<()> {\n        msg!("Comment Account Created");\n        msg!("Comment: {}", comment);\n\n        let movie_comment = &mut ctx.accounts.movie_comment;\n        let movie_comment_counter = &mut ctx.accounts.movie_comment_counter;\n\n        movie_comment.review = ctx.accounts.movie_review.key();\n        movie_comment.commenter = ctx.accounts.initializer.key();\n        movie_comment.comment = comment;\n        movie_comment.count = movie_comment_counter.counter;\n\n        movie_comment_counter.counter += 1;\n\n        let seeds = &["mint".as_bytes(), &[*ctx.bumps.get("reward_mint").unwrap()]];\n\n        let signer = [&seeds[..]];\n\n        let cpi_ctx = CpiContext::new_with_signer(\n            ctx.accounts.token_program.to_account_info(),\n            token::MintTo {\n                mint: ctx.accounts.reward_mint.to_account_info(),\n                to: ctx.accounts.token_account.to_account_info(),\n                authority: ctx.accounts.reward_mint.to_account_info(),\n            },\n            &signer,\n        );\n\n        token::mint_to(cpi_ctx, 5000000)?;\n        msg!("Minted Tokens");\n\n        Ok(())\n    }\n')),(0,r.kt)("h3",{id:"\u6dfb\u52a0-addcomment-\u4e0a\u4e0b\u6587"},"\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"h3"},"AddComment")," \u4e0a\u4e0b\u6587"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"li"},"movie_comment")),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"init_if_needed")," \u6765\u521d\u59cb\u5316\u4ee4\u724c\u8d26\u6237")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-rust"},"#[derive(Accounts)]\n#[instruction(comment:String)]\npub struct AddComment<'info> {\n    #[account(\n        init,\n        seeds = [movie_review.key().as_ref(), &movie_comment_counter.counter.to_le_bytes()],\n        bump,\n        payer = initializer,\n        space = 8 + 32 + 32 + 4 + comment.len() + 8\n    )]\n    pub movie_comment: Account<'info, MovieComment>,\n    pub movie_review: Account<'info, MovieAccountState>,\n    #[account(\n        mut,\n        seeds = [\"counter\".as_bytes(), movie_review.key().as_ref()],\n        bump,\n    )]\n    pub movie_comment_counter: Account<'info, MovieCommentCounter>,\n    #[account(mut,\n        seeds = [\"mint\".as_bytes()],\n        bump\n    )]\n    pub reward_mint: Account<'info, Mint>,\n    #[account(\n        init_if_needed,\n        payer = initializer,\n        associated_token::mint = reward_mint,\n        associated_token::authority = initializer\n    )]\n    pub token_account: Account<'info, TokenAccount>,\n    #[account(mut)]\n    pub initializer: Signer<'info>,\n    pub token_program: Program<'info, Token>,\n    pub associated_token_program: Program<'info, AssociatedToken>,\n    pub rent: Sysvar<'info, Rent>,\n    pub system_program: Program<'info, System>,\n}\n")),(0,r.kt)("h2",{id:"\u6784\u5efa\u90e8\u7f72\u6d4b\u8bd5"},"\u6784\u5efa\uff0c\u90e8\u7f72\uff0c\u6d4b\u8bd5"),(0,r.kt)("p",null,"Solution: ",(0,r.kt)("a",{parentName:"p",href:"https://beta.solpg.io/6319c7bf77ea7f12846aee87"},"https://beta.solpg.io/6319c7bf77ea7f12846aee87")),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u4f7f\u7528\u81ea\u5df1\u7684\u7f16\u8f91\u5668\uff0c\u60a8\u5fc5\u987b\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"mpl-token-metadata")," \u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"Cargo.toml")," \u4e2d\u6dfb\u52a0 ",(0,r.kt)("inlineCode",{parentName:"p"},'features = ["no-entrypoint"]')," \u3002"),(0,r.kt)("p",null,"\u5426\u5219\uff0c\u5c06\u4f1a\u51fa\u73b0\u4ee5\u4e0b\u9519\u8bef\uff1a the ",(0,r.kt)("inlineCode",{parentName:"p"},"#[global_allocator] in this crate conflicts with global allocator in: mpl_token_metadata")," \u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6784\u5efa\u548c\u90e8\u7f72"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528SolPG\u8fdb\u884c\u6d4b\u8bd5")))}p.isMDXComponent=!0}}]);