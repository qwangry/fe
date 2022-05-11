import{_ as p,r as o,o as t,c as r,a as n,d as e,F as c,e as l,b as a}from"./app.873f0dc8.js";const i={},u=l(`<h1 id="mongodb" tabindex="-1"><a class="header-anchor" href="#mongodb" aria-hidden="true">#</a> MongoDB</h1><h2 id="\u4EC0\u4E48\u662F-mongodb" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-mongodb" aria-hidden="true">#</a> \u4EC0\u4E48\u662F MongoDB</h2><ul><li><p>MongoDB \u662F\u4E00\u4E2A\u57FA\u4E8E\u5206\u5E03\u5F0F\u6587\u4EF6\u5B58\u50A8\u7684\u5F00\u6E90\u6570\u636E\u5E93\u7CFB\u7EDF</p></li><li><p>MongoDB \u5C06\u6570\u636E\u5B58\u50A8\u4E3A\u4E00\u4E2A\u6587\u6863\uFF0C\u6570\u636E\u7ED3\u6784\u7531\u952E\u503C\uFF08key=&gt;value\uFF09\u5BF9\u7EC4\u6210\u3002MongoDB \u6587\u6863\u7C7B\u4F3C\u4E8E JSON \u5151\u73B0\u3002\u5B57\u6BB5\u503C\u53EF\u4EE5\u5305\u542B\u5176\u4ED6\u6587\u6863\uFF0C\u6570\u7EC4\u53CA\u6587\u6863\u6570\u7EC4</p></li></ul><h2 id="mongodb-\u57FA\u672C\u6982\u5FF5" tabindex="-1"><a class="header-anchor" href="#mongodb-\u57FA\u672C\u6982\u5FF5" aria-hidden="true">#</a> MongoDB \u57FA\u672C\u6982\u5FF5</h2><ul><li><strong>\u6570\u636E\u5E93</strong> MongoDB \u7684\u5355\u4E2A\u5B9E\u4F8B\u53EF\u4EE5\u5BB9\u7EB3\u591A\u4E2A\u72EC\u7ACB\u7684\u6570\u636E\u5E93\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5B66\u751F\u7BA1\u7406\u7CFB\u7EDF\u5C31\u53EF\u4EE5\u5BF9\u5E94\u4E00\u4E2A\u6570\u636E\u5E93\u5B9E\u4F8B</li><li><strong>\u96C6\u5408</strong> \u6570\u636E\u5E93\u662F\u7531\u96C6\u5408\u7EC4\u6210\uFF0C\u4E00\u4E2A\u96C6\u5408\u7528\u6765\u8868\u793A\u4E00\u4E2A\u5B9E\u4F53\uFF0C\u5982\u5B66\u751F\u96C6\u5408</li><li><strong>\u6587\u6863</strong> \u96C6\u5408\u662F\u7531\u6587\u6863\u7EC4\u6210\uFF0C\u4E00\u4E2A\u6587\u6863\u8868\u793A\u4E00\u6761<strong>\u8BB0\u5F55</strong>\uFF0C\u6BD4\u5982\u4E00\u4F4D\u540C\u5B66</li></ul><p>MongoDB \u4E0E Mysql \u7684\u533A\u522B</p><table><thead><tr><th>Mongodb</th><th>Mysql</th></tr></thead><tbody><tr><td>\u6587\u6863\uFF08document\uFF09\uFF08\u5355\u4E2A\u6587\u6863\u6700\u5927 16M\uFF09</td><td>\u8BB0\u5F55\uFF08row\uFF09</td></tr><tr><td>\u96C6\u5408\uFF08collection\uFF09</td><td>\u8868\uFF08table\uFF09</td></tr><tr><td>\u6570\u636E\u5E93\uFF08database\uFF09</td><td>\u6570\u636E\u5E93\uFF08database\uFF09</td></tr></tbody></table><h3 id="\u6570\u636E\u5E93\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u6570\u636E\u5E93\u64CD\u4F5C" aria-hidden="true">#</a> \u6570\u636E\u5E93\u64CD\u4F5C</h3><h4 id="\u4F7F\u7528\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u6570\u636E\u5E93" aria-hidden="true">#</a> \u4F7F\u7528\u6570\u636E\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>use database_name
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>database_name \u4EE3\u8868\u6570\u636E\u5E93\u7684\u540D\u5B57</li><li>\u6CE8\uFF1A\u5982\u679C\u6B64\u6570\u636E\u5E93\u5B58\u5728\uFF0C\u5219\u5207\u6362\u5230\u6B64\u6570\u636E\u5E93\u4E0B\uFF0C\u5982\u679C\u6B64\u6570\u636E\u5E93\u4E0D\u5B58\u5728\u4E5F\u53EF\u4EE5\u5207\u8FC7\u6765\uFF0C\u4F46\u662F\u5E76\u4E0D\u80FD\u7ACB\u523B\u521B\u5EFA\u6570\u636E\u5E93</li></ul><p>\u5207\u6362\u5230 scholl \u6570\u636E\u5E93\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>use school
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u6570\u636E\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>show dbs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u5907\u6CE8\uFF1A\u6211\u4EEC\u521A\u521B\u5EFA\u7684\u6570\u636E\u5E93 <code>school</code> \u5982\u679C\u4E0D\u5728\u5217\u8868\u5185\uFF0C\u8981\u663E\u793A\u5B83\uFF0C\u6211\u4EEC\u9700\u8981\u5411 <code>school</code> \u6570\u636E\u5E93\u63D2\u5165\u4E00\u4E9B\u6570\u636E</li></ul><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.students.insert<span class="token punctuation">(</span><span class="token punctuation">{</span>name: <span class="token string">&#39;johan&#39;</span>, age: <span class="token number">18</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>\u6CE8\uFF1Adb \u4EE3\u8868\u7684\u662F\u5F53\u524D\u6570\u636E\u5E93 \u4E5F\u5C31\u662F school \u6570\u636E\u5E93</li></ul><h4 id="\u5220\u9664\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664\u6570\u636E\u5E93" aria-hidden="true">#</a> \u5220\u9664\u6570\u636E\u5E93</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.dropDatabase<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u96C6\u5408\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u96C6\u5408\u64CD\u4F5C" aria-hidden="true">#</a> \u96C6\u5408\u64CD\u4F5C</h3><h4 id="\u67E5\u627E\u96C6\u5408\u5E2E\u52A9" tabindex="-1"><a class="header-anchor" href="#\u67E5\u627E\u96C6\u5408\u5E2E\u52A9" aria-hidden="true">#</a> \u67E5\u627E\u96C6\u5408\u5E2E\u52A9</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.students.help<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u63D2\u5165\u6587\u6863" tabindex="-1"><a class="header-anchor" href="#\u63D2\u5165\u6587\u6863" aria-hidden="true">#</a> \u63D2\u5165\u6587\u6863</h3><h4 id="insert" tabindex="-1"><a class="header-anchor" href="#insert" aria-hidden="true">#</a> insert</h4><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.student.insert<span class="token punctuation">(</span><span class="token punctuation">{</span>name: <span class="token string">&quot;elaine&quot;</span>, age: <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h4 id="save" tabindex="-1"><a class="header-anchor" href="#save" aria-hidden="true">#</a> save</h4><p>\u4FDD\u5B58</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>db.student.save<span class="token punctuation">(</span><span class="token punctuation">{</span>name: <span class="token string">&quot;elaine&quot;</span>, age: <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4EC0\u4E48\u662F-mongoose" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F-mongoose" aria-hidden="true">#</a> \u4EC0\u4E48\u662F Mongoose</h3><ul><li><p>Mongoose \u662F MongoDB \u7684\u4E00\u4E2A\u5BF9\u8C61\u6A21\u578B\u5DE5\u5177</p></li><li><p>\u540C\u65F6\u5B83\u4E5F\u662F\u9488\u5BF9 MongoDB \u64CD\u4F5C\u7684\u4E00\u4E2A\u5BF9\u8C61\u6A21\u578B\u5E93\uFF0C\u5C01\u88C5\u4E86 MongoDB \u5BF9\u6587\u6863\u7684\u4E00\u4E9B\u589E\u5220\u6539\u67E5\u7B49\u5E38\u7528\u65B9\u6CD5</p></li></ul><h2 id="\u4F7F\u7528-monggose" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-monggose" aria-hidden="true">#</a> \u4F7F\u7528 monggose</h2><h3 id="\u5B89\u88C5-mongoose" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-mongoose" aria-hidden="true">#</a> \u5B89\u88C5 mongoose</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>cnpm i mongoose -S
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u4F7F\u7528-mongoose" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-mongoose" aria-hidden="true">#</a> \u4F7F\u7528 mongoose</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> mongoose <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;mongoose&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">// const db = mongoose.connect(&quot;mongodb://user:pass@ip:port/database&quot;)</span>

mongoose<span class="token punctuation">.</span><span class="token function">connect</span><span class="token punctuation">(</span><span class="token string">&#39;mongodb://localhost:27017/school&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">useNewUrlParser</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token literal-property property">useUnifiedTopology</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

mongoose<span class="token punctuation">.</span>connection<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">&#39;open&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Mongoose\u8FDE\u63A5\u6210\u529F&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h3 id="schema" tabindex="-1"><a class="header-anchor" href="#schema" aria-hidden="true">#</a> Schema</h3><p>Schema \u662F\u6570\u636E\u5E93\u96C6\u5408\u7684\u6A21\u578B\u9AA8\u67B6 \u5B9A\u4E49\u4E86\u96C6\u5408\u4E2D\u7684\u5B57\u6BB5\u7684\u540D\u79F0\u548C\u7C7B\u578B\u4EE5\u53CA\u9ED8\u8BA4\u503C\u4FE1\u606F</p><h4 id="schema-type" tabindex="-1"><a class="header-anchor" href="#schema-type" aria-hidden="true">#</a> Schema.Type</h4><p>NodeJS \u4E2D\u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u90FD\u5C5E\u4E8E Schema.Type \u53E6\u5916 Mongoose \u8FD8\u5B9A\u4E49\u4E86\u81EA\u5DF1\u7684\u7C7B\u578B</p><p>\u57FA\u672C\u5C5E\u6027\u7C7B\u578B\u6709\uFF1A</p><ul><li>String</li><li>Number</li><li>Date</li><li>Boolean</li><li>\u6570\u7EC4</li><li>nul</li><li>\u5185\u5D4C\u6587\u6863</li></ul><h4 id="\u5B9A\u4E49-schema" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49-schema" aria-hidden="true">#</a> \u5B9A\u4E49 Schema</h4><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> personSchema <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Schema</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Type</span><span class="token operator">:</span> String <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">binary</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Type</span><span class="token operator">:</span> Buffer <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">living</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Type</span><span class="token operator">:</span> Boolean <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Type</span><span class="token operator">:</span> Date <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Type</span><span class="token operator">:</span> Number <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">_id</span><span class="token operator">:</span> Schema<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>ObjectId<span class="token punctuation">,</span> <span class="token comment">// \u4E3B\u952E</span>
    <span class="token literal-property property">_fk</span><span class="token operator">:</span> Schema<span class="token punctuation">.</span>Types<span class="token punctuation">.</span>ObjectId<span class="token punctuation">,</span> <span class="token comment">// \u5916\u952E</span>
    <span class="token literal-property property">array</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">Type</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u4E0D\u786E\u5B9A</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="model" tabindex="-1"><a class="header-anchor" href="#model" aria-hidden="true">#</a> Model</h4><p>Model \u662F\u7531\u901A\u8FC7 Schema \u6784\u9020\u800C\u6210 \u9664\u4E86\u5177\u6709 Schema \u5B9A\u4E49\u7684\u6570\u636E\u5E93\u9AA8\u67B6\u4EE5\u5916\uFF0C\u8FD8\u53EF\u4EE5\u64CD\u4F5C\u6570\u636E\u5E93\u3002\u5982\u4F55\u901A\u8FC7 Schema \u6765\u521B\u5EFA Modal\uFF0C\u5982\u4E0B\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">let</span> User <span class="token operator">=</span> mongoose<span class="token punctuation">.</span><span class="token function">model</span><span class="token punctuation">(</span><span class="token string">&#39;User&#39;</span><span class="token punctuation">,</span> schema<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="\u56FE\u5F62\u5DE5\u5177\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u56FE\u5F62\u5DE5\u5177\u63A8\u8350" aria-hidden="true">#</a> \u56FE\u5F62\u5DE5\u5177\u63A8\u8350</h3>`,50),d={href:"https://robomongo.org/download",target:"_blank",rel:"noopener noreferrer"},h=a("Robo 3T\uFF08\u63A8\u8350\uFF09"),b=a("\uFF08\u514D\u8D39\uFF09"),k={href:"https://robomongo.org/",target:"_blank",rel:"noopener noreferrer"},m=a("Studio 3T"),g=a("\uFF08\u4ED8\u8D39\uFF09"),v=n("p",null,"NoSQLBooster for MongoDB",-1);function y(f,x){const s=o("ExternalLinkIcon");return t(),r(c,null,[u,n("p",null,[n("a",d,[h,e(s)]),b]),n("p",null,[n("a",k,[m,e(s)]),g]),v],64)}var M=p(i,[["render",y],["__file","MongoDB.html.vue"]]);export{M as default};
