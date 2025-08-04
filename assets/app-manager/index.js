System.register("chunks:///_virtual/ApiManager.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseManager.ts"],(function(e){var n,r,t,o;return{setters:[function(e){n=e.inheritsLoose},function(e){r=e.cclegacy,t=e._decorator},function(e){o=e.default}],execute:function(){var a;r._RF.push({},"07311aMx3NBC4uwf4moIPuP","ApiManager",void 0);var u=t.ccclass;t.property,e("ApiManager",u("ApiManager")(a=function(e){function r(){return e.apply(this,arguments)||this}return n(r,e),r.prototype.login=function(){return new Promise((function(e,n){setTimeout((function(){e({errno:0,errmsg:"",data:{token:"<token>",username:"<username>"}})}),3e3)}))},r}(o))||a);r._RF.pop()}}}));

System.register("chunks:///_virtual/app-manager",["./ApiManager.ts"],(function(){return{setters:[null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-manager', 'chunks:///_virtual/app-manager'); 
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