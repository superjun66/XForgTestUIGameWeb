System.register("chunks:///_virtual/page-over", ['./PageOver.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PageOver.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Button, BaseView, app;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Button = module.Button;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "89152+rFGtBG7Xs40J5KGyd", "PageOver", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PageOver = exports('PageOver', (_dec = ccclass('PageOver'), _dec2 = property(Button), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PageOver, _BaseView);
        function PageOver() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "goto", _descriptor, _assertThisInitialized(_this));
          // 子界面列表，数组顺序为子界面排列顺序
          _this.miniViews = [];
          return _this;
        }
        var _proto = PageOver.prototype;
        // 初始化的相关逻辑写在这
        _proto.onShow = function onShow() {
          this["goto"].node.on(Button.EventType.CLICK, function () {
            app.manager.ui.show({
              name: 'PageHome'
            });
          });
        };
        _proto.onHide = function onHide() {
          this["goto"].node.off(Button.EventType.CLICK);
        };
        return PageOver;
      }(BaseView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "goto", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

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