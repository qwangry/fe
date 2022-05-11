import{_ as c,r as a,o as l,c as r,a as n,d as p,w as u,F as i,e as t,b as s}from"./app.873f0dc8.js";const k={},b=t('<h1 id="\u6A21\u62DF-new-\u7684\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF-new-\u7684\u5B9E\u73B0" aria-hidden="true">#</a> \u6A21\u62DF new \u7684\u5B9E\u73B0</h1><h2 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h2><p>new \u7684\u672C\u8D28\u662F\u8BA9\u4F60\u5C11\u4E9B\u51E0\u884C\u4EE3\u7801</p><h2 id="\u6B63\u6587" tabindex="-1"><a class="header-anchor" href="#\u6B63\u6587" aria-hidden="true">#</a> \u6B63\u6587</h2>',4),m=s("\u4E4B\u524D\u5728\u4ECB\u7ECD "),d=s("\u539F\u578B\u7BC7"),h=s(" \u65F6\uFF0C\u5728\u4ECB\u7ECD\u9690\u5F0F\u539F\u578B\u7EE7\u627F\u65F6\uFF0C\u8BF4\u60F3\u8981\u5F97\u5230\u4E00\u4E2A\u5305\u542B\u6570\u636E\u3001\u65B9\u6CD5\u4EE5\u53CA\u5173\u8054\u539F\u578B\u4E09\u4E2A\u7EC4\u6210\u90E8\u5206\u7684\u4E30\u6EE1\u5BF9\u8C61\uFF0C\u5305\u542B\u4E86\u4E09\u4E2A\u6B65\u9AA4\uFF1A"),w=t(`<p>1\uFF09\u521B\u5EFA\u7A7A\u5BF9\u8C61</p><p>2\uFF09\u8BBE\u7F6E\u8BE5\u5BF9\u8C61\u7684\u539F\u578B\u4E3A\u53E6\u4E00\u4E2A\u5BF9\u8C61\u6216\u8005 null</p><p>3\uFF09\u586B\u5145\u8BE5\u5BF9\u8C61\uFF0C\u589E\u52A0\u5C5E\u6027\u6216\u8005\u65B9\u6CD5</p><p>\u8FD9\u4E9B\u8FC7\u7A0B\u5373 \u5B8C\u6210\u521B\u5EFA\u5BF9\u8C61\u3001\u539F\u578B\u7EE7\u627F\u548C\u5C5E\u6027\u521D\u59CB\u5316\u3002</p><p>\u9690\u5F0F\u7EE7\u627F\u8FC7\u7A0B\u4E2D\uFF0CJS \u5E2E\u6211\u4EEC\u505A\u4E86\u521B\u5EFA\u5BF9\u8C61\u548C\u539F\u578B\u7EE7\u627F\u3002</p><p>\u9690\u5F0F\u7EE7\u627F\u5305\u62EC\u4E24\u79CD\uFF0C\u4E00\u5BF9\u8C61\uFF08\u6570\u7EC4\uFF09\u5B57\u9762\u91CF\uFF1B\u800C new \u7EE7\u627F</p><p>\u6309\u7167\u9690\u5F0F\u7EE7\u627F\u7684\u4E24\u5C42\u9690\u5F0F\u884C\u4E3A\u6765\u770B</p><p>1\uFF09\u9690\u5F0F\u7684\u901A\u8FC7 new Object() \u53BB\u521B\u5EFA\u5BF9\u8C61</p><p>2\uFF09\u9690\u5F0F\u7684\u8FDB\u884C\u539F\u578B\u7EE7\u627F</p><h2 id="new-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#new-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> new \u662F\u4EC0\u4E48\uFF1F</h2><p><strong>\u5B83\u662F JavaScript \u4E3A\u4E86\u8BA9\u5F00\u53D1\u8005\u5F00\u53D1\u8D77\u6765\u65B9\u4FBF\u800C\u5B9E\u73B0\u7684\u5173\u952E\u5B57</strong></p><p>\u5728 JavaScript \u9AD8\u7EA7\u7A0B\u5E8F\u8BBE\u8BA1\u7B2C\u56DB\u7248\u5BF9 new \u8C03\u7528\u6784\u9020\u51FD\u6570\u4F1A\u6267\u884C\u7684\u64CD\u4F5C\u63CF\u8FF0\uFF1A</p><blockquote><p>\uFF081\uFF09\u5728\u5185\u5B58\u4E2D\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</p><p>\uFF082\uFF09<strong>\u8FD9\u4E2A\u65B0\u5BF9\u8C61\u5185\u90E8\u7684[[prototype]]\u7279\u6027\u88AB\u8D4B\u503C\u4E3A\u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027</strong></p><p>\uFF083\uFF09\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684 this \u88AB\u8D4B\u503C\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61\uFF08\u5373 this \u6307\u5411\u65B0\u5BF9\u8C61\uFF09</p><p>\uFF084\uFF09\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801\uFF08\u7ED9\u65B0\u5BF9\u8C61\u6DFB\u52A0\u5C5E\u6027\uFF09</p><p>\uFF085\uFF09\u5982\u679C\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u975E\u7A7A\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u8BE5\u5BF9\u8C61\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE\u521A\u521B\u5EFA\u7684\u65B0\u5BF9\u8C61</p></blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u6309\u7167\u4EE5\u4E0A\u63CF\u8FF0\u6765\u5199\u4E00\u4E2A new\u3002</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">new2</span><span class="token punctuation">(</span><span class="token parameter">Constructor<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// (1)\u3001\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// (2)\u3001\u65B0\u5BF9\u8C61\u7684[[prototype]]\u7279\u6027\u88AB\u8D4B\u503C\u4E3A \u6784\u9020\u51FD\u6570\u7684 prototype \u5C5E\u6027</span>
    obj<span class="token punctuation">.</span>__proto__ <span class="token operator">=</span> <span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    <span class="token comment">// (3)\u3001\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684 this \u88AB\u8D4B\u503C\u4E3A\u8FD9\u4E2A\u65B0\u5BF9\u8C61</span>
    <span class="token comment">// (4)\u3001\u6267\u884C\u6784\u9020\u51FD\u6570\u5185\u90E8\u7684\u4EE3\u7801</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">Constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// (5)\u3001\u5982\u679C\u6784\u9020\u51FD\u6570\u8FD4\u56DE\u975E\u7A7A\u5BF9\u8C61\uFF0C\u5219\u8FD4\u56DE\u8BE5\u5BF9\u8C61\uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE\u521A\u521B\u5EFA\u7684\u65B0\u5BF9\u8C61</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> result <span class="token operator">:</span> obj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u522B\u4EBA\u7684-new-\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u522B\u4EBA\u7684-new-\u5199\u6CD5" aria-hidden="true">#</a> \u522B\u4EBA\u7684 new \u5199\u6CD5</h2><p>THE LAST TIME</p><p>ES3 \u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">objectFactory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Object</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u4ECE Object.prototype \u4E0A\u514B\u9686\u4E00\u4E2A\u5BF9\u8C61</span>
    Constructor <span class="token operator">=</span> <span class="token class-name">Array</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53D6\u5F97\u5916\u90E8\u4F20\u5165\u7684\u6784\u9020\u5668\uFF0C\u53D6\u7B2C\u4E00\u4E2A\u53C2\u6570</span>
    <span class="token comment">// \u4EE5\u4E0B\u662F Object.create() \u7684\u6838\u5FC3</span>
    <span class="token keyword">var</span> <span class="token function-variable function">F</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    obj <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u6307\u5411\u6B63\u786E\u7684\u539F\u578B</span>

    <span class="token keyword">var</span> ret <span class="token operator">=</span> <span class="token function">Constructor</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u501F\u7528\u5916\u90E8\u4F20\u5165\u7684\u6784\u9020\u5668\u7ED9obj\u8BBE\u7F6E\u5C5E\u6027</span>
    <span class="token keyword">return</span> <span class="token keyword">typeof</span> ret <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> ret <span class="token operator">:</span> obj<span class="token punctuation">;</span> <span class="token comment">// \u786E\u4FDD\u6784\u9020\u5668\u603B\u662F\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u6D4B\u8BD5\u4E00\u6CE2</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">firstname<span class="token punctuation">,</span> lastname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstname <span class="token operator">=</span> firstname<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastname <span class="token operator">=</span> lastname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&#39;johnny&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;joestar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">new2</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">Constructor<span class="token punctuation">,</span> <span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Constructor</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">Constructor</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>instance<span class="token punctuation">,</span> <span class="token operator">...</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">User</span><span class="token punctuation">(</span><span class="token parameter">firstname<span class="token punctuation">,</span> lastname</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>firstname <span class="token operator">=</span> firstname<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>lastname <span class="token operator">=</span> lastname<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> user <span class="token operator">=</span> <span class="token function">new2</span><span class="token punctuation">(</span>User<span class="token punctuation">,</span> <span class="token string">&#39;johnny&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;joestar&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,23),f={href:"https://zhuanlan.zhihu.com/p/23987456?utm_medium=social&utm_source=wechat_session",target:"_blank",rel:"noopener noreferrer"},y=s("JS \u7684 new \u5230\u5E95\u662F\u5E72\u4EC0\u4E48\u7684\uFF1F");function _(v,g){const e=a("RouterLink"),o=a("ExternalLinkIcon");return l(),r(i,null,[b,n("p",null,[m,p(e,{to:"/JavaScript/%E5%8E%9F%E5%9E%8B.html"},{default:u(()=>[d]),_:1}),h]),w,n("ul",null,[n("li",null,[n("a",f,[y,p(o)])])])],64)}var x=c(k,[["render",_],["__file","\u6A21\u62DFnew\u7684\u5B9E\u73B0.html.vue"]]);export{x as default};
