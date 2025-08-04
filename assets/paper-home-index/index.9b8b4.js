System.register("chunks:///_virtual/paper-home-index", ['./PaperHomeIndex.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperHomeIndex.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './HomeController.ts', './app.ts', './JmRoomDataMgr.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, Button, find, instantiate, SpriteFrame, Sprite, BaseView, HomeController, app, JmRoomDataMgr;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      Button = module.Button;
      find = module.find;
      instantiate = module.instantiate;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      HomeController = module.HomeController;
    }, function (module) {
      app = module.app;
    }, function (module) {
      JmRoomDataMgr = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;
      cclegacy._RF.push({}, "4ee6bS6gUZApKfGJMZHF4Hd", "PaperHomeIndex", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperHomeIndex = exports('PaperHomeIndex', (_dec = ccclass('PaperHomeIndex'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inheritsLoose(PaperHomeIndex, _BaseView$BindControl);
        function PaperHomeIndex() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView$BindControl.call.apply(_BaseView$BindControl, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "goto", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pop", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layout", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identity", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "num", _descriptor5, _assertThisInitialized(_this));
          _this.maxCount = 0;
          return _this;
        }
        var _proto = PaperHomeIndex.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          var _this2 = this;
          // this.goto.on(Button.EventType.CLICK, () => {
          //     app.manager.ui.show({
          //         name: 'PageGame'
          //     });
          // });
          this.pop.on(Button.EventType.CLICK, function () {
            app.manager.ui.show({
              name: 'PopTip',
              data: _this2.viewName
            });
          });
          var _loop = function _loop() {
            var node = instantiate(_this2.identity);
            node.name = "identity" + i;
            node.active = true;
            var button = node.getComponent(Button);
            if (button) {
              // 通过按钮的 clickEvents 来设置自定义数据
              if (button.clickEvents && button.clickEvents.length > 0) {
                // 如果已经有click事件，修改第一个事件的customEventData
                button.clickEvents[0].customEventData = i.toString();
              }
            }
            _this2.log('app.config.const.AllotIdentityCfg[i].icon=', app.config["const"].AllotIdentityCfg[i].icon);
            app.manager.loader.load({
              bundle: 'identity',
              // 不传入bundle，默认为resources
              path: app.config["const"].AllotIdentityCfg[i].icon + "_n/spriteFrame",
              type: SpriteFrame,
              onComplete: function onComplete(asset) {
                console.log('加载资源完成', asset);
                node.getComponent(Sprite).spriteFrame = asset;
              }
            });
            _this2.layout.addChild(node);
          };
          for (var i = 1; i < 17; i++) {
            _loop();
          }
          //监听
          this.controller.on(HomeController.Event.IDENTITY_COUNT_UPDATE, this.updateCount, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {
          var _this3 = this;
          // 这里延迟一下，等PageHome初始化完成再触发事件
          this.scheduleOnce(function () {
            // 通过单例只能访问对外暴露的接口
            app.controller.home.refresh('PaperHomeIndex');

            // 通过绑定的controller实例访问内部事件
            _this3.controller.emit(HomeController.Event.Refresh2, 'PaperHomeIndex');

            // 报错，外部不可写
            // app.controller.home.test = 1;

            // 正确，内部可写
            _this3.controller.test = 10;
          });
        };
        _proto.onHide = function onHide(data) {
          this.controller.targetOff(this);
        };
        _proto.onClickIdentity = function onClickIdentity(event, target) {
          this.log('event=', event);
          this.log('target=', target);

          // this.layout.addChild(app.manager.ui.createNode({
          //     name: 'Identity',

          // app.manager.ui.show<UI类>({
          //     name: '自动提示UI名',
          //     data: 自动提示onShow方法需要的参数,
          //     onShow: () => {

          //     },
          //     onHide: (result) => { 
          //     //result自动识别为onHide的返回值类型 
          //     },
          //     onError: () => {

          //     }
          // });

          var countNode = find("identity" + target + "/numBg/num", this.layout);
          var count = countNode.getComponent(Label).string;
          var data = {
            type: target,
            count: count,
            maxCount: this.maxCount
          };
          app.manager.ui.show({
            data: data,
            name: 'PopIdentity'
          });
        };
        _proto.updateCount = function updateCount(data) {
          this.maxCount += data.cutCount;
          this.num.string = "\u603B\u4EBA\u6570\uFF1A" + this.maxCount + "\u4EBA";
          if (data.count <= 0) JmRoomDataMgr.delRoomCfg(Number(data.type));else JmRoomDataMgr.setRoomCfg(Number(data.type), data.count);
          this.log('JmRoomDataMgr.getRoomCfg()=', JmRoomDataMgr.getRoomCfg());
          var countBg = find("identity" + data.type + "/numBg", this.layout);
          countBg.active = data.count > 0;
          var countNode = find("identity" + data.type + "/numBg/num", this.layout);
          countNode.getComponent(Label).string = data.count;
        };
        _proto.onClickClose = function onClickClose() {
          app.manager.ui.show({
            name: 'PageMain'
          });
        };
        _proto.onCreateRoom = function onCreateRoom() {
          if (this.maxCount < 6) {
            app.manager.ui.show({
              data: {
                title: "提示",
                message: "开局人数最少为6人哦~",
                okCb: function okCb() {},
                okText: "知道了",
                dialogType: 2
              },
              name: 'PopCommondialog'
            });
            return;
          }
          var cfg = JmRoomDataMgr.getRoomCfg();
          var identities = [];
          for (var i = 1; i < 17; i++) {
            if (cfg.get(i)) identities.push(cfg.get(i));else identities.push(0);
          }
          // JmRoomDataMgr.InitCurrentRoomProto();
          JmRoomDataMgr.setRoomCount(this.maxCount);
          JmRoomDataMgr.setOwner(true);
          JmRoomDataMgr.setGameState(2);
          app.manager.ui.show({
            name: 'PageRoom'
          });
        };
        return PaperHomeIndex;
      }(BaseView.BindController(HomeController)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "goto", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pop", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layout", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "identity", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "num", [_dec6], {
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