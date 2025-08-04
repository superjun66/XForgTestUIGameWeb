System.register("chunks:///_virtual/app-model", ['./config.const.ts', './store.user.ts'], function () {
  return {
    setters: [null, null],
    execute: function () {}
  };
});

System.register("chunks:///_virtual/config.const.ts", ['cc'], function (exports) {
  var cclegacy;
  return {
    setters: [function (module) {
      cclegacy = module.cclegacy;
    }],
    execute: function () {
      cclegacy._RF.push({}, "bcb49Iq1V1AuZO1wnVz9LX5", "config.const", undefined);
      // config中不能定义任何方法, 任何变量在外部访问都是readonly
      // 如果config中的内容是服务器下发的，可以使用Object.assign覆盖config中的内容
      var Const = exports('default', function Const() {
        this.AllotIdentityCfg = {
          1: {
            name: '村民',
            icon: "card_villager",
            pic: "identityBig/pic_myrole_villager",
            card: "identityBig/card_villager",
            des: " 【技能】 无特殊能力，主要靠\n推理分析找出狼人。"
          },
          2: {
            name: '狼人',
            icon: "card_wolf",
            pic: "identityBig/pic_myrole_wolf",
            card: "identityBig/card_wolf",
            des: " 【技能】 每晚可以杀死一名玩\n家。"
          },
          3: {
            name: '预言家',
            icon: "card_prophet",
            pic: "identityBig/pic_myrole_prophet",
            card: "identityBig/card_prophet",
            des: " 【技能】 每晚可以查验一名玩\n家身份，知道他是猎人、狼人\n还是好人。"
          },
          4: {
            name: '守卫',
            icon: "card_guard",
            pic: "identityBig/pic_myrole_guard",
            card: "identityBig/card_guard",
            des: " 【技能】 每晚可以守护一个玩\n家（可守护自己），当晚被守\n护的玩家不会被狼人刀死，但\n是不能连续两晚守护同一个玩\n家。玩家在当晚被守卫守护又\n被女巫解救，该玩家依旧判定\n为死亡。"
          },
          5: {
            name: '女巫',
            icon: "card_witch",
            pic: "identityBig/pic_myrole_witch",
            card: "identityBig/card_witch",
            des: " 【技能】 女巫有两瓶药水。一\n瓶是灵药，可救活夜晚被杀的\n玩家；另一瓶是毒药，可毒杀\n一名玩家。同一晚不能使用两\n瓶药。"
          },
          6: {
            name: '猎人',
            icon: "card_hunter",
            pic: "identityBig/pic_myrole_hunter",
            card: "identityBig/card_hunter",
            des: " 【技能】 每个夜晚可以猎杀一\n位玩家，当猎人死亡时，可以\n开枪射杀一位玩家（俗称“带\n走”）。但死于女巫毒药时，不\n能开枪。"
          },
          7: {
            name: '爱神',
            icon: "card_lovegod",
            pic: "identityBig/pic_myrole_lovegod",
            card: "identityBig/card_cupid",
            des: " 【技能】 爱神可以在第一天指\n定任意两人(包括自己)成为情\n侣，情侣中有一人死去时，另\n一人将自动殉情。\n【胜利方式】如果射中的情侣\n是人人情侣、狼狼情侣，则爱\n神获胜方式和好人阵营相同；\n如果射中的情侣是人狼情侣，\n则爱神和情侣组成情侣阵营，\n需要除掉所有其他玩家"
          },
          8: {
            name: '白狼王',
            icon: "card_whitewolf",
            pic: "identityBig/pic_myrole_whitewolf",
            card: "identityBig/card_silverwolf",
            des: " 【技能】 晚上和狼人一起杀死\n一个玩家，白天发言环节可以\n选择自爆并带走一位玩家（投\n票和遗言环节不能自爆）"
          },
          9: {
            name: '炸弹师',
            icon: "card_bomb",
            pic: "identityBig/pic_myrole_bomb",
            card: "identityBig/card_bomb",
            des: " 【技能】 炸弹师如果在白天投\n票阶段被投票出局，所有投票\n炸弹师的玩家将全部出局，不\n能发动技能。"
          },
          10: {
            name: '白痴',
            icon: "card_idiot",
            pic: "identityBig/pic_myrole_idiot",
            card: "identityBig/card_idiot",
            des: " 【技能】 白痴仅在白天被投票\n出局可免除死亡，仍视为存活，\n但从此以后不再拥有投票权。"
          },
          11: {
            name: '长老',
            icon: "card_elders",
            pic: "identityBig/pic_myrole_elders",
            card: "identityBig/card_elders",
            des: " 【技能】 无特殊能力，主要靠\n推理分析找出狼人。"
          },
          12: {
            name: '企鹅',
            icon: "card_penguin",
            pic: "identityBig/pic_myrole_penguin",
            card: "identityBig/card_penguin",
            des: " 【技能】 每晚可以杀死一名玩\n家，当有任意一狼人被企鹅冰\n冻，狼人当晚不可以杀人"
          },
          13: {
            name: '熊',
            icon: "card_bear",
            pic: "identityBig/pic_myrole_bear",
            card: "identityBig/card_bear",
            des: " 【技能】 天亮时，熊的相邻玩\n家中若有狼人，法官宣布“熊咆\n哮了”；无狼人，则法官宣布“熊\n没有咆哮”。若熊死亡或被冰\n冻，将无法咆哮。(熊相邻玩家\n如果死亡，则顺延至左右两边\n存活玩家)"
          },
          14: {
            name: '绵羊',
            icon: "card_sheep",
            pic: "identityBig/pic_myrole_sheep",
            card: "identityBig/card_sheep",
            des: " 【技能】 无特殊能力，主要靠\n推理分析找出狼人。"
          },
          15: {
            name: '大公鸡',
            icon: "card_cock",
            pic: "identityBig/pic_myrole_cock",
            card: "identityBig/card_chick",
            des: " 【技能】 大公鸡夜里被狼人杀\n死，第二天无法叫醒大家，将\n跳过一个白天，直接进入黑\n夜。"
          },
          16: {
            name: '狼美人',
            icon: "card_wolfbeauty",
            pic: "identityBig/pic_myrole_wolfbeauty",
            card: "identityBig/card_beautywolf",
            des: " 【技能】 狼美人每晚参与杀人\n后，可单独魅惑一名好人阵营\n玩家，但不能连续两晚魅惑同\n一名玩家。狼美人死亡时，当\n晚被魅惑的玩家随之殉情（狼\n美人不能自刀）"
          }
        };
      });
      cclegacy._RF.pop();
    }
  };
});

