"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/personal-site/index.html","a7de3e5dba7e49f7e83f5d918d324eb0"],["/personal-site/static/css/main.9e1a9bec.css","d9f3a5017dbad4e7a314ed47d60b4549"],["/personal-site/static/js/main.1f54ce49.js","69f9774d86e6090b26bca621731c1abe"],["/personal-site/static/media/6.ea957a98.png","ea957a984c79259107efc0abb0109ec7"],["/personal-site/static/media/7.806bd7ca.png","806bd7caf47f50af49991c49c6e75c11"],["/personal-site/static/media/IMG_3571.fc5705f9.JPG","fc5705f9c7535202ba755cff8d4430ae"],["/personal-site/static/media/IMG_3600.fc145eae.JPG","fc145eaef8f079162ce2e23b86920624"],["/personal-site/static/media/IMG_3668.c981f31c.JPG","c981f31c5882cc6ca2c9a00d76c95d40"],["/personal-site/static/media/Screen Shot 2018-12-08 at 5.27.43 PM.64c64f98.png","64c64f98955e75dc16cdb90bcb6d8a01"],["/personal-site/static/media/appfin.61139479.svg","6113947952a5adc59220a07024fdd770"],["/personal-site/static/media/blue-yellow.96f73bd3.svg","96f73bd31d6c560158b9d1293fa814c3"],["/personal-site/static/media/diagram.aca617c1.svg","aca617c1710c210dd5b51adab17f5082"],["/personal-site/static/media/logo.635793a1.svg","635793a1949879d69535ebc1dea2f623"],["/personal-site/static/media/me.45f12bfb.jpg","45f12bfb762ba849da589d9988e95061"],["/personal-site/static/media/purple-paper.d8f276b9.jpg","d8f276b953bfbf6c1ef6537e55f3dfa1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){if(!e.redirected)return Promise.resolve(e);return("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})})},createCacheKey=function(e,t,a,n){var r=new URL(e);return n&&r.pathname.match(n)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),r=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),r]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var n="/personal-site/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});