System.register("chunks:///_virtual/paper-game-index",["./PaperGameIndex.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PaperGameIndex.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(e){var t,n,a,o,r,i,p,c,u,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,a=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,i=e._decorator,p=e.Node,c=e.Button},function(e){u=e.default},function(e){l=e.app}],execute:function(){var s,f,d,m,g,h,y;r._RF.push({},"ac672FFtqNM8arFsIDm9ViR","PaperGameIndex",void 0);var v=i.ccclass,I=i.property;e("PaperGameIndex",(s=v("PaperGameIndex"),f=I(p),d=I(p),s((h=t((g=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return t=e.call.apply(e,[this].concat(r))||this,a(t,"goto",h,o(t)),a(t,"pop",y,o(t)),t}return n(t,e),t.prototype.onLoad=function(){var e=this;this.goto.on(c.EventType.CLICK,(function(){l.manager.ui.show({name:"PageOver"})})),this.pop.on(c.EventType.CLICK,(function(){l.manager.ui.show({name:"PopTip",data:e.viewName})}))},t}(u)).prototype,"goto",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=t(g.prototype,"pop",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=g))||m));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/paper-game-index', 'chunks:///_virtual/paper-game-index'); 
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