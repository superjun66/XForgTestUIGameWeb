System.register("chunks:///_virtual/page-room",["./PageRoom.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageRoom.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./UIManager.ts","./app.ts"],(function(e){var o,t,n,i,a,r,p,s,l,c,u;return{setters:[function(e){o=e.applyDecoratedDescriptor,t=e.inheritsLoose,n=e.initializerDefineProperty,i=e.assertThisInitialized},function(e){a=e.cclegacy,r=e._decorator,p=e.Sprite,s=e.SpriteFrame},function(e){l=e.default},function(e){c=e.default},function(e){u=e.app}],execute:function(){var g,m,f,d,h;a._RF.push({},"9a265zQUqtCa4HVK9G01jc/","PageRoom",void 0);var b=r.ccclass,y=r.property;e("PageRoom",(g=b("PageRoom"),m=y(p),g((h=o((d=function(e){function o(){for(var o,t=arguments.length,a=new Array(t),r=0;r<t;r++)a[r]=arguments[r];return(o=e.call.apply(e,[this].concat(a))||this).miniViews=[c.MiniViewName.PaperRoomRoom],n(o,"bg",h,i(o)),o}t(o,e);var a=o.prototype;return a.onLoad=function(){var e=this;u.Manager.Util.IsIphoneX()?u.manager.loader.load({bundle:"",path:"bj_liuhai/spriteFrame",type:s,onComplete:function(o){console.log("加载资源完成",o),e.bg.getComponent(p).spriteFrame=o}}):u.Manager.Util.IsIpad()&&u.manager.loader.load({bundle:"",path:"bj_pad/spriteFrame",type:s,onComplete:function(o){console.log("加载资源完成",o),e.bg.getComponent(p).spriteFrame=o}})},a.onShow=function(e){this.showMiniViews({views:this.miniViews})},a.onHide=function(e){return e},o}(l)).prototype,"bg",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=d))||f));a._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-room', 'chunks:///_virtual/page-room'); 
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