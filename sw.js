if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const o=e=>i(e,t),l={module:{uri:t},exports:c,require:o};s[t]=Promise.all(n.map((e=>l[e]||o(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.6cd16106.css",revision:null},{url:"assets/index.d18e0018.js",revision:null},{url:"assets/Rc.f36060aa.js",revision:null},{url:"assets/web-vitals.67dce932.js",revision:null},{url:"index.html",revision:"892ac43e2af86d0bc2dfca5a6cc920a3"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"favicon.svg",revision:"2f580ef4a0c82db16f97a31b8d7d6f67"},{url:"robots.txt",revision:"e232f8308190c040e3711172d401a8ac"},{url:"manifest.webmanifest",revision:"49b5c2c0de825be91249b1ceb5374f04"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
