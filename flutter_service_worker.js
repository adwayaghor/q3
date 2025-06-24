'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "08b424905763fad304328bc312ca4acf",
"assets/AssetManifest.bin.json": "cfd4b0baa49ddde4fa984d862879f8a4",
"assets/AssetManifest.json": "cc63924b42845f8a652c163cff8dbb32",
"assets/assets/0/img_1.jpg": "0fb2e3268baa5ce1821c57c6755f7554",
"assets/assets/0/img_17.jpg": "e9b8b1051063790d0054c9c5dda58254",
"assets/assets/0/img_23.jpg": "1a077a0a7fb7eadff2b5627e42452e89",
"assets/assets/0/img_4.jpg": "c9780434ba86da32baa3a2c4f4143d5c",
"assets/assets/0/img_5.jpg": "44c55fac15db3e7486e8bbff146d7dd7",
"assets/assets/1/img_0.jpg": "5ff047f6c5d84b2c7d737c9fda3cd991",
"assets/assets/1/img_12.jpg": "a9bfe6b939d7ffa7247bbf56e3c647d4",
"assets/assets/1/img_15.jpg": "7d4ddd1fa248ba876f49bcc88bfbf7fd",
"assets/assets/1/img_2.jpg": "b5856ddedb4cc7a2eaf5ceb0f4beaa77",
"assets/assets/1/img_35.jpg": "b3e2286cba5cf5c160e531d840555d9d",
"assets/assets/2/img_16.jpg": "d347bfafe1ed1c6a0581b91c782d8f17",
"assets/assets/2/img_22.jpg": "7f9dc427a744ff6c3c3b5b0b758d425b",
"assets/assets/2/img_24.jpg": "2f1dd2491facdb73aabf4e3c1c662713",
"assets/assets/2/img_34.jpg": "0b288e2ac7282b4bde253c6df400cbe8",
"assets/assets/2/img_44.jpg": "1ec84fb2c46600eb52468a9a0c454bf6",
"assets/assets/3/img_13.jpg": "e2a535e738756d295fb2fb9b618b7b00",
"assets/assets/3/img_14.jpg": "b1ad119aae70e37104565a7537c0f115",
"assets/assets/3/img_25.jpg": "b53a25dc56c7d4bafb155642d8f2031c",
"assets/assets/3/img_7.jpg": "e892f037b4c4db4cae7c46f77e88bc14",
"assets/assets/3/img_9.jpg": "e35d9154c8bce606bc0f7c8af1ca554c",
"assets/assets/4/img_3.jpg": "a32c0a367104631445bcd3d07daa521f",
"assets/assets/4/img_32.jpg": "6ec4f77aa596e54f140f7b33bc78c32a",
"assets/assets/4/img_39.jpg": "415937d39bb55c9f434646597d2b8b07",
"assets/assets/4/img_42.jpg": "73dae1cbb82b1e6484de5c4acf4ed264",
"assets/assets/4/img_43.jpg": "52fe7ce91136485f07f40d07d6b4dce6",
"assets/assets/5/img_19.jpg": "061f8c0066b7e39040d63f7d8c952f58",
"assets/assets/5/img_51.jpg": "052c092e749be85213e5345d64682a90",
"assets/assets/5/img_62.jpg": "84849c78c79f8297cbd0457f79402803",
"assets/assets/5/img_8.jpg": "d9a376170327f3f814a5cee0b67decfd",
"assets/assets/5/img_80.jpg": "825aad4119f12b7631474800e822c055",
"assets/assets/6/img_21.jpg": "260381f59a16eb8379043a22754980ec",
"assets/assets/6/img_26.jpg": "340cb7dd932237dd8b87826a8768bcaa",
"assets/assets/6/img_45.jpg": "6fceb37bca58c513b46419df56c29753",
"assets/assets/6/img_64.jpg": "532faaa3bc61c34e1ebb8c1d0abcf833",
"assets/assets/6/img_72.jpg": "324a1cd6f57b9563dfe7de2d67025ece",
"assets/assets/7/img_18.jpg": "dfea6077f73e9ee24b0fdf0e0ed582c5",
"assets/assets/7/img_29.jpg": "9ffab1a2f5cd8319ae5c137bdf7b10ca",
"assets/assets/7/img_47.jpg": "df5efdde9d6f381b6e9b0e0927b262fa",
"assets/assets/7/img_48.jpg": "9defc9abcc5b8ebfd3fa9a6fea94b75a",
"assets/assets/7/img_6.jpg": "e74831dfa385effaba15d8b366632467",
"assets/assets/8/img_10.jpg": "10ddb8d73c0a6d53e45773c03e14212a",
"assets/assets/8/img_20.jpg": "cd4a91877e3de5eaf99fa5b27db85b65",
"assets/assets/8/img_30.jpg": "21dc68d16552c05ef55bae0db428f429",
"assets/assets/8/img_67.jpg": "a907a8e27bd8ba3a97a753d06369cb52",
"assets/assets/8/img_82.jpg": "42dd4859d1db968b8f44119147ff5b76",
"assets/assets/9/img_11.jpg": "fb8b3e0a3b14ec120ccb64709795f0ca",
"assets/assets/9/img_27.jpg": "482f806f237545d0b097c23add444653",
"assets/assets/9/img_28.jpg": "f240a3f3d0f6f1b5b01747ababddfaba",
"assets/assets/9/img_31.jpg": "ea1783007376b3345f81d1bdf22aeb8d",
"assets/assets/9/img_33.jpg": "e3162967031f20688b7af988ada966ff",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "2902b56e4b535e6da56a69a50316702d",
"assets/NOTICES": "e1ec39c6b4c431a0e6afb1cbd5779629",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "6ac641de209365d1d5be03d388521e36",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "23899043b93cede8f0cfee3b30c72932",
"/": "23899043b93cede8f0cfee3b30c72932",
"main.dart.js": "8c1fa23c84b2e11237e35cda33471a64",
"manifest.json": "fbd41db300a53d3f5ea1ca92929c5f01",
"version.json": "3cc88ebafef3e7081de8d105645f1ef4"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
