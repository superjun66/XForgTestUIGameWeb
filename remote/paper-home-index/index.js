System.register("chunks:///_virtual/paper-home-index",["./PaperHomeIndex.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PaperHomeIndex.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./HomeController.ts","./app.ts"],(function(e){var o,n,t,r,i,a,l,p,c,s,u;return{setters:[function(e){o=e.inheritsLoose,n=e.applyDecoratedDescriptor,t=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,l=e.Node,p=e.Button},function(e){c=e.default},function(e){s=e.HomeController},function(e){u=e.app}],execute:function(){var f,h,m,d,g,v,y;i._RF.push({},"4ee6bS6gUZApKfGJMZHF4Hd","PaperHomeIndex",void 0);var H=a.ccclass,P=a.property;e("PaperHomeIndex",(f=H("PaperHomeIndex"),h=P(l),m=P(l),f((g=function(e){function n(){for(var o,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return o=e.call.apply(e,[this].concat(i))||this,t(o,"goto",v,r(o)),t(o,"pop",y,r(o)),o}o(n,e);var i=n.prototype;return i.onLoad=function(){var e=this;this.goto.on(p.EventType.CLICK,(function(){u.manager.ui.show({name:"PageGame"})})),this.pop.on(p.EventType.CLICK,(function(){u.manager.ui.show({name:"PopTip",data:e.viewName})}))},i.onShow=function(e){var o=this;this.scheduleOnce((function(){u.controller.home.refresh("PaperHomeIndex"),o.controller.emit(s.Event.Refresh2,"PaperHomeIndex"),o.controller.test=10}))},n}(c.BindController(s)),v=n(g.prototype,"goto",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=n(g.prototype,"pop",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=g))||d));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/paper-home-index', 'chunks:///_virtual/paper-home-index'); 
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