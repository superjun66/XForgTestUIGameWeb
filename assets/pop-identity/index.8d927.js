System.register("chunks:///_virtual/pop-identity",["./PopIdentity.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PopIdentity.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./app.ts"],(function(t){var n,e,i,o,r,u,a,l,c,s,p,h,b,f,g;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t.cclegacy,u=t._decorator,a=t.Label,l=t.Node,c=t.Button,s=t.find,p=t.UITransform,h=t.SpriteFrame,b=t.Sprite},function(t){f=t.default},function(t){g=t.app}],execute:function(){var d,m,y,C,w,x,S,z,v,D,I,B,P,U,_,A,F,M,N;r._RF.push({},"d1083VwdmJKy5obicDt2Ph2","PopIdentity",void 0);var T=u.ccclass,L=u.property;t("PopIdentity",(d=T("PopIdentity"),m=L(a),y=L(l),C=L(a),w=L(l),x=L(l),S=L(c),z=L(c),v=L(l),d((B=n((I=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),u=0;u<e;u++)r[u]=arguments[u];return n=t.call.apply(t,[this].concat(r))||this,i(n,"txt",B,o(n)),i(n,"icon",P,o(n)),i(n,"num",U,o(n)),i(n,"txtBg",_,o(n)),i(n,"layout",A,o(n)),i(n,"btnUp",F,o(n)),i(n,"btnDown",M,o(n)),i(n,"btnSure",N,o(n)),n.count=0,n.oldCount=0,n.maxCount=0,n.type=0,n.CONST_MAX=30,n}e(n,t);var r=n.prototype;return r.onLoad=function(){},r.onShow=function(t){g.Manager.Util.IsIpad()&&s("effectNode",this.node).setScale(.7,.7,.7),this.type=t.type,this.oldCount=t.count,this.maxCount=t.maxCount,this.count=t.count||1,this.log("this.count=",this.count);var n=g.config.const.AllotIdentityCfg[this.type];n.name,this.txt.string=n.des,this.num.string=this.count+"",this.txt.updateRenderData(!0),this.txt.node.getComponent(p).contentSize.height<180?this.txtBg.getComponent(p).height=220:(this.txtBg.getComponent(p).height=this.txt.node.getComponent(p).contentSize.height+40,this.btnSure.setPosition(0,-this.txtBg.getComponent(p).height/2-155));var e=this;g.manager.loader.load({bundle:"identity",path:n.icon+"_p/spriteFrame",type:h,onComplete:function(t){console.log("加载资源完成",t),e.icon.getComponent(b).spriteFrame=t}}),this.btnUp.interactable=this.count-this.oldCount<this.CONST_MAX-this.maxCount,this.btnDown.interactable=this.count>0},r.onHide=function(t){return t},r.onClickUpDown=function(t,n){this.log("target=",n),"up"==n?this.count++:this.count--,this.num.string=this.count+"",this.btnUp.interactable=this.count-this.oldCount<this.CONST_MAX-this.maxCount,this.btnDown.interactable=this.count>0},r.onClickSure=function(){var t={type:this.type,count:this.count,cutCount:this.count-this.oldCount};g.controller.home.identityCountUpdate(t),this.hide()},n}(f)).prototype,"txt",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=n(I.prototype,"icon",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=n(I.prototype,"num",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),_=n(I.prototype,"txtBg",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),A=n(I.prototype,"layout",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),F=n(I.prototype,"btnUp",[S],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),M=n(I.prototype,"btnDown",[z],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),N=n(I.prototype,"btnSure",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),D=I))||D));r._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/pop-identity', 'chunks:///_virtual/pop-identity'); 
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