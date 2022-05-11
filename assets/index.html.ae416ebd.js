import{_ as c,r as o,o as r,c as l,a as n,d as a,w as p,F as i,b as s,e as u}from"./app.873f0dc8.js";const d={},h=n("h1",{id:"express",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#express","aria-hidden":"true"},"#"),s(" Express")],-1),_=n("p",null,"\u5206\u4E09\u90E8\u5206",-1),k=n("p",null,"\u4E00\u3001\u57FA\u7840\u4ECB\u7ECD",-1),m=s("\u4E8C\u3001"),b=s("\u6E90\u7801\u5206\u6790"),x=s("\u4E09\u3001"),f=s("\u624B\u5199 Express"),g=n("p",null,"\u8FD9\u91CC\u4ECB\u7ECD\u7B2C\u4E00\u90E8\u5206",-1),E=n("h2",{id:"\u4ECB\u7ECD",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u4ECB\u7ECD","aria-hidden":"true"},"#"),s(" \u4ECB\u7ECD")],-1),v=s("Express \u662F\u57FA\u4E8E "),w={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},j=s("Node.js"),B=s(" \u5E73\u53F0\uFF0C\u5FEB\u901F\u3001\u5F00\u653E\u3001\u6781\u7B80\u7684 Web \u5F00\u53D1\u6846\u67B6"),N=n("h2",{id:"\u5B98\u7F51",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B98\u7F51","aria-hidden":"true"},"#"),s(" \u5B98\u7F51")],-1),A={href:"http://expressjs.com/",target:"_blank",rel:"noopener noreferrer"},L=s("\u5B98\u7F51"),V={href:"https://www.expressjs.com.cn/",target:"_blank",rel:"noopener noreferrer"},y=s("\u4E2D\u6587\u5B98\u7F51"),q={href:"https://www.npmjs.com/package/express",target:"_blank",rel:"noopener noreferrer"},C=s("npmjs \u5E93"),F=u(`<h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">npm</span> i express -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="\u4E00\u4E2A\u7B80\u5355\u7684-demo" tabindex="-1"><a class="header-anchor" href="#\u4E00\u4E2A\u7B80\u5355\u7684-demo" aria-hidden="true">#</a> \u4E00\u4E2A\u7B80\u5355\u7684 demo</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;express&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">req<span class="token punctuation">,</span> res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&#39;Hello World&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span><span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4);function I(R,S){const t=o("RouterLink"),e=o("ExternalLinkIcon");return r(),l(i,null,[h,_,k,n("p",null,[m,a(t,{to:"/Express/Express%E6%BA%90%E7%A0%81%E8%A7%A3%E6%9E%90.html"},{default:p(()=>[b]),_:1})]),n("p",null,[x,a(t,{to:"/Express/%E6%89%8B%E5%86%99Express.html"},{default:p(()=>[f]),_:1})]),g,E,n("p",null,[v,n("a",w,[j,a(e)]),B]),N,n("ul",null,[n("li",null,[n("p",null,[n("a",A,[L,a(e)])])]),n("li",null,[n("p",null,[n("a",V,[y,a(e)])])]),n("li",null,[n("p",null,[n("a",q,[C,a(e)])])])]),F],64)}var H=c(d,[["render",I],["__file","index.html.vue"]]);export{H as default};
