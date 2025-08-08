System.register("chunks:///_virtual/app-admin",["./executor.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/executor.ts",["cc","./app.ts","./config.const.ts","./store.user.ts","./HomeController.ts","./RoomController.ts"],(function(){var o,t,e,n,c,r,s,i;return{setters:[function(n){o=n.cclegacy,t=n.director,e=n.Director},function(o){n=o.app},function(o){c=o.default},function(o){r=o.default},function(o){s=o.HomeController},function(o){i=o.RoomController}],execute:function(){function u(){Object.assign(n.config,{const:new c}),Object.assign(n.data,{}),Object.assign(n.store,{user:new r}),Object.assign(n.Controller,{Home:s,Room:i}),Object.assign(n.controller,{home:new s,room:new i})}o._RF.push({},"f187bY5C+FCHKyW84kaJgMh","executor",void 0),t.on(e.EVENT_RESET,u),u(),o._RF.pop()}}}));

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
//# sourceMappingURL=index.js.map