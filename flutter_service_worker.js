'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "31370c6404abefa822544dda573fdb12",
"version.json": "d5757c48c1b87f5d7f4f85210d67f5cf",
"index.html": "5cea28f601392a7f072b9a96aa52a708",
"/": "5cea28f601392a7f072b9a96aa52a708",
"main.dart.js": "7a62bdfe5785027654893318dc785c72",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "7c5a8b10d1c9f31cc59cf7c59e7ab162",
"icons/Icon-192.png": "f3ee5d358034c069b6ea23884cb4edc9",
"icons/Icon-maskable-192.png": "f3ee5d358034c069b6ea23884cb4edc9",
"icons/Icon-maskable-512.png": "86d214f312afb18fbeb3e63af91262da",
"icons/Icon-512.png": "86d214f312afb18fbeb3e63af91262da",
"manifest.json": "797b9976910a91f58481514245ff450b",
".git/config": "e51576c0da2a2aacc80ad267117ff891",
".git/objects/57/7946daf6467a3f0a883583abfb8f1e57c86b54": "846aff8094feabe0db132052fd10f62a",
".git/objects/3b/f5e6bb0863ddaf15c250775a8b2f747485cecd": "6b1b152cddefdd05851ac2925824c815",
".git/objects/03/2fe904174b32b7135766696dd37e9a95c1b4fd": "80ba3eb567ab1b2327a13096a62dd17e",
".git/objects/35/96d08a5b8c249a9ff1eb36682aee2a23e61bac": "e931dda039902c600d4ba7d954ff090f",
".git/objects/3c/ddf31c8f6efa4f8bf433aa27656f4e1da00e06": "8764738d87b028ae515b40f0ab50200d",
".git/objects/58/6bf47fc14123ca7ea3a9577da291609c0b47d9": "32a22ab63b5fde3fd82b780223540249",
".git/objects/67/54a25da5d6c3a4130e7c12e09ddffd55218735": "ae93dd82caa4bf3272d5deb714084ed1",
".git/objects/0b/1f4555a17e4a7e9dfa9b39ce071cbcc6a63802": "b61250b44b0614ed1d1994352ea42a59",
".git/objects/94/52835f48971f4b0f26318ed33ae05af4eb0456": "021e8de3ae02f8b84740642420e1a1b3",
".git/objects/0e/6d7b0ba5c3ad68cf8e6fac6d7f3d6cf4a09f41": "ca452335c7ffe92f278418f9280ce836",
".git/objects/60/2a470e5d216f79f49bc8be6b7c335bec61d50b": "4883901ea77a5161e3535629d2f1e170",
".git/objects/5f/bf1f5ee49ba64ffa8e24e19c0231e22add1631": "f19d414bb2afb15ab9eb762fd11311d6",
".git/objects/9c/23e5775ce1a03453ee9108cdf70294b0cd265e": "64985c73746b7dedccb7701cf5b65162",
".git/objects/02/993860d91b4dc019fc6ae003768e4b3fd781be": "0bc6550442dcf085a672fd5bd92fc653",
".git/objects/d9/3952e90f26e65356f31c60fc394efb26313167": "1401847c6f090e48e83740a00be1c303",
".git/objects/d9/42dde73841b145f3bb3296d9415448759e09c0": "16a506f94b837f8511cd68a5fde87da6",
".git/objects/d9/bf4dda77c95bf850c3b66a3123854598812948": "cd0129572411f8b8f579118e71e91fe0",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d0/4889b9ea1a0ceff0ab432686c90a6050941399": "f3cab6719f6b10189d416714e55b425b",
".git/objects/d0/023ed571cf8672db7be728ae07d8198f4ddae4": "c56256a4fb37ef350748ef5de80f022b",
".git/objects/be/709acd7e5fb2e19c284126e22c91f3cf3e3e42": "3f8208f2408f4632ac020a77dab1a5f4",
".git/objects/b3/bd09ca051ac2fd6e00f556b0456f2a0151f77b": "0d27032cd98fcbc0cd03407b4b5558aa",
".git/objects/df/dca6e45b95237b94c31f8b924a95a8f4c161b2": "747aea641ae7c89085a02d00de307e2a",
".git/objects/df/c814ab989fe78360fcadde2d19867a411a3220": "2c665b3693c2b5e966ce17fa45d9c4a0",
".git/objects/a5/de584f4d25ef8aace1c5a0c190c3b31639895b": "9fbbb0db1824af504c56e5d959e1cdff",
".git/objects/bd/6be43d015a2a8a92db341ee519feb383a20cb4": "0df4c80430aff6e9b0cdd970bc215545",
".git/objects/d1/df1cb21d0bf6bd5a3486e20c8185dacdaf9629": "2f45832b878f897947177d5d757f565d",
".git/objects/bc/09099089b58660657ebf7d42b7571b3ce1101d": "d7f4ae58707b20421b17fec784c22c61",
".git/objects/d8/ea7067c8706443716bcd808e806c3961fa2ad6": "92f73c7f49dd0ea535a7e3f31f5b75de",
".git/objects/ab/96bb154c33eca45aeeb37825483abd0163f0b0": "73fac3ca79f957c89e25aa79097e16fb",
".git/objects/e2/4fcf5af64af3ca7f80b16a084fd8cec0b6a47b": "4964a36891645689fa7d3d17b29e6f30",
".git/objects/f3/709a83aedf1f03d6e04459831b12355a9b9ef1": "538d2edfa707ca92ed0b867d6c3903d1",
".git/objects/c9/a2d832ae80328e9494bfde3d8d6ed08f27338c": "95b3e88726bb8151f837cfc8d7315d10",
".git/objects/fd/b34c2d6a176325204df6baaa310616a405c10d": "02f6beeca576ae76a31d286addaeea0f",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/48f616c27143b05febb563638abc742405ceaf": "11c338c167101fa63844311f18eeb410",
".git/objects/f5/7d18009560950818e3677ec1a52e5cc3ba457f": "f9d0dbb409d9dc1157e30abbd31c1a72",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/e3/2c1b77732c22ffe425d2c7f96feb35434f0ac9": "723eb78abc0a953d54282b955a3e9c3e",
".git/objects/e3/29939e919aad3467a7081a6dbff2b9cc3c54fc": "05300b95974c19c6bc93ac0da9921a97",
".git/objects/ca/b8a0ba2a9ac2537b91067c814a0349bacc59d6": "c2d66e3e2485d4df2892438bc2db7048",
".git/objects/fb/4b992c64bad78bc7cadefc20a6d6a77e685d8c": "7fec37475be8f4960ee52e73cec8dd4a",
".git/objects/fb/4e8f309cbb802ab60c12e810df63b1d372ac81": "93f292b0d15fcbaa77b7557738ad3169",
".git/objects/4e/643e231bdd511b8542b8d45c74fa805a542afd": "b37dd11549d7162d9c03bf6e654d7388",
".git/objects/20/c9f76a85ece5aed6b04463e3b2441b5f94deaa": "da89e866b361c08a5ab587a2675bcb13",
".git/objects/16/a2c237f8a914005637b91722021f66857a368b": "c5d5923084553f8c08131ebde7ecfb09",
".git/objects/16/e80c0132dd4b473d5746985b73fce5a3d47395": "0e84a17c4c07fb0a0a9405dcf0c7c339",
".git/objects/89/62402f11c3deb1f8ca317db851992938ed9086": "f2fc432798f3975f36c657140f93a53a",
".git/objects/89/7a07e522a017e4f577cc31295d400cd7e696c8": "bf25b9ce368a98d6521161bdeb8c21f3",
".git/objects/73/5c6628b60f218134f9ae74b2afe518e3dfc0a0": "f5e399af975e2e734501b999a0556a4e",
".git/objects/80/436373bf671ea87294c2fa9351b95bf3dc9b0c": "d3795b9fc0996779a5ae3d2ee775e3a6",
".git/objects/1a/cecb57368c56b5d0c494b6778d25d7c3761ec0": "a546732ac28155ba7b8d6fe677712eac",
".git/objects/8a/51a9b155d31c44b148d7e287fc2872e0cafd42": "9f785032380d7569e69b3d17172f64e8",
".git/objects/7e/e602313484c4ec63ab8f8fb7e91415f37dd49d": "f62cd8eee93e008117e1f0b14f846947",
".git/objects/81/cc6bb9ae4e4a314abb495675db2baf592131e8": "dde99b9a56333d1259b333013076595f",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/be250aa00ca9b093a18a78f322ecebecadba15": "85f8aedd3ceeedb3017dfd8229a6702d",
".git/objects/07/b3e7f97e2634302c58a00c0c0377f45cb98f5f": "aaf4296932cd709fa5636041b23d6363",
".git/objects/38/1bab4da79a1b4d69eac9577ebdd0231f2f728c": "7ffa9489cb52af25885b56cddcb1058f",
".git/objects/6e/fd3f6fc65dec2d0442443ac3ff46d4423bf65c": "c70191ea99a9292368ab52ad4bae8cfe",
".git/objects/36/69b915b11f1fd00d585a91fa9aabb6cc728d09": "6e619c5b0eed996750bf1e83b9af005f",
".git/objects/5c/ab5e05f2ce283aa47fbd41c6a30c2f1a3c4969": "cb3045d6811f700f8eaf51bd28080606",
".git/objects/91/4a40ccb508c126fa995820d01ea15c69bb95f7": "8963a99a625c47f6cd41ba314ebd2488",
".git/objects/06/8fd74626ffbc459c5e9124f58418d5b0d30fb6": "f6a52d09ee0788fedda6522c68677335",
".git/objects/6c/8d6bcfc156bd7cc5a860017b5eaf87aec2d694": "c8ccb24da61a1660f5587853d078d962",
".git/objects/55/c0239e64c0db7dbd2e65ea88f197951aa3561a": "f3a68d7505477496a9b5b20f5c281a63",
".git/objects/97/a7d8b91dcc3bd1ce8f3a32bafc9bdbdb9273be": "a17628bf8c58bad4f3357b7f6467e8ad",
".git/objects/d3/74dadea0b92c0da4ee5927ffb892de0690ea27": "23b06a9642cf9f7548d68147b0961e67",
".git/objects/d3/cc6ac5e1987e6a51ac2f7caaee98b49857aa53": "6e9c32e51a60454b9c48896e65c98c75",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b1/8292f80eb5b8c86a8425034c64a3b6c3129ce5": "0567b3edc7dd131780a5c255c0ccaa6c",
".git/objects/dc/f83695f71da8c6278eb914cdd42692c427924e": "9ca7f32e12839dea4610032ada023058",
".git/objects/db/19f077364df6c4a28d90fa2c9e3b0f7b42e382": "4c9d8e4acec95aac7e098e757b71a545",
".git/objects/a8/60ab8fe42f23b3475d4dc3dec45d7052526845": "be53f81bb8207873c85c8fa2c25df6ab",
".git/objects/a8/8c9340e408fca6e68e2d6cd8363dccc2bd8642": "11e9d76ebfeb0c92c8dff256819c0796",
".git/objects/b9/0aa985c865dd9d2eea45f2e6c22d1cb30aec26": "c42cad99276a77c156aca5b375583ad8",
".git/objects/ef/b875788e4094f6091d9caa43e35c77640aaf21": "27e32738aea45acd66b98d36fc9fc9e0",
".git/objects/ef/976c701e56dc8a72ca6cfea710b295f08e3f08": "2188fac832d542f711b32569c4e6c9c7",
".git/objects/c4/27c65a5b5589d8e255a1ae2ae41113ffb8b8d4": "1898d43d8c7f2715913740e80b466ad5",
".git/objects/cd/f25a50edcc63380cbc5e195d30fefb377f6fcf": "f201391c3f71c6aaf3bcb6b1e7cf29c6",
".git/objects/cd/8b9707f67cab30fdc75f239d10c625511a5e47": "4a811388ad772076a5a145c6df532b75",
".git/objects/c2/84628040545c3238cdf2793870adedd7286f28": "f5eeb35bcab7c23cbd1c36fd8134743d",
".git/objects/f6/b89c6a4c8c1e805e73a7df48cfaf2c3ca3530f": "781321201f36147e9737b8c9b263e77e",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/f8/10cfc1fa9baea45a443d7a5c9806db8de90880": "81e285bbfc60b77dd4fc5195cd8df760",
".git/objects/f8/d18eeb9690767b22e42d5eb98b43165a2ad902": "308bbcdbf1d95210550117eb8b6fabc5",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/0fdbbf896041beae76b0ade614b5d02639980b": "749adbcadb2988f9a722b82c138a9834",
".git/objects/2d/1859ad8a3cb34b0145211e6a9776fe0b6ef1e5": "ee0267eaac0cf316aed84fd4e272581d",
".git/objects/1b/f90fffc77b8ca775b355939c8a3a52f3d132a8": "703173505be3ab29c46f871320d44133",
".git/objects/1b/ddc24c4ac21d011262806971ce4f4587297ef2": "6fa7d01d4be31f6a0bd1060c459c3e36",
".git/objects/48/c2a3a25d81e8405cc0f09a727a5689181488cd": "6359cc9e1eaccda79f212cb67fc77f93",
".git/objects/84/3b4e8d777564b3fc0dd2e4d54003e7a5cb4ed6": "15e9492095c37afbe0e75de67ed89a02",
".git/objects/4f/02e9875cb698379e68a23ba5d25625e0e2e4bc": "254bc336602c9480c293f5f1c64bb4c7",
".git/objects/8d/0356e4636cf1aa958b3130b68785d0201498ab": "3e7612305d5e8a274a3a196a5d0b842c",
".git/objects/71/73f37b0bee53849f67dd0b91dee71afdc750e6": "7a50542c7ebdba4eb02ff0892890f540",
".git/objects/1c/f96a15c522aa19ffc4dc50f3356e48756a6237": "0303fde839d3519714ad93f0a4a699e4",
".git/objects/82/6737ab3ef165c156e25bcd31d49aaef9c67626": "8aedb12e8cb64ef64ba3d91ded6b5718",
".git/objects/40/1184f2840fcfb39ffde5f2f82fe5957c37d6fa": "1ea653b99fd29cd15fcc068857a1dbb2",
".git/objects/2e/a8857f819835af7a0d700d73b1b508a748a14b": "0bd3d1420f7ed8a0d218885e2cbbeba9",
".git/objects/2b/8c70994d3f4deb90dd3152de46b145b2dfd310": "25802c7dd007ba673653df123ce36cda",
".git/objects/78/6f4c14a916586ee51d74e00d37bf8a4b9054ff": "f8a775ab75b76f0ae137114cf030739b",
".git/objects/7a/2d088bd6ea16da43dbeaa985eac73103da1759": "85fed62b0f7da8e372bf01366afff732",
".git/objects/14/22505ccdf2669012303c3d13ba6d3a3f6b928d": "874595e47a1cf078d5748e4e83b6b96e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2bc9855dfaef63d9a02d1d79cb8e5e17",
".git/logs/refs/heads/main": "24ffd109fd8a9b7ff0e02d8526e50661",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "cd7d7e228262934381b8696fc31a80d5",
".git/index": "2ad9b93a11d7d28d1a4b479f42d687a8",
".git/COMMIT_EDITMSG": "fc99046f45089a1b9261fdb8bf7dcb92",
"assets/AssetManifest.json": "33a2789f90c5701fd0390145f9a2c17d",
"assets/NOTICES": "7aa9deaa3068956c73a87db16e072c72",
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
