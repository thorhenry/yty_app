'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "26e3cd0641f531816f3efc60d9145010",
"version.json": "d5757c48c1b87f5d7f4f85210d67f5cf",
"index.html": "27442cdb6e584a88a0490aa451a4d2ff",
"/": "27442cdb6e584a88a0490aa451a4d2ff",
"main.dart.js": "a4fc50ffbaa27d4410a567579d4adc9e",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "7c5a8b10d1c9f31cc59cf7c59e7ab162",
"icons/Icon-192.png": "f3ee5d358034c069b6ea23884cb4edc9",
"icons/Icon-maskable-192.png": "f3ee5d358034c069b6ea23884cb4edc9",
"icons/Icon-maskable-512.png": "86d214f312afb18fbeb3e63af91262da",
"icons/Icon-512.png": "86d214f312afb18fbeb3e63af91262da",
"manifest.json": "797b9976910a91f58481514245ff450b",
"assets/AssetManifest.json": "33a2789f90c5701fd0390145f9a2c17d",
"assets/NOTICES": "6f96bb97739ca23cf1802b1ba0fe4f70",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "dfebaeaff3f9c327e2860c449ae9a894",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "74d503c7bde0f51020ea346a0dd0962c",
"assets/fonts/MaterialIcons-Regular.otf": "0a56c9d8ec9f180a3a406ddf35012fe0",
"assets/assets/images/collar_peach.png": "fc1daac37bb5de3bbacdc29ea4bc03c5",
"assets/assets/images/hoodie_green.png": "d5790e44aa425b9063dad8a2594d45e1",
"assets/assets/images/sweatpant_green.png": "d9cc2db399a5a7fc1d106c6a1f8de001",
"assets/assets/images/side_hoodie_white.png": "5b3cb95d11812f58a6a88b3f7f41834f",
"assets/assets/images/hoodie_grey.png": "9d44b30d70e99904856e55a7f250b9a1",
"assets/assets/images/tshirt_peach.png": "7c2371544bb09b6a4d9fd90d988bcd3e",
"assets/assets/images/jersey_white.png": "1321721f2c35b9c6007c248555fd9490",
"assets/assets/images/cap_black.png": "d777b17b5174e50c0b40bab604d2173c",
"assets/assets/images/longsleeve_white.png": "95ed3f47bedb12b65b4d20d98d3e1ce7",
"assets/assets/images/hoodie_brown.png": "1f2b6716d4aeba2c9a3966f6b9554018",
"assets/assets/images/hoodie_yellow.png": "1d4558f51325e86e18c2c6ff820f079f",
"assets/assets/images/sweatpant_brown.png": "9949f111fd2845690f6e60ff1fe439e5",
"assets/assets/images/longsleeve_green.png": "5512b2c70da6caa62b116354e33f5522",
"assets/assets/images/sweatpant_blue.png": "5fcdcde8ab9fe0155f9cd4f4c7e9e60c",
"assets/assets/images/side_jordan.png": "9b6e6e8fc4118b9e5c74c63421fa8c1b",
"assets/assets/images/collar_blue.png": "c65fa338c7b75fce999346574073f1e8",
"assets/assets/images/longsleeve_blue.png": "992a0d041b786b47ad2ca56173d3d853",
"assets/assets/images/hoodie_golden.png": "c5695efea8de85588708253d8d7927c9",
"assets/assets/images/capblackbadge.png": "4943062efd61c378a290a295f8ed8251",
"assets/assets/images/umbrella.png": "a8931436d429178d63c706a02b5331c5",
"assets/assets/images/tshirt_yellow.png": "32ca66a570f4a9a3b9593810894e0d89",
"assets/assets/images/side_white.png": "517d745ca7c080f87d1ea7d1a1c2dd48",
"assets/assets/images/sweatpant_brown2.png": "b37e54a215ec53b1e66948c2040e585e",
"assets/assets/images/collar_black.png": "86f0e6a35c497b991bb24e672e2ec923",
"assets/assets/images/sweatpant_white.png": "82749509220d8cc8ee5ddb52c0768e2b",
"assets/assets/images/hoodie_white.png": "688004e54f4a5b025f465d3044ba77c0",
"assets/assets/images/cap_grey.png": "3f7de57fa241570e728744895a4bc62e",
"assets/assets/images/african_pattern.png": "343467447ad8252a3c6333e2dcddbc1a",
"assets/assets/images/collar_green.png": "114b324cf622e8f16c66f59e866e99f4",
"assets/assets/images/cap_blue.png": "5edb271fe0d30c0e37903b8662535762",
"assets/assets/images/sweatpants.png": "9c73451c8d1bb1101c11e1df5e3515c8",
"assets/assets/images/sweatpants_white.png": "7c328bc3ec4476b97b1f216ebfc67a70",
"assets/assets/images/longsleeve_yellow.png": "3e3961349937838e4eb566179ecd0739",
"assets/assets/images/jersey_black.png": "0fa696f7956c8ff333d11c16d43dfee4",
"assets/assets/images/tshirt_green.png": "e5c4fa67d65cbc5b0351f787006a4485",
"assets/assets/images/tshirt_blue.png": "b97c8b6d685c66fa9ef63a546f44546f",
"assets/assets/images/tshirt_pink.png": "10eb6ef58d802e20b62f53b6a4718229",
"assets/assets/images/baseball.png": "0803ab0a2d81d16654a4c4de8a0fefb8",
"assets/assets/images/longsleeve_black.png": "19d785c674923130cf2d8173ba84f10e",
"assets/assets/images/collar_grey.png": "2407d5571cc954447ade5a5dfd242f6a",
"assets/assets/images/jersey_golden.png": "ee4dcd12fc13a9a4ae4dba85e5596243",
"assets/assets/images/longsleeve_peach.png": "6d71c5952ae555dec22ea5fd970a269b",
"assets/assets/images/jordan-white.png": "2a5fe9f822de196a448bcff7b199c12b",
"assets/assets/images/capblack.png": "2aca5e7aaed1a0edd2738b19d950af9f",
"assets/assets/images/cap_red.png": "f4bfd502d457672164d101337aef534e",
"assets/assets/images/cap_green.png": "5f500d18735da2d8dc50bc5e6904c30b",
"assets/assets/images/tshirt_white.png": "8a5b04849e1945e700221d8136d58af1",
"assets/assets/images/side_golden.png": "d4b15ec68057a68aa864904f97c98c26",
"assets/assets/images/side_black.png": "16dcd9cecc98c6ad1a8b0eb01040d2cc",
"assets/assets/images/tshirt.png": "08ad4f2ed98fae011a938079eec8e329",
"assets/assets/images/collar_purple.png": "4e31cbc70a297a11f45251bd4cf05768",
"assets/assets/images/hoodie_purple.png": "354c5ab5e591221c3f5de99bb9e84b33",
"assets/assets/images/sweatpant_purple.png": "099d1c54f8fac4f86de56ce7befd039c",
"assets/assets/images/hoodie_blue.png": "a45f01c1469ef3e416886daaf0bdc3d0",
"assets/assets/images/sweatpant_black.png": "e97c2f0d39547d62cc35c7ea9c818854",
"assets/assets/images/sweatpant.png": "4d49c2ec2511b0f7f251242e18e22270",
"assets/assets/images/collar_white.png": "c01e6c9fb289e72c58dfb58f02b74e7f",
"assets/assets/images/hoodie_black.png": "7f00d1d90e8d9e6962701147be9ebddb",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
