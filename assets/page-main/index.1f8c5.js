System.register("chunks:///_virtual/page-main", ['./PageMain.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PageMain.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, SpriteFrame, BaseView, app;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
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
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "bd877ACAyhI05J8QFUTEWQb", "PageMain", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PageMain = exports('PageMain', (_dec = ccclass('PageMain'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PageMain, _BaseView);
        function PageMain() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          // 子界面列表，数组顺序为子界面排列顺序
          _this.miniViews = [];
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PageMain.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          // this.login.node.active = false;
          app.Manager.Util.InitLayout();
          var self = this;
          if (app.Manager.Util.IsIphoneX()) {
            app.manager.loader.load({
              bundle: '',
              // 不传入bundle，默认为resources
              path: 'bj_liuhai/spriteFrame',
              type: SpriteFrame,
              onComplete: function onComplete(asset) {
                console.log('加载资源完成', asset);
                self.bg.getComponent(Sprite).spriteFrame = asset;
              }
            });
          } else if (app.Manager.Util.IsIpad()) {
            app.manager.loader.load({
              bundle: '',
              // 不传入bundle，默认为resources
              path: 'bj_pad/spriteFrame',
              type: SpriteFrame,
              onComplete: function onComplete(asset) {
                console.log('加载资源完成', asset);
                self.bg.getComponent(Sprite).spriteFrame = asset;
              }
            });
          }
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {
          this.showMiniViews({
            views: this.miniViews
          });
        }

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PageMain>({name: 'PageMain', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onClickBegin = function onClickBegin() {
          app.manager.ui.show({
            name: 'PageHome'
          });
        };
        return PageMain;
      }(BaseView), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
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
  r('virtual:///prerequisite-imports/page-main', 'chunks:///_virtual/page-main'); 
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