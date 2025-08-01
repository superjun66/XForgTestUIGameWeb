System.register("chunks:///_virtual/pop-commondialog",["./PopCommondialog.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopCommondialog.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(e){var t,n,i,o,r,l,a,u,c,s,p;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,i=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,a=e.Label,u=e.Node,c=e.find},function(e){s=e.default},function(e){p=e.app}],execute:function(){var b,f,d,C,g,h,m,y,k,v,_,w,N,x,z,S,P,D,O;r._RF.push({},"8c302q7ErhCMJJWuo/A00kS","PopCommondialog",void 0);var L=l.ccclass,T=l.property;e("PopCommondialog",(b=L("PopCommondialog"),f=T(a),d=T(a),C=T(a),g=T(a),h=T(a),m=T(u),y=T(u),k=T(u),b((w=t((_=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,i(t,"okContent",w,o(t)),i(t,"exitContent",N,o(t)),i(t,"title",x,o(t)),i(t,"dialogContent",z,o(t)),i(t,"centerSureContent",S,o(t)),i(t,"sureNode",P,o(t)),i(t,"exitNode",D,o(t)),i(t,"centerOkNode",O,o(t)),t._okCb=void 0,t._cancelCb=void 0,t}n(t,e);var r=t.prototype;return r.onLoad=function(){},r.onShow=function(e){var t=e.message,n=e.title,i=e.okCb,o=e.okText,r=e.cancelCb,l=e.cancelText,a=e.dialogType||1;this._okCb=i,this._cancelCb=r,this.dialogContent.string=t,this.title.string=n,1==a?(this.okContent.string=o,this.exitContent.string=l):2==a&&(this.centerSureContent.string=o,this.centerOkNode.active=!0,this.sureNode.active=!1,this.exitNode.active=!1),p.Manager.Util.IsIpad()&&c("effectNode",this.node).setScale(.7,.7)},r.onHide=function(e){return e},r.OnClickSure=function(){var e=this._okCb;e&&e(),this.hide()},r.OnClickExit=function(){var e=this._cancelCb;e&&e(),this.cleanCommonDialog(),this.hide()},r.cleanCommonDialog=function(){this._okCb=null,this._cancelCb=null},t}(s)).prototype,"okContent",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=t(_.prototype,"exitContent",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),x=t(_.prototype,"title",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),z=t(_.prototype,"dialogContent",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),S=t(_.prototype,"centerSureContent",[h],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=t(_.prototype,"sureNode",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=t(_.prototype,"exitNode",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),O=t(_.prototype,"centerOkNode",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),v=_))||v));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-commondialog', 'chunks:///_virtual/pop-commondialog'); 
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