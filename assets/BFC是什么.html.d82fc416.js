import{_ as e,r as l,o,c,a as n,d as t,F as i,e as p,b as s}from"./app.873f0dc8.js";const u={},r=p('<h1 id="css-\u4E16\u754C\u4E2D\u7684\u7ED3\u754C\u2014\u2014bfc" tabindex="-1"><a class="header-anchor" href="#css-\u4E16\u754C\u4E2D\u7684\u7ED3\u754C\u2014\u2014bfc" aria-hidden="true">#</a> CSS \u4E16\u754C\u4E2D\u7684\u7ED3\u754C\u2014\u2014BFC</h1><h2 id="bfc-\u662F\u4EC0\u4E48" tabindex="-1"><a class="header-anchor" href="#bfc-\u662F\u4EC0\u4E48" aria-hidden="true">#</a> BFC \u662F\u4EC0\u4E48</h2><p>BFC \u5168\u79F0\u4E3A block formattng context\uFF0C\u4E2D\u6587\u4E3A\u201C\u5757\u7EA7\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u201D\u3002\u76F8\u5BF9\u5E94\u7684\u8FD8\u6709 IFC\uFF0C\u4E5F\u5C31\u662F inline formatting context\uFF0C\u4E2D\u6587\u4E3A\u201C\u5185\u8054\u683C\u5F0F\u5316\u4E0A\u4E0B\u6587\u201D\u3002</p><p>\u662F\u5757\u76D2\u5B50\u7684\u5E03\u5C40\u8FC7\u7A0B\u53D1\u751F\u7684\u533A\u57DF\uFF0C\u4E5F\u662F\u6D6E\u52A8\u5143\u7D20\u4E0E\u5176\u4ED6\u5143\u7D20\u4EA4\u4E92\u7684\u533A\u57DF</p><p>\u5177\u6709 BFC \u7279\u6027\u7684\u5143\u7D20\u53EF\u4EE5\u770B\u4F5C\u662F\u9694\u79BB\u4E86\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5143\u7D20\u4E0D\u4F1A\u5728\u5E03\u5C40\u4E0A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20\uFF0C\u5E76\u4E14 BFC \u5177\u6709\u666E\u901A\u5BB9\u5668\u6240\u6CA1\u6709\u7684\u4E00\u4E9B\u7279\u6027</p><p>BFC \u7684\u7279\u5F81\u5982\u7ED3\u754C\u4E00\u822C\uFF0C\u91CC\u9762\u7684\u4EBA\u51FA\u4E0D\u53BB\uFF0C\u5916\u9762\u7684\u4EBA\u8FDB\u4E0D\u6765</p><p>\u8868\u73B0\u539F\u5219\uFF1A\u5982\u679C\u4E00\u4E2A\u5143\u7D20\u5177\u6709 BFC\uFF0C\u5185\u90E8\u5B50\u5143\u7D20\u518D\u600E\u4E48\u7FFB\u4E91\u8986\u96E8\uFF0C\u90FD\u4E0D\u4F1A\u5F71\u54CD\u5916\u90E8\u7684\u5143\u7D20\u3002\u6240\u4EE5\uFF0CBFC \u5143\u7D20\u662F\u4E0D\u53EF\u80FD\u53D1\u751F margin \u91CD\u53E0\u7684\uFF0C\u56E0\u4E3A margin \u91CD\u53E0\u65F6\u4F1A\u5F71\u54CD\u5916\u9762\u7684\u5143\u7D20\uFF1BBFC \u5143\u7D20\u4E5F\u53EF\u4EE5\u7528\u6765\u6E05\u9664\u6D6E\u52A8\u7684\u5F71\u54CD\uFF0C\u56E0\u4E3A\u5982\u679C\u4E0D\u6E05\u9664\uFF0C\u5B50\u5143\u7D20\u6D6E\u52A8\u5219\u7236\u5143\u7D20\u9AD8\u5EA6\u574D\u584C\uFF0C\u5FC5\u7136\u4F1A\u5F71\u54CD\u540E\u9762\u5143\u7D20\u5E03\u5C40\u548C\u5B9A\u4F4D<strong>\u8FD9\u663E\u7136\u6709\u8FDD BFC \u5143\u7D20\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5916\u90E8\u5143\u7D20\u7684\u8BBE\u5B9A</strong>\u3002</p><p>\u5982\u4F55\u89E6\u53D1 BFC \u5462\uFF1F\u5E38\u89C1\u7684\u60C5\u51B5\u5982\u4E0B\uFF1A</p>',8),d=n("li",null,"\u6839\u5143\u7D20\uFF08html \uFF09",-1),k=n("li",null,"\u6D6E\u52A8\u5143\u7D20\uFF08\u5143\u7D20\u7684 float \u4E0D\u662F none\uFF09",-1),b=n("li",null,"\u7EDD\u5BF9\u5B9A\u4F4D\u5143\u7D20\uFF08\u5143\u7D20\u7684 position \u4E3A absolute \u6216 fixed\uFF09",-1),h=n("li",null,"\u884C\u5185\u5757\u5143\u7D20\uFF08\u5143\u7D20\u7684 display \u4E3A inline-block\uFF09",-1),g=n("li",null,"\u8868\u683C\u5355\u5143\u683C\uFF08\u5143\u7D20\u7684 display \u4E3A table-cell\uFF0CHTML \u8868\u683C\u5355\u5143\u683C\u9ED8\u8BA4\u8BE5\u503C\uFF09",-1),m=n("li",null,"\u8868\u683C\u6807\u9898\uFF08\u5143\u7D20\u7684 display \u4E3A table-caption\uFF0CHTML \u8868\u683C\u6807\u9898\u9ED8\u8BA4\u4E3A\u8BE5\u503C\uFF09",-1),_=s("\u533F\u540D\u8868\u683C\u5355\u5143\u683C\u5143\u7D20\uFF08\u5143\u7D20\u7684 "),f={href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/display",target:"_blank",rel:"noopener noreferrer"},C=n("code",null,"display",-1),v=s(" \u4E3A "),y=n("code",null,"table\u3001``table-row",-1),x=s("\u3001 "),B=n("code",null,"table-row-group\u3001``table-header-group\u3001``table-footer-group",-1),F=s("\uFF08\u5206\u522B\u662F HTML table\u3001row\u3001tbody\u3001thead\u3001tfoot \u7684\u9ED8\u8BA4\u5C5E\u6027\uFF09\u6216 "),w=n("code",null,"inline-table",-1),q=s("\uFF09"),S=n("li",null,"overflow \u4E0D\u4F1A visible \u7684\u5757\u7EA7\u5143\u7D20",-1),E=n("li",null,"\u5F39\u6027\u5143\u7D20\uFF08display \u4E3A flex \u6216 inline-flex \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09",-1),I=n("li",null,"\u7F51\u683C\u5143\u7D20\uFF08display \u4E3A grid \u6216 inline-grid \u5143\u7D20\u7684\u76F4\u63A5\u5B50\u5143\u7D20\uFF09",-1),z=s("\u8FD8\u6709\u5176\u4ED6\u7684\u53EF\u4EE5\u5230"),L={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"},N=s("\u8FD9\u91CC"),T=s("\u67E5\u770B"),G=p(`<p>\u6362\u8A00\u4E4B\uFF0C\u53EA\u8981\u5143\u7D20\u7B26\u5408\u4E0A\u9762\u4EFB\u610F\u4E00\u4E2A\u5143\u7D20\uFF0C\u5C31\u65E0\u987B\u4F7F\u7528 clear: both \u5C5E\u6027\u53BB\u6E05\u9664\u6D6E\u52A8\u7684\u5F71\u54CD\u4E86\u3002\u56E0\u4E3A\uFF0C\u4E0D\u8981\u89C1\u5230\u4E00\u4E2A <code>&lt;div&gt;</code> \u5143\u7D20\u5C31\u52A0\u4E0A\u7C7B\u4F3C.clearfix \u7684\u7C7B\u540D\uFF0C\u5426\u5219\u53EA\u80FD\u66B4\u96F7\u4F60\u5B71\u5F31\u7684 CSS \u57FA\u672C\u529F</p><h2 id="bfc-\u7684\u4F5C\u7528" tabindex="-1"><a class="header-anchor" href="#bfc-\u7684\u4F5C\u7528" aria-hidden="true">#</a> BFC \u7684\u4F5C\u7528</h2><h3 id="_1-\u6E05\u9664\u5185\u90E8\u6D6E\u52A8" tabindex="-1"><a class="header-anchor" href="#_1-\u6E05\u9664\u5185\u90E8\u6D6E\u52A8" aria-hidden="true">#</a> 1.\u6E05\u9664\u5185\u90E8\u6D6E\u52A8</h3><p>\u5728\u5E03\u5C40\u65F6\u6211\u4EEC\u7ECF\u5E38\u4F1A\u9047\u5230\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5BF9\u5B50\u5143\u7D20\u8BBE\u7F6E\u6D6E\u52A8\u540E\uFF0C\u7236\u5143\u7D20\u4F1A\u53D1\u751F\u9AD8\u5EA6\u584C\u9677\uFF0C\u4E5F\u5C31\u662F\u7236\u5143\u7D20\u7684\u9AD8\u5EA6\u53D8\u4E3A 0\u3002\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u53EA\u9700\u8981\u5C06\u7236\u5143\u7D20\u53D8\u6210\u4E00\u4E2A BFC \u5C31\u884C\u3002\u5E38\u7528\u7684\u505A\u6CD5\u5982\u7ED9\u7236\u5143\u7D20\u8BBE\u7F6E overflow: hidden \u5C5E\u6027</p><h3 id="_2-\u5782\u76F4-margin-\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#_2-\u5782\u76F4-margin-\u5408\u5E76" aria-hidden="true">#</a> 2.\u5782\u76F4 margin \u5408\u5E76</h3><p>\u5916\u8FB9\u8DDD\u5408\u5E76\u7684\u95EE\u9898\u3002</p><p>\u4E3B\u8981\u7528\u5230</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u76D2\u5B50\u5782\u76F4\u65B9\u5411\u7684\u8DDD\u79BB\u7531margin\u51B3\u5B9A\u3002\u5C5E\u4E8E\u540C\u4E00\u4E2ABFC\u7684\u4E24\u4E2A\u76F8\u90BB\u76D2\u5B50\u7684margin\u4F1A\u53D1\u751F\u91CD\u53E0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5C5E\u4E8E\u540C\u4E00\u4E2A BFC \u7684\u4E24\u4E2A\u76F8\u90BB\u76D2\u5B50\u7684 margin \u4F1A\u53D1\u751F\u91CD\u53E0\uFF0C\u90A3\u4E48\u6211\u4EEC\u521B\u5EFA\u4E0D\u5C5E\u4E8E\u540C\u4E00\u4E2A BFC\uFF0C\u5C31\u4E0D\u4F1A\u53D1\u751F margin \u91CD\u53E0\u4E86\u3002</p><img src="https://i.loli.net/2021/06/03/YLG6tZU1J5RjluT.png"><h3 id="_3-\u81EA\u9002\u5E94\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#_3-\u81EA\u9002\u5E94\u5E03\u5C40" aria-hidden="true">#</a> 3.\u81EA\u9002\u5E94\u5E03\u5C40</h3><p>\u5982\u4E0B</p><h4 id="bfc-\u4E0E\u6D41\u5F0F\u5E03\u5C40" tabindex="-1"><a class="header-anchor" href="#bfc-\u4E0E\u6D41\u5F0F\u5E03\u5C40" aria-hidden="true">#</a> BFC \u4E0E\u6D41\u5F0F\u5E03\u5C40</h4><p><strong>BFC \u7684\u7ED3\u754C\u7279\u6027\u6700\u91CD\u8981\u7684\u7528\u9014\u5176\u5B9E\u4E0D\u662F\u53BB margin \u91CD\u53E0\u6216\u8005\u662F\u6E05\u9664 float \u5F71\u54CD\uFF0C\u800C\u662F\u5B9E\u73B0\u66F4\u5065\u58EE\u3001\u66F4\u667A\u80FD\u7684\u81EA\u9002\u5E94\u5E03\u5C40</strong></p><p>\u6211\u4EEC\u4ECE\u6700\u57FA\u672C\u7684\u6587\u5B57\u73AF\u7ED5\u6548\u679C\u8BF4\u8D77\uFF0C</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>en<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>UTF-8<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>viewport<span class="token punctuation">&quot;</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>width=device-width, initial-scale=1.0<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>Document<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
        <span class="token selector">*</span> <span class="token punctuation">{</span>
            <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
            <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.box</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
            <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #000<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.zhanan</span> <span class="token punctuation">{</span>
            <span class="token property">width</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">height</span><span class="token punctuation">:</span> 50px<span class="token punctuation">;</span>
            <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
            <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token selector">.info</span> <span class="token punctuation">{</span>
            <span class="token property">background</span><span class="token punctuation">:</span> #f1f1f1<span class="token punctuation">;</span>
            <span class="token property">color</span><span class="token punctuation">:</span> #222<span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>box<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>zhanan<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\u6E23\u7537<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>info<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
                \u8D44\u4EA7100000000\uFF0C\u4E0A\u6D77\u4E09\u5957\u623F\uFF0C\u52B3\u65AF\u83B1\u65AF\u4E24\u8F86\uFF0C\u4E0A\u5E02\u516C\u53F8CEO,\u8096\u6218\u76F8\u8C8C\uFF0C\u5F6D\u4E8E\u664F\u8EAB\u6750\uFF0C\u53EA\u7231\u4F60\u4E00\u4E2A\u4EBA...
            <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">&gt;</span></span>
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br></div></div><p>\u6211\u4EEC\u770B\u5230\u8FD9\u6837\u7684\u573A\u666F\uFF1A</p><p><img src="https://i.loli.net/2021/06/03/uKSvxCOnWcyLPG3.png" alt="BFC1"></p><p>\u7ED9 info \u52A0\u4E0A overflow\uFF1Ahidden</p><p><img src="https://i.loli.net/2021/06/03/oPjbLkCtgpwdZGI.png" alt="BFC1"></p><p>\u56E0\u4E3A\u6211\u4EEC\u5C06 info \u5143\u7D20\u6539\u9020\u6210\u4E86 BFC\uFF0C\u6240\u4EE5\u5177\u6709 BFC \u7279\u6027\u7684\u5143\u7D20\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u53D7\u5230\u5916\u90E8\u5143\u7D20\u5F71\u54CD\uFF0C\u4E5F\u4E0D\u4F1A\u5F71\u54CD\u5916\u90E8\u5143\u7D20\uFF0C\u4E8E\u662F\uFF0C\u8FD9\u91CC\u7684 info \u5143\u7D20\u4E3A\u4E86\u4E0D\u548C\u6D6E\u52A8\u5143\u7D20\u4EA7\u751F\u4EFB\u4F55\u4EA4\u96C6\uFF0C\u987A\u7740\u6D6E\u52A8\u8FB9\u7F18\u5F62\u6210\u81EA\u5DF1\u7684\u5C01\u95ED\u4E0A\u4E0B\u6587</p><h2 id="bfc-\u7684\u5C40\u9650" tabindex="-1"><a class="header-anchor" href="#bfc-\u7684\u5C40\u9650" aria-hidden="true">#</a> BFC \u7684\u5C40\u9650</h2><p>\u6709\u4E86 BFC \u81EA\u9002\u5E94\u5E03\u5C40\uFF0C\u7EAF\u6D41\u4F53\u7279\u6027\u5E03\u5C40\u57FA\u672C\u4E0A\u6CA1\u6709\u4E86\u5B58\u5728\u7684\u4EF7\u503C\u3002\u7136\u540E\uFF0C\u53EA\u662F\u7406\u8BBA\u4E0A\u5982\u6B64\u3002\u5982\u679C BFC \u81EA\u9002\u5E94\u5E03\u5C40\u771F\u90A3\u4E48\u8D85\u80FD\uFF0C\u90A3\u4E3A\u4F55\u5E76\u6CA1\u6709\u53E3\u53E3\u76F8\u4F20\u5462\uFF1F</p><p>\u56E0\u4E3A\u7EDD\u5927\u591A\u6570\u51FA\u53D1 BFC \u7684\u5C5E\u6027\u81EA\u8EAB\u6709\u4E00\u4E9B\u53E4\u602A\u7684\u7279\u6027\uFF0C\u6240\u4EE5\uFF0C\u5B9E\u64CD\u65F6\uFF0C\u80FD\u517C\u987E\u6D41\u4F53\u7279\u6027\u548C BFC \u7279\u6027\u6765\u5B9E\u73B0\u81EA\u9002\u5E94\u5E03\u5C40\u7684\u5C5E\u6027\u5E76\u4E0D\u591A\u3002\u63A5\u4E0B\u6765\u6211\u4EEC\u4E00\u4E2A\u4E00\u4E2A\u6765\u770B\uFF0C</p><ol><li>float: left\u3002\u6D6E\u52A8\u5143\u7D20\u672C\u8EAB BFC \u5316\uFF0C\u7136\u540E\u6D6E\u52A8\u5143\u7D20\u6709\u7834\u574F\u6027\u548C\u5305\u88F9\u6027\uFF0C\u5931\u53BB\u4E86\u5143\u7D20\u672C\u8EAB\u7684\u6D41\u4F53\u81EA\u9002\u5E94\u3002\u56E0\u6B64\u65E0\u6CD5\u7528\u6765\u5B9E\u73B0\u81EA\u52A8\u586B\u6EE1\u5BB9\u5668\u7684\u81EA\u9002\u5E94\u5E03\u5C40\u3002\u4E0D\u8FC7\u517C\u5BB9\u6027\u5C1A\u53EF\uFF0C\u5728 IE \u65F6\u4EE3\u88AB\u5927\u8086\u4F7F\u7528\uFF0C\u4E5F\u5C31\u662F\u5E38\u8BF4\u7684\u201C\u6D6E\u52A8\u5E03\u5C40\u201D</li><li>position: absolute\u3002\u4E25\u91CD\u8131\u79BB\u6587\u6863\u6D41</li><li>overflow: hidden\u3002\u6700\u4E3A\u5E38\u89C1\u7684 BFC \u4F7F\u7528\u5C5E\u6027\u3002\u552F\u4E00\u7684\u95EE\u9898\u5C31\u662F\u5BB9\u5668\u76D2\u5B50\u5916\u7684\u5143\u7D20\u53EF\u80FD\u4F1A\u88AB\u9690\u85CF\u6389</li><li>display: inline-block\u3002\u5728 IE6 \u548C IE7 \u4E0A\u53E4\u6D4F\u89C8\u5668\u4E2D\uFF0C\u517C\u5BB9\u6027\u6BD4 overflow: hidden \u66F4\u597D</li><li>display: table-cell\u3002\u517C\u5BB9\u6027\u8981\u5728 IE8 \u53CA\u4EE5\u4E0A\u7248\u672C\u7684\u6D4F\u89C8\u5668\uFF1B\u4E8C\u662F\u5E94\u4ED8\u8FDE\u7EED\u82F1\u6587\u5B57\u7B26\u6362\u884C\u6709\u4E9B\u5403\u529B\uFF0C\u9002\u7528\u573A\u666F\u6BD4 overflow:hidden \u66F4\u4E3A\u5BBD\u6CDB</li><li>display: table-row\u3002\u5BF9 width \u65E0\u611F\uFF0C\u65E0\u6CD5\u81EA\u9002\u5E94\u5269\u4F59\u5BB9\u5668\u7A7A\u95F4\u3002</li><li>display: table-caption\u3002\u6B64\u5C5E\u6027\u4E00\u65E0\u662F\u5904</li></ol><p>\u8FD8\u6709\u5176\u4ED6\u58F0\u660E\u5BF9\u81EA\u9002\u5E94\u5E03\u5C40\u4E5F\u90FD\u4E00\u65E0\u662F\u5904\uFF0C\u5C31\u4E0D\u5C55\u5F00\u7EC6\u8BF4</p><p>\u603B\u7ED3\u4E00\u4E0B\u3002\u6211\u4EEC\u5BF9 BFC \u58F0\u660E\u5BB6\u65CF\u5927\u81F4\u8FC7\u4E86\u4E00\u8FB9\uFF0C\u80FD\u62C5\u4EFB\u81EA\u9002\u5E94\u5E03\u5C40\u91CD\u4EFB\u7684\u4E5F\u5C31\u662F\u4E00\u4E0B\u51E0\u4E2A\uFF1A</p><ul><li>overflow: auto/hidden\uFF0C\u9002\u7528\u4E8E IE7 \u53CA\u4EE5\u4E0A\u7248\u672C\u6D4F\u89C8\u5668\uFF1B</li><li>display: inline-block\uFF0C\u9002\u7528\u4E8E IE6 \u548C IE7</li><li>display: table-cell\uFF0C\u9002\u7528\u4E8E IE8 \u53CA\u4EE5\u4E0A\u7248\u672C\u6D4F\u89C8\u5668</li></ul><p>\u6700\u540E\uFF0C\u6211\u4EEC\u63D0\u70BC\u51FA\u4E24\u5957 IE7 \u53CA\u4EE5\u4E0A\u7248\u672C\u6D4F\u89C8\u5668\u9002\u914D\u7684\u81EA\u9002\u5E94\u89E3\u51B3\u65B9\u6848\u3002</p><ol><li>\u501F\u52A9 overflow \u5C5E\u6027\uFF0C\u5982\u4E0B\uFF1A</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.lbf-content</span> <span class="token punctuation">{</span>
    <span class="token property">overflow</span><span class="token punctuation">:</span> hidden<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><ol start="2"><li>\u878D\u5408 display: table-cell \u548C display: inline-block\uFF0C\u5982\u4E0B\uFF1A</li></ol><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.lbf-content</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table-cell<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 9999px<span class="token punctuation">;</span>
    <span class="token comment">/* \u5982\u679C\u4E0D\u9700\u8981\u517C\u5BB9IE7\uFF0C\u4EE5\u4E0B\u6837\u5F0F\u53EF\u4EE5\u7701\u7565 */</span>
    *<span class="token property">display</span><span class="token punctuation">:</span> inline-block<span class="token punctuation">;</span>
    *<span class="token property">width</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u8FD9\u4E24\u79CD\u57FA\u4E8E BFC \u7684\u81EA\u9002\u5E94\u65B9\u6848\u5747\u652F\u6301\u65E0\u9650\u6865\u5957\uFF0C\u56E0\u6B64\uFF0C\u591A\u680F\u81EA\u9002\u5E94\u53EF\u4EE5\u901A\u8FC7\u5D4C\u5957\u65B9\u5F0F\u5B9E\u73B0\u3002\u8FD9\u4E24\u79CD\u65B9\u6848\u5747\u6709\u4E00\u70B9\u4E0D\u8DB3\uFF0C\u524D\u8005\u5982\u679C\u5B50\u5143\u7D20\u8981\u5B9A\u4F4D\u5230\u7236\u5143\u7D20\u7684\u5916\u9762\u53EF\u80FD\u4F1A\u88AB\u9690\u85CF\uFF0C\u540E\u8005\u65E0\u6CD5\u76F4\u63A5\u8BA9\u8FDE\u7EED\u82F1\u6587\u5B57\u7B26\u6362\u884C\u3002</p><p>\u6700\u540E\uFF0C\u5173\u4E8E display: table-cell \u5143\u7D20\u5185\u8FDE\u7EED\u82F1\u6587\u5B57\u7B26\u65E0\u6CD5\u6362\u884C\u7684\u95EE\u9898\uFF0C\u4E8B\u5B9E\u4E0A\u662F\u53EF\u4EE5\u89E3\u51B3\u7684\uFF0C\u5C31\u662F\u4F7F\u7528\u7C7B\u4F3C\u4E0B\u9762\u7684 CSS \u4EE3\u7801\uFF1A</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.word-break</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> table<span class="token punctuation">;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
    <span class="token property">table-layout</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
    <span class="token property">word-break</span><span class="token punctuation">:</span> break-all<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>BFC \u5C31\u662F\u9875\u9762\u4E0A\u7684\u4E00\u4E2A\u9694\u79BB\u7684\u72EC\u7ACB\u5BB9\u5668\uFF0C\u5BB9\u5668\u91CC\u9762\u7684\u5B50\u5143\u7D20\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u9762\u7684\u5143\u7D20\u3002\u53CD\u4E4B\u4E5F\u5982\u6B64\u3002\u5305\u62EC\u6D6E\u52A8\uFF0C\u548C\u5916\u8FB9\u8DDD\u5408\u5E76\u7B49\u7B49\uFF0C\u56E0\u6B64\uFF0C\u6709\u4E86\u8FD9\u4E2A\u7279\u6027\uFF0C\u6211\u4EEC\u5E03\u5C40\u7684\u65F6\u5019\u5C31\u4E0D\u4F1A\u51FA\u73B0\u610F\u5916\u60C5\u51B5\u4E86\u3002</p><p>\u4F46\u5728\u6211\u770B\u6765\uFF0CBFC \u5DF2\u6210\u8FC7\u53BB\u5F0F\uFF0C\u73B0\u5728\u6709\u66F4\u597D\u7684\u81EA\u9002\u5E94\u5E03\u5C40\u624B\u6BB5\u2014\u2014flex\uFF0C\u5728\u73B0\u4EE3\u624B\u673A H5 \u904D\u5730\u7684\u4E16\u754C\u91CC\uFF0Cflex \u7684\u517C\u5BB9\u6027\u5DF2\u7ECF\u8DB3\u591F\u4E86\uFF0C</p><h2 id="\u53C2\u8003\u8D44\u6599" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u8D44\u6599" aria-hidden="true">#</a> \u53C2\u8003\u8D44\u6599</h2>`,40),W={href:"https://www.jianshu.com/p/acf76871d259",target:"_blank",rel:"noopener noreferrer"},j=s("\u3010CSS\u3011\u6DF1\u5165\u7406\u89E3 BFC \u539F\u7406\u53CA\u5E94\u7528"),H={href:"https://book.douban.com/subject/27615777/",target:"_blank",rel:"noopener noreferrer"},V=s("CSS \u4E16\u754C\uFF1A\u5F20\u946B\u65ED"),M={href:"https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context",target:"_blank",rel:"noopener noreferrer"},O=s("Web \u5F00\u53D1\u8005\u6307\u5357");function P(D,U){const a=l("ExternalLinkIcon");return o(),c(i,null,[r,n("ul",null,[d,k,b,h,g,m,n("li",null,[_,n("a",f,[C,t(a)]),v,y,x,B,F,w,q]),S,E,I]),n("p",null,[z,n("a",L,[N,t(a)]),T]),G,n("ul",null,[n("li",null,[n("a",W,[j,t(a)])]),n("li",null,[n("a",H,[V,t(a)])]),n("li",null,[n("a",M,[O,t(a)])])])],64)}var Z=e(u,[["render",P],["__file","BFC\u662F\u4EC0\u4E48.html.vue"]]);export{Z as default};
