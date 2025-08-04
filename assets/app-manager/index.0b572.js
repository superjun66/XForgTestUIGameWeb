System.register("chunks:///_virtual/ApiManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "07311aMx3NBC4uwf4moIPuP", "ApiManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      /**
       * 接口管理器
       */
      var ApiManager = exports('ApiManager', (_dec = ccclass('ApiManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(ApiManager, _BaseManager);
        function ApiManager() {
          return _BaseManager.apply(this, arguments) || this;
        }
        var _proto = ApiManager.prototype;
        /**
         * 登录
         * @returns 
         */
        _proto.login = function login() {
          return new Promise(function (resolve, reject) {
            // 模拟登录
            setTimeout(function () {
              resolve({
                errno: 0,
                errmsg: '',
                data: {
                  token: '<token>',
                  username: '<username>'
                }
              });
            }, 3000);
          });
        };
        return ApiManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/app-manager", ['./ApiManager.ts', './UtilManager.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/UtilManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, view, v2, screen, v3, tween, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      view = module.view;
      v2 = module.v2;
      screen = module.screen;
      v3 = module.v3;
      tween = module.tween;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "10a575i1t1KRp9og7iJcZR8", "UtilManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UtilManager = exports('UtilManager', (_dec = ccclass('UtilManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(UtilManager, _BaseManager);
        function UtilManager() {
          return _BaseManager.apply(this, arguments) || this;
        }
        var _proto = UtilManager.prototype;
        // [无序] 加载完成时触发
        _proto.onLoad = function onLoad() {}

        // [无序] 自身初始化完成, init执行完毕后被调用
        ;

        _proto.onInited = function onInited() {}

        // [无序] 所有manager初始化完成
        ;

        _proto.onFinished = function onFinished() {}

        // [无序] 初始化manager，在初始化完成后，调用finish方法
        ;

        _proto.init = function init(finish) {
          _BaseManager.prototype.init.call(this, finish);
        }
        /** 初始化布局*/;
        UtilManager.InitLayout = function InitLayout() {
          var designView = view.getDesignResolutionSize();
          var desWidth = this._designWidth = designView.width;
          var desHeight = this._designHeight = designView.height;
          var halfWidth = desWidth / 2,
            halfHeight = desHeight / 2;
          this._centerOrigin = v2(0, 0);
          this._centerTop = v2(0, halfHeight);
          this._centerBottom = v2(0, -halfHeight);
          this._leftTop = v2(-halfWidth, halfHeight);
          this._leftCenter = v2(-halfWidth, 0);
          this._leftBottom = v2(-halfWidth, -halfHeight);
          this._rightTop = v2(halfWidth, halfHeight);
          this._rightCenter = v2(halfWidth, 0);
          this._rightBottom = v2(halfWidth, -halfHeight);
          var visibleSize = view.getVisibleSize();
          this._visibleWidth = visibleSize.width;
          this._visibleHeight = visibleSize.height;
          var screenSize = screen.windowSize;
          var scrWidth = this._screenWidth = screenSize.width;
          var scrHeight = this._screenHeight = screenSize.height;
          //适配宽度，计算出真实高度
          var widthScale = this._fitRatio = desWidth / scrWidth;
          this._fitHeight = scrHeight * widthScale;
          if (screenSize.width == 2436 && screenSize.height == 1125 || screenSize.width == 1125 && screenSize.height == 2436 || screenSize.height / screenSize.width >= 2) this._isPhoneX = true;else if (Math.max(screenSize.width, screenSize.height) / Math.min(screenSize.width, screenSize.height) <= 1.34) {
            this._isIpad = true;
          }
        };
        UtilManager.IsIphoneX = function IsIphoneX() {
          return this._isPhoneX;
        };
        UtilManager.IsIpad = function IsIpad() {
          return this._isIpad;
        };
        UtilManager.GetScreenWidth = function GetScreenWidth() {
          return this._screenWidth;
        };
        UtilManager.GetScreenHeight = function GetScreenHeight() {
          return this._screenHeight;
        }

        //str 需要截断的字符串
        //maxChars 保留的汉字长度
        //suffix 添加的后缀 （注意，如果后缀不为null或者'' ，则要占用一个汉字的位置,具体看下方的示例代码)
        ;

        UtilManager.strClamp = function strClamp(nameStr, maxChars, suffix) {
          if (!nameStr) {
            return "";
          }
          //过滤Emoji表情
          var str = nameStr.replace(/\uD83C[\uDF00-\uDFFF]|\uD83D[\uDC00-\uDE4F]/g, "");
          var toCodePoint = function toCodePoint(unicodeSurrogates) {
            var r = [],
              c = 0,
              p = 0,
              i = 0;
            while (i < unicodeSurrogates.length) {
              var pos = i;
              c = unicodeSurrogates.charCodeAt(i++); //返回位置的字符的 Unicode 编码 
              if (c == 0xfe0f) {
                continue;
              }
              if (p) {
                var value = 0x10000 + (p - 0xD800 << 10) + (c - 0xDC00);
                r.push({
                  v: value,
                  pos: pos
                }); //计算4字节的unicode
                p = 0;
              } else if (0xD800 <= c && c <= 0xDBFF) {
                p = c; //如果unicode编码在oxD800-0xDBff之间，则需要与后一个字符放在一起
              } else {
                r.push({
                  v: c,
                  pos: pos
                }); //如果是2字节，直接将码点转为对应的十六进制形式
              }
            }

            return r;
          };
          suffix = suffix == null ? '...' : suffix;
          maxChars *= 2;
          var codeArr = toCodePoint(str);
          var numChar = 0;
          var index = 0;
          for (var i = 0; i < codeArr.length; ++i) {
            var code = codeArr[i].v;
            var add = 1;
            if (code >= 128) {
              add = 2;
            }
            //如果超过了限制，则按上一个为准
            if (numChar + add > maxChars) {
              break;
            }
            index = i;
            //累加
            numChar += add;
          }
          if (codeArr.length - 1 == index) {
            return str;
          }
          var more = suffix ? 1 : 0;
          return str.substring(0, codeArr[index - more].pos + 1) + suffix;
        }

        // // 弹窗效果显示
        // static Show_dlg(node: Node, cb?:any) {
        //     Tween.stopAllByTarget(node);
        //     node.setScale(v3(0.1, 0.1, 1));
        //     let opcaity = node.getComponent(UIOpacity)
        //     if (opcaity) {
        //         opcaity.opacity = 255;
        //     }
        //     let scaleBig = tween().to(0.15, { scale: v3(1.03, 1.03, 1) })
        //     let scaleSmall = tween().to(0.08, { scale: v3(0.97, 0.97, 1) });
        //     let scaleNormal = tween().to(0.07, { scale: v3(1, 1, 1) });
        //     tween(node).sequence(scaleBig, scaleSmall, scaleNormal, tween().call(function () {
        //         if (cb) {
        //             cb()
        //         }
        //     })).start();
        // }
        // // 弹窗效果消失
        // static Hide_dlg(node: Node, cb?:any) {
        //     Tween.stopAllByTarget(node);
        //     node.addComponent(UIOpacity);
        //     let scaleBig = tween().to(0.1, { scale: v3(1.04, 1.04, 1) })
        //     let scaleSmall = tween().to(0.2, { scale: v3(0.5, 0.5, 1) });
        //     //let scaleNormal = tween(node).to(0.07, { scale: v3(1, 1, 1) });
        //     tween(node).sequence(scaleBig, scaleSmall, tween().delay(0.15)).start();
        //     let Opacity = node.getComponent(UIOpacity);
        //     tween(Opacity).sequence(tween().delay(0.15), tween().to(0.05, { opacity: 0 }), tween().call(function () {
        //         if (cb) {
        //             cb()
        //         }
        //     })).start();
        // }

        // static GetHeadNodeByUrl(url, size) {
        //     return new Promise((resolve, reject) => {
        //         let headNode = new Node();
        //         let headUITransForm = headNode.addComponent(UITransform);
        //         let sprite = headNode.addComponent(Sprite);
        //         headNode.layer = Layers.Enum.UI_2D;
        //         resources.load("material/headmaterial", function (err, data:Material) {
        //             // Log(data);
        //             sprite.customMaterial = data;
        //             JMAssetManager.loadUrlImg(url, function (err, data: ImageAsset) {
        //                 if (!err) {
        //                     let sp: SpriteFrame = new SpriteFrame();
        //                     let texture = new Texture2D();
        //                     texture.image = data;
        //                     sp.texture = texture;
        //                     sp.packable = false
        //                     sprite.spriteFrame = sp;
        //                     headUITransForm.contentSize = size;
        //                     resolve(headNode)
        //                 } else {
        //                     reject();
        //                 }
        //             })
        //         })

        //     })
        // }

        // static GetHeadNodeByUserId(userid, size) {
        //     return new Promise((resolve, reject) => {
        //         UserDataMgr.getHeaderThumb(userid).then(function (url) {
        //             UIUtil.GetHeadNodeByUrl(url, size).then(
        //                 function (headNode: Node) {
        //                     resolve(headNode)
        //                 }, function () {
        //                     reject();
        //                 }
        //             )
        //         }, function () {
        //             reject();
        //         });
        //     })
        // }

        // static ShowToast(msg: string, showTime: number = 2) {
        //     let self = this;
        //     let popToast = this._popToast;
        //     if (popToast && isValid(popToast)) {
        //         popToast.getComponent(Toast).init(msg, showTime);
        //         popToast.parent = director.getScene().getChildByName('Canvas')
        //         popToast.setSiblingIndex(999);
        //     }
        //     else {
        //         assetManager.loadAny({ path: 'prefabs/Toast', bundle: 'resources' }, function (err, prefab) {
        //             if (err) {
        //                 Log(err.message || err);
        //                 self._popToast = null;
        //                 return;
        //             }
        //             let node = self._popToast = instantiate(prefab);
        //             node.getComponent("Toast").init(msg, showTime);
        //             let parent = director.getScene().getChildByName('Canvas');
        //             parent.addChild(node);
        //             node.setSiblingIndex(999);
        //         })
        //     }
        // }

        // static ShowLoading(msg?:string) {
        //     let self = this;
        //     UIUtil.HideLoading();
        //     return new Promise((resolve, reject) => {
        //         assetManager.loadAny({ path: 'prefabs/Loading', bundle: 'resources' }, function (err, prefab) {
        //             if (err) {
        //                 Log(err.message || err);
        //                 self.HideLoading();
        //                 reject();
        //                 return;
        //             }

        //             if (isValid(self._popLoading)) {
        //                 self._popLoading.destroy();
        //             }
        //             let node = instantiate(prefab);
        //             self._popLoading = node;
        //             let scr = node.getComponent('Loading')
        //             scr.popDialog(msg)
        //             Jm.UILayerManager.getCurLayer().addChild(node);
        //             resolve(node)
        //         })
        //     })
        // }

        // static HideLoading() {
        //     let popLoading = this._popLoading;
        //     let _isValid = popLoading && isValid(popLoading);
        //     Log(`HideLoading... ${_isValid} : ${popLoading == null}`);
        //     if (_isValid) {
        //         popLoading.active = false;
        //         popLoading.removeFromParent();
        //         popLoading.destroy();
        //     }
        //     this._popLoading = null;
        // }

        // private static lastClickTime: number
        // private static CLICK_INTERVAL = 1000

        // static ShouldPerfomClick(cdTime?) {
        //     if (cdTime)
        //         this.CLICK_INTERVAL = cdTime * 1000
        //     else
        //         this.CLICK_INTERVAL = 1000
        //     if (Date.now() - this.lastClickTime < this.CLICK_INTERVAL) {
        //         console.warn("avoid multi-click!!")
        //         return false
        //     }
        //     this.lastClickTime = Date.now()
        //     return true
        // }

        // static ActionFromRightToCenter(actionArgs: { target: Node, time?: number, x?: number, y?: number }, cb?) {
        //     let target = actionArgs.target, time = actionArgs.time != null ? actionArgs.time : 0.2;
        //     if (target) {
        //         let x = actionArgs.x != null ? actionArgs.x : (target.position.x - target.getComponent(UITransform).width),
        //             y = actionArgs.y != null ? actionArgs.y : target.position.y;
        //         tween(target).to(time, { position: v3(x, y, 0) }).call(() => { cb && cb(); }).start();
        //     } else {
        //         console.warn('from right to center, target is null!');
        //     }
        // }

        // static ActionFromCenterToRight(actionArgs: { target: Node, time?: number, x?: number, y?: number }, cb?) {
        //     let target = actionArgs.target, time = actionArgs.time != null ? actionArgs.time : 0.2;
        //     if (target) {
        //         let x = actionArgs.x != null ? actionArgs.x : (target.position.x + target.getComponent(UITransform).width),
        //             y = actionArgs.y != null ? actionArgs.y : target.position.y;
        //         tween(target).to(time, { position: v3(x, y, 0) }).call(() => { cb && cb(); }).start();
        //     } else {
        //         console.warn('from center to right, target is null!');
        //     }
        // }

        /**
         *  二阶贝塞尔曲线 运动
         * @param target
         * @param {number} duration
         * @param {} c1 起点坐标
         * @param {} c2 控制点
         * @param {Vec3} to 终点坐标
         * @param opts
         * @returns {any}
         */;
        UtilManager.BezierTo = function BezierTo(target, duration, c1, c2, to, opts) {
          opts = opts || Object.create(null);
          /**
           * @desc 二阶贝塞尔
           * @param {number} t 当前百分比
           * @param {} p1 起点坐标
           * @param {} cp 控制点
           * @param {} p2 终点坐标
           * @returns {any}
           */
          var twoBezier = function twoBezier(t, p1, cp, p2) {
            var x = (1 - t) * (1 - t) * p1.x + 2 * t * (1 - t) * cp.x + t * t * p2.x;
            var y = (1 - t) * (1 - t) * p1.y + 2 * t * (1 - t) * cp.y + t * t * p2.y;
            return v3(x, y, 0);
          };
          opts.onUpdate = function (arg, ratio) {
            target.position = twoBezier(ratio, c1, c2, to);
          };
          return tween(target).to(duration, {}, opts);
        };
        UtilManager.OpenUrl = function OpenUrl(url, title, back) {
          if (back === void 0) {
            back = true;
          }
          var gameDiv = document.getElementById('GameDiv');

          // 创建一个新的div元素作为导航栏
          var navBar = document.createElement('div');
          navBar.style.position = "absolute";
          navBar.style.top = "0";
          navBar.style.left = "0";
          navBar.style.width = "100%"; // 确保导航栏宽度为100%
          navBar.style.height = "80px";
          navBar.style.backgroundColor = '#ffffff';
          navBar.style.color = '#000000';
          navBar.style.display = "flex";
          navBar.style.alignItems = "center";
          navBar.style.justifyContent = "center";
          navBar.style.fontSize = "20px";
          navBar.style.zIndex = "1000"; //导航栏显示在其他元素上方
          navBar.textContent = title; //设置导航栏的标题
          gameDiv.appendChild(navBar);
          if (back) {
            var btnBack = document.createElement("button");
            btnBack.style.position = "absolute";
            btnBack.style.top = "25px"; //调整按钮的垂直位置使其与导航栏文字对齐
            btnBack.style.left = '10px';
            btnBack.style.width = '30px';
            btnBack.style.height = '30px';
            btnBack.style.backgroundColor = "rgba(255,255,255,0)";
            btnBack.style.backgroundSize = "contain";
            btnBack.style.backgroundImage = "url('https://dev-qiniu.lrs-hello.caniculab.com/lrs_hello/material/bt_back.png')";
            btnBack.style.border = "none";
            navBar.appendChild(btnBack);
            btnBack.addEventListener("click", function () {
              btnBack.remove();
              iframeDiv.remove();
              navBar.remove(); // 点击返回按钮时，导航栏也应该被移除
            });
          }

          var iframeDiv = document.createElement('div');
          iframeDiv.id = "WrapIframe";
          iframeDiv.style.position = "absolute";
          iframeDiv.style.width = "100%";
          iframeDiv.style.height = "calc(100% - 80px)"; // 确保高度减去导航栏的高度
          iframeDiv.style.backgroundColor = '#ffffff';
          iframeDiv.style.opacity = '1';
          iframeDiv.style.top = "80px"; // 与导航栏底部对齐
          iframeDiv.style.left = "0";
          gameDiv.appendChild(iframeDiv);
          var iframe = document.createElement('iframe');
          iframe.src = url;
          iframe.style.width = "100%";
          iframe.style.height = "100%";
          iframe.style.border = "none"; // 移除iframe的边框
          iframe.title = title || '';
          iframeDiv.appendChild(iframe);
        }

        /**
         * 根据音量判断当前语音动画应该处于哪一帧
         * @param volume 当前声音大小
         * @totalFrame 动画总共有多少帧
         * @volumeRang 声音大小范围
         * */;
        UtilManager.GetVoiceAnimationAtFrame = function GetVoiceAnimationAtFrame(volume, totalFrame, volumeRang) {
          if (volumeRang === void 0) {
            volumeRang = 100;
          }
          totalFrame--;
          if (volume < 0) {
            volume = 0;
          } else if (volume > volumeRang) {
            volume = volumeRang;
          }
          var perVol = volume / volumeRang;
          var adjust = perVol * (perVol * perVol * 2 - perVol * 3 + 2);
          var frame = Math.round(totalFrame * adjust) + 1;
          return frame;
        };
        return UtilManager;
      }(BaseManager), _class2._screenWidth = void 0, _class2._screenHeight = void 0, _class2._designWidth = void 0, _class2._designHeight = void 0, _class2._visibleWidth = void 0, _class2._visibleHeight = void 0, _class2._fitRatio = void 0, _class2._fitHeight = void 0, _class2._centerOrigin = void 0, _class2._centerTop = void 0, _class2._centerBottom = void 0, _class2._leftTop = void 0, _class2._leftCenter = void 0, _class2._leftBottom = void 0, _class2._rightTop = void 0, _class2._rightCenter = void 0, _class2._rightBottom = void 0, _class2._isPhoneX = false, _class2._isIpad = false, _class2._popToast = void 0, _class2._popLoading = void 0, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-manager', 'chunks:///_virtual/app-manager'); 
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