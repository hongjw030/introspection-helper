/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./scripts/fetchers/getUserNickname.js":
/*!*********************************************!*\
  !*** ./scripts/fetchers/getUserNickname.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getUserNickname: () => (/* binding */ getUserNickname)
/* harmony export */ });
/*
 * 유저 닉네임 리턴 함수
 * 
 * desc: token 값을 가지고 현재 로그인한 유저의 깃허브 닉네임을 알아와 nickname 에 저장하는 함수.
 * params: 문자열 token
 * returns: 
 * test: 
 */
function getUserNickname(token) {
  fetch('https://api.github.com/user', {
    headers: {
      Authorization: "token ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  }).then(function (userData) {
    var nickname = userData.login;
    chrome.storage.local.set({
      nickname: nickname
    }, function () {});
  });
}

/***/ }),

/***/ "./scripts/utils/getDate.js":
/*!**********************************!*\
  !*** ./scripts/utils/getDate.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDateInformation: () => (/* binding */ getDateInformation),
/* harmony export */   getInitialFileName: () => (/* binding */ getInitialFileName)
/* harmony export */ });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
/*
 * 현재 날짜 리턴 함수
 * 
 * desc: 오늘의 날짜를 [year, month, day] 배열에 담아 리턴하는 함수.
 * params: 
 * returns: [year: string, month: string, day: string]
 * test: 
 */
function getDateInformation() {
  var today = new Date();
  var year = today.getFullYear().toString();
  var month = (today.getMonth() + 1).toString().padStart(2, '0'); // 월은 0부터 시작하므로 +1 필요
  var day = today.getDate().toString().padStart(2, '0');
  return [year, month, day];
}

/*
 * 파일 이름 리턴 함수
 * 
 * desc: introspection.md 파일의 이름을 오늘 날짜에 맞춰 생성하는 함수
 * params: 
 * returns: `{year}{month}{day}`
 * test: 
 */
function getInitialFileName() {
  var _getDateInformation = getDateInformation(),
    _getDateInformation2 = _slicedToArray(_getDateInformation, 3),
    year = _getDateInformation2[0],
    month = _getDateInformation2[1],
    day = _getDateInformation2[2];
  return "".concat(year).concat(month).concat(day);
}

/***/ }),

/***/ "./scripts/utils/setTextEncode.js":
/*!****************************************!*\
  !*** ./scripts/utils/setTextEncode.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   decodeBase64: () => (/* binding */ decodeBase64),
/* harmony export */   encodeBase64: () => (/* binding */ encodeBase64)
/* harmony export */ });
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
/*
 * input -> base64 텍스트 변환 함수
 * 
 * desc: 한글, 이모지 등 특정 문자는 base64로 인식되지 않는 문제로 encode, decode 함수를 새로 정의함.
 * params: string형 문자열
 * returns: base64로 인코딩된 문자열
 * test: 
 */
function encodeBase64(input) {
  var utf8Bytes = new TextEncoder().encode(input);
  return btoa(String.fromCharCode.apply(String, _toConsumableArray(utf8Bytes)));
}

/*
 * base64 텍스트 -> utf8텍스트 변환 함수
 * 
 * desc: 한글, 이모지 등 특정 문자는 base64로 인식되지 않는 문제로 encode, decode 함수를 새로 정의함.
 * params: base64로 인코딩된 문자열
 * returns: 일반 text로 decode한 문자열
 * test: 
 */
function decodeBase64(base64) {
  var binaryString = atob(base64);
  var bytes = new Uint8Array(binaryString.length);
  for (var i = 0; i < binaryString.length; i++) {
    bytes[i] = binaryString.charCodeAt(i);
  }
  return new TextDecoder().decode(bytes);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************!*\
  !*** ./scripts/popup.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetchers_getUserNickname__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchers/getUserNickname */ "./scripts/fetchers/getUserNickname.js");
