System.register("chunks:///_virtual/paper-home-index",["./PaperHomeIndex.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PaperHomeIndex.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts","./HomeController.ts","./app.ts","./JmRoomDataMgr.ts"],(function(t){var e,n,o,i,a,r,l,u,c,s,m,p,g,f,d,h,y;return{setters:[function(t){e=t.inheritsLoose,n=t.applyDecoratedDescriptor,o=t.initializerDefineProperty,i=t.assertThisInitialized},function(t){a=t.cclegacy,r=t._decorator,l=t.Node,u=t.Label,c=t.Button,s=t.find,m=t.instantiate,p=t.SpriteFrame,g=t.Sprite},function(t){f=t.default},function(t){d=t.HomeController},function(t){h=t.app},function(t){y=t.default}],execute:function(){var C,v,b,w,x,I,P,R,H,E,T,k,D;a._RF.push({},"4ee6bS6gUZApKfGJMZHF4Hd","PaperHomeIndex",void 0);var z=r.ccclass,B=r.property;t("PaperHomeIndex",(C=z("PaperHomeIndex"),v=B(l),b=B(l),w=B(l),x=B(l),I=B(u),C((R=function(t){function n(){for(var e,n=arguments.length,a=new Array(n),r=0;r<n;r++)a[r]=arguments[r];return e=t.call.apply(t,[this].concat(a))||this,o(e,"goto",H,i(e)),o(e,"pop",E,i(e)),o(e,"layout",T,i(e)),o(e,"identity",k,i(e)),o(e,"num",D,i(e)),e.maxCount=0,e}e(n,t);var a=n.prototype;return a.onLoad=function(){var t=this;this.pop.on(c.EventType.CLICK,(function(){h.manager.ui.show({name:"PopTip",data:t.viewName})}));for(var e=function(){var e=m(t.identity);e.name="identity"+n,e.active=!0;var o=e.getComponent(c);o&&o.clickEvents&&o.clickEvents.length>0&&(o.clickEvents[0].customEventData=n.toString()),t.log("app.config.const.AllotIdentityCfg[i].icon=",h.config.const.AllotIdentityCfg[n].icon),h.manager.loader.load({bundle:"identity",path:h.config.const.AllotIdentityCfg[n].icon+"_n/spriteFrame",type:p,onComplete:function(t){console.log("加载资源完成",t),e.getComponent(g).spriteFrame=t}}),t.layout.addChild(e)},n=1;n<17;n++)e();this.controller.on(d.Event.IDENTITY_COUNT_UPDATE,this.updateCount,this)},a.onShow=function(t){var e=this;this.scheduleOnce((function(){h.controller.home.refresh("PaperHomeIndex"),e.controller.emit(d.Event.Refresh2,"PaperHomeIndex"),e.controller.test=10}))},a.onHide=function(t){this.controller.targetOff(this)},a.onClickIdentity=function(t,e){this.log("event=",t),this.log("target=",e);var n={type:e,count:s("identity"+e+"/numBg/num",this.layout).getComponent(u).string,maxCount:this.maxCount};h.manager.ui.show({data:n,name:"PopIdentity"})},a.updateCount=function(t){this.maxCount+=t.cutCount,this.num.string="总人数："+this.maxCount+"人",t.count<=0?y.delRoomCfg(Number(t.type)):y.setRoomCfg(Number(t.type),t.count),this.log("JmRoomDataMgr.getRoomCfg()=",y.getRoomCfg()),s("identity"+t.type+"/numBg",this.layout).active=t.count>0,s("identity"+t.type+"/numBg/num",this.layout).getComponent(u).string=t.count},a.onClickClose=function(){h.manager.ui.show({name:"PageMain"})},a.onCreateRoom=function(){if(this.maxCount<6)h.manager.ui.show({data:{title:"提示",message:"开局人数最少为6人哦~",okCb:function(){},okText:"知道了",dialogType:2},name:"PopCommondialog"});else{for(var t=y.getRoomCfg(),e=[],n=1;n<17;n++)t.get(n)?e.push(t.get(n)):e.push(0);y.setRoomCount(this.maxCount),y.setOwner(!0),y.setGameState(2),h.manager.ui.show({name:"PageRoom"})}},n}(f.BindController(d)),H=n(R.prototype,"goto",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),E=n(R.prototype,"pop",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),T=n(R.prototype,"layout",[w],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),k=n(R.prototype,"identity",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=n(R.prototype,"num",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),P=R))||P));a._RF.pop()}}}));

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
//# sourceMappingURL=index.js.map