"use strict";var precacheConfig=[["/portfolio/index.html","ad5a32942156975e76793065b266d035"],["/portfolio/static/css/main.e4bf5e30.css","41f97e776dfa166530593e53b99303fb"],["/portfolio/static/js/main.a546f95f.js","e596811e55b13c99b1238ad60d4a6abe"],["/portfolio/static/media/gleb_irovich.af307310.pdf","af307310a5e2e89269963a14155cd638"],["/portfolio/static/media/i_hate.108de128.svg","108de128eaac0b712501af09ef8e0010"],["/portfolio/static/media/i_hate.472bca70.eot","472bca70b157eb122eaa0e63f0a87e77"],["/portfolio/static/media/i_hate.90b95b71.ttf","90b95b71a889f67524f52283aa1d3ae3"],["/portfolio/static/media/i_hate.d8102d07.woff","d8102d07210d2af4fe02e74a4d47d4b5"],["/portfolio/static/media/i_hate.e7e4ee61.woff2","e7e4ee6174f770a511562b816f843c8a"],["/portfolio/static/media/i_like.6bfd2810.eot","6bfd28101dd423383a5ed97d8a43e9be"],["/portfolio/static/media/i_like.81cddfc7.svg","81cddfc7fdebb3139818faf83e298be0"],["/portfolio/static/media/i_like.d6528eac.woff2","d6528eac02ec9c1cee1fd6b6148ce233"],["/portfolio/static/media/i_like.d94e8225.ttf","d94e82253368b2e0a1eb0b3d16139fc0"],["/portfolio/static/media/i_like.dd2a504d.woff","dd2a504d1c7062de79ef26d53ede85e0"],["/portfolio/static/media/me.753aa157.png","753aa157d2f766776236f61226493125"],["/portfolio/static/media/pattern1.2eca3305.png","2eca3305e72b8f72b631d5626c029f5d"],["/portfolio/static/media/trianglify.680613c2.svg","680613c2beb9292812139b706413abc3"],["/portfolio/static/media/trianglify_inner.1530a63b.svg","1530a63bbddc6f83000fe515cf5533f5"],["/portfolio/static/media/waves.a5a2ef39.svg","a5a2ef39a4cbb277b9299020c70d1a98"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});