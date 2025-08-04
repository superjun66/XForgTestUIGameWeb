System.register("chunks:///_virtual/app-admin", ['./executor.ts'], function () {
  return {
    setters: [null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/executor.ts", ['cc', './app.ts', './config.const.ts', './store.user.ts', './HomeController.ts', './RoomController.ts'], function () {
  var cclegacy, director, Director, app, Const, User, HomeController, RoomController;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
      director = module.director;
      Director = module.Director;
    }, function (module) {
      app = module.app;
    }, function (module) {
      Const = module.default;
    }, function (module) {
      User = module.default;
    }, function (module) {
      HomeController = module.HomeController;
    }, function (module) {
      RoomController = module.RoomController;
    }],
    execute: function () {
      cclegacy._RF.push({}, "f187bY5C+FCHKyW84kaJgMh", "executor", undefined);
      function init() {
        Object.assign(app.config, {
          "const": new Const()
        });
        Object.assign(app.data, {});
        Object.assign(app.store, {
          user: new User()
        });
        Object.assign(app.Controller, {
          Home: HomeController,
          Room: RoomController
        });
        Object.assign(app.controller, {
          home: new HomeController(),
          room: new RoomController()
        });
      }
      director.on(Director.EVENT_RESET, init);
      init();
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-admin', 'chunks:///_virtual/app-admin'); 
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