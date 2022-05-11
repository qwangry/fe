import{_ as p,r,o as h,c as t,a as e,d as n,F as d,e as c,b as o}from"./app.873f0dc8.js";const s={},i=c('<h1 id="\u6027\u80FD\u4F18\u5316\u9762\u8BD5\u9898" tabindex="-1"><a class="header-anchor" href="#\u6027\u80FD\u4F18\u5316\u9762\u8BD5\u9898" aria-hidden="true">#</a> \u6027\u80FD\u4F18\u5316\u9762\u8BD5\u9898</h1><h3 id="preload-\u9884\u52A0\u8F7D-\u548C-prefetch-\u7684\u533A\u522B" tabindex="-1"><a class="header-anchor" href="#preload-\u9884\u52A0\u8F7D-\u548C-prefetch-\u7684\u533A\u522B" aria-hidden="true">#</a> preload\uFF08\u9884\u52A0\u8F7D\uFF09 \u548C prefetch \u7684\u533A\u522B</h3><p>preload \u662F\u9875\u9762\u52A0\u8F7D\u524D\u52A0\u8F7D\uFF0C</p><p>prefetch \u5F02\u6700\u4F4E\u4F18\u5148\u7EA7 lowest \u6765\u63D0\u524D\u52A0\u8F7D</p><p>preload \u52A0\u8F7D\u8D44\u6E90\u4E00\u822C\u662F\u5F53\u524D\u9875\u9762\u9700\u8981\uFF0C\u5B83\u544A\u8BC9\u6D4F\u89C8\u5668\u9884\u5148\u8BF7\u6C42\u5F53\u524D\u9875\u9762\u9700\u8981\u7684\u8D44\u6E90</p><p>prefetch \u4E00\u822C\u662F\u5176\u4ED6\u9875\u9762\u9700\u8981\u7528\u5230\u7684\u8D44\u6E90</p><p>defer \u6216\u8005 async</p><p>\u4F7F\u7528 Preload/Prefetch \u4F18\u5316\u4F60\u7684\u5E94\u7528</p><p>\u5982\u4F55\u505A\u9875\u9762\u7684\u6027\u80FD\u4F18\u5316</p><p>1.\u51CF\u5C11\u4F53\u79EF\uFF08\u6253\u5305\u4F18\u5316\u3001babel \u4F18\u5316\uFF09</p><p>webpack \u6253\u5305\uFF0C\u4F7F\u7528 webpack content-hash</p><p>\u6587\u4EF6\u6307\u7EB9\u662F\u6253\u5305\u540E\u8F93\u51FA\u7684\u6587\u4EF6\u540D\u7684\u540E\u7F00</p><ul><li><p><code>Hash</code> \uFF1A\u548C\u6574\u4E2A\u9879\u76EE\u7684\u6784\u5EFA\u76F8\u5173\uFF0C\u53EA\u8981\u9879\u76EE\u6587\u4EF6\u6709\u4FEE\u6539\uFF0C\u6574\u4E2A\u9879\u76EE\u6784\u5EFA\u7684 hash \u503C\u5C31\u4F1A\u66F4\u6539</p></li><li><p><code>Chunkhash</code>\uFF1A\u548C webpack \u6253\u5305\u7684 chunk \u6709\u5173\uFF0C\u4E0D\u540C\u7684\u5165\u53E3\u4F1A\u6709\u4E0D\u540C\u7684 chunkhash</p></li><li><p><code>Contenthash</code>\uFF1A\u6839\u636E\u6587\u4EF6\u5185\u5BB9\u6765\u5B9A\u4E49 hash\uFF0C\u6587\u4EF6\u5185\u5BB9\u4E0D\u53D8\uFF0C\u5219 contenthash \u4E0D\u53D8</p><p>2.\u5EF6\u8FDF\u52A0\u8F7D\uFF08\u8D44\u6E90\u7684\u5F02\u6B65\u52A0\u8F7D\uFF09</p></li></ul><p>react \u61D2\u52A0\u8F7D</p><p>3.\u7F51\u7EDC\u52A0\u901F\uFF08cdn\u3001dns \u9884\u89E3\u6790\u3001http \u5E76\u53D1\u6570\uFF09</p><p>4.\u9996\u5C4F\u6E32\u67D3 \uFF08ssr\u3001\u9AA8\u67B6\u56FE\uFF09</p><p>5.\u5229\u7528\u7F13\u5B58\uFF08http \u7F13\u5B58\uFF09</p><h2 id="\u672C\u6587\u770B\u70B9" tabindex="-1"><a class="header-anchor" href="#\u672C\u6587\u770B\u70B9" aria-hidden="true">#</a> \u672C\u6587\u770B\u70B9</h2><p>\u5982\u4F55\u76D1\u63A7\u9875\u9762\u52A0\u8F7D\u901F\u5EA6\uFF0C\u6307\u6807\u662F\u4EC0\u4E48</p><p>\u5982\u4F55\u5BF9\u5E94\u7528\u63D0\u901F\uFF0C\u6027\u80FD\u4F18\u5316\u7684\u70B9\u6709\u54EA\u4E9B</p><h2 id="\u9875\u9762\u76D1\u63A7\u7684\u6307\u6807\u6709\u54EA\u4E9B" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u76D1\u63A7\u7684\u6307\u6807\u6709\u54EA\u4E9B" aria-hidden="true">#</a> \u9875\u9762\u76D1\u63A7\u7684\u6307\u6807\u6709\u54EA\u4E9B</h2><p>FCP\uFF08First Contentful Paint)\uFF1A\u767D\u5C4F\u65F6\u95F4\uFF08\u7B2C\u4E00\u4E2A\u6587\u672C\u7ED8\u5236\u65F6\u95F4\uFF09</p><p>Speed Index\uFF1A\u9996\u5C4F\u65F6\u95F4</p><p>TTI\uFF08Time To Interactive\uFF09\uFF1A\u7B2C\u4E00\u6B21\u53EF\u4EA4\u4E92\u7684\u65F6\u95F4</p><p>lighthouse score\uFF08performance\uFF09\uFF1AChrome \u6D4F\u89C8\u5668\u5BA1\u67E5\u5DE5\u5177\u6027\u80FD\u8BC4\u5206</p><p>FCP\uFF08\u767D\u5C4F\u65F6\u95F4\uFF09\uFF1A\u662F\u6307\u4ECE\u7528\u6237\u8FDB\u5165\u7F51\u7AD9\uFF08\u8F93\u5165 url\u3001\u5237\u65B0\u3001\u8DF3\u8F6C\u7B49\u65B9\u6CD5\uFF09\u7684\u65F6\u523B\u5F00\u59CB\u8BA1\u7B97\uFF0C\u4E00\u76F4\u5230\u9875\u9762\u6709\u5185\u5BB9\u5C55\u793A\u51FA\u6765\u7684\u65F6\u95F4\u8282\u70B9</p><p>\u8FD9\u4E2A\u8FC7\u7A0B\u5305\u62EC dns \u67E5\u8BE2\u3001\u5EFA\u7ACB tcp \u8FDE\u63A5\u3001\u53D1\u9001\u9996\u4E2A HTTP \u8BF7\u6C42\u3001\u8FD4\u56DE html \u6587\u6863\u3001html \u6587\u6863 head \u89E3\u6790\u5B8C\u6BD5</p><h3 id="\u6709\u54EA\u4E9B\u8F6F\u4EF6\u53EF\u4EE5\u76D1\u63A7\u5230" tabindex="-1"><a class="header-anchor" href="#\u6709\u54EA\u4E9B\u8F6F\u4EF6\u53EF\u4EE5\u76D1\u63A7\u5230" aria-hidden="true">#</a> \u6709\u54EA\u4E9B\u8F6F\u4EF6\u53EF\u4EE5\u76D1\u63A7\u5230</h3><p>\u767E\u5EA6\u3001google...</p><h2 id="\u5982\u4F55\u63D0\u901F" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u63D0\u901F" aria-hidden="true">#</a> \u5982\u4F55\u63D0\u901F</h2><p>\u8BF4\u767D\u4E86\u662F\u5982\u4F55\u505A\u6027\u80FD\u4F18\u5316\uFF0C\u8FD9\u91CC\u4E0D\u8BF4\u5E9F\u8BDD\uFF0C\u4ECE\u56DB\u4E2A\u89D2\u5EA6\u5207\u5165</p><h3 id="\u524D\u7AEF\u5DE5\u7A0B\u5316\u89D2\u5EA6\u601D\u8003-\u4EE5-webpack-\u4E3A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u524D\u7AEF\u5DE5\u7A0B\u5316\u89D2\u5EA6\u601D\u8003-\u4EE5-webpack-\u4E3A\u4F8B" aria-hidden="true">#</a> \u524D\u7AEF\u5DE5\u7A0B\u5316\u89D2\u5EA6\u601D\u8003\uFF08\u4EE5 webpack \u4E3A\u4F8B\uFF09</h3><p>\u200B webpack \u65B9\u9762\u7684</p><p>\u6784\u5EFA\u65F6\u538B\u7F29\u56FE\u7247\u3001\u4F7F\u7528 webp \u56FE\u7247\u3001\u4F18\u5316 SVG \u56FE\u6807</p><h3 id="\u6846\u67B6\u89D2\u5EA6" tabindex="-1"><a class="header-anchor" href="#\u6846\u67B6\u89D2\u5EA6" aria-hidden="true">#</a> \u6846\u67B6\u89D2\u5EA6</h3><p>Vue \u6211\u4E0D\u719F\uFF0C\u4EC5 React \u800C\u8A00\uFF0C\u53EF\u4EE5\u4ECE\u8FD9\u51E0\u4E2A\u65B9\u9762\u6765\u505A\u529F\u592B</p><p>\u5982\u679C\u662F\u7C7B\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u4F7F\u7528 pureComponent\u3001shouldComponentUpdate</p><p>\u5982\u679C\u662F\u51FD\u6570\u5F0F\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u53EF\u4EE5\u4F7F\u7528 useMemo\u3001useCallback\u3001memo</p><p>\u200B useMemo \u548C useCallback \u7684\u533A\u522B</p><p>\u200B memo \u5E94\u8BE5\u548C useMemo \u7ED3\u5408</p><p>\u4F18\u5316 UI \u4EE3\u7801\u4F53\u79EF</p><p>\u4F7F\u7528 React.lazy \u505A\u4EE3\u7801\u5206\u5272</p><p>\u5982\u679C\u9047\u5230\u5217\u8868\uFF0C\u4F7F\u7528 key \u505A\u5173\u952E\u5B57\uFF0C\u5E76\u53EF\u4F7F\u7528\u865A\u62DF\u5217\u8868</p><p>\u200B \u5173\u4E8E\u865A\u62DF\u5217\u8868\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6211\u5728\u8FD9\u7BC7\u6587\u7AE0\u90FD\u5199\u4E86</p><blockquote><p>\u5177\u4F53\u4E3A\u61D2\u52A0\u8F7D\u3001IntersectionObserver\u3001getBoundingClientRect</p></blockquote><h3 id="http-\u65B9\u9762" tabindex="-1"><a class="header-anchor" href="#http-\u65B9\u9762" aria-hidden="true">#</a> HTTP \u65B9\u9762</h3><p>\u4F7F\u7528 HTTP \u7F13\u5B58</p><p>\u5347\u7EA7\u4E3A HTTP2</p><p>\u670D\u52A1\u5668\u4F7F\u7528 gzip \u538B\u7F29</p><p>OSS+CDN \u52A0\u901F</p><h3 id="\u9875\u9762\u6784\u5EFA\u65B9\u9762" tabindex="-1"><a class="header-anchor" href="#\u9875\u9762\u6784\u5EFA\u65B9\u9762" aria-hidden="true">#</a> \u9875\u9762\u6784\u5EFA\u65B9\u9762</h3><p>CSS \u653E\u9876\u90E8\u3001JS \u653E\u5E95\u90E8</p><p>\u51CF\u5C11\u56DE\u6D41\u548C\u91CD\u7ED8</p><p>\u200B \u56DE\u6D41\u548C\u91CD\u7ED8</p><p>script defer\u3001async</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>',56),l={href:"https://mp.weixin.qq.com/s/CE4uUUEufCUvXx5HZJxJBw",target:"_blank",rel:"noopener noreferrer"},u=o("\u4ECE\u9F9F\u901F 11s \u5230\u95EA\u7535 1s\uFF0C\u8BE6\u89E3\u524D\u7AEF\u6027\u80FD\u4F18\u5316\u4E4B\u9996\u5C4F\u52A0\u8F7D");function f(b,m){const a=r("ExternalLinkIcon");return h(),t(d,null,[i,e("ul",null,[e("li",null,[e("a",l,[u,n(a)])])])],64)}var x=p(s,[["render",f],["__file","\u9762\u8BD5\u9898.html.vue"]]);export{x as default};
