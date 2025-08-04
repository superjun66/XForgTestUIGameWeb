System.register("chunks:///_virtual/app-model",["./store.user.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/store.user.ts",["./rollupPluginModLoBabelHelpers.js","cc","./app.ts"],(function(e){var t,n,r,a;return{setters:[function(e){t=e.asyncToGenerator,n=e.regeneratorRuntime},function(e){r=e.cclegacy},function(e){a=e.app}],execute:function(){r._RF.push({},"8f45e5mJlhLiY6W41arYraT","store.user",void 0);e("default",function(){function e(){this.token="",this.username=""}return e.prototype.login=function(){var e=t(n().mark((function e(){var t;return n().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.manager.api.login();case 2:t=e.sent,this.token=t.data.token,this.username=t.data.username;case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}(),e}());r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-model', 'chunks:///_virtual/app-model'); 
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