/* harmony import */ var _utils_getDate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/getDate */ "./scripts/utils/getDate.js");
/* harmony import */ var _utils_setTextEncode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/setTextEncode */ "./scripts/utils/setTextEncode.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



document.addEventListener('DOMContentLoaded', function () {
  chrome.storage.local.get(['githubToken', 'selectedRepo', 'nickname', 'savedText'], function (result) {
    if (result.githubToken) {
      document.getElementById('extension-login-button').style.display = 'none';
      document.getElementById('extension-logout-button').style.display = 'block';
      document.getElementById('extension-user-section').style.display = 'flex';
      if (result.nickname) {
        showOwnerName(result.nickname);
        document.getElementById('extension-user-nickname-p').style.display = 'flex';
        if (result.selectedRepo) {
          showSelectedRepo(result.selectedRepo, result.nickname);
          document.getElementById('extension-post-section').style.display = 'flex';
          document.getElementById('extension-user-selectedRepo-p').style.display = 'flex';
          if (result.savedText) {
            var textarea = document.getElementById('extension-post-textarea');
            textarea.value = result.savedText;
          }
        } else {
          fetchRepos(result.githubToken);
        }
      } else {
        fetchRepos(result.githubToken);
      }
    } else {
      document.getElementById('extension-login-button').style.display = 'block';
      document.getElementById('extension-logout-button').style.display = 'none';
    }
  });
  document.getElementById('extension-login-button').addEventListener('click', function () {
    var redirectUri = chrome.identity.getRedirectURL();
    var authUrl = "https://github.com/login/oauth/authorize?client_id=Ov23liS8uJ1LJSioNTPc&redirect_uri=".concat(encodeURIComponent(redirectUri), "&scope=repo");
    chrome.identity.launchWebAuthFlow({
      url: authUrl,
      interactive: true
    }, function (redirectUrl) {
      if (chrome.runtime.lastError) {
        console.error(chrome.runtime.lastError.message);
        return;
      }
      var params = new URLSearchParams(new URL(redirectUrl).search);
      var code = params.get('code');
      fetch('https://github.com/login/oauth/access_token', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          client_id: 'Ov23liS8uJ1LJSioNTPc',
          client_secret: '904fcc78be315af16780349f2f74d701aeb3fd34',
          code: code,
          redirect_uri: redirectUri
        })
      }).then(function (response) {
        return response.json();
      }).then(function (data) {
        var token = data.access_token;
        chrome.storage.local.set({
          githubToken: token
        }, function () {
          document.getElementById('extension-login-button').style.display = 'none';
          document.getElementById('extension-logout-button').style.display = 'block';
          fetchRepos(token);
        });
        (0,_fetchers_getUserNickname__WEBPACK_IMPORTED_MODULE_0__.getUserNickname)(token);
      });
    });
  });
  document.getElementById('extension-logout-button').addEventListener('click', function () {
    chrome.storage.local.remove(['githubToken', 'selectedRepo', 'nickname', 'savedText'], function () {
      document.getElementById('extension-login-button').style.display = 'block';
      document.getElementById('extension-logout-button').style.display = 'none';
      document.getElementById('extension-user-section').style.display = 'none';
      document.getElementById('extension-repoList-section').style.display = 'none';
      document.getElementById('extension-post-section').style.display = 'none';
    });
    var token = chrome.storage.local.get('githubToken');
    console.log(token);
  });
  document.getElementById('extension-save-button').addEventListener('click', function () {
    var textarea = document.getElementById('extension-post-textarea');
    chrome.storage.local.set({
      savedText: textarea.value
    });
    alert("임시 저장되었습니다! submit 버튼으로 제출하면 자동으로 저장된 내용은 사라집니다.");
  });
  document.getElementById('extension-submit-button').addEventListener('click', function () {
    chrome.storage.local.get('githubToken', function (result) {
      var token = result.githubToken;
      if (!token) {
        console.error('GitHub token not found');
        return;
      }
      chrome.storage.local.get('selectedRepo', function (repoResult) {
        var repoName = repoResult.selectedRepo;
        if (!repoName) {
          console.error('Selected repository not found');
          return;
        }
        var content = document.getElementById('extension-post-textarea').value;
        var fileName = "".concat((0,_utils_getDate__WEBPACK_IMPORTED_MODULE_1__.getInitialFileName)(), ".md");
        chrome.storage.local.get('nickname', function (ownerResult) {
          var nickname = ownerResult.nickname;
          if (!nickname) {
            console.error('No owner name found');
            return;
          }
          createFileAndCommit(token, repoName, fileName, content, nickname);
        });
      });
    });
    chrome.storage.local.remove(['savedText'], function () {});
  });
});
function fetchRepos(token) {
  fetch('https://api.github.com/user/repos', {
    headers: {
      Authorization: "token ".concat(token)
    }
  }).then(function (response) {
    return response.json();
  }).then(function (repos) {
    var repoList = document.getElementById('extension-repoList-ul');
    var nickname = '';
    chrome.storage.local.get(['nickname'], function (result) {
      if (result.nickname) nickname = result.nickname;
    });
    console.log(nickname);
    repoList.innerHTML = '';
    if (repos.length > 0) {
      repos.forEach(function (repo) {
        var li = document.createElement('li');
        li.setAttribute('class', "extension-li");
        li.textContent = repo.name;
        li.addEventListener('click', function () {
          chrome.storage.local.set({
            selectedRepo: repo.name
          }, function () {
            showSelectedRepo(repo.name, nickname);
            document.getElementById('extension-post-section').style.display = 'flex';
          });
        });
        repoList.appendChild(li);
      });
    } else {
      repoList.innerHTML = "Your repository not exist!! Please make your own.";
    }
    document.getElementById('extension-repoList-section').style.display = 'flex';
  });
}
function showSelectedRepo(repoName, nickname) {
  document.getElementById('extension-repoList-section').style.display = 'none';
  document.getElementById('extension-user-section').style.display = 'flex';
  var selectedRepoSpan = document.getElementById('extension-user-selectedRepo-span');
  selectedRepoSpan.innerHTML = "<a href=\"https://www.github.com/".concat(nickname, "/").concat(repoName, "\" target=\"_blank\" class=\"highlighted\">").concat(repoName, "</a>");
}
function showOwnerName(nickname) {
  var nicknameSpan = document.getElementById('extension-user-nickname-span');
  console.log(nickname);
  nicknameSpan.innerHTML = "<a href=\"https://www.github.com/".concat(nickname, "\" target=\"_blank\" class=\"highlighted\">").concat(nickname, "</a>");
}
function createFileAndCommit(token, repoName, fileName, content, nickname) {
  var latestCommitSha; // latestCommitSha 변수를 함수 내에서 선언

  function createFileInFolder(token, repoName, fileName, content, nickname, folderPath) {
    fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/contents/").concat(folderPath), {
      method: 'GET',
      headers: {
        Authorization: "token ".concat(token)
      }
    }).then(function (response) {
      if (response.status === 404) {
        // 폴더가 없으므로 생성
        return createFolderAndFile(token, repoName, fileName, content, nickname, folderPath);
      } else {
        // 폴더가 이미 존재하므로 파일 생성
        return createNewFile(token, repoName, fileName, content, nickname, folderPath);
      }
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  }
  function createFolderAndFile(token, repoName, fileName, content, nickname, folderPath) {
    var folderName = folderPath.split('/').pop();
    var parentFolder = folderPath.split('/').slice(0, -1).join('/');
    var folderData = {
      path: folderPath,
      message: 'Create new folder',
      content: (0,_utils_setTextEncode__WEBPACK_IMPORTED_MODULE_2__.encodeBase64)(''),
      // 빈 내용으로 폴더 생성
      branch: 'main' // 변경 필요 시 수정
    };
    fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/contents/").concat(parentFolder), {
      method: 'GET',
      headers: {
        Authorization: "token ".concat(token)
      }
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var baseTreeSha = data.sha;
      return fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/git/trees"), {
        method: 'POST',
        headers: {
          Authorization: "token ".concat(token),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          base_tree: baseTreeSha,
          tree: [{
            path: folderName,
            mode: '040000',
            // 디렉터리 모드
            type: 'tree',
            content: '' // 빈 내용
          }]
        })
      });
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var newTreeSha = data.sha;
      return fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/git/commits"), {
        method: 'POST',
        headers: {
          Authorization: "token ".concat(token),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: 'Create new folder',
          tree: newTreeSha,
          parents: []
        })
      });
    }).then(function (response) {
      return response.json();
    }).then(function (data) {
      var newCommitSha = data.sha;
      return fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/git/refs/heads/main"), {
        method: 'PATCH',
        headers: {
          Authorization: "token ".concat(token),
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          sha: newCommitSha
        })
      });
    }).then(function () {
      // 폴더 생성 후 파일 생성
      return createNewFile(token, repoName, fileName, content, nickname, folderPath);
    })["catch"](function (error) {
      console.error('Error:', error);
    });
  }
  function createNewFile(token, repoName, fileName, content, nickname, folderPath) {
    fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/contents/").concat(folderPath, "/").concat(fileName), {
      method: 'GET',
      headers: {
        Authorization: "token ".concat(token)
      }
    }).then(function (response) {
      if (response.status === 404) {
        // 파일이 존재하지 않으므로 생성
        return fetch("https://api.github.com/repos/".concat(nickname, "/").concat(repoName, "/contents/").concat(folderPath, "/").concat(fileName), {
          method: 'PUT',
          headers: {
            Authorization: "token ".concat(token),
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            message: 'Create new Markdown file',
            content: (0,_utils_setTextEncode__WEBPACK_IMPORTED_MODULE_2__.encodeBase64)(content) // encode content to base64
          })
        });
      } else {
        // 파일이 이미 존재하므로 새 파일 이름을 입력받음
        var newFileName = prompt("\uD30C\uC77C \uC774\uB984 '".concat(fileName, "'\uC774 \uC774\uBBF8 \uC874\uC7AC\uD569\uB2C8\uB2E4. \uC0C8 \uD30C\uC77C \uC774\uB984\uC744 \uC785\uB825\uD558\uC138\uC694."));
        if (newFileName) {
          // 사용자가 새 파일 이름을 입력한 경우 파일 생성 함수 재귀 호출
          var myFileName = newFileName + ".md";
          return createNewFile(token, repoName, myFileName, content, nickname, folderPath);
        } else {
          // 사용자가 입력을 취소한 경우
          throw new Error('파일 이름 입력이 취소되었습니다.');
        }
      }
    }).then(function (response) {
      if (response.status === 201) {
        alert("\uD30C\uC77C ".concat(fileName, "\uC774(\uAC00) \uC0DD\uC131\uB418\uC5C8\uC2B5\uB2C8\uB2E4."));
        document.getElementById('extension-post-textarea').value = '';
      } else {
        throw new Error('Failed to create file');
      }
    })["catch"](function (error) {
      if (error.message === 'Failed to create file') {
        alert("Error: 커밋에 실패했습니다.");
      }
      console.error('Error:', error);
    });
  }
  var _getDateInformation = (0,_utils_getDate__WEBPACK_IMPORTED_MODULE_1__.getDateInformation)(),
    _getDateInformation2 = _slicedToArray(_getDateInformation, 3),
    year = _getDateInformation2[0],
    month = _getDateInformation2[1],
    day = _getDateInformation2[2];
  var folderPath = "".concat(year, "/").concat(month);
  createFileInFolder(token, repoName, fileName, content, nickname, folderPath);
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map