System.register("chunks:///_virtual/pop-tip",["./PopTip.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopTip.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts"],(function(e){var t,i,n,o,r,l,c,a,p,s;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,c=e.Label,a=e.Node,p=e.Button},function(e){s=e.default}],execute:function(){var u,f,h,d,y,b,v;r._RF.push({},"7bf5345pKVKG4c+F4P2dcfe","PopTip",void 0);var g=l.ccclass,P=l.property;e("PopTip",(u=g("PopTip"),f=P(c),h=P(a),u((b=t((y=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"title",b,o(t)),n(t,"close",v,o(t)),t}i(t,e);var r=t.prototype;return r.onLoad=function(){this.close.on(p.EventType.CLICK,this.hide,this)},r.onShow=function(e){this.title.string="被\n"+e+"\n打开"},r.onHide=function(e){return e},t}(s)).prototype,"title",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),v=t(y.prototype,"close",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),d=y))||d));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-tip', 'chunks:///_virtual/pop-tip'); 
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