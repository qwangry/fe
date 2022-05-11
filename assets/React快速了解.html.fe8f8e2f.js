import{_ as l,r,o as i,c,a as e,d as t,w as p,F as d,e as s,b as a}from"./app.873f0dc8.js";const h={},u=s('<h1 id="react-\u5FEB\u901F\u4E86\u89E3" tabindex="-1"><a class="header-anchor" href="#react-\u5FEB\u901F\u4E86\u89E3" aria-hidden="true">#</a> React \u5FEB\u901F\u4E86\u89E3</h1><h2 id="\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#\u662F\u4EC0\u4E48" aria-hidden="true">#</a> \u662F\u4EC0\u4E48</h2><p>\u7528\u4E8E\u6784\u5EFA\u7528\u6237\u754C\u9762\u7684 JavaScript \u5E93</p><p>facebook \u505A\u7684\u4E00\u4E2A UI \u5E93</p><p>React \u82F1\u8BED\u610F\u601D\uFF1A\u54CD\u5E94</p><h2 id="\u7279\u70B9" tabindex="-1"><a class="header-anchor" href="#\u7279\u70B9" aria-hidden="true">#</a> \u7279\u70B9</h2><p>\u58F0\u660E\u5F0F</p><p>\u7EC4\u4EF6\u5316</p><p>\u4E00\u6B21\u5B66\u4E60\uFF0C\u8DE8\u5E73\u53F0\u7F16\u5199</p>',9),_=a("\u6700\u597D\u7684\u5B66\u4E60\u8D44\u6599\u5728"),f={href:"https://zh-hans.reactjs.org/docs/state-and-lifecycle.html",target:"_blank",rel:"noopener noreferrer"},b=a("\u5B98\u7F51"),m=a("React \u7684\u4F5C\u8005\u7684 "),k={href:"https://overreacted.io/",target:"_blank",rel:"noopener noreferrer"},g=a("blog"),R=a(" \uFF0C\u4E0A\u9762\u6709\u5F88\u591A\u6613\u9519\u70B9\u4EE5\u53CA\u539F\u7406\u89E3\u7B54\uFF0C\u5F88\u597D\u7684\u5B66\u4E60\u8D44\u6599"),v=s('<h2 id="\u54F2\u5B66" tabindex="-1"><a class="header-anchor" href="#\u54F2\u5B66" aria-hidden="true">#</a> \u54F2\u5B66</h2><p>\u5355\u5411\u6570\u636E\u6D41</p><p>\u4E0D\u53EF\u53D8\u7279\u6027\uFF08immutability\uFF09</p><h2 id="\u672C\u8D28" tabindex="-1"><a class="header-anchor" href="#\u672C\u8D28" aria-hidden="true">#</a> \u672C\u8D28</h2><p>\u4E3B\u8981\u6709\u4E09\u4E2A\u7279\u5F81</p><ul><li><p>UI = f(data)</p><ul><li>\u8D2F\u5F7B\u4E86\u4E00\u5957\u516C\u5F0F</li><li>\u6539\u53D8 data\uFF0C\u9A71\u52A8 function\uFF0C\u4ECE\u800C\u6539\u53D8 UI <ul><li>data \u5373\u6211\u4EEC\u6240\u8BF4\u7684 props \u548C state</li></ul></li></ul></li><li><p>\u4E00\u5207\u90FD\u662F\u7EC4\u4EF6</p><ul><li>\u9875\u9762\u662F\u7EC4\u4EF6\uFF0C\u8DEF\u7531\u4E5F\u662F\u7EC4\u4EF6\uFF0C\u9519\u8BEF\u8FB9\u754C\u4E5F\u662F\u7EC4\u4EF6...</li></ul></li><li><p>\u58F0\u660E\u5F0F\u7F16\u7A0B</p><ul><li>\u5BF9\u6BD4 JQuery <ul><li>JQuery \u662F\u547D\u4EE4\u5F0F\u7684\u5E93\uFF0C\u76F4\u63A5\u64CD\u4F5C dom\uFF0C\u6211\u62FF\u5230\u8FD9\u4E2A dom\uFF0C\u6211\u8981\u53BB\u5E72\u4EC0\u4E48</li><li>React \u662F\u58F0\u660E\u5F0F\u7684\u5E93\uFF0C\u5199\u597D\u4E00\u4E2A\u7EC4\u4EF6\uFF0CUI \u5C31\u5C55\u793A\u6210\u4EC0\u4E48\u6837</li></ul></li></ul></li></ul><h2 id="\u6267\u884C\u8FC7\u7A0B" tabindex="-1"><a class="header-anchor" href="#\u6267\u884C\u8FC7\u7A0B" aria-hidden="true">#</a> \u6267\u884C\u8FC7\u7A0B</h2><p>\u6211\u4EEC\u7528 JSX \u6765\u5199 React\uFF0CJSX \u4F1A\u901A\u8FC7 babel \u5C06\u5176\u4EE3\u7801\u8F6C\u6362\u6210 React.createElement \u7684\u5F62\u5F0F\uFF0CReact.createElement \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9 DOM \u7684\u63CF\u8FF0\uFF0C\u5E76\u4E0D\u662F\u771F\u6B63\u7684 DOM\uFF0C\u8FD9\u4E2A\u53EB Virtual DOM\u3002</p><p>\u5F53\u67D0\u4E00\u65F6\u523B\u8C03\u7528 React \u7684 <code>render()</code> \u65B9\u6CD5\uFF0C\u4F1A\u521B\u5EFA\u4E00\u9897\u7531 React \u5143\u7D20\u7EC4\u6210\u7684\u6811\uFF0C\u5728\u4E0B\u4E00\u6B21 props \u6216 state \u66F4\u65B0\u65F6\uFF0C\u76F8\u540C\u7684 <code>render()</code> \u65B9\u6CD5\u4F1A\u8FD4\u56DE\u4E00\u9897\u4E0D\u540C\u7684\u6811\u3002React \u9700\u8981\u57FA\u4E8E\u8FD9\u4E24\u9897\u6811\u4E4B\u95F4\u7684\u5DEE\u5F02\u6765\u5224\u65AD\u5982\u4F55\u9AD8\u6548\u66F4\u65B0 UI\uFF0C\u8FD9\u4E5F\u5C31\u662F diff\u3002</p>',9),x=a("\u8BF4\u5230 diff\uFF0C\u6B64\u6982\u5FF5\u5728 "),y=a("Git"),w=a(" \u4E2D\u4E5F\u6709\u8FC7\uFF0C\u4E0D\u8FC7 diff \u7684\u7B97\u6CD5\u4E0E React \u4E0D\u540C\uFF0C\u5728 Git \u4E2D\u65F6\u95F4\u590D\u6742\u5EA6\u4E3A O(n2)\uFF0C\u4F46\u662F\u5728 React \u91CC\uFF0C\u6700\u4F18\u7684\u7B97\u6CD5\u7684\u65F6\u95F4\u590D\u6742\u5EA6\u4ECD\u4E3A O(n3)"),B=s(`<p>\u6240\u4EE5 React \u5728\u4EE5\u4E0B\u4E24\u4E2A\u5047\u8BBE\u7684\u57FA\u7840\u4E0A\u63D0\u51FA\u4E86\u4E00\u5957 O(n) \u7684\u542F\u53D1\u5F0F\u7B97\u6CD5</p><ol><li>\u4E24\u4E2A\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u4F1A\u4EA7\u751F\u51FA\u4E0D\u540C\u7684\u6811</li><li>\u5F00\u53D1\u8005\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6E key \u5C5E\u6027\uFF0C\u6765\u544A\u77E5\u6E32\u67D3\u54EA\u4E9B\u5B50\u5143\u7D20\u5728\u4E0D\u540C\u7684\u6E32\u67D3\u6811\u4E0B\u53EF\u4EE5\u4FDD\u6301\u4E0D\u53D8</li></ol><p>\u5176\u7B2C\u4E00\u70B9\uFF0C\u4E0D\u540C\u7C7B\u578B\u7684\u5143\u7D20\u4F1A\u4EA7\u751F\u4E0D\u540C\u7684\u6811\uFF0CReact \u53D1\u73B0\u7EC4\u4EF6\u7684\u7C7B\u578B\u4E0D\u540C\u65F6\uFF0C\u76F4\u63A5\u91CD\u7ED8\u65B0\u7684\u7EC4\u4EF6\uFF0C\u800C\u4E0D\u53BB\u5728\u505A diff\u3002\u7B2C\u4E8C\u70B9\u5373\u53EF\u7406\u89E3\u4E3A\u52A8\u6001\u4EA7\u751F\u7684\u7EC4\u4EF6\u9700\u8981\u8BBE\u7F6E key\u3002</p><h3 id="render" tabindex="-1"><a class="header-anchor" href="#render" aria-hidden="true">#</a> Render</h3><p>Class \u4E2D\u7684 Render \u65B9\u6CD5\u662F\u4E2A\u7EAF\u51FD\u6570\uFF0C\u4E0D\u505A\u4EFB\u4F55\u76F4\u63A5\u6E32\u67D3\u7684\u4E8B\u60C5\u3002\u53EA\u662F\u8FD4\u56DE\u4E86\u4E00\u4E9B\u6307\u4EE4\uFF0C\u7531 React \u5BF9\u8FD9\u4E9B\u6307\u4EE4\u505A\u771F\u6B63\u7684 DOM \u64CD\u4F5C</p><p>JSX \u5176\u5B9E\u662F <code>React.createElement(compoent, props,...children)</code> \u51FD\u6570\u7684\u8BED\u6CD5\u7CD6\u3002\u5982\u4E0B JSX \u4EE3\u7801\uFF1A</p><div class="language-react ext-react line-numbers-mode"><pre class="language-react"><code>&lt;MyButton color=&quot;blue&quot; shadowSize={2}&gt;
    Click Me
&lt;/MyButton&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F1A\u7F16\u8BD1\u4E3A\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>React<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span>MyButton<span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">&#39;blue&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">shadowSize</span><span class="token operator">:</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token string">&#39;Click Me&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div>`,9),A={href:"https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=GYVwdgxgLglg9mABACwKYBt1wBQEpEDeAUIogE6pQhlIA8AJjAG4B8AEhlogO5xnr0AhLQD0jVgG4iAXyJA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=react&prettier=false&targets=&version=7.15.5&externalPlugins=&assumptions=%7B%7D",target:"_blank",rel:"noopener noreferrer"},E=a("\u5728\u7EBF Babel \u7F16\u8BD1\u5668"),I=a(" \u53EF\u4EE5\u73A9\u4E00\u73A9"),j=e("h2",{id:"\u53C2\u8003\u8D44\u6599",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u53C2\u8003\u8D44\u6599","aria-hidden":"true"},"#"),a(" \u53C2\u8003\u8D44\u6599")],-1),J={href:"https://zh-hans.reactjs.org",target:"_blank",rel:"noopener noreferrer"},M=a("React \u5B98\u7F51"),S={href:"https://www.zhihu.com/lives/883022235516960768",target:"_blank",rel:"noopener noreferrer"},z=a("\u5E2E\u52A9\u4F60\u6DF1\u5165\u7406\u89E3 React"),C={href:"https://www.xbroder.com/2018/08/19/react-zhihu-live/",target:"_blank",rel:"noopener noreferrer"},O=a("Live - \u5E2E\u52A9\u4F60\u6DF1\u5165\u7406\u89E3 React");function D(L,V){const n=r("ExternalLinkIcon"),o=r("RouterLink");return i(),c(d,null,[u,e("p",null,[_,e("a",f,[b,t(n)])]),e("p",null,[m,e("a",k,[g,t(n)]),R]),v,e("p",null,[x,t(o,{to:"/Git/"},{default:p(()=>[y]),_:1}),w]),B,e("p",null,[e("a",A,[E,t(n)]),I]),j,e("ul",null,[e("li",null,[e("a",J,[M,t(n)])]),e("li",null,[e("a",S,[z,t(n)])]),e("li",null,[e("a",C,[O,t(n)])])])],64)}var U=l(h,[["render",D],["__file","React\u5FEB\u901F\u4E86\u89E3.html.vue"]]);export{U as default};
