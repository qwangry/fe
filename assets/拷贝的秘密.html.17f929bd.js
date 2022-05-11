import{_ as a,r as p,o as t,c as e,a as n,d as o,F as c,e as l,b as u}from"./app.873f0dc8.js";const r={},i=l(`<h1 id="\u62F7\u8D1D\u7684\u79D8\u5BC6" tabindex="-1"><a class="header-anchor" href="#\u62F7\u8D1D\u7684\u79D8\u5BC6" aria-hidden="true">#</a> \u62F7\u8D1D\u7684\u79D8\u5BC6</h1><p><strong>\u57FA\u672C\u7C7B\u578B</strong>\uFF1AString\u3001Number\u3001Boolean\u3001Null\u3001Undefined\u3001Symbol</p><p><strong>\u5F15\u7528\u7C7B\u578B</strong>\uFF1AObject</p><p>javascript \u7684\u5185\u5B58\u7BA1\u7406\u6709\u4E24\u79CD\uFF0C\u5806\u548C\u6808</p><p>\u57FA\u672C\u7C7B\u578B\u653E\u5728\u5806\u4E2D\uFF0C</p><p>\u5F15\u7528\u7C7B\u578B\u653E\u5728\u6808\u4E2D\uFF0C</p><p>\u57FA\u672C\u7C7B\u578B\u7684\u590D\u5236\u662F\u6587\u4EF6\u7684\u590D\u5236</p><p>\u5F15\u7528\u7C7B\u578B\u7684\u590D\u5236\u662F\u5730\u5740\u7684\u5F15\u7528</p><p>\u800C\u6211\u4EEC\u8BF4\u7684\u6DF1\u62F7\u8D1D\u3001\u6D45\u62F7\u8D1D\u662F\u5806 js \u5F15\u7528\u7C7B\u578B\u7684\u62F7\u8D1D</p><h2 id="\u5982\u4F55\u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u5982\u4F55\u5B9E\u73B0\u6DF1\u6D45\u62F7\u8D1D</h2><p>Q\uFF1A\u4EC0\u4E48\u65F6\u5019\u7528\u5230\u6DF1\u6D45\u62F7\u8D1D\uFF1F</p><p>A\uFF1A\u5F53\u6570\u636E\u7C7B\u578B\u5A01\u5F15\u7528\u7C7B\u578B\uFF0C\u9700\u8981\u5728\u4E0D\u5E94\u7528\u6E90\u6570\u636E\u65F6\u5806\u6570\u636E\u7684\u64CD\u4F5C</p><p><strong>\u6D45\u62F7\u8D1D\uFF1A\u9002\u7528\u4E8E\u5F15\u7528\u7C7B\u578B\u5185\u503C\u4E3A\u57FA\u672C\u7C7B\u578B</strong></p><p><strong>\u6DF1\u62F7\u8D1D\uFF1A\u9002\u7528\u4E8E\u5F15\u7528\u7C7B\u578B\u5185\u503C\u5305\u542B\u5F15\u7528\u7C7B\u578B</strong></p><p>\u6765\u89C2\u5BDF\u4E0B\u9762\u4E00\u4E2A\u573A\u666F</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">var</span> foo <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;johan&#39;</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">var</span> bar <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

<span class="token keyword">var</span> fooCopy <span class="token operator">=</span> foo<span class="token punctuation">;</span>
fooCopy<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&#39;elaine&#39;</span><span class="token punctuation">;</span>
fooCopy<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token number">33</span><span class="token punctuation">;</span>

console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>foo<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &#39;elaine&#39;, age: 33}</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>fooCopy<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// {name: &#39;elaine&#39;, age: 33}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u6D45\u62F7\u8D1D" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// 1.\u6570\u7EC4\u62F7\u8D1D slice</span>
<span class="token keyword">var</span> barSliceCopy <span class="token operator">=</span> bar<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 2.\u6570\u7EC4\u62F7\u8D1D concat</span>
<span class="token keyword">var</span> barConcatCopy <span class="token operator">=</span> bar<span class="token punctuation">.</span><span class="token function">concat</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// 3.\u5BF9\u8C61\u62F7\u8D1D {...}</span>
<span class="token keyword">var</span> fooEs6Copy <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>foo <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token comment">// 4.\u5BF9\u8C61\u62F7\u8D1D Object.assign()</span>
<span class="token keyword">var</span> fooAssignCopy <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> foo<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u672F\u8BED\u89E3\u91CA" tabindex="-1"><a class="header-anchor" href="#\u672F\u8BED\u89E3\u91CA" aria-hidden="true">#</a> \u672F\u8BED\u89E3\u91CA</h2><p>\u6D45\u62F7\u8D1D\uFF1A\u53EA\u590D\u5236\u4E00\u5C42</p><p>\u6DF1\u62F7\u8D1D\uFF1A\u65E0\u8BBA\u591A\u5C11\u5C42\u90FD\u80FD\u590D\u5236</p><h2 id="\u6D45\u62F7\u8D1D-\u53EA\u8003\u8651\u5BF9\u8C61\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u6D45\u62F7\u8D1D-\u53EA\u8003\u8651\u5BF9\u8C61\u7C7B\u578B" aria-hidden="true">#</a> \u6D45\u62F7\u8D1D\uFF1A\u53EA\u8003\u8651\u5BF9\u8C61\u7C7B\u578B</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">shallowCopy</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> newObj <span class="token operator">=</span> obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u7B80\u5355\u7248\u6DF1\u62F7\u8D1D\uFF1A\u53EA\u8003\u8651\u666E\u901A\u5BF9\u8C61\uFF0C\u4E0D\u8003\u8651\u5185\u7F6E\u5BF9\u8C61\u548C\u51FD\u6570</p><p>\u5C31\u7B2C\u4E00\u7248+\u9012\u5F52</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">deepClone</span><span class="token punctuation">(</span><span class="token parameter">obj</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> obj <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> newObj <span class="token operator">=</span> obj <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> obj<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>obj<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span>
                <span class="token keyword">typeof</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token operator">:</span> obj<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>JSON.parse(JSON.stringify(foo)) \u7684\u7F3A\u70B9\uFF1A</p><ul><li><code>undefined</code> \u3001\u4EFB\u610F\u7684\u51FD\u6570\u4EE5\u53CA <code>symbol</code> \u503C\uFF0C\u5728\u5E8F\u5217\u5316\u8FC7\u7A0B\u4E2D\u4F1A\u88AB\u5FFD\u7565\uFF08\u51FA\u73B0\u5728\u975E\u6570\u7EC4\u5BF9\u8C61\u7684-\u5C5E\u6027\u503C\u4E2D\u65F6\uFF09\u6216\u8005\u88AB\u8F6C\u79FB\u6210<code>null</code>\uFF08\u51FA\u73B0\u5728\u6570\u7EC4\u4E2D\u65F6\uFF09\u3002\u51FD\u6570\u3001<code>undefined</code> \u88AB\u5355\u72EC\u8F6C\u6362\u65F6\uFF0C\u4F1A\u8FD4\u56DE<code>undefined</code>\uFF0C\u5982<code>JSON.stringify(function(){})</code> or <code>JSON.stringify(undefined)</code></li><li>\u5BF9\u5305\u542B\u5FAA\u73AF\u5F15\u7528\u7684\u5BF9\u8C61\uFF08\u5BF9\u8C61\u4E4B\u95F4\u4E92\u76F8\u5F15\u7528\uFF0C\u5F62\u6210\u65E0\u9650\u5FAA\u73AF\uFF09\u6267\u884C\u6B64\u65B9\u6CD5\uFF0C\u4F1A\u629B\u51FA\u9519\u8BEF</li><li>\u6240\u6709\u4EE5<code>symbol</code> \u4E3A\u5C5E\u6027\u952E\u7684\u5C5E\u6027\u90FD\u4F1A\u88AB\u5B8C\u5168\u5FFD\u7565\u6389\uFF0C\u5373\u4FBF replacer \u53C2\u6570\u4E2D\u5F3A\u5236\u6307\u5B9A\u5305\u542B\u4E86\u5B83\u4EEC</li></ul><p>\u7B2C\u4E8C\u7248\uFF1A\u9488\u5BF9 Symbol \u548C \u5FAA\u73AF\u5E94\u7528\u505A\u5904\u7406</p><ul><li>Symbol\uFF1A\u6BCF\u4E2A\u4ECE <code>Symbol()</code> \u8FD4\u56DE\u7684 symbol \u503C\u90FD\u662F\u552F\u4E00\u7684\u3002\u4E00\u4E2A symbol \u503C\u80FD\u4F5C\u4E3A\u5BF9\u8C61\u5C5E\u6027\u7684\u6807\u8BC6\u7B26\uFF1B\u8FD9\u662F\u8BE5\u6570\u7EC4\u7C7B\u578B\u5EFA\u6709\u7684\u76EE\u7684</li><li>WeakMap\uFF1A<code>WeakMap</code> \u5BF9\u8C61\u65F6\u4E00\u7EC4\u952E/\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u5176\u4E2D\u7684\u952E\u65F6\u5F31\u5F15\u7528\u3002\u5176\u952E\u5FC5\u987B\u65F6\u5BF9\u8C61\uFF0C\u800C\u503C\u53EF\u4EE5\u662F\u4EFB\u4F55\u503C</li></ul><p>PS\uFF1Amap \u548C WeakMap \u7684\u533A\u522B\u5728\u4E8E\u7528 map \u58F0\u660E\u7684\u5BF9\u8C61\u4E4B\u95F4\u5B58\u5728\u5F3A\u5F15\u7528\u5173\u7CFB\u3002\u5373\u4F7F\u6211\u4EEC\u5C06\u503C\u8FDB\u884C\u91CA\u653E\uFF0C\u4F46\u662F\u56E0\u4E3A\u5B58\u5728\u5F3A\u5E94\u7528\u5173\u7CFB\uFF0C\u8FD9\u90E8\u5206\u5185\u5B58\u4F9D\u7136\u65E0\u6CD5\u88AB\u91CA\u653E\uFF0C\u800C\u4F7F\u7528 WeakMap \u7684\u8BDD\uFF0C\u56E0\u4E3A\u952E\u548C\u503C\u662F\u5F31\u5F15\u7528\u5173\u7CFB\uFF0C\u5F53\u4E0B\u4E00\u6B21\u5783\u573E\u56DE\u6536\u673A\u5236\u6267\u884C\u65F6\uFF0C\u8FD9\u5757\u5185\u5B58\u4F1A\u88AB\u91CA\u653E\u6389</p><p>\u9009\u62E9\u4F7F\u7528 WeakMap \u800C\u4E0D\u662F Map \u662F\u7531\u4E8E WeakMap \u6301\u6709\u7684\u662F\u6BCF\u4E2A\u952E\u5BF9\u8C61\u7684\u201D\u5F31\u5F15\u7528\u201C\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u6CA1\u6709\u5176\u4ED6\u5F15\u7528\u5B58\u5728\u65F6\u5783\u573E\u56DE\u6536\u80FD\u6B63\u5E38\u8FDB\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> deepClone <span class="token operator">=</span> <span class="token punctuation">(</span>source<span class="token punctuation">,</span> storage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WeakMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u666E\u901A\u7C7B\u578B\u76F4\u63A5\u8FD4\u56DE</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> source <span class="token operator">!==</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token keyword">return</span> source<span class="token punctuation">;</span>
    <span class="token comment">// \u662F\u5426\u662F\u6570\u7EC4</span>
    <span class="token keyword">let</span> newObj <span class="token operator">=</span> source <span class="token keyword">instanceof</span> <span class="token class-name">Array</span> <span class="token operator">?</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5FAA\u73AF\u5F15\u7528 - \u8FD4\u56DE\u5B58\u50A8\u7684\u5F15\u7528\u6570\u636E</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>storage<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> storage<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u5FAA\u73AF\u5E94\u7528 - \u8BBE\u7F6E\u4E34\u65F6\u5B58\u50A8\u503C</span>
    storage<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> newObj<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u662F\u5426\u5305\u542B Symbol \u7C7B\u578B</span>
    <span class="token keyword">let</span> isSymbol <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">getOwnPropertySymbols</span><span class="token punctuation">(</span>source<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u82E5\u5305\u542B Symbol \u7C7B\u578B</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>isSymbol<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        isSymbol<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">item</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> source<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                newObj<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">,</span> storage<span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">return</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            newObj<span class="token punctuation">[</span>item<span class="token punctuation">]</span> <span class="token operator">=</span> source<span class="token punctuation">[</span>item<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token comment">// \u4E0D\u5305\u542B Symbol</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> key <span class="token keyword">in</span> source<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>source<span class="token punctuation">.</span><span class="token function">hasOwnProperty</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            newObj<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">=</span>
                <span class="token keyword">typeof</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span> <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span>
                    <span class="token operator">?</span> <span class="token function">deepClone</span><span class="token punctuation">(</span>source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">,</span> storage<span class="token punctuation">)</span>
                    <span class="token operator">:</span> source<span class="token punctuation">[</span>key<span class="token punctuation">]</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> newObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,34),k={href:"https://zhuanlan.zhihu.com/p/338443023?utm_source=wechat_session&utm_medium=social&utm_oi=56197411504128",target:"_blank",rel:"noopener noreferrer"},b=u("\u95F2\u5EAD\u4FE1\u6B65\u804A\u524D\u7AEF - \u4E00\u6587\u6478\u6E05 ES \u62F7\u8D1D\u7684\u6DF1\u6D45");function d(m,y){const s=p("ExternalLinkIcon");return t(),e(c,null,[i,n("ul",null,[n("li",null,[n("a",k,[b,o(s)])])])],64)}var w=a(r,[["render",d],["__file","\u62F7\u8D1D\u7684\u79D8\u5BC6.html.vue"]]);export{w as default};
