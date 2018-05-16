webpackJsonp([87155188405931],{480:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We\'re going to work on a project together to work on your HTML and CSS skills and so you can see how these puzzle pieces fit together. We are going to make a news site together, similar to The New York Times. Your project will look like this:</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-9c00e.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 650px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 77.8%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAIAAACZeshMAAAACXBIWXMAAAsSAAALEgHS3X78AAACTklEQVQoz6WSzW8SQRjG9x/x7s148KI10hitB+sHUq0gGgWLWlIPWmttQ5EAQhNJKq1RI9aDMdFED1Uq2kiN1EqkyIeVxsAC+82yskvZ7sJiqQ5brdpUevA3T95MJvPOM5lnoO//AbTmKiPDcVyhUAATUGu12hrN5T8QRbHckFUbIHBqUYZlWUmSFmtLpRJP5xmazlMEQZFEDkDRRY4ri4KwwIPrgJ2gghYok84AYBiu1ywemPk8Phl8NeG/47KZjJrLBuUlg8rUpent2GO92BZ8M5ZF0HS63gOnYIgkSVaGL/GR0PQNZ1+/Uf3Qcc7RrT+pVJxt29J5dKt27+YDio0Gza6A38vkv4LLLvtDwDMNRgomSOrD1Mshs77n9O6xexa39YJO1aJr3XZGueP4/u1NmzZolQrf86cIitZbZHNo5RlqtaWZ4MSQTefsOTj+wO57PHLFqNarmrs7DpnPHx4xq++7uhLRd5JUFcWfD/dXVLGPget2o3NAazcdczs6bX16TXvLvtam9iPNJzQ7+3tPRSPv/5kzOHA52/lSaUEQBFEUfrlUZK1K+3fOlYrEMhiFxMhsmEQieCZM43GWnivkEmwuAeo880XkYLGYXhHE8zxIDBh+qy4yxVR4zhdPvcjm/Gh+cl1BCIJgGIaiKIUTb2nqZmp28FPIlZx1U9lhBh/OYw0EoTIETvBc0Z9Hr8WnB5IhCxazoNF1Vf8khAzL0K/jpcEn2NVHpPWZYPNWbV6psSCQNUgc5I6imalAznM3efsWPurhRj3FdfUDH/YObCcrrMMAAAAASUVORK5CYII=\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="Similated news site, see example project for HTML and CSS version"\n        title=""\n        src="/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-10273.png"\n        srcset="/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-9b14a.png 163w,\n/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-94962.png 325w,\n/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-10273.png 650w,\n/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-2fc6f.png 975w,\n/static/html-css-project-66e24f56e6d7f2f3dc35819ea794b812-9c00e.png 1000w"\n        sizes="(max-width: 650px) 100vw, 650px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>You don\'t have to get it exact. The point here is for you to break down this layout into smaller pieces and solve the smaller problems before piecing it back together into this.</p>\n<p><a href="./news.html">Here is my complete version</a></p>\n<p>Here are some tips and guidelines:</p>\n<ul>\n<li>Google everything. No one expects you to remember these things off the top of your head. It\'s not cheating. This is not an exam. Knowing how to Google programming things is literally your job.</li>\n<li>The image is coming from a site called <a href="http://placecorgi.com/">placecorgi.com</a>. The key here is that it\'ll give you images of any size. The way you do that is <a href="http://placecorgi.com/">http://placecorgi.com/</a> <code class="language-text">&lt;width&gt;</code> / <code class="language-text">&lt;height&gt;</code> where your replace width and height with a number. This will be the size of your image in pixels. The one in my example is <a href="http://placecorgi.com/500/300">http://placecorgi.com/500/300</a></li>\n<li>Do the navigation box (with all the colors) last. It\'s the hardest part. It uses <code class="language-text">display: flex</code> inside of <code class="language-text">display: flex</code> and uses <code class="language-text">flex</code> and <code class="language-text">flex-direction</code>.</li>\n<li>The top row and the bottom row are using <code class="language-text">display: flex</code> to manage the size of those columns. They both use the same class.</li>\n<li>There\'s a lot of room to re use classes on this.</li>\n<li>Please, please take it one step at a time. Take one section on the page, style it, and then use those small building blocks to make larger building blocks.</li>\n<li>You can "cheat" by looking at what I did and inspecting the page. I\'d try to build it first on your own but then take a look at how I\'m doing it.</li>\n<li>How I solved it is not the "correct" answer. That\'s like saying there\'s a correct way to write a poem or a correct way to paint a portrait. This is as much art as it is science.</li>\n<li>Good luck!</li>\n</ul>',frontmatter:{path:"/project-html-css",title:"Project: HTML & CSS",order:10}},allMarkdownRemark:{edges:[{node:{frontmatter:{order:0,path:"/intro",title:"Introduction to the Course"}}},{node:{frontmatter:{order:1,path:"/overview",title:"Overview of What You'll Be Learning In This Course"}}},{node:{frontmatter:{order:2,path:"/tools",title:"Tools"}}},{node:{frontmatter:{order:3,path:"/basic-html",title:"Basic HTML"}}},{node:{frontmatter:{order:4,path:"/html-next-steps",title:"HTML Next Steps"}}},{node:{frontmatter:{order:5,path:"/meta-html",title:"Meta HTML"}}},{node:{frontmatter:{order:6,path:"/basic-css",title:"Basic CSS"}}},{node:{frontmatter:{order:7,path:"/selectors",title:"CSS Selectors and the Cascade"}}},{node:{frontmatter:{order:8,path:"/layout-css",title:"Layout CSS"}}},{node:{frontmatter:{order:9,path:"/css-patterns",title:"Effective Patterns for Writing CSS"}}},{node:{frontmatter:{order:10,path:"/project-html-css",title:"Project: HTML & CSS"}}},{node:{frontmatter:{order:11,path:"/programming-fundamentals",title:"Programming Fundamentals"}}},{node:{frontmatter:{order:12,path:"/functions-and-scope",title:"Functions and Scope"}}},{node:{frontmatter:{order:13,path:"/objects-and-arrays",title:"Objects and Arrays"}}},{node:{frontmatter:{order:14,path:"/dom",title:"The DOM"}}},{node:{frontmatter:{order:15,path:"/js-project",title:"JavaScript, HTML, and CSS Project"}}},{node:{frontmatter:{order:16,path:"/ajax",title:"AJAX"}}},{node:{frontmatter:{order:17,path:"/libraries",title:"Integrating with Other People's Libraries"}}},{node:{frontmatter:{order:18,path:"/git-and-bash",title:"Git and Bash"}}},{node:{frontmatter:{order:19,path:"/node",title:"Node.js"}}},{node:{frontmatter:{order:20,path:"/deploying",title:"Deploying Your App"}}},{node:{frontmatter:{order:21,path:"/final-thoughts",title:"Final Thoughts"}}}]}},pathContext:{}}}});
//# sourceMappingURL=path---project-html-css-64c8abe6dfaab5847af7.js.map