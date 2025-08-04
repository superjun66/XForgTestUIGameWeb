System.register("chunks:///_virtual/app-admin",["./executor.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/executor.ts",["cc","./app.ts","./store.user.ts","./HomeController.ts"],(function(){var e,t,n,o,c,r;return{setters:[function(o){e=o.cclegacy,t=o.director,n=o.Director},function(e){o=e.app},function(e){c=e.default},function(e){r=e.HomeController}],execute:function(){function s(){Object.assign(o.config,{}),Object.assign(o.data,{}),Object.assign(o.store,{user:new c}),Object.assign(o.Controller,{Home:r}),Object.assign(o.controller,{home:new r})}e._RF.push({},"f187bY5C+FCHKyW84kaJgMh","executor",void 0),t.on(n.EVENT_RESET,s),s(),e._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-admin', 'chunks:///_virtual/app-admin'); 
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