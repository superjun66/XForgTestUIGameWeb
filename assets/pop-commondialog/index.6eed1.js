System.register("chunks:///_virtual/pop-commondialog", ['./PopCommondialog.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PopCommondialog.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Node, find, BaseView, app;
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
      find = module.find;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8;
      cclegacy._RF.push({}, "8c302q7ErhCMJJWuo/A00kS", "PopCommondialog", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PopCommondialog = exports('PopCommondialog', (_dec = ccclass('PopCommondialog'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(PopCommondialog, _BaseView);
        function PopCommondialog() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "okContent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exitContent", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "title", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dialogContent", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerSureContent", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "sureNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "exitNode", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "centerOkNode", _descriptor8, _assertThisInitialized(_this));
          _this._okCb = void 0;
          _this._cancelCb = void 0;
          return _this;
        }
        var _proto = PopCommondialog.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {}

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(dialogConfig) {
          var msg = dialogConfig["message"],
            title = dialogConfig["title"],
            okCb = dialogConfig["okCb"],
            okText = dialogConfig["okText"],
            cancelCb = dialogConfig["cancelCb"],
            cancelText = dialogConfig["cancelText"],
            type = dialogConfig["dialogType"] || 1;
          this._okCb = okCb;
          this._cancelCb = cancelCb;
          this.dialogContent.string = msg;
          this.title.string = title;
          if (type == 1) {
            this.okContent.string = okText;
            this.exitContent.string = cancelText;
          } else if (type == 2) {
            this.centerSureContent.string = okText;
            this.centerOkNode.active = true;
            this.sureNode.active = false;
            this.exitNode.active = false;
          }
          if (app.Manager.Util.IsIpad()) {
            find('effectNode', this.node).setScale(0.7, 0.7);
          }
        }

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          // app.manager.ui.show<PopCommondialog>({name: 'PopCommondialog', onHide:(result) => { 接收到return的数据，并且有类型提示 }})
          return result;
        };
        _proto.OnClickSure = function OnClickSure() {
          var cb = this._okCb;
          if (cb) {
            cb();
          }
          this.hide();
        };
        _proto.OnClickExit = function OnClickExit() {
          var cb = this._cancelCb;
          if (cb) {
            cb();
          }
          this.cleanCommonDialog();
          this.hide();
        }

        //将回调函数什么的清除掉，防止缓存
        ;

        _proto.cleanCommonDialog = function cleanCommonDialog() {
          this._okCb = null;
          this._cancelCb = null;
        };
        return PopCommondialog;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "okContent", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "exitContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "dialogContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "centerSureContent", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "sureNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "exitNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "centerOkNode", [_dec9], {
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
  r('virtual:///prerequisite-imports/pop-commondialog', 'chunks:///_virtual/pop-commondialog'); 
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