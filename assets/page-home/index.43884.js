System.register("chunks:///_virtual/page-home",["./PageHome.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageHome.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./UIManager.ts","./HomeController.ts","./app.ts"],(function(e){var n,o,t,r,i,a,s,l,c,p,u,f;return{setters:[function(e){n=e.inheritsLoose,o=e.applyDecoratedDescriptor,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,s=e.Sprite,l=e.SpriteFrame},function(e){c=e.default},function(e){p=e.default},function(e){u=e.HomeController},function(e){f=e.app}],execute:function(){var g,h,m,d,b;i._RF.push({},"ae0789px3JBA54gP+KHCsvj","PageHome",void 0);var v=a.ccclass,w=a.property;e("PageHome",(g=v("PageHome"),h=w(s),g((d=function(e){function o(){for(var n,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return(n=e.call.apply(e,[this].concat(i))||this).miniViews=[p.MiniViewName.PaperHomeIndex],t(n,"bg",b,r(n)),n}n(o,e);var i=o.prototype;return i.beforeShow=function(e,n){this.showMiniViews({views:[p.MiniViewName.PaperHomeIndex],onFinish:e})},i.onShow=function(){var e=this;this.controller.on(u.Event.Refresh1,(function(n){e.warn("[Refresh1] 收到"+n+"调用的刷新事件")}),this),this.controller.on(u.Event.Refresh2,(function(n){e.warn("[Refresh2] 收到"+n+"调用的刷新事件")}),this)},i.onHide=function(){this.controller.targetOff(this)},i.onLoad=function(){var e=this;f.Manager.Util.IsIphoneX()?f.manager.loader.load({bundle:"page-home-res",path:"bg_configure_X/spriteFrame",type:l,onComplete:function(n){console.log("加载资源完成111",n),e.bg.getComponent(s).spriteFrame=n}}):f.Manager.Util.IsIpad()&&f.manager.loader.load({bundle:"page-home-res",path:"bg_configure_iPad/spriteFrame",type:l,onComplete:function(n){console.log("加载资源完成222",n),e.bg.getComponent(s).spriteFrame=n}})},o}(c.BindController(u)),b=o(d.prototype,"bg",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=d))||m));i._RF.pop()}}}));

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
//# sourceMappingURL=index.js.map