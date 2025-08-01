System.register("chunks:///_virtual/page-main",["./PageMain.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageMain.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(e){var n,i,t,a,o,r,l,s,p,c;return{setters:[function(e){n=e.applyDecoratedDescriptor,i=e.inheritsLoose,t=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e.cclegacy,r=e._decorator,l=e.Sprite,s=e.SpriteFrame},function(e){p=e.default},function(e){c=e.app}],execute:function(){var u,g,h,m,f;o._RF.push({},"bd877ACAyhI05J8QFUTEWQb","PageMain",void 0);var d=r.ccclass,b=r.property;e("PageMain",(u=d("PageMain"),g=b(l),u((f=n((m=function(e){function n(){for(var n,i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return(n=e.call.apply(e,[this].concat(o))||this).miniViews=[],t(n,"bg",f,a(n)),n}i(n,e);var o=n.prototype;return o.onLoad=function(){c.Manager.Util.InitLayout();var e=this;c.Manager.Util.IsIphoneX()?c.manager.loader.load({bundle:"",path:"bj_liuhai/spriteFrame",type:s,onComplete:function(n){console.log("加载资源完成",n),e.bg.getComponent(l).spriteFrame=n}}):c.Manager.Util.IsIpad()&&c.manager.loader.load({bundle:"",path:"home/bj_pad/spriteFrame",type:s,onComplete:function(n){console.log("加载资源完成",n),e.bg.getComponent(l).spriteFrame=n}})},o.onShow=function(e){this.showMiniViews({views:this.miniViews})},o.onHide=function(e){return e},o.onClickBegin=function(){c.manager.ui.show({name:"PageHome"})},n}(p)).prototype,"bg",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=m))||h));o._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-main', 'chunks:///_virtual/page-main'); 
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