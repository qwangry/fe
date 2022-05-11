import{_ as s,e as n}from"./app.873f0dc8.js";const a={},e=n(`<h1 id="docker-compose" tabindex="-1"><a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a> docker-compose</h1><h2 id="\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4ECB\u7ECD" aria-hidden="true">#</a> \u4ECB\u7ECD</h2><p>\u8F6F\u4EF6\u8BBE\u8BA1\u548C\u5F00\u53D1\uFF0C\u6709\u5355\u4E00\u804C\u8D23\u539F\u5219\u3002Docker \u4E5F\u4E00\u6837\uFF0C\u6BCF\u4E2A\u5BB9\u5668\u53EA\u8D1F\u8D23\u4E00\u4E2A\u670D\u52A1</p><p>\u5982\u679C\u5F00\u53D1\u73AF\u5883\u9700\u8981\u591A\u4E2A\u670D\u52A1\uFF08nodejs mysql mongodb redis\uFF09\uFF0C\u5C31\u9700\u8981\u542F\u52A8\u591A\u4E2A Docker \u5BB9\u5668</p><p>\u8981\u8FDE\u540C\u7740\u591A\u4E2A Docker \u5BB9\u5668\uFF0C\u5C31\u9700\u8981 docker-compose</p><p>docker-compose \u89E3\u51B3\u4E86\u5BB9\u5668\u4E0E\u5BB9\u5668\u4E4B\u95F4\u5982\u4F55\u7BA1\u7406\u7F16\u6392\u7684\u95EE\u9898</p><h2 id="\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5" aria-hidden="true">#</a> \u5B89\u88C5</h2><p>\u4E00\u884C\u547D\u4EE4\u5373\u53EF\u5B89\u88C5\u3002\u5B8C\u6210\u4E4B\u540E\u8FD0\u884C <code>docker-compose --version</code> \u53EF\u4EE5\u770B\u5230\u5F53\u524D\u7248\u672C</p><h2 id="\u914D\u7F6E\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u6587\u4EF6" aria-hidden="true">#</a> \u914D\u7F6E\u6587\u4EF6</h2><p>\u65B0\u5EFA <code>docker-compose.yml</code> \u6587\u4EF6</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">version</span><span class="token punctuation">:</span> <span class="token string">&#39;3&#39;</span>
<span class="token key atrule">services</span><span class="token punctuation">:</span>
    <span class="token key atrule">db</span><span class="token punctuation">:</span>
        <span class="token key atrule">image</span><span class="token punctuation">:</span> mysql<span class="token punctuation">:</span><span class="token number">5.7</span>
        <span class="token key atrule">volumes</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> db_data<span class="token punctuation">:</span>/var/lib/mysql
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">MYSQL_ROOT_PASSWORD</span><span class="token punctuation">:</span> somewordpress
            <span class="token key atrule">MYSQL_DATABASE</span><span class="token punctuation">:</span> wordpress
            <span class="token key atrule">MYSQL_USER</span><span class="token punctuation">:</span> wordpress
            <span class="token key atrule">MYSQL_PASSWORD</span><span class="token punctuation">:</span> wordpress

    <span class="token key atrule">wordpress</span><span class="token punctuation">:</span>
        <span class="token key atrule">depends_on</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> db
        <span class="token key atrule">image</span><span class="token punctuation">:</span> wordpress<span class="token punctuation">:</span>latest
        <span class="token key atrule">ports</span><span class="token punctuation">:</span>
            <span class="token punctuation">-</span> <span class="token string">&#39;5555:80&#39;</span>
        <span class="token key atrule">restart</span><span class="token punctuation">:</span> always
        <span class="token key atrule">environment</span><span class="token punctuation">:</span>
            <span class="token key atrule">WORDPRESS_DB_HOST</span><span class="token punctuation">:</span> db<span class="token punctuation">:</span><span class="token number">3306</span>
            <span class="token key atrule">WORDPRESS_DB_USER</span><span class="token punctuation">:</span> wordpress
            <span class="token key atrule">WORDPRESS_DB_PASSWORD</span><span class="token punctuation">:</span> wordpress
<span class="token key atrule">volumes</span><span class="token punctuation">:</span>
    <span class="token key atrule">db_data</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><p>docker-cpmpose \u57FA\u672C\u7ED3\u6784</p><p><img src="https://i.loli.net/2021/09/13/EpdCZlwPauW5tBU.png" alt="docker-cpmpose \u57FA\u672C\u7ED3\u6784"></p><h2 id="\u8BED\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u8BED\u6CD5" aria-hidden="true">#</a> \u8BED\u6CD5</h2><p>\u670D\u52A1\uFF08<code>service</code>\uFF09\uFF1A\u4E00\u4E2A\u5E94\u7528\u7684\u5BB9\u5668\uFF0C\u5B9E\u9645\u4E0A\u53EF\u4EE5\u5305\u62EC\u82E5\u5E72\u76F8\u540C\u955C\u50CF\u7684\u5BB9\u5668\u5B9E\u4F8B</p><p>\u9879\u76EE\uFF08<code>project</code>\uFF09\uFF1A\u7531\u4E00\u7EC4\u5173\u8054\u7684\u5E94\u7528\u5BB9\u5668\u7EC4\u6210\u7684\u4E00\u4E2A\u5B8C\u6574\u4E1A\u52A1\u5355\u5143\uFF0C\u5728 <code>docker-compose.yml</code> \u6587\u4EF6\u4E2D\u5B9A\u4E49</p><p><code>compose</code> \u7684\u9ED8\u8BA4\u7BA1\u7406\u5BF9\u8C61\u662F\u9879\u76EE\uFF0C\u901A\u8FC7\u5B50\u547D\u4EE4\u5BF9\u9879\u76EE\u7684\u4E00\u7EC4\u5BB9\u5668\u8FDB\u884C\u4FBF\u6377\u7684\u751F\u547D\u5468\u671F\u7BA1\u7406</p>`,17);function p(t,c){return e}var r=s(a,[["render",p],["__file","docker-compose.html.vue"]]);export{r as default};
