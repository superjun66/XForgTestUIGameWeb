System.register("chunks:///_virtual/pop-tip", ['./PopTip.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopTip.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, Button, BaseView;
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
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "7bf5345pKVKG4c+F4P2dcfe", "PopTip", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopTip = exports('PopTip', (_dec = ccclass('PopTip'), _dec2 = property(Label), _dec3 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopTip, _BaseView);
        function PopTip() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "close", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = PopTip.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.close.on(Button.EventType.CLICK, this.hide, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {
          this.title.string = "\u88AB\n" + params + "\n\u6253\u5F00";
        }

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopTip>({name: 'PopTip', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        return PopTip;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "close", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/pop-tip', 'chunks:///_virtual/pop-tip'); 
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