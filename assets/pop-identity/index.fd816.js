System.register("chunks:///_virtual/pop-identity", ['./PopIdentity.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopIdentity.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Button, find, UITransform, SpriteFrame, Sprite, BaseView, app;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Label = module.Label;
      Node = module.Node;
      Button = module.Button;
      find = module.find;
      UITransform = module.UITransform;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "d1083VwdmJKy5obicDt2Ph2", "PopIdentity", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopIdentity = exports('PopIdentity', (_dec = ccclass('PopIdentity'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Button), _dec8 = property(Button), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopIdentity, _BaseView);
        function PopIdentity() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "txt", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtBg", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layout", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnUp", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnDown", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "btnSure", _descriptor8, _assertThisInitialized(_this));
          _this.count = 0;
          _this.oldCount = 0;
          _this.maxCount = 0;
          _this.type = 0;
          _this.CONST_MAX = 30;
          return _this;
        }
        var _proto = PopIdentity.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {}

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(data) {
          if (app.Manager.Util.IsIpad()) {
            find('effectNode', this.node).setScale(0.7, 0.7, 0.7);
          }
          this.type = data.type;
          this.oldCount = data.count;
          this.maxCount = data.maxCount;
          this.count = data.count || 1;
          this.log('this.count=', this.count);
          var allotIdentityCfg = app.config["const"].AllotIdentityCfg[this.type];
          allotIdentityCfg.name;
          this.txt.string = allotIdentityCfg.des;
          this.num.string = this.count + '';
          this.txt.updateRenderData(true);
          if (this.txt.node.getComponent(UITransform).contentSize.height < 180) this.txtBg.getComponent(UITransform).height = 220;else {
            this.txtBg.getComponent(UITransform).height = this.txt.node.getComponent(UITransform).contentSize.height + 40;
            this.btnSure.setPosition(0, -this.txtBg.getComponent(UITransform).height / 2 - 155);
          }
          // JmResourceMgr.LoadBundleSpriteRes(AllotIdentityCfg[this.type].icon, this.icon);
          var self = this;
          app.manager.loader.load({
            bundle: 'identity',
            // 不传入bundle，默认为resources
            path: allotIdentityCfg.icon + "_p/spriteFrame",
            type: SpriteFrame,
            onComplete: function onComplete(asset) {
              console.log('加载资源完成', asset);
              self.icon.getComponent(Sprite).spriteFrame = asset;
            }
          });
          this.btnUp.interactable = this.count - this.oldCount < this.CONST_MAX - this.maxCount;
          this.btnDown.interactable = this.count > 0;
        }

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopIdentity>({name: 'PopIdentity', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.onClickUpDown = function onClickUpDown(event, target) {
          this.log('target=', target);
          if (target == 'up') {
            this.count++;
          } else {
            this.count--;
          }
          this.num.string = this.count + '';
          this.btnUp.interactable = this.count - this.oldCount < this.CONST_MAX - this.maxCount;
          this.btnDown.interactable = this.count > 0;
        };
        _proto.onClickSure = function onClickSure() {
          var data = {
            type: this.type,
            count: this.count,
            cutCount: this.count - this.oldCount
          };
          app.controller.home.identityCountUpdate(data);
          this.hide();
        };
        return PopIdentity;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "txt", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "num", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "txtBg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "btnUp", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "btnDown", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "btnSure", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

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