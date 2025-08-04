System.register("chunks:///_virtual/app.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './handle.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, game, Game, Core, cccInited, appInited;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      game = module.game;
      Game = module.Game;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      cccInited = module.cccInited;
      appInited = module.appInited;
    }],
    execute: function () {
      cclegacy._RF.push({}, "121dfhPYx1FV4MaGWQefe6o", "app", undefined);
      var App = exports('App', /*#__PURE__*/function (_Core) {
        _inheritsLoose(App, _Core);
        function App() {
          return _Core.call(this) || this;
        }
        _createClass(App, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new App();
            return this._inst;
          }
        }]);
        return App;
      }(Core));
      App._inst = null;
      var app = exports('app', App.inst);
      {
        //@ts-ignore
        window['app'] = app;
        //@ts-ignore
        window['App'] = App;
      }
      {
        cccInited && game.once(Game.EVENT_ENGINE_INITED, function () {});
        appInited && app.once(App.EventType.EVENT_APPINIT_FINISHED, function () {});
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AppInit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseAppInit.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Sprite, BaseAppInit;
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
    }, function (module) {
      BaseAppInit = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "598f2EhUohEebUzsqwXHool", "AppInit", undefined);
      // import { app } from '../../app/app';
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var AppInit = exports('AppInit', (_dec = ccclass('AppInit'), _dec2 = property(Sprite), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseAppInit) {
        _inheritsLoose(AppInit, _BaseAppInit);
        function AppInit() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseAppInit.call.apply(_BaseAppInit, [this].concat(args)) || this;
          // @property(Button)
          // login: Button;
          _initializerDefineProperty(_this, "bg", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = AppInit.prototype;
        // /**
        // * 获得用户资源总量，这里返回几，就需要用户自行调用几次nextInit
        // */
        // protected getUserAssetNum(): number {
        //     return 1;
        // }
        // protected onUserInit() {
        //     this.login.node.active = true;
        //     this.login.node.on(Button.EventType.CLICK, async () => {
        //         // 登录
        //         const uuid = app.manager.ui.showLoading();
        //         await app.store.user.login();
        //         app.manager.ui.hideLoading(uuid);
        //         app.manager.ui.showToast('登录成功');
        //         // 下一步
        //         this.nextInit();
        //     });
        // }
        _proto.onLoad = function onLoad() {
          // this.login.node.active = false;
          // app.Manager.Util.InitLayout();
          // let self = this;
          // if (app.Manager.Util.IsIphoneX()) {
          //     app.manager.loader.load({
          //         bundle: '', // 不传入bundle，默认为resources
          //         path: 'bj_liuhai/spriteFrame',
          //         type: SpriteFrame,
          //         onComplete(asset) {
          //             console.log('加载资源完成', asset);
          //             self.bg.getComponent(Sprite).spriteFrame = asset;
          //         }
          //     })
          // }
          // else if (app.Manager.Util.IsIpad()) {
          //     app.manager.loader.load({
          //         bundle: '', // 不传入bundle，默认为resources
          //         path: 'bj_pad/spriteFrame',
          //         type: SpriteFrame,
          //         onComplete(asset) {
          //             console.log('加载资源完成', asset);
          //             self.bg.getComponent(Sprite).spriteFrame = asset;
          //         }
          //     })
          // }
        };
        _proto.onFinish = function onFinish() {
          //     // 执行完成操作
          //     this.node.destroy();
        };
        return AppInit;
      }(BaseAppInit), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Audio.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy, AudioSource, Node;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      AudioSource = module.AudioSource;
      Node = module.Node;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a40e7emzaxEXKUMqM7SQR28", "Audio", undefined);
      var Audio = exports('default', /*#__PURE__*/function () {
        function Audio() {
          this.volume = 1;
          this.volumeScale = 1;
          this.mute = false;
          this.endedCallback = null;
          this.startedCallback = null;
          this._playing = false;
          this._paused = false;
          this.audioSource = null;
          var node = new Node('audio');
          this.audioSource = node.addComponent(AudioSource);
          node.on(AudioSource.EventType.ENDED, this.onAudioEnded, this);
          node.on(AudioSource.EventType.STARTED, this.onAudioStarted, this);
        }
        var _proto = Audio.prototype;
        _proto.onAudioEnded = function onAudioEnded() {
          if (this.endedCallback) {
            var endedCallback = this.endedCallback;
            this.endedCallback = null;
            endedCallback();
          }
        };
        _proto.onAudioStarted = function onAudioStarted() {
          if (this.startedCallback) {
            var startedCallback = this.startedCallback;
            this.startedCallback = null;
            startedCallback();
          }
        };
        _proto.play = function play(clip, onEnded, onStarted) {
          if (onEnded === void 0) {
            onEnded = null;
          }
          if (onStarted === void 0) {
            onStarted = null;
          }
          this.audioSource.clip = clip;
          this.endedCallback = onEnded;
          this.startedCallback = onStarted;
          this.audioSource.play();
          this.playing = true;
          this.paused = false;
          return this;
        };
        _proto.stop = function stop() {
          this.playing = false;
          this.paused = false;
          this.audioSource.stop();
          this.audioSource.node.emit(AudioSource.EventType.ENDED);
          return this;
        };
        _proto.pause = function pause() {
          if (!this.playing) return this;
          this.paused = true;
          this.audioSource.pause();
          return this;
        };
        _proto.resume = function resume() {
          if (!this.playing) return this;
          if (!this.paused) return this;
          this.paused = false;
          this.audioSource.play();
          return this;
        };
        _proto.setVolume = function setVolume(volume, scale) {
          if (volume === void 0) {
            volume = 1;
          }
          this.volume = volume;
          if (typeof scale === 'number') this.volumeScale = scale;
          this.audioSource.volume = volume * this.volumeScale * (this.mute ? 0 : 1);
          return this;
        };
        _proto.getVolume = function getVolume() {
          return this.volume;
        };
        _proto.setVolumeScale = function setVolumeScale(scale) {
          if (scale === void 0) {
            scale = 1;
          }
          this.volumeScale = scale;
          this.audioSource.volume = this.volume * scale * (this.mute ? 0 : 1);
          return this;
        };
        _proto.getVolumeScale = function getVolumeScale() {
          return this.volumeScale;
        };
        _proto.setLoop = function setLoop(loop) {
          this.audioSource.loop = loop;
          return this;
        };
        _proto.getLoop = function getLoop() {
          return this.audioSource.loop;
        };
        _proto.setMute = function setMute(mute) {
          if (mute === void 0) {
            mute = true;
          }
          this.mute = mute;
          this.setVolume(this.volume);
          return this;
        };
        _proto.getMute = function getMute() {
          return this.mute;
        };
        _proto.onEnded = function onEnded(endedCallback) {
          this.endedCallback = endedCallback;
          return this;
        };
        _proto.clear = function clear() {
          this.volume = 1;
          this.volumeScale = 1;
          this.mute = false;
          this.paused = false;
          this.endedCallback = null;
          this.startedCallback = null;
          if (this.audioSource) {
            this.audioSource.stop();
            this.audioSource.volume = 1;
            this.audioSource.clip = null;
            this.audioSource.loop = false;
          }
          return this;
        };
        _proto.destroy = function destroy() {
          this.clear();
          this.audioSource.destroy();
          this.audioSource.node.destroy();
          this.audioSource = null;
        };
        _createClass(Audio, [{
          key: "playing",
          get: function get() {
            return this._playing;
          },
          set: function set(value) {
            this._playing = value;
          }
        }, {
          key: "paused",
          get: function get() {
            return this._paused;
          },
          set: function set(value) {
            this._paused = value;
          }
        }]);
        return Audio;
      }());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioEngine.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './AudioManager.ts'], function (exports) {
  var _createClass, cclegacy, AudioManager;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      AudioManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7a6389cgB9OaYjMP8cuG+mF", "AudioEngine", undefined);
      var AudioEngine = exports('default', /*#__PURE__*/function () {
        function AudioEngine() {
          /**effect的id从1开始，music的id始终为0 */
          this.audioID = 1;
          this.endedCallbackMap = new Map();
          this.effectMap = new Map();
          this.music = null;
          this.musicMute = false;
          this.musicVolumeScale = 1;
          this.effectMute = false;
          this.effectVolumeScale = 1;
        }
        var _proto = AudioEngine.prototype;
        ////////////////////////////////
        // 音效                        //
        ////////////////////////////////
        _proto.playEffect = function playEffect(audioClip, volume, loop, onStarted, onEnded) {
          var _this = this;
          if (volume === void 0) {
            volume = 1;
          }
          if (loop === void 0) {
            loop = false;
          }
          if (onStarted === void 0) {
            onStarted = null;
          }
          if (onEnded === void 0) {
            onEnded = null;
          }
          if (this.audioID > 100000) this.audioID = 1;
          var audioID = this.audioID++;
          var audio = AudioManager.inst.getAudio();
          this.effectMap.set(audioID, audio);
          if (onEnded) this.endedCallbackMap.set(audioID, onEnded);
          audio.setLoop(loop).setMute(this.effectMute).setVolume(volume, this.effectVolumeScale).play(audioClip, function () {
            AudioManager.inst.putAudio(audio);
            _this.effectMap["delete"](audioID);
            var callback = _this.endedCallbackMap.get(audioID);
            if (callback) {
              _this.endedCallbackMap["delete"](audioID);
              callback();
            }
          }, function () {
            onStarted && onStarted(audioID);
          });
          return audioID;
        };
        _proto.stopEffect = function stopEffect(id) {
          var _this$effectMap$get;
          return !!((_this$effectMap$get = this.effectMap.get(id)) != null && _this$effectMap$get.stop());
        };
        _proto.stopAllEffects = function stopAllEffects() {
          this.effectMap.forEach(function (audio) {
            audio.stop();
          });
        };
        _proto.pauseEffect = function pauseEffect(id) {
          var _this$effectMap$get2;
          return !!((_this$effectMap$get2 = this.effectMap.get(id)) != null && _this$effectMap$get2.pause());
        };
        _proto.pauseAllEffects = function pauseAllEffects() {
          this.effectMap.forEach(function (audio) {
            audio.pause();
          });
        };
        _proto.resumeEffect = function resumeEffect(id) {
          var _this$effectMap$get3;
          return !!((_this$effectMap$get3 = this.effectMap.get(id)) != null && _this$effectMap$get3.resume());
        };
        _proto.resumeAllEffects = function resumeAllEffects() {
          this.effectMap.forEach(function (audio) {
            audio.resume();
          });
        };
        _proto.setEffectMute = function setEffectMute(id, mute) {
          var _this$effectMap$get4;
          return !!((_this$effectMap$get4 = this.effectMap.get(id)) != null && _this$effectMap$get4.setMute(mute));
        };
        _proto.getEffectMute = function getEffectMute(id) {
          var _this$effectMap$get5;
          return !!((_this$effectMap$get5 = this.effectMap.get(id)) != null && _this$effectMap$get5.getMute());
        };
        _proto.setEffectVolume = function setEffectVolume(id, volume) {
          var _this$effectMap$get6;
          return !!((_this$effectMap$get6 = this.effectMap.get(id)) != null && _this$effectMap$get6.setVolume(volume));
        };
        _proto.getEffectVolume = function getEffectVolume(id) {
          var _this$effectMap$get7;
          return ((_this$effectMap$get7 = this.effectMap.get(id)) == null ? void 0 : _this$effectMap$get7.getVolume()) || 0;
        };
        _proto.setAllEffectsVolume = function setAllEffectsVolume(volume) {
          this.effectMap.forEach(function (audio) {
            audio.setVolume(volume);
          });
        };
        _proto.setEffectVolumeScale = function setEffectVolumeScale(id, volume) {
          var _this$effectMap$get8;
          return !!((_this$effectMap$get8 = this.effectMap.get(id)) != null && _this$effectMap$get8.setVolumeScale(volume));
        };
        _proto.getEffectVolumeScale = function getEffectVolumeScale(id) {
          var _this$effectMap$get9;
          return ((_this$effectMap$get9 = this.effectMap.get(id)) == null ? void 0 : _this$effectMap$get9.getVolumeScale()) || 0;
        };
        _proto.setGlobalEffectsVolumeScale = function setGlobalEffectsVolumeScale(scale) {
          this.effectVolumeScale = scale;
          this.effectMap.forEach(function (audio) {
            audio.setVolumeScale(scale);
          });
        };
        _proto.getGlobalEffectsVolumeScale = function getGlobalEffectsVolumeScale() {
          return this.effectVolumeScale;
        };
        _proto.setGlobalEffectsMute = function setGlobalEffectsMute(mute) {
          this.effectMute = mute;
          this.effectMap.forEach(function (audio) {
            audio.setMute(mute);
          });
        };
        _proto.getGlobalEffectsMute = function getGlobalEffectsMute() {
          return this.effectMute;
        }

        ////////////////////////////////
        // 音乐                        //
        ////////////////////////////////
        ;

        _proto.playMusic = function playMusic(audioClip, volume, onStarted) {
          if (volume === void 0) {
            volume = 1;
          }
          if (onStarted === void 0) {
            onStarted = null;
          }
          this.stopMusic();
          this.music = AudioManager.inst.getAudio();
          this.music.setLoop(true).setMute(this.musicMute).setVolume(volume, this.musicVolumeScale).play(audioClip, null, onStarted);
          return 0;
        };
        _proto.stopMusic = function stopMusic() {
          if (!this.music) return false;
          this.music.destroy();
          this.music = null;
          return true;
        };
        _proto.pauseMusic = function pauseMusic() {
          if (!this.music) return false;
          this.music.pause();
          return true;
        };
        _proto.resumeMusic = function resumeMusic() {
          if (!this.music) return false;
          this.music.resume();
          return true;
        };
        _proto.setMusicVolume = function setMusicVolume(volume) {
          if (!this.music) return false;
          this.music.setVolume(volume);
          return true;
        };
        _proto.getMusicVolume = function getMusicVolume() {
          if (!this.music) return -1;
          return this.music.getVolume();
        };
        _proto.setMusicVolumeScale = function setMusicVolumeScale(scale) {
          var _this$music;
          this.musicVolumeScale = scale;
          (_this$music = this.music) == null || _this$music.setVolumeScale(scale);
          return true;
        };
        _proto.getMusicVolumeScale = function getMusicVolumeScale() {
          return this.musicVolumeScale;
        };
        _proto.setMusicMute = function setMusicMute(mute) {
          var _this$music2;
          this.musicMute = mute;
          (_this$music2 = this.music) == null || _this$music2.setMute(mute);
          return true;
        };
        _proto.getMusicMute = function getMusicMute() {
          return this.musicMute;
        }

        ////////////////////////////////
        // 通用                        //
        ////////////////////////////////
        ;

        _proto.setEndedCallback = function setEndedCallback(audioID, callback) {
          if (audioID === 0) {
            var _this$music3;
            return !!((_this$music3 = this.music) != null && _this$music3.onEnded(callback));
          } else {
            if (this.effectMap.has(audioID)) {
              this.endedCallbackMap.set(audioID, callback);
              return true;
            }
            return false;
          }
        };
        _proto.stop = function stop(audioID) {
          if (audioID === 0) {
            return this.stopMusic();
          } else {
            return this.stopEffect(audioID);
          }
        };
        _proto.pause = function pause(audioID) {
          if (audioID === 0) {
            return this.pauseMusic();
          } else {
            return this.pauseEffect(audioID);
          }
        };
        _proto.resume = function resume(audioID) {
          if (audioID === 0) {
            return this.resumeMusic();
          } else {
            return this.resumeEffect(audioID);
          }
        };
        _proto.pauseAll = function pauseAll() {
          this.pauseMusic();
          this.pauseAllEffects();
        };
        _proto.resumeAll = function resumeAll() {
          this.resumeMusic();
          this.resumeAllEffects();
        };
        _proto.stopAll = function stopAll() {
          this.stopMusic();
          this.stopAllEffects();
        };
        _proto.setVolume = function setVolume(audioID, volume) {
          if (audioID === 0) {
            return this.setMusicVolume(volume);
          } else {
            return this.setEffectVolume(audioID, volume);
          }
        };
        _proto.getVolume = function getVolume(audioID) {
          if (audioID === 0) {
            return this.getMusicVolume();
          } else {
            return this.getEffectVolume(audioID);
          }
        };
        _proto.setVolumeScale = function setVolumeScale(audioID, scale) {
          if (audioID === 0) {
            return this.setMusicVolumeScale(scale);
          } else {
            return this.setEffectVolumeScale(audioID, scale);
          }
        };
        _proto.getVolumeScale = function getVolumeScale(audioID) {
          if (audioID === 0) {
            return this.getMusicVolumeScale();
          } else {
            return this.getEffectVolumeScale(audioID);
          }
        };
        _createClass(AudioEngine, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new AudioEngine();
            return this._inst;
          }
        }]);
        return AudioEngine;
      }());
      AudioEngine._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/AudioManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Audio.ts'], function (exports) {
  var _createClass, cclegacy, Audio;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Audio = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "5902c7PSWZGdZWpqw8PJxhX", "AudioManager", undefined);
      var AudioManager = exports('default', /*#__PURE__*/function () {
        function AudioManager() {
          this.audioArray = [];
        }
        var _proto = AudioManager.prototype;
        _proto.getAudio = function getAudio() {
          if (this.audioArray.length) {
            return this.audioArray.pop();
          }
          return new Audio();
        };
        _proto.putAudio = function putAudio(audio) {
          audio.clear();
          this.audioArray.push(audio);
        };
        _createClass(AudioManager, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new AudioManager();
            return this._inst;
          }
        }]);
        return AudioManager;
      }());
      AudioManager._inst = null;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseAppInit.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, _decorator, settings, Settings, assetManager, Button, Node, isValid, EventTouch, Component, Core, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      settings = module.settings;
      Settings = module.Settings;
      assetManager = module.assetManager;
      Button = module.Button;
      Node = module.Node;
      isValid = module.isValid;
      EventTouch = module.EventTouch;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "2110bB6HGxDDrnZkm2wbIsw", "BaseAppInit", undefined);
      var ccclass = _decorator.ccclass;
      var AdminBundleName = 'app-admin';
      var ModelBundleName = 'app-model';
      var ControlBundleName = 'app-control';
      var ControllerBundleName = 'app-controller';
      var ManagerBundleName = 'app-manager';
      var BaseAppInit = exports('default', (_dec = ccclass('BaseAppInit'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseAppInit, _Component);
        function BaseAppInit() {
          var _this;
          _this = _Component.call(this) || this;
          _this._base_mgr_completed = 0;
          _this._base_user_completed = 0;
          _this._base_inited = false;
          _this._base_finished = false;
          return _this;
        }

        /**
         * [避免重写] 开始初始化
         */
        var _proto = BaseAppInit.prototype;
        _proto.startInit = function startInit() {
          var _this2 = this;
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          Core.inst.lib.task.createAny()
          // 预加载control、model、admin、manager
          .add([function (next, retry) {
            // 预加载control(废弃)
            if (projectBundles.indexOf(ControlBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ControlBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载controller
            if (projectBundles.indexOf(ControllerBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ControllerBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载model
            if (projectBundles.indexOf(ModelBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ModelBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载admin
            if (projectBundles.indexOf(AdminBundleName) === -1) return next();
            assetManager.preloadAny({
              url: AdminBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }, function (next, retry) {
            // 预加载manage
            if (projectBundles.indexOf(ManagerBundleName) === -1) return next();
            assetManager.preloadAny({
              url: ManagerBundleName
            }, {
              ext: 'bundle'
            }, null, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }])
          // 加载control(废弃)
          .add(function (next, retry) {
            if (projectBundles.indexOf(ControlBundleName) === -1) return next();
            assetManager.loadBundle(ControlBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载controller
          .add(function (next, retry) {
            if (projectBundles.indexOf(ControllerBundleName) === -1) return next();
            assetManager.loadBundle(ControllerBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载model
          .add(function (next, retry) {
            if (projectBundles.indexOf(ModelBundleName) === -1) return next();
            assetManager.loadBundle(ModelBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载admin
          .add(function (next, retry) {
            if (projectBundles.indexOf(AdminBundleName) === -1) return next();
            assetManager.loadBundle(AdminBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          })
          // 加载manager
          .add(function (next, retry) {
            if (projectBundles.indexOf(ManagerBundleName) === -1) return next();
            assetManager.loadBundle(ManagerBundleName, function (err) {
              if (err) return retry(0.1);
              next();
            });
          }).start(function () {
            _this2._base_inited = true;
            _this2.onProgress(0, _this2._base_total);

            // 初始化app, 使用complete来实现onUserInit的切换以确保manager已完全加载
            BaseManager.init(assetManager.getBundle(ManagerBundleName), function () {
              _this2.innerNextInit();
            }, function () {
              _this2.onUserInit();
              if (_this2._base_completed < _this2._base_total) return;
              // 全部加载完成
              _this2.innerFinished();
            });
          });
        }

        /**
         * [不可重写] 用于内部初始化完成
         */;
        _proto.innerFinished = function innerFinished() {
          var _this3 = this;
          if (this._base_finished) return;
          this._base_finished = true;
          Core.emit(Core.EventType.EVENT_APPINIT_FINISHED);
          // 默认音效(Button点击触发, 这个方案可以正常触发input事件)
          if (Core.inst.Manager.Sound.setting.defaultEffectName) {
            var playDefaultEffect = function playDefaultEffect(e) {
              // SoundManager.setButtonEffect会将Button所在节点的useDefaultEffect设为false
              if (e.target['useDefaultEffect'] === false) return;
              Core.inst.manager.ui.onceUserInterface(Node.EventType.TOUCH_END, function (event) {
                if (!event.target.getComponent(Button)) return;
                setTimeout(function () {
                  if (!isValid(Core.inst.manager.sound)) return;
                  // 如果是scrollView中的button，在滑动后不播放点击音效
                  if (event.eventPhase === EventTouch.CAPTURING_PHASE) return;
                  Core.inst.manager.sound.playDefaultEffect();
                });
              }, null, true);
            };
            var onEnable = Button.prototype.onEnable;
            Button.prototype.onEnable = function () {
              onEnable.call(this);
              this.node.on(Node.EventType.TOUCH_START, playDefaultEffect);
            };
            var onDisable = Button.prototype.onDisable;
            Button.prototype.onDisable = function () {
              this.node.off(Node.EventType.TOUCH_START, playDefaultEffect);
              onDisable.call(this);
            };
          }
          return Core.inst.manager.ui.showDefault(function () {
            // 初始化完成
            _this3.onFinish();
            // 默认音乐(默认播放)
            if (Core.inst.Manager.Sound.setting.defaultMusicName) {
              var onTouch = function onTouch() {
                var _this4 = this;
                if (!isValid(Core.inst.manager.sound)) return;
                if (Core.inst.manager.sound.isMusicPlaying && !Core.inst.manager.sound.isMusicPaused) {
                  Core.inst.manager.sound.replayMusic(function () {
                    Core.inst.manager.ui.offUserInterface(Node.EventType.TOUCH_START, onTouch, _this4, true);
                  });
                } else {
                  Core.inst.manager.ui.offUserInterface(Node.EventType.TOUCH_START, onTouch, this, true);
                }
              };
              Core.inst.manager.ui.onUserInterface(Node.EventType.TOUCH_START, onTouch, _this3, true);
              Core.inst.manager.sound.playDefaultMusic(function () {
                Core.inst.manager.ui.offUserInterface(Node.EventType.TOUCH_START, onTouch, _this3, true);
              });
            }
          });
        }

        /**
         * [不可重写] 用于内部初始化
         */;
        _proto.innerNextInit = function innerNextInit() {
          // 完成+1
          this._base_mgr_completed += 1;
          // 进度回调
          this.onProgress(this._base_completed, this._base_total);
        }

        /**
         * [避免重写] 初始化下一步，用户部分每完成一步需要调用一次
         */;
        _proto.nextInit = function nextInit() {
          if (this._base_finished) return;
          if (!this._base_inited) {
            // 完成+1
            this._base_user_completed += 1;
            // 进度回调
            this.onProgress(this._base_completed, this._base_total);
            return;
          }

          // 完成+1
          this._base_user_completed += 1;
          // 进度回调
          this.onProgress(this._base_completed, this._base_total);

          // 全部加载完成
          if (this._base_completed >= this._base_total) {
            this.innerFinished();
          }
        }

        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        ////////////////////////////////////////////        以下可重写        ////////////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        /**
         * [可以重写] 默认start调用startInit，可以重写后自定义时机
         */;
        _proto.start = function start() {
          this.startInit();
        }

        /**
         * [可以重写] 获得用户资源总量，这里返回几，就需要用户自行调用几次nextInit
         */;
        _proto.getUserAssetNum = function getUserAssetNum() {
          return 0;
        }

        /**
         * [可以重写] 用户初始化函数，会在框架初始化完成后调用
         */;
        _proto.onUserInit = function onUserInit() {
          return 0;
        }

        /**
         * [可以重写] 监听进度
         * @param {Number} completed
         * @param {Number} total
         */;
        _proto.onProgress = function onProgress(completed, total) {
          return completed / total;
        }

        /**
         * [可以重写] 初始化完成
         */;
        _proto.onFinish = function onFinish() {};
        _createClass(BaseAppInit, [{
          key: "_base_mgr_total",
          get: function get() {
            return Math.max(0, BaseManager.getTotalAssetNum(assetManager.getBundle(ManagerBundleName)));
          }
        }, {
          key: "_base_user_total",
          get: function get() {
            return Math.max(0, this.getUserAssetNum());
          }
        }, {
          key: "_base_total",
          get: function get() {
            return this._base_mgr_total + this._base_user_total;
          }
        }, {
          key: "_base_completed",
          get: function get() {
            return this._base_mgr_completed + Math.min(this._base_user_total, this._base_user_completed);
          }
        }]);
        return BaseAppInit;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseControl.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('default', BaseControl);
      cclegacy._RF.push({}, "fb103m5F/JDta0mjXTmkbT1", "BaseControl", undefined);
      var CallbackInfo = function CallbackInfo(callback, target, once) {
        if (target === void 0) {
          target = null;
        }
        if (once === void 0) {
          once = false;
        }
        this.callback = null;
        this.target = null;
        this.once = false;
        this.callback = callback;
        this.target = target;
        this.once = once;
      };
      var CallbackList = /*#__PURE__*/function () {
        function CallbackList() {
          this.callbacks = [];
        }
        var _proto = CallbackList.prototype;
        _proto.size = function size() {
          return this.callbacks.length;
        };
        _proto.add = function add(callback, target, once) {
          if (target === void 0) {
            target = null;
          }
          if (once === void 0) {
            once = false;
          }
          this.callbacks.push(new CallbackInfo(callback, target, once));
        };
        _proto.emit = function emit(args) {
          for (var index = 0; index < this.callbacks.length; index++) {
            var info = this.callbacks[index];
            // 先移除
            if (info.once) {
              this.callbacks.splice(index, 1);
              --index;
            }
            if (info.callback) {
              info.callback.apply(info.target, args);
            }
          }
        };
        _proto.call = function call(args) {
          if (this.callbacks.length === 0) return;
          var info = this.callbacks[0];

          // 先移除
          if (info.once) this.callbacks.splice(0, 1);
          if (!info.callback) return;
          return info.callback.apply(info.target, args);
        };
        _proto.remove = function remove(callback, target) {
          if (target === void 0) {
            target = null;
          }
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback || info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByCallback = function removeByCallback(callback) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByTarget = function removeByTarget(target) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        return CallbackList;
      }();
      var EventEmitter = /*#__PURE__*/function () {
        function EventEmitter() {
          this.listeners = {};
        }
        var _proto2 = EventEmitter.prototype;
        _proto2.on = function on(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target);
        };
        _proto2.once = function once(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target, true);
        };
        _proto2.off = function off(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) return;
          this.listeners[event].remove(cb, target);
        };
        _proto2.targetOff = function targetOff(target) {
          if (!target) return;
          for (var key in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, key)) {
              var element = this.listeners[key];
              element.removeByTarget(target);
            }
          }
        };
        _proto2.emit = function emit(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          this.listeners[event].emit(args);
        };
        _proto2.call = function call(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          return this.listeners[event].call(args);
        };
        return EventEmitter;
      }();
      var SuperBaseControl = /*#__PURE__*/function () {
        function SuperBaseControl() {
          //用于类型提示推导//
          this.e = void 0;
          ////
          this.t = void 0;
          ////
          /////////////////
          this.event = new EventEmitter();
        }
        var _proto3 = SuperBaseControl.prototype;
        _proto3.call = function call(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          return this.event.call.call(this.event, key, args);
        };
        _proto3.emit = function emit(key) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return this.event.emit.call(this.event, key, args);
        };
        _proto3.on = function on() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          return this.event.on.apply(this.event, args);
        };
        _proto3.once = function once() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.event.once.apply(this.event, args);
        };
        _proto3.off = function off() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return this.event.off.apply(this.event, args);
        };
        _proto3.targetOff = function targetOff(target) {
          return this.event.targetOff.call(this.event, target);
        };
        return SuperBaseControl;
      }();
      /**
       * @deprecated 废弃，请使用Controller代替Control
       */
      function BaseControl(Event) {
        var _class5;
        return _class5 = /*#__PURE__*/function (_SuperBaseControl) {
          _inheritsLoose(BaseControl, _SuperBaseControl);
          function BaseControl() {
            return _SuperBaseControl.apply(this, arguments) || this;
          }
          _createClass(BaseControl, null, [{
            key: "inst",
            get: function get() {
              if (this._base_inst === null) {
                this._base_inst = new this();
              }
              return this._base_inst;
            }
          }]);
          return BaseControl;
        }(SuperBaseControl), _class5.Event = Event, _class5._base_inst = null, _class5;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseController.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      exports('default', BaseController);
      cclegacy._RF.push({}, "a7da7CB5gRIfo4MfUWP27NW", "BaseController", undefined);
      var CallbackInfo = function CallbackInfo(callback, target, once) {
        if (target === void 0) {
          target = null;
        }
        if (once === void 0) {
          once = false;
        }
        this.callback = null;
        this.target = null;
        this.once = false;
        this.callback = callback;
        this.target = target;
        this.once = once;
      };
      var CallbackList = /*#__PURE__*/function () {
        function CallbackList() {
          this.callbacks = [];
        }
        var _proto = CallbackList.prototype;
        _proto.size = function size() {
          return this.callbacks.length;
        };
        _proto.add = function add(callback, target, once) {
          if (target === void 0) {
            target = null;
          }
          if (once === void 0) {
            once = false;
          }
          this.callbacks.push(new CallbackInfo(callback, target, once));
        };
        _proto.emit = function emit(args) {
          for (var index = 0; index < this.callbacks.length; index++) {
            var info = this.callbacks[index];
            // 先移除
            if (info.once) {
              this.callbacks.splice(index, 1);
              --index;
            }
            if (info.callback) {
              info.callback.apply(info.target, args);
            }
          }
        };
        _proto.call = function call(args) {
          if (this.callbacks.length === 0) return;
          var info = this.callbacks[0];

          // 先移除
          if (info.once) this.callbacks.splice(0, 1);
          if (!info.callback) return;
          return info.callback.apply(info.target, args);
        };
        _proto.remove = function remove(callback, target) {
          if (target === void 0) {
            target = null;
          }
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback || info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByCallback = function removeByCallback(callback) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.callback !== callback) continue;
            this.callbacks.splice(index, 1);
          }
        };
        _proto.removeByTarget = function removeByTarget(target) {
          for (var index = this.callbacks.length - 1; index >= 0; index--) {
            var info = this.callbacks[index];
            if (info.target !== target) continue;
            this.callbacks.splice(index, 1);
          }
        };
        return CallbackList;
      }();
      var EventEmitter = /*#__PURE__*/function () {
        function EventEmitter() {
          this.listeners = {};
        }
        var _proto2 = EventEmitter.prototype;
        _proto2.on = function on(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target);
        };
        _proto2.once = function once(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) this.listeners[event] = new CallbackList();
          this.listeners[event].add(cb, target, true);
        };
        _proto2.off = function off(event, cb, target) {
          if (!event.toString() || !cb) return;
          if (!this.listeners[event]) return;
          this.listeners[event].remove(cb, target);
        };
        _proto2.targetOff = function targetOff(target) {
          if (!target) return;
          for (var _key in this.listeners) {
            if (Object.prototype.hasOwnProperty.call(this.listeners, _key)) {
              var element = this.listeners[_key];
              element.removeByTarget(target);
            }
          }
        };
        _proto2.emit = function emit(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          this.listeners[event].emit(args);
        };
        _proto2.call = function call(event, args) {
          if (!event.toString()) return;
          if (!this.listeners[event]) return;
          return this.listeners[event].call(args);
        };
        return EventEmitter;
      }();
      var SuperBaseController = /*#__PURE__*/function () {
        function SuperBaseController() {
          //用于类型提示推导//
          this.t = void 0;
          ////
          /////////////////
          this.event = new EventEmitter();
        }
        var _proto3 = SuperBaseController.prototype;
        /**获取第一个事件回调的返回值 */
        _proto3.call = function call(key) {
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key2 = 1; _key2 < _len; _key2++) {
            args[_key2 - 1] = arguments[_key2];
          }
          return this.event.call.call(this.event, key, args);
        }

        /**发射事件 */;
        _proto3.emit = function emit(key) {
          for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key3 = 1; _key3 < _len2; _key3++) {
            args[_key3 - 1] = arguments[_key3];
          }
          return this.event.emit.call(this.event, key, args);
        };
        _proto3.on = function on() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key4 = 0; _key4 < _len3; _key4++) {
            args[_key4] = arguments[_key4];
          }
          return this.event.on.apply(this.event, args);
        };
        _proto3.once = function once() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key5 = 0; _key5 < _len4; _key5++) {
            args[_key5] = arguments[_key5];
          }
          return this.event.once.apply(this.event, args);
        };
        _proto3.off = function off() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key6 = 0; _key6 < _len5; _key6++) {
            args[_key6] = arguments[_key6];
          }
          return this.event.off.apply(this.event, args);
        };
        _proto3.targetOff = function targetOff(target) {
          return this.event.targetOff.call(this.event, target);
        }

        /**打印日志 */;
        _createClass(SuperBaseController, [{
          key: "log",
          get: function get() {
            return Logger.create('log', '#4682b4', "[" + this['constructor'].name + "] [LOG]");
          }

          /**打印警告 */
        }, {
          key: "warn",
          get: function get() {
            return Logger.create('warn', '#ff7f50', "[" + this['constructor'].name + "] [WARN]");
          }

          /**打印错误 */
        }, {
          key: "error",
          get: function get() {
            return Logger.create('error', '#ff4757', "[" + this['constructor'].name + "] [ERROR]");
          }
        }]);
        return SuperBaseController;
      }();
      function BaseController() {
        var _class5;
        return _class5 = /*#__PURE__*/function (_SuperBaseController) {
          _inheritsLoose(BaseController, _SuperBaseController);
          function BaseController() {
            var _this;
            _this = _SuperBaseController.call(this) || this;
            BaseController._base_inst = _assertThisInitialized(_this);
            return _this;
          }
          _createClass(BaseController, null, [{
            key: "inst",
            get:
            /**
             * 控制器单例
             * - 尽量使用app.controller，可以避免因跨Bundle引用导致的问题，也可以避免Controller之间循环引用的问题
             */
            function get() {
              return this._base_inst;
            }
          }]);
          return BaseController;
        }(SuperBaseController), _class5.Event = new Proxy({}, {
          get: function get(target, key) {
            if (target[key]) return target[key];
            target[key] = key;
            return key;
          }
        }), _class5._base_inst = null, _class5;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseData.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a2323bci8dJJoAJATXa72lu", "BaseData", undefined);
      /**
       * 基础数据类
       * */
      var BaseData = exports('default', function BaseData() {
        console.log("Load BaseData");
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './logger.ts'], function (exports) {
  var _inheritsLoose, _createClass, _assertThisInitialized, cclegacy, _decorator, Widget, EventTarget, js, error, Prefab, path, instantiate, Component, Core, Logger;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Widget = module.Widget;
      EventTarget = module.EventTarget;
      js = module.js;
      error = module.error;
      Prefab = module.Prefab;
      path = module.path;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _class2;
      cclegacy._RF.push({}, "302056smx5PRICBe3D/jWxS", "BaseManager", undefined);
      var ccclass = _decorator.ccclass;
      var UserManagerPath = 'UserManager';
      var uuid = new ( /*#__PURE__*/function () {
        function UUID() {
          this.index = 0;
        }
        var _proto = UUID.prototype;
        _proto.create = function create() {
          if (this.index++ > 10000000) {
            this.index = 0;
          }
          return Date.now() + "-" + this.index;
        };
        return UUID;
      }())();
      var loadBegin = Logger.create('log', '#32cd32', '[BaseManager] [下载开始]');
      var loadFinish = Logger.create('log', '#00ae9d', '[BaseManager] [下载完成]');
      var loadError = Logger.create('log', '#ff4757', '[BaseManager] [下载失败]');
      var initBegin = Logger.create('log', '#3e4145', '[BaseManager] [初始化开始]');
      var initFinish = Logger.create('log', '#008080', '[BaseManager] [初始化完成]');
      var BaseManager = exports('default', (_dec = ccclass('BaseManager'), _dec(_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseManager, _Component);
        function BaseManager() {
          var _this;
          _this = _Component.call(this) || this;
          // 事件管理器
          _this._base_event = new EventTarget();
          // manager名字
          _this._base_manager_name = js.getClassName(_assertThisInitialized(_this));
          if (_this._base_manager_name !== 'Manager' && _this._base_manager_name.slice(-7) === 'Manager') {
            var managerName = _this._base_manager_name.slice(0, -7);
            Core.inst.Manager[managerName] = _this.constructor;
            Core.inst.manager[managerName.toLocaleLowerCase()] = _assertThisInitialized(_this);
          } else {
            error("[" + _this._base_manager_name + "] manager\u547D\u540D\u9519\u8BEF(\u5E94\u4E3A xxxxManager \u4EE5Manager\u7ED3\u5C3E)");
          }
          return _this;
        }

        // 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
        var _proto2 = BaseManager.prototype;
        _proto2.resetInEditor = function resetInEditor() {
          var widget = this.node.getComponent(Widget) || this.node.addComponent(Widget);
          widget.isAlignBottom = true;
          widget.isAlignLeft = true;
          widget.isAlignRight = true;
          widget.isAlignTop = true;
          widget.top = 0;
          widget.left = 0;
          widget.right = 0;
          widget.bottom = 0;
          widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
        }

        /**
         * [无序] 自身初始化完成, init执行完毕后被调用
         */;
        _proto2.onInited = function onInited() {}

        /**
         * [无序] 所有manager初始化完成
         */;
        _proto2.onFinished = function onFinished() {}

        /**
         * [无序] 初始化manager，在初始化完成后，调用finish方法
         * @param {Function} finish 
         */;
        _proto2.init = function init(finish) {
          finish && finish();
        };
        _proto2.createUUID = function createUUID() {
          return uuid.create();
        }

        /**打印日志 */;
        /**
         * [系统内置] 事件分发
         */
        _proto2.emit = function emit(event) {
          var _this$_base_event;
          for (var _len = arguments.length, data = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            data[_key - 1] = arguments[_key];
          }
          (_this$_base_event = this._base_event).emit.apply(_this$_base_event, [event].concat(data));
        }

        /**
         * [系统内置] 事件监听
         */;
        _proto2.on = function on(event, cb, target) {
          this._base_event.on(event, cb, target);
        }

        /**
         * [系统内置] 事件监听
         */;
        _proto2.once = function once(event, cb, target) {
          this._base_event.once(event, cb, target);
        }

        /**
         * [系统内置] 事件移除监听
         */;
        _proto2.off = function off(event, cb, target) {
          this._base_event.off(event, cb, target);
        }

        /**
         * [系统内置] 事件移除监听
         */;
        _proto2.targetOff = function targetOff(target) {
          this._base_event.targetOff(target);
        }

        /***********************************静态***********************************/
        /**
         * 框架内置Manager的数量
         * @private
         */;
        /**
         * 获得初始化资源的数量(包括sysMgrCount)
         * @private
         */
        BaseManager.getTotalAssetNum = function getTotalAssetNum(bundle) {
          var count = this.sysMgrCount;
          if (!bundle) return count;
          var array = bundle.getDirWithPath('/', Prefab);
          array.forEach(function (item) {
            if (item.path.endsWith('Manager')) {
              count++;
            }
          });
          return count;
        }

        /**
         * 获得初始化资源的数量
         * @private
         */;
        BaseManager.getUserAssetUrls = function getUserAssetUrls(bundle) {
          var pathArr = [];
          if (!bundle) return pathArr;
          var array = bundle.getDirWithPath('/', Prefab);
          array.forEach(function (item) {
            if (item.path.endsWith('Manager')) {
              pathArr.push(item.path);
            }
          });
          return pathArr;
        }

        /**
         * 静态方法，初始化manager，该方法必须在场景初始化完毕之后调用
         * @private
         */;
        BaseManager.init = function init(bundle, progress, complete) {
          var urls = this.getUserAssetUrls(bundle);
          var totalAsset = urls.length + this.sysMgrCount;
          var completeAsset = 0;
          var onProgress = function onProgress(next, manager) {
            {
              var _window;
              var startTime = (_window = window) != null && (_window = _window.performance) != null && _window.now ? performance.now() : Date.now();
              initBegin(manager.managerName);
              return function () {
                manager.onInited();
                {
                  var _window2;
                  var endTime = (_window2 = window) != null && (_window2 = _window2.performance) != null && _window2.now ? performance.now() : Date.now();
                  initFinish(manager.managerName + " \u8017\u65F6:" + (endTime - startTime).toFixed(6) + " ms");
                }
                progress && progress(++completeAsset, totalAsset);
                next();
              };
            }
          };

          // 用户manager(动态添加)
          var userMgrList = [];
          // 系统manager(静态内置)
          var sysMgrList = [Core.inst.manager.event, Core.inst.manager.timer, Core.inst.manager.loader, Core.inst.manager.ui, Core.inst.manager.sound];

          // 初始化系统manager
          var initSysMgrTask = Core.inst.lib.task.createASync();
          sysMgrList.forEach(function (manager) {
            initSysMgrTask.add(function (next) {
              manager.init(onProgress(next, manager));
            });
          });

          // 加载用户manager
          var loadUserMgrTask = Core.inst.lib.task.createASync();
          var UserManagerRoot = Core.inst.manager.ui.root.getChildByPath(UserManagerPath);
          urls.forEach(function (url) {
            loadUserMgrTask.add(function (next, retry) {
              {
                var _window3;
                var managerName = path.basename(url);
                var startTime = (_window3 = window) != null && (_window3 = _window3.performance) != null && _window3.now ? performance.now() : Date.now();
                loadBegin(managerName);
                bundle.load(url, Prefab, function (err, prefab) {
                  if (err || !prefab) {
                    loadError(managerName, '重试...');
                    retry(1);
                  } else {
                    var _window4;
                    var endTime = (_window4 = window) != null && (_window4 = _window4.performance) != null && _window4.now ? performance.now() : Date.now();
                    loadFinish(managerName + " \u8017\u65F6:" + (endTime - startTime).toFixed(6) + " ms");
                    var node = instantiate(prefab);
                    node.parent = UserManagerRoot;
                    node.active = true;
                    userMgrList.push(node.getComponent(BaseManager));
                    next();
                  }
                });
                return;
              }
            });
          });
          Core.inst.lib.task.createAny().add([function (next) {
            return initSysMgrTask.start(next);
          }, function (next) {
            return loadUserMgrTask.start(next);
          }]).add(function (next) {
            Core.emit(Core.EventType.EVENT_SYS_MANAGER_INITED);
            next();
          }).add(function (next) {
            // 初始化用户manager
            var initUserMgrTask = Core.inst.lib.task.createASync();
            userMgrList.forEach(function (manager) {
              initUserMgrTask.add(function (next) {
                manager.init(onProgress(next, manager));
              });
            });
            initUserMgrTask.start(next);
          }).add(function (next) {
            Core.emit(Core.EventType.EVENT_USER_MANAGER_INITED);
            Core.emit(Core.EventType.EVENT_MANAGER_INITED);
            next();
          }).add(function (next) {
            // 所有manager初始化完成后，触发回调
            sysMgrList.forEach(function (manager) {
              manager.onFinished();
            });
            userMgrList.forEach(function (manager) {
              manager.onFinished();
            });
            next();
          }).start(function () {
            Core.emit(Core.EventType.EVENT_MANAGER_FINISHED);
            complete && complete(totalAsset);
          });
        };
        _createClass(BaseManager, [{
          key: "managerName",
          get: function get() {
            return this._base_manager_name;
          }
        }, {
          key: "log",
          get: function get() {
            return window.console.log.bind(window.console, "[" + this._base_manager_name + "] [LOG] [" + new Date().toLocaleString() + "]");
          }

          /**打印警告 */
        }, {
          key: "warn",
          get: function get() {
            return window.console.warn.bind(window.console, "[" + this._base_manager_name + "] [WARN] [" + new Date().toLocaleString() + "]");
          }

          /**打印错误 */
        }, {
          key: "error",
          get: function get() {
            return window.console.error.bind(window.console, "[" + this._base_manager_name + "] [ERROR] [" + new Date().toLocaleString() + "]");
          }
        }], [{
          key: "sysMgrCount",
          get: function get() {
            return 5;
          }
        }]);
        return BaseManager;
      }(Component)) || _class2));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseModel.ts", ['cc'], function () {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7a377zr4IZOcZm99E2rQNJP", "BaseModel", undefined); // export type IModel<T> = {
      //     [P in keyof T]: T[P] extends Function
      //     ? '❌此处不能定义任何方法'
      //     : (
      //         T[P] extends Array<infer R>
      //         ? (
      //             R extends Function
      //             ? '❌此处不能定义任何方法'
      //             : T[P]
      //         )
      //         : T[P] // IModel<T[P]> 性能消耗大
      //     );
      // };
      // export type IStore<T> = {
      //     [P in keyof T]: T[P] extends Function
      //     ? T[P]
      //     : (
      //         T[P] extends Array<infer R>
      //         ? (
      //             R extends Function
      //             ? '❌此处不能定义任何方法'
      //             : IModel<T[P]>
      //         )
      //         : IModel<T[P]>
      //     );
      // };
      // export type IStore<T> = {
      //     [P in keyof T]: T[P] extends Function
      //     ? T[P]
      //     : IModel<T[P]>;
      // };
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/BaseView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './logger.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _assertThisInitialized, _initializerDefineProperty, _createClass, cclegacy, _decorator, Node, Enum, js, Scene, director, UITransform, Font, isValid, sp, SpriteFrame, Component, Core, Logger;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _assertThisInitialized = module.assertThisInitialized;
      _initializerDefineProperty = module.initializerDefineProperty;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Enum = module.Enum;
      js = module.js;
      Scene = module.Scene;
      director = module.director;
      UITransform = module.UITransform;
      Font = module.Font;
      isValid = module.isValid;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      Logger = module.Logger;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _class3;
      cclegacy._RF.push({}, "eddc0QRQjlCPYcQd/35Kv/C", "BaseView", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        disallowMultiple = _decorator.disallowMultiple;
      var BlockEvents = [Node.EventType.TOUCH_START, Node.EventType.TOUCH_MOVE, Node.EventType.TOUCH_END, Node.EventType.TOUCH_CANCEL, Node.EventType.MOUSE_DOWN, Node.EventType.MOUSE_MOVE, Node.EventType.MOUSE_UP, Node.EventType.MOUSE_ENTER, Node.EventType.MOUSE_LEAVE, Node.EventType.MOUSE_WHEEL];
      var HideEvent = Enum({
        destroy: 1,
        active: 2
      });
      var ViewType = exports('ViewType', /*#__PURE__*/function (ViewType) {
        ViewType["Page"] = "Page";
        ViewType["Paper"] = "Paper";
        ViewType["PaperAll"] = "PaperAll";
        ViewType["Pop"] = "Pop";
        ViewType["Top"] = "Top";
        return ViewType;
      }({}));
      var ViewState = /*#__PURE__*/function (ViewState) {
        ViewState[ViewState["BeforeShow"] = 0] = "BeforeShow";
        ViewState[ViewState["Showing"] = 1] = "Showing";
        ViewState[ViewState["Showed"] = 2] = "Showed";
        ViewState[ViewState["BeforeHide"] = 3] = "BeforeHide";
        ViewState[ViewState["Hiding"] = 4] = "Hiding";
        ViewState[ViewState["Hid"] = 5] = "Hid";
        return ViewState;
      }(ViewState || {});
      var Group = {
        id: 'BaseView',
        name: 'Settings',
        displayOrder: -Infinity,
        style: 'section'
      };

      // 记录PaperAll的owner
      var PaperAllToOwner = new Map();
      var BaseView = exports('default', (_dec = ccclass('BaseView'), _dec2 = disallowMultiple(), _dec3 = property({
        group: Group,
        type: HideEvent,
        tooltip: '何种模式隐藏节点\n1、destroy: 销毁UI并释放对应的所有资源\n2、active: 缓存UI并加速下次的打开速度'
      }), _dec4 = property({
        group: Group,
        tooltip: '是否是单例模式\n1、单例模式: UI只会被创建一次(onShow会被重复触发)\n2、非单例模式: UI会被重复创建'
      }), _dec5 = property({
        group: Group,
        tooltip: '是否捕获焦点<响应onLostFocus和onFocus>\n1、当一个捕获焦点的UI处于最上层并展示时\n下层的UI永远不会响应focus事件',
        visible: function visible() {
          if (this.is3D()) return false;
          return true;
        }
      }), _dec6 = property({
        group: Group,
        tooltip: '是否需要底层遮罩',
        visible: function visible() {
          if (this.is3D()) return false;
          if (this.isPage()) return false;
          return true;
        }
      }), _dec7 = property({
        group: Group,
        tooltip: '是否禁止点击事件向下层传递',
        visible: function visible() {
          if (this.is3D()) return false;
          return true;
        }
      }), _dec(_class = _dec2(_class = (_class2 = (_class3 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(BaseView, _Component);
        function BaseView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          // 是否被调用过
          _this._base_view_created = false;
          // view状态
          _this._base_view_state = ViewState.Hid;
          // 当前view的名字
          _this._base_view_name = js.getClassName(_assertThisInitialized(_this));
          // 触摸是否有效
          _this._base_touch_enable = true;
          // show/hide等待列表
          _this._base_show_hide_delays = [];
          // 子界面融合相关
          _this._base_mini_show = new Set();
          _initializerDefineProperty(_this, "_hideEvent", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_singleton", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_captureFocus", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_shade", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_blockInput", _descriptor5, _assertThisInitialized(_this));
          /**
           * 子界面(只能用于Page)
           */
          _this.miniViews = [];
          return _this;
        }
        /**
         * @deprecated 废弃，请使用BindController代替BindControl
         */
        BaseView.BindControl = function BindControl(Control) {
          return /*#__PURE__*/function (_BaseView) {
            _inheritsLoose(BindControl, _BaseView);
            function BindControl() {
              return _BaseView.apply(this, arguments) || this;
            }
            _createClass(BindControl, [{
              key: "control",
              get: function get() {
                return Control ? Control.inst : null;
              }
            }]);
            return BindControl;
          }(BaseView);
        }

        /**
         * 给UI绑定一个控制器，绑定后可以通过this.controller访问，并能访问一些内部方法(emit、on、once、off、targetOff)
         */;
        BaseView.BindController = function BindController(Controller) {
          var _dec8, _class4;
          var BindController = (_dec8 = disallowMultiple(), _dec8(_class4 = /*#__PURE__*/function (_BaseView2) {
            _inheritsLoose(BindController, _BaseView2);
            function BindController() {
              return _BaseView2.apply(this, arguments) || this;
            }
            _createClass(BindController, [{
              key: "controller",
              get: function get() {
                return Controller ? Controller.inst : null;
              }
            }]);
            return BindController;
          }(BaseView)) || _class4);
          return BindController;
        }

        /**
         * 是否有效，如果返回false的话，app.manager.ui.show会触发onError回调
         */;
        BaseView.isViewValid = function isViewValid(next, data) {
          next && next(true);
        };
        BaseView.isPage = function isPage(name) {
          return name.indexOf(ViewType.Page) === 0;
        };
        BaseView.isPaper = function isPaper(name) {
          return name.indexOf(ViewType.Paper) === 0;
        };
        BaseView.isPaperAll = function isPaperAll(name) {
          return name.indexOf(ViewType.PaperAll) === 0;
        };
        BaseView.isPop = function isPop(name) {
          return name.indexOf(ViewType.Pop) === 0;
        };
        BaseView.isTop = function isTop(name) {
          return name.indexOf(ViewType.Top) === 0;
        };
        var _proto = BaseView.prototype;
        _proto.isPage = function isPage() {
          return BaseView.isPage(this._base_view_name);
        };
        _proto.isPaper = function isPaper() {
          return BaseView.isPaper(this._base_view_name);
        };
        _proto.isPaperAll = function isPaperAll() {
          return BaseView.isPaperAll(this._base_view_name);
        };
        _proto.isPop = function isPop() {
          return BaseView.isPop(this._base_view_name);
        };
        _proto.isTop = function isTop() {
          return BaseView.isTop(this._base_view_name);
        };
        _proto.is2D = function is2D() {
          return !this.is3D();
        };
        _proto.is3D = function is3D() {
          if (this.node.parent instanceof Scene) {
            return this.node.parent.name === this.viewName;
          }
          var scene = director.getScene();
          return scene.name === this.viewName;
        };
        /**
         * 是否show了某个子界面
         */
        _proto.isMiniViewShow = function isMiniViewShow(name) {
          return this._base_mini_show.has(name);
        }

        // 用来初始化组件或节点的一些属性，当该组件被第一次添加到节点上或用户点击了它的 Reset 菜单时调用。这个回调只会在编辑器下调用。
        ;

        _proto.resetInEditor = function resetInEditor() {}

        /**
         * 设置是否可点击
         */;
        _proto.setTouchEnabled = function setTouchEnabled(enabled) {
          if (enabled === void 0) {
            enabled = true;
          }
          this._base_touch_enable = !!enabled;
        };
        _proto.blockPropagation = function blockPropagation(event) {
          if (this.blockInput) {
            event.propagationStopped = true;
            if (event.type === Node.EventType.TOUCH_START) {
              this.log('阻断触摸向下层传递');
            }
          }
        };
        _proto.stopPropagation = function stopPropagation(event) {
          if (!this._base_touch_enable) {
            event.propagationStopped = true;
            event.propagationImmediateStopped = true;
            if (event.type === Node.EventType.TOUCH_START) {
              this.log('屏蔽触摸');
            }
          }
        };
        _proto.onBaseViewCreate = function onBaseViewCreate() {
          var _this2 = this;
          if (this.is3D()) return;
          var uiTransform = this.getComponent(UITransform);
          if (uiTransform) uiTransform.hitTest = function () {
            if (_this2.blockInput) {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }
              return UITransform.prototype.hitTest.apply(uiTransform, args);
            }
            return false;
          };
          for (var i = 0; i < BlockEvents.length; i++) {
            this.node.on(BlockEvents[i], this.blockPropagation, this);
            this.node.on(BlockEvents[i], this.stopPropagation, this, true);
          }
        }

        /**
         * 关闭所有子界面
         */;
        _proto.hideAllMiniViews = function hideAllMiniViews(data) {
          this._base_mini_show.forEach(function (name) {
            Core.inst.manager.ui.hide({
              name: name,
              data: data
            });
          });
          this._base_mini_show.clear();
        }

        /**
         * 关闭子界面
         */;
        _proto.hideMiniViews = function hideMiniViews(_ref) {
          var _this3 = this;
          var data = _ref.data,
            views = _ref.views;
          if (this.miniViews.length === 0) return;
          if (views.length === 0) return;
          views.forEach(function (name) {
            if (_this3.miniViews.indexOf(name) === -1) {
              _this3.warn('hideMiniViews', name + "\u4E0D\u5728miniViews\u4E2D, \u5DF2\u8DF3\u8FC7");
              return;
            }

            // 验证
            if (!_this3._base_mini_show.has(name)) return;
            // 关闭
            Core.inst.manager.ui.hide({
              name: name,
              data: data
            });
          });
          // TODO 手动刷新一下Paper下的UI顺序(原因是原生环境，显示层级正确但触摸层级可能会不正确)
          Core.inst.manager.ui.sortUserInterface('Paper');
        }

        /**
         * 展示子界面
         */;
        _proto.showMiniViews = function showMiniViews(_ref2) {
          var _this4 = this;
          var data = _ref2.data,
            views = _ref2.views,
            onShow = _ref2.onShow,
            onHide = _ref2.onHide,
            onFinish = _ref2.onFinish;
          if (views.length === 0) return false;
          if (this.typeName !== ViewType.Page) {
            this.warn('showMiniViews', '仅支持Page类型');
            return false;
          }
          var task = Core.inst.lib.task.createSync();
          var _loop = function _loop() {
            var names = views[index];
            if (names instanceof Array) {
              task.add(function (next) {
                _this4.createMixMiniViewsTask(names, data, onShow, onHide).start(next);
              });
            } else {
              task.add(function (next) {
                _this4.createMixMiniViewsTask([names], data, onShow, onHide).start(next);
              });
            }
          };
          for (var index = 0; index < views.length; index++) {
            _loop();
          }
          task.start(onFinish && function () {
            onFinish();
          });
          return true;
        }

        /**
         * 创建自定义加载任务
         */;
        _proto.createMixMiniViewsTask = function createMixMiniViewsTask(views, data, _onShow, _onHide) {
          var _this5 = this;
          if (views === void 0) {
            views = [];
          }
          var task = Core.inst.lib.task.createSync();
          if (this.typeName !== ViewType.Page) {
            this.warn('showMiniViews', '仅支持Page类型');
            return task;
          }
          views = views.filter(function (name) {
            if (!name) {
              _this5.warn('showMiniViews', 'name不能为空');
              return false;
            }
            if (_this5._base_mini_show.has(name)) {
              _this5.warn('showMiniViews', "\u91CD\u590D\u878D\u5408" + name + ", \u5DF2\u8DF3\u8FC7");
              return false;
            }
            if (_this5.miniViews.indexOf(name) === -1) {
              _this5.warn('showMiniViews', name + "\u4E0D\u5728miniViews\u4E2D, \u5DF2\u8DF3\u8FC7");
              return false;
            }
            if (name.indexOf(_this5.baseName) !== ViewType.Paper.length && name.indexOf(ViewType.PaperAll) !== 0) {
              _this5.warn('showMiniViews', name + "\u4E0D\u5C5E\u4E8E\u5F53\u524DPage, \u5DF2\u8DF3\u8FC7");
              return false;
            }
            _this5._base_mini_show.add(name);
            return true;
          });
          if (views.length === 0) return task;

          // 先load全部
          task.add(function (next) {
            var aSync = Core.inst.lib.task.createASync();
            views.forEach(function (name) {
              aSync.add(function (next, retry) {
                _this5.log("\u4E0B\u8F7D\u5B50\u9875\u9762: " + name);
                Core.inst.manager.ui.load(name, function (result) {
                  result ? next() : _this5.scheduleOnce(retry, 0.1);
                });
              });
            });
            aSync.start(next);
          });

          // 再show全部
          task.add(function (next) {
            var aSync = Core.inst.lib.task.createASync();
            views.forEach(function (name) {
              aSync.add(function (next) {
                var _this5$_base_mini_sho;
                if (!((_this5$_base_mini_sho = _this5._base_mini_show) != null && _this5$_base_mini_sho.has(name))) return next();
                _this5.log("\u5C55\u793A\u5B50\u9875\u9762: " + name);
                // 是PaperAll,设置owner
                if (BaseView.isPaperAll(name)) {
                  PaperAllToOwner.set(name, _this5.uuid);
                }
                Core.inst.manager.ui.show({
                  name: name,
                  data: data,
                  silent: true,
                  attr: {
                    zIndex: _this5.miniViews.indexOf(name)
                  },
                  onShow: function onShow(result) {
                    if (_onShow) _onShow(name, result);
                    next();
                  },
                  onHide: function onHide(result) {
                    var _this5$_base_mini_sho2;
                    if (BaseView.isPaperAll(name)) {
                      // 验证PaperAll是否属于当前Page
                      var owner = PaperAllToOwner.get(name);
                      if (owner && owner === _this5.uuid) {
                        PaperAllToOwner["delete"](name);
                      }
                    }
                    (_this5$_base_mini_sho2 = _this5._base_mini_show) == null || _this5$_base_mini_sho2["delete"](name);
                    if (_onHide) _onHide(name, result);
                  },
                  onError: function onError(result, code) {
                    var _this5$_base_mini_sho3;
                    if (code === Core.inst.Manager.UI.ErrorCode.LoadError) return true;
                    if (BaseView.isPaperAll(name)) {
                      // 验证PaperAll是否属于当前Page
                      var owner = PaperAllToOwner.get(name);
                      if (owner && owner === _this5.uuid) {
                        PaperAllToOwner["delete"](name);
                        Core.inst.manager.ui.hide({
                          name: name
                        });
                      }
                    }
                    (_this5$_base_mini_sho3 = _this5._base_mini_show) == null || _this5$_base_mini_sho3["delete"](name);
                    _this5.warn('忽略子页面', name, result);
                    next();
                  }
                });
              });
            });
            aSync.start(function () {
              // TODO 手动刷新一下Paper下的UI顺序(原因是原生环境，显示层级正确但触摸层级可能会不正确)
              Core.inst.manager.ui.sortUserInterface('Paper');
              next();
            });
          });
          return task;
        }

        /**
         * 设置节点属性
         */;
        _proto.setNodeAttr = function setNodeAttr(attr) {
          if (!attr) return;
          if (typeof attr.zIndex === 'number') {
            // 以z坐标来代替2.x时代的zIndex
            this.node.setPosition(this.node.position.x, this.node.position.y, attr.zIndex);
          }
          if (typeof attr.siblingIndex === 'number') {
            this.node.setSiblingIndex(attr.siblingIndex);
          }
        };
        _proto.show = function show(data, attr, onShow, onHide, beforeShow) {
          var _this6 = this;
          // 当前show操作需要等待其它流程
          if (this._base_view_state !== ViewState.Showed && this._base_view_state !== ViewState.Hid) {
            this._base_show_hide_delays.push(this.show.bind(this, data, attr, onShow, onHide, beforeShow));
            return;
          }

          // show流程
          var changeState = this._base_view_state === ViewState.Hid;
          if (changeState) this._base_view_state = ViewState.BeforeShow;
          var next = function next(error) {
            if (!error) {
              // 所有Paper只会是单例，而且所有Paper都不允许被当前Page重复show
              // 但PaprAll比较特殊，会被不同的Page使用，在PaperAll被不同的Page重复show时，清除之前的onHide
              if (_this6.isPaperAll()) _this6.node.emit('onHide');
            }
            beforeShow && beforeShow(error);
            if (!error) {
              // 设置展示中
              if (changeState) _this6._base_view_state = ViewState.Showing;
              onHide && _this6.node.once('onHide', onHide);

              // 触发onCreate
              if (_this6._base_view_created === false) {
                _this6._base_view_created = true;
                _this6.onBaseViewCreate();
              }

              // 设置属性
              _this6.setNodeAttr(attr);

              // 触发onLoad、onEnable
              if (_this6.node.active !== true) {
                _this6.node.active = true;
              }
              _this6.log('onShow');
              var _result = null;
              try {
                _result = _this6.onShow(data);
              } catch (err) {
                _this6.onError();
                console.error(err);
              }

              // 设置遮罩，触发focus逻辑
              Core.inst.manager.ui.refreshShade();
              try {
                onShow && onShow(_result);
                _this6.node.emit('onShow', _result);
                Core.inst.manager.ui.emit(_this6._base_view_name, {
                  event: 'onShow',
                  result: _result
                });
                Core.inst.manager.ui.emit('onShow', {
                  name: _this6._base_view_name,
                  result: _result
                });
              } catch (err) {
                console.error(err);
              }
              if (changeState) _this6._base_view_state = ViewState.Showed;
            } else {
              if (changeState) _this6._base_view_state = ViewState.Hid;
            }
            if (_this6._base_show_hide_delays.length > 0) {
              _this6._base_show_hide_delays.shift()();
            }
          };
          this.log('beforeShow');
          var isNextCalled = false;
          this.beforeShow(function (error) {
            if (isNextCalled) return _this6.error('beforeShow', 'next被重复调用');
            isNextCalled = true;
            next(error || null);
          }, data);
        };
        _proto.hide = function hide(
        //@ts-ignore
        data, onHide) {
          // 当前hide操作需要等待其它流程
          if (this._base_view_state !== ViewState.Hid && this._base_view_state !== ViewState.Showed) {
            this._base_show_hide_delays.push(this.hide.bind(this, data, onHide));
            return;
          }

          // hide流程
          var changeState = this._base_view_state === ViewState.Showed;
          if (changeState) this._base_view_state = ViewState.BeforeHide;
          this.log('beforeHide');
          var error = this.beforeHide(data);
          if (!error) {
            this.log('onHide');
            if (changeState) this._base_view_state = ViewState.Hiding;
            this.hideAllMiniViews(data);
            var _result2 = null;
            try {
              _result2 = this.onHide(data);
            } catch (error) {
              console.error(error);
            }
            try {
              onHide && onHide(_result2);
              this.node.emit('onHide', _result2);
              Core.inst.manager.ui.emit(this._base_view_name, {
                event: 'onHide',
                result: _result2
              });
              Core.inst.manager.ui.emit('onHide', {
                name: this._base_view_name,
                result: _result2
              });
            } catch (error) {
              console.error(error);
            }
            if (changeState) this._base_view_state = ViewState.Hid;
            if (this.hideEvent === HideEvent.active) {
              this.node.active = false;
            } else if (this.hideEvent === HideEvent.destroy) {
              Core.inst.manager.ui.release(this);
            }
            Core.inst.manager.ui.refreshShade();
          } else {
            if (changeState) this._base_view_state = ViewState.Showed;
          }
          if (this._base_show_hide_delays.length > 0) {
            this._base_show_hide_delays.shift()();
          }
        };
        _proto.focus = function focus(boo) {
          var result = null;
          var event = '';
          if (boo) {
            result = this.onFocus();
            event = 'onFocus';
          } else {
            result = this.onLostFocus();
            event = 'onLostFocus';
          }
          this.node.emit(event, result);
          Core.inst.manager.ui.emit(this._base_view_name, {
            event: event,
            result: result
          });
          Core.inst.manager.ui.emit(event, {
            name: this._base_view_name,
            result: result
          });
        }

        /**
         * 加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * @param callback 回调
         * this.loadRes('Bag', Prefab, function(asset){})
         */;
        _proto.loadRes = function loadRes(path, type, callback) {
          Core.inst.manager.ui.loadRes(this, path, type, callback);
        }

        /**
         * 预加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * this.preloadRes('Bag', Prefab)
         */;
        _proto.preloadRes = function preloadRes(path, type) {
          Core.inst.manager.ui.preloadRes(this, path, type);
        }

        /**
         * 加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * @param callback 回调
         * this.loadResDir('Bag', Prefab, function(asset){})
         */;
        _proto.loadResDir = function loadResDir(path, type, callback) {
          Core.inst.manager.ui.loadResDir(this, path, type, callback);
        }

        /**
         * 预加载UI目录下resources里面的资源
         * @param path 相对于resources的路径
         * this.preloadResDir('Bag', Prefab)
         */;
        _proto.preloadResDir = function preloadResDir(path, type) {
          Core.inst.manager.ui.preloadResDir(this, path, type);
        }

        /**
         * 设置字体资源
         * @param path UI的resources目录下的相对路径
         */;
        _proto.setFont = function setFont(target, path, onComplete) {
          this.loadRes(path, Font, function (font) {
            if (!font || !isValid(target)) {
              return onComplete && onComplete(false);
            }
            target.font = font;
            onComplete && onComplete(true);
          });
        }

        /**
         * 设置Spine资源
         * @param path UI的resources目录下的相对路径
         */;
        _proto.setSpine = function setSpine(target, path, onComplete) {
          this.loadRes(path, sp.SkeletonData, function (skeletonData) {
            if (!skeletonData || !isValid(target)) {
              return onComplete && onComplete(false);
            }
            target.skeletonData = skeletonData;
            onComplete && onComplete(true);
          });
        }

        /**
         * 设置图片资源
         * @param path UI的resources目录下的相对路径(必须以/spriteFrame结尾)
         * 
         * @example
         * setSprite(sprite, 'img/a/spriteFrame', onComplete:(succ)=>{})
         */;
        _proto.setSprite = function setSprite(target, path, onComplete) {
          this.loadRes(path, SpriteFrame, function (spriteFrame) {
            if (!spriteFrame || !isValid(target)) {
              return onComplete && onComplete(false);
            }
            target.spriteFrame = spriteFrame;
            onComplete && onComplete(true);
          });
        }

        /**打印日志 */;
        //////////////以下为可重写//////////////
        /**
        * 展示
        * @param data 传递给onShow的参数
        * @returns 
        */
        _proto.onShow = function onShow(data) {
          return data;
        }

        /**
         * 隐藏
         * @param data 传递给onHide的参数
         * @returns 
         */;
        _proto.onHide = function onHide(data) {
          return data;
        }

        /**
         * 失去焦点
         * @returns 
         */;
        _proto.onLostFocus = function onLostFocus() {
          return true;
        }

        /**
         * 获得焦点
         * @returns 
         */;
        _proto.onFocus = function onFocus() {
          return true;
        }

        /**
         * onShow前调用
         * @param next 回调，传递的error不为空时，表示错误，onShow不会执行
         * @param data 传递给onShow的参数
         */;
        _proto.beforeShow = function beforeShow(next, data) {
          next(null);
        }

        /**
         * hide前调用
         * @param data 传递给onHide的参数
         * @returns 如果返回字符串，则表示错误信息
         */;
        _proto.beforeHide = function beforeHide(data) {
          return null;
        }

        /**
         * onShow报错会执行
         */;
        _proto.onError = function onError() {
          return;
        }

        /**
         * 背景遮照的参数
         */;
        _proto.onShade = function onShade() {
          return {};
        };
        _createClass(BaseView, [{
          key: "hideEvent",
          get: function get() {
            if (this.is3D()) return HideEvent.destroy;
            return this._hideEvent;
          },
          set: function set(value) {
            if (this.is3D() && value !== HideEvent.destroy) {
              this.log('3D模式下只能是destroy模式');
              return;
            }
            this._hideEvent = value;
          }
        }, {
          key: "singleton",
          get: function get() {
            if (this.isPage()) return true;
            if (this.isPaperAll()) return true;
            if (this.isPaper()) return true;
            return this._singleton && this.constructor._singleton;
          },
          set: function set(value) {
            if (!value) {
              if (this.isPage()) {
                this.log('Page只能是单例模式');
                return;
              }
              if (this.isPaper()) {
                this.log('Paper只能是单例模式');
                return;
              }
            }
            this._singleton = this.constructor._singleton = !!value;
          }
        }, {
          key: "captureFocus",
          get: function get() {
            if (this.is3D()) return false;
            return this._captureFocus;
          },
          set: function set(value) {
            if (value && this.is3D()) {
              this.log('只有2D模式下才可以捕获焦点');
              return;
            }
            if (this._captureFocus !== value) {
              var _Core$inst;
              this._captureFocus = value;
              (_Core$inst = Core.inst) == null || (_Core$inst = _Core$inst.manager) == null || (_Core$inst = _Core$inst.ui) == null || _Core$inst.refreshShade();
            } else {
              this._captureFocus = value;
            }
          }
        }, {
          key: "shade",
          get: function get() {
            if (this.is3D()) return false;
            if (this.isPage()) return false;
            return this._shade;
          },
          set: function set(value) {
            if (value) {
              if (this.is3D()) {
                this.log('只有2D模式下才可以设置底层遮罩');
                return;
              }
              if (this.isPage()) {
                this.log('Page不可以设置底层遮罩');
                return;
              }
            }
            if (this._shade !== value) {
              var _Core$inst2;
              this._shade = value;
              (_Core$inst2 = Core.inst) == null || (_Core$inst2 = _Core$inst2.manager) == null || (_Core$inst2 = _Core$inst2.ui) == null || _Core$inst2.refreshShade();
            } else {
              this._shade = value;
            }
          }
        }, {
          key: "blockInput",
          get: function get() {
            if (this.is3D()) return false;
            return this._blockInput;
          },
          set: function set(value) {
            if (value && this.is3D()) {
              this.log('只有2D模式下才可以设置阻断点击事件');
              return;
            }
            this._blockInput = value;
          }
        }, {
          key: "viewName",
          get:
          /**
           * 当前view名字
           */
          function get() {
            return this._base_view_name;
          }

          /**
           * 基础名字, 如PageHome => Home
           */
        }, {
          key: "baseName",
          get: function get() {
            return this._base_view_name.slice(this.typeName.length);
          }

          /**
           * 类型名字, 如PageHome => Page
           */
        }, {
          key: "typeName",
          get: function get() {
            if (this._base_view_name.indexOf(ViewType.Paper) === 0) return ViewType.Paper;
            if (this._base_view_name.indexOf(ViewType.Pop) === 0) return ViewType.Pop;
            if (this._base_view_name.indexOf(ViewType.Top) === 0) return ViewType.Top;
            return ViewType.Page;
          }

          /**
           * 是否是单例模式
           */
        }, {
          key: "isSingleton",
          get: function get() {
            return this.singleton;
          }

          /**
           * 是否捕获焦点
           */
        }, {
          key: "isCaptureFocus",
          get: function get() {
            return this.captureFocus;
          }

          /**
           * 是否需要遮罩
           */
        }, {
          key: "isNeedShade",
          get: function get() {
            return this.shade;
          }

          /**
           * 是否展示了(不为Hid状态)
           */
        }, {
          key: "isShow",
          get: function get() {
            return this._base_view_state != ViewState.Hid;
          }
        }, {
          key: "log",
          get: function get() {
            return Logger.create('log', '#1e90ff', "[" + this._base_view_name + "] [LOG]");
          }

          /**打印警告 */
        }, {
          key: "warn",
          get: function get() {
            return Logger.create('warn', '#ff7f50', "[" + this._base_view_name + "] [WARN]");
          }

          /**打印错误 */
        }, {
          key: "error",
          get: function get() {
            return Logger.create('error', '#ff4757', "[" + this._base_view_name + "] [ERROR]");
          }
        }]);
        return BaseView;
      }(Component), _class3._singleton = true, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_hideEvent", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return HideEvent.destroy;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "hideEvent", [_dec3], Object.getOwnPropertyDescriptor(_class2.prototype, "hideEvent"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_singleton", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "singleton", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "singleton"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_captureFocus", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "captureFocus", [_dec5], Object.getOwnPropertyDescriptor(_class2.prototype, "captureFocus"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_shade", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "shade", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "shade"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_blockInput", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "blockInput", [_dec7], Object.getOwnPropertyDescriptor(_class2.prototype, "blockInput"), _class2.prototype)), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/Core.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './debug.ts', './logger.ts', './storage.ts', './task.ts'], function (exports) {
  var _createClass, cclegacy, EventTarget, director, Director, js, debug, logger, storage, task;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      EventTarget = module.EventTarget;
      director = module.director;
      Director = module.Director;
      js = module.js;
    }, function (module) {
      debug = module;
    }, function (module) {
      logger = module.default;
    }, function (module) {
      storage = module.default;
    }, function (module) {
      task = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "b4a49Ny+p5ESLkbKbyXAdn/", "Core", undefined);
      var EventType = /*#__PURE__*/function (EventType) {
        EventType["EVENT_APPINIT_FINISHED"] = "EVENT_APPINIT_FINISHED";
        EventType["EVENT_SYS_MANAGER_INITED"] = "EVENT_SYS_MANAGER_INITED";
        EventType["EVENT_USER_MANAGER_INITED"] = "EVENT_USER_MANAGER_INITED";
        EventType["EVENT_MANAGER_INITED"] = "EVENT_MANAGER_INITED";
        EventType["EVENT_MANAGER_FINISHED"] = "EVENT_MANAGER_FINISHED";
        return EventType;
      }(EventType || {});
      var Lib = {
        task: task,
        storage: storage,
        debug: debug,
        logger: logger
      };
      var Config = {};
      var Data = {};
      var Store = {};
      var controller = {};
      var Controller = {};
      var Manager = {};
      var manager = {};
      var eventTarget = new EventTarget();
      var EventMap = {};
      director.on(Director.EVENT_RESET, function () {
        js.clear(Config);
        js.clear(Data);
        js.clear(Store);
        js.clear(controller);
        js.clear(Controller);
        js.clear(Manager);
        js.clear(manager);
        EventMap = {};
      });
      var Core = exports('default', /*#__PURE__*/function () {
        function Core() {
          this.lib = Lib;
          this.config = null;
          this.data = null;
          this.store = null;
          this.Controller = null;
          this.controller = null;
          this.Manager = null;
          this.manager = null;
          this.config = Config;
          this.data = Data;
          this.store = Store;
          this.Controller = Controller;
          this.controller = controller;
          this.Manager = Manager;
          this.manager = manager;
          {
            if (this.constructor !== Core && !js.getClassById('App')) {
              js.setClassAlias(this.constructor, 'App');
            }
          }
        }
        var _proto = Core.prototype;
        _proto.on = function on(event, callback, target) {
          if (EventMap[event]) callback.call(target);
          eventTarget.on(event, callback, target);
        };
        _proto.once = function once(event, callback, target) {
          if (EventMap[event]) {
            callback.call(target);
          } else {
            eventTarget.once(event, callback, target);
          }
        };
        _proto.off = function off(event, callback, target) {
          eventTarget.off(event, callback, target);
        };
        _proto.targetOff = function targetOff(target) {
          eventTarget.targetOff(target);
        }

        /**
         * 请不要手动调用
         */;
        Core.emit = function emit(event) {
          EventMap[event] = true;
          for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }
          eventTarget.emit.apply(eventTarget, [event].concat(args));
        };
        _createClass(Core, null, [{
          key: "inst",
          get: function get() {
            if (!this._inst) this._inst = new Core();
            return this._inst;
          }
        }]);
        return Core;
      }());
      Core.EventType = EventType;
      Core._inst = void 0;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/debug-view-runtime-control.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Node, Color, Canvas, UITransform, instantiate, Label, RichText, Toggle, Button, director, Component;
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
      Color = module.Color;
      Canvas = module.Canvas;
      UITransform = module.UITransform;
      instantiate = module.instantiate;
      Label = module.Label;
      RichText = module.RichText;
      Toggle = module.Toggle;
      Button = module.Button;
      director = module.director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "b2bd1+njXxJxaFY3ymm06WU", "debug-view-runtime-control", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var DebugViewRuntimeControl = exports('DebugViewRuntimeControl', (_dec = ccclass('internal.DebugViewRuntimeControl'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(DebugViewRuntimeControl, _Component);
        function DebugViewRuntimeControl() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "compositeModeToggle", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "singleModeToggle", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "EnableAllCompositeModeButton", _descriptor3, _assertThisInitialized(_this));
          _this._single = 0;
          _this.strSingle = ['No Single Debug', 'Vertex Color', 'Vertex Normal', 'Vertex Tangent', 'World Position', 'Vertex Mirror', 'Face Side', 'UV0', 'UV1', 'UV Lightmap', 'Project Depth', 'Linear Depth', 'Fragment Normal', 'Fragment Tangent', 'Fragment Binormal', 'Base Color', 'Diffuse Color', 'Specular Color', 'Transparency', 'Metallic', 'Roughness', 'Specular Intensity', 'IOR', 'Direct Diffuse', 'Direct Specular', 'Direct All', 'Env Diffuse', 'Env Specular', 'Env All', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Fresnel', 'Direct Transmit Diffuse', 'Direct Transmit Specular', 'Env Transmit Diffuse', 'Env Transmit Specular', 'Transmit All', 'Direct Internal Specular', 'Env Internal Specular', 'Internal All', 'Fog'];
          _this.strComposite = ['Direct Diffuse', 'Direct Specular', 'Env Diffuse', 'Env Specular', 'Emissive', 'Light Map', 'Shadow', 'AO', 'Normal Map', 'Fog', 'Tone Mapping', 'Gamma Correction', 'Fresnel', 'Transmit Diffuse', 'Transmit Specular', 'Internal Specular', 'TT'];
          _this.strMisc = ['CSM Layer Coloration', 'Lighting With Albedo'];
          _this.compositeModeToggleList = [];
          _this.singleModeToggleList = [];
          _this.miscModeToggleList = [];
          _this.textComponentList = [];
          _this.labelComponentList = [];
          _this.textContentList = [];
          _this.hideButtonLabel = void 0;
          _this._currentColorIndex = 0;
          _this.strColor = ['<color=#ffffff>', '<color=#000000>', '<color=#ff0000>', '<color=#00ff00>', '<color=#0000ff>'];
          _this.color = [Color.WHITE, Color.BLACK, Color.RED, Color.GREEN, Color.BLUE];
          return _this;
        }
        var _proto = DebugViewRuntimeControl.prototype;
        _proto.start = function start() {
          // get canvas resolution
          var canvas = this.node.parent.getComponent(Canvas);
          if (!canvas) {
            console.error('debug-view-runtime-control should be child of Canvas');
            return;
          }
          var uiTransform = this.node.parent.getComponent(UITransform);
          var halfScreenWidth = uiTransform.width * 0.5;
          var halfScreenHeight = uiTransform.height * 0.5;
          var x = -halfScreenWidth + halfScreenWidth * 0.1,
            y = halfScreenHeight - halfScreenHeight * 0.1;
          var width = 200,
            height = 20;

          // new nodes
          var miscNode = this.node.getChildByName('MiscMode');
          var buttonNode = instantiate(miscNode);
          buttonNode.parent = this.node;
          buttonNode.name = 'Buttons';
          var titleNode = instantiate(miscNode);
          titleNode.parent = this.node;
          titleNode.name = 'Titles';

          // title
          for (var i = 0; i < 2; i++) {
            var newLabel = instantiate(this.EnableAllCompositeModeButton.getChildByName('Label'));
            newLabel.setPosition(x + (i > 0 ? 50 + width * 2 : 150), y, 0.0);
            newLabel.setScale(0.75, 0.75, 0.75);
            newLabel.parent = titleNode;
            var _labelComponent = newLabel.getComponent(Label);
            _labelComponent.string = i ? '----------Composite Mode----------' : '----------Single Mode----------';
            _labelComponent.color = Color.WHITE;
            _labelComponent.overflow = 0;
            this.labelComponentList[this.labelComponentList.length] = _labelComponent;
          }
          y -= height;
          // single
          var currentRow = 0;
          for (var _i = 0; _i < this.strSingle.length; _i++, currentRow++) {
            if (_i === this.strSingle.length >> 1) {
              x += width;
              currentRow = 0;
            }
            var newNode = _i ? instantiate(this.singleModeToggle) : this.singleModeToggle;
            newNode.setPosition(x, y - height * currentRow, 0.0);
            newNode.setScale(0.5, 0.5, 0.5);
            newNode.parent = this.singleModeToggle.parent;
            var textComponent = newNode.getComponentInChildren(RichText);
            textComponent.string = this.strSingle[_i];
            this.textComponentList[this.textComponentList.length] = textComponent;
            this.textContentList[this.textContentList.length] = textComponent.string;
            newNode.on(Toggle.EventType.TOGGLE, this.toggleSingleMode, this);
            this.singleModeToggleList[_i] = newNode;
          }
          x += width;
          // buttons
          this.EnableAllCompositeModeButton.setPosition(x + 15, y, 0.0);
          this.EnableAllCompositeModeButton.setScale(0.5, 0.5, 0.5);
          this.EnableAllCompositeModeButton.on(Button.EventType.CLICK, this.enableAllCompositeMode, this);
          this.EnableAllCompositeModeButton.parent = buttonNode;
          var labelComponent = this.EnableAllCompositeModeButton.getComponentInChildren(Label);
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var changeColorButton = instantiate(this.EnableAllCompositeModeButton);
          changeColorButton.setPosition(x + 90, y, 0.0);
          changeColorButton.setScale(0.5, 0.5, 0.5);
          changeColorButton.on(Button.EventType.CLICK, this.changeTextColor, this);
          changeColorButton.parent = buttonNode;
          labelComponent = changeColorButton.getComponentInChildren(Label);
          labelComponent.string = 'TextColor';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          var HideButton = instantiate(this.EnableAllCompositeModeButton);
          HideButton.setPosition(x + 200, y, 0.0);
          HideButton.setScale(0.5, 0.5, 0.5);
          HideButton.on(Button.EventType.CLICK, this.hideUI, this);
          HideButton.parent = this.node.parent;
          labelComponent = HideButton.getComponentInChildren(Label);
          labelComponent.string = 'Hide UI';
          this.labelComponentList[this.labelComponentList.length] = labelComponent;
          this.hideButtonLabel = labelComponent;

          // misc
          y -= 40;
          for (var _i2 = 0; _i2 < this.strMisc.length; _i2++) {
            var _newNode = instantiate(this.compositeModeToggle);
            _newNode.setPosition(x, y - height * _i2, 0.0);
            _newNode.setScale(0.5, 0.5, 0.5);
            _newNode.parent = miscNode;
            var _textComponent = _newNode.getComponentInChildren(RichText);
            _textComponent.string = this.strMisc[_i2];
            this.textComponentList[this.textComponentList.length] = _textComponent;
            this.textContentList[this.textContentList.length] = _textComponent.string;
            var toggleComponent = _newNode.getComponent(Toggle);
            toggleComponent.isChecked = _i2 ? true : false;
            _newNode.on(Toggle.EventType.TOGGLE, _i2 ? this.toggleLightingWithAlbedo : this.toggleCSMColoration, this);
            this.miscModeToggleList[_i2] = _newNode;
          }

          // composite
          y -= 150;
          for (var _i3 = 0; _i3 < this.strComposite.length; _i3++) {
            var _newNode2 = _i3 ? instantiate(this.compositeModeToggle) : this.compositeModeToggle;
            _newNode2.setPosition(x, y - height * _i3, 0.0);
            _newNode2.setScale(0.5, 0.5, 0.5);
            _newNode2.parent = this.compositeModeToggle.parent;
            var _textComponent2 = _newNode2.getComponentInChildren(RichText);
            _textComponent2.string = this.strComposite[_i3];
            this.textComponentList[this.textComponentList.length] = _textComponent2;
            this.textContentList[this.textContentList.length] = _textComponent2.string;
            _newNode2.on(Toggle.EventType.TOGGLE, this.toggleCompositeMode, this);
            this.compositeModeToggleList[_i3] = _newNode2;
          }
        };
        _proto.isTextMatched = function isTextMatched(textUI, textDescription) {
          var tempText = new String(textUI);
          var findIndex = tempText.search('>');
          if (findIndex === -1) {
            return textUI === textDescription;
          } else {
            tempText = tempText.substr(findIndex + 1);
            tempText = tempText.substr(0, tempText.search('<'));
            return tempText === textDescription;
          }
        };
        _proto.toggleSingleMode = function toggleSingleMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strSingle.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strSingle[i])) {
              debugView.singleMode = i;
            }
          }
        };
        _proto.toggleCompositeMode = function toggleCompositeMode(toggle) {
          var debugView = director.root.debugView;
          var textComponent = toggle.getComponentInChildren(RichText);
          for (var i = 0; i < this.strComposite.length; i++) {
            if (this.isTextMatched(textComponent.string, this.strComposite[i])) {
              debugView.enableCompositeMode(i, toggle.isChecked);
            }
          }
        };
        _proto.toggleLightingWithAlbedo = function toggleLightingWithAlbedo(toggle) {
          var debugView = director.root.debugView;
          debugView.lightingWithAlbedo = toggle.isChecked;
        };
        _proto.toggleCSMColoration = function toggleCSMColoration(toggle) {
          var debugView = director.root.debugView;
          debugView.csmLayerColoration = toggle.isChecked;
        };
        _proto.enableAllCompositeMode = function enableAllCompositeMode(button) {
          var debugView = director.root.debugView;
          debugView.enableAllCompositeMode(true);
          for (var i = 0; i < this.compositeModeToggleList.length; i++) {
            var _toggleComponent = this.compositeModeToggleList[i].getComponent(Toggle);
            _toggleComponent.isChecked = true;
          }
          var toggleComponent = this.miscModeToggleList[0].getComponent(Toggle);
          toggleComponent.isChecked = false;
          debugView.csmLayerColoration = false;
          toggleComponent = this.miscModeToggleList[1].getComponent(Toggle);
          toggleComponent.isChecked = true;
          debugView.lightingWithAlbedo = true;
        };
        _proto.hideUI = function hideUI(button) {
          var titleNode = this.node.getChildByName('Titles');
          var activeValue = !titleNode.active;
          this.singleModeToggleList[0].parent.active = activeValue;
          this.miscModeToggleList[0].parent.active = activeValue;
          this.compositeModeToggleList[0].parent.active = activeValue;
          this.EnableAllCompositeModeButton.parent.active = activeValue;
          titleNode.active = activeValue;
          this.hideButtonLabel.string = activeValue ? 'Hide UI' : 'Show UI';
        };
        _proto.changeTextColor = function changeTextColor(button) {
          this._currentColorIndex++;
          if (this._currentColorIndex >= this.strColor.length) {
            this._currentColorIndex = 0;
          }
          for (var i = 0; i < this.textComponentList.length; i++) {
            this.textComponentList[i].string = this.strColor[this._currentColorIndex] + this.textContentList[i] + '</color>';
          }
          for (var _i4 = 0; _i4 < this.labelComponentList.length; _i4++) {
            this.labelComponentList[_i4].color = this.color[this._currentColorIndex];
          }
        };
        _proto.onLoad = function onLoad() {};
        _proto.update = function update(deltaTime) {};
        return DebugViewRuntimeControl;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "compositeModeToggle", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "singleModeToggle", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "EnableAllCompositeModeButton", [_dec4], {
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

System.register("chunks:///_virtual/debug.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports('unobservable', unobservable);
      cclegacy._RF.push({}, "c0d5do7I/BADoW7bHVLnAjr", "debug", undefined);
      /**
       * 将某个变量设置为不可观测(不可在浏览器中打印)
       * @param owner object | string | number | boolean | Array | Function | ...
       * @param callback 被观测时触发回调
       * @returns 
       */
      function unobservable(owner, callback) {
        return;
      }
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/EventManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, EventTarget, BaseManager;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      EventTarget = module.EventTarget;
    }, function (module) {
      BaseManager = module.default;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "b4ea6NEN3hCPZiqp3hRVbvU", "EventManager", undefined);
      var ccclass = _decorator.ccclass;
      var EventManager = exports('default', (_dec = ccclass('EventManager'), _dec(_class = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(EventManager, _BaseManager);
        function EventManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _this.events = new Map();
          return _this;
        }
        var _proto = EventManager.prototype;
        _proto.clear = function clear() {
          return this.events.clear();
        };
        _proto["delete"] = function _delete(rootName) {
          return this.events["delete"](rootName);
        };
        _proto.get = function get(rootName) {
          if (this.events.has(rootName)) {
            return this.events.get(rootName);
          }
          var event = new EventTarget();
          this.events.set(rootName, event);
          return event;
        };
        return EventManager;
      }(BaseManager)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/handle.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      exports({
        appInited: appInited,
        appReady: appReady,
        cccInited: cccInited,
        cccReady: cccReady
      });
      cclegacy._RF.push({}, "8afafha+81CE6rLLpM3km/u", "handle", undefined);
      /**
       * ccc除物理引擎等外的基础功能已经准备好了
       */
      function cccReady(app) {}

      /**
       * ccc全部功能都初始化完毕了
       */
      function cccInited(app) {}

      /**
       * app除了用户自定义Manager未加载外，其它都已准备好了
       */
      function appReady(app) {}

      /**
       * app全部功能都初始化完毕了
       */
      function appInited(app) {}
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmClickComponent.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Component = module.Component;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "06a62vKeqxAibN42pWEgAjY", "JmClickComponent", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JmClickComponent = exports('JmClickComponent', ccclass(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JmClickComponent, _Component);
        function JmClickComponent() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.performClick = false;
          _this.startPos = void 0;
          return _this;
        }
        var _proto = JmClickComponent.prototype;
        //记录Touch事件开始时的位置
        _proto.onEnable = function onEnable() {
          _Component.prototype.onEnable && _Component.prototype.onEnable.call(this);
          this.node.on(Node.EventType.TOUCH_START, this.OnClickTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.OnClickTouchEnd, this);
          this.node.on(Node.EventType.TOUCH_END, this.OnClickTouchEnd, this);
        };
        _proto.onDisable = function onDisable() {
          _Component.prototype.onDisable && _Component.prototype.onDisable.call(this);
          this.node.off(Node.EventType.TOUCH_START, this.OnClickTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.OnClickTouchEnd, this);
          this.node.off(Node.EventType.TOUCH_END, this.OnClickTouchEnd, this);
        };
        _proto.onDestroy = function onDestroy() {
          _Component.prototype.onDestroy && _Component.prototype.onDestroy.call(this);
        };
        _proto.OnClickTouchEnd = function OnClickTouchEnd(event) {
          switch (event.getType()) {
            case Node.EventType.TOUCH_START:
              // JmLobbyLog.Log("TOUCH_START")
              this.performClick = true;
              this.startPos = event.getLocation();
              break;
            case Node.EventType.TOUCH_MOVE:
              // JmLobbyLog.Log("TOUCH_MOVE")
              var pos = event.getLocation();
              var dst = this.startPos.subtract(pos);
              if (dst.length() > 5) {
                //有的机型就算没有移动也会直接调用一次TOUCH_MOVE事件，此处将小距离移动忽略不计
                this.performClick = false;
              }
              break;
            case Node.EventType.TOUCH_END:
              if (this.performClick) {
                this.onItemClick(this);
              }
              this.performClick = false;
              break;
          }
        };
        _proto.onItemClick = function onItemClick(target) {};
        return JmClickComponent;
      }(Component)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmHorizontalListView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JmRefreshFooter.ts', './RefreshOrLoadState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, ScrollView, Prefab, UITransform, Node, Vec2, instantiate, Component, JmRefreshFooter, RefreshOrLoadState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      ScrollView = module.ScrollView;
      Prefab = module.Prefab;
      UITransform = module.UITransform;
      Node = module.Node;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      Component = module.Component;
    }, function (module) {
      JmRefreshFooter = module.default;
    }, function (module) {
      RefreshOrLoadState = module.RefreshOrLoadState;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7;
      cclegacy._RF.push({}, "9ed167QEHxIIYDM3iH9Ml8L", "JmHorizontalListView", undefined);
      //import JmLobbyLog from "../util/JmLobbyLog";

      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        menu = _decorator.menu,
        requireComponent = _decorator.requireComponent;
      var JmHorizontalListView = exports('default', (_dec = ccclass(), _dec2 = requireComponent(ScrollView), _dec3 = menu("UI 组件/JmHorizontalListView"), _dec4 = property(Prefab), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JmHorizontalListView, _Component);
        function JmHorizontalListView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemWidth", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacing", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "leftOffset", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "rightOffset", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pullLeftToLoadEnabled", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "footerOffset", _descriptor7, _assertThisInitialized(_this));
          _this.footerController = void 0;
          _this.onPullLeftToLoad = void 0;
          _this.hasMore = true;
          _this.scrollView = void 0;
          _this.footer = void 0;
          _this.footerWidth = 100;
          _this._touchStartX = 0;
          _this._touchStartFromLeft = false;
          _this.footerHolderWidth = 0;
          //底部增加占位控件，防止item总高度不够时无法滑动View
          _this.isUserTouched = false;
          _this.loadingState = RefreshOrLoadState.NONE;
          _this.componentName = "JmListViewItem";
          _this.showingViews = new Map();
          _this.recycledViews = new Array();
          _this.itemViewDirty = new Map();
          _this.itemViewWidths = new Array();
          _this._data = new Array();
          _this._dirty = false;
          //决定是否需要刷新ListView
          _this._sizeDirty = false;
          _this._checkRight = false;
          return _this;
        }
        var _proto = JmHorizontalListView.prototype;
        _proto.onLoad = function onLoad() {
          this.scrollView = this.node.getComponent(ScrollView);
          //这里设定一下anchor值，后面的itemView位置计算都依赖anchor
          this.scrollView.content.getComponent(UITransform).anchorX = 0;
          this.scrollView.content.getComponent(UITransform).anchorY = 0.5;

          // JmLobbyLoaderMgr.LoadAssetCfg(JmLobbyAssetsCfg.JmRefreshFooterHorizontal).then((footer: Prefab) => {
          //     this.footer = footer
          // })

          // if (!this.scrollView.elastic && this.scrollView.bounceDuration > 0 && this.pullDownToRefreshEnabled) {
          //     //需要启用scrollView的elastic才能过量滑动，引发下拉刷新，
          //     //且bounceDuration回弹必须设为0秒立即回弹，否则在update中更新的content位置会被回弹动画覆盖
          //     JmLobbyLog.Error("set elastic true or pullRefresh Events will not work!!")
          // }
          // if (this.scrollView.cancelInnerEvents) {
          //     //cancelInnerEvents设置为true会导致ItemView的cancel提前触发，影响下拉刷新判断
          //     JmLobbyLog.Error("do not set cancelInnerEvent true, it'll effect Refresh Events!!")
          // }
        };

        _proto.onEnable = function onEnable() {
          this.scrollView.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.scrollView.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.scrollView.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.scrollView.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onDisable = function onDisable() {
          this.scrollView.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.scrollView.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.scrollView.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.scrollView.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          // JmLobbyLog.Log("onTouchStart")
          this.isUserTouched = true;
          this._touchStartX = event.getLocationX();
          this._touchStartFromLeft = Math.floor(this.scrollView.getScrollOffset().x) <= 1; //搞点容错率，有的机型的scrollOffset值不是很精确
          // JmLobbyLog.Log(`isTop-->${this._touchStartFromTop}, startY-->${this._touchStartY}`)
        };

        _proto.onTouchMove = function onTouchMove(event) {
          // let offsetY = event.getLocationY() - this._touchStartY
          // JmLobbyLog.Log("getLocationY-->" + event.getLocationY())
          // if (this.isUserTouched) {//如果正在touch，则检测是否在释放时需要刷新
          //     this.checkPullDownRefresh(offsetY)
          // }
        };
        _proto.onTouchEnd = function onTouchEnd() {
          // JmLobbyLog.Log("onTouchEnd")
          // this.startPullDownRefresh()
          this.isUserTouched = false;
        };
        _proto.onTouchCancel = function onTouchCancel() {
          // JmLobbyLog.Log("onTouchCancel")
          // this.startPullDownRefresh()
          this.isUserTouched = false;
        };
        _proto.getData = function getData() {
          return this._data;
        };
        _proto.setData = function setData(data) {
          this._data = data;
        };
        _proto.setComponentName = function setComponentName(name) {
          this.componentName = name;
        };
        _proto.updateSize = function updateSize() {
          if (this.scrollView.vertical || !this.scrollView.horizontal) {
            console.log("scroll orientation must set vertical in ListView!");
            return;
          }

          // if (this.refreshState == RefreshOrLoadState.REFRESHING) {
          //     height = height + 100
          // }
          this.scrollView.content.getComponent(UITransform).width = this.getNormalContentWidth();
        };
        _proto.getNormalContentWidth = function getNormalContentWidth() {
          var width = this.getContentWidth();
          if (this.pullLeftToLoadEnabled) {
            width += this.footerWidth;
          }
          if (width < this.scrollView.node.getComponent(UITransform).width) {
            this.footerHolderWidth = this.scrollView.node.getComponent(UITransform).width - width;
            width = this.scrollView.node.getComponent(UITransform).width;
          }
          return width;
        };
        _proto.getContentWidth = function getContentWidth() {
          return this.getItemPosOffset(this.getItemCount()) + this.leftOffset + this.rightOffset;
        };
        _proto.getItemPosOffset = function getItemPosOffset(index) {
          var sum = 0;
          for (var i = 0; i < index; i++) {
            sum += this.getItemWidthWithSpacing(i);
          }
          return sum;
        };
        _proto.getItemWidthWithSpacing = function getItemWidthWithSpacing(index) {
          if (index != undefined) {
            return (this.itemViewWidths[index] || this.itemWidth) + this.spacing;
          }
          return this.itemWidth + this.spacing;
        };
        _proto.getListLeftRightVisiblePos = function getListLeftRightVisiblePos() {
          //scrollX的值从0开始到负的contentWidth
          var scrollX = -this.scrollView.getScrollOffset().x;
          var width = this.scrollView.node.getComponent(UITransform).width;
          var leftVisibleX = scrollX;
          var rightVisibleX = scrollX + width;
          return [leftVisibleX, rightVisibleX];
        }

        /**
         * 计算当前Item是否可见
         * @param index
         * @private
         */;
        _proto.isVisible = function isVisible(index) {
          var _this$getListLeftRigh = this.getListLeftRightVisiblePos(),
            leftVisibleX = _this$getListLeftRigh[0],
            rightVisibleX = _this$getListLeftRigh[1];
          var itemLeftX = this.getItemPosOffset(index);
          var itemRightX = itemLeftX + this.getItemWidthWithSpacing(index);

          //item的底线或顶线可见即为item可见
          return itemLeftX >= leftVisibleX && itemLeftX <= rightVisibleX || itemRightX >= leftVisibleX && itemRightX <= rightVisibleX
          //或者底线和顶线都在屏幕两侧外，即Item高度大于屏幕高度
          || itemLeftX <= leftVisibleX && itemRightX >= rightVisibleX;
        };
        _proto.update = function update(dt) {
          var _this2 = this;
          if (this._dirty) {
            //标记为dirty时才做刷新处理
            var data = this._data;
            for (var i = 0; i < this.getItemCount(); ++i) {
              if (this.isVisible(i)) {
                //可见则初始化UI
                if (this.itemViewDirty.get(i)) {
                  var child = this.getItemView(i);
                  var component = child.getComponent(this.componentName);
                  if (component == null) {
                    throw "ERROR! item view must implements" + this.componentName + " component!!";
                  }
                  component.updateItem(i, data[i], this);
                  //记录updateItem之后的高度便于后面的计算
                  if (this.itemViewWidths[i] == undefined) {
                    this.itemViewWidths[i] = component.getItemWidth() || this.itemWidth;
                  }
                  var x = this.getItemPosOffset(i) + this.getItemWidthWithSpacing(i) * child.anchorX + this.leftOffset;
                  // console.log("TestV-----------index-->" + i, "yPos--->" + y, "height-->" + this.itemViewHeights)
                  child.setPosition(x, 0);
                  this._sizeDirty = true;
                  this.itemViewDirty.set(i, false);
                  // JmLobbyLog.Log("clear item view dirty-->" + i)
                  if (child.parent == null) {
                    this.scrollView.content.addChild(child);
                  }
                }
              }
            }
            //遍历showingViews, 不可见则回收
            this.showingViews.forEach(function (child, index) {
              if (!_this2.isVisible(index) || _this2._data == null || _this2._data[index] == null) {
                // JmLobbyLog.Log("not visible, index = " + index + ", child is" + child)
                if (child != null) {
                  _this2.recycleChild(index, child);
                }
              }
            });
            this.checkFooterView();
            // JmLobbyLog.Log("total Items:" + this._data.length)
            this._dirty = false;
          }
          if (this._sizeDirty) {
            var isRight = false;
            if (this._checkRight) {
              isRight = this.isRight();
            }
            this.updateSize();
            if (isRight) {
              this.scrollView.scrollToOffset(new Vec2(this.scrollView.getMaxScrollOffset().x, 0));
              this._dirty = true; //scroll之后需要再次刷新，否则有可能不显示部分ItemView
            }

            this._sizeDirty = false;
          }
        }

        //addOrUpdateFooterView
        ;

        _proto.checkFooterView = function checkFooterView() {
          if (this.footerController == null) {
            if (this.footer != null && this.pullLeftToLoadEnabled) {
              // JmLobbyLog.Log("addFooter")
              var footerView = instantiate(this.footer);
              var component = footerView.getComponent(JmRefreshFooter);
              this.footerController = component;
              this.scrollView.content.addChild(footerView);
              component.setState(RefreshOrLoadState.NONE);
            }
          }
          if (this.footerController != null) {
            var viewBottomY = -this.getContentWidth() - this.footerWidth / 2;
            var contentBottomY = -this.scrollView.content.getComponent(UITransform).width + this.footerWidth / 2 + this.footerOffset;
            this.footerController.node.setPosition(Math.min(viewBottomY, contentBottomY), 0);
          }
        };
        _proto.recycleChild = function recycleChild(index, child) {
          child.removeFromParent();
          this.showingViews["delete"](index);
          this.recycledViews.push(child);
          this.itemViewDirty.set(index, true);
        };
        _proto.getItemCount = function getItemCount() {
          return this._data ? this._data.length : 0;
        };
        _proto.getItemView = function getItemView(index) {
          var itemView = this.showingViews.get(index);
          if (itemView == null) {
            this.itemViewDirty.set(index, true);
          }
          if (itemView == null) {
            itemView = this.recycledViews.pop();
          }
          if (itemView == null) {
            this.itemViewDirty.set(index, true);
            itemView = instantiate(this.itemPrefab);
          }
          this.showingViews.set(index, itemView);
          return itemView;
        };
        _proto.onScrollEvent = function onScrollEvent(sender, event) {
          switch (event) {
            case ScrollView.EventType.SCROLLING:
              this.startPullLeftLoad();
              this._dirty = true;
              break;
          }
        }

        /**
         * 标记所有的Item需要刷新
         */;
        _proto.markChildrenDirty = function markChildrenDirty() {
          for (var i = 0; i < this.getItemCount(); i++) {
            this.itemViewDirty.set(i, true);
          }
        };
        _proto.isRight = function isRight() {
          return this.scrollView.getScrollOffset().x >= this.scrollView.getMaxScrollOffset().x;
        }

        /**
         * 刷新所有Item
         * @param checkRight 是否检查使ListView保持在底部
         *
         * fixme 有个bug：如果刚初始化页面时就调用notifyChange且数据量大于了一页的展示数量，会导致页面无法滑动；目前的处理方式是如果非要调就延迟0.1秒调用，后续有时间再修复下
         */;
        _proto.notifyChange = function notifyChange(checkRight) {
          // if (this.getItemCount() == 0) {
          //     if (this.emptyView) {
          //         this.emptyView.active = true
          //         if (JmNative.GetNetWorkState() == sys.NetworkType.NONE && this.noNetworkImg) {
          //             this.emptyPic.spriteFrame = this.noNetworkImg
          //         } else if (this.emptyImg) {
          //             this.emptyPic.spriteFrame = this.emptyImg
          //         }
          //     }
          // } else {
          //     if (this.emptyView) {
          //         this.emptyView.active = false
          //     }
          this._sizeDirty = true;
          this._checkRight = checkRight;
          this.markChildrenDirty();
          // }
          this._dirty = true;
        }

        /**
         * 刷新单个Item
         */;
        _proto.notifyItemChange = function notifyItemChange(index) {
          this.itemViewDirty.set(index, true);
          this._dirty = true;
        };
        _proto.updateHeight = function updateHeight(index, height) {
          this.itemViewWidths[index] = height;
          this.notifyChange();
        }

        /**
         * 设置上拉加载更多数据回调，在回调中加载数据，并在完成后调用{@link JmListView#onLoadComplete()}
         */;
        _proto.setPullLeftToLoadListener = function setPullLeftToLoadListener(listener) {
          this.onPullLeftToLoad = listener;
        };
        _proto.startPullLeftLoad = function startPullLeftLoad() {
          // JmLobbyLog.Log("startPullUpLoad", this.refreshState, this.loadingState)
          if (this.pullLeftToLoadEnabled && this.hasMore && this.loadingState != RefreshOrLoadState.REFRESHING && !this.isUserTouched) {
            var _ref = [this.scrollView.getScrollOffset().y, this.scrollView.getMaxScrollOffset().y],
              offset = _ref[0],
              maxOffset = _ref[1];
            //有的机型offset值不是很准确，这里搞点容错率
            if (Math.ceil(offset) >= Math.floor(maxOffset)) {
              // JmLobbyLog.Log("PullUpToLoad")
              this.updateLoadingState(RefreshOrLoadState.REFRESHING);
              if (this.onPullLeftToLoad) {
                this.onPullLeftToLoad();
              }

              /**测试：延时刷新完成返回，并添加测试数据*/
              // this.scheduleOnce(() => {
              //     if (this._data.length > 0) {
              //         this._data.push(this._data[0])
              //     }
              //     this.onLoadComplete(true)
              // }, 2)
            }
          }
        };

        _proto.onLoadComplete = function onLoadComplete(hasMore) {
          if (hasMore === void 0) {
            hasMore = true;
          }
          this.hasMore = hasMore;
          if (hasMore) {
            this.updateLoadingState(RefreshOrLoadState.NONE);
          } else {
            this.updateLoadingState(RefreshOrLoadState.COMPLETE);
          }
          // JmLobbyLog.Log("loading done")
          this.notifyChange();
        };
        _proto.updateLoadingState = function updateLoadingState(state) {
          if (this.loadingState != state) {
            this.loadingState = state;
            this.onLoadingStateChange(state);
          }
        };
        _proto.onLoadingStateChange = function onLoadingStateChange(newState) {
          // JmLobbyLog.Log("onLoadingStateChange-->" + this.loadingState)
          this.footerController && this.footerController.setState(newState);
        };
        return JmHorizontalListView;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemWidth", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "leftOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "rightOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "pullLeftToLoadEnabled", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "footerOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmListView.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './JmRefreshHeader.ts', './JmRefreshFooter.ts', './RefreshOrLoadState.ts', './BaseView.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Prefab, Node, Sprite, SpriteFrame, ScrollView, UITransform, Vec2, instantiate, sys, JmRefreshHeader, JmRefreshFooter, RefreshOrLoadState, BaseView;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Prefab = module.Prefab;
      Node = module.Node;
      Sprite = module.Sprite;
      SpriteFrame = module.SpriteFrame;
      ScrollView = module.ScrollView;
      UITransform = module.UITransform;
      Vec2 = module.Vec2;
      instantiate = module.instantiate;
      sys = module.sys;
    }, function (module) {
      JmRefreshHeader = module.default;
    }, function (module) {
      JmRefreshFooter = module.default;
    }, function (module) {
      RefreshOrLoadState = module.RefreshOrLoadState;
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13;
      cclegacy._RF.push({}, "e0697BlxFpBKJPKFMedIN+s", "JmListView", undefined);
      // import { sysDefine } from "./sysDefine";
      // import { AssetsCfg } from "./AssetsCfg";
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JmListView = exports('default', (_dec = ccclass('JmListView'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(Sprite), _dec5 = property(SpriteFrame), _dec6 = property(SpriteFrame), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(JmListView, _BaseView);
        function JmListView() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "itemPrefab", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "itemHeight", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyView", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyPic", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "noNetworkImg", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyImg", _descriptor6, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "spacing", _descriptor7, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "topMargin", _descriptor8, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "bottomMargin", _descriptor9, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "pullDownToRefreshEnabled", _descriptor10, _assertThisInitialized(_this));
          _this.headerController = void 0;
          _this.onPullDownToRefresh = void 0;
          _initializerDefineProperty(_this, "pullUpToLoadEnabled", _descriptor11, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "footerOffset", _descriptor12, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "refreshFooterShow", _descriptor13, _assertThisInitialized(_this));
          _this.footerController = void 0;
          _this.onPullUpToLoad = void 0;
          _this.hasMore = true;
          _this.scrollView = void 0;
          _this.header = void 0;
          _this.headerHeight = 300;
          _this.footer = void 0;
          _this.footerHeight = 250;
          _this._touchStartY = 0;
          _this._touchStartFromTop = false;
          //下拉刷新和上拉加载的状态
          _this.isUserTouched = false;
          _this.refreshState = RefreshOrLoadState.NONE;
          _this.loadingState = RefreshOrLoadState.NONE;
          _this.componentName = "JmListViewItem";
          _this.footerHolderHeight = 0;
          //底部增加占位控件，防止item总高度不够时无法滑动View
          _this.showingViews = new Map();
          _this.recycledViews = new Array();
          _this.itemViewDirty = new Map();
          //每个子View是否需要刷新
          _this.itemViewHeights = new Array();
          //每个子View的高度
          _this._data = new Array();
          _this._dirty = false;
          //决定是否需要刷新ListView的外层开关
          _this._sizeDirty = false;
          //决定是否要更新ListView的content大小
          _this._checkBottom = false;
          _this.extraData = {};
          return _this;
        }
        var _proto = JmListView.prototype;
        _proto.onLoad = function onLoad() {
          this.scrollView = this.node.getComponent(ScrollView);
          //启用相关控件时才加载prefab，减少内存占用
          //if (this.pullDownToRefreshEnabled) {
          // JmLobbyLoaderMgr.LoadAssetCfg(HoldOnAssetsCfg.HoldOnRefreshHeader).then((header: Prefab) => {
          //     this.header = header
          // })
          // Jm.AssetManager.loadResInBundle(SysDefine.bundleName, HoldOnAssetsCfg.HoldOnRefreshHeader, function (err, header) {
          //     this.header = header
          // })
          //}
          //if (this.pullUpToLoadEnabled && this.refreshFooterShow) {
          // JmLobbyLoaderMgr.LoadAssetCfg(HoldOnAssetsCfg.HoldOnRefreshFooter).then((footer: Prefab) => {
          //     this.footer = footer
          // })
          // let self = this
          // let self1 = this.footer
          // Jm.AssetManager.loadResInBundle(sysDefine.bundleName, AssetsCfg.RefreshFooter, function (err, footer: Prefab) {
          //     self.footer = footer
          // })
          //}

          if (!this.scrollView.elastic && this.scrollView.bounceDuration > 0 && this.pullDownToRefreshEnabled) {
            //需要启用scrollView的elastic才能过量滑动，引发下拉刷新，
            //且bounceDuration回弹必须设为0秒立即回弹，否则在update中更新的content位置会被回弹动画覆盖
            console.log("set elastic true or pullRefresh Events will not work!!");
          }
          if (this.scrollView.cancelInnerEvents) {
            //cancelInnerEvents设置为true会导致ItemView的cancel提前触发，影响下拉刷新判断
            // JmLobbyLog.Error("do not set cancelInnerEvent true, it'll effect Refresh Events!!")
            this.scrollView.cancelInnerEvents = false;
          }
        };
        _proto.onEnable = function onEnable() {
          this.scrollView.node.on(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.scrollView.node.on(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.scrollView.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.scrollView.node.on(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onDisable = function onDisable() {
          this.scrollView.node.off(Node.EventType.TOUCH_START, this.onTouchStart, this);
          this.scrollView.node.off(Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
          this.scrollView.node.off(Node.EventType.TOUCH_END, this.onTouchEnd, this);
          this.scrollView.node.off(Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
        };
        _proto.onDestroy = function onDestroy() {
          // Util.ReleaseAsset(this.itemPrefab);
        };
        _proto.onTouchStart = function onTouchStart(event) {
          // JmLobbyLog.console.log("onTouchStart")
          this.isUserTouched = true;
          this._touchStartY = event.getLocationY();
          this._touchStartFromTop = Math.floor(this.scrollView.getScrollOffset().y) <= 1; //搞点容错率，有的机型的scrollOffset值不是很精确

          // JmLobbyLog.console.log(`isTop-->${this._touchStartFromTop}, startY-->${this._touchStartY}`)
        };

        _proto.onTouchMove = function onTouchMove(event) {
          if (!this.pullDownToRefreshEnabled) return;
          var offsetY = event.getLocationY() - this._touchStartY;
          // JmLobbyLog.console.log("getLocationY-->" + event.getLocationY())
          if (this.isUserTouched) {
            //如果正在touch，则检测是否在释放时需要刷新
            this.checkPullDownRefresh(offsetY);
            this.headerController && this.headerController.onScrollOffset(offsetY);
          }
        };
        _proto.onTouchEnd = function onTouchEnd() {
          // JmLobbyLog.console.log("onTouchEnd")
          this.startPullDownRefresh();
          this.isUserTouched = false;
        };
        _proto.onTouchCancel = function onTouchCancel() {
          // JmLobbyLog.console.log("onTouchCancel")
          this.startPullDownRefresh();
          this.isUserTouched = false;
        };
        _proto.getData = function getData() {
          return this._data || [];
        };
        _proto.setData = function setData(data) {
          this._data = data;
        };
        _proto.updateSize = function updateSize() {
          if (this.scrollView.horizontal || !this.scrollView.vertical) {
            console.log("scroll orientation must set vertical in ListView!");
            return;
          }

          // if (this.refreshState == RefreshOrLoadState.REFRESHING) {
          //     height = height + 100
          // }
          var height = this.scrollView.content.getComponent(UITransform).height;
          var newHeight = this.getNormalContentHeight();
          this.scrollView.content.getComponent(UITransform).height = newHeight;
          if (height > newHeight) {
            this.notifyChange();
          }
        };
        _proto.getNormalContentHeight = function getNormalContentHeight() {
          var height = this.getContentHeight(); // get total content height
          // console.log("contentHeight-->", height, this.getItemCount())
          if (this.pullUpToLoadEnabled && this.refreshFooterShow) {
            height = height + this.footerHeight;
          }
          if (height < this.scrollView.node.getComponent(UITransform).height) {
            this.footerHolderHeight = this.scrollView.node.getComponent(UITransform).height - height;
            //将View的大小最小设置为整个View的大小，可能是由于底层原因 小于这个值会在没有填满布局时无法触发滑动
            height = this.scrollView.node.getComponent(UITransform).height;
          }
          return height;
        }

        /**
         * 设置Item类的子类实现类名
         */;
        _proto.setComponentName = function setComponentName(name) {
          this.componentName = name;
        };
        _proto.setTopMargin = function setTopMargin(num) {
          this.topMargin = num;
        };
        _proto.getContentHeight = function getContentHeight() {
          return this.getItemPosOffset(this.getItemCount()) + this.topMargin + this.bottomMargin;
        };
        _proto.getItemPosOffset = function getItemPosOffset(index) {
          var sum = 0;
          for (var i = 0; i < index; i++) {
            sum += this.getItemHeightWithSpacing(i);
          }
          return sum;
        }

        /**
         * 根据index返回item占高
         */;
        _proto.getItemHeightWithSpacing = function getItemHeightWithSpacing(index) {
          if (index != undefined) {
            return (this.itemViewHeights[index] || this.itemHeight) + this.spacing;
          }
          return this.itemHeight + this.spacing;
        };
        _proto.getListTopBottomVisiblePos = function getListTopBottomVisiblePos() {
          //scrollY的值是从 最顶部(scrollView.node.getComponent(UITransform).height/2) ~ 最底部(scrollView.content.height - scrollView.node.getComponent(UITransform).height/2)
          var scrollY = this.scrollView.content.position.y;
          var halfHeight = this.scrollView.node.getComponent(UITransform).height / 2;
          var topVisibleY = scrollY - halfHeight;
          var bottomVisibleY = scrollY + halfHeight;
          bottomVisibleY += this.headerHeight; //下拉刷新时先刷新再回弹，导致底部高度为headerHeight的部分不会被显示出来
          return [topVisibleY, bottomVisibleY];
        }

        /**
         * 计算当前Item是否可见
         * @param index
         * @private
         */;
        _proto.isVisible = function isVisible(index) {
          var _this$getListTopBotto = this.getListTopBottomVisiblePos(),
            topVisibleY = _this$getListTopBotto[0],
            bottomVisibleY = _this$getListTopBotto[1];
          var itemTopY = this.getItemPosOffset(index) + this.topMargin;
          var itemBottomY = itemTopY + this.getItemHeightWithSpacing(index);

          //item的底线或顶线可见即为item可见
          return itemTopY >= topVisibleY && itemTopY <= bottomVisibleY || itemBottomY >= topVisibleY && itemBottomY <= bottomVisibleY
          //或者底线和顶线都在屏幕两侧外，即Item高度大于屏幕高度
          || itemTopY <= topVisibleY && itemBottomY >= bottomVisibleY;
        };
        _proto.update = function update(dt) {
          var _this2 = this;
          if (this.pullDownToRefreshEnabled && this.refreshState == RefreshOrLoadState.REFRESHING) {
            //this.scrollView.content.position.y = this.scrollView.node.getComponent(UITransform).height / 2 - this.headerHeight
            this.scrollView.content.setPosition(this.scrollView.node.getComponent(UITransform).width / 2, this.scrollView.node.getComponent(UITransform).height / 2 - this.headerHeight);
          }
          if (this._dirty) {
            //标记为dirty时才做刷新处理
            var data = this._data;
            for (var i = 0; i < this.getItemCount(); ++i) {
              if (this.isVisible(i)) {
                //可见则初始化UI
                if (this.itemViewDirty.get(i)) {
                  var child = this.getItemView(i);
                  if (child == null) {
                    console.log("JmListView Child Is Null! " + this.componentName);
                    return;
                  }
                  var component = child.getComponent(this.componentName);
                  if (component == null) {
                    throw "ERROR! item view must implements" + this.componentName + " component!!";
                  }
                  component.updateItem(i, data[i], this);
                  //记录updateItem之后的高度便于后面的计算
                  if (this.itemViewHeights[i] == undefined) {
                    this.itemViewHeights[i] = this.itemHeight; //component.getItemHeight() || this.itemHeight
                  }

                  var y = -this.getItemPosOffset(i) - this.getItemHeightWithSpacing(i) * (1 - child.getComponent(UITransform).anchorY) - this.topMargin;
                  // console.log("TestV-----------index-->" + i, "yPos--->" + y, "height-->" + this.itemViewHeights)
                  child.setPosition(0, y);
                  this._sizeDirty = true;
                  this.itemViewDirty.set(i, false);
                  // JmLobbyLog.console.log("clear item view dirty-->" + i)
                  if (child.parent == null) {
                    this.scrollView.content.addChild(child);
                  }
                }
              }
            }
            //遍历showingViews, 不可见则回收
            this.showingViews.forEach(function (child, index) {
              if (!_this2.isVisible(index) || _this2._data == null || _this2._data.length - 1 < index) {
                // JmLobbyLog.console.log("not visible, index = " + index + ", child is" + child)
                if (child != null) {
                  _this2.recycleChild(index, child);
                }
              }
            });
            this.checkHeaderView();
            this.checkFooterView();
            // JmLobbyLog.console.log("total Items:" + this._data.length)
            this._dirty = false;
          }
          if (this._sizeDirty) {
            var isBottom = false;
            if (this._checkBottom) {
              isBottom = this.isBottom();
            }
            this.updateSize();
            if (isBottom) {
              this.scrollView.scrollToOffset(new Vec2(0, this.scrollView.getMaxScrollOffset().y));
              this._dirty = true; //scroll之后需要再次刷新，否则有可能不显示部分ItemView
            }

            this._sizeDirty = false;
          }
        }

        //addOrUpdateHeaderView
        ;

        _proto.checkHeaderView = function checkHeaderView() {
          if (this.headerController == null) {
            if (this.header != null && this.pullDownToRefreshEnabled) {
              // JmLobbyLog.console.log("addHeader")
              var headerView = instantiate(this.header);
              headerView.setPosition(0, this.headerHeight / 2 - this.topMargin);
              this.scrollView.content.addChild(headerView);
              var component = headerView.getComponent(JmRefreshHeader);
              component.setState(this.refreshState);
              this.headerController = component;
            }
          }
        }

        //addOrUpdateFooterView
        ;

        _proto.checkFooterView = function checkFooterView() {
          if (this.footerController == null) {
            if (this.footer != null && this.pullUpToLoadEnabled) {
              // JmLobbyLog.console.log("addFooter")
              var footerView = instantiate(this.footer);
              this.scrollView.content.addChild(footerView);
              var component = footerView.getComponent(JmRefreshFooter);
              component.setState(RefreshOrLoadState.NONE);
              this.footerController = component;
            }
          }
          if (this.footerController != null) {
            var viewBottomY = -this.getContentHeight() - this.footerHeight / 2;
            var contentBottomY = -this.scrollView.content.getComponent(UITransform).height + this.footerHeight / 2 + this.footerOffset;
            this.footerController.node.setPosition(0, Math.min(viewBottomY, contentBottomY) + this.bottomMargin);
          }
        };
        _proto.recycleChild = function recycleChild(index, child) {
          child.removeFromParent();
          this.showingViews["delete"](index);
          this.recycledViews.push(child);
          this.itemViewDirty.set(index, true);
        };
        _proto.getItemCount = function getItemCount() {
          return this._data ? this._data.length : 0;
        };
        _proto.getItemView = function getItemView(index) {
          var itemView = this.showingViews.get(index);
          if (itemView != null) ;else {
            // JmLobbyLog.console.log("mark item view dirty-->" + index)
            this.itemViewDirty.set(index, true);
          }
          if (itemView == null) {
            itemView = this.recycledViews.pop();
          }
          if (itemView == null) {
            itemView = instantiate(this.itemPrefab);
            this.itemViewDirty.set(index, true);
          }
          this.showingViews.set(index, itemView);
          return itemView;
        };
        _proto.onScrollEvent = function onScrollEvent(sender, event) {
          // if (event == ScrollView.EventType.SCROLLING) {
          if (event == 4) {
            if (this.pullUpToLoadEnabled) {
              this.checkPullUpLoad();
            }
            this._dirty = true;
          }
        }

        /**
         * 标记所有的Item需要刷新
         */;
        _proto.markChildrenDirty = function markChildrenDirty() {
          for (var i = 0; i < this.getItemCount(); i++) {
            this.itemViewDirty.set(i, true);
          }
        };
        _proto.isBottom = function isBottom() {
          return this.scrollView.getScrollOffset().y >= this.scrollView.getMaxScrollOffset().y;
        }

        /**
         * 刷新所有Item
         * @param checkBottom 是否检查使ListView保持在底部
         *
         * fixme 有个bug：如果刚初始化页面时就调用notifyChange且数据量大于了一页的展示数量，会导致页面无法滑动；目前的处理方式是如果非要调就延迟0.1秒调用，后续有时间再修复下
         */;
        _proto.notifyChange = function notifyChange(checkBottom) {
          if (this.getItemCount() == 0) {
            if (this.emptyView) {
              this.emptyView.active = true;
              if (sys.getNetworkType() == sys.NetworkType.NONE && this.noNetworkImg) {
                this.emptyPic.spriteFrame = this.noNetworkImg;
              } else if (this.emptyImg) {
                this.emptyPic.spriteFrame = this.emptyImg;
              }
              this.updateLoadingState(RefreshOrLoadState.NONE);
            }
          } else {
            if (this.emptyView) {
              this.emptyView.active = false;
            }
            this._sizeDirty = true;
            this._checkBottom = checkBottom;
            this.markChildrenDirty();
          }
          this._dirty = true;
        }

        /**
         * 刷新单个Item
         */;
        _proto.notifyItemChange = function notifyItemChange(index) {
          this.itemViewDirty.set(index, true);
          this._dirty = true;
        };
        _proto.updateHeight = function updateHeight(index, height) {
          this.itemViewHeights[index] = height;
          this.notifyChange();
        }

        /**
         * 设置上拉加载更多数据回调，在回调中加载数据，并在完成后调用{@link JmListView#onLoadComplete()}
         */;
        _proto.setPullUpToLoadListener = function setPullUpToLoadListener(listener) {
          this.onPullUpToLoad = listener;
        }

        /**
         * 设置下拉刷新数据回调，在回调中加载数据，并在完成后调用{@link JmListView#onRefreshComplete()}
         */;
        _proto.setPullDownToRefreshListener = function setPullDownToRefreshListener(listener) {
          this.onPullDownToRefresh = listener;
        };
        _proto.checkPullDownRefresh = function checkPullDownRefresh(offsetY) {
          if (this.pullDownToRefreshEnabled && this.refreshState != RefreshOrLoadState.REFRESHING && this.loadingState != RefreshOrLoadState.REFRESHING) {
            if (this._touchStartFromTop && offsetY < -this.headerHeight * 1.5) {
              this.updateRefreshState(RefreshOrLoadState.READY_TO_REFRESH);
            } else {
              this.updateRefreshState(RefreshOrLoadState.NONE);
            }
          }
        };
        _proto.checkPullUpLoad = function checkPullUpLoad() {
          // JmLobbyLog.console.log("checkPullUpLoad", this.refreshState, this.loadingState)
          if (this.pullUpToLoadEnabled && this.hasMore && this.loadingState != RefreshOrLoadState.REFRESHING && this.refreshState != RefreshOrLoadState.REFRESHING && !this.isUserTouched) {
            var _ref = [this.scrollView.getScrollOffset().y, this.scrollView.getMaxScrollOffset().y],
              offset = _ref[0],
              maxOffset = _ref[1];
            //有的机型offset值不是很准确，这里搞点容错率
            if (Math.ceil(offset) >= Math.floor(maxOffset)) {
              // JmLobbyLog.console.log("PullUpToLoad")
              this.updateLoadingState(RefreshOrLoadState.REFRESHING);
              if (this.onPullUpToLoad) {
                this.onPullUpToLoad();
              }

              /**测试：延时刷新完成返回，并添加测试数据*/
              // this.scheduleOnce(() => {
              //     if (this._data.length > 0) {
              //         this._data.push(this._data[0])
              //     }
              //     this.onLoadComplete(true)
              // }, 2)
            }
          }
        }

        /**
         * 主动调起刷新
         */;
        _proto.pullDownRefresh = function pullDownRefresh() {
          var _this3 = this;
          this.scrollView.stopAutoScroll();
          //this.scrollView.content.position.y = this.scrollView.node.getComponent(UITransform).height / 2 - this.headerHeight
          this.scrollView.content.setPosition(this.scrollView.node.getComponent(UITransform).width / 2, this.scrollView.node.getComponent(UITransform).height / 2 - this.headerHeight);
          this._dirty = true;
          this.updateRefreshState(RefreshOrLoadState.REFRESHING);
          this.scheduleOnce(function () {
            //产品说要延迟刷新，让用户可以看到REFRESHING的动画
            if (_this3.onPullDownToRefresh != null) {
              _this3.onPullDownToRefresh();
            }
          }, 1.5);
        };
        _proto.startPullDownRefresh = function startPullDownRefresh() {
          var _this4 = this;
          // JmLobbyLog.console.log("startPullDownRefresh", this.refreshState, this.loadingState)
          if (this.pullDownToRefreshEnabled && this.refreshState == RefreshOrLoadState.READY_TO_REFRESH && this.loadingState != RefreshOrLoadState.REFRESHING) {
            this.updateRefreshState(RefreshOrLoadState.REFRESHING);
            this.scheduleOnce(function () {
              //产品说要延迟刷新，让用户可以看到REFRESHING的动画
              if (_this4.onPullDownToRefresh != null) {
                _this4.onPullDownToRefresh();
              }
            }, 1.5);
            /**测试：延时刷新完成返回*/
            // this.scheduleOnce(() => {
            //     this.onRefreshComplete()
            // }, 2)
          } else {
            this.headerController && this.headerController.onScrollOffset(0);
          }
        };
        _proto.onRefreshComplete = function onRefreshComplete(scrollToTop) {
          if (scrollToTop === void 0) {
            scrollToTop = true;
          }
          // JmLobbyLog.console.log("refresh done")
          var hasMore = this.hasMore = this.getItemCount() > 0;
          if (hasMore) {
            this.updateLoadingState(RefreshOrLoadState.NONE);
          } else {
            this.updateLoadingState(RefreshOrLoadState.EMPTY);
          }
          if (scrollToTop) ;else {
            this.updateRefreshState(RefreshOrLoadState.NONE);
          }
          this.notifyChange();
        };
        _proto.stopPullDownRefresh = function stopPullDownRefresh() {
          this.updateRefreshState(RefreshOrLoadState.COMPLETING);
          //this.scrollView.content.stopAllActions()
          this.headerController && this.headerController.onScrollOffset(0);
          //this.scrollView.content.position.y = this.scrollView.node.getComponent(UITransform).height / 2
          this.scrollView.content.setPosition(this.scrollView.node.getComponent(UITransform).width / 2, this.scrollView.node.getComponent(UITransform).height / 2);
        };
        _proto.onLoadComplete = function onLoadComplete(hasMore) {
          if (hasMore === void 0) {
            hasMore = true;
          }
          this.hasMore = hasMore;
          if (hasMore) {
            this.updateLoadingState(RefreshOrLoadState.NONE);
          } else {
            this.updateLoadingState(RefreshOrLoadState.COMPLETE);
          }
          // JmLobbyLog.console.log("loading done")
          this.notifyChange();
        };
        _proto.updateRefreshState = function updateRefreshState(state) {
          if (this.refreshState != state) {
            // JmLobbyLog.console.log("updateRefreshState-->", this.refreshState, state)
            this.refreshState = state;
            this.onRefreshStateChange(state);
          }
        };
        _proto.onRefreshStateChange = function onRefreshStateChange(newState) {
          // JmLobbyLog.console.log("onRefreshStateChange-->" + this.refreshState)
          this.headerController && this.headerController.setState(newState);
        };
        _proto.updateLoadingState = function updateLoadingState(state) {
          if (this.loadingState != state) {
            this.loadingState = state;
            this.onLoadingStateChange(state);
          }
        };
        _proto.onLoadingStateChange = function onLoadingStateChange(newState) {
          // JmLobbyLog.console.log("onLoadingStateChange-->" + this.loadingState)
          this.footerController && this.footerController.setState(newState);
        };
        _proto.setExtraData = function setExtraData(key, value) {
          this.extraData[key] = value;
        };
        _proto.getExtraData = function getExtraData(key) {
          return this.extraData[key];
        }

        /**
         * 处理数据更新回调结果
         * @return 返回的数据暂存在对应Component内，需要更新下
         */;
        JmListView.handleSuccess = function handleSuccess(result, isLoadMore, listView, hasMore, scrollToTop) {
          if (scrollToTop === void 0) {
            scrollToTop = true;
          }
          if (!listView.node.isValid) return;
          var data = listView.getData();
          var newData;
          if (isLoadMore) {
            newData = data.concat(result);
          } else if (Array.isArray(result)) {
            newData = result;
          }
          listView.setData(newData);
          if (isLoadMore) {
            listView.onLoadComplete(hasMore == undefined ? result.length > 0 : hasMore);
          } else {
            listView.onRefreshComplete(scrollToTop);
          }
        };
        JmListView.handleFailure = function handleFailure(listView, loadMore, scrollToTop) {
          if (scrollToTop === void 0) {
            scrollToTop = true;
          }
          if (!listView.node.isValid) return;
          if (loadMore) {
            listView.onLoadComplete(true);
          } else {
            listView.onRefreshComplete(scrollToTop);
          }
        };
        return JmListView;
      }(BaseView), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemPrefab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "emptyView", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "emptyPic", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "noNetworkImg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "emptyImg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "spacing", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "topMargin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bottomMargin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "pullDownToRefreshEnabled", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "pullUpToLoadEnabled", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "footerOffset", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "refreshFooterShow", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      })), _class2)) || _class));
      var Orientation = exports('Orientation', /*#__PURE__*/function (Orientation) {
        Orientation[Orientation["HORIZONTAL"] = 0] = "HORIZONTAL";
        Orientation[Orientation["VERTICAL"] = 1] = "VERTICAL";
        return Orientation;
      }({}));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmListViewItem.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseView.ts'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, BaseView;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
    }, function (module) {
      BaseView = module.default;
    }],
    execute: function () {
      var _class;
      cclegacy._RF.push({}, "042dbWnrqpPIqHcYTDpkJsk", "JmListViewItem", undefined);
      var ccclass = _decorator.ccclass;
      var JmListViewItem = exports('default', ccclass(_class = /*#__PURE__*/function (_BaseView) {
        _inheritsLoose(JmListViewItem, _BaseView);
        function JmListViewItem() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseView.call.apply(_BaseView, [this].concat(args)) || this;
          _this.itemId = void 0;
          _this.listView = void 0;
          _this.performClick = false;
          _this.startPos = void 0;
          return _this;
        }
        var _proto = JmListViewItem.prototype;
        //记录Touch事件开始时的位置
        _proto.onLoad = function onLoad() {
          _BaseView.prototype.onLoad && _BaseView.prototype.onLoad.call(this);
        };
        _proto.onEnable = function onEnable() {
          this.node.on(Node.EventType.TOUCH_START, this.onTouchEvent, this);
          this.node.on(Node.EventType.TOUCH_MOVE, this.onTouchEvent, this);
          this.node.on(Node.EventType.TOUCH_END, this.onTouchEvent, this);
        };
        _proto.onDisable = function onDisable() {
          this.node.off(Node.EventType.TOUCH_START, this.onTouchEvent, this);
          this.node.off(Node.EventType.TOUCH_MOVE, this.onTouchEvent, this);
          this.node.off(Node.EventType.TOUCH_END, this.onTouchEvent, this);
        };
        _proto.onTouchEvent = function onTouchEvent(event) {
          switch (event.getType()) {
            case Node.EventType.TOUCH_START:
              // JmLobbyLog.Log("TOUCH_START")
              this.performClick = true;
              this.startPos = event.getLocation();
              break;
            case Node.EventType.TOUCH_MOVE:
              // JmLobbyLog.Log("TOUCH_MOVE")
              var pos = event.getLocation();
              var dstx = Math.abs(this.startPos.x - pos.x);
              var dsty = Math.abs(this.startPos.y - pos.y);
              if (dstx > 5 || dsty > 5) {
                //有的机型就算没有移动也会直接调用一次TOUCH_MOVE事件，此处将小距离移动忽略不计
                this.performClick = false;
              }

              // let dst: Vec2 = this.startPos.sub(pos)
              // if (dst.len() > 5) {//有的机型就算没有移动也会直接调用一次TOUCH_MOVE事件，此处将小距离移动忽略不计
              //     this.performClick = false
              // }
              break;
            case Node.EventType.TOUCH_END:
              if (this.performClick) {
                this.onItemClick(event);
              }
              this.performClick = false;
              break;
          }
        };
        _proto.onItemClick = function onItemClick(event) {
          // JmLobbyLog.Log("ItemClicked, itemId-->" + this.itemId)
        };
        _proto.updateItem = function updateItem(id, data, listView) {
          this.itemId = id;
          this.listView = listView;
          //子类实现
        };

        _proto.getItemHeight = function getItemHeight() {
          return undefined;
        };
        _proto.getItemWidth = function getItemWidth() {
          return undefined;
        };
        return JmListViewItem;
      }(BaseView)) || _class);
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmNodePoolMgr.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, _createClass, cclegacy, NodePool, instantiate, isValid;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      isValid = module.isValid;
    }],
    execute: function () {
      cclegacy._RF.push({}, "7c980D95kVPeofPOykG23qy", "JmNodePoolMgr", undefined);
      var JmNodePool = exports('JmNodePool', /*#__PURE__*/function (_NodePool) {
        _inheritsLoose(JmNodePool, _NodePool);
        function JmNodePool() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _NodePool.call.apply(_NodePool, [this].concat(args)) || this;
          _this._cellPfb = void 0;
          return _this;
        }
        _createClass(JmNodePool, [{
          key: "cellPfb",
          get: function get() {
            return this._cellPfb;
          },
          set: function set(value) {
            this._cellPfb = value;
          }
        }]);
        return JmNodePool;
      }(NodePool));
      var JmNodePoolMgr = exports('default', /*#__PURE__*/function () {
        function JmNodePoolMgr() {}
        /**初始化缓存池
         * */
        JmNodePoolMgr.InitNodePool = function InitNodePool(poolKey, cellPfb, poolHandlerComp) {
          this.DestroyPool(poolKey);
          var pool = new JmNodePool(poolHandlerComp);
          pool.cellPfb = cellPfb;
          this._nodePoolData.set(poolKey, pool);
        };
        JmNodePoolMgr.GetCell = function GetCell(poolKey) {
          var pool = this.GetPool(poolKey);
          if (pool) {
            var node;
            if (pool.size()) {
              node = pool.get();
            } else {
              node = instantiate(pool.cellPfb);
            }
            node.active = true;
            return node;
          }
        };
        JmNodePoolMgr.PutCell = function PutCell(poolKey, node) {
          var pool = this.GetPool(poolKey);
          if (pool) {
            node.active = false;
            pool.put(node);
          }
        };
        JmNodePoolMgr.DestroyPool = function DestroyPool(poolKey) {
          var pool = this._nodePoolData.get(poolKey);
          if (pool) {
            for (var i = 0; i < pool.size(); i++) {
              var node = pool.get();
              if (isValid(node, true)) {
                node.active = false;
                node.destroy();
              }
            }
            pool.clear();
            this._nodePoolData["delete"](poolKey);
          }
        };
        JmNodePoolMgr.GetPool = function GetPool(poolKey) {
          var pool = this._nodePoolData.get(poolKey);
          if (pool) {
            return pool;
          } else {
            console.log("JmNodePoolMgr.GetPool!The pool is null! please instance it! " + poolKey);
          }
        };
        return JmNodePoolMgr;
      }());
      JmNodePoolMgr._nodePoolData = new Map();
      JmNodePoolMgr.IdentityCellPool = "IDENTITY_CELL_POOL";
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmRefreshFooter.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RefreshOrLoadState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Label, Sprite, Component, RefreshOrLoadState;
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
      Sprite = module.Sprite;
      Component = module.Component;
    }, function (module) {
      RefreshOrLoadState = module.RefreshOrLoadState;
    }],
    execute: function () {
      var _dec, _dec2, _class, _class2, _descriptor, _descriptor2;
      cclegacy._RF.push({}, "c2fe1IKDFRCtLohnkWQ3mKu", "JmRefreshFooter", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JmRefreshFooter = exports('default', (_dec = property(Label), _dec2 = property(Sprite), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JmRefreshFooter, _Component);
        function JmRefreshFooter() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loading", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "emptyImg", _descriptor2, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = JmRefreshFooter.prototype;
        _proto.setState = function setState(state) {
          switch (state) {
            case RefreshOrLoadState.NONE:
            case RefreshOrLoadState.EMPTY:
              this.loading.node.active = false;
              this.emptyImg.node.active = false;
              break;
            case RefreshOrLoadState.READY_TO_REFRESH:
              break;
            case RefreshOrLoadState.REFRESHING:
              this.loading.node.active = true;
              this.loading.string = "加载数据中";
              this.emptyImg.node.active = false;
              break;
            case RefreshOrLoadState.COMPLETE:
              this.emptyImg.node.active = true;
              this.loading.node.active = false;
              break;
          }
        };
        _proto.start = function start() {};
        return JmRefreshFooter;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "emptyImg", [_dec2], {
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

System.register("chunks:///_virtual/JmRefreshHeader.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './RefreshOrLoadState.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, Skeleton, Component, RefreshOrLoadState;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Skeleton = module.Skeleton;
      Component = module.Component;
    }, function (module) {
      RefreshOrLoadState = module.RefreshOrLoadState;
    }],
    execute: function () {
      var _dec, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "df9d9WVzIhEEp1PytXQ68l6", "JmRefreshHeader", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var JmRefreshHeader = exports('default', (_dec = property(Skeleton), ccclass(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(JmRefreshHeader, _Component);
        function JmRefreshHeader() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "refreshSpine", _descriptor, _assertThisInitialized(_this));
          _this._state = RefreshOrLoadState.NONE;
          return _this;
        }
        var _proto = JmRefreshHeader.prototype;
        _proto.start = function start() {};
        _proto.onScrollOffset = function onScrollOffset(offsetY) {
          if (offsetY < -40) {
            offsetY = -40;
          }
          this.refreshSpine.node.y = offsetY - 50;
        };
        _proto.setState = function setState(state) {
          this._state = state;
          // switch (state) {
          //     case RefreshOrLoadState.NONE:
          //         this.refreshSpine.setAnimation(0, "refresh_1", false)
          //         break;
          //     case RefreshOrLoadState.READY_TO_REFRESH:
          //         this.refreshSpine.setAnimation(0, "refresh_1", false)
          //         break;
          //     case RefreshOrLoadState.REFRESHING:
          //         this.refreshSpine.setAnimation(0, "refresh_2", true)
          //         break;
          // }
        };

        return JmRefreshHeader;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "refreshSpine", [_dec], {
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

System.register("chunks:///_virtual/JmRoomData.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseData.ts'], function (exports) {
  var _inheritsLoose, cclegacy, BaseData;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      BaseData = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f1d97XKzQFOQIrapJwyx2uo", "JmRoomData", undefined);
      var JmRoomData = exports('default', /*#__PURE__*/function (_BaseData) {
        _inheritsLoose(JmRoomData, _BaseData);
        function JmRoomData() {
          var _this;
          _this = _BaseData.call(this) || this;
          _this._roomData = void 0;
          _this._roomData = {};
          return _this;
        }
        var _proto = JmRoomData.prototype;
        _proto.initRoomData = function initRoomData(roomData) {
          this.updateRoomData(roomData);
        };
        _proto.updateRoomProperty = function updateRoomProperty(k, v) {
          this._roomData[k] = v;
        };
        _proto.updateRoomData = function updateRoomData(roomData) {
          if (this._roomData == null) {
            this._roomData = {};
          }
          for (var k in roomData) {
            this.updateRoomProperty(k, roomData[k]);
          }
        };
        _proto.getIdentities = function getIdentities() {
          return this._roomData["identities"];
        };
        _proto.getIdentity = function getIdentity() {
          return this._roomData["identity"];
        };
        _proto.getRoomNum = function getRoomNum() {
          return this._roomData["roomNum"];
        };
        _proto.getSeats = function getSeats() {
          return this._roomData["seats"];
        };
        return JmRoomData;
      }(BaseData));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/JmRoomDataMgr.ts", ['cc', './JmRoomData.ts'], function (exports) {
  var cclegacy, JmRoomData;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      JmRoomData = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "a2ef4VCWT1BFatm1wCYcUyM", "JmRoomDataMgr", undefined);
      var JmRoomDataMgr = exports('default', /*#__PURE__*/function () {
        function JmRoomDataMgr() {}
        /**初始化房间列表信息
         * */
        JmRoomDataMgr.OnReceiveServerData = function OnReceiveServerData(serverData) {
          this.InitRoomsData(serverData);
        };
        JmRoomDataMgr.InitRoomsData = function InitRoomsData(data) {
          for (var i = 0, len = data.length; i < len; i++) {
            this.InitRoomData(data[i]);
          }
        };
        JmRoomDataMgr.InitRoomData = function InitRoomData(data) {
          var roomKey = data["recordId"];
          if (roomKey) {
            var room = this.GetRoom(roomKey);
            room.initRoomData(data);
          }
        };
        JmRoomDataMgr.CreateRoom = function CreateRoom(roomData) {
          this.InitCurrentRoom(roomData);
        };
        JmRoomDataMgr.CleanRooms = function CleanRooms() {
          this._offset = 0;
          this._roomsData.clear();
          this._roomCfg.clear();
          this._roomsKeys = [];
          this._gameState = 2;
        };
        JmRoomDataMgr.CleanRoom = function CleanRoom(roomKey) {
          var room = this._roomsData.get(roomKey);
          if (room) {
            room = null;
            this._roomsData["delete"](roomKey);
          }
        };
        JmRoomDataMgr.GetOffSet = function GetOffSet() {
          return this._offset || 0;
        };
        JmRoomDataMgr.GetRoomByRoomKey = function GetRoomByRoomKey(roomKey) {
          var room = this._roomsData.get(roomKey);
          if (room) {
            return room;
          }
          return null;
        };
        JmRoomDataMgr.GetRoomNum = function GetRoomNum() {
          var roomData = this.GetRoomByRoomKey(this._currentRoomKey);
          return roomData.getRoomNum();
        };
        JmRoomDataMgr.GetRoomIdentities = function GetRoomIdentities() {
          var roomData = this.GetRoomByRoomKey(this._currentRoomKey);
          return roomData.getIdentities();
        };
        JmRoomDataMgr.GetRoomIdentity = function GetRoomIdentity() {
          var roomData = this.GetRoomByRoomKey(this._currentRoomKey);
          return roomData.getIdentity();
        };
        JmRoomDataMgr.GetRoomSeats = function GetRoomSeats() {
          var roomData = this.GetRoomByRoomKey(this._currentRoomKey);
          return roomData.getSeats();
        };
        JmRoomDataMgr.InitCurrentRoomProto = function InitCurrentRoomProto(roomData) {
          var roomKey = roomData["recordId"];
          this._roomCount = roomData["players"];
          var room = this.GetRoom(roomKey);
          room.initRoomData(roomData);
          this._gameState = roomData["status"];
          this._currentRoomData = roomData;
          this._currentRoomKey = roomKey;
          this._joinRoomsList.unshift(roomData["roomNum"]);
        }

        //当前用户所在房间的房间信息
        ;

        JmRoomDataMgr.InitCurrentRoom = function InitCurrentRoom(roomData) {
          console.log("JmRoomDataMgr.InitCurrentRoom " + JSON.stringify(roomData));
          var roomKey = roomData["recordId"];
          this._isOwner = roomData["judge"];
          this._roomCount = roomData["players"];
          var room = this.GetRoom(roomKey);
          room.initRoomData(roomData);
          this._gameState = roomData["status"];
          this._currentRoomData = roomData;
          this._currentRoomKey = roomKey;
          this._joinRoomsList.unshift(roomData["roomNum"]);
        };
        JmRoomDataMgr.GetRoom = function GetRoom(roomKey) {
          var room = this._roomsData.get(roomKey);
          if (!room) {
            room = new JmRoomData();
            this._roomsData.set(roomKey, room);
            this._roomsKeys.push(roomKey);
          }
          return room;
        };
        JmRoomDataMgr.GetCurrentRoomInfo = function GetCurrentRoomInfo() {
          return this._currentRoomData;
        };
        JmRoomDataMgr.GetCurrentRoomKey = function GetCurrentRoomKey() {
          return this._currentRoomKey || 0;
        };
        JmRoomDataMgr.SetCurrentNullRoomKey = function SetCurrentNullRoomKey() {
          this._currentRoomKey = null;
        };
        JmRoomDataMgr.SetRoomDayOrNight = function SetRoomDayOrNight(currentType) {
          this.currentType = currentType;
        };
        JmRoomDataMgr.GetRoomDayOrNight = function GetRoomDayOrNight() {
          return this.currentType;
        };
        JmRoomDataMgr.delRoomCfg = function delRoomCfg(key) {
          this._roomCfg["delete"](key);
        };
        JmRoomDataMgr.setRoomCfg = function setRoomCfg(key, vule) {
          this._roomCfg.set(key, vule);
        };
        JmRoomDataMgr.getRoomCfg = function getRoomCfg() {
          return this._roomCfg;
        };
        JmRoomDataMgr.getRoomCount = function getRoomCount() {
          return this._roomCount;
        };
        JmRoomDataMgr.setRoomCount = function setRoomCount(count) {
          this._roomCount = count;
        };
        JmRoomDataMgr.setGameState = function setGameState(state) {
          this._gameState = state;
        };
        JmRoomDataMgr.getGameState = function getGameState() {
          return this._gameState;
        };
        JmRoomDataMgr.setGameDay = function setGameDay(bol) {
          this._isDay = bol;
        };
        JmRoomDataMgr.getGameDay = function getGameDay() {
          return this._isDay;
        };
        JmRoomDataMgr.setOwner = function setOwner(bol) {
          this._isOwner = bol;
        };
        JmRoomDataMgr.isOwner = function isOwner() {
          return this._isOwner;
        };
        JmRoomDataMgr.getLoadKey = function getLoadKey() {
          return this._loadKey;
        };
        JmRoomDataMgr.setLoadKey = function setLoadKey(bol) {
          this._loadKey = bol;
        };
        return JmRoomDataMgr;
      }());
      JmRoomDataMgr._roomsData = new Map();
      JmRoomDataMgr._roomsKeys = [];
      JmRoomDataMgr._joinRoomsList = [];
      //玩家加入的房间的堆栈列表
      JmRoomDataMgr._offset = 0;
      JmRoomDataMgr._currentRoomData = void 0;
      JmRoomDataMgr._currentRoomKey = void 0;
      JmRoomDataMgr.currentType = 0;
      JmRoomDataMgr._roomCfg = new Map();
      JmRoomDataMgr._roomCount = 0;
      JmRoomDataMgr._gameState = 2;
      //0已发牌 1过期不能领身份 2未发牌
      JmRoomDataMgr._isDay = true;
      JmRoomDataMgr._isOwner = false;
      JmRoomDataMgr._loadKey = true;
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/LoaderManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts', './Core.ts'], function (exports) {
  var _extends, _inheritsLoose, cclegacy, _decorator, isValid, Font, sp, SpriteFrame, SceneAsset, assetManager, Asset, path, AssetManager, Texture2D, TextureCube, BaseManager, Core;
  return {
    setters: [function (module) {
      _extends = module.extends;
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      isValid = module.isValid;
      Font = module.Font;
      sp = module.sp;
      SpriteFrame = module.SpriteFrame;
      SceneAsset = module.SceneAsset;
      assetManager = module.assetManager;
      Asset = module.Asset;
      path = module.path;
      AssetManager = module.AssetManager;
      Texture2D = module.Texture2D;
      TextureCube = module.TextureCube;
    }, function (module) {
      BaseManager = module.default;
    }, function (module) {
      Core = module.default;
    }],
    execute: function () {
      var _dec, _class3, _class4;
      cclegacy._RF.push({}, "b3bf5M3DHNHcYe1nnNZYr6B", "LoaderManager", undefined);
      var ccclass = _decorator.ccclass;
      var REGEX = /^https?:\/\/.*/;
      var Command = /*#__PURE__*/function () {
        Command.create = function create(onComplete, onProgress) {
          if (onProgress === void 0) {
            onProgress = null;
          }
          var command = Command.cache.pop() || new Command();
          onProgress && command.onProgress.push(onProgress);
          onComplete && command.onComplete.push(onComplete);
          return command;
        };
        Command.put = function put(command) {
          command.onProgress.length = 0;
          command.onComplete.length = 0;
          Command.cache.push(command);
        };
        function Command() {
          this.onProgress = [];
          this.onComplete = [];
        }
        return Command;
      }();
      Command.cache = [];
      var Loader = /*#__PURE__*/function () {
        function Loader() {
          this.assetMap = new Map();
          this.loadingMap = new Map();
        }
        var _proto = Loader.prototype;
        /**
         * 预加载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */
        _proto.preload = function preload(params) {
          return Core.inst.manager.loader.preload(params);
        }

        /**
         * 预加载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto.preloadDir = function preloadDir(params) {
          return Core.inst.manager.loader.preloadDir(params);
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.load = function load(params) {
          var _this = this;
          var key = (params.bundle || 'resources') + "-" + params.type.name + "-" + params.path + "-" + (params.version || '');
          if (this.loadingMap.has(key)) {
            var _command = this.loadingMap.get(key);
            params.onProgress && _command.onProgress.push(params.onProgress);
            params.onComplete && _command.onComplete.push(params.onComplete);
            return;
          }

          // 加载中
          var command = Command.create(params.onComplete, params.onProgress);
          this.loadingMap.set(key, command);

          // 有缓存
          if (this.assetMap.has(key)) {
            var asset = this.assetMap.get(key);
            // 有缓存的情况下不触发onProgress回调
            setTimeout(function () {
              // 加载无效
              if (!_this.loadingMap.has(key)) return;
              _this.loadingMap["delete"](key);
              command.onComplete.forEach(function (cb) {
                return cb(asset);
              });
              Command.put(command);
            }, 0);
            return;
          }
          Core.inst.manager.loader.load(_extends({}, params, {
            onProgress: function onProgress(finish, total, item) {
              if (!_this.loadingMap.has(key)) return;
              command.onProgress.forEach(function (cb) {
                return cb(finish, total, item);
              });
            },
            onComplete: function onComplete(asset) {
              // 加载无效
              if (!_this.loadingMap.has(key)) {
                asset.addRef();
                asset.decRef();
                return;
              }
              _this.loadingMap["delete"](key);
              if (asset) {
                asset.addRef();
                _this.assetMap.set(key, asset);
              }
              command.onComplete.forEach(function (cb) {
                return cb(asset);
              });
              Command.put(command);
            }
          }));
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.loadAsync = function loadAsync(params) {
          var _this2 = this;
          return new Promise(function (resolve) {
            _this2.load(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundel名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.loadDir = function loadDir(params) {
          var _this3 = this;
          var key = (params.bundle || 'resources') + "-" + params.type.name + "-" + params.path + "-" + (params.version || '') + ":";
          if (this.loadingMap.has(key)) {
            var _command2 = this.loadingMap.get(key);
            params.onProgress && _command2.onProgress.push(params.onProgress);
            params.onComplete && _command2.onComplete.push(params.onComplete);
            return;
          }

          // 加载中
          var command = Command.create(params.onComplete, params.onProgress);
          this.loadingMap.set(key, command);
          var results = [];
          this.assetMap.forEach(function (asset, path) {
            if (path.indexOf(key) === 0) {
              results.push(asset);
            }
          });

          // 有缓存
          if (results.length) {
            // 有缓存的情况下不触发onProgress回调
            setTimeout(function () {
              // 加载无效
              if (!_this3.loadingMap.has(key)) return;
              _this3.loadingMap["delete"](key);
              command.onComplete.forEach(function (cb) {
                return cb(results);
              });
              Command.put(command);
            }, 0);
            return;
          }
          Core.inst.manager.loader.loadDir(_extends({}, params, {
            onProgress: function onProgress(finish, total, item) {
              if (!_this3.loadingMap.has(key)) return;
              command.onProgress.forEach(function (cb) {
                return cb(finish, total, item);
              });
            },
            onComplete: function onComplete(assets) {
              // 加载无效
              if (!_this3.loadingMap.has(key)) {
                assets == null || assets.forEach(function (asset) {
                  asset.addRef();
                  asset.decRef();
                });
                return;
              }
              _this3.loadingMap["delete"](key);
              assets == null || assets.forEach(function (asset) {
                asset.addRef();
                _this3.assetMap.set(key + asset.uuid, asset);
              });
              command.onComplete.forEach(function (cb) {
                return cb(results);
              });
              Command.put(command);
            }
          }));
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto.loadDirAsync = function loadDirAsync(params) {
          var _this4 = this;
          return new Promise(function (resolve) {
            _this4.loadDir(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 加载远程资源
         * @example
         * loadRemote({url:'', ext:'.png', onComplete:(result){ }})
         */;
        _proto.loadRemote = function loadRemote(_ref) {
          var _this5 = this;
          var url = _ref.url,
            ext = _ref.ext,
            onComplete = _ref.onComplete;
          if (this.loadingMap.has(url)) {
            var _command3 = this.loadingMap.get(url);
            onComplete && _command3.onComplete.push(onComplete);
            return;
          }

          // 加载中
          var command = Command.create(onComplete);
          this.loadingMap.set(url, command);

          // 有缓存
          if (this.assetMap.has(url)) {
            var asset = this.assetMap.get(url);
            // 有缓存的情况下不触发onProgress回调
            setTimeout(function () {
              // 加载无效
              if (!_this5.loadingMap.has(url)) return;
              _this5.loadingMap["delete"](url);
              command.onComplete.forEach(function (cb) {
                return cb(asset);
              });
              Command.put(command);
            }, 0);
            return;
          }
          Core.inst.manager.loader.loadRemote({
            url: url,
            ext: ext,
            onComplete: function onComplete(asset) {
              // 加载无效
              if (!_this5.loadingMap.has(url)) {
                asset.addRef();
                asset.decRef();
                return;
              }
              _this5.loadingMap["delete"](url);
              if (asset) {
                asset.addRef();
                _this5.assetMap.set(url, asset);
              }
              command.onComplete.forEach(function (cb) {
                return cb(asset);
              });
              Command.put(command);
            }
          });
        }

        /**
         * 加载远程资源
         * @example
         * await loadRemoteAsync({url:'', ext:'.png'})
         */;
        _proto.loadRemoteAsync = function loadRemoteAsync(params) {
          var _this6 = this;
          return new Promise(function (resolve) {
            _this6.loadRemote(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 设置字体资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setFont({target:label, path:'font/num', bundle:'resources', onComplete:(succ)=>{}})
         * setFont({target:label, url:'http://img/a/font',ext:'.ttf', onComplete:(succ)=>{}})
         */;
        _proto.setFont = function setFont(params) {
          if (params.url) {
            this.loadRemote({
              url: params.url,
              ext: params.ext,
              onComplete: function onComplete(font) {
                if (!font || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                params.target.font = font;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          } else {
            this.load({
              path: params.path,
              bundle: params.bundle,
              type: Font,
              onComplete: function onComplete(font) {
                if (!font || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                params.target.font = font;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          }
        }

        /**
         * 设置Spine资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setSpine({target:spine, path:'spine/role', bundle:'resources', onComplete:(succ)=>{}})
         */;
        _proto.setSpine = function setSpine(params) {
          this.load({
            path: params.path,
            bundle: params.bundle,
            type: sp.SkeletonData,
            onComplete: function onComplete(skeletonData) {
              if (!skeletonData || !isValid(params.target)) {
                params.onFail && params.onFail();
                params.onComplete && params.onComplete(false);
                return;
              }
              params.target.skeletonData = skeletonData;
              params.onSuccess && params.onSuccess();
              params.onComplete && params.onComplete(true);
            }
          });
        }

        /**
         * 设置图片资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setSprite({target:sprite, path:'img/a/spriteFrame', bundle:'resources', onComplete:(succ)=>{}})
         * setSprite({target:sprite, url:'http://img/a/avatar',ext:'.png', onComplete:(succ)=>{}})
         */;
        _proto.setSprite = function setSprite(params) {
          if (params.url) {
            this.loadRemote({
              url: params.url,
              ext: params.ext,
              onComplete: function onComplete(imageAsset) {
                if (!imageAsset || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                var spriteFrame = SpriteFrame.createWithImage(imageAsset);
                params.target.spriteFrame = spriteFrame;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          } else {
            this.load({
              path: params.path,
              bundle: params.bundle,
              type: SpriteFrame,
              onComplete: function onComplete(spriteFrame) {
                if (!spriteFrame || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                params.target.spriteFrame = spriteFrame;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          }
        }

        /**
         * 释放所有资源
         */;
        _proto.releaseAll = function releaseAll() {
          var assetList = [];
          this.assetMap.forEach(function (asset) {
            return assetList.push(asset);
          });
          this.assetMap.clear();
          this.loadingMap.clear();
          // 延迟一秒释放资源
          setTimeout(function () {
            assetList.forEach(function (asset) {
              return asset.decRef();
            });
          }, 1000);
        };
        return Loader;
      }();
      var LoaderManager = exports('default', (_dec = ccclass('LoaderManager'), _dec(_class3 = (_class4 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(LoaderManager, _BaseManager);
        function LoaderManager() {
          return _BaseManager.apply(this, arguments) || this;
        }
        var _proto2 = LoaderManager.prototype;
        _proto2.handle = function handle(_handle, _ref2) {
          var _this7 = this;
          var bundle = _ref2.bundle,
            version = _ref2.version,
            path = _ref2.path,
            type = _ref2.type,
            onProgress = _ref2.onProgress,
            _onComplete = _ref2.onComplete;
          if (!_handle) {
            this.error('handle is empty');
            return _onComplete && _onComplete(null);
          }
          if (!path) {
            this.error(_handle + " fail. path is empty");
            return _onComplete && _onComplete(null);
          }
          if (!bundle) bundle = 'resources';
          var args = [path];
          if (type) args.push(type);
          if (onProgress) args.push(onProgress);
          args.push(function (err, res) {
            if (err) {
              _this7.error(_handle + " \"" + path + "\" fail", err);
              if (type === SpriteFrame && path.slice(-12) !== '/spriteFrame') {
                _this7.warn("\u52A0\u8F7DSpriteFrame\u7C7B\u578B\u7684\u8D44\u6E90, \u8DEF\u5F84\u53EF\u80FD\u9700\u8981\u4EE5/spriteFrame\u7ED3\u5C3E, \u5982: \u300C" + path + "\u300D -> \u300C" + path + "/spriteFrame\u300D");
              } else if (type === Texture2D && path.slice(-8) !== '/texture') {
                _this7.warn("\u52A0\u8F7DTexture2D\u7C7B\u578B\u7684\u8D44\u6E90, \u8DEF\u5F84\u53EF\u80FD\u9700\u8981\u4EE5/texture\u7ED3\u5C3E, \u5982: \u300C" + path + "\u300D -> \u300C" + path + "/texture\u300D");
              } else if (type === TextureCube && path.slice(-12) !== '/textureCube') {
                _this7.warn("\u52A0\u8F7DTextureCube\u7C7B\u578B\u7684\u8D44\u6E90, \u8DEF\u5F84\u53EF\u80FD\u9700\u8981\u4EE5/textureCube\u7ED3\u5C3E, \u5982: \u300C" + path + "\u300D -> \u300C" + path + "/textureCube\u300D");
              }
              _onComplete && _onComplete(null);
            } else {
              _onComplete && _onComplete(res);
            }
          });
          this.loadBundle({
            bundle: bundle,
            version: version,
            onComplete: function onComplete(bundle) {
              if (!bundle) return _onComplete && _onComplete(null);
              bundle[_handle](args[0], args[1], args[2], args[3]);
            }
          });
        }

        /**
         * 预加载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto2.preload = function preload(params) {
          if (SceneAsset === params.type) {
            this.handle('preloadScene', {
              path: params.path,
              bundle: params.bundle,
              version: params.version,
              onProgress: params.onProgress,
              onComplete: params.onComplete
            });
          } else {
            this.handle('preload', params);
          }
        }

        /**
         * 预加载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto2.preloadDir = function preloadDir(params) {
          this.handle('preloadDir', params);
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto2.load = function load(params) {
          if (SceneAsset === params.type) {
            this.handle('loadScene', {
              path: params.path,
              bundle: params.bundle,
              version: params.version,
              onProgress: params.onProgress,
              onComplete: params.onComplete
            });
          } else {
            this.handle('load', params);
          }
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto2.loadAsync = function loadAsync(params) {
          var _this8 = this;
          return new Promise(function (resolve) {
            _this8.load(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto2.loadDir = function loadDir(params) {
          this.handle('loadDir', params);
        }

        /**
         * 加载bundle下的资源
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto2.loadDirAsync = function loadDirAsync(params) {
          var _this9 = this;
          return new Promise(function (resolve) {
            _this9.loadDir(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 销毁一个bundle中对应path和type的资源
         * @param params.bundle 默认为resources，如果是远程bundle，则使用url末位作为bundle名
         * @param params.path bundle下的相对路径
         * @param params.type 资源类型
         */;
        _proto2.release = function release(_ref3) {
          var _assetManager$getBund;
          var path = _ref3.path,
            bundle = _ref3.bundle,
            type = _ref3.type;
          if (!bundle) bundle = 'resources';
          (_assetManager$getBund = assetManager.getBundle(bundle)) == null || _assetManager$getBund.release(path, type);
        }

        /**
         * 销毁一个bundle中所有的资源
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundle名
         */;
        _proto2.releaseAll = function releaseAll(bundle) {
          if (!bundle) bundle = 'resources';
          var _bundle = assetManager.getBundle(bundle);
          if (!_bundle) return;
          // 只释放自己内部的资源，依赖的资源只减少引用计数
          _bundle.getDirWithPath('/', Asset).forEach(function (asset) {
            _bundle.release(asset.path, asset.ctor);
          });
          // cocos提供的方法会将依赖的资源也卸载(这个设计很奇怪)
          // _bundle?.releaseAll();
        }

        /**
         * 销毁一个bundle中未使用的资源
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundle名
         */;
        _proto2.releaseUnused = function releaseUnused(bundle) {
          var _assetManager$getBund2;
          if (!bundle) bundle = 'resources';
          //@ts-ignore
          (_assetManager$getBund2 = assetManager.getBundle(bundle)) == null || _assetManager$getBund2.releaseUnusedAssets();
        }

        /**
         * 加载一个bundle
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto2.loadBundle = function loadBundle(_ref4) {
          var bundle = _ref4.bundle,
            version = _ref4.version,
            onComplete = _ref4.onComplete;
          if (!bundle) bundle = 'resources';
          if (version) {
            assetManager.loadBundle(bundle, {
              version: version
            }, function (err, bundle) {
              onComplete && onComplete(err ? null : bundle);
            });
          } else {
            assetManager.loadBundle(bundle, function (err, bundle) {
              onComplete && onComplete(err ? null : bundle);
            });
          }
        }

        /**
         * 加载一个bundle
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto2.loadBundleAsync = function loadBundleAsync(params) {
          var _this11 = this;
          return new Promise(function (resolve) {
            _this11.loadBundle(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 获取一个已经加载的bundle
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundle名
         */;
        _proto2.getBundle = function getBundle(bundle) {
          if (!bundle) bundle = 'resources';
          return assetManager.getBundle(bundle);
        }

        /**
         * 移除一个已经加载的bundle
         * @param bundle 默认为resources，如果是远程bundle，则使用url末位作为bundle名
         */;
        _proto2.removeBundle = function removeBundle(bundle) {
          if (!bundle) bundle = 'resources';
          var b = assetManager.getBundle(bundle);
          if (b) assetManager.removeBundle(b);
        }

        /**
         * 重载一个bundle(只重载资源列表)
         * - 只有远程bundle支持重载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto2.reloadBundle = function reloadBundle(_ref5) {
          var _assetManager$cacheMa,
            _this12 = this;
          var bundle = _ref5.bundle,
            version = _ref5.version,
            onComplete = _ref5.onComplete;
          if (!bundle) bundle = 'resources';
          var baseUrl = '';
          var configUrl = '';
          if (REGEX.test(bundle)) {
            baseUrl = bundle;
            var suffix = version ? version + "." : '';
            configUrl = baseUrl + "config." + suffix + "json";
          } else {
            baseUrl = assetManager.downloader.remoteServerAddress + "remote/" + bundle + "/";
            var _suffix = version ? version + "." : '';
            configUrl = baseUrl + "config." + _suffix + "json";
          }

          // 清除可能存在的config缓存
          (_assetManager$cacheMa = assetManager.cacheManager) == null || _assetManager$cacheMa.removeCache(configUrl);
          assetManager.loadRemote(configUrl, function (err, data) {
            if (err) {
              _this12.error("\u4E0B\u8F7DBundle\u914D\u7F6E\u5931\u8D25: " + configUrl);
              onComplete == null || onComplete(null);
              return;
            }
            _this12.releaseAll(path.basename(bundle));
            _this12.removeBundle(path.basename(bundle));
            var ab = new AssetManager.Bundle();
            var config = data.json;
            config.base = baseUrl;
            ab.init(config);
            onComplete == null || onComplete(ab);
          });
        }

        /**
         * 重载一个bundle(只重载资源列表)
         * - 只有远程bundle支持重载
         * @param params.bundle 默认为resources, 可以是项目中的bundle名，也可以是远程bundle的url(url末位作为bundle名)，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#%E5%8A%A0%E8%BD%BD-asset-bundle
         * @param params.version 远程bundle的版本，参考https://docs.cocos.com/creator/manual/zh/asset/bundle.html#asset-bundle-%E7%9A%84%E7%89%88%E6%9C%AC
         */;
        _proto2.reloadBundleAsync = function reloadBundleAsync(params) {
          var _this13 = this;
          return new Promise(function (resolve) {
            _this13.reloadBundle(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 加载远程资源
         * @example
         * loadRemote({url:'', ext:'.png', onComplete:(result){ }})
         */;
        _proto2.loadRemote = function loadRemote(_ref6) {
          var _this14 = this;
          var url = _ref6.url,
            ext = _ref6.ext,
            onComplete = _ref6.onComplete;
          if (ext) {
            assetManager.loadRemote(url, {
              ext: ext
            }, function (error, res) {
              if (error) {
                _this14.error("loadRemote " + url + " fail");
                return onComplete && onComplete(null);
              }
              onComplete && onComplete(res);
            });
          } else {
            assetManager.loadRemote(url, function (error, res) {
              if (error) {
                _this14.error("loadRemote " + url + " fail");
                return onComplete && onComplete(null);
              }
              onComplete && onComplete(res);
            });
          }
        }

        /**
         * 加载远程资源
         * @example
         * await loadRemoteAsync({url:'', ext:'.png'})
         */;
        _proto2.loadRemoteAsync = function loadRemoteAsync(params) {
          var _this15 = this;
          return new Promise(function (resolve) {
            _this15.loadRemote(_extends({}, params, {
              onComplete: resolve
            }));
          });
        }

        /**
         * 设置字体资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setFont({target:label, path:'font/num', bundle:'resources', onComplete:(succ)=>{}})
         * setFont({target:label, url:'http://img/a/font',ext:'.ttf', onComplete:(succ)=>{}})
         */;
        _proto2.setFont = function setFont(params) {
          if (params.url) {
            this.loadRemote({
              url: params.url,
              ext: params.ext,
              onComplete: function onComplete(font) {
                if (!font || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                params.target.font = font;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          } else {
            this.load({
              path: params.path,
              bundle: params.bundle,
              type: Font,
              onComplete: function onComplete(font) {
                if (!font || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                params.target.font = font;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          }
        }

        /**
         * 设置Spine资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setSpine({target:spine, path:'spine/role', bundle:'resources', onComplete:(succ)=>{}})
         */;
        _proto2.setSpine = function setSpine(params) {
          this.load({
            path: params.path,
            bundle: params.bundle,
            type: sp.SkeletonData,
            onComplete: function onComplete(skeletonData) {
              if (!skeletonData || !isValid(params.target)) {
                params.onFail && params.onFail();
                params.onComplete && params.onComplete(false);
                return;
              }
              params.target.skeletonData = skeletonData;
              params.onSuccess && params.onSuccess();
              params.onComplete && params.onComplete(true);
            }
          });
        }

        /**
         * 设置图片资源
         * @param params.bundle 默认为resources
         * @param params.path bundle下的相对路径
         * 
         * @example
         * setSprite({target:sprite, path:'img/a/spriteFrame', bundle:'resources', onComplete:(succ)=>{}})
         * setSprite({target:sprite, url:'http://img/a/avatar',ext:'.png', onComplete:(succ)=>{}})
         */;
        _proto2.setSprite = function setSprite(params) {
          if (params.url) {
            this.loadRemote({
              url: params.url,
              ext: params.ext,
              onComplete: function onComplete(imageAsset) {
                if (!imageAsset || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                var spriteFrame = SpriteFrame.createWithImage(imageAsset);
                params.target.spriteFrame = spriteFrame;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          } else {
            this.load({
              path: params.path,
              bundle: params.bundle,
              type: SpriteFrame,
              onComplete: function onComplete(spriteFrame) {
                if (!spriteFrame || !isValid(params.target)) {
                  params.onFail && params.onFail();
                  params.onComplete && params.onComplete(false);
                  return;
                }
                params.target.spriteFrame = spriteFrame;
                params.onSuccess && params.onSuccess();
                params.onComplete && params.onComplete(true);
              }
            });
          }
        };
        return LoaderManager;
      }(BaseManager), _class4.Loader = Loader, _class4)) || _class3));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/logger.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "0b581Lotn1LqYPYEsoeRs/Q", "logger", undefined);
      function empty() {}

      /**
       * 日志管理类，用于统一日志输出格式
       */
      var Logger = exports('Logger', /*#__PURE__*/function () {
        function Logger() {}
        /**
         * 创建日志输出函数
         */
        Logger.create = function create(level, styleColor, title, titleColor) {
          if (this.setting.filter.indexOf(level) == -1) {
            return empty;
          }
          return window.console[level].bind(window.console, title + " [" + new Date().toLocaleString() + "]");
        }

        /**
         * 用于输出一般信息
         */;
        _createClass(Logger, [{
          key: "log",
          get: function get() {
            return Logger.create('log', '#6495ed', '[LOG]', '#000');
          }

          /**
           * 用于输出警告信息
           */
        }, {
          key: "warn",
          get: function get() {
            return Logger.create('warn', '#ff7f50', '[WARN]', '#000');
          }

          /**
           * 用于输出错误信息
           */
        }, {
          key: "error",
          get: function get() {
            return Logger.create('error', '#ff4757', '[ERROR]', '#000');
          }

          /**
           * 用于输出调试信息
           */
        }, {
          key: "debug",
          get: function get() {
            return Logger.create('log', '#ff6347', '[DEBUG]', '#000');
          }

          /**
           * 用于输出成功信息
           */
        }, {
          key: "success",
          get: function get() {
            return Logger.create('log', '#00ae9d', '[SUCC]', '#000');
          }
        }]);
        return Logger;
      }());
      Logger.setting = {
        filter: ['error', 'log', 'warn']
      };
      var logger = exports('default', new Logger());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/main", ['./debug-view-runtime-control.ts', './AppInit.ts', './app.ts', './handle.ts', './setting.ts', './BaseData.ts', './JmRoomData.ts', './JmRoomDataMgr.ts', './JmClickComponent.ts', './JmHorizontalListView.ts', './JmListView.ts', './JmListViewItem.ts', './JmNodePoolMgr.ts', './JmRefreshFooter.ts', './JmRefreshHeader.ts', './RefreshOrLoadState.ts', './Core.ts', './BaseAppInit.ts', './BaseControl.ts', './BaseController.ts', './BaseManager.ts', './BaseModel.ts', './BaseView.ts', './debug.ts', './logger.ts', './storage.ts', './task.ts', './EventManager.ts', './LoaderManager.ts', './Audio.ts', './AudioEngine.ts', './AudioManager.ts', './SoundManager.ts', './TimerManager.ts', './UIManager.ts', './UIMgrLoading.ts', './UIMgrShade.ts', './UIMgrToast.ts', './UIMgrToastCell.ts', './UIMgrZOrder.ts'], function () {
  return {
    setters: [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/RefreshOrLoadState.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "3fe70F82vZMAIjqh8gIdMaF", "RefreshOrLoadState", undefined);
      var RefreshOrLoadState = exports('RefreshOrLoadState', /*#__PURE__*/function (RefreshOrLoadState) {
        RefreshOrLoadState[RefreshOrLoadState["NONE"] = 0] = "NONE";
        RefreshOrLoadState[RefreshOrLoadState["READY_TO_REFRESH"] = 1] = "READY_TO_REFRESH";
        RefreshOrLoadState[RefreshOrLoadState["REFRESHING"] = 2] = "REFRESHING";
        RefreshOrLoadState[RefreshOrLoadState["COMPLETE"] = 3] = "COMPLETE";
        RefreshOrLoadState[RefreshOrLoadState["COMPLETING"] = 4] = "COMPLETING";
        RefreshOrLoadState[RefreshOrLoadState["EMPTY"] = 5] = "EMPTY";
        return RefreshOrLoadState;
      }({})); //第一次加载完就没有数据，会直接显示空布局，这时就不要下拉刷新了，也不用显示COMPLETE的文案
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/setting.ts", ['cc', './SoundManager.ts', './UIManager.ts'], function () {
  var cclegacy, SoundManager, UIManager;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      SoundManager = module.default;
    }, function (module) {
      UIManager = module.default;
    }],
    execute: function () {
      cclegacy._RF.push({}, "9a8d2pAnrJAWIiDp94P7b0z", "setting", undefined);

      // 预加载的UI(符合app.lib.task.createAny规则)
      UIManager.setting.preload = ['PageMain'];
      // 默认UI, 会在首屏流程后自动show
      UIManager.setting.defaultUI = 'PageMain';
      // 是否自动适配分辨率策略
      UIManager.setting.autoFit = true; // 开启后，会弃用项目设置中的适配策略，并自动根据设备分辨率与设计分辨率计算出新的适配策略
      // 弹窗默认遮罩展现动画配置
      UIManager.setting.shade = {
        delay: 0,
        begin: 100,
        end: 200,
        speed: 400,
        blur: true
      };

      // 预加载的音频(按数组顺序依次预加载)
      SoundManager.setting.preload = [];
      // 默认音乐, 会在首屏流程后自动播放
      SoundManager.setting.defaultMusicName = '';
      // 默认音效, 会在Button被点击后播放
      SoundManager.setting.defaultEffectName = 'effect/button';
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/SoundManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './BaseManager.ts', './AudioEngine.ts'], function (exports) {
  var _inheritsLoose, _extends, _createClass, _asyncToGenerator, _regeneratorRuntime, cclegacy, _decorator, AudioClip, game, Game, isValid, Button, sys, Core, BaseManager, AudioEngine;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
      _extends = module.extends;
      _createClass = module.createClass;
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      AudioClip = module.AudioClip;
      game = module.game;
      Game = module.Game;
      isValid = module.isValid;
      Button = module.Button;
      sys = module.sys;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      BaseManager = module.default;
    }, function (module) {
      AudioEngine = module.default;
    }],
    execute: function () {
      var _dec, _class, _class2;
      cclegacy._RF.push({}, "58002Ha2adOWbt2LDr8rmBT", "SoundManager", undefined);
      var ccclass = _decorator.ccclass;
      var storage = {
        set: function set(key, value) {
          sys.localStorage.setItem(key, JSON.stringify(value));
        },
        get: function get(key) {
          var data = sys.localStorage.getItem(key);
          if (data && typeof data === 'string') {
            return JSON.parse(data);
          }
          return undefined;
        }
      };

      /**
       * 音乐名字枚举
       */
      var MusicName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });

      /**
       * 音效名字枚举
       */
      var EffectName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });
      var BundleName = 'app-sound';
      var SoundManager = exports('default', (_dec = ccclass('SoundManager'), _dec(_class = (_class2 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(SoundManager, _BaseManager);
        function SoundManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _this.musicMuteCacheKey = 'SoundManager:MusicMute';
          _this.effectMuteCacheKey = 'SoundManager:EffectMute';
          _this.musicVolumeScaleCacheKey = 'SoundManager:MusicVolumeScale';
          _this.effectVolumeScaleCacheKey = 'SoundManager:EffectVolumeScale';
          _this.defaultMusicName = '';
          _this.defaultMusicVolume = 1;
          _this.defaultEffectName = '';
          _this.defaultEffectVolume = 1;
          _this.audioCache = {};
          _this.effectInterval = {};
          _this.playingMusic = {
            uuid: '',
            id: -1,
            name: '',
            volume: 1,
            playing: false,
            paused: false
          };
          return _this;
        }
        var _proto = SoundManager.prototype;
        _proto.init = function init(finish) {
          var _setting$preload;
          var setting = SoundManager.setting;

          // 默认音乐
          if (setting.defaultMusicName) this.defaultMusicName = setting.defaultMusicName;
          if (typeof setting.defaultMusicVolume === 'number') this.defaultMusicVolume = setting.defaultMusicVolume;

          // 默认按钮音效
          if (setting.defaultEffectName) this.defaultEffectName = setting.defaultEffectName;
          if (typeof setting.defaultEffectVolume === 'number') this.defaultEffectVolume = setting.defaultEffectVolume;
          if (this.musicMuteCacheKey) {
            var musicMute = storage.get(this.musicMuteCacheKey) === true;
            AudioEngine.inst.setMusicMute(musicMute);
          } else {
            this.warn('musicMuteCacheKey不能为空');
          }
          if (this.effectMuteCacheKey) {
            var effectMute = storage.get(this.effectMuteCacheKey) === true;
            AudioEngine.inst.setGlobalEffectsMute(effectMute);
          } else {
            this.warn('effectMuteCacheKey不能为空');
          }
          if (this.musicVolumeScaleCacheKey) {
            var musicVolumeScale = storage.get(this.musicVolumeScaleCacheKey);
            if (typeof musicVolumeScale === 'number') AudioEngine.inst.setMusicVolumeScale(musicVolumeScale);
          } else {
            this.warn('musicVolumeScaleCacheKey不能为空');
          }
          if (this.effectVolumeScaleCacheKey) {
            var effectVolumeScale = storage.get(this.effectVolumeScaleCacheKey);
            if (typeof effectVolumeScale === 'number') AudioEngine.inst.setGlobalEffectsVolumeScale(effectVolumeScale);
          } else {
            this.warn('effectVolumeScaleCacheKey不能为空');
          }
          _BaseManager.prototype.init.call(this, finish);

          // 预加载
          (_setting$preload = setting.preload) == null || _setting$preload.forEach(function (path) {
            Core.inst.manager.loader.preload({
              bundle: BundleName,
              type: AudioClip,
              path: path
            });
          });
        };
        _proto.onLoad = function onLoad() {
          game.on(Game.EVENT_HIDE, function () {
            AudioEngine.inst.pauseAll();
          });
          game.on(Game.EVENT_SHOW, function () {
            AudioEngine.inst.resumeAll();
          });
        }

        /**
         * 预加载声音资源
         * @param name sound路径
         * @param bundle Bundle名，默认为app-sound
         */;
        _proto.preload = function preload(name) {
          var _ref, _ref2;
          var bundleName = (arguments.length <= 1 ? 0 : arguments.length - 1) >= 1 && typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string' ? (arguments.length <= 1 ? undefined : arguments[1]) || BundleName : BundleName;
          var complete = (arguments.length <= 1 ? 0 : arguments.length - 1) >= 1 && (_ref = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref < 1 || arguments.length <= _ref ? undefined : arguments[_ref]) instanceof Function ? (_ref2 = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref2 < 1 || arguments.length <= _ref2 ? undefined : arguments[_ref2]) : null;
          if (!name) {
            this.error('preload', 'fail');
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }
          if (name.indexOf('effect') !== 0 && name.indexOf('music') !== 0) {
            this.error('preload', 'fail', name);
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }

          // 远程加载
          Core.inst.manager.loader.preload({
            bundle: bundleName,
            path: name,
            type: AudioClip,
            onComplete: complete
          });
        }

        /**
         * 加载声音资源
         * @param name sound路径
         * @param bundle Bundle名，默认为app-sound
         * @param progress 加载进度回调
         * @param complete 加载完成回调
         */;
        _proto.load = function load(name) {
          var _ref3,
            _ref4,
            _ref5,
            _ref6,
            _ref7,
            _this2 = this;
          var bundleName = (arguments.length <= 1 ? 0 : arguments.length - 1) >= 1 && typeof (arguments.length <= 1 ? undefined : arguments[1]) === 'string' ? (arguments.length <= 1 ? undefined : arguments[1]) || BundleName : BundleName;
          var progress = (arguments.length <= 1 ? 0 : arguments.length - 1) >= 2 && (_ref3 = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref3 < 1 || arguments.length <= _ref3 ? undefined : arguments[_ref3]) instanceof Function && (_ref4 = (arguments.length <= 1 ? 0 : arguments.length - 1) - 2 + 1, _ref4 < 1 || arguments.length <= _ref4 ? undefined : arguments[_ref4]) instanceof Function ? (_ref5 = (arguments.length <= 1 ? 0 : arguments.length - 1) - 2 + 1, _ref5 < 1 || arguments.length <= _ref5 ? undefined : arguments[_ref5]) : null;
          var complete = (arguments.length <= 1 ? 0 : arguments.length - 1) >= 1 && (_ref6 = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref6 < 1 || arguments.length <= _ref6 ? undefined : arguments[_ref6]) instanceof Function ? (_ref7 = (arguments.length <= 1 ? 0 : arguments.length - 1) - 1 + 1, _ref7 < 1 || arguments.length <= _ref7 ? undefined : arguments[_ref7]) : null;
          if (!name) {
            this.error('load', 'fail');
            complete && setTimeout(function () {
              if (!isValid(_this2)) return;
              complete(null);
            });
            return;
          }
          var soundName = bundleName + "://" + name;

          // 判断有无缓存
          var audio = this.audioCache[soundName];
          if (audio) {
            complete && setTimeout(function () {
              if (!isValid(_this2)) return;
              complete(audio);
            });
            return;
          }

          // 远程加载
          Core.inst.manager.loader.load({
            path: name,
            bundle: bundleName,
            type: AudioClip,
            onProgress: progress,
            onComplete: function onComplete(audioClip) {
              if (!isValid(_this2)) return;
              if (audioClip) {
                _this2.audioCache[soundName] = audioClip;
                complete && complete(audioClip);
              } else {
                complete && complete(null);
              }
            }
          });
        }

        /**
         * 释放声音资源
         * @param name 声音路径
         * @param bundle Bundle名，默认为app-sound
         */;
        _proto.release = function release(name, bundle) {
          var bundleName = bundle || BundleName;
          var soundName = bundleName + "://" + name;
          delete this.audioCache[soundName];
          Core.inst.manager.loader.release({
            bundle: bundleName,
            path: name,
            type: AudioClip
          });
        }

        /**
         * 播放默认音乐
         */;
        _proto.playDefaultMusic = function playDefaultMusic(onPlay) {
          if (this.defaultMusicName) {
            this.playMusic({
              name: this.defaultMusicName,
              volume: this.defaultMusicVolume,
              onPlay: onPlay
            });
          } else {
            this.warn('defaultMusicName 不存在');
          }
        }

        /**
         * 播放默认音效
         */;
        _proto.playDefaultEffect = function playDefaultEffect(onPlay) {
          if (this.defaultEffectName) {
            this.playEffect({
              name: this.defaultEffectName,
              volume: this.defaultEffectVolume,
              onPlay: onPlay
            });
          } else {
            this.warn('defaultEffectName 不存在');
          }
        }

        /**
         * 设置按钮点击播放的音效，优先级高于默认音效
         * @param name 音效(如果为空，则使用默认音效)
         * @param opts.volume 音量
         * @param opts.interval 多少秒内不会重复播放
         */;
        _proto.setButtonEffect = function setButtonEffect(target, name, opts) {
          if (name) {
            var _ref8 = opts || {},
              _ref8$volume = _ref8.volume,
              volume = _ref8$volume === void 0 ? 1 : _ref8$volume,
              _ref8$interval = _ref8.interval,
              interval = _ref8$interval === void 0 ? 0 : _ref8$interval;
            //@ts-ignore
            target.node['useDefaultEffect'] = false;
            target.node.targetOff(this);
            target.node.on(Button.EventType.CLICK, function () {
              this.playEffect({
                name: name,
                volume: volume,
                interval: interval
              });
            }, this);
          } else {
            //@ts-ignore
            target.node['useDefaultEffect'] = true;
            target.node.targetOff(this);
          }
        }

        /**
         * 播放音效
         * @param name 音效
         * @param bundle Bundle名，默认为app-sound
         * @param loop 循环播放
         * @param volume 音量
         * @param interval 多少秒内不会重复播放
         */;
        _proto.playEffect = function playEffect(_ref9) {
          var _this3 = this;
          var name = _ref9.name,
            bundle = _ref9.bundle,
            _ref9$volume = _ref9.volume,
            volume = _ref9$volume === void 0 ? 1 : _ref9$volume,
            _ref9$loop = _ref9.loop,
            loop = _ref9$loop === void 0 ? false : _ref9$loop,
            _ref9$interval = _ref9.interval,
            interval = _ref9$interval === void 0 ? 0 : _ref9$interval,
            onEnded = _ref9.onEnded,
            onPlay = _ref9.onPlay,
            onError = _ref9.onError;
          if (!name) {
            onError && onError();
            return;
          }
          var bundleName = bundle || BundleName;
          var soundName = bundleName + "://" + name;

          // 静音不允许播放
          if (this.isEffectMute) {
            onError && onError();
            return;
          }
          // 正在播放中，不允许重复播放
          if (this.effectInterval[soundName] && Date.now() < this.effectInterval[soundName]) {
            onError && onError();
            return;
          }

          // 加载音乐
          this.load(name, bundleName, function (audioClip) {
            if (!isValid(_this3)) {
              onError && onError();
              return;
            }
            // 静音不允许播放
            if (_this3.isEffectMute) {
              onError && onError();
              return;
            }
            // 正在播放中，不允许重复播放
            if (_this3.effectInterval[soundName] && Date.now() < _this3.effectInterval[soundName]) {
              onError && onError();
              return;
            }
            if (!audioClip) {
              _this3.error("playEffect " + name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
              onError && onError();
              return;
            }
            if (interval > 0) {
              _this3.effectInterval[soundName] = Date.now() + interval * 1000;
            }
            AudioEngine.inst.playEffect(audioClip, volume, loop, onPlay, onEnded);
          });
        }

        /**
         * 播放音效
         * @param name 音效
         * @param bundle Bundle名，默认为app-sound
         * @param loop 循环播放
         * @param volume 音量
         * @param interval 多少秒内不会重复播放
         * @returns 如果Promise返回值是null(非真)，则播放失败
         */;
        _proto.playEffectAsync = /*#__PURE__*/function () {
          var _playEffectAsync = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(params) {
            var _this4 = this;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  return _context.abrupt("return", new Promise(function (resolve) {
                    _this4.playEffect(_extends({}, params, {
                      onPlay: function onPlay(audioID) {
                        resolve(audioID);
                      },
                      onError: function onError() {
                        resolve(null);
                      }
                    }));
                  }));
                case 1:
                case "end":
                  return _context.stop();
              }
            }, _callee);
          }));
          function playEffectAsync(_x) {
            return _playEffectAsync.apply(this, arguments);
          }
          return playEffectAsync;
        }()
        /**
         * 暂停音效
         * @param id 
         * @returns 
         */;

        _proto.pauseEffect = function pauseEffect(id) {
          return AudioEngine.inst.pauseEffect(id);
        }

        /**
         * 暂停所有音效
         * @returns 
         */;
        _proto.pauseAllEffects = function pauseAllEffects() {
          return AudioEngine.inst.pauseAllEffects();
        }

        /**
         * 恢复音效
         * @param id 
         * @returns 
         */;
        _proto.resumeEffect = function resumeEffect(id) {
          return AudioEngine.inst.resumeEffect(id);
        }

        /**
         * 恢复所有音效
         * @returns 
         */;
        _proto.resumeAllEffects = function resumeAllEffects() {
          return AudioEngine.inst.resumeAllEffects();
        }

        /**
         * 停止音效
         * @param id 
         * @returns 
         */;
        _proto.stopEffect = function stopEffect(id) {
          return AudioEngine.inst.stopEffect(id);
        }

        /**
         * 停止所有音效
         * @returns 
         */;
        _proto.stopAllEffects = function stopAllEffects() {
          return AudioEngine.inst.stopAllEffects();
        }

        /**
         * 播放音乐
         * @param volume 音量
         * @param bundle Bundle名，默认为app-sound
         * @param force 是否强制重新播放
         */;
        _proto.playMusic = function playMusic(_ref10) {
          var _this5 = this;
          var name = _ref10.name,
            bundle = _ref10.bundle,
            _ref10$volume = _ref10.volume,
            volume = _ref10$volume === void 0 ? 1 : _ref10$volume,
            _ref10$force = _ref10.force,
            force = _ref10$force === void 0 ? false : _ref10$force,
            onPlay = _ref10.onPlay,
            onError = _ref10.onError;
          if (!name) {
            onError && onError();
            return;
          }
          var bundleName = bundle || BundleName;
          var soundName = bundleName + "://" + name;

          // 该音乐正在播放中
          if (!force && this.playingMusic.id !== -1 && this.playingMusic.name === soundName) {
            AudioEngine.inst.setMusicVolume(volume);
            onPlay && onPlay();
            return;
          }

          // 先停止当前音乐
          this.stopMusic();

          // 播放操作uuid
          var uuid = this.createUUID();
          this.playingMusic.uuid = uuid;
          // 记录要播放音乐的名字
          this.playingMusic.name = soundName;
          // 记录要播放音乐的音量
          this.playingMusic.volume = volume;
          // 记录音乐状态
          this.playingMusic.playing = true;
          this.playingMusic.paused = false;

          // 静音
          if (this.isMusicMute) {
            onPlay && onPlay();
            return;
          }

          // 加载音乐
          this.load(name, bundleName, function (audioClip) {
            if (!isValid(_this5)) {
              onError && onError();
              return;
            }
            // 不合法
            if (_this5.playingMusic.id !== -1) {
              onError && onError();
              return;
            }
            if (_this5.playingMusic.name !== soundName) {
              onError && onError();
              return;
            }
            if (_this5.playingMusic.uuid !== _this5.playingMusic.uuid) {
              onError && onError();
              return;
            }
            // 不存在
            if (!audioClip) {
              _this5.error("playMusic " + name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
              onError && onError();
              return;
            }
            // 静音
            if (_this5.isMusicMute) {
              onPlay && onPlay();
              return;
            }
            _this5.playingMusic.id = AudioEngine.inst.playMusic(audioClip, volume, onPlay);
          });
        }

        /**
         * 播放音乐
         * @param volume 音量
         * @param bundle Bundle名，默认为app-sound
         * @param force 是否强制重新播放
         * @returns 如果Promise返回值是false，则播放失败
         */;
        _proto.playMusicAsync = function playMusicAsync(params) {
          var _this6 = this;
          return new Promise(function (resolve) {
            _this6.playMusic(_extends({}, params, {
              onPlay: function onPlay() {
                resolve(true);
              },
              onError: function onError() {
                resolve(false);
              }
            }));
          });
        }

        /**
         * 重新播放音乐
         */;
        _proto.replayMusic = function replayMusic(onPlay) {
          if (!this.playingMusic.playing) return;
          if (!this.playingMusic.name) return;
          if (this.playingMusic.name.indexOf('://') > 0) {
            var _this$playingMusic$na = this.playingMusic.name.split('://'),
              _bundle = _this$playingMusic$na[0],
              _name = _this$playingMusic$na[1];
            this.playMusic({
              name: _name,
              bundle: _bundle,
              volume: this.playingMusic.volume,
              force: true,
              onPlay: onPlay
            });
          } else {
            this.playMusic({
              name: this.playingMusic.name,
              volume: this.playingMusic.volume,
              force: true,
              onPlay: onPlay
            });
          }
        }

        /**
         * 暂停音乐
         */;
        _proto.pauseMusic = function pauseMusic() {
          if (!this.playingMusic.playing) return false;
          this.playingMusic.paused = true;
          return AudioEngine.inst.pauseMusic();
        }

        /**
         * 恢复音乐
         */;
        _proto.resumeMusic = function resumeMusic() {
          if (!this.playingMusic.playing) return false;
          this.playingMusic.paused = false;
          return AudioEngine.inst.resumeMusic();
        }

        /**
         * 停止音乐
         */;
        _proto.stopMusic = function stopMusic() {
          this.playingMusic.playing = false;
          this.playingMusic.paused = false;
          this.playingMusic.volume = 1;
          this.playingMusic.name = '';
          this.playingMusic.uuid = '';
          this.playingMusic.id = -1;
          return AudioEngine.inst.stopMusic();
        }

        /**
         * 设置音乐静音
         * @param mute 是否静音
         * @param isCache 静音状态是否写入缓存(通过localstorage)
         */;
        _proto.setMusicMute = function setMusicMute(mute, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          isCache && storage.set(this.musicMuteCacheKey, mute);
          AudioEngine.inst.setMusicMute(mute);
          if (!mute && this.playingMusic.name) {
            if (this.playingMusic.name.indexOf('://') > 0) {
              var _this$playingMusic$na2 = this.playingMusic.name.split('://'),
                _bundle2 = _this$playingMusic$na2[0],
                _name2 = _this$playingMusic$na2[1];
              this.playMusic({
                name: _name2,
                bundle: _bundle2,
                volume: this.playingMusic.volume
              });
            } else {
              this.playMusic({
                name: this.playingMusic.name,
                volume: this.playingMusic.volume
              });
            }
          }
        }

        /**
         * 音乐是否正在播放
         */;
        /**
         * 设置音效静音
         * @param mute 是否静音
         * @param isCache 静音状态是否写入缓存(通过localstorage)
         */
        _proto.setEffectMute = function setEffectMute(mute, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          AudioEngine.inst.setGlobalEffectsMute(mute);
          isCache && storage.set(this.effectMuteCacheKey, mute);
        }

        /**
         * 音效是否静音
         */;
        /**
         * 设置音乐音量倍率
         * @param scale 
         * @param isCache 音量倍率是否写入缓存(通过localstorage)
         */
        _proto.setMusicVolumeScale = function setMusicVolumeScale(scale, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          AudioEngine.inst.setMusicVolumeScale(scale);
          isCache && storage.set(this.musicVolumeScaleCacheKey, scale);
        }

        /**
         * 音乐音量倍率
         */;
        /**
         * 设置音效音量倍率
         * @param scale 
         * @param isCache 音量倍率是否写入缓存(通过localstorage)
         */
        _proto.setEffectVolumeScale = function setEffectVolumeScale(scale, isCache) {
          if (isCache === void 0) {
            isCache = false;
          }
          AudioEngine.inst.setGlobalEffectsVolumeScale(scale);
          isCache && storage.set(this.effectVolumeScaleCacheKey, scale);
        }

        /**
         * 音效音量倍率
         */;
        _createClass(SoundManager, [{
          key: "isMusicPlaying",
          get: function get() {
            return this.playingMusic.playing;
          }

          /**
           * 音乐是否暂停
           */
        }, {
          key: "isMusicPaused",
          get: function get() {
            return this.playingMusic.paused;
          }

          /**
           * 音乐是否静音
           */
        }, {
          key: "isMusicMute",
          get: function get() {
            return AudioEngine.inst.getMusicMute();
          }
        }, {
          key: "isEffectMute",
          get: function get() {
            return AudioEngine.inst.getGlobalEffectsMute();
          }
        }, {
          key: "musicVolumeScale",
          get: function get() {
            return AudioEngine.inst.getMusicVolumeScale();
          }
        }, {
          key: "effectVolumeScale",
          get: function get() {
            return AudioEngine.inst.getGlobalEffectsVolumeScale();
          }
        }]);
        return SoundManager;
      }(BaseManager), _class2.setting = {}, _class2.MusicName = MusicName, _class2.EffectName = EffectName, _class2)) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/storage.ts", ['cc'], function (exports) {
  var cclegacy, sys, log, error, js;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      sys = module.sys;
      log = module.log;
      error = module.error;
      js = module.js;
    }],
    execute: function () {
      cclegacy._RF.push({}, "be3dafKG7VKQYlL+CdRx47y", "storage", undefined);
      var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
      function encode(text, key) {
        key = key || chars;
        var encrypted = '';
        for (var i = 0; i < text.length; i++) {
          var charCode = text.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          encrypted += String.fromCharCode(charCode);
        }
        return encrypted;
      }
      function decode(encryptedText, key) {
        key = key || chars;
        var decrypted = '';
        for (var i = 0; i < encryptedText.length; i++) {
          var charCode = encryptedText.charCodeAt(i) ^ key.charCodeAt(i % key.length);
          decrypted += String.fromCharCode(charCode);
        }
        return decrypted;
      }
      var weekOfYear = function weekOfYear(curDate) {
        /*
         date1是当前日期
         date2是当年第一天
         d是当前日期是今年第多少天
         用d + 当前年的第一天的周差距的和在除以7就是本年第几周
         */
        curDate = curDate || new Date();
        var a = curDate.getFullYear();
        var b = curDate.getMonth() + 1;
        var c = curDate.getDate();
        var date1 = new Date(a, b - 1, c),
          date2 = new Date(a, 0, 1),
          d = Math.round((date1.valueOf() - date2.valueOf()) / 86400000);
        return Math.ceil((d + (date2.getDay() + 1 - 1)) / 7);
      };
      var getWeekUpdateTime = function getWeekUpdateTime() {
        var date = new Date();
        var year = date.getFullYear();
        var week = weekOfYear(date);
        return year + '' + week;
      };
      var getDayUpdateTime = function getDayUpdateTime(curDate) {
        curDate = curDate || new Date();
        return curDate.toLocaleDateString();
      };
      var Storage = exports('Storage', /*#__PURE__*/function () {
        function Storage() {
          this._cache = {};
        }
        var _proto = Storage.prototype;
        /**
         * 返回值为false代表调用失败
         */
        _proto.set = function set(key, value) {
          if (typeof key === 'string' && typeof value !== 'undefined') {
            try {
              var data = JSON.stringify(value);
              if (Storage.setting.secretKey) {
                sys.localStorage.setItem(key, encode(data, Storage.setting.secretKey));
              } else {
                sys.localStorage.setItem(key, data);
              }
              // 设置缓存
              this._cache[key] = data;
              return true;
            } catch (err) {
              log(err);
            }
          } else {
            error('storage set error');
          }
          return false;
        }

        /**
         * 返回值为undefined代表调用失败
         */;
        _proto.get = function get(key) {
          // 先读取缓存
          if (typeof this._cache[key] !== 'undefined') {
            return JSON.parse(this._cache[key]);
          }
          var result = null;
          try {
            var data = sys.localStorage.getItem(key);
            if (data && typeof data === 'string') {
              if (Storage.setting.secretKey) data = decode(data, Storage.setting.secretKey);
              // 设置缓存
              this._cache[key] = data;
              result = JSON.parse(data);
            } else if (data !== '' && data !== null) {
              result = undefined;
            }
          } catch (e) {
            result = undefined;
          }
          return result;
        }

        /**
         * 返回值为false代表调用失败
         */;
        _proto.add = function add(key, value) {
          if (value === void 0) {
            value = 1;
          }
          var result = this.get(key);
          if (result !== undefined) {
            result = result || 0;
            result += value;
            if (this.set(key, result)) {
              return result;
            }
          }
          return false;
        }

        /**
         * 返回值为false代表调用失败
         */;
        _proto.remove = function remove(key) {
          try {
            sys.localStorage.removeItem(key);
            delete this._cache[key];
            return true;
          } catch (err) {
            return false;
          }
        }

        /**
         * 返回值为false代表调用失败
         */;
        _proto.clear = function clear() {
          try {
            sys.localStorage.clear();
            js.clear(this._cache);
            return true;
          } catch (err) {
            return false;
          }
        }

        /**
         * 设置本周数据 [返回值为false代表调用失败]
         * @param {Function} cb 当已存在本周的数据时，会根据cb的返回决定是否存储，true代表存储
         */;
        _proto.setWeek = function setWeek(key, value, cb) {
          var updateTime = getWeekUpdateTime();
          if (cb) {
            var data = this.getWeek(key);
            if (data !== undefined) {
              if (data === null || cb(data, value)) {
                return this.set(key, {
                  data: value,
                  updateTime: updateTime
                });
              }
            }
          } else {
            return this.set(key, {
              data: value,
              updateTime: updateTime
            });
          }
          return false;
        }

        /**
         * 获取本周数据 [返回值为undefined代表调用失败]
         */;
        _proto.getWeek = function getWeek(key) {
          var data = this.get(key);
          if (data && data.updateTime == getWeekUpdateTime()) {
            return data.data;
          }
          return data && null;
        }

        /**
         * 设置本天数据 [返回值为false代表调用失败]
         * @param {Function} cb 当已存在本天的数据时，会根据cb的返回决定是否存储，true代表存储
         */;
        _proto.setDay = function setDay(key, value, cb) {
          var updateTime = getDayUpdateTime();
          if (cb) {
            var data = this.getDay(key);
            if (data !== undefined) {
              if (data === null || cb(data, value)) {
                return this.set(key, {
                  data: value,
                  updateTime: updateTime
                });
              }
            }
          } else {
            return this.set(key, {
              data: value,
              updateTime: updateTime
            });
          }
          return false;
        }

        /**
         * 获取本天数据 [返回值为undefined代表调用失败]
         * @param {*} key 
         */;
        _proto.getDay = function getDay(key) {
          var data = this.get(key);
          if (data && data.updateTime == getDayUpdateTime()) {
            return data.data;
          }
          return data && null;
        };
        return Storage;
      }());
      Storage.setting = {
        secretKey: ''
      };
      var storage = exports('default', new Storage());
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/task.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _createClass, cclegacy;
  return {
    setters: [function (module) {
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "721e63MqrNI1qpO4br4ISY7", "task", undefined);
      /**
       * 顺序执行
       */
      var Sync = exports('Sync', /*#__PURE__*/function () {
        function Sync() {
          this.running = false;
          this.index = -1;
          this.list = [];
          this.finish = null;
          /**
           * 每个handle的返回值，通过next或end存储
           */
          this.results = [];
        }
        var _proto = Sync.prototype;
        /**
         * 任务数量
         * @returns 
         */
        _proto.size = function size() {
          return this.list.length;
        }

        /**
         * 添加一个任务
         * @param handle 
         * @returns 
         */;
        _proto.add = function add(handle) {
          this.list.push(handle);
          this.results.push(undefined);
          return this;
        }

        /**
         * 开始执行所有任务
         * @param finish 执行完毕回调
         * @returns 
         */;
        _proto.start = function start(finish) {
          if (this.running) {
            return this;
          }
          this.running = true;
          this.index = -1;
          this.finish = finish;
          this.next(this.index);
          return this;
        }

        /**
         * 停止所有任务
         * @returns 
         */;
        _proto.stop = function stop() {
          if (!this.running) {
            return false;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, false);
          }
          return true;
        }

        /**
         * 是否正在执行
         * @returns 
         */;
        _proto.isRunning = function isRunning() {
          return this.running;
        }

        /**
         * @deprecated
         * @returns 
         */;
        _proto.isStop = function isStop() {
          return !this.running;
        };
        _proto.end = function end(data) {
          if (!this.running) {
            return false;
          }
          if (typeof data !== 'undefined') {
            this.results[this.index] = data;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, true);
          }
          return true;
        };
        _proto.next = function next(index, data) {
          if (!this.running) {
            return false;
          }
          if (index !== this.index) return false;
          if (typeof data !== 'undefined') {
            this.results[this.index] = data;
          }
          if (++this.index < this.list.length) {
            this.retry(this.index);
          } else {
            this.end();
          }
          return true;
        };
        _proto.retry = function retry(index) {
          var _this = this;
          if (!this.running) {
            return false;
          }
          if (index !== this.index) return false;
          var handle = this.list[index];
          handle && handle(function (data) {
            return _this.next(index, data);
          }, function (timeout) {
            if (timeout === void 0) {
              timeout = 0;
            }
            return new Promise(function (resolve) {
              if (timeout > 0) {
                setTimeout(function () {
                  resolve(_this.retry(index));
                }, timeout * 1000);
              } else {
                resolve(_this.retry(index));
              }
            });
          }, function (data) {
            return _this.end(data);
          });
          return true;
        };
        return Sync;
      }());

      /**
       * 同时执行
       */
      var ASync = exports('ASync', /*#__PURE__*/function () {
        function ASync() {
          this.running = false;
          this.count = 0;
          this.list = [];
          this.finish = null;
          /**
           * 每个handle的返回值，通过next或end存储
           */
          this.results = [];
        }
        var _proto2 = ASync.prototype;
        /**
         * 任务数量
         * @returns 
         */
        _proto2.size = function size() {
          return this.list.length;
        }

        /**
         * 添加一个任务
         * @param handle 
         * @returns 
         */;
        _proto2.add = function add(handle) {
          this.list.push(handle);
          this.results.push(undefined);
          if (this.running) {
            this.retry(this.list.length - 1);
          }
          return this;
        }

        /**
         * 开始执行所有任务
         * @param finish 执行完毕回调
         * @returns 
         */;
        _proto2.start = function start(finish) {
          if (this.running) {
            return this;
          }
          this.running = true;
          this.count = 0;
          this.finish = finish;
          if (this.list.length) {
            for (var index = 0; index < this.list.length; index++) {
              this.retry(index);
            }
          } else {
            this.end && this.end(this.count);
          }
          return this;
        }

        /**
         * 停止所有任务
         * @returns 
         */;
        _proto2.stop = function stop() {
          if (!this.running) {
            return false;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, false);
          }
          return true;
        }

        /**
         * 是否正在执行
         * @returns 
         */;
        _proto2.isRunning = function isRunning() {
          return this.running;
        }

        /**
         * @deprecated
         * @returns 
         */;
        _proto2.isStop = function isStop() {
          return !this.running;
        };
        _proto2.end = function end(index, data) {
          if (!this.running) {
            return false;
          }
          if (index >= 0 && index < this.results.length) {
            if (this.results[index] || this.results[index] === null) return false;
            this.results[index] = typeof data !== 'undefined' ? data : null;
          }
          this.running = false;
          if (this.finish) {
            this.finish(this.results, true);
          }
          return true;
        };
        _proto2.next = function next(index, data) {
          if (!this.running) {
            return false;
          }
          if (index >= 0 && index < this.results.length) {
            if (this.results[index] || this.results[index] === null) return false;
            this.results[index] = typeof data !== 'undefined' ? data : null;
          }
          if (++this.count === this.list.length) {
            this.end && this.end(this.count);
          }
          return true;
        };
        _proto2.retry = function retry(index) {
          var _this2 = this;
          if (!this.running) {
            return false;
          }
          var handle = this.list[index];
          handle && handle(function (data) {
            return _this2.next(index, data);
          }, function (timeout) {
            if (timeout === void 0) {
              timeout = 0;
            }
            return new Promise(function (resolve) {
              if (timeout > 0) {
                setTimeout(function () {
                  resolve(_this2.retry(index));
                }, timeout * 1000);
              } else {
                resolve(_this2.retry(index));
              }
            });
          }, function (data) {
            return _this2.end(index, data);
          });
          return true;
        };
        return ASync;
      }());
      var Any = exports('Any', /*#__PURE__*/function () {
        function Any() {
          this.task = new Sync();
        }
        var _proto3 = Any.prototype;
        /**
         * 任务数量
         * @returns 
         */
        _proto3.size = function size() {
          return this.task.size();
        }

        /**
         * 添加一个任务
         * @param handle 
         * @returns 
         */;
        _proto3.add = function add(handles) {
          if (handles instanceof Array) {
            var async = new ASync();
            handles.forEach(function (handle) {
              return async.add(handle);
            });
            this.task.add(async.start.bind(async));
          } else {
            this.task.add(handles);
          }
          return this;
        }

        /**
         * 开始执行所有任务
         * @param finish 执行完毕回调
         * @returns 
         */;
        _proto3.start = function start(finish) {
          this.task.start(finish);
          return this;
        }

        /**
         * 停止所有任务
         * @returns 
         */;
        _proto3.stop = function stop() {
          return this.task.stop();
        }

        /**
         * 是否正在执行
         * @returns 
         */;
        _proto3.isRunning = function isRunning() {
          return this.task.isRunning();
        }

        /**
         * @deprecated
         * @returns 
         */;
        _proto3.isStop = function isStop() {
          return this.task.isStop();
        };
        _createClass(Any, [{
          key: "results",
          get:
          /**
           * 每个handle的返回值，通过next或end存储
           */
          function get() {
            return this.task.results;
          }
        }]);
        return Any;
      }());
      var task = exports('default', {
        /**
         * 任务顺序执行
         */
        createSync: function createSync() {
          return new Sync();
        },
        /**
         * 任务同时执行
         */
        createASync: function createASync() {
          return new ASync();
        },
        /**
         * 根据参数指定执行顺序
         * @example
         * createAny()
         * .add(1).add(2).add(3).add(4)
         * .add([5,6,7])
         * .add(8)
         * 执行顺序，1，2，3，4依次执行，然后同时执行5，6，7，最后执行8
         */
        createAny: function createAny() {
          return new Any();
        },
        /**
         * 执行单个任务
         */
        execute: function execute(fun, retryMax, retryFinish) {
          if (retryMax === void 0) {
            retryMax = -1;
          }
          fun(function retry(timeout) {
            if (timeout === void 0) {
              timeout = 0;
            }
            if (retryMax === 0) return retryFinish && retryFinish();
            retryMax = retryMax > 0 ? retryMax - 1 : retryMax;
            if (timeout > 0) {
              setTimeout(function () {
                return task.execute(fun, retryMax, retryFinish);
              }, timeout * 1000);
            } else {
              task.execute(fun, retryMax, retryFinish);
            }
          });
        }
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/TimerManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './BaseManager.ts'], function (exports) {
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
      var _dec, _class4;
      cclegacy._RF.push({}, "b5636+NNRZFEKq6dPkgK4qf", "TimerManager", undefined);
      var ccclass = _decorator.ccclass;
      var DailyTimer = /*#__PURE__*/function () {
        // 获取当前时间相对于当日零点的毫秒数
        DailyTimer.getDayTimeMs = function getDayTimeMs(date) {
          return (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds()) * 1000 + date.getMilliseconds();
        }

        // 静态方法解析时间为毫秒数
        ;

        DailyTimer.parseTimeToMs = function parseTimeToMs(h, m, s) {
          return (h * 3600 + m * 60 + s) * 1000 % 86400000;
        };
        function DailyTimer(time, callback, target, once) {
          if (once === void 0) {
            once = false;
          }
          this.startMs = void 0;
          // 起始时间毫秒数（相对于当日零点）
          this.endMs = void 0;
          // 结束时间毫秒数
          // 用于检查当前时间是否可触发回调
          this.checkDay = 0;
          this.callback = callback;
          this.target = target;
          this.once = once;
          // 使用解构赋值提高可读性
          var _time$split = time.split('-'),
            startSegment = _time$split[0],
            _time$split$ = _time$split[1],
            endSegment = _time$split$ === void 0 ? startSegment : _time$split$;

          // 开始时间
          var _startSegment$split$m = startSegment.split(':').map(function (part) {
              return Math.max(0, parseInt(part, 10) || 0);
            }),
            _startSegment$split$m2 = _startSegment$split$m[0],
            startH = _startSegment$split$m2 === void 0 ? 0 : _startSegment$split$m2,
            _startSegment$split$m3 = _startSegment$split$m[1],
            startM = _startSegment$split$m3 === void 0 ? 0 : _startSegment$split$m3,
            _startSegment$split$m4 = _startSegment$split$m[2],
            startS = _startSegment$split$m4 === void 0 ? 0 : _startSegment$split$m4;
          this.startMs = DailyTimer.parseTimeToMs(startH, startM, startS);

          // 结束时间
          var _endSegment$split$map = endSegment.split(':').map(function (part) {
              return Math.max(0, parseInt(part, 10) || 0);
            }),
            _endSegment$split$map2 = _endSegment$split$map[0],
            endH = _endSegment$split$map2 === void 0 ? 0 : _endSegment$split$map2,
            _endSegment$split$map3 = _endSegment$split$map[1],
            endM = _endSegment$split$map3 === void 0 ? 0 : _endSegment$split$map3,
            _endSegment$split$map4 = _endSegment$split$map[2],
            endS = _endSegment$split$map4 === void 0 ? 0 : _endSegment$split$map4;
          this.endMs = DailyTimer.parseTimeToMs(endH, endM, endS);
          // 结束时间与开始时间不能相同
          if (this.endMs === this.startMs) {
            if (startM === 0 && startS === 0) {
              this.endMs = DailyTimer.parseTimeToMs(startH + 1, startM, startS);
            } else if (startS === 0) {
              this.endMs = DailyTimer.parseTimeToMs(startH, startM + 1, startS);
            } else {
              this.endMs = DailyTimer.parseTimeToMs(startH, startM, startS + 1);
            }
          }
        }

        // 获取当前时间是否在时间范围内
        var _proto = DailyTimer.prototype;
        _proto.isInRange = function isInRange(now) {
          var currentMs = DailyTimer.getDayTimeMs(now);

          // 处理跨天时间段（如 23:00-01:00）
          return this.startMs <= this.endMs ? currentMs >= this.startMs && currentMs < this.endMs : currentMs >= this.startMs || currentMs < this.endMs;
        };
        _proto.update = function update(now) {
          var dateDay = now.getDay();
          if (this.checkDay === dateDay) return false;
          if (!this.isInRange(now)) return false;
          this.checkDay = dateDay;
          this.callback.call(this.target);
          return this.once;
        };
        return DailyTimer;
      }();
      var IntervalTimer = /*#__PURE__*/function () {
        function IntervalTimer(interval, callback, target, once) {
          if (once === void 0) {
            once = false;
          }
          this.elapsed = 0;
          this.interval = interval;
          this.callback = callback;
          this.target = target;
          this.once = once;
        }
        var _proto2 = IntervalTimer.prototype;
        _proto2.update = function update(dt) {
          this.elapsed += dt;
          var completed = false;

          // 处理可能多次触发的情况（当dt > interval时）
          while (this.elapsed >= this.interval) {
            this.callback.call(this.target);
            this.elapsed -= this.interval;
            if (this.once) {
              completed = true;
              break;
            }
          }
          return completed;
        };
        return IntervalTimer;
      }();
      var Timer = /*#__PURE__*/function () {
        function Timer() {
          this.intervalTimer = [];
          this.dailyTimers = [];
        }
        Timer.update = function update(timer, dt) {
          return timer.update(dt);
        };
        var _proto3 = Timer.prototype;
        /**
         * 注册定时器
         * @param interval 
         * @param callback 
         * @param target 
         * @param once 
         */
        _proto3.register = function register(interval, callback, target, once) {
          var timer = new IntervalTimer(interval, callback, target, once || false);
          this.intervalTimer.push(timer);
        }

        /**
         * 取消定时器
         * @param callback 
         * @param target 
         */;
        _proto3.unregister = function unregister(callback, target) {
          if (typeof target === 'undefined') {
            this.intervalTimer = this.intervalTimer.filter(function (timer) {
              return timer.callback !== callback;
            });
          } else {
            this.intervalTimer = this.intervalTimer.filter(function (timer) {
              return !(timer.callback === callback && timer.target === target);
            });
          }
        }

        /**
         * 取消所有定时器
         */;
        _proto3.unregisterAll = function unregisterAll() {
          this.intervalTimer = [];
        };
        /**
         * 注册每日触发器
         * @param time 24小时制,精确到秒
         * 
         * @example
         * registerDailyTrigger('16', ...) 等同于 registerDailyTrigger('16-17', ...)
         * registerDailyTrigger('8-9:00', ...) 等同于 registerDailyTrigger('8', ...)
         * registerDailyTrigger('8:00:01-24', ...)
         */
        _proto3.registerDailyTrigger = function registerDailyTrigger(time, callback, target, once) {
          var timer = new DailyTimer(time, callback, target, once || false);
          this.dailyTimers.push(timer);
        }

        /**
         * 取消每日触发器
         */;
        _proto3.unregisterDailyTrigger = function unregisterDailyTrigger(callback, target) {
          if (typeof target === 'undefined') {
            this.dailyTimers = this.dailyTimers.filter(function (timer) {
              return timer.callback !== callback;
            });
          } else {
            this.dailyTimers = this.dailyTimers.filter(function (timer) {
              return !(timer.callback === callback && timer.target === target);
            });
          }
        }

        /**
         * 取消所有每日触发器
         */;
        _proto3.unregisterAllDailyTrigger = function unregisterAllDailyTrigger() {
          this.dailyTimers = [];
        }

        /**
         * 清除所有定时器和触发器
         */;
        _proto3.clear = function clear() {
          this.intervalTimer = [];
          this.dailyTimers = [];
        };
        _proto3.update = function update(dt) {
          for (var index = 0; index < this.intervalTimer.length; index++) {
            var timer = this.intervalTimer[index];
            if (timer.update(dt)) {
              this.intervalTimer.splice(index, 1);
              index--;
            }
          }
          var date = new Date();
          for (var _index = 0; _index < this.dailyTimers.length; _index++) {
            var _timer = this.dailyTimers[_index];
            if (_timer.update(date)) {
              this.dailyTimers.splice(_index, 1);
              _index--;
            }
          }
        };
        return Timer;
      }();
      var TimerManager = exports('default', (_dec = ccclass('TimerManager'), _dec(_class4 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(TimerManager, _BaseManager);
        function TimerManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _this.timers = new Map();
          return _this;
        }
        var _proto4 = TimerManager.prototype;
        /**
         * 清除所有定时器
         */
        _proto4.clear = function clear() {
          this.timers.forEach(function (timer) {
            timer.clear();
          });
          this.timers.clear();
        }

        /**
         * 删除定时器
         * @param key 定时器key
         */;
        _proto4["delete"] = function _delete(key) {
          var timer = this.timers.get(key);
          if (!timer) return;
          this.timers["delete"](key);
          timer.clear();
        }

        /**
         * 获取定时器
         * @param key 定时器key
         */;
        _proto4.get = function get(key) {
          if (this.timers.has(key)) {
            return this.timers.get(key);
          }
          var timer = new Timer();
          this.timers.set(key, timer);
          return timer;
        };
        _proto4.update = function update(dt) {
          this.timers.forEach(function (timer) {
            Timer.update(timer, dt);
          });
        };
        return TimerManager;
      }(BaseManager)) || _class4));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIManager.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts', './BaseManager.ts', './BaseView.ts', './UIMgrLoading.ts', './UIMgrShade.ts', './UIMgrToast.ts', './UIMgrZOrder.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _extends, _createClass, cclegacy, _decorator, Node, Prefab, Camera, director, instantiate, Widget, settings, Settings, size, screen, Layers, UITransform, Scene, js, isValid, SceneAsset, Canvas, ResolutionPolicy, view, Core, BaseManager, ViewType, BaseView, UIMgrLoading, UIMgrShade, UIMgrToast, UIMgrZOrder;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _extends = module.extends;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      Prefab = module.Prefab;
      Camera = module.Camera;
      director = module.director;
      instantiate = module.instantiate;
      Widget = module.Widget;
      settings = module.settings;
      Settings = module.Settings;
      size = module.size;
      screen = module.screen;
      Layers = module.Layers;
      UITransform = module.UITransform;
      Scene = module.Scene;
      js = module.js;
      isValid = module.isValid;
      SceneAsset = module.SceneAsset;
      Canvas = module.Canvas;
      ResolutionPolicy = module.ResolutionPolicy;
      view = module.view;
    }, function (module) {
      Core = module.default;
    }, function (module) {
      BaseManager = module.default;
    }, function (module) {
      ViewType = module.ViewType;
      BaseView = module.default;
    }, function (module) {
      UIMgrLoading = module.default;
    }, function (module) {
      UIMgrShade = module.default;
    }, function (module) {
      UIMgrToast = module.default;
    }, function (module) {
      UIMgrZOrder = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _class3;
      cclegacy._RF.push({}, "234f6Lx69NNFJ9vC2nHCWRJ", "UIManager", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property;
      var UIScene = 'UIScene';
      var UserInterfacePath = 'UserInterface';
      var ViewTypes = [ViewType.Page, ViewType.Paper, ViewType.Pop, ViewType.Top];
      var BlockEvents = [Node.EventType.TOUCH_START, Node.EventType.TOUCH_MOVE, Node.EventType.TOUCH_END, Node.EventType.TOUCH_CANCEL, Node.EventType.MOUSE_DOWN, Node.EventType.MOUSE_MOVE, Node.EventType.MOUSE_UP, Node.EventType.MOUSE_ENTER, Node.EventType.MOUSE_LEAVE, Node.EventType.MOUSE_WHEEL];

      /**
       * 错误码
       */
      var ErrorCode = /*#__PURE__*/function (ErrorCode) {
        ErrorCode[ErrorCode["LoadError"] = 0] = "LoadError";
        ErrorCode[ErrorCode["LogicError"] = 1] = "LogicError";
        ErrorCode[ErrorCode["InvalidError"] = 2] = "InvalidError";
        return ErrorCode;
      }(ErrorCode || {});
      /**
       * 界面名字枚举
       */
      var ViewName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });

      /**
       * 子界面名字枚举
       */
      var MiniViewName = new Proxy({}, {
        get: function get(target, key) {
          if (target[key]) return target[key];
          target[key] = key;
          return key;
        }
      });

      /**
       * 将驼峰命名转成串式命名
       * @param str 驼峰字符串
       * @returns 
       */
      function stringCaseNegate(str) {
        return str.replace(/[A-Z]/g, function (searchStr, startIndex) {
          if (startIndex === 0) {
            return searchStr.toLocaleLowerCase();
          } else {
            return '-' + searchStr.toLocaleLowerCase();
          }
        });
      }
      var UIManager = exports('default', (_dec = ccclass('UIManager'), _dec2 = property({
        type: Prefab,
        tooltip: '位置: app://manager/ui/prefab/UIMgrLoading'
      }), _dec3 = property({
        type: Prefab,
        tooltip: '位置: app://manager/ui/prefab/UIMgrShade'
      }), _dec4 = property({
        type: Prefab,
        tooltip: '位置: app://manager/ui/prefab/UIMgrToast'
      }), _dec(_class = (_class2 = (_class3 = /*#__PURE__*/function (_BaseManager) {
        _inheritsLoose(UIManager, _BaseManager);
        function UIManager() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _BaseManager.call.apply(_BaseManager, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loadingPre", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shadePre", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "toastPre", _descriptor3, _assertThisInitialized(_this));
          // UI根节点
          _this.UserInterface = null;
          // 加载和遮罩节点
          _this.loading = null;
          _this.shade = null;
          _this.toast = null;
          _this.defaultUI = null;
          _this.defaultData = '';
          _this.currScene = '';
          _this.currPage = null;
          _this.currFocus = null;
          // 预制体缓存
          _this.prefabCache = {};
          _this.sceneCache = {};
          // 全局触摸有效
          _this.touchEnabled = true;
          // 记录触摸屏蔽
          _this.touchMaskMap = new Map();
          // 记录展示加载
          _this.showLoadingMap = new Map();
          // 记录正在加载中的有效的ui
          _this.uiLoadingMap = new Map();
          // 记录正在展示中的有效的ui
          _this.uiShowingMap = new Map();
          _this.showQueue = [];
          return _this;
        }
        var _proto = UIManager.prototype;
        _proto.init = function init(finish) {
          var _setting$preload,
            _this2 = this;
          var setting = UIManager.setting;
          this.defaultUI = setting.defaultUI;
          this.defaultData = setting.defaultData;
          _BaseManager.prototype.init.call(this, finish);

          // 预加载,符合AnyTask规则
          if ((_setting$preload = setting.preload) != null && _setting$preload.length) {
            var task = Core.inst.lib.task.createAny();
            setting.preload.forEach(function (preload) {
              if (preload instanceof Array) {
                task.add(preload.map(function (name) {
                  return function (next) {
                    return _this2.preload(name, next);
                  };
                }));
              } else {
                task.add(function (next) {
                  return _this2.preload(preload, next);
                });
              }
            });
            task.start();
          }
        };
        _proto.onLoad = function onLoad() {
          this.UserInterface = this.root.getChildByName(UserInterfacePath);
          this.root.getComponentsInChildren(Camera).forEach(function (camera) {
            // 避免camera.priority<0的情况，否则会造成渲染异常
            if (camera.priority < 0) camera.priority = 0;
            // 避免camera.far<=camera.near的情况，否则会造成渲染异常
            if (camera.far <= camera.near) camera.far = camera.near + 1;
          });
          director.addPersistRootNode(this.root);
          this.createTypeRoot();
          this.shade = instantiate(this.shadePre);
          this.shade.parent = this.UserInterface;
          this.shade.active = false;
          this.shade.getComponent(Widget).target = this.root;
          this.loading = instantiate(this.loadingPre);
          this.loading.parent = this.node;
          this.loading.active = false;

          // toast是后面加的，需要做容错
          if (this.toastPre) {
            this.toast = instantiate(this.toastPre);
            this.toast.parent = this.node;
          }

          // 自动适配分辨率策略
          if (UIManager.setting.autoFit) {
            var designResolution = settings.querySettings(Settings.Category.SCREEN, 'designResolution');
            var windowSize = size(screen.windowSize);
            var resolutionPolicy = designResolution.policy;
            var autoFitResolutionPolicy = function autoFitResolutionPolicy() {
              if (windowSize.width / windowSize.height > designResolution.width / designResolution.height) {
                if (resolutionPolicy === ResolutionPolicy.FIXED_HEIGHT) return;
                view.setResolutionPolicy(ResolutionPolicy.FIXED_HEIGHT);
                resolutionPolicy = ResolutionPolicy.FIXED_HEIGHT;
              } else {
                if (resolutionPolicy === ResolutionPolicy.FIXED_WIDTH) return;
                view.setResolutionPolicy(ResolutionPolicy.FIXED_WIDTH);
                resolutionPolicy = ResolutionPolicy.FIXED_WIDTH;
              }
            };
            autoFitResolutionPolicy();
            this.schedule(function () {
              if (windowSize.equals(screen.windowSize)) return;
              windowSize.set(screen.windowSize);
              autoFitResolutionPolicy();
            }, 0.5);
          }
        };
        _proto.createTypeRoot = function createTypeRoot() {
          var _this3 = this;
          ViewTypes.forEach(function (type) {
            var d2 = new Node(type);
            d2.layer = Layers.Enum.UI_2D;
            d2.addComponent(UIMgrZOrder);
            d2.parent = _this3.UserInterface;
            d2.addComponent(UITransform);
            var widget = d2.addComponent(Widget);
            widget.isAlignBottom = true;
            widget.isAlignLeft = true;
            widget.isAlignRight = true;
            widget.isAlignTop = true;
            widget.top = 0;
            widget.left = 0;
            widget.right = 0;
            widget.bottom = 0;
            widget.alignMode = Widget.AlignMode.ON_WINDOW_RESIZE;
          });
        };
        _proto.addTouchMaskListener = function addTouchMaskListener() {
          if (!this.touchEnabled) return;
          if (this.touchMaskMap.size > 0) return;
          for (var i = 0; i < BlockEvents.length; i++) {
            this.root.on(BlockEvents[i], this.stopPropagation, this, true);
          }
        };
        _proto.removeTouchMaskListener = function removeTouchMaskListener() {
          if (!this.touchEnabled) return;
          if (this.touchMaskMap.size > 0) return;
          for (var i = 0; i < BlockEvents.length; i++) {
            this.root.off(BlockEvents[i], this.stopPropagation, this, true);
          }
        };
        _proto.stopPropagation = function stopPropagation(event) {
          if (!this.touchEnabled || this.touchMaskMap.size > 0) {
            event.propagationStopped = true;
            if (event.type !== Node.EventType.MOUSE_MOVE) {
              this.log('屏蔽触摸');
            }
          }
        }

        /**
         * 获取一个节点上的BaseView组件, 获取不到返回null
         */;
        _proto.getBaseView = function getBaseView(node) {
          if (!node) return null;
          return node.components.find(function (component) {
            return component instanceof BaseView;
          });
        }

        /**
         * 在所有父节点中找到一个最近的view组件
         * @param target 
         * @returns 
         */;
        _proto.getViewInParents = function getViewInParents(target) {
          var node = target;
          var com = null;
          while (node.parent && !(node.parent instanceof Scene)) {
            com = this.getBaseView(node.parent);
            if (!com) {
              node = node.parent;
            } else {
              break;
            }
          }
          return com;
        }

        /**
         * 在子节点中找到一个最近的view组件
         * @param target 
         * @returns 
         */;
        _proto.getViewInChildren = function getViewInChildren(target) {
          for (var index = 0; index < target.children.length; index++) {
            var node = target.children[index];
            var com = this.getBaseView(node);
            if (com) return com;
          }
          return null;
        }

        /**
         * 根据UI名字获取它的脚本类
         */;
        _proto.getUIClass = function getUIClass(name) {
          return js.getClassByName(name);
        }

        /**
         * 根据UI名字获取UI路径
         * @param name ui名字
         * @returns 
         */;
        _proto.getUIPath = function getUIPath(name) {
          return name;
        }

        /**
         * 获取前缀
         * @param name    ui名字
         */;
        _proto.getUIPrefix = function getUIPrefix(name) {
          for (var index = 0; index < ViewTypes.length; index++) {
            var typeName = ViewTypes[index];
            if (name.indexOf(typeName) === 0) {
              return typeName;
            }
          }
          this.error('getUIPrefix', "" + name);
        }

        /**
         * 根据UI名字查询父节点
         * @param name    ui名字
         */;
        _proto.getUIParent = function getUIParent(name) {
          if (this.currScene === name) {
            return director.getScene();
          }
          var prefix = this.getUIPrefix(name);
          for (var index = 0; index < ViewTypes.length; index++) {
            var viewType = ViewTypes[index];
            if (viewType === prefix) {
              return this.UserInterface.getChildByName(viewType);
            }
          }
          this.error('getUIParent', "\u627E\u4E0D\u5230" + name + "\u5BF9\u5E94\u7684Parent");
          return null;
        }

        /**
         * 根据UI名字获取场景内的节点
         * @param name    ui名字
         */;
        _proto.getUIInScene = function getUIInScene(name, multiple) {
          if (multiple === void 0) {
            multiple = false;
          }
          var parent = this.getUIParent(name);
          if (multiple) {
            var _result = parent.children.filter(function (node) {
              return node.name === name;
            });
            if (_result.length) return _result.filter(function (node) {
              return isValid(node, true);
            });
          } else {
            var _result2 = parent.children.find(function (node) {
              return node.name === name;
            });
            if (_result2) return isValid(_result2, true) ? _result2 : null;
          }
          return multiple ? [] : null;
        }

        /**
         * 根据UI名字获取展示中的节点
         * @param name    ui名字
         */;
        _proto.getUIInShowing = function getUIInShowing(name, multiple) {
          if (multiple === void 0) {
            multiple = false;
          }
          if (multiple) {
            var _result3 = [];
            this.uiShowingMap.forEach(function (_name, com) {
              if (_name === name) _result3.push(com.node);
            });
            return _result3;
          } else {
            var _result4 = null;
            this.uiShowingMap.forEach(function (_name, com) {
              if (!_result4 && _name === name) _result4 = com.node;
            });
            return _result4;
          }
        }

        /**
         * 获取UI骨架Bundle名字
         * @deprecated 将会移除，请改为其它方案
         */;
        _proto.getNativeBundleName = function getNativeBundleName(uiName) {
          // 兼容旧版本
          var oldBundleName = "app-view_" + uiName;
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          if (projectBundles && projectBundles.indexOf(oldBundleName) >= 0) {
            return oldBundleName;
          }
          return stringCaseNegate(uiName);
        }

        /**
         * 获取UI资源Bundle名字
         * @deprecated 将会移除，请改为其它方案
         */;
        _proto.getResBundleName = function getResBundleName(uiName) {
          // 兼容旧版本
          var oldBundleName = "app-view_" + uiName + "_Res";
          var projectBundles = settings.querySettings(Settings.Category.ASSETS, 'projectBundles');
          if (projectBundles && projectBundles.indexOf(oldBundleName) >= 0) {
            return oldBundleName;
          }
          return stringCaseNegate(uiName) + "-res";
        }

        /**
         * 初始化Bundle
         */;
        _proto.initBundle = function initBundle(name, onFinish) {
          var _this4 = this;
          Core.inst.lib.task.createASync().add(function (next) {
            Core.inst.manager.loader.loadBundle({
              bundle: _this4.getNativeBundleName(name),
              onComplete: next
            });
          }).add(function (next) {
            Core.inst.manager.loader.loadBundle({
              bundle: _this4.getResBundleName(name),
              onComplete: next
            });
          }).start(onFinish);
        }

        /**
         * 安装UI
         */;
        _proto.installUI = function installUI(name, complete, progress) {
          var _this5 = this;
          if (this.sceneCache[name]) {
            complete && setTimeout(function () {
              if (!isValid(_this5)) return;
              complete(_this5.sceneCache[name]);
            });
            return;
          } else if (this.prefabCache[name]) {
            complete && setTimeout(function () {
              if (!isValid(_this5)) return;
              complete(_this5.prefabCache[name]);
            });
            return;
          }
          var task = Core.inst.lib.task.createSync().add(function (next) {
            _this5.initBundle(name, next);
          }).add(function (next) {
            // 失败
            var uiBundles = task.results[0];
            if (!uiBundles || !uiBundles[0] || !uiBundles[1]) return next(null);
            var isScene = uiBundles[0].getSceneInfo(name);
            Core.inst.manager.loader.load({
              bundle: _this5.getNativeBundleName(name),
              path: _this5.getUIPath(name),
              type: isScene ? SceneAsset : Prefab,
              onProgress: progress,
              onComplete: next
            });
          }).start(function (results) {
            if (!isValid(_this5)) return;
            // 验证缓存
            var cache = _this5.sceneCache[name] || _this5.prefabCache[name];
            if (cache) {
              return complete && complete(cache);
            }
            // 验证有效
            var asset = results[1];
            if (!asset) {
              return complete && complete(null);
            }
            // 添加引用计数
            asset.addRef();
            // 添加缓存
            if (asset instanceof Prefab) {
              _this5.prefabCache[name] = asset;
            } else {
              _this5.sceneCache[name] = asset;
            }
            _this5.log("\u52A0\u8F7D: " + name);
            return complete && complete(asset);
          });
        }

        /**
         * 卸载UI
         */;
        _proto.uninstallUI = function uninstallUI(name) {
          if (this.sceneCache[name]) {
            // 释放引用计数
            this.sceneCache[name].decRef();
            // 删除缓存
            delete this.sceneCache[name];
          } else if (this.prefabCache[name]) {
            // 释放引用计数
            this.prefabCache[name].decRef();
            // 删除缓存
            delete this.prefabCache[name];
          }
          var resBundle = this.getResBundleName(name);
          var naBundle = this.getNativeBundleName(name);
          Core.inst.manager.loader.releaseAll(resBundle);
          Core.inst.manager.loader.releaseAll(naBundle);
          Core.inst.manager.loader.removeBundle(resBundle);
          Core.inst.manager.loader.removeBundle(naBundle);
          this.log("\u5378\u8F7D: " + name);
        }

        /**
         * 加载ui内部资源
         */;
        _proto.loadRes = function loadRes(target, path, type, callback) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.load({
              bundle: this.getResBundleName(target),
              path: path,
              type: type,
              onComplete: callback
            });
          } else {
            var _view = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view) {
              Core.inst.manager.loader.load({
                bundle: this.getResBundleName(_view.viewName),
                path: path,
                type: type,
                onComplete: callback
              });
            } else {
              this.error('loadRes', target.name, path);
              callback && callback(null);
            }
          }
        }

        /**
         * 预加载ui内部资源
         */;
        _proto.preloadRes = function preloadRes(target, path, type, complete) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.preload({
              bundle: this.getResBundleName(target),
              path: path,
              type: type,
              onComplete: complete
            });
          } else {
            var _view2 = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view2) {
              Core.inst.manager.loader.preload({
                bundle: this.getResBundleName(_view2.viewName),
                path: path,
                type: type,
                onComplete: complete
              });
            } else {
              this.error('preloadRes', target.name, path);
            }
          }
        }

        /**
         * 加载ui内部资源
         */;
        _proto.loadResDir = function loadResDir(target, path, type, callback) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.loadDir({
              bundle: this.getResBundleName(target),
              path: path,
              type: type,
              onComplete: callback
            });
          } else {
            var _view3 = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view3) {
              Core.inst.manager.loader.loadDir({
                bundle: this.getResBundleName(_view3.viewName),
                path: path,
                type: type,
                onComplete: callback
              });
            } else {
              this.error('loadResDir', target.name, path);
              callback && callback([]);
            }
          }
        }

        /**
         * 预加载ui内部资源
         */;
        _proto.preloadResDir = function preloadResDir(target, path, type, complete) {
          if (typeof target === 'string') {
            Core.inst.manager.loader.preloadDir({
              bundle: this.getResBundleName(target),
              path: path,
              type: type,
              onComplete: complete
            });
          } else {
            var _view4 = this.getBaseView(target.node) || this.getViewInParents(target.node) || this.getViewInChildren(director.getScene());
            if (_view4) {
              Core.inst.manager.loader.preloadDir({
                bundle: this.getResBundleName(_view4.viewName),
                path: path,
                type: type,
                onComplete: complete
              });
            } else {
              this.error('preloadResDir', target.name, path);
            }
          }
        }

        /**
         * 预加载UI
         */;
        _proto.preload = function preload(name, complete) {
          var _this6 = this;
          // 验证name是否为真
          if (!name) {
            this.error('preload', 'fail');
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }
          this.initBundle(name, function (_ref) {
            var naBundle = _ref[0];
            var isScene = naBundle.getSceneInfo(name);
            Core.inst.manager.loader.preload({
              bundle: _this6.getNativeBundleName(name),
              path: _this6.getUIPath(name),
              type: isScene ? SceneAsset : Prefab,
              onComplete: complete
            });
          });
        }

        /**
         * 加载UI
         */;
        _proto.load = function load(name) {
          var progress = (arguments.length <= 2 ? undefined : arguments[2]) && (arguments.length <= 1 ? undefined : arguments[1]);
          var complete = (arguments.length <= 2 ? undefined : arguments[2]) || (arguments.length <= 1 ? undefined : arguments[1]);

          // 验证name是否为真
          if (!name) {
            this.error('load', 'fail');
            complete && setTimeout(function () {
              if (!isValid(this)) return;
              complete(null);
            });
            return;
          }

          // 异步加载
          this.installUI(name, function (result) {
            if (!result) return complete && complete(null);
            return complete && complete(result);
          }, progress);
        }

        /**
         * 销毁UI，释放资源
         * - 直接销毁，不管是否是show状态
         * - 此流程一定是同步的
         */;
        _proto.release = function release(nameOrCom) {
          var _this7 = this;
          var uiName = typeof nameOrCom === 'string' ? nameOrCom : nameOrCom.viewName;
          if (!uiName) {
            this.error('release', nameOrCom + " fail");
            return;
          }

          // 传入字符串是释放所有
          if (typeof nameOrCom === 'string') {
            this.getUIInScene(uiName, true).forEach(function (node) {
              var com = _this7.getBaseView(node);
              if (!com) {
                _this7.error('release', uiName + "\u4E0D\u5B58\u5728BaseView\u7EC4\u4EF6");
                return;
              }
              if (com.isShow) {
                _this7.warn('release', uiName + "\u6B63\u5904\u4E8Eshow\u72B6\u6001, \u6B64\u5904\u5C06\u76F4\u63A5\u9500\u6BC1");
              }
              if (com === _this7.currPage) {
                _this7.currPage = null;
              }
              if (com === _this7.currFocus) {
                _this7.currFocus = null;
              }
              _this7.uiShowingMap["delete"](com);
              if (node && isValid(node, true)) {
                node.parent = null;
                node.destroy();
              }
            });
          }
          // 传入组件是释放单个
          else {
            if (nameOrCom.isShow) {
              this.warn('release', uiName + "\u6B63\u5904\u4E8Eshow\u72B6\u6001, \u6B64\u5904\u5C06\u76F4\u63A5\u9500\u6BC1");
            }
            if (nameOrCom === this.currPage) {
              this.currPage = null;
            }
            if (nameOrCom === this.currFocus) {
              this.currFocus = null;
            }
            this.uiShowingMap["delete"](nameOrCom);
            var node = nameOrCom.node;
            if (node && isValid(node, true)) {
              node.parent = null;
              node.destroy();
            }
          }

          // 当全部释放时才清除缓存
          var nodes = this.getUIInScene(uiName, true);
          if (nodes.length === 0 || nodes.every(function (node) {
            return !isValid(node, true);
          })) {
            this.uninstallUI(uiName);
            this.log("\u91CA\u653E\u8D44\u6E90: " + uiName);
          }
        }

        /**
         * 销毁全部UI，释放资源
         * - 直接销毁，不管是否是show状态
         * - 此流程一定是同步的
         */;
        _proto.releaseAll = function releaseAll(exclude) {
          var _this8 = this;
          Object.keys(this.prefabCache).forEach(function (name) {
            if (exclude && exclude.indexOf(name) !== -1) return;
            _this8.release(name);
          });
          Object.keys(this.sceneCache).forEach(function (name) {
            if (exclude && exclude.indexOf(name) !== -1) return;
            _this8.release(name);
          });
        }

        /**
         * 检查UI是否有效
         * - -1: 加载失败
         * - 0: UI无效
         * - 1: UI有效
         */;
        _proto.checkUIValid = function checkUIValid(name, data, callback) {
          var _this9 = this;
          this.installUI(name, function (result) {
            if (!result) return callback(-1);
            var View = _this9.getUIClass(name);
            if (!View) return callback(0);
            if (!View.isViewValid) return callback(1);
            View.isViewValid(function (valid) {
              callback(valid ? 1 : 0);
            }, data);
          });
        }

        /**
         * 更新阴影的层级及显示
         */;
        _proto.refreshShade = function refreshShade() {
          // 借助refreshShade实现onFocus、onLostFocus(onFocus不会被每次都触发，只有产生变化时才触发)
          var onFocus = false;
          // 倒序遍历uiRoots
          var uiRoots = this.UserInterface.children;
          for (var index = uiRoots.length - 1; index >= 0; index--) {
            var uiRoot = uiRoots[index];
            if (uiRoot !== this.shade && uiRoot !== this.loading) {
              // 倒序遍历uiRoot
              var children = uiRoot.children;
              for (var i = children.length - 1; i >= 0; i--) {
                var node = children[i];
                if (node === this.shade) continue;
                var com = this.getBaseView(node);
                if (!com) continue;

                // 触发onFocus
                if (!onFocus && com.isCaptureFocus && com.isShow) {
                  onFocus = true;
                  if (this.currFocus !== com) {
                    isValid(this.currFocus, true) && this.currFocus.constructor.prototype.focus.call(this.currFocus, false);
                    this.currFocus = com;
                    this.currFocus.constructor.prototype.focus.call(this.currFocus, true);
                  }
                }
                // 添加遮罩
                if (com.isNeedShade && com.isShow) {
                  var shadeSetting = Object.assign({}, UIManager.setting.shade, com.constructor.prototype.onShade.call(com));
                  if (shadeSetting.blur) {
                    this.shade.getComponent(UIMgrShade).init(0, 255, 255, 0, true);
                  } else {
                    this.shade.getComponent(UIMgrShade).init(typeof shadeSetting.delay !== 'number' ? 0 : shadeSetting.delay, typeof shadeSetting.begin !== 'number' ? 60 : shadeSetting.begin, typeof shadeSetting.end !== 'number' ? 180 : shadeSetting.end, typeof shadeSetting.speed !== 'number' ? 100 : shadeSetting.speed, false);
                  }
                  this.shade.layer = node.layer;
                  this.shade.parent = uiRoot;
                  this.shade.active = true;
                  // 以z坐标来代替2.x时代的zIndex
                  this.shade.setPosition(this.shade.position.x, this.shade.position.y, node.position.z);
                  var shadeIndex = this.shade.getSiblingIndex();
                  var nodeIndex = node.getSiblingIndex();
                  if (shadeIndex > nodeIndex) {
                    this.shade.setSiblingIndex(nodeIndex);
                  } else {
                    this.shade.setSiblingIndex(nodeIndex - 1);
                  }
                  return;
                }
              }
            }
          }
          this.shade.active = false;
          this.shade.getComponent(UIMgrShade).clear();
          if (!onFocus) {
            isValid(this.currFocus, true) && this.currFocus.constructor.prototype.focus.call(this.currFocus, false);
            this.currFocus = null;
          }
        }

        // 解析prefab
        ;

        _proto.parsingPrefab = function parsingPrefab(prefab, name) {
          var _node$getComponent;
          if (!prefab) return null;
          var node = instantiate(prefab);
          node.active = false;
          if (node.name !== name) {
            this.warn('parsingPrefab', "\u8282\u70B9\u540D\u4E0EUI\u540D\u4E0D\u4E00\u81F4, \u5DF2\u91CD\u7F6E\u4E3AUI\u540D: " + this.getUIPath(name));
            node.name = name;
          }
          node.parent = this.getUIParent(name);
          (_node$getComponent = node.getComponent(Widget)) == null || _node$getComponent.updateAlignment();
          return node;
        }

        // 解析scene
        ;

        _proto.parsingScene = function parsingScene(asset, name) {
          if (!asset || !asset.scene) return null;
          if (asset.scene.name !== name) {
            this.warn('parsingScene', "\u573A\u666F\u540D\u4E0EUI\u540D\u4E0D\u4E00\u81F4, \u5DF2\u91CD\u7F6E\u4E3AUI\u540D: " + this.getUIPath(name));
            asset.scene.name = name;
          }
          var view = this.getViewInChildren(asset.scene);
          if (!view) {
            this.error('parsingScene', "\u89E3\u6790\u573A\u666F\u65F6\u672A\u67E5\u8BE2\u5230\u6839\u8282\u70B9\u5B58\u5728BaseView: " + this.getUIPath(name));
            return null;
          }
          view.node.active = false;
          if (view.node.name !== name) {
            this.warn('parsingScene', "\u8282\u70B9\u540D\u4E0EUI\u540D\u4E0D\u4E00\u81F4, \u5DF2\u91CD\u7F6E\u4E3AUI\u540D: " + this.getUIPath(name));
            view.node.name = name;
          }
          return view.node;
        };
        _proto.addUILoadingUuid = function addUILoadingUuid(name, loadingUuid) {
          var uuid = loadingUuid || this.createUUID();
          if (!this.uiLoadingMap.has(name)) {
            this.uiLoadingMap.set(name, [uuid]);
          } else {
            this.uiLoadingMap.get(name).push(uuid);
          }
          return uuid;
        };
        _proto.removeUILoadingUuid = function removeUILoadingUuid(name, uuid) {
          if (!this.uiLoadingMap.has(name)) return false;
          var index = this.uiLoadingMap.get(name).indexOf(uuid);
          if (index === -1) return false;
          this.uiLoadingMap.get(name).splice(index, 1);
          return true;
        }

        /**
         * 创建UI
         */;
        _proto.createUI = function createUI(name, silent, callback) {
          var _this10 = this;
          // 生成一个UI加载的UUID
          var loadingUuid = silent ? '' : this.showLoading();
          var uiLoadingUuid = this.addUILoadingUuid(name, loadingUuid);

          // 验证name
          if (!name) {
            setTimeout(function () {
              if (!isValid(_this10)) return;
              // 验证本次加载是否有效
              if (_this10.removeUILoadingUuid(name, uiLoadingUuid) === false) {
                return _this10.hideLoading(loadingUuid);
              }
              callback(null);
              _this10.hideLoading(loadingUuid);
            });
            return;
          }

          // 判断是否已经存在节点并且是单例模式
          var node = this.getUIInScene(name);
          if (isValid(node, true) && this.getBaseView(node).isSingleton === true) {
            setTimeout(function () {
              if (!isValid(_this10)) return;

              // 验证本次加载是否有效
              if (_this10.removeUILoadingUuid(name, uiLoadingUuid) === false) {
                return _this10.hideLoading(loadingUuid);
              }

              // 验证节点是否有效
              if (isValid(node, true)) {
                if (_this10.currScene === name) {
                  callback(node, director.getScene());
                } else {
                  callback(node);
                }
                _this10.hideLoading(loadingUuid);
              } else {
                _this10.createUI(name, silent, callback);
                _this10.hideLoading(loadingUuid);
              }
            });
            return;
          }

          // 加载UI
          this.load(name, function (asset) {
            if (!isValid(_this10)) return;

            // 验证本次加载是否有效
            if (_this10.removeUILoadingUuid(name, uiLoadingUuid) === false) {
              return _this10.hideLoading(loadingUuid);
            }

            // 是场景
            if (asset instanceof SceneAsset) {
              callback(_this10.parsingScene(asset, name), asset.scene);
              _this10.hideLoading(loadingUuid);
              return;
            }

            // 验证是否是单例(一个单例会有被同时load多次的情况，因为判断一个ui是否是单例，必须要至少实例化一个后才能获取)
            var node = _this10.getUIInScene(name);
            if (!isValid(node, true) || _this10.getBaseView(node).isSingleton === false) {
              callback(_this10.parsingPrefab(asset, name));
              _this10.hideLoading(loadingUuid);
            } else {
              callback(node);
              _this10.hideLoading(loadingUuid);
            }
          });
        }

        /**
         * 展示默认View
         */;
        _proto.showDefault = function showDefault(onShow) {
          if (this.defaultUI) {
            this.show({
              name: this.defaultUI,
              data: this.defaultData,
              onShow: onShow
            });
          } else {
            Core.inst.manager.ui.showToast('请先设置首界面\n在setting.ts中修改defaultUI', 100);
            onShow && onShow();
            this.warn('defaultUI不存在，请在setting.ts中修改');
          }
        }

        /**
         * 是否展示了(包括加载中和队列中)
         */;
        _proto.isShow = function isShow(name) {
          return !!this.getUIInShowing(name) || this.isInQueue(name) || this.isLoading(name);
        }

        /**
         * 是否在队列中
         */;
        _proto.isInQueue = function isInQueue(name) {
          return !!this.showQueue.find(function (v) {
            return v.name == name;
          });
        }

        /**
         * 是否在加载中
         */;
        _proto.isLoading = function isLoading(name) {
          return this.uiLoadingMap.has(name) && this.uiLoadingMap.get(name).length > 0;
        }

        /**
         * 放入队列
         */;
        _proto.putInShowQueue = function putInShowQueue(data) {
          if (data.queue === 'join' || this.showQueue.length === 0) {
            this.showQueue.push(data);
          } else {
            this.showQueue.splice(1, 0, data);
          }
          if (this.showQueue.length === 1) {
            this.consumeShowQueue();
          }
        }

        /**
         * 消耗队列
         */;
        _proto.consumeShowQueue = function consumeShowQueue() {
          var _this11 = this;
          if (this.showQueue.length === 0) return;
          var data = this.showQueue[0];
          this.show({
            name: data.name,
            data: data.data,
            onShow: data.onShow,
            onHide: function onHide(result) {
              data.onHide && data.onHide(result);
              _this11.showQueue.shift();
              _this11.consumeShowQueue();
            },
            onError: data.onError ? function (error, code) {
              var ret = data.onError(error, code);
              _this11.showQueue.shift();
              _this11.consumeShowQueue();
              return ret;
            } : undefined,
            top: data.top,
            attr: data.attr,
            silent: data.silent
          });
        };
        _proto.showUI = function showUI(params) {
          var _this12 = this;
          var name = params.name,
            data = params.data,
            onShow = params.onShow,
            onHide = params.onHide,
            onError = params.onError,
            _params$top = params.top,
            top = _params$top === void 0 ? true : _params$top,
            _params$attr = params.attr,
            attr = _params$attr === void 0 ? null : _params$attr,
            _params$silent = params.silent,
            silent = _params$silent === void 0 ? false : _params$silent;
          this.createUI(name, silent, function (node, scene) {
            if (!node) {
              _this12.error('show', name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
              // 「没有指定onError」或「onError返回true」会自动发起重试
              if (onError && onError(name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25", UIManager.ErrorCode.LoadError) !== true) {
                return;
              }
              _this12.scheduleOnce(function () {
                return _this12.showUI(params);
              }, 1);
              if (!silent) _this12.showLoading(1);
              return;
            }
            !scene && top && node.setSiblingIndex(-1);
            var com = _this12.getBaseView(node);
            _this12.uiShowingMap.set(com, name);
            com.constructor.prototype.show.call(com, data, attr,
            // onShow
            function (result) {
              _this12.uiShowingMap.set(com, name);
              onShow && onShow(result);
            },
            // onHide
            function (result) {
              _this12.uiShowingMap["delete"](com);
              onHide && onHide(result);
            },
            // beforeShow
            function (error) {
              if (error) {
                _this12.uiShowingMap["delete"](com);
                onError && onError(error, UIManager.ErrorCode.LogicError);
              } else if (BaseView.isPage(name)) {
                _this12.uiShowingMap.set(com, name);
                var oldCom = _this12.currPage;
                _this12.currPage = com;
                if (isValid(oldCom, true) && oldCom !== com && oldCom.isShow) {
                  oldCom.constructor.prototype.hide.call(oldCom, {
                    name: name
                  });
                }
                if (scene) {
                  if (oldCom !== com) {
                    _this12.currScene = name;
                    director.runSceneImmediate(scene, null, function () {
                      _this12.log("\u5207\u6362\u573A\u666F: " + name);
                    });
                  }
                } else if (_this12.currScene !== UIScene) {
                  _this12.currScene = UIScene;
                  var _scene = new Scene(UIScene);
                  _scene.autoReleaseAssets = true;
                  director.runSceneImmediate(_scene, null, function () {
                    _this12.log("\u5207\u6362\u573A\u666F: " + UIScene);
                  });
                }
              }
            });
          });
        }

        /**
         * 展示一个UI
         * - 此流程一定是异步的
         */;
        _proto.show = function show(params // @ts-ignore
        ) {
          var _this13 = this;
          var name = params.name,
            data = params.data,
            queue = params.queue,
            onError = params.onError,
            _params$silent2 = params.silent,
            silent = _params$silent2 === void 0 ? false : _params$silent2;

          // 加入队列中
          if (queue) {
            this.putInShowQueue(params);
            return;
          }
          this.log("show: " + name);

          // 生成一个UI加载的UUID
          var loadingUuid = silent ? '' : this.showLoading();
          var uiLoadingUuid = this.addUILoadingUuid(name, loadingUuid);
          // 判断ui是否有效
          Core.inst.lib.task.execute(function (retry) {
            _this13.checkUIValid(name, data, function (valid) {
              // 验证本次加载是否有效
              if (_this13.removeUILoadingUuid(name, uiLoadingUuid) === false) {
                _this13.hideLoading(loadingUuid);
                return;
              }

              // 加载失败
              if (valid === -1) {
                _this13.error('show', name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25");
                // 「没有指定onError」或「onError返回true」会自动发起重试
                if (onError && onError(name + " \u4E0D\u5B58\u5728\u6216\u52A0\u8F7D\u5931\u8D25", UIManager.ErrorCode.LoadError) !== true) {
                  return _this13.hideLoading(loadingUuid);
                }
                return retry(1);
              }

              // ui无效
              if (valid === 0) {
                _this13.warn('show', name + " \u65E0\u6548");
                _this13.uninstallUI(name);
                onError && onError(name + " \u65E0\u6548", UIManager.ErrorCode.InvalidError);
                _this13.hideLoading(loadingUuid);
                return;
              }
              _this13.showUI(params);
              _this13.hideLoading(loadingUuid);
            });
          });
        }

        /**
         * 展示一个UI
         * - 此流程一定是异步的
         */;
        _proto.showAsync = function showAsync(params // @ts-ignore
        ) {
          var _this14 = this;
          return new Promise(function (resolve) {
            _this14.show(_extends({}, params, {
              onHide: function onHide(result) {
                resolve(result);
              }
            }));
          });
        }

        /**
         * 关闭View
         * - 此流程一定是同步的
         */;
        _proto.hide = function hide(_ref2 // @ts-ignore
        ) {
          var _this15 = this;
          var name = _ref2.name,
            data = _ref2.data,
            onHide = _ref2.onHide;
          var nodes = this.getUIInShowing(name, true);
          this.log("hide: " + name);
          if (nodes.length === 0) {
            if (!this.uiLoadingMap.has(name) || this.uiLoadingMap.get(name).length === 0) {
              return this.warn('hide', name + " \u4E0D\u5B58\u5728");
            }
          }
          if (this.uiLoadingMap.has(name)) {
            this.uiLoadingMap.get(name).forEach(function (loadingUuid) {
              return _this15.hideLoading(loadingUuid);
            });
            this.uiLoadingMap.get(name).length = 0;
          }
          for (var index = nodes.length - 1; index >= 0; index--) {
            var node = nodes[index];
            var com = this.getBaseView(node);
            if (this.currPage === com) {
              this.currPage = null;
            }
            com.constructor.prototype.hide.call(com, data, onHide);
          }
        }

        /**
         * 从顶部关闭一个View(不会重复关闭节点)
         * - 此流程一定是同步的
         */;
        _proto.pop = function pop(_ref3 // @ts-ignore
        ) {
          var name = _ref3.name,
            data = _ref3.data,
            onHide = _ref3.onHide;
          var nodes = this.getUIInShowing(name, true);
          if (this.uiLoadingMap.has(name) && this.uiLoadingMap.get(name).length) {
            var loadingUuid = this.uiLoadingMap.get(name).pop();
            this.hideLoading(loadingUuid);
            this.log("pop: " + name);
            return;
          }
          if (nodes.length) {
            var node = nodes.pop();
            var com = this.getBaseView(node);
            if (this.currPage === com) {
              this.currPage = null;
            }
            com.constructor.prototype.hide.call(com, data, onHide);
            this.log("pop: " + name);
            return;
          }
          this.warn('pop', name + " \u4E0D\u5B58\u5728");
        }

        /**
         * 从底部关闭一个View(不会重复关闭节点)
         * - 此流程一定是同步的
         */;
        _proto.shift = function shift(_ref4 // @ts-ignore
        ) {
          var name = _ref4.name,
            data = _ref4.data,
            onHide = _ref4.onHide;
          var nodes = this.getUIInShowing(name, true);
          if (nodes.length) {
            var node = nodes[0];
            var com = this.getBaseView(node);
            if (this.currPage === com) {
              this.currPage = null;
            }
            com.constructor.prototype.hide.call(com, data, onHide);
            this.log("shift: " + name);
            return;
          }
          if (this.uiLoadingMap.has(name) && this.uiLoadingMap.get(name).length) {
            var loadingUuid = this.uiLoadingMap.get(name).shift();
            this.hideLoading(loadingUuid);
            this.log("shift: " + name);
            return;
          }
          this.warn('shift', name + " \u4E0D\u5B58\u5728");
        }

        /**
         * 关闭全部View
         * - 不关闭展示中的Page(加载中的会停止)
         * - 此流程一定是同步的
         */;
        _proto.hideAll = function hideAll(_temp) {
          var _this16 = this;
          var _ref5 = _temp === void 0 ? {} : _temp,
            data = _ref5.data,
            exclude = _ref5.exclude;
          this.log('hideAll');
          // 展示中的
          this.uiShowingMap.forEach(function (name, com) {
            if (BaseView.isPaper(name)) return;
            if (exclude && exclude.indexOf(name) !== -1) return;
            if (com === _this16.currPage) return;
            com.constructor.prototype.hide.call(com, data);
          });
          // 加载中的
          this.uiLoadingMap.forEach(function (value, name) {
            if (BaseView.isPaper(name)) return;
            if (exclude && exclude.indexOf(name) !== -1) return;
            value.forEach(function (loadingUuid) {
              return _this16.hideLoading(loadingUuid);
            });
            value.length = 0;
          });
        };
        _proto.showLoading = function showLoading(timeout) {
          var _this17 = this;
          if (timeout === void 0) {
            timeout = 0;
          }
          this.loading.active = true;
          this.loading.setSiblingIndex(-1);
          if (this.loading.getComponent(UIMgrLoading)) {
            this.loading.getComponent(UIMgrLoading).init();
          } else {
            var _this$loading$getComp;
            // 兼容旧版本
            (_this$loading$getComp = this.loading.getComponentInChildren(UIMgrLoading)) == null || _this$loading$getComp.init();
          }
          var uuid = this.createUUID();
          this.showLoadingMap.set(uuid, true);
          if (timeout > 0) this.scheduleOnce(function () {
            _this17.hideLoading(uuid);
          }, timeout);
          return uuid;
        };
        _proto.hideLoading = function hideLoading(uuid) {
          if (!uuid) return;
          this.showLoadingMap["delete"](uuid);
          if (this.showLoadingMap.size === 0) {
            if (this.loading.getComponent(UIMgrLoading)) {
              this.loading.getComponent(UIMgrLoading).clear();
            } else {
              var _this$loading$getComp2;
              // 兼容旧版本
              (_this$loading$getComp2 = this.loading.getComponentInChildren(UIMgrLoading)) == null || _this$loading$getComp2.clear();
            }
            this.loading.active = false;
          }
        }

        /**
         * 添加触摸屏蔽
         */;
        _proto.addTouchMask = function addTouchMask(timeout) {
          var _this18 = this;
          if (timeout === void 0) {
            timeout = 0;
          }
          this.addTouchMaskListener();
          var uuid = this.createUUID();
          this.touchMaskMap.set(uuid, true);
          if (timeout > 0) this.scheduleOnce(function () {
            _this18.removeTouchMask(uuid);
          }, timeout);
          return uuid;
        }

        /**
         * 移除触摸屏蔽
         * @param uuid addTouchMask的返回值
         */;
        _proto.removeTouchMask = function removeTouchMask(uuid) {
          if (!uuid) return;
          this.touchMaskMap["delete"](uuid);
          this.removeTouchMaskListener();
        }

        /**
         * 显示Toast
         * @param message 文本
         * @param timeout 持续时间(秒)，默认2秒
         */;
        _proto.showToast = function showToast(message, timeout) {
          if (!this.toast) {
            return this.error('showToast', '请确认首场景中「Canvas/Manager/UIManager」的「Toast Pre」属性存在');
          }
          this.toast.setSiblingIndex(-1);
          this.toast.getComponent(UIMgrToast).add({
            message: message,
            timeout: timeout
          });
        }

        /**
         * 清理Toast
         */;
        _proto.clearToast = function clearToast() {
          if (!this.toast) return;
          this.toast.getComponent(UIMgrToast).clear();
        }

        /**
         * 设置触摸是否启用
         * @param enabled 是否启用
         */;
        _proto.setTouchEnabled = function setTouchEnabled(enabled) {
          if (enabled) {
            this.touchEnabled = true;
            this.removeTouchMaskListener();
          } else {
            this.addTouchMaskListener();
            this.touchEnabled = false;
          }
          this.warn('setTouchEnabled', this.touchEnabled);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.onUserInterface = function onUserInterface() {
          for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }
          Node.prototype.on.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.onceUserInterface = function onceUserInterface() {
          for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }
          Node.prototype.once.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.offUserInterface = function offUserInterface() {
          for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
            args[_key4] = arguments[_key4];
          }
          Node.prototype.off.apply(this.UserInterface, args);
        }

        /**
         * 在2DUI根节点上处理事件
         */;
        _proto.targetOffUserInterface = function targetOffUserInterface() {
          for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
            args[_key5] = arguments[_key5];
          }
          Node.prototype.targetOff.apply(this.UserInterface, args);
        }

        /**
         * 立即给2DUI的子节点排序
         */;
        _proto.sortUserInterface = function sortUserInterface(name) {
          var _this$UserInterface;
          (_this$UserInterface = this.UserInterface) == null || (_this$UserInterface = _this$UserInterface.getChildByName(name)) == null || (_this$UserInterface = _this$UserInterface.getComponent(UIMgrZOrder)) == null || _this$UserInterface.updateZOrder();
        }

        /**
         * 屏幕截图
         * - 需要在Director.EVENT_BEFORE_RENDER事件中调用
         * @example
         * director.once(Director.EVENT_BEFORE_RENDER, () => {
         *   const renderTexture = new RenderTexture();
         *   const size = view.getVisibleSize();
         *   renderTexture.reset({ width: size.width, height: size.height });
         *   app.manager.ui.screenshot(renderTexture);
         * });
         */;
        _proto.screenshot = function screenshot(renderTexture, opts) {
          var cameras = (opts == null ? void 0 : opts.cameraList) || director.getScene().getComponentsInChildren(Camera);
          var cameraList = cameras.sort(function (a, b) {
            return a.priority - b.priority;
          }).filter(function (camera) {
            if (!camera.enabledInHierarchy) return false;
            if (camera.targetTexture) return false;
            return opts != null && opts.cameraFilter ? opts.cameraFilter(camera) : true;
          });
          var cameraList2 = cameraList.map(function (camera) {
            return camera.camera;
          });
          cameraList.forEach(function (camera) {
            camera.targetTexture = renderTexture;
          });
          director.root.pipeline.render(cameraList2);
          cameraList.forEach(function (camera) {
            camera.targetTexture = null;
          });
          return renderTexture;
        };
        _createClass(UIManager, [{
          key: "root",
          get: /**UI根节点 */
          function get() {
            return this.node.parent.parent;
          }

          /**相机 */
        }, {
          key: "camera",
          get: function get() {
            return this.canvas.cameraComponent;
          }

          /**画布*/
        }, {
          key: "canvas",
          get: function get() {
            return this.root.getComponent(Canvas);
          }
        }]);
        return UIManager;
      }(BaseManager), _class3.setting = {}, _class3.ErrorCode = ErrorCode, _class3.ViewName = ViewName, _class3.MiniViewName = MiniViewName, _class3), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loadingPre", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shadePre", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toastPre", [_dec4], {
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

System.register("chunks:///_virtual/UIMgrLoading.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UITransform, Node, Graphics, Component, Size;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Node = module.Node;
      Graphics = module.Graphics;
      Component = module.Component;
      Size = module.Size;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3;
      cclegacy._RF.push({}, "4a8e5aXrnhKSo0IF6zGgjon", "UIMgrLoading", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var UIMgrLoading = exports('default', (_dec = ccclass('UIMgrLoading'), _dec2 = requireComponent(UITransform), _dec3 = property(Node), _dec4 = property({
        tooltip: '动画的尺寸'
      }), _dec5 = property({
        tooltip: '等待几秒后开始动画'
      }), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrLoading, _Component);
        function UIMgrLoading() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "loading", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "size", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "delay", _descriptor3, _assertThisInitialized(_this));
          _this.progress = 0;
          _this.ringScale = 1;
          _this.reverse = false;
          _this.angleSpeed = 120;
          _this.ringSpeed = 0.02;
          _this.inited = false;
          _this.drawing = false;
          _this.timedown = 0;
          return _this;
        }
        var _proto = UIMgrLoading.prototype;
        _proto.init = function init() {
          if (this.inited) return;
          this.inited = true;
          this.progress = 0;
          this.ringScale = 1;
          this.loading.angle = 0;
          this.reverse = false;
          this.drawing = false;
          this.timedown = this.delay;
          this.loading.getComponent(Graphics).clear();
        };
        _proto.clear = function clear() {
          this.inited = false;
          this.drawing = false;
        }

        /**
         * 需要重写
         */;
        _proto.onDraw = function onDraw() {
          var graphics = this.loading.getComponent(Graphics);
          var uiTransform = this.loading.getComponent(UITransform);
          var centerX = this.size.width * (0.5 - uiTransform.anchorX);
          var centerY = this.size.height * (0.5 - uiTransform.anchorY);
          var r = Math.min(this.size.width / 2, this.size.height / 2);
          var allPI = Math.PI;
          var offst = 0;
          graphics.clear();
          if (this.reverse) {
            var start = 0.5 * Math.PI + offst;
            var end = 0.5 * Math.PI + this.progress * 2 * allPI + offst;
            graphics.arc(centerX, centerY, r, start, end, true);
          } else {
            var _start = 0.5 * Math.PI - offst;
            var _end = 0.5 * Math.PI - this.progress * 2 * allPI - offst;
            graphics.arc(centerX, centerY, r, _start, _end, false);
          }
          graphics.stroke();
        };
        _proto.update = function update(dt) {
          if (!this.inited) return;

          // 倒计时
          if (!this.drawing) {
            if (this.timedown > 0) {
              this.timedown -= dt;
            }
            if (this.timedown <= 0) {
              this.drawing = true;
            } else {
              return;
            }
          }

          // 旋转
          this.loading.angle -= this.angleSpeed * dt;
          if (this.loading.angle >= 360 || this.loading.angle <= -360) {
            this.loading.angle = this.loading.angle % 360;
          }

          // 进度
          if (this.ringScale > 0) {
            this.progress = Math.min(1, this.progress + this.ringSpeed * this.ringScale);
            if (this.progress == 1) {
              this.ringScale = -1;
              this.reverse = !this.reverse;
            }
          } else {
            this.progress = Math.max(0, this.progress + this.ringSpeed * this.ringScale);
            if (this.progress == 0) {
              this.ringScale = 1;
              this.reverse = !this.reverse;
            }
          }
          this.onDraw();
        };
        return UIMgrLoading;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "loading", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "size", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Size(60, 60);
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "delay", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      })), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrShade.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './Core.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, Sprite, UIOpacity, Material, SpriteFrame, director, Color, Camera, Director, RenderTexture, UITransform, Component, Core;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Sprite = module.Sprite;
      UIOpacity = module.UIOpacity;
      Material = module.Material;
      SpriteFrame = module.SpriteFrame;
      director = module.director;
      Color = module.Color;
      Camera = module.Camera;
      Director = module.Director;
      RenderTexture = module.RenderTexture;
      UITransform = module.UITransform;
      Component = module.Component;
    }, function (module) {
      Core = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6;
      cclegacy._RF.push({}, "d02952bsB1JPJ4xXteObDOr", "UIMgrShade", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var UIMgrShade = exports('default', (_dec = ccclass('UIMgrShade'), _dec2 = requireComponent(Sprite), _dec3 = requireComponent(UIOpacity), _dec4 = property(Material), _dec5 = property(SpriteFrame), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrShade, _Component);
        function UIMgrShade() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "blurMaterial", _descriptor, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "shadeFrame", _descriptor2, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_delay", _descriptor3, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_begin", _descriptor4, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_end", _descriptor5, _assertThisInitialized(_this));
          _initializerDefineProperty(_this, "_speed", _descriptor6, _assertThisInitialized(_this));
          _this.inited = false;
          _this.drawing = false;
          _this.timedown = 0;
          _this.blurFrame = null;
          return _this;
        }
        var _proto = UIMgrShade.prototype;
        _proto.init = function init(delay, begin, end, speed, blur) {
          var _this2 = this;
          if (blur) {
            director.targetOff(this);
            this.inited = false;
            this.drawing = false;
            this.sprite.color = Color.WHITE;
            this.sprite.customMaterial = null;
            this.sprite.spriteFrame = this.blurFrame;
            if (this.blurFrame) this.blurFrame.flipUVY = false;
            var count = 0;
            var cameras = director.getScene().getComponentsInChildren(Camera);
            director.on(Director.EVENT_BEFORE_RENDER, function () {
              var _this2$blurFrame2;
              count++;
              var renderTexture = new RenderTexture();
              var size = _this2.node.getComponent(UITransform);
              renderTexture.reset({
                width: size.width / 2,
                height: size.height / 2
              });
              renderTexture.addRef();
              Core.inst.manager.ui.screenshot(renderTexture, {
                cameraList: cameras
              });
              if (count === 1) {
                var _this2$blurFrame;
                _this2.blurFrame = new SpriteFrame();
                (_this2$blurFrame = _this2.blurFrame) == null || (_this2$blurFrame = _this2$blurFrame.texture) == null || _this2$blurFrame.decRef();
                _this2.blurFrame.texture = renderTexture;
                _this2.blurFrame.flipUVY = true;
                _this2.sprite.spriteFrame = _this2.blurFrame;
                _this2.sprite.customMaterial = _this2.blurMaterial;
                _this2.blurMaterial.setProperty('blurLevel', 2);
                return;
              }
              if (count === 5) {
                director.targetOff(_this2);
                _this2.sprite.spriteFrame.flipUVY = false;
                _this2.sprite.customMaterial = null;
                return;
              }
              (_this2$blurFrame2 = _this2.blurFrame) == null || (_this2$blurFrame2 = _this2$blurFrame2.texture) == null || _this2$blurFrame2.decRef();
              _this2.blurFrame.texture = renderTexture;
              _this2.blurFrame.flipUVY = true;
              _this2.sprite.spriteFrame = _this2.blurFrame;
              _this2.sprite.customMaterial = _this2.blurMaterial;
              _this2.blurMaterial.setProperty('blurLevel', count === 2 ? 3 : 1);
            }, this);
          } else {
            director.targetOff(this);
            this.sprite.spriteFrame = this.shadeFrame;
            this.sprite.color = Color.BLACK;
            this.sprite.customMaterial = null;
          }
          this.delay = delay;
          this.begin = begin;
          this.end = end;
          this.speed = speed;
          this.drawing = true;
          if (this.inited) return;
          this.inited = true;
          this.timedown = this.delay;
          // 初始透明度
          this.opacity.opacity = this.timedown > 0 ? 0 : this.begin;
        };
        _proto.clear = function clear() {
          var _this$blurFrame, _this$blurFrame2;
          this.inited = false;
          this.drawing = false;
          director.targetOff(this);
          (_this$blurFrame = this.blurFrame) == null || (_this$blurFrame = _this$blurFrame.texture) == null || _this$blurFrame.decRef();
          (_this$blurFrame2 = this.blurFrame) == null || _this$blurFrame2.destroy();
          this.blurFrame = null;
          this.sprite.spriteFrame = null;
        };
        _proto.update = function update(dt) {
          if (!this.inited) return;
          if (!this.drawing) return;
          if (this.timedown > 0) {
            this.timedown -= dt;
            if (this.timedown > 0) return;
            // 初始透明度
            this.opacity.opacity = this.begin;
          }
          var uiOpacity = this.opacity;
          if (this.speed > 0) {
            uiOpacity.opacity += this.speed * dt;
            if (uiOpacity.opacity > this.end) {
              uiOpacity.opacity = this.end;
            }
          } else if (this.speed < 0) {
            uiOpacity.opacity += this.speed * dt;
            if (uiOpacity.opacity < this.end) {
              uiOpacity.opacity = this.end;
            }
          }
          if (uiOpacity.opacity == this.end) {
            this.drawing = false;
          }
        };
        _createClass(UIMgrShade, [{
          key: "delay",
          get: function get() {
            return this._delay;
          },
          set: function set(v) {
            this._delay = Math.max(v, 0);
          }
        }, {
          key: "begin",
          get: function get() {
            return this._begin;
          },
          set: function set(v) {
            if (v >= 0 && v <= 255) this._begin = v;
          }
        }, {
          key: "end",
          get: function get() {
            return this._end;
          },
          set: function set(v) {
            if (v >= 0 && v <= 255) this._end = v;
          }
        }, {
          key: "speed",
          get: function get() {
            if (this.begin == this.end) {
              return 0;
            } else if (this.begin > this.end) {
              return this._speed > 0 ? -this._speed : this._speed;
            } else {
              return this._speed >= 0 ? this._speed : -this._speed;
            }
          },
          set: function set(v) {
            this._speed = v;
          }
        }, {
          key: "sprite",
          get: function get() {
            return this.node.getComponent(Sprite);
          }
        }, {
          key: "opacity",
          get: function get() {
            return this.node.getComponent(UIOpacity);
          }
        }]);
        return UIMgrShade;
      }(Component), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "blurMaterial", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "shadeFrame", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "_delay", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "delay", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "delay"), _class2.prototype), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "_begin", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "begin", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "begin"), _class2.prototype), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "_end", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 255;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "end", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "end"), _class2.prototype), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "_speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 10;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "speed", [property], Object.getOwnPropertyDescriptor(_class2.prototype, "speed"), _class2.prototype)), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrToast.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './UIMgrToastCell.ts'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, _createClass, cclegacy, _decorator, UITransform, Prefab, NodePool, instantiate, UIOpacity, tween, Tween, view, Component, UIMgrToastCell;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
      _createClass = module.createClass;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UITransform = module.UITransform;
      Prefab = module.Prefab;
      NodePool = module.NodePool;
      instantiate = module.instantiate;
      UIOpacity = module.UIOpacity;
      tween = module.tween;
      Tween = module.Tween;
      view = module.view;
      Component = module.Component;
    }, function (module) {
      UIMgrToastCell = module.default;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "cde15KM9mxA9L3SJ78TjOHf", "UIMgrToast", undefined);
      var property = _decorator.property,
        ccclass = _decorator.ccclass,
        requireComponent = _decorator.requireComponent;
      var UIMgrToast = exports('default', (_dec = ccclass('UIMgrToast'), _dec2 = requireComponent(UITransform), _dec3 = property(Prefab), _dec(_class = _dec2(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrToast, _Component);
        function UIMgrToast() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "cell", _descriptor, _assertThisInitialized(_this));
          /**每条信息显示几秒 */
          _this.lifeTime = 2;
          /**消失时花费几秒渐隐 */
          _this.outTime = 0.2;
          /**挤压基础速度 */
          _this.squeezeSpeed = 200;
          /**节点缓存池子 */
          _this.pool = new NodePool();
          return _this;
        }
        var _proto = UIMgrToast.prototype;
        _proto.add = function add(data) {
          var _this2 = this;
          var cell = this.pool.get() || instantiate(this.cell);
          cell.setPosition(0, 0, 0);
          cell.parent = this.node;
          cell.active = true;
          cell.getComponent(UIMgrToastCell).init(data.message);
          cell.getComponent(UIOpacity).opacity = 255;
          tween(cell.getComponent(UIOpacity)).delay(data.timeout || this.lifeTime).to(this.outTime, {
            opacity: 0
          }).call(function () {
            _this2.pool.put(cell);
          }).start();
        };
        _proto.clear = function clear() {
          var children = this.node.children;
          for (var index = children.length - 1; index >= 0; index--) {
            Tween.stopAllByTarget(children[index].getComponent(UIOpacity));
            children[index].destroy();
          }
        };
        _proto.onDestroy = function onDestroy() {
          this.pool.clear();
        };
        _proto.update = function update(dt) {
          var children = this.node.children;
          for (var index = children.length - 1, recovery = false; index >= 0; index--) {
            var zero = index === children.length - 1;
            var curr = children[index];

            // 直接触发回收逻辑
            if (recovery) {
              Tween.stopAllByTarget(curr.getComponent(UIOpacity));
              this.pool.put(curr);
              continue;
            }
            if (zero) {
              var currUT = curr.getComponent(UITransform);
              var lastMaxY = 0 - currUT.height / 2;
              var currMinY = curr.position.y + lastMaxY;
              if (currMinY > lastMaxY) {
                // 存在空隙
                var addLen = Math.max(-this.squeezeSpeed * dt * (children.length - index), lastMaxY - currMinY);
                curr.setPosition(curr.position.x, curr.position.y + addLen, curr.position.z);
              }
            } else {
              var last = children[index + 1];
              var _currUT = curr.getComponent(UITransform);
              var lastUT = last.getComponent(UITransform);
              var _currMinY = curr.position.y - _currUT.height / 2 - 6; //6像素的间隔
              var _lastMaxY = last.position.y + lastUT.height / 2;
              if (_currMinY < _lastMaxY) {
                // 存在重叠
                var _addLen = Math.min(this.squeezeSpeed * dt * (children.length - index - 1), _lastMaxY - _currMinY);
                curr.setPosition(curr.position.x, curr.position.y + _addLen, curr.position.z);
                var winSize = view.getVisibleSize();
                if (_currMinY > winSize.height / 2) {
                  // 触发回收逻辑
                  recovery = true;
                  Tween.stopAllByTarget(curr.getComponent(UIOpacity));
                  this.pool.put(curr);
                }
              } else if (_currMinY > _lastMaxY) {
                // 存在空隙
                var _addLen2 = Math.max(-this.squeezeSpeed * dt * (children.length - index), _lastMaxY - _currMinY);
                curr.setPosition(curr.position.x, curr.position.y + _addLen2, curr.position.z);
              }
            }
          }
        };
        _createClass(UIMgrToast, [{
          key: "size",
          get: function get() {
            return this.node.children.length;
          }
        }]);
        return UIMgrToast;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "cell", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrToastCell.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _applyDecoratedDescriptor, _inheritsLoose, _initializerDefineProperty, _assertThisInitialized, cclegacy, _decorator, UIOpacity, UITransform, Label, Component;
  return {
    setters: [function (module) {
      _applyDecoratedDescriptor = module.applyDecoratedDescriptor;
      _inheritsLoose = module.inheritsLoose;
      _initializerDefineProperty = module.initializerDefineProperty;
      _assertThisInitialized = module.assertThisInitialized;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      UIOpacity = module.UIOpacity;
      UITransform = module.UITransform;
      Label = module.Label;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor;
      cclegacy._RF.push({}, "6cc63HWsI5O44ve4wfEKIc0", "UIMgrToastCell", undefined);
      var ccclass = _decorator.ccclass,
        property = _decorator.property,
        requireComponent = _decorator.requireComponent;
      var UIMgrToastCell = exports('default', (_dec = ccclass('UIMgrToastCell'), _dec2 = requireComponent(UIOpacity), _dec3 = requireComponent(UITransform), _dec4 = property(Label), _dec(_class = _dec2(_class = _dec3(_class = (_class2 = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrToastCell, _Component);
        function UIMgrToastCell() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _initializerDefineProperty(_this, "title", _descriptor, _assertThisInitialized(_this));
          return _this;
        }
        var _proto = UIMgrToastCell.prototype;
        _proto.init = function init(title) {
          if (title.split('\n').find(function (v) {
            return v.length > 30;
          })) {
            this.title.overflow = Label.Overflow.RESIZE_HEIGHT;
            this.title.getComponent(UITransform).width = 600;
          } else {
            this.title.overflow = Label.Overflow.NONE;
          }
          this.title.string = title;
          this.title.updateRenderData(true);
        };
        _proto.unuse = function unuse() {
          this.title.string = '';
        };
        return UIMgrToastCell;
      }(Component), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "title", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _class2)) || _class) || _class) || _class));
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/UIMgrZOrder.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc'], function (exports) {
  var _inheritsLoose, cclegacy, _decorator, Node, director, Director, Component;
  return {
    setters: [function (module) {
      _inheritsLoose = module.inheritsLoose;
    }, function (module) {
      cclegacy = module.cclegacy;
      _decorator = module._decorator;
      Node = module.Node;
      director = module.director;
      Director = module.Director;
      Component = module.Component;
    }],
    execute: function () {
      var _dec, _class;
      cclegacy._RF.push({}, "ad5cbUQY55AwqzdOZrQBim5", "UIMgrZOrder", undefined);
      var ccclass = _decorator.ccclass;
      var UIMgrZOrder = exports('default', (_dec = ccclass('UIMgrZOrder'), _dec(_class = /*#__PURE__*/function (_Component) {
        _inheritsLoose(UIMgrZOrder, _Component);
        function UIMgrZOrder() {
          var _this;
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          _this = _Component.call.apply(_Component, [this].concat(args)) || this;
          _this.zOrder = false;
          _this.tempArr = [];
          return _this;
        }
        var _proto = UIMgrZOrder.prototype;
        _proto.onLoad = function onLoad() {
          this.checkUpdateZOrder();
          this.node.on(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.node.on(Node.EventType.CHILD_REMOVED, this.onChildRemoveed, this);
          if (Node.EventType.CHILDREN_ORDER_CHANGED) {
            this.node.on(Node.EventType.CHILDREN_ORDER_CHANGED, this.checkUpdateZOrder, this);
          } else {
            this.node.on(Node.EventType.SIBLING_ORDER_CHANGED, this.checkUpdateZOrder, this);
          }
        };
        _proto.onDestroy = function onDestroy() {
          director.off(Director.EVENT_AFTER_UPDATE, this.updateZOrder, this);
          this.node.off(Node.EventType.CHILD_ADDED, this.onChildAdded, this);
          this.node.off(Node.EventType.CHILD_REMOVED, this.onChildRemoveed, this);
          if (Node.EventType.CHILDREN_ORDER_CHANGED) {
            this.node.off(Node.EventType.CHILDREN_ORDER_CHANGED, this.checkUpdateZOrder, this);
          } else {
            this.node.off(Node.EventType.SIBLING_ORDER_CHANGED, this.checkUpdateZOrder, this);
          }
        };
        _proto.onChildAdded = function onChildAdded(child) {
          this.checkUpdateZOrder();
          child.on(Node.EventType.TRANSFORM_CHANGED, this.checkUpdateZOrder, this);
        };
        _proto.onChildRemoveed = function onChildRemoveed(child) {
          child.off(Node.EventType.TRANSFORM_CHANGED, this.checkUpdateZOrder, this);
        };
        _proto.checkUpdateZOrder = function checkUpdateZOrder() {
          if (this.zOrder) return;
          this.zOrder = true;
          director.once(Director.EVENT_AFTER_UPDATE, this.updateZOrder, this);
        }

        /**
         * 更新节点树排序
         */;
        _proto.updateZOrder = function updateZOrder() {
          if (!this.zOrder) return;
          Array.prototype.push.apply(this.tempArr, this.node.children);
          this.tempArr.sort(function (a, b) {
            return a.position.z - b.position.z || a.getSiblingIndex() - b.getSiblingIndex();
          }).forEach(function (child, index) {
            child.setSiblingIndex(index);
          });

          // 一定要放到最后再设置false，
          // 避免更新过程中设置siblingIndex，
          // 导致无限重复调用
          this.zOrder = false;
          this.tempArr.length = 0;
        };
        return UIMgrZOrder;
      }(Component)) || _class));
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
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