System.register("chunks:///_virtual/page-home", ['./PageHome.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PageHome.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './UIManager.ts', './HomeController.ts', './app.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, BaseView, UIManager, HomeController, app;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      UIManager = module.default;
    }, function (module) {
      HomeController = module.HomeController;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "ae0789px3JBA54gP+KHCsvj", "PageHome", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PageHome = exports('PageHome', (_dec = ccclass('PageHome'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inheritsLoose(PageHome, _BaseView$BindControl);
        function PageHome() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView$BindControl.call.apply(_BaseView$BindControl, [this].concat(args)) || this;
          // 子界面列表，数组顺序为子界面排列顺序
          _this.miniViews = [UIManager.MiniViewName.PaperHomeIndex];
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PageHome.prototype;
        _proto.beforeShow = function beforeShow(next, data) {
          // 加载子界面
          this.showMiniViews({
            views: [UIManager.MiniViewName.PaperHomeIndex],
            onFinish: next
          });
        };
        // 初始化的相关逻辑写在这
        _proto.onShow = function onShow() {
          var _this2 = this;
          // 只能通过绑定的controller实例监听事件
          this.controller.on(HomeController.Event.Refresh1, function (name) {
            _this2.warn("[Refresh1] \u6536\u5230" + name + "\u8C03\u7528\u7684\u5237\u65B0\u4E8B\u4EF6");
          }, this);
          this.controller.on(HomeController.Event.Refresh2, function (name) {
            _this2.warn("[Refresh2] \u6536\u5230" + name + "\u8C03\u7528\u7684\u5237\u65B0\u4E8B\u4EF6");
          }, this);
        };
        _proto.onHide = function onHide() {
          // 移除监听事件，防止内存泄漏
          this.controller.targetOff(this);
        };
        _proto.onLoad = function onLoad() {
          var self = this;
          if (app.Manager.Util.IsIphoneX()) {
            app.manager.loader.load({
              bundle: 'page-home-res',
              // 不传入bundle，默认为resources
              path: 'bg_configure_X/spriteFrame',
              type: SpriteFrame,
              onComplete: function onComplete(asset) {
                console.log('加载资源完成111', asset);
                self.bg.getComponent(Sprite).spriteFrame = asset;
              }
            });
          } else if (app.Manager.Util.IsIpad()) {
            app.manager.loader.load({
              bundle: 'page-home-res',
              // 不传入bundle，默认为resources
              path: 'bg_configure_iPad/spriteFrame',
              type: SpriteFrame,
              onComplete: function onComplete(asset) {
                console.log('加载资源完成222', asset);
                self.bg.getComponent(Sprite).spriteFrame = asset;
              }
            });
          }
        };
        return PageHome;
      }(BaseView.BindController(HomeController)), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
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
  r('virtual:///prerequisite-imports/page-home', 'chunks:///_virtual/page-home'); 
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