System.register("chunks:///_virtual/app-controller", ['./HomeController.ts', './RoomController.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/HomeController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseController = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "edfcdX7QLpPXa+knveHjYAG", "HomeController", undefined);
      var HomeController = exports('HomeController', /*#__PURE__*/function (_BaseController) {
        _inheritsLoose(HomeController, _BaseController);
        function HomeController() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseController.call.apply(_BaseController, [this].concat(args)) || this;
          /**
           * 对外暴露的变量，外部只能读，内部才可以写
           */
          _this.test = 0;
          return _this;
        }
        var _proto = HomeController.prototype;
        /**
         * 对外暴露的接口，外部调用refresh方法时，会触发Refresh1事件
         * @param name 
         */
        _proto.refresh = function refresh(name) {
          this.test = 1; // 内部可以写
          this.emit(HomeController.Event.Refresh1, name);
        };
        _proto.identityCountUpdate = function identityCountUpdate(data) {
          this.emit(HomeController.Event.IDENTITY_COUNT_UPDATE, data);
        };
        return HomeController;
      }(BaseController()));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/RoomController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseController.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseController = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "63270SF4t9O8JZy3qJ5jIza", "RoomController", undefined);
      var RoomController = exports('RoomController', /*#__PURE__*/function (_BaseController) {
        _inheritsLoose(RoomController, _BaseController);
        function RoomController() {
          return _BaseController.apply(this, arguments) || this;
        }
        var _proto = RoomController.prototype;
        // Controller中发射事件, UI中监听事件:
        // 1、UI中需要将 「extends BaseView」 改为=> 「extends BaseView.bindController(RoomController)」
        // 2、UI中使用「this.controller.on/once」监听事件, 使用「this.controller.emit」发射事件, 使用「this.controller.off/targetOff」取消监听事件
        // 3、在外部(无法使用this.controller的地方)可以通过「app.controller.xxx」来调用对外导出的方法, 比如下面的refresh方法
        _proto.updateGameIdentity = function updateGameIdentity(type) {
          this.emit(RoomController.Event.UPDATE_GAME_IDENTITY, type);
        };
        return RoomController;
      }(BaseController()));
      cclegacy._RF.pop();
    }
  };
});

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
//# sourceMappingURL=index.js.map