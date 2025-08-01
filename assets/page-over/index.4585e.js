System.register("chunks:///_virtual/page-over",["./PageOver.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageOver.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(e){var t,n,o,r,i,a,c,s,u;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,o=e.initializerDefineProperty,r=e.assertThisInitialized},function(e){i=e.cclegacy,a=e._decorator,c=e.Button},function(e){s=e.default},function(e){u=e.app}],execute:function(){var p,l,f,g,v;i._RF.push({},"89152+rFGtBG7Xs40J5KGyd","PageOver",void 0);var y=a.ccclass,h=a.property;e("PageOver",(p=y("PageOver"),l=h(c),p((v=t((g=function(e){function t(){for(var t,n=arguments.length,i=new Array(n),a=0;a<n;a++)i[a]=arguments[a];return t=e.call.apply(e,[this].concat(i))||this,o(t,"goto",v,r(t)),t.miniViews=[],t}n(t,e);var i=t.prototype;return i.onShow=function(){this.goto.node.on(c.EventType.CLICK,(function(){u.manager.ui.show({name:"PageHome"})}))},i.onHide=function(){this.goto.node.off(c.EventType.CLICK)},t}(s)).prototype,"goto",[l],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=g))||f));i._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-over', 'chunks:///_virtual/page-over'); 
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