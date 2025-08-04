System.register("chunks:///_virtual/page-home",["./PageHome.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageHome.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./UIManager.ts","./HomeController.ts"],(function(e){var n,o,t,r,i,s;return{setters:[function(e){n=e.inheritsLoose},function(e){o=e.cclegacy,t=e._decorator},function(e){r=e.default},function(e){i=e.default},function(e){s=e.HomeController}],execute:function(){var a;o._RF.push({},"ae0789px3JBA54gP+KHCsvj","PageHome",void 0);var c=t.ccclass;t.property,e("PageHome",c("PageHome")(a=function(e){function o(){for(var n,o=arguments.length,t=new Array(o),r=0;r<o;r++)t[r]=arguments[r];return(n=e.call.apply(e,[this].concat(t))||this).miniViews=[i.MiniViewName.PaperHomeIndex],n}n(o,e);var t=o.prototype;return t.beforeShow=function(e,n){this.showMiniViews({views:[i.MiniViewName.PaperHomeIndex],onFinish:e})},t.onShow=function(){var e=this;this.controller.on(s.Event.Refresh1,(function(n){e.warn("[Refresh1] 收到"+n+"调用的刷新事件")}),this),this.controller.on(s.Event.Refresh2,(function(n){e.warn("[Refresh2] 收到"+n+"调用的刷新事件")}),this)},t.onHide=function(){this.controller.targetOff(this)},o}(r.BindController(s)))||a);o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-home', 'chunks:///_virtual/page-home'); 
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