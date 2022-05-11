import{_ as t,r as e,o,c,a as n,d as a,F as l,e as u,b as p}from"./app.873f0dc8.js";const r={},i=u(`<h1 id="\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u3001\u5B9E\u4F8B\u3001\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u3001\u5B9E\u4F8B\u3001\u7C7B" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u3001\u5B9E\u4F8B\u3001\u7C7B</h1><h3 id="\u524D\u8A00" tabindex="-1"><a class="header-anchor" href="#\u524D\u8A00" aria-hidden="true">#</a> \u524D\u8A00</h3><p>\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u3001\u5B9E\u4F8B\u3001\u7C7B\u662F\u5206\u522B\u662F\u4EC0\u4E48\uFF1F\u600E\u4E48\u89E3\u91CA</p><h3 id="\u6784\u9020\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u6784\u9020\u51FD\u6570" aria-hidden="true">#</a> \u6784\u9020\u51FD\u6570</h3><p>\u4E00\u79CD\u7528\u4E8E\u521B\u5EFA\u6216\u8005\u521D\u59CB\u5316 class \u5BF9\u8C61\u7684\u7279\u6B8A\u65B9\u6CD5\uFF1B</p><p>\u751F\u6210\u5BF9\u8C61 \u57FA\u4E8E\u6784\u9020\u51FD\u6570\u548C\u539F\u578B</p><p>var obj = {}</p><p>1\u3001<strong>constructor \u51FD\u6570\u6A21\u677F</strong> \u521B\u5EFA\u5BF9\u8C61</p><p>2\u3001constructor \u5C5E\u6027 \u544A\u8BC9 \u5B9E\u4F8B \u4F60\u7684\u7238\u7238\u662F\u8C01 \u8C01\u521B\u9020\u4E86\u4F60</p><p>\u5BF9\u8C61\u3001\u51FD\u6570\u3001\u539F\u578B\u3001\u7EE7\u627F\u3001\u6784\u9020\u51FD\u6570\u3001\u5B9E\u4F8B\u3001\u7C7B</p><p>\u9AD8\u7A0B 4 \u4E2D\u5BF9\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u548C\u5B9E\u4F8B\u7684\u5173\u7CFB\u7684\u63CF\u8FF0\uFF1A</p><blockquote><p>\u6BCF\u4E2A\u6784\u9020\u51FD\u6570\u90FD\u6709\u4E00\u4E2A\u539F\u578B\u5BF9\u8C61\uFF0C\u539F\u578B\u6709\u4E00\u4E2A\u5C5E\u6027\u6307\u56DE\u6784\u9020\u51FD\u6570\uFF0C\u800C\u5B9E\u4F8B\u6709\u4E00\u4E2A\u5185\u90E8\u6307\u9488\uFF08<code>__proto__</code>\uFF09\u6307\u5411\u539F\u578B\u3002</p></blockquote><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">name<span class="token punctuation">,</span> age</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>age <span class="token operator">=</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">sayName</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;hello&#39;</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> johan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;johan&#39;</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u8FD9\u4E2A\u6848\u4F8B\u4E2D\uFF0CPerson \u662F\u6784\u9020\u51FD\u6570\uFF0C\u5B83\u6709\u4E00\u4E2A\u5C5E\u6027 prototype\uFF0C\u8FD9\u4E2A\u5C5E\u6027\u8D1F\u8D23\u6784\u9020\u51FD\u6570\u5171\u4EAB\u7684\u6570\u636E\u3001\u65B9\u6CD5\u3002\u800C\u8FD9\u4E2A\u539F\u578B\u5BF9\u8C61\u6709\u4E00\u4E2A\u5C5E\u6027\u53EB constructor\uFF0C\u6307\u56DE\u6784\u9020\u51FD\u6570 Person\u3002\u7531 Person \u6784\u5EFA\u51FA\u7684\u5B9E\u4F8B johan\uFF0C\u6709\u4E00\u4E2A\u5185\u90E8\u6307\u9488\uFF08<code>__proto__</code>\uFF09\u6307\u5411\u521B\u5EFA\u5B83\u7684\u539F\u578B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>constructor <span class="token operator">===</span> Person<span class="token punctuation">;</span>
johan<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD9\u91CC\u4E0D\u4EC5\u6709\u4E00\u4E2A\u601D\u8003\uFF1F\u5982\u679C\u539F\u578B\u662F\u53E6\u4E00\u4E2A\u7C7B\u578B\u7684\u5B9E\u4F8B\u5462\uFF1F\u90A3\u5C31\u610F\u5473\u7740\u8FD9\u4E2A\u539F\u578B\u672C\u8EAB\u6709\u4E00\u4E2A\u5185\u90E8\u6307\u9488\u6307\u5411\u53E6\u4E00\u4E2A\u539F\u578B\uFF0C\u76F8\u5E94\u5730\u53E6\u4E00\u4E2A\u539F\u578B\u4E5F\u6709\u4E00\u4E2A\u6307\u9488\u6307\u5411\u53E6\u4E00\u4E2A\u6784\u9020\u51FD\u6570\uFF0C\u8FD9\u6837\u5C31\u5728\u5B9E\u4F8B\u548C\u539F\u578B\u4E4B\u95F4\u6784\u5EFA\u4E86\u4E00\u6761\u539F\u578B\u94FE</p><p><img src="https://i.loli.net/2021/04/15/nfZbSWMTjVzr2lv.png" alt="image-20210415144321299"></p><p>\u672C\u8D28\u662F\u94FE\u8868\uFF0C\u6BCF\u4E2A\u6784\u9020\u51FD\u6570\u4E2D\u7684\u539F\u578B\u662F\u4E00\u4E2A\u8282\u70B9\uFF0C\u901A\u8FC7\u8282\u70B9\u6765\u8FDB\u884C\u7EE7\u627F</p><p>\u800C\u201C\u5B9E\u4F8B\u201D\u4E00\u8BCD\uFF0C\u7ED9\u4EBA\u7684\u611F\u89C9\u662F\u548C\u7C7B\u76F8\u5173</p><p>\u7528\u539F\u578B\u94FE\u600E\u4E48\u4E2A\u7EE7\u627F\u6CD5\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> johan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>johan<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p><img src="https://i.loli.net/2021/04/15/YIUl3MLayuTpNRk.png" alt="image-20210415152547277"></p><p>\u5173\u7CFB\u4F2A\u4EE3\u7801\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>johan<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>colors <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;red&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;green&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> johan <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

johan<span class="token punctuation">.</span>colors<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">&#39;yellow&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>johan<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> elaine <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Man</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>elaine<span class="token punctuation">.</span>colors<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>\u5728 Person \u4E2D\u5B9A\u4E49\u7684\u5C5E\u6027\uFF0C\u56E0\u4E3A\u7EE7\u627F\u7684\u7F18\u6545\uFF08Man.prototype = new Person()\uFF09\uFF0C\u4F7F\u5F97 Person \u7684\u5C5E\u6027\u53D8\u6210\u4E86\u516C\u5171\u5C5E\u6027</p><p>new Person() \u5C31\u662F\u521B\u5EFA\u4E00\u4E2A\u5B9E\u4F8B</p><p>Man.prototype = new Person()</p><p>Man \u8FD9\u4E2A\u6784\u9020\u51FD\u6570\u7684\u539F\u578B\u7B49\u4E8E Person \u521B\u5EFA\u7684\u4E00\u4E2A\u5B9E\u4F8B</p><p>\u8FD9\u4E2A\u5B9E\u4F8B\u7684<code>__proto__</code> \u7B49\u4E8E Person.prototype</p><p>\u6240\u4EE5\u53EF\u4EE5\u7FFB\u8BD1\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Man</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u53EF\u4EE5\u7FFB\u8BD1\u4E3A</span>
<span class="token class-name">Man</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u8FD8\u8BB0\u5F97\u4E4B\u524D\u7684\u4F8B\u5B50\u5417\uFF1F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token class-name">Person</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">Object</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u6211\u89C9\u5F97\u4EE5\u540E\u770B\u5230 new \u7684\u7B2C\u4E00\u53CD\u5E94\u662F\uFF1A</p><p><code>\u5B9E\u4F8B.__proto__ === \u6784\u9020\u51FD\u6570.prototype</code></p><h3 id="\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u7C7B" aria-hidden="true">#</a> \u7C7B</h3><h4 id="\u4EC0\u4E48\u662F\u7C7B" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u7C7B" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u7C7B\uFF1F</h4><p>\u56DE\u5230\u4E0A\u8FF0\u95EE\u9898</p><p>\u7C7B\u548C\u5B9E\u4F8B\u662F\u5339\u914D\u7684\uFF0C\u91D1\u4E1D\u96C0\u662F\u9E1F\u7C7B\u7684\u4E00\u79CD\u3002\u5BF9\u4E2A\u4EBA\u5BF9\u96C6\u4F53\u7684\u5173\u7CFB</p><p>\u800C\u539F\u578B\u662F\u94FE\u8868\u5173\u7CFB\uFF0C\u5C31\u597D\u6BD4\u53E4\u8463\u6536\u85CF\uFF0C\u6211\u662F\u8499\u5A1C\u4E3D\u838E\u7684\u62E5\u6709\u8005\uFF0C\u5B83\u7684\u4E0A\u4E00\u4EFB\u662F XX\uFF0C\u5B83\u7684\u4E0A\u4E0A\u4EFB\u662F XXX\uFF0C\u5728 JavaScript \u8BED\u8A00\u4E2D\uFF0C\u4F60\u80FD\u52A8\u6001\u6539\u53D8\u4E0A\u4E00\u4EFB\u6216\u8005\u4E0A\u4E0A\u4EFB\u3002\u53EA\u8981\u628A prototype \u5BF9\u8C61\u4E2D\u7684 constructor \u6307\u5411\u66F4\u6539\u5373\u53EF</p><p>\u7C7B\u7EE7\u627F\uFF0C\u662F\u96C6\u5408\u7EE7\u627F</p><p>\u539F\u578B\u7EE7\u627F\uFF0C\u662F\u6811\u72B6\u7EE7\u627F</p><p>\u672C\u8D28\u662F\u94FE\u8868\uFF0C\u6BCF\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u662F\u4E00\u4E2A\u8282\u70B9\uFF0C\u800C\u4E0D\u662F\u51E0\u4E2A\u96C6\u5408</p><h4 id="\u539F\u578B\u5F0F\u7EE7\u627F" tabindex="-1"><a class="header-anchor" href="#\u539F\u578B\u5F0F\u7EE7\u627F" aria-hidden="true">#</a> \u539F\u578B\u5F0F\u7EE7\u627F</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">object</span><span class="token punctuation">(</span><span class="token parameter">o</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">function</span> <span class="token constant">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token class-name">F</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> o<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">F</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> person <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;Nicholas&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">friends</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;Shelby&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Court&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Van&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> a <span class="token operator">=</span> <span class="token function">object</span><span class="token punctuation">(</span>person<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token punctuation">(</span>a<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">F</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span> <span class="token operator">===</span> person<span class="token punctuation">;</span>
a<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> person<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>\u9996\u5148\u662F\u5BF9\u8C61\uFF0C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">myNew</span><span class="token punctuation">(</span><span class="token parameter">Con<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> obj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token class-name">Con</span><span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> result <span class="token operator">=</span> <span class="token function">Con</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> rest<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> obj<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u793E\u533A\u4E0A\u4E00\u76F4\u6709\u4EBA\u8BF4\uFF1A\u7C7B\u7684\u6982\u5FF5\uFF0C\u4F46\u662F JavaScript \u662F\u8FD9\u6837\u5417\uFF1F</p><p>JavaScript \u7684\u201D\u7C7B\u6A21\u5F0F\u201C\u7684\u672C\u8D28\u662F \u57FA\u4E8E\u539F\u578B\u800C\u505A\u7684</p><p>\u539F\u578B\u7EE7\u627F\u662F\u600E\u4E48\u6837\u7684</p><p>\u7C7B\u7EE7\u627F\u6709\u4EC0\u4E48\u95EE\u9898</p><p>\u601D\u60F3\u4E0A\u7684\u6539\u53D8</p><p>\u57FA\u4E8E\u539F\u578B\u7684\u7EE7\u627F\u662F\u6307\u9488\u7684\u7EE7\u627F\uFF0C\u597D\u6BD4\u4F60\u6709\u4E00\u5757\u5B9D\u77F3\uFF0C\u4F20\u7ED9\u4E86\u4E00\u4E2A\u4EBA\uFF0C\u7136\u540E\u8FD9\u4E2A\u4EBA\u628A\u5B9D\u77F3\u9576\u5D4C\u5230\u624B\u5957\u91CC\uFF0C\u518D\u4F20\u7ED9\u4E86\u53E6\u4E00\u4E2A\u4EBA\uFF0C</p><p>\u800C\u57FA\u4E8E\u7C7B\u7684\u8054\u60F3\uFF0C\u4EBA\u4EEC\u4F1A\u60F3\u5F53\u7136\u7684\u8FD9\u4E48\u60F3\uFF1A</p><p>\u52A8\u7269\u662F\u52A8\u7269\u7C7B\uFF0C\u72D7\u4E5F\u662F\u4E00\u79CD\u7C7B\uFF0C\u54C8\u58EB\u5947\u662F\u72D7\u7C7B\u7684\u4E00\u4E2A\u5B9E\u4F8B\uFF0C</p><p>\u95EE\u9898\u6765\u4E86\uFF0C\u4F60\u600E\u4E48\u770B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>dog<span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Animal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// \u6309\u7167\u7C7B\u7684\u601D\u8003\u6A21\u5F0F\uFF1A\u5B9E\u4F8B\u7684\u539F\u578B\u7EE7\u627F\u81EA\u52A8\u7269</span>
<span class="token keyword">class</span> <span class="token class-name">Dog</span> <span class="token keyword">extends</span> <span class="token class-name">Animal</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u672C\u8D28\u662F\u94FE\u8868\uFF0C\u6BCF\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u662F\u4E00\u4E2A\u8282\u70B9\uFF0C\u800C\u4E0D\u662F\u51E0\u4E2A\u96C6\u5408</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">YeFamily</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">YeFamily</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">xinfa</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0A\u5929\u4E0B\u5730\u65E0\u654C\u5FC3\u6CD5&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">OldMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">OldMan</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">YeFamily</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">OldMan</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">has</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u4E0A\u53E4\u76D4\u7532&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">function</span> <span class="token function">DayMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token class-name">DayMan</span><span class="token punctuation">.</span>prototype <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OldMan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token class-name">DayMan</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span><span class="token function-variable function">say</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u7231\u5439\u725B\u903C&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u6240\u8C13\u7684\u7EE7\u627F\uFF0C\u5C31\u662F<code>__proto__</code> \u6307\u9488\u6307\u5411\u5BF9\u8C61\u7684\u95EE\u9898</p><p>\u8FD9\u4E2A\u4F8B\u5B50\u4E5F\u4E0D\u592A\u597D</p><p>\u56E0\u4E3A\u6307\u9488\u6709\u4EFB\u610F\u6027\u7684\u7279\u70B9</p><p>\u5C11\u5E74\u53EF\u4EE5\u7EE7\u627F\u81EA\u7236\u4EB2\uFF08\u7EC4\u957F\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u7EE7\u627F\u81EA\u8001\u65CF\u957F\u6216\u8005\u8001\u7956\u5B97\uFF0C\u53EA\u4E0D\u8FC7\u7EE7\u627F\uFF08<code>__proto__</code>\u6307\u5411\u95EE\u9898\uFF09</p><p>\u8FD9\u91CC\u7275\u626F\u5230 new \u95EE\u9898\uFF0Cnew \u64CD\u4F5C\u7B26\u4F1A\u5728\u5185\u90E8\u521B\u5EFA\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u7EE7\u627F\u81EA\u6784\u9020\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token keyword">class</span> <span class="token class-name">B</span> <span class="token keyword">extends</span> <span class="token class-name">A</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>

<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">B</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u7B54\u6848\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>b<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
<span class="token class-name">B</span><span class="token punctuation">.</span>prototype<span class="token punctuation">.</span>__proto__ <span class="token operator">===</span> <span class="token class-name">A</span><span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u539F\u578B\u662F\u4EC0\u4E48\uFF1F\u539F\u578B\u5BF9\u8C61\u53C8\u662F\u4EC0\u4E48\uFF1F</p><p><code>Function.__proto__ === Function.prototype</code></p><h3 id="\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u9762\u8BD5\u9898</h3><p>\u989C\u6D77\u955C\u539F\u578B\u9762\u8BD5\u9898</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,73),k={href:"http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html",target:"_blank",rel:"noopener noreferrer"},d=p("JavaScript \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B\uFF08\u4E8C\uFF09\uFF1A\u6784\u9020\u51FD\u6570\u7684\u7EE7\u627F"),b={href:"https://juejin.cn/post/6844903856376119304",target:"_blank",rel:"noopener noreferrer"},m=p("\u4ECE\u539F\u578B\u804A\u5230\u539F\u578B\u7EE7\u627F\uFF0C\u6DF1\u5165\u7406\u89E3 JavaScript \u9762\u5411\u5BF9\u8C61\u7CBE\u9AD3"),_={href:"https://segmentfault.com/a/1190000002596600",target:"_blank",rel:"noopener noreferrer"},y=p("\u4E3A\u4EC0\u4E48\u539F\u578B\u7EE7\u627F\u5F88\u91CD\u8981");function h(v,g){const s=e("ExternalLinkIcon");return o(),c(l,null,[i,n("ul",null,[n("li",null,[n("p",null,[n("a",k,[d,a(s)])])]),n("li",null,[n("p",null,[n("a",b,[m,a(s)])])]),n("li",null,[n("p",null,[n("a",_,[y,a(s)])])])])],64)}var f=t(r,[["render",h],["__file","\u6784\u9020\u51FD\u6570\u3001\u539F\u578B\u3001\u5B9E\u4F8B\u3001\u7C7B.html.vue"]]);export{f as default};
