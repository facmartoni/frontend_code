if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let c=Promise.resolve();return a[e]||(c=new Promise(async c=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=c}else importScripts(e),c()})),c.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},c=(c,a)=>{Promise.all(c.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(c)};self.define=(c,s,p)=>{a[c]||(a[c]=Promise.resolve().then(()=>{let a={};const r={uri:location.origin+c.slice(1)};return Promise.all(s.map(c=>{switch(c){case"exports":return a;case"module":return r;default:return e(c)}})).then(e=>{const c=p(...e);return a.default||(a.default=c),a})}))}}define("./service-worker.js",["./workbox-ae3c444c"],(function(e){"use strict";self.addEventListener("message",e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()}),e.precacheAndRoute([{url:"https://cozy-place.vercel.app/./index.html",revision:"237a927a5777d6c0a150cb01e1211dcb"},{url:"https://cozy-place.vercel.app/assets/205002524f02ea8cbba3287ce0dea7ce.svg",revision:"22a20ed0b7e14d38855a96856657a8be"},{url:"https://cozy-place.vercel.app/assets/29355e5b98be61de1216fe9684f4c624.svg",revision:"b8450f682b24a01328fb470f5df80e73"},{url:"https://cozy-place.vercel.app/assets/2cd44edf31982265f2f78e77227d4fbc.svg",revision:"0028916ef95989a74ba6ec2800b01413"},{url:"https://cozy-place.vercel.app/assets/34146fb42faded5ca39708f9a691f86f.jpg",revision:"30a55d231ec870c188aec4bf367f61f6"},{url:"https://cozy-place.vercel.app/assets/4f38cedfd2fe58ddf06040dd860aa6c4.svg",revision:"829d1d2b5df6320ef227bc745d1fe215"},{url:"https://cozy-place.vercel.app/assets/603391e66467fe3eab06be615cf407eb.jpg",revision:"22bb43fa1fa8d55914f76fe80b9d10cf"},{url:"https://cozy-place.vercel.app/assets/72c554042e716c07a5538d572987a82e.svg",revision:"bc06f33a32283c6ea0ca3667c0e08ce5"},{url:"https://cozy-place.vercel.app/assets/77920cec412113bf6883d4f9f2bb5ac8.jpg",revision:"4dbd97113c79ae4480a25eb576684886"},{url:"https://cozy-place.vercel.app/assets/9c12ae0fd59be79c8fe5251b7d912170.svg",revision:"40080d1fc4457b40794b1fff7f5de40e"},{url:"https://cozy-place.vercel.app/assets/a0a28ad063897d6a223662b8cfc8fbc0.svg",revision:"25709fe7eaa2c48d3786ea37b649cd31"},{url:"https://cozy-place.vercel.app/assets/b8f66a63a6dc714238ce6c2cb1c43fb3.svg",revision:"87136f22b09f0d857fc6f0db8d486e83"},{url:"https://cozy-place.vercel.app/assets/e7df7cb7c0075c61930d7115047ac1ac.jpg",revision:"3155259669e26361f01eae5917e8cc13"},{url:"https://cozy-place.vercel.app/icon_128x128.ee082751b8ad14b39d68e40fb286a534.png",revision:"ee082751b8ad14b39d68e40fb286a534"},{url:"https://cozy-place.vercel.app/icon_192x192.902151f62d6e6b5850b7093e8390e1e6.png",revision:"902151f62d6e6b5850b7093e8390e1e6"},{url:"https://cozy-place.vercel.app/icon_256x256.d74512acaccbf74aba55417c4223c9b9.png",revision:"d74512acaccbf74aba55417c4223c9b9"},{url:"https://cozy-place.vercel.app/icon_384x384.4e433bbd9d5f47b70db4d657e91d4efb.png",revision:"4e433bbd9d5f47b70db4d657e91d4efb"},{url:"https://cozy-place.vercel.app/icon_512x512.a9ab90cb9c8bf3fe906c8775dcf8c195.png",revision:"a9ab90cb9c8bf3fe906c8775dcf8c195"},{url:"https://cozy-place.vercel.app/icon_96x96.b82576ae85612451afda8fbc0f4640b1.png",revision:"b82576ae85612451afda8fbc0f4640b1"},{url:"https://cozy-place.vercel.app/js/bundle.e1aaf1dc5779edf44f92.js",revision:"7c798d9bc3744fb869d6cc6096e09cfe"},{url:"https://cozy-place.vercel.app/js/commons.e1aaf1dc5779edf44f92.js",revision:"fc9c83f46136fcd43ceb90a6bed47874"},{url:"https://cozy-place.vercel.app/js/modules.0a30f25a66e3fd037c59.dll.js",revision:"9b25c4c2f4d8c363db94f8d2ce40317c"},{url:"https://cozy-place.vercel.app/js/modules.0a30f25a66e3fd037c59.dll.js.LICENSE.txt",revision:"9b318b6fb13190fe82c0677e9264b3c7"},{url:"https://cozy-place.vercel.app/manifest.96ea2b9716c0e1862b6421250ccb2b5d.json",revision:"96ea2b9716c0e1862b6421250ccb2b5d"}],{}),e.registerRoute(/https:\/\//,new e.CacheFirst({cacheName:"images",plugins:[]}),"GET"),e.registerRoute(/https:\/\/cozy-place.vercel.app\//,new e.NetworkFirst({cacheName:"api",plugins:[]}),"GET")}));
