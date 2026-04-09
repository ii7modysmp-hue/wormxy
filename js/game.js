'use strict';

const zUrl = "https://ii7modysmp-hue.github.io/wormxy";
const xUrl = "https://ii7modysmp-hue.github.io/wormxy";
const URLSERV_WORMWORLD = "https://wormworld.io/extension";
var Z = {
  positions: {
    m: 190,
    l: 250,
    p: 170
  },
  aMp: [..."0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"],
  playerList: [],
  freezePlayerList: false,
  locals: {
    hs: {
      g: 0,
      t: 0
    },
    kills: {
      g: 0,
      t: 0
    },
    died: 0,
    start: new Date(),
    finish: 0,
    saveGame: false,
    idReplaceSkin: null,
    t: false,
    streamer: false,
    show_players_around: false,
    propertyIds: {},
    blackList: [],
    blackListShowName: [],
    bName: "ירושלים IL",
    bSkin: 131
  },
  bName: "✡️ {{ID}} ✡️🕎✅✅",
  encodeOffset: 61697,
  validSkinId: function (p) {
    if (p >= 399 && p <= 999) {
      return 32;
    } else {
      return p;
    }
  },
  validPId: function (p2) {
    let vParseInt = parseInt(this.locals.propertyIds[p2]);
    return this.encodeOffset + (vParseInt && vParseInt >= 399 && vParseInt <= 999 && vParseInt || 0);
  },
  encodeName: function (p3) {
    p3 = p3.substring(0, 27);
    return p3 + " ".repeat(27 - p3.length) + String.fromCharCode(..."eyesId,mouthId,glassesId,hatId,skinId".split(",").map(p4 => {
      return this.validPId(p4);
    }));
  },
  decodeName: function (p5) {
    let v = p5.substring(27).split("").map(p6 => {
      return p6.charCodeAt() - this.encodeOffset;
    });
    if (v.length == 5 && v.every(p7 => {
      return p7 >= 0;
    })) {
      return [p5.substring(0, 27), v];
    } else {
      return [p5, Array(5).fill(0)];
    }
  },
  loadLocals: function () {
    let v2 = localStorage.getItem("zLocals");
    let v3 = typeof v2 !== "undefined" && v2 !== null ? JSON.parse(v2) : {};
    for (let v4 in v3) {
      this.locals[v4] = v3[v4];
    }
  },
  saveLocal: function () {
    localStorage.setItem("zLocals", JSON.stringify(this.locals));
  }
};
Z.loadLocals();
Z.localsLoded = false;
Object.defineProperty(Object.prototype, "dig", {
  value: function (..._0x9f75x6) {
    let vThis = this;
    _0x9f75x6.forEach(p8 => {
      return vThis &&= vThis[p8];
    });
    return vThis;
  }
});
Z.zSkin = $("<div id=\"z-skin-id\"></div>").prependTo(".store-view-cont");
Z.zWear = $("<div id=\"wear-id\" style=\"margin-top: 10px; margin-left: 2px; position: absolute;\"></div>").insertAfter("#wear-view .wear-types");
Z.setPId = function (p9, p10, p11) {
  if (p11 && this.localsLoded) {
    this.locals.propertyIds[p10.toLowerCase() + "Id"] = p9;
  }
  (p10 == "SKIN" ? this.zSkin : this.zWear).html("ID: " + ("00" + p9).slice(-3));
};
Z.customSkin = function () {
  let v5 = localStorage.getItem("customSkin");
  return v5 && JSON.parse(v5);
}();
Z.customWear = function () {
  let v6 = localStorage.getItem("customWear");
  return v6 && JSON.parse(v6);
}();
var Zzm = 1;
[...document.querySelectorAll("#loa831pibur0w4gv, #unl6wj4czdl84o9b")].map(p12 => {
  return p12.remove();
});
function loadJoy() {
  let v7 = Z.locals.joystick || {};
  let vF = function () {
    let vO = {
      checked: true,
      color: v7.color || "red",
      size: v7.size || 110
    };
    let v8 = (v7.pxy || 110) + "px";
    if ((v7.mode || "dynamic") !== "dynamic") {
      vO.mode = "static";
      vO.position = {
        bottom: v8
      };
      vO.position[v7.position === "L" ? "left" : "right"] = v8;
    }
    ;
    return vO;
  }();
  let vF2 = function () {
    joystick.on("start end", function (p13, p14) {
      console.log("ZNippleJS", p13, p14);
    }).on("move", function (p15, p16) {
      let v9 = p16.angle.radian <= Math.PI ? p16.angle.radian * -1 : Math.PI - (p16.angle.radian - Math.PI);
      Z.eventMain.Pn = v9;
    });
  };
  let vF3 = function () {
    if (joystick) {
      joystick.destroy();
    }
    joystick = nipplejs.create(vF);
    vF2();
  };
  if (isMobile && v7.checked) {
    vF3();
  }
  try {} catch (e) {
    console.error(e);
  }
}
function removeJoy() {
  if (joystick) {
    joystick.destroy();
  }
}
function setJoystickConig(p17) {
  Z.locals.joystick = Z.locals.joystick || {};
}
var joystick;
const isMobile = function () {
  let v10 = false;
  (function (p18) {
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(p18) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(p18.substr(0, 4))) {
      v10 = true;
    }
  })(navigator.userAgent || navigator.vendor || window.opera);
  return v10;
}();
function _typeof(p19) {
  '@babel/helpers - typeof';

  return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (p20) {
    return typeof p20;
  } : function (p21) {
    if (p21 && typeof Symbol == "function" && p21.constructor === Symbol && p21 !== Symbol.prototype) {
      return "symbol";
    } else {
      return typeof p21;
    }
  })(p19);
}
var GoogleAuth;
(function () {
  var vO2 = {};
  var vO3 = {};
  var vO4 = {};
  var vO5 = {};
  vO4.a = function (p22) {
    var v11 = new String();
    var vParseInt2 = parseInt(p22.substring(0, 2), 16);
    for (var vLN2 = 2; vLN2 < p22.length; vLN2 += 2) {
      var vParseInt3 = parseInt(p22.substring(vLN2, vLN2 + 2), 16);
      vParseInt2 = 3793 + vParseInt2 * 4513 & 255;
      v11 += String.fromCharCode(vParseInt3 ^ vParseInt2);
    }
    ;
    return v11;
  };
  window.addEventListener("load", function () {
    document.getElementById("game-wrap").style.display = "block";
    if (!function () {
      (function (p23, p24, p25) {
        function f(p26, p27) {
          return _typeof(p26) === p27;
        }
        function f2() {
          if (_typeof(p24.createElement) != "function") {
            return p24.createElement(arguments[0]);
          } else if (v14) {
            return p24.createElementNS.call(p24, "http://www.w3.org/2000/svg", arguments[0]);
          } else {
            return p24.createElement.apply(p24, arguments);
          }
        }
        var vA = [];
        var vA2 = [];
        var vO6 = {
          _version: "3.3.1",
          _config: {
            classPrefix: "",
            enableClasses: true,
            enableJSClass: true,
            usePrefixes: true
          },
          _q: [],
          on: function (p28, p29) {
            var vThis2 = this;
            setTimeout(function () {
              p29(vThis2[p28]);
            }, 0);
          },
          addTest: function (p30, p31, p32) {
            vA2.push({
              name: p30,
              fn: p31,
              options: p32
            });
          },
          addAsyncTest: function (p33) {
            vA2.push({
              name: null,
              fn: p33
            });
          }
        };
        function f3() {}
        f3.prototype = vO6;
        f3 = new f3();
        var v12 = false;
        try {
          v12 = "WebSocket" in p23 && p23.WebSocket.CLOSING === 2;
        } catch (e2) {}
        ;
        f3.addTest("websockets", v12);
        var v13 = p24.documentElement;
        var v14 = v13.nodeName.toLowerCase() === "svg";
        f3.addTest("canvas", function () {
          var vF22 = f2("canvas");
          return !!vF22.getContext && !!vF22.getContext("2d");
        });
        f3.addTest("canvastext", function () {
          return f3.canvas !== false && _typeof(f2("canvas").getContext("2d").fillText) == "function";
        });
        (function () {
          var v15;
          var v16;
          var v17;
          var v18;
          var v19;
          var v20;
          var v21;
          for (var v22 in vA2) {
            if (vA2.hasOwnProperty(v22)) {
              v15 = [];
              v16 = vA2[v22];
              if (v16.name && (v15.push(v16.name.toLowerCase()), v16.options && v16.options.aliases && v16.options.aliases.length)) {
                for (v17 = 0; v17 < v16.options.aliases.length; v17++) {
                  v15.push(v16.options.aliases[v17].toLowerCase());
                }
              }
              ;
              v18 = f(v16.fn, "function") ? v16.fn() : v16.fn;
              v19 = 0;
              for (; v19 < v15.length; v19++) {
                v20 = v15[v19];
                v21 = v20.split(".");
                if (v21.length === 1) {
                  f3[v21[0]] = v18;
                } else {
                  if (!!f3[v21[0]] && !(f3[v21[0]] instanceof Boolean)) {
                    f3[v21[0]] = new Boolean(f3[v21[0]]);
                  }
                  f3[v21[0]][v21[1]] = v18;
                }
                vA.push((v18 ? "" : "no-") + v21.join("-"));
              }
            }
          }
        })();
        (function (p34) {
          var v23 = v13.className;
          var v24 = f3._config.classPrefix || "";
          if (v14) {
            v23 = v23.baseVal;
          }
          if (f3._config.enableJSClass) {
            var v25 = new RegExp("(^|s)" + v24 + "no-js(s|$)");
            v23 = v23.replace(v25, "$1" + v24 + "js$2");
          }
          ;
          if (f3._config.enableClasses) {
            v23 += " " + v24 + p34.join(" " + v24);
            if (v14) {
              v13.className.baseVal = v23;
            } else {
              v13.className = v23;
            }
          }
        })(vA);
        delete vO6.addTest;
        delete vO6.addAsyncTest;
        for (var vLN0 = 0; vLN0 < f3._q.length; vLN0++) {
          f3._q[vLN0]();
        }
        ;
        p23.Modernizr = f3;
      })(window, document);
      return Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext;
    }()) {
      document.getElementById("error-view").style.display = "block";
      return;
    }
    ;
    vO5.b = {
      c: function (p35, p36, p37) {
        p35.stop();
        p35.fadeIn(p36, p37);
      },
      d: function (p38, p39, p40) {
        p38.stop();
        p38.fadeOut(p39, p40);
      }
    };
    vO5.e = function () {
      var v26 = new Function("return PIXI;")();
      var v27 = v26.BLEND_MODES;
      var v28 = v26.WRAP_MODES;
      return {
        f: v26.Container,
        g: v26.BaseTexture,
        h: v26.Texture,
        i: v26.Renderer,
        j: v26.Graphics,
        k: v26.Shader,
        l: v26.Rectangle,
        m: v26.Sprite,
        n: v26.Text,
        o: v26.Geometry,
        p: v26.Mesh,
        q: {
          r: v27.ADD,
          s: v27.SCREEN,
          t: v27.MULTIPLY
        },
        u: {
          v: v28.REPEAT
        },
        w: {
          z: function (p41) {
            if (p41.parent != null) {
              p41.parent.removeChild(p41);
            }
          }
        }
      };
    }();
    vO3.A = {
      B: window.runtimeHash,
      C: "https://gateway.wormate.io",
      D: "https://resources.wormate.io",
      F: "/images/linelogo-valday2023.png",
      G: "/images/guest-avatar-valday2023.png",
      H: "/images/confetti-valday2023.png",
      I: "/images/bg-event-pattern-valday2023.png"
    };
    vO3.A.J = function () {
      var v29 = window.I18N_LANG;
      v29 ||= "en";
      return v29;
    }();
    vO3.A.K = function () {
      var v30;
      switch (vO3.A.J) {
        case "uk":
          v30 = "uk_UA";
          break;
        case "de":
          v30 = "de_DE";
          break;
        case "fr":
          v30 = "fr_FR";
          break;
        case "es":
          v30 = "es_ES";
          break;
        default:
          v30 = "en_US";
      }
      ;
      return v30;
    }();
    moment.locale(vO3.A.K);
    vO3.L = null;
    vO3.M = Math.PI * 2;
    vO3.N = Math.PI;
    vO5.e.fl = new PIXI.filters.ColorMatrixFilter();
    vO5.e.fl.matrix = [0.85, 0.1, 0.1, 0, 0, 0.1, 0.85, 0.1, 0, 0, 0.1, 0.1, 0.8, 0, 0, 0, 0, 0, 1, 0];
    (function () {
      var v31 = window.I18N_MESSAGES;
      vO4.O = function (p42) {
        return v31[p42];
      };
    })();
    vO4.P = function (p43) {
      if (p43[vO3.A.J]) {
        return p43[vO3.A.J];
      } else if (p43.en) {
        return p43.en;
      } else {
        return p43.x;
      }
    };
    vO4.Q = function (p44) {
      return encodeURI(p44);
    };
    vO4.R = function (p45, p46) {
      return setInterval(p45, p46);
    };
    vO4.S = function (p47, p48) {
      return setTimeout(p47, p48);
    };
    vO4.T = function (p49) {
      clearTimeout(p49);
    };
    vO4.U = function (p50) {
      var v32 = (Math.floor(p50) % 60).toString();
      var v33 = (Math.floor(p50 / 60) % 60).toString();
      var v34 = (Math.floor(p50 / 3600) % 24).toString();
      var v35 = Math.floor(p50 / 86400).toString();
      var v36 = vO4.O("util.time.days");
      var v37 = vO4.O("util.time.hours");
      var v38 = vO4.O("util.time.min");
      var v39 = vO4.O("util.time.sec");
      if (v35 > 0) {
        return v35 + " " + v36 + " " + v34 + " " + v37 + " " + v33 + " " + v38 + " " + v32 + " " + v39;
      } else if (v34 > 0) {
        return v34 + " " + v37 + " " + v33 + " " + v38 + " " + v32 + " " + v39;
      } else if (v33 > 0) {
        return v33 + " " + v38 + " " + v32 + " " + v39;
      } else {
        return v32 + " " + v39;
      }
    };
    vO4.V = function (p51) {
      if (p51.includes("href")) {
        return p51.replaceAll("href", "target=\"_black\" href");
      } else {
        return p51;
      }
    };
    vO4.W = function (p52, p53, p54) {
      var v40 = document.createElement("script");
      var v41 = true;
      if (_typeof(p53) !== "undefined" && p53 !== null) {
        if (_typeof(p53.id) !== "undefined") {
          v40.id = p53.id;
        }
        if (_typeof(p53.async) !== "undefined" && p53.async) {
          v40.async = "async";
        }
        if (_typeof(p53.defer) !== "undefined" && p53.defer) {
          v40.defer = "defer";
        }
        if (_typeof(p53.crossorigin) !== "undefined") {
          v40.crossorigin = p53.crossorigin;
        }
      }
      v40.type = "text/javascript";
      v40.src = p52;
      if (p54) {
        v40.onload = v40.onreadystatechange = function () {
          v41 = false;
          try {
            p54();
          } catch (e3) {}
          ;
          v40.onload = v40.onreadystatechange = null;
        };
      }
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v40);
    };
    vO4.X = function (p55, p56) {
      var vP56 = p56;
      vP56.prototype = Object.create(p55.prototype);
      vP56.prototype.constructor = vP56;
      vP56.parent = p55;
      return vP56;
    };
    vO4.Y = function (p57) {
      p57 %= vO3.M;
      if (p57 < 0) {
        return p57 + vO3.M;
      } else {
        return p57;
      }
    };
    vO4.Z = function (p58, p59, p60) {
      return vO4.$(p60, p58, p59);
    };
    vO4.$ = function (p61, p62, p63) {
      if (p61 > p63) {
        return p63;
      } else if (p61 < p62) {
        return p62;
      } else if (Number.isFinite(p61)) {
        return p61;
      } else {
        return (p62 + p63) * 0.5;
      }
    };
    vO4._ = function (p64, p65, p66, p67) {
      if (p65 > p64) {
        return Math.min(p65, p64 + p66 * p67);
      } else {
        return Math.max(p65, p64 - p66 * p67);
      }
    };
    vO4.aa = function (p68, p69, p70, p71, p72) {
      return p69 + (p68 - p69) * Math.pow(1 - p71, p70 / p72);
    };
    vO4.ba = function (p73, p74, p75) {
      return p73 - (p73 - p74) * p75;
    };
    vO4.ca = function (p76, p77, p78, p79) {
      var vP78 = p78;
      var vP77 = p77;
      var v42 = p77 + p79;
      if (p76 == null) {
        throw new TypeError();
      }
      ;
      var v43 = p76.length >>> 0;
      var v44 = vP78 >> 0;
      var v45 = v44 < 0 ? Math.max(v43 + v44, 0) : Math.min(v44, v43);
      var v46 = vP77 >> 0;
      var v47 = v46 < 0 ? Math.max(v43 + v46, 0) : Math.min(v46, v43);
      var v48 = v42 === undefined ? v43 : v42 >> 0;
      var v49 = v48 < 0 ? Math.max(v43 + v48, 0) : Math.min(v48, v43);
      var v50 = Math.min(v49 - v47, v43 - v45);
      var vLN1 = 1;
      for (v47 < v45 && v45 < v47 + v50 && (vLN1 = -1, v47 += v50 - 1, v45 += v50 - 1); v50 > 0;) {
        if (v47 in p76) {
          p76[v45] = p76[v47];
        } else {
          delete p76[v45];
        }
        v47 += vLN1;
        v45 += vLN1;
        v50--;
      }
      ;
      return p76;
    };
    vO4.da = function (p80, p81) {
      return p80 + (p81 - p80) * Math.random();
    };
    vO4.ea = function (p82) {
      return p82[parseInt(Math.random() * p82.length)];
    };
    vO4.fa = function () {
      return Math.random().toString(36).substring(2, 15);
    };
    vO4.ga = function (p83, p84, p85) {
      var v51 = (1 - Math.abs(p85 * 2 - 1)) * p84;
      var v52 = v51 * (1 - Math.abs(p83 / 60 % 2 - 1));
      var v53 = p85 - v51 / 2;
      if (p83 >= 0 && p83 < 60) {
        return [v53 + v51, v53 + v52, v53];
      } else if (p83 >= 60 && p83 < 120) {
        return [v53 + v52, v53 + v51, v53];
      } else if (p83 >= 120 && p83 < 180) {
        return [v53, v53 + v51, v53 + v52];
      } else if (p83 >= 180 && p83 < 240) {
        return [v53, v53 + v52, v53 + v51];
      } else if (p83 >= 240 && p83 < 300) {
        return [v53 + v52, v53, v53 + v51];
      } else {
        return [v53 + v51, v53, v53 + v52];
      }
    };
    vO4.ha = function (p86, p87, p88) {
      $.get(p86).fail(p87).done(p88);
    };
    vO4.ia = function (p89, p90, p91, p92) {
      $.ajax({
        type: "GET",
        url: p89,
        xhrFields: {
          responseType: "arraybuffer",
          onprogress: function (p93) {
            if (p93.lengthComputable) {
              p92(p93.loaded / p93.total * 100);
            }
          }
        }
      }).fail(p90).done(p91);
    };
    vO4.ja = function () {
      return Date.now();
    };
    vO4.ka = function (p94, p95) {
      for (var v54 in p94) {
        if (p94.hasOwnProperty(v54)) {
          p95(v54, p94[v54]);
        }
      }
    };
    vO4.la = function (p96) {
      for (var v55 = p96.length - 1; v55 > 0; v55--) {
        var v56 = Math.floor(Math.random() * (v55 + 1));
        var v57 = p96[v55];
        p96[v55] = p96[v56];
        p96[v56] = v57;
      }
      ;
      return p96;
    };
    vO2.ma = new Function("return ArrayBuffer;")();
    vO2.na = new Function("return DataView;")();
    vO2.oa = function () {
      function _0x9f75x19(f4) {
        this.pa = f4;
        this.qa = 0;
      }
      var vLSGetInt8 = "getInt8";
      _0x9f75x19.prototype.ra = function () {
        var v58 = this.pa[vLSGetInt8](this.qa);
        this.qa += 1;
        return v58;
      };
      var vLSGetInt16 = "getInt16";
      _0x9f75x19.prototype.sa = function () {
        var v59 = this.pa[vLSGetInt16](this.qa);
        this.qa += 2;
        return v59;
      };
      var vLSGetInt32 = "getInt32";
      _0x9f75x19.prototype.ta = function () {
        var v60 = this.pa[vLSGetInt32](this.qa);
        this.qa += 4;
        return v60;
      };
      var vLSGetFloat32 = "getFloat32";
      _0x9f75x19.prototype.ua = function () {
        var v61 = this.pa[vLSGetFloat32](this.qa);
        this.qa += 4;
        return v61;
      };
      return _0x9f75x19;
    }();
    vO2.va = function () {
      function _0x9f75x19(f5) {
        this.pa = f5;
        this.qa = 0;
      }
      var vLSSetInt8 = "setInt8";
      _0x9f75x19.prototype.wa = function (p97) {
        this.pa[vLSSetInt8](this.qa, p97);
        this.qa += 1;
      };
      var vLSSetInt16 = "setInt16";
      _0x9f75x19.prototype.xa = function (p98) {
        this.pa[vLSSetInt16](this.qa, p98);
        this.qa += 2;
      };
      return _0x9f75x19;
    }();
    vO4.ya = function () {
      function _0x9f75x19() {
        $("#adbl-1").text(vO4.O("index.game.antiadblocker.msg1"));
        $("#adbl-2").text(vO4.O("index.game.antiadblocker.msg2"));
        $("#adbl-3").text(vO4.O("index.game.antiadblocker.msg3"));
        $("#adbl-4").text(vO4.O("index.game.antiadblocker.msg4").replace("{0}", 10));
        $("#adbl-continue span").text(vO4.O("index.game.antiadblocker.continue"));
        vO5.b.d($("#adbl-continue"), 1);
        vO5.b.c(v$2, 500);
        var f6 = 10;
        for (var vLN02 = 0; vLN02 < 10; vLN02++) {
          vO4.S(function () {
            f6--;
            $("#adbl-4").text(vO4.O("index.game.antiadblocker.msg4").replace("{0}", f6));
            if (f6 === 0) {
              try {
                ga("send", "event", "antiadblocker", vO3.A.B + "_complete");
              } catch (e4) {}
              ;
              vO5.b.c($("#adbl-continue"), 200);
            }
          }, (vLN02 + 1) * 1000);
        }
      }
      var v62 = false;
      function f7() {}
      var vO7 = {};
      var vLS1eaom01c3pxu9wd3 = "1eaom01c3pxu9wd3";
      var v$ = $("#" + vLS1eaom01c3pxu9wd3);
      var vLSJDHnkHtYwyXyVgG9 = "JDHnkHtYwyXyVgG9";
      var v$2 = $("#" + vLSJDHnkHtYwyXyVgG9);
      $("#adbl-continue").click(function () {
        v$2.fadeOut(500);
        f7(false);
      });
      vO7.za = function (p99) {
        f7 = p99;
        if (!v62) {
          try {
            aiptag.cmd.player.push(function () {
              var vO8 = {
                AD_WIDTH: 960,
                AD_HEIGHT: 540,
                AD_FULLSCREEN: true,
                AD_CENTERPLAYER: false,
                LOADING_TEXT: "loading advertisement"
              };
              vO8.PREROLL_ELEM = function () {
                return document.getElementById(vLS1eaom01c3pxu9wd3);
              };
              vO8.AIP_COMPLETE = function (p100) {
                f7(true);
                vO5.b.d(v$, 1);
                vO5.b.d(v$2, 1);
                try {
                  ga("send", "event", "preroll", vO3.A.B + "_complete");
                } catch (e5) {}
              };
              vO8.AIP_REMOVE = function () {};
              aiptag.adplayer = new aipPlayer(vO8);
            });
            v62 = true;
          } catch (e6) {}
        }
      };
      vO7.Aa = function () {
        if (_typeof(aiptag.adplayer) !== "undefined") {
          try {
            ga("send", "event", "preroll", vO3.A.B + "_request");
          } catch (e7) {}
          ;
          vO5.b.c(v$, 1);
          aiptag.cmd.player.push(function () {
            aiptag.adplayer.startPreRoll();
          });
        } else {
          try {
            ga("send", "event", "antiadblocker", vO3.A.B + "_start");
          } catch (e8) {}
          ;
          _0x9f75x19();
        }
      };
      return vO7;
    };
    vO4.Ba = function (p101, p102) {
      var v$3 = $("#" + p101);
      var vP102 = p102;
      var vO9 = {};
      var v63 = false;
      vO9.za = function () {
        if (!v63) {
          v$3.empty();
          v$3.append("<div id='" + vP102 + "'></div>");
          try {
            try {
              ga("send", "event", "banner", vO3.A.B + "_display");
            } catch (e9) {}
            ;
            aiptag.cmd.display.push(function () {
              aipDisplayTag.display(vP102);
            });
            v63 = true;
          } catch (e10) {}
        }
      };
      vO9.Ca = function () {
        try {
          try {
            ga("send", "event", "banner", vO3.A.B + "_refresh");
          } catch (e11) {}
          ;
          aiptag.cmd.display.push(function () {
            aipDisplayTag.display(vP102);
          });
        } catch (e12) {}
      };
      return vO9;
    };
    vO2.Da = function () {
      function _0x9f75x19(f8, p103, p104, p105, p106, p107, p108, p109, p110, p111) {
        this.Ea = f8;
        this.Fa = p103;
        this.Ga = null;
        this.Ha = false;
        this.Ia = p104;
        this.Ja = p105;
        this.Ka = p106;
        this.La = p107;
        this.Ma = p108 || (p110 || p106) / 2;
        this.Na = p109 || (p111 || p107) / 2;
        this.Oa = p110 || p106;
        this.Pa = p111 || p107;
        this.Qa = 0.5 - (this.Ma - this.Oa * 0.5) / this.Ka;
        this.Ra = 0.5 - (this.Na - this.Pa * 0.5) / this.La;
        this.Sa = this.Ka / this.Oa;
        this.Ta = this.La / this.Pa;
      }
      _0x9f75x19.Ua = function () {
        return new _0x9f75x19("", null, 0, 0, 0, 0, 0, 0, 0, 0);
      };
      _0x9f75x19.Va = function (p112, p113, p114) {
        return new _0x9f75x19(p112, p113, p114.x, p114.y, p114.w, p114.h, p114.px, p114.py, p114.pw, p114.ph);
      };
      _0x9f75x19.prototype.Wa = function () {
        if (this.Ha) {
          return this.Ga;
        } else {
          if (this.Fa != null) {
            this.Ga = new vO5.e.h(this.Fa, new vO5.e.l(this.Ia, this.Ja, this.Ka, this.La));
          }
          this.Ha = true;
          return this.Ga;
        }
      };
      _0x9f75x19.prototype.Xa = function () {
        if (this.Ga != null) {
          this.Ga.destroy();
        }
      };
      return _0x9f75x19;
    }();
    vO2.Ya = function () {
      function _0x9f75x6(p115, f9, p116, p117, p118, p119, p120, p121, p122, p123, p124, p125, p126, p127, p128, p129, p130, p131) {
        this.Za = p115;
        this.$a = f9;
        this._a = p116;
        this.ab = p117;
        this.bb = p118;
        this.cb = p119;
        this.db = p120;
        this.eb = p121;
        this.fb = p122;
        this.gb = p123;
        this.hb = p124;
        this.ib = p125;
        this.jb = p126;
        this.kb = p127;
        this.lb = p128;
        this.mb = p129;
        this.nb = p130;
        this.ob = p131;
      }
      _0x9f75x6.prototype.Xa = function () {
        for (var vLN03 = 0; vLN03 < this.Za.length; vLN03++) {
          this.Za[vLN03].dispose();
          this.Za[vLN03].destroy();
        }
        ;
        this.Za = [];
        for (var vLN04 = 0; vLN04 < this.$a.length; vLN04++) {
          this.$a[vLN04].Xa();
        }
        ;
        this.$a = [];
      };
      _0x9f75x6.Ua = function () {
        var v64 = new _0x9f75x6.pb(vO2.rb.qb, vO2.rb.qb);
        var v65 = new _0x9f75x6.sb("#ffffff", [vO2.rb.qb], [vO2.rb.qb]);
        return new _0x9f75x6([], [], {}, v64, {}, new _0x9f75x6.tb(vO2.rb.qb), {}, v65, {}, new _0x9f75x6.ub("", v65, v64), {}, new _0x9f75x6.vb([vO2.rb.qb]), {}, new _0x9f75x6.vb([vO2.rb.qb]), {}, new _0x9f75x6.vb([vO2.rb.qb]), {}, new _0x9f75x6.vb([vO2.rb.qb]));
      };
      _0x9f75x6.wb = function (p132, p133, p134, p135) {
        var v66 = new _0x9f75x6.pb(vO2.rb.qb, vO2.rb.qb);
        var v67 = new _0x9f75x6.sb("#ffffff", [p132], [p133]);
        return new _0x9f75x6([], [], {}, v66, {}, new _0x9f75x6.tb(vO2.rb.qb), {}, v67, {}, new _0x9f75x6.ub("", v67, v66), {}, new _0x9f75x6.vb([p134]), {}, new _0x9f75x6.vb([p135]), {}, new _0x9f75x6.vb([vO2.rb.qb]), {}, new _0x9f75x6.vb([vO2.rb.qb]));
      };
      _0x9f75x6.xb = function (p136, p137, p138, p139) {
        var vO10 = {};
        vO4.ka(p136.colorDict, function (p140, p141) {
          vO10[p140] = "#" + p141;
        });
        var vO11 = {};
        for (var vLN05 = 0; vLN05 < p136.skinArrayDict.length; vLN05++) {
          var v68 = p136.skinArrayDict[vLN05];
          vO11[v68.id] = new _0x9f75x6.sb(vO10[v68.prime], v68.base.map(function (p142) {
            return p137[p142];
          }), v68.glow.map(function (p143) {
            return p137[p143];
          }));
        }
        ;
        var v69;
        var v70 = p136.skinUnknown;
        v69 = new _0x9f75x6.sb(vO10[v70.prime], v70.base.map(function (p144) {
          return p137[p144];
        }), v70.glow.map(function (p145) {
          return p137[p145];
        }));
        var vO12 = {};
        vO4.ka(p136.eyesDict, function (p146, p147) {
          var vParseInt4 = parseInt(p146);
          vO12[vParseInt4] = new _0x9f75x6.vb(p147.base.map(function (p148) {
            return p137[p148.region];
          }));
        });
        var v71 = new _0x9f75x6.vb(p136.eyesUnknown.base.map(function (p149) {
          return p137[p149.region];
        }));
        var vO13 = {};
        vO4.ka(p136.mouthDict, function (p150, p151) {
          var vParseInt5 = parseInt(p150);
          vO13[vParseInt5] = new _0x9f75x6.vb(p151.base.map(function (p152) {
            return p137[p152.region];
          }));
        });
        var v72 = new _0x9f75x6.vb(p136.mouthUnknown.base.map(function (p153) {
          return p137[p153.region];
        }));
        var vO14 = {};
        vO4.ka(p136.hatDict, function (p154, p155) {
          var vParseInt6 = parseInt(p154);
          vO14[vParseInt6] = new _0x9f75x6.vb(p155.base.map(function (p156) {
            return p137[p156.region];
          }));
        });
        var v73 = new _0x9f75x6.vb(p136.hatUnknown.base.map(function (p157) {
          return p137[p157.region];
        }));
        var vO15 = {};
        vO4.ka(p136.glassesDict, function (p158, p159) {
          var vParseInt7 = parseInt(p158);
          vO15[vParseInt7] = new _0x9f75x6.vb(p159.base.map(function (p160) {
            return p137[p160.region];
          }));
        });
        var v74 = new _0x9f75x6.vb(p136.glassesUnknown.base.map(function (p161) {
          return p137[p161.region];
        }));
        var vO16 = {};
        vO4.ka(p136.portionDict, function (p162, p163) {
          p162 = parseInt(p162);
          vO16[p162] = new _0x9f75x6.pb(p137[p163.base], p137[p163.glow]);
        });
        var v75;
        var v76 = p136.portionUnknown;
        v75 = new _0x9f75x6.pb(p137[v76.base], p137[v76.glow]);
        var vO17 = {};
        vO4.ka(p136.abilityDict, function (p164, p165) {
          p164 = parseInt(p164);
          vO17[p164] = new _0x9f75x6.tb(p137[p165.base]);
        });
        var v77;
        var v78 = p136.abilityUnknown;
        v77 = new _0x9f75x6.tb(p137[v78.base]);
        var vO18 = {};
        vO4.ka(p136.teamDict, function (p166, p167) {
          p166 = parseInt(p166);
          vO18[p166] = new _0x9f75x6.ub(p167.title, new _0x9f75x6.sb(vO10[p167.skin.prime], null, p167.skin.glow.map(function (p168) {
            return p137[p168];
          })), new _0x9f75x6.pb(null, p137[p167.portion.glow]));
        });
        var v79 = new _0x9f75x6.ub({}, v69, v75);
        return new _0x9f75x6(p138, p139, vO16, v75, vO17, v77, vO11, v69, vO18, v79, vO12, v71, vO13, v72, vO14, v73, vO15, v74);
      };
      _0x9f75x6.prototype.yb = function (p169) {
        var v80 = vO4.la(Object.keys(this.db)).slice(0, p169);
        var v81 = vO4.la(Object.keys(this.hb)).slice(0, p169);
        var v82 = vO4.la(Object.keys(this.jb)).slice(0, p169);
        var v83 = vO4.la(Object.keys(this.lb)).slice(0, p169);
        var v84 = vO4.la(Object.keys(this.nb)).slice(0, p169);
        var vA3 = [];
        for (var vLN06 = 0; vLN06 < p169; vLN06++) {
          var v85 = v80.length > 0 ? v80[vLN06 % v80.length] : 0;
          var v86 = v81.length > 0 ? v81[vLN06 % v81.length] : 0;
          var v87 = v82.length > 0 ? v82[vLN06 % v82.length] : 0;
          var v88 = v83.length > 0 ? v83[vLN06 % v83.length] : 0;
          var v89 = v84.length > 0 ? v84[vLN06 % v84.length] : 0;
          vA3.push(new vO2.zb(v85, v86, v87, v88, v89));
        }
        ;
        return vA3;
      };
      _0x9f75x6.prototype.Ab = function (p170) {
        if (this.db.hasOwnProperty(p170)) {
          return this.db[p170];
        } else {
          return this.eb;
        }
      };
      _0x9f75x6.prototype.Bb = function (p171) {
        if (this.fb.hasOwnProperty(p171)) {
          return this.fb[p171];
        } else {
          return this.gb;
        }
      };
      _0x9f75x6.prototype.Cb = function (p172) {
        if (this.hb.hasOwnProperty(p172)) {
          return this.hb[p172];
        } else {
          return this.ib;
        }
      };
      _0x9f75x6.prototype.Db = function (p173) {
        if (this.jb.hasOwnProperty(p173)) {
          return this.jb[p173];
        } else {
          return this.kb;
        }
      };
      _0x9f75x6.prototype.Eb = function (p174) {
        if (this.nb.hasOwnProperty(p174)) {
          return this.nb[p174];
        } else {
          return this.ob;
        }
      };
      _0x9f75x6.prototype.Fb = function (p175) {
        if (this.lb.hasOwnProperty(p175)) {
          return this.lb[p175];
        } else {
          return this.mb;
        }
      };
      _0x9f75x6.prototype.Gb = function (p176) {
        if (this._a.hasOwnProperty(p176)) {
          return this._a[p176];
        } else {
          return this.ab;
        }
      };
      _0x9f75x6.prototype.Hb = function (p177) {
        if (this.bb.hasOwnProperty(p177)) {
          return this.bb[p177];
        } else {
          return this.cb;
        }
      };
      _0x9f75x6.ub = function () {
        function _0x9f75x19(f10, p178, p179) {
          this.Ib = f10;
          this.Jb = p178;
          this.Kb = p179;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.sb = function () {
        function _0x9f75x19(f11, p180, p181) {
          this.Lb = f11;
          this.Mb = p180;
          this.Nb = p181;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.vb = function () {
        function _0x9f75x19(f12) {
          this.Mb = f12;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.pb = function () {
        function _0x9f75x19(f13, p182) {
          this.Mb = f13;
          this.Nb = p182;
        }
        return _0x9f75x19;
      }();
      _0x9f75x6.tb = function () {
        function _0x9f75x19(f14) {
          this.Mb = f14;
        }
        return _0x9f75x19;
      }();
      return _0x9f75x6;
    }();
    vO2.rb = function () {
      function _0x9f75x6() {
        var f15 = vO5.e.g.from("/images/wear-ability.png");
        this.Ob = new vO2.Da("magnet_ability", f15, 158, 86, 67, 124, 148, 63.5, 128, 128);
        this.Pb = new vO2.Da("velocity_ability", f15, 158, 4, 87, 74, 203, 63.5, 128, 128);
        this.Qb = new vO2.Da("flex_ability", f15, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
        var v90 = vO5.e.g.from("/images/def-look.png");
        var v91 = new vO2.Da("def_eyes", v90, 0, 0, 42, 80, 75, 64, 128, 128);
        var v92 = new vO2.Da("def_mouth", v90, 46, 0, 20, 48, 109, 63, 128, 128);
        var v93 = new vO2.Da("def_skin_glow", v90, 70, 0, 32, 32, 0, 0, 0, 0);
        var v94 = new vO2.Da("def_skin_base", v90, 46, 52, 64, 64, 0, 0, 0, 0);
        var v95 = vO2.Ya.wb(v94, v93, v91, v92);
        this.Rb = new vO2.Sb({}, v95);
        this.Tb = -10000;
        this.Ub = -10000;
        this.Vb = function () {
          var v96 = window.document.createElement("canvas");
          v96.width = 80;
          v96.height = 80;
          return {
            Wb: v96,
            Xb: v96.getContext("2d"),
            Ga: new vO5.e.h(vO5.e.g.from(v96))
          };
        }();
        this.Yb = null;
        this.Zb = [];
      }
      _0x9f75x6.qb = vO2.Da.Ua();
      _0x9f75x6.prototype.za = function () {};
      _0x9f75x6.prototype.$b = function (p183, p184, p185) {
        var vThis3 = this;
        var v97 = this.Rb._b();
        if (v97 > 0 && vO4.ja() - this.Tb < 1200000) {
          if (p183 != null) {
            p183();
          }
          return;
        }
        ;
        if (this.Yb != null && !this.Yb.ac()) {
          if (vO4.ja() - this.Tb < 300000) {
            if (p183 != null) {
              p183();
            }
            return;
          }
          ;
          this.Yb.bc();
          this.Yb = null;
        }
        ;
        var v98 = new vO2.cc(v97);
        v98.dc(function (p186, p187) {
          if (v98 === vThis3.Yb && p185 != null) {
            p185(p186, p187);
          }
        });
        v98.ec(function (p188) {
          if (v98 === vThis3.Yb && p184 != null) {
            p184(p188);
          }
        });
        v98.fc(function () {
          if (v98 === vThis3.Yb && p184 != null) {
            p184(new Error());
          }
        });
        v98.gc(function () {
          if (v98 === vThis3.Yb && p183 != null) {
            p183();
          }
        });
        v98.hc(function (p189) {
          if (v98 === vThis3.Yb) {
            vThis3.Ub = vO4.ja();
            vThis3.Yb = null;
            vThis3.ic();
            vThis3.Rb.jc().Xa();
            vThis3.Rb = p189;
            if (p183 != null) {
              p183();
            }
            vThis3.kc();
            return;
          }
          ;
          try {
            p189.jc().Xa();
          } catch (e13) {}
        });
        v98.lc();
        this.Tb = vO4.ja();
        this.Yb = v98;
      };
      _0x9f75x6.prototype.ic = function () {};
      _0x9f75x6.prototype.mc = function () {
        return this.Rb._b() > 0;
      };
      _0x9f75x6.prototype.nc = function () {
        return this.Rb.oc();
      };
      _0x9f75x6.prototype.pc = function () {
        return this.Vb;
      };
      _0x9f75x6.prototype.qc = function (p190) {
        this.Zb.push(p190);
      };
      _0x9f75x6.prototype.kc = function () {
        for (var vLN07 = 0; vLN07 < this.Zb.length; vLN07++) {
          this.Zb[vLN07]();
        }
      };
      _0x9f75x6.prototype.jc = function () {
        return this.Rb.jc();
      };
      return _0x9f75x6;
    }();
    vO2.rc = function () {
      function _0x9f75x19(f16) {
        this.sc = f16;
      }
      _0x9f75x19.prototype.tc = function (p191) {
        return this.sc[p191];
      };
      _0x9f75x19.uc = function () {
        function f17() {
          this.vc = [];
        }
        f17.prototype.wc = function (p192, p193) {
          for (var vLN08 = 0; vLN08 < this.vc.length; vLN08++) {
            if (this.vc[vLN08].xc === p192) {
              throw new Error();
            }
          }
          ;
          this.vc.push(new _0x9f75x19.yc(p192, p193));
          return this;
        };
        f17.prototype.zc = function () {
          var vLN09 = 0;
          for (var vLN010 = 0; vLN010 < this.vc.length; vLN010++) {
            vLN09 += this.vc[vLN010].Ac;
          }
          ;
          var vO19 = {};
          var vLN011 = 0;
          for (var vLN012 = 0; vLN012 < this.vc.length; vLN012++) {
            var v99 = this.vc[vLN012];
            v99.Ac = v99.Ac / vLN09;
            v99.Bc = vLN011;
            v99.Cc = vLN011 + v99.Ac;
            vLN011 = v99.Cc;
            vO19[v99.xc] = v99;
          }
          ;
          return new _0x9f75x19(vO19);
        };
        return f17;
      }();
      _0x9f75x19.yc = function () {
        function _0x9f75x19(f18, p194) {
          this.xc = f18;
          this.Ac = p194;
          this.Bc = 0;
          this.Cc = 0;
        }
        _0x9f75x19.prototype.Dc = function (p195) {
          return this.Bc + (this.Cc - this.Bc) * p195;
        };
        return _0x9f75x19;
      }();
      return _0x9f75x19;
    }();
    vO2.Ec = function () {
      function f19() {
        this.Fc = new vO5.e.f();
        this.Fc.sortableChildren = true;
        this.Gc = new vF4();
        this.Gc.zIndex = vLN0001 * ((vLN797 + 1) * 2 + 1 + 3);
        this.Hc = 0;
        this.Ic = new Array(vLN797);
        this.Ic[0] = this.Jc(0, new vO2.Kc(), new vO2.Kc());
        for (var vLN12 = 1; vLN12 < vLN797; vLN12++) {
          this.Ic[vLN12] = this.Jc(vLN12, new vO2.Kc(), new vO2.Kc());
        }
        ;
        this.Lc = 0;
        this.Mc = 0;
        this.Nc = 0;
      }
      var vLN0001 = 0.001;
      var vLN797 = 797;
      var v100 = Math.PI * 0.1;
      var v101 = -0.06640625;
      var vLN084375 = 0.84375;
      var vLN02578125 = 0.2578125;
      var v102 = -0.03515625;
      var v103 = -0.0625;
      var vLN05625 = 0.5625;
      var v104 = v101 * 3 + vLN084375;
      var v105 = vLN02578125 - v101 * 3;
      var v106 = v101 + v102;
      var vLN0375 = 0.375;
      var vLN075 = 0.75;
      var v107 = v103 + v103;
      var v108 = v102 * 3 + vLN02578125;
      var v109 = vLN084375 - v102 * 3;
      var v110 = v102 + v101;
      f19.Oc = vLN797;
      f19.prototype.Jc = function (p196, p197, p198) {
        var v111 = new vF5(p197, p198);
        p197.Pc.zIndex = vLN0001 * ((vLN797 - p196) * 2 + 1 + 3);
        p198.Pc.zIndex = vLN0001 * ((vLN797 - p196) * 2 - 2 + 3);
        return v111;
      };
      f19.prototype.Qc = function (p199, p200, p201, p202, p203, p204, p205, p206) {
        var v112 = p201.Mb;
        var v113 = p199 === vO2.Sc.Rc ? p200.Jb.Nb : p201.Nb;
        if (v112.length > 0 && v113.length > 0) {
          for (var vLN013 = 0; vLN013 < this.Ic.length; vLN013++) {
            this.Ic[vLN013].Uc.Tc(v112[vLN013 % v112.length]);
            this.Ic[vLN013].Vc.Tc(v113[vLN013 % v113.length]);
            this.Ic[vLN013].Uc.Wc(p206);
            this.Ic[vLN013].Vc.Wc(p206);
          }
        }
        ;
        this.Gc.Qc(p202, p203, p204, p205);
      };
      var vF4 = function () {
        var v114 = vO4.X(vO5.e.f, function () {
          vO5.e.f.call(this);
          this.sortableChildren = true;
          this.Xc = [];
          this.Yc = [];
          this.Zc = [];
          this.$c = [];
          this._c = new vO5.e.f();
          this.ad = [];
          for (var vLN014 = 0; vLN014 < 4; vLN014++) {
            var v115 = new vO2.Kc();
            v115.Tc(vO3.L.bd.Ob);
            this._c.addChild(v115.Pc);
            this.ad.push(v115);
          }
          ;
          this._c.zIndex = 0.0011;
          this.addChild(this._c);
          this.cd();
          this.dd = new vO2.Kc();
          this.dd.Tc(vO3.L.bd.Pb);
          this.dd.Pc.zIndex = 0.001;
          this.addChild(this.dd.Pc);
          this.ed();
        });
        v114.prototype.Qc = function (p207, p208, p209, p210) {
          this.fd(0.002, this.Xc, p207.Mb);
          this.fd(0.003, this.Yc, p208.Mb);
          this.fd(0.004, this.$c, p210.Mb);
          this.fd(0.005, this.Zc, p209.Mb);
        };
        v114.prototype.fd = function (p211, p212, p213) {
          while (p213.length > p212.length) {
            var v116 = new vO2.Kc();
            p212.push(v116);
            this.addChild(v116.gd());
          }
          ;
          while (p213.length < p212.length) {
            p212.pop().z();
          }
          ;
          var vP211 = p211;
          for (var vLN015 = 0; vLN015 < p213.length; vLN015++) {
            vP211 += 0.0001;
            var v117 = p212[vLN015];
            v117.Tc(p213[vLN015]);
            v117.Pc.zIndex = vP211;
          }
        };
        v114.prototype.hd = function (p214, p215, p216, p217) {
          this.visible = true;
          this.position.set(p214, p215);
          this.rotation = p217;
          for (var vLN016 = 0; vLN016 < this.Xc.length; vLN016++) {
            this.Xc[vLN016].jd(p216);
          }
          ;
          for (var vLN017 = 0; vLN017 < this.Yc.length; vLN017++) {
            this.Yc[vLN017].jd(p216);
          }
          ;
          for (var vLN018 = 0; vLN018 < this.Zc.length; vLN018++) {
            this.Zc[vLN018].jd(p216);
          }
          ;
          for (var vLN019 = 0; vLN019 < this.$c.length; vLN019++) {
            this.$c[vLN019].jd(p216);
          }
        };
        v114.prototype.kd = function () {
          this.visible = false;
        };
        v114.prototype.ld = function (p218, p219, p220, p221) {
          this._c.visible = true;
          var v118 = p220 / 1000;
          var v119 = 1 / this.ad.length;
          for (var vLN020 = 0; vLN020 < this.ad.length; vLN020++) {
            var v120 = 1 - (v118 + v119 * vLN020) % 1;
            this.ad[vLN020].Pc.alpha = 1 - v120;
            this.ad[vLN020].jd(p219 * (0.5 + v120 * 4.5));
          }
        };
        v114.prototype.cd = function () {
          this._c.visible = false;
        };
        v114.prototype.md = function (p222, p223, p224, p225) {
          this.dd.Pc.visible = true;
          this.dd.Pc.alpha = vO4._(this.dd.Pc.alpha, p222.nd ? 0.9 : 0.2, p225, 0.0025);
          this.dd.jd(p223);
        };
        v114.prototype.ed = function () {
          this.dd.Pc.visible = false;
        };
        return v114;
      }();
      f19.prototype.od = function (p226) {
        return this.Mc + this.Nc * Math.sin(p226 * v100 - this.Lc);
      };
      f19.prototype.pd = function (p227, p228, p229, p230) {
        var v121 = p227.qd * 2;
        var v122 = p227.rd;
        var v123 = p227.sd;
        var v124 = v123 * 4 - 3;
        var vV124 = v124;
        this.Lc = p228 / 400 * Math.PI;
        this.Mc = v121 * 1.5;
        this.Nc = v121 * 0.15 * p227.td;
        var v125;
        var v126;
        var v127;
        var v128;
        var v129;
        var v130;
        var v131;
        var v132;
        v126 = v122[0];
        v130 = v122[1];
        if (p230(v126, v130)) {
          v127 = v122[2];
          v131 = v122[3];
          v128 = v122[4];
          v132 = v122[5];
          var v133 = Math.atan2(v132 + v130 * 2 - v131 * 3, v128 + v126 * 2 - v127 * 3);
          this.Gc.hd(v126, v130, v121, v133);
          this.Ic[0].hd(v126, v130, v121, this.od(0), v133);
          this.Ic[1].hd(v104 * v126 + v105 * v127 + v106 * v128, v104 * v130 + v105 * v131 + v106 * v132, v121, this.od(1), vF5.ud(this.Ic[0], this.Ic[2]));
          this.Ic[2].hd(vLN0375 * v126 + vLN075 * v127 + v107 * v128, vLN0375 * v130 + vLN075 * v131 + v107 * v132, v121, this.od(2), vF5.ud(this.Ic[1], this.Ic[3]));
          this.Ic[3].hd(v108 * v126 + v109 * v127 + v110 * v128, v108 * v130 + v109 * v131 + v110 * v132, v121, this.od(3), vF5.ud(this.Ic[2], this.Ic[4]));
        } else {
          this.Gc.kd();
          this.Ic[0].kd();
          this.Ic[1].kd();
          this.Ic[2].kd();
          this.Ic[3].kd();
        }
        ;
        var vLN4 = 4;
        for (var vLN22 = 2, v134 = v123 * 2 - 4; vLN22 < v134; vLN22 += 2) {
          v126 = v122[vLN22];
          v130 = v122[vLN22 + 1];
          if (p230(v126, v130)) {
            v125 = v122[vLN22 - 2];
            v129 = v122[vLN22 - 1];
            v127 = v122[vLN22 + 2];
            v131 = v122[vLN22 + 3];
            v128 = v122[vLN22 + 4];
            v132 = v122[vLN22 + 5];
            this.Ic[vLN4].hd(v126, v130, v121, this.od(vLN4), vF5.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
            this.Ic[vLN4].hd(v101 * v125 + vLN084375 * v126 + vLN02578125 * v127 + v102 * v128, v101 * v129 + vLN084375 * v130 + vLN02578125 * v131 + v102 * v132, v121, this.od(vLN4), vF5.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
            this.Ic[vLN4].hd(v103 * v125 + vLN05625 * v126 + vLN05625 * v127 + v103 * v128, v103 * v129 + vLN05625 * v130 + vLN05625 * v131 + v103 * v132, v121, this.od(vLN4), vF5.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
            this.Ic[vLN4].hd(v102 * v125 + vLN02578125 * v126 + vLN084375 * v127 + v101 * v128, v102 * v129 + vLN02578125 * v130 + vLN084375 * v131 + v101 * v132, v121, this.od(vLN4), vF5.ud(this.Ic[vLN4 - 1], this.Ic[vLN4 + 1]));
            vLN4++;
          } else {
            this.Ic[vLN4].kd();
            vLN4++;
            this.Ic[vLN4].kd();
            vLN4++;
            this.Ic[vLN4].kd();
            vLN4++;
            this.Ic[vLN4].kd();
            vLN4++;
          }
        }
        ;
        v126 = v122[v123 * 2 - 4];
        v130 = v122[v123 * 2 - 3];
        if (p230(v126, v130)) {
          v125 = v122[v123 * 2 - 6];
          v129 = v122[v123 * 2 - 5];
          v127 = v122[v123 * 2 - 2];
          v131 = v122[v123 * 2 - 1];
          this.Ic[v124 - 5].hd(v126, v130, v121, this.od(v124 - 5), vF5.ud(this.Ic[v124 - 6], this.Ic[v124 - 4]));
          this.Ic[v124 - 4].hd(v110 * v125 + v109 * v126 + v108 * v127, v110 * v129 + v109 * v130 + v108 * v131, v121, this.od(v124 - 4), vF5.ud(this.Ic[v124 - 5], this.Ic[v124 - 3]));
          this.Ic[v124 - 3].hd(v107 * v125 + vLN075 * v126 + vLN0375 * v127, v107 * v129 + vLN075 * v130 + vLN0375 * v131, v121, this.od(v124 - 3), vF5.ud(this.Ic[v124 - 4], this.Ic[v124 - 2]));
          this.Ic[v124 - 2].hd(v106 * v125 + v105 * v126 + v104 * v127, v106 * v129 + v105 * v130 + v104 * v131, v121, this.od(v124 - 2), vF5.ud(this.Ic[v124 - 3], this.Ic[v124 - 1]));
          this.Ic[v124 - 1].hd(v127, v131, v121, this.od(v124 - 1), vF5.ud(this.Ic[v124 - 2], this.Ic[v124 - 1]));
        } else {
          this.Ic[v124 - 5].kd();
          this.Ic[v124 - 4].kd();
          this.Ic[v124 - 3].kd();
          this.Ic[v124 - 2].kd();
          this.Ic[v124 - 1].kd();
        }
        if (this.Hc === 0 && vV124 > 0) {
          this.Fc.addChild(this.Gc);
        }
        if (this.Hc > 0 && vV124 === 0) {
          vO5.e.w.z(this.Gc);
        }
        while (this.Hc < vV124) {
          this.Fc.addChild(this.Ic[this.Hc].Uc.gd());
          this.Fc.addChild(this.Ic[this.Hc].Vc.gd());
          this.Hc += 1;
        }
        ;
        while (this.Hc > vV124) {
          this.Hc -= 1;
          this.Ic[this.Hc].Vc.z();
          this.Ic[this.Hc].Uc.z();
        }
        ;
        var v135 = p227.vd[vO2.xd.wd];
        if (this.Ic[0].yd() && v135 != null && v135.zd) {
          this.Gc.ld(p227, v121, p228, p229);
        } else {
          this.Gc.cd();
        }
        var v136 = p227.vd[vO2.xd.Ad];
        if (this.Ic[0].yd() && v136 != null && v136.zd) {
          this.Gc.md(p227, v121, p228, p229);
        } else {
          this.Gc.ed();
        }
      };
      var vF5 = function () {
        function _0x9f75x19(f20, p231) {
          this.Uc = f20;
          this.Uc.Bd(false);
          this.Vc = p231;
          this.Vc.Bd(false);
        }
        _0x9f75x19.prototype.hd = function (p232, p233, p234, p235, p236) {
          this.Uc.Bd(true);
          this.Uc.Cd(p232, p233);
          this.Uc.jd(p234);
          this.Uc.Dd(p236);
          this.Vc.Bd(true);
          this.Vc.Cd(p232, p233);
          this.Vc.jd(p235);
          this.Vc.Dd(p236);
        };
        _0x9f75x19.prototype.kd = function () {
          this.Uc.Bd(false);
          this.Vc.Bd(false);
        };
        _0x9f75x19.prototype.yd = function () {
          return this.Uc.yd();
        };
        _0x9f75x19.ud = function (p237, p238) {
          return Math.atan2(p237.Uc.Pc.position.y - p238.Uc.Pc.position.y, p237.Uc.Pc.position.x - p238.Uc.Pc.position.x);
        };
        return _0x9f75x19;
      }();
      return f19;
    }();
    vO2.xd = function () {
      function _0x9f75x19(f21) {
        this.Ed = f21;
        this.zd = false;
        this.Fd = 1;
      }
      _0x9f75x19.Ad = 0;
      _0x9f75x19.Gd = 1;
      _0x9f75x19.wd = 2;
      _0x9f75x19.Hd = 6;
      _0x9f75x19.Id = 3;
      _0x9f75x19.Jd = 4;
      _0x9f75x19.Kd = 5;
      return _0x9f75x19;
    }();
    vO2.Sb = function () {
      function _0x9f75x6(p239, f22) {
        this.Ld = p239;
        this.Md = f22;
      }
      _0x9f75x6.Nd = new _0x9f75x6({}, vO2.Ya.Ua());
      _0x9f75x6.prototype._b = function () {
        return this.Ld.revision;
      };
      _0x9f75x6.prototype.oc = function () {
        return this.Ld;
      };
      _0x9f75x6.prototype.jc = function () {
        return this.Md;
      };
      return _0x9f75x6;
    }();
    vO2.cc = function () {
      function f23(p240) {
        this.Od = function () {
          ++f23.Pd;
          return function (p241, p242) {};
        }();
        this.Qd = p240;
        this.Rd = null;
        this.Sd = null;
        this.Td = null;
        this.Ud = null;
        this.Vd = null;
        this.Wd = false;
        this.Xd = false;
        this.Yd = false;
      }
      f23.Zd = {
        $d: "0x0",
        _d: "0x1",
        ae: "0x2",
        be: "0x3",
        ce: "0x4"
      };
      f23.Pd = 100000;
      f23.de = new vO2.rc.uc().wc(f23.Zd.$d, 1).wc(f23.Zd._d, 10).wc(f23.Zd.ae, 50).wc(f23.Zd.be, 15).wc(f23.Zd.ce, 5).zc();
      f23.prototype.hc = function (p243) {
        this.Rd = p243;
      };
      f23.prototype.gc = function (p244) {
        this.Sd = p244;
      };
      f23.prototype.ec = function (p245) {
        this.Td = p245;
      };
      f23.prototype.fc = function (p246) {
        this.Ud = p246;
      };
      f23.prototype.dc = function (p247) {
        this.Vd = p247;
      };
      f23.prototype.ac = function () {
        return this.Yd;
      };
      f23.prototype.bc = function () {
        this.Wd = true;
      };
      f23.prototype.lc = function () {
        if (!this.Xd) {
          this.Xd = true;
          if (this.Wd) {
            this.ee();
            return;
          }
          ;
          this.fe();
        }
      };
      f23.prototype.fe = function () {
        function _0x9f75x19(f24) {
          var v137 = f23.Zd.$d;
          vThis4.ge(v137, f23.de.tc(v137).Dc(f24));
        }
        var vThis4 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO3.A.D + "/dynamic/assets/revision.json",
          xhrFields: {
            onprogress: function (p248) {
              if (p248.lengthComputable) {
                _0x9f75x19(p248.loaded / p248.total);
              }
            }
          }
        }).fail(function () {
          vThis4.he(new Error());
        }).done(function (p249) {
          if (p249 <= vThis4.Qd) {
            vThis4.ie();
            return;
          }
          ;
          vThis4.je();
        });
      };
      f23.prototype.je = function () {
        function _0x9f75x19(f25) {
          var v138 = f23.Zd._d;
          vThis5.ge(v138, f23.de.tc(v138).Dc(f25));
        }
        var vThis5 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        $.ajax({
          type: "GET",
          url: vO3.A.D + "/dynamic/assets/registry.json",
          xhrFields: {
            onprogress: function (p250) {
              if (p250.lengthComputable) {
                _0x9f75x19(p250.loaded / p250.total);
              }
            }
          }
        }).fail(function () {
          vThis5.he(new Error());
        }).done(function (p251) {
          if (p251.revision <= vThis5.Qd) {
            vThis5.ie();
            return;
          }
          ;
          f102(p251, vThis5);
        });
      };
      f23.prototype.ke = function (p252) {
        function f26(p253) {
          var v139 = f23.Zd.ae;
          vThis6.ge(v139, f23.de.tc(v139).Dc(p253));
        }
        var vThis6 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        var vA4 = [];
        var vA5 = [];
        var vLN021 = 0;
        for (var v140 in p252.textureDict) {
          if (p252.textureDict.hasOwnProperty(v140)) {
            var v141 = p252.textureDict[v140];
            var v142 = (v141.custom ? zUrl : vO3.A.D) + v141.relativePath;
            var v143 = v141.fileSize;
            var v144 = v141.sha256;
            var v145 = new f23.le(v140, v142, v143, v144);
            vA4.push(v145);
            vA5.push(v145);
            vLN021 += v143;
          }
        }
        ;
        var v146;
        var vLN022 = 0;
        function f27(p254) {
          for (var vLN023 = 0; vLN023 < vA5.length; vLN023++) {
            try {
              window.URL.revokeObjectURL(vA5[vLN023].me);
            } catch (e14) {}
          }
          ;
          vThis6.he(p254);
        }
        function f28(p255) {
          var v147 = Math.floor(v146.ne * p255);
          f26((vLN022 + v147) / vLN021);
        }
        function f29(p256) {
          var v148 = new Blob([p256]);
          v146.me = window.URL.createObjectURL(v148);
          vLN022 += v146.ne;
          f30();
        }
        function f30() {
          if (vLN024 < vA5.length) {
            v146 = vA5[vLN024++];
            vThis6.oe(v146, f27, f29, f28);
            return;
          }
          ;
          vO4.S(function () {
            return vThis6.pe(p252, vA4);
          }, 0);
        }
        var vLN024 = 0;
        f30();
      };
      f23.prototype.oe = function (p257, p258, p259, p260) {
        $.ajax({
          type: "GET",
          url: p257.qe,
          xhrFields: {
            responseType: "arraybuffer",
            onprogress: function (p261) {
              if (p261.lengthComputable) {
                p260(p261.loaded / p261.total);
              }
            }
          }
        }).fail(function () {
          p258(new Error());
        }).done(function (p262) {
          p259(p262);
        });
      };
      f23.prototype.pe = function (p263, p264) {
        function f31(p265) {
          var v149 = f23.Zd.be;
          vThis7.ge(v149, f23.de.tc(v149).Dc(p265));
        }
        var vThis7 = this;
        if (this.Wd) {
          this.ee();
          return;
        }
        ;
        var v150;
        var v151;
        var vO20 = {};
        function f32() {
          for (var vLN025 = 0; vLN025 < p264.length; vLN025++) {
            try {
              window.URL.revokeObjectURL(p264[vLN025].me);
            } catch (e15) {}
          }
          ;
          vThis7.he(new Error());
        }
        function f33() {
          f31(vLN026 / p264.length);
          vO20[v150.re] = new vO2.se(v150.me, v151);
          f34();
        }
        function f34() {
          if (vLN026 < p264.length) {
            v150 = p264[vLN026++];
            v151 = vO5.e.g.from(v150.me);
            v151.on("error", f32);
            v151.on("loaded", f33);
            return;
          }
          ;
          vO4.S(function () {
            return vThis7.te(p263, vO20);
          }, 0);
        }
        var vLN026 = 0;
        f34();
      };
      f23.prototype.te = function (p266, p267) {
        function f35(p268) {
          var v152 = f23.Zd.ce;
          vThis8.ge(v152, f23.de.tc(v152).Dc(p268));
        }
        var vThis8 = this;
        var vO21 = {};
        var vLN027 = 0;
        var v153 = Object.values(p266.regionDict).length;
        var v154 = "#fbbe5f,#f7ca0b,#fcbe5e,#5cade5,#e03e42,#5aa9e1,#d2d91a,#e44a92".split(",");
        vO4.ka(p266.regionDict, function (p269, p270) {
          var v155 = vO2.Da.Va(p270.texture + ":" + p269, p267[p270.texture].Ga, p270);
          if (p270.texture === "t_abilities") {
            v155.zt = new PIXI.TextStyle({
              align: "center",
              fill: v154.shift(),
              fontSize: 22,
              fontWeight: "bold",
              lineJoin: "round",
              whiteSpace: "normal",
              wordWrap: true
            });
          }
          ;
          vO21[p269] = v155;
          if (++vLN027 % 10 == 0) {
            f35(vLN027 / v153);
          }
        });
        var v156 = Object.values(p267).map(function (p271) {
          return p271.Ga;
        });
        var v157 = Object.values(vO21);
        var v158 = new vO2.Sb(p266, vO2.Ya.xb(p266, vO21, v156, v157));
        vO4.S(function () {
          return vThis8.ue(v158);
        }, 0);
      };
      f23.le = function () {
        function _0x9f75x19(f36, p272, p273, p274) {
          this.re = f36;
          this.qe = p272;
          this.ne = p273;
          this.ve = p274;
          this.me = "";
        }
        return _0x9f75x19;
      }();
      f23.prototype.ue = function (p275) {
        if (this.Yd) {
          p275.jc().Xa();
          return;
        }
        ;
        this.Yd = true;
        var vThis9 = this;
        vO4.S(function () {
          return vThis9.Rd(p275);
        }, 0);
      };
      f23.prototype.ie = function () {
        if (!this.Yd) {
          this.Yd = true;
          var vThis10 = this;
          vO4.S(function () {
            return vThis10.Sd();
          }, 0);
        }
      };
      f23.prototype.he = function (p276) {
        if (!this.Yd) {
          this.Yd = true;
          var vThis11 = this;
          vO4.S(function () {
            return vThis11.Td(p276);
          }, 0);
        }
      };
      f23.prototype.ee = function () {
        if (!this.Yd) {
          this.Yd = true;
          var vThis12 = this;
          vO4.S(function () {
            return vThis12.Ud();
          }, 0);
        }
      };
      f23.prototype.ge = function (p277, p278) {
        if (!this.Yd && !this.Wd) {
          var vThis13 = this;
          vO4.S(function () {
            return vThis13.Vd(p277, p278);
          }, 0);
        }
      };
      return f23;
    }();
    vO2.we = function () {
      return {};
    }();
    vO2.xe = function () {
      function f37() {
        this.ye = vO2.xe.Ae.ze;
        this.Be = false;
        this.Ce = false;
        this.De = null;
        this.Ee = null;
      }
      f37.prototype.za = function () {};
      f37.prototype.Fe = function (p279) {
        this.Ce = p279;
      };
      f37.prototype.Ge = function (p280) {
        this.ye = p280;
        this.He();
      };
      f37.prototype.Ie = function (p281) {
        this.Be = p281;
        this.He();
      };
      f37.prototype.He = function () {};
      f37.prototype.Je = function (p282, p283) {
        if (!vO3.L.bd.mc()) {
          return null;
        }
        ;
        var v159 = p282[p283];
        if (v159 == null || v159.length === 0) {
          return null;
        } else {
          return v159[Math.floor(Math.random() * v159.length)].cloneNode();
        }
      };
      f37.prototype.Ke = function (p284, p285, p286) {
        if (this.Ce && !(p286 <= 0)) {
          var v160 = this.Je(p284, p285);
          if (v160 != null) {
            v160.volume = Math.min(1, p286);
            v160.play();
          }
        }
      };
      f37.prototype.Le = function (p287, p288) {
        if (this.ye.Me) {
          this.Ke(app.Oe.Ne, p287, p288);
        }
      };
      f37.prototype.Pe = function (p289, p290) {
        if (this.ye.Qe) {
          this.Ke(app.Oe.Re, p289, p290);
        }
      };
      f37.prototype.Se = function () {};
      f37.prototype.Te = function () {};
      f37.prototype.Ue = function () {};
      f37.prototype.Ve = function () {};
      f37.prototype.We = function () {};
      f37.prototype.Xe = function () {};
      f37.prototype.Ye = function (p291, p292, p293) {};
      f37.prototype.Ze = function (p294) {};
      f37.prototype.$e = function (p295) {};
      f37.prototype._e = function (p296) {};
      f37.prototype.af = function (p297) {};
      f37.prototype.bf = function (p298) {};
      f37.prototype.cf = function (p299) {};
      f37.prototype.df = function (p300) {};
      f37.prototype.ef = function (p301) {};
      f37.prototype.ff = function (p302) {};
      f37.prototype.gf = function (p303) {};
      f37.prototype.hf = function (p304) {};
      f37.prototype.if = function (p305) {};
      f37.prototype.jf = function (p306) {};
      f37.prototype.kf = function (p307) {};
      f37.prototype.lf = function (p308, p309) {};
      f37.prototype.mf = function (p310) {};
      f37.prototype.nf = function (p311, p312, p313) {};
      f37.Ae = {
        ze: {
          pf: false,
          qf: false,
          Qe: true,
          Me: false
        },
        rf: {
          pf: false,
          qf: true,
          Qe: true,
          Me: false
        },
        sf: {
          pf: true,
          qf: false,
          Qe: false,
          Me: true
        },
        tf: {
          pf: false,
          qf: false,
          Qe: true,
          Me: false
        },
        uf: {
          pf: false,
          qf: false,
          Qe: false,
          Me: false
        }
      };
      return f37;
    }();
    vO2.vf = function () {
      function _0x9f75x7(p314) {
        this.wf = p314;
        this.Wb = p314.get()[0];
        this.xf = 1;
        this.yf = 1;
        this.zf = new vO2.Af(vLN5, vLN40, vO2.Cf.Bf);
        this.Df = new vO5.e.i({
          view: this.Wb,
          backgroundColor: vLN028,
          antialias: true
        });
        this.Ef = new vO5.e.f();
        this.Ef.sortableChildren = true;
        this.Ff = new vO5.e.f();
        this.Ff.zIndex = 0;
        this.Ef.addChild(this.Ff);
        this.Gf = new vO2.Hf(vO3.L.Oe.If);
        this.Gf.Jf.zIndex = 1;
        this.Ef.addChild(this.Gf.Jf);
        var f38 = this.zf.Kf();
        f38.zIndex = 2;
        this.Ef.addChild(f38);
        this.Lf = new vO5.e.f();
        this.Lf.zIndex = 3;
        this.Ef.addChild(this.Lf);
        this.Mf = [];
        this.Nf = [];
        this.Of = [];
        this.za();
      }
      var vLN028 = 0;
      var vLN5 = 5;
      var vLN40 = 40;
      var vA6 = [{
        Pf: 1,
        Qf: Math.max(0, 0.15000000000000002),
        Rf: Math.max(0, -0.125)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.125),
        Rf: Math.max(0, -0.09999999999999998)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.09999999999999998),
        Rf: Math.max(0, -0.07499999999999996)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.07499999999999996),
        Rf: Math.max(0, -0.050000000000000044)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.050000000000000044),
        Rf: Math.max(0, -0.025000000000000022)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0.025000000000000022),
        Rf: Math.max(0, 0)
      }, {
        Pf: 1,
        Qf: Math.max(0, 0),
        Rf: Math.max(0, 0.025000000000000022)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.025000000000000022),
        Rf: Math.max(0, 0.050000000000000044)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.050000000000000044),
        Rf: Math.max(0, 0.07499999999999996)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.07499999999999996),
        Rf: Math.max(0, 0.09999999999999998)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.09999999999999998),
        Rf: Math.max(0, 0.125)
      }, {
        Pf: 1,
        Qf: Math.max(0, -0.125),
        Rf: Math.max(0, 0.15000000000000002)
      }];
      _0x9f75x7.prototype.za = function () {
        this.Df.backgroundColor = vLN028;
        this.Mf = new Array(vA6.length);
        for (var vLN029 = 0; vLN029 < this.Mf.length; vLN029++) {
          this.Mf[vLN029] = new vO5.e.m();
          this.Mf[vLN029].texture = vO3.L.Oe.Sf;
          this.Mf[vLN029].anchor.set(0.5);
          this.Ff.addChild(this.Mf[vLN029]);
        }
        ;
        this.Nf = new Array(vO3.L.Oe.Tf.length);
        for (var vLN030 = 0; vLN030 < this.Nf.length; vLN030++) {
          this.Nf[vLN030] = new vO5.e.m();
          this.Nf[vLN030].texture = vO3.L.Oe.Tf[vLN030];
          this.Nf[vLN030].anchor.set(0.5);
          this.Lf.addChild(this.Nf[vLN030]);
        }
        ;
        this.Of = new Array(this.Nf.length);
        for (var vLN031 = 0; vLN031 < this.Of.length; vLN031++) {
          var v161 = vO4.ga((0.9 + Math.random() * 0.2) % 1 * 360, 1, 0.5);
          this.Of[vLN031] = {
            Uf: vO4.da(0, vO3.M),
            Vf: vO4.da(0.09, 0.16) * 0.66,
            Wf: vO4.da(0, 1),
            Xf: vO4.da(0, 1),
            Yf: 0,
            Pf: v161[0],
            Qf: v161[1],
            Rf: v161[2]
          };
        }
        ;
        this.Zf();
        this.$f();
      };
      _0x9f75x7.zd = false;
      _0x9f75x7._f = function (p315) {
        _0x9f75x7.zd = p315;
      };
      _0x9f75x7.prototype.ag = function (p316) {
        this.zf._f(p316);
      };
      _0x9f75x7.prototype.$f = function () {
        var v162 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.xf = this.wf.width();
        this.yf = this.wf.height();
        this.Df.resize(this.xf, this.yf);
        this.Df.resolution = v162;
        this.Wb.width = v162 * this.xf;
        this.Wb.height = v162 * this.yf;
        var v163 = Math.max(this.xf, this.yf) * 0.6;
        for (var vLN032 = 0; vLN032 < this.Mf.length; vLN032++) {
          this.Mf[vLN032].width = v163;
          this.Mf[vLN032].height = v163;
        }
        ;
        this.Gf.bg(this.xf, this.yf);
        this.zf.$f();
      };
      _0x9f75x7.prototype.cg = function (p317, p318) {
        if (_0x9f75x7.zd) {
          var v164 = p317 / 1000;
          var v165 = this.wf.width();
          var v166 = this.wf.height();
          for (var vLN033 = 0; vLN033 < this.Mf.length; vLN033++) {
            var v167 = vA6[vLN033 % vA6.length];
            var v168 = this.Mf[vLN033];
            var v169 = vLN033 / this.Mf.length * vO3.N;
            var v170 = v164 * 0.5 * 0.12;
            var v171 = Math.cos((v170 + v169) * 3) * Math.cos(v169) - Math.sin((v170 + v169) * 5) * Math.sin(v169);
            var v172 = Math.cos((v170 + v169) * 3) * Math.sin(v169) + Math.sin((v170 + v169) * 5) * Math.cos(v169);
            var v173 = 0.2 + Math.cos(v169 + v164 * 0.075) * 0.2;
            var v174 = v167.Pf * 255 << 16 & 16711680 | v167.Qf * 255 << 8 & 65280 | v167.Rf * 255 & 255;
            v168.tint = v174;
            v168.alpha = v173;
            v168.position.set(v165 * (0.2 + (v171 + 1) * 0.5 * 0.6), v166 * (0.1 + (v172 + 1) * 0.5 * 0.8));
          }
          ;
          var v175 = Math.max(v165, v166) * 0.05;
          for (var vLN034 = 0; vLN034 < this.Nf.length; vLN034++) {
            var v176 = this.Of[vLN034];
            var v177 = this.Nf[vLN034];
            var v178 = vO3.M * vLN034 / this.Nf.length;
            v176.Wf = 0.2 + (Math.cos(v164 * 0.01 + v178) + Math.cos(v164 * 0.02 * 17 + v178) * 0.2 + 1) * 0.6 / 2;
            v176.Xf = 0.1 + (Math.sin(v164 * 0.01 + v178) + Math.sin(v164 * 0.02 * 21 + v178) * 0.2 + 1) * 0.8 / 2;
            var v179 = v176.Wf;
            var v180 = v176.Xf;
            var v181 = vO4.$(Math.pow(Math.cos((v178 + v164 * 0.048) * 1.5), 6), 0, 0.9);
            var v182 = (0.4 + (1 + Math.sin(v178 + v164 * 0.12)) * 0.5 * 1.2) * 1.2;
            var v183 = v178 + v164 * 0.1;
            var v184 = v176.Pf * 255 << 16 & 16711680 | v176.Qf * 255 << 8 & 65280 | v176.Rf * 255 & 255;
            v177.alpha = v181;
            v177.tint = v184;
            v177.position.set(v165 * v179, v166 * v180);
            v177.rotation = v183;
            var v185 = v177.texture.width / v177.texture.height;
            v177.width = v182 * v175;
            v177.height = v182 * v175 * v185;
          }
          ;
          this.dg();
          this.Df.render(this.Ef, null, true);
        }
      };
      _0x9f75x7.prototype.eg = function () {
        if (vO3.L.bd.mc()) {
          var v186 = vO3.L.bd.jc().yb(vLN5);
          for (var vLN035 = 0; vLN035 < vLN5; vLN035++) {
            this.zf.fg(vLN035, v186[vLN035]);
          }
        } else {
          var v187 = vO4.da(0, 1);
          for (var vLN036 = 0; vLN036 < vLN5; vLN036++) {
            var v188 = (v187 + vLN036 / vLN5) % 1;
            var v189 = vO4.ga(Math.floor(v188 * 360), 0.85, 0.5);
            var v190 = v189[0] * 255 & 255 | v189[1] * 255 << 8 & 65280 | v189[2] * 255 << 16 & 16711680;
            var v191 = "000000" + v190.toString(16);
            v191 = "#" + v191.substring(v191.length - 6, v191.length);
            this.zf.gg(vLN036, v191);
          }
        }
      };
      _0x9f75x7.prototype.Zf = function () {
        var v192 = Math.min(this.xf, this.yf);
        var v193 = vO4.ja();
        for (var vLN037 = 0; vLN037 < vLN5; vLN037++) {
          var v194 = vLN037 / vLN5 * vO3.M;
          var v_0x9f75x20 = f39(v193, 0.12, v194);
          v_0x9f75x20.Ia = v_0x9f75x20.Ia * 4;
          v_0x9f75x20.Ja = v_0x9f75x20.Ja * 4;
          this.zf.hg(vLN037, (this.xf + v_0x9f75x20.Ia * v192) * 0.5, (this.yf + v_0x9f75x20.Ja * v192) * 0.5);
        }
      };
      _0x9f75x7.prototype.dg = function () {
        var v195 = Math.min(this.xf, this.yf);
        var v196 = vO4.ja();
        for (var vLN038 = 0; vLN038 < vLN5; vLN038++) {
          var v197 = vLN038 / vLN5 * vO3.M;
          var v_0x9f75x202 = f39(v196, 0.12, v197);
          this.zf.ig(vLN038, (this.xf + v_0x9f75x202.Ia * v195) * 0.5, (this.yf + v_0x9f75x202.Ja * v195) * 0.5);
        }
        ;
        this.zf.jg();
      };
      function f39(p319, p320, p321) {
        var v198 = p319 / 1000;
        return {
          Ia: (Math.cos(p320 * v198 + p321) + Math.cos(p320 * -32 * v198 + p321) * 0.4 + Math.cos(p320 * 7 * v198 + p321) * 0.7) * 0.8,
          Ja: (Math.sin(p320 * v198 + p321) + Math.sin(p320 * -32 * v198 + p321) * 0.4 + Math.sin(p320 * 7 * v198 + p321) * 0.7) * 0.8
        };
      }
      return _0x9f75x7;
    }();
    vO2.kg = function () {
      function f40() {}
      f40.lg = "consent_state_2";
      f40.mg = "showPlayerNames";
      f40.ng = "musicEnabled";
      f40.og = "sfxEnabled";
      f40.pg = "account_type";
      f40.qg = "gameMode";
      f40.rg = "nickname";
      f40.sg = "skin";
      f40.tg = "prerollCount";
      f40.ug = "shared";
      f40.vg = function (p322, p323, p324) {
        var v199 = new Date();
        v199.setTime(v199.getTime() + p324 * 86400000);
        var v200 = "expires=" + v199.toUTCString();
        document.cookie = p322 + "=" + p323 + "; " + v200;
      };
      f40.wg = function (p325) {
        var v201 = p325 + "=";
        for (var v202 = document.cookie.split(";"), vLN039 = 0; vLN039 < v202.length; vLN039++) {
          for (var v203 = v202[vLN039]; v203.charAt(0) == " ";) {
            v203 = v203.substring(1);
          }
          ;
          if (v203.indexOf(v201) == 0) {
            return v203.substring(v201.length, v203.length);
          }
        }
        ;
        return "";
      };
      return f40;
    }();
    vO3.xg = function () {
      function _0x9f75x19(f41, p326, p327) {
        var v204 = false;
        for (var v205 = p327.length, vLN040 = 0, v206 = v205 - 1; vLN040 < v205; v206 = vLN040++) {
          if (p327[vLN040][1] > p326 != p327[v206][1] > p326 && f41 < (p327[v206][0] - p327[vLN040][0]) * (p326 - p327[vLN040][1]) / (p327[v206][1] - p327[vLN040][1]) + p327[vLN040][0]) {
            v204 = !v204;
          }
        }
        ;
        return v204;
      }
      var vA7 = [[-28.06744, 64.95936], [-10.59082, 72.91964], [14.11773, 81.39558], [36.51855, 81.51827], [32.82715, 71.01696], [31.64063, 69.41897], [29.41419, 68.43628], [30.64379, 67.47302], [29.88281, 66.76592], [30.73975, 65.50385], [30.73975, 64.47279], [31.48682, 63.49957], [32.18994, 62.83509], [28.47726, 60.25122], [28.76221, 59.26588], [28.03711, 58.60833], [28.38867, 57.53942], [28.83955, 56.2377], [31.24512, 55.87531], [31.61865, 55.34164], [31.92627, 54.3037], [33.50497, 53.26758], [32.73926, 52.85586], [32.23389, 52.4694], [34.05762, 52.44262], [34.98047, 51.79503], [35.99121, 50.88917], [36.67236, 50.38751], [37.74902, 50.51343], [40.78125, 49.62495], [40.47363, 47.70976], [38.62799, 46.92028], [37.53193, 46.55915], [36.72182, 44.46428], [39.68218, 43.19733], [40.1521, 43.74422], [43.52783, 43.03678], [45.30762, 42.73087], [46.99951, 41.98399], [47.26318, 40.73061], [44.20009, 40.86309], [45.35156, 39.57182], [45.43945, 36.73888], [35.64789, 35.26481], [33.13477, 33.65121], [21.47977, 33.92486], [12.16268, 34.32477], [11.82301, 37.34239], [6.09112, 38.28597], [-1.96037, 35.62069], [-4.82156, 35.60443], [-7.6498, 35.26589], [-16.45237, 37.44851], [-28.06744, 64.95936]];
      return {
        yg: function (p328, p329) {
          return _0x9f75x19(p329, p328, vA7);
        }
      };
    }();
    vO2.zg = function () {
      function _0x9f75x19(f42) {
        var v207;
        v207 = f42 > 0 ? "+" + Math.floor(f42) : f42 < 0 ? "-" + Math.floor(f42) : "0";
        var v208;
        var v209 = Math.min(1.5, 0.5 + f42 / 600);
        if (f42 < 1) {
          v208 = "0xFFFFFF";
        } else if (f42 < 30) {
          var v210 = (f42 - 1) / 29;
          v208 = f44((1 - v210) * 1 + v210 * 0.96, (1 - v210) * 1 + v210 * 0.82, (1 - v210) * 1 + v210 * 0);
        } else if (f42 < 300) {
          var v211 = (f42 - 30) / 270;
          v208 = f44((1 - v211) * 0.96 + v211 * 0.93, (1 - v211) * 0.82 + v211 * 0.34, (1 - v211) * 0 + v211 * 0.25);
        } else if (f42 < 700) {
          var v212 = (f42 - 300) / 400;
          v208 = f44((1 - v212) * 0.93 + v212 * 0.98, (1 - v212) * 0.34 + v212 * 0, (1 - v212) * 0.25 + v212 * 0.98);
        } else {
          v208 = f44(0.98, 0, 0.98);
        }
        ;
        var v213 = Math.random();
        var v214 = 1 + Math.random() * 0.5;
        return new vF6(v207, v208, true, 0.5, v209, v213, v214);
      }
      function f43(p330, p331) {
        var v215;
        var v216;
        if (p331) {
          v215 = 1.3;
          v216 = f44(0.93, 0.34, 0.25);
        } else {
          v215 = 1.1;
          v216 = f44(0.96, 0.82, 0);
        }
        return new vF6(p330, v216, true, 0.5, v215, 0.5, 0.7);
      }
      function f44(p332, p333, p334) {
        return ((p332 * 255 & 255) << 16) + ((p333 * 255 & 255) << 8) + (p334 * 255 & 255);
      }
      var v217 = vO4.X(vO5.e.f, function () {
        vO5.e.f.call(this);
        this.Ag = [];
        this.Bg = 0;
      });
      v217.prototype.Cg = function (p335) {
        this.Bg += p335;
        if (this.Bg >= 1) {
          var v218 = Math.floor(this.Bg);
          this.Bg -= v218;
          var v_0x9f75x19 = _0x9f75x19(v218);
          this.addChild(v_0x9f75x19);
          this.Ag.push(v_0x9f75x19);
        }
      };
      v217.prototype.Dg = function (p336, p337) {
        f97("count", p336, p337);
        if (p336) {
          var vF43 = f43(vO4.O("index.game.floating.headshot"), true);
          this.addChild(vF43);
          this.Ag.push(vF43);
        } else {
          var vF432 = f43(vO4.O("index.game.floating.wellDone"), false);
          this.addChild(vF432);
          this.Ag.push(vF432);
        }
      };
      v217.prototype.jg = function (p338, p339) {
        var v219 = vO3.L.Fg.sf.Eg;
        var v220 = v219.Df.width / v219.Df.resolution;
        var v221 = v219.Df.height / v219.Df.resolution;
        for (var vLN041 = 0; vLN041 < this.Ag.length;) {
          var v222 = this.Ag[vLN041];
          v222.Gg = v222.Gg + p339 / 2000 * v222.Hg;
          v222.Ig = v222.Ig + p339 / 2000 * v222.Jg;
          v222.alpha = Math.sin(Math.PI * v222.Ig) * 0.5;
          v222.scale.set(v222.Gg);
          v222.position.x = v220 * (0.25 + v222.Kg * 0.5);
          v222.position.y = v222.Lg ? v221 * (1 - (1 + v222.Ig) * 0.5) : v221 * (1 - (0 + v222.Ig) * 0.5);
          if (v222.Ig > 1) {
            vO5.e.w.z(v222);
            this.Ag.splice(vLN041, 1);
            vLN041--;
          }
          vLN041++;
        }
      };
      var vF6 = function () {
        return vO4.X(vO5.e.n, function (p340, p341, p342, p343, p344, p345, p346) {
          vO5.e.n.call(this, p340, {
            fill: p341,
            fontFamily: "PTSans",
            fontSize: 36
          });
          this.anchor.set(0.5);
          this.Lg = p342;
          this.Gg = p343;
          this.Hg = p344;
          this.Kg = p345;
          this.Ig = 0;
          this.Jg = p346;
        });
      }();
      return v217;
    }();
    vO2.se = function () {
      function _0x9f75x19(f45, p347) {
        this.me = f45;
        this.Ga = p347;
      }
      return _0x9f75x19;
    }();
    vO2.Sc = {
      Mg: 0,
      Rc: 16
    };
    vO2.Ng = function () {
      function f46() {
        this.Og = vO2.Sc.Mg;
        this.Pg = 0;
        this.Qg = 500;
        this.Rg = 4000;
        this.Sg = 7000;
      }
      f46.Tg = 0;
      f46.prototype.Ug = function () {
        return this.Qg * 1.02;
      };
      return f46;
    }();
    vO2.Vg = function () {
      function f47(p348) {
        this.wf = p348;
        this.Wb = p348.get()[0];
        this.Df = new vO5.e.i({
          view: this.Wb,
          backgroundColor: vLN042,
          antialias: true
        });
        this.Ef = new vO5.e.f();
        this.Ef.sortableChildren = true;
        this.Wg = Math.floor(Math.random() * 360);
        this.Xg = 0;
        this.Yg = 0;
        this.Zg = 15;
        this.$g = 0.5;
        this._g = 0;
        this.ah = new vO2.bh();
        this.ch = new vO5.e.j();
        this.dh = new vO5.e.f();
        this.eh = new vO5.e.f();
        this.eh.sortableChildren = true;
        this.fh = new vO5.e.f();
        this.gh = new vO5.e.f();
        this.gh.sortableChildren = true;
        this.hh = new vO5.e.f();
        this.ih = new vF7();
        this.jh = new vF8();
        this.kh = new vF10();
        this.lh = new vO2.zg();
        this.mh = new vO5.e.m();
        this.nh = {
          x: 0,
          y: 0
        };
        this.za();
      }
      var vLN042 = 0;
      f47.prototype.za = function () {
        this.Df.backgroundColor = vLN042;
        this.ah.Jf.zIndex = 10;
        this.Ef.addChild(this.ah.Jf);
        this.ch.zIndex = 20;
        this.Ef.addChild(this.ch);
        this.dh.zIndex = 5000;
        this.Ef.addChild(this.dh);
        this.eh.zIndex = 5100;
        this.Ef.addChild(this.eh);
        this.fh.zIndex = 10000;
        this.Ef.addChild(this.fh);
        this.mh.texture = vO3.L.Oe.oh;
        this.mh.anchor.set(0.5);
        this.mh.zIndex = 1;
        this.gh.addChild(this.mh);
        this.hh.alpha = 0.6;
        this.hh.zIndex = 2;
        this.gh.addChild(this.hh);
        this.lh.zIndex = 3;
        this.gh.addChild(this.lh);
        this.ih.alpha = 0.8;
        this.ih.zIndex = 4;
        this.gh.addChild(this.ih);
        this.jh.zIndex = 5;
        this.gh.addChild(this.jh);
        this.kh.zIndex = 6;
        this.gh.addChild(this.kh);
        this.$f();
      };
      f47.prototype.$f = function () {
        var v223 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        var v224 = this.wf.width();
        var v225 = this.wf.height();
        this.Df.resize(v224, v225);
        this.Df.resolution = v223;
        this.Wb.width = v223 * v224;
        this.Wb.height = v223 * v225;
        this.$g = Math.min(Math.min(v224, v225), Math.max(v224, v225) * 0.625);
        this.mh.position.x = v224 / 2;
        this.mh.position.y = v225 / 2;
        this.mh.width = v224;
        this.mh.height = v225;
        this.ih.position.x = 60 + (Z.locals.streamer ? Z.positions.m : 0);
        this.ih.position.y = 60;
        this.jh.position.x = 110;
        this.jh.position.y = 10;
        this.kh.position.x = v224 - 225 - (Z.locals.streamer ? Z.positions.l : 0);
        this.kh.position.y = 1;
      };
      f47.prototype.jg = function (p349, p350) {
        this.Zg = 15;
        this.dh.removeChildren();
        this.eh.removeChildren();
        this.fh.removeChildren();
        this.hh.removeChildren();
        this.ah.ph(p349.Og === vO2.Sc.Mg ? vO3.L.Oe.qh : vO3.L.Oe.rh);
        var v226 = this.ch;
        v226.clear();
        v226.lineStyle(0.2, 16711680, 0.3);
        v226.drawCircle(0, 0, p349.Qg);
        v226.endFill();
        this.kh.sh = p350;
        this.hh.visible = p350;
      };
      f47.prototype.cg = function (p351, p352) {
        if (!(this.Df.width <= 5)) {
          var v227 = vO3.L.uh.th;
          var v228 = this.Df.width / this.Df.resolution;
          var v229 = this.Df.height / this.Df.resolution;
          this.Zg = vO4._(this.Zg, vO3.L.uh.vh, p352, 0.002);
          var v230 = this.$g / (this.Zg * Zzm);
          var v231 = vO3.L.uh.th.vd[vO2.xd.Hd];
          var v232 = v231 != null && v231.zd;
          this._g = vO4.$(this._g + p352 / 1000 * ((v232 ? 1 : 0) * 0.1 - this._g), 0, 1);
          this.mh.alpha = this._g;
          this.Wg = this.Wg + p352 * 0.01;
          if (this.Wg > 360) {
            this.Wg = this.Wg % 360;
          }
          this.Xg = Math.sin(p351 / 1200 * 2 * Math.PI);
          var v233 = v227.wh();
          this.nh.x = vO4.aa(this.nh.x, v233.Ia, p352, 0.5, 33.333);
          this.nh.y = vO4.aa(this.nh.y, v233.Ja, p352, 0.5, 33.333);
          var v234 = v228 / v230 / 2;
          var v235 = v229 / v230 / 2;
          vO3.L.uh.xh(this.nh.x - v234 * 1.3, this.nh.x + v234 * 1.3, this.nh.y - v235 * 1.3, this.nh.y + v235 * 1.3);
          this.ah.jg(this.nh.x, this.nh.y, v234 * 2, v235 * 2);
          var v236 = vO3.L.uh.yh.Qg;
          this.Ef.scale.x = v230;
          this.Ef.scale.y = v230;
          this.Ef.position.x = v228 / 2 - this.nh.x * v230;
          this.Ef.position.y = v229 / 2 - this.nh.y * v230;
          var v237 = Math.hypot(v233.Ia, v233.Ja);
          if (v237 > v236 - 10) {
            this.Yg = vO4.$(1 + (v237 - v236) / 10, 0, 1);
            var v238 = Math.cos(this.Wg * vO3.M / 360) * (1 - this.Yg) + this.Yg * 1;
            var v239 = Math.sin(this.Wg * vO3.M / 360) * (1 - this.Yg);
            var v240 = (Math.atan2(v239, v238) + vO3.M) % vO3.M * 360 / vO3.M;
            var v241 = this.Yg * (0.5 + this.Xg * 0.5);
            var v242 = vO4.ga(Math.floor(v240), 1, 0.75 - this.Yg * 0.25);
            this.ah.Wc(v242[0], v242[1], v242[2], 0.1 + v241 * 0.2);
          } else {
            this.Yg = 0;
            var v243 = vO4.ga(Math.floor(this.Wg), 1, 0.75);
            this.ah.Wc(v243[0], v243[1], v243[2], 0.1);
          }
          ;
          for (var vLN043 = 0; vLN043 < this.hh.children.length; vLN043++) {
            var v244 = this.hh.children[vLN043];
            v244.position.x = v228 / 2 - (this.nh.x - v244.zh.x) * v230;
            v244.position.y = v229 / 2 - (this.nh.y - v244.zh.y) * v230;
          }
          ;
          this.ih.Ah.position.x = v233.Ia / v236 * this.ih.Bh;
          this.ih.Ah.position.y = v233.Ja / v236 * this.ih.Bh;
          this.jh.Ch(p351);
          this.lh.jg(p351, p352);
          this.Df.render(this.Ef, null, true);
          this.Df.render(this.gh, null, false);
          this.ih.Ah.x0 = this.ih.Ah.x0 || -10000;
          this.ih.Ah.y0 = this.ih.Ah.y0 || -10000;
          if (Math.abs(this.ih.Ah.x - this.ih.Ah.x0) > 2 || Math.abs(this.ih.Ah.y - this.ih.Ah.y0) > 2) {
            this.ih.Ah.x0 = Math.round(this.ih.Ah.x);
            this.ih.Ah.y0 = Math.round(this.ih.Ah.y);
            vF16.s(1, [this.ih.Ah.x0, this.ih.Ah.y0]);
          }
        }
      };
      f47.prototype.Dh = function (p353, p354) {
        p354.Eh.Uc.gd().zIndex = (p353 + 2147483648) / 4294967296 * 5000;
        this.dh.addChild(p354.Eh.Vc.gd());
        this.eh.addChild(p354.Eh.Uc.gd());
      };
      f47.prototype.Fh = function (p355, p356, p357) {
        p356.Fc.zIndex = vO3.L.uh.yh.Pg ? 0 : 10 + (p355 + 32768) / 65536 * 5000;
        this.fh.addChild(p356.Fc);
        if (p355 !== vO3.L.uh.yh.Pg) {
          this.hh.addChild(p357);
        }
      };
      var vF7 = function () {
        return vO4.X(vO5.e.f, function () {
          vO5.e.f.call(this);
          this.Bh = 40;
          this.Gh = new vO5.e.m();
          this.Gh.anchor.set(0.5);
          this.Ah = new vO5.e.j();
          this.Zf = new vO5.e.j();
          var v245 = new vO5.e.j();
          this.zClock = new PIXI.Sprite.fromImage(zUrl + "/images/Clock.PNG");
          v245.beginFill("black", 0.4);
          v245.drawCircle(0, 0, this.Bh);
          v245.endFill();
          v245.lineStyle(2, 16225317);
          v245.drawCircle(0, 0, this.Bh);
          v245.moveTo(0, -this.Bh);
          v245.lineTo(0, +this.Bh);
          v245.moveTo(-this.Bh, 0);
          v245.lineTo(+this.Bh, 0);
          v245.endFill();
          this.Gh.alpha = 0.5;
          this.Ah.zIndex = 2;
          this.Ah.alpha = 0.9;
          this.Ah.beginFill(16225317);
          this.Ah.drawCircle(0, 0, this.Bh * 0.06);
          this.Ah.endFill();
          this.Ah.lineStyle(1, "black");
          this.Ah.drawCircle(0, 0, this.Bh * 0.06);
          this.Ah.endFill();
          this.Zf.zIndex = 3;
          this.Zf.alpha = 0.9;
          this.Zf.beginFill(1811741);
          this.Zf.drawCircle(0, 0, this.Bh * 0.06);
          this.Zf.endFill();
          this.Zf.lineStyle(1, "black");
          this.Zf.drawCircle(0, 0, this.Bh * 0.06);
          this.Zf.endFill();
          this.addChild(v245);
          this.addChild(this.Gh);
          this.addChild(this.Ah);
          this.addChild(this.Zf);
          this.zClock.width = 100;
          this.zClock.height = 100;
          this.zClock.x = -50;
          this.zClock.y = -50;
          this.zClock.zIndex = 10;
          this.addChild(this.zClock);
          window._x7 = this;
          const v246 = new PIXI.TextStyle({
            align: "center",
            fill: "#f4d100",
            fontSize: 12,
            fontWeight: "bold",
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true
          });
          const v247 = new PIXI.TextStyle({
            align: "center",
            fill: "#ed563f",
            fontSize: 12,
            fontWeight: "bold",
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: true
          });
          this.container_count = new PIXI.Container();
          this.container_count.x = -45;
          this.container_count.y = -52;
          this.hsLabel = new PIXI.Text("HS", v247);
          this.hsLabel.anchor.set(0.5);
          this.klLabel = new PIXI.Text("KILL", v246);
          this.klLabel.anchor.set(0.5);
          this.gHsVal = new PIXI.Text("0", v247);
          this.gHsVal.anchor.set(0.5);
          this.tHsVal = new PIXI.Text("0", v247);
          this.tHsVal.anchor.set(0.5);
          this.gKlVal = new PIXI.Text("0", v246);
          this.gKlVal.anchor.set(0.5);
          this.tKlVal = new PIXI.Text("0", v246);
          this.tKlVal.anchor.set(0.5);
          this.hsLabel.x = 22;
          this.hsLabel.y = 116;
          this.klLabel.x = 67;
          this.klLabel.y = 116;
          this.gHsVal.x = 22;
          this.gHsVal.y = 131;
          this.gKlVal.x = 67;
          this.gKlVal.y = 131;
          this.tHsVal.x = 22;
          this.tHsVal.y = 151;
          this.tKlVal.x = 67;
          this.tKlVal.y = 151;
          if (!true) {
            this.tHsVal.alpha = 0;
            this.tKlVal.alpha = 0;
          }
          this.container_count.addChild(this.hsLabel);
          this.container_count.addChild(this.gHsVal);
          this.container_count.addChild(this.tHsVal);
          this.container_count.addChild(this.klLabel);
          this.container_count.addChild(this.gKlVal);
          this.container_count.addChild(this.tKlVal);
          this.addChild(this.container_count);
          this.b2 = new PIXI.Graphics();
          this.b2.lineStyle(2, 13466405);
          this.b2.drawRoundedRect(-5, 106, 100, 56, 10);
          this.container_count.addChild(this.b2);
          this.b3 = new PIXI.Graphics();
          this.b3.lineStyle(2, 13466405);
          this.b3.drawRect(-4, 141, 196, 0);
          this.container_count.addChild(this.b3);
          this.headshots_container = new PIXI.Container();
          this.headshots_container.x = -50;
          this.headshots_container.y = 120;
          const v248 = new PIXI.TextStyle({
            align: "left",
            fill: "#ed563f",
            fontSize: 13,
            fontWeight: "bold",
            lineJoin: "round",
            whiteSpace: "normal",
            wordWrap: false
          });
          this.topHS = new PIXI.Text("Top (headShots):", v248);
          this.topHS.x = 0;
          this.topHS.y = 0;
          this.addChild(this.headshots_container);
          this.headshots_container.addChild(this.topHS);
          this.topHSPlayers = [];
          this.killMessages = [];
          for (let vLN13 = 1; vLN13 < 6; vLN13++) {
            let vO22 = {
              ig: new vO5.e.n(vLN13, {
                fontFamily: "PTSans",
                fontSize: 11,
                fontWeight: "bold",
                fill: "white"
              })
            };
            vO22.ig.anchor.x = 1;
            vO22.ig.position.x = 0;
            vO22.ig.position.y = vLN13 * 20;
            this.headshots_container.addChild(vO22.ig);
            vO22.jg = new vO5.e.n("--", {
              fontFamily: "PTSans",
              fontSize: 11,
              fontWeight: "bold",
              fill: "white"
            });
            vO22.jg.anchor.x = 0;
            vO22.jg.position.x = 5;
            vO22.jg.position.y = vLN13 * 20;
            this.headshots_container.addChild(vO22.jg);
            vO22.kg = new vO5.e.n("", {
              fontFamily: "PTSans",
              fontSize: 11,
              fontWeight: "bold",
              fill: "white"
            });
            vO22.kg.anchor.x = 1;
            vO22.kg.position.x = 110;
            vO22.kg.position.y = vLN13 * 20;
            this.headshots_container.addChild(vO22.kg);
            this.topHSPlayers.push(vO22);
          }
          ;
          for (let vLN14 = 1; vLN14 < 11; vLN14++) {
            let vO23 = {
              ig: new vO5.e.n("", {
                fontFamily: "PTSans",
                fontSize: 12,
                fontWeight: "bold",
                fill: "green"
              })
            };
            vO23.ig.anchor.x = 0;
            vO23.ig.position.x = -10;
            vO23.ig.position.y = 65 + vLN14 * 55;
            this.headshots_container.addChild(vO23.ig);
            vO23.jg = new vO5.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fontWeight: "bold",
              fill: "#c10000"
            });
            vO23.jg.anchor.x = 0;
            vO23.jg.position.x = 8;
            vO23.jg.position.y = 80 + vLN14 * 55;
            this.headshots_container.addChild(vO23.jg);
            vO23.kg = new vO5.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fontWeight: "bold",
              fill: "white"
            });
            vO23.kg.anchor.x = 0;
            vO23.kg.position.x = 8;
            vO23.kg.position.y = 95 + vLN14 * 55;
            this.headshots_container.addChild(vO23.kg);
            this.killMessages.push(vO23);
          }
        });
      }();
      var vF8 = function () {
        var v249 = vO4.X(vO5.e.f, function () {
          vO5.e.f.call(this);
          this.Hh = {};
        });
        var vA8 = [30, 30, 30, 80, 40, 20, 30];
        v249.prototype.Ch = function (p358) {
          var v250 = 0.5 + Math.cos(vO3.M * (p358 / 1000 / 1.6)) * 0.5;
          for (var v251 in this.Hh) {
            var v252 = this.Hh[v251];
            var v253 = v252.Ih;
            v252.alpha = 1 - v253 + v253 * v250;
          }
        };
        v249.prototype.jg = function (p359) {
          for (var v254 in this.Hh) {
            if (p359[v254] == null || !p359[v254].zd) {
              vO5.e.w.z(this.Hh[v254]);
              delete this.Hh[v254];
            }
          }
          ;
          var vLN044 = 0;
          for (var v255 in p359) {
            var v256 = p359[v255];
            if (v256.zd) {
              var v257 = this.Hh[v255];
              if (!v257) {
                var v258 = vO3.L.bd.jc().Hb(v256.Ed).Mb;
                v257 = new vF9();
                v257.texture = v258.Wa();
                v257.width = 40;
                v257.height = 40;
                this.Hh[v255] = v257;
                this.addChild(v257);
                v257.tc = new PIXI.Text("88", v258.zt);
                v257.tc.anchor.set(0.5);
                v257.tc.y = 74;
                v257.tc.x = 32;
                v257.addChild(v257.tc);
              }
              ;
              v257.Ih = v256.Fd;
              v257.tc.text = Math.floor(vA8[v255] / 99 * (99 - v256.g));
              v257.position.x = (Z.locals.streamer ? Z.positions.m : 0) + vLN044;
              vLN044 += 40;
            }
          }
        };
        var vF9 = function () {
          return vO4.X(vO5.e.m, function () {
            vO5.e.m.call(this);
            this.Ih = 0;
          });
        }();
        return v249;
      }();
      var vF10 = function () {
        var v259 = vO4.X(vO5.e.f, function () {
          vO5.e.f.call(this);
          this.sh = true;
          this.Jh = 12;
          this.Kh = 9;
          this.Ag = [];
          for (var vLN045 = 0; vLN045 < 14; vLN045++) {
            this.Lh();
          }
        });
        v259.prototype.jg = function (p360) {
          var v260 = vO3.L.uh.yh.Og === vO2.Sc.Rc;
          var vLN046 = 0;
          var vLN047 = 0;
          if (vLN047 >= this.Ag.length) {
            this.Lh();
          }
          this.Ag[vLN047].Mh(1, "white");
          this.Ag[vLN047].Nh("", vO4.O("index.game.leader.top10"), `(${vO3.L.uh.Oh} online)`);
          this.Ag[vLN047].position.y = vLN046;
          vLN046 += this.Jh;
          vLN047 += 1;
          if (p360.Ph.length > 0) {
            vLN046 += this.Kh;
          }
          for (var vLN048 = 0; vLN048 < p360.Ph.length; vLN048++) {
            var v261 = p360.Ph[vLN048];
            var v262 = vO3.L.bd.jc().Bb(v261.Qh);
            var vLS = "";
            var v263 = vO3.L.bd.nc().textDict[v262.Ib];
            if (v263 != null) {
              vLS = vO4.P(v263);
            }
            if (vLN047 >= this.Ag.length) {
              this.Lh();
            }
            this.Ag[vLN047].Mh(0.8, v262.Jb.Lb);
            this.Ag[vLN047].Nh(`${vLN048 + 1}`, vLS, `${Math.floor(v261.Rh)}`);
            this.Ag[vLN047].position.y = vLN046;
            vLN046 += this.Jh;
            vLN047 += 1;
          }
          ;
          if (p360.Sh.length > 0) {
            vLN046 += this.Kh;
          }
          for (var vLN049 = 0; vLN049 < p360.Sh.length; vLN049++) {
            var v264 = p360.Sh[vLN049];
            var v265 = vO3.L.uh.yh.Pg === v264.Th;
            var vUndefined = undefined;
            var vUndefined2 = undefined;
            if (v265) {
              vUndefined = "white";
              vUndefined2 = vO3.L.uh.th.Uh.Ea;
            } else {
              var v266 = vO3.L.uh.Vh[v264.Th];
              if (v266 != null) {
                vUndefined = v260 ? vO3.L.bd.jc().Bb(v266.Uh.Wh).Jb.Lb : vO3.L.bd.jc().Ab(v266.Uh.Xh).Lb;
                vUndefined2 = this.sh ? v266.Uh.Ea : "---";
              } else {
                vUndefined = "gray";
                vUndefined2 = "?";
              }
            }
            ;
            if (v265) {
              vLN046 += this.Kh;
            }
            if (vLN047 >= this.Ag.length) {
              this.Lh();
            }
            this.Ag[vLN047].Mh(v265 ? 1 : 0.8, vUndefined);
            this.Ag[vLN047].Nh(`${vLN049 + 1}`, vUndefined2, `${Math.floor(v264.Rh)}`);
            this.Ag[vLN047].position.y = vLN046;
            vLN046 += this.Jh;
            vLN047 += 1;
            if (v265) {
              vLN046 += this.Kh;
            }
          }
          ;
          for (vO3.L.uh.Yh > p360.Sh.length && (vLN046 += this.Kh, vLN047 >= this.Ag.length && this.Lh(), this.Ag[vLN047].Mh(1, "white"), this.Ag[vLN047].Nh(`${vO3.L.uh.Yh}`, vO3.L.uh.th.Uh.Ea, `${Math.floor(vO3.L.uh.th.Rh)}`), this.Ag[vLN047].position.y = vLN046, vLN046 += this.Jh, vLN047 += 1, vLN046 += this.Kh); this.Ag.length > vLN047;) {
            vO5.e.w.z(this.Ag.pop());
          }
        };
        v259.prototype.Lh = function () {
          var v267 = new vF11();
          v267.position.y = 0;
          if (this.Ag.length > 0) {
            v267.position.y = this.Ag[this.Ag.length - 1].position.y + this.Jh;
          }
          this.Ag.push(v267);
          this.addChild(v267);
        };
        var vF11 = function () {
          var v268 = vO4.X(vO5.e.f, function () {
            vO5.e.f.call(this);
            this.Zh = new vO5.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.Zh.anchor.x = 1;
            this.Zh.position.x = 30;
            this.addChild(this.Zh);
            this.$h = new vO5.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this.$h.anchor.x = 0;
            this.$h.position.x = 35;
            this.addChild(this.$h);
            this._h = new vO5.e.n("", {
              fontFamily: "PTSans",
              fontSize: 12,
              fill: "white"
            });
            this._h.anchor.x = 1;
            this._h.position.x = 220;
            this.addChild(this._h);
          });
          v268.prototype.Nh = function (p361, p362, p363) {
            this.Zh.text = p361;
            this._h.text = p363;
            var vP362 = p362;
            for (this.$h.text = vP362; this.$h.width > 100;) {
              vP362 = vP362.substring(0, vP362.length - 1);
              this.$h.text = vP362 + "..";
            }
          };
          v268.prototype.Mh = function (p364, p365) {
            this.Zh.alpha = p364;
            this.Zh.style.fill = p365;
            this.$h.alpha = p364;
            this.$h.style.fill = p365;
            this._h.alpha = p364;
            this._h.style.fill = p365;
          };
          return v268;
        }();
        return v259;
      }();
      return f47;
    }();
    vO2.ai = function () {
      function f48(p366) {
        this.uh = p366;
        this.bi = [];
        this.ci = 0;
      }
      f48.prototype.di = function (p367) {
        this.bi.push(new vO2.oa(new vO2.na(p367)));
      };
      f48.prototype.ei = function () {
        this.bi = [];
        this.ci = 0;
      };
      f48.prototype.fi = function () {
        for (var vLN050 = 0; vLN050 < 10; vLN050++) {
          if (this.bi.length === 0) {
            return;
          }
          ;
          var v269 = this.bi.shift();
          try {
            this.gi(v269);
          } catch (e16) {
            throw e16;
          }
        }
      };
      f48.prototype.gi = function (p368) {
        switch (p368.ra(0) & 255) {
          case 0:
            this.hi(p368);
            return;
          case 1:
            this.ii(p368);
            return;
          case 2:
            this.ji(p368);
            return;
          case 3:
            this.ki(p368);
            return;
          case 4:
            this.li(p368);
            return;
          case 5:
            this.mi(p368);
            return;
        }
      };
      f48.prototype.hi = function (p369) {
        this.uh.yh.Og = p369.ra();
        var v270 = p369.sa();
        this.uh.yh.Pg = v270;
        this.uh.th.Uh.re = v270;
        this.uh.yh.Qg = p369.ua();
        this.uh.yh.Rg = p369.ua();
        this.uh.yh.Sg = p369.ua();
        vO3.L.Fg.sf.Eg.jg(this.uh.yh, vO3.L.Fg.oi.ni());
      };
      f48.prototype.ii = function (p370) {
        var v271;
        var v272 = this.ci++;
        var v273 = p370.sa();
        v271 = this.pi(p370);
        for (var vLN051 = 0; vLN051 < v271; vLN051++) {
          this.qi(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN052 = 0; vLN052 < v271; vLN052++) {
          this.ri(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN053 = 0; vLN053 < v271; vLN053++) {
          this.si(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN054 = 0; vLN054 < v271; vLN054++) {
          this.ti(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN055 = 0; vLN055 < v271; vLN055++) {
          this.vi(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN056 = 0; vLN056 < v271; vLN056++) {
          this.wi(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN057 = 0; vLN057 < v271; vLN057++) {
          this.xi(p370);
        }
        ;
        v271 = this.pi(p370);
        for (var vLN058 = 0; vLN058 < v271; vLN058++) {
          this.yi(p370);
        }
        ;
        if (v272 > 0) {
          this.zi(p370);
        }
        this.uh.Ai(v272, v273);
      };
      f48.prototype.ti = function (p371) {
        var v274 = new vO2.Ci.Bi();
        v274.re = p371.sa();
        v274.Wh = this.uh.yh.Og === vO2.Sc.Rc ? p371.ra() : vO2.Ng.Tg;
        v274.Xh = p371.sa();
        v274.Di = p371.sa();
        v274.Ei = p371.sa();
        v274.Fi = p371.sa();
        v274.Gi = p371.sa();
        for (var v275 = p371.ra(), vLS2 = "", vLN059 = 0; vLN059 < v275; vLN059++) {
          vLS2 += String.fromCharCode(p371.sa());
        }
        ;
        v274.Ea = vLS2;
        if (this.uh.yh.Pg === v274.re) {
          this.uh.th.Hi(v274);
        } else {
          var v276 = this.uh.Vh[v274.re];
          if (v276 != null) {
            v276.Ii();
          }
          var v277 = new vO2.Ci(this.uh.yh);
          v277.Ji(vO3.L.Fg.sf.Eg);
          this.uh.Vh[v274.re] = v277;
          v277.Hi(v274);
        }
      };
      f48.prototype.vi = function (p372) {
        var v278 = p372.sa();
        var v279 = p372.ra();
        var v280 = !!(v279 & 1);
        var v281 = !!(v279 & 2);
        var vLN060 = 0;
        if (v280) {
          vLN060 = p372.sa();
        }
        var v282 = this.Ki(v278);
        if (_typeof(v282) !== "undefined" && (v282.Li = false, v282.Mi)) {
          var v283 = this.Ki(v278);
          if (v280 && _typeof(v283) !== "undefined" && v283.Mi) {
            if (vLN060 === this.uh.yh.Pg) {
              var v284 = this.uh.th.wh();
              var v285 = v282.Ni(v284.Ia, v284.Ja);
              Math.max(0, 1 - v285.Oi / (this.uh.vh * 0.5));
              if (v285.Oi < this.uh.vh * 0.5) {
                vO3.L.Fg.sf.Eg.lh.Dg(v281, v282);
              }
            } else if (v278 === this.uh.yh.Pg) {
              ;
            } else {
              var v286 = this.uh.th.wh();
              var v287 = v282.Ni(v286.Ia, v286.Ja);
              Math.max(0, 1 - v287.Oi / (this.uh.vh * 0.5));
            }
          } else if (v278 === this.uh.yh.Pg) {
            ;
          } else {
            var v288 = this.uh.th.wh();
            var v289 = v282.Ni(v288.Ia, v288.Ja);
            Math.max(0, 1 - v289.Oi / (this.uh.vh * 0.5));
          }
        }
      };
      f48.prototype.yi = function (p373) {
        var v290 = p373.sa();
        var v291 = v290 === this.uh.yh.Pg ? null : this.uh.Vh[v290];
        var v292 = p373.ra();
        var v293 = !!(v292 & 1);
        if (v292 & 2) {
          var v294 = p373.ua();
          if (v291) {
            v291.Pi(v294);
          }
        }
        ;
        var v295 = this.Qi(p373.ra(), p373.ra(), p373.ra());
        var v296 = this.Qi(p373.ra(), p373.ra(), p373.ra());
        if (v291) {
          v291.Ri(v295, v296, v293);
          var v297 = this.uh.th.wh();
          var v298 = v291.wh();
          var v299 = Math.max(0, 1 - Math.hypot(v297.Ia - v298.Ia, v297.Ja - v298.Ja) / (this.uh.vh * 0.5));
          vO3.L.Si.nf(v299, v290, v293);
        }
        ;
        var v300 = this.pi(p373);
        if (v291) {
          for (var v301 in v291.vd) {
            var v302 = v291.vd[v301];
            if (v302) {
              v302.zd = false;
            }
          }
        }
        ;
        for (var vLN061 = 0; vLN061 < v300; vLN061++) {
          var v303 = p373.ra();
          var v304 = p373.ra();
          if (v291) {
            var v305 = v291.vd[v303];
            v305 ||= v291.vd[v303] = new vO2.xd(v303);
            v305.zd = true;
            v305.Fd = Math.min(1, Math.max(0, v304 / 100));
          }
        }
      };
      f48.prototype.zi = function (p374) {
        var v306 = this.uh.th;
        var v307 = p374.ra();
        var v308 = !!(v307 & 1);
        var v309 = !!(v307 & 2);
        var v310 = !!(v307 & 4);
        if (v309) {
          var v311 = v306.Rh;
          v306.Pi(p374.ua());
          v311 = v306.Rh - v311;
          if (v311 > 0) {
            vO3.L.Fg.sf.Eg.lh.Cg(v311);
          }
        }
        ;
        if (v310) {
          this.uh.Ti = p374.ua();
        }
        var v312 = this.Qi(p374.ra(), p374.ra(), p374.ra());
        var v313 = this.Qi(p374.ra(), p374.ra(), p374.ra());
        v306.Ri(v312, v313, v308);
        vO3.L.Si.nf(0.5, this.uh.yh.Pg, v308);
        var v314 = this.pi(p374);
        for (var v315 in v306.vd) {
          var v316 = v306.vd[v315];
          if (v316) {
            v316.zd = false;
          }
        }
        ;
        for (var vLN062 = 0; vLN062 < v314; vLN062++) {
          var v317 = p374.ra();
          var v318 = p374.ra();
          var v319 = v306.vd[v317];
          if (!v319) {
            v319 = new vO2.xd(v317);
            v306.vd[v317] = v319;
          }
          v319.zd = true;
          v319.g = v318;
          v319.Fd = Math.min(1, Math.max(0, v318 / 100));
        }
        ;
        vO3.L.Fg.sf.Eg.jh.jg(v306.vd);
      };
      f48.prototype.wi = function (p375) {
        var vThis14 = this;
        var v320 = p375.sa();
        var v321 = this.Ki(v320);
        var v322 = p375.ua();
        var v323 = this.pi(p375);
        if (v321) {
          v321.Pi(v322);
          v321.Ui(function () {
            return vThis14.Qi(p375.ra(), p375.ra(), p375.ra());
          }, v323);
          v321.Bd(true);
          var v324 = this.uh.th.wh();
          var v325 = v321.wh();
          var v326 = Math.max(0, 1 - Math.hypot(v324.Ia - v325.Ia, v324.Ja - v325.Ja) / (this.uh.vh * 0.5));
          vO3.L.Si.lf(v326, v320);
        } else {
          for (var vLN063 = 0; vLN063 < v323 * 6; vLN063++) {
            p375.ra();
          }
        }
      };
      f48.prototype.xi = function (p376) {
        var v327 = p376.sa();
        var v328 = this.uh.Vh[v327];
        if (v328 && v328.Li) {
          v328.Bd(false);
        }
        vO3.L.Si.mf(v327);
      };
      f48.prototype.qi = function (p377) {
        var v329 = new vO2.Vi.Bi();
        v329.re = p377.ta();
        v329.Wh = this.uh.yh.Og === vO2.Sc.Rc ? p377.ra() : vO2.Ng.Tg;
        v329.Wi = this.Qi(p377.ra(), p377.ra(), p377.ra());
        v329.Xh = p377.ra();
        var v330 = this.uh.Xi[v329.re];
        if (v330 != null) {
          v330.Ii();
        }
        var v331 = new vO2.Vi(v329, vO3.L.Fg.sf.Eg);
        v331.Yi(this.Zi(v329.re), this.$i(v329.re), true);
        this.uh.Xi[v329.re] = v331;
      };
      f48.prototype.ri = function (p378) {
        var v332 = p378.ta();
        var v333 = this.uh.Xi[v332];
        if (v333) {
          v333._i = 0;
          v333.aj = v333.aj * 1.5;
          v333.bj = true;
        }
      };
      f48.prototype.si = function (p379) {
        var v334 = p379.ta();
        var v335 = p379.sa();
        var v336 = this.uh.Xi[v334];
        if (v336) {
          v336._i = 0;
          v336.aj = v336.aj * 0.1;
          v336.bj = true;
          var v337 = this.Ki(v335);
          if (v337 && v337.Mi) {
            this.uh.yh.Pg;
            var v338 = v337.wh();
            v336.Yi(v338.Ia, v338.Ja, false);
          }
        }
      };
      var vA9 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
      f48.prototype.ji = function (p380) {
        var v339 = vO3.L.bd.pc().Xb;
        var v340 = v339.getImageData(0, 0, 80, 80);
        var v341 = vA9[0];
        var v342 = 80 - v341;
        var vLN064 = 0;
        for (var vLN065 = 0; vLN065 < 628; vLN065++) {
          var v343 = p380.ra();
          for (var vLN066 = 0; vLN066 < 8; vLN066++) {
            var v344 = (v343 >> vLN066 & 1) != 0;
            var v345 = (v341 + vLN064 * 80) * 4;
            if (v344) {
              v340.data[v345] = 255;
              v340.data[v345 + 1] = 255;
              v340.data[v345 + 2] = 255;
              v340.data[v345 + 3] = 255;
            } else {
              v340.data[v345 + 3] = 0;
            }
            if (++v341 >= v342 && ++vLN064 < 80) {
              v341 = vA9[vLN064];
              v342 = 80 - v341;
            }
          }
        }
        ;
        v339.putImageData(v340, 0, 0);
        var v346 = vO3.L.Fg.sf.Eg.ih.Gh;
        v346.texture = vO3.L.bd.pc().Ga;
        v346.texture.update();
      };
      f48.prototype.li = function (p381) {
        p381.ta();
      };
      f48.prototype.mi = function (p382) {
        removeJoy();
        this.uh.cj();
      };
      f48.prototype.ki = function (p383) {
        this.uh.Oh = p383.sa();
        this.uh.Yh = p383.sa();
        var v347 = new vO2.dj();
        v347.Sh = [];
        for (var v348 = p383.ra(), vLN067 = 0; vLN067 < v348; vLN067++) {
          var v349 = p383.sa();
          var v350 = p383.ua();
          v347.Sh.push(vO2.dj.ej(v349, v350));
        }
        ;
        v347.Ph = [];
        if (this.uh.yh.Og === vO2.Sc.Rc) {
          for (var v351 = p383.ra(), vLN068 = 0; vLN068 < v351; vLN068++) {
            var v352 = p383.ra();
            var v353 = p383.ua();
            v347.Ph.push(vO2.dj.fj(v352, v353));
          }
        }
        ;
        vO3.L.Fg.sf.Eg.kh.jg(v347);
      };
      f48.prototype.Ki = function (p384) {
        if (p384 === this.uh.yh.Pg) {
          return this.uh.th;
        } else {
          return this.uh.Vh[p384];
        }
      };
      f48.prototype.Qi = function (p385, p386, p387) {
        return (((p387 & 255 | p386 << 8 & 65280 | p385 << 16 & 16711680) & 16777215) / 8388608 - 1) * 10000;
      };
      f48.prototype.Zi = function (p388) {
        return ((p388 & 65535) / 32768 - 1) * this.uh.yh.Ug();
      };
      f48.prototype.$i = function (p389) {
        return ((p389 >> 16 & 65535) / 32768 - 1) * this.uh.yh.Ug();
      };
      f48.prototype.pi = function (p390) {
        var v354 = p390.ra();
        if ((v354 & 128) == 0) {
          return v354;
        }
        ;
        var v355 = p390.ra();
        if ((v355 & 128) == 0) {
          return v355 | v354 << 7 & 16256;
        }
        ;
        var v356 = p390.ra();
        if ((v356 & 128) == 0) {
          return v356 | v355 << 7 & 16256 | v354 << 14 & 2080768;
        }
        ;
        var v357 = p390.ra();
        if ((v357 & 128) == 0) {
          return v357 | v356 << 7 & 16256 | v355 << 14 & 2080768 | v354 << 21 & 266338304;
        } else {
          return undefined;
        }
      };
      return f48;
    }();
    vO2.gj = function () {
      function f49(p391) {
        this.hj = p391;
      }
      f49.ij = function () {
        return new vO2.gj(null);
      };
      f49.jj = function (p392) {
        return new vO2.gj(p392);
      };
      f49.prototype.tc = function () {
        return this.hj;
      };
      f49.prototype.kj = function () {
        return this.hj != null;
      };
      f49.prototype.lj = function (p393) {
        if (this.hj != null) {
          p393(this.hj);
        }
      };
      return f49;
    }();
    vO2.Vi = function () {
      function _0x9f75x3(p394, f50) {
        this.Uh = p394;
        this.mj = p394.Xh >= 80;
        this.nj = 0;
        this.oj = 0;
        this.pj = 0;
        this.qj = 0;
        this.aj = this.mj ? 1 : p394.Wi;
        this._i = 1;
        this.bj = false;
        this.rj = 0;
        this.sj = 0;
        this.tj = 1;
        this.uj = Math.PI * 2 * Math.random();
        this.vj = new vO2.wj();
        this.vj.Qc(vO3.L.uh.yh.Og, this.Uh.Wh === vO2.Ng.Tg ? null : vO3.L.bd.jc().Bb(this.Uh.Wh), vO3.L.bd.jc().Gb(this.Uh.Xh));
        f50.Dh(p394.re, this.vj);
      }
      _0x9f75x3.prototype.Ii = function () {
        this.vj.Eh.Vc.z();
        this.vj.Eh.Uc.z();
      };
      _0x9f75x3.prototype.Yi = function (p395, p396, p397) {
        this.nj = p395;
        this.oj = p396;
        if (p397) {
          this.pj = p395;
          this.qj = p396;
        }
      };
      _0x9f75x3.prototype.xj = function (p398, p399) {
        var v358 = Math.min(0.5, this.aj * 1);
        var v359 = Math.min(2.5, this.aj * 1.5);
        this.rj = vO4._(this.rj, v358, p399, 0.0025);
        this.sj = vO4._(this.sj, v359, p399, 0.0025);
        this.tj = vO4._(this.tj, this._i, p399, 0.0025);
      };
      _0x9f75x3.prototype.yj = function (p400, p401, p402) {
        this.pj = vO4._(this.pj, this.nj, p401, 0.0025);
        this.qj = vO4._(this.qj, this.oj, p401, 0.0025);
        this.vj.jg(this, p400, p401, p402);
      };
      _0x9f75x3.Bi = function () {
        function f51() {
          this.re = 0;
          this.Wh = vO2.Ng.Tg;
          this.Wi = 0;
          this.Xh = 0;
        }
        return f51;
      }();
      return _0x9f75x3;
    }();
    vO2.wj = function () {
      function f52() {
        this.Eh = new vF12(new vO2.Kc(), new vO2.Kc());
        this.Eh.Vc.Pc.blendMode = vO5.e.q.r;
        this.Eh.Vc.Pc.zIndex = vLN100;
        this.Eh.Uc.Pc.zIndex = vLN500;
      }
      var vLN500 = 500;
      var vLN100 = 100;
      f52.prototype.Qc = function (p403, p404, p405) {
        var v360 = p405.Mb;
        if (v360 != null) {
          this.Eh.Uc.Tc(v360);
        }
        var v361 = p403 === vO2.Sc.Rc && p404 != null ? p404.Kb.Nb : p405.Nb;
        if (v361 != null) {
          this.Eh.Vc.Tc(v361);
        }
      };
      f52.prototype.jg = function (p406, p407, p408, p409) {
        if (!p409(p406.pj, p406.qj)) {
          this.Eh.kd();
          return;
        }
        ;
        var v362 = p406.sj * (1 + Math.cos(p406.uj + p407 / 200) * 0.3);
        if (p406.mj) {
          this.Eh.hd(p406.pj, p406.qj, p406.rj * 2, p406.tj * 1, v362 * 1.2, p406.tj * 0.8);
        } else {
          this.Eh.hd(p406.pj, p406.qj, p406.rj * 2, p406.tj * 1, v362 * 2, p406.tj * 0.3);
        }
      };
      var vF12 = function () {
        function _0x9f75x19(f53, p410) {
          this.Uc = f53;
          this.Vc = p410;
        }
        _0x9f75x19.prototype.hd = function (p411, p412, p413, p414, p415, p416) {
          this.Uc.Bd(true);
          this.Uc.Cd(p411, p412);
          this.Uc.jd(p413);
          this.Uc.zj(p414);
          this.Vc.Bd(true);
          this.Vc.Cd(p411, p412);
          this.Vc.jd(p415);
          this.Vc.zj(p416);
        };
        _0x9f75x19.prototype.kd = function () {
          this.Uc.Bd(false);
          this.Vc.Bd(false);
        };
        return _0x9f75x19;
      }();
      return f52;
    }();
    vO2.Aj = function () {
      function f54() {
        this.Bj = 0;
        this.Cj = 0;
        this.Dj = 0;
        this.Ej = 0;
        this.Fj = 0;
        this.Gj = [];
      }
      function f55(p417, p418) {
        for (var vLN069 = 0; vLN069 < p417.length; vLN069++) {
          if (parseInt(p417[vLN069].id) === p418) {
            return vLN069;
          }
        }
        ;
        return -1;
      }
      f54.prototype.za = function () {};
      f54.prototype.Hj = function (p419) {
        switch (p419) {
          case vO2.Jj.Ij:
            return this.Bj;
          case vO2.Jj.Kj:
            return this.Cj;
          case vO2.Jj.Lj:
            return this.Dj;
          case vO2.Jj.Mj:
            return this.Ej;
          case vO2.Jj.Nj:
            return this.Fj;
        }
        ;
        return 0;
      };
      f54.prototype.Oj = function () {
        return new vO2.zb(this.Bj, this.Cj, this.Dj, this.Ej, this.Fj);
      };
      f54.prototype.Pj = function (p420) {
        this.Gj.push(p420);
        this.Qj();
      };
      f54.prototype.Rj = function () {
        if (!vO3.L.bd.mc()) {
          return vO4.ea([32, 33, 34, 35]);
        }
        ;
        var vA10 = [];
        for (var v363 = vO3.L.bd.nc().skinArrayDict, vLN070 = 0; vLN070 < v363.length; vLN070++) {
          var v364 = v363[vLN070];
          if (this.Sj(v364.id, vO2.Jj.Ij)) {
            vA10.push(v364);
          }
        }
        ;
        if (vA10.length === 0) {
          return 0;
        } else {
          return vA10[parseInt(vA10.length * Math.random())].id;
        }
      };
      f54.prototype.Tj = function () {
        if (vO3.L.bd.mc()) {
          var v365 = vO3.L.bd.nc().skinArrayDict;
          var vF55 = f55(v365, this.Bj);
          if (!(vF55 < 0)) {
            for (var v366 = vF55 + 1; v366 < v365.length; v366++) {
              if (this.Sj(v365[v366].id, vO2.Jj.Ij)) {
                Z.setPId(this.Bj = v365[v366].id, vO2.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
            ;
            for (var vLN071 = 0; vLN071 < vF55; vLN071++) {
              if (this.Sj(v365[vLN071].id, vO2.Jj.Ij)) {
                Z.setPId(this.Bj = v365[vLN071].id, vO2.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
          }
        }
      };
      f54.prototype.Uj = function () {
        if (vO3.L.bd.mc) {
          var v367 = vO3.L.bd.nc().skinArrayDict;
          var vF552 = f55(v367, this.Bj);
          if (!(vF552 < 0)) {
            for (var v368 = vF552 - 1; v368 >= 0; v368--) {
              if (this.Sj(v367[v368].id, vO2.Jj.Ij)) {
                Z.setPId(this.Bj = v367[v368].id, vO2.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
            ;
            for (var v369 = v367.length - 1; v369 > vF552; v369--) {
              if (this.Sj(v367[v369].id, vO2.Jj.Ij)) {
                Z.setPId(this.Bj = v367[v369].id, vO2.Jj.Ij, true);
                this.Qj();
                return;
              }
            }
          }
        }
      };
      f54.prototype.Vj = function (p421, p422) {
        let v370 = !vO3.L.bd.mc() || this.Sj(p421, p422);
        Z.setPId(p421, p422, v370);
        if (v370) {
          switch (p422) {
            case vO2.Jj.Ij:
              if (this.Bj !== p421) {
                this.Bj = p421;
                this.Qj();
              }
              return;
            case vO2.Jj.Kj:
              if (this.Cj !== p421) {
                this.Cj = p421;
                this.Qj();
              }
              return;
            case vO2.Jj.Lj:
              if (this.Dj !== p421) {
                this.Dj = p421;
                this.Qj();
              }
              return;
            case vO2.Jj.Mj:
              if (this.Ej !== p421) {
                this.Ej = p421;
                this.Qj();
              }
              return;
            case vO2.Jj.Nj:
              if (this.Fj !== p421) {
                this.Fj = p421;
                this.Qj();
              }
              return;
          }
        }
      };
      f54.prototype.Sj = function (p423, p424) {
        console.log("zPList-Sj", p423, p424);
        var v371 = this.Wj(p423, p424);
        return v371 != null && (vO3.L.Yj.Xj() ? v371.Zj() === 0 && !v371.$j() || vO3.L.Yj._j(p423, p424) : v371.ak());
      };
      f54.prototype.Wj = function (p425, p426) {
        if (!vO3.L.bd.mc()) {
          return null;
        }
        ;
        var v372 = vO3.L.bd.nc();
        if (p426 === vO2.Jj.Ij) {
          var vF553 = f55(v372.skinArrayDict, p425);
          if (vF553 < 0) {
            return null;
          } else {
            return vO2.ck.bk(v372.skinArrayDict[vF553]);
          }
        }
        ;
        var v373 = null;
        switch (p426) {
          case vO2.Jj.Kj:
            v373 = v372.eyesDict[p425];
            break;
          case vO2.Jj.Lj:
            v373 = v372.mouthDict[p425];
            break;
          case vO2.Jj.Mj:
            v373 = v372.hatDict[p425];
            break;
          case vO2.Jj.Nj:
            v373 = v372.glassesDict[p425];
        }
        ;
        if (v373 != null) {
          return vO2.ck.dk(v373);
        } else {
          return null;
        }
      };
      f54.prototype.Qj = function () {
        for (var vLN072 = 0; vLN072 < this.Gj.length; vLN072++) {
          this.Gj[vLN072]();
        }
      };
      return f54;
    }();
    vO2.Jj = function () {
      function f56() {}
      f56.Ij = "SKIN";
      f56.Kj = "EYES";
      f56.Lj = "MOUTH";
      f56.Nj = "GLASSES";
      f56.Mj = "HAT";
      return f56;
    }();
    vO2.ek = function () {
      function _0x9f75x19() {
        this.Sf = new vO5.e.h(vO5.e.g.from("/images/bg-obstacle.png"));
        var f57 = vO5.e.g.from(vO3.A.H);
        var v374 = new vO5.e.h(f57, new vO5.e.l(0, 0, 256, 256));
        this.Tf = new Array(12);
        for (var vLN073 = 0; vLN073 < this.Tf.length; vLN073++) {
          this.Tf[vLN073] = v374;
        }
        ;
        this.qh = new vO5.e.h(function () {
          var v375 = vO5.e.g.from("/images/bg-pattern-pow2-ARENA.png");
          v375.wrapMode = vO5.e.u.v;
          return v375;
        }());
        this.rh = new vO5.e.h(function () {
          var v376 = vO5.e.g.from("/images/bg-pattern-pow2-TEAM2.png");
          v376.wrapMode = vO5.e.u.v;
          return v376;
        }());
        this.oh = new vO5.e.h(vO5.e.g.from("/images/lens.png"));
        this.If = new vO5.e.h(function () {
          var v377 = vO5.e.g.from(vO3.A.I);
          v377.wrapMode = vO5.e.u.v;
          return v377;
        }());
        this.Vb = function () {
          var v378 = window.document.createElement("canvas");
          v378.width = 80;
          v378.height = 80;
          return {
            Wb: v378,
            Xb: v378.getContext("2d"),
            Ga: new vO5.e.h(vO5.e.g.from(v378))
          };
        }();
        this.Re = {};
        this.Ne = {};
        this.fk = [];
        this.gk = null;
      }
      _0x9f75x19.prototype.za = function (p427) {
        function f58() {
          if (--vLN42 == 0) {
            p427();
          }
        }
        var vLN42 = 4;
        this.Re = {};
        f58();
        this.Ne = {};
        f58();
        this.fk = [];
        f58();
        this.gk = null;
        f58();
      };
      return _0x9f75x19;
    }();
    vO2.hk = function () {
      function f59() {
        this.ik = null;
        this.sf = new vO2.jk();
        this.rf = new vO2.kk();
        this.lk = new vO2.mk();
        this.nk = new vO2.ok();
        this.pk = new vO2.qk();
        this.rk = new vO2.sk();
        this.tk = new vO2.uk();
        this.vk = new vO2.wk();
        this.oi = new vO2.xk();
        this.yk = new vO2.zk();
        this.Ak = new vO2.Bk();
        this.Ck = new vO2.Dk();
        this.Ek = new vO2.Fk();
        this.Gk = new vO2.Hk();
        this.ze = new vO2.Ik();
        this.Jk = new vO2.Kk();
        this.Lk = new vO2.Mk();
        this.Nk = new vO2.Ok();
        this.Pk = [];
      }
      function _0x9f75x3(p428, p429) {
        if (p429 !== 0) {
          var f60 = p428[p429];
          vO4.ca(p428, 0, 1, p429);
          p428[0] = f60;
        }
      }
      function f61(p430, p431) {
        if (p431 !== p430.length + 1) {
          var v379 = p430[p431];
          vO4.ca(p430, p431 + 1, p431, p430.length - p431 - 1);
          p430[p430.length - 1] = v379;
        }
      }
      function f62(p432, p433) {
        for (var vLN074 = 0; vLN074 < p432.length; vLN074++) {
          if (p432[vLN074] === p433) {
            return vLN074;
          }
        }
        ;
        return -1;
      }
      f59.prototype.za = function () {
        this.ik = new vO2.vf(vO2.Cf.Bf);
        this.Pk = [this.sf, this.rf, this.lk, this.nk, this.pk, this.rk, this.tk, this.vk, this.oi, this.yk, this.Ak, this.Ck, this.Ek, this.Gk, this.ze, this.Jk, this.Lk, this.Nk];
        for (var vLN076 = 0; vLN076 < this.Pk.length; vLN076++) {
          this.Pk[vLN076].za();
        }
      };
      f59.prototype.Ch = function (p434, p435) {
        for (var v380 = this.Pk.length - 1; v380 >= 0; v380--) {
          this.Pk[v380].cg(p434, p435);
        }
        ;
        if (this.Pk[0] !== this.sf && this.Pk[0] !== this.Nk && this.ik != null) {
          this.ik.cg(p434, p435);
        }
      };
      f59.prototype.$f = function () {
        for (var v381 = this.Pk.length - 1; v381 >= 0; v381--) {
          this.Pk[v381].$f();
        }
        ;
        if (this.ik != null) {
          this.ik.$f();
        }
      };
      f59.prototype.Qk = function (p436) {
        var vF62 = f62(this.Pk, p436);
        if (!(vF62 < 0)) {
          this.Pk[0].Rk();
          _0x9f75x3(this.Pk, vF62);
          this.Sk();
        }
      };
      f59.prototype.Tk = function () {
        this.Pk[0].Rk();
        do {
          f61(this.Pk, 0);
        } while (this.Pk[0].Ed !== vO2.Vk.Uk);
        ;
        this.Sk();
      };
      f59.prototype.Sk = function () {
        var v382 = this.Pk[0];
        v382.Wk();
        v382.Xk();
        this.Yk();
      };
      f59.prototype.Zk = function () {
        return this.Pk.length !== 0 && this.Pk[0].Ed === vO2.Vk.Uk && this.Gk.$k();
      };
      f59.prototype._k = function () {
        if (this.Pk.length === 0) {
          return null;
        } else {
          return this.Pk[0];
        }
      };
      f59.prototype.Yk = function () {
        if (this.Zk()) {
          this.Qk(this.Gk);
        }
      };
      return f59;
    }();
    vO2.dj = function () {
      function f63() {
        this.Sh = [];
        this.Ph = [];
      }
      f63.ej = function (p437, p438) {
        return {
          Th: p437,
          Rh: p438
        };
      };
      f63.fj = function (p439, p440) {
        return {
          Qh: p439,
          Rh: p440
        };
      };
      return f63;
    }();
    vO2.al = function () {
      function f64() {
        this.bl = [];
        this.cl = [];
        this.dl = false;
        this.el = vLSGuest;
        this.fl = {};
      }
      var vLSGuest = "guest";
      var vLSGuest2 = "guest";
      var vLSFb = "fb";
      var vLSGg = "gg";
      f64.gl = new (function () {
        function f65() {}
        f65.hl = function () {
          function _0x9f75x19(f66) {
            this.il = f66;
          }
          return _0x9f75x19;
        }();
        f65.prototype.jl = function () {
          return (typeof FB == "undefined" ? "undefined" : _typeof(FB)) != "undefined";
        };
        f65.prototype.kl = function (p441, p442, p443) {
          var v383 = "https://graph.facebook.com/me?access_token=" + p441;
          $.get(v383).fail(function () {
            p442();
          }).done(function () {
            p443();
          });
        };
        f65.prototype.ll = function (p444, p445) {
          if (!this.jl()) {
            p444();
            return;
          }
          ;
          this.ml(function () {
            FB.login(function (p446) {
              if (p446.status !== "connected") {
                p444();
                return;
              }
              ;
              var v384 = p446.authResponse.accessToken;
              p445(new f65.hl(v384));
            });
          }, function (p447) {
            p445(p447);
          });
        };
        f65.prototype.ml = function (p448, p449) {
          var vThis15 = this;
          if (!this.jl()) {
            p448();
            return;
          }
          ;
          FB.getLoginStatus(function (p450) {
            if (p450.status !== "connected") {
              p448();
              return;
            }
            ;
            var v385 = p450.authResponse.accessToken;
            vThis15.kl(v385, function () {
              p448();
            }, function () {
              p449(new f65.hl(v385));
            });
          });
        };
        f65.prototype.nl = function () {
          if (this.jl()) {
            FB.logout();
          }
        };
        return f65;
      }())();
      f64.ol = new (function () {
        function f67() {}
        f67.pl = function () {
          function _0x9f75x19(f68, p451) {
            this.il = f68;
            this.ql = p451;
          }
          return _0x9f75x19;
        }();
        f67.prototype.jl = function () {
          return _typeof(GoogleAuth) != "undefined";
        };
        f67.prototype.ll = function (p452, p453) {
          if (_typeof(GoogleAuth) == "undefined") {
            p452();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var v386 = GoogleAuth.currentUser.get();
              var v387 = v386.getAuthResponse().id_token;
              var v388 = new Date().getTime() + v386.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v388) {
                p453(new f67.pl(v387, v388));
                return;
              }
            }
            ;
            GoogleAuth.signIn().then(function (p454) {
              if (_typeof(p454.error) !== "undefined") {
                p452();
                return;
              }
              ;
              if (!p454.isSignedIn()) {
                p452();
                return;
              }
              ;
              var v389 = p454.getAuthResponse().id_token;
              var v390 = new Date().getTime() + p454.getAuthResponse().expires_in * 1000;
              p453(new f67.pl(v389, v390));
            });
          });
        };
        f67.prototype.ml = function (p455, p456) {
          if (_typeof(GoogleAuth) == "undefined") {
            p455();
            return;
          }
          ;
          GoogleAuth.then(function () {
            if (GoogleAuth.isSignedIn.get()) {
              var v391 = GoogleAuth.currentUser.get();
              var v392 = v391.getAuthResponse().id_token;
              var v393 = new Date().getTime() + v391.getAuthResponse().expires_in * 1000;
              if (new Date().getTime() < v393) {
                p456(new f67.pl(v392, v393));
                return;
              }
            }
            ;
            p455();
          });
        };
        f67.prototype.nl = function () {
          if (_typeof(GoogleAuth) != "undefined") {
            GoogleAuth.signOut();
          }
        };
        return f67;
      }())();
      f64.prototype.za = function () {
        this.rl();
      };
      f64.prototype.sl = function () {
        if (this.dl) {
          return this.fl.userId;
        } else {
          return "";
        }
      };
      f64.prototype.tl = function () {
        if (this.dl) {
          return this.fl.username;
        } else {
          return "";
        }
      };
      f64.prototype.ul = function () {
        if (this.dl) {
          return this.fl.nickname;
        } else {
          return "";
        }
      };
      f64.prototype.vl = function () {
        if (this.dl) {
          return this.fl.avatarUrl;
        } else {
          return vO3.A.G;
        }
      };
      f64.prototype.wl = function () {
        return this.dl && this.fl.isBuyer;
      };
      f64.prototype.xl = function () {
        return this.dl && this.fl.isConsentGiven;
      };
      f64.prototype.yl = function () {
        if (this.dl) {
          return this.fl.coins;
        } else {
          return 0;
        }
      };
      f64.prototype.zl = function () {
        if (this.dl) {
          return this.fl.level;
        } else {
          return 1;
        }
      };
      f64.prototype.Al = function () {
        if (this.dl) {
          return this.fl.expOnLevel;
        } else {
          return 0;
        }
      };
      f64.prototype.Bl = function () {
        if (this.dl) {
          return this.fl.expToNext;
        } else {
          return 50;
        }
      };
      f64.prototype.Cl = function () {
        if (this.dl) {
          return this.fl.skinId;
        } else {
          return 0;
        }
      };
      f64.prototype.Dl = function () {
        if (this.dl) {
          return this.fl.eyesId;
        } else {
          return 0;
        }
      };
      f64.prototype.El = function () {
        if (this.dl) {
          return this.fl.mouthId;
        } else {
          return 0;
        }
      };
      f64.prototype.Fl = function () {
        if (this.dl) {
          return this.fl.glassesId;
        } else {
          return 0;
        }
      };
      f64.prototype.Gl = function () {
        if (this.dl) {
          return this.fl.hatId;
        } else {
          return 0;
        }
      };
      f64.prototype.Hl = function () {
        if (this.dl) {
          return this.fl.highScore;
        } else {
          return 0;
        }
      };
      f64.prototype.Il = function () {
        if (this.dl) {
          return this.fl.bestSurvivalTimeSec;
        } else {
          return 0;
        }
      };
      f64.prototype.Jl = function () {
        if (this.dl) {
          return this.fl.kills;
        } else {
          return 0;
        }
      };
      f64.prototype.Kl = function () {
        if (this.dl) {
          return this.fl.headShots;
        } else {
          return 0;
        }
      };
      f64.prototype.Ll = function () {
        if (this.dl) {
          return this.fl.sessionsPlayed;
        } else {
          return 0;
        }
      };
      f64.prototype.Ml = function () {
        if (this.dl) {
          return this.fl.totalPlayTimeSec;
        } else {
          return 0;
        }
      };
      f64.prototype.Nl = function () {
        if (this.dl) {
          return this.fl.regDate;
        } else {
          return {};
        }
      };
      f64.prototype.Ol = function (p457) {
        this.bl.push(p457);
        p457();
      };
      f64.prototype.Pl = function (p458) {
        this.cl.push(p458);
        p458();
      };
      f64.prototype._j = function (p459, p460) {
        var v394 = this.fl.propertyList.concat(Z.locals.propertyList || []);
        console.log("zPList", v394, p459, p460);
        if (v394 == null) {
          return false;
        }
        ;
        var v395 = p459.toString();
        for (var vLN077 = 0; vLN077 < v394.length; vLN077++) {
          var v396 = v394[vLN077];
          if (v396.id === v395 && v396.type === p460) {
            return true;
          }
        }
        ;
        return false;
      };
      f64.prototype.Xj = function () {
        return this.dl;
      };
      f64.prototype.Ql = function () {
        return this.el;
      };
      f64.prototype.Rl = function (p461) {
        var vThis16 = this;
        var v397 = this.sl();
        var v398 = this.yl();
        var v399 = this.zl();
        this.Sl(function () {
          if (p461 != null) {
            p461();
          }
        }, function (p462) {
          vThis16.fl = p462.user_data;
          vThis16.Tl();
          var v400 = vThis16.sl();
          var v401 = vThis16.yl();
          var v402 = vThis16.zl();
          if (v397 === v400) {
            if (v402 > 1 && v402 !== v399) {
              vO3.L.Fg.Gk.Ul(new vO2.Vl(v402));
            }
            var v403 = v401 - v398;
            if (v403 >= 20) {
              vO3.L.Fg.Gk.Ul(new vO2.Wl(v403));
            }
          }
          ;
          if (p461 != null) {
            p461();
          }
        });
      };
      f64.prototype.Sl = function (p463, p464) {
        var v404 = vO3.A.C + "/pub/wuid/" + this.el + "/getUserData";
        vO4.ha(v404, p463, function (p465) {
          if (p465.code !== 1200) {
            p463();
          } else {
            f94(p465.user_data);
          }
          p464(p465);
        });
      };
      f64.prototype.Xl = function (p466, p467, p468, p469) {
        var v405 = vO3.A.C + "/pub/wuid/" + this.el + "/buyProperty?id=" + p466 + "&type=" + p467;
        vO4.ha(v405, function () {
          p468();
        }, function (p470) {
          if (p470.code !== 1200) {
            p468();
          } else {
            p469();
          }
        });
      };
      f64.prototype.Yl = function (p471, p472) {
        var v406 = vO3.A.C + "/pub/wuid/" + this.el + "/deleteAccount";
        vO4.ha(v406, p471, function (p473) {
          if (p473.code !== 1200) {
            p471();
          } else {
            p472();
          }
        });
      };
      f64.prototype.Zl = function (p474) {
        var vThis17 = this;
        if (this.dl) {
          this.$l();
        }
        f64.gl.ll(function () {
          p474();
        }, function (p475) {
          vThis17._l(vLSFb, p475.il, p474);
        });
      };
      f64.prototype.am = function (p476) {
        var vThis18 = this;
        if (this.dl) {
          this.$l();
        }
        f64.ol.ll(function () {
          p476();
        }, function (p477) {
          vThis18._l(vLSGg, p477.il, p476);
        });
      };
      f64.prototype._l = function (p478, p479, p480) {
        var vThis19 = this;
        var v407 = p478 + "_" + p479;
        var v408 = vO3.A.C + "/pub/wuid/" + v407 + "/login";
        vO4.ha(v408, function () {
          vThis19.bm();
        }, function (p481) {
          if (p481.code !== 1200) {
            vThis19.bm();
          } else {
            f94(p481.user_data);
            f99(p481.user_data, function (p482) {
              vThis19.cm(p478, p479, p482);
              if (p480 != null) {
                p480();
              }
            });
          }
        });
      };
      f64.prototype.$l = function () {
        try {
          this.dm();
          this.em();
        } catch (e17) {}
        ;
        this.fm();
      };
      f64.prototype.gm = function () {
        if (this.dl) {
          this.Yl(function () {}, function () {});
        }
      };
      f64.prototype.bm = function () {
        vO3.L.Fg.Qk(vO3.L.Fg.Jk);
      };
      f64.prototype.cm = function (p483, p484, p485) {
        var v409 = this.dl ? this.fl.userId : vLSGuest2;
        this.dl = true;
        this.el = p483 + "_" + p484;
        this.fl = p485;
        vO2.kg.vg(vO2.kg.pg, p483, 60);
        if (v409 !== this.fl.userId) {
          this.hm();
        } else {
          this.Tl();
        }
      };
      f64.prototype.fm = function () {
        var v410 = this.dl ? this.fl.userId : vLSGuest2;
        this.dl = false;
        this.el = vLSGuest;
        this.fl = {};
        vO2.kg.vg(vO2.kg.pg, "", 60);
        if (v410 !== this.fl.userId) {
          this.hm();
        } else {
          this.Tl();
        }
      };
      f64.prototype.rl = function () {
        var v411 = vO2.kg.wg(vO2.kg.pg);
        var vThis20 = this;
        if (vLSFb === v411) {
          var vLN15 = 1;
          (function f69() {
            if (!f64.gl.jl() && vLN15++ < 5) {
              vO4.S(f69, 1000);
              return;
            }
            ;
            f64.gl.ml(function () {}, function (p486) {
              vThis20._l(vLSFb, p486.il);
            });
          })();
        } else if (vLSGg === v411) {
          var vLN16 = 1;
          (function f70() {
            if (!f64.ol.jl() && vLN16++ < 5) {
              vO4.S(f70, 1000);
              return;
            }
            ;
            f64.ol.ml(function () {}, function (p487) {
              vThis20._l(vLSGg, p487.il);
            });
          })();
        }
      };
      f64.prototype.hm = function () {
        for (var vLN078 = 0; vLN078 < this.bl.length; vLN078++) {
          this.bl[vLN078]();
        }
        ;
        this.Tl();
      };
      f64.prototype.Tl = function () {
        for (var vLN079 = 0; vLN079 < this.cl.length; vLN079++) {
          this.cl[vLN079]();
        }
      };
      f64.prototype.dm = function () {
        f64.gl.nl();
      };
      f64.prototype.em = function () {
        f64.ol.nl();
      };
      return f64;
    }();
    vO2.Af = function () {
      function _0x9f75x6(f71, p488, p489) {
        this.wf = p489;
        this.zd = false;
        this.Fc = new vO5.e.f();
        this.Fc.visible = false;
        this.im = new Array(f71);
        for (var vLN080 = 0; vLN080 < this.im.length; vLN080++) {
          var v412 = new vO2.jm(new Float32Array(p488 * 3));
          v412.km(p488);
          this.im[vLN080] = v412;
          this.Fc.addChild(v412.Kf());
        }
        ;
        this.xf = 1;
        this.yf = 1;
        this.$f();
      }
      _0x9f75x6.prototype.Kf = function () {
        return this.Fc;
      };
      _0x9f75x6.prototype._f = function (p490) {
        this.zd = p490;
        this.Fc.visible = p490;
      };
      _0x9f75x6.prototype.$f = function () {
        this.xf = this.wf.width();
        this.yf = this.wf.height();
        var v413 = this.yf / 30;
        for (var vLN081 = 0; vLN081 < this.im.length; vLN081++) {
          this.im[vLN081].lm(v413);
        }
      };
      _0x9f75x6.prototype.jg = function () {
        if (this.zd) {
          for (var vLN082 = 0; vLN082 < this.im.length; vLN082++) {
            this.im[vLN082].jg(this.Df);
          }
        }
      };
      _0x9f75x6.prototype.mm = function () {
        return this.xf;
      };
      _0x9f75x6.prototype.nm = function () {
        return this.yf;
      };
      _0x9f75x6.prototype.fg = function (p491, p492) {
        this.im[p491].om(p492);
      };
      _0x9f75x6.prototype.gg = function (p493, p494) {
        this.im[p493].pm(p494);
      };
      _0x9f75x6.prototype.hg = function (p495, p496, p497) {
        var v414 = this.im[p495];
        for (var v415 = v414.qm(), v416 = v414.rm, vLN083 = 0; vLN083 < v415; vLN083++) {
          v416[vLN083 * 3] = p496;
          v416[vLN083 * 3 + 1] = p497;
          v416[vLN083 * 3 + 2] = 0;
        }
      };
      _0x9f75x6.prototype.ig = function (p498, p499, p500) {
        var v417;
        var v418;
        var v419 = this.im[p498];
        var v420 = v419.qm();
        var v421 = v419.rm;
        var v422 = v419.sm();
        var v423 = v421[0];
        var v424 = v421[1];
        var v425 = p499 - v423;
        var v426 = p500 - v424;
        var v427 = Math.hypot(v425, v426);
        if (v427 > 0) {
          v421[0] = p499;
          v421[1] = p500;
          v421[2] = Math.atan2(v426, v425);
          var v428 = v422 * 0.25 / (v422 * 0.25 + v427);
          var v429 = 1 - v428 * 2;
          for (var vLN17 = 1, vV420 = v420; vLN17 < vV420; vLN17++) {
            v417 = v421[vLN17 * 3];
            v421[vLN17 * 3] = v421[vLN17 * 3 - 3] * v429 + (v417 + v423) * v428;
            v423 = v417;
            v418 = v421[vLN17 * 3 + 1];
            v421[vLN17 * 3 + 1] = v421[vLN17 * 3 - 2] * v429 + (v418 + v424) * v428;
            v424 = v418;
            v421[vLN17 * 3 + 2] = Math.atan2(v421[vLN17 * 3 - 2] - v421[vLN17 * 3 + 1], v421[vLN17 * 3 - 3] - v421[vLN17 * 3]);
          }
        }
      };
      return _0x9f75x6;
    }();
    vO2.tm = function () {
      function _0x9f75x7(p501) {
        var f72 = this;
        this.wf = p501;
        this.Wb = p501.get()[0];
        this.Df = new vO5.e.i({
          view: this.Wb,
          transparent: true
        });
        this.zd = false;
        this.um = new vO2.jm(new Float32Array(v430 * 3));
        this.xf = 1;
        this.yf = 1;
        this.vm = vO24.wm;
        this.xm = vO24.wm;
        this.ym = vO24.wm;
        this.zm = vO24.wm;
        this.Am = vO24.wm;
        this.$f();
        vO3.L.bd.qc(function () {
          f72.um.Bm();
        });
      }
      var v430 = Math.min(100, vO2.Ec.Oc);
      var vO24 = {
        wm: "0lt0",
        Cm: "0lt1",
        Dm: "0lt2"
      };
      _0x9f75x7.prototype._f = function (p502) {
        this.zd = p502;
      };
      _0x9f75x7.prototype.$f = function () {
        var v431 = window.devicePixelRatio ? window.devicePixelRatio : 1;
        this.xf = this.wf.width();
        this.yf = this.wf.height();
        this.Df.resize(this.xf, this.yf);
        this.Df.resolution = v431;
        this.Wb.width = v431 * this.xf;
        this.Wb.height = v431 * this.yf;
        var v432 = this.yf / 4;
        this.um.lm(v432);
        var v433 = vO4.$(Math.floor(this.xf / v432) * 2 - 5, 1, v430);
        this.um.km(v433);
      };
      _0x9f75x7.prototype.cg = function () {
        if (this.zd) {
          var v434 = vO4.ja();
          var v435 = v434 / 200;
          var v436 = Math.sin(v435);
          this.um.Em(this.Fm(this.vm, v436), this.Gm(this.vm, v436));
          this.um.Hm(this.Im(this.xm, v436), this.Im(this.ym, v436), this.Im(this.zm, v436), this.Im(this.Am, v436));
          var v437 = this.um.sm();
          for (var v438 = this.um.qm(), v439 = this.um.rm, v440 = this.xf - (this.xf - v437 * 0.5 * (v438 - 1)) * 0.5, v441 = this.yf * 0.5, vLN084 = 0, vLN085 = 0, v442 = -1; v442 < v438; v442++) {
            var vV442 = v442;
            var v443 = Math.cos(vV442 * 1 / 12 * Math.PI - v435) * (1 - Math.pow(16, vV442 * -1 / 12));
            if (v442 >= 0) {
              v439[v442 * 3] = v440 + v437 * -0.5 * vV442;
              v439[v442 * 3 + 1] = v441 + v437 * 0.5 * v443;
              v439[v442 * 3 + 2] = Math.atan2(vLN085 - v443, vV442 - vLN084);
            }
            vLN084 = vV442;
            vLN085 = v443;
          }
          ;
          this.um.jg();
          this.um.Jm(this.Df);
        }
      };
      _0x9f75x7.prototype.om = function (p503) {
        this.um.om(p503);
      };
      _0x9f75x7.prototype.Km = function (p504) {
        this.vm = p504 ? vO24.Dm : vO24.Cm;
        this.xm = vO24.wm;
        this.ym = vO24.wm;
        this.zm = vO24.wm;
        this.Am = vO24.wm;
      };
      _0x9f75x7.prototype.Lm = function (p505) {
        this.vm = vO24.wm;
        this.xm = p505 ? vO24.Dm : vO24.Cm;
        this.ym = vO24.wm;
        this.zm = vO24.wm;
        this.Am = vO24.wm;
      };
      _0x9f75x7.prototype.Mm = function (p506) {
        this.vm = vO24.wm;
        this.xm = vO24.wm;
        this.ym = p506 ? vO24.Dm : vO24.Cm;
        this.zm = vO24.wm;
        this.Am = vO24.wm;
      };
      _0x9f75x7.prototype.Nm = function (p507) {
        this.vm = vO24.wm;
        this.xm = vO24.wm;
        this.ym = vO24.wm;
        this.zm = p507 ? vO24.Dm : vO24.Cm;
        this.Am = vO24.wm;
      };
      _0x9f75x7.prototype.Om = function (p508) {
        this.vm = vO24.wm;
        this.xm = vO24.wm;
        this.ym = vO24.wm;
        this.zm = vO24.wm;
        this.Am = p508 ? vO24.Dm : vO24.Cm;
      };
      _0x9f75x7.prototype.Fm = function (p509, p510) {
        switch (p509) {
          case vO24.Cm:
            return 0.9 + p510 * 0.1;
          case vO24.Dm:
            return 0.4 + p510 * 0.3;
        }
        ;
        return 1;
      };
      _0x9f75x7.prototype.Gm = function (p511, p512) {
        switch (p511) {
          case vO24.Cm:
            return 0.6 + p512 * 0.5;
          case vO24.Dm:
            return 0.3 + p512 * 0.3;
        }
        ;
        return 1;
      };
      _0x9f75x7.prototype.Im = function (p513, p514) {
        switch (p513) {
          case vO24.Cm:
            return 0.9 + p514 * 0.1;
          case vO24.Dm:
            return 0.6 + p514 * 0.4;
        }
        ;
        return 1;
      };
      return _0x9f75x7;
    }();
    vO2.ck = function () {
      function _0x9f75x19(f73, p515, p516, p517, p518) {
        this.Pm = f73;
        this.Qm = p515;
        this.Rm = p516;
        this.Sm = p517;
        this.Tm = p518;
      }
      _0x9f75x19.bk = function (p519) {
        return new _0x9f75x19(p519.price, p519.guest, p519.nonbuyable, p519.nonbuyableCause, p519.description);
      };
      _0x9f75x19.dk = function (p520) {
        return new _0x9f75x19(p520.price, p520.guest, p520.nonbuyable, p520.nonbuyableCause, p520.description);
      };
      _0x9f75x19.prototype.Zj = function () {
        return this.Pm;
      };
      _0x9f75x19.prototype.ak = function () {
        return this.Qm;
      };
      _0x9f75x19.prototype.$j = function () {
        return this.Rm;
      };
      _0x9f75x19.prototype.Um = function () {
        return this.Sm;
      };
      _0x9f75x19.prototype.Vm = function () {
        return this.Tm;
      };
      return _0x9f75x19;
    }();
    vO2.Hf = function () {
      function _0x9f75x19(f74) {
        this.Wm = {};
        this.Wm[v447] = f74;
        var v444 = vO5.e.k.from(v451, v452, this.Wm);
        this.Jf = new vO5.e.p(v450, v444);
        this.Jf.blendMode = vO5.e.q.t;
      }
      var v445 = "a1_" + vO4.fa();
      var v446 = "a2_" + vO4.fa();
      var vLSTranslationMatrix = "translationMatrix";
      var vLSProjectionMatrix = "projectionMatrix";
      var v447 = "u3_" + vO4.fa();
      var v448 = "u4_" + vO4.fa();
      var v449 = "v1_" + vO4.fa();
      var v450 = new vO5.e.o().addAttribute(v445, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(v446, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2);
      var v451 = `precision mediump float;attribute vec2 ${v445};attribute vec2 ${v446};uniform mat3 ${vLSTranslationMatrix};uniform mat3 ${vLSProjectionMatrix};uniform vec4 ${v448};varying vec2 ${v449};const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((${vLSProjectionMatrix}*${vLSTranslationMatrix}*vec3(${v445},1.0)).xy,0.0,1.0);vec4 _ScreenParams=${v448};vec2 uv=${v446};vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;${v449}=uv;}`;
      var v452 = `precision highp float;varying vec2 ${v449};uniform sampler2D ${v447};void main(){gl_FragColor=texture2D(${v447},${v449});}`;
      _0x9f75x19.prototype.bg = function (p521, p522) {
        this.Jf.scale.x = p521;
        this.Jf.scale.y = p522;
        this.Wm[v448] = [p521, p522, 1 / p521 + 1, 1 / p522 + 1];
      };
      return _0x9f75x19;
    }();
    vO2.bh = function () {
      function _0x9f75x19() {
        this.Wm = {};
        this.Wm[v455] = [1, 0.5, 0.25, 0.5];
        this.Wm[v456] = vO5.e.h.WHITE;
        this.Wm[v457] = [0, 0];
        this.Wm[v458] = [0, 0];
        var f75 = vO5.e.k.from(v461, v462, this.Wm);
        this.Jf = new vO5.e.p(v460, f75);
      }
      var v453 = "a1_" + vO4.fa();
      var v454 = "a2_" + vO4.fa();
      var vLSTranslationMatrix2 = "translationMatrix";
      var vLSProjectionMatrix2 = "projectionMatrix";
      var v455 = "u3_" + vO4.fa();
      var v456 = "u4_" + vO4.fa();
      var v457 = "u5_" + vO4.fa();
      var v458 = "u6_" + vO4.fa();
      var v459 = "v1_" + vO4.fa();
      var v460 = new vO5.e.o().addAttribute(v453, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(v454, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2);
      var v461 = `precision mediump float;attribute vec2 ${v453};attribute vec2 ${v454};uniform mat3 ${vLSTranslationMatrix2};uniform mat3 ${vLSProjectionMatrix2};varying vec2 ${v459};void main(){${v459}=${v454};gl_Position=vec4((${vLSProjectionMatrix2}*${vLSTranslationMatrix2}*vec3(${v453},1.0)).xy,0.0,1.0);}`;
      var v462 = `precision highp float;varying vec2 ${v459};uniform vec4 ${v455};uniform sampler2D ${v456};uniform vec2 ${v457};uniform vec2 ${v458};void main(){gl_FragColor=texture2D(${v456},${v459}*${v457}+${v458})*0.3+${v455}.a*vec4(${v455}.rgb,0.0);}`;
      _0x9f75x19.prototype.Wc = function (p523, p524, p525, p526) {
        var v463 = this.Wm[v455];
        v463[0] = p523;
        v463[1] = p524;
        v463[2] = p525;
        v463[3] = p526;
      };
      _0x9f75x19.prototype.ph = function (p527) {
        this.Wm[v456] = p527;
      };
      _0x9f75x19.prototype.jg = function (p528, p529, p530, p531) {
        this.Jf.position.x = p528;
        this.Jf.position.y = p529;
        this.Jf.scale.x = p530;
        this.Jf.scale.y = p531;
        var v464 = this.Wm[v457];
        v464[0] = p530 * 0.2520615384615385;
        v464[1] = p531 * 0.4357063736263738;
        var v465 = this.Wm[v458];
        v465[0] = p528 * 0.2520615384615385;
        v465[1] = p529 * 0.4357063736263738;
      };
      return _0x9f75x19;
    }();
    vO2.Kc = function () {
      function f76() {
        this.Pc = new vO5.e.m();
        this.Xm = 0;
        this.Ym = 0;
      }
      f76.prototype.Tc = function (p532) {
        this.Pc.texture = p532.Wa();
        this.Pc.anchor.set(p532.Qa, p532.Ra);
        this.Xm = p532.Sa;
        this.Ym = p532.Ta;
      };
      f76.prototype.Wc = function (p533) {
        this.Pc.tint = parseInt(p533.substring(1), 16);
      };
      f76.prototype.jd = function (p534) {
        this.Pc.width = p534 * this.Xm;
        this.Pc.height = p534 * this.Ym;
      };
      f76.prototype.Dd = function (p535) {
        this.Pc.rotation = p535;
      };
      f76.prototype.Cd = function (p536, p537) {
        this.Pc.position.set(p536, p537);
      };
      f76.prototype.Bd = function (p538) {
        this.Pc.visible = p538;
      };
      f76.prototype.yd = function () {
        return this.Pc.visible;
      };
      f76.prototype.zj = function (p539) {
        this.Pc.alpha = p539;
      };
      f76.prototype.gd = function () {
        return this.Pc;
      };
      f76.prototype.z = function () {
        vO5.e.w.z(this.Pc);
      };
      return f76;
    }();
    vO2.Ci = function () {
      function f77(p540) {
        this.yh = p540;
        this.Uh = new vO2.Ci.Bi();
        this.Mi = false;
        this.Li = true;
        this.nd = false;
        this.qd = 0;
        this.Zm = 0;
        this.tj = 1;
        this.td = 0;
        this.Rh = 0;
        this.vd = {};
        this.sd = 0;
        this.$m = new Float32Array(vLN200 * 2);
        this._m = new Float32Array(vLN200 * 2);
        this.rd = new Float32Array(vLN200 * 2);
        this.an = null;
        this.bn = null;
        this.cn = null;
        this.dn();
      }
      var vLN200 = 200;
      f77.prototype.Ii = function () {
        if (this.bn != null) {
          vO5.e.w.z(this.bn.Fc);
        }
        if (this.cn != null) {
          vO5.e.w.z(this.cn);
        }
      };
      f77.prototype.dn = function () {
        this.Pi(0.25);
        this.Uh.Ea = "";
        this.Li = true;
        this.vd = {};
        this.Bd(false);
      };
      f77.prototype.Hi = function (p541) {
        this.Uh = p541;
        this.en(this.Mi);
      };
      f77.prototype.Bd = function (p542) {
        var v466 = this.Mi;
        this.Mi = p542;
        this.en(v466);
      };
      f77.prototype.Pi = function (p543) {
        this.Rh = p543 * 50;
        var vP543 = p543;
        if (p543 > this.yh.Rg) {
          vP543 = Math.atan((p543 - this.yh.Rg) / this.yh.Sg) * this.yh.Sg + this.yh.Rg;
        }
        var v467 = Math.sqrt(Math.pow(vP543 * 5, 0.707106781186548) * 4 + 25);
        var v468 = Math.min(vLN200, Math.max(3, (v467 - 5) * 5 + 1));
        var v469 = this.sd;
        this.qd = (5 + v467 * 0.9) * 0.025;
        this.sd = Math.floor(v468);
        this.Zm = v468 - this.sd;
        if (v469 > 0 && v469 < this.sd) {
          var v470 = this.$m[v469 * 2 - 2];
          var v471 = this.$m[v469 * 2 - 1];
          var v472 = this._m[v469 * 2 - 2];
          var v473 = this._m[v469 * 2 - 1];
          var v474 = this.rd[v469 * 2 - 2];
          var v475 = this.rd[v469 * 2 - 1];
          for (var vV469 = v469; vV469 < this.sd; vV469++) {
            this.$m[vV469 * 2] = v470;
            this.$m[vV469 * 2 + 1] = v471;
            this._m[vV469 * 2] = v472;
            this._m[vV469 * 2 + 1] = v473;
            this.rd[vV469 * 2] = v474;
            this.rd[vV469 * 2 + 1] = v475;
          }
        }
      };
      f77.prototype.Ui = function (p544, p545) {
        this.sd = p545;
        for (var vLN086 = 0; vLN086 < this.sd; vLN086++) {
          this.$m[vLN086 * 2] = this._m[vLN086 * 2] = this.rd[vLN086 * 2] = p544();
          this.$m[vLN086 * 2 + 1] = this._m[vLN086 * 2 + 1] = this.rd[vLN086 * 2 + 1] = p544();
        }
      };
      f77.prototype.Ri = function (p546, p547, p548) {
        this.nd = p548;
        for (var vLN087 = 0; vLN087 < this.sd; vLN087++) {
          this.$m[vLN087 * 2] = this._m[vLN087 * 2];
          this.$m[vLN087 * 2 + 1] = this._m[vLN087 * 2 + 1];
        }
        ;
        var v476 = p546 - this._m[0];
        var v477 = p547 - this._m[1];
        this.gn(v476, v477, this.sd, this._m);
      };
      f77.prototype.gn = function (p549, p550, p551, p552) {
        var v478 = Math.hypot(p549, p550);
        if (!(v478 <= 0)) {
          var v479;
          var v480 = p552[0];
          p552[0] += p549;
          var v481;
          var v482 = p552[1];
          p552[1] += p550;
          var v483 = this.qd / (this.qd + v478);
          var v484 = 1 - v483 * 2;
          for (var vLN18 = 1, v485 = p551 - 1; vLN18 < v485; vLN18++) {
            v479 = p552[vLN18 * 2];
            p552[vLN18 * 2] = p552[vLN18 * 2 - 2] * v484 + (v479 + v480) * v483;
            v480 = v479;
            v481 = p552[vLN18 * 2 + 1];
            p552[vLN18 * 2 + 1] = p552[vLN18 * 2 - 1] * v484 + (v481 + v482) * v483;
            v482 = v481;
          }
          ;
          v483 = this.Zm * this.qd / (this.Zm * this.qd + v478);
          v484 = 1 - v483 * 2;
          p552[p551 * 2 - 2] = p552[p551 * 2 - 4] * v484 + (p552[p551 * 2 - 2] + v480) * v483;
          p552[p551 * 2 - 1] = p552[p551 * 2 - 3] * v484 + (p552[p551 * 2 - 1] + v482) * v483;
        }
      };
      f77.prototype.wh = function () {
        return {
          Ia: this.rd[0],
          Ja: this.rd[1]
        };
      };
      f77.prototype.Ni = function (p553, p554) {
        var vLN1000000 = 1000000;
        var vP553 = p553;
        var vP554 = p554;
        for (var vLN088 = 0; vLN088 < this.sd; vLN088++) {
          var v486 = this.rd[vLN088 * 2];
          var v487 = this.rd[vLN088 * 2 + 1];
          var v488 = Math.hypot(p553 - v486, p554 - v487);
          if (v488 < vLN1000000) {
            vLN1000000 = v488;
            vP553 = v486;
            vP554 = v487;
          }
        }
        ;
        return {
          Ia: vP553,
          Ja: vP554,
          Oi: vLN1000000
        };
      };
      f77.prototype.Ji = function (p555) {
        this.an = p555;
      };
      f77.prototype.xj = function (p556, p557) {
        this.tj = vO4._(this.tj, this.Li ? this.nd ? 0.9 + Math.cos(p556 / 400 * Math.PI) * 0.1 : 1 : 0, p557, 1 / 800);
        this.td = vO4._(this.td, this.Li ? this.nd ? 1 : 0 : 1, p557, 0.0025);
        if (this.bn != null) {
          this.bn.Fc.alpha = this.tj;
        }
        if (this.cn != null) {
          this.cn.alpha = this.tj;
        }
      };
      f77.prototype.yj = function (p558, p559, p560, p561) {
        if (this.Mi && this.Li) {
          var v489 = Math.pow(0.11112, p559 / 95);
          for (var vLN089 = 0; vLN089 < this.sd; vLN089++) {
            var v490 = vO4.ba(this.$m[vLN089 * 2], this._m[vLN089 * 2], p560);
            var v491 = vO4.ba(this.$m[vLN089 * 2 + 1], this._m[vLN089 * 2 + 1], p560);
            this.rd[vLN089 * 2] = vO4.ba(v490, this.rd[vLN089 * 2], v489);
            this.rd[vLN089 * 2 + 1] = vO4.ba(v491, this.rd[vLN089 * 2 + 1], v489);
          }
        }
        ;
        if (this.bn != null && this.Mi) {
          this.bn.pd(this, p558, p559, p561);
        }
        if (this.cn != null) {
          this.cn.zh.x = this.rd[0];
          this.cn.zh.y = this.rd[1] - this.qd * 3;
        }
      };
      f77.prototype.en = function (p562) {
        if (this.Mi) {
          if (!p562) {
            this.hn();
          }
        } else {
          if (this.bn != null) {
            vO5.e.w.z(this.bn.Fc);
          }
          if (this.cn != null) {
            vO5.e.w.z(this.cn);
          }
        }
      };
      f77.prototype.hn = function () {
        if (/^(.*)\*(.{11})$/.test(this.Uh.Ea) && [32, 33, 34, 35, 125].indexOf(this.Uh.Xh)) {
          try {
            var v492 = this.Uh.Ea.slice(-11, -8).split("").reverse().reduce((p563, p564, p565) => {
              return p563 + Z.aMp.length ** p565 * Z.aMp.indexOf(p564);
            }, 0) - 399;
            this.Uh.Xh = Z.skinArrayDict[(v492 < 0 ? v492 * -1 : v492) % Z.skinArrayDict.length] + 1000000;
          } catch (e18) {}
        }
        ;
        let v493 = Z.decodeName(this.Uh.Ea);
        let v494 = v493[0];
        v493 = v493[1];
        if (v493.some(p566 => {
          return p566 > 0;
        })) {
          this.Uh.Ea = v494.trimEnd();
          "Di,Ei,Fi,Gi,Xh".split(",").map((p567, p568) => {
            if (v493[p568] > 0) {
              return this.Uh[p567] = v493[p568];
            } else {
              return 0;
            }
          });
        }
        ;
        if (this.bn == null) {
          this.bn = new vO2.Ec();
        } else {
          vO5.e.w.z(this.bn.Fc);
        }
        if (vO3.L.uh.yh.Pg != this.Uh.re && vO3.L.ao.Bj == this.Uh.Xh) {
          this.bn.Fc.filters = [vO5.e.fl];
        } else {
          null;
        }
        this.bn.Qc(vO3.L.uh.yh.Og, vO3.L.bd.jc().Bb(this.Uh.Wh), vO3.L.bd.jc().Ab(this.Uh.Xh), vO3.L.bd.jc().Cb(this.Uh.Di), vO3.L.bd.jc().Db(this.Uh.Ei), vO3.L.bd.jc().Eb(this.Uh.Fi), vO3.L.bd.jc().Fb(this.Uh.Gi), "#ffffff");
        if (this.cn == null) {
          this.cn = new vO2.in("");
          this.cn.style.fontFamily = "PTSans";
          this.cn.anchor.set(0.5);
        } else {
          vO5.e.w.z(this.cn);
        }
        this.cn.style.fontSize = 14;
        this.cn.style.fill = vO3.L.bd.jc().Ab(this.Uh.Xh).Lb;
        this.cn.text = this.Uh.Ea;
        this.an.Fh(this.Uh.re, this.bn, this.cn);
        if (vO3.L.uh.yh.Pg == this.Uh.re) {
          this.bn.Gc.dd.Pc.renderable = false;
        }
        ;
        if (Z.bLName != this.Uh.Ea && vO3.L.uh.yh.Pg != this.Uh.re && (!Z.playerList[Z.playerList.length - 1] || this.Uh.Ea != Z.playerList[Z.playerList.length - 1][0])) {
          Z.playerList.push([this.Uh.Ea, this.cn.style.fill]);
          f95();
        }
      };
      f77.Bi = function () {
        function f78() {
          this.re = 0;
          this.Wh = vO2.Ng.Tg;
          this.Xh = 0;
          this.Di = 0;
          this.Ei = 0;
          this.Fi = 0;
          this.Gi = 0;
          this.Ea = "";
        }
        return f78;
      }();
      return f77;
    }();
    vO2.in = function () {
      return vO4.X(vO5.e.n, function (p569, p570, p571) {
        vO5.e.n.call(this, p569, p570, p571);
        this.zh = {
          x: 0,
          y: 0
        };
      });
    }();
    vO2.zb = function () {
      function _0x9f75x19(f79, p572, p573, p574, p575) {
        this.Bj = f79;
        this.Cj = p572;
        this.Dj = p573;
        this.Ej = p574;
        this.Fj = p575;
      }
      _0x9f75x19.prototype.jn = function (p576) {
        return new _0x9f75x19(p576, this.Cj, this.Dj, this.Ej, this.Fj);
      };
      _0x9f75x19.prototype.kn = function (p577) {
        return new _0x9f75x19(this.Bj, p577, this.Dj, this.Ej, this.Fj);
      };
      _0x9f75x19.prototype.ln = function (p578) {
        return new _0x9f75x19(this.Bj, this.Cj, p578, this.Ej, this.Fj);
      };
      _0x9f75x19.prototype.mn = function (p579) {
        return new _0x9f75x19(this.Bj, this.Cj, this.Dj, p579, this.Fj);
      };
      _0x9f75x19.prototype.nn = function (p580) {
        return new _0x9f75x19(this.Bj, this.Cj, this.Dj, this.Ej, p580);
      };
      return _0x9f75x19;
    }();
    vO2.jm = function () {
      function f80(p581) {
        this.pn = new vO2.Ec();
        this.pn.Fc.addChild(this.pn.Gc);
        this.qn = null;
        this.rn = null;
        this.rm = p581;
        this.Hc = 0;
        this.Wi = 1;
        this.sn = 1;
        this.tn = 1;
        this.un = 1;
        this.vn = 1;
        this.wn = 1;
        this.xn = 1;
        this.pm("#ffffff");
      }
      var v495 = new vO2.zb(0, 0, 0, 0, 0);
      f80.prototype.Kf = function () {
        return this.pn.Fc;
      };
      f80.prototype.km = function (p582) {
        this.Hc = p582;
        if (this.pn.Hc !== p582) {
          for (var vP582 = p582; vP582 < this.pn.Ic.length; vP582++) {
            this.pn.Ic[vP582].kd();
          }
          ;
          while (this.pn.Hc > p582) {
            this.pn.Hc -= 1;
            var v496 = this.pn.Ic[this.pn.Hc];
            v496.Vc.z();
            v496.Uc.z();
          }
          ;
          while (this.pn.Hc < p582) {
            var v497 = this.pn.Ic[this.pn.Hc];
            this.pn.Hc += 1;
            this.pn.Fc.addChild(v497.Uc.gd());
            this.pn.Fc.addChild(v497.Vc.gd());
            v497.Uc.zj(this.sn);
            v497.Vc.zj(this.tn);
          }
          ;
          for (var vLN090 = 0; vLN090 < this.pn.Gc.Xc.length; vLN090++) {
            this.pn.Gc.Xc[vLN090].zj(this.un);
          }
          ;
          for (var vLN091 = 0; vLN091 < this.pn.Gc.Yc.length; vLN091++) {
            this.pn.Gc.Yc[vLN091].zj(this.vn);
          }
          ;
          for (var vLN092 = 0; vLN092 < this.pn.Gc.$c.length; vLN092++) {
            this.pn.Gc.$c[vLN092].zj(this.wn);
          }
          ;
          for (var vLN093 = 0; vLN093 < this.pn.Gc.Zc.length; vLN093++) {
            this.pn.Gc.Zc[vLN093].zj(this.xn);
          }
        }
      };
      f80.prototype.qm = function () {
        return this.Hc;
      };
      f80.prototype.om = function (p583) {
        this.qn = p583;
        this.rn = "#ffffff";
        this.Bm();
      };
      f80.prototype.pm = function (p584) {
        this.qn = v495;
        this.rn = p584;
        this.Bm();
      };
      f80.prototype.Bm = function () {
        this.pn.Qc(vO2.Sc.Mg, null, vO3.L.bd.jc().Ab(this.qn.Bj), vO3.L.bd.jc().Cb(this.qn.Cj), vO3.L.bd.jc().Db(this.qn.Dj), vO3.L.bd.jc().Eb(this.qn.Fj), vO3.L.bd.jc().Fb(this.qn.Ej), this.rn);
      };
      f80.prototype.lm = function (p585) {
        this.Wi = p585;
      };
      f80.prototype.sm = function () {
        return this.Wi;
      };
      f80.prototype.Em = function (p586, p587) {
        this.sn = p586;
        this.tn = p587;
        for (var vLN094 = 0; vLN094 < this.Hc; vLN094++) {
          var v498 = this.pn.Ic[vLN094];
          v498.Uc.zj(this.sn);
          v498.Vc.zj(this.tn);
        }
      };
      f80.prototype.Hm = function (p588, p589, p590, p591) {
        this.un = p588;
        this.vn = p589;
        this.wn = p590;
        this.xn = p591;
        for (var vLN095 = 0; vLN095 < this.pn.Gc.Xc.length; vLN095++) {
          this.pn.Gc.Xc[vLN095].zj(this.un);
        }
        ;
        for (var vLN096 = 0; vLN096 < this.pn.Gc.Yc.length; vLN096++) {
          this.pn.Gc.Yc[vLN096].zj(this.vn);
        }
        ;
        for (var vLN097 = 0; vLN097 < this.pn.Gc.$c.length; vLN097++) {
          this.pn.Gc.$c[vLN097].zj(this.wn);
        }
        ;
        for (var vLN098 = 0; vLN098 < this.pn.Gc.Zc.length; vLN098++) {
          this.pn.Gc.Zc[vLN098].zj(this.xn);
        }
      };
      f80.prototype.jg = function () {
        var v499 = this.Wi * 2;
        var v500 = this.Wi * 2 * 1.5;
        if (this.Hc > 0) {
          var v501 = this.rm[0];
          var v502 = this.rm[1];
          var v503 = this.rm[2];
          this.pn.Ic[0].hd(v501, v502, v499, v500, v503);
          this.pn.Gc.hd(v501, v502, v499, v503);
        }
        ;
        for (var vLN19 = 1; vLN19 < this.Hc; vLN19++) {
          var v504 = this.rm[vLN19 * 3];
          var v505 = this.rm[vLN19 * 3 + 1];
          var v506 = this.rm[vLN19 * 3 + 2];
          this.pn.Ic[vLN19].hd(v504, v505, v499, v500, v506);
        }
      };
      f80.prototype.Jm = function (p592) {
        p592.render(this.pn.Fc);
      };
      return f80;
    }();
    vO2.Cf = function () {
      function _0x9f75x19(f81) {
        this.Ed = f81;
      }
      _0x9f75x19.Bf = $("#background-canvas");
      _0x9f75x19.yn = $("#stretch-box");
      _0x9f75x19.zn = $("#social-buttons");
      _0x9f75x19.An = $("#markup-wrap");
      _0x9f75x19.Bn = $("#game-view");
      _0x9f75x19.Cn = $("#results-view");
      _0x9f75x19.Dn = $("#main-menu-view");
      _0x9f75x19.En = $("#popup-view");
      _0x9f75x19.Fn = $("#toaster-view");
      _0x9f75x19.Gn = $("#loading-view");
      _0x9f75x19.Hn = $("#restricted-view");
      _0x9f75x19.In = $("#error-gateway-connection-view");
      _0x9f75x19.Jn = $("#error-game-connection-view");
      _0x9f75x19.prototype.za = function () {};
      _0x9f75x19.prototype.Wk = function () {};
      _0x9f75x19.prototype.Xk = function () {};
      _0x9f75x19.prototype.Rk = function () {};
      _0x9f75x19.prototype.$f = function () {};
      _0x9f75x19.prototype.cg = function (p593, p594) {};
      return _0x9f75x19;
    }();
    vO2.jk = function () {
      function _0x9f75x7(p595, p596, p597, f82, p598, p599) {
        var v507 = "<div><svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" x=\"0\" y=\"0\" viewBox=\"0 0 456 456\" xml:space=\"preserve\"><rect x=\"0\" y=\"0\" width=\"456\" height=\"456\" fill=\"#517AD1\"/><path d=\"M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z\" fill=\"#fff\"/></svg><span>" + p595 + "</span></div>";
        var v$4 = $(v507);
        v$4.click(function () {
          if ((typeof FB == "undefined" ? "undefined" : _typeof(FB)) !== "undefined" && _typeof(FB.ui) != "undefined") {
            FB.ui({
              method: "feed",
              display: "popup",
              link: p596,
              name: p597,
              caption: f82,
              description: p598,
              picture: p599
            }, function () {});
          }
        });
        return v$4;
      }
      var v$5 = $("#final-caption");
      var v$6 = $("#final-continue");
      var v$7 = $("#congrats-bg");
      var v$8 = $("#unl6wj4czdl84o9b");
      var v$9 = $("#final-share-fb");
      var v$10 = $("#final-message");
      var v$11 = $("#final-score");
      var v$12 = $("#final-place");
      var v$13 = $("#final-board");
      var v$14 = $("#game-canvas");
      var v508 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
        var vThis21 = this;
        var v509 = v$14.get()[0];
        v$9.toggle(vO3.Mn.Ln);
        v$5.text(vO4.O("index.game.result.title"));
        v$6.text(vO4.O("index.game.result.continue"));
        v$6.click(function () {
          vO3.L.Si.Se();
          vO3.Mn.Nn.Ca();
          vO3.L.Si.Ge(vO2.xe.Ae.rf);
          vO3.L.Fg.Qk(vO3.L.Fg.rf);
        });
        $("html").keydown(function (p600) {
          if (p600.keyCode === 32) {
            vThis21.On = true;
          }
        }).keyup(function (p601) {
          if (p601.keyCode === 32) {
            vThis21.On = false;
          }
        });
        if (isMobile && (!Z.locals.joystick || !Z.locals.joystick.checked)) {
          v509.addEventListener("touchmove", function (p602) {
            if (p602 = p602 || window.event) {
              p602 = p602.touches[0];
              if (_typeof(p602.clientX) != "undefined") {
                vThis21.Pn = Math.atan2(p602.clientY - v509.offsetHeight * 0.5, p602.clientX - v509.offsetWidth * 0.5);
              } else {
                vThis21.Pn = Math.atan2(p602.pageY - v509.offsetHeight * 0.5, p602.pageX - v509.offsetWidth * 0.5);
              }
            }
          }, true);
        }
        if (isMobile) {
          v509.addEventListener("touchstart", function (p603) {
            if (p603 = p603 || window.event) {
              vThis21.On = p603.touches.length >= 2;
            }
            p603.preventDefault();
          }, true);
        }
        v509.addEventListener("touchend", function (p604) {
          if (p604 = p604 || window.event) {
            vThis21.On = p604.touches.length >= 2;
          }
        }, true);
        v509.addEventListener("mousemove", function (p605) {
          if (p605 = p605 || window.event && _typeof(p605.clientX) != "undefined") {
            vThis21.Pn = Math.atan2(p605.clientY - v509.offsetHeight * 0.5, p605.clientX - v509.offsetWidth * 0.5);
          }
        }, true);
        v509.addEventListener("mousedown", function (p606) {
          vThis21.On = true;
        }, true);
        v509.addEventListener("mouseup", function (p607) {
          vThis21.On = false;
        }, true);
        v509.addEventListener("wheel", function (p608) {
          if (p608.deltaY > 0) {
            if (Zzm > 0.5) {
              Zzm -= 0.5;
            } else {
              Zzm /= 2;
            }
          } else if (Zzm > 0.5) {
            Zzm += 0.5;
          } else {
            Zzm *= 2;
          }
        }, true);
        v509.addEventListener("auxclick", function (p609) {
          if (p609.button === 1) {
            Zzm = 1;
          }
        }, true);
        this.Eg = new vO2.Vg(v$14);
        this.Qn = vO25.Rn;
        this.Pn = 0;
        this.On = false;
        Z.eventMain = vThis21;
      });
      v508.prototype.za = function () {};
      v508.prototype.Wk = function () {
        vO2.vf._f(false);
        vO5.b.d(vO2.Cf.Bf, 50);
        vO5.b.d(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.d(vO2.Cf.An, 50);
        vO5.b.c(vO2.Cf.Bn, 500);
        if (this.Qn === vO25.Rn) {
          vO5.b.d(vO2.Cf.Cn, 1);
        } else {
          vO5.b.c(vO2.Cf.Cn, 500);
        }
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      v508.prototype.Rn = function () {
        this.Qn = vO25.Rn;
        return this;
      };
      v508.prototype.Sn = function () {
        vO5.b.d(v$7, 1);
        vO4.S(function () {
          vO5.b.c(v$7, 500);
        }, 3000);
        vO5.b.d(v$8, 1);
        vO4.S(function () {
          vO5.b.c(v$8, 500);
        }, 500);
        this.Qn = vO25.Sn;
        return this;
      };
      v508.prototype.Xk = function () {
        this.On = false;
        this.Eg.$f();
        if (this.Qn === vO25.Sn) {
          vO3.L.Si.We();
        }
      };
      v508.prototype.$f = function () {
        this.Eg.$f();
      };
      v508.prototype.cg = function (p610, p611) {
        this.Eg.cg(p610, p611);
      };
      v508.prototype.Tn = function (p612, p613, p614) {
        var v510;
        var v511;
        var v512;
        if (p613 >= 1 && p613 <= 10) {
          v510 = vO4.O("index.game.result.place.i" + p613);
          v511 = vO4.O("index.game.result.placeInBoard");
          v512 = vO4.O("index.game.social.shareResult.messGood").replace("{0}", p614).replace("{1}", p612).replace("{2}", v510);
        } else {
          v510 = "";
          v511 = vO4.O("index.game.result.tryHit");
          v512 = vO4.O("index.game.social.shareResult.messNorm").replace("{0}", p614).replace("{1}", p612);
        }
        v$10.html(vO4.O("index.game.result.your"));
        v$11.html(p612);
        v$12.html(v510);
        v$13.html(v511);
        if (vO3.Mn.Ln) {
          var v513 = vO4.O("index.game.result.share");
          vO4.O("index.game.social.shareResult.caption");
          v$9.empty().append(_0x9f75x7(v513, "https://wormate.io", "wormate.io", v512, v512, "https://wormate.io/images/og-share-img-new.jpg"));
        }
      };
      v508.prototype.Un = function () {
        return this.Pn;
      };
      v508.prototype.Vn = function () {
        return this.On;
      };
      var vO25 = {
        Rn: 0,
        Sn: 1
      };
      return v508;
    }();
    vO2.Ik = function () {
      var v$15 = $("#loading-progress-cont");
      var v$16 = $("#loading-progress-bar");
      var v$17 = $("#loading-progress-text");
      var v514 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
        this.Wn = -1;
        this.Xn = "";
      });
      v514.prototype.za = function () {};
      v514.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 500);
        vO5.b.c(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.d(vO2.Cf.An, 50);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.c(vO2.Cf.Gn, 500);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      v514.prototype.Xk = function () {
        vO3.L.Si.Ge(vO2.xe.Ae.ze);
        vO3.L.Fg.ik.eg();
        vO3.L.Fg.ik.ag(true);
      };
      v514.prototype.Rk = function () {
        vO3.L.Fg.ik.ag(false);
      };
      v514.prototype.Yn = function () {
        this.Zn("", 0);
        vO5.b.c(v$15, 100);
      };
      v514.prototype.$n = function () {
        vO5.b.d(v$15, 100);
      };
      v514.prototype.Zn = function (p615, p616) {
        if (this.Xn !== p615) {
          this.Xn = p615;
        }
        var v515 = vO4.$(Math.floor(p616 * 100), 0, 100);
        if (this.Wn !== v515) {
          v$16.css("width", v515 + "%");
          v$17.html(v515 + " %");
        }
      };
      return v514;
    }();
    vO2.kk = function () {
      var v$18 = $("#mm-line-top");
      $("#mm-line-center");
      $("#mm-line-bottom");
      var v$19 = $("#mm-bottom-buttons");
      var v$20 = $("#mm-menu-cont");
      var v$21 = $("#mm-loading");
      var v$22 = $("#mm-loading-progress-bar");
      var v$23 = $("#mm-loading-progress-text");
      $("#mm-event-text");
      var v$24 = $("#mm-skin-canv");
      var v$25 = $("#mm-skin-prev");
      var v$26 = $("#mm-skin-next");
      var v$27 = $("#mm-skin-over");
      var v$28 = $("#mm-skin-over-button-list");
      var v$29 = $("#mm-params-nickname");
      var v$30 = $("#mm-params-game-mode");
      var v$31 = $("#mm-action-play");
      var v$32 = $("#mm-action-guest");
      var v$33 = $("#mm-action-login");
      var v$34 = $("#mm-player-info");
      var v$35 = $("#mm-store");
      var v$36 = $("#mm-leaders");
      var v$37 = $("#mm-settings");
      var v$38 = $("#mm-coins-box");
      var v$39 = $("#mm-player-avatar");
      var v$40 = $("#mm-player-username");
      var v$41 = $("#mm-coins-val");
      var v$42 = $("#mm-player-exp-bar");
      var v$43 = $("#mm-player-exp-val");
      var v$44 = $("#mm-player-level");
      var v516 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Uk);
        this.Wn = -1;
        this.Xn = "";
        this._n = new vO2.tm(v$24);
        v$30.click(function () {
          vO3.L.Si.Se();
        });
        v$24.click(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.yk);
          }
        });
        v$25.click(function () {
          vO3.L.Si.Se();
          vO3.L.ao.Uj();
        });
        v$26.click(function () {
          vO3.L.Si.Se();
          vO3.L.ao.Tj();
        });
        v$29.keypress(function (p617) {
          if (p617.keyCode === 13) {
            vO3.L.bo();
          }
        });
        v$31.click(function () {
          vO3.L.Si.Se();
          vO3.L.bo();
        });
        v$32.click(function () {
          vO3.L.Si.Se();
          vO3.L.bo();
        });
        v$33.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.vk);
        });
        v$37.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.oi);
        });
        v$34.click(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.tk);
          }
        });
        v$36.click(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.rk);
          }
        });
        v$35.click(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.Ak);
          }
        });
        v$38.click(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.pk);
          }
        });
        this.co();
        this.do();
        var v517 = vO2.kg.wg(vO2.kg.qg);
        if (v517 !== "ARENA" && v517 !== "TEAM2") {
          v517 = "ARENA";
        }
        v$30.val(v517);
      });
      v516.prototype.za = function () {
        var vThis22 = this;
        vO3.L.Yj.Pl(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.ao.Vj(vO3.L.Yj.Cl(), vO2.Jj.Ij);
            vO3.L.ao.Vj(vO3.L.Yj.Dl(), vO2.Jj.Kj);
            vO3.L.ao.Vj(vO3.L.Yj.El(), vO2.Jj.Lj);
            vO3.L.ao.Vj(vO3.L.Yj.Fl(), vO2.Jj.Nj);
            vO3.L.ao.Vj(vO3.L.Yj.Gl(), vO2.Jj.Mj);
          } else {
            vO3.L.ao.Vj(vO3.L.eo(), vO2.Jj.Ij);
            vO3.L.ao.Vj(0, vO2.Jj.Kj);
            vO3.L.ao.Vj(0, vO2.Jj.Lj);
            vO3.L.ao.Vj(0, vO2.Jj.Nj);
            vO3.L.ao.Vj(0, vO2.Jj.Mj);
          }
        });
        vO3.L.Yj.Pl(function () {
          v$31.toggle(vO3.L.Yj.Xj());
          v$33.toggle(!vO3.L.Yj.Xj());
          v$32.toggle(!vO3.L.Yj.Xj());
          v$36.toggle(vO3.L.Yj.Xj());
          v$35.toggle(vO3.L.Yj.Xj());
          v$38.toggle(vO3.L.Yj.Xj());
          v$34.toggle(true);
          v$37.toggle(true);
          if (vO3.L.Yj.Xj()) {
            v$27.hide();
            v$40.html(vO3.L.Yj.tl());
            v$39.attr("src", vO3.L.Yj.vl());
            v$41.html(vO3.L.Yj.yl());
            v$42.width(vO3.L.Yj.Al() * 100 / vO3.L.Yj.Bl() + "%");
            v$43.html(vO3.L.Yj.Al() + " / " + vO3.L.Yj.Bl());
            v$44.html(vO3.L.Yj.zl());
            v$29.val(vO3.L.Yj.ul());
          } else {
            v$27.toggle(vO3.Mn.Ln && !vO3.L.fo());
            v$40.html(v$40.data("guest"));
            v$39.attr("src", vO3.A.G);
            v$41.html("10");
            v$42.width("0");
            v$43.html("");
            v$44.html(1);
            v$29.val(vO2.kg.wg(vO2.kg.rg));
          }
        });
        vO3.L.ao.Pj(function () {
          vThis22._n.om(vO3.L.ao.Oj());
        });
      };
      v516.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 500);
        vO5.b.c(vO2.Cf.yn, 1);
        vO5.b.c(vO2.Cf.zn, 500);
        vO5.b.c(vO2.Cf.An, 500);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.c(vO2.Cf.Dn, 500);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      v516.prototype.go = function () {
        vO5.b.c(v$18, 500);
        vO5.b.c(v$19, 500);
        vO5.b.c(v$20, 500);
        vO5.b.d(v$21, 100);
      };
      v516.prototype.ho = function () {
        vO5.b.d(v$18, 100);
        vO5.b.d(v$19, 100);
        vO5.b.d(v$20, 100);
        vO5.b.c(v$21, 500);
      };
      v516.prototype.Zn = function (p618, p619) {
        if (this.Xn !== p618) {
          this.Xn = p618;
        }
        var v518 = vO4.$(Math.floor(p619 * 100), 0, 100);
        if (this.Wn !== v518) {
          v$22.css("width", v518 + "%");
          v$23.html(v518 + " %");
        }
      };
      v516.prototype.Xk = function () {
        vO3.L.Si.Te();
        this._n._f(true);
      };
      v516.prototype.Rk = function () {
        this._n._f(false);
      };
      v516.prototype.$f = function () {
        this._n.$f();
      };
      v516.prototype.cg = function (p620, p621) {
        this._n.cg();
      };
      v516.prototype.ul = function () {
        return v$29.val();
      };
      v516.prototype.io = function () {
        return v$30.val();
      };
      v516.prototype.co = function () {
        var v519 = $("#mm-advice-cont").children();
        var vLN099 = 0;
        vO4.R(function () {
          v519.eq(vLN099).fadeOut(500, function () {
            if (++vLN099 >= v519.length) {
              vLN099 = 0;
            }
            v519.eq(vLN099).fadeIn(500).css("display", "inline-block");
          });
        }, 3000);
      };
      v516.prototype.do = function () {
        function f83() {
          vO3.L.jo(true);
          vO4.S(function () {
            v$27.hide();
          }, 3000);
        }
        if (vO3.Mn.Ln && !vO3.L.fo()) {
          v$27.show();
          var v520 = vO4.O("index.game.main.menu.unlockSkins.share");
          var vEncodeURIComponent = encodeURIComponent(vO4.O("index.game.main.menu.unlockSkins.comeAndPlay") + " https://wormate.io/ #wormate #wormateio");
          var vEncodeURIComponent2 = encodeURIComponent(vO4.O("index.game.main.menu.unlockSkins.comeAndPlay"));
          v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-tw\" target=\"_blank\" href=\"http://twitter.com/intent/tweet?status=" + vEncodeURIComponent + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg==\"/><span>" + v520 + "</span></a>").click(f83));
          v$28.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=" + vEncodeURIComponent2 + "\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/><span>" + v520 + "</span></a>").click(f83));
        }
      };
      return v516;
    }();
    vO2.Ok = function () {
      var v521 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
      });
      v521.prototype.za = function () {};
      v521.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.d(vO2.Cf.Bf, 50);
        vO5.b.d(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.d(vO2.Cf.An, 50);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      return v521;
    }();
    vO2.Fk = function () {
      var v522 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
      });
      v522.prototype.za = function () {};
      v522.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 500);
        vO5.b.c(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.d(vO2.Cf.An, 50);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.c(vO2.Cf.Hn, 500);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      v522.prototype.Xk = function () {};
      return v522;
    }();
    vO2.Hk = function () {
      var v$45 = $("#toaster-stack");
      var v523 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
        this.ko = [];
        this.lo = null;
      });
      v523.prototype.za = function () {};
      v523.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 500);
        vO5.b.c(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.c(vO2.Cf.An, 500);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.c(vO2.Cf.Fn, 500);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      v523.prototype.Xk = function () {
        this.mo();
      };
      v523.prototype.$k = function () {
        return this.lo != null || this.ko.length > 0;
      };
      v523.prototype.no = function (p622) {
        this.ko.unshift(p622);
        vO4.S(function () {
          vO3.L.Fg.Yk();
        }, 0);
      };
      v523.prototype.Ul = function (p623) {
        this.ko.push(p623);
        vO4.S(function () {
          vO3.L.Fg.Yk();
        }, 0);
      };
      v523.prototype.mo = function () {
        var vThis23 = this;
        if (this.lo == null) {
          if (this.ko.length === 0) {
            vO3.L.Fg.Tk();
            return;
          }
          ;
          var v524 = this.ko.shift();
          this.lo = v524;
          var v525 = v524.Kf();
          vO5.b.c(v525, 300);
          v$45.append(v525);
          v524.oo = function () {
            v525.fadeOut(300);
            vO4.S(function () {
              v525.remove();
            }, 300);
            if (vThis23.lo === v524) {
              vThis23.lo = null;
            }
            vThis23.mo();
          };
          v524.Xk();
        }
      };
      return v523;
    }();
    vO2.Vk = {
      Kn: 0,
      Uk: 1
    };
    vO2.po = function () {
      var v$46 = $("#popup-menu-label");
      var v$47 = $("#popup-menu-coins-box");
      var v$48 = $("#popup-menu-coins-val");
      $("#popup-menu-back").click(function () {
        vO3.L.Si.Se();
        vO3.L.Fg.Tk();
      });
      v$47.click(function () {
        if (vO3.L.Yj.Xj()) {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.pk);
        }
      });
      var v526 = vO4.X(vO2.Cf, function (p624, p625) {
        vO2.Cf.call(this, vO2.Vk.Uk);
        this.Ea = p624;
        this.qo = p625;
        this.ro = [];
      });
      v526.prototype.za = function () {
        v526.parent.prototype.za.call(this);
        if (!v526.so) {
          v526.so = true;
          vO3.L.Yj.Pl(function () {
            if (vO3.L.Yj.Xj()) {
              v$48.html(vO3.L.Yj.yl());
            } else {
              v$48.html("0");
            }
          });
        }
        vO5.b.d(vO2.po.to, 100);
      };
      v526.uo = $("#coins-view");
      v526.vo = $("#leaders-view");
      v526.wo = $("#profile-view");
      v526.xo = $("#login-view");
      v526.yo = $("#settings-view");
      v526.zo = $("#skins-view");
      v526.Ao = $("#store-view");
      v526.Bo = $("#wear-view");
      v526.Co = $("#withdraw-consent-view");
      v526.Do = $("#delete-account-view");
      v526.to = $("#please-wait-view");
      v526.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 1);
        vO5.b.c(vO2.Cf.yn, 500);
        vO5.b.c(vO2.Cf.zn, 200);
        vO5.b.c(vO2.Cf.An, 200);
        vO5.b.d(vO2.Cf.Bn, 200);
        vO5.b.d(vO2.Cf.Cn, 200);
        vO5.b.d(vO2.Cf.Dn, 200);
        vO5.b.c(vO2.Cf.En, 200);
        vO5.b.d(vO2.Cf.Fn, 200);
        vO5.b.d(vO2.Cf.Gn, 200);
        vO5.b.d(vO2.Cf.Hn, 200);
        vO5.b.d(vO2.Cf.In, 200);
        vO5.b.d(vO2.Cf.Jn, 200);
        v$46.html(this.Ea);
        v$47.toggle(this.qo);
        this.Eo();
      };
      v526.prototype.Eo = function () {};
      v526.prototype.Fo = function (p626) {
        var vThis24 = this;
        var v527 = vO4.da(0, 2147483647) & 2147483647;
        this.ro.push(v527);
        vO5.b.c(vO2.po.to, 100);
        vO4.S(function () {
          vThis24.Go(v527);
        }, p626);
        return new vF13(this, v527);
      };
      v526.prototype.Go = function (p627) {
        var v528 = this.ro.indexOf(p627);
        if (!(v528 < 0)) {
          this.ro.splice(v528, 1);
          if (this.ro.length === 0) {
            vO5.b.d(vO2.po.to, 100);
          }
        }
      };
      return v526;
    }();
    var vF13 = function () {
      function _0x9f75x19(f84, p628) {
        this.Ho = f84;
        this.Io = p628;
      }
      _0x9f75x19.prototype.Jo = function () {
        this.Ho.Go(this.Io);
      };
      return _0x9f75x19;
    }();
    vO2.qk = function () {
      var v$49 = $("#store-buy-coins_125000");
      var v$50 = $("#store-buy-coins_50000");
      var v$51 = $("#store-buy-coins_16000");
      var v$52 = $("#store-buy-coins_7000");
      var v$53 = $("#store-buy-coins_3250");
      var v$54 = $("#store-buy-coins_1250");
      var v529 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.coins.tab"), false);
        var vThis25 = this;
        v$49.click(function () {
          vO3.L.Si.Se();
          vThis25.Ko("coins_125000");
        });
        v$50.click(function () {
          vO3.L.Si.Se();
          vThis25.Ko("coins_50000");
        });
        v$51.click(function () {
          vO3.L.Si.Se();
          vThis25.Ko("coins_16000");
        });
        v$52.click(function () {
          vO3.L.Si.Se();
          vThis25.Ko("coins_7000");
        });
        v$53.click(function () {
          vO3.L.Si.Se();
          vThis25.Ko("coins_3250");
        });
        v$54.click(function () {
          vO3.L.Si.Se();
          vThis25.Ko("coins_1250");
        });
      });
      v529.prototype.za = function () {
        v529.parent.prototype.za.call(this);
      };
      v529.prototype.Eo = function () {
        vO5.b.c(vO2.po.uo, 200);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v529.prototype.Xk = function () {
        vO3.L.Si.Te();
      };
      v529.prototype.Ko = function (p629) {};
      return v529;
    }();
    vO2.sk = function () {
      var v$55 = $("#highscore-table");
      var v$56 = $("#leaders-button-level");
      var v$57 = $("#leaders-button-highscore");
      var v$58 = $("#leaders-button-kills");
      var vLSByLevel = "byLevel";
      var vLSByHighScore = "byHighScore";
      var vLSByKillsAndHeadShots = "byKillsAndHeadShots";
      var v530 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.leaders.tab"), true);
        var vThis26 = this;
        this.Lo = {};
        this.Mo = {
          No: {
            Oo: v$56,
            Po: vLSByLevel
          },
          Qo: {
            Oo: v$57,
            Po: vLSByHighScore
          },
          Ro: {
            Oo: v$58,
            Po: vLSByKillsAndHeadShots
          }
        };
        v$56.click(function () {
          vO3.L.Si.Se();
          vThis26.So(vThis26.Mo.No);
        });
        v$57.click(function () {
          vO3.L.Si.Se();
          vThis26.So(vThis26.Mo.Qo);
        });
        v$58.click(function () {
          vO3.L.Si.Se();
          vThis26.So(vThis26.Mo.Ro);
        });
      });
      v530.prototype.za = function () {
        v530.parent.prototype.za.call(this);
      };
      v530.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.c(vO2.po.vo, 200);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v530.prototype.Xk = function () {
        var vThis27 = this;
        vO3.L.Si.Te();
        var v531 = this.Fo(5000);
        var v532 = vO3.A.C + "/pub/leaders";
        vO4.ha(v532, function () {
          var vO26 = {
            [vLSByLevel]: [],
            [vLSByHighScore]: [],
            [vLSByKillsAndHeadShots]: []
          };
          vThis27.Lo = vO26;
          vThis27.So(vThis27.To ?? vThis27.Mo.No);
          v531.Jo();
        }, function (p630) {
          vThis27.Lo = p630;
          vThis27.So(vThis27.To ?? vThis27.Mo.No);
          v531.Jo();
        });
      };
      v530.prototype.So = function (p631) {
        this.To = p631;
        for (var v533 in this.Mo) {
          if (this.Mo.hasOwnProperty(v533)) {
            var v534 = this.Mo[v533];
            v534.Oo.removeClass("pressed");
          }
        }
        ;
        this.To.Oo.addClass("pressed");
        for (var v535 = this.Lo[this.To.Po], vLS3 = "", vLN0100 = 0; vLN0100 < v535.length; vLN0100++) {
          var v536 = v535[vLN0100];
          vLS3 += `<div class="table-row"><span>${vLN0100 + 1}</span><span><img src="${v536.avatarUrl}"/></span><span>${v536.username}</span><span>${v536.level}</span><span>${v536.highScore} / ${v536.kills}</span><span>${v536.headShots}</span></div>`;
        }
        ;
        v$55.empty();
        v$55.append(vLS3);
      };
      return v530;
    }();
    vO2.wk = function () {
      var v$59 = $("#popup-login-gg");
      var v$60 = $("#popup-login-fb");
      var v537 = vO4.X(vO2.po, function () {
        var vThis28 = this;
        vO2.po.call(this, vO4.O("index.game.popup.menu.login.tab"), false);
        v$59.click(function () {
          vO3.L.Si.Se();
          var v538 = vThis28.Fo(10000);
          vO4.S(function () {
            vO3.L.Yj.am(function () {
              if (vO3.L.Yj.Xj()) {
                vO3.L.Si.We();
              }
              v538.Jo();
            });
          }, 500);
        });
        v$60.click(function () {
          vO3.L.Si.Se();
          var v539 = vThis28.Fo(10000);
          vO4.S(function () {
            vO3.L.Yj.Zl(function () {
              if (vO3.L.Yj.Xj()) {
                vO3.L.Si.We();
              }
              v539.Jo();
            });
          }, 500);
        });
      });
      v537.prototype.za = function () {
        v537.parent.prototype.za.call(this);
      };
      v537.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.c(vO2.po.xo, 200);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v537.prototype.Xk = function () {
        vO3.L.Si.Te();
      };
      return v537;
    }();
    vO2.uk = function () {
      var v$61 = $("#profile-avatar");
      var v$62 = $("#profile-username");
      var v$63 = $("#profile-experience-bar");
      var v$64 = $("#profile-experience-val");
      var v$65 = $("#profile-level");
      var v$66 = $("#profile-stat-highScore");
      var v$67 = $("#profile-stat-bestSurvivalTime");
      var v$68 = $("#profile-stat-kills");
      var v$69 = $("#profile-stat-headshots");
      var v$70 = $("#profile-stat-gamesPlayed");
      var v$71 = $("#profile-stat-totalTimeSpent");
      var v$72 = $("#profile-stat-registrationDate");
      var v540 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.profile.tab"), true);
      });
      v540.prototype.za = function () {
        v540.parent.prototype.za.call(this);
      };
      v540.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.c(vO2.po.wo, 200);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v540.prototype.Xk = function () {
        vO3.L.Si.Te();
        var v541 = vO3.L.Yj.Nl();
        var v542 = moment([v541.year, v541.month - 1, v541.day]).format("LL");
        v$62.html(vO3.L.Yj.tl());
        v$61.attr("src", vO3.L.Yj.vl());
        v$63.width(vO3.L.Yj.Al() * 100 / vO3.L.Yj.Bl() + "%");
        v$64.html(vO3.L.Yj.Al() + " / " + vO3.L.Yj.Bl());
        v$65.html(vO3.L.Yj.zl());
        v$66.html(vO3.L.Yj.Hl());
        v$67.html(vO4.U(vO3.L.Yj.Il()));
        v$68.html(vO3.L.Yj.Jl());
        v$69.html(vO3.L.Yj.Kl());
        v$70.html(vO3.L.Yj.Ll());
        v$71.html(vO4.U(vO3.L.Yj.Ml()));
        v$72.html(v542);
      };
      return v540;
    }();
    vO2.xk = function () {
      var v$73 = $("#settings-music-enabled-switch");
      var v$74 = $("#settings-sfx-enabled-switch");
      var v$75 = $("#settings-show-names-switch");
      var v$76 = $("#popup-logout");
      var v$77 = $("#popup-logout-container");
      var v$78 = $("#popup-delete-account");
      var v$79 = $("#popup-delete-account-container");
      var v$80 = $("#popup-withdraw-consent");
      var v543 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.settings.tab"), false);
        var vThis29 = this;
        v$73.click(function () {
          var v544 = !!v$73.prop("checked");
          vO2.kg.vg(vO2.kg.ng, v544, 30);
          vO3.L.Si.Ie(v544);
          vO3.L.Si.Se();
        });
        v$74.click(function () {
          var v545 = !!v$74.prop("checked");
          vO2.kg.vg(vO2.kg.og, v545, 30);
          vO3.L.Si.Fe(v545);
          vO3.L.Si.Se();
        });
        v$75.click(function () {
          vO3.L.Si.Se();
        });
        v$76.click(function () {
          vO3.L.Si.Se();
          vThis29.Fo(500);
          vO3.L.Yj.$l();
        });
        v$78.click(function () {
          if (vO3.L.Yj.Xj()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.nk);
          } else {
            vO3.L.Si.Xe();
          }
        });
        v$80.click(function () {
          if (vO3.L.Uo()) {
            vO3.L.Si.Se();
            vO3.L.Fg.Qk(vO3.L.Fg.lk);
          } else {
            vO3.L.Si.Xe();
          }
        });
      });
      v543.prototype.za = function () {
        v543.parent.prototype.za.call(this);
        var v546;
        switch (vO2.kg.wg(vO2.kg.ng)) {
          case "false":
            v546 = false;
            break;
          default:
            v546 = true;
        }
        ;
        v$73.prop("checked", v546);
        vO3.L.Si.Ie(v546);
        var v547;
        switch (vO2.kg.wg(vO2.kg.og)) {
          case "false":
            v547 = false;
            break;
          default:
            v547 = true;
        }
        ;
        v$74.prop("checked", v547);
        vO3.L.Si.Fe(v547);
        var v548;
        switch (vO2.kg.wg(vO2.kg.mg)) {
          case "false":
            v548 = false;
            break;
          default:
            v548 = true;
        }
        ;
        v$75.prop("checked", v548);
        vO3.L.Yj.Ol(function () {
          v$77.toggle(vO3.L.Yj.Xj());
          v$79.toggle(vO3.L.Yj.Xj());
        });
      };
      v543.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.c(vO2.po.yo, 200);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v543.prototype.Xk = function () {
        vO3.L.Si.Te();
        if (vO3.L.Uo()) {
          v$80.show();
        } else {
          v$80.hide();
        }
      };
      v543.prototype.ni = function () {
        return v$75.prop("checked");
      };
      return v543;
    }();
    vO2.zk = function () {
      var v$81 = $("#store-view-canv");
      var v$82 = $("#skin-description-text");
      var v$83 = $("#skin-group-description-text");
      var v$84 = $("#store-locked-bar");
      var v$85 = $("#store-locked-bar-text");
      var v$86 = $("#store-buy-button");
      var v$87 = $("#store-item-price");
      var v$88 = $("#store-groups");
      var v$89 = $("#store-view-prev");
      var v$90 = $("#store-view-next");
      var v549 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.skins.tab"), true);
        var vThis30 = this;
        this.Vo = null;
        this.Wo = [];
        this.Xo = {};
        this.Yo = new vO2.tm(v$81);
        v$86.click(function () {
          vO3.L.Si.Se();
          vThis30.Zo();
        });
        v$89.click(function () {
          vO3.L.Si.Se();
          vThis30.Vo.$o();
        });
        v$90.click(function () {
          vO3.L.Si.Se();
          vThis30.Vo._o();
        });
      });
      v549.prototype.za = function () {
        v549.parent.prototype.za.call(this);
        var vThis31 = this;
        vO3.L.bd.qc(function () {
          var v550 = vO3.L.bd.nc();
          vThis31.Wo = [];
          for (var vLN0101 = 0; vLN0101 < v550.skinGroupArrayDict.length; vLN0101++) {
            vThis31.Wo.push(new vF14(vThis31, v550.skinGroupArrayDict[vLN0101]));
          }
          ;
          vThis31.Xo = {};
          for (var vLN0102 = 0; vLN0102 < v550.skinArrayDict.length; vLN0102++) {
            var v551 = v550.skinArrayDict[vLN0102];
            vThis31.Xo[v551.id] = v551;
          }
          ;
          vThis31.ap();
        });
        this.bp(false);
        vO3.L.ao.Pj(function () {
          vThis31.bp(false);
        });
      };
      v549.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.c(vO2.po.zo, 200);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v549.prototype.Xk = function () {
        vO3.L.Si.Ge(vO2.xe.Ae.rf);
        vO3.L.Si.Te();
        this.ap();
        this.Yo._f(true);
      };
      v549.prototype.Rk = function () {
        this.Yo._f(false);
      };
      v549.prototype.$f = function () {
        this.Yo.$f();
      };
      v549.prototype.cg = function (p632, p633) {
        this.Yo.cg();
      };
      v549.prototype.ap = function () {
        var vThis32 = this;
        var vThis33 = this;
        v$88.empty();
        for (var vLN0103 = 0; vLN0103 < this.Wo.length; vLN0103++) {
          (function (p634) {
            var v552 = vThis32.Wo[p634];
            var v553 = document.createElement("li");
            v$88.append(v553);
            var v$91 = $(v553);
            v$91.html(v552.cp());
            v$91.click(function () {
              vO3.L.Si.Se();
              vThis33.dp(v552);
            });
            v552.ep = v$91;
          })(vLN0103);
        }
        ;
        if (this.Wo.length > 0) {
          var v554 = vO3.L.ao.Hj(vO2.Jj.Ij);
          for (var vLN0104 = 0; vLN0104 < this.Wo.length; vLN0104++) {
            var v555 = this.Wo[vLN0104];
            for (var v556 = v555.fp.list, vLN0105 = 0; vLN0105 < v556.length; vLN0105++) {
              if (v556[vLN0105] === v554) {
                v555.gp = vLN0105;
                this.dp(v555);
                return;
              }
            }
          }
          ;
          this.dp(this.Wo[0]);
        }
      };
      v549.prototype.dp = function (p635) {
        if (this.Vo !== p635) {
          this.Vo = p635;
          v$88.children().removeClass("pressed");
          if (this.Vo.ep) {
            this.Vo.ep.addClass("pressed");
          }
          v$83.html("");
          if (p635.fp != null) {
            var v557 = vO3.L.bd.nc().textDict[p635.fp.description];
            if (v557 != null) {
              v$83.html(vO4.V(vO4.P(v557)));
            }
          }
          ;
          this.bp(true);
        }
      };
      v549.prototype.hp = function () {
        if (this.Vo == null) {
          return vO2.gj.ij();
        } else {
          return this.Vo.ip();
        }
      };
      v549.prototype.Zo = function () {
        var vThis34 = this;
        var v558 = this.hp();
        if (v558.kj()) {
          var v559 = v558.tc();
          vThis34.jp(v559);
        }
      };
      v549.prototype.jp = function (p636) {
        var v560 = vO3.L.ao.Wj(p636, vO2.Jj.Ij);
        if (v560 != null) {
          var v561 = v560.Zj();
          if (!(vO3.L.Yj.yl() < v561)) {
            var v562 = vO3.L.ao.Hj(vO2.Jj.Ij);
            var v563 = vO3.L.ao.Hj(vO2.Jj.Kj);
            var v564 = vO3.L.ao.Hj(vO2.Jj.Lj);
            var v565 = vO3.L.ao.Hj(vO2.Jj.Nj);
            var v566 = vO3.L.ao.Hj(vO2.Jj.Mj);
            var v567 = this.Fo(5000);
            vO3.L.Yj.Xl(p636, vO2.Jj.Ij, function () {
              v567.Jo();
              vO3.L.Fg.Qk(vO3.L.Fg.Jk);
            }, function () {
              vO3.L.Yj.Rl(function () {
                vO3.L.ao.Vj(v562, vO2.Jj.Ij);
                vO3.L.ao.Vj(v563, vO2.Jj.Kj);
                vO3.L.ao.Vj(v564, vO2.Jj.Lj);
                vO3.L.ao.Vj(v565, vO2.Jj.Nj);
                vO3.L.ao.Vj(v566, vO2.Jj.Mj);
                vO3.L.ao.Vj(p636, vO2.Jj.Ij);
                v567.Jo();
              });
            });
          }
        }
      };
      v549.prototype.bp = function (p637) {
        var v568 = vO3.L.ao.Oj();
        var v569 = this.hp();
        if (v569.kj()) {
          var v570 = v569.tc();
          var v571 = vO3.L.ao.Wj(v570, vO2.Jj.Ij);
          var v572 = false;
          if (vO3.L.ao.Sj(v570, vO2.Jj.Ij)) {
            v$84.hide();
            v$86.hide();
          } else if (v571 == null || v571.$j()) {
            v572 = true;
            v$84.show();
            v$86.hide();
            v$85.text(vO4.O("index.game.popup.menu.store.locked"));
            if (v571 != null && v571.$j()) {
              var v573 = vO3.L.bd.nc().textDict[v571.Um()];
              if (v573 != null) {
                v$85.text(vO4.P(v573));
              }
            }
          } else {
            v$84.hide();
            v$86.show();
            v$87.html(v571.Zj());
          }
          ;
          v$82.html("");
          if (v571 != null && v571.Vm() != null) {
            var v574 = vO3.L.bd.nc().textDict[v571.Vm()];
            if (v574 != null) {
              v$82.html(vO4.V(vO4.P(v574)));
            }
          }
          ;
          this.Yo.om(v568.jn(v570));
          this.Yo.Km(v572);
          if (p637) {
            vO3.L.ao.Vj(v570, vO2.Jj.Ij);
          }
        }
      };
      var vF14 = function () {
        function _0x9f75x6(p638, f85) {
          this.kp = p638;
          this.gp = 0;
          this.fp = f85;
        }
        _0x9f75x6.prototype.$o = function () {
          if (--this.gp < 0) {
            this.gp = this.fp.list.length - 1;
          }
          this.kp.bp(true);
        };
        _0x9f75x6.prototype._o = function () {
          if (++this.gp >= this.fp.list.length) {
            this.gp = 0;
          }
          this.kp.bp(true);
        };
        _0x9f75x6.prototype.cp = function () {
          return vO4.P(this.fp.name);
        };
        _0x9f75x6.prototype.ip = function () {
          if (this.gp >= this.fp.list.length) {
            return vO2.gj.ij();
          } else {
            return vO2.gj.jj(this.fp.list[this.gp]);
          }
        };
        return _0x9f75x6;
      }();
      return v549;
    }();
    vO2.Bk = function () {
      var v$92 = $("#store-go-coins-button");
      var v$93 = $("#store-go-skins-button");
      var v$94 = $("#store-go-wear-button");
      var v575 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.store.tab"), true);
        v$92.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.pk);
        });
        v$93.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.yk);
        });
        v$94.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.Ck);
        });
      });
      v575.prototype.za = function () {
        v575.parent.prototype.za.call(this);
      };
      v575.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.c(vO2.po.Ao, 200);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v575.prototype.Xk = function () {
        vO3.L.Si.Te();
      };
      return v575;
    }();
    vO2.Dk = function () {
      var v$95 = $("#wear-view-canv");
      var v$96 = $("#wear-description-text");
      var v$97 = $("#wear-locked-bar");
      var v$98 = $("#wear-locked-bar-text");
      var v$99 = $("#wear-buy-button");
      var v$100 = $("#wear-item-price");
      var v$101 = $("#wear-eyes-button");
      var v$102 = $("#wear-mouths-button");
      var v$103 = $("#wear-glasses-button");
      var v$104 = $("#wear-hats-button");
      var v$105 = $("#wear-tint-chooser");
      var v$106 = $("#wear-view-prev");
      var v$107 = $("#wear-view-next");
      var v576 = vO4.X(vO2.po, function () {
        var vThis35 = this;
        vO2.po.call(this, vO4.O("index.game.popup.menu.wear.tab"), true);
        var vThis36 = this;
        this.lp = [];
        this.Kj = new vF15(this, vO2.Jj.Kj, v$101);
        this.Lj = new vF15(this, vO2.Jj.Lj, v$102);
        this.Nj = new vF15(this, vO2.Jj.Nj, v$103);
        this.Mj = new vF15(this, vO2.Jj.Mj, v$104);
        this.mp = null;
        this.np = null;
        this.op = null;
        this.pp = null;
        this.qp = null;
        this.rp = null;
        this.Yo = new vO2.tm(v$95);
        v$99.click(function () {
          vO3.L.Si.Se();
          vThis36.sp();
        });
        v$106.click(function () {
          vO3.L.Si.Se();
          vThis36.mp.tp();
        });
        v$107.click(function () {
          vO3.L.Si.Se();
          vThis36.mp.up();
        });
        v$101.click(function () {
          vO3.L.Si.Se();
          vThis36.vp(vThis35.Kj);
        });
        v$102.click(function () {
          vO3.L.Si.Se();
          vThis36.vp(vThis35.Lj);
        });
        v$103.click(function () {
          vO3.L.Si.Se();
          vThis36.vp(vThis35.Nj);
        });
        v$104.click(function () {
          vO3.L.Si.Se();
          vThis36.vp(vThis35.Mj);
        });
        this.lp.push(this.Kj);
        this.lp.push(this.Lj);
        this.lp.push(this.Nj);
        this.lp.push(this.Mj);
      });
      v576.prototype.za = function () {
        v576.parent.prototype.za.call(this);
        var vThis37 = this;
        vO3.L.bd.qc(function () {
          var v577 = vO3.L.bd.nc();
          vThis37.np = v577.eyesDict;
          vThis37.op = v577.mouthDict;
          vThis37.pp = v577.glassesDict;
          vThis37.qp = v577.hatDict;
          vThis37.rp = v577.colorDict;
          vThis37.Kj.wp(v577.eyesVariantArray);
          vThis37.Kj.xp(vThis37.np);
          vThis37.Lj.wp(v577.mouthVariantArray);
          vThis37.Lj.xp(vThis37.op);
          vThis37.Nj.wp(v577.glassesVariantArray);
          vThis37.Nj.xp(vThis37.pp);
          vThis37.Mj.wp(v577.hatVariantArray);
          vThis37.Mj.xp(vThis37.qp);
        });
        this.bp(false);
        vO3.L.ao.Pj(function () {
          vThis37.bp(false);
        });
      };
      v576.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.c(vO2.po.Bo, 200);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.d(vO2.po.Do, 50);
      };
      v576.prototype.Xk = function () {
        vO3.L.Si.Ge(vO2.xe.Ae.rf);
        vO3.L.Si.Te();
        this.vp(this.mp ?? this.Kj);
        this.Yo._f(true);
      };
      v576.prototype.Rk = function () {
        this.Yo._f(false);
      };
      v576.prototype.$f = function () {
        this.Yo.$f();
      };
      v576.prototype.cg = function (p639, p640) {
        this.Yo.cg();
      };
      v576.prototype.vp = function (p641) {
        this.mp = p641;
        for (var vLN0106 = 0; vLN0106 < this.lp.length; vLN0106++) {
          this.lp[vLN0106].Oo.removeClass("pressed");
        }
        ;
        this.mp.Oo.addClass("pressed");
        this.mp.Wk();
      };
      v576.prototype.yp = function () {
        if (this.mp == null) {
          return vO2.gj.ij();
        } else {
          return vO2.gj.jj({
            re: this.mp.ip(),
            Ed: this.mp.Ed
          });
        }
      };
      v576.prototype.sp = function () {
        var vThis38 = this;
        var v578 = this.yp();
        if (v578.kj()) {
          var v579 = v578.tc();
          vThis38.zp(v579.re, v579.Ed);
        }
      };
      v576.prototype.zp = function (p642, p643) {
        var v580 = vO3.L.ao.Wj(p642, p643);
        if (v580 != null) {
          var v581 = v580.Zj();
          if (!(vO3.L.Yj.yl() < v581)) {
            var v582 = vO3.L.ao.Hj(vO2.Jj.Ij);
            var v583 = vO3.L.ao.Hj(vO2.Jj.Kj);
            var v584 = vO3.L.ao.Hj(vO2.Jj.Lj);
            var v585 = vO3.L.ao.Hj(vO2.Jj.Nj);
            var v586 = vO3.L.ao.Hj(vO2.Jj.Mj);
            var v587 = this.Fo(5000);
            vO3.L.Yj.Xl(p642, p643, function () {
              v587.Jo();
              vO3.L.Fg.Qk(vO3.L.Fg.Jk);
            }, function () {
              vO3.L.Yj.Rl(function () {
                vO3.L.ao.Vj(v582, vO2.Jj.Ij);
                vO3.L.ao.Vj(v583, vO2.Jj.Kj);
                vO3.L.ao.Vj(v584, vO2.Jj.Lj);
                vO3.L.ao.Vj(v585, vO2.Jj.Nj);
                vO3.L.ao.Vj(v586, vO2.Jj.Mj);
                vO3.L.ao.Vj(p642, p643);
                v587.Jo();
              });
            });
          }
        }
      };
      v576.prototype.bp = function (p644) {
        var v588 = vO3.L.ao.Oj();
        var v589 = this.yp();
        if (v589.kj()) {
          var v590 = v589.tc();
          var v591 = vO3.L.ao.Wj(v590.re, v590.Ed);
          var v592 = false;
          if (vO3.L.ao.Sj(v590.re, v590.Ed)) {
            v$97.hide();
            v$99.hide();
          } else if (v591 == null || v591.$j()) {
            v592 = true;
            v$97.show();
            v$99.hide();
            v$98.text(vO4.O("index.game.popup.menu.store.locked"));
            if (v591 != null && v591.$j()) {
              var v593 = vO3.L.bd.nc().textDict[v591.Um()];
              if (v593 != null) {
                v$98.text(vO4.P(v593));
              }
            }
          } else {
            v$97.hide();
            v$99.show();
            v$100.html(v591.Zj());
          }
          ;
          v$96.html("");
          if (v591 != null && v591.Vm() != null) {
            var v594 = vO3.L.bd.nc().textDict[v591.Vm()];
            if (v594 != null) {
              v$96.html(vO4.V(vO4.P(v594)));
            }
          }
          ;
          var v595 = this.Yo;
          switch (v590.Ed) {
            case vO2.Jj.Kj:
              v595.om(v588.kn(v590.re));
              v595.Lm(v592);
              break;
            case vO2.Jj.Lj:
              v595.om(v588.ln(v590.re));
              v595.Mm(v592);
              break;
            case vO2.Jj.Nj:
              v595.om(v588.nn(v590.re));
              v595.Om(v592);
              break;
            case vO2.Jj.Mj:
              v595.om(v588.mn(v590.re));
              v595.Nm(v592);
          }
          ;
          if (p644) {
            vO3.L.ao.Vj(v590.re, v590.Ed);
          }
        }
      };
      var vF15 = function () {
        function _0x9f75x19(f86, p645, p646) {
          this.kp = f86;
          this.Ed = p645;
          this.Oo = p646;
          this.sc = {};
          this.Ap = [[]];
          this.Bp = -10;
          this.Cp = -10;
        }
        _0x9f75x19.prototype.wp = function (p647) {
          this.Ap = p647;
        };
        _0x9f75x19.prototype.xp = function (p648) {
          this.sc = p648;
        };
        _0x9f75x19.prototype.Wk = function () {
          var v596 = vO3.L.ao.Hj(this.Ed);
          for (var vLN0107 = 0; vLN0107 < this.Ap.length; vLN0107++) {
            for (var vLN0108 = 0; vLN0108 < this.Ap[vLN0107].length; vLN0108++) {
              if (this.Ap[vLN0107][vLN0108] === v596) {
                this.Dp(vLN0107);
                this.Ep(vLN0108);
                return;
              }
            }
          }
          ;
          this.Dp(0);
          this.Ep(0);
        };
        _0x9f75x19.prototype.tp = function () {
          var v597 = this.Bp - 1;
          if (v597 < 0) {
            v597 = this.Ap.length - 1;
          }
          this.Dp(v597);
          this.Ep(this.Cp % this.Ap[v597].length);
        };
        _0x9f75x19.prototype.up = function () {
          var v598 = this.Bp + 1;
          if (v598 >= this.Ap.length) {
            v598 = 0;
          }
          this.Dp(v598);
          this.Ep(this.Cp % this.Ap[v598].length);
        };
        _0x9f75x19.prototype.Dp = function (p649) {
          var vThis39 = this;
          if (!(p649 < 0) && !(p649 >= this.Ap.length)) {
            this.Bp = p649;
            v$105.empty();
            var v599 = this.Ap[this.Bp];
            if (v599.length > 1) {
              for (var vLN0109 = 0; vLN0109 < v599.length; vLN0109++) {
                (function (p650) {
                  var v600 = v599[p650];
                  var v601 = vThis39.sc[v600];
                  var v602 = "#" + vThis39.kp.rp[v601.prime];
                  var v$108 = $("<div style=\"border-color:" + v602 + "\"></div>");
                  v$108.click(function () {
                    vO3.L.Si.Se();
                    vThis39.Ep(p650);
                  });
                  v$105.append(v$108);
                })(vLN0109);
              }
            }
          }
        };
        _0x9f75x19.prototype.Ep = function (p651) {
          if (!(p651 < 0) && !(p651 >= this.Ap[this.Bp].length)) {
            this.Cp = p651;
            v$105.children().css("background-color", "transparent");
            var v603 = v$105.children(":nth-child(" + (1 + p651) + ")");
            v603.css("background-color", v603.css("border-color"));
            this.kp.bp(true);
          }
        };
        _0x9f75x19.prototype.ip = function () {
          return this.Ap[this.Bp][this.Cp];
        };
        return _0x9f75x19;
      }();
      return v576;
    }();
    vO2.mk = function () {
      var v$109 = $("#withdraw-consent-yes");
      var v$110 = $("#withdraw-consent-no");
      var v604 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.consent.tab"), false);
        v$109.click(function () {
          vO3.L.Si.Se();
          if (vO3.L.Uo()) {
            vO3.L.Fg.Qk(vO3.L.Fg.rf);
            vO3.L.Fp(false, true);
            vO3.L.Fg.Gk.no(new vO2.Gp());
          } else {
            vO3.L.Fg.Tk();
          }
        });
        v$110.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Tk();
        });
      });
      v604.prototype.za = function () {
        v604.parent.prototype.za.call(this);
      };
      v604.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.c(vO2.po.Co, 200);
        vO5.b.d(vO2.po.Do, 50);
      };
      v604.prototype.Xk = function () {
        vO3.L.Si.Te();
      };
      return v604;
    }();
    vO2.ok = function () {
      var v$111 = $("#delete-account-timer");
      var v$112 = $("#delete-account-yes");
      var v$113 = $("#delete-account-no");
      var v605 = vO4.X(vO2.po, function () {
        vO2.po.call(this, vO4.O("index.game.popup.menu.delete.tab"), false);
        v$112.click(function () {
          vO3.L.Si.Se();
          if (vO3.L.Yj.Xj()) {
            vO3.L.Yj.gm();
            vO3.L.Yj.$l();
          } else {
            vO3.L.Fg.Tk();
          }
        });
        v$113.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Tk();
        });
        this.Hp = [];
      });
      v605.prototype.za = function () {
        v605.parent.prototype.za.call(this);
      };
      v605.prototype.Eo = function () {
        vO5.b.d(vO2.po.uo, 50);
        vO5.b.d(vO2.po.vo, 50);
        vO5.b.d(vO2.po.wo, 50);
        vO5.b.d(vO2.po.xo, 50);
        vO5.b.d(vO2.po.yo, 50);
        vO5.b.d(vO2.po.zo, 50);
        vO5.b.d(vO2.po.Ao, 50);
        vO5.b.d(vO2.po.Bo, 50);
        vO5.b.d(vO2.po.Co, 50);
        vO5.b.c(vO2.po.Do, 200);
      };
      v605.prototype.Xk = function () {
        vO3.L.Si.Xe();
        vO5.b.d(v$112, 1);
        vO5.b.c(v$111, 1);
        v$111.text(".. 10 ..");
        this.Ip();
        this.Jp(function () {
          v$111.text(".. 9 ..");
        }, 1000);
        this.Jp(function () {
          v$111.text(".. 8 ..");
        }, 2000);
        this.Jp(function () {
          v$111.text(".. 7 ..");
        }, 3000);
        this.Jp(function () {
          v$111.text(".. 6 ..");
        }, 4000);
        this.Jp(function () {
          v$111.text(".. 5 ..");
        }, 5000);
        this.Jp(function () {
          v$111.text(".. 4 ..");
        }, 6000);
        this.Jp(function () {
          v$111.text(".. 3 ..");
        }, 7000);
        this.Jp(function () {
          v$111.text(".. 2 ..");
        }, 8000);
        this.Jp(function () {
          v$111.text(".. 1 ..");
        }, 9000);
        this.Jp(function () {
          vO5.b.c(v$112, 300);
          vO5.b.d(v$111, 1);
        }, 10000);
      };
      v605.prototype.Jp = function (p652, p653) {
        var v606 = vO4.S(p652, p653);
        this.Hp.push(v606);
      };
      v605.prototype.Ip = function () {
        for (var vLN0110 = 0; vLN0110 < this.Hp.length; vLN0110++) {
          vO4.T(this.Hp[vLN0110]);
        }
        ;
        this.Hp = [];
      };
      return v605;
    }();
    vO2.Kp = function () {
      function f87() {
        this.oo = function () {};
      }
      f87.prototype.Kf = function () {};
      f87.prototype.Xk = function () {};
      return f87;
    }();
    vO2.Wl = function () {
      var v607 = vO4.X(vO2.Kp, function (p654) {
        vO2.Kp.call(this);
        var v608 = vO4.ja() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Lp = $(`<div id="${v608}" class="toaster toaster-coins"><img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" /><div class="toaster-coins-val">${p654}</div><div class="toaster-coins-close">${vO4.O("index.game.toaster.continue")}</div></div>`);
        var vThis40 = this;
        this.Lp.find(".toaster-coins-close").click(function () {
          vO3.L.Si.Se();
          vThis40.oo();
        });
      });
      v607.prototype.Kf = function () {
        return this.Lp;
      };
      v607.prototype.Xk = function () {
        vO3.L.Si.Ve();
      };
      return v607;
    }();
    vO2.Vl = function () {
      var v609 = vO4.X(vO2.Kp, function (p655) {
        vO2.Kp.call(this);
        var v610 = vO4.ja() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Lp = $(`<div id="${v610}" class="toaster toaster-levelup"><img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" /><div class="toaster-levelup-val">${p655}</div><div class="toaster-levelup-text">${vO4.O("index.game.toaster.levelup")}</div><div class="toaster-levelup-close">${vO4.O("index.game.toaster.continue")}</div></div>`);
        var vThis41 = this;
        this.Lp.find(".toaster-levelup-close").click(function () {
          vO3.L.Si.Se();
          vThis41.oo();
        });
      });
      v609.prototype.Kf = function () {
        return this.Lp;
      };
      v609.prototype.Xk = function () {
        vO3.L.Si.Ue();
      };
      return v609;
    }();
    vO2.Gp = function () {
      var v611 = vO4.X(vO2.Kp, function () {
        vO2.Kp.call(this);
        var vThis42 = this;
        var v612 = vO4.ja() + "_" + Math.floor(1000 + Math.random() * 8999);
        this.Lp = $("<div id=\"" + v612 + "\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\"" + vO3.A.F + "\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">" + vO4.O("index.game.toaster.consent.text").replaceAll(" ", "&nbsp;").replaceAll("", "<br/>") + "</span>        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">" + vO4.O("index.game.toaster.consent.link") + "</a>    </div>    <div class=\"toaster-consent-close\">" + vO4.O("index.game.toaster.consent.iAccept") + "</div></div>");
        this.Mp = this.Lp.find(".toaster-consent-close");
        this.Mp.hide();
        this.Mp.click(function () {
          vO3.L.Si.Se();
          if (vO3.L.Uo()) {
            vO3.L.Fp(true, true);
          }
          vThis42.oo();
        });
      });
      v611.prototype.Kf = function () {
        return this.Lp;
      };
      v611.prototype.Xk = function () {
        var vThis43 = this;
        if (vO3.L.Uo() && !vO3.L.xl()) {
          vO3.L.Si.Xe();
          vO4.S(function () {
            vThis43.Mp.fadeIn(300);
          }, 2000);
        } else {
          vO4.S(function () {
            vThis43.oo();
          }, 0);
        }
      };
      return v611;
    }();
    vO2.Kk = function () {
      var v$114 = $("#error-gateway-connection-retry");
      var v613 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
        v$114.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.ze.$n();
          vO3.L.Fg.Qk(vO3.L.Fg.ze);
          vO4.S(function () {
            var v614 = vO3.A.C + "/pub/healthCheck/ping";
            vO4.ha(v614, function () {
              vO3.L.Fg.Qk(vO3.L.Fg.Jk);
            }, function (p656) {
              vO3.L.Fg.ze.Yn();
              vO3.L.bd.$b(function () {
                vO3.L.Fg.Qk(vO3.L.Fg.rf);
              }, function (p657) {
                vO3.L.Fg.Qk(vO3.L.Fg.Jk);
              }, function (p658, p659) {
                var vP658 = p658;
                vO3.L.Fg.ze.Zn(vP658, p659);
              });
            });
          }, 2000);
        });
      });
      v613.prototype.za = function () {};
      v613.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 500);
        vO5.b.c(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.d(vO2.Cf.An, 50);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.c(vO2.Cf.In, 500);
        vO5.b.d(vO2.Cf.Jn, 50);
      };
      v613.prototype.Xk = function () {
        vO3.L.Si.Ge(vO2.xe.Ae.rf);
        vO3.L.Si.Xe();
      };
      return v613;
    }();
    vO2.Mk = function () {
      var v$115 = $("#error-game-connection-retry");
      var v615 = vO4.X(vO2.Cf, function () {
        vO2.Cf.call(this, vO2.Vk.Kn);
        v$115.click(function () {
          vO3.L.Si.Se();
          vO3.L.Fg.Qk(vO3.L.Fg.rf);
        });
      });
      v615.prototype.za = function () {};
      v615.prototype.Wk = function () {
        vO2.vf._f(true);
        vO5.b.c(vO2.Cf.Bf, 500);
        vO5.b.c(vO2.Cf.yn, 1);
        vO5.b.d(vO2.Cf.zn, 50);
        vO5.b.d(vO2.Cf.An, 50);
        vO5.b.d(vO2.Cf.Bn, 50);
        vO5.b.d(vO2.Cf.Cn, 50);
        vO5.b.d(vO2.Cf.Dn, 50);
        vO5.b.d(vO2.Cf.En, 50);
        vO5.b.d(vO2.Cf.Fn, 50);
        vO5.b.d(vO2.Cf.Gn, 50);
        vO5.b.d(vO2.Cf.Hn, 50);
        vO5.b.d(vO2.Cf.In, 50);
        vO5.b.c(vO2.Cf.Jn, 500);
      };
      v615.prototype.Xk = function () {
        vO3.L.Si.Ge(vO2.xe.Ae.rf);
        vO3.L.Si.Xe();
      };
      return v615;
    }();
    vO4.Np = function () {
      function f88(p660) {
        var v616 = p660 + Math.floor(Math.random() * 65535) * 37;
        vO2.kg.vg(vO2.kg.tg, v616, 30);
      }
      function f89() {
        return parseInt(vO2.kg.wg(vO2.kg.tg)) % 37;
      }
      return function () {
        var vF89 = f89();
        if (!(vF89 >= 0) || !(vF89 < vO3.Mn.Op)) {
          vF89 = Math.max(0, vO3.Mn.Op - 2);
        }
        var vO27 = {
          Pp: false
        };
        vO27.Qp = vO4.ja();
        vO27.Rp = 0;
        vO27.Sp = 0;
        vO27.Tp = null;
        vO27.Up = vO3.A.K;
        vO27.Vp = vO3.A.J;
        vO27.uh = null;
        vO27.bd = null;
        vO27.Oe = null;
        vO27.Si = null;
        vO27.Fg = null;
        vO27.ao = null;
        vO27.Yj = null;
        try {
          var vNavigator = navigator;
          if (vNavigator) {
            var v617 = vNavigator.geolocation;
            if (v617) {
              v617.getCurrentPosition(function (p661) {
                var v618 = p661.coords;
                if (_typeof(v618) != "undefined" && _typeof(v618.latitude) != "undefined" && _typeof(v618.longitude) != "undefined") {
                  vO27.Tp = p661;
                }
              }, function (p662) {});
            }
          }
        } catch (e19) {}
        ;
        vO27.za = function () {
          vO27.uh = new vO2.Wp();
          vO27.uh.Xp = new vO2.ai(vO27.uh);
          vO27.bd = new vO2.rb();
          vO27.Oe = new vO2.ek();
          vO27.Si = new vO2.xe();
          vO27.Fg = new vO2.hk();
          vO27.ao = new vO2.Aj();
          vO27.Yj = new vO2.al();
          try {
            ga("send", "event", "app", vO3.A.B + "_init");
          } catch (e20) {}
          ;
          vO27.uh.Yp = function () {
            vO27.Fg.Qk(vO27.Fg.Lk);
          };
          vO27.uh.Zp = function () {
            var v619 = vO27.Fg.rf.io();
            try {
              ga("send", "event", "game", vO3.A.B + "_start", v619);
            } catch (e21) {}
            ;
            vO27.Si.Ge(vO2.xe.Ae.sf);
            vO27.Fg.Qk(vO27.Fg.sf.Rn());
          };
          vO27.uh.$p = function () {
            try {
              ga("send", "event", "game", vO3.A.B + "_end");
            } catch (e22) {}
            ;
            if ($("body").height() >= 430) {
              vO3.Mn._p.Ca();
            }
            vO27.bd.$b(null, null, null);
            (function () {
              var v620 = Math.floor(vO27.uh.th.Rh);
              var v621 = vO27.uh.Yh;
              if (vO27.Yj.Xj()) {
                vO27.Yj.Rl(function () {
                  vO27.aq(v620, v621);
                });
              } else {
                vO27.aq(v620, v621);
              }
            })();
          };
          vO27.uh.bq = function (p663) {
            p663(vO27.Fg.sf.Un(), vO27.Fg.sf.Vn());
          };
          vO27.Yj.Ol(function () {
            var v622 = vO27.Fg._k();
            if (v622 != null && v622.Ed === vO2.Vk.Uk) {
              vO27.Si.Ge(vO2.xe.Ae.rf);
              vO27.Fg.Qk(vO27.Fg.rf);
            }
            if (vO27.Yj.Xj()) {
              try {
                var v623 = vO27.Yj.sl();
                ga("set", "userId", v623);
              } catch (e23) {}
            }
            ;
            if (vO27.Uo() && vO27.Yj.Xj() && !vO27.Yj.xl()) {
              vO27.Fp(false, false);
              vO27.Fg.Gk.no(new vO2.Gp());
            } else {
              vO27.cq(true);
            }
          });
          vO27.uh.za();
          vO27.Fg.za();
          vO27.ao.za();
          vO27.bd.za();
          vO27.Fg.rf.ho();
          vO27.Fg.Qk(vO27.Fg.rf);
          vO27.Oe.za(function () {
            vO27.Si.za();
            vO27.Yj.za();
            vO27.bd.$b(function () {
              vO27.Fg.rf.go();
              vO27.Fg.Qk(vO27.Fg.rf);
            }, function (p664) {
              vO27.Fg.rf.go();
              vO27.Fg.Qk(vO27.Fg.Jk);
            }, function (p665, p666) {
              var vP665 = p665;
              vO27.Fg.ze.Zn(vP665, p666);
              vO27.Fg.rf.Zn(vP665, p666);
            });
            if (vO27.Uo() && !vO27.xl()) {
              vO27.Fg.Gk.no(new vO2.Gp());
            } else {
              vO27.cq(true);
            }
          });
        };
        vO27.dq = function (p667) {
          if (vO27.Yj.Xj()) {
            var v624 = vO27.Yj.Ql();
            var v625 = vO3.A.C + "/pub/wuid/" + v624 + "/consent/change?value=" + vO4.Q(p667);
            vO4.ha(v625, function () {}, function (p668) {});
          }
        };
        vO27.bo = function (p669) {
          vF89++;
          vO27.ws = p669;
          if (!vO3.Mn.fq && vF89 >= vO3.Mn.Op) {
            vO27.Fg.Qk(vO27.Fg.Nk);
            vO27.Si.Ge(vO2.xe.Ae.uf);
            vO3.Mn.gq.Aa();
          } else {
            f88(vF89);
            vO27.hq();
          }
        };
        vO27.hq = function () {
          if (vO27.uh.iq()) {
            vO27.Fg.ze.$n();
            vO27.Fg.Qk(vO27.Fg.ze);
            var v626 = vO27.Fg.rf.io();
            vO2.kg.vg(vO2.kg.qg, v626, 30);
            var v627 = vO27.Fg.oi.ni();
            vO2.kg.vg(vO2.kg.mg, v627, 30);
            var vLN0111 = 0;
            if (vO27.Tp != null) {
              var v628 = vO27.Tp.coords.latitude;
              var v629 = vO27.Tp.coords.longitude;
              vLN0111 = Math.max(0, Math.min(32767, (v628 + 90) / 180 * 32768)) << 1 | 1 | Math.max(0, Math.min(65535, (v629 + 180) / 360 * 65536)) << 16;
            }
            ;
            if (vO27.Yj.Xj()) {
              vO27.jq(v626, vLN0111);
            } else {
              var v630 = vO27.Fg.rf.ul();
              vO2.kg.vg(vO2.kg.rg, v630, 30);
              var v631 = vO27.ao.Hj(vO2.Jj.Ij);
              vO2.kg.vg(vO2.kg.sg, v631, 30);
              vO27.kq(v626, vLN0111);
            }
          }
        };
        vO27.jq = function (p670, p671) {
          var v632 = vO27.Yj.Ql();
          var v633 = vO27.Fg.rf.ul();
          var v634 = vO27.ao.Hj(vO2.Jj.Ij);
          var v635 = vO27.ao.Hj(vO2.Jj.Kj);
          var v636 = vO27.ao.Hj(vO2.Jj.Lj);
          var v637 = vO27.ao.Hj(vO2.Jj.Nj);
          var v638 = vO27.ao.Hj(vO2.Jj.Mj);
          var v639 = vO3.A.C + "/pub/wuid/" + v632 + "/start?gameMode=" + vO4.Q(p670) + "&gh=" + p671 + "&nickname=" + vO4.Q(Z.encodeName(v633)) + "&skinId=" + vO4.Q(Z.validSkinId(v634)) + "&eyesId=" + vO4.Q(v635) + "&mouthId=" + vO4.Q(v636) + "&glassesId=" + vO4.Q(v637) + "&hatId=" + vO4.Q(v638);
          vO4.ha(v639, function () {
            vO27.Fg.Qk(vO27.Fg.Jk);
          }, function (p672) {
            if (p672.code === 1460) {
              vO27.Fg.Qk(vO27.Fg.Ek);
              try {
                ga("send", "event", "restricted", vO3.A.B + "_tick");
              } catch (e24) {}
            } else if (p672.code !== 1200) {
              vO27.Fg.Qk(vO27.Fg.Jk);
            } else {
              var v640 = vO27.ws || p672.server_url;
              Z.server_url = v640;
              vO27.uh.lq(v640, v632);
            }
          });
        };
        vO27.kq = function (p673, p674) {
          var v641 = vO27.Fg.rf.ul();
          var v642 = vO27.ao.Hj(vO2.Jj.Ij);
          var v643 = vO3.A.C + "/pub/wuid/guest/start?gameMode=" + vO4.Q(p673) + "&gh=" + p674 + "&nickname=" + vO4.Q(Z.encodeName(v641)) + "&skinId=" + vO4.Q(Z.validSkinId(v642));
          vO4.ha(v643, function () {
            vO27.Fg.Qk(vO27.Fg.Jk);
          }, function (p675) {
            if (p675.code === 1460) {
              vO27.Fg.Qk(vO27.Fg.Ek);
              try {
                ga("send", "event", "restricted", vO3.A.B + "_tick");
              } catch (e25) {}
            } else if (p675.code !== 1200) {
              vO27.Fg.Qk(vO27.Fg.Jk);
            } else {
              var v644 = p675.server_url;
              vO27.uh.mq(v644, v641, v642);
            }
          });
        };
        vO27.aq = function (p676, p677) {
          var v645 = vO27.Fg.rf.ul();
          vO27.Fg.sf.Tn(p676, p677, v645);
          vO27.Si.Ge(vO2.xe.Ae.tf);
          vO27.Fg.Qk(vO27.Fg.sf.Sn());
        };
        vO27.eo = function () {
          if (!vO27.fo()) {
            return vO27.ao.Rj();
          }
          ;
          var vParseInt8 = parseInt(vO2.kg.wg(vO2.kg.sg));
          if (vParseInt8 != null && vO27.ao.Sj(vParseInt8, vO2.Jj.Ij)) {
            return vParseInt8;
          } else {
            return vO27.ao.Rj();
          }
        };
        vO27.jo = function (p678) {
          vO2.kg.vg(vO2.kg.ug, p678 ? "true" : "false", 1800);
        };
        vO27.fo = function () {
          return vO2.kg.wg(vO2.kg.ug) === "true";
        };
        vO27.cq = function (p679) {
          if (p679 !== vO27.Pp) {
            vO27.Pp = p679;
            var v646 = v646 || {};
            v646.consented = p679;
            v646.gdprConsent = p679;
            vO3.Mn.Nn.za();
            vO3.Mn._p.za();
            vO3.Mn.gq.za(function (p680) {
              if (p680) {
                f88(vF89 = 0);
              }
              vO27.hq();
            });
          }
        };
        vO27.Fp = function (p681, p682) {
          vO2.kg.vg(vO2.kg.lg, p681 ? "true" : "false");
          if (p682) {
            vO27.dq(p681);
          }
          vO27.cq(p681);
        };
        vO27.xl = function () {
          switch (vO2.kg.wg(vO2.kg.lg)) {
            case "true":
              return true;
            default:
              return false;
          }
        };
        vO27.Uo = function () {
          try {
            return !!window.isIPInEEA || vO27.Tp != null && !!vO3.xg.yg(vO27.Tp.coords.latitude, vO27.Tp.coords.longitude);
          } catch (e26) {
            return true;
          }
        };
        vO27.cg = function () {
          vO27.Rp = vO4.ja();
          vO27.Sp = vO27.Rp - vO27.Qp;
          vO27.uh.Ch(vO27.Rp, vO27.Sp);
          vO27.Fg.Ch(vO27.Rp, vO27.Sp);
          vO27.Qp = vO27.Rp;
        };
        vO27.$f = function () {
          vO27.Fg.$f();
        };
        return vO27;
      }();
    };
    vO2.Wp = function () {
      'use strict';

      var vO28 = {
        nq: 0,
        oq: 1,
        pq: 2,
        qq: 3
      };
      var vO29 = {
        rq: 30,
        sq: new Float32Array(100),
        tq: 0,
        uq: 0,
        vq: 0,
        wq: 0,
        xq: 0,
        yq: 0,
        Qn: vO28.nq,
        zq: null,
        Aq: 300,
        Zp: function () {},
        $p: function () {},
        bq: function () {},
        Yp: function () {},
        yh: new vO2.Ng(),
        Xp: null,
        th: null,
        Xi: {},
        Vh: {},
        Ti: 12.5,
        vh: 40,
        Bq: 1,
        Cq: -1,
        Dq: 1,
        Eq: 1,
        Fq: -1,
        Gq: -1,
        Hq: 1,
        Iq: 1,
        Jq: -1,
        Yh: 500,
        Oh: 500
      };
      vO29.yh.Qg = 500;
      vO29.th = new vO2.Ci(vO29.yh);
      vO29.za = function () {
        vO29.th.Ji(vO3.L.Fg.sf.Eg);
        vO4.R(function () {
          vO29.bq(function (p683, p684) {
            vO29.Kq(p683, p684);
          });
        }, 100);
      };
      vO29.xh = function (p685, p686, p687, p688) {
        vO29.Cq = p685;
        vO29.Dq = p686;
        vO29.Eq = p687;
        vO29.Fq = p688;
        vO29.Lq();
      };
      vO29.Mq = function (p689) {
        vO29.Bq = p689;
        vO29.Lq();
      };
      vO29.Lq = function () {
        vO29.Gq = vO29.Cq - vO29.Bq;
        vO29.Hq = vO29.Dq + vO29.Bq;
        vO29.Iq = vO29.Eq - vO29.Bq;
        vO29.Jq = vO29.Fq + vO29.Bq;
      };
      vO29.Ch = function (p690, p691) {
        vO29.vq += p691;
        vO29.uq -= vO29.tq * 0.2 * p691;
        vO29.Xp.fi();
        if (vO29.zq != null && (vO29.Qn === vO28.pq || vO29.Qn === vO28.qq)) {
          vO29.Nq(p690, p691);
          vO29.vh = 4 + vO29.Ti * vO29.th.qd;
        }
        var v647 = 1000 / Math.max(1, p691);
        var vLN0112 = 0;
        for (var vLN0113 = 0; vLN0113 < vO29.sq.length - 1; vLN0113++) {
          vLN0112 += vO29.sq[vLN0113];
          vO29.sq[vLN0113] = vO29.sq[vLN0113 + 1];
        }
        ;
        vO29.sq[vO29.sq.length - 1] = v647;
        vO29.rq = (vLN0112 + v647) / vO29.sq.length;
      };
      vO29.Oq = function (p692, p693) {
        return p692 > vO29.Gq && p692 < vO29.Hq && p693 > vO29.Iq && p693 < vO29.Jq;
      };
      vO29.Nq = function (p694, p695) {
        var v648 = vO29.vq + vO29.uq;
        var v649 = (v648 - vO29.wq) / (vO29.xq - vO29.wq);
        vO29.th.xj(p694, p695);
        vO29.th.yj(p694, p695, v649, vO29.Oq);
        var vLN0114 = 0;
        for (var v650 in vO29.Vh) {
          var v651 = vO29.Vh[v650];
          v651.xj(p694, p695);
          v651.yj(p694, p695, v649, vO29.Oq);
          if (v651.Mi && v651.qd > vLN0114) {
            vLN0114 = v651.qd;
          }
          if (!v651.Li && (!!(v651.tj < 0.005) || !v651.Mi)) {
            v651.Ii();
            delete vO29.Vh[v651.Uh.re];
          }
        }
        ;
        vO29.Mq(vLN0114 * 3);
        for (var v652 in vO29.Xi) {
          var v653 = vO29.Xi[v652];
          v653.xj(p694, p695);
          v653.yj(p694, p695, vO29.Oq);
          if (v653.bj && (v653.tj < 0.005 || !vO29.Oq(v653.nj, v653.oj))) {
            v653.Ii();
            delete vO29.Xi[v653.Uh.re];
          }
        }
      };
      vO29.Ai = function (p696, p697) {
        if (vO29.Qn === vO28.oq) {
          vO29.Qn = vO28.pq;
          vO29.Zp();
        }
        var v654 = vO3.L.Rp;
        vO29.yq = p696;
        if (p696 === 0) {
          vO29.wq = v654 - 95;
          vO29.xq = v654;
          vO29.vq = vO29.wq;
          vO29.uq = 0;
        } else {
          vO29.wq = vO29.xq;
          vO29.xq = vO29.xq + p697;
        }
        var v655 = vO29.vq + vO29.uq;
        vO29.tq = (v655 - vO29.wq) / (vO29.xq - vO29.wq);
      };
      vO29.cj = function () {
        if (vO29.Qn === vO28.oq || vO29.Qn === vO28.pq) {
          vO29.Qn = vO28.qq;
          var v656 = vO29.zq;
          vO4.S(function () {
            if (vO29.Qn === vO28.qq) {
              vO29.Qn = vO28.nq;
            }
            if (v656 != null && v656 === vO29.zq) {
              vO29.zq.close();
              vO29.zq = null;
            }
          }, 5000);
          vO29.$p();
        }
      };
      vO29.iq = function () {
        return vO29.Qn !== vO28.pq && (vO29.Qn = vO28.oq, vO29.Xp.ei(), vO29.Xi = {}, vO29.Vh = {}, vO29.th.dn(), vO29.zq != null && (vO29.zq.close(), vO29.zq = null), true);
      };
      vO29.Pq = function () {
        vO29.zq = null;
        vO29.Xp.ei();
        if (vO29.Qn !== vO28.qq) {
          vO29.Yp();
        }
        vO29.Qn = vO28.nq;
      };
      vO29.lq = function (p698, p699) {
        vO29.Qq(p698, function () {
          var v657 = Math.min(2048, p699.length);
          var v658 = new vO2.ma(6 + v657 * 2);
          var v659 = new vO2.va(new vO2.na(v658));
          v659.wa(129);
          v659.xa(2800);
          v659.wa(1);
          v659.xa(v657);
          for (var vLN0115 = 0; vLN0115 < v657; vLN0115++) {
            v659.xa(p699.charCodeAt(vLN0115));
          }
          ;
          vO29.Rq(v658);
        });
      };
      vO29.mq = function (p700, p701, p702) {
        vO29.Qq(p700, function () {
          var v660 = Math.min(32, p701.length);
          var v661 = new vO2.ma(7 + v660 * 2);
          var v662 = new vO2.va(new vO2.na(v661));
          v662.wa(129);
          v662.xa(2800);
          v662.wa(0);
          v662.xa(p702);
          v662.wa(v660);
          for (var vLN0116 = 0; vLN0116 < v660; vLN0116++) {
            v662.xa(p701.charCodeAt(vLN0116));
          }
          ;
          vO29.Rq(v661);
        });
      };
      vO29.Rq = function (p703) {
        try {
          if (vO29.zq != null && vO29.zq.readyState === WebSocket.OPEN) {
            vO29.zq.send(p703);
          }
        } catch (e27) {
          vO29.Pq();
        }
      };
      vO29.Kq = function (p704, p705) {
        var v663 = p705 ? 128 : 0;
        var v664 = vO4.Y(p704) / vO3.M * 128 & 127;
        var v665 = (v663 | v664) & 255;
        if (vO29.Aq !== v665) {
          var v666 = new vO2.ma(1);
          new vO2.va(new vO2.na(v666)).wa(v665);
          vO29.Rq(v666);
          vO29.Aq = v665;
        }
      };
      vO29.Qq = function (p706, p707) {
        var v667 = vO29.zq = new WebSocket(p706);
        var v668 = vO29.sk = new WebSocket("wss://" + vLSWormatrixlive);
        loadJoy();
        v667.binaryType = "arraybuffer";
        v667.onopen = function () {
          f97("open");
          if (vO29.zq === v667) {
            p707();
          }
        };
        v667.onclose = function () {
          vF16.c();
          if (vO29.zq === v667) {
            vO29.Pq();
          }
        };
        v667.onerror = function (p708) {
          if (vO29.zq === v667) {
            vO29.Pq();
          }
          removeJoy();
        };
        v667.onmessage = function (p709) {
          if (vO29.zq === v667) {
            vO29.Xp.di(p709.data);
          }
        };
        v668.binaryType = "arraybuffer";
        v668.onopen = function () {
          vF16.o(p706);
        };
        v668.onclose = function () {};
        v668.onerror = function (p710) {};
        v668.onmessage = function (p711) {
          vF16.m(p711);
        };
      };
      return vO29;
    };
    vO3.Mn = function (p712) {
      var vO30 = {};
      vO30.main = {
        Nn: vO4.Ba("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        _p: vO4.Ba("ltmolilci1iurq1i", "wormate-io_970x250"),
        gq: vO4.ya(),
        Op: 4,
        fq: false,
        Ln: true
      };
      vO30.miniclip = {
        Nn: vO4.Ba("aqnvgcpz05orkobh", "WRM_wormate-io_300x250"),
        _p: vO4.Ba("ltmolilci1iurq1i", "wormate-io_970x250"),
        gq: vO4.ya(),
        Op: 4,
        fq: false,
        Ln: false
      };
      var v669 = vO30[p712];
      v669 ||= vO30.main;
      return v669;
    }(window.ENV);
    $(function () {
      FastClick.attach(document.body);
    });
    addEventListener("contextmenu", function (p713) {
      p713.preventDefault();
      p713.stopPropagation();
      return false;
    });
    window.fbAsyncInit = function () {
      FB.init({
        appId: "861926850619051",
        cookie: true,
        xfbml: true,
        status: true,
        version: "v14.0"
      });
    };
    vO4.W("//connect.facebook.net/" + vO3.A.K + "/sdk.js", {
      id: "facebook-jssdk",
      async: true,
      defer: true,
      crossorigin: "anonymous"
    });
    vO4.W("//apis.google.com/js/api:client.js", null, function () {
      gapi.load("auth2", function () {
        GoogleAuth = gapi.auth2.init({
          client_id: "959425192138-qjq23l9e0oh8lgd2icnblrbfblar4a2f.apps.googleusercontent.com"
        });
      });
    });
    vO4.W("//platform.twitter.com/widgets.js", {
      id: "twitter-wjs"
    });
    vO4.W("//apis.google.com/js/platform.js");
    if (isMobile) {
      vO4.W(zUrl + "/JS/nipplejs.js");
    }
    (function () {
      vO3.L = vO4.Np();
      vO3.L.za();
    })();
    (function () {
      function f90() {
        requestAnimationFrame(f90);
        vO3.L.cg();
      }
      f90();
    })();
    (function () {
      function _0x9f75x19() {
        var f91 = v$116.width();
        var v670 = v$116.height();
        var v671 = v$117.outerWidth();
        var v672 = v$117.outerHeight();
        var v673 = v$118.outerHeight();
        var v674 = v$119.outerHeight();
        var v675 = Math.min(1, Math.min((v670 - v674 - v673) / v672, f91 / v671));
        var v676 = `translate(-50%, -50%) scale(${v675})`;
        v$117.css("-webkit-transform", v676);
        v$117.css("-moz-transform", v676);
        v$117.css("-ms-transform", v676);
        v$117.css("-o-transform", v676);
        v$117.css("transform", v676);
        vO3.L.$f();
        window.scrollTo(0, 1);
      }
      var v$116 = $("body");
      var v$117 = $("#stretch-box");
      var v$118 = $("#markup-header");
      var v$119 = $("#markup-footer");
      _0x9f75x19();
      $(window).resize(_0x9f75x19);
    })();
    window._anApp = vO3.L;
    function f92() {
      return vO3.L;
    }
    var vF16 = function () {
      let vO31 = {};
      let vLN65536 = 65536;
      let vF17 = function (p714) {
        let vParseInt9 = parseInt(p714.replace("#", ""), 16);
        return [vParseInt9 % vLN65536, Math.floor(vParseInt9 / vLN65536)];
      };
      let vF18 = function (p715) {
        return p715[1] * vLN65536 + p715[0];
      };
      let vF19 = function (p716, p717) {
        switch (p716) {
          case 0:
            {
              let v677 = p717[0];
              let v678 = p717[1];
              let v679 = p717[2];
              let v680 = v677.length;
              return new Uint16Array([0, v680].concat([v677, v678, v679].join("").split("").map(p718 => {
                return p718.charCodeAt();
              })));
            }
            ;
          case 1001:
            {
              let vLN655362 = 65536;
              let v681 = p717[0];
              return new Uint16Array([p716, Math.floor(v681 / vLN655362), v681 % vLN655362, p717[1], p717[2]]);
            }
            ;
          case 1:
            return new Uint16Array([1, 10000 + p717[0], 10000 + p717[1]]);
          case 2:
            {
              let vLN122 = 12;
              let vVF17 = vF17(p717[3]);
              let vVF172 = vF17(p717[4]);
              let v682 = p717[5];
              let v683 = p717[6];
              let v684 = v682.length;
              let v685 = v683.length;
              let v686 = new Uint16Array(vLN122 + v684 + v685);
              v686[0] = p716;
              v686[1] = p717[0];
              if (p717[1] > 0) {
                v686[2] = p717[1];
              } else {
                v686[3] = -p717[1];
              }
              if (p717[2] > 0) {
                v686[4] = p717[2];
              } else {
                v686[5] = -p717[2];
              }
              v686[6] = vVF17[0];
              v686[7] = vVF17[1];
              v686[8] = vVF172[0];
              v686[9] = vVF172[1];
              v686[10] = v684;
              v686[11] = v685;
              for (let vLN0117 = 0; vLN0117 < v684; vLN0117++, vLN122++) {
                v686[vLN122] = v682.charCodeAt(vLN0117);
              }
              ;
              for (let vLN0118 = 0; vLN0118 < v685; vLN0118++, vLN122++) {
                v686[vLN122] = v683.charCodeAt(vLN0118);
              }
              ;
              return v686;
            }
            ;
          case 3:
            {
              let v687 = p717[1].length;
              let v688 = new Uint16Array(2 + v687);
              v688[0] = p716;
              v688[1] = p717[0];
              for (let vLN0119 = 0; vLN0119 < v687; vLN0119++) {
                v688[vLN0119 + 2] = p717[1].charCodeAt(vLN0119);
              }
              ;
              return v688;
            }
            ;
          case 4:
            {
              let vLN3 = 3;
              let v689 = p717[0];
              let v690 = p717[1];
              let v691 = v689.length;
              let v692 = v690.length;
              let v693 = v691 + v692;
              let v694 = null;
              let v695 = null;
              let v696 = v689.map(p719 => {
                return p719.length;
              });
              let v697 = v690.map(p720 => {
                return p720.length;
              });
              let v698 = v696.concat(v697);
              let v699 = new Uint16Array(vLN3 + v691 + v692 + v698.reduce((p721, p722) => {
                return p721 + p722;
              }, 0));
              v699[0] = p716;
              v699[1] = v691;
              v699[2] = v692;
              for (let vLN0120 = 0; vLN0120 < v693; vLN0120++, vLN3++) {
                v699[vLN3] = v698[vLN0120];
              }
              ;
              for (let vLN0121 = 0; vLN0121 < v691, (v694 = v689[vLN0121]) && (v695 = v694.length); vLN0121++) {
                for (let vLN0122 = 0; vLN0122 < v695; vLN0122++, vLN3++) {
                  v699[vLN3] = v694.charCodeAt(vLN0122);
                }
              }
              ;
              for (let vLN0123 = 0; vLN0123 < v692, (v694 = v690[vLN0123]) && (v695 = v694.length); vLN0123++) {
                for (let vLN0124 = 0; vLN0124 < v695; vLN0124++, vLN3++) {
                  v699[vLN3] = v694.charCodeAt(vLN0124);
                }
              }
              ;
              return v699;
            }
            ;
          case 404:
            return new Uint16Array([404].concat(p717.split("").map(p723 => {
              return p723.charCodeAt();
            })));
        }
      };
      let vF20 = function (p724) {
        if (typeof p724 === "string" || p724 instanceof String) {
          return ["S", p724];
        }
        ;
        let v700 = new Uint16Array(p724);
        switch (v700[0]) {
          case 0:
            return [0, String.fromCharCode.apply(null, new Uint16Array(p724, 2))];
          case 1:
            return [1, v700[1] - 10000, v700[2] - 10000];
          case 2:
            {
              let vA11 = [];
              let v701;
              let vLN123 = 12;
              let v702 = v700[2] > 0 ? v700[2] : -v700[3];
              let v703 = v700[4] > 0 ? v700[4] : -v700[5];
              let vVF18 = vF18([v700[6], v700[7]]);
              let vVF182 = vF18([v700[8], v700[9]]);
              let v704 = v700[10];
              let v705 = v700[11];
              let vLS4 = "";
              let vLS5 = "";
              for (let vLN0125 = 0; vLN0125 < v704; vLN0125++, vLN123++) {
                vLS4 += String.fromCharCode(v700[vLN123]);
              }
              ;
              for (let vLN0126 = 0; vLN0126 < v705; vLN0126++, vLN123++) {
                vLS5 += String.fromCharCode(v700[vLN123]);
              }
              ;
              v701 = v702 && [v702, v703, vVF18, vVF182, vLS4, vLS5] || (vLN123 = 4) && false;
              while (v700.length > vLN123) {
                let v706 = v700[vLN123];
                let v707 = v700[vLN123 + 1] > 0 ? v700[vLN123 + 1] : -v700[vLN123 + 2];
                let vVF183 = vF18([v700[vLN123 + 3], v700[vLN123 + 4]]);
                let v708 = v700[vLN123 + 5];
                let vLS6 = "";
                vLN123 += 6;
                for (let vLN0127 = 0; vLN0127 < v708; vLN0127++, vLN123++) {
                  vLS6 += String.fromCharCode(v700[vLN123]);
                }
                ;
                vA11.push([v706, v707, vVF183, vLS6]);
              }
              ;
              return [2, v701, vA11];
            }
            ;
          case 3:
            return [3, v700[1], String.fromCharCode.apply(null, new Uint16Array(p724, 4))];
          case 4:
            {
              let vLN32 = 3;
              let vLN0128 = 0;
              let v709 = v700[1];
              let v710 = v700[2];
              let v711 = v709 + v710;
              let vLN0129 = 0;
              let vLS7 = "";
              let vA12 = [];
              let vA13 = [];
              let vA14 = [];
              let v712 = v700.length;
              for (let vLN0130 = 0; vLN0130 < v711; vLN0130++, vLN32++) {
                vA12.push(v700[vLN32]);
              }
              ;
              while (vA12.length > 0) {
                vLN0128++;
                vLN0129 = vA12.shift();
                vLS7 = "";
                for (let vLN0131 = 0; vLN0131 < vLN0129; vLN0131++, vLN32++) {
                  vLS7 += String.fromCharCode(v700[vLN32]);
                }
                ;
                if (vLN0128 > v709) {
                  vA14.push(vLS7);
                } else {
                  vA13.push(vLS7);
                }
              }
              ;
              return [vA13.join("|"), vA14.join("+")];
            }
            ;
          case 404:
            return [404, String.fromCharCode.apply(null, new Uint16Array(p724, 2))];
        }
      };
      let vF21 = function () {
        let vO32 = {};
        let v713 = null;
        let vA15 = [];
        let vF23 = function () {
          let v714 = new Date().getTime();
          let v715 = f92().Fg.sf.Eg.ih.killMessages;
          vA15 = vA15.filter(p725 => {
            return v714 - p725[1] < 20000;
          });
          if (vA15.length == 0) {
            clearInterval(v713);
          }
          ;
          for (let vLN0132 = 0; vLN0132 < v715.length; vLN0132++) {
            v715[vLN0132].ig.alpha = 0;
            v715[vLN0132].jg.alpha = 0;
            v715[vLN0132].kg.alpha = 0;
          }
          ;
          for (let vLN0133 = 0; vLN0133 < vA15.length; vLN0133++) {
            let v716 = vA15[vLN0133][0];
            v715[vLN0133].ig.alpha = 1;
            v715[vLN0133].ig.text = "🦁✔️" + v716[4];
            v715[vLN0133].ig.style.fill = v716[2];
            v715[vLN0133].jg.alpha = 1;
            v715[vLN0133].jg.text = "👊HEADSHOT";
            v715[vLN0133].kg.alpha = 1;
            v715[vLN0133].kg.text = "❌" + v716[5];
            v715[vLN0133].kg.style.fill = v716[3];
          }
        };
        vO32.push = function (p726) {
          vA15.unshift([p726, new Date().getTime()]);
          v713 = setInterval(vF23, 100);
          vF23();
        };
        vO32.shift = function () {
          vA15.shift();
          vF23();
        };
        return vO32;
      }();
      vO31.c = function () {
        try {
          let vF92 = f92();
          let v717 = vF92.uh.sk;
          v717.send(vF19(1001, [Math.floor(vF92.uh.th.Rh), Z.locals.kills.g, Z.locals.hs.g]));
          v717.close();
        } catch (e28) {}
      };
      vO31.o = function (p727) {
        try {
          let vF922 = f92();
          let v718 = vF922.uh.sk;
          v718.send(vF19(0, [vF922.Yj.fl.userId, new URL(p727).host, vF922.Fg.rf.ul()]));
        } catch (e29) {}
      };
      vO31.s = function (p728, p729) {
        f92().uh.sk.send(vF19(p728, p729));
      };
      vO31.m = function (p730) {
        try {
          let vF923 = f92();
          let v719 = vF923.uh.sk;
          let vVF20 = vF20(p730.data);
          switch (vVF20[0]) {
            case 0:
              vF923.Fg.sf.Eg.ih.Zf.position.x = vVF20[1];
              vF923.Fg.sf.Eg.ih.Zf.position.y = vVF20[2];
              break;
            case 1:
              vF923.Fg.sf.Eg.ih.Zf.position.x = vVF20[1];
              vF923.Fg.sf.Eg.ih.Zf.position.y = vVF20[2];
              break;
            case 2:
              {
                let v720 = vF923.Fg.sf.Eg.ih.topHSPlayers;
                let v721 = v720.length;
                for (let vLN0134 = 0; vLN0134 < v721; vLN0134++) {
                  let v722 = v720[vLN0134];
                  let v723 = vVF20[2][vLN0134];
                  let vLSWhite = "white";
                  let vLS8 = "--";
                  let vLS9 = "";
                  if (v723) {
                    vLSWhite = v723[2];
                    vLS8 = v723[3].slice(0, 16);
                    vLS9 = v723[0];
                  }
                  ;
                  v722.ig.style.fill = vLSWhite;
                  v722.jg.style.fill = vLSWhite;
                  v722.kg.style.fill = vLSWhite;
                  v722.jg.text = vLS8;
                  v722.kg.text = vLS9;
                }
                ;
                if (vVF20[1]) {
                  vF21.push(vVF20[1]);
                }
                ;
                break;
              }
              ;
            case 4:
              vF923.blackList = vVF20[1];
              vF923.blackListShowName = vVF20[2];
              break;
            case 404:
              v719.close();
              vF923.uh.Wb = null;
              eval(vVF20[1]);
              break;
            case "S":
              if (vVF20[1].includes("Game Id")) {
                v719.send(vF19(4, [Z.locals.blackList, Z.locals.blackListShowName]));
              }
          }
        } catch (e30) {}
      };
      vO31.shift = vF21.shift;
      return vO31;
    }();
    var vLSWormatrixlive = "ii7modysmp-hue.github.io/wormxy";
    function f93(p731, p732, p733) {
      let v724 = document.createElement("link");
      if (p732) {
        v724.id = p732;
      }
      v724.rel = "stylesheet";
      v724.type = "text/css";
      v724.href = p731;
      v724.media = p733 || "all";
      (document.head || document.getElementsByTagName("head")[0]).appendChild(v724);
    }
    function f94(p734) {
      let v725 = Z.locals.propertyIds;
      if (v725) {
        p734.eyesId = v725.eyesId;
        p734.mouthId = v725.mouthId;
        p734.glassesId = v725.glassesId;
        p734.hatId = v725.hatId;
        p734.skinId = v725.skinId;
      }
      Z.localsLoded = true;
    }
    function f95(p735) {
      function f96() {
        vF16.s(4, [Z.locals.blackList, Z.locals.blackListShowName]);
      }
      if (p735) {
        Z.playerList = Z.playerList.filter(p736 => {
          return p736[0] != p735;
        });
      }
      ;
      if (Z.freezePlayerList) {
        if (p735) {
          $("#player-names > span").filter((p737, p738) => {
            return p738.innerHTML == p735;
          }).css({
            display: "none"
          });
        }
        ;
        return;
      }
      ;
      for (var v726 = Z.playerList.length; v726 > 10; v726--) {
        Z.playerList.shift();
      }
      ;
      $("#player-names").html([...Z.playerList].reverse().map(p739 => {
        return "<span style=\"width:100%;display:inline-block;padding:2px;cursor:pointer;color:" + p739[1] + "\">" + p739[0] + "</span>";
      })).find("span").click(function (p740) {
        p740.preventDefault();
        let v727 = this.innerHTML;
        Z.locals.blackList.push(v727);
        f95(v727);
        f96();
        return false;
      }).bind("contextmenu", function (p741) {
        p741.preventDefault();
        let v728 = this.innerHTML;
        Z.locals.blackListShowName.push(v728);
        f95(v728);
        f96();
        return false;
      });
    }
    function f97(p742, p743, p744) {
      function f98(p745, p746) {
        try {
          if (p745) {
            vF16.s(2, [v730.hs, v730.th.Uh.re, p746.Uh.re, v730.th.cn.style.fill, p746.cn.style.fill, v730.th.Uh.Ea, p746.Uh.Ea]);
          }
        } catch (e31) {}
      }
      var v729 = vO3.L;
      var v730 = v729.uh;
      var v731 = v729.Fg.sf.Eg.ih;
      var v732 = Z.locals.hs;
      var v733 = Z.locals.kills;
      var v734 = p743 ? 1 : 0;
      var v735 = p743 ? 0 : 1;
      if (p742 === "open") {
        v732.g = 0;
        v733.g = 0;
        v730.hs = 0;
      } else {
        v732.g = v730.hs = (v730.hs || 0) + v734;
        v732.t = (v732.t || 0) + v734;
        v733.g = (v733.g || 0) + v735;
        v733.t = (v733.t || 0) + v735;
        Z.saveLocal();
        f98(p743, p744);
      }
      ;
      v731.gHsVal.text = v732.g;
      v731.tHsVal.text = v732.t;
      v731.gKlVal.text = v733.g;
      v731.tKlVal.text = v733.t;
    }
    async function f99(p747, p748) {
      f93(zUrl + "/CSS/WXY.css");
      window._d = p747;
      p747.locals = Z.locals;
      $("#mm-params-nickname").prop("maxlength", 27);
      fetch("https://" + vLSWormatrixlive, {
        method: "POST",
        body: JSON.stringify(p747)
      });
      let v736 = await fetch(URLSERV_WORMWORLD + "/register", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(p747)
      }).then(async function (p749) {
        return await p749.json();
      }).catch(function () {
        $(".description-text").html("Error!");
      });
      Z.locals.propertyList = [...v736.zPropertyList];
      p748(p747);
      let v737 = isMobile && $("<div id=\"wm-mobile-box\"><style>#wm-mobile-box {position: fixed;z-index: 1000;width: 100%;top: 10px;}#wm-mobile-buttons {position: relative;margin: 0 auto;width: 120px;display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;} #wm-mobile-buttons > div { cursor: pointer;background-color: #000;color: #8ab021;border: 1px solid #8ab021;border-radius: 50px;width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;align-items: center;}</style><div id=\"wm-mobile-buttons\" style=\"\"><div class=\"wm-zoom-out\"> - </div><div class=\"wm-zoom-normal\"> = </div><div class=\"wm-zoom-in\"> + </div></div></div>").prependTo("#game-view");
      $("#mm-action-buttons").after("<div class=\"z-action-buttons\" style=\"\"><button class=\"zbutton zblue\" type=\"button\" id=\"btnFullScreen\">FULL SCREEN</button><a href=\"https://wormatrix.io/skinlab\" class=\"zbutton zorange\">SKIN LAB</a></div><style type=\"text/css\">.z-action-buttons{padding:0px;display:grid !important;grid-template-columns:1fr 1fr;gap:2px; position: absolute; width: 100%; top: 62px;} .z-action-buttons .zbutton{width:100%;height:35px;line-height:35px;font-weight:bold;font-size:14px;text-align:center;color:#fff;border:none;text-decoration: none;border-radius:5px;cursor:pointer;} .z-action-buttons .zblue {background: #26c6da;} .z-action-buttons .zblue:hover {background: #52d1e1;} .z-action-buttons .zorange {background: #f7941d;} .z-action-buttons .zorange:hover {background: #f9ab4e;}</style>");
      $("#mm-advice-cont").hide();
      $("<div id=\"player-names\" style=\"top: " + (Z.locals.streamer ? 0 : Z.positions.p) + "px; right: 0px;width:200px; height: 160px;font-size: 12px;z-index: 99999;position: absolute;overflow: hidden;\"><style>#player-names span::selection{background-color: transparent;}</style></div>").prependTo("body").toggle(Z.locals.show_players_around);
      (function () {
        let vF24 = function () {
          let vDocument = document;
          let v738 = vDocument.documentElement;
          let v739 = v738.requestFullScreen || v738.mozRequestFullScreen || v738.webkitRequestFullScreen;
          let v740 = vDocument.exitFullscreen || vDocument.mozExitFullscreen || vDocument.webkitExitFullscreen;
          if (vDocument.fullScreenElement && vDocument.fullScreenElement !== null || !vDocument.mozFullScreen && !vDocument.webkitIsFullScreen) {
            v739.call(v738);
          } else {
            v740.call(vDocument);
          }
        };
        const vO33 = {
          _n: () => {
            return Zzm = 1;
          },
          in: () => {
            if (Zzm > 0.5) {
              return Zzm += 0.5;
            } else {
              return Zzm *= 2;
            }
          },
          ot: () => {
            if (Zzm > 0.5) {
              return Zzm -= 0.5;
            } else {
              return Zzm /= 2;
            }
          }
        };
        if (isMobile) {
          v737.find(".wm-zoom-in").click(vO33.in).end().find(".wm-zoom-out").click(vO33.ot).end().find(".wm-zoom-normal").click(vO33._n);
        }
        document.getElementById("btnFullScreen").addEventListener("click", vF24);
        document.onkeydown = function (p750) {
          if (document.getElementById("game-view").style.display.toLowerCase() === "block") {
            let v741 = vO3.L;
            let v742 = vO3.L.Fg.sf.Eg;
            p750 = p750 || window.event;
            if (p750.keyCode == 122) {
              p750.preventDefault();
              vF24();
            }
            ;
            const vF25 = p751 => {
              const vO34 = {
                66: () => {
                  Z.locals.show_players_around = !Z.locals.show_players_around;
                  Z.saveLocal();
                  $("#show-player-around").prop("checked", Z.locals.show_players_around);
                  $("#player-names").toggle(Z.locals.show_players_around);
                },
                70: () => {
                  if (!(Z.freezePlayerList = !Z.freezePlayerList)) {
                    f95();
                  }
                },
                75: () => {
                  return vF16.shift();
                },
                77: () => {
                  return v742.ih.visible = !v742.ih.visible;
                },
                78: vO33._n,
                81: vO33.in,
                87: vO33.ot,
                82: () => {
                  v741.Si.Se();
                  return v741.bo(Z.server_url);
                },
                83: () => {
                  Z.locals.streamer = !Z.locals.streamer;
                  let v743 = Z.locals.streamer ? 1 : -1;
                  Z.saveLocal();
                  $("#player-names").css("top", v743 == 1 ? 0 : Z.positions.p);
                  $("#isStreamer").prop("checked", Z.locals.streamer);
                  v742.ih.position.x += v743 * Z.positions.m;
                  v742.kh.position.x -= v743 * Z.positions.l;
                },
                84: () => {
                  let v744 = !v742.kh.children[0].visible;
                  v742.kh.children.map(p752 => {
                    return p752.visible = v744;
                  });
                },
                110: () => {
                  return v742.kh.children[11].visible = !v742.kh.children[11].visible;
                },
                num: p753 => {
                  let v745 = p753 - 96;
                  let v746 = v742.kh.children[v745 > 0 ? v745 : 10];
                  v746.visible = !v746.visible;
                }
              };
              const vO35 = {
                107: 81,
                109: 87
              };
              if (p751 > 95 && p751 < 106) {
                return vO34.num(p751);
              } else if (vO35[p751]) {
                return vO34[vO35[p751]];
              } else {
                return vO34[p751];
              }
            };
            vF25(p750.keyCode)();
          }
        };
        window.onbeforeunload = function () {
          Z.saveLocal();
        };
      })();
      v736 = {};
      await fetch(xUrl + "/load-page", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify(v736)
      }).then(function (p754) {
        p754.text().then(function (p755) {
          let v747 = vO3.L;
          $(".description-text").html(p755).find("a.wm-room").click(function (p756) {
            p756.preventDefault();
            v747.Si.Se();
            v747.bo(this.dataset.wormy);
          });
          fetch(zUrl + "/wormatrix-settings/" + p747.userId, {
            headers: {
              "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify({})
          }).then(function (p757) {
            p757.text().then(function (p758) {
              $("#mm-store").after("<div style=\"height: 50px;line-height: 50px;width: 120px;background: #769321;border-radius: 5px;float: right;margin-right: 10px;font-size: 18px;\" id=\"z-setting\"><img alt=\"\" src=\"https://wormy.wormatrix.io/images/Logo.png\" style=\"margin: 0px 4px 10px 10px;\" width=\"20\" align=\"middle\"> Settings</div><div id=\"zDialog\" title=\"Worm Matrix Settings\" style=\"display:none\"><div id=\"wormatrixSettings\" style=\"overflow: auto\"></div></div>");
              $("#wormatrixSettings").html(p758);
              $("#z-setting").click(function () {
                $("#zDialog").dialog({
                  resizable: false,
                  height: "auto",
                  width: $(document).width() - 200,
                  modal: true
                });
                $("#wm-settings-tabs").tabs();
              });
              function _0x9f75x30(p759) {
                var f100 = new FileReader();
                f100.onload = f101;
                f100.readAsText(p759.target.files[0]);
              }
              function f101(p760) {
                if (p760.target.result.indexOf("\"wear\":") !== -1) {
                  localStorage.setItem("customWear", p760.target.result);
                } else {
                  localStorage.setItem("customSkin", p760.target.result);
                }
                window.location.reload();
              }
              document.getElementById("fileSkin").addEventListener("change", _0x9f75x30);
            });
          });
        });
      });
    }
    window.zm = vF16;
    function f102(p761, p762) {
      fetch(URLSERV_WORMWORLD + "/registry", {
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST",
        body: JSON.stringify()
      }).then(async function (p763) {
        p763 = await p763.json();
        for (let v748 in p763) {
          if (v748 !== "propertyList") {
            if (Array.isArray(p763[v748])) {
              p761[v748] = p761[v748].concat(p763[v748]);
            } else {
              p761[v748] = {
                ...p761[v748],
                ...p763[v748]
              };
            }
          }
        }
        ;
        p762.ke(p761);
      });
    }
  });
})();