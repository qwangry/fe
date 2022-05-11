import{_ as p,r as t,o as r,c as o,a as n,d as s,F as l,e as c,b as e}from"./app.873f0dc8.js";const i={},u=c(`<h1 id="\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B</h1><p>\u9762\u5BF9\u5BF9\u8C61\u6709\u4E09\u4E2A\u8033\u719F\u80FD\u95FB\u7684\u7279\u6027\u3002\u7EE7\u627F\uFF0C\u5C01\u88C5\uFF0C\u591A\u6001</p><h3 id="\u9762\u5411\u5BF9\u8C61-oop-\u4E4B\u7C7B\u7684\u7EE7\u627F-extend" tabindex="-1"><a class="header-anchor" href="#\u9762\u5411\u5BF9\u8C61-oop-\u4E4B\u7C7B\u7684\u7EE7\u627F-extend" aria-hidden="true">#</a> \u9762\u5411\u5BF9\u8C61\uFF08OOP\uFF09\u4E4B\u7C7B\u7684\u7EE7\u627F\uFF08extend\uFF09</h3><h4 id="_1-\u7C7B\u7684\u7EE7\u627F\u3001\u5C01\u88C5\u3001\u591A\u6001" tabindex="-1"><a class="header-anchor" href="#_1-\u7C7B\u7684\u7EE7\u627F\u3001\u5C01\u88C5\u3001\u591A\u6001" aria-hidden="true">#</a> 1.\u7C7B\u7684\u7EE7\u627F\u3001\u5C01\u88C5\u3001\u591A\u6001</h4><ul><li>\u5C01\u88C5\uFF1A\u4F4E\u8026\u5408\u9AD8\u5185\u805A</li><li>\u591A\u6001\uFF1A\u91CD\u8F7D\u548C\u91CD\u5199</li><li>\u7EE7\u627F\uFF1A\u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B\u4E0A\u7684\u65B9\u6CD5</li><li>\u4E3A\u4EC0\u4E48\u8981\u7EE7\u627F\uFF1F</li></ul><h4 id="_2-\u7EE7\u627F\u5E38\u7528\u7684\u56DB\u79CD\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#_2-\u7EE7\u627F\u5E38\u7528\u7684\u56DB\u79CD\u65B9\u6CD5" aria-hidden="true">#</a> 2.\u7EE7\u627F\u5E38\u7528\u7684\u56DB\u79CD\u65B9\u6CD5</h4><ul><li>\u539F\u578B\u7EE7\u627F</li><li>call \u7EE7\u627F</li><li>\u5BC4\u751F\u7EC4\u5408\u7EE7\u627F</li><li>ES6 \u4E2D\u7684 extend \u7EE7\u627F\uFF08extend \u548C super\uFF09</li></ul><p>Js \u662F\u9762\u5411\u5BF9\u8C61\u8BED\u8A00\u3002</p><p>\u9762\u5411\u5BF9\u8C61\u7279\u70B9\u662F\u4EC0\u4E48\uFF1F</p><p>\u200B \u7EE7\u627F\uFF0C</p><p>\u200B \u5C01\u88C5\uFF0C \u4F4E\u8026\u5408\u9AD8\u5185\u805A</p><p>\u200B \u591A\u6001\uFF0C\u91CD\u8F7D\u548C\u91CD\u5199</p><p>\u200B \u91CD\u8F7D\uFF1A\u65B9\u6CD5\u540D\u76F8\u540C\uFF0C\u5F62\u53C2\u4E2A\u6570\u6216\u8005\u7C7B\u578B\u4E0D\u4E00\u6837\uFF08JJs \u4E2D\u4E0D\u5B58\u5728\u771F\u6B63\u610F\u4E49\u4E0A\u7684\u91CD\u8F7D\uFF09</p><p>\u200B \u91CD\u5199\uFF1A\u5728\u7C7B\u7684\u7EE7\u627F\u4E2D\uFF0C\u5B50\u7C7B\u53EF\u4EE5\u91CD\u5199\u7236\u7C7B\u4E2D\u7684\u65B9\u6CD5</p><p>\u200B Java \u7684\u4F8B\u5B50\uFF0Cjava \u5C31\u662F\u5178\u578B\u7684\u7684\u9762\u5411\u5BF9\u8C61\u8BED\u8A00</p><p>Js \u7684\u9762\u5411\u5BF9\u8C61\uFF0C\u662F\u901A\u8FC7\u4EC0\u4E48\u65B9\u5F0F\u5B9E\u73B0\u7684\u3002\u57FA\u4E8E\u539F\u578B\u548C\u539F\u578B\u94FE\u673A\u5236\u5904\u7406</p><p>java \u4E2D\u91CD\u8F7D\u7684\u4F8B\u5B50</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code> <span class="token keyword">public</span> <span class="token keyword">void</span> function <span class="token function">addSomeNumber</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>javascript \u4E2D\u6CA1\u6709\u91CD\u8F7D</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">addSomeNumber</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token number">100</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">function</span> <span class="token function">addSomeNumber</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> num <span class="token operator">+</span> <span class="token number">200</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">addSomeNumber</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u53EF\u4EE5\u901A\u8FC7\u4F20\u5165\u7684\u53C2\u6570\u7C7B\u578B\u548C\u6570\u91CF\u505A\u4E0D\u540C\u7684\u53CD\u5E94\u6765\u6A21\u62DF\u91CD\u8F7D</p><p>JavaScript \u4E2D\u7684\u7EE7\u627F</p><p>\u4E3A\u4EC0\u4E48\u8981\u4F7F\u7528\u7EE7\u627F\u3002</p><p>\u7EE7\u627F\u662F\u4E00\u4E2A\u975E\u5E38\u5E38\u89C1\u7684\u6982\u5FF5\uFF0C\u5728\u73B0\u5B9E\u751F\u6D3B\u4E2D\u8BB8\u591A\u4E8B\u7269\u90FD\u662F\u5177\u6709\u7EE7\u627F\u6027\u7684</p><p><img src="https://i.loli.net/2021/06/03/Ucs9d2yWIjarLMg.png" alt="\u7EE7\u627F"></p><p>\u53EF\u4EE5\u770B\u51FA\u6765</p><h4 id="\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u7EE7\u627F" aria-hidden="true">#</a> \u7EE7\u627F</h4><p>\u6BCF\u4E2A\u5BF9\u8C61\u90FD\u662F\u57FA\u4E8E\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u521B\u5EFA\u7684</p><p>js \u7684\u7EE7\u627F</p><p>\u9762\u5411\u5BF9\u8C61\u601D\u7EF4\u5BFC\u56FE</p><p><img src="https://i.loli.net/2021/06/03/5CkBqewOFa3sG89.png" alt="\u9762\u5411\u5BF9\u8C61\u601D\u7EF4\u5BFC\u56FE"></p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,32),d={href:"https://coolshell.cn/articles/6441.html",target:"_blank",rel:"noopener noreferrer"},h=e("JAVASCRIPT \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B"),k={href:"https://segmentfault.com/a/1190000020319171",target:"_blank",rel:"noopener noreferrer"},m=e("\u9762\u5411\u5BF9\u8C61\u4E4B\u4E03\u5927\u57FA\u672C\u539F\u5219\uFF08JavaScript\uFF09"),_={href:"https://juejin.cn/post/6844903780035592205",target:"_blank",rel:"noopener noreferrer"},b=e("\u9762\u8BD5\u5B98\u95EE\uFF1AJS \u7684\u7EE7\u627F"),f={href:"https://mp.weixin.qq.com/s/CqXmu4n6aZsqB-jJ0O0t-g",target:"_blank",rel:"noopener noreferrer"},v=e("\u5F81\u670D JavaScript \u9762\u8BD5\uFF1A\u7C7B\u7EE7\u627F\u548C\u539F\u578B\u7EE7\u627F\u7684\u533A\u522B");function g(x,j){const a=t("ExternalLinkIcon");return r(),o(l,null,[u,n("ul",null,[n("li",null,[n("p",null,[n("a",d,[h,s(a)])])]),n("li",null,[n("p",null,[n("a",k,[m,s(a)])])]),n("li",null,[n("p",null,[n("a",_,[b,s(a)])])]),n("li",null,[n("p",null,[n("a",f,[v,s(a)])])])])],64)}var S=p(i,[["render",g],["__file","\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B.html.vue"]]);export{S as default};
