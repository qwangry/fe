import{_ as t,r as i,o as p,c as o,a as n,d as s,w as c,F as d,b as e,e as l}from"./app.873f0dc8.js";const h={},k=n("h1",{id:"\u5B9E\u6218-docker-jenkins",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B9E\u6218-docker-jenkins","aria-hidden":"true"},"#"),e(" \u5B9E\u6218\uFF1Adocker-jenkins")],-1),u=e("\u4E0A\u7BC7\uFF0C\u6211\u4EEC\u8BB2\u5230\u4E86 "),b=e("dockerfile \u7684\u6700\u5C0F\u5B9E\u73B0"),g=e("\uFF0C\u4F46\u4E5F\u629B\u51FA\u4E86\u4E00\u4E2A\u95EE\u9898\uFF0C\u5373\u4F7F docker \u89E3\u51B3\u4E86\u73AF\u5883\u548C\u90E8\u7F72\u95EE\u9898\uFF0C\u4F46 CICD \u8FD8\u662F\u8BA9\u4EBA\u611F\u5230\u5FC3\u7D2F\uFF0C\u672C\u7AE0\u901A\u8FC7 docker \u751F\u6210 jenkins \u5BB9\u5668\uFF0C\u5E76\u5C06 jenkins \u4E0E github \u7ED3\u5408\uFF0C\u5B9E\u73B0 \u4E00\u5B9A\u7A0B\u5EA6\u4E0A\u7684 CI"),m=l(`<h2 id="\u5E0C\u671B\u8FBE\u5230\u7684\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5E0C\u671B\u8FBE\u5230\u7684\u6548\u679C" aria-hidden="true">#</a> \u5E0C\u671B\u8FBE\u5230\u7684\u6548\u679C</h2><p>\u6211\u5E0C\u671B\u6211\u5728 git push \u540E\uFF0C\u4EE3\u7801\u63A8\u9001\u81F3 jenkins \uFF0C\u5728 jenkins \u70B9\u51FB \u53D1\u5E03\uFF0C\u5C31\u80FD\u5C06\u6211\u7684\u4EE3\u7801\u63A8\u9001\u81F3 \u670D\u52A1\u5668\uFF0C\u6211\u6D4F\u89C8\u9875\u9762\uFF0C\u9A6C\u4E0A\u5C31\u80FD\u770B\u5230\u6548\u679C</p><p>git push \u5230\u4ED3\u5E93\uFF0C\u5728 jenkins \u4E0A\u70B9\u51FB\u53D1\u5E03\u5C31\u80FD\u53D1\u5E03\u3002</p><p>jenkins \u7ED1\u5B9A \u8FDC\u7AEF\u4ED3\u5E93 \u548C \u670D\u52A1\u5668</p><p>git push \u5230 \u4ED3\u5E93\u540E\uFF0Cjenkins \u76D1\u542C\u5230\uFF0C\u6267\u884C\u811A\u672C</p><p>\u5220\u9664\u539F\u6765\u7684\u5BB9\u5668\uFF0C\u5E76\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u5BB9\u5668 \u6620\u5C04\u51FA\u7AEF\u53E3</p><h2 id="jenkins-\u5FEB\u901F\u5165\u95E8" tabindex="-1"><a class="header-anchor" href="#jenkins-\u5FEB\u901F\u5165\u95E8" aria-hidden="true">#</a> jenkins \u5FEB\u901F\u5165\u95E8</h2><p>\u5B83\u662F java \u8BED\u8A00\u5199\u7684 cicd\uFF0C</p><p>\u5B83\u662F\u4E00\u5957\u7528 java \u5199\u7684 cicd \u7CFB\u7EDF\uFF0C\u901A\u8FC7 ssh \u53EF\u4EE5\u4E0E\u670D\u52A1\u5668\u6253\u4EA4\u9053</p><h2 id="\u5B9E\u73B0\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u601D\u8DEF" aria-hidden="true">#</a> \u5B9E\u73B0\u601D\u8DEF</h2><p>jenkins</p><h2 id="\u5B9E\u73B0\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u73B0\u6B65\u9AA4" aria-hidden="true">#</a> \u5B9E\u73B0\u6B65\u9AA4</h2><p>\u7B2C\u4E00\u6B65\uFF1A\u62C9\u53D6 jenkins \u955C\u50CF\uFF0C\u4EE5\u6B64\u4E3A\u955C\u50CF\u751F\u6210\u5BB9\u5668</p><p>\u7B2C\u4E8C\u6B65\uFF1A\u5B89\u88C5\u914D\u7F6E jenkins</p><p>\u7B2C\u4E09\u6B65\uFF1A\u51C6\u5907 node \u670D\u52A1</p><p>\u7B2C\u56DB\u6B65\uFF1Ajenkins \u90E8\u7F72 node \u670D\u52A1</p><h2 id="\u7B2C\u4E00\u6B65-\u751F\u6210-jenkins-\u5BB9\u5668" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E00\u6B65-\u751F\u6210-jenkins-\u5BB9\u5668" aria-hidden="true">#</a> \u7B2C\u4E00\u6B65\uFF1A\u751F\u6210 jenkins \u5BB9\u5668</h2><p>\u5148\u4ECE dockerhub \u4E0A\u62C9\u53D6 jenkins</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> pull jenkins/jenkins:lts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u521B\u5EFA\u4E00\u4E2A jenkins \u76EE\u5F55</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">mkdir</span> /home/johan/www/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u63D0\u9AD8\u6B64\u6587\u4EF6\u7684\u6743\u9650</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">chmod</span> -R <span class="token number">777</span> /home/johan/www/jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4EE5 jenkins/jenkins:lts \u4E3A\u955C\u50CF\u751F\u6210\u4E00\u5BB9\u5668</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> run --name jenkins -p <span class="token number">8080</span>:8080 -p <span class="token number">50000</span>:50000 -d -v /home/johan/www/jenkins:/var/jenkins_home jenkins/jenkins:lts
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><code>-d</code>\uFF1A \u540E\u53F0\u8FD0\u884C</p><p><code>-v</code>\uFF1A \u6570\u636E\u5377\uFF0C\u5C06\u5BB9\u5668\u4E2D\u7684\u5185\u5BB9\u6620\u5C04\u5230\u672C\u673A\u4E0A</p><p>\u67E5\u770B\u5BB9\u5668\u5185\u90E8\u65E5\u5FD7</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> logs jenkins
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8F93\u5165\u57DF\u540D\u7F51\u5740\u67E5\u770B <code>jenkins</code> \u662F\u5426\u5B89\u88C5\u6210\u529F</p><p>\u770B\u5230 \u89E3\u9501 jenkins\uFF0C\u8F93\u5165 logs \u4E2D\u7684\u5BC6\u7801\uFF0C\u5373\u80FD\u89E3\u9501</p><h2 id="\u7B2C\u4E8C\u6B65-\u5B89\u88C5\u914D\u7F6E-jenkins" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E8C\u6B65-\u5B89\u88C5\u914D\u7F6E-jenkins" aria-hidden="true">#</a> \u7B2C\u4E8C\u6B65\uFF1A\u5B89\u88C5\u914D\u7F6E jenkins</h2><p>\u6309\u7167\u5B89\u88C5\u63A8\u8350\u63D2\u4EF6\u5B89\u88C5 jenkins \u7684\u63D2\u4EF6</p><h3 id="\u914D\u5408-jenkins" tabindex="-1"><a class="header-anchor" href="#\u914D\u5408-jenkins" aria-hidden="true">#</a> \u914D\u5408 jenkins</h3><p><img src="https://s2.loli.net/2022/04/25/ZAP7h9KdLGYF5EO.png" alt="docker_jenkins\u5B89\u88C5\u63A8\u8350\u7684\u63D2\u4EF6"></p><p>\u9700\u8981\u7B49\u4E00\u6BB5\u65F6\u95F4\uFF0C\u4E0B\u8F7D\u8FD9\u4E9B\u63D2\u4EF6</p><p><img src="https://s2.loli.net/2022/04/25/j3JUkLx5TctPYub.png" alt="docker_jenkins\u65B0\u624B"></p><p><strong>\u62A5\u9519\u5C31\u91CD\u8BD5\uFF0C\u5494\u5494\u5C31\u662F\u5E72</strong></p><h3 id="\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7" aria-hidden="true">#</a> \u521B\u5EFA\u7BA1\u7406\u5458\u8D26\u53F7</h3><p><img src="https://s2.loli.net/2022/04/25/PI1vk6nUzNybFoj.png" alt="docker_jenkins\u521B\u5EFA\u8D26\u53F7"></p><p>\u4FDD\u5B58\u6210\u529F\uFF0C\u5F00\u59CB\u4F7F\u7528 jenkins</p><h3 id="\u6362\u6E90" tabindex="-1"><a class="header-anchor" href="#\u6362\u6E90" aria-hidden="true">#</a> \u6362\u6E90</h3><p><code>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</code></p><p>\u524D\u5F80 \u7CFB\u7EDF\u7BA1\u7406 \u2014\u2014&gt; \u63D2\u4EF6\u7BA1\u7406 \u2014\u2014&gt; \u9AD8\u7EA7 \u2014\u2014&gt; \u62C9\u5230\u6700\u4E0B\u9762</p><p><img src="https://s2.loli.net/2022/04/25/inAJ68CsFcfvQP4.png" alt="docker_jenkins\u6362\u6E90"></p><h3 id="\u4E0B\u8F7D-ssh-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E0B\u8F7D-ssh-\u63D2\u4EF6" aria-hidden="true">#</a> \u4E0B\u8F7D ssh \u63D2\u4EF6</h3><p>\u524D\u5F80 \u7CFB\u7EDF\u7BA1\u7406 \u2014\u2014&gt; \u63D2\u4EF6\u7BA1\u7406 \u2014\u2014&gt; \u53EF\u9009\u63D2\u4EF6</p><p>\u641C\u7D22 &quot;Publish over SSH&quot;\uFF0C\u5E76\u5B89\u88C5</p><p><img src="https://s2.loli.net/2022/04/25/3BWNFyp8JqdZztY.png" alt="docker_jenkins\u4E0B\u8F7Dssh\u63D2\u4EF6"></p><h3 id="\u914D\u7F6E-ssh" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E-ssh" aria-hidden="true">#</a> \u914D\u7F6E ssh</h3><p>\u524D\u5F80 \u7CFB\u7EDF\u7BA1\u7406 \u2014\u2014&gt; \u7CFB\u7EDF\u914D\u7F6E\u2014\u2014&gt; \u62C9\u5230\u6700\u4E0B\u9762\uFF08Publish over SSH\uFF09</p><p><img src="https://s2.loli.net/2022/04/25/9OXJgE1MLa2SFhw.png" alt="docker_jenkins\u914D\u7F6Essh2"></p><p>\u4F7F\u7528\u5BC6\u7801</p><p><img src="https://s2.loli.net/2022/04/25/tSAblr4fsK9au2Y.png" alt="docker_jenkins\u8BBE\u7F6E\u670D\u52A1\u5668\u4E0A\u7684ssh"></p><p>\u70B9\u51FB Test Configuration\uFF0C\u5DF2\u7ECF\u548C\u670D\u52A1\u5668\u63A5\u901A</p><h3 id="\u5B89\u88C5-nodejs-\u63D2\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5B89\u88C5-nodejs-\u63D2\u4EF6" aria-hidden="true">#</a> \u5B89\u88C5 nodejs \u63D2\u4EF6</h3><p>node \u63D2\u4EF6\u5728\u8DD1 node \u9879\u76EE\u65F6\u9700\u8981\u4F7F\u7528\uFF0C\u8FD9\u91CC\u5148\u5B89\u88C5\u597D</p><p>\u524D\u5F80 \u7CFB\u7EDF\u7BA1\u7406 \u2014\u2014&gt; \u63D2\u4EF6\u7BA1\u7406 \u2014\u2014&gt; \u53EF\u9009\u63D2\u4EF6</p><p>\u641C\u7D22 node\uFF0C\u5E76\u5B89\u88C5</p><h3 id="\u5168\u5C40\u914D\u7F6E-node" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E-node" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E node</h3><p>\u524D\u5F80 \u7CFB\u7EDF\u7BA1\u7406 \u2014\u2014&gt; \u5168\u5C40\u5DE5\u5177\u914D\u7F6E \u2014\u2014&gt; NodeJS</p><p><img src="https://s2.loli.net/2022/04/25/1LbaU872FEdBGoe.png" alt="docker_jenkins\u5B89\u88C5node\u63D2\u4EF61"></p><p>\u5E94\u7528\u5E76\u4FDD\u5B58\u5B83</p><p>\u5173\u4E8E jenkins \u7684\u642D\u5EFA\u5230\u6B64\u544A\u4E00\u6BB5\u843D</p><h2 id="\u7B2C\u4E09\u6B65-\u51C6\u5907-node-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u4E09\u6B65-\u51C6\u5907-node-\u670D\u52A1" aria-hidden="true">#</a> \u7B2C\u4E09\u6B65\uFF1A\u51C6\u5907 node \u670D\u52A1</h2><p>\u6211\u4EEC\u62FF\u4E0A\u4E00\u7AE0\u8BB2\u7684 koa \u4E3A\u4F8B\u5B50\u8BB2\u89E3</p><p>\u751F\u6210 <code>.gitignore</code> \u6587\u4EF6\uFF0C\u5E76\u5199\u5165 <code>node_modules</code></p><p>\u5C06 dockerfile_koa_demo \u4E0A\u4F20\u81F3 github</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> init
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&#39;first_commit&#39;</span>
<span class="token function">git</span> remote <span class="token function">add</span> origin https://github.com/johanazhu/dockerfile_koa_server.git
<span class="token function">git</span> push -u origin master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="\u7B2C\u56DB\u6B65-jenkins-\u90E8\u7F72-node-\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7B2C\u56DB\u6B65-jenkins-\u90E8\u7F72-node-\u670D\u52A1" aria-hidden="true">#</a> \u7B2C\u56DB\u6B65\uFF1A jenkins \u90E8\u7F72 node \u670D\u52A1</h2><h3 id="\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1" aria-hidden="true">#</a> \u521B\u5EFA\u4E00\u4E2A\u4EFB\u52A1</h3><p><img src="https://s2.loli.net/2022/04/25/Fihea7EWtySL48l.png" alt="jenkins\u65B0\u5EFA\u4EFB\u52A1"></p><h3 id="\u8D77\u4EFB\u52A1\u540D" tabindex="-1"><a class="header-anchor" href="#\u8D77\u4EFB\u52A1\u540D" aria-hidden="true">#</a> \u8D77\u4EFB\u52A1\u540D</h3><p><img src="https://s2.loli.net/2022/04/25/FjS2EtdcJC9Zhw5.png" alt="jenkins\u8D77\u4EFB\u52A1\u540D\u5B57"></p><h3 id="\u4EFB\u52A1\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1\u63CF\u8FF0" aria-hidden="true">#</a> \u4EFB\u52A1\u63CF\u8FF0</h3><p><img src="https://s2.loli.net/2022/04/25/JkIsXdMNFDm1CQp.png" alt="jenkins\u4EFB\u52A1\u63CF\u8FF01"></p><p><img src="https://s2.loli.net/2022/04/25/3J2vBIXWrfECmLg.png" alt="jenkins\u4EFB\u52A1\u63CF\u8FF02"></p><p><img src="https://s2.loli.net/2022/04/25/3ny8Xafrt5whNvC.png" alt="jenkins\u4EFB\u52A1\u63CF\u8FF03"></p><p><img src="https://s2.loli.net/2022/04/25/t1r6Ed8hP3zaxSC.png" alt="jenkins\u4EFB\u52A1\u63CF\u8FF05"></p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">docker</span> stop koa_server_container
<span class="token function">docker</span> <span class="token function">rm</span> koa_server_container
<span class="token function">docker</span> rmi johanbo/koa_server:v.1.0.0
<span class="token builtin class-name">cd</span> /home/johan/www/jenkins/workspace/dockerfile_koa_server
<span class="token function">docker</span> build <span class="token builtin class-name">.</span> -t johanbo/koa_server:v1.0.0
<span class="token function">docker</span> run -d --name koa_server_container -p <span class="token number">3011</span>:3010  johanbo/koa_server:v1.0.0
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>\u89E3\u8BFB\u4EE5\u4E0A\u4EE3\u7801\uFF1A</p><p>\u7B2C\u4E00\u884C\uFF1A\u505C\u6B62 koa_server_container \u5BB9\u5668</p><p>\u7B2C\u4E8C\u884C\uFF1A\u5220\u9664\u6B64\u5BB9\u5668</p><p>\u7B2C\u4E09\u884C\uFF1A\u5220\u9664\u751F\u6210\u6B64\u5BB9\u5668\u7684\u955C\u50CF</p><p>\u7B2C\u56DB\u884C\uFF1A\u8FDB\u5165\u670D\u52A1\u5668\u4E2D\u7684 jenkins \u6570\u636E\u5377\u76F8\u5BF9\u4E8E\u7684\u76EE\u5F55</p><p>\u6CE8\u610F\uFF1A<code>dockerfile_koa_server</code>\u4E3A\u4F60\u4E00\u5F00\u59CB\u521B\u5EFA\u8BE5\u9879\u76EE\u65F6\u7684\u540D\u5B57</p><p>\u7B2C\u4E94\u884C\uFF1A\u751F\u6210\u4E00\u4E2A\u540D\u53EB johanbo/koa_server:v1.0.0 \u7684\u955C\u50CF</p><p>\u7B2C\u516D\u884C\uFF1A\u751F\u6210\u4E00\u4E2A\u4EE5 johanbo/koa_server:v1.0.0 \u4E3A\u955C\u50CF\u7684\u540D\u5B57\u53EB\u505A koa_server_container \u7684\u5BB9\u5668\uFF0C\u5E76\u5C06\u672C\u673A\u7684 3011 \u7AEF\u53E3\u4E0E\u5BB9\u5668\u7684 3010 \u505A\u6620\u5C04</p><p>\u5E94\u7528\u5E76\u4FDD\u5B58</p><h3 id="\u7ACB\u5373\u6784\u5EFA\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u7ACB\u5373\u6784\u5EFA\u670D\u52A1" aria-hidden="true">#</a> \u7ACB\u5373\u6784\u5EFA\u670D\u52A1</h3><p><img src="https://s2.loli.net/2022/04/25/koaEIWOrUL9Ruqc.png" alt="jenkins\u63A7\u5236\u53F0\u8F93\u51FA"></p><p>\u53D1\u73B0\u6210\u529F\uFF0C\u5E76\u4E14\u80FD\u770B\u5230\u201Chello\uFF0Cdocker\u201C</p><p>\u5728\u672C\u5730\u66F4\u6539\u539F\u6587\u4EF6 app.js</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">ctx</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    ctx<span class="token punctuation">.</span>body <span class="token operator">=</span> <span class="token string">&#39;hello, docker, jenkins&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u63D0\u4EA4\u4EE3\u7801\u81F3 github</p><p>\u901A\u8FC7 jenkins \u518D\u6B21\u90E8\u7F72 node \u670D\u52A1</p><p><img src="https://s2.loli.net/2022/04/25/seUBLPV5wdaNAcF.png" alt="jenkins\u7ACB\u5373\u6784\u5EFA"></p><p>\u6784\u5EFA\u5B8C\u6210\uFF0C\u5237\u65B0\u6D4F\u89C8\u5668\uFF0C\u53D1\u73B0\u5185\u5BB9\u5DF2\u7ECF\u66F4\u6362</p><p><img src="https://s2.loli.net/2022/04/25/x1myqfR4VeKJAEU.png" alt="jenkins\u90E8\u7F72\u6210\u529F"></p><blockquote><p>PS\uFF1A\u6B64\u670D\u52A1\u73B0\u5DF2\u4E0B\u67B6</p></blockquote><h2 id="\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#\u603B\u7ED3" aria-hidden="true">#</a> \u603B\u7ED3</h2><p>\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u5176\u5B9E\u8E29\u4E86\u5F88\u591A\u5751\uFF0C\u867D\u7136\u6709\u5F88\u597D\u7684\u522B\u4EBA\u5199\u8FC7\u7684\u6559\u7A0B\uFF0C\u4F46\u81EA\u5DF1\u52A8\u624B\u505A\u65F6\u5374\u6709\u5404\u79CD\u9650\u5236\uFF0C\u6BD4\u5982\u64CD\u4F5C\u7CFB\u7EDF\u4E0D\u540C\uFF0C\u79D8\u94A5\uFF0Cjenkins \u7684 SSH \u63D2\u4EF6\uFF0Cjenkins \u91CC\u652F\u6301 docker \u547D\u4EE4\u7684\u63D2\u4EF6\u96C6\u6210\u95EE\u9898\u7B49\u7B49</p><p>\u7F51\u4E0A\u5173\u4E8E\u4E24\u79CD\u7684\u6559\u7A0B\u4E5F\u6709\u5F88\u591A\uFF0C\u4F46\u5927\u591A\u6570\u662F\u9ED8\u8BA4\uFF1Ajenkins \u548C\u5E94\u7528\u90E8\u7F72\u5728\u540C\u4E00\u53F0\u670D\u52A1\u5668\u4E0A\uFF0C\u8FD9\u6837\u5C31\u80FD\u5728\u76F8\u5BF9\u5E94\u7684\u6587\u4EF6\u4E2D\u6784\u5EFA\u955C\u50CF\uFF0C</p><p>\u4F46\u5982\u679C jenkins \u548C\u5E94\u7528\u7A0B\u5E8F\u662F\u90E8\u7F72\u5728\u4E24\u53F0\u670D\u52A1\u5668\u4E0A\u8BE5\u5982\u4F55\u64CD\u4F5C\u5462\uFF1F\u7559\u7ED9\u4E0B\u4E00\u4E2A\u6311\u6218\u8005</p><h2 id="\u53C2\u8003\u6587\u7AE0" tabindex="-1"><a class="header-anchor" href="#\u53C2\u8003\u6587\u7AE0" aria-hidden="true">#</a> \u53C2\u8003\u6587\u7AE0</h2>`,106),j={href:"https://www.infoq.cn/article/0sueQNsY9tLDVi79UZms",target:"_blank",rel:"noopener noreferrer"},_=e("\u600E\u6837\u7528 Jenkins\u3001Docker \u548C CI/CD \u6784\u5EFA\u65E0\u670D\u52A1\u5668\u5E94\u7528\u7A0B\u5E8F\uFF1F"),f={href:"https://juejin.im/post/6844903984419831815",target:"_blank",rel:"noopener noreferrer"},v=e("\u3010\u624B\u628A\u624B\u7CFB\u5217\u4E4B\u3011Jenkins+Docker \u81EA\u52A8\u5316\u90E8\u7F72 vue \u9879\u76EE"),x={href:"http://www.wallcopper.com/linux/3689.html",target:"_blank",rel:"noopener noreferrer"},w=e("Failed to add SSH key. Message \u201Cinvalid privatekey\u201D \u95EE\u9898"),E={href:"https://zhuanlan.zhihu.com/p/39549204",target:"_blank",rel:"noopener noreferrer"},C=e("jenkins \u914D\u7F6E publish over ssh \u9047\u5230\u7684\u95EE\u9898"),S={href:"https://www.slideshare.net/Docker/build-publish-deploy-and-test-docker-images-and-containers-with-jenkins-workflow",target:"_blank",rel:"noopener noreferrer"},F=e("Build, Publish, Deploy and Test Docker images and containers with Jenkins Workflow"),J={href:"https://www.youtube.com/watch?v=mszE-OCI2V4",target:"_blank",rel:"noopener noreferrer"},y=e("Building Docker Images using Jenkins step by step | Devops Integration Live Demo | JavaTechie");function L(B,D){const r=i("RouterLink"),a=i("ExternalLinkIcon");return p(),o(d,null,[k,n("p",null,[u,s(r,{to:"/Docker/%E5%AE%9E%E6%88%98%EF%BC%9Adockerfile%E6%9C%80%E5%B0%8F%E5%AE%9E%E8%B7%B5.html"},{default:c(()=>[b]),_:1}),g]),m,n("ul",null,[n("li",null,[n("a",j,[_,s(a)])]),n("li",null,[n("a",f,[v,s(a)])]),n("li",null,[n("a",x,[w,s(a)])]),n("li",null,[n("a",E,[C,s(a)])]),n("li",null,[n("a",S,[F,s(a)])]),n("li",null,[n("a",J,[y,s(a)])])])],64)}var N=t(h,[["render",L],["__file","\u5B9E\u6218\uFF1Adocker-jenkins.html.vue"]]);export{N as default};
