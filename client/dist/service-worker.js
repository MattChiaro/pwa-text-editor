if(!self.define){let e,i={};const n=(n,s)=>(n=new URL(n+".js",s).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(s,t)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let r={};const d=e=>n(e,f),l={module:{uri:f},exports:r,require:d};i[f]=Promise.all(s.map((e=>l[e]||d(e)))).then((e=>(t(...e),r)))}}define(["./workbox-afb8f5db"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"index.html",revision:"638a4feaf7dec80b95f86ef38d004f65"},{url:"install.bundle.js",revision:"0090281fd2c7383093de18d2339fb71a"},{url:"install.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"main.bundle.js",revision:"2ee7ca49a84fd67c24e8b2dcc4847cfa"},{url:"main.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"}],{})}));