System.register("chunks:///_virtual/store.user.ts", ['./rollupPluginModLoBabelHelpers.js', 'cc', './app.ts'], function (exports) {
  var _asyncToGenerator, _regeneratorRuntime, cclegacy, app;
  return {
    setters: [function (module) {
      _asyncToGenerator = module.asyncToGenerator;
      _regeneratorRuntime = module.regeneratorRuntime;
    }, function (module) {
      cclegacy = module.cclegacy;
    }, function (module) {
      app = module.app;
    }],
    execute: function () {
      cclegacy._RF.push({}, "8f45e5mJlhLiY6W41arYraT", "store.user", undefined);
      // store中只允许在根路径下定义方法，任何变量在外部访问都是readonly
      // store类型的引入是借鉴了Web前端框架中全局状态管理的思路，意图是让数据更安全，更可控。同时框架中还提供了数据绑定的扩展包，可以通过pkg的方式安装，实现「数据->视图」的单向绑定。
      var User = exports('default', /*#__PURE__*/function () {
        function User() {
          this.token = '';
          this.username = '';
        }
        var _proto = User.prototype;
        _proto.login = /*#__PURE__*/function () {
          var _login = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
            var res;
            return _regeneratorRuntime().wrap(function _callee$(_context) {
              while (1) switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return app.manager.api.login();
                case 2:
                  res = _context.sent;
                  this.token = res.data.token;
                  this.username = res.data.username;
                case 5:
                case "end":
                  return _context.stop();
              }
            }, _callee, this);
          }));
          function login() {
            return _login.apply(this, arguments);
          }
          return login;
        }();
        return User;
      }());
      cclegacy._RF.pop();
    }
  };
});

(function(r) {
  r('virtual:///prerequisite-imports/app-model', 'chunks:///_virtual/app-model'); 
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