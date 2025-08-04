System.register("chunks:///_virtual/JmIdentityCell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JmListViewItem.ts', './JmNodePoolMgr.ts', './JmIdentityItem.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Layout, isValid, JmListViewItem, JmNodePoolMgr, JmIdentityItem;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Layout = module.Layout;
      isValid = module.isValid;
    }, function (module) {
      JmListViewItem = module.default;
    }, function (module) {
      JmNodePoolMgr = module.default;
    }, function (module) {
      JmIdentityItem = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "14b469mCv5BK5BE5hpNFxI/", "JmIdentityCell", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JmIdentityCell = exports('default', (_dec = property(Layout), ccclass(_class = (_class2 = /*#__PURE__*/function (_JmListViewItem) {
        _inheritsLoose(JmIdentityCell, _JmListViewItem);
        function JmIdentityCell() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _JmListViewItem.call.apply(_JmListViewItem, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "container", _descriptor, _assertThisInitialized(_this));
          _this.children = new Array();
          return _this;
        }
        var _proto = JmIdentityCell.prototype;
        _proto.updateItem = function updateItem(id, data, listView) {
          _JmListViewItem.prototype.updateItem.call(this, id, data, listView);
          for (var i = 0; i < 4; i++) {
            if (!data[i]) {
              var ins = this.children[i];
              if (ins) {
                ins.removeFromParent();
                ins.destroy();
                this.children[i] = null;
              }
            } else {
              var _ins = this.children[i];
              if (!_ins) {
                _ins = JmNodePoolMgr.GetCell(JmNodePoolMgr.IdentityCellPool);
                _ins.parent = this.container.node;
                this.children[i] = _ins;
              }
              var roomCell = _ins.getComponent(JmIdentityItem);
              roomCell.init(data[i], id * 4 + i + 1);
            }
          }
        };
        _proto.onDisable = function onDisable() {
          _JmListViewItem.prototype.onDisable.call(this);
        };
        _proto.onDestroy = function onDestroy() {
          // super.onDestroy();
          var child,
            children = this.children;
          for (var i = 0, len = children.length; i < len; i++) {
            child = children[i];
            if (isValid(child, true)) {
              child.active = false;
              child.destroy();
            }
          }
          this.children = [];
        };
        return JmIdentityCell;
      }(JmListViewItem), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "container", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmIdentityItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts', './JmRoomDataMgr.ts', './JmClickComponent.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Label, SpriteFrame, Sprite, Texture2D, Color, app, JmRoomDataMgr, JmClickComponent;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Label = module.Label;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Texture2D = module.Texture2D;
      Color = module.Color;
    }, function (module) {
      app = module.app;
    }, function (module) {
      JmRoomDataMgr = module.default;
    }, function (module) {
      JmClickComponent = module.JmClickComponent;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "ffa38Dt7fFKS7ezuhUX6PJg", "JmIdentityItem", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      // const qq = window['qq'];
      var JmIdentityItem = exports('default', (_dec = property(Node), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Label), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), ccclass(_class = (_class2 = /*#__PURE__*/function (_JmClickComponent) {
        _inheritsLoose(JmIdentityItem, _JmClickComponent);
        function JmIdentityItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _JmClickComponent.call.apply(_JmClickComponent, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "seat", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "icon", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pic", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nickName", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "dayNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "nightNode", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "out", _descriptor7, _assertThisInitialized(_this));
          _this.data = null;
          _this.id = 0;
          return _this;
        }
        var _proto = JmIdentityItem.prototype;
        _proto.onLoad = function onLoad() {};
        _proto.start = function start() {};
        _proto.onEnable = function onEnable() {
          _JmClickComponent.prototype.onEnable.call(this);
        };
        _proto.onDisable = function onDisable() {
          _JmClickComponent.prototype.onEnable.call(this);
        };
        _proto.onDestroy = function onDestroy() {};
        _proto.init = function init(data, id) {
          console.log('JmIdentityItem');
          this.id = id;
          this.data = data;
          this.nickName.string = data.userId ? app.Manager.Util.strClamp(data.nickName, 5, "...") : '点击邀请';
          var url = "pic_seat_" + id + "/spriteFrame";
          // if (data.userId == JmUserDataMgr.GetCurrentUserId()) {
          //   url = `identityBig/pic_myseat_${id}/spriteFrame`
          // }
          var self = this;
          app.manager.loader.load({
            bundle: 'identitybig',
            // 不传入bundle，默认为resources
            path: url,
            type: SpriteFrame,
            onComplete: function onComplete(asset) {
              self.seat.getComponent(Sprite).spriteFrame = asset;
            }
          });
          this.updateDay(JmRoomDataMgr.getGameDay());
          if (JmRoomDataMgr.isOwner() && !JmRoomDataMgr.getGameDay()) {
            this.updateIdentity();
          }
          if (data.headerThumb) {
            var _self = this;
            _self.icon.active = true;
            var headerThumb = data.headerThumb;
            app.manager.loader.loadRemote({
              url: headerThumb,
              ext: '.png',
              // 指定图片扩展名
              onComplete: function onComplete(data) {
                var sp = new SpriteFrame();
                var texture = new Texture2D();
                texture.image = data;
                sp.texture = texture;
                _self.icon.getComponent(Sprite).spriteFrame = sp;
              }
            });
          } else {
            this.icon.active = false;
          }

          // this.out.active = data.status == 2
        };

        _proto.updateDay = function updateDay(isDay) {
          this.dayNode.active = isDay;
          this.nightNode.active = !isDay;
          if (isDay) {
            this.nickName.color = new Color().fromHEX("#E7F0FD");
            this.pic.getComponent(Sprite).spriteFrame = null;
            this.pic.active = false;
            this.out.active = false;
          } else {
            this.nickName.color = new Color().fromHEX("#C0C4D8");
          }
        };
        _proto.updateIdentity = function updateIdentity() {
          console.log('updateIdentity=', this.data.identity);
          var AllotIdentityCfg = app.config["const"].AllotIdentityCfg;
          if (AllotIdentityCfg[this.data.identity]) {
            var picUrl = AllotIdentityCfg[this.data.identity].pic;
            // let bundle = assetManager.getBundle('assetsRes');
            // bundle.load(picUrl, SpriteFrame, function (err, spFrame: SpriteFrame) {
            //   if (err) {
            //     log(err.message || err);
            //     return;
            //   }
            //   self.pic.getComponent(Sprite).spriteFrame = spFrame;
            //   self.pic.active = true;
            // });
          } else {
            this.pic.active = false;
            this.pic.getComponent(Sprite).spriteFrame = null;
          }
        };
        _proto.onItemClick = function onItemClick(target) {
          this.onClickItem(target);
        };
        _proto.onClickItem = function onClickItem(target) {
          console.log('邀请 id=', this.id);
          if (JmRoomDataMgr.getGameState() == 0 && JmRoomDataMgr.isOwner() && this.data.identity != 0) {
            this.out.active = !this.out.active;
          }
        };
        return JmIdentityItem;
      }(JmClickComponent), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "seat", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pic", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "nickName", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dayNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nightNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "out", [_dec7], {
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

System.register("chunks:///_virtual/paper-room-room", ['./JmIdentityCell.ts', './JmIdentityItem.ts', './PaperRoomRoom.ts'], function () {
  return {
    setters: [null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/PaperRoomRoom.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts', './app.ts', './JmListView.ts', './JmNodePoolMgr.ts', './JmRoomDataMgr.ts', './RoomController.ts'], function (exports) {
  var _inheritsLoose, _applyDecoratedDescriptor, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Label, RichText, Layout, find, Widget, UITransform, ScrollView, SpriteFrame, Sprite, Color, BaseView, app, JmListView, JmNodePoolMgr, JmRoomDataMgr, RoomController;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Label = module.Label;
      RichText = module.RichText;
      Layout = module.Layout;
      find = module.find;
      Widget = module.Widget;
      UITransform = module.UITransform;
      ScrollView = module.ScrollView;
      SpriteFrame = module.SpriteFrame;
      Sprite = module.Sprite;
      Color = module.Color;
    }, function (module) {
      BaseView = module.default;
    }, function (module) {
      app = module.app;
    }, function (module) {
      JmListView = module.default;
    }, function (module) {
      JmNodePoolMgr = module.default;
    }, function (module) {
      JmRoomDataMgr = module.default;
    }, function (module) {
      RoomController = module.RoomController;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14;
      cclegacy._RF.push({}, "1a3f6w1IuBPP4sW08ofP1bY", "PaperRoomRoom", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var PaperRoomRoom = exports('PaperRoomRoom', (_dec = ccclass('PaperRoomRoom'), _dec2 = property(JmListView), _dec3 = property(Prefab), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(RichText), _dec9 = property(Node), _dec10 = property(Layout), _dec11 = property(Label), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Label), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView$BindControl) {
        _inheritsLoose(PaperRoomRoom, _BaseView$BindControl);
        function PaperRoomRoom() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView$BindControl.call.apply(_BaseView$BindControl, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "listView", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identityItem", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bg", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "godNode", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "tagNode", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "roomNum", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "cfgText", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "txtBg", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identityNode", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identityTxt", _descriptor10, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identityIcon", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "layoutBg", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identityBg", _descriptor13, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "identityLabel", _descriptor14, _assertThisInitialized(_this));
          _this.identityType = 0;
          _this.gameRoomSeatsInfoData = null;
          _this._roomKey = null;
          _this.gameState = 0;
          _this.txt = '';
          _this.cardNode = null;
          _this.allotIdentityCfg = null;
          _this.type = 1;
          _this.testType = 1;
          return _this;
        }
        var _proto = PaperRoomRoom.prototype;
        // 初始化的相关逻辑写在这
        _proto.onLoad = function onLoad() {
          this.init();
          this.initData();
          //监听
          this.controller.on(RoomController.Event.UPDATE_GAME_IDENTITY, this.updateIdentity, this);
        }

        // 界面打开时的相关逻辑写在这(onShow可被多次调用-它与onHide不成对)
        ;

        _proto.onShow = function onShow(params) {}

        // 界面关闭时的相关逻辑写在这(已经关闭的界面不会触发onHide)
        ;

        _proto.onHide = function onHide(result) {
          this.controller.targetOff(this);
        };
        _proto.onClickBack = function onClickBack() {
          app.manager.ui.show({
            name: 'PageHome'
          });
        };
        _proto.init = function init() {
          var _this2 = this;
          var rsp1 = {
            "recordId": 49,
            "roomNum": 1036,
            "status": 0,
            "players": 24,
            "curPlayers": 2,
            "judge": true,
            "seats": [{
              "userId": 100022,
              "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/0BBA8D3211B54E6C6BC9B15C8E7CF8F3/100",
              "nickName": "易乐乐",
              "status": 1,
              "identity": 15
            }, {
              "userId": 100023,
              "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/7C90B13F53B0B0A84346A317724EF6EF/100",
              "nickName": "DH",
              "status": 1,
              "identity": 15
            }, {
              "status": 0,
              "identity": 0
            }, {
              "status": 0,
              "identity": 0
            }, {
              "status": 0,
              "identity": 0
            }, {
              "status": 0,
              "identity": 0
            }],
            "identities": "{\"11\":1,\"12\":1,\"1\":1,\"13\":1,\"2\":1,\"14\":1,\"3\":4,\"15\":12,\"9\":1,\"10\":1}"
          };
          var rsp = rsp1;
          JmRoomDataMgr.InitCurrentRoom(rsp);
          if (app.Manager.Util.IsIpad()) {
            find('top', this.node).setScale(0.5, 0.5, 0.5);
            find('centre', this.node).setScale(0.7, 0.7);
            find('bottom', this.node).setScale(0.7, 0.7);
            find('top/back', this.node).getComponent(Widget).top = 10;
            find('top/back', this.node).getComponent(Widget).updateAlignment();
          }
          this.roomNum.string = '1001'; //JmRoomDataMgr.GetRoomNum();
          this.gameRoomSeatsInfoData = null;
          var self = this;
          // JmHttpSender.RequestAdvertisingConfig().then((result: any) => {
          //   this.log(`RequestGameStart Success ${JSON.stringify(result)}`);
          //   //显示广告
          //   self.advertisementNode.active = result.display
          //   self.identityNode.getComponent(Widget).top = self.advertisementNode.active ? 360 : 180
          self.updateUI();
          // }, (err) => {
          //   this.log(`RequestGameStart Failed! ${err}`);
          // });
          JmNodePoolMgr.InitNodePool(JmNodePoolMgr.IdentityCellPool, this.identityItem, "JmIdentityItem");
          this.log('JmRoomDataMgr.getRoomCfg()=', JmRoomDataMgr.getRoomCfg());
          var cfg = JmRoomDataMgr.getRoomCfg();
          var txt = '';
          this.allotIdentityCfg = app.config["const"].AllotIdentityCfg;
          var sortedArray = Array.from(cfg.entries()).sort(function (a, b) {
            return Number(a[0]) - Number(b[0]);
          });
          sortedArray.forEach(function (_ref, index) {
            var k = _ref[0],
              v = _ref[1];
            _this2.log('k=', k);
            _this2.log('v=', v);
            txt += _this2.allotIdentityCfg[k].name + 'x' + v;
            if (index < sortedArray.length - 1) {
              txt += '，';
            }
          });
          this.txt = txt;
          this.cfgText.string = "<color=#848EA3>\u3010\u672C\u5C40\u914D\u7F6E\u3011</c><color=#4A5979>" + txt + "</color>";
          this.log('this.cfgText.node.getContentSize().height=', this.cfgText.node.getComponent(UITransform).height);
          if (this.cfgText.node.getComponent(UITransform).height < 120) this.txtBg.getComponent(UITransform).height = 200;else this.txtBg.getComponent(UITransform).height = this.cfgText.node.getComponent(UITransform).height + 79;
          var data = [];
          if (JmRoomDataMgr.GetRoomSeats()) data = JmRoomDataMgr.GetRoomSeats();else {
            for (var i = 0; i < JmRoomDataMgr.getRoomCount(); i++) {
              data.push({
                userId: null,
                name: '',
                icon: '',
                identity: 0,
                headerThumb: ''
              });
            }
          }
          // for (let i = 0; i < JmRoomDataMgr.getRoomCount(); i++) {
          //   data.push({
          //     userId: null,
          //     name: '点击邀请',//'邬菲' + i,
          //     icon: '',
          //     identity: 0,
          //     headerThumb: '',
          //   },)
          // }
          this.listView.setComponentName('JmIdentityCell');
          this.listView.setData(this.sliceData(data));
          this.scheduleOnce(function () {
            _this2.listView.notifyChange();
            _this2.tagNode.active = JmRoomDataMgr.isOwner();
            _this2.listView.bottomMargin = JmRoomDataMgr.isOwner() ? 80 : 0;
            _this2.tagNode.setPosition(0, -_this2.listView.getContentHeight() + 30);
            var height = JmRoomDataMgr.isOwner() ? _this2.listView.getContentHeight() + 50 : _this2.listView.getContentHeight();
            if (height > _this2.listView.node.getComponent(UITransform).height) {
              _this2.listView.getComponent(ScrollView).elastic = true;
            } else {
              _this2.listView.getComponent(ScrollView).elastic = false;
            }
          }, 0.1);
        };
        _proto.initData = function initData() {
          this._roomKey = JmRoomDataMgr.GetCurrentRoomKey();
          // this.gameRoomSeatsInfoData = JmRoomDataMgr.GetRoomSeats();
        };

        _proto.updateUI = function updateUI() {
          // this.log('JmRoomDataMgr.isOwner()=', JmRoomDataMgr.isOwner())
          var isOwner = JmRoomDataMgr.isOwner();
          // this.otherNode.active = !isOwner
          this.updateBtn();
          var gameState = this.gameState = 1; //JmRoomDataMgr.getGameState()
          if (isOwner) {
            this.identityTxt.string = '法官';
            // JmResourceMgr.LoadBundleSpriteRes('identityBig/card_judge', this.identityIcon);
            var self = this;
            app.manager.loader.load({
              bundle: 'identitybig',
              // 不传入bundle，默认为resources
              path: 'card_judge/spriteFrame',
              type: SpriteFrame,
              onComplete: function onComplete(asset) {
                console.log('加载资源完成', asset);
                self.identityIcon.getComponent(Sprite).spriteFrame = asset;
              }
            });
          } else {
            if (gameState == 1 || gameState == 2) {
              this.identityTxt.string = '等待发牌';
              // JmResourceMgr.LoadBundleSpriteRes('identity/card_myrole__', this.identityIcon);
            }
          }

          this.updateDay(gameState == 2);
        };
        _proto.updateDay = function updateDay(isDay) {
          var _this3 = this;
          // JmRoomDataMgr.setGameDay(isDay)
          if (isDay) {
            if (app.Manager.Util.IsIphoneX()) ;else if (app.Manager.Util.IsIpad()) ;
            // JmResourceMgr.LoadBundleSpriteRes('room/bg_myrole_day', this.layoutBg);
            // JmResourceMgr.LoadBundleSpriteRes('room/bg_myrole1_day', this.identityBg);
            this.identityLabel.color = new Color().fromHEX("#6E7C99");
            this.cfgText.string = "<color=#848EA3>\u3010\u672C\u5C40\u914D\u7F6E\u3011</c><color=#4A5979>" + this.txt + "</color>";
            this.identityNode.getComponent(Widget).bottom = 170;
          } else {
            if (app.Manager.Util.IsIphoneX()) ;else if (app.Manager.Util.IsIpad()) ;
            // JmResourceMgr.LoadBundleSpriteRes('room/bg_myrole_night', this.layoutBg);
            // JmResourceMgr.LoadBundleSpriteRes('room/bg_myrole1_night', this.identityBg);
            this.identityLabel.color = new Color().fromHEX("#8474A4");
            this.cfgText.string = "<color=#8474A4>\u3010\u672C\u5C40\u914D\u7F6E\u3011</c><color=#2A1658>" + this.txt + "</color>";
            if (!JmRoomDataMgr.isOwner()) {
              this.identityNode.getComponent(Widget).bottom = 0;
            }
          }
          if (!JmRoomDataMgr.isOwner()) {
            //|| this.advertisementNode.active) {
            this.identityNode.getComponent(Widget).updateAlignment();
            this.listView.node.getComponent(Widget).updateAlignment();
            this.listView.node.getChildByName('view').getComponent(Widget).updateAlignment();
            this.listView.node.getChildByName('view').getChildByName('content').getComponent(Widget).updateAlignment();
          }
          // JmResourceMgr.LoadBundleSpriteRes(url, this.bg);
          var data = [{
            "userId": 100022,
            "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/0BBA8D3211B54E6C6BC9B15C8E7CF8F3/100",
            "nickName": "易乐乐",
            "status": 1,
            "identity": 15
          }, {
            "userId": 100023,
            "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/7C90B13F53B0B0A84346A317724EF6EF/100",
            "nickName": "DH",
            "status": 1,
            "identity": 15
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }, {
            "status": 0,
            "identity": 0
          }];

          // let data = JmRoomDataMgr.GetRoomSeats()
          if (data) {
            this.listView.setData(this.sliceData(data));
            this.scheduleOnce(function () {
              _this3.listView.notifyChange();
            }, 0.1);
          }
        };
        _proto.restoreData = function restoreData(slicedData) {
          var result = [];
          for (var i = 0, len = slicedData.length; i < len; i++) {
            result = result.concat(slicedData[i]);
          }
          return result;
        };
        _proto.sliceData = function sliceData(data) {
          var result = [];
          for (var i = 0, len = data.length; i < len; i += 4) {
            result.push(data.slice(i, i + 4));
          }
          return result;
        };
        _proto.onClickStart = function onClickStart() {
          // // JmRoomDataMgr.setGameState(true)
          // this.updateBtn()
          // if (this.type > 16)
          //   this.type = 1;
          // // EventManager.Send(JmDataEvent.UPDATE_GAME_IDENTITY, this.type++);

          app.controller.room.updateGameIdentity(this.testType++);
          var data = this.restoreData(this.listView.getData());
          for (var i = 0; i < data.length - 3; i++) {
            data[i].identity = this.testType++;
            if (this.testType > 16) this.testType = 1;
          }
          this.listView.setData(this.sliceData(data));
        };
        _proto.updateIdentity = function updateIdentity(type) {
          this.log('type=', type);
          this.identityType = type;
          this.identityTxt.string = this.allotIdentityCfg[type].name;
          // JmResourceMgr.LoadBundleSpriteRes(AllotIdentityCfg[type].icon, this.identityIcon);
          // JmResourceMgr.LoadBundlePrefab('prefab/JmIdentityCard', function (err, prefab) {
          //   if (err) {
          //     Log.Log(err.message || err);
          //     return;
          //   }
          //   let cardNode = self.cardNode;
          //   if (cardNode && cc.isValid(cardNode)) {
          //     cardNode.active = false;
          //     cardNode.removeFromParent();
          //     cardNode.destroy();
          //   }
          //   self.cardNode = null;
          //   Log.Log("LoadPerfab>>>success")
          //   let node = cc.instantiate(prefab);
          //   self.cardNode = node
          //   node.active = true;
          //   node.getComponent("JmIdentityCard").init(type);
          //   self.node.addChild(self.cardNode);
          // })
        };

        _proto.updateBtn = function updateBtn() {
          // // this.log(`JmRoomDataMgr.getGameState()= ${JmRoomDataMgr.getGameState()}`);
          // let isGameing = JmRoomDataMgr.getGameState() == 0 || JmRoomDataMgr.getGameState() == 1
          // this.godNode.active = !isGameing && JmRoomDataMgr.isOwner()
          // this.btnAgain.active = isGameing && JmRoomDataMgr.isOwner()
          // if (JmRoomDataMgr.getGameState() == this.gameState) {
          //     this.btnAgain.getComponent(Button).interactable = true
          // }
          // else {
          //     if (!this.btnAgain.getComponent(Button).interactable) {
          //         this.scheduleOnce(() => {
          //             this.btnAgain.getComponent(Button).interactable = true
          //         }, 3)
          //     }
          // }
        };
        _proto.onClickTestRes = function onClickTestRes() {
          // let rsp1 =
          //   { "recordId": 49, "roomNum": 1036, "status": 0, "players": 24, "curPlayers": 2, "judge": true, 
          //     "seats": [
          //       { "userId": 100022, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/0BBA8D3211B54E6C6BC9B15C8E7CF8F3/100", "nickName": "易乐乐", "status": 1, "identity": 15 }, 
          //       { "userId": 100023, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/7C90B13F53B0B0A84346A317724EF6EF/100", "nickName": "DH", "status": 1, "identity": 15 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }], "identities": "{\"11\":1,\"12\":1,\"1\":1,\"13\":1,\"2\":1,\"14\":1,\"3\":4,\"15\":12,\"9\":1,\"10\":1}" }
          // let rsp2 =
          //   { "recordId": 49, "roomNum": 1036, "status": 0, "players": 24, "curPlayers": 2, "judge": false, "seats": [{ "userId": 100022, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/0BBA8D3211B54E6C6BC9B15C8E7CF8F3/100", "nickName": "易乐乐", "status": 1, "identity": 15 }, { "userId": 100023, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/7C90B13F53B0B0A84346A317724EF6EF/100", "nickName": "DH", "status": 1, "identity": 15 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }], "identities": "{\"11\":1,\"12\":1,\"1\":1,\"13\":1,\"2\":1,\"14\":1,\"3\":4,\"15\":12,\"9\":1,\"10\":1}" }

          // let rsp = JmRoomDataMgr.isOwner() ? rsp1 : rsp2
          // JmRoomDataMgr.InitCurrentRoom(rsp);
          // EventManager.SendImmediately(JmDataEvent.UDPATE_ROOM_SEATS, rsp);
          // this.updateRoomSeats(rsp.seats);
        };
        _proto.onClickTestRes1 = function onClickTestRes1() {
          // let rsp1 =
          //   { "recordId": 49, "roomNum": 1036, "status": 2, "players": 24, "curPlayers": 2, "judge": true, "seats": [{ "userId": 100022, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/0BBA8D3211B54E6C6BC9B15C8E7CF8F3/100", "nickName": "易乐乐", "status": 1, "identity": 15 }, { "userId": 100023, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/7C90B13F53B0B0A84346A317724EF6EF/100", "nickName": "DH", "status": 1, "identity": 15 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }], "identities": "{\"11\":1,\"12\":1,\"1\":1,\"13\":1,\"2\":1,\"14\":1,\"3\":4,\"15\":12,\"9\":1,\"10\":1}" }
          // let rsp2 =
          //   { "recordId": 49, "roomNum": 1036, "status": 2, "players": 24, "curPlayers": 2, "judge": false, "seats": [{ "userId": 100022, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/0BBA8D3211B54E6C6BC9B15C8E7CF8F3/100", "nickName": "易乐乐", "status": 1, "identity": 15 }, { "userId": 100023, "headerThumb": "https://thirdqq.qlogo.cn/qqapp/1110879879/7C90B13F53B0B0A84346A317724EF6EF/100", "nickName": "DH", "status": 1, "identity": 15 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }, { "status": 0, "identity": 0 }], "identities": "{\"11\":1,\"12\":1,\"1\":1,\"13\":1,\"2\":1,\"14\":1,\"3\":4,\"15\":12,\"9\":1,\"10\":1}" }

          // let rsp = JmRoomDataMgr.isOwner() ? rsp1 : rsp2
          // JmRoomDataMgr.InitCurrentRoom(rsp);
          // // EventManager.SendImmediately(JmDataEvent.UDPATE_ROOM_SEATS, rsp);
          // let self = this;
          //   let headerThumb ='https://thirdqq.qlogo.cn/qqapp/1110879879/1F341E6B680513E1095DBDF19AF223D8/100' 
          //   app.manager.loader.loadRemote({
          //       url: headerThumb,
          //       onComplete(data: any) {
          //           let sp: SpriteFrame = new SpriteFrame();
          //           let texture = new Texture2D();
          //           texture = data;
          //           sp.texture = texture;
          //           sp.packable = false;
          //         // if (self.icon) {
          //         //   self.icon.getComponent(Sprite).spriteFrame = sp;
          //         // }

          //           self.identityIcon.getComponent(Sprite).spriteFrame = sp;
          //       }
          //   })=
        };
        _proto.updateRoomSeats = function updateRoomSeats(data) {
          this.gameRoomSeatsInfoData = JmRoomDataMgr.GetRoomSeats();
          if (this.gameState != JmRoomDataMgr.getGameState()) {
            this.gameState = JmRoomDataMgr.getGameState();
            this.updateUI();
          } else {
            var day = this.gameState == 0 ? false : true;
            this.updateDay(day);
          }
        };
        return PaperRoomRoom;
      }(BaseView.BindController(RoomController)), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "listView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "identityItem", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "godNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tagNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "roomNum", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "cfgText", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "txtBg", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "identityNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "identityTxt", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "identityIcon", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "layoutBg", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "identityBg", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "identityLabel", [_dec15], {
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
  r('virtual:///prerequisite-imports/paper-room-room', 'chunks:///_virtual/paper-room-room'); 
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