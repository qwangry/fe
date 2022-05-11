import{_ as a,r as p,o as t,c as e,a as n,d as c,F as o,e as l,b as u}from"./app.873f0dc8.js";const i={},r=l(`<h1 id="\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> \u5355\u4F8B\u6A21\u5F0F</h1><p><strong>\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9</strong>\uFF0C\u8FD9\u6837\u7684\u6A21\u5F0F\u5C31\u53EB\u505A\u5355\u4F8B\u6A21\u5F0F\u3002</p><p>\u4F8B\u5B50\uFF1Aredux\uFF0Cvuex \u7B49\u552F\u4E00\u72B6\u6001\u6570\u636E\u5E93</p><p>\u5168\u5C40\u53EA\u80FD\u6709\u4E00\u4E2A\u5B9E\u4F8B</p><p>\u4E3A\u4EC0\u4E48</p><p>\u4E00\u5B9E\u73B0\u552F\u4E00\u6027</p><p>\u4E8C\u51CF\u5C11\u5185\u5B58\u7A7A\u95F4</p><p>\u5982\u4F55\u5B9E\u73B0\uFF1A</p><h4 id="\u9759\u6001\u51FD\u6570\u7248" tabindex="-1"><a class="header-anchor" href="#\u9759\u6001\u51FD\u6570\u7248" aria-hidden="true">#</a> \u9759\u6001\u51FD\u6570\u7248</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SingleDog</span> <span class="token punctuation">{</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\u662F\u4E00\u4E2A\u5355\u4F8B\u5BF9\u8C61&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> s1 <span class="token operator">=</span> <span class="token function">SingleDog</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u95ED\u5305\u7248" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305\u7248" aria-hidden="true">#</a> \u95ED\u5305\u7248</h4><h3 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h3><p>\u7CFB\u7EDF\u4E2D\u88AB\u552F\u4E00\u4F7F\u7528</p><p>\u4E00\u4E2A\u7C7B\u53EA\u6709\u4E00\u4E2A\u5B9E\u4F8B</p><h3 id="\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u8BF4\u660E" aria-hidden="true">#</a> \u8BF4\u660E</h3><p>\u5355\u4F8B\u6A21\u5F0F\u9700\u8981\u7528\u5230 java \u7684\u7279\u6027\uFF08private\uFF09</p><p>ES6 \u4E2D\u6CA1\u6709\uFF08typescript \u91CC\u6709\uFF09</p><h3 id="js-\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F" tabindex="-1"><a class="header-anchor" href="#js-\u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F" aria-hidden="true">#</a> JS \u4F7F\u7528\u5355\u4F8B\u6A21\u5F0F</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">SingleObject</span> <span class="token punctuation">{</span>
    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;login...&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
SingleObject<span class="token punctuation">.</span>getInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SingleObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u9A8C\u8BC1</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> obj1 <span class="token operator">=</span> SingleObject<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj1<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">let</span> obj2 <span class="token operator">=</span> SingleObject<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
obj2<span class="token punctuation">.</span><span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>obj1 <span class="token operator">===</span> obj2<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u573A\u666F" tabindex="-1"><a class="header-anchor" href="#\u573A\u666F" aria-hidden="true">#</a> \u573A\u666F</h3><p>JQuery \u53EA\u6709\u4E00\u4E2A$</p><p>\u6A21\u62DF\u767B\u5F55\u6846</p><p>vuex \u548C redux \u7684 store</p><h4 id="jquery" tabindex="-1"><a class="header-anchor" href="#jquery" aria-hidden="true">#</a> jQuery</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>window<span class="token punctuation">.</span>jQuery <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">return</span> window<span class="token punctuation">.</span>jQuery<span class="token punctuation">;</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>jQuery \u4E3B\u8981\u5C55\u793A\u4E86\u5355\u4F8B\u6A21\u5F0F\u7684\u601D\u7EF4</p><h4 id="\u6A21\u62DF\u767B\u5F55\u6846" tabindex="-1"><a class="header-anchor" href="#\u6A21\u62DF\u767B\u5F55\u6846" aria-hidden="true">#</a> \u6A21\u62DF\u767B\u5F55\u6846</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">class</span> <span class="token class-name">LoginForm</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&#39;hide&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;show&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u5DF2\u7ECF\u663E\u793A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&#39;show&#39;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u767B\u5F55\u6846\u5DF2\u663E\u793A&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">===</span> <span class="token string">&#39;hide&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">&#39;\u5DF2\u7ECF\u9690\u85CF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">return</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>state <span class="token operator">=</span> <span class="token string">&#39;hide&#39;</span><span class="token punctuation">;</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;\u767B\u5F55\u6846\u5DF2\u9690\u85CF&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
LoginForm<span class="token punctuation">.</span>getInstance <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> instance<span class="token punctuation">;</span>
    <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>instance<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LoginForm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> instance<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><h4 id="vuex-\u548C-redux-\u7684-store" tabindex="-1"><a class="header-anchor" href="#vuex-\u548C-redux-\u7684-store" aria-hidden="true">#</a> vuex \u548C redux \u7684 store</h4><h3 id="\u8BBE\u8BA1\u539F\u5219\u9A8C\u8BC1" tabindex="-1"><a class="header-anchor" href="#\u8BBE\u8BA1\u539F\u5219\u9A8C\u8BC1" aria-hidden="true">#</a> \u8BBE\u8BA1\u539F\u5219\u9A8C\u8BC1</h3><p>\u7B26\u5408\u5355\u4E00\u804C\u8D23\u539F\u5219\uFF0C\u53EA\u5B9E\u4F8B\u5316\u552F\u4E00\u7684\u5BF9\u8C61</p><p>\u6CA1\u6709\u5177\u4F53\u5F00\u53D1\u5C01\u95ED\u539F\u5219\uFF0C\u4F46\u662F\u7EDD\u5BF9\u4E0D\u8FDD\u53CD\u5F00\u53D1\u5C01\u88C5\u539F\u5219</p><h3 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h3><p>\u4F7F\u7528 TypeScript \u5B9E\u73B0\u5355\u4F8B\u6A21\u5F0F</p><p>\u6709\u4E2A\u70B9\u4E0D\u592A\u660E\u767D\uFF0C\u65E2\u7136\u767B\u5F55\u6846\u662F</p><p>\u4E3A\u4EC0\u4E48\u8981\u5F04\u4E24\u4E2A\u767B\u5F55\u6846\uFF0C\u4E00\u4E2A\u4E0D\u4E45\u591F\u4E86</p><p>\u8BA9\u4ED6\u663E\u793A\u548C\u9690\u85CF</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,40),k={href:"https://refactoringguru.cn/design-patterns/singleton",target:"_blank",rel:"noopener noreferrer"},d=u("\u6DF1\u5165\u8BBE\u8BA1\u6A21\u5F0F");function b(h,m){const s=p("ExternalLinkIcon");return t(),e(o,null,[r,n("ul",null,[n("li",null,[n("a",k,[d,c(s)])])])],64)}var f=a(i,[["render",b],["__file","\u5355\u4F8B\u6A21\u5F0F.html.vue"]]);export{f as default};
