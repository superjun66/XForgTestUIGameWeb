System.register("chunks:///_virtual/app-controller",["./HomeController.ts"],(function(){return{setters:[null],execute:function(){}}}));

System.register("chunks:///_virtual/HomeController.ts",["./rollupPluginModLoBabelHelpers.js","cc","./BaseController.ts"],(function(e){var t,n,o;return{setters:[function(e){t=e.inheritsLoose},function(e){n=e.cclegacy},function(e){o=e.default}],execute:function(){n._RF.push({},"edfcdX7QLpPXa+knveHjYAG","HomeController",void 0);e("HomeController",function(e){function n(){for(var t,n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=e.call.apply(e,[this].concat(o))||this).test=0,t}return t(n,e),n.prototype.refresh=function(e){this.test=1,this.emit(n.Event.Refresh1,e)},n}(o()));n._RF.pop()}}}));

(function(r) {
  r('virtual:///prerequisite-imports/app-controller', 'chunks:///_virtual/app-controller'); 
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