System.register("chunks:///_virtual/page-game",["./PageGame.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/PageGame.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseView.ts"],(function(e){var n,t,r,a;return{setters:[function(e){n=e.inheritsLoose},function(e){t=e.cclegacy,r=e._decorator},function(e){a=e.default}],execute:function(){var i;t._RF.push({},"768a5qiJyRFzrqeBzv9UfjU","PageGame",void 0);var o=r.ccclass;r.property,e("PageGame",o("PageGame")(i=function(e){function t(){for(var n,t=arguments.length,r=new Array(t),a=0;a<t;a++)r[a]=arguments[a];return(n=e.call.apply(e,[this].concat(r))||this).miniViews=["PaperGameIndex"],n}return n(t,e),t.prototype.beforeShow=function(e,n){this.showMiniViews({views:["PaperGameIndex"],onFinish:e})},t}(a))||i);t._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/page-game', 'chunks:///_virtual/page-game'); 
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