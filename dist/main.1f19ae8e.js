// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"getType.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getType;
function getType(data) {
  //data의 조금 더 상세한 데이터 타입
  return Object.prototype.toString.call(data);
}
//중요!!!! 별표 다섯개
//export 내보낸다 default 가장 기본이 되는 함수로 만들어준데
//밖에서 입력 받아온 데이터를 연결해주는 의미이다 프로토타입도 데이터 타입을 알려주는거래 상세한 데이터 타입이ㄹ래
},{}],"getRandom.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = random;
function random() {
  return Math.floor(Math.random() * 10);
}
},{}],"main.js":[function(require,module,exports) {
"use strict";

var _getType = _interopRequireDefault(require("./getType"));
var _getRandom = _interopRequireDefault(require("./getRandom"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); } //가져다 쓸거야 다른 js파일의 함수를
//가져다 쓸거야 다른 js파일의 함수를

console.log(_typeof("test")); //string

var h1El = document.querySelector('.test');
console.log(_typeof(h1El)); //object
console.log(_typeof(null)); //object
console.log(_typeof({})); //object
console.log(_typeof([])); //object

console.log((0, _getType.default)(1)); //Object Number
console.log((0, _getType.default)('wqe')); //Object String
console.log((0, _getType.default)(null)); //Object Null
console.log((0, _getType.default)({})); //Object Object
console.log((0, _getType.default)([])); //Object Array
/*
typeof  : 데이터 타입이 무엇인지 알려주는 명령어

[자바 데이터 타입]
숫자
문자
논리
배열
object  -null,{},Array
undefined
*/

/* 
산술연산자( +,-,*,/,%)


*/
console.log("=====산술연산자======");
console.log(1 + 5);
console.log("산술" + "연산자");
console.log("산술" + 1); //산술1

console.log("=====할당연산자======");
//할당연산자(대입) = :변수에 데이터를 저장하기 위해서 사용
// const(상수 선언)
var a = 10;
console.log(a);
//a=20; (불가능)

console.log("=====복합대입연산자======");
//복합대입연산자
var b = 5;
b += 1; //b=b+1;
console.log(b);
console.log("=====비교연산자======");
//비교연산자(결과값이 true false로 나온다)
// >,<,>=,<=,==,!=

console.log(a > b);
var a1 = 1;
var b1 = 1;

/*
==  :두개짜리true 데이터 타입까지는 비교해주지 않는 데
=== :세개짜리는 데이터 타입까지 비교해준 데
*/
console.log(a1 === b1);
console.log(1 == "1"); // == 두개짜리true 데이터 타입까지는 비교해주지 않는 데
function isEquals(x, y) {
  return x === y; // === 세개짜리는 데이터 타입까지 비교해준 데
}
console.log(isEquals("a", "a"));
console.log(isEquals(1, "1"));

/*
!=  : 데이터 타입까지는 x
!== : 데이터 타입까지 비교해준다
*/
console.log(1 != "1");
console.log(1 !== "1");
console.log("=====논리연산자======");
/*
논리연산자
and or not
*/

var l1 = 1 === 1;
var l2 = 'AB' === 'AB';
var l3 = true;
console.log(l1); //true
console.log(l2); //true
console.log(l3); //true

console.log(l1 && l2 && l3); //true
console.log(true || !(true && false)); //true

//조건문
console.log("=====조건문======");
if (1 < 2) {
  console.log("참");
} else {
  console.log("거짓");
}
var num = (0, _getRandom.default)();
console.log(num);
if (num === 0) {
  console.log("0이야");
} else if (num % 2 === 0) {
  console.log("짝수야");
} else {
  console.log("홀수야");
}

/*
Switch
*/
console.log("=====switch 조건문======");
console.log(num);
switch (num) {
  case 0:
    console.log("0이야");
    break;
  case 4:
    console.log("num>>4");
    break;
  case 6:
    console.log("num>>6");
    break;
  default:
    console.log("몰라~");
}

//삼항연산자
console.log("=====삼항연산자======");
console.log(1 < 2 ? '참' : '거짓');
var data = 1 < 2 ? '참' : '거짓';
console.log(data);
console.log(num === 0 ? '0이야' : '');

/*
반복문
for(시작 ;종료 ;반복조건){}
*/
console.log("=====반복문======");
var ulEl = document.querySelector('ul');
console.log(ulEl);
var _loop = function _loop(i) {
  console.log("i>>", i);
  //li태그를 일 단 만들어 주는거
  var li = document.createElement('li');
  //만들어둥 li태그를 부모 안에 자식으로 넣어주는 거
  //li.textContent=i;

  //console.log(li);
  //만들어둥 li태그를 부모 안에 자식으로 넣어주는 거
  if (i % 2 === 0) {
    li.addEventListener('click', function () {
      console.log(li.textContent = i);
    });
  }
  ulEl.appendChild(li);
};
for (var i = 1; i < 6; i++) {
  _loop(i);
}

/*
변수 유효범위
*/
console.log("=====변수 유효범위======");
function scope() {
  if (true) {
    var v = 123; //var는 함수 전체가 유효범위가 되서 이게 나와버리냉 원래 지역변수라서 안나오는게 정상이잖어 if문 밖의 콘솔에
  }
  console.log(v);
}
scope();

//형변환
//false로 인식(거짓 같은 값) 아랴 값들
//false, '', null, undefined, 0, -0, 0.0, -0.0, NaN(계산하지 못했다라는 의미)    //디폴트 데이터 거짓된 데이터
var v1 = 1;
var v2 = '1';
console.log(v1 === v2);
if ('') {
  console.log(">>>true");
}

//문자를 숫자로 형변환
var v3 = "12";
console.log(_typeof(v3));
console.log(Number(v3));
console.log(_typeof(Number(v3)));
console.log(parseInt(v3));
console.log(_typeof(parseInt(v3)));

//실수로 데이터 형변환
console.log(parseFloat(v3));
console.log(_typeof(parseFloat(v3)));

//숫자로 변활할 데이터가 없으면 NaN출력
console.log(parseInt("Hello")); //NaN(계산을 못함)이 출력

console.log(_typeof(+v3)); //이렇게해도 숫자로 변환해준데

console.log(">>>", _typeof(+"1아")); //number로 나온데

// 숫자를 문자로 형변환
var v4 = 12;
console.log(v4.toString());

//함수

/*const sum=function (x,y){  //이러면 f2에만 담기고 다른 변수에 담을수 없어
    console.log(x+y);
    return x+y;
}
sum(10,7)*/
function sum(x, y) {
  //console.log(x+y);
  if (x < 2) {
    return;
  }
  return x + y;
}
var fl = sum(10, 5); //리턴값이 없는 함수는 변수에 저장x(undifined)
console.log(f1);

//
},{"./getType":"getType.js","./getRandom":"getRandom.js"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}
module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "57983" + '/');
  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);
    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);
          if (didAccept) {
            handled = true;
          }
        }
      });

      // Enable HMR for CSS by default.
      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });
      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }
    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }
    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }
    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}
function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}
function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}
function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }
  var parents = [];
  var k, d, dep;
  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }
  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }
  return parents;
}
function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}
function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }
  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }
  if (checkedAssets[id]) {
    return;
  }
  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }
  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}
function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }
  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }
  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map