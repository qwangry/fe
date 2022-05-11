import{_ as p,r as o,o as c,c as r,a as n,d as e,F as l,e as t,b as s}from"./app.873f0dc8.js";const u={},i=t('<h1 id="koa2-\u57FA\u7840" tabindex="-1"><a class="header-anchor" href="#koa2-\u57FA\u7840" aria-hidden="true">#</a> Koa2 \u57FA\u7840</h1><h2 id="\u77E5\u8BC6\u50A8\u5907" tabindex="-1"><a class="header-anchor" href="#\u77E5\u8BC6\u50A8\u5907" aria-hidden="true">#</a> \u77E5\u8BC6\u50A8\u5907</h2><p>Node \u57FA\u672C\u5E38\u8BC6</p><h2 id="\u4EC0\u4E48\u662F-koa2" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-koa2" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Koa2</h2><p>\u7531 Express \u539F\u73ED\u4EBA\u9A6C\u6253\u9020\u7684\u65B0\u751F\u4EE3 Node.js Web \u6846\u67B6\uFF0C\u5B83\u7684\u4EE3\u7801\u5F88\u7B80\u5355\uFF0C\u6CA1\u6709\u50CF Express \u90A3\u6837\uFF0C\u63D0\u4F9B\u8DEF\u7531\u3001\u9759\u6001\u670D\u52A1\u7B49\u7B49\uFF0C\u5B83\u662F\u4E3A\u4E86\u89E3\u51B3 Node \u95EE\u9898\uFF08\u7B80\u5316\u4E86 Node \u4E2D\u64CD\u4F5C\uFF09\u5E76\u53D6\u4EE3\u4E4B\uFF0C\u5B83\u672C\u8EAB\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4E2D\u95F4\u4EF6\u6846\u67B6\uFF0C\u9700\u8981\u914D\u5408\u5404\u4E2A\u4E2D\u95F4\u4EF6\u624D\u80FD\u4F7F\u7528</p>',5),k={href:"https://koajs.com/",target:"_blank",rel:"noopener noreferrer"},d=s("\u6587\u6863"),h={href:"https://koa.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},b=s("\u4E2D\u6587\u6587\u6863"),m=s(" (\u91CE\u751F)"),_=t(`<p>Koa2 \u662F\u4EC0\u4E48\uFF1F</p><ul><li>\u7528 NodeJS \u5199\u7684 Web \u6846\u67B6</li><li>Koa \u53EF\u88AB\u89C6\u4E3A nodejs \u7684 HTTP \u6A21\u5757\u7684\u62BD\u8C61</li></ul><p>Koa \u53EF\u88AB\u89C6\u4E3A nodejs \u7684 HTTP \u6A21\u5757\u7684\u62BD\u8C61</p><p>\u7528\u6CD5\u5F88\u7B80\u5355\uFF1A</p><p>Koa2 \u542F\u52A8\u670D\u52A1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> Koa <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;koa&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Koa</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;3000\u7AEF\u53E3\u5DF2\u542F\u52A8&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5176\u4E2D\uFF0CKoa2 \u5C01\u88C5\u4E86 request \u548C response\uFF0C\u5C06\u5B83\u4EEC\u653E\u5728\u4E00\u8D77\uFF0C\u6210\u4E86 ctx\u3002</p><p>\u518D Koa2 \u4E2D\uFF0Cctx \u662F\u4E2A\u5F88\u5173\u952E\u7684\u503C\uFF0C</p><p>ctx.body \uFF1A\u8FD4\u56DE\u503C</p><p>ctx.status\uFF1A\u8FD4\u56DE\u7684 code</p><p>ctx.request\uFF1A\u8BF7\u6C42\u4F53</p><p>ctx.response\uFF1A\u8FD4\u56DE\u4F53</p><p>app \u5B9E\u4F8B\u3001context\u3001request\u3001request \u5B98\u65B9 API \u6587\u6863</p>`,13),x={href:"https://github.com/demopark/koa-docs-Zh-CN/blob/master/api/index.md",target:"_blank",rel:"noopener noreferrer"},f=s("https://github.com/demopark/koa-docs-Zh-CN/blob/master/api/index.md"),g={href:"https://github.com/demopark/koa-docs-Zh-CN/blob/master/api/context.md",target:"_blank",rel:"noopener noreferrer"},N=s("https://github.com/demopark/koa-docs-Zh-CN/blob/master/api/context.md");function K(v,j){const a=o("ExternalLinkIcon");return c(),r(l,null,[i,n("p",null,[n("a",k,[d,e(a)])]),n("p",null,[n("a",h,[b,e(a)]),m]),_,n("p",null,[n("a",x,[f,e(a)])]),n("p",null,[n("a",g,[N,e(a)])])],64)}var y=p(u,[["render",K],["__file","Koa2\u57FA\u7840.html.vue"]]);export{y as default};
