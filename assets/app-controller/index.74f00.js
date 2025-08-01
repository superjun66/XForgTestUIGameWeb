System.register("chunks:///_virtual/app-controller",["./HomeController.ts","./RoomController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

System.register("chunks:///_virtual/HomeController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseController.ts"],(function(t){var e,n,o;return{setters:[function(t){e=t.inheritsLoose},function(t){n=t.cclegacy},function(t){o=t.default}],execute:function(){n._RF.push({},"edfcdX7QLpPXa+knveHjYAG","HomeController",void 0);t("HomeController",function(t){function n(){for(var e,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))||this).test=0,e}e(n,t);var o=n.prototype;return o.refresh=function(t){this.test=1,this.emit(n.Event.Refresh1,t)},o.identityCountUpdate=function(t){this.emit(n.Event.IDENTITY_COUNT_UPDATE,t)},n}(o()));n._RF.pop()}}}));

System.register("chunks:///_virtual/RoomController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseController.ts"],(function(t){var o,e,n;return{setters:[function(t){o=t.inheritsLoose},function(t){e=t.cclegacy},function(t){n=t.default}],execute:function(){e._RF.push({},"63270SF4t9O8JZy3qJ5jIza","RoomController",void 0);t("RoomController",function(t){function e(){return t.apply(this,arguments)||this}return o(e,t),e.prototype.updateGameIdentity=function(t){this.emit(e.Event.UPDATE_GAME_IDENTITY,t)},e}(n()));e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-controller', 'chunks:///_virtual/app-controller'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});
//# sourceMappingURL=index.js.map