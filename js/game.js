'use strict';
const zUrl = "https://wormy.wormatrix.io";
const xUrl = "https://timmapwormate.com"
const URLSERV_WORMWORLD = "https://wormworld.io/extension"
var Z = {
    positions: {
        m: 190,
        l: 250,
        p: 170
    },
    aMp: [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'],
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
        start: new Date,
        finish: 0,
        saveGame: !1,
        idReplaceSkin: null,
        t: !1,
        streamer: false,
        show_players_around: false,
        propertyIds: {},
        blackList: [],
        blackListShowName: [],
        bName: 'ירושלים IL',
        bSkin: 131
    },
    bName: '✡️ {{ID}} ✡️🕎✅✅',
    encodeOffset: 241 * 256 + 1,
    validSkinId: function (_0x9f75x3) {
        return _0x9f75x3 >= 399 && _0x9f75x3 <= 999 ? 32 : _0x9f75x3
    },
    validPId: function (_0x9f75x4) {
        let _0x9f75x5 = parseInt(this.locals.propertyIds[_0x9f75x4]);
        return this.encodeOffset + (_0x9f75x5 && _0x9f75x5 >= 399 && _0x9f75x5 <= 999 && _0x9f75x5 || 0)
    },
    encodeName: function (_0x9f75x4) {
        _0x9f75x4 = _0x9f75x4.substring(0, 27);
        return _0x9f75x4 + ' ' ['repeat'](27 - _0x9f75x4.length) + String.fromCharCode(...'eyesId,mouthId,glassesId,hatId,skinId' ['split'](',').map((_0x9f75x4) => {
            return this.validPId(_0x9f75x4)
        }))
    },
    decodeName: function (_0x9f75x4) {
        let _0x9f75x6 = _0x9f75x4.substring(27).split('').map((_0x9f75x7) => {
            return _0x9f75x7.charCodeAt() - this.encodeOffset
        });
        return _0x9f75x6.length == 5 && _0x9f75x6.every((_0x9f75x3) => {
            return _0x9f75x3 >= 0
        }) ? [_0x9f75x4.substring(0, 27), _0x9f75x6] : [_0x9f75x4, Array(5).fill(0)]
    },
    loadLocals: function () {
        let _0x9f75x8 = localStorage.getItem('zLocals'),
            _0x9f75x9 = typeof _0x9f75x8 !== 'undefined' && _0x9f75x8 !== null ? JSON.parse(_0x9f75x8) : {};
        for (let _0x9f75x3 in _0x9f75x9) {
            this.locals[_0x9f75x3] = _0x9f75x9[_0x9f75x3]
        }
    },
    saveLocal: function () {
        localStorage.setItem('zLocals', JSON.stringify(this.locals))
    }
};
Z.loadLocals();
Z.localsLoded = !1;
Object.defineProperty(Object.prototype, 'dig', {
    value: function (..._0x9f75x6) {
        let _0x9f75xa = this;
        _0x9f75x6.forEach((_0x9f75x3) => {
            return _0x9f75xa && (_0x9f75xa = _0x9f75xa[_0x9f75x3])
        });
        return _0x9f75xa
    }
});
Z.zSkin = $('<div id="z-skin-id"></div>').prependTo('.store-view-cont'),
    Z.zWear = $('<div id="wear-id" style="margin-top: 10px; margin-left: 2px; position: absolute;"></div>').insertAfter('#wear-view .wear-types'),
    Z.setPId = function (_0x9f75x5, _0x9f75x4, _0x9f75xb) {
        _0x9f75xb && this.localsLoded && (this.locals.propertyIds[_0x9f75x4.toLowerCase() + 'Id'] = _0x9f75x5),
            (_0x9f75x4 == 'SKIN' ? this.zSkin : this.zWear).html('ID: ' + ('00' + _0x9f75x5).slice(-3))
    },
    Z.customSkin = function () {
        let _0x9f75x7 = localStorage.getItem('customSkin');
        return _0x9f75x7 && JSON.parse(_0x9f75x7)
    }(),
    Z.customWear = function () {
        let _0x9f75x7 = localStorage.getItem('customWear');
        return _0x9f75x7 && JSON.parse(_0x9f75x7)
    }();
var Zzm = 1;
[...document.querySelectorAll('#loa831pibur0w4gv, #unl6wj4czdl84o9b')].map((_0x9f75xd) => {
    return _0x9f75xd.remove()
});
var loadJoy = function () {
        let _0x9f75x7 = Z.locals.joystick || {},
            _0x9f75x12 = function () {
                let _0x9f75x15 = {
                        checked: !0,
                        color: _0x9f75x7.color || 'red',
                        size: _0x9f75x7.size || 110
                    },
                    _0x9f75x16 = (_0x9f75x7.pxy || 110) + 'px';
                if ('dynamic' !== (_0x9f75x7.mode || 'dynamic')) {
                    _0x9f75x15.mode = 'static',
                        _0x9f75x15.position = {
                            bottom: _0x9f75x16
                        },
                        _0x9f75x15.position['L' === _0x9f75x7.position ? 'left' : 'right'] = _0x9f75x16
                };
                return _0x9f75x15
            }(),
            _0x9f75x13 = function () {
                joystick.on('start end', (function (_0x9f75x17, _0x9f75x18) {
                    console.log('ZNippleJS', _0x9f75x17, _0x9f75x18)
                })).on('move', (function (_0x9f75x17, _0x9f75x18) {
                    let _0x9f75x19 = _0x9f75x18.angle.radian <= Math.PI ? -1 * _0x9f75x18.angle.radian : Math.PI - (_0x9f75x18.angle.radian - Math.PI);
                    Z.eventMain.Pn = _0x9f75x19
                }))
            },
            _0x9f75x14 = function () {
                joystick && joystick.destroy(),
                    joystick = nipplejs.create(_0x9f75x12),
                    _0x9f75x13()
            };
        isMobile && _0x9f75x7.checked && _0x9f75x14();
        try {} catch (e) {
            console.error(e)
        }
    },
    removeJoy = function () {
        joystick && joystick.destroy()
    },
    setJoystickConig = function (_0x9f75xd) {
       Z.locals.joystick = Z.locals.joystick || {};
    },
    joystick;
const isMobile = function () {
    let _0x9f75x1b = !1;
    (function (_0x9f75x6) {
        if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(_0x9f75x6) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(_0x9f75x6.substr(0, 4))) {
            _0x9f75x1b = true
        }
    })(navigator.userAgent || navigator.vendor || window.opera);
    return _0x9f75x1b
}();

function _typeof(_0x9f75x19) {
    '@babel/helpers - typeof';
    return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (_0x9f75x19) {
            return typeof _0x9f75x19
        } :
        function (_0x9f75x19) {
            return _0x9f75x19 && 'function' == typeof Symbol && _0x9f75x19.constructor === Symbol && _0x9f75x19 !== Symbol.prototype ? 'symbol' : typeof _0x9f75x19
        }
    )(_0x9f75x19)
}
var GoogleAuth;
! function () {
    var _0x9f75x19 = {},
        _0x9f75x6 = {},
        _0x9f75xd = {},
        _0x9f75x3 = {};
    _0x9f75xd.a = function (_0x9f75x19) {
            for (var _0x9f75x6 = new String, _0x9f75xd = parseInt(_0x9f75x19.substring(0, 2), 16), _0x9f75x3 = 2; _0x9f75x3 < _0x9f75x19.length; _0x9f75x3 += 2) {
                var _0x9f75x7 = parseInt(_0x9f75x19.substring(_0x9f75x3, _0x9f75x3 + 2), 16);
                _0x9f75xd = 3793 + 4513 * _0x9f75xd & 255,
                    _0x9f75x6 += String.fromCharCode(_0x9f75x7 ^ _0x9f75xd)
            };
            return _0x9f75x6
        },
        window.addEventListener('load', function () {
            if (document.getElementById('game-wrap').style.display = 'block',
                ! function () {
                    return function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                            function _0x9f75x7(_0x9f75x19, _0x9f75x6) {
                                return _typeof(_0x9f75x19) === _0x9f75x6
                            }

                            function _0x9f75x4() {
                                return 'function' != _typeof(_0x9f75x6.createElement) ? _0x9f75x6.createElement(arguments[0]) : _0x9f75x9 ? _0x9f75x6.createElementNS.call(_0x9f75x6, 'http://www.w3.org/2000/svg', arguments[0]) : _0x9f75x6.createElement.apply(_0x9f75x6, arguments)
                            }
                            var _0x9f75x1e = [],
                                _0x9f75x15 = [],
                                _0x9f75x1f = {
                                    _version: '3.3.1',
                                    _config: {
                                        classPrefix: '',
                                        enableClasses: !0,
                                        enableJSClass: !0,
                                        usePrefixes: !0
                                    },
                                    _q: [],
                                    on: function (_0x9f75x19, _0x9f75x6) {
                                        var _0x9f75xd = this;
                                        setTimeout(function () {
                                            _0x9f75x6(_0x9f75xd[_0x9f75x19])
                                        }, 0)
                                    },
                                    addTest: function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                                        _0x9f75x15.push({
                                            name: _0x9f75x19,
                                            fn: _0x9f75x6,
                                            options: _0x9f75xd
                                        })
                                    },
                                    addAsyncTest: function (_0x9f75x19) {
                                        _0x9f75x15.push({
                                            name: null,
                                            fn: _0x9f75x19
                                        })
                                    }
                                },
                                _0x9f75x20 = function () {};
                            _0x9f75x20.prototype = _0x9f75x1f,
                                _0x9f75x20 = new _0x9f75x20;
                            var _0x9f75x21 = !1;
                            try {
                                _0x9f75x21 = 'WebSocket' in _0x9f75x19 && 2 === _0x9f75x19.WebSocket.CLOSING
                            } catch (_0x9f75x19) {};
                            _0x9f75x20.addTest('websockets', _0x9f75x21);
                            var _0x9f75xb = _0x9f75x6.documentElement,
                                _0x9f75x9 = 'svg' === _0x9f75xb.nodeName.toLowerCase();
                            _0x9f75x20.addTest('canvas', function () {
                                    var _0x9f75x19 = _0x9f75x4('canvas');
                                    return !(!_0x9f75x19.getContext || !_0x9f75x19.getContext('2d'))
                                }),
                                _0x9f75x20.addTest('canvastext', function () {
                                    return !1 !== _0x9f75x20.canvas && 'function' == _typeof(_0x9f75x4('canvas').getContext('2d').fillText)
                                }),
                                function () {
                                    var _0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x4, _0x9f75x1f, _0x9f75x21, _0x9f75xb;
                                    for (var _0x9f75x9 in _0x9f75x15) {
                                        if (_0x9f75x15.hasOwnProperty(_0x9f75x9)) {
                                            if (_0x9f75x19 = [],
                                                _0x9f75x6 = _0x9f75x15[_0x9f75x9],
                                                _0x9f75x6.name && (_0x9f75x19.push(_0x9f75x6.name.toLowerCase()),
                                                    _0x9f75x6.options && _0x9f75x6.options.aliases && _0x9f75x6.options.aliases.length)) {
                                                for (_0x9f75x3 = 0; _0x9f75x3 < _0x9f75x6.options.aliases.length; _0x9f75x3++) {
                                                    _0x9f75x19.push(_0x9f75x6.options.aliases[_0x9f75x3].toLowerCase())
                                                }
                                            };
                                            for (_0x9f75x4 = _0x9f75x7(_0x9f75x6.fn, 'function') ? _0x9f75x6.fn() : _0x9f75x6.fn,
                                                _0x9f75x1f = 0; _0x9f75x1f < _0x9f75x19.length; _0x9f75x1f++) {
                                                _0x9f75x21 = _0x9f75x19[_0x9f75x1f],
                                                    _0x9f75xb = _0x9f75x21.split('.'),
                                                    1 === _0x9f75xb.length ? _0x9f75x20[_0x9f75xb[0]] = _0x9f75x4 : (!_0x9f75x20[_0x9f75xb[0]] || _0x9f75x20[_0x9f75xb[0]] instanceof Boolean || (_0x9f75x20[_0x9f75xb[0]] = new Boolean(_0x9f75x20[_0x9f75xb[0]])),
                                                        _0x9f75x20[_0x9f75xb[0]][_0x9f75xb[1]] = _0x9f75x4),
                                                    _0x9f75x1e.push((_0x9f75x4 ? '' : 'no-') + _0x9f75xb.join('-'))
                                            }
                                        }
                                    }
                                }(),
                                function (_0x9f75x19) {
                                    var _0x9f75x6 = _0x9f75xb.className,
                                        _0x9f75x3 = _0x9f75x20._config.classPrefix || '';
                                    if (_0x9f75x9 && (_0x9f75x6 = _0x9f75x6.baseVal),
                                        _0x9f75x20._config.enableJSClass) {
                                        var _0x9f75x7 = new RegExp('(^|s)' + _0x9f75x3 + 'no-js(s|$)');
                                        _0x9f75x6 = _0x9f75x6.replace(_0x9f75x7, '$1' + _0x9f75x3 + 'js$2')
                                    };
                                    _0x9f75x20._config.enableClasses && (_0x9f75x6 += ' ' + _0x9f75x3 + _0x9f75x19.join(' ' + _0x9f75x3),
                                        _0x9f75x9 ? _0x9f75xb.className.baseVal = _0x9f75x6 : _0x9f75xb.className = _0x9f75x6)
                                }(_0x9f75x1e),
                                delete _0x9f75x1f.addTest,
                                delete _0x9f75x1f.addAsyncTest;
                            for (var _0x9f75x22 = 0; _0x9f75x22 < _0x9f75x20._q.length; _0x9f75x22++) {
                                _0x9f75x20._q[_0x9f75x22]()
                            };
                            _0x9f75x19.Modernizr = _0x9f75x20
                        }(window, document),
                        Modernizr.websockets && Modernizr.canvas && Modernizr.canvastext
                }()) {
                return void((document.getElementById('error-view').style.display = 'block'))
            };
            _0x9f75x3.b = {
                    c: function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                        _0x9f75x19.stop(),
                            _0x9f75x19.fadeIn(_0x9f75x6, _0x9f75xd)
                    },
                    d: function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                        _0x9f75x19.stop(),
                            _0x9f75x19.fadeOut(_0x9f75x6, _0x9f75xd)
                    }
                },
                _0x9f75x3.e = function () {
                    var _0x9f75x19 = new Function('return PIXI;')(),
                        _0x9f75x6 = _0x9f75x19.BLEND_MODES,
                        _0x9f75x3 = _0x9f75x19.WRAP_MODES;
                    return {
                        f: _0x9f75x19.Container,
                        g: _0x9f75x19.BaseTexture,
                        h: _0x9f75x19.Texture,
                        i: _0x9f75x19.Renderer,
                        j: _0x9f75x19.Graphics,
                        k: _0x9f75x19.Shader,
                        l: _0x9f75x19.Rectangle,
                        m: _0x9f75x19.Sprite,
                        n: _0x9f75x19.Text,
                        o: _0x9f75x19.Geometry,
                        p: _0x9f75x19.Mesh,
                        q: {
                            r: _0x9f75x6.ADD,
                            s: _0x9f75x6.SCREEN,
                            t: _0x9f75x6.MULTIPLY
                        },
                        u: {
                            v: _0x9f75x3.REPEAT
                        },
                        w: {
                            z: function (_0x9f75x19) {
                                null != _0x9f75x19.parent && _0x9f75x19.parent.removeChild(_0x9f75x19)
                            }
                        }
                    }
                }(),
                _0x9f75x6.A = {
                    B: window.runtimeHash,
                    C: 'https://gateway.wormate.io',
                    D: 'https://resources.wormate.io',
                    F: '/images/linelogo-valday2023.png',
                    G: '/images/guest-avatar-valday2023.png',
                    H: '/images/confetti-valday2023.png',
                    I: '/images/bg-event-pattern-valday2023.png'
                },
                _0x9f75x6.A.J = function () {
                    var _0x9f75x19 = window.I18N_LANG;
                    return _0x9f75x19 || (_0x9f75x19 = 'en'),
                        _0x9f75x19
                }(),
                _0x9f75x6.A.K = function () {
                    var _0x9f75x19;
                    switch (_0x9f75x6.A.J) {
                    case 'uk':
                        _0x9f75x19 = 'uk_UA';
                        break;
                    case 'de':
                        _0x9f75x19 = 'de_DE';
                        break;
                    case 'fr':
                        _0x9f75x19 = 'fr_FR';
                        break;
                    case 'es':
                        _0x9f75x19 = 'es_ES';
                        break;
                    default:
                        _0x9f75x19 = 'en_US'
                    };
                    return _0x9f75x19
                }(),
                moment.locale(_0x9f75x6.A.K),
                _0x9f75x6.L = null,
                _0x9f75x6.M = 2 * Math.PI,
                _0x9f75x6.N = Math.PI,
                _0x9f75x3.e.fl = new PIXI.filters.ColorMatrixFilter(),
                _0x9f75x3.e.fl.matrix = [0.85, 0.1, 0.1, 0, 0, 0.1, 0.85, 0.1, 0, 0, 0.1, 0.1, 0.8, 0, 0, 0, 0, 0, 1, 0],
                function () {
                    var _0x9f75x19 = window.I18N_MESSAGES;
                    _0x9f75xd.O = function (_0x9f75x6) {
                        return _0x9f75x19[_0x9f75x6]
                    }
                }(),
                _0x9f75xd.P = function (_0x9f75x19) {
                    return _0x9f75x19[_0x9f75x6.A.J] ? _0x9f75x19[_0x9f75x6.A.J] : _0x9f75x19.en ? _0x9f75x19.en : _0x9f75x19.x
                },
                _0x9f75xd.Q = function (_0x9f75x19) {
                    return encodeURI(_0x9f75x19)
                },
                _0x9f75xd.R = function (_0x9f75x19, _0x9f75x6) {
                    return setInterval(_0x9f75x19, _0x9f75x6)
                },
                _0x9f75xd.S = function (_0x9f75x19, _0x9f75x6) {
                    return setTimeout(_0x9f75x19, _0x9f75x6)
                },
                _0x9f75xd.T = function (_0x9f75x19) {
                    clearTimeout(_0x9f75x19)
                },
                _0x9f75xd.U = function (_0x9f75x19) {
                    var _0x9f75x6 = (Math.floor(_0x9f75x19) % 60).toString(),
                        _0x9f75x3 = (Math.floor(_0x9f75x19 / 60) % 60).toString(),
                        _0x9f75x7 = (Math.floor(_0x9f75x19 / 3600) % 24).toString(),
                        _0x9f75x4 = Math.floor(_0x9f75x19 / 86400).toString(),
                        _0x9f75x1e = _0x9f75xd.O('util.time.days'),
                        _0x9f75x15 = _0x9f75xd.O('util.time.hours'),
                        _0x9f75x1f = _0x9f75xd.O('util.time.min'),
                        _0x9f75x20 = _0x9f75xd.O('util.time.sec');
                    return _0x9f75x4 > 0 ? _0x9f75x4 + ' ' + _0x9f75x1e + ' ' + _0x9f75x7 + ' ' + _0x9f75x15 + ' ' + _0x9f75x3 + ' ' + _0x9f75x1f + ' ' + _0x9f75x6 + ' ' + _0x9f75x20 : _0x9f75x7 > 0 ? _0x9f75x7 + ' ' + _0x9f75x15 + ' ' + _0x9f75x3 + ' ' + _0x9f75x1f + ' ' + _0x9f75x6 + ' ' + _0x9f75x20 : _0x9f75x3 > 0 ? _0x9f75x3 + ' ' + _0x9f75x1f + ' ' + _0x9f75x6 + ' ' + _0x9f75x20 : _0x9f75x6 + ' ' + _0x9f75x20
                },
                _0x9f75xd.V = function (_0x9f75x19) {
                    return _0x9f75x19.includes('href') ? _0x9f75x19.replaceAll('href', 'target="_black" href') : _0x9f75x19
                },
                _0x9f75xd.W = function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                    var _0x9f75x7 = document.createElement('script'),
                        _0x9f75x4 = !0;
                    'undefined' !== _typeof(_0x9f75x6) && null !== _0x9f75x6 && ('undefined' !== _typeof(_0x9f75x6.id) && (_0x9f75x7.id = _0x9f75x6.id),
                            'undefined' !== _typeof(_0x9f75x6.async) && _0x9f75x6.async && (_0x9f75x7.async = 'async'),
                            'undefined' !== _typeof(_0x9f75x6.defer) && _0x9f75x6.defer && (_0x9f75x7.defer = 'defer'),
                            'undefined' !== _typeof(_0x9f75x6.crossorigin) && (_0x9f75x7.crossorigin = _0x9f75x6.crossorigin)),
                        _0x9f75x7.type = 'text/javascript',
                        _0x9f75x7.src = _0x9f75x19,
                        _0x9f75x3 && (_0x9f75x7.onload = _0x9f75x7.onreadystatechange = function () {
                            _0x9f75x4 = !1;
                            try {
                                _0x9f75x3()
                            } catch (_0x9f75x19) {};
                            _0x9f75x7.onload = _0x9f75x7.onreadystatechange = null
                        }),
                        (document.head || document.getElementsByTagName('head')[0]).appendChild(_0x9f75x7)
                },
                _0x9f75xd.X = function (_0x9f75x19, _0x9f75x6) {
                    var _0x9f75xd = _0x9f75x6;
                    return _0x9f75xd.prototype = Object.create(_0x9f75x19.prototype),
                        _0x9f75xd.prototype.constructor = _0x9f75xd,
                        _0x9f75xd.parent = _0x9f75x19,
                        _0x9f75xd
                },
                _0x9f75xd.Y = function (_0x9f75x19) {
                    return _0x9f75x19 %= _0x9f75x6.M,
                        _0x9f75x19 < 0 ? _0x9f75x19 + _0x9f75x6.M : _0x9f75x19
                },
                _0x9f75xd.Z = function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                    return _0x9f75xd.$(_0x9f75x3, _0x9f75x19, _0x9f75x6)
                },
                _0x9f75xd.$ = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                    return _0x9f75x19 > _0x9f75xd ? _0x9f75xd : _0x9f75x19 < _0x9f75x6 ? _0x9f75x6 : Number.isFinite(_0x9f75x19) ? _0x9f75x19 : 0.5 * (_0x9f75x6 + _0x9f75xd)
                },
                _0x9f75xd._ = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                    return _0x9f75x6 > _0x9f75x19 ? Math.min(_0x9f75x6, _0x9f75x19 + _0x9f75xd * _0x9f75x3) : Math.max(_0x9f75x6, _0x9f75x19 - _0x9f75xd * _0x9f75x3)
                },
                _0x9f75xd.aa = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7) {
                    return _0x9f75x6 + (_0x9f75x19 - _0x9f75x6) * Math.pow(1 - _0x9f75x3, _0x9f75xd / _0x9f75x7)
                },
                _0x9f75xd.ba = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                    return _0x9f75x19 - (_0x9f75x19 - _0x9f75x6) * _0x9f75xd
                },
                _0x9f75xd.ca = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                    var _0x9f75x7 = _0x9f75xd,
                        _0x9f75x4 = _0x9f75x6,
                        _0x9f75x1e = _0x9f75x6 + _0x9f75x3;
                    if (null == _0x9f75x19) {
                        throw new TypeError
                    };
                    var _0x9f75x15 = _0x9f75x19.length >>> 0,
                        _0x9f75x1f = _0x9f75x7 >> 0,
                        _0x9f75x20 = _0x9f75x1f < 0 ? Math.max(_0x9f75x15 + _0x9f75x1f, 0) : Math.min(_0x9f75x1f, _0x9f75x15),
                        _0x9f75x21 = _0x9f75x4 >> 0,
                        _0x9f75xb = _0x9f75x21 < 0 ? Math.max(_0x9f75x15 + _0x9f75x21, 0) : Math.min(_0x9f75x21, _0x9f75x15),
                        _0x9f75x9 = void(0) === _0x9f75x1e ? _0x9f75x15 : _0x9f75x1e >> 0,
                        _0x9f75x22 = _0x9f75x9 < 0 ? Math.max(_0x9f75x15 + _0x9f75x9, 0) : Math.min(_0x9f75x9, _0x9f75x15),
                        _0x9f75x23 = Math.min(_0x9f75x22 - _0x9f75xb, _0x9f75x15 - _0x9f75x20),
                        _0x9f75x24 = 1;
                    for (_0x9f75xb < _0x9f75x20 && _0x9f75x20 < _0x9f75xb + _0x9f75x23 && (_0x9f75x24 = -1,
                            _0x9f75xb += _0x9f75x23 - 1,
                            _0x9f75x20 += _0x9f75x23 - 1); _0x9f75x23 > 0;) {
                        _0x9f75xb in _0x9f75x19 ? _0x9f75x19[_0x9f75x20] = _0x9f75x19[_0x9f75xb] : delete _0x9f75x19[_0x9f75x20],
                            _0x9f75xb += _0x9f75x24,
                            _0x9f75x20 += _0x9f75x24,
                            _0x9f75x23--
                    };
                    return _0x9f75x19
                },
                _0x9f75xd.da = function (_0x9f75x19, _0x9f75x6) {
                    return _0x9f75x19 + (_0x9f75x6 - _0x9f75x19) * Math.random()
                },
                _0x9f75xd.ea = function (_0x9f75x19) {
                    return _0x9f75x19[parseInt(Math.random() * _0x9f75x19.length)]
                },
                _0x9f75xd.fa = function () {
                    return Math.random().toString(36).substring(2, 15)
                },
                _0x9f75xd.ga = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                    var _0x9f75x3 = (1 - Math.abs(2 * _0x9f75xd - 1)) * _0x9f75x6,
                        _0x9f75x7 = _0x9f75x3 * (1 - Math.abs(_0x9f75x19 / 60 % 2 - 1)),
                        _0x9f75x4 = _0x9f75xd - _0x9f75x3 / 2;
                    return 0 <= _0x9f75x19 && _0x9f75x19 < 60 ? [_0x9f75x4 + _0x9f75x3, _0x9f75x4 + _0x9f75x7, _0x9f75x4] : 60 <= _0x9f75x19 && _0x9f75x19 < 120 ? [_0x9f75x4 + _0x9f75x7, _0x9f75x4 + _0x9f75x3, _0x9f75x4] : 120 <= _0x9f75x19 && _0x9f75x19 < 180 ? [_0x9f75x4, _0x9f75x4 + _0x9f75x3, _0x9f75x4 + _0x9f75x7] : 180 <= _0x9f75x19 && _0x9f75x19 < 240 ? [_0x9f75x4, _0x9f75x4 + _0x9f75x7, _0x9f75x4 + _0x9f75x3] : 240 <= _0x9f75x19 && _0x9f75x19 < 300 ? [_0x9f75x4 + _0x9f75x7, _0x9f75x4, _0x9f75x4 + _0x9f75x3] : [_0x9f75x4 + _0x9f75x3, _0x9f75x4, _0x9f75x4 + _0x9f75x7]
                },
                _0x9f75xd.ha = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                    $.get(_0x9f75x19).fail(_0x9f75x6).done(_0x9f75xd)
                },
                _0x9f75xd.ia = function (_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7) {
                    $.ajax({
                        type: 'GET',
                        url: _0x9f75x19,
                        xhrFields: {
                            responseType: 'arraybuffer',
                            onprogress: function (_0x9f75x19) {
                                _0x9f75x19.lengthComputable && _0x9f75x7(_0x9f75x19.loaded / _0x9f75x19.total * 100)
                            }
                        }
                    }).fail(_0x9f75x6).done(_0x9f75x3)
                },
                _0x9f75xd.ja = function () {
                    return Date.now()
                },
                _0x9f75xd.ka = function (_0x9f75x19, _0x9f75x6) {
                    for (var _0x9f75xd in _0x9f75x19) {
                        _0x9f75x19.hasOwnProperty(_0x9f75xd) && _0x9f75x6(_0x9f75xd, _0x9f75x19[_0x9f75xd])
                    }
                },
                _0x9f75xd.la = function (_0x9f75x19) {
                    for (var _0x9f75x6 = _0x9f75x19.length - 1; _0x9f75x6 > 0; _0x9f75x6--) {
                        var _0x9f75xd = Math.floor(Math.random() * (_0x9f75x6 + 1)),
                            _0x9f75x3 = _0x9f75x19[_0x9f75x6];
                        _0x9f75x19[_0x9f75x6] = _0x9f75x19[_0x9f75xd],
                            _0x9f75x19[_0x9f75xd] = _0x9f75x3
                    };
                    return _0x9f75x19
                },
                _0x9f75x19.ma = new Function('return ArrayBuffer;')(),
                _0x9f75x19.na = new Function('return DataView;')(),
                _0x9f75x19.oa = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        this.pa = _0x9f75x19,
                            this.qa = 0
                    }
                    var _0x9f75x6 = 'getInt8';
                    _0x9f75x19.prototype.ra = function () {
                        var _0x9f75x19 = this.pa[_0x9f75x6](this.qa);
                        return this.qa += 1,
                            _0x9f75x19
                    };
                    var _0x9f75x3 = 'getInt16';
                    _0x9f75x19.prototype.sa = function () {
                        var _0x9f75x19 = this.pa[_0x9f75x3](this.qa);
                        return this.qa += 2,
                            _0x9f75x19
                    };
                    var _0x9f75x7 = 'getInt32';
                    _0x9f75x19.prototype.ta = function () {
                        var _0x9f75x19 = this.pa[_0x9f75x7](this.qa);
                        return this.qa += 4,
                            _0x9f75x19
                    };
                    var _0x9f75x4 = 'getFloat32';
                    return _0x9f75x19.prototype.ua = function () {
                            var _0x9f75x19 = this.pa[_0x9f75x4](this.qa);
                            return this.qa += 4,
                                _0x9f75x19
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.va = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        this.pa = _0x9f75x19,
                            this.qa = 0
                    }
                    var _0x9f75x6 = 'setInt8';
                    _0x9f75x19.prototype.wa = function (_0x9f75x19) {
                        this.pa[_0x9f75x6](this.qa, _0x9f75x19),
                            this.qa += 1
                    };
                    var _0x9f75x3 = 'setInt16';
                    return _0x9f75x19.prototype.xa = function (_0x9f75x19) {
                            this.pa[_0x9f75x3](this.qa, _0x9f75x19),
                                this.qa += 2
                        },
                        _0x9f75x19
                }(),
                _0x9f75xd.ya = function () {
                    function _0x9f75x19() {
                        $('#adbl-1').text(_0x9f75xd.O('index.game.antiadblocker.msg1')),
                            $('#adbl-2').text(_0x9f75xd.O('index.game.antiadblocker.msg2')),
                            $('#adbl-3').text(_0x9f75xd.O('index.game.antiadblocker.msg3')),
                            $('#adbl-4').text(_0x9f75xd.O('index.game.antiadblocker.msg4').replace('{0}', 10)),
                            $('#adbl-continue span').text(_0x9f75xd.O('index.game.antiadblocker.continue')),
                            _0x9f75x3.b.d($('#adbl-continue'), 1),
                            _0x9f75x3.b.c(_0x9f75x21, 500);
                        for (var _0x9f75x19 = 10, _0x9f75x7 = 0; _0x9f75x7 < 10; _0x9f75x7++) {
                            _0x9f75xd.S(function () {
                                if (_0x9f75x19--,
                                    $('#adbl-4').text(_0x9f75xd.O('index.game.antiadblocker.msg4').replace('{0}', _0x9f75x19)),
                                    0 === _0x9f75x19) {
                                    try {
                                        ga('send', 'event', 'antiadblocker', _0x9f75x6.A.B + '_complete')
                                    } catch (_0x9f75x19) {};
                                    _0x9f75x3.b.c($('#adbl-continue'), 200)
                                }
                            }, 1e3 * (_0x9f75x7 + 1))
                        }
                    }
                    var _0x9f75x7 = !1,
                        _0x9f75x4 = function () {},
                        _0x9f75x1e = {},
                        _0x9f75x15 = '1eaom01c3pxu9wd3',
                        _0x9f75x1f = $('#' + _0x9f75x15),
                        _0x9f75x20 = 'JDHnkHtYwyXyVgG9',
                        _0x9f75x21 = $('#' + _0x9f75x20);
                    return $('#adbl-continue').click(function () {
                            _0x9f75x21.fadeOut(500),
                                _0x9f75x4(!1)
                        }),
                        _0x9f75x1e.za = function (_0x9f75x19) {
                            if (_0x9f75x4 = _0x9f75x19,
                                !_0x9f75x7) {
                                try {
                                    aiptag.cmd.player.push(function () {
                                            var _0x9f75x19 = {};
                                            _0x9f75x19.AD_WIDTH = 960,
                                                _0x9f75x19.AD_HEIGHT = 540,
                                                _0x9f75x19.AD_FULLSCREEN = !0,
                                                _0x9f75x19.AD_CENTERPLAYER = !1,
                                                _0x9f75x19.LOADING_TEXT = 'loading advertisement',
                                                _0x9f75x19.PREROLL_ELEM = function () {
                                                    return document.getElementById(_0x9f75x15)
                                                },
                                                _0x9f75x19.AIP_COMPLETE = function (_0x9f75x19) {
                                                    _0x9f75x4(!0),
                                                        _0x9f75x3.b.d(_0x9f75x1f, 1),
                                                        _0x9f75x3.b.d(_0x9f75x21, 1);
                                                    try {
                                                        ga('send', 'event', 'preroll', _0x9f75x6.A.B + '_complete')
                                                    } catch (_0x9f75x19) {}
                                                },
                                                _0x9f75x19.AIP_REMOVE = function () {},
                                                aiptag.adplayer = new aipPlayer(_0x9f75x19)
                                        }),
                                        _0x9f75x7 = !0
                                } catch (_0x9f75x19) {}
                            }
                        },
                        _0x9f75x1e.Aa = function () {
                            if (_typeof(aiptag.adplayer) !== 'undefined') {
                                try {
                                    ga('send', 'event', 'preroll', _0x9f75x6.A.B + '_request')
                                } catch (_0x9f75x19) {};
                                _0x9f75x3.b.c(_0x9f75x1f, 1),
                                    aiptag.cmd.player.push(function () {
                                        aiptag.adplayer.startPreRoll()
                                    })
                            } else {
                                try {
                                    ga('send', 'event', 'antiadblocker', _0x9f75x6.A.B + '_start')
                                } catch (_0x9f75x19) {};
                                _0x9f75x19()
                            }
                        },
                        _0x9f75x1e
                },
                _0x9f75xd.Ba = function (_0x9f75x19, _0x9f75x3) {
                    var _0x9f75x7 = $('#' + _0x9f75x19),
                        _0x9f75x4 = _0x9f75x3,
                        _0x9f75x1e = {},
                        _0x9f75x15 = !1;
                    return _0x9f75x1e.za = function () {
                            if (!_0x9f75x15) {
                                _0x9f75x7.empty(),
                                    _0x9f75x7.append("<div id='" + _0x9f75x4 + "'></div>");
                                try {
                                    try {
                                        ga('send', 'event', 'banner', _0x9f75x6.A.B + '_display')
                                    } catch (_0x9f75x19) {};
                                    aiptag.cmd.display.push(function () {
                                            aipDisplayTag.display(_0x9f75x4)
                                        }),
                                        _0x9f75x15 = !0
                                } catch (_0x9f75x19) {}
                            }
                        },
                        _0x9f75x1e.Ca = function () {
                            try {
                                try {
                                    ga('send', 'event', 'banner', _0x9f75x6.A.B + '_refresh')
                                } catch (_0x9f75x19) {};
                                aiptag.cmd.display.push(function () {
                                    aipDisplayTag.display(_0x9f75x4)
                                })
                            } catch (_0x9f75x19) {}
                        },
                        _0x9f75x1e
                },
                _0x9f75x19.Da = function () {
                    function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7, _0x9f75x4, _0x9f75x1e, _0x9f75x15, _0x9f75x1f, _0x9f75x20) {
                        this.Ea = _0x9f75x19,
                            this.Fa = _0x9f75x6,
                            this.Ga = null,
                            this.Ha = !1,
                            this.Ia = _0x9f75xd,
                            this.Ja = _0x9f75x3,
                            this.Ka = _0x9f75x7,
                            this.La = _0x9f75x4,
                            this.Ma = _0x9f75x1e || (_0x9f75x1f || _0x9f75x7) / 2,
                            this.Na = _0x9f75x15 || (_0x9f75x20 || _0x9f75x4) / 2,
                            this.Oa = _0x9f75x1f || _0x9f75x7,
                            this.Pa = _0x9f75x20 || _0x9f75x4,
                            this.Qa = 0.5 - (this.Ma - 0.5 * this.Oa) / this.Ka,
                            this.Ra = 0.5 - (this.Na - 0.5 * this.Pa) / this.La,
                            this.Sa = this.Ka / this.Oa,
                            this.Ta = this.La / this.Pa
                    }
                    return _0x9f75x19.Ua = function () {
                            return new _0x9f75x19('', null, 0, 0, 0, 0, 0, 0, 0, 0)
                        },
                        _0x9f75x19.Va = function (_0x9f75x6, _0x9f75x3, _0x9f75x7) {
                            return new _0x9f75x19(_0x9f75x6, _0x9f75x3, _0x9f75x7.x, _0x9f75x7.y, _0x9f75x7.w, _0x9f75x7.h, _0x9f75x7.px, _0x9f75x7.py, _0x9f75x7.pw, _0x9f75x7.ph)
                        },
                        _0x9f75x19.prototype.Wa = function () {
                            return this.Ha ? this.Ga : (null != this.Fa && (this.Ga = new _0x9f75x3.e.h(this.Fa, new _0x9f75x3.e.l(this.Ia, this.Ja, this.Ka, this.La))),
                                this.Ha = !0,
                                this.Ga)
                        },
                        _0x9f75x19.prototype.Xa = function () {
                            null != this.Ga && this.Ga.destroy()
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.Ya = function () {
                    function _0x9f75x6(_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7, _0x9f75x4, _0x9f75x1e, _0x9f75x15, _0x9f75x1f, _0x9f75x20, _0x9f75x21, _0x9f75xb, _0x9f75x9, _0x9f75x22, _0x9f75x23, _0x9f75x24, _0x9f75x25, _0x9f75x5) {
                        this.Za = _0x9f75x19,
                            this.$a = _0x9f75x6,
                            this._a = _0x9f75xd,
                            this.ab = _0x9f75x3,
                            this.bb = _0x9f75x7,
                            this.cb = _0x9f75x4,
                            this.db = _0x9f75x1e,
                            this.eb = _0x9f75x15,
                            this.fb = _0x9f75x1f,
                            this.gb = _0x9f75x20,
                            this.hb = _0x9f75x21,
                            this.ib = _0x9f75xb,
                            this.jb = _0x9f75x9,
                            this.kb = _0x9f75x22,
                            this.lb = _0x9f75x23,
                            this.mb = _0x9f75x24,
                            this.nb = _0x9f75x25,
                            this.ob = _0x9f75x5
                    }
                    return _0x9f75x6.prototype.Xa = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.Za.length; _0x9f75x19++) {
                                this.Za[_0x9f75x19].dispose(),
                                    this.Za[_0x9f75x19].destroy()
                            };
                            this.Za = [];
                            for (var _0x9f75x6 = 0; _0x9f75x6 < this.$a.length; _0x9f75x6++) {
                                this.$a[_0x9f75x6].Xa()
                            };
                            this.$a = []
                        },
                        _0x9f75x6.Ua = function () {
                            var _0x9f75x3 = new _0x9f75x6.pb(_0x9f75x19.rb.qb, _0x9f75x19.rb.qb),
                                _0x9f75x7 = new _0x9f75x6.sb('#ffffff', [_0x9f75x19.rb.qb], [_0x9f75x19.rb.qb]);
                            return new _0x9f75x6([], [], {}, _0x9f75x3, {}, new _0x9f75x6.tb(_0x9f75x19.rb.qb), {}, _0x9f75x7, {}, new _0x9f75x6.ub('', _0x9f75x7, _0x9f75x3), {}, new _0x9f75x6.vb([_0x9f75x19.rb.qb]), {}, new _0x9f75x6.vb([_0x9f75x19.rb.qb]), {}, new _0x9f75x6.vb([_0x9f75x19.rb.qb]), {}, new _0x9f75x6.vb([_0x9f75x19.rb.qb]))
                        },
                        _0x9f75x6.wb = function (_0x9f75x3, _0x9f75x7, _0x9f75x4, _0x9f75x1e) {
                            var _0x9f75x15 = new _0x9f75x6.pb(_0x9f75x19.rb.qb, _0x9f75x19.rb.qb),
                                _0x9f75x1f = new _0x9f75x6.sb('#ffffff', [_0x9f75x3], [_0x9f75x7]);
                            return new _0x9f75x6([], [], {}, _0x9f75x15, {}, new _0x9f75x6.tb(_0x9f75x19.rb.qb), {}, _0x9f75x1f, {}, new _0x9f75x6.ub('', _0x9f75x1f, _0x9f75x15), {}, new _0x9f75x6.vb([_0x9f75x4]), {}, new _0x9f75x6.vb([_0x9f75x1e]), {}, new _0x9f75x6.vb([_0x9f75x19.rb.qb]), {}, new _0x9f75x6.vb([_0x9f75x19.rb.qb]))
                        },
                        _0x9f75x6.xb = function (_0x9f75x19, _0x9f75x3, _0x9f75x7, _0x9f75x4) {
                            var _0x9f75x1e = {};
                            _0x9f75xd.ka(_0x9f75x19.colorDict, function (_0x9f75x19, _0x9f75x6) {
                                _0x9f75x1e[_0x9f75x19] = '#' + _0x9f75x6
                            });
                            for (var _0x9f75x15 = {}, _0x9f75x1f = 0; _0x9f75x1f < _0x9f75x19.skinArrayDict.length; _0x9f75x1f++) {
                                var _0x9f75x20 = _0x9f75x19.skinArrayDict[_0x9f75x1f];
                                _0x9f75x15[_0x9f75x20.id] = new _0x9f75x6.sb(_0x9f75x1e[_0x9f75x20.prime], _0x9f75x20.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19]
                                }), _0x9f75x20.glow.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19]
                                }))
                            };
                            var _0x9f75x21, _0x9f75xb = _0x9f75x19.skinUnknown;
                            _0x9f75x21 = new _0x9f75x6.sb(_0x9f75x1e[_0x9f75xb.prime], _0x9f75xb.base.map(function (_0x9f75x19) {
                                return _0x9f75x3[_0x9f75x19]
                            }), _0x9f75xb.glow.map(function (_0x9f75x19) {
                                return _0x9f75x3[_0x9f75x19]
                            }));
                            var _0x9f75x9 = {};
                            _0x9f75xd.ka(_0x9f75x19.eyesDict, function (_0x9f75x19, _0x9f75x7) {
                                var _0x9f75x4 = parseInt(_0x9f75x19);
                                _0x9f75x9[_0x9f75x4] = new _0x9f75x6.vb(_0x9f75x7.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                }))
                            });
                            var _0x9f75x22 = new _0x9f75x6.vb(_0x9f75x19.eyesUnknown.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                })),
                                _0x9f75x23 = {};
                            _0x9f75xd.ka(_0x9f75x19.mouthDict, function (_0x9f75x19, _0x9f75x7) {
                                var _0x9f75x4 = parseInt(_0x9f75x19);
                                _0x9f75x23[_0x9f75x4] = new _0x9f75x6.vb(_0x9f75x7.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                }))
                            });
                            var _0x9f75x24 = new _0x9f75x6.vb(_0x9f75x19.mouthUnknown.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                })),
                                _0x9f75x25 = {};
                            _0x9f75xd.ka(_0x9f75x19.hatDict, function (_0x9f75x19, _0x9f75x7) {
                                var _0x9f75x4 = parseInt(_0x9f75x19);
                                _0x9f75x25[_0x9f75x4] = new _0x9f75x6.vb(_0x9f75x7.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                }))
                            });
                            var _0x9f75x5 = new _0x9f75x6.vb(_0x9f75x19.hatUnknown.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                })),
                                _0x9f75x26 = {};
                            _0x9f75xd.ka(_0x9f75x19.glassesDict, function (_0x9f75x19, _0x9f75x7) {
                                var _0x9f75x4 = parseInt(_0x9f75x19);
                                _0x9f75x26[_0x9f75x4] = new _0x9f75x6.vb(_0x9f75x7.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                }))
                            });
                            var _0x9f75x27 = new _0x9f75x6.vb(_0x9f75x19.glassesUnknown.base.map(function (_0x9f75x19) {
                                    return _0x9f75x3[_0x9f75x19.region]
                                })),
                                _0x9f75x28 = {};
                            _0x9f75xd.ka(_0x9f75x19.portionDict, function (_0x9f75x19, _0x9f75x7) {
                                _0x9f75x19 = parseInt(_0x9f75x19),
                                    _0x9f75x28[_0x9f75x19] = new _0x9f75x6.pb(_0x9f75x3[_0x9f75x7.base], _0x9f75x3[_0x9f75x7.glow])
                            });
                            var _0x9f75x29, _0x9f75x2a = _0x9f75x19.portionUnknown;
                            _0x9f75x29 = new _0x9f75x6.pb(_0x9f75x3[_0x9f75x2a.base], _0x9f75x3[_0x9f75x2a.glow]);
                            var _0x9f75x2b = {};
                            _0x9f75xd.ka(_0x9f75x19.abilityDict, function (_0x9f75x19, _0x9f75x7) {
                                _0x9f75x19 = parseInt(_0x9f75x19),
                                    _0x9f75x2b[_0x9f75x19] = new _0x9f75x6.tb(_0x9f75x3[_0x9f75x7.base])
                            });
                            var _0x9f75x2c, _0x9f75x2d = _0x9f75x19.abilityUnknown;
                            _0x9f75x2c = new _0x9f75x6.tb(_0x9f75x3[_0x9f75x2d.base]);
                            var _0x9f75x2e = {};
                            _0x9f75xd.ka(_0x9f75x19.teamDict, function (_0x9f75x19, _0x9f75x7) {
                                _0x9f75x19 = parseInt(_0x9f75x19),
                                    _0x9f75x2e[_0x9f75x19] = new _0x9f75x6.ub(_0x9f75x7.title, new _0x9f75x6.sb(_0x9f75x1e[_0x9f75x7.skin.prime], null, _0x9f75x7.skin.glow.map(function (_0x9f75x19) {
                                        return _0x9f75x3[_0x9f75x19]
                                    })), new _0x9f75x6.pb(null, _0x9f75x3[_0x9f75x7.portion.glow]))
                            });
                            var _0x9f75xa = new _0x9f75x6.ub({}, _0x9f75x21, _0x9f75x29);
                            return new _0x9f75x6(_0x9f75x7, _0x9f75x4, _0x9f75x28, _0x9f75x29, _0x9f75x2b, _0x9f75x2c, _0x9f75x15, _0x9f75x21, _0x9f75x2e, _0x9f75xa, _0x9f75x9, _0x9f75x22, _0x9f75x23, _0x9f75x24, _0x9f75x25, _0x9f75x5, _0x9f75x26, _0x9f75x27)
                        },
                        _0x9f75x6.prototype.yb = function (_0x9f75x6) {
                            for (var _0x9f75x3 = _0x9f75xd.la(Object.keys(this.db)).slice(0, _0x9f75x6), _0x9f75x7 = _0x9f75xd.la(Object.keys(this.hb)).slice(0, _0x9f75x6), _0x9f75x4 = _0x9f75xd.la(Object.keys(this.jb)).slice(0, _0x9f75x6), _0x9f75x1e = _0x9f75xd.la(Object.keys(this.lb)).slice(0, _0x9f75x6), _0x9f75x15 = _0x9f75xd.la(Object.keys(this.nb)).slice(0, _0x9f75x6), _0x9f75x1f = [], _0x9f75x20 = 0; _0x9f75x20 < _0x9f75x6; _0x9f75x20++) {
                                var _0x9f75x21 = _0x9f75x3.length > 0 ? _0x9f75x3[_0x9f75x20 % _0x9f75x3.length] : 0,
                                    _0x9f75xb = _0x9f75x7.length > 0 ? _0x9f75x7[_0x9f75x20 % _0x9f75x7.length] : 0,
                                    _0x9f75x9 = _0x9f75x4.length > 0 ? _0x9f75x4[_0x9f75x20 % _0x9f75x4.length] : 0,
                                    _0x9f75x22 = _0x9f75x1e.length > 0 ? _0x9f75x1e[_0x9f75x20 % _0x9f75x1e.length] : 0,
                                    _0x9f75x23 = _0x9f75x15.length > 0 ? _0x9f75x15[_0x9f75x20 % _0x9f75x15.length] : 0;
                                _0x9f75x1f.push(new _0x9f75x19.zb(_0x9f75x21, _0x9f75xb, _0x9f75x9, _0x9f75x22, _0x9f75x23))
                            };
                            return _0x9f75x1f
                        },
                        _0x9f75x6.prototype.Ab = function (_0x9f75x19) {
                            return this.db.hasOwnProperty(_0x9f75x19) ? this.db[_0x9f75x19] : this.eb
                        },
                        _0x9f75x6.prototype.Bb = function (_0x9f75x19) {
                            return this.fb.hasOwnProperty(_0x9f75x19) ? this.fb[_0x9f75x19] : this.gb
                        },
                        _0x9f75x6.prototype.Cb = function (_0x9f75x19) {
                            return this.hb.hasOwnProperty(_0x9f75x19) ? this.hb[_0x9f75x19] : this.ib
                        },
                        _0x9f75x6.prototype.Db = function (_0x9f75x19) {
                            return this.jb.hasOwnProperty(_0x9f75x19) ? this.jb[_0x9f75x19] : this.kb
                        },
                        _0x9f75x6.prototype.Eb = function (_0x9f75x19) {
                            return this.nb.hasOwnProperty(_0x9f75x19) ? this.nb[_0x9f75x19] : this.ob
                        },
                        _0x9f75x6.prototype.Fb = function (_0x9f75x19) {
                            return this.lb.hasOwnProperty(_0x9f75x19) ? this.lb[_0x9f75x19] : this.mb
                        },
                        _0x9f75x6.prototype.Gb = function (_0x9f75x19) {
                            return this._a.hasOwnProperty(_0x9f75x19) ? this._a[_0x9f75x19] : this.ab
                        },
                        _0x9f75x6.prototype.Hb = function (_0x9f75x19) {
                            return this.bb.hasOwnProperty(_0x9f75x19) ? this.bb[_0x9f75x19] : this.cb
                        },
                        _0x9f75x6.ub = function () {
                            function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                                this.Ib = _0x9f75x19,
                                    this.Jb = _0x9f75x6,
                                    this.Kb = _0x9f75xd
                            }
                            return _0x9f75x19
                        }(),
                        _0x9f75x6.sb = function () {
                            function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                                this.Lb = _0x9f75x19,
                                    this.Mb = _0x9f75x6,
                                    this.Nb = _0x9f75xd
                            }
                            return _0x9f75x19
                        }(),
                        _0x9f75x6.vb = function () {
                            function _0x9f75x19(_0x9f75x19) {
                                this.Mb = _0x9f75x19
                            }
                            return _0x9f75x19
                        }(),
                        _0x9f75x6.pb = function () {
                            function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                                this.Mb = _0x9f75x19,
                                    this.Nb = _0x9f75x6
                            }
                            return _0x9f75x19
                        }(),
                        _0x9f75x6.tb = function () {
                            function _0x9f75x19(_0x9f75x19) {
                                this.Mb = _0x9f75x19
                            }
                            return _0x9f75x19
                        }(),
                        _0x9f75x6
                }(),
                _0x9f75x19.rb = function () {
                    function _0x9f75x6() {
                        var _0x9f75x6 = _0x9f75x3.e.g.from('/images/wear-ability.png');
                        this.Ob = new _0x9f75x19.Da('magnet_ability', _0x9f75x6, 158, 86, 67, 124, 148, 63.5, 128, 128),
                            this.Pb = new _0x9f75x19.Da('velocity_ability', _0x9f75x6, 158, 4, 87, 74, 203, 63.5, 128, 128),
                            this.Qb = new _0x9f75x19.Da('flex_ability', _0x9f75x6, 4, 4, 146, 146, 63.5, 63.5, 128, 128);
                        var _0x9f75x7 = _0x9f75x3.e.g.from('/images/def-look.png'),
                            _0x9f75x4 = new _0x9f75x19.Da('def_eyes', _0x9f75x7, 0, 0, 42, 80, 75, 64, 128, 128),
                            _0x9f75x1e = new _0x9f75x19.Da('def_mouth', _0x9f75x7, 46, 0, 20, 48, 109, 63, 128, 128),
                            _0x9f75x15 = new _0x9f75x19.Da('def_skin_glow', _0x9f75x7, 70, 0, 32, 32, 0, 0, 0, 0),
                            _0x9f75x1f = new _0x9f75x19.Da('def_skin_base', _0x9f75x7, 46, 52, 64, 64, 0, 0, 0, 0),
                            _0x9f75x20 = _0x9f75x19.Ya.wb(_0x9f75x1f, _0x9f75x15, _0x9f75x4, _0x9f75x1e);
                        this.Rb = new _0x9f75x19.Sb({}, _0x9f75x20),
                            this.Tb = -1e4,
                            this.Ub = -1e4,
                            this.Vb = function () {
                                var _0x9f75x19 = window.document.createElement('canvas');
                                return _0x9f75x19.width = 80,
                                    _0x9f75x19.height = 80, {
                                        Wb: _0x9f75x19,
                                        Xb: _0x9f75x19.getContext('2d'),
                                        Ga: new _0x9f75x3.e.h(_0x9f75x3.e.g.from(_0x9f75x19))
                                    }
                            }(),
                            this.Yb = null,
                            this.Zb = []
                    }
                    return _0x9f75x6.qb = _0x9f75x19.Da.Ua(),
                        _0x9f75x6.prototype.za = function () {},
                        _0x9f75x6.prototype.$b = function (_0x9f75x6, _0x9f75x3, _0x9f75x7) {
                            var _0x9f75x4 = this,
                                _0x9f75x1e = this.Rb._b();
                            if (_0x9f75x1e > 0 && _0x9f75xd.ja() - this.Tb < 12e5) {
                                return void((null != _0x9f75x6 && _0x9f75x6()))
                            };
                            if (null != this.Yb && !this.Yb.ac()) {
                                if (_0x9f75xd.ja() - this.Tb < 3e5) {
                                    return void((null != _0x9f75x6 && _0x9f75x6()))
                                };
                                this.Yb.bc(),
                                    this.Yb = null
                            };
                            var _0x9f75x15 = new _0x9f75x19.cc(_0x9f75x1e);
                            _0x9f75x15.dc(function (_0x9f75x19, _0x9f75x6) {
                                    _0x9f75x15 === _0x9f75x4.Yb && null != _0x9f75x7 && _0x9f75x7(_0x9f75x19, _0x9f75x6)
                                }),
                                _0x9f75x15.ec(function (_0x9f75x19) {
                                    _0x9f75x15 === _0x9f75x4.Yb && null != _0x9f75x3 && _0x9f75x3(_0x9f75x19)
                                }),
                                _0x9f75x15.fc(function () {
                                    _0x9f75x15 === _0x9f75x4.Yb && null != _0x9f75x3 && _0x9f75x3(new Error)
                                }),
                                _0x9f75x15.gc(function () {
                                    _0x9f75x15 === _0x9f75x4.Yb && null != _0x9f75x6 && _0x9f75x6()
                                }),
                                _0x9f75x15.hc(function (_0x9f75x19) {
                                    if (_0x9f75x15 === _0x9f75x4.Yb) {
                                        return _0x9f75x4.Ub = _0x9f75xd.ja(),
                                            _0x9f75x4.Yb = null,
                                            _0x9f75x4.ic(),
                                            _0x9f75x4.Rb.jc().Xa(),
                                            _0x9f75x4.Rb = _0x9f75x19,
                                            null != _0x9f75x6 && _0x9f75x6(),
                                            void(_0x9f75x4.kc())
                                    };
                                    try {
                                        _0x9f75x19.jc().Xa()
                                    } catch (_0x9f75x19) {}
                                }),
                                _0x9f75x15.lc(),
                                this.Tb = _0x9f75xd.ja(),
                                this.Yb = _0x9f75x15
                        },
                        _0x9f75x6.prototype.ic = function () {},
                        _0x9f75x6.prototype.mc = function () {
                            return this.Rb._b() > 0
                        },
                        _0x9f75x6.prototype.nc = function () {
                            return this.Rb.oc()
                        },
                        _0x9f75x6.prototype.pc = function () {
                            return this.Vb
                        },
                        _0x9f75x6.prototype.qc = function (_0x9f75x19) {
                            this.Zb.push(_0x9f75x19)
                        },
                        _0x9f75x6.prototype.kc = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.Zb.length; _0x9f75x19++) {
                                this.Zb[_0x9f75x19]()
                            }
                        },
                        _0x9f75x6.prototype.jc = function () {
                            return this.Rb.jc()
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.rc = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        this.sc = _0x9f75x19
                    }
                    return _0x9f75x19.prototype.tc = function (_0x9f75x19) {
                            return this.sc[_0x9f75x19]
                        },
                        _0x9f75x19.uc = function () {
                            function _0x9f75x6() {
                                this.vc = []
                            }
                            return _0x9f75x6.prototype.wc = function (_0x9f75x6, _0x9f75xd) {
                                    for (var _0x9f75x3 = 0; _0x9f75x3 < this.vc.length; _0x9f75x3++) {
                                        if (this.vc[_0x9f75x3].xc === _0x9f75x6) {
                                            throw new Error
                                        }
                                    };
                                    return this.vc.push(new _0x9f75x19.yc(_0x9f75x6, _0x9f75xd)),
                                        this
                                },
                                _0x9f75x6.prototype.zc = function () {
                                    for (var _0x9f75x6 = 0, _0x9f75xd = 0; _0x9f75xd < this.vc.length; _0x9f75xd++) {
                                        _0x9f75x6 += this.vc[_0x9f75xd].Ac
                                    };
                                    for (var _0x9f75x3 = {}, _0x9f75x7 = 0, _0x9f75x4 = 0; _0x9f75x4 < this.vc.length; _0x9f75x4++) {
                                        var _0x9f75x1e = this.vc[_0x9f75x4];
                                        _0x9f75x1e.Ac = _0x9f75x1e.Ac / _0x9f75x6,
                                            _0x9f75x1e.Bc = _0x9f75x7,
                                            _0x9f75x1e.Cc = _0x9f75x7 + _0x9f75x1e.Ac,
                                            _0x9f75x7 = _0x9f75x1e.Cc,
                                            _0x9f75x3[_0x9f75x1e.xc] = _0x9f75x1e
                                    };
                                    return new _0x9f75x19(_0x9f75x3)
                                },
                                _0x9f75x6
                        }(),
                        _0x9f75x19.yc = function () {
                            function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                                this.xc = _0x9f75x19,
                                    this.Ac = _0x9f75x6,
                                    this.Bc = 0,
                                    this.Cc = 0
                            }
                            return _0x9f75x19.prototype.Dc = function (_0x9f75x19) {
                                    return this.Bc + (this.Cc - this.Bc) * _0x9f75x19
                                },
                                _0x9f75x19
                        }(),
                        _0x9f75x19
                }(),
                _0x9f75x19.Ec = function () {
                    function _0x9f75x7() {
                        this.Fc = new _0x9f75x3.e.f,
                            this.Fc.sortableChildren = !0,
                            this.Gc = new _0x9f75x2b,
                            this.Gc.zIndex = _0x9f75x4 * (2 * (_0x9f75x1e + 1) + 1 + 3),
                            this.Hc = 0,
                            this.Ic = new Array(_0x9f75x1e),
                            this.Ic[0] = this.Jc(0, new _0x9f75x19.Kc, new _0x9f75x19.Kc);
                        for (var _0x9f75x6 = 1; _0x9f75x6 < _0x9f75x1e; _0x9f75x6++) {
                            this.Ic[_0x9f75x6] = this.Jc(_0x9f75x6, new _0x9f75x19.Kc, new _0x9f75x19.Kc)
                        };
                        this.Lc = 0,
                            this.Mc = 0,
                            this.Nc = 0
                    }
                    var _0x9f75x4 = 0.001,
                        _0x9f75x1e = 797,
                        _0x9f75x15 = 0.1 * Math.PI,
                        _0x9f75x1f = -0.06640625,
                        _0x9f75x20 = 0.84375,
                        _0x9f75x21 = 0.2578125,
                        _0x9f75xb = -0.03515625,
                        _0x9f75x9 = -0.0625,
                        _0x9f75x22 = 0.5625,
                        _0x9f75x23 = 3 * _0x9f75x1f + _0x9f75x20,
                        _0x9f75x24 = _0x9f75x21 - 3 * _0x9f75x1f,
                        _0x9f75x25 = _0x9f75x1f + _0x9f75xb,
                        _0x9f75x5 = 0.375,
                        _0x9f75x26 = 0.75,
                        _0x9f75x27 = _0x9f75x9 + _0x9f75x9,
                        _0x9f75x28 = 3 * _0x9f75xb + _0x9f75x21,
                        _0x9f75x29 = _0x9f75x20 - 3 * _0x9f75xb,
                        _0x9f75x2a = _0x9f75xb + _0x9f75x1f;
                    _0x9f75x7.Oc = _0x9f75x1e,
                        _0x9f75x7.prototype.Jc = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            var _0x9f75x3 = new _0x9f75x2c(_0x9f75x6, _0x9f75xd);
                            return _0x9f75x6.Pc.zIndex = _0x9f75x4 * (2 * (_0x9f75x1e - _0x9f75x19) + 1 + 3),
                                _0x9f75xd.Pc.zIndex = _0x9f75x4 * (2 * (_0x9f75x1e - _0x9f75x19) - 2 + 3),
                                _0x9f75x3
                        },
                        _0x9f75x7.prototype.Qc = function (_0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7, _0x9f75x4, _0x9f75x1e, _0x9f75x15, _0x9f75x1f) {
                            var _0x9f75x20 = _0x9f75x3.Mb,
                                _0x9f75x21 = _0x9f75x6 === _0x9f75x19.Sc.Rc ? _0x9f75xd.Jb.Nb : _0x9f75x3.Nb;
                            if (_0x9f75x20.length > 0 && _0x9f75x21.length > 0) {
                                for (var _0x9f75xb = 0; _0x9f75xb < this.Ic.length; _0x9f75xb++) {
                                    this.Ic[_0x9f75xb].Uc.Tc(_0x9f75x20[_0x9f75xb % _0x9f75x20.length]),
                                        this.Ic[_0x9f75xb].Vc.Tc(_0x9f75x21[_0x9f75xb % _0x9f75x21.length]),
                                        this.Ic[_0x9f75xb].Uc.Wc(_0x9f75x1f),
                                        this.Ic[_0x9f75xb].Vc.Wc(_0x9f75x1f)
                                }
                            };
                            this.Gc.Qc(_0x9f75x7, _0x9f75x4, _0x9f75x1e, _0x9f75x15)
                        };
                    var _0x9f75x2b = function () {
                        var _0x9f75x7 = _0x9f75xd.X(_0x9f75x3.e.f, function () {
                            _0x9f75x3.e.f.call(this),
                                this.sortableChildren = !0,
                                this.Xc = [],
                                this.Yc = [],
                                this.Zc = [],
                                this.$c = [],
                                this._c = new _0x9f75x3.e.f,
                                this.ad = [];
                            for (var _0x9f75xd = 0; _0x9f75xd < 4; _0x9f75xd++) {
                                var _0x9f75x7 = new _0x9f75x19.Kc;
                                _0x9f75x7.Tc(_0x9f75x6.L.bd.Ob),
                                    this._c.addChild(_0x9f75x7.Pc),
                                    this.ad.push(_0x9f75x7)
                            };
                            this._c.zIndex = 0.0011,
                                this.addChild(this._c),
                                this.cd(),
                                this.dd = new _0x9f75x19.Kc,
                                this.dd.Tc(_0x9f75x6.L.bd.Pb),
                                this.dd.Pc.zIndex = 0.001,
                                this.addChild(this.dd.Pc),
                                this.ed()
                        });
                        return _0x9f75x7.prototype.Qc = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                                this.fd(0.002, this.Xc, _0x9f75x19.Mb),
                                    this.fd(0.003, this.Yc, _0x9f75x6.Mb),
                                    this.fd(0.004, this.$c, _0x9f75x3.Mb),
                                    this.fd(0.005, this.Zc, _0x9f75xd.Mb)
                            },
                            _0x9f75x7.prototype.fd = function (_0x9f75x6, _0x9f75xd, _0x9f75x3) {
                                for (; _0x9f75x3.length > _0x9f75xd.length;) {
                                    var _0x9f75x7 = new _0x9f75x19.Kc;
                                    _0x9f75xd.push(_0x9f75x7),
                                        this.addChild(_0x9f75x7.gd())
                                };
                                for (; _0x9f75x3.length < _0x9f75xd.length;) {
                                    _0x9f75xd.pop().z()
                                };
                                for (var _0x9f75x4 = _0x9f75x6, _0x9f75x1e = 0; _0x9f75x1e < _0x9f75x3.length; _0x9f75x1e++) {
                                    _0x9f75x4 += 1e-4;
                                    var _0x9f75x15 = _0x9f75xd[_0x9f75x1e];
                                    _0x9f75x15.Tc(_0x9f75x3[_0x9f75x1e]),
                                        _0x9f75x15.Pc.zIndex = _0x9f75x4
                                }
                            },
                            _0x9f75x7.prototype.hd = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                                this.visible = !0,
                                    this.position.set(_0x9f75x19, _0x9f75x6),
                                    this.rotation = _0x9f75x3;
                                for (var _0x9f75x7 = 0; _0x9f75x7 < this.Xc.length; _0x9f75x7++) {
                                    this.Xc[_0x9f75x7].jd(_0x9f75xd)
                                };
                                for (var _0x9f75x4 = 0; _0x9f75x4 < this.Yc.length; _0x9f75x4++) {
                                    this.Yc[_0x9f75x4].jd(_0x9f75xd)
                                };
                                for (var _0x9f75x1e = 0; _0x9f75x1e < this.Zc.length; _0x9f75x1e++) {
                                    this.Zc[_0x9f75x1e].jd(_0x9f75xd)
                                };
                                for (var _0x9f75x15 = 0; _0x9f75x15 < this.$c.length; _0x9f75x15++) {
                                    this.$c[_0x9f75x15].jd(_0x9f75xd)
                                }
                            },
                            _0x9f75x7.prototype.kd = function () {
                                this.visible = !1
                            },
                            _0x9f75x7.prototype.ld = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                                this._c.visible = !0;
                                for (var _0x9f75x7 = _0x9f75xd / 1e3, _0x9f75x4 = 1 / this.ad.length, _0x9f75x1e = 0; _0x9f75x1e < this.ad.length; _0x9f75x1e++) {
                                    var _0x9f75x15 = 1 - (_0x9f75x7 + _0x9f75x4 * _0x9f75x1e) % 1;
                                    this.ad[_0x9f75x1e].Pc.alpha = 1 - _0x9f75x15,
                                        this.ad[_0x9f75x1e].jd(_0x9f75x6 * (0.5 + 4.5 * _0x9f75x15))
                                }
                            },
                            _0x9f75x7.prototype.cd = function () {
                                this._c.visible = !1
                            },
                            _0x9f75x7.prototype.md = function (_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7) {
                                this.dd.Pc.visible = !0,
                                    this.dd.Pc.alpha = _0x9f75xd._(this.dd.Pc.alpha, _0x9f75x19.nd ? 0.9 : 0.2, _0x9f75x7, 0.0025),
                                    this.dd.jd(_0x9f75x6)
                            },
                            _0x9f75x7.prototype.ed = function () {
                                this.dd.Pc.visible = !1
                            },
                            _0x9f75x7
                    }();
                    _0x9f75x7.prototype.od = function (_0x9f75x19) {
                            return this.Mc + this.Nc * Math.sin(_0x9f75x19 * _0x9f75x15 - this.Lc)
                        },
                        _0x9f75x7.prototype.pd = function (_0x9f75x6, _0x9f75xd, _0x9f75x7, _0x9f75x4) {
                            var _0x9f75x1e = 2 * _0x9f75x6.qd,
                                _0x9f75x15 = _0x9f75x6.rd,
                                _0x9f75x2b = _0x9f75x6.sd,
                                _0x9f75x2d = 4 * _0x9f75x2b - 3,
                                _0x9f75x2e = _0x9f75x2d;
                            this.Lc = _0x9f75xd / 400 * Math.PI,
                                this.Mc = 1.5 * _0x9f75x1e,
                                this.Nc = 0.15 * _0x9f75x1e * _0x9f75x6.td;
                            var _0x9f75xa, _0x9f75x2f, _0x9f75x30, _0x9f75x31, _0x9f75x32, _0x9f75x33, _0x9f75x34, _0x9f75x35;
                            if (_0x9f75x2f = _0x9f75x15[0],
                                _0x9f75x33 = _0x9f75x15[1],
                                _0x9f75x4(_0x9f75x2f, _0x9f75x33)) {
                                _0x9f75x30 = _0x9f75x15[2],
                                    _0x9f75x34 = _0x9f75x15[3],
                                    _0x9f75x31 = _0x9f75x15[4],
                                    _0x9f75x35 = _0x9f75x15[5];
                                var _0x9f75x36 = Math.atan2(_0x9f75x35 + 2 * _0x9f75x33 - 3 * _0x9f75x34, _0x9f75x31 + 2 * _0x9f75x2f - 3 * _0x9f75x30);
                                this.Gc.hd(_0x9f75x2f, _0x9f75x33, _0x9f75x1e, _0x9f75x36),
                                    this.Ic[0].hd(_0x9f75x2f, _0x9f75x33, _0x9f75x1e, this.od(0), _0x9f75x36),
                                    this.Ic[1].hd(_0x9f75x23 * _0x9f75x2f + _0x9f75x24 * _0x9f75x30 + _0x9f75x25 * _0x9f75x31, _0x9f75x23 * _0x9f75x33 + _0x9f75x24 * _0x9f75x34 + _0x9f75x25 * _0x9f75x35, _0x9f75x1e, this.od(1), _0x9f75x2c.ud(this.Ic[0], this.Ic[2])),
                                    this.Ic[2].hd(_0x9f75x5 * _0x9f75x2f + _0x9f75x26 * _0x9f75x30 + _0x9f75x27 * _0x9f75x31, _0x9f75x5 * _0x9f75x33 + _0x9f75x26 * _0x9f75x34 + _0x9f75x27 * _0x9f75x35, _0x9f75x1e, this.od(2), _0x9f75x2c.ud(this.Ic[1], this.Ic[3])),
                                    this.Ic[3].hd(_0x9f75x28 * _0x9f75x2f + _0x9f75x29 * _0x9f75x30 + _0x9f75x2a * _0x9f75x31, _0x9f75x28 * _0x9f75x33 + _0x9f75x29 * _0x9f75x34 + _0x9f75x2a * _0x9f75x35, _0x9f75x1e, this.od(3), _0x9f75x2c.ud(this.Ic[2], this.Ic[4]))
                            } else {
                                this.Gc.kd(),
                                    this.Ic[0].kd(),
                                    this.Ic[1].kd(),
                                    this.Ic[2].kd(),
                                    this.Ic[3].kd()
                            };
                            for (var _0x9f75x37 = 4, _0x9f75x38 = 2, _0x9f75x39 = 2 * _0x9f75x2b - 4; _0x9f75x38 < _0x9f75x39; _0x9f75x38 += 2) {
                                _0x9f75x2f = _0x9f75x15[_0x9f75x38],
                                    _0x9f75x33 = _0x9f75x15[_0x9f75x38 + 1],
                                    _0x9f75x4(_0x9f75x2f, _0x9f75x33) ? (_0x9f75xa = _0x9f75x15[_0x9f75x38 - 2],
                                        _0x9f75x32 = _0x9f75x15[_0x9f75x38 - 1],
                                        _0x9f75x30 = _0x9f75x15[_0x9f75x38 + 2],
                                        _0x9f75x34 = _0x9f75x15[_0x9f75x38 + 3],
                                        _0x9f75x31 = _0x9f75x15[_0x9f75x38 + 4],
                                        _0x9f75x35 = _0x9f75x15[_0x9f75x38 + 5],
                                        this.Ic[_0x9f75x37].hd(_0x9f75x2f, _0x9f75x33, _0x9f75x1e, this.od(_0x9f75x37), _0x9f75x2c.ud(this.Ic[_0x9f75x37 - 1], this.Ic[_0x9f75x37 + 1])),
                                        _0x9f75x37++,
                                        this.Ic[_0x9f75x37].hd(_0x9f75x1f * _0x9f75xa + _0x9f75x20 * _0x9f75x2f + _0x9f75x21 * _0x9f75x30 + _0x9f75xb * _0x9f75x31, _0x9f75x1f * _0x9f75x32 + _0x9f75x20 * _0x9f75x33 + _0x9f75x21 * _0x9f75x34 + _0x9f75xb * _0x9f75x35, _0x9f75x1e, this.od(_0x9f75x37), _0x9f75x2c.ud(this.Ic[_0x9f75x37 - 1], this.Ic[_0x9f75x37 + 1])),
                                        _0x9f75x37++,
                                        this.Ic[_0x9f75x37].hd(_0x9f75x9 * _0x9f75xa + _0x9f75x22 * _0x9f75x2f + _0x9f75x22 * _0x9f75x30 + _0x9f75x9 * _0x9f75x31, _0x9f75x9 * _0x9f75x32 + _0x9f75x22 * _0x9f75x33 + _0x9f75x22 * _0x9f75x34 + _0x9f75x9 * _0x9f75x35, _0x9f75x1e, this.od(_0x9f75x37), _0x9f75x2c.ud(this.Ic[_0x9f75x37 - 1], this.Ic[_0x9f75x37 + 1])),
                                        _0x9f75x37++,
                                        this.Ic[_0x9f75x37].hd(_0x9f75xb * _0x9f75xa + _0x9f75x21 * _0x9f75x2f + _0x9f75x20 * _0x9f75x30 + _0x9f75x1f * _0x9f75x31, _0x9f75xb * _0x9f75x32 + _0x9f75x21 * _0x9f75x33 + _0x9f75x20 * _0x9f75x34 + _0x9f75x1f * _0x9f75x35, _0x9f75x1e, this.od(_0x9f75x37), _0x9f75x2c.ud(this.Ic[_0x9f75x37 - 1], this.Ic[_0x9f75x37 + 1])),
                                        _0x9f75x37++) : (this.Ic[_0x9f75x37].kd(),
                                        _0x9f75x37++,
                                        this.Ic[_0x9f75x37].kd(),
                                        _0x9f75x37++,
                                        this.Ic[_0x9f75x37].kd(),
                                        _0x9f75x37++,
                                        this.Ic[_0x9f75x37].kd(),
                                        _0x9f75x37++)
                            };
                            for (_0x9f75x2f = _0x9f75x15[2 * _0x9f75x2b - 4],
                                _0x9f75x33 = _0x9f75x15[2 * _0x9f75x2b - 3],
                                _0x9f75x4(_0x9f75x2f, _0x9f75x33) ? (_0x9f75xa = _0x9f75x15[2 * _0x9f75x2b - 6],
                                    _0x9f75x32 = _0x9f75x15[2 * _0x9f75x2b - 5],
                                    _0x9f75x30 = _0x9f75x15[2 * _0x9f75x2b - 2],
                                    _0x9f75x34 = _0x9f75x15[2 * _0x9f75x2b - 1],
                                    this.Ic[_0x9f75x2d - 5].hd(_0x9f75x2f, _0x9f75x33, _0x9f75x1e, this.od(_0x9f75x2d - 5), _0x9f75x2c.ud(this.Ic[_0x9f75x2d - 6], this.Ic[_0x9f75x2d - 4])),
                                    this.Ic[_0x9f75x2d - 4].hd(_0x9f75x2a * _0x9f75xa + _0x9f75x29 * _0x9f75x2f + _0x9f75x28 * _0x9f75x30, _0x9f75x2a * _0x9f75x32 + _0x9f75x29 * _0x9f75x33 + _0x9f75x28 * _0x9f75x34, _0x9f75x1e, this.od(_0x9f75x2d - 4), _0x9f75x2c.ud(this.Ic[_0x9f75x2d - 5], this.Ic[_0x9f75x2d - 3])),
                                    this.Ic[_0x9f75x2d - 3].hd(_0x9f75x27 * _0x9f75xa + _0x9f75x26 * _0x9f75x2f + _0x9f75x5 * _0x9f75x30, _0x9f75x27 * _0x9f75x32 + _0x9f75x26 * _0x9f75x33 + _0x9f75x5 * _0x9f75x34, _0x9f75x1e, this.od(_0x9f75x2d - 3), _0x9f75x2c.ud(this.Ic[_0x9f75x2d - 4], this.Ic[_0x9f75x2d - 2])),
                                    this.Ic[_0x9f75x2d - 2].hd(_0x9f75x25 * _0x9f75xa + _0x9f75x24 * _0x9f75x2f + _0x9f75x23 * _0x9f75x30, _0x9f75x25 * _0x9f75x32 + _0x9f75x24 * _0x9f75x33 + _0x9f75x23 * _0x9f75x34, _0x9f75x1e, this.od(_0x9f75x2d - 2), _0x9f75x2c.ud(this.Ic[_0x9f75x2d - 3], this.Ic[_0x9f75x2d - 1])),
                                    this.Ic[_0x9f75x2d - 1].hd(_0x9f75x30, _0x9f75x34, _0x9f75x1e, this.od(_0x9f75x2d - 1), _0x9f75x2c.ud(this.Ic[_0x9f75x2d - 2], this.Ic[_0x9f75x2d - 1]))) : (this.Ic[_0x9f75x2d - 5].kd(),
                                    this.Ic[_0x9f75x2d - 4].kd(),
                                    this.Ic[_0x9f75x2d - 3].kd(),
                                    this.Ic[_0x9f75x2d - 2].kd(),
                                    this.Ic[_0x9f75x2d - 1].kd()),
                                0 === this.Hc && _0x9f75x2e > 0 && this.Fc.addChild(this.Gc),
                                this.Hc > 0 && 0 === _0x9f75x2e && _0x9f75x3.e.w.z(this.Gc); this.Hc < _0x9f75x2e;) {
                                this.Fc.addChild(this.Ic[this.Hc].Uc.gd()),
                                    this.Fc.addChild(this.Ic[this.Hc].Vc.gd()),
                                    this.Hc += 1
                            };
                            for (; this.Hc > _0x9f75x2e;) {
                                this.Hc -= 1,
                                    this.Ic[this.Hc].Vc.z(),
                                    this.Ic[this.Hc].Uc.z()
                            };
                            var _0x9f75x3a = _0x9f75x6.vd[_0x9f75x19.xd.wd];
                            this.Ic[0].yd() && null != _0x9f75x3a && _0x9f75x3a.zd ? this.Gc.ld(_0x9f75x6, _0x9f75x1e, _0x9f75xd, _0x9f75x7) : this.Gc.cd();
                            var _0x9f75x3b = _0x9f75x6.vd[_0x9f75x19.xd.Ad];
                            this.Ic[0].yd() && null != _0x9f75x3b && _0x9f75x3b.zd ? this.Gc.md(_0x9f75x6, _0x9f75x1e, _0x9f75xd, _0x9f75x7) : this.Gc.ed()
                        };
                    var _0x9f75x2c = function () {
                        function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                            this.Uc = _0x9f75x19,
                                this.Uc.Bd(!1),
                                this.Vc = _0x9f75x6,
                                this.Vc.Bd(!1)
                        }
                        return _0x9f75x19.prototype.hd = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7) {
                                this.Uc.Bd(!0),
                                    this.Uc.Cd(_0x9f75x19, _0x9f75x6),
                                    this.Uc.jd(_0x9f75xd),
                                    this.Uc.Dd(_0x9f75x7),
                                    this.Vc.Bd(!0),
                                    this.Vc.Cd(_0x9f75x19, _0x9f75x6),
                                    this.Vc.jd(_0x9f75x3),
                                    this.Vc.Dd(_0x9f75x7)
                            },
                            _0x9f75x19.prototype.kd = function () {
                                this.Uc.Bd(!1),
                                    this.Vc.Bd(!1)
                            },
                            _0x9f75x19.prototype.yd = function () {
                                return this.Uc.yd()
                            },
                            _0x9f75x19.ud = function (_0x9f75x19, _0x9f75x6) {
                                return Math.atan2(_0x9f75x19.Uc.Pc.position.y - _0x9f75x6.Uc.Pc.position.y, _0x9f75x19.Uc.Pc.position.x - _0x9f75x6.Uc.Pc.position.x)
                            },
                            _0x9f75x19
                    }();
                    return _0x9f75x7
                }(),
                _0x9f75x19.xd = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        this.Ed = _0x9f75x19,
                            this.zd = !1,
                            this.Fd = 1
                    }
                    return _0x9f75x19.Ad = 0,
                        _0x9f75x19.Gd = 1,
                        _0x9f75x19.wd = 2,
                        _0x9f75x19.Hd = 6,
                        _0x9f75x19.Id = 3,
                        _0x9f75x19.Jd = 4,
                        _0x9f75x19.Kd = 5,
                        _0x9f75x19
                }(),
                _0x9f75x19.Sb = function () {
                    function _0x9f75x6(_0x9f75x19, _0x9f75x6) {
                        this.Ld = _0x9f75x19,
                            this.Md = _0x9f75x6
                    }
                    return _0x9f75x6.Nd = new _0x9f75x6({}, _0x9f75x19.Ya.Ua()),
                        _0x9f75x6.prototype._b = function () {
                            return this.Ld.revision
                        },
                        _0x9f75x6.prototype.oc = function () {
                            return this.Ld
                        },
                        _0x9f75x6.prototype.jc = function () {
                            return this.Md
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.cc = function () {
                    function _0x9f75x7(_0x9f75x19) {
                        this.Od = function () {
                                ++_0x9f75x7.Pd;
                                return function (_0x9f75x19, _0x9f75x6) {}
                            }(),
                            this.Qd = _0x9f75x19,
                            this.Rd = null,
                            this.Sd = null,
                            this.Td = null,
                            this.Ud = null,
                            this.Vd = null,
                            this.Wd = !1,
                            this.Xd = !1,
                            this.Yd = !1
                    }
                    return _0x9f75x7.Zd = {
                            $d: '0x0',
                            _d: '0x1',
                            ae: '0x2',
                            be: '0x3',
                            ce: '0x4'
                        },
                        _0x9f75x7.Pd = 1e5,
                        _0x9f75x7.de = (new _0x9f75x19.rc.uc).wc(_0x9f75x7.Zd.$d, 1).wc(_0x9f75x7.Zd._d, 10).wc(_0x9f75x7.Zd.ae, 50).wc(_0x9f75x7.Zd.be, 15).wc(_0x9f75x7.Zd.ce, 5).zc(),
                        _0x9f75x7.prototype.hc = function (_0x9f75x19) {
                            this.Rd = _0x9f75x19
                        },
                        _0x9f75x7.prototype.gc = function (_0x9f75x19) {
                            this.Sd = _0x9f75x19
                        },
                        _0x9f75x7.prototype.ec = function (_0x9f75x19) {
                            this.Td = _0x9f75x19
                        },
                        _0x9f75x7.prototype.fc = function (_0x9f75x19) {
                            this.Ud = _0x9f75x19
                        },
                        _0x9f75x7.prototype.dc = function (_0x9f75x19) {
                            this.Vd = _0x9f75x19
                        },
                        _0x9f75x7.prototype.ac = function () {
                            return this.Yd
                        },
                        _0x9f75x7.prototype.bc = function () {
                            this.Wd = !0
                        },
                        _0x9f75x7.prototype.lc = function () {
                            if (!this.Xd) {
                                if (this.Xd = !0,
                                    this.Wd) {
                                    return void(this.ee())
                                };
                                this.fe()
                            }
                        },
                        _0x9f75x7.prototype.fe = function () {
                            function _0x9f75x19(_0x9f75x19) {
                                var _0x9f75x6 = _0x9f75x7.Zd.$d;
                                _0x9f75x3.ge(_0x9f75x6, _0x9f75x7.de.tc(_0x9f75x6).Dc(_0x9f75x19))
                            }
                            var _0x9f75x3 = this;
                            if (this.Wd) {
                                return void(this.ee())
                            };
                            $.ajax({
                                type: 'GET',
                                url: _0x9f75x6.A.D + '/dynamic/assets/revision.json',
                                xhrFields: {
                                    onprogress: function (_0x9f75x6) {
                                        _0x9f75x6.lengthComputable && _0x9f75x19(_0x9f75x6.loaded / _0x9f75x6.total)
                                    }
                                }
                            }).fail(function () {
                                _0x9f75x3.he(new Error)
                            }).done(function (_0x9f75x19) {
                                if (_0x9f75x19 <= _0x9f75x3.Qd) {
                                    return void(_0x9f75x3.ie())
                                };
                                _0x9f75x3.je()
                            })
                        },
                        _0x9f75x7.prototype.je = function () {
                            function _0x9f75x19(_0x9f75x19) {
                                var _0x9f75x6 = _0x9f75x7.Zd._d;
                                _0x9f75x3.ge(_0x9f75x6, _0x9f75x7.de.tc(_0x9f75x6).Dc(_0x9f75x19))
                            }
                            var _0x9f75x3 = this;
                            if (this.Wd) {
                                return void(this.ee())
                            };
                            $.ajax({
                                type: 'GET',
                                url: _0x9f75x6.A.D + '/dynamic/assets/registry.json',
                                xhrFields: {
                                    onprogress: function (_0x9f75x6) {
                                        _0x9f75x6.lengthComputable && _0x9f75x19(_0x9f75x6.loaded / _0x9f75x6.total)
                                    }
                                }
                            }).fail(function () {
                                _0x9f75x3.he(new Error)
                            }).done(function (_0x9f75x19) {
                                if (_0x9f75x19.revision <= _0x9f75x3.Qd) {
                                    return void(_0x9f75x3.ie())
                                };
                                _0x9f75x73(_0x9f75x19, _0x9f75x3)
                            })
                        },
                        _0x9f75x7.prototype.ke = function (_0x9f75x19) {
                            function _0x9f75x3(_0x9f75x19) {
                                var _0x9f75x6 = _0x9f75x7.Zd.ae;
                                _0x9f75x4.ge(_0x9f75x6, _0x9f75x7.de.tc(_0x9f75x6).Dc(_0x9f75x19))
                            }
                            var _0x9f75x4 = this;
                            if (this.Wd) {
                                return void(this.ee())
                            };
                            var _0x9f75x1e = [],
                                _0x9f75x15 = [],
                                _0x9f75x1f = 0;
                            for (var _0x9f75x20 in _0x9f75x19.textureDict) {
                                if (_0x9f75x19.textureDict.hasOwnProperty(_0x9f75x20)) {
                                    var _0x9f75x21 = _0x9f75x19.textureDict[_0x9f75x20],
                                        _0x9f75xb = (_0x9f75x21.custom ? zUrl : _0x9f75x6.A.D) + _0x9f75x21.relativePath,
                                        _0x9f75x9 = _0x9f75x21.fileSize,
                                        _0x9f75x22 = _0x9f75x21.sha256,
                                        _0x9f75x23 = new _0x9f75x7.le(_0x9f75x20, _0x9f75xb, _0x9f75x9, _0x9f75x22);
                                    _0x9f75x1e.push(_0x9f75x23);
                                    _0x9f75x15.push(_0x9f75x23),
                                        _0x9f75x1f += _0x9f75x9
                                }
                            };
                            var _0x9f75x24, _0x9f75x25 = 0,
                                _0x9f75x5 = function (_0x9f75x19) {
                                    for (var _0x9f75x6 = 0; _0x9f75x6 < _0x9f75x15.length; _0x9f75x6++) {
                                        try {
                                            window.URL.revokeObjectURL(_0x9f75x15[_0x9f75x6].me)
                                        } catch (_0x9f75x19) {}
                                    };
                                    _0x9f75x4.he(_0x9f75x19)
                                },
                                _0x9f75x26 = function (_0x9f75x19) {
                                    var _0x9f75x6 = Math.floor(_0x9f75x24.ne * _0x9f75x19);
                                    _0x9f75x3((_0x9f75x25 + _0x9f75x6) / _0x9f75x1f)
                                },
                                _0x9f75x27 = function (_0x9f75x19) {
                                    var _0x9f75x6 = new Blob([_0x9f75x19]);
                                    _0x9f75x24.me = window.URL.createObjectURL(_0x9f75x6),
                                        _0x9f75x25 += _0x9f75x24.ne,
                                        _0x9f75x28()
                                },
                                _0x9f75x28 = function () {
                                    if (_0x9f75x29 < _0x9f75x15.length) {
                                        return _0x9f75x24 = _0x9f75x15[_0x9f75x29++],
                                            void(_0x9f75x4.oe(_0x9f75x24, _0x9f75x5, _0x9f75x27, _0x9f75x26))
                                    };
                                    _0x9f75xd.S(function () {
                                        return _0x9f75x4.pe(_0x9f75x19, _0x9f75x1e)
                                    }, 0)
                                },
                                _0x9f75x29 = 0;
                            _0x9f75x28()
                        },
                        _0x9f75x7.prototype.oe = function (_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7) {
                            $.ajax({
                                type: 'GET',
                                url: _0x9f75x19.qe,
                                xhrFields: {
                                    responseType: 'arraybuffer',
                                    onprogress: function (_0x9f75x19) {
                                        _0x9f75x19.lengthComputable && _0x9f75x7(_0x9f75x19.loaded / _0x9f75x19.total)
                                    }
                                }
                            }).fail(function () {
                                _0x9f75x6(new Error)
                            }).done(function (_0x9f75x19) {
                                _0x9f75x3(_0x9f75x19)
                            })
                        },
                        _0x9f75x7.prototype.pe = function (_0x9f75x6, _0x9f75x4) {
                            function _0x9f75x1e(_0x9f75x19) {
                                var _0x9f75x6 = _0x9f75x7.Zd.be;
                                _0x9f75x15.ge(_0x9f75x6, _0x9f75x7.de.tc(_0x9f75x6).Dc(_0x9f75x19))
                            }
                            var _0x9f75x15 = this;
                            if (this.Wd) {
                                return void(this.ee())
                            };
                            var _0x9f75x1f, _0x9f75x20, _0x9f75x21 = {},
                                _0x9f75xb = function () {
                                    for (var _0x9f75x19 = 0; _0x9f75x19 < _0x9f75x4.length; _0x9f75x19++) {
                                        try {
                                            window.URL.revokeObjectURL(_0x9f75x4[_0x9f75x19].me)
                                        } catch (_0x9f75x19) {}
                                    };
                                    _0x9f75x15.he(new Error)
                                },
                                _0x9f75x9 = function () {
                                    _0x9f75x1e(_0x9f75x23 / _0x9f75x4.length),
                                        _0x9f75x21[_0x9f75x1f.re] = new _0x9f75x19.se(_0x9f75x1f.me, _0x9f75x20),
                                        _0x9f75x22()
                                },
                                _0x9f75x22 = function () {
                                    if (_0x9f75x23 < _0x9f75x4.length) {
                                        return _0x9f75x1f = _0x9f75x4[_0x9f75x23++],
                                            _0x9f75x20 = _0x9f75x3.e.g.from(_0x9f75x1f.me),
                                            _0x9f75x20.on('error', _0x9f75xb),
                                            void(_0x9f75x20.on('loaded', _0x9f75x9))
                                    };
                                    _0x9f75xd.S(function () {
                                        return _0x9f75x15.te(_0x9f75x6, _0x9f75x21)
                                    }, 0)
                                },
                                _0x9f75x23 = 0;
                            _0x9f75x22()
                        },
                        _0x9f75x7.prototype.te = function (_0x9f75x6, _0x9f75x3) {
                            function _0x9f75x4(_0x9f75x19) {
                                var _0x9f75x6 = _0x9f75x7.Zd.ce;
                                _0x9f75x1e.ge(_0x9f75x6, _0x9f75x7.de.tc(_0x9f75x6).Dc(_0x9f75x19))
                            }
                            var _0x9f75x1e = this,
                                _0x9f75x15 = {},
                                _0x9f75x1f = 0,
                                _0x9f75x20 = Object.values(_0x9f75x6.regionDict).length,
                                _0x9f75x3c = '#fbbe5f,#f7ca0b,#fcbe5e,#5cade5,#e03e42,#5aa9e1,#d2d91a,#e44a92' ['split'](',');
                            _0x9f75xd.ka(_0x9f75x6.regionDict, function (_0x9f75x6, _0x9f75x7) {
                                var _0x9f75x1e = _0x9f75x19.Da.Va(_0x9f75x7.texture + ':' + _0x9f75x6, _0x9f75x3[_0x9f75x7.texture].Ga, _0x9f75x7);
                                if (_0x9f75x7.texture === 't_abilities') {
                                    _0x9f75x1e.zt = new PIXI.TextStyle({
                                        align: 'center',
                                        fill: _0x9f75x3c.shift(),
                                        fontSize: 22,
                                        fontWeight: 'bold',
                                        lineJoin: 'round',
                                        whiteSpace: 'normal',
                                        wordWrap: !0
                                    })
                                };
                                _0x9f75x15[_0x9f75x6] = _0x9f75x1e,
                                    ++_0x9f75x1f % 10 == 0 && _0x9f75x4(_0x9f75x1f / _0x9f75x20)
                            });
                            var _0x9f75x21 = Object.values(_0x9f75x3).map(function (_0x9f75x19) {
                                    return _0x9f75x19.Ga
                                }),
                                _0x9f75xb = Object.values(_0x9f75x15),
                                _0x9f75x9 = new _0x9f75x19.Sb(_0x9f75x6, _0x9f75x19.Ya.xb(_0x9f75x6, _0x9f75x15, _0x9f75x21, _0x9f75xb));
                            _0x9f75xd.S(function () {
                                return _0x9f75x1e.ue(_0x9f75x9)
                            }, 0)
                        },
                        _0x9f75x7.le = function () {
                            function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7) {
                                this.re = _0x9f75x19,
                                    this.qe = _0x9f75x6,
                                    this.ne = _0x9f75x3,
                                    this.ve = _0x9f75x7,
                                    this.me = ''
                            }
                            return _0x9f75x19
                        }(),
                        _0x9f75x7.prototype.ue = function (_0x9f75x19) {
                            if (this.Yd) {
                                return void(_0x9f75x19.jc().Xa())
                            };
                            this.Yd = !0;
                            var _0x9f75x6 = this;
                            _0x9f75xd.S(function () {
                                return _0x9f75x6.Rd(_0x9f75x19)
                            }, 0)
                        },
                        _0x9f75x7.prototype.ie = function () {
                            if (!this.Yd) {
                                this.Yd = !0;
                                var _0x9f75x19 = this;
                                _0x9f75xd.S(function () {
                                    return _0x9f75x19.Sd()
                                }, 0)
                            }
                        },
                        _0x9f75x7.prototype.he = function (_0x9f75x19) {
                            if (!this.Yd) {
                                this.Yd = !0;
                                var _0x9f75x6 = this;
                                _0x9f75xd.S(function () {
                                    return _0x9f75x6.Td(_0x9f75x19)
                                }, 0)
                            }
                        },
                        _0x9f75x7.prototype.ee = function () {
                            if (!this.Yd) {
                                this.Yd = !0;
                                var _0x9f75x19 = this;
                                _0x9f75xd.S(function () {
                                    return _0x9f75x19.Ud()
                                }, 0)
                            }
                        },
                        _0x9f75x7.prototype.ge = function (_0x9f75x19, _0x9f75x6) {
                            if (!this.Yd && !this.Wd) {
                                var _0x9f75x3 = this;
                                _0x9f75xd.S(function () {
                                    return _0x9f75x3.Vd(_0x9f75x19, _0x9f75x6)
                                }, 0)
                            }
                        },
                        _0x9f75x7
                }(),
                _0x9f75x19.we = function () {
                    return {}
                }(),
                _0x9f75x19.xe = function () {
                    function _0x9f75xd() {
                        this.ye = _0x9f75x19.xe.Ae.ze,
                            this.Be = !1,
                            this.Ce = !1,
                            this.De = null,
                            this.Ee = null
                    }
                    return _0x9f75xd.prototype.za = function () {},
                        _0x9f75xd.prototype.Fe = function (_0x9f75x19) {
                            this.Ce = _0x9f75x19
                        },
                        _0x9f75xd.prototype.Ge = function (_0x9f75x19) {
                            this.ye = _0x9f75x19,
                                this.He()
                        },
                        _0x9f75xd.prototype.Ie = function (_0x9f75x19) {
                            this.Be = _0x9f75x19,
                                this.He()
                        },
                        _0x9f75xd.prototype.He = function () {},
                        _0x9f75xd.prototype.Je = function (_0x9f75x19, _0x9f75xd) {
                            if (!_0x9f75x6.L.bd.mc()) {
                                return null
                            };
                            var _0x9f75x3 = _0x9f75x19[_0x9f75xd];
                            return null == _0x9f75x3 || 0 === _0x9f75x3.length ? null : _0x9f75x3[Math.floor(Math.random() * _0x9f75x3.length)].cloneNode()
                        },
                        _0x9f75xd.prototype.Ke = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            if (this.Ce && !(_0x9f75xd <= 0)) {
                                var _0x9f75x3 = this.Je(_0x9f75x19, _0x9f75x6);
                                null != _0x9f75x3 && (_0x9f75x3.volume = Math.min(1, _0x9f75xd),
                                    _0x9f75x3.play())
                            }
                        },
                        _0x9f75xd.prototype.Le = function (_0x9f75x19, _0x9f75x6) {
                            this.ye.Me && this.Ke(app.Oe.Ne, _0x9f75x19, _0x9f75x6)
                        },
                        _0x9f75xd.prototype.Pe = function (_0x9f75x19, _0x9f75x6) {
                            this.ye.Qe && this.Ke(app.Oe.Re, _0x9f75x19, _0x9f75x6)
                        },
                        _0x9f75xd.prototype.Se = function () {},
                        _0x9f75xd.prototype.Te = function () {},
                        _0x9f75xd.prototype.Ue = function () {},
                        _0x9f75xd.prototype.Ve = function () {},
                        _0x9f75xd.prototype.We = function () {},
                        _0x9f75xd.prototype.Xe = function () {},
                        _0x9f75xd.prototype.Ye = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {},
                        _0x9f75xd.prototype.Ze = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.$e = function (_0x9f75x19) {},
                        _0x9f75xd.prototype._e = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.af = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.bf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.cf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.df = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.ef = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.ff = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.gf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.hf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.if = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.jf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.kf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.lf = function (_0x9f75x19, _0x9f75x6) {},
                        _0x9f75xd.prototype.mf = function (_0x9f75x19) {},
                        _0x9f75xd.prototype.nf = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {},
                        _0x9f75xd.Ae = {
                            ze: {
                                pf: !1,
                                qf: !1,
                                Qe: !0,
                                Me: !1
                            },
                            rf: {
                                pf: !1,
                                qf: !0,
                                Qe: !0,
                                Me: !1
                            },
                            sf: {
                                pf: !0,
                                qf: !1,
                                Qe: !1,
                                Me: !0
                            },
                            tf: {
                                pf: !1,
                                qf: !1,
                                Qe: !0,
                                Me: !1
                            },
                            uf: {
                                pf: !1,
                                qf: !1,
                                Qe: !1,
                                Me: !1
                            }
                        },
                        _0x9f75xd
                }(),
                _0x9f75x19.vf = function () {
                    function _0x9f75x7(_0x9f75xd) {
                        this.wf = _0x9f75xd,
                            this.Wb = _0x9f75xd.get()[0],
                            this.xf = 1,
                            this.yf = 1,
                            this.zf = new _0x9f75x19.Af(_0x9f75x1e, _0x9f75x15, _0x9f75x19.Cf.Bf),
                            this.Df = new _0x9f75x3.e.i({
                                view: this.Wb,
                                backgroundColor: _0x9f75x4,
                                antialias: !0
                            }),
                            this.Ef = new _0x9f75x3.e.f,
                            this.Ef.sortableChildren = !0,
                            this.Ff = new _0x9f75x3.e.f,
                            this.Ff.zIndex = 0,
                            this.Ef.addChild(this.Ff),
                            this.Gf = new _0x9f75x19.Hf(_0x9f75x6.L.Oe.If),
                            this.Gf.Jf.zIndex = 1,
                            this.Ef.addChild(this.Gf.Jf);
                        var _0x9f75x7 = this.zf.Kf();
                        _0x9f75x7.zIndex = 2,
                            this.Ef.addChild(_0x9f75x7),
                            this.Lf = new _0x9f75x3.e.f,
                            this.Lf.zIndex = 3,
                            this.Ef.addChild(this.Lf),
                            this.Mf = [],
                            this.Nf = [],
                            this.Of = [],
                            this.za()
                    }
                    var _0x9f75x4 = 0,
                        _0x9f75x1e = 5,
                        _0x9f75x15 = 40,
                        _0x9f75x1f = [{
                            Pf: 1,
                            Qf: Math.max(0, 0.775 - 0.625),
                            Rf: Math.max(0, -0.125)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.125),
                            Rf: Math.max(0, 0.525 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.725 - 0.625),
                            Rf: Math.max(0, 0.55 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.7 - 0.625),
                            Rf: Math.max(0, 0.575 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.675 - 0.625),
                            Rf: Math.max(0, 0.6 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.65 - 0.625),
                            Rf: Math.max(0, 0)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0),
                            Rf: Math.max(0, 0.65 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.6 - 0.625),
                            Rf: Math.max(0, 0.675 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.575 - 0.625),
                            Rf: Math.max(0, 0.7 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.55 - 0.625),
                            Rf: Math.max(0, 0.725 - 0.625)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, 0.525 - 0.625),
                            Rf: Math.max(0, 0.125)
                        }, {
                            Pf: 1,
                            Qf: Math.max(0, -0.125),
                            Rf: Math.max(0, 0.775 - 0.625)
                        }];
                    _0x9f75x7.prototype.za = function () {
                            this.Df.backgroundColor = _0x9f75x4,
                                this.Mf = new Array(_0x9f75x1f.length);
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.Mf.length; _0x9f75x19++) {
                                this.Mf[_0x9f75x19] = new _0x9f75x3.e.m,
                                    this.Mf[_0x9f75x19].texture = _0x9f75x6.L.Oe.Sf,
                                    this.Mf[_0x9f75x19].anchor.set(0.5),
                                    this.Ff.addChild(this.Mf[_0x9f75x19])
                            };
                            this.Nf = new Array(_0x9f75x6.L.Oe.Tf.length);
                            for (var _0x9f75x7 = 0; _0x9f75x7 < this.Nf.length; _0x9f75x7++) {
                                this.Nf[_0x9f75x7] = new _0x9f75x3.e.m,
                                    this.Nf[_0x9f75x7].texture = _0x9f75x6.L.Oe.Tf[_0x9f75x7],
                                    this.Nf[_0x9f75x7].anchor.set(0.5),
                                    this.Lf.addChild(this.Nf[_0x9f75x7])
                            };
                            this.Of = new Array(this.Nf.length);
                            for (var _0x9f75x1e = 0; _0x9f75x1e < this.Of.length; _0x9f75x1e++) {
                                var _0x9f75x15 = _0x9f75xd.ga((0.9 + 0.2 * Math.random()) % 1 * 360, 1, 0.5);
                                this.Of[_0x9f75x1e] = {
                                    Uf: _0x9f75xd.da(0, _0x9f75x6.M),
                                    Vf: 0.66 * _0x9f75xd.da(0.09, 0.16),
                                    Wf: _0x9f75xd.da(0, 1),
                                    Xf: _0x9f75xd.da(0, 1),
                                    Yf: 0,
                                    Pf: _0x9f75x15[0],
                                    Qf: _0x9f75x15[1],
                                    Rf: _0x9f75x15[2]
                                }
                            };
                            this.Zf(),
                                this.$f()
                        },
                        _0x9f75x7.zd = !1,
                        _0x9f75x7._f = function (_0x9f75x19) {
                            _0x9f75x7.zd = _0x9f75x19
                        },
                        _0x9f75x7.prototype.ag = function (_0x9f75x19) {
                            this.zf._f(_0x9f75x19)
                        },
                        _0x9f75x7.prototype.$f = function () {
                            var _0x9f75x19 = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            this.xf = this.wf.width(),
                                this.yf = this.wf.height(),
                                this.Df.resize(this.xf, this.yf),
                                this.Df.resolution = _0x9f75x19,
                                this.Wb.width = _0x9f75x19 * this.xf,
                                this.Wb.height = _0x9f75x19 * this.yf;
                            for (var _0x9f75x6 = 0.6 * Math.max(this.xf, this.yf), _0x9f75xd = 0; _0x9f75xd < this.Mf.length; _0x9f75xd++) {
                                this.Mf[_0x9f75xd].width = _0x9f75x6,
                                    this.Mf[_0x9f75xd].height = _0x9f75x6
                            };
                            this.Gf.bg(this.xf, this.yf),
                                this.zf.$f()
                        },
                        _0x9f75x7.prototype.cg = function (_0x9f75x19, _0x9f75x3) {
                            if (_0x9f75x7.zd) {
                                for (var _0x9f75x4 = _0x9f75x19 / 1e3, _0x9f75x1e = this.wf.width(), _0x9f75x15 = this.wf.height(), _0x9f75x20 = 0; _0x9f75x20 < this.Mf.length; _0x9f75x20++) {
                                    var _0x9f75x21 = _0x9f75x1f[_0x9f75x20 % _0x9f75x1f.length],
                                        _0x9f75xb = this.Mf[_0x9f75x20],
                                        _0x9f75x9 = _0x9f75x20 / this.Mf.length * _0x9f75x6.N,
                                        _0x9f75x22 = 0.5 * _0x9f75x4 * 0.12,
                                        _0x9f75x23 = Math.cos(3 * (_0x9f75x22 + _0x9f75x9)) * Math.cos(_0x9f75x9) - Math.sin(5 * (_0x9f75x22 + _0x9f75x9)) * Math.sin(_0x9f75x9),
                                        _0x9f75x24 = Math.cos(3 * (_0x9f75x22 + _0x9f75x9)) * Math.sin(_0x9f75x9) + Math.sin(5 * (_0x9f75x22 + _0x9f75x9)) * Math.cos(_0x9f75x9),
                                        _0x9f75x25 = 0.2 + 0.2 * Math.cos(_0x9f75x9 + 0.075 * _0x9f75x4),
                                        _0x9f75x5 = 16711680 & 255 * _0x9f75x21.Pf << 16 | 65280 & 255 * _0x9f75x21.Qf << 8 | 255 & 255 * _0x9f75x21.Rf;
                                    _0x9f75xb.tint = _0x9f75x5,
                                        _0x9f75xb.alpha = _0x9f75x25,
                                        _0x9f75xb.position.set(_0x9f75x1e * (0.2 + 0.5 * (_0x9f75x23 + 1) * 0.6), _0x9f75x15 * (0.1 + 0.5 * (_0x9f75x24 + 1) * 0.8))
                                };
                                for (var _0x9f75x26 = 0.05 * Math.max(_0x9f75x1e, _0x9f75x15), _0x9f75x27 = 0; _0x9f75x27 < this.Nf.length; _0x9f75x27++) {
                                    var _0x9f75x28 = this.Of[_0x9f75x27],
                                        _0x9f75x29 = this.Nf[_0x9f75x27],
                                        _0x9f75x2a = _0x9f75x6.M * _0x9f75x27 / this.Nf.length;
                                    _0x9f75x28.Wf = 0.2 + 0.6 * (Math.cos(0.01 * _0x9f75x4 + _0x9f75x2a) + 0.2 * Math.cos(0.02 * _0x9f75x4 * 17 + _0x9f75x2a) + 1) / 2,
                                        _0x9f75x28.Xf = 0.1 + 0.8 * (Math.sin(0.01 * _0x9f75x4 + _0x9f75x2a) + 0.2 * Math.sin(0.02 * _0x9f75x4 * 21 + _0x9f75x2a) + 1) / 2;
                                    var _0x9f75x2b = _0x9f75x28.Wf,
                                        _0x9f75x2c = _0x9f75x28.Xf,
                                        _0x9f75x2d = _0x9f75xd.$(Math.pow(Math.cos(1.5 * (_0x9f75x2a + 0.048 * _0x9f75x4)), 6), 0, 0.9),
                                        _0x9f75x2e = 1.2 * (0.4 + 0.5 * (1 + Math.sin(_0x9f75x2a + 0.12 * _0x9f75x4)) * 1.2),
                                        _0x9f75xa = _0x9f75x2a + 0.1 * _0x9f75x4,
                                        _0x9f75x2f = 16711680 & 255 * _0x9f75x28.Pf << 16 | 65280 & 255 * _0x9f75x28.Qf << 8 | 255 & 255 * _0x9f75x28.Rf;
                                    _0x9f75x29.alpha = _0x9f75x2d,
                                        _0x9f75x29.tint = _0x9f75x2f,
                                        _0x9f75x29.position.set(_0x9f75x1e * _0x9f75x2b, _0x9f75x15 * _0x9f75x2c),
                                        _0x9f75x29.rotation = _0x9f75xa;
                                    var _0x9f75x30 = _0x9f75x29.texture.width / _0x9f75x29.texture.height;
                                    _0x9f75x29.width = _0x9f75x2e * _0x9f75x26,
                                        _0x9f75x29.height = _0x9f75x2e * _0x9f75x26 * _0x9f75x30
                                };
                                this.dg(),
                                    this.Df.render(this.Ef, null, !0)
                            }
                        },
                        _0x9f75x7.prototype.eg = function () {
                            if (_0x9f75x6.L.bd.mc()) {
                                for (var _0x9f75x19 = _0x9f75x6.L.bd.jc().yb(_0x9f75x1e), _0x9f75x3 = 0; _0x9f75x3 < _0x9f75x1e; _0x9f75x3++) {
                                    this.zf.fg(_0x9f75x3, _0x9f75x19[_0x9f75x3])
                                }
                            } else {
                                for (var _0x9f75x7 = _0x9f75xd.da(0, 1), _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x1e; _0x9f75x4++) {
                                    var _0x9f75x15 = (_0x9f75x7 + _0x9f75x4 / _0x9f75x1e) % 1,
                                        _0x9f75x1f = _0x9f75xd.ga(Math.floor(360 * _0x9f75x15), 0.85, 0.5),
                                        _0x9f75x20 = 255 & 255 * _0x9f75x1f[0] | 65280 & 255 * _0x9f75x1f[1] << 8 | 16711680 & 255 * _0x9f75x1f[2] << 16,
                                        _0x9f75x21 = '000000' + _0x9f75x20.toString(16);
                                    _0x9f75x21 = '#' + _0x9f75x21.substring(_0x9f75x21.length - 6, _0x9f75x21.length),
                                        this.zf.gg(_0x9f75x4, _0x9f75x21)
                                }
                            }
                        },
                        _0x9f75x7.prototype.Zf = function () {
                            for (var _0x9f75x19 = Math.min(this.xf, this.yf), _0x9f75x3 = _0x9f75xd.ja(), _0x9f75x7 = 0; _0x9f75x7 < _0x9f75x1e; _0x9f75x7++) {
                                var _0x9f75x4 = _0x9f75x7 / _0x9f75x1e * _0x9f75x6.M,
                                    _0x9f75x15 = _0x9f75x20(_0x9f75x3, 0.12, _0x9f75x4);
                                _0x9f75x15.Ia = 4 * _0x9f75x15.Ia,
                                    _0x9f75x15.Ja = 4 * _0x9f75x15.Ja,
                                    this.zf.hg(_0x9f75x7, 0.5 * (this.xf + _0x9f75x15.Ia * _0x9f75x19), 0.5 * (this.yf + _0x9f75x15.Ja * _0x9f75x19))
                            }
                        },
                        _0x9f75x7.prototype.dg = function () {
                            for (var _0x9f75x19 = Math.min(this.xf, this.yf), _0x9f75x3 = _0x9f75xd.ja(), _0x9f75x7 = 0; _0x9f75x7 < _0x9f75x1e; _0x9f75x7++) {
                                var _0x9f75x4 = _0x9f75x7 / _0x9f75x1e * _0x9f75x6.M,
                                    _0x9f75x15 = _0x9f75x20(_0x9f75x3, 0.12, _0x9f75x4);
                                this.zf.ig(_0x9f75x7, 0.5 * (this.xf + _0x9f75x15.Ia * _0x9f75x19), 0.5 * (this.yf + _0x9f75x15.Ja * _0x9f75x19))
                            };
                            this.zf.jg()
                        };
                    var _0x9f75x20 = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                        var _0x9f75x3 = _0x9f75x19 / 1e3;
                        return {
                            Ia: 0.8 * (Math.cos(_0x9f75x6 * _0x9f75x3 + _0x9f75xd) + 0.4 * Math.cos(-32 * _0x9f75x6 * _0x9f75x3 + _0x9f75xd) + 0.7 * Math.cos(7 * _0x9f75x6 * _0x9f75x3 + _0x9f75xd)),
                            Ja: 0.8 * (Math.sin(_0x9f75x6 * _0x9f75x3 + _0x9f75xd) + 0.4 * Math.sin(-32 * _0x9f75x6 * _0x9f75x3 + _0x9f75xd) + 0.7 * Math.sin(7 * _0x9f75x6 * _0x9f75x3 + _0x9f75xd))
                        }
                    };
                    return _0x9f75x7
                }(),
                _0x9f75x19.kg = function () {
                    function _0x9f75x19() {}
                    return _0x9f75x19.lg = 'consent_state_2',
                        _0x9f75x19.mg = 'showPlayerNames',
                        _0x9f75x19.ng = 'musicEnabled',
                        _0x9f75x19.og = 'sfxEnabled',
                        _0x9f75x19.pg = 'account_type',
                        _0x9f75x19.qg = 'gameMode',
                        _0x9f75x19.rg = 'nickname',
                        _0x9f75x19.sg = 'skin',
                        _0x9f75x19.tg = 'prerollCount',
                        _0x9f75x19.ug = 'shared',
                        _0x9f75x19.vg = function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                            var _0x9f75x7 = new Date;
                            _0x9f75x7.setTime(_0x9f75x7.getTime() + 864e5 * _0x9f75x3);
                            var _0x9f75x4 = 'expires=' + _0x9f75x7.toUTCString();
                            document.cookie = _0x9f75x19 + '=' + _0x9f75x6 + '; ' + _0x9f75x4
                        },
                        _0x9f75x19.wg = function (_0x9f75x19) {
                            for (var _0x9f75x6 = _0x9f75x19 + '=', _0x9f75x3 = document.cookie.split(';'), _0x9f75x7 = 0; _0x9f75x7 < _0x9f75x3.length; _0x9f75x7++) {
                                for (var _0x9f75x4 = _0x9f75x3[_0x9f75x7]; _0x9f75x4.charAt(0) == ' ';) {
                                    _0x9f75x4 = _0x9f75x4.substring(1)
                                };
                                if (0 == _0x9f75x4.indexOf(_0x9f75x6)) {
                                    return _0x9f75x4.substring(_0x9f75x6.length, _0x9f75x4.length)
                                }
                            };
                            return ''
                        },
                        _0x9f75x19
                }(),
                _0x9f75x6.xg = function () {
                    function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                        for (var _0x9f75x3 = !1, _0x9f75x7 = _0x9f75xd.length, _0x9f75x4 = 0, _0x9f75x1e = _0x9f75x7 - 1; _0x9f75x4 < _0x9f75x7; _0x9f75x1e = _0x9f75x4++) {
                            _0x9f75xd[_0x9f75x4][1] > _0x9f75x6 != _0x9f75xd[_0x9f75x1e][1] > _0x9f75x6 && _0x9f75x19 < (_0x9f75xd[_0x9f75x1e][0] - _0x9f75xd[_0x9f75x4][0]) * (_0x9f75x6 - _0x9f75xd[_0x9f75x4][1]) / (_0x9f75xd[_0x9f75x1e][1] - _0x9f75xd[_0x9f75x4][1]) + _0x9f75xd[_0x9f75x4][0] && (_0x9f75x3 = !_0x9f75x3)
                        };
                        return _0x9f75x3
                    }
                    var _0x9f75x6 = [
                        [-28.06744, 64.95936],
                        [-10.59082, 72.91964],
                        [14.11773, 81.39558],
                        [36.51855, 81.51827],
                        [32.82715, 71.01696],
                        [31.64063, 69.41897],
                        [29.41419, 68.43628],
                        [30.64379, 67.47302],
                        [29.88281, 66.76592],
                        [30.73975, 65.50385],
                        [30.73975, 64.47279],
                        [31.48682, 63.49957],
                        [32.18994, 62.83509],
                        [28.47726, 60.25122],
                        [28.76221, 59.26588],
                        [28.03711, 58.60833],
                        [28.38867, 57.53942],
                        [28.83955, 56.2377],
                        [31.24512, 55.87531],
                        [31.61865, 55.34164],
                        [31.92627, 54.3037],
                        [33.50497, 53.26758],
                        [32.73926, 52.85586],
                        [32.23389, 52.4694],
                        [34.05762, 52.44262],
                        [34.98047, 51.79503],
                        [35.99121, 50.88917],
                        [36.67236, 50.38751],
                        [37.74902, 50.51343],
                        [40.78125, 49.62495],
                        [40.47363, 47.70976],
                        [38.62799, 46.92028],
                        [37.53193, 46.55915],
                        [36.72182, 44.46428],
                        [39.68218, 43.19733],
                        [40.1521, 43.74422],
                        [43.52783, 43.03678],
                        [45.30762, 42.73087],
                        [46.99951, 41.98399],
                        [47.26318, 40.73061],
                        [44.20009, 40.86309],
                        [45.35156, 39.57182],
                        [45.43945, 36.73888],
                        [35.64789, 35.26481],
                        [33.13477, 33.65121],
                        [21.47977, 33.92486],
                        [12.16268, 34.32477],
                        [11.82301, 37.34239],
                        [6.09112, 38.28597],
                        [-1.96037, 35.62069],
                        [-4.82156, 35.60443],
                        [-7.6498, 35.26589],
                        [-16.45237, 37.44851],
                        [-28.06744, 64.95936]
                    ];
                    return {
                        yg: function (_0x9f75xd, _0x9f75x3) {
                            return _0x9f75x19(_0x9f75x3, _0x9f75xd, _0x9f75x6)
                        }
                    }
                }(),
                _0x9f75x19.zg = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        var _0x9f75x6;
                        _0x9f75x6 = _0x9f75x19 > 0 ? '+' + Math.floor(_0x9f75x19) : _0x9f75x19 < 0 ? '-' + Math.floor(_0x9f75x19) : '0';
                        var _0x9f75x3, _0x9f75x7 = Math.min(1.5, 0.5 + _0x9f75x19 / 600);
                        if (_0x9f75x19 < 1) {
                            _0x9f75x3 = '0xFFFFFF'
                        } else {
                            if (_0x9f75x19 < 30) {
                                var _0x9f75x1e = (_0x9f75x19 - 1) / 29;
                                _0x9f75x3 = _0x9f75x4(1 * (1 - _0x9f75x1e) + 0.96 * _0x9f75x1e, 1 * (1 - _0x9f75x1e) + 0.82 * _0x9f75x1e, 1 * (1 - _0x9f75x1e) + 0 * _0x9f75x1e)
                            } else {
                                if (_0x9f75x19 < 300) {
                                    var _0x9f75x1f = (_0x9f75x19 - 30) / 270;
                                    _0x9f75x3 = _0x9f75x4(0.96 * (1 - _0x9f75x1f) + 0.93 * _0x9f75x1f, 0.82 * (1 - _0x9f75x1f) + 0.34 * _0x9f75x1f, 0 * (1 - _0x9f75x1f) + 0.25 * _0x9f75x1f)
                                } else {
                                    if (_0x9f75x19 < 700) {
                                        var _0x9f75x20 = (_0x9f75x19 - 300) / 400;
                                        _0x9f75x3 = _0x9f75x4(0.93 * (1 - _0x9f75x20) + 0.98 * _0x9f75x20, 0.34 * (1 - _0x9f75x20) + 0 * _0x9f75x20, 0.25 * (1 - _0x9f75x20) + 0.98 * _0x9f75x20)
                                    } else {
                                        _0x9f75x3 = _0x9f75x4(0.98, 0, 0.98)
                                    }
                                }
                            }
                        };
                        var _0x9f75x21 = Math.random(),
                            _0x9f75xb = 1 + 0.5 * Math.random();
                        return new _0x9f75x15(_0x9f75x6, _0x9f75x3, !0, 0.5, _0x9f75x7, _0x9f75x21, _0x9f75xb)
                    }

                    function _0x9f75x7(_0x9f75x19, _0x9f75x6) {
                        var _0x9f75xd, _0x9f75x3;
                        return _0x9f75x6 ? (_0x9f75xd = 1.3,
                                _0x9f75x3 = _0x9f75x4(0.93, 0.34, 0.25)) : (_0x9f75xd = 1.1,
                                _0x9f75x3 = _0x9f75x4(0.96, 0.82, 0)),
                            new _0x9f75x15(_0x9f75x19, _0x9f75x3, !0, 0.5, _0x9f75xd, 0.5, 0.7)
                    }

                    function _0x9f75x4(_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                        return ((255 * _0x9f75x19 & 255) << 16) + ((255 * _0x9f75x6 & 255) << 8) + (255 * _0x9f75xd & 255)
                    }
                    var _0x9f75x1e = _0x9f75xd.X(_0x9f75x3.e.f, function () {
                        _0x9f75x3.e.f.call(this),
                            this.Ag = [],
                            this.Bg = 0
                    });
                    _0x9f75x1e.prototype.Cg = function (_0x9f75x6) {
                            if (this.Bg += _0x9f75x6,
                                this.Bg >= 1) {
                                var _0x9f75xd = Math.floor(this.Bg);
                                this.Bg -= _0x9f75xd;
                                var _0x9f75x3 = _0x9f75x19(_0x9f75xd);
                                this.addChild(_0x9f75x3),
                                    this.Ag.push(_0x9f75x3)
                            }
                        },
                        _0x9f75x1e.prototype.Dg = function (_0x9f75x19, _0x9f75x4) {
                            _0x9f75x64('count', _0x9f75x19, _0x9f75x4);
                            if (_0x9f75x19) {
                                var _0x9f75x6 = _0x9f75x7(_0x9f75xd.O('index.game.floating.headshot'), !0);
                                this.addChild(_0x9f75x6),
                                    this.Ag.push(_0x9f75x6)
                            } else {
                                var _0x9f75x3 = _0x9f75x7(_0x9f75xd.O('index.game.floating.wellDone'), !1);
                                this.addChild(_0x9f75x3),
                                    this.Ag.push(_0x9f75x3)
                            }
                        },
                        _0x9f75x1e.prototype.jg = function (_0x9f75x19, _0x9f75xd) {
                            for (var _0x9f75x7 = _0x9f75x6.L.Fg.sf.Eg, _0x9f75x4 = _0x9f75x7.Df.width / _0x9f75x7.Df.resolution, _0x9f75x1e = _0x9f75x7.Df.height / _0x9f75x7.Df.resolution, _0x9f75x15 = 0; _0x9f75x15 < this.Ag.length;) {
                                var _0x9f75x1f = this.Ag[_0x9f75x15];
                                _0x9f75x1f.Gg = _0x9f75x1f.Gg + _0x9f75xd / 2e3 * _0x9f75x1f.Hg,
                                    _0x9f75x1f.Ig = _0x9f75x1f.Ig + _0x9f75xd / 2e3 * _0x9f75x1f.Jg,
                                    _0x9f75x1f.alpha = 0.5 * Math.sin(Math.PI * _0x9f75x1f.Ig),
                                    _0x9f75x1f.scale.set(_0x9f75x1f.Gg),
                                    _0x9f75x1f.position.x = _0x9f75x4 * (0.25 + 0.5 * _0x9f75x1f.Kg),
                                    _0x9f75x1f.position.y = _0x9f75x1f.Lg ? _0x9f75x1e * (1 - 0.5 * (1 + _0x9f75x1f.Ig)) : _0x9f75x1e * (1 - 0.5 * (0 + _0x9f75x1f.Ig)),
                                    _0x9f75x1f.Ig > 1 && (_0x9f75x3.e.w.z(_0x9f75x1f),
                                        this.Ag.splice(_0x9f75x15, 1),
                                        _0x9f75x15--),
                                    _0x9f75x15++
                            }
                        };
                    var _0x9f75x15 = function () {
                        return _0x9f75xd.X(_0x9f75x3.e.n, function (_0x9f75x19, _0x9f75x6, _0x9f75x7, _0x9f75x4, _0x9f75x1e, _0x9f75x15, _0x9f75x1f) {
                            _0x9f75x3.e.n.call(this, _0x9f75x19, {
                                    fill: _0x9f75x6,
                                    fontFamily: 'PTSans',
                                    fontSize: 36
                                }),
                                this.anchor.set(0.5),
                                this.Lg = _0x9f75x7,
                                this.Gg = _0x9f75x4,
                                this.Hg = _0x9f75x1e,
                                this.Kg = _0x9f75x15,
                                this.Ig = 0,
                                this.Jg = _0x9f75x1f
                        })
                    }();
                    return _0x9f75x1e
                }(),
                _0x9f75x19.se = function () {
                    function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                        this.me = _0x9f75x19,
                            this.Ga = _0x9f75x6
                    }
                    return _0x9f75x19
                }(),
                _0x9f75x19.Sc = {
                    Mg: 0,
                    Rc: 16
                },
                _0x9f75x19.Ng = function () {
                    function _0x9f75x6() {
                        this.Og = _0x9f75x19.Sc.Mg,
                            this.Pg = 0,
                            this.Qg = 500,
                            this.Rg = 4e3,
                            this.Sg = 7e3
                    }
                    return _0x9f75x6.Tg = 0,
                        _0x9f75x6.prototype.Ug = function () {
                            return 1.02 * this.Qg
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.Vg = function () {
                    function _0x9f75x7(_0x9f75x6) {
                        this.wf = _0x9f75x6,
                            this.Wb = _0x9f75x6.get()[0],
                            this.Df = new _0x9f75x3.e.i({
                                view: this.Wb,
                                backgroundColor: _0x9f75x4,
                                antialias: !0
                            }),
                            this.Ef = new _0x9f75x3.e.f,
                            this.Ef.sortableChildren = !0,
                            this.Wg = Math.floor(360 * Math.random()),
                            this.Xg = 0,
                            this.Yg = 0,
                            this.Zg = 15,
                            this.$g = 0.5,
                            this._g = 0,
                            this.ah = new _0x9f75x19.bh,
                            this.ch = new _0x9f75x3.e.j,
                            this.dh = new _0x9f75x3.e.f,
                            this.eh = new _0x9f75x3.e.f,
                            this.eh.sortableChildren = !0,
                            this.fh = new _0x9f75x3.e.f,
                            this.gh = new _0x9f75x3.e.f,
                            this.gh.sortableChildren = !0,
                            this.hh = new _0x9f75x3.e.f,
                            this.ih = new _0x9f75x1e,
                            this.jh = new _0x9f75x15,
                            this.kh = new _0x9f75x1f,
                            this.lh = new _0x9f75x19.zg,
                            this.mh = new _0x9f75x3.e.m,
                            this.nh = {
                                x: 0,
                                y: 0
                            },
                            this.za()
                    }
                    var _0x9f75x4 = 0;
                    _0x9f75x7.prototype.za = function () {
                            this.Df.backgroundColor = _0x9f75x4,
                                this.ah.Jf.zIndex = 10,
                                this.Ef.addChild(this.ah.Jf),
                                this.ch.zIndex = 20,
                                this.Ef.addChild(this.ch),
                                this.dh.zIndex = 5e3,
                                this.Ef.addChild(this.dh),
                                this.eh.zIndex = 5100,
                                this.Ef.addChild(this.eh),
                                this.fh.zIndex = 1e4,
                                this.Ef.addChild(this.fh),
                                this.mh.texture = _0x9f75x6.L.Oe.oh,
                                this.mh.anchor.set(0.5),
                                this.mh.zIndex = 1,
                                this.gh.addChild(this.mh),
                                this.hh.alpha = 0.6,
                                this.hh.zIndex = 2,
                                this.gh.addChild(this.hh),
                                this.lh.zIndex = 3,
                                this.gh.addChild(this.lh),
                                this.ih.alpha = 0.8,
                                this.ih.zIndex = 4,
                                this.gh.addChild(this.ih),
                                this.jh.zIndex = 5,
                                this.gh.addChild(this.jh),
                                this.kh.zIndex = 6,
                                this.gh.addChild(this.kh),
                                this.$f()
                        },
                        _0x9f75x7.prototype.$f = function () {
                            var _0x9f75x19 = window.devicePixelRatio ? window.devicePixelRatio : 1,
                                _0x9f75x6 = this.wf.width(),
                                _0x9f75xd = this.wf.height();
                            this.Df.resize(_0x9f75x6, _0x9f75xd),
                                this.Df.resolution = _0x9f75x19,
                                this.Wb.width = _0x9f75x19 * _0x9f75x6,
                                this.Wb.height = _0x9f75x19 * _0x9f75xd,
                                this.$g = Math.min(Math.min(_0x9f75x6, _0x9f75xd), 0.625 * Math.max(_0x9f75x6, _0x9f75xd)),
                                this.mh.position.x = _0x9f75x6 / 2,
                                this.mh.position.y = _0x9f75xd / 2,
                                this.mh.width = _0x9f75x6,
                                this.mh.height = _0x9f75xd,
                                this.ih.position.x = 60 + (Z.locals.streamer ? Z.positions.m : 0),
                                this.ih.position.y = 60,
                                this.jh.position.x = 110,
                                this.jh.position.y = 10,
                                this.kh.position.x = _0x9f75x6 - 225 - (Z.locals.streamer ? Z.positions.l : 0),
                                this.kh.position.y = 1
                        },
                        _0x9f75x7.prototype.jg = function (_0x9f75xd, _0x9f75x3) {
                            this.Zg = 15,
                                this.dh.removeChildren(),
                                this.eh.removeChildren(),
                                this.fh.removeChildren(),
                                this.hh.removeChildren(),
                                this.ah.ph(_0x9f75xd.Og === _0x9f75x19.Sc.Mg ? _0x9f75x6.L.Oe.qh : _0x9f75x6.L.Oe.rh);
                            var _0x9f75x7 = this.ch;
                            _0x9f75x7.clear(),
                                _0x9f75x7.lineStyle(0.2, 16711680, 0.3),
                                _0x9f75x7.drawCircle(0, 0, _0x9f75xd.Qg),
                                _0x9f75x7.endFill(),
                                this.kh.sh = _0x9f75x3,
                                this.hh.visible = _0x9f75x3
                        },
                        _0x9f75x7.prototype.cg = function (_0x9f75x3, _0x9f75x7) {
                            if (!(this.Df.width <= 5)) {
                                var _0x9f75x4 = _0x9f75x6.L.uh.th,
                                    _0x9f75x1e = this.Df.width / this.Df.resolution,
                                    _0x9f75x15 = this.Df.height / this.Df.resolution;
                                this.Zg = _0x9f75xd._(this.Zg, _0x9f75x6.L.uh.vh, _0x9f75x7, 0.002);
                                var _0x9f75x1f = this.$g / (this.Zg * Zzm),
                                    _0x9f75x20 = _0x9f75x6.L.uh.th.vd[_0x9f75x19.xd.Hd],
                                    _0x9f75x21 = null != _0x9f75x20 && _0x9f75x20.zd;
                                this._g = _0x9f75xd.$(this._g + _0x9f75x7 / 1e3 * (0.1 * (_0x9f75x21 ? 1 : 0) - this._g), 0, 1),
                                    this.mh.alpha = this._g,
                                    this.Wg = this.Wg + 0.01 * _0x9f75x7,
                                    this.Wg > 360 && (this.Wg = this.Wg % 360),
                                    this.Xg = Math.sin(_0x9f75x3 / 1200 * 2 * Math.PI);
                                var _0x9f75xb = _0x9f75x4.wh();
                                this.nh.x = _0x9f75xd.aa(this.nh.x, _0x9f75xb.Ia, _0x9f75x7, 0.5, 33.333),
                                    this.nh.y = _0x9f75xd.aa(this.nh.y, _0x9f75xb.Ja, _0x9f75x7, 0.5, 33.333);
                                var _0x9f75x9 = _0x9f75x1e / _0x9f75x1f / 2,
                                    _0x9f75x22 = _0x9f75x15 / _0x9f75x1f / 2;
                                _0x9f75x6.L.uh.xh(this.nh.x - 1.3 * _0x9f75x9, this.nh.x + 1.3 * _0x9f75x9, this.nh.y - 1.3 * _0x9f75x22, this.nh.y + 1.3 * _0x9f75x22),
                                    this.ah.jg(this.nh.x, this.nh.y, 2 * _0x9f75x9, 2 * _0x9f75x22);
                                var _0x9f75x23 = _0x9f75x6.L.uh.yh.Qg;
                                this.Ef.scale.x = _0x9f75x1f,
                                    this.Ef.scale.y = _0x9f75x1f,
                                    this.Ef.position.x = _0x9f75x1e / 2 - this.nh.x * _0x9f75x1f,
                                    this.Ef.position.y = _0x9f75x15 / 2 - this.nh.y * _0x9f75x1f;
                                var _0x9f75x24 = Math.hypot(_0x9f75xb.Ia, _0x9f75xb.Ja);
                                if (_0x9f75x24 > _0x9f75x23 - 10) {
                                    this.Yg = _0x9f75xd.$(1 + (_0x9f75x24 - _0x9f75x23) / 10, 0, 1);
                                    var _0x9f75x25 = Math.cos(this.Wg * _0x9f75x6.M / 360) * (1 - this.Yg) + 1 * this.Yg,
                                        _0x9f75x5 = Math.sin(this.Wg * _0x9f75x6.M / 360) * (1 - this.Yg),
                                        _0x9f75x26 = (Math.atan2(_0x9f75x5, _0x9f75x25) + _0x9f75x6.M) % _0x9f75x6.M * 360 / _0x9f75x6.M,
                                        _0x9f75x27 = this.Yg * (0.5 + 0.5 * this.Xg),
                                        _0x9f75x28 = _0x9f75xd.ga(Math.floor(_0x9f75x26), 1, 0.75 - 0.25 * this.Yg);
                                    this.ah.Wc(_0x9f75x28[0], _0x9f75x28[1], _0x9f75x28[2], 0.1 + 0.2 * _0x9f75x27)
                                } else {
                                    this.Yg = 0;
                                    var _0x9f75x29 = _0x9f75xd.ga(Math.floor(this.Wg), 1, 0.75);
                                    this.ah.Wc(_0x9f75x29[0], _0x9f75x29[1], _0x9f75x29[2], 0.1)
                                };
                                for (var _0x9f75x2a = 0; _0x9f75x2a < this.hh.children.length; _0x9f75x2a++) {
                                    var _0x9f75x2b = this.hh.children[_0x9f75x2a];
                                    _0x9f75x2b.position.x = _0x9f75x1e / 2 - (this.nh.x - _0x9f75x2b.zh.x) * _0x9f75x1f,
                                        _0x9f75x2b.position.y = _0x9f75x15 / 2 - (this.nh.y - _0x9f75x2b.zh.y) * _0x9f75x1f
                                };
                                this.ih.Ah.position.x = _0x9f75xb.Ia / _0x9f75x23 * this.ih.Bh,
                                    this.ih.Ah.position.y = _0x9f75xb.Ja / _0x9f75x23 * this.ih.Bh,
                                    this.jh.Ch(_0x9f75x3),
                                    this.lh.jg(_0x9f75x3, _0x9f75x7),
                                    this.Df.render(this.Ef, null, !0),
                                    this.Df.render(this.gh, null, !1);
                                this.ih.Ah.x0 = this.ih.Ah.x0 || -1e4,
                                    this.ih.Ah.y0 = this.ih.Ah.y0 || -1e4;
                                if (Math.abs(this.ih.Ah.x - this.ih.Ah.x0) > 2 || Math.abs(this.ih.Ah.y - this.ih.Ah.y0) > 2) {
                                    this.ih.Ah.x0 = Math.round(this.ih.Ah.x),
                                        this.ih.Ah.y0 = Math.round(this.ih.Ah.y),
                                        _0x9f75x41.s(1, [this.ih.Ah.x0, this.ih.Ah.y0])
                                }
                            }
                        },
                        _0x9f75x7.prototype.Dh = function (_0x9f75x19, _0x9f75x6) {
                            _0x9f75x6.Eh.Uc.gd().zIndex = (_0x9f75x19 + 2147483648) / 4294967296 * 5e3,
                                this.dh.addChild(_0x9f75x6.Eh.Vc.gd()),
                                this.eh.addChild(_0x9f75x6.Eh.Uc.gd())
                        },
                        _0x9f75x7.prototype.Fh = function (_0x9f75x19, _0x9f75xd, _0x9f75x3) {
                            _0x9f75xd.Fc.zIndex = _0x9f75x6.L.uh.yh.Pg ? 0 : 10 + (_0x9f75x19 + 32768) / 65536 * 5e3,
                                this.fh.addChild(_0x9f75xd.Fc),
                                _0x9f75x19 !== _0x9f75x6.L.uh.yh.Pg && this.hh.addChild(_0x9f75x3)
                        };
                    var _0x9f75x1e = function () {
                            return _0x9f75xd.X(_0x9f75x3.e.f, function () {
                                _0x9f75x3.e.f.call(this),
                                    this.Bh = 40,
                                    this.Gh = new _0x9f75x3.e.m,
                                    this.Gh.anchor.set(0.5),
                                    this.Ah = new _0x9f75x3.e.j,
                                    this.Zf = new _0x9f75x3.e.j;
                                var _0x9f75x19 = new _0x9f75x3.e.j;
                                this.zClock = new PIXI.Sprite.fromImage(zUrl + '/images/Clock.PNG');
                                _0x9f75x19.beginFill('black', 0.4),
                                    _0x9f75x19.drawCircle(0, 0, this.Bh),
                                    _0x9f75x19.endFill(),
                                    _0x9f75x19.lineStyle(2, 16225317),
                                    _0x9f75x19.drawCircle(0, 0, this.Bh),
                                    _0x9f75x19.moveTo(0, -this.Bh),
                                    _0x9f75x19.lineTo(0, +this.Bh),
                                    _0x9f75x19.moveTo(-this.Bh, 0),
                                    _0x9f75x19.lineTo(+this.Bh, 0),
                                    _0x9f75x19.endFill(),
                                    this.Gh.alpha = 0.5,
                                    this.Ah.zIndex = 2,
                                    this.Ah.alpha = 0.9,
                                    this.Ah.beginFill(16225317),
                                    this.Ah.drawCircle(0, 0, 0.06 * this.Bh),
                                    this.Ah.endFill(),
                                    this.Ah.lineStyle(1, 'black'),
                                    this.Ah.drawCircle(0, 0, 0.06 * this.Bh),
                                    this.Ah.endFill(),
                                    this.Zf.zIndex = 3,
                                    this.Zf.alpha = 0.9,
                                    this.Zf.beginFill(1811741),
                                    this.Zf.drawCircle(0, 0, 0.06 * this.Bh),
                                    this.Zf.endFill(),
                                    this.Zf.lineStyle(1, 'black'),
                                    this.Zf.drawCircle(0, 0, 0.06 * this.Bh),
                                    this.Zf.endFill(),
                                    this.addChild(_0x9f75x19),
                                    this.addChild(this.Gh),
                                    this.addChild(this.Ah),
                                    this.addChild(this.Zf),
                                    this.zClock.width = 100,
                                    this.zClock.height = 100,
                                    this.zClock.x = -50,
                                    this.zClock.y = -50,
                                    this.zClock.zIndex = 10,
                                    this.addChild(this.zClock);
                                window._x7 = this;
                                const _0x9f75x6 = new PIXI.TextStyle({
                                    align: 'center',
                                    fill: '#f4d100',
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    lineJoin: 'round',
                                    whiteSpace: 'normal',
                                    wordWrap: !0
                                });
                                const _0x9f75xb = new PIXI.TextStyle({
                                    align: 'center',
                                    fill: '#ed563f',
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    lineJoin: 'round',
                                    whiteSpace: 'normal',
                                    wordWrap: !0
                                });
                                this.container_count = new PIXI.Container,
                                    this.container_count.x = -45,
                                    this.container_count.y = -52,
                                    this.hsLabel = new PIXI.Text('HS', _0x9f75xb),
                                    this.hsLabel.anchor.set(0.5),
                                    this.klLabel = new PIXI.Text('KILL', _0x9f75x6),
                                    this.klLabel.anchor.set(0.5),
                                    this.gHsVal = new PIXI.Text('0', _0x9f75xb),
                                    this.gHsVal.anchor.set(0.5),
                                    this.tHsVal = new PIXI.Text('0', _0x9f75xb),
                                    this.tHsVal.anchor.set(0.5),
                                    this.gKlVal = new PIXI.Text('0', _0x9f75x6),
                                    this.gKlVal.anchor.set(0.5),
                                    this.tKlVal = new PIXI.Text('0', _0x9f75x6),
                                    this.tKlVal.anchor.set(0.5);
                                this.hsLabel.x = 22,
                                    this.hsLabel.y = 116,
                                    this.klLabel.x = 67,
                                    this.klLabel.y = 116,
                                    this.gHsVal.x = 22,
                                    this.gHsVal.y = 131,
                                    this.gKlVal.x = 67,
                                    this.gKlVal.y = 131,
                                    this.tHsVal.x = 22,
                                    this.tHsVal.y = 151,
                                    this.tKlVal.x = 67,
                                    this.tKlVal.y = 151;
                                !0 || (this.tHsVal.alpha = 0,
                                    this.tKlVal.alpha = 0);
                                this.container_count.addChild(this.hsLabel);
                                this.container_count.addChild(this.gHsVal);
                                this.container_count.addChild(this.tHsVal);
                                this.container_count.addChild(this.klLabel);
                                this.container_count.addChild(this.gKlVal);
                                this.container_count.addChild(this.tKlVal);
                                this.addChild(this.container_count);
                                this.b2 = new PIXI.Graphics();
                                this.b2.lineStyle(2, 0xCD7B25);
                                this.b2.drawRoundedRect(-5, 106, 100, 56, 10);
                                this.container_count.addChild(this.b2);
                                this.b3 = new PIXI.Graphics();
                                this.b3.lineStyle(2, 0xCD7B25);
                                this.b3.drawRect(-4, 141, 196, 0);
                                this.container_count.addChild(this.b3);
                                this.headshots_container = new PIXI.Container,
                                    this.headshots_container.x = -50,
                                    this.headshots_container.y = 120;
                                const _0x9f75x3d = new PIXI.TextStyle({
                                    align: 'left',
                                    fill: '#ed563f',
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    lineJoin: 'round',
                                    whiteSpace: 'normal',
                                    wordWrap: !1
                                });
                                this.topHS = new PIXI.Text('Top (headShots):', _0x9f75x3d),
                                    this.topHS.x = 0,
                                    this.topHS.y = 0,
                                    this.addChild(this.headshots_container),
                                    this.headshots_container.addChild(this.topHS);
                                this.topHSPlayers = [];
                                this.killMessages = [];
                                for (let _0x9f75x27 = 1; _0x9f75x27 < 6; _0x9f75x27++) {
                                    let _0x9f75x19 = {};
                                    _0x9f75x19.ig = new _0x9f75x3.e.n(_0x9f75x27, {
                                            fontFamily: 'PTSans',
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            fill: 'white'
                                        }),
                                        _0x9f75x19.ig.anchor.x = 1,
                                        _0x9f75x19.ig.position.x = 0,
                                        _0x9f75x19.ig.position.y = 20 * _0x9f75x27,
                                        this.headshots_container.addChild(_0x9f75x19.ig),
                                        _0x9f75x19.jg = new _0x9f75x3.e.n('--', {
                                            fontFamily: 'PTSans',
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            fill: 'white'
                                        }),
                                        _0x9f75x19.jg.anchor.x = 0,
                                        _0x9f75x19.jg.position.x = 5,
                                        _0x9f75x19.jg.position.y = 20 * _0x9f75x27,
                                        this.headshots_container.addChild(_0x9f75x19.jg),
                                        _0x9f75x19.kg = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 11,
                                            fontWeight: 'bold',
                                            fill: 'white'
                                        }),
                                        _0x9f75x19.kg.anchor.x = 1,
                                        _0x9f75x19.kg.position.x = 110,
                                        _0x9f75x19.kg.position.y = 20 * _0x9f75x27,
                                        this.headshots_container.addChild(_0x9f75x19.kg);
                                    this.topHSPlayers.push(_0x9f75x19)
                                };
                                for (let _0x9f75x27 = 1; _0x9f75x27 < 11; _0x9f75x27++) {
                                    let _0x9f75x19 = {};
                                    _0x9f75x19.ig = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                            fill: 'green'
                                        }),
                                        _0x9f75x19.ig.anchor.x = 0,
                                        _0x9f75x19.ig.position.x = -10,
                                        _0x9f75x19.ig.position.y = 65 + _0x9f75x27 * 55,
                                        this.headshots_container.addChild(_0x9f75x19.ig),
                                        _0x9f75x19.jg = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                            fill: '#c10000'
                                        }),
                                        _0x9f75x19.jg.anchor.x = 0,
                                        _0x9f75x19.jg.position.x = 8,
                                        _0x9f75x19.jg.position.y = 80 + _0x9f75x27 * 55,
                                        this.headshots_container.addChild(_0x9f75x19.jg);
                                    _0x9f75x19.kg = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 12,
                                            fontWeight: 'bold',
                                            fill: 'white'
                                        }),
                                        _0x9f75x19.kg.anchor.x = 0,
                                        _0x9f75x19.kg.position.x = 8,
                                        _0x9f75x19.kg.position.y = 95 + _0x9f75x27 * 55,
                                        this.headshots_container.addChild(_0x9f75x19.kg);
                                    this.killMessages.push(_0x9f75x19)
                                }
                            })
                        }(),
                        _0x9f75x15 = function () {
                            var _0x9f75x19 = _0x9f75xd.X(_0x9f75x3.e.f, function () {
                                    _0x9f75x3.e.f.call(this),
                                        this.Hh = {}
                                }),
                                _0x9f75x32 = [30, 30, 30, 80, 40, 20, 30];
                            _0x9f75x19.prototype.Ch = function (_0x9f75x19) {
                                    var _0x9f75xd = 0.5 + 0.5 * Math.cos(_0x9f75x6.M * (_0x9f75x19 / 1e3 / 1.6));
                                    for (var _0x9f75x3 in this.Hh) {
                                        var _0x9f75x7 = this.Hh[_0x9f75x3],
                                            _0x9f75x4 = _0x9f75x7.Ih;
                                        _0x9f75x7.alpha = 1 - _0x9f75x4 + _0x9f75x4 * _0x9f75xd
                                    }
                                },
                                _0x9f75x19.prototype.jg = function (_0x9f75x19) {
                                    for (var _0x9f75xd in this.Hh) {
                                        null != _0x9f75x19[_0x9f75xd] && _0x9f75x19[_0x9f75xd].zd || (_0x9f75x3.e.w.z(this.Hh[_0x9f75xd]),
                                            delete this.Hh[_0x9f75xd])
                                    };
                                    var _0x9f75x4 = 0;
                                    for (var _0x9f75x1e in _0x9f75x19) {
                                        var _0x9f75x15 = _0x9f75x19[_0x9f75x1e];
                                        if (_0x9f75x15.zd) {
                                            var _0x9f75x1f = this.Hh[_0x9f75x1e];
                                            if (!_0x9f75x1f) {
                                                var _0x9f75x20 = _0x9f75x6.L.bd.jc().Hb(_0x9f75x15.Ed).Mb;
                                                _0x9f75x1f = new _0x9f75x7,
                                                    _0x9f75x1f.texture = _0x9f75x20.Wa(),
                                                    _0x9f75x1f.width = 40,
                                                    _0x9f75x1f.height = 40,
                                                    this.Hh[_0x9f75x1e] = _0x9f75x1f,
                                                    this.addChild(_0x9f75x1f);
                                                _0x9f75x1f.tc = new PIXI.Text('88', _0x9f75x20.zt),
                                                    _0x9f75x1f.tc.anchor.set(0.5),
                                                    _0x9f75x1f.tc.y = 74,
                                                    _0x9f75x1f.tc.x = 32,
                                                    _0x9f75x1f.addChild(_0x9f75x1f.tc)
                                            };
                                            _0x9f75x1f.Ih = _0x9f75x15.Fd,
                                                _0x9f75x1f.tc.text = Math.floor(_0x9f75x32[_0x9f75x1e] / 99 * (99 - _0x9f75x15.g)),
                                                _0x9f75x1f.position.x = (Z.locals.streamer ? Z.positions.m : 0) + _0x9f75x4,
                                                _0x9f75x4 += 40
                                        }
                                    }
                                };
                            var _0x9f75x7 = function () {
                                return _0x9f75xd.X(_0x9f75x3.e.m, function () {
                                    _0x9f75x3.e.m.call(this),
                                        this.Ih = 0
                                })
                            }();
                            return _0x9f75x19
                        }(),
                        _0x9f75x1f = function () {
                            var _0x9f75x7 = _0x9f75xd.X(_0x9f75x3.e.f, function () {
                                _0x9f75x3.e.f.call(this),
                                    this.sh = !0,
                                    this.Jh = 12,
                                    this.Kh = 9,
                                    this.Ag = [];
                                for (var _0x9f75x19 = 0; _0x9f75x19 < 14; _0x9f75x19++) {
                                    this.Lh()
                                }
                            });
                            _0x9f75x7.prototype.jg = function (_0x9f75x7) {
                                    var _0x9f75x4 = _0x9f75x6.L.uh.yh.Og === _0x9f75x19.Sc.Rc,
                                        _0x9f75x1e = 0,
                                        _0x9f75x15 = 0;
                                    _0x9f75x15 >= this.Ag.length && this.Lh(),
                                        this.Ag[_0x9f75x15].Mh(1, 'white'),
                                        this.Ag[_0x9f75x15].Nh('', _0x9f75xd.O('index.game.leader.top10'), '(' ['concat'](_0x9f75x6.L.uh.Oh, ' online)')),
                                        this.Ag[_0x9f75x15].position.y = _0x9f75x1e,
                                        _0x9f75x1e += this.Jh,
                                        _0x9f75x15 += 1,
                                        _0x9f75x7.Ph.length > 0 && (_0x9f75x1e += this.Kh);
                                    for (var _0x9f75x1f = 0; _0x9f75x1f < _0x9f75x7.Ph.length; _0x9f75x1f++) {
                                        var _0x9f75x20 = _0x9f75x7.Ph[_0x9f75x1f],
                                            _0x9f75x21 = _0x9f75x6.L.bd.jc().Bb(_0x9f75x20.Qh),
                                            _0x9f75xb = '',
                                            _0x9f75x9 = _0x9f75x6.L.bd.nc().textDict[_0x9f75x21.Ib];
                                        null != _0x9f75x9 && (_0x9f75xb = _0x9f75xd.P(_0x9f75x9)),
                                            _0x9f75x15 >= this.Ag.length && this.Lh(),
                                            this.Ag[_0x9f75x15].Mh(0.8, _0x9f75x21.Jb.Lb),
                                            this.Ag[_0x9f75x15].Nh('' ['concat'](_0x9f75x1f + 1), _0x9f75xb, '' ['concat'](Math.floor(_0x9f75x20.Rh))),
                                            this.Ag[_0x9f75x15].position.y = _0x9f75x1e,
                                            _0x9f75x1e += this.Jh,
                                            _0x9f75x15 += 1
                                    };
                                    _0x9f75x7.Sh.length > 0 && (_0x9f75x1e += this.Kh);
                                    for (var _0x9f75x22 = 0; _0x9f75x22 < _0x9f75x7.Sh.length; _0x9f75x22++) {
                                        var _0x9f75x23 = _0x9f75x7.Sh[_0x9f75x22],
                                            _0x9f75x24 = _0x9f75x6.L.uh.yh.Pg === _0x9f75x23.Th,
                                            _0x9f75x25 = void(0),
                                            _0x9f75x5 = void(0);
                                        if (_0x9f75x24) {
                                            _0x9f75x25 = 'white',
                                                _0x9f75x5 = _0x9f75x6.L.uh.th.Uh.Ea
                                        } else {
                                            var _0x9f75x26 = _0x9f75x6.L.uh.Vh[_0x9f75x23.Th];
                                            null != _0x9f75x26 ? (_0x9f75x25 = _0x9f75x4 ? _0x9f75x6.L.bd.jc().Bb(_0x9f75x26.Uh.Wh).Jb.Lb : _0x9f75x6.L.bd.jc().Ab(_0x9f75x26.Uh.Xh).Lb,
                                                _0x9f75x5 = this.sh ? _0x9f75x26.Uh.Ea : '---') : (_0x9f75x25 = 'gray',
                                                _0x9f75x5 = '?')
                                        };
                                        _0x9f75x24 && (_0x9f75x1e += this.Kh),
                                            _0x9f75x15 >= this.Ag.length && this.Lh(),
                                            this.Ag[_0x9f75x15].Mh(_0x9f75x24 ? 1 : 0.8, _0x9f75x25),
                                            this.Ag[_0x9f75x15].Nh('' ['concat'](_0x9f75x22 + 1), _0x9f75x5, '' ['concat'](Math.floor(_0x9f75x23.Rh))),
                                            this.Ag[_0x9f75x15].position.y = _0x9f75x1e,
                                            _0x9f75x1e += this.Jh,
                                            _0x9f75x15 += 1,
                                            _0x9f75x24 && (_0x9f75x1e += this.Kh)
                                    };
                                    for (_0x9f75x6.L.uh.Yh > _0x9f75x7.Sh.length && (_0x9f75x1e += this.Kh,
                                            _0x9f75x15 >= this.Ag.length && this.Lh(),
                                            this.Ag[_0x9f75x15].Mh(1, 'white'),
                                            this.Ag[_0x9f75x15].Nh('' ['concat'](_0x9f75x6.L.uh.Yh), _0x9f75x6.L.uh.th.Uh.Ea, '' ['concat'](Math.floor(_0x9f75x6.L.uh.th.Rh))),
                                            this.Ag[_0x9f75x15].position.y = _0x9f75x1e,
                                            _0x9f75x1e += this.Jh,
                                            _0x9f75x15 += 1,
                                            _0x9f75x1e += this.Kh); this.Ag.length > _0x9f75x15;) {
                                        _0x9f75x3.e.w.z(this.Ag.pop())
                                    }
                                },
                                _0x9f75x7.prototype.Lh = function () {
                                    var _0x9f75x19 = new _0x9f75x4;
                                    _0x9f75x19.position.y = 0,
                                        this.Ag.length > 0 && (_0x9f75x19.position.y = this.Ag[this.Ag.length - 1].position.y + this.Jh),
                                        this.Ag.push(_0x9f75x19),
                                        this.addChild(_0x9f75x19)
                                };
                            var _0x9f75x4 = function () {
                                var _0x9f75x19 = _0x9f75xd.X(_0x9f75x3.e.f, function () {
                                    _0x9f75x3.e.f.call(this),
                                        this.Zh = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 12,
                                            fill: 'white'
                                        }),
                                        this.Zh.anchor.x = 1,
                                        this.Zh.position.x = 30,
                                        this.addChild(this.Zh),
                                        this.$h = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 12,
                                            fill: 'white'
                                        }),
                                        this.$h.anchor.x = 0,
                                        this.$h.position.x = 35,
                                        this.addChild(this.$h),
                                        this._h = new _0x9f75x3.e.n('', {
                                            fontFamily: 'PTSans',
                                            fontSize: 12,
                                            fill: 'white'
                                        }),
                                        this._h.anchor.x = 1,
                                        this._h.position.x = 220,
                                        this.addChild(this._h)
                                });
                                return _0x9f75x19.prototype.Nh = function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                                        this.Zh.text = _0x9f75x19,
                                            this._h.text = _0x9f75x3;
                                        var _0x9f75x7 = _0x9f75x6;
                                        for (this.$h.text = _0x9f75x7; this.$h.width > 100;) {
                                            _0x9f75x7 = _0x9f75x7.substring(0, _0x9f75x7.length - 1),
                                                this.$h.text = _0x9f75x7 + '..'
                                        }
                                    },
                                    _0x9f75x19.prototype.Mh = function (_0x9f75x19, _0x9f75x6) {
                                        this.Zh.alpha = _0x9f75x19,
                                            this.Zh.style.fill = _0x9f75x6,
                                            this.$h.alpha = _0x9f75x19,
                                            this.$h.style.fill = _0x9f75x6,
                                            this._h.alpha = _0x9f75x19,
                                            this._h.style.fill = _0x9f75x6
                                    },
                                    _0x9f75x19
                            }();
                            return _0x9f75x7
                        }();
                    return _0x9f75x7
                }(),
                _0x9f75x19.ai = function () {
                    function _0x9f75x3(_0x9f75x19) {
                        this.uh = _0x9f75x19,
                            this.bi = [],
                            this.ci = 0
                    }
                    _0x9f75x3.prototype.di = function (_0x9f75x6) {
                            this.bi.push(new _0x9f75x19.oa(new _0x9f75x19.na(_0x9f75x6)))
                        },
                        _0x9f75x3.prototype.ei = function () {
                            this.bi = [],
                                this.ci = 0
                        },
                        _0x9f75x3.prototype.fi = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < 10; _0x9f75x19++) {
                                if (0 === this.bi.length) {
                                    return
                                };
                                var _0x9f75x6 = this.bi.shift();
                                try {
                                    this.gi(_0x9f75x6)
                                } catch (_0x9f75x19) {
                                    throw _0x9f75x19
                                }
                            }
                        },
                        _0x9f75x3.prototype.gi = function (_0x9f75x19) {
                            switch (255 & _0x9f75x19.ra(0)) {
                            case 0:
                                return void(this.hi(_0x9f75x19));
                            case 1:
                                return void(this.ii(_0x9f75x19));
                            case 2:
                                return void(this.ji(_0x9f75x19));
                            case 3:
                                return void(this.ki(_0x9f75x19));
                            case 4:
                                return void(this.li(_0x9f75x19));
                            case 5:
                                return void(this.mi(_0x9f75x19))
                            }
                        },
                        _0x9f75x3.prototype.hi = function (_0x9f75x19) {
                            this.uh.yh.Og = _0x9f75x19.ra();
                            var _0x9f75xd = _0x9f75x19.sa();
                            this.uh.yh.Pg = _0x9f75xd,
                                this.uh.th.Uh.re = _0x9f75xd,
                                this.uh.yh.Qg = _0x9f75x19.ua(),
                                this.uh.yh.Rg = _0x9f75x19.ua(),
                                this.uh.yh.Sg = _0x9f75x19.ua(),
                                _0x9f75x6.L.Fg.sf.Eg.jg(this.uh.yh, _0x9f75x6.L.Fg.oi.ni())
                        },
                        _0x9f75x3.prototype.ii = function (_0x9f75x19) {
                            var _0x9f75x6, _0x9f75xd = this.ci++,
                                _0x9f75x3 = _0x9f75x19.sa();
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x7 = 0; _0x9f75x7 < _0x9f75x6; _0x9f75x7++) {
                                this.qi(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x6; _0x9f75x4++) {
                                this.ri(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x1e = 0; _0x9f75x1e < _0x9f75x6; _0x9f75x1e++) {
                                this.si(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x15 = 0; _0x9f75x15 < _0x9f75x6; _0x9f75x15++) {
                                this.ti(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x1f = 0; _0x9f75x1f < _0x9f75x6; _0x9f75x1f++) {
                                this.vi(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x20 = 0; _0x9f75x20 < _0x9f75x6; _0x9f75x20++) {
                                this.wi(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75x21 = 0; _0x9f75x21 < _0x9f75x6; _0x9f75x21++) {
                                this.xi(_0x9f75x19)
                            };
                            _0x9f75x6 = this.pi(_0x9f75x19);
                            for (var _0x9f75xb = 0; _0x9f75xb < _0x9f75x6; _0x9f75xb++) {
                                this.yi(_0x9f75x19)
                            };
                            _0x9f75xd > 0 && this.zi(_0x9f75x19),
                                this.uh.Ai(_0x9f75xd, _0x9f75x3)
                        },
                        _0x9f75x3.prototype.ti = function (_0x9f75x3) {
                            var _0x9f75x7 = new _0x9f75x19.Ci.Bi;
                            _0x9f75x7.re = _0x9f75x3.sa(),
                                _0x9f75x7.Wh = this.uh.yh.Og === _0x9f75x19.Sc.Rc ? _0x9f75x3.ra() : _0x9f75x19.Ng.Tg,
                                _0x9f75x7.Xh = _0x9f75x3.sa(),
                                _0x9f75x7.Di = _0x9f75x3.sa(),
                                _0x9f75x7.Ei = _0x9f75x3.sa(),
                                _0x9f75x7.Fi = _0x9f75x3.sa(),
                                _0x9f75x7.Gi = _0x9f75x3.sa();
                            for (var _0x9f75x4 = _0x9f75x3.ra(), _0x9f75x1e = '', _0x9f75x15 = 0; _0x9f75x15 < _0x9f75x4; _0x9f75x15++) {
                                _0x9f75x1e += String.fromCharCode(_0x9f75x3.sa())
                            };
                            if (_0x9f75x7.Ea = _0x9f75x1e,
                                this.uh.yh.Pg === _0x9f75x7.re) {
                                this.uh.th.Hi(_0x9f75x7)
                            } else {
                                var _0x9f75x1f = this.uh.Vh[_0x9f75x7.re];
                                null != _0x9f75x1f && _0x9f75x1f.Ii();
                                var _0x9f75x20 = new _0x9f75x19.Ci(this.uh.yh);
                                _0x9f75x20.Ji(_0x9f75x6.L.Fg.sf.Eg),
                                    this.uh.Vh[_0x9f75x7.re] = _0x9f75x20,
                                    _0x9f75x20.Hi(_0x9f75x7)
                            }
                        },
                        _0x9f75x3.prototype.vi = function (_0x9f75x19) {
                            var _0x9f75x3 = _0x9f75x19.sa(),
                                _0x9f75x7 = _0x9f75x19.ra(),
                                _0x9f75x4 = !!(1 & _0x9f75x7),
                                _0x9f75x1e = !!(2 & _0x9f75x7),
                                _0x9f75x15 = 0;
                            _0x9f75x4 && (_0x9f75x15 = _0x9f75x19.sa());
                            var _0x9f75x1f = this.Ki(_0x9f75x3);
                            if (_typeof(_0x9f75x1f) !== 'undefined' && (_0x9f75x1f.Li = !1,
                                    _0x9f75x1f.Mi)) {
                                var _0x9f75x20 = this.Ki(_0x9f75x3);
                                if (_0x9f75x4 && _typeof(_0x9f75x20) !== 'undefined' && _0x9f75x20.Mi) {
                                    if (_0x9f75x15 === this.uh.yh.Pg) {
                                        var _0x9f75x21 = this.uh.th.wh(),
                                            _0x9f75xb = _0x9f75x1f.Ni(_0x9f75x21.Ia, _0x9f75x21.Ja);
                                        Math.max(0, 1 - _0x9f75xb.Oi / (0.5 * this.uh.vh));
                                        _0x9f75xb.Oi < 0.5 * this.uh.vh && _0x9f75x6.L.Fg.sf.Eg.lh.Dg(_0x9f75x1e, _0x9f75x1f)
                                    } else {
                                        if (_0x9f75x3 === this.uh.yh.Pg) {
                                            ;
                                        } else {
                                            var _0x9f75x9 = this.uh.th.wh(),
                                                _0x9f75x22 = _0x9f75x1f.Ni(_0x9f75x9.Ia, _0x9f75x9.Ja);
                                            Math.max(0, 1 - _0x9f75x22.Oi / (0.5 * this.uh.vh))
                                        }
                                    }
                                } else {
                                    if (_0x9f75x3 === this.uh.yh.Pg) {
                                        ;
                                    } else {
                                        var _0x9f75x23 = this.uh.th.wh(),
                                            _0x9f75x24 = _0x9f75x1f.Ni(_0x9f75x23.Ia, _0x9f75x23.Ja);
                                        Math.max(0, 1 - _0x9f75x24.Oi / (0.5 * this.uh.vh))
                                    }
                                }
                            }
                        },
                        _0x9f75x3.prototype.yi = function (_0x9f75xd) {
                            var _0x9f75x3 = _0x9f75xd.sa(),
                                _0x9f75x7 = _0x9f75x3 === this.uh.yh.Pg ? null : this.uh.Vh[_0x9f75x3],
                                _0x9f75x4 = _0x9f75xd.ra(),
                                _0x9f75x1e = !!(1 & _0x9f75x4);
                            if (!!(2 & _0x9f75x4)) {
                                var _0x9f75x15 = _0x9f75xd.ua();
                                _0x9f75x7 && _0x9f75x7.Pi(_0x9f75x15)
                            };
                            var _0x9f75x1f = this.Qi(_0x9f75xd.ra(), _0x9f75xd.ra(), _0x9f75xd.ra()),
                                _0x9f75x20 = this.Qi(_0x9f75xd.ra(), _0x9f75xd.ra(), _0x9f75xd.ra());
                            if (_0x9f75x7) {
                                _0x9f75x7.Ri(_0x9f75x1f, _0x9f75x20, _0x9f75x1e);
                                var _0x9f75x21 = this.uh.th.wh(),
                                    _0x9f75xb = _0x9f75x7.wh(),
                                    _0x9f75x9 = Math.max(0, 1 - Math.hypot(_0x9f75x21.Ia - _0x9f75xb.Ia, _0x9f75x21.Ja - _0x9f75xb.Ja) / (0.5 * this.uh.vh));
                                _0x9f75x6.L.Si.nf(_0x9f75x9, _0x9f75x3, _0x9f75x1e)
                            };
                            var _0x9f75x22 = this.pi(_0x9f75xd);
                            if (_0x9f75x7) {
                                for (var _0x9f75x23 in _0x9f75x7.vd) {
                                    var _0x9f75x24 = _0x9f75x7.vd[_0x9f75x23];
                                    _0x9f75x24 && (_0x9f75x24.zd = !1)
                                }
                            };
                            for (var _0x9f75x25 = 0; _0x9f75x25 < _0x9f75x22; _0x9f75x25++) {
                                var _0x9f75x5 = _0x9f75xd.ra(),
                                    _0x9f75x26 = _0x9f75xd.ra();
                                if (_0x9f75x7) {
                                    var _0x9f75x27 = _0x9f75x7.vd[_0x9f75x5];
                                    _0x9f75x27 || (_0x9f75x27 = _0x9f75x7.vd[_0x9f75x5] = new _0x9f75x19.xd(_0x9f75x5)),
                                        _0x9f75x27.zd = !0,
                                        _0x9f75x27.Fd = Math.min(1, Math.max(0, _0x9f75x26 / 100))
                                }
                            }
                        },
                        _0x9f75x3.prototype.zi = function (_0x9f75xd) {
                            var _0x9f75x3 = this.uh.th,
                                _0x9f75x7 = _0x9f75xd.ra(),
                                _0x9f75x4 = !!(1 & _0x9f75x7),
                                _0x9f75x1e = !!(2 & _0x9f75x7),
                                _0x9f75x15 = !!(4 & _0x9f75x7);
                            if (_0x9f75x1e) {
                                var _0x9f75x1f = _0x9f75x3.Rh;
                                _0x9f75x3.Pi(_0x9f75xd.ua()),
                                    _0x9f75x1f = _0x9f75x3.Rh - _0x9f75x1f,
                                    _0x9f75x1f > 0 && _0x9f75x6.L.Fg.sf.Eg.lh.Cg(_0x9f75x1f)
                            };
                            _0x9f75x15 && (this.uh.Ti = _0x9f75xd.ua());
                            var _0x9f75x20 = this.Qi(_0x9f75xd.ra(), _0x9f75xd.ra(), _0x9f75xd.ra()),
                                _0x9f75x21 = this.Qi(_0x9f75xd.ra(), _0x9f75xd.ra(), _0x9f75xd.ra());
                            _0x9f75x3.Ri(_0x9f75x20, _0x9f75x21, _0x9f75x4),
                                _0x9f75x6.L.Si.nf(0.5, this.uh.yh.Pg, _0x9f75x4);
                            var _0x9f75xb = this.pi(_0x9f75xd);
                            for (var _0x9f75x9 in _0x9f75x3.vd) {
                                var _0x9f75x22 = _0x9f75x3.vd[_0x9f75x9];
                                _0x9f75x22 && (_0x9f75x22.zd = !1)
                            };
                            for (var _0x9f75x23 = 0; _0x9f75x23 < _0x9f75xb; _0x9f75x23++) {
                                var _0x9f75x24 = _0x9f75xd.ra(),
                                    _0x9f75x25 = _0x9f75xd.ra(),
                                    _0x9f75x5 = _0x9f75x3.vd[_0x9f75x24];
                                _0x9f75x5 || (_0x9f75x5 = new _0x9f75x19.xd(_0x9f75x24),
                                        _0x9f75x3.vd[_0x9f75x24] = _0x9f75x5),
                                    _0x9f75x5.zd = !0,
                                    _0x9f75x5.g = _0x9f75x25,
                                    _0x9f75x5.Fd = Math.min(1, Math.max(0, _0x9f75x25 / 100))
                            };
                            _0x9f75x6.L.Fg.sf.Eg.jh.jg(_0x9f75x3.vd)
                        },
                        _0x9f75x3.prototype.wi = function (_0x9f75x19) {
                            var _0x9f75xd = this,
                                _0x9f75x3 = _0x9f75x19.sa(),
                                _0x9f75x7 = this.Ki(_0x9f75x3),
                                _0x9f75x4 = _0x9f75x19.ua(),
                                _0x9f75x1e = this.pi(_0x9f75x19);
                            if (_0x9f75x7) {
                                _0x9f75x7.Pi(_0x9f75x4),
                                    _0x9f75x7.Ui(function () {
                                        return _0x9f75xd.Qi(_0x9f75x19.ra(), _0x9f75x19.ra(), _0x9f75x19.ra())
                                    }, _0x9f75x1e),
                                    _0x9f75x7.Bd(!0);
                                var _0x9f75x15 = this.uh.th.wh(),
                                    _0x9f75x1f = _0x9f75x7.wh(),
                                    _0x9f75x20 = Math.max(0, 1 - Math.hypot(_0x9f75x15.Ia - _0x9f75x1f.Ia, _0x9f75x15.Ja - _0x9f75x1f.Ja) / (0.5 * this.uh.vh));
                                _0x9f75x6.L.Si.lf(_0x9f75x20, _0x9f75x3)
                            } else {
                                for (var _0x9f75x21 = 0; _0x9f75x21 < 6 * _0x9f75x1e; _0x9f75x21++) {
                                    _0x9f75x19.ra()
                                }
                            }
                        },
                        _0x9f75x3.prototype.xi = function (_0x9f75x19) {
                            var _0x9f75xd = _0x9f75x19.sa(),
                                _0x9f75x3 = this.uh.Vh[_0x9f75xd];
                            _0x9f75x3 && _0x9f75x3.Li && _0x9f75x3.Bd(!1),
                                _0x9f75x6.L.Si.mf(_0x9f75xd)
                        },
                        _0x9f75x3.prototype.qi = function (_0x9f75xd) {
                            var _0x9f75x3 = new _0x9f75x19.Vi.Bi;
                            _0x9f75x3.re = _0x9f75xd.ta(),
                                _0x9f75x3.Wh = this.uh.yh.Og === _0x9f75x19.Sc.Rc ? _0x9f75xd.ra() : _0x9f75x19.Ng.Tg,
                                _0x9f75x3.Wi = this.Qi(_0x9f75xd.ra(), _0x9f75xd.ra(), _0x9f75xd.ra()),
                                _0x9f75x3.Xh = _0x9f75xd.ra();
                            var _0x9f75x7 = this.uh.Xi[_0x9f75x3.re];
                            null != _0x9f75x7 && _0x9f75x7.Ii();
                            var _0x9f75x4 = new _0x9f75x19.Vi(_0x9f75x3, _0x9f75x6.L.Fg.sf.Eg);
                            _0x9f75x4.Yi(this.Zi(_0x9f75x3.re), this.$i(_0x9f75x3.re), !0),
                                this.uh.Xi[_0x9f75x3.re] = _0x9f75x4
                        },
                        _0x9f75x3.prototype.ri = function (_0x9f75x19) {
                            var _0x9f75x6 = _0x9f75x19.ta(),
                                _0x9f75xd = this.uh.Xi[_0x9f75x6];
                            _0x9f75xd && (_0x9f75xd._i = 0,
                                _0x9f75xd.aj = 1.5 * _0x9f75xd.aj,
                                _0x9f75xd.bj = !0)
                        },
                        _0x9f75x3.prototype.si = function (_0x9f75x19) {
                            var _0x9f75x6 = _0x9f75x19.ta(),
                                _0x9f75xd = _0x9f75x19.sa(),
                                _0x9f75x3 = this.uh.Xi[_0x9f75x6];
                            if (_0x9f75x3) {
                                _0x9f75x3._i = 0,
                                    _0x9f75x3.aj = 0.1 * _0x9f75x3.aj,
                                    _0x9f75x3.bj = !0;
                                var _0x9f75x7 = this.Ki(_0x9f75xd);
                                if (_0x9f75x7 && _0x9f75x7.Mi) {
                                    var _0x9f75x4 = (this.uh.yh.Pg,
                                        _0x9f75x7.wh());
                                    _0x9f75x3.Yi(_0x9f75x4.Ia, _0x9f75x4.Ja, !1)
                                }
                            }
                        };
                    var _0x9f75x7 = [34, 29, 26, 24, 22, 20, 18, 17, 15, 14, 13, 12, 11, 10, 9, 8, 8, 7, 6, 6, 5, 5, 4, 4, 3, 3, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 8, 8, 9, 10, 11, 12, 13, 14, 15, 17, 18, 20, 22, 24, 26, 29, 34];
                    return _0x9f75x3.prototype.ji = function (_0x9f75x19) {
                            for (var _0x9f75xd = _0x9f75x6.L.bd.pc().Xb, _0x9f75x3 = _0x9f75xd.getImageData(0, 0, 80, 80), _0x9f75x4 = _0x9f75x7[0], _0x9f75x1e = 80 - _0x9f75x4, _0x9f75x15 = 0, _0x9f75x1f = 0; _0x9f75x1f < 628; _0x9f75x1f++) {
                                for (var _0x9f75x20 = _0x9f75x19.ra(), _0x9f75x21 = 0; _0x9f75x21 < 8; _0x9f75x21++) {
                                    var _0x9f75xb = 0 != (_0x9f75x20 >> _0x9f75x21 & 1),
                                        _0x9f75x9 = 4 * (_0x9f75x4 + 80 * _0x9f75x15);
                                    _0x9f75xb ? (_0x9f75x3.data[_0x9f75x9] = 255,
                                            _0x9f75x3.data[_0x9f75x9 + 1] = 255,
                                            _0x9f75x3.data[_0x9f75x9 + 2] = 255,
                                            _0x9f75x3.data[_0x9f75x9 + 3] = 255) : _0x9f75x3.data[_0x9f75x9 + 3] = 0,
                                        ++_0x9f75x4 >= _0x9f75x1e && ++_0x9f75x15 < 80 && (_0x9f75x4 = _0x9f75x7[_0x9f75x15],
                                            _0x9f75x1e = 80 - _0x9f75x4)
                                }
                            };
                            _0x9f75xd.putImageData(_0x9f75x3, 0, 0);
                            var _0x9f75x22 = _0x9f75x6.L.Fg.sf.Eg.ih.Gh;
                            _0x9f75x22.texture = _0x9f75x6.L.bd.pc().Ga,
                                _0x9f75x22.texture.update()
                        },
                        _0x9f75x3.prototype.li = function (_0x9f75x19) {
                            _0x9f75x19.ta()
                        },
                        _0x9f75x3.prototype.mi = function (_0x9f75x19) {
                            removeJoy(),
                                this.uh.cj()
                        },
                        _0x9f75x3.prototype.ki = function (_0x9f75xd) {
                            this.uh.Oh = _0x9f75xd.sa(),
                                this.uh.Yh = _0x9f75xd.sa();
                            var _0x9f75x3 = new _0x9f75x19.dj;
                            _0x9f75x3.Sh = [];
                            for (var _0x9f75x7 = _0x9f75xd.ra(), _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x7; _0x9f75x4++) {
                                var _0x9f75x1e = _0x9f75xd.sa(),
                                    _0x9f75x15 = _0x9f75xd.ua();
                                _0x9f75x3.Sh.push(_0x9f75x19.dj.ej(_0x9f75x1e, _0x9f75x15))
                            };
                            if (_0x9f75x3.Ph = [],
                                this.uh.yh.Og === _0x9f75x19.Sc.Rc) {
                                for (var _0x9f75x1f = _0x9f75xd.ra(), _0x9f75x20 = 0; _0x9f75x20 < _0x9f75x1f; _0x9f75x20++) {
                                    var _0x9f75x21 = _0x9f75xd.ra(),
                                        _0x9f75xb = _0x9f75xd.ua();
                                    _0x9f75x3.Ph.push(_0x9f75x19.dj.fj(_0x9f75x21, _0x9f75xb))
                                }
                            };
                            _0x9f75x6.L.Fg.sf.Eg.kh.jg(_0x9f75x3)
                        },
                        _0x9f75x3.prototype.Ki = function (_0x9f75x19) {
                            return _0x9f75x19 === this.uh.yh.Pg ? this.uh.th : this.uh.Vh[_0x9f75x19]
                        },
                        _0x9f75x3.prototype.Qi = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            return 1e4 * ((16777215 & (255 & _0x9f75xd | _0x9f75x6 << 8 & 65280 | _0x9f75x19 << 16 & 16711680)) / 8388608 - 1)
                        },
                        _0x9f75x3.prototype.Zi = function (_0x9f75x19) {
                            return ((65535 & _0x9f75x19) / 32768 - 1) * this.uh.yh.Ug()
                        },
                        _0x9f75x3.prototype.$i = function (_0x9f75x19) {
                            return ((_0x9f75x19 >> 16 & 65535) / 32768 - 1) * this.uh.yh.Ug()
                        },
                        _0x9f75x3.prototype.pi = function (_0x9f75x19) {
                            var _0x9f75x6 = _0x9f75x19.ra();
                            if (0 == (128 & _0x9f75x6)) {
                                return _0x9f75x6
                            };
                            var _0x9f75xd = _0x9f75x19.ra();
                            if (0 == (128 & _0x9f75xd)) {
                                return _0x9f75xd | _0x9f75x6 << 7 & 16256
                            };
                            var _0x9f75x3 = _0x9f75x19.ra();
                            if (0 == (128 & _0x9f75x3)) {
                                return _0x9f75x3 | _0x9f75xd << 7 & 16256 | _0x9f75x6 << 14 & 2080768
                            };
                            var _0x9f75x7 = _0x9f75x19.ra();
                            return 0 == (128 & _0x9f75x7) ? _0x9f75x7 | _0x9f75x3 << 7 & 16256 | _0x9f75xd << 14 & 2080768 | _0x9f75x6 << 21 & 266338304 : void(0)
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.gj = function () {
                    function _0x9f75x6(_0x9f75x19) {
                        this.hj = _0x9f75x19
                    }
                    return _0x9f75x6.ij = function () {
                            return new _0x9f75x19.gj(null)
                        },
                        _0x9f75x6.jj = function (_0x9f75x6) {
                            return new _0x9f75x19.gj(_0x9f75x6)
                        },
                        _0x9f75x6.prototype.tc = function () {
                            return this.hj
                        },
                        _0x9f75x6.prototype.kj = function () {
                            return null != this.hj
                        },
                        _0x9f75x6.prototype.lj = function (_0x9f75x19) {
                            null != this.hj && _0x9f75x19(this.hj)
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.Vi = function () {
                    function _0x9f75x3(_0x9f75xd, _0x9f75x3) {
                        this.Uh = _0x9f75xd,
                            this.mj = _0x9f75xd.Xh >= 80,
                            this.nj = 0,
                            this.oj = 0,
                            this.pj = 0,
                            this.qj = 0,
                            this.aj = this.mj ? 1 : _0x9f75xd.Wi,
                            this._i = 1,
                            this.bj = !1,
                            this.rj = 0,
                            this.sj = 0,
                            this.tj = 1,
                            this.uj = 2 * Math.PI * Math.random(),
                            this.vj = new _0x9f75x19.wj,
                            this.vj.Qc(_0x9f75x6.L.uh.yh.Og, this.Uh.Wh === _0x9f75x19.Ng.Tg ? null : _0x9f75x6.L.bd.jc().Bb(this.Uh.Wh), _0x9f75x6.L.bd.jc().Gb(this.Uh.Xh)),
                            _0x9f75x3.Dh(_0x9f75xd.re, this.vj)
                    }
                    return _0x9f75x3.prototype.Ii = function () {
                            this.vj.Eh.Vc.z(),
                                this.vj.Eh.Uc.z()
                        },
                        _0x9f75x3.prototype.Yi = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            this.nj = _0x9f75x19,
                                this.oj = _0x9f75x6,
                                _0x9f75xd && (this.pj = _0x9f75x19,
                                    this.qj = _0x9f75x6)
                        },
                        _0x9f75x3.prototype.xj = function (_0x9f75x19, _0x9f75x6) {
                            var _0x9f75x3 = Math.min(0.5, 1 * this.aj),
                                _0x9f75x7 = Math.min(2.5, 1.5 * this.aj);
                            this.rj = _0x9f75xd._(this.rj, _0x9f75x3, _0x9f75x6, 0.0025),
                                this.sj = _0x9f75xd._(this.sj, _0x9f75x7, _0x9f75x6, 0.0025),
                                this.tj = _0x9f75xd._(this.tj, this._i, _0x9f75x6, 0.0025)
                        },
                        _0x9f75x3.prototype.yj = function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                            this.pj = _0x9f75xd._(this.pj, this.nj, _0x9f75x6, 0.0025),
                                this.qj = _0x9f75xd._(this.qj, this.oj, _0x9f75x6, 0.0025),
                                this.vj.jg(this, _0x9f75x19, _0x9f75x6, _0x9f75x3)
                        },
                        _0x9f75x3.Bi = function () {
                            function _0x9f75x6() {
                                this.re = 0,
                                    this.Wh = _0x9f75x19.Ng.Tg,
                                    this.Wi = 0,
                                    this.Xh = 0
                            }
                            return _0x9f75x6
                        }(),
                        _0x9f75x3
                }(),
                _0x9f75x19.wj = function () {
                    function _0x9f75x6() {
                        this.Eh = new _0x9f75x4(new _0x9f75x19.Kc, new _0x9f75x19.Kc),
                            this.Eh.Vc.Pc.blendMode = _0x9f75x3.e.q.r,
                            this.Eh.Vc.Pc.zIndex = _0x9f75x7,
                            this.Eh.Uc.Pc.zIndex = _0x9f75xd
                    }
                    var _0x9f75xd = 500,
                        _0x9f75x7 = 100;
                    _0x9f75x6.prototype.Qc = function (_0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            var _0x9f75x7 = _0x9f75x3.Mb;
                            null != _0x9f75x7 && this.Eh.Uc.Tc(_0x9f75x7);
                            var _0x9f75x4 = _0x9f75x6 === _0x9f75x19.Sc.Rc && null != _0x9f75xd ? _0x9f75xd.Kb.Nb : _0x9f75x3.Nb;
                            null != _0x9f75x4 && this.Eh.Vc.Tc(_0x9f75x4)
                        },
                        _0x9f75x6.prototype.jg = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            if (!_0x9f75x3(_0x9f75x19.pj, _0x9f75x19.qj)) {
                                return void(this.Eh.kd())
                            };
                            var _0x9f75x7 = _0x9f75x19.sj * (1 + 0.3 * Math.cos(_0x9f75x19.uj + _0x9f75x6 / 200));
                            _0x9f75x19.mj ? this.Eh.hd(_0x9f75x19.pj, _0x9f75x19.qj, 2 * _0x9f75x19.rj, 1 * _0x9f75x19.tj, 1.2 * _0x9f75x7, 0.8 * _0x9f75x19.tj) : this.Eh.hd(_0x9f75x19.pj, _0x9f75x19.qj, 2 * _0x9f75x19.rj, 1 * _0x9f75x19.tj, 2 * _0x9f75x7, 0.3 * _0x9f75x19.tj)
                        };
                    var _0x9f75x4 = function () {
                        function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                            this.Uc = _0x9f75x19,
                                this.Vc = _0x9f75x6
                        }
                        return _0x9f75x19.prototype.hd = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7, _0x9f75x4) {
                                this.Uc.Bd(!0),
                                    this.Uc.Cd(_0x9f75x19, _0x9f75x6),
                                    this.Uc.jd(_0x9f75xd),
                                    this.Uc.zj(_0x9f75x3),
                                    this.Vc.Bd(!0),
                                    this.Vc.Cd(_0x9f75x19, _0x9f75x6),
                                    this.Vc.jd(_0x9f75x7),
                                    this.Vc.zj(_0x9f75x4)
                            },
                            _0x9f75x19.prototype.kd = function () {
                                this.Uc.Bd(!1),
                                    this.Vc.Bd(!1)
                            },
                            _0x9f75x19
                    }();
                    return _0x9f75x6
                }(),
                _0x9f75x19.Aj = function () {
                    function _0x9f75x3() {
                        this.Bj = 0,
                            this.Cj = 0,
                            this.Dj = 0,
                            this.Ej = 0,
                            this.Fj = 0,
                            this.Gj = []
                    }

                    function _0x9f75x7(_0x9f75x19, _0x9f75x6) {
                        for (var _0x9f75x3 = 0; _0x9f75x3 < _0x9f75x19.length; _0x9f75x3++) {
                            if (parseInt(_0x9f75x19[_0x9f75x3].id) === _0x9f75x6) {
                                return _0x9f75x3
                            }
                        };
                        return -1
                    }
                    return _0x9f75x3.prototype.za = function () {},
                        _0x9f75x3.prototype.Hj = function (_0x9f75x6) {
                            switch (_0x9f75x6) {
                            case _0x9f75x19.Jj.Ij:
                                return this.Bj;
                            case _0x9f75x19.Jj.Kj:
                                return this.Cj;
                            case _0x9f75x19.Jj.Lj:
                                return this.Dj;
                            case _0x9f75x19.Jj.Mj:
                                return this.Ej;
                            case _0x9f75x19.Jj.Nj:
                                return this.Fj
                            };
                            return 0
                        },
                        _0x9f75x3.prototype.Oj = function () {
                            return new _0x9f75x19.zb(this.Bj, this.Cj, this.Dj, this.Ej, this.Fj)
                        },
                        _0x9f75x3.prototype.Pj = function (_0x9f75x19) {
                            this.Gj.push(_0x9f75x19),
                                this.Qj()
                        },
                        _0x9f75x3.prototype.Rj = function () {
                            if (!_0x9f75x6.L.bd.mc()) {
                                return _0x9f75xd.ea([32, 33, 34, 35])
                            };
                            for (var _0x9f75x3 = [], _0x9f75x7 = _0x9f75x6.L.bd.nc().skinArrayDict, _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x7.length; _0x9f75x4++) {
                                var _0x9f75x1e = _0x9f75x7[_0x9f75x4];
                                this.Sj(_0x9f75x1e.id, _0x9f75x19.Jj.Ij) && _0x9f75x3.push(_0x9f75x1e)
                            };
                            return 0 === _0x9f75x3.length ? 0 : _0x9f75x3[parseInt(_0x9f75x3.length * Math.random())].id
                        },
                        _0x9f75x3.prototype.Tj = function () {
                            if (_0x9f75x6.L.bd.mc()) {
                                var _0x9f75x3 = _0x9f75x6.L.bd.nc().skinArrayDict,
                                    _0x9f75x4 = _0x9f75x7(_0x9f75x3, this.Bj);
                                if (!(_0x9f75x4 < 0)) {
                                    for (var _0x9f75x1e = _0x9f75x4 + 1; _0x9f75x1e < _0x9f75x3.length; _0x9f75x1e++) {
                                        if (this.Sj(_0x9f75x3[_0x9f75x1e].id, _0x9f75x19.Jj.Ij)) {
                                            return Z.setPId(this.Bj = _0x9f75x3[_0x9f75x1e].id, _0x9f75x19.Jj.Ij, !0),
                                                void(this.Qj())
                                        }
                                    };
                                    for (var _0x9f75x15 = 0; _0x9f75x15 < _0x9f75x4; _0x9f75x15++) {
                                        if (this.Sj(_0x9f75x3[_0x9f75x15].id, _0x9f75x19.Jj.Ij)) {
                                            return Z.setPId(this.Bj = _0x9f75x3[_0x9f75x15].id, _0x9f75x19.Jj.Ij, !0),
                                                void(this.Qj())
                                        }
                                    }
                                }
                            }
                        },
                        _0x9f75x3.prototype.Uj = function () {
                            if (_0x9f75x6.L.bd.mc) {
                                var _0x9f75x3 = _0x9f75x6.L.bd.nc().skinArrayDict,
                                    _0x9f75x4 = _0x9f75x7(_0x9f75x3, this.Bj);
                                if (!(_0x9f75x4 < 0)) {
                                    for (var _0x9f75x1e = _0x9f75x4 - 1; _0x9f75x1e >= 0; _0x9f75x1e--) {
                                        if (this.Sj(_0x9f75x3[_0x9f75x1e].id, _0x9f75x19.Jj.Ij)) {
                                            return Z.setPId(this.Bj = _0x9f75x3[_0x9f75x1e].id, _0x9f75x19.Jj.Ij, !0),
                                                void(this.Qj())
                                        }
                                    };
                                    for (var _0x9f75x15 = _0x9f75x3.length - 1; _0x9f75x15 > _0x9f75x4; _0x9f75x15--) {
                                        if (this.Sj(_0x9f75x3[_0x9f75x15].id, _0x9f75x19.Jj.Ij)) {
                                            return Z.setPId(this.Bj = _0x9f75x3[_0x9f75x15].id, _0x9f75x19.Jj.Ij, !0),
                                                void(this.Qj())
                                        }
                                    }
                                }
                            }
                        },
                        _0x9f75x3.prototype.Vj = function (_0x9f75xd, _0x9f75x3) {
                            let _0x9f75xb = !_0x9f75x6.L.bd.mc() || this.Sj(_0x9f75xd, _0x9f75x3);
                            Z.setPId(_0x9f75xd, _0x9f75x3, _0x9f75xb);
                            if (_0x9f75xb) {
                                switch (_0x9f75x3) {
                                case _0x9f75x19.Jj.Ij:
                                    return void((this.Bj !== _0x9f75xd && (this.Bj = _0x9f75xd,
                                        this.Qj())));
                                case _0x9f75x19.Jj.Kj:
                                    return void((this.Cj !== _0x9f75xd && (this.Cj = _0x9f75xd,
                                        this.Qj())));
                                case _0x9f75x19.Jj.Lj:
                                    return void((this.Dj !== _0x9f75xd && (this.Dj = _0x9f75xd,
                                        this.Qj())));
                                case _0x9f75x19.Jj.Mj:
                                    return void((this.Ej !== _0x9f75xd && (this.Ej = _0x9f75xd,
                                        this.Qj())));
                                case _0x9f75x19.Jj.Nj:
                                    return void((this.Fj !== _0x9f75xd && (this.Fj = _0x9f75xd,
                                        this.Qj())))
                                }
                            }
                        },
                        _0x9f75x3.prototype.Sj = function (_0x9f75x19, _0x9f75xd) {
                            console.log('zPList-Sj', _0x9f75x19, _0x9f75xd);
                            var _0x9f75x3 = this.Wj(_0x9f75x19, _0x9f75xd);
                            return null != _0x9f75x3 && (_0x9f75x6.L.Yj.Xj() ? 0 === _0x9f75x3.Zj() && !_0x9f75x3.$j() || _0x9f75x6.L.Yj._j(_0x9f75x19, _0x9f75xd) : _0x9f75x3.ak())
                        },
                        _0x9f75x3.prototype.Wj = function (_0x9f75x3, _0x9f75x4) {
                            if (!_0x9f75x6.L.bd.mc()) {
                                return null
                            };
                            var _0x9f75x1e = _0x9f75x6.L.bd.nc();
                            if (_0x9f75x4 === _0x9f75x19.Jj.Ij) {
                                var _0x9f75x15 = _0x9f75x7(_0x9f75x1e.skinArrayDict, _0x9f75x3);
                                return _0x9f75x15 < 0 ? null : _0x9f75x19.ck.bk(_0x9f75x1e.skinArrayDict[_0x9f75x15])
                            };
                            var _0x9f75x1f = null;
                            switch (_0x9f75x4) {
                            case _0x9f75x19.Jj.Kj:
                                _0x9f75x1f = _0x9f75x1e.eyesDict[_0x9f75x3];
                                break;
                            case _0x9f75x19.Jj.Lj:
                                _0x9f75x1f = _0x9f75x1e.mouthDict[_0x9f75x3];
                                break;
                            case _0x9f75x19.Jj.Mj:
                                _0x9f75x1f = _0x9f75x1e.hatDict[_0x9f75x3];
                                break;
                            case _0x9f75x19.Jj.Nj:
                                _0x9f75x1f = _0x9f75x1e.glassesDict[_0x9f75x3]
                            };
                            return null != _0x9f75x1f ? _0x9f75x19.ck.dk(_0x9f75x1f) : null
                        },
                        _0x9f75x3.prototype.Qj = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.Gj.length; _0x9f75x19++) {
                                this.Gj[_0x9f75x19]()
                            }
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.Jj = function () {
                    function _0x9f75x19() {}
                    return _0x9f75x19.Ij = 'SKIN',
                        _0x9f75x19.Kj = 'EYES',
                        _0x9f75x19.Lj = 'MOUTH',
                        _0x9f75x19.Nj = 'GLASSES',
                        _0x9f75x19.Mj = 'HAT',
                        _0x9f75x19
                }(),
                _0x9f75x19.ek = function () {
                    function _0x9f75x19() {
                        this.Sf = new _0x9f75x3.e.h(_0x9f75x3.e.g.from('/images/bg-obstacle.png'));
                        var _0x9f75x19 = _0x9f75x3.e.g.from(_0x9f75x6.A.H),
                            _0x9f75x7 = new _0x9f75x3.e.h(_0x9f75x19, new _0x9f75x3.e.l(0, 0, 256, 256));
                        this.Tf = new Array(12);
                        for (var _0x9f75x4 = 0; _0x9f75x4 < this.Tf.length; _0x9f75x4++) {
                            this.Tf[_0x9f75x4] = _0x9f75x7
                        };
                        this.qh = new _0x9f75x3.e.h(function () {
                                var _0x9f75x19 = _0x9f75x3.e.g.from('/images/bg-pattern-pow2-ARENA.png');
                                return _0x9f75x19.wrapMode = _0x9f75x3.e.u.v,
                                    _0x9f75x19
                            }()),
                            this.rh = new _0x9f75x3.e.h(function () {
                                var _0x9f75x19 = _0x9f75x3.e.g.from('/images/bg-pattern-pow2-TEAM2.png');
                                return _0x9f75x19.wrapMode = _0x9f75x3.e.u.v,
                                    _0x9f75x19
                            }()),
                            this.oh = new _0x9f75x3.e.h(_0x9f75x3.e.g.from('/images/lens.png')),
                            this.If = new _0x9f75x3.e.h(function () {
                                var _0x9f75x19 = _0x9f75x3.e.g.from(_0x9f75x6.A.I);
                                return _0x9f75x19.wrapMode = _0x9f75x3.e.u.v,
                                    _0x9f75x19
                            }()),
                            this.Vb = function () {
                                var _0x9f75x19 = window.document.createElement('canvas');
                                return _0x9f75x19.width = 80,
                                    _0x9f75x19.height = 80, {
                                        Wb: _0x9f75x19,
                                        Xb: _0x9f75x19.getContext('2d'),
                                        Ga: new _0x9f75x3.e.h(_0x9f75x3.e.g.from(_0x9f75x19))
                                    }
                            }(),
                            this.Re = {},
                            this.Ne = {},
                            this.fk = [],
                            this.gk = null
                    }
                    return _0x9f75x19.prototype.za = function (_0x9f75x19) {
                            function _0x9f75x6() {
                                0 == --_0x9f75xd && _0x9f75x19()
                            }
                            var _0x9f75xd = 4;
                            this.Re = {},
                                _0x9f75x6(),
                                this.Ne = {},
                                _0x9f75x6(),
                                this.fk = [],
                                _0x9f75x6(),
                                this.gk = null,
                                _0x9f75x6()
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.hk = function () {
                    function _0x9f75x6() {
                        this.ik = null,
                            this.sf = new _0x9f75x19.jk,
                            this.rf = new _0x9f75x19.kk,
                            this.lk = new _0x9f75x19.mk,
                            this.nk = new _0x9f75x19.ok,
                            this.pk = new _0x9f75x19.qk,
                            this.rk = new _0x9f75x19.sk,
                            this.tk = new _0x9f75x19.uk,
                            this.vk = new _0x9f75x19.wk,
                            this.oi = new _0x9f75x19.xk,
                            this.yk = new _0x9f75x19.zk,
                            this.Ak = new _0x9f75x19.Bk,
                            this.Ck = new _0x9f75x19.Dk,
                            this.Ek = new _0x9f75x19.Fk,
                            this.Gk = new _0x9f75x19.Hk,
                            this.ze = new _0x9f75x19.Ik,
                            this.Jk = new _0x9f75x19.Kk,
                            this.Lk = new _0x9f75x19.Mk,
                            this.Nk = new _0x9f75x19.Ok,
                            this.Pk = []
                    }

                    function _0x9f75x3(_0x9f75x19, _0x9f75x6) {
                        if (0 !== _0x9f75x6) {
                            var _0x9f75x3 = _0x9f75x19[_0x9f75x6];
                            _0x9f75xd.ca(_0x9f75x19, 0, 1, _0x9f75x6),
                                _0x9f75x19[0] = _0x9f75x3
                        }
                    }

                    function _0x9f75x7(_0x9f75x19, _0x9f75x6) {
                        if (_0x9f75x6 !== _0x9f75x19.length + 1) {
                            var _0x9f75x3 = _0x9f75x19[_0x9f75x6];
                            _0x9f75xd.ca(_0x9f75x19, _0x9f75x6 + 1, _0x9f75x6, _0x9f75x19.length - _0x9f75x6 - 1),
                                _0x9f75x19[_0x9f75x19.length - 1] = _0x9f75x3
                        }
                    }

                    function _0x9f75x4(_0x9f75x19, _0x9f75x6) {
                        for (var _0x9f75xd = 0; _0x9f75xd < _0x9f75x19.length; _0x9f75xd++) {
                            if (_0x9f75x19[_0x9f75xd] === _0x9f75x6) {
                                return _0x9f75xd
                            }
                        };
                        return -1
                    }
                    return _0x9f75x6.prototype.za = function () {
                            this.ik = new _0x9f75x19.vf(_0x9f75x19.Cf.Bf),
                                this.Pk = [this.sf, this.rf, this.lk, this.nk, this.pk, this.rk, this.tk, this.vk, this.oi, this.yk, this.Ak, this.Ck, this.Ek, this.Gk, this.ze, this.Jk, this.Lk, this.Nk];
                            for (var _0x9f75x6 = 0; _0x9f75x6 < this.Pk.length; _0x9f75x6++) {
                                this.Pk[_0x9f75x6].za()
                            }
                        },
                        _0x9f75x6.prototype.Ch = function (_0x9f75x19, _0x9f75x6) {
                            for (var _0x9f75xd = this.Pk.length - 1; _0x9f75xd >= 0; _0x9f75xd--) {
                                this.Pk[_0x9f75xd].cg(_0x9f75x19, _0x9f75x6)
                            };
                            this.Pk[0] !== this.sf && this.Pk[0] !== this.Nk && null != this.ik && this.ik.cg(_0x9f75x19, _0x9f75x6)
                        },
                        _0x9f75x6.prototype.$f = function () {
                            for (var _0x9f75x19 = this.Pk.length - 1; _0x9f75x19 >= 0; _0x9f75x19--) {
                                this.Pk[_0x9f75x19].$f()
                            };
                            null != this.ik && this.ik.$f()
                        },
                        _0x9f75x6.prototype.Qk = function (_0x9f75x19) {
                            var _0x9f75x6 = _0x9f75x4(this.Pk, _0x9f75x19);
                            if (!(_0x9f75x6 < 0)) {
                                this.Pk[0].Rk(),
                                    _0x9f75x3(this.Pk, _0x9f75x6),
                                    this.Sk()
                            }
                        },
                        _0x9f75x6.prototype.Tk = function () {
                            this.Pk[0].Rk();
                            do {
                                _0x9f75x7(this.Pk, 0)
                            } while (this.Pk[0].Ed !== _0x9f75x19.Vk.Uk);;
                            this.Sk()
                        },
                        _0x9f75x6.prototype.Sk = function () {
                            var _0x9f75x19 = this.Pk[0];
                            _0x9f75x19.Wk(),
                                _0x9f75x19.Xk(),
                                this.Yk()
                        },
                        _0x9f75x6.prototype.Zk = function () {
                            return 0 !== this.Pk.length && (this.Pk[0].Ed === _0x9f75x19.Vk.Uk && this.Gk.$k())
                        },
                        _0x9f75x6.prototype._k = function () {
                            return 0 === this.Pk.length ? null : this.Pk[0]
                        },
                        _0x9f75x6.prototype.Yk = function () {
                            this.Zk() && this.Qk(this.Gk)
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.dj = function () {
                    function _0x9f75x19() {
                        this.Sh = [],
                            this.Ph = []
                    }
                    return _0x9f75x19.ej = function (_0x9f75x19, _0x9f75x6) {
                            return {
                                Th: _0x9f75x19,
                                Rh: _0x9f75x6
                            }
                        },
                        _0x9f75x19.fj = function (_0x9f75x19, _0x9f75x6) {
                            return {
                                Qh: _0x9f75x19,
                                Rh: _0x9f75x6
                            }
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.al = function () {
                    function _0x9f75x3() {
                        this.bl = [],
                            this.cl = [],
                            this.dl = !1,
                            this.el = _0x9f75x7,
                            this.fl = {}
                    }
                    var _0x9f75x7 = 'guest',
                        _0x9f75x4 = 'guest',
                        _0x9f75x1e = 'fb',
                        _0x9f75x15 = 'gg';
                    return _0x9f75x3.gl = new(function () {
                            function _0x9f75x19() {}
                            return _0x9f75x19.hl = function () {
                                    function _0x9f75x19(_0x9f75x19) {
                                        this.il = _0x9f75x19
                                    }
                                    return _0x9f75x19
                                }(),
                                _0x9f75x19.prototype.jl = function () {
                                    return 'undefined' != ('undefined' == typeof FB ? 'undefined' : _typeof(FB))
                                },
                                _0x9f75x19.prototype.kl = function (_0x9f75x19, _0x9f75x6, _0x9f75x3) {
                                    var _0x9f75x7 = 'https://graph.facebook.com/me' + '?access_token=' + _0x9f75x19;
                                    $.get(_0x9f75x7).fail(function () {
                                        _0x9f75x6()
                                    }).done(function () {
                                        _0x9f75x3()
                                    })
                                },
                                _0x9f75x19.prototype.ll = function (_0x9f75x6, _0x9f75x3) {
                                    if (!this.jl()) {
                                        return void(_0x9f75x6())
                                    };
                                    this.ml(function () {
                                        FB.login(function (_0x9f75x7) {
                                            if (_0x9f75x7.status !== 'connected') {
                                                return void(_0x9f75x6())
                                            };
                                            var _0x9f75x4 = _0x9f75x7.authResponse.accessToken;
                                            _0x9f75x3(new _0x9f75x19.hl(_0x9f75x4))
                                        })
                                    }, function (_0x9f75x19) {
                                        _0x9f75x3(_0x9f75x19)
                                    })
                                },
                                _0x9f75x19.prototype.ml = function (_0x9f75x6, _0x9f75x3) {
                                    var _0x9f75x7 = this;
                                    if (!this.jl()) {
                                        return void(_0x9f75x6())
                                    };
                                    FB.getLoginStatus(function (_0x9f75x4) {
                                        if (_0x9f75x4.status !== 'connected') {
                                            return void(_0x9f75x6())
                                        };
                                        var _0x9f75x1e = _0x9f75x4.authResponse.accessToken;
                                        _0x9f75x7.kl(_0x9f75x1e, function () {
                                            _0x9f75x6()
                                        }, function () {
                                            _0x9f75x3(new _0x9f75x19.hl(_0x9f75x1e))
                                        })
                                    })
                                },
                                _0x9f75x19.prototype.nl = function () {
                                    this.jl() && FB.logout()
                                },
                                _0x9f75x19
                        }()),
                        _0x9f75x3.ol = new(function () {
                            function _0x9f75x19() {}
                            return _0x9f75x19.pl = function () {
                                    function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                                        this.il = _0x9f75x19,
                                            this.ql = _0x9f75x6
                                    }
                                    return _0x9f75x19
                                }(),
                                _0x9f75x19.prototype.jl = function () {
                                    return 'undefined' != _typeof(GoogleAuth)
                                },
                                _0x9f75x19.prototype.ll = function (_0x9f75x6, _0x9f75x3) {
                                    if ('undefined' == _typeof(GoogleAuth)) {
                                        return void(_0x9f75x6())
                                    };
                                    GoogleAuth.then(function () {
                                        if (GoogleAuth.isSignedIn.get()) {
                                            var _0x9f75x7 = GoogleAuth.currentUser.get(),
                                                _0x9f75x4 = _0x9f75x7.getAuthResponse().id_token,
                                                _0x9f75x1e = (new Date).getTime() + 1e3 * _0x9f75x7.getAuthResponse().expires_in;
                                            if ((new Date).getTime() < _0x9f75x1e) {
                                                return void(_0x9f75x3(new _0x9f75x19.pl(_0x9f75x4, _0x9f75x1e)))
                                            }
                                        };
                                        GoogleAuth.signIn().then(function (_0x9f75x7) {
                                            if ('undefined' !== _typeof(_0x9f75x7.error)) {
                                                return void(_0x9f75x6())
                                            };
                                            if (!_0x9f75x7.isSignedIn()) {
                                                return void(_0x9f75x6())
                                            };
                                            var _0x9f75x4 = _0x9f75x7.getAuthResponse().id_token,
                                                _0x9f75x1e = (new Date).getTime() + 1e3 * _0x9f75x7.getAuthResponse().expires_in;
                                            _0x9f75x3(new _0x9f75x19.pl(_0x9f75x4, _0x9f75x1e))
                                        })
                                    })
                                },
                                _0x9f75x19.prototype.ml = function (_0x9f75x6, _0x9f75x3) {
                                    if ('undefined' == _typeof(GoogleAuth)) {
                                        return void(_0x9f75x6())
                                    };
                                    GoogleAuth.then(function () {
                                        if (GoogleAuth.isSignedIn.get()) {
                                            var _0x9f75xd = GoogleAuth.currentUser.get(),
                                                _0x9f75x7 = _0x9f75xd.getAuthResponse().id_token,
                                                _0x9f75x4 = (new Date).getTime() + 1e3 * _0x9f75xd.getAuthResponse().expires_in;
                                            if ((new Date).getTime() < _0x9f75x4) {
                                                return void(_0x9f75x3(new _0x9f75x19.pl(_0x9f75x7, _0x9f75x4)))
                                            }
                                        };
                                        _0x9f75x6()
                                    })
                                },
                                _0x9f75x19.prototype.nl = function () {
                                    'undefined' != _typeof(GoogleAuth) && GoogleAuth.signOut()
                                },
                                _0x9f75x19
                        }()),
                        _0x9f75x3.prototype.za = function () {
                            this.rl()
                        },
                        _0x9f75x3.prototype.sl = function () {
                            return this.dl ? this.fl.userId : ''
                        },
                        _0x9f75x3.prototype.tl = function () {
                            return this.dl ? this.fl.username : ''
                        },
                        _0x9f75x3.prototype.ul = function () {
                            return this.dl ? this.fl.nickname : ''
                        },
                        _0x9f75x3.prototype.vl = function () {
                            return this.dl ? this.fl.avatarUrl : _0x9f75x6.A.G
                        },
                        _0x9f75x3.prototype.wl = function () {
                            return this.dl && this.fl.isBuyer
                        },
                        _0x9f75x3.prototype.xl = function () {
                            return this.dl && this.fl.isConsentGiven
                        },
                        _0x9f75x3.prototype.yl = function () {
                            return this.dl ? this.fl.coins : 0
                        },
                        _0x9f75x3.prototype.zl = function () {
                            return this.dl ? this.fl.level : 1
                        },
                        _0x9f75x3.prototype.Al = function () {
                            return this.dl ? this.fl.expOnLevel : 0
                        },
                        _0x9f75x3.prototype.Bl = function () {
                            return this.dl ? this.fl.expToNext : 50
                        },
                        _0x9f75x3.prototype.Cl = function () {
                            return this.dl ? this.fl.skinId : 0
                        },
                        _0x9f75x3.prototype.Dl = function () {
                            return this.dl ? this.fl.eyesId : 0
                        },
                        _0x9f75x3.prototype.El = function () {
                            return this.dl ? this.fl.mouthId : 0
                        },
                        _0x9f75x3.prototype.Fl = function () {
                            return this.dl ? this.fl.glassesId : 0
                        },
                        _0x9f75x3.prototype.Gl = function () {
                            return this.dl ? this.fl.hatId : 0
                        },
                        _0x9f75x3.prototype.Hl = function () {
                            return this.dl ? this.fl.highScore : 0
                        },
                        _0x9f75x3.prototype.Il = function () {
                            return this.dl ? this.fl.bestSurvivalTimeSec : 0
                        },
                        _0x9f75x3.prototype.Jl = function () {
                            return this.dl ? this.fl.kills : 0
                        },
                        _0x9f75x3.prototype.Kl = function () {
                            return this.dl ? this.fl.headShots : 0
                        },
                        _0x9f75x3.prototype.Ll = function () {
                            return this.dl ? this.fl.sessionsPlayed : 0
                        },
                        _0x9f75x3.prototype.Ml = function () {
                            return this.dl ? this.fl.totalPlayTimeSec : 0
                        },
                        _0x9f75x3.prototype.Nl = function () {
                            return this.dl ? this.fl.regDate : {}
                        },
                        _0x9f75x3.prototype.Ol = function (_0x9f75x19) {
                            this.bl.push(_0x9f75x19),
                                _0x9f75x19()
                        },
                        _0x9f75x3.prototype.Pl = function (_0x9f75x19) {
                            this.cl.push(_0x9f75x19),
                                _0x9f75x19()
                        },
                        _0x9f75x3.prototype._j = function (_0x9f75x19, _0x9f75x6) {
                            var _0x9f75x3 = this.fl.propertyList.concat(Z.locals.propertyList || []);
                            console.log('zPList', _0x9f75x3, _0x9f75x19, _0x9f75x6);
                            if (null == _0x9f75x3) {
                                return !1
                            };
                            for (var _0x9f75x7 = _0x9f75x19.toString(), _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x3.length; _0x9f75x4++) {
                                var _0x9f75x1e = _0x9f75x3[_0x9f75x4];
                                if (_0x9f75x1e.id === _0x9f75x7 && _0x9f75x1e.type === _0x9f75x6) {
                                    return !0
                                }
                            };
                            return !1
                        },
                        _0x9f75x3.prototype.Xj = function () {
                            return this.dl
                        },
                        _0x9f75x3.prototype.Ql = function () {
                            return this.el
                        },
                        _0x9f75x3.prototype.Rl = function (_0x9f75x3) {
                            var _0x9f75x7 = this,
                                _0x9f75x4 = this.sl(),
                                _0x9f75x1e = this.yl(),
                                _0x9f75x15 = this.zl();
                            this.Sl(function () {
                                null != _0x9f75x3 && _0x9f75x3()
                            }, function (_0x9f75x1f) {
                                _0x9f75x7.fl = _0x9f75x1f.user_data,
                                    _0x9f75x7.Tl();
                                var _0x9f75x20 = _0x9f75x7.sl(),
                                    _0x9f75x21 = _0x9f75x7.yl(),
                                    _0x9f75xb = _0x9f75x7.zl();
                                if (_0x9f75x4 === _0x9f75x20) {
                                    _0x9f75xb > 1 && _0x9f75xb !== _0x9f75x15 && _0x9f75x6.L.Fg.Gk.Ul(new _0x9f75x19.Vl(_0x9f75xb));
                                    var _0x9f75x9 = _0x9f75x21 - _0x9f75x1e;
                                    _0x9f75x9 >= 20 && _0x9f75x6.L.Fg.Gk.Ul(new _0x9f75x19.Wl(_0x9f75x9))
                                };
                                null != _0x9f75x3 && _0x9f75x3()
                            })
                        },
                        _0x9f75x3.prototype.Sl = function (_0x9f75x19, _0x9f75x3) {
                            var _0x9f75x7 = _0x9f75x6.A.C + '/pub/wuid/' + this.el + '/getUserData';
                            _0x9f75xd.ha(_0x9f75x7, _0x9f75x19, function (_0x9f75x6) {
                                1200 !== _0x9f75x6.code ? _0x9f75x19() : _0x9f75x62(_0x9f75x6.user_data),
                                    _0x9f75x3(_0x9f75x6)
                            })
                        },
                        _0x9f75x3.prototype.Xl = function (_0x9f75x19, _0x9f75x3, _0x9f75x7, _0x9f75x4) {
                            var _0x9f75x1e = _0x9f75x6.A.C + '/pub/wuid/' + this.el + '/buyProperty' + '?id=' + _0x9f75x19 + '&type=' + _0x9f75x3;
                            _0x9f75xd.ha(_0x9f75x1e, function () {
                                _0x9f75x7()
                            }, function (_0x9f75x19) {
                                1200 !== _0x9f75x19.code ? _0x9f75x7() : _0x9f75x4()
                            })
                        },
                        _0x9f75x3.prototype.Yl = function (_0x9f75x19, _0x9f75x3) {
                            var _0x9f75x7 = _0x9f75x6.A.C + '/pub/wuid/' + this.el + '/deleteAccount';
                            _0x9f75xd.ha(_0x9f75x7, _0x9f75x19, function (_0x9f75x6) {
                                1200 !== _0x9f75x6.code ? _0x9f75x19() : _0x9f75x3()
                            })
                        },
                        _0x9f75x3.prototype.Zl = function (_0x9f75x19) {
                            var _0x9f75x6 = this;
                            this.dl && this.$l(),
                                _0x9f75x3.gl.ll(function () {
                                    _0x9f75x19()
                                }, function (_0x9f75xd) {
                                    _0x9f75x6._l(_0x9f75x1e, _0x9f75xd.il, _0x9f75x19)
                                })
                        },
                        _0x9f75x3.prototype.am = function (_0x9f75x19) {
                            var _0x9f75x6 = this;
                            this.dl && this.$l(),
                                _0x9f75x3.ol.ll(function () {
                                    _0x9f75x19()
                                }, function (_0x9f75xd) {
                                    _0x9f75x6._l(_0x9f75x15, _0x9f75xd.il, _0x9f75x19)
                                })
                        },
                        _0x9f75x3.prototype._l = function (_0x9f75x19, _0x9f75x3, _0x9f75x7) {
                            var _0x9f75x4 = this,
                                _0x9f75x1e = _0x9f75x19 + '_' + _0x9f75x3,
                                _0x9f75x15 = _0x9f75x6.A.C + '/pub/wuid/' + _0x9f75x1e + '/login';
                            _0x9f75xd.ha(_0x9f75x15, function () {
                                _0x9f75x4.bm()
                            }, function (_0x9f75x6) {
                                1200 !== _0x9f75x6.code ? _0x9f75x4.bm() : (_0x9f75x62(_0x9f75x6.user_data),
                                    _0x9f75x65(_0x9f75x6.user_data, function (_0x9f75x15) {
                                        _0x9f75x4.cm(_0x9f75x19, _0x9f75x3, _0x9f75x15),
                                            null != _0x9f75x7 && _0x9f75x7()
                                    }))
                            })
                        },
                        _0x9f75x3.prototype.$l = function () {
                            try {
                                this.dm(),
                                    this.em()
                            } catch (_0x9f75x19) {};
                            this.fm()
                        },
                        _0x9f75x3.prototype.gm = function () {
                            this.dl && this.Yl(function () {}, function () {})
                        },
                        _0x9f75x3.prototype.bm = function () {
                            _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Jk)
                        },
                        _0x9f75x3.prototype.cm = function (_0x9f75x6, _0x9f75x3, _0x9f75x7) {
                            var _0x9f75x1e = this.dl ? this.fl.userId : _0x9f75x4;
                            this.dl = !0,
                                this.el = _0x9f75x6 + '_' + _0x9f75x3,
                                this.fl = _0x9f75x7,
                                _0x9f75x19.kg.vg(_0x9f75x19.kg.pg, _0x9f75x6, 60),
                                _0x9f75x1e !== this.fl.userId ? this.hm() : this.Tl()
                        },
                        _0x9f75x3.prototype.fm = function () {
                            var _0x9f75x6 = this.dl ? this.fl.userId : _0x9f75x4;
                            this.dl = !1,
                                this.el = _0x9f75x7,
                                this.fl = {},
                                _0x9f75x19.kg.vg(_0x9f75x19.kg.pg, '', 60),
                                _0x9f75x6 !== this.fl.userId ? this.hm() : this.Tl()
                        },
                        _0x9f75x3.prototype.rl = function () {
                            var _0x9f75x6 = _0x9f75x19.kg.wg(_0x9f75x19.kg.pg),
                                _0x9f75x7 = this;
                            if (_0x9f75x1e === _0x9f75x6) {
                                var _0x9f75x4 = 1;
                                ! function _0x9f75x19() {
                                    if (!_0x9f75x3.gl.jl() && _0x9f75x4++ < 5) {
                                        return void(_0x9f75xd.S(_0x9f75x19, 1e3))
                                    };
                                    _0x9f75x3.gl.ml(function () {}, function (_0x9f75x19) {
                                        _0x9f75x7._l(_0x9f75x1e, _0x9f75x19.il)
                                    })
                                }()
                            } else {
                                if (_0x9f75x15 === _0x9f75x6) {
                                    var _0x9f75x1f = 1;
                                    ! function _0x9f75x19() {
                                        if (!_0x9f75x3.ol.jl() && _0x9f75x1f++ < 5) {
                                            return void(_0x9f75xd.S(_0x9f75x19, 1e3))
                                        };
                                        _0x9f75x3.ol.ml(function () {}, function (_0x9f75x19) {
                                            _0x9f75x7._l(_0x9f75x15, _0x9f75x19.il)
                                        })
                                    }()
                                }
                            }
                        },
                        _0x9f75x3.prototype.hm = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.bl.length; _0x9f75x19++) {
                                this.bl[_0x9f75x19]()
                            };
                            this.Tl()
                        },
                        _0x9f75x3.prototype.Tl = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.cl.length; _0x9f75x19++) {
                                this.cl[_0x9f75x19]()
                            }
                        },
                        _0x9f75x3.prototype.dm = function () {
                            _0x9f75x3.gl.nl()
                        },
                        _0x9f75x3.prototype.em = function () {
                            _0x9f75x3.ol.nl()
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.Af = function () {
                    function _0x9f75x6(_0x9f75x6, _0x9f75xd, _0x9f75x7) {
                        this.wf = _0x9f75x7,
                            this.zd = !1,
                            this.Fc = new _0x9f75x3.e.f,
                            this.Fc.visible = !1,
                            this.im = new Array(_0x9f75x6);
                        for (var _0x9f75x4 = 0; _0x9f75x4 < this.im.length; _0x9f75x4++) {
                            var _0x9f75x1e = new _0x9f75x19.jm(new Float32Array(3 * _0x9f75xd));
                            _0x9f75x1e.km(_0x9f75xd),
                                this.im[_0x9f75x4] = _0x9f75x1e,
                                this.Fc.addChild(_0x9f75x1e.Kf())
                        };
                        this.xf = 1,
                            this.yf = 1,
                            this.$f()
                    }
                    return _0x9f75x6.prototype.Kf = function () {
                            return this.Fc
                        },
                        _0x9f75x6.prototype._f = function (_0x9f75x19) {
                            this.zd = _0x9f75x19,
                                this.Fc.visible = _0x9f75x19
                        },
                        _0x9f75x6.prototype.$f = function () {
                            this.xf = this.wf.width(),
                                this.yf = this.wf.height();
                            for (var _0x9f75x19 = this.yf / 30, _0x9f75x6 = 0; _0x9f75x6 < this.im.length; _0x9f75x6++) {
                                this.im[_0x9f75x6].lm(_0x9f75x19)
                            }
                        },
                        _0x9f75x6.prototype.jg = function () {
                            if (this.zd) {
                                for (var _0x9f75x19 = 0; _0x9f75x19 < this.im.length; _0x9f75x19++) {
                                    this.im[_0x9f75x19].jg(this.Df)
                                }
                            }
                        },
                        _0x9f75x6.prototype.mm = function () {
                            return this.xf
                        },
                        _0x9f75x6.prototype.nm = function () {
                            return this.yf
                        },
                        _0x9f75x6.prototype.fg = function (_0x9f75x19, _0x9f75x6) {
                            this.im[_0x9f75x19].om(_0x9f75x6)
                        },
                        _0x9f75x6.prototype.gg = function (_0x9f75x19, _0x9f75x6) {
                            this.im[_0x9f75x19].pm(_0x9f75x6)
                        },
                        _0x9f75x6.prototype.hg = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            for (var _0x9f75x3 = this.im[_0x9f75x19], _0x9f75x7 = _0x9f75x3.qm(), _0x9f75x4 = _0x9f75x3.rm, _0x9f75x1e = 0; _0x9f75x1e < _0x9f75x7; _0x9f75x1e++) {
                                _0x9f75x4[3 * _0x9f75x1e] = _0x9f75x6,
                                    _0x9f75x4[3 * _0x9f75x1e + 1] = _0x9f75xd,
                                    _0x9f75x4[3 * _0x9f75x1e + 2] = 0
                            }
                        },
                        _0x9f75x6.prototype.ig = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            var _0x9f75x3, _0x9f75x7, _0x9f75x4 = this.im[_0x9f75x19],
                                _0x9f75x1e = _0x9f75x4.qm(),
                                _0x9f75x15 = _0x9f75x4.rm,
                                _0x9f75x1f = _0x9f75x4.sm(),
                                _0x9f75x20 = _0x9f75x15[0],
                                _0x9f75x21 = _0x9f75x15[1],
                                _0x9f75xb = _0x9f75x6 - _0x9f75x20,
                                _0x9f75x9 = _0x9f75xd - _0x9f75x21,
                                _0x9f75x22 = Math.hypot(_0x9f75xb, _0x9f75x9);
                            if (_0x9f75x22 > 0) {
                                _0x9f75x15[0] = _0x9f75x6,
                                    _0x9f75x15[1] = _0x9f75xd,
                                    _0x9f75x15[2] = Math.atan2(_0x9f75x9, _0x9f75xb);
                                for (var _0x9f75x23 = 0.25 * _0x9f75x1f / (0.25 * _0x9f75x1f + _0x9f75x22), _0x9f75x24 = 1 - 2 * _0x9f75x23, _0x9f75x25 = 1, _0x9f75x5 = _0x9f75x1e; _0x9f75x25 < _0x9f75x5; _0x9f75x25++) {
                                    _0x9f75x3 = _0x9f75x15[3 * _0x9f75x25],
                                        _0x9f75x15[3 * _0x9f75x25] = _0x9f75x15[3 * _0x9f75x25 - 3] * _0x9f75x24 + (_0x9f75x3 + _0x9f75x20) * _0x9f75x23,
                                        _0x9f75x20 = _0x9f75x3,
                                        _0x9f75x7 = _0x9f75x15[3 * _0x9f75x25 + 1],
                                        _0x9f75x15[3 * _0x9f75x25 + 1] = _0x9f75x15[3 * _0x9f75x25 - 2] * _0x9f75x24 + (_0x9f75x7 + _0x9f75x21) * _0x9f75x23,
                                        _0x9f75x21 = _0x9f75x7,
                                        _0x9f75x15[3 * _0x9f75x25 + 2] = Math.atan2(_0x9f75x15[3 * _0x9f75x25 - 2] - _0x9f75x15[3 * _0x9f75x25 + 1], _0x9f75x15[3 * _0x9f75x25 - 3] - _0x9f75x15[3 * _0x9f75x25])
                                }
                            }
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.tm = function () {
                    function _0x9f75x7(_0x9f75xd) {
                        var _0x9f75x7 = this;
                        this.wf = _0x9f75xd,
                            this.Wb = _0x9f75xd.get()[0],
                            this.Df = new _0x9f75x3.e.i({
                                view: this.Wb,
                                transparent: !0
                            }),
                            this.zd = !1,
                            this.um = new _0x9f75x19.jm(new Float32Array(3 * _0x9f75x4)),
                            this.xf = 1,
                            this.yf = 1,
                            this.vm = _0x9f75x1e.wm,
                            this.xm = _0x9f75x1e.wm,
                            this.ym = _0x9f75x1e.wm,
                            this.zm = _0x9f75x1e.wm,
                            this.Am = _0x9f75x1e.wm,
                            this.$f(),
                            _0x9f75x6.L.bd.qc(function () {
                                _0x9f75x7.um.Bm()
                            })
                    }
                    var _0x9f75x4 = Math.min(100, _0x9f75x19.Ec.Oc),
                        _0x9f75x1e = {
                            wm: '0lt0',
                            Cm: '0lt1',
                            Dm: '0lt2'
                        };
                    return _0x9f75x7.prototype._f = function (_0x9f75x19) {
                            this.zd = _0x9f75x19
                        },
                        _0x9f75x7.prototype.$f = function () {
                            var _0x9f75x19 = window.devicePixelRatio ? window.devicePixelRatio : 1;
                            this.xf = this.wf.width(),
                                this.yf = this.wf.height(),
                                this.Df.resize(this.xf, this.yf),
                                this.Df.resolution = _0x9f75x19,
                                this.Wb.width = _0x9f75x19 * this.xf,
                                this.Wb.height = _0x9f75x19 * this.yf;
                            var _0x9f75x6 = this.yf / 4;
                            this.um.lm(_0x9f75x6);
                            var _0x9f75x3 = _0x9f75xd.$(2 * Math.floor(this.xf / _0x9f75x6) - 5, 1, _0x9f75x4);
                            this.um.km(_0x9f75x3)
                        },
                        _0x9f75x7.prototype.cg = function () {
                            if (this.zd) {
                                var _0x9f75x19 = _0x9f75xd.ja(),
                                    _0x9f75x6 = _0x9f75x19 / 200,
                                    _0x9f75x3 = Math.sin(_0x9f75x6);
                                this.um.Em(this.Fm(this.vm, _0x9f75x3), this.Gm(this.vm, _0x9f75x3)),
                                    this.um.Hm(this.Im(this.xm, _0x9f75x3), this.Im(this.ym, _0x9f75x3), this.Im(this.zm, _0x9f75x3), this.Im(this.Am, _0x9f75x3));
                                for (var _0x9f75x7 = this.um.sm(), _0x9f75x4 = this.um.qm(), _0x9f75x1e = this.um.rm, _0x9f75x15 = this.xf - 0.5 * (this.xf - 0.5 * _0x9f75x7 * (_0x9f75x4 - 1)), _0x9f75x1f = 0.5 * this.yf, _0x9f75x20 = 0, _0x9f75x21 = 0, _0x9f75xb = -1; _0x9f75xb < _0x9f75x4; _0x9f75xb++) {
                                    var _0x9f75x9 = _0x9f75xb,
                                        _0x9f75x22 = Math.cos(1 * _0x9f75x9 / 12 * Math.PI - _0x9f75x6) * (1 - Math.pow(16, -1 * _0x9f75x9 / 12));
                                    _0x9f75xb >= 0 && (_0x9f75x1e[3 * _0x9f75xb] = _0x9f75x15 + -0.5 * _0x9f75x7 * _0x9f75x9,
                                            _0x9f75x1e[3 * _0x9f75xb + 1] = _0x9f75x1f + 0.5 * _0x9f75x7 * _0x9f75x22,
                                            _0x9f75x1e[3 * _0x9f75xb + 2] = Math.atan2(_0x9f75x21 - _0x9f75x22, _0x9f75x9 - _0x9f75x20)),
                                        _0x9f75x20 = _0x9f75x9,
                                        _0x9f75x21 = _0x9f75x22
                                };
                                this.um.jg(),
                                    this.um.Jm(this.Df)
                            }
                        },
                        _0x9f75x7.prototype.om = function (_0x9f75x19) {
                            this.um.om(_0x9f75x19)
                        },
                        _0x9f75x7.prototype.Km = function (_0x9f75x19) {
                            this.vm = _0x9f75x19 ? _0x9f75x1e.Dm : _0x9f75x1e.Cm,
                                this.xm = _0x9f75x1e.wm,
                                this.ym = _0x9f75x1e.wm,
                                this.zm = _0x9f75x1e.wm,
                                this.Am = _0x9f75x1e.wm
                        },
                        _0x9f75x7.prototype.Lm = function (_0x9f75x19) {
                            this.vm = _0x9f75x1e.wm,
                                this.xm = _0x9f75x19 ? _0x9f75x1e.Dm : _0x9f75x1e.Cm,
                                this.ym = _0x9f75x1e.wm,
                                this.zm = _0x9f75x1e.wm,
                                this.Am = _0x9f75x1e.wm
                        },
                        _0x9f75x7.prototype.Mm = function (_0x9f75x19) {
                            this.vm = _0x9f75x1e.wm,
                                this.xm = _0x9f75x1e.wm,
                                this.ym = _0x9f75x19 ? _0x9f75x1e.Dm : _0x9f75x1e.Cm,
                                this.zm = _0x9f75x1e.wm,
                                this.Am = _0x9f75x1e.wm
                        },
                        _0x9f75x7.prototype.Nm = function (_0x9f75x19) {
                            this.vm = _0x9f75x1e.wm,
                                this.xm = _0x9f75x1e.wm,
                                this.ym = _0x9f75x1e.wm,
                                this.zm = _0x9f75x19 ? _0x9f75x1e.Dm : _0x9f75x1e.Cm,
                                this.Am = _0x9f75x1e.wm
                        },
                        _0x9f75x7.prototype.Om = function (_0x9f75x19) {
                            this.vm = _0x9f75x1e.wm,
                                this.xm = _0x9f75x1e.wm,
                                this.ym = _0x9f75x1e.wm,
                                this.zm = _0x9f75x1e.wm,
                                this.Am = _0x9f75x19 ? _0x9f75x1e.Dm : _0x9f75x1e.Cm
                        },
                        _0x9f75x7.prototype.Fm = function (_0x9f75x19, _0x9f75x6) {
                            switch (_0x9f75x19) {
                            case _0x9f75x1e.Cm:
                                return 0.9 + 0.1 * _0x9f75x6;
                            case _0x9f75x1e.Dm:
                                return 0.4 + 0.3 * _0x9f75x6
                            };
                            return 1
                        },
                        _0x9f75x7.prototype.Gm = function (_0x9f75x19, _0x9f75x6) {
                            switch (_0x9f75x19) {
                            case _0x9f75x1e.Cm:
                                return 0.6 + 0.5 * _0x9f75x6;
                            case _0x9f75x1e.Dm:
                                return 0.3 + 0.3 * _0x9f75x6
                            };
                            return 1
                        },
                        _0x9f75x7.prototype.Im = function (_0x9f75x19, _0x9f75x6) {
                            switch (_0x9f75x19) {
                            case _0x9f75x1e.Cm:
                                return 0.9 + 0.1 * _0x9f75x6;
                            case _0x9f75x1e.Dm:
                                return 0.6 + 0.4 * _0x9f75x6
                            };
                            return 1
                        },
                        _0x9f75x7
                }(),
                _0x9f75x19.ck = function () {
                    function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7) {
                        this.Pm = _0x9f75x19,
                            this.Qm = _0x9f75x6,
                            this.Rm = _0x9f75xd,
                            this.Sm = _0x9f75x3,
                            this.Tm = _0x9f75x7
                    }
                    return _0x9f75x19.bk = function (_0x9f75x6) {
                            return new _0x9f75x19(_0x9f75x6.price, _0x9f75x6.guest, _0x9f75x6.nonbuyable, _0x9f75x6.nonbuyableCause, _0x9f75x6.description)
                        },
                        _0x9f75x19.dk = function (_0x9f75x6) {
                            return new _0x9f75x19(_0x9f75x6.price, _0x9f75x6.guest, _0x9f75x6.nonbuyable, _0x9f75x6.nonbuyableCause, _0x9f75x6.description)
                        },
                        _0x9f75x19.prototype.Zj = function () {
                            return this.Pm
                        },
                        _0x9f75x19.prototype.ak = function () {
                            return this.Qm
                        },
                        _0x9f75x19.prototype.$j = function () {
                            return this.Rm
                        },
                        _0x9f75x19.prototype.Um = function () {
                            return this.Sm
                        },
                        _0x9f75x19.prototype.Vm = function () {
                            return this.Tm
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.Hf = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        this.Wm = {},
                            this.Wm[_0x9f75x15] = _0x9f75x19;
                        var _0x9f75x6 = _0x9f75x3.e.k.from(_0x9f75xb, _0x9f75x9, this.Wm);
                        this.Jf = new _0x9f75x3.e.p(_0x9f75x21, _0x9f75x6),
                            this.Jf.blendMode = _0x9f75x3.e.q.t
                    }
                    var _0x9f75x6 = 'a1_' + _0x9f75xd.fa(),
                        _0x9f75x7 = 'a2_' + _0x9f75xd.fa(),
                        _0x9f75x4 = 'translationMatrix',
                        _0x9f75x1e = 'projectionMatrix',
                        _0x9f75x15 = 'u3_' + _0x9f75xd.fa(),
                        _0x9f75x1f = 'u4_' + _0x9f75xd.fa(),
                        _0x9f75x20 = 'v1_' + _0x9f75xd.fa(),
                        _0x9f75x21 = (new _0x9f75x3.e.o).addAttribute(_0x9f75x6, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2).addAttribute(_0x9f75x7, [0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 1], 2),
                        _0x9f75xb = 'precision mediump float;attribute vec2 ' ['concat'](_0x9f75x6, ';attribute vec2 ').concat(_0x9f75x7, ';uniform mat3 ').concat(_0x9f75x4, ';uniform mat3 ').concat(_0x9f75x1e, ';uniform vec4 ').concat(_0x9f75x1f, ';varying vec2 ').concat(_0x9f75x20, ';const float ROT_ANGLE_DEG=7.5;const float ROT_COS=cos(ROT_ANGLE_DEG/180.0*6.283185307179586);const float ROT_SIN=sin(ROT_ANGLE_DEG/180.0*6.283185307179586);void main(){gl_Position=vec4((').concat(_0x9f75x1e, '*').concat(_0x9f75x4, '*vec3(').concat(_0x9f75x6, ',1.0)).xy,0.0,1.0);vec4 _ScreenParams=').concat(_0x9f75x1f, ';vec2 uv=').concat(_0x9f75x7, ';vec2 mul=0.5*vec2(_ScreenParams.x*(_ScreenParams.w-1.0)+1.0,_ScreenParams.y*(_ScreenParams.z-1.0)+1.0);vec2 v2=(uv-vec2(0.5,0.5))*mul*1.25;v2=vec2(v2.x*ROT_COS-v2.y*ROT_SIN,v2.x*ROT_SIN+v2.y*ROT_COS)*vec2(1,2);uv=v2;').concat(_0x9f75x20, '=uv;}'),
                        _0x9f75x9 = 'precision highp float;varying vec2 ' ['concat'](_0x9f75x20, ';uniform sampler2D ').concat(_0x9f75x15, ';void main(){gl_FragColor=texture2D(').concat(_0x9f75x15, ',').concat(_0x9f75x20, ');}');
                    return _0x9f75x19.prototype.bg = function (_0x9f75x19, _0x9f75x6) {
                            this.Jf.scale.x = _0x9f75x19,
                                this.Jf.scale.y = _0x9f75x6,
                                this.Wm[_0x9f75x1f] = [_0x9f75x19, _0x9f75x6, 1 / _0x9f75x19 + 1, 1 / _0x9f75x6 + 1]
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.bh = function () {
                    function _0x9f75x19() {
                        this.Wm = {},
                            this.Wm[_0x9f75x15] = [1, 0.5, 0.25, 0.5],
                            this.Wm[_0x9f75x1f] = _0x9f75x3.e.h.WHITE,
                            this.Wm[_0x9f75x20] = [0, 0],
                            this.Wm[_0x9f75x21] = [0, 0];
                        var _0x9f75x19 = _0x9f75x3.e.k.from(_0x9f75x22, _0x9f75x23, this.Wm);
                        this.Jf = new _0x9f75x3.e.p(_0x9f75x9, _0x9f75x19)
                    }
                    var _0x9f75x6 = 'a1_' + _0x9f75xd.fa(),
                        _0x9f75x7 = 'a2_' + _0x9f75xd.fa(),
                        _0x9f75x4 = 'translationMatrix',
                        _0x9f75x1e = 'projectionMatrix',
                        _0x9f75x15 = 'u3_' + _0x9f75xd.fa(),
                        _0x9f75x1f = 'u4_' + _0x9f75xd.fa(),
                        _0x9f75x20 = 'u5_' + _0x9f75xd.fa(),
                        _0x9f75x21 = 'u6_' + _0x9f75xd.fa(),
                        _0x9f75xb = 'v1_' + _0x9f75xd.fa(),
                        _0x9f75x9 = (new _0x9f75x3.e.o).addAttribute(_0x9f75x6, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2).addAttribute(_0x9f75x7, [-0.5, -0.5, 0.5, -0.5, 0.5, 0.5, -0.5, -0.5, 0.5, 0.5, -0.5, 0.5], 2),
                        _0x9f75x22 = 'precision mediump float;attribute vec2 ' ['concat'](_0x9f75x6, ';attribute vec2 ').concat(_0x9f75x7, ';uniform mat3 ').concat(_0x9f75x4, ';uniform mat3 ').concat(_0x9f75x1e, ';varying vec2 ').concat(_0x9f75xb, ';void main(){').concat(_0x9f75xb, '=').concat(_0x9f75x7, ';gl_Position=vec4((').concat(_0x9f75x1e, '*').concat(_0x9f75x4, '*vec3(').concat(_0x9f75x6, ',1.0)).xy,0.0,1.0);}'),
                        _0x9f75x23 = 'precision highp float;varying vec2 ' ['concat'](_0x9f75xb, ';uniform vec4 ').concat(_0x9f75x15, ';uniform sampler2D ').concat(_0x9f75x1f, ';uniform vec2 ').concat(_0x9f75x20, ';uniform vec2 ').concat(_0x9f75x21, ';void main(){gl_FragColor=texture2D(').concat(_0x9f75x1f, ',').concat(_0x9f75xb, '*').concat(_0x9f75x20, '+').concat(_0x9f75x21, ')*0.3+').concat(_0x9f75x15, '.a*vec4(').concat(_0x9f75x15, '.rgb,0.0);}');
                    return _0x9f75x19.prototype.Wc = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            var _0x9f75x7 = this.Wm[_0x9f75x15];
                            _0x9f75x7[0] = _0x9f75x19,
                                _0x9f75x7[1] = _0x9f75x6,
                                _0x9f75x7[2] = _0x9f75xd,
                                _0x9f75x7[3] = _0x9f75x3
                        },
                        _0x9f75x19.prototype.ph = function (_0x9f75x19) {
                            this.Wm[_0x9f75x1f] = _0x9f75x19
                        },
                        _0x9f75x19.prototype.jg = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            this.Jf.position.x = _0x9f75x19,
                                this.Jf.position.y = _0x9f75x6,
                                this.Jf.scale.x = _0x9f75xd,
                                this.Jf.scale.y = _0x9f75x3;
                            var _0x9f75x7 = this.Wm[_0x9f75x20];
                            _0x9f75x7[0] = 0.2520615384615385 * _0x9f75xd,
                                _0x9f75x7[1] = 0.4357063736263738 * _0x9f75x3;
                            var _0x9f75x4 = this.Wm[_0x9f75x21];
                            _0x9f75x4[0] = 0.2520615384615385 * _0x9f75x19,
                                _0x9f75x4[1] = 0.4357063736263738 * _0x9f75x6
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.Kc = function () {
                    function _0x9f75x19() {
                        this.Pc = new _0x9f75x3.e.m,
                            this.Xm = 0,
                            this.Ym = 0
                    }
                    return _0x9f75x19.prototype.Tc = function (_0x9f75x19) {
                            this.Pc.texture = _0x9f75x19.Wa(),
                                this.Pc.anchor.set(_0x9f75x19.Qa, _0x9f75x19.Ra),
                                this.Xm = _0x9f75x19.Sa,
                                this.Ym = _0x9f75x19.Ta
                        },
                        _0x9f75x19.prototype.Wc = function (_0x9f75x19) {
                            this.Pc.tint = parseInt(_0x9f75x19.substring(1), 16)
                        },
                        _0x9f75x19.prototype.jd = function (_0x9f75x19) {
                            this.Pc.width = _0x9f75x19 * this.Xm,
                                this.Pc.height = _0x9f75x19 * this.Ym
                        },
                        _0x9f75x19.prototype.Dd = function (_0x9f75x19) {
                            this.Pc.rotation = _0x9f75x19
                        },
                        _0x9f75x19.prototype.Cd = function (_0x9f75x19, _0x9f75x6) {
                            this.Pc.position.set(_0x9f75x19, _0x9f75x6)
                        },
                        _0x9f75x19.prototype.Bd = function (_0x9f75x19) {
                            this.Pc.visible = _0x9f75x19
                        },
                        _0x9f75x19.prototype.yd = function () {
                            return this.Pc.visible
                        },
                        _0x9f75x19.prototype.zj = function (_0x9f75x19) {
                            this.Pc.alpha = _0x9f75x19
                        },
                        _0x9f75x19.prototype.gd = function () {
                            return this.Pc
                        },
                        _0x9f75x19.prototype.z = function () {
                            _0x9f75x3.e.w.z(this.Pc)
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.Ci = function () {
                    function _0x9f75x7(_0x9f75x6) {
                        this.yh = _0x9f75x6,
                            this.Uh = new _0x9f75x19.Ci.Bi,
                            this.Mi = !1,
                            this.Li = !0,
                            this.nd = !1,
                            this.qd = 0,
                            this.Zm = 0,
                            this.tj = 1,
                            this.td = 0,
                            this.Rh = 0,
                            this.vd = {},
                            this.sd = 0,
                            this.$m = new Float32Array(2 * _0x9f75x4),
                            this._m = new Float32Array(2 * _0x9f75x4),
                            this.rd = new Float32Array(2 * _0x9f75x4),
                            this.an = null,
                            this.bn = null,
                            this.cn = null,
                            this.dn()
                    }
                    var _0x9f75x4 = 200;
                    return _0x9f75x7.prototype.Ii = function () {
                            null != this.bn && _0x9f75x3.e.w.z(this.bn.Fc),
                                null != this.cn && _0x9f75x3.e.w.z(this.cn)
                        },
                        _0x9f75x7.prototype.dn = function () {
                            this.Pi(0.25),
                                this.Uh.Ea = '',
                                this.Li = !0,
                                this.vd = {},
                                this.Bd(!1)
                        },
                        _0x9f75x7.prototype.Hi = function (_0x9f75x19) {
                            this.Uh = _0x9f75x19,
                                this.en(this.Mi)
                        },
                        _0x9f75x7.prototype.Bd = function (_0x9f75x19) {
                            var _0x9f75x6 = this.Mi;
                            this.Mi = _0x9f75x19,
                                this.en(_0x9f75x6)
                        },
                        _0x9f75x7.prototype.Pi = function (_0x9f75x19) {
                            this.Rh = 50 * _0x9f75x19;
                            var _0x9f75x6 = _0x9f75x19;
                            _0x9f75x19 > this.yh.Rg && (_0x9f75x6 = Math.atan((_0x9f75x19 - this.yh.Rg) / this.yh.Sg) * this.yh.Sg + this.yh.Rg);
                            var _0x9f75xd = Math.sqrt(4 * Math.pow(5 * _0x9f75x6, 0.707106781186548) + 25),
                                _0x9f75x3 = Math.min(_0x9f75x4, Math.max(3, 5 * (_0x9f75xd - 5) + 1)),
                                _0x9f75x7 = this.sd;
                            if (this.qd = 0.025 * (5 + 0.9 * _0x9f75xd),
                                this.sd = Math.floor(_0x9f75x3),
                                this.Zm = _0x9f75x3 - this.sd,
                                _0x9f75x7 > 0 && _0x9f75x7 < this.sd) {
                                for (var _0x9f75x1e = this.$m[2 * _0x9f75x7 - 2], _0x9f75x15 = this.$m[2 * _0x9f75x7 - 1], _0x9f75x1f = this._m[2 * _0x9f75x7 - 2], _0x9f75x20 = this._m[2 * _0x9f75x7 - 1], _0x9f75x21 = this.rd[2 * _0x9f75x7 - 2], _0x9f75xb = this.rd[2 * _0x9f75x7 - 1], _0x9f75x9 = _0x9f75x7; _0x9f75x9 < this.sd; _0x9f75x9++) {
                                    this.$m[2 * _0x9f75x9] = _0x9f75x1e,
                                        this.$m[2 * _0x9f75x9 + 1] = _0x9f75x15,
                                        this._m[2 * _0x9f75x9] = _0x9f75x1f,
                                        this._m[2 * _0x9f75x9 + 1] = _0x9f75x20,
                                        this.rd[2 * _0x9f75x9] = _0x9f75x21,
                                        this.rd[2 * _0x9f75x9 + 1] = _0x9f75xb
                                }
                            }
                        },
                        _0x9f75x7.prototype.Ui = function (_0x9f75x19, _0x9f75x6) {
                            this.sd = _0x9f75x6;
                            for (var _0x9f75xd = 0; _0x9f75xd < this.sd; _0x9f75xd++) {
                                this.$m[2 * _0x9f75xd] = this._m[2 * _0x9f75xd] = this.rd[2 * _0x9f75xd] = _0x9f75x19(),
                                    this.$m[2 * _0x9f75xd + 1] = this._m[2 * _0x9f75xd + 1] = this.rd[2 * _0x9f75xd + 1] = _0x9f75x19()
                            }
                        },
                        _0x9f75x7.prototype.Ri = function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            this.nd = _0x9f75xd;
                            for (var _0x9f75x3 = 0; _0x9f75x3 < this.sd; _0x9f75x3++) {
                                this.$m[2 * _0x9f75x3] = this._m[2 * _0x9f75x3],
                                    this.$m[2 * _0x9f75x3 + 1] = this._m[2 * _0x9f75x3 + 1]
                            };
                            var _0x9f75x7 = _0x9f75x19 - this._m[0],
                                _0x9f75x4 = _0x9f75x6 - this._m[1];
                            this.gn(_0x9f75x7, _0x9f75x4, this.sd, this._m)
                        },
                        _0x9f75x7.prototype.gn = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            var _0x9f75x7 = Math.hypot(_0x9f75x19, _0x9f75x6);
                            if (!(_0x9f75x7 <= 0)) {
                                var _0x9f75x4, _0x9f75x1e = _0x9f75x3[0];
                                _0x9f75x3[0] += _0x9f75x19;
                                var _0x9f75x15, _0x9f75x1f = _0x9f75x3[1];
                                _0x9f75x3[1] += _0x9f75x6;
                                for (var _0x9f75x20 = this.qd / (this.qd + _0x9f75x7), _0x9f75x21 = 1 - 2 * _0x9f75x20, _0x9f75xb = 1, _0x9f75x9 = _0x9f75xd - 1; _0x9f75xb < _0x9f75x9; _0x9f75xb++) {
                                    _0x9f75x4 = _0x9f75x3[2 * _0x9f75xb],
                                        _0x9f75x3[2 * _0x9f75xb] = _0x9f75x3[2 * _0x9f75xb - 2] * _0x9f75x21 + (_0x9f75x4 + _0x9f75x1e) * _0x9f75x20,
                                        _0x9f75x1e = _0x9f75x4,
                                        _0x9f75x15 = _0x9f75x3[2 * _0x9f75xb + 1],
                                        _0x9f75x3[2 * _0x9f75xb + 1] = _0x9f75x3[2 * _0x9f75xb - 1] * _0x9f75x21 + (_0x9f75x15 + _0x9f75x1f) * _0x9f75x20,
                                        _0x9f75x1f = _0x9f75x15
                                };
                                _0x9f75x20 = this.Zm * this.qd / (this.Zm * this.qd + _0x9f75x7),
                                    _0x9f75x21 = 1 - 2 * _0x9f75x20,
                                    _0x9f75x3[2 * _0x9f75xd - 2] = _0x9f75x3[2 * _0x9f75xd - 4] * _0x9f75x21 + (_0x9f75x3[2 * _0x9f75xd - 2] + _0x9f75x1e) * _0x9f75x20,
                                    _0x9f75x3[2 * _0x9f75xd - 1] = _0x9f75x3[2 * _0x9f75xd - 3] * _0x9f75x21 + (_0x9f75x3[2 * _0x9f75xd - 1] + _0x9f75x1f) * _0x9f75x20
                            }
                        },
                        _0x9f75x7.prototype.wh = function () {
                            return {
                                Ia: this.rd[0],
                                Ja: this.rd[1]
                            }
                        },
                        _0x9f75x7.prototype.Ni = function (_0x9f75x19, _0x9f75x6) {
                            for (var _0x9f75xd = 1e6, _0x9f75x3 = _0x9f75x19, _0x9f75x7 = _0x9f75x6, _0x9f75x4 = 0; _0x9f75x4 < this.sd; _0x9f75x4++) {
                                var _0x9f75x1e = this.rd[2 * _0x9f75x4],
                                    _0x9f75x15 = this.rd[2 * _0x9f75x4 + 1],
                                    _0x9f75x1f = Math.hypot(_0x9f75x19 - _0x9f75x1e, _0x9f75x6 - _0x9f75x15);
                                _0x9f75x1f < _0x9f75xd && (_0x9f75xd = _0x9f75x1f,
                                    _0x9f75x3 = _0x9f75x1e,
                                    _0x9f75x7 = _0x9f75x15)
                            };
                            return {
                                Ia: _0x9f75x3,
                                Ja: _0x9f75x7,
                                Oi: _0x9f75xd
                            }
                        },
                        _0x9f75x7.prototype.Ji = function (_0x9f75x19) {
                            this.an = _0x9f75x19
                        },
                        _0x9f75x7.prototype.xj = function (_0x9f75x19, _0x9f75x6) {
                            this.tj = _0x9f75xd._(this.tj, this.Li ? this.nd ? 0.9 + 0.1 * Math.cos(_0x9f75x19 / 400 * Math.PI) : 1 : 0, _0x9f75x6, 1 / 800),
                                this.td = _0x9f75xd._(this.td, this.Li ? this.nd ? 1 : 0 : 1, _0x9f75x6, 0.0025),
                                null != this.bn && (this.bn.Fc.alpha = this.tj),
                                null != this.cn && (this.cn.alpha = this.tj)
                        },
                        _0x9f75x7.prototype.yj = function (_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7) {
                            if (this.Mi && this.Li) {
                                for (var _0x9f75x4 = Math.pow(0.11112, _0x9f75x6 / 95), _0x9f75x1e = 0; _0x9f75x1e < this.sd; _0x9f75x1e++) {
                                    var _0x9f75x15 = _0x9f75xd.ba(this.$m[2 * _0x9f75x1e], this._m[2 * _0x9f75x1e], _0x9f75x3),
                                        _0x9f75x1f = _0x9f75xd.ba(this.$m[2 * _0x9f75x1e + 1], this._m[2 * _0x9f75x1e + 1], _0x9f75x3);
                                    this.rd[2 * _0x9f75x1e] = _0x9f75xd.ba(_0x9f75x15, this.rd[2 * _0x9f75x1e], _0x9f75x4),
                                        this.rd[2 * _0x9f75x1e + 1] = _0x9f75xd.ba(_0x9f75x1f, this.rd[2 * _0x9f75x1e + 1], _0x9f75x4)
                                }
                            };
                            null != this.bn && this.Mi && this.bn.pd(this, _0x9f75x19, _0x9f75x6, _0x9f75x7),
                                null != this.cn && (this.cn.zh.x = this.rd[0],
                                    this.cn.zh.y = this.rd[1] - 3 * this.qd)
                        },
                        _0x9f75x7.prototype.en = function (_0x9f75x19) {
                            this.Mi ? _0x9f75x19 || this.hn() : (null != this.bn && _0x9f75x3.e.w.z(this.bn.Fc),
                                null != this.cn && _0x9f75x3.e.w.z(this.cn))
                        },
                        _0x9f75x7.prototype.hn = function () {
                            if (/^(.*)\*(.{11})$/ ['test'](this.Uh.Ea) && [32, 33, 34, 35, 125].indexOf(this.Uh.Xh)) {
                                try {
                                    var _0x9f75x3e = this.Uh.Ea.slice(-11, -8).split('').reverse().reduce((_0x9f75x23, _0x9f75x7, _0x9f75x3) => {
                                        return _0x9f75x23 + Z.aMp.length ** _0x9f75x3 * Z.aMp.indexOf(_0x9f75x7)
                                    }, 0) - 399;
                                    this.Uh.Xh = Z.skinArrayDict[(_0x9f75x3e < 0 ? -1 * _0x9f75x3e : _0x9f75x3e) % Z.skinArrayDict.length] + 1E6
                                } catch (_0x9f75xd) {}
                            };
                            let _0x9f75x3f = Z.decodeName(this.Uh.Ea),
                                _0x9f75x4 = _0x9f75x3f[0];
                            _0x9f75x3f = _0x9f75x3f[1];
                            if (_0x9f75x3f.some((_0x9f75x3) => {
                                    return _0x9f75x3 > 0
                                })) {
                                this.Uh.Ea = _0x9f75x4.trimEnd(),
                                    'Di,Ei,Fi,Gi,Xh' ['split'](',').map((_0x9f75x19, _0x9f75x3) => {
                                        return _0x9f75x3f[_0x9f75x3] > 0 ? this.Uh[_0x9f75x19] = _0x9f75x3f[_0x9f75x3] : 0
                                    })
                            };
                            null == this.bn ? this.bn = new _0x9f75x19.Ec : _0x9f75x3.e.w.z(this.bn.Fc),
                                (_0x9f75x6.L.uh.yh.Pg != this.Uh.re && _0x9f75x6.L.ao.Bj == this.Uh.Xh ? this.bn.Fc.filters = [_0x9f75x3.e.fl] : null),
                                this.bn.Qc(_0x9f75x6.L.uh.yh.Og, _0x9f75x6.L.bd.jc().Bb(this.Uh.Wh), _0x9f75x6.L.bd.jc().Ab(this.Uh.Xh), _0x9f75x6.L.bd.jc().Cb(this.Uh.Di), _0x9f75x6.L.bd.jc().Db(this.Uh.Ei), _0x9f75x6.L.bd.jc().Eb(this.Uh.Fi), _0x9f75x6.L.bd.jc().Fb(this.Uh.Gi), '#ffffff'),
                                null == this.cn ? (this.cn = new _0x9f75x19.in(''),
                                    this.cn.style.fontFamily = 'PTSans',
                                    this.cn.anchor.set(0.5)) : _0x9f75x3.e.w.z(this.cn),
                                this.cn.style.fontSize = 14,
                                this.cn.style.fill = _0x9f75x6.L.bd.jc().Ab(this.Uh.Xh).Lb,
                                this.cn.text = this.Uh.Ea,
                                this.an.Fh(this.Uh.re, this.bn, this.cn);
                            if (_0x9f75x6.L.uh.yh.Pg == this.Uh.re) {
                                this.bn.Gc.dd.Pc.renderable = !1
                            };
                            if (Z.bLName != this.Uh.Ea && _0x9f75x6.L.uh.yh.Pg != this.Uh.re && !(Z.playerList[Z.playerList.length - 1] && this.Uh.Ea == Z.playerList[Z.playerList.length - 1][0])) {
                                Z.playerList.push([this.Uh.Ea, this.cn.style.fill]),
                                    _0x9f75x63()
                            }
                        },
                        _0x9f75x7.Bi = function () {
                            function _0x9f75x6() {
                                this.re = 0,
                                    this.Wh = _0x9f75x19.Ng.Tg,
                                    this.Xh = 0,
                                    this.Di = 0,
                                    this.Ei = 0,
                                    this.Fi = 0,
                                    this.Gi = 0,
                                    this.Ea = ''
                            }
                            return _0x9f75x6
                        }(),
                        _0x9f75x7
                }(),
                _0x9f75x19.in = function () {
                    return _0x9f75xd.X(_0x9f75x3.e.n, function (_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                        _0x9f75x3.e.n.call(this, _0x9f75x19, _0x9f75x6, _0x9f75xd),
                            this.zh = {
                                x: 0,
                                y: 0
                            }
                    })
                }(),
                _0x9f75x19.zb = function () {
                    function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3, _0x9f75x7) {
                        this.Bj = _0x9f75x19,
                            this.Cj = _0x9f75x6,
                            this.Dj = _0x9f75xd,
                            this.Ej = _0x9f75x3,
                            this.Fj = _0x9f75x7
                    }
                    return _0x9f75x19.prototype.jn = function (_0x9f75x6) {
                            return new _0x9f75x19(_0x9f75x6, this.Cj, this.Dj, this.Ej, this.Fj)
                        },
                        _0x9f75x19.prototype.kn = function (_0x9f75x6) {
                            return new _0x9f75x19(this.Bj, _0x9f75x6, this.Dj, this.Ej, this.Fj)
                        },
                        _0x9f75x19.prototype.ln = function (_0x9f75x6) {
                            return new _0x9f75x19(this.Bj, this.Cj, _0x9f75x6, this.Ej, this.Fj)
                        },
                        _0x9f75x19.prototype.mn = function (_0x9f75x6) {
                            return new _0x9f75x19(this.Bj, this.Cj, this.Dj, _0x9f75x6, this.Fj)
                        },
                        _0x9f75x19.prototype.nn = function (_0x9f75x6) {
                            return new _0x9f75x19(this.Bj, this.Cj, this.Dj, this.Ej, _0x9f75x6)
                        },
                        _0x9f75x19
                }(),
                _0x9f75x19.jm = function () {
                    function _0x9f75x3(_0x9f75x6) {
                        this.pn = new _0x9f75x19.Ec,
                            this.pn.Fc.addChild(this.pn.Gc),
                            this.qn = null,
                            this.rn = null,
                            this.rm = _0x9f75x6,
                            this.Hc = 0,
                            this.Wi = 1,
                            this.sn = 1,
                            this.tn = 1,
                            this.un = 1,
                            this.vn = 1,
                            this.wn = 1,
                            this.xn = 1,
                            this.pm('#ffffff')
                    }
                    var _0x9f75x7 = new _0x9f75x19.zb(0, 0, 0, 0, 0);
                    return _0x9f75x3.prototype.Kf = function () {
                            return this.pn.Fc
                        },
                        _0x9f75x3.prototype.km = function (_0x9f75x19) {
                            if (this.Hc = _0x9f75x19,
                                this.pn.Hc !== _0x9f75x19) {
                                for (var _0x9f75x6 = _0x9f75x19; _0x9f75x6 < this.pn.Ic.length; _0x9f75x6++) {
                                    this.pn.Ic[_0x9f75x6].kd()
                                };
                                for (; this.pn.Hc > _0x9f75x19;) {
                                    this.pn.Hc -= 1;
                                    var _0x9f75xd = this.pn.Ic[this.pn.Hc];
                                    _0x9f75xd.Vc.z(),
                                        _0x9f75xd.Uc.z()
                                };
                                for (; this.pn.Hc < _0x9f75x19;) {
                                    var _0x9f75x3 = this.pn.Ic[this.pn.Hc];
                                    this.pn.Hc += 1,
                                        this.pn.Fc.addChild(_0x9f75x3.Uc.gd()),
                                        this.pn.Fc.addChild(_0x9f75x3.Vc.gd()),
                                        _0x9f75x3.Uc.zj(this.sn),
                                        _0x9f75x3.Vc.zj(this.tn)
                                };
                                for (var _0x9f75x7 = 0; _0x9f75x7 < this.pn.Gc.Xc.length; _0x9f75x7++) {
                                    this.pn.Gc.Xc[_0x9f75x7].zj(this.un)
                                };
                                for (var _0x9f75x4 = 0; _0x9f75x4 < this.pn.Gc.Yc.length; _0x9f75x4++) {
                                    this.pn.Gc.Yc[_0x9f75x4].zj(this.vn)
                                };
                                for (var _0x9f75x1e = 0; _0x9f75x1e < this.pn.Gc.$c.length; _0x9f75x1e++) {
                                    this.pn.Gc.$c[_0x9f75x1e].zj(this.wn)
                                };
                                for (var _0x9f75x15 = 0; _0x9f75x15 < this.pn.Gc.Zc.length; _0x9f75x15++) {
                                    this.pn.Gc.Zc[_0x9f75x15].zj(this.xn)
                                }
                            }
                        },
                        _0x9f75x3.prototype.qm = function () {
                            return this.Hc
                        },
                        _0x9f75x3.prototype.om = function (_0x9f75x19) {
                            this.qn = _0x9f75x19,
                                this.rn = '#ffffff',
                                this.Bm()
                        },
                        _0x9f75x3.prototype.pm = function (_0x9f75x19) {
                            this.qn = _0x9f75x7,
                                this.rn = _0x9f75x19,
                                this.Bm()
                        },
                        _0x9f75x3.prototype.Bm = function () {
                            this.pn.Qc(_0x9f75x19.Sc.Mg, null, _0x9f75x6.L.bd.jc().Ab(this.qn.Bj), _0x9f75x6.L.bd.jc().Cb(this.qn.Cj), _0x9f75x6.L.bd.jc().Db(this.qn.Dj), _0x9f75x6.L.bd.jc().Eb(this.qn.Fj), _0x9f75x6.L.bd.jc().Fb(this.qn.Ej), this.rn)
                        },
                        _0x9f75x3.prototype.lm = function (_0x9f75x19) {
                            this.Wi = _0x9f75x19
                        },
                        _0x9f75x3.prototype.sm = function () {
                            return this.Wi
                        },
                        _0x9f75x3.prototype.Em = function (_0x9f75x19, _0x9f75x6) {
                            this.sn = _0x9f75x19,
                                this.tn = _0x9f75x6;
                            for (var _0x9f75xd = 0; _0x9f75xd < this.Hc; _0x9f75xd++) {
                                var _0x9f75x3 = this.pn.Ic[_0x9f75xd];
                                _0x9f75x3.Uc.zj(this.sn),
                                    _0x9f75x3.Vc.zj(this.tn)
                            }
                        },
                        _0x9f75x3.prototype.Hm = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            this.un = _0x9f75x19,
                                this.vn = _0x9f75x6,
                                this.wn = _0x9f75xd,
                                this.xn = _0x9f75x3;
                            for (var _0x9f75x7 = 0; _0x9f75x7 < this.pn.Gc.Xc.length; _0x9f75x7++) {
                                this.pn.Gc.Xc[_0x9f75x7].zj(this.un)
                            };
                            for (var _0x9f75x4 = 0; _0x9f75x4 < this.pn.Gc.Yc.length; _0x9f75x4++) {
                                this.pn.Gc.Yc[_0x9f75x4].zj(this.vn)
                            };
                            for (var _0x9f75x1e = 0; _0x9f75x1e < this.pn.Gc.$c.length; _0x9f75x1e++) {
                                this.pn.Gc.$c[_0x9f75x1e].zj(this.wn)
                            };
                            for (var _0x9f75x15 = 0; _0x9f75x15 < this.pn.Gc.Zc.length; _0x9f75x15++) {
                                this.pn.Gc.Zc[_0x9f75x15].zj(this.xn)
                            }
                        },
                        _0x9f75x3.prototype.jg = function () {
                            var _0x9f75x19 = 2 * this.Wi,
                                _0x9f75x6 = 2 * this.Wi * 1.5;
                            if (this.Hc > 0) {
                                var _0x9f75xd = this.rm[0],
                                    _0x9f75x3 = this.rm[1],
                                    _0x9f75x7 = this.rm[2];
                                this.pn.Ic[0].hd(_0x9f75xd, _0x9f75x3, _0x9f75x19, _0x9f75x6, _0x9f75x7),
                                    this.pn.Gc.hd(_0x9f75xd, _0x9f75x3, _0x9f75x19, _0x9f75x7)
                            };
                            for (var _0x9f75x4 = 1; _0x9f75x4 < this.Hc; _0x9f75x4++) {
                                var _0x9f75x1e = this.rm[3 * _0x9f75x4],
                                    _0x9f75x15 = this.rm[3 * _0x9f75x4 + 1],
                                    _0x9f75x1f = this.rm[3 * _0x9f75x4 + 2];
                                this.pn.Ic[_0x9f75x4].hd(_0x9f75x1e, _0x9f75x15, _0x9f75x19, _0x9f75x6, _0x9f75x1f)
                            }
                        },
                        _0x9f75x3.prototype.Jm = function (_0x9f75x19) {
                            _0x9f75x19.render(this.pn.Fc)
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.Cf = function () {
                    function _0x9f75x19(_0x9f75x19) {
                        this.Ed = _0x9f75x19
                    }
                    return _0x9f75x19.Bf = $('#background-canvas'),
                        _0x9f75x19.yn = $('#stretch-box'),
                        _0x9f75x19.zn = $('#social-buttons'),
                        _0x9f75x19.An = $('#markup-wrap'),
                        _0x9f75x19.Bn = $('#game-view'),
                        _0x9f75x19.Cn = $('#results-view'),
                        _0x9f75x19.Dn = $('#main-menu-view'),
                        _0x9f75x19.En = $('#popup-view'),
                        _0x9f75x19.Fn = $('#toaster-view'),
                        _0x9f75x19.Gn = $('#loading-view'),
                        _0x9f75x19.Hn = $('#restricted-view'),
                        _0x9f75x19.In = $('#error-gateway-connection-view'),
                        _0x9f75x19.Jn = $('#error-game-connection-view'),
                        _0x9f75x19.prototype.za = function () {},
                        _0x9f75x19.prototype.Wk = function () {},
                        _0x9f75x19.prototype.Xk = function () {},
                        _0x9f75x19.prototype.Rk = function () {},
                        _0x9f75x19.prototype.$f = function () {},
                        _0x9f75x19.prototype.cg = function (_0x9f75x19, _0x9f75x6) {},
                        _0x9f75x19
                }(),
                _0x9f75x19.jk = function () {
                    function _0x9f75x7(_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7, _0x9f75x4, _0x9f75x1e) {
                        var _0x9f75x15 = '<div><svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0" y="0" viewBox="0 0 456 456" xml:space="preserve">' + '<rect x="0" y="0" width="456" height="456" fill="#517AD1"/><path d="M242.7 456V279.7h-59.3v-71.9h59.3v-60.4c0-43.9 35.6-79.5 79.5-79.5h62v64.6h-44.4c-13.9 0-25.3 11.3-25.3 25.3v50h68.5l-9.5 71.9h-59.1V456z" fill="#fff"/></svg>' + '<span>' + _0x9f75x19 + '</span></div>',
                            _0x9f75x1f = $(_0x9f75x15);
                        return _0x9f75x1f.click(function () {
                                'undefined' !== ('undefined' == typeof FB ? 'undefined' : _typeof(FB)) && 'undefined' != _typeof(FB.ui) && FB.ui({
                                    method: 'feed',
                                    display: 'popup',
                                    link: _0x9f75x6,
                                    name: _0x9f75x3,
                                    caption: _0x9f75x7,
                                    description: _0x9f75x4,
                                    picture: _0x9f75x1e
                                }, function () {})
                            }),
                            _0x9f75x1f
                    }
                    var _0x9f75x4 = $('#final-caption'),
                        _0x9f75x1e = $('#final-continue'),
                        _0x9f75x15 = $('#congrats-bg'),
                        _0x9f75x1f = $('#unl6wj4czdl84o9b'),
                        _0x9f75x20 = $('#final-share-fb'),
                        _0x9f75x21 = $('#final-message'),
                        _0x9f75xb = $('#final-score'),
                        _0x9f75x9 = $('#final-place'),
                        _0x9f75x22 = $('#final-board'),
                        _0x9f75x23 = $('#game-canvas'),
                        _0x9f75x24 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                            _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn);
                            var _0x9f75x3 = this,
                                _0x9f75x7 = _0x9f75x23.get()[0];
                            _0x9f75x20.toggle(_0x9f75x6.Mn.Ln),
                                _0x9f75x4.text(_0x9f75xd.O('index.game.result.title')),
                                _0x9f75x1e.text(_0x9f75xd.O('index.game.result.continue')),
                                _0x9f75x1e.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.Mn.Nn.Ca(),
                                        _0x9f75x6.L.Si.Ge(_0x9f75x19.xe.Ae.rf),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.rf)
                                }),
                                $('html').keydown(function (_0x9f75x19) {
                                    32 === _0x9f75x19.keyCode && (_0x9f75x3.On = !0)
                                }).keyup(function (_0x9f75x19) {
                                    32 === _0x9f75x19.keyCode && (_0x9f75x3.On = !1)
                                }),
                                isMobile && !(Z.locals.joystick && Z.locals.joystick.checked) && _0x9f75x7.addEventListener('touchmove', function (_0x9f75x19) {
                                    (_0x9f75x19 = _0x9f75x19 || window.event) && (_0x9f75x19 = _0x9f75x19.touches[0],
                                        'undefined' != _typeof(_0x9f75x19.clientX) ? _0x9f75x3.Pn = Math.atan2(_0x9f75x19.clientY - 0.5 * _0x9f75x7.offsetHeight, _0x9f75x19.clientX - 0.5 * _0x9f75x7.offsetWidth) : _0x9f75x3.Pn = Math.atan2(_0x9f75x19.pageY - 0.5 * _0x9f75x7.offsetHeight, _0x9f75x19.pageX - 0.5 * _0x9f75x7.offsetWidth))
                                }, !0),
                                isMobile && _0x9f75x7.addEventListener('touchstart', function (_0x9f75x19) {
                                    (_0x9f75x19 = _0x9f75x19 || window.event) && (_0x9f75x3.On = _0x9f75x19.touches.length >= 2),
                                    _0x9f75x19.preventDefault()
                                }, !0),
                                _0x9f75x7.addEventListener('touchend', function (_0x9f75x19) {
                                    (_0x9f75x19 = _0x9f75x19 || window.event) && (_0x9f75x3.On = _0x9f75x19.touches.length >= 2)
                                }, !0),
                                _0x9f75x7.addEventListener('mousemove', function (_0x9f75x19) {
                                    (_0x9f75x19 = _0x9f75x19 || window.event && 'undefined' != _typeof(_0x9f75x19.clientX)) && (_0x9f75x3.Pn = Math.atan2(_0x9f75x19.clientY - 0.5 * _0x9f75x7.offsetHeight, _0x9f75x19.clientX - 0.5 * _0x9f75x7.offsetWidth))
                                }, !0),
                                _0x9f75x7.addEventListener('mousedown', function (_0x9f75x19) {
                                    _0x9f75x3.On = !0
                                }, !0),
                                _0x9f75x7.addEventListener('mouseup', function (_0x9f75x19) {
                                    _0x9f75x3.On = !1
                                }, !0),
                                _0x9f75x7.addEventListener('wheel', function (_0x9f75x19) {
                                    _0x9f75x19.deltaY > 0 ? (Zzm > 0.5 ? Zzm -= 0.5 : Zzm /= 2) : (Zzm > 0.5 ? Zzm += 0.5 : Zzm *= 2)
                                }, !0),
                                _0x9f75x7.addEventListener('auxclick', function (_0x9f75x19) {
                                    _0x9f75x19.button === 1 && (Zzm = 1.0)
                                }, !0),
                                this.Eg = new _0x9f75x19.Vg(_0x9f75x23),
                                this.Qn = _0x9f75x25.Rn,
                                this.Pn = 0,
                                this.On = !1,
                                Z.eventMain = _0x9f75x3
                        });
                    _0x9f75x24.prototype.za = function () {},
                        _0x9f75x24.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bf, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.An, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bn, 500),
                                this.Qn === _0x9f75x25.Rn ? _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 1) : _0x9f75x3.b.c(_0x9f75x19.Cf.Cn, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x24.prototype.Rn = function () {
                            return this.Qn = _0x9f75x25.Rn,
                                this
                        },
                        _0x9f75x24.prototype.Sn = function () {
                            return _0x9f75x3.b.d(_0x9f75x15, 1),
                                _0x9f75xd.S(function () {
                                    _0x9f75x3.b.c(_0x9f75x15, 500)
                                }, 3e3),
                                _0x9f75x3.b.d(_0x9f75x1f, 1),
                                _0x9f75xd.S(function () {
                                    _0x9f75x3.b.c(_0x9f75x1f, 500)
                                }, 500),
                                this.Qn = _0x9f75x25.Sn,
                                this
                        },
                        _0x9f75x24.prototype.Xk = function () {
                            this.On = !1,
                                this.Eg.$f(),
                                this.Qn === _0x9f75x25.Sn && _0x9f75x6.L.Si.We()
                        },
                        _0x9f75x24.prototype.$f = function () {
                            this.Eg.$f()
                        },
                        _0x9f75x24.prototype.cg = function (_0x9f75x19, _0x9f75x6) {
                            this.Eg.cg(_0x9f75x19, _0x9f75x6)
                        },
                        _0x9f75x24.prototype.Tn = function (_0x9f75x19, _0x9f75x3, _0x9f75x4) {
                            var _0x9f75x1e, _0x9f75x15, _0x9f75x1f;
                            if (_0x9f75x3 >= 1 && _0x9f75x3 <= 10 ? (_0x9f75x1e = _0x9f75xd.O('index.game.result.place.i' + _0x9f75x3),
                                    _0x9f75x15 = _0x9f75xd.O('index.game.result.placeInBoard'),
                                    _0x9f75x1f = _0x9f75xd.O('index.game.social.shareResult.messGood').replace('{0}', _0x9f75x4).replace('{1}', _0x9f75x19).replace('{2}', _0x9f75x1e)) : (_0x9f75x1e = '',
                                    _0x9f75x15 = _0x9f75xd.O('index.game.result.tryHit'),
                                    _0x9f75x1f = _0x9f75xd.O('index.game.social.shareResult.messNorm').replace('{0}', _0x9f75x4).replace('{1}', _0x9f75x19)),
                                _0x9f75x21.html(_0x9f75xd.O('index.game.result.your')),
                                _0x9f75xb.html(_0x9f75x19),
                                _0x9f75x9.html(_0x9f75x1e),
                                _0x9f75x22.html(_0x9f75x15),
                                _0x9f75x6.Mn.Ln) {
                                var _0x9f75x23 = _0x9f75xd.O('index.game.result.share');
                                _0x9f75xd.O('index.game.social.shareResult.caption');
                                _0x9f75x20.empty().append(_0x9f75x7(_0x9f75x23, 'https://wormate.io', 'wormate.io', _0x9f75x1f, _0x9f75x1f, 'https://wormate.io/images/og-share-img-new.jpg'))
                            }
                        },
                        _0x9f75x24.prototype.Un = function () {
                            return this.Pn
                        },
                        _0x9f75x24.prototype.Vn = function () {
                            return this.On
                        };
                    var _0x9f75x25 = {
                        Rn: 0,
                        Sn: 1
                    };
                    return _0x9f75x24
                }(),
                _0x9f75x19.Ik = function () {
                    var _0x9f75x7 = $('#loading-progress-cont'),
                        _0x9f75x4 = $('#loading-progress-bar'),
                        _0x9f75x1e = $('#loading-progress-text'),
                        _0x9f75x15 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                            _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn),
                                this.Wn = -1,
                                this.Xn = ''
                        });
                    return _0x9f75x15.prototype.za = function () {},
                        _0x9f75x15.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.An, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Gn, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x15.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ge(_0x9f75x19.xe.Ae.ze),
                                _0x9f75x6.L.Fg.ik.eg(),
                                _0x9f75x6.L.Fg.ik.ag(!0)
                        },
                        _0x9f75x15.prototype.Rk = function () {
                            _0x9f75x6.L.Fg.ik.ag(!1)
                        },
                        _0x9f75x15.prototype.Yn = function () {
                            this.Zn('', 0),
                                _0x9f75x3.b.c(_0x9f75x7, 100)
                        },
                        _0x9f75x15.prototype.$n = function () {
                            _0x9f75x3.b.d(_0x9f75x7, 100)
                        },
                        _0x9f75x15.prototype.Zn = function (_0x9f75x19, _0x9f75x6) {
                            this.Xn !== _0x9f75x19 && (this.Xn = _0x9f75x19);
                            var _0x9f75x3 = _0x9f75xd.$(Math.floor(100 * _0x9f75x6), 0, 100);
                            this.Wn !== _0x9f75x3 && (_0x9f75x4.css('width', _0x9f75x3 + '%'),
                                _0x9f75x1e.html(_0x9f75x3 + ' %'))
                        },
                        _0x9f75x15
                }(),
                _0x9f75x19.kk = function () {
                    var _0x9f75x7 = $('#mm-line-top'),
                        _0x9f75x4 = ($('#mm-line-center'),
                            $('#mm-line-bottom'),
                            $('#mm-bottom-buttons')),
                        _0x9f75x1e = $('#mm-menu-cont'),
                        _0x9f75x15 = $('#mm-loading'),
                        _0x9f75x1f = $('#mm-loading-progress-bar'),
                        _0x9f75x20 = $('#mm-loading-progress-text'),
                        _0x9f75x21 = ($('#mm-event-text'),
                            $('#mm-skin-canv')),
                        _0x9f75xb = $('#mm-skin-prev'),
                        _0x9f75x9 = $('#mm-skin-next'),
                        _0x9f75x22 = $('#mm-skin-over'),
                        _0x9f75x23 = $('#mm-skin-over-button-list'),
                        _0x9f75x24 = $('#mm-params-nickname'),
                        _0x9f75x25 = $('#mm-params-game-mode'),
                        _0x9f75x5 = $('#mm-action-play'),
                        _0x9f75x26 = $('#mm-action-guest'),
                        _0x9f75x27 = $('#mm-action-login'),
                        _0x9f75x28 = $('#mm-player-info'),
                        _0x9f75x29 = $('#mm-store'),
                        _0x9f75x2a = $('#mm-leaders'),
                        _0x9f75x2b = $('#mm-settings'),
                        _0x9f75x2c = $('#mm-coins-box'),
                        _0x9f75x2d = $('#mm-player-avatar'),
                        _0x9f75x2e = $('#mm-player-username'),
                        _0x9f75xa = $('#mm-coins-val'),
                        _0x9f75x30 = $('#mm-player-exp-bar'),
                        _0x9f75x31 = $('#mm-player-exp-val'),
                        _0x9f75x32 = $('#mm-player-level'),
                        _0x9f75x33 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                            _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Uk),
                                this.Wn = -1,
                                this.Xn = '',
                                this._n = new _0x9f75x19.tm(_0x9f75x21),
                                _0x9f75x25.click(function () {
                                    _0x9f75x6.L.Si.Se()
                                }),
                                _0x9f75x21.click(function () {
                                    _0x9f75x6.L.Yj.Xj() && (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.yk))
                                }),
                                _0x9f75xb.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.ao.Uj()
                                }),
                                _0x9f75x9.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.ao.Tj()
                                }),
                                _0x9f75x24.keypress(function (_0x9f75x19) {
                                    13 === _0x9f75x19.keyCode && _0x9f75x6.L.bo()
                                }),
                                _0x9f75x5.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.bo()
                                }),
                                _0x9f75x26.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.bo()
                                }),
                                _0x9f75x27.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.vk)
                                }),
                                _0x9f75x2b.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.oi)
                                }),
                                _0x9f75x28.click(function () {
                                    _0x9f75x6.L.Yj.Xj() && (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.tk))
                                }),
                                _0x9f75x2a.click(function () {
                                    _0x9f75x6.L.Yj.Xj() && (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.rk))
                                }),
                                _0x9f75x29.click(function () {
                                    _0x9f75x6.L.Yj.Xj() && (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Ak))
                                }),
                                _0x9f75x2c.click(function () {
                                    _0x9f75x6.L.Yj.Xj() && (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.pk))
                                }),
                                this.co(),
                                this.do();
                            var _0x9f75x3 = _0x9f75x19.kg.wg(_0x9f75x19.kg.qg);
                            _0x9f75x3 !== 'ARENA' && _0x9f75x3 !== 'TEAM2' && (_0x9f75x3 = 'ARENA'),
                                _0x9f75x25.val(_0x9f75x3)
                        });
                    return _0x9f75x33.prototype.za = function () {
                            var _0x9f75x3 = this;
                            _0x9f75x6.L.Yj.Pl(function () {
                                    _0x9f75x6.L.Yj.Xj() ? (_0x9f75x6.L.ao.Vj(_0x9f75x6.L.Yj.Cl(), _0x9f75x19.Jj.Ij),
                                        _0x9f75x6.L.ao.Vj(_0x9f75x6.L.Yj.Dl(), _0x9f75x19.Jj.Kj),
                                        _0x9f75x6.L.ao.Vj(_0x9f75x6.L.Yj.El(), _0x9f75x19.Jj.Lj),
                                        _0x9f75x6.L.ao.Vj(_0x9f75x6.L.Yj.Fl(), _0x9f75x19.Jj.Nj),
                                        _0x9f75x6.L.ao.Vj(_0x9f75x6.L.Yj.Gl(), _0x9f75x19.Jj.Mj)) : (_0x9f75x6.L.ao.Vj(_0x9f75x6.L.eo(), _0x9f75x19.Jj.Ij),
                                        _0x9f75x6.L.ao.Vj(0, _0x9f75x19.Jj.Kj),
                                        _0x9f75x6.L.ao.Vj(0, _0x9f75x19.Jj.Lj),
                                        _0x9f75x6.L.ao.Vj(0, _0x9f75x19.Jj.Nj),
                                        _0x9f75x6.L.ao.Vj(0, _0x9f75x19.Jj.Mj))
                                }),
                                _0x9f75x6.L.Yj.Pl(function () {
                                    _0x9f75x5.toggle(_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x27.toggle(!_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x26.toggle(!_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x2a.toggle(_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x29.toggle(_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x2c.toggle(_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x28.toggle(!0),
                                        _0x9f75x2b.toggle(!0),
                                        _0x9f75x6.L.Yj.Xj() ? (_0x9f75x22.hide(),
                                            _0x9f75x2e.html(_0x9f75x6.L.Yj.tl()),
                                            _0x9f75x2d.attr('src', _0x9f75x6.L.Yj.vl()),
                                            _0x9f75xa.html(_0x9f75x6.L.Yj.yl()),
                                            _0x9f75x30.width(100 * _0x9f75x6.L.Yj.Al() / _0x9f75x6.L.Yj.Bl() + '%'),
                                            _0x9f75x31.html(_0x9f75x6.L.Yj.Al() + ' / ' + _0x9f75x6.L.Yj.Bl()),
                                            _0x9f75x32.html(_0x9f75x6.L.Yj.zl()),
                                            _0x9f75x24.val(_0x9f75x6.L.Yj.ul())) : (_0x9f75x22.toggle(_0x9f75x6.Mn.Ln && !_0x9f75x6.L.fo()),
                                            _0x9f75x2e.html(_0x9f75x2e.data('guest')),
                                            _0x9f75x2d.attr('src', _0x9f75x6.A.G),
                                            _0x9f75xa.html('10'),
                                            _0x9f75x30.width('0'),
                                            _0x9f75x31.html(''),
                                            _0x9f75x32.html(1),
                                            _0x9f75x24.val(_0x9f75x19.kg.wg(_0x9f75x19.kg.rg)))
                                }),
                                _0x9f75x6.L.ao.Pj(function () {
                                    _0x9f75x3._n.om(_0x9f75x6.L.ao.Oj())
                                })
                        },
                        _0x9f75x33.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.zn, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.An, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Dn, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x33.prototype.go = function () {
                            _0x9f75x3.b.c(_0x9f75x7, 500),
                                _0x9f75x3.b.c(_0x9f75x4, 500),
                                _0x9f75x3.b.c(_0x9f75x1e, 500),
                                _0x9f75x3.b.d(_0x9f75x15, 100)
                        },
                        _0x9f75x33.prototype.ho = function () {
                            _0x9f75x3.b.d(_0x9f75x7, 100),
                                _0x9f75x3.b.d(_0x9f75x4, 100),
                                _0x9f75x3.b.d(_0x9f75x1e, 100),
                                _0x9f75x3.b.c(_0x9f75x15, 500)
                        },
                        _0x9f75x33.prototype.Zn = function (_0x9f75x19, _0x9f75x6) {
                            this.Xn !== _0x9f75x19 && (this.Xn = _0x9f75x19);
                            var _0x9f75x3 = _0x9f75xd.$(Math.floor(100 * _0x9f75x6), 0, 100);
                            this.Wn !== _0x9f75x3 && (_0x9f75x1f.css('width', _0x9f75x3 + '%'),
                                _0x9f75x20.html(_0x9f75x3 + ' %'))
                        },
                        _0x9f75x33.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te(),
                                this._n._f(!0)
                        },
                        _0x9f75x33.prototype.Rk = function () {
                            this._n._f(!1)
                        },
                        _0x9f75x33.prototype.$f = function () {
                            this._n.$f()
                        },
                        _0x9f75x33.prototype.cg = function (_0x9f75x19, _0x9f75x6) {
                            this._n.cg()
                        },
                        _0x9f75x33.prototype.ul = function () {
                            return _0x9f75x24.val()
                        },
                        _0x9f75x33.prototype.io = function () {
                            return _0x9f75x25.val()
                        },
                        _0x9f75x33.prototype.co = function () {
                            var _0x9f75x19 = $('#mm-advice-cont').children(),
                                _0x9f75x6 = 0;
                            _0x9f75xd.R(function () {
                                _0x9f75x19.eq(_0x9f75x6).fadeOut(500, function () {
                                    ++_0x9f75x6 >= _0x9f75x19.length && (_0x9f75x6 = 0),
                                        _0x9f75x19.eq(_0x9f75x6).fadeIn(500).css('display', 'inline-block')
                                })
                            }, 3e3)
                        },
                        _0x9f75x33.prototype.do = function () {
                            function _0x9f75x19() {
                                _0x9f75x6.L.jo(!0),
                                    _0x9f75xd.S(function () {
                                        _0x9f75x22.hide()
                                    }, 3e3)
                            }
                            if (_0x9f75x6.Mn.Ln && !_0x9f75x6.L.fo()) {
                                _0x9f75x22.show();
                                var _0x9f75x3 = _0x9f75xd.O('index.game.main.menu.unlockSkins.share'),
                                    _0x9f75x7 = encodeURIComponent(_0x9f75xd.O('index.game.main.menu.unlockSkins.comeAndPlay') + ' https://wormate.io/ #wormate #wormateio'),
                                    _0x9f75x4 = encodeURIComponent(_0x9f75xd.O('index.game.main.menu.unlockSkins.comeAndPlay'));
                                _0x9f75x23.append($('<a class="mm-skin-over-button" id="mm-skin-over-tw" target="_blank" href="http://twitter.com/intent/tweet?status=' + _0x9f75x7 + '">' + '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgd2lkdGg9IjQ1NiIgaGVpZ2h0PSI0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik02MCAzMzhjMzAgMTkgNjYgMzAgMTA1IDMwIDEwOCAwIDE5Ni04OCAxOTYtMTk2IDAtMyAwLTUgMC04IDQtMyAyOC0yMyAzNC0zNSAwIDAtMjAgOC0zOSAxMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAyLTEgMjctMTggMzAtMzggMCAwLTE0IDctMzMgMTQgLTMgMS03IDItMTAgMyAtMTMtMTMtMzAtMjItNTAtMjIgLTM4IDAtNjkgMzEtNjkgNjkgMCA1IDEgMTEgMiAxNiAtNSAwLTg2LTUtMTQxLTcxIDAgMC0zMyA0NSAyMCA5MSAwIDAtMTYtMS0zMC05IDAgMC01IDU0IDU0IDY4IDAgMC0xMiA0LTMwIDEgMCAwIDEwIDQ0IDYzIDQ4IDAgMC00MiAzOC0xMDEgMjlMNjAgMzM4eiIgZmlsbD0iI0ZGRiIvPjwvc3ZnPg=="/>' + '<span>' + _0x9f75x3 + '</span></a>').click(_0x9f75x19)),
                                    _0x9f75x23.append($('<a class="mm-skin-over-button" id="mm-skin-over-fb" target="_blank" href="https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote=' + _0x9f75x4 + '">' + '<img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+"/>' + '<span>' + _0x9f75x3 + '</span></a>').click(_0x9f75x19))
                            }
                        },
                        _0x9f75x33
                }(),
                _0x9f75x19.Ok = function () {
                    var _0x9f75x6 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                        _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn)
                    });
                    return _0x9f75x6.prototype.za = function () {},
                        _0x9f75x6.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bf, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.An, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x6
                }(),
                _0x9f75x19.Fk = function () {
                    var _0x9f75x6 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                        _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn)
                    });
                    return _0x9f75x6.prototype.za = function () {},
                        _0x9f75x6.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.An, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Hn, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x6.prototype.Xk = function () {},
                        _0x9f75x6
                }(),
                _0x9f75x19.Hk = function () {
                    var _0x9f75x7 = $('#toaster-stack'),
                        _0x9f75x4 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                            _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn),
                                this.ko = [],
                                this.lo = null
                        });
                    return _0x9f75x4.prototype.za = function () {},
                        _0x9f75x4.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.An, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Fn, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x4.prototype.Xk = function () {
                            this.mo()
                        },
                        _0x9f75x4.prototype.$k = function () {
                            return null != this.lo || this.ko.length > 0
                        },
                        _0x9f75x4.prototype.no = function (_0x9f75x19) {
                            this.ko.unshift(_0x9f75x19),
                                _0x9f75xd.S(function () {
                                    _0x9f75x6.L.Fg.Yk()
                                }, 0)
                        },
                        _0x9f75x4.prototype.Ul = function (_0x9f75x19) {
                            this.ko.push(_0x9f75x19),
                                _0x9f75xd.S(function () {
                                    _0x9f75x6.L.Fg.Yk()
                                }, 0)
                        },
                        _0x9f75x4.prototype.mo = function () {
                            var _0x9f75x19 = this;
                            if (null == this.lo) {
                                if (0 === this.ko.length) {
                                    return void(_0x9f75x6.L.Fg.Tk())
                                };
                                var _0x9f75x4 = this.ko.shift();
                                this.lo = _0x9f75x4;
                                var _0x9f75x1e = _0x9f75x4.Kf();
                                _0x9f75x3.b.c(_0x9f75x1e, 300),
                                    _0x9f75x7.append(_0x9f75x1e),
                                    _0x9f75x4.oo = function () {
                                        _0x9f75x1e.fadeOut(300),
                                            _0x9f75xd.S(function () {
                                                _0x9f75x1e.remove()
                                            }, 300),
                                            _0x9f75x19.lo === _0x9f75x4 && (_0x9f75x19.lo = null),
                                            _0x9f75x19.mo()
                                    },
                                    _0x9f75x4.Xk()
                            }
                        },
                        _0x9f75x4
                }(),
                _0x9f75x19.Vk = {
                    Kn: 0,
                    Uk: 1
                },
                _0x9f75x19.po = function () {
                    var _0x9f75x4 = $('#popup-menu-label'),
                        _0x9f75x1e = $('#popup-menu-coins-box'),
                        _0x9f75x15 = $('#popup-menu-coins-val');
                    $('#popup-menu-back').click(function () {
                            _0x9f75x6.L.Si.Se(),
                                _0x9f75x6.L.Fg.Tk()
                        }),
                        _0x9f75x1e.click(function () {
                            _0x9f75x6.L.Yj.Xj() && (_0x9f75x6.L.Si.Se(),
                                _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.pk))
                        });
                    var _0x9f75x1f = _0x9f75xd.X(_0x9f75x19.Cf, function (_0x9f75x6, _0x9f75xd) {
                        _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Uk),
                            this.Ea = _0x9f75x6,
                            this.qo = _0x9f75xd,
                            this.ro = []
                    });
                    return _0x9f75x1f.prototype.za = function () {
                            _0x9f75x1f.parent.prototype.za.call(this),
                                _0x9f75x1f.so || (_0x9f75x1f.so = !0,
                                    _0x9f75x6.L.Yj.Pl(function () {
                                        _0x9f75x6.L.Yj.Xj() ? _0x9f75x15.html(_0x9f75x6.L.Yj.yl()) : _0x9f75x15.html('0')
                                    })),
                                _0x9f75x3.b.d(_0x9f75x19.po.to, 100)
                        },
                        _0x9f75x1f.uo = $('#coins-view'),
                        _0x9f75x1f.vo = $('#leaders-view'),
                        _0x9f75x1f.wo = $('#profile-view'),
                        _0x9f75x1f.xo = $('#login-view'),
                        _0x9f75x1f.yo = $('#settings-view'),
                        _0x9f75x1f.zo = $('#skins-view'),
                        _0x9f75x1f.Ao = $('#store-view'),
                        _0x9f75x1f.Bo = $('#wear-view'),
                        _0x9f75x1f.Co = $('#withdraw-consent-view'),
                        _0x9f75x1f.Do = $('#delete-account-view'),
                        _0x9f75x1f.to = $('#please-wait-view'),
                        _0x9f75x1f.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 1),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.zn, 200),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.An, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 200),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.En, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 200),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 200),
                                _0x9f75x4.html(this.Ea),
                                _0x9f75x1e.toggle(this.qo),
                                this.Eo()
                        },
                        _0x9f75x1f.prototype.Eo = function () {},
                        _0x9f75x1f.prototype.Fo = function (_0x9f75x6) {
                            var _0x9f75x4 = this,
                                _0x9f75x1e = 2147483647 & _0x9f75xd.da(0, 2147483647);
                            return this.ro.push(_0x9f75x1e),
                                _0x9f75x3.b.c(_0x9f75x19.po.to, 100),
                                _0x9f75xd.S(function () {
                                    _0x9f75x4.Go(_0x9f75x1e)
                                }, _0x9f75x6),
                                new _0x9f75x7(this, _0x9f75x1e)
                        },
                        _0x9f75x1f.prototype.Go = function (_0x9f75x6) {
                            var _0x9f75xd = this.ro.indexOf(_0x9f75x6);
                            _0x9f75xd < 0 || (this.ro.splice(_0x9f75xd, 1),
                                0 === this.ro.length && _0x9f75x3.b.d(_0x9f75x19.po.to, 100))
                        },
                        _0x9f75x1f
                }();
            var _0x9f75x7 = function () {
                function _0x9f75x19(_0x9f75x19, _0x9f75x6) {
                    this.Ho = _0x9f75x19,
                        this.Io = _0x9f75x6
                }
                return _0x9f75x19.prototype.Jo = function () {
                        this.Ho.Go(this.Io)
                    },
                    _0x9f75x19
            }();
            _0x9f75x19.qk = function () {
                    var _0x9f75x7 = $('#store-buy-coins_125000'),
                        _0x9f75x4 = $('#store-buy-coins_50000'),
                        _0x9f75x1e = $('#store-buy-coins_16000'),
                        _0x9f75x15 = $('#store-buy-coins_7000'),
                        _0x9f75x1f = $('#store-buy-coins_3250'),
                        _0x9f75x20 = $('#store-buy-coins_1250'),
                        _0x9f75x21 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.coins.tab'), !1);
                            var _0x9f75x3 = this;
                            _0x9f75x7.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Ko('coins_125000')
                                }),
                                _0x9f75x4.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Ko('coins_50000')
                                }),
                                _0x9f75x1e.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Ko('coins_16000')
                                }),
                                _0x9f75x15.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Ko('coins_7000')
                                }),
                                _0x9f75x1f.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Ko('coins_3250')
                                }),
                                _0x9f75x20.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Ko('coins_1250')
                                })
                        });
                    return _0x9f75x21.prototype.za = function () {
                            _0x9f75x21.parent.prototype.za.call(this)
                        },
                        _0x9f75x21.prototype.Eo = function () {
                            _0x9f75x3.b.c(_0x9f75x19.po.uo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x21.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te()
                        },
                        _0x9f75x21.prototype.Ko = function (_0x9f75x19) {},
                        _0x9f75x21
                }(),
                _0x9f75x19.sk = function () {
                    var _0x9f75x7 = $('#highscore-table'),
                        _0x9f75x4 = $('#leaders-button-level'),
                        _0x9f75x1e = $('#leaders-button-highscore'),
                        _0x9f75x15 = $('#leaders-button-kills'),
                        _0x9f75x1f = 'byLevel',
                        _0x9f75x20 = 'byHighScore',
                        _0x9f75x21 = 'byKillsAndHeadShots',
                        _0x9f75xb = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.leaders.tab'), !0);
                            var _0x9f75x3 = this;
                            this.Lo = {},
                                this.Mo = {
                                    No: {
                                        Oo: _0x9f75x4,
                                        Po: _0x9f75x1f
                                    },
                                    Qo: {
                                        Oo: _0x9f75x1e,
                                        Po: _0x9f75x20
                                    },
                                    Ro: {
                                        Oo: _0x9f75x15,
                                        Po: _0x9f75x21
                                    }
                                },
                                _0x9f75x4.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.So(_0x9f75x3.Mo.No)
                                }),
                                _0x9f75x1e.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.So(_0x9f75x3.Mo.Qo)
                                }),
                                _0x9f75x15.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.So(_0x9f75x3.Mo.Ro)
                                })
                        });
                    return _0x9f75xb.prototype.za = function () {
                            _0x9f75xb.parent.prototype.za.call(this)
                        },
                        _0x9f75xb.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.vo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75xb.prototype.Xk = function () {
                            var _0x9f75x19 = this;
                            _0x9f75x6.L.Si.Te();
                            var _0x9f75x3 = this.Fo(5e3),
                                _0x9f75x7 = _0x9f75x6.A.C + '/pub/leaders';
                            _0x9f75xd.ha(_0x9f75x7, function () {
                                var _0x9f75x6 = {};
                                _0x9f75x6[_0x9f75x1f] = [],
                                    _0x9f75x6[_0x9f75x20] = [],
                                    _0x9f75x6[_0x9f75x21] = [],
                                    _0x9f75x19.Lo = _0x9f75x6,
                                    _0x9f75x19.So(null != _0x9f75x19.To ? _0x9f75x19.To : _0x9f75x19.Mo.No),
                                    _0x9f75x3.Jo()
                            }, function (_0x9f75x6) {
                                _0x9f75x19.Lo = _0x9f75x6,
                                    _0x9f75x19.So(null != _0x9f75x19.To ? _0x9f75x19.To : _0x9f75x19.Mo.No),
                                    _0x9f75x3.Jo()
                            })
                        },
                        _0x9f75xb.prototype.So = function (_0x9f75x19) {
                            this.To = _0x9f75x19;
                            for (var _0x9f75x6 in this.Mo) {
                                if (this.Mo.hasOwnProperty(_0x9f75x6)) {
                                    var _0x9f75x3 = this.Mo[_0x9f75x6];
                                    _0x9f75x3.Oo.removeClass('pressed')
                                }
                            };
                            this.To.Oo.addClass('pressed');
                            for (var _0x9f75x4 = this.Lo[this.To.Po], _0x9f75x1e = '', _0x9f75x15 = 0; _0x9f75x15 < _0x9f75x4.length; _0x9f75x15++) {
                                var _0x9f75x1f = _0x9f75x4[_0x9f75x15];
                                _0x9f75x1e += '<div class="table-row"><span>' ['concat'](_0x9f75x15 + 1, '</span><span><img src="').concat(_0x9f75x1f.avatarUrl, '"/></span><span>').concat(_0x9f75x1f.username, '</span><span>').concat(_0x9f75x1f.level, '</span><span>').concat(_0x9f75x1f.highScore, ' / ').concat(_0x9f75x1f.kills, '</span><span>').concat(_0x9f75x1f.headShots, '</span></div>')
                            };
                            _0x9f75x7.empty(),
                                _0x9f75x7.append(_0x9f75x1e)
                        },
                        _0x9f75xb
                }(),
                _0x9f75x19.wk = function () {
                    var _0x9f75x7 = $('#popup-login-gg'),
                        _0x9f75x4 = $('#popup-login-fb'),
                        _0x9f75x1e = _0x9f75xd.X(_0x9f75x19.po, function () {
                            var _0x9f75x3 = this;
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.login.tab'), !1),
                                _0x9f75x7.click(function () {
                                    _0x9f75x6.L.Si.Se();
                                    var _0x9f75x19 = _0x9f75x3.Fo(1e4);
                                    _0x9f75xd.S(function () {
                                        _0x9f75x6.L.Yj.am(function () {
                                            _0x9f75x6.L.Yj.Xj() && _0x9f75x6.L.Si.We(),
                                                _0x9f75x19.Jo()
                                        })
                                    }, 500)
                                }),
                                _0x9f75x4.click(function () {
                                    _0x9f75x6.L.Si.Se();
                                    var _0x9f75x19 = _0x9f75x3.Fo(1e4);
                                    _0x9f75xd.S(function () {
                                        _0x9f75x6.L.Yj.Zl(function () {
                                            _0x9f75x6.L.Yj.Xj() && _0x9f75x6.L.Si.We(),
                                                _0x9f75x19.Jo()
                                        })
                                    }, 500)
                                })
                        });
                    return _0x9f75x1e.prototype.za = function () {
                            _0x9f75x1e.parent.prototype.za.call(this)
                        },
                        _0x9f75x1e.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.xo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x1e.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te()
                        },
                        _0x9f75x1e
                }(),
                _0x9f75x19.uk = function () {
                    var _0x9f75x7 = $('#profile-avatar'),
                        _0x9f75x4 = $('#profile-username'),
                        _0x9f75x1e = $('#profile-experience-bar'),
                        _0x9f75x15 = $('#profile-experience-val'),
                        _0x9f75x1f = $('#profile-level'),
                        _0x9f75x20 = $('#profile-stat-highScore'),
                        _0x9f75x21 = $('#profile-stat-bestSurvivalTime'),
                        _0x9f75xb = $('#profile-stat-kills'),
                        _0x9f75x9 = $('#profile-stat-headshots'),
                        _0x9f75x22 = $('#profile-stat-gamesPlayed'),
                        _0x9f75x23 = $('#profile-stat-totalTimeSpent'),
                        _0x9f75x24 = $('#profile-stat-registrationDate'),
                        _0x9f75x25 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.profile.tab'), !0)
                        });
                    return _0x9f75x25.prototype.za = function () {
                            _0x9f75x25.parent.prototype.za.call(this)
                        },
                        _0x9f75x25.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.wo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x25.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te();
                            var _0x9f75x19 = _0x9f75x6.L.Yj.Nl(),
                                _0x9f75x3 = moment([_0x9f75x19.year, _0x9f75x19.month - 1, _0x9f75x19.day]).format('LL');
                            _0x9f75x4.html(_0x9f75x6.L.Yj.tl()),
                                _0x9f75x7.attr('src', _0x9f75x6.L.Yj.vl()),
                                _0x9f75x1e.width(100 * _0x9f75x6.L.Yj.Al() / _0x9f75x6.L.Yj.Bl() + '%'),
                                _0x9f75x15.html(_0x9f75x6.L.Yj.Al() + ' / ' + _0x9f75x6.L.Yj.Bl()),
                                _0x9f75x1f.html(_0x9f75x6.L.Yj.zl()),
                                _0x9f75x20.html(_0x9f75x6.L.Yj.Hl()),
                                _0x9f75x21.html(_0x9f75xd.U(_0x9f75x6.L.Yj.Il())),
                                _0x9f75xb.html(_0x9f75x6.L.Yj.Jl()),
                                _0x9f75x9.html(_0x9f75x6.L.Yj.Kl()),
                                _0x9f75x22.html(_0x9f75x6.L.Yj.Ll()),
                                _0x9f75x23.html(_0x9f75xd.U(_0x9f75x6.L.Yj.Ml())),
                                _0x9f75x24.html(_0x9f75x3)
                        },
                        _0x9f75x25
                }(),
                _0x9f75x19.xk = function () {
                    var _0x9f75x7 = $('#settings-music-enabled-switch'),
                        _0x9f75x4 = $('#settings-sfx-enabled-switch'),
                        _0x9f75x1e = $('#settings-show-names-switch'),
                        _0x9f75x15 = $('#popup-logout'),
                        _0x9f75x1f = $('#popup-logout-container'),
                        _0x9f75x20 = $('#popup-delete-account'),
                        _0x9f75x21 = $('#popup-delete-account-container'),
                        _0x9f75xb = $('#popup-withdraw-consent'),
                        _0x9f75x9 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.settings.tab'), !1);
                            var _0x9f75x3 = this;
                            _0x9f75x7.click(function () {
                                    var _0x9f75x3 = !!_0x9f75x7.prop('checked');
                                    _0x9f75x19.kg.vg(_0x9f75x19.kg.ng, _0x9f75x3, 30),
                                        _0x9f75x6.L.Si.Ie(_0x9f75x3),
                                        _0x9f75x6.L.Si.Se()
                                }),
                                _0x9f75x4.click(function () {
                                    var _0x9f75x3 = !!_0x9f75x4.prop('checked');
                                    _0x9f75x19.kg.vg(_0x9f75x19.kg.og, _0x9f75x3, 30),
                                        _0x9f75x6.L.Si.Fe(_0x9f75x3),
                                        _0x9f75x6.L.Si.Se()
                                }),
                                _0x9f75x1e.click(function () {
                                    _0x9f75x6.L.Si.Se()
                                }),
                                _0x9f75x15.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Fo(500),
                                        _0x9f75x6.L.Yj.$l()
                                }),
                                _0x9f75x20.click(function () {
                                    _0x9f75x6.L.Yj.Xj() ? (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.nk)) : _0x9f75x6.L.Si.Xe()
                                }),
                                _0x9f75xb.click(function () {
                                    _0x9f75x6.L.Uo() ? (_0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.lk)) : _0x9f75x6.L.Si.Xe()
                                })
                        });
                    return _0x9f75x9.prototype.za = function () {
                            _0x9f75x9.parent.prototype.za.call(this);
                            var _0x9f75x3;
                            switch (_0x9f75x19.kg.wg(_0x9f75x19.kg.ng)) {
                            case 'false':
                                _0x9f75x3 = !1;
                                break;
                            default:
                                _0x9f75x3 = !0
                            };
                            _0x9f75x7.prop('checked', _0x9f75x3),
                                _0x9f75x6.L.Si.Ie(_0x9f75x3);
                            var _0x9f75x15;
                            switch (_0x9f75x19.kg.wg(_0x9f75x19.kg.og)) {
                            case 'false':
                                _0x9f75x15 = !1;
                                break;
                            default:
                                _0x9f75x15 = !0
                            };
                            _0x9f75x4.prop('checked', _0x9f75x15),
                                _0x9f75x6.L.Si.Fe(_0x9f75x15);
                            var _0x9f75x20;
                            switch (_0x9f75x19.kg.wg(_0x9f75x19.kg.mg)) {
                            case 'false':
                                _0x9f75x20 = !1;
                                break;
                            default:
                                _0x9f75x20 = !0
                            };
                            _0x9f75x1e.prop('checked', _0x9f75x20),
                                _0x9f75x6.L.Yj.Ol(function () {
                                    _0x9f75x1f.toggle(_0x9f75x6.L.Yj.Xj()),
                                        _0x9f75x21.toggle(_0x9f75x6.L.Yj.Xj())
                                })
                        },
                        _0x9f75x9.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.yo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x9.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te(),
                                _0x9f75x6.L.Uo() ? _0x9f75xb.show() : _0x9f75xb.hide()
                        },
                        _0x9f75x9.prototype.ni = function () {
                            return _0x9f75x1e.prop('checked')
                        },
                        _0x9f75x9
                }(),
                _0x9f75x19.zk = function () {
                    var _0x9f75x7 = $('#store-view-canv'),
                        _0x9f75x4 = $('#skin-description-text'),
                        _0x9f75x1e = $('#skin-group-description-text'),
                        _0x9f75x15 = $('#store-locked-bar'),
                        _0x9f75x1f = $('#store-locked-bar-text'),
                        _0x9f75x20 = $('#store-buy-button'),
                        _0x9f75x21 = $('#store-item-price'),
                        _0x9f75xb = $('#store-groups'),
                        _0x9f75x9 = $('#store-view-prev'),
                        _0x9f75x22 = $('#store-view-next'),
                        _0x9f75x23 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.skins.tab'), !0);
                            var _0x9f75x3 = this;
                            this.Vo = null,
                                this.Wo = [],
                                this.Xo = {},
                                this.Yo = new _0x9f75x19.tm(_0x9f75x7),
                                _0x9f75x20.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Zo()
                                }),
                                _0x9f75x9.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Vo.$o()
                                }),
                                _0x9f75x22.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x3.Vo._o()
                                })
                        });
                    _0x9f75x23.prototype.za = function () {
                            _0x9f75x23.parent.prototype.za.call(this);
                            var _0x9f75x19 = this;
                            _0x9f75x6.L.bd.qc(function () {
                                    var _0x9f75x3 = _0x9f75x6.L.bd.nc();
                                    _0x9f75x19.Wo = [];
                                    for (var _0x9f75x7 = 0; _0x9f75x7 < _0x9f75x3.skinGroupArrayDict.length; _0x9f75x7++) {
                                        _0x9f75x19.Wo.push(new _0x9f75x24(_0x9f75x19, _0x9f75x3.skinGroupArrayDict[_0x9f75x7]))
                                    };
                                    _0x9f75x19.Xo = {};
                                    for (var _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x3.skinArrayDict.length; _0x9f75x4++) {
                                        var _0x9f75x1e = _0x9f75x3.skinArrayDict[_0x9f75x4];
                                        _0x9f75x19.Xo[_0x9f75x1e.id] = _0x9f75x1e
                                    };
                                    _0x9f75x19.ap()
                                }),
                                this.bp(!1),
                                _0x9f75x6.L.ao.Pj(function () {
                                    _0x9f75x19.bp(!1)
                                })
                        },
                        _0x9f75x23.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.zo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x23.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ge(_0x9f75x19.xe.Ae.rf),
                                _0x9f75x6.L.Si.Te(),
                                this.ap(),
                                this.Yo._f(!0)
                        },
                        _0x9f75x23.prototype.Rk = function () {
                            this.Yo._f(!1)
                        },
                        _0x9f75x23.prototype.$f = function () {
                            this.Yo.$f()
                        },
                        _0x9f75x23.prototype.cg = function (_0x9f75x19, _0x9f75x6) {
                            this.Yo.cg()
                        },
                        _0x9f75x23.prototype.ap = function () {
                            var _0x9f75x3 = this,
                                _0x9f75x7 = this;
                            _0x9f75xb.empty();
                            for (var _0x9f75x4 = 0; _0x9f75x4 < this.Wo.length; _0x9f75x4++) {
                                ! function (_0x9f75x19) {
                                    var _0x9f75x4 = _0x9f75x3.Wo[_0x9f75x19],
                                        _0x9f75x1e = document.createElement('li');
                                    _0x9f75xb.append(_0x9f75x1e);
                                    var _0x9f75x15 = $(_0x9f75x1e);
                                    _0x9f75x15.html(_0x9f75x4.cp()),
                                        _0x9f75x15.click(function () {
                                            _0x9f75x6.L.Si.Se(),
                                                _0x9f75x7.dp(_0x9f75x4)
                                        }),
                                        _0x9f75x4.ep = _0x9f75x15
                                }(_0x9f75x4)
                            };
                            if (this.Wo.length > 0) {
                                for (var _0x9f75x1e = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Ij), _0x9f75x15 = 0; _0x9f75x15 < this.Wo.length; _0x9f75x15++) {
                                    for (var _0x9f75x1f = this.Wo[_0x9f75x15], _0x9f75x20 = _0x9f75x1f.fp.list, _0x9f75x21 = 0; _0x9f75x21 < _0x9f75x20.length; _0x9f75x21++) {
                                        if (_0x9f75x20[_0x9f75x21] === _0x9f75x1e) {
                                            return _0x9f75x1f.gp = _0x9f75x21,
                                                void(this.dp(_0x9f75x1f))
                                        }
                                    }
                                };
                                this.dp(this.Wo[0])
                            }
                        },
                        _0x9f75x23.prototype.dp = function (_0x9f75x19) {
                            if (this.Vo !== _0x9f75x19) {
                                if (this.Vo = _0x9f75x19,
                                    _0x9f75xb.children().removeClass('pressed'),
                                    this.Vo.ep && this.Vo.ep.addClass('pressed'),
                                    _0x9f75x1e.html(''),
                                    null != _0x9f75x19.fp) {
                                    var _0x9f75x3 = _0x9f75x6.L.bd.nc().textDict[_0x9f75x19.fp.description];
                                    null != _0x9f75x3 && _0x9f75x1e.html(_0x9f75xd.V(_0x9f75xd.P(_0x9f75x3)))
                                };
                                this.bp(!0)
                            }
                        },
                        _0x9f75x23.prototype.hp = function () {
                            return null == this.Vo ? _0x9f75x19.gj.ij() : this.Vo.ip()
                        },
                        _0x9f75x23.prototype.Zo = function () {
                            var _0x9f75x19 = this,
                                _0x9f75x6 = this.hp();
                            if (_0x9f75x6.kj()) {
                                var _0x9f75xd = _0x9f75x6.tc();
                                _0x9f75x19.jp(_0x9f75xd)
                            }
                        },
                        _0x9f75x23.prototype.jp = function (_0x9f75xd) {
                            var _0x9f75x3 = _0x9f75x6.L.ao.Wj(_0x9f75xd, _0x9f75x19.Jj.Ij);
                            if (null != _0x9f75x3) {
                                var _0x9f75x7 = _0x9f75x3.Zj();
                                if (!(_0x9f75x6.L.Yj.yl() < _0x9f75x7)) {
                                    var _0x9f75x4 = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Ij),
                                        _0x9f75x1e = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Kj),
                                        _0x9f75x15 = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Lj),
                                        _0x9f75x1f = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Nj),
                                        _0x9f75x20 = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Mj),
                                        _0x9f75x21 = this.Fo(5e3);
                                    _0x9f75x6.L.Yj.Xl(_0x9f75xd, _0x9f75x19.Jj.Ij, function () {
                                        _0x9f75x21.Jo(),
                                            _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Jk)
                                    }, function () {
                                        _0x9f75x6.L.Yj.Rl(function () {
                                            _0x9f75x6.L.ao.Vj(_0x9f75x4, _0x9f75x19.Jj.Ij),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x1e, _0x9f75x19.Jj.Kj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x15, _0x9f75x19.Jj.Lj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x1f, _0x9f75x19.Jj.Nj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x20, _0x9f75x19.Jj.Mj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75xd, _0x9f75x19.Jj.Ij),
                                                _0x9f75x21.Jo()
                                        })
                                    })
                                }
                            }
                        },
                        _0x9f75x23.prototype.bp = function (_0x9f75x3) {
                            var _0x9f75x7 = _0x9f75x6.L.ao.Oj(),
                                _0x9f75x1e = this.hp();
                            if (_0x9f75x1e.kj()) {
                                var _0x9f75xb = _0x9f75x1e.tc(),
                                    _0x9f75x9 = _0x9f75x6.L.ao.Wj(_0x9f75xb, _0x9f75x19.Jj.Ij),
                                    _0x9f75x22 = !1;
                                if (_0x9f75x6.L.ao.Sj(_0x9f75xb, _0x9f75x19.Jj.Ij)) {
                                    _0x9f75x15.hide(),
                                        _0x9f75x20.hide()
                                } else {
                                    if (null == _0x9f75x9 || _0x9f75x9.$j()) {
                                        if (_0x9f75x22 = !0,
                                            _0x9f75x15.show(),
                                            _0x9f75x20.hide(),
                                            _0x9f75x1f.text(_0x9f75xd.O('index.game.popup.menu.store.locked')),
                                            null != _0x9f75x9 && _0x9f75x9.$j()) {
                                            var _0x9f75x23 = _0x9f75x6.L.bd.nc().textDict[_0x9f75x9.Um()];
                                            null != _0x9f75x23 && _0x9f75x1f.text(_0x9f75xd.P(_0x9f75x23))
                                        }
                                    } else {
                                        _0x9f75x15.hide(),
                                            _0x9f75x20.show(),
                                            _0x9f75x21.html(_0x9f75x9.Zj())
                                    }
                                };
                                if (_0x9f75x4.html(''),
                                    null != _0x9f75x9 && null != _0x9f75x9.Vm()) {
                                    var _0x9f75x24 = _0x9f75x6.L.bd.nc().textDict[_0x9f75x9.Vm()];
                                    null != _0x9f75x24 && _0x9f75x4.html(_0x9f75xd.V(_0x9f75xd.P(_0x9f75x24)))
                                };
                                this.Yo.om(_0x9f75x7.jn(_0x9f75xb)),
                                    this.Yo.Km(_0x9f75x22),
                                    _0x9f75x3 && _0x9f75x6.L.ao.Vj(_0x9f75xb, _0x9f75x19.Jj.Ij)
                            }
                        };
                    var _0x9f75x24 = function () {
                        function _0x9f75x6(_0x9f75x19, _0x9f75x6) {
                            this.kp = _0x9f75x19,
                                this.gp = 0,
                                this.fp = _0x9f75x6
                        }
                        return _0x9f75x6.prototype.$o = function () {
                                --this.gp < 0 && (this.gp = this.fp.list.length - 1),
                                    this.kp.bp(!0)
                            },
                            _0x9f75x6.prototype._o = function () {
                                ++this.gp >= this.fp.list.length && (this.gp = 0),
                                    this.kp.bp(!0)
                            },
                            _0x9f75x6.prototype.cp = function () {
                                return _0x9f75xd.P(this.fp.name)
                            },
                            _0x9f75x6.prototype.ip = function () {
                                return this.gp >= this.fp.list.length ? _0x9f75x19.gj.ij() : _0x9f75x19.gj.jj(this.fp.list[this.gp])
                            },
                            _0x9f75x6
                    }();
                    return _0x9f75x23
                }(),
                _0x9f75x19.Bk = function () {
                    var _0x9f75x7 = $('#store-go-coins-button'),
                        _0x9f75x4 = $('#store-go-skins-button'),
                        _0x9f75x1e = $('#store-go-wear-button'),
                        _0x9f75x15 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.store.tab'), !0),
                                _0x9f75x7.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.pk)
                                }),
                                _0x9f75x4.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.yk)
                                }),
                                _0x9f75x1e.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Ck)
                                })
                        });
                    return _0x9f75x15.prototype.za = function () {
                            _0x9f75x15.parent.prototype.za.call(this)
                        },
                        _0x9f75x15.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.Ao, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x15.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te()
                        },
                        _0x9f75x15
                }(),
                _0x9f75x19.Dk = function () {
                    var _0x9f75x7 = $('#wear-view-canv'),
                        _0x9f75x4 = $('#wear-description-text'),
                        _0x9f75x1e = $('#wear-locked-bar'),
                        _0x9f75x15 = $('#wear-locked-bar-text'),
                        _0x9f75x1f = $('#wear-buy-button'),
                        _0x9f75x20 = $('#wear-item-price'),
                        _0x9f75x21 = $('#wear-eyes-button'),
                        _0x9f75xb = $('#wear-mouths-button'),
                        _0x9f75x9 = $('#wear-glasses-button'),
                        _0x9f75x22 = $('#wear-hats-button'),
                        _0x9f75x23 = $('#wear-tint-chooser'),
                        _0x9f75x24 = $('#wear-view-prev'),
                        _0x9f75x25 = $('#wear-view-next'),
                        _0x9f75x5 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            var _0x9f75x3 = this;
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.wear.tab'), !0);
                            var _0x9f75x4 = this;
                            this.lp = [],
                                this.Kj = new _0x9f75x26(this, _0x9f75x19.Jj.Kj, _0x9f75x21),
                                this.Lj = new _0x9f75x26(this, _0x9f75x19.Jj.Lj, _0x9f75xb),
                                this.Nj = new _0x9f75x26(this, _0x9f75x19.Jj.Nj, _0x9f75x9),
                                this.Mj = new _0x9f75x26(this, _0x9f75x19.Jj.Mj, _0x9f75x22),
                                this.mp = null,
                                this.np = null,
                                this.op = null,
                                this.pp = null,
                                this.qp = null,
                                this.rp = null,
                                this.Yo = new _0x9f75x19.tm(_0x9f75x7),
                                _0x9f75x1f.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.sp()
                                }),
                                _0x9f75x24.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.mp.tp()
                                }),
                                _0x9f75x25.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.mp.up()
                                }),
                                _0x9f75x21.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.vp(_0x9f75x3.Kj)
                                }),
                                _0x9f75xb.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.vp(_0x9f75x3.Lj)
                                }),
                                _0x9f75x9.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.vp(_0x9f75x3.Nj)
                                }),
                                _0x9f75x22.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x4.vp(_0x9f75x3.Mj)
                                }),
                                this.lp.push(this.Kj),
                                this.lp.push(this.Lj),
                                this.lp.push(this.Nj),
                                this.lp.push(this.Mj)
                        });
                    _0x9f75x5.prototype.za = function () {
                            _0x9f75x5.parent.prototype.za.call(this);
                            var _0x9f75x19 = this;
                            _0x9f75x6.L.bd.qc(function () {
                                    var _0x9f75x3 = _0x9f75x6.L.bd.nc();
                                    _0x9f75x19.np = _0x9f75x3.eyesDict,
                                        _0x9f75x19.op = _0x9f75x3.mouthDict,
                                        _0x9f75x19.pp = _0x9f75x3.glassesDict,
                                        _0x9f75x19.qp = _0x9f75x3.hatDict,
                                        _0x9f75x19.rp = _0x9f75x3.colorDict,
                                        _0x9f75x19.Kj.wp(_0x9f75x3.eyesVariantArray),
                                        _0x9f75x19.Kj.xp(_0x9f75x19.np),
                                        _0x9f75x19.Lj.wp(_0x9f75x3.mouthVariantArray),
                                        _0x9f75x19.Lj.xp(_0x9f75x19.op),
                                        _0x9f75x19.Nj.wp(_0x9f75x3.glassesVariantArray),
                                        _0x9f75x19.Nj.xp(_0x9f75x19.pp),
                                        _0x9f75x19.Mj.wp(_0x9f75x3.hatVariantArray),
                                        _0x9f75x19.Mj.xp(_0x9f75x19.qp)
                                }),
                                this.bp(!1),
                                _0x9f75x6.L.ao.Pj(function () {
                                    _0x9f75x19.bp(!1)
                                })
                        },
                        _0x9f75x5.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.Bo, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x5.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ge(_0x9f75x19.xe.Ae.rf),
                                _0x9f75x6.L.Si.Te(),
                                this.vp(null != this.mp ? this.mp : this.Kj),
                                this.Yo._f(!0)
                        },
                        _0x9f75x5.prototype.Rk = function () {
                            this.Yo._f(!1)
                        },
                        _0x9f75x5.prototype.$f = function () {
                            this.Yo.$f()
                        },
                        _0x9f75x5.prototype.cg = function (_0x9f75x19, _0x9f75x6) {
                            this.Yo.cg()
                        },
                        _0x9f75x5.prototype.vp = function (_0x9f75x19) {
                            this.mp = _0x9f75x19;
                            for (var _0x9f75x6 = 0; _0x9f75x6 < this.lp.length; _0x9f75x6++) {
                                this.lp[_0x9f75x6].Oo.removeClass('pressed')
                            };
                            this.mp.Oo.addClass('pressed'),
                                this.mp.Wk()
                        },
                        _0x9f75x5.prototype.yp = function () {
                            return null == this.mp ? _0x9f75x19.gj.ij() : _0x9f75x19.gj.jj({
                                re: this.mp.ip(),
                                Ed: this.mp.Ed
                            })
                        },
                        _0x9f75x5.prototype.sp = function () {
                            var _0x9f75x19 = this,
                                _0x9f75x6 = this.yp();
                            if (_0x9f75x6.kj()) {
                                var _0x9f75xd = _0x9f75x6.tc();
                                _0x9f75x19.zp(_0x9f75xd.re, _0x9f75xd.Ed)
                            }
                        },
                        _0x9f75x5.prototype.zp = function (_0x9f75xd, _0x9f75x3) {
                            var _0x9f75x7 = _0x9f75x6.L.ao.Wj(_0x9f75xd, _0x9f75x3);
                            if (null != _0x9f75x7) {
                                var _0x9f75x4 = _0x9f75x7.Zj();
                                if (!(_0x9f75x6.L.Yj.yl() < _0x9f75x4)) {
                                    var _0x9f75x1e = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Ij),
                                        _0x9f75x15 = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Kj),
                                        _0x9f75x1f = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Lj),
                                        _0x9f75x20 = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Nj),
                                        _0x9f75x21 = _0x9f75x6.L.ao.Hj(_0x9f75x19.Jj.Mj),
                                        _0x9f75xb = this.Fo(5e3);
                                    _0x9f75x6.L.Yj.Xl(_0x9f75xd, _0x9f75x3, function () {
                                        _0x9f75xb.Jo(),
                                            _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Jk)
                                    }, function () {
                                        _0x9f75x6.L.Yj.Rl(function () {
                                            _0x9f75x6.L.ao.Vj(_0x9f75x1e, _0x9f75x19.Jj.Ij),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x15, _0x9f75x19.Jj.Kj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x1f, _0x9f75x19.Jj.Lj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x20, _0x9f75x19.Jj.Nj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75x21, _0x9f75x19.Jj.Mj),
                                                _0x9f75x6.L.ao.Vj(_0x9f75xd, _0x9f75x3),
                                                _0x9f75xb.Jo()
                                        })
                                    })
                                }
                            }
                        },
                        _0x9f75x5.prototype.bp = function (_0x9f75x3) {
                            var _0x9f75x7 = _0x9f75x6.L.ao.Oj(),
                                _0x9f75x21 = this.yp();
                            if (_0x9f75x21.kj()) {
                                var _0x9f75xb = _0x9f75x21.tc(),
                                    _0x9f75x9 = _0x9f75x6.L.ao.Wj(_0x9f75xb.re, _0x9f75xb.Ed),
                                    _0x9f75x22 = !1;
                                if (_0x9f75x6.L.ao.Sj(_0x9f75xb.re, _0x9f75xb.Ed)) {
                                    _0x9f75x1e.hide(),
                                        _0x9f75x1f.hide()
                                } else {
                                    if (null == _0x9f75x9 || _0x9f75x9.$j()) {
                                        if (_0x9f75x22 = !0,
                                            _0x9f75x1e.show(),
                                            _0x9f75x1f.hide(),
                                            _0x9f75x15.text(_0x9f75xd.O('index.game.popup.menu.store.locked')),
                                            null != _0x9f75x9 && _0x9f75x9.$j()) {
                                            var _0x9f75x23 = _0x9f75x6.L.bd.nc().textDict[_0x9f75x9.Um()];
                                            null != _0x9f75x23 && _0x9f75x15.text(_0x9f75xd.P(_0x9f75x23))
                                        }
                                    } else {
                                        _0x9f75x1e.hide(),
                                            _0x9f75x1f.show(),
                                            _0x9f75x20.html(_0x9f75x9.Zj())
                                    }
                                };
                                if (_0x9f75x4.html(''),
                                    null != _0x9f75x9 && null != _0x9f75x9.Vm()) {
                                    var _0x9f75x24 = _0x9f75x6.L.bd.nc().textDict[_0x9f75x9.Vm()];
                                    null != _0x9f75x24 && _0x9f75x4.html(_0x9f75xd.V(_0x9f75xd.P(_0x9f75x24)))
                                };
                                var _0x9f75x25 = this.Yo;
                                switch (_0x9f75xb.Ed) {
                                case _0x9f75x19.Jj.Kj:
                                    _0x9f75x25.om(_0x9f75x7.kn(_0x9f75xb.re)),
                                        _0x9f75x25.Lm(_0x9f75x22);
                                    break;
                                case _0x9f75x19.Jj.Lj:
                                    _0x9f75x25.om(_0x9f75x7.ln(_0x9f75xb.re)),
                                        _0x9f75x25.Mm(_0x9f75x22);
                                    break;
                                case _0x9f75x19.Jj.Nj:
                                    _0x9f75x25.om(_0x9f75x7.nn(_0x9f75xb.re)),
                                        _0x9f75x25.Om(_0x9f75x22);
                                    break;
                                case _0x9f75x19.Jj.Mj:
                                    _0x9f75x25.om(_0x9f75x7.mn(_0x9f75xb.re)),
                                        _0x9f75x25.Nm(_0x9f75x22)
                                };
                                _0x9f75x3 && _0x9f75x6.L.ao.Vj(_0x9f75xb.re, _0x9f75xb.Ed)
                            }
                        };
                    var _0x9f75x26 = function () {
                        function _0x9f75x19(_0x9f75x19, _0x9f75x6, _0x9f75xd) {
                            this.kp = _0x9f75x19,
                                this.Ed = _0x9f75x6,
                                this.Oo = _0x9f75xd,
                                this.sc = {},
                                this.Ap = [
                                    []
                                ],
                                this.Bp = -10,
                                this.Cp = -10
                        }
                        return _0x9f75x19.prototype.wp = function (_0x9f75x19) {
                                this.Ap = _0x9f75x19
                            },
                            _0x9f75x19.prototype.xp = function (_0x9f75x19) {
                                this.sc = _0x9f75x19
                            },
                            _0x9f75x19.prototype.Wk = function () {
                                for (var _0x9f75x19 = _0x9f75x6.L.ao.Hj(this.Ed), _0x9f75xd = 0; _0x9f75xd < this.Ap.length; _0x9f75xd++) {
                                    for (var _0x9f75x3 = 0; _0x9f75x3 < this.Ap[_0x9f75xd].length; _0x9f75x3++) {
                                        if (this.Ap[_0x9f75xd][_0x9f75x3] === _0x9f75x19) {
                                            return this.Dp(_0x9f75xd),
                                                void(this.Ep(_0x9f75x3))
                                        }
                                    }
                                };
                                this.Dp(0),
                                    this.Ep(0)
                            },
                            _0x9f75x19.prototype.tp = function () {
                                var _0x9f75x19 = this.Bp - 1;
                                _0x9f75x19 < 0 && (_0x9f75x19 = this.Ap.length - 1),
                                    this.Dp(_0x9f75x19),
                                    this.Ep(this.Cp % this.Ap[_0x9f75x19].length)
                            },
                            _0x9f75x19.prototype.up = function () {
                                var _0x9f75x19 = this.Bp + 1;
                                _0x9f75x19 >= this.Ap.length && (_0x9f75x19 = 0),
                                    this.Dp(_0x9f75x19),
                                    this.Ep(this.Cp % this.Ap[_0x9f75x19].length)
                            },
                            _0x9f75x19.prototype.Dp = function (_0x9f75x19) {
                                var _0x9f75x3 = this;
                                if (!(_0x9f75x19 < 0 || _0x9f75x19 >= this.Ap.length)) {
                                    this.Bp = _0x9f75x19,
                                        _0x9f75x23.empty();
                                    var _0x9f75x7 = this.Ap[this.Bp];
                                    if (_0x9f75x7.length > 1) {
                                        for (var _0x9f75x4 = 0; _0x9f75x4 < _0x9f75x7.length; _0x9f75x4++) {
                                            ! function (_0x9f75x19) {
                                                var _0x9f75x4 = _0x9f75x7[_0x9f75x19],
                                                    _0x9f75x1e = _0x9f75x3.sc[_0x9f75x4],
                                                    _0x9f75x15 = '#' + _0x9f75x3.kp.rp[_0x9f75x1e.prime],
                                                    _0x9f75x1f = $('<div style="border-color:' + _0x9f75x15 + '"></div>');
                                                _0x9f75x1f.click(function () {
                                                        _0x9f75x6.L.Si.Se(),
                                                            _0x9f75x3.Ep(_0x9f75x19)
                                                    }),
                                                    _0x9f75x23.append(_0x9f75x1f)
                                            }(_0x9f75x4)
                                        }
                                    }
                                }
                            },
                            _0x9f75x19.prototype.Ep = function (_0x9f75x19) {
                                if (!(_0x9f75x19 < 0 || _0x9f75x19 >= this.Ap[this.Bp].length)) {
                                    this.Cp = _0x9f75x19,
                                        _0x9f75x23.children().css('background-color', 'transparent');
                                    var _0x9f75x6 = _0x9f75x23.children(':nth-child(' + (1 + _0x9f75x19) + ')');
                                    _0x9f75x6.css('background-color', _0x9f75x6.css('border-color')),
                                        this.kp.bp(!0)
                                }
                            },
                            _0x9f75x19.prototype.ip = function () {
                                return this.Ap[this.Bp][this.Cp]
                            },
                            _0x9f75x19
                    }();
                    return _0x9f75x5
                }(),
                _0x9f75x19.mk = function () {
                    var _0x9f75x7 = $('#withdraw-consent-yes'),
                        _0x9f75x4 = $('#withdraw-consent-no'),
                        _0x9f75x1e = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.consent.tab'), !1),
                                _0x9f75x7.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Uo() ? (_0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.rf),
                                            _0x9f75x6.L.Fp(!1, !0),
                                            _0x9f75x6.L.Fg.Gk.no(new _0x9f75x19.Gp)) : _0x9f75x6.L.Fg.Tk()
                                }),
                                _0x9f75x4.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Tk()
                                })
                        });
                    return _0x9f75x1e.prototype.za = function () {
                            _0x9f75x1e.parent.prototype.za.call(this)
                        },
                        _0x9f75x1e.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.Co, 200),
                                _0x9f75x3.b.d(_0x9f75x19.po.Do, 50)
                        },
                        _0x9f75x1e.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Te()
                        },
                        _0x9f75x1e
                }(),
                _0x9f75x19.ok = function () {
                    var _0x9f75x7 = $('#delete-account-timer'),
                        _0x9f75x4 = $('#delete-account-yes'),
                        _0x9f75x1e = $('#delete-account-no'),
                        _0x9f75x15 = _0x9f75xd.X(_0x9f75x19.po, function () {
                            _0x9f75x19.po.call(this, _0x9f75xd.O('index.game.popup.menu.delete.tab'), !1),
                                _0x9f75x4.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Yj.Xj() ? (_0x9f75x6.L.Yj.gm(),
                                            _0x9f75x6.L.Yj.$l()) : _0x9f75x6.L.Fg.Tk()
                                }),
                                _0x9f75x1e.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Tk()
                                }),
                                this.Hp = []
                        });
                    return _0x9f75x15.prototype.za = function () {
                            _0x9f75x15.parent.prototype.za.call(this)
                        },
                        _0x9f75x15.prototype.Eo = function () {
                            _0x9f75x3.b.d(_0x9f75x19.po.uo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.vo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.wo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.xo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.yo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.zo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Ao, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Bo, 50),
                                _0x9f75x3.b.d(_0x9f75x19.po.Co, 50),
                                _0x9f75x3.b.c(_0x9f75x19.po.Do, 200)
                        },
                        _0x9f75x15.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Xe(),
                                _0x9f75x3.b.d(_0x9f75x4, 1),
                                _0x9f75x3.b.c(_0x9f75x7, 1),
                                _0x9f75x7.text('.. 10 ..'),
                                this.Ip(),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 9 ..')
                                }, 1e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 8 ..')
                                }, 2e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 7 ..')
                                }, 3e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 6 ..')
                                }, 4e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 5 ..')
                                }, 5e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 4 ..')
                                }, 6e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 3 ..')
                                }, 7e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 2 ..')
                                }, 8e3),
                                this.Jp(function () {
                                    _0x9f75x7.text('.. 1 ..')
                                }, 9e3),
                                this.Jp(function () {
                                    _0x9f75x3.b.c(_0x9f75x4, 300),
                                        _0x9f75x3.b.d(_0x9f75x7, 1)
                                }, 1e4)
                        },
                        _0x9f75x15.prototype.Jp = function (_0x9f75x19, _0x9f75x6) {
                            var _0x9f75x3 = _0x9f75xd.S(_0x9f75x19, _0x9f75x6);
                            this.Hp.push(_0x9f75x3)
                        },
                        _0x9f75x15.prototype.Ip = function () {
                            for (var _0x9f75x19 = 0; _0x9f75x19 < this.Hp.length; _0x9f75x19++) {
                                _0x9f75xd.T(this.Hp[_0x9f75x19])
                            };
                            this.Hp = []
                        },
                        _0x9f75x15
                }(),
                _0x9f75x19.Kp = function () {
                    function _0x9f75x19() {
                        this.oo = function () {}
                    }
                    return _0x9f75x19.prototype.Kf = function () {},
                        _0x9f75x19.prototype.Xk = function () {},
                        _0x9f75x19
                }(),
                _0x9f75x19.Wl = function () {
                    var _0x9f75x3 = _0x9f75xd.X(_0x9f75x19.Kp, function (_0x9f75x3) {
                        _0x9f75x19.Kp.call(this);
                        var _0x9f75x7 = _0x9f75xd.ja() + '_' + Math.floor(1e3 + 8999 * Math.random());
                        this.Lp = $('<div id="' ['concat'](_0x9f75x7, '" class="toaster toaster-coins"><img class="toaster-coins-img" alt="Wormate Coin" src="/images/coin_320.png" /><div class="toaster-coins-val">').concat(_0x9f75x3, '</div><div class="toaster-coins-close">').concat(_0x9f75xd.O('index.game.toaster.continue'), '</div></div>'));
                        var _0x9f75x4 = this;
                        this.Lp.find('.toaster-coins-close').click(function () {
                            _0x9f75x6.L.Si.Se(),
                                _0x9f75x4.oo()
                        })
                    });
                    return _0x9f75x3.prototype.Kf = function () {
                            return this.Lp
                        },
                        _0x9f75x3.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ve()
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.Vl = function () {
                    var _0x9f75x3 = _0x9f75xd.X(_0x9f75x19.Kp, function (_0x9f75x3) {
                        _0x9f75x19.Kp.call(this);
                        var _0x9f75x7 = _0x9f75xd.ja() + '_' + Math.floor(1e3 + 8999 * Math.random());
                        this.Lp = $('<div id="' ['concat'](_0x9f75x7, '" class="toaster toaster-levelup"><img class="toaster-levelup-img" alt="Wormate Level Up Star" src="/images/level-star.svg" /><div class="toaster-levelup-val">').concat(_0x9f75x3, '</div><div class="toaster-levelup-text">').concat(_0x9f75xd.O('index.game.toaster.levelup'), '</div><div class="toaster-levelup-close">').concat(_0x9f75xd.O('index.game.toaster.continue'), '</div></div>'));
                        var _0x9f75x4 = this;
                        this.Lp.find('.toaster-levelup-close').click(function () {
                            _0x9f75x6.L.Si.Se(),
                                _0x9f75x4.oo()
                        })
                    });
                    return _0x9f75x3.prototype.Kf = function () {
                            return this.Lp
                        },
                        _0x9f75x3.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ue()
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.Gp = function () {
                    var _0x9f75x3 = _0x9f75xd.X(_0x9f75x19.Kp, function () {
                        _0x9f75x19.Kp.call(this);
                        var _0x9f75x3 = this,
                            _0x9f75x7 = _0x9f75xd.ja() + '_' + Math.floor(1e3 + 8999 * Math.random());
                        this.Lp = $('' + '<div id="' + _0x9f75x7 + '" class="toaster toaster-consent-accepted">' + '    <img class="toaster-consent-accepted-logo" src="' + _0x9f75x6.A.F + '" alt="Wormate.io logo"/>' + '' + '    <div class="toaster-consent-accepted-container">' + '        <span class="toaster-consent-accepted-text">' + _0x9f75xd.O('index.game.toaster.consent.text').replaceAll(' ', '&nbsp;').replaceAll('', '<br/>') + '</span>' + '        <a class="toaster-consent-accepted-link" href="/privacy-policy">' + _0x9f75xd.O('index.game.toaster.consent.link') + '</a>' + '    </div>' + '' + '    <div class="toaster-consent-close">' + _0x9f75xd.O('index.game.toaster.consent.iAccept') + '</div>' + '</div>'),
                            this.Mp = this.Lp.find('.toaster-consent-close'),
                            this.Mp.hide(),
                            this.Mp.click(function () {
                                _0x9f75x6.L.Si.Se(),
                                    _0x9f75x6.L.Uo() && _0x9f75x6.L.Fp(!0, !0),
                                    _0x9f75x3.oo()
                            })
                    });
                    return _0x9f75x3.prototype.Kf = function () {
                            return this.Lp
                        },
                        _0x9f75x3.prototype.Xk = function () {
                            var _0x9f75x19 = this;
                            _0x9f75x6.L.Uo() && !_0x9f75x6.L.xl() ? (_0x9f75x6.L.Si.Xe(),
                                _0x9f75xd.S(function () {
                                    _0x9f75x19.Mp.fadeIn(300)
                                }, 2e3)) : _0x9f75xd.S(function () {
                                _0x9f75x19.oo()
                            }, 0)
                        },
                        _0x9f75x3
                }(),
                _0x9f75x19.Kk = function () {
                    var _0x9f75x7 = $('#error-gateway-connection-retry'),
                        _0x9f75x4 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                            _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn),
                                _0x9f75x7.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.ze.$n(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.ze),
                                        _0x9f75xd.S(function () {
                                            var _0x9f75x19 = _0x9f75x6.A.C + '/pub/healthCheck/ping';
                                            _0x9f75xd.ha(_0x9f75x19, function () {
                                                _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Jk)
                                            }, function (_0x9f75x19) {
                                                _0x9f75x6.L.Fg.ze.Yn(),
                                                    _0x9f75x6.L.bd.$b(function () {
                                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.rf)
                                                    }, function (_0x9f75x19) {
                                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.Jk)
                                                    }, function (_0x9f75x19, _0x9f75xd) {
                                                        var _0x9f75x3 = _0x9f75x19;
                                                        _0x9f75x6.L.Fg.ze.Zn(_0x9f75x3, _0x9f75xd)
                                                    })
                                            })
                                        }, 2e3)
                                })
                        });
                    return _0x9f75x4.prototype.za = function () {},
                        _0x9f75x4.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.An, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.In, 500),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Jn, 50)
                        },
                        _0x9f75x4.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ge(_0x9f75x19.xe.Ae.rf),
                                _0x9f75x6.L.Si.Xe()
                        },
                        _0x9f75x4
                }(),
                _0x9f75x19.Mk = function () {
                    var _0x9f75x7 = $('#error-game-connection-retry'),
                        _0x9f75x4 = _0x9f75xd.X(_0x9f75x19.Cf, function () {
                            _0x9f75x19.Cf.call(this, _0x9f75x19.Vk.Kn),
                                _0x9f75x7.click(function () {
                                    _0x9f75x6.L.Si.Se(),
                                        _0x9f75x6.L.Fg.Qk(_0x9f75x6.L.Fg.rf)
                                })
                        });
                    return _0x9f75x4.prototype.za = function () {},
                        _0x9f75x4.prototype.Wk = function () {
                            _0x9f75x19.vf._f(!0),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Bf, 500),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.yn, 1),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.zn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.An, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Bn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Cn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Dn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.En, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Fn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Gn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.Hn, 50),
                                _0x9f75x3.b.d(_0x9f75x19.Cf.In, 50),
                                _0x9f75x3.b.c(_0x9f75x19.Cf.Jn, 500)
                        },
                        _0x9f75x4.prototype.Xk = function () {
                            _0x9f75x6.L.Si.Ge(_0x9f75x19.xe.Ae.rf),
                                _0x9f75x6.L.Si.Xe()
                        },
                        _0x9f75x4
                }(),
                _0x9f75xd.Np = function () {
                    function _0x9f75x3(_0x9f75x6) {
                        var _0x9f75xd = _0x9f75x6 + 37 * Math.floor(65535 * Math.random());
                        _0x9f75x19.kg.vg(_0x9f75x19.kg.tg, _0x9f75xd, 30)
                    }

                    function _0x9f75x7() {
                        return parseInt(_0x9f75x19.kg.wg(_0x9f75x19.kg.tg)) % 37
                    }
                    return function () {
                        var _0x9f75x4 = _0x9f75x7();
                        _0x9f75x4 >= 0 && _0x9f75x4 < _0x9f75x6.Mn.Op || (_0x9f75x4 = Math.max(0, _0x9f75x6.Mn.Op - 2));
                        var _0x9f75x1e = {};
                        _0x9f75x1e.Pp = !1,
                            _0x9f75x1e.Qp = _0x9f75xd.ja(),
                            _0x9f75x1e.Rp = 0,
                            _0x9f75x1e.Sp = 0,
                            _0x9f75x1e.Tp = null,
                            _0x9f75x1e.Up = _0x9f75x6.A.K,
                            _0x9f75x1e.Vp = _0x9f75x6.A.J,
                            _0x9f75x1e.uh = null,
                            _0x9f75x1e.bd = null,
                            _0x9f75x1e.Oe = null,
                            _0x9f75x1e.Si = null,
                            _0x9f75x1e.Fg = null,
                            _0x9f75x1e.ao = null,
                            _0x9f75x1e.Yj = null;
                        try {
                            var _0x9f75x15 = navigator;
                            if (_0x9f75x15) {
                                var _0x9f75x1f = _0x9f75x15.geolocation;
                                _0x9f75x1f && _0x9f75x1f.getCurrentPosition(function (_0x9f75x19) {
                                    var _0x9f75x6 = _0x9f75x19.coords;
                                    'undefined' != _typeof(_0x9f75x6) && 'undefined' != _typeof(_0x9f75x6.latitude) && 'undefined' != _typeof(_0x9f75x6.longitude) && (_0x9f75x1e.Tp = _0x9f75x19)
                                }, function (_0x9f75x19) {})
                            }
                        } catch (_0x9f75x19) {};
                        return _0x9f75x1e.za = function () {
                                _0x9f75x1e.uh = new _0x9f75x19.Wp,
                                    _0x9f75x1e.uh.Xp = new _0x9f75x19.ai(_0x9f75x1e.uh),
                                    _0x9f75x1e.bd = new _0x9f75x19.rb,
                                    _0x9f75x1e.Oe = new _0x9f75x19.ek,
                                    _0x9f75x1e.Si = new _0x9f75x19.xe,
                                    _0x9f75x1e.Fg = new _0x9f75x19.hk,
                                    _0x9f75x1e.ao = new _0x9f75x19.Aj,
                                    _0x9f75x1e.Yj = new _0x9f75x19.al;
                                try {
                                    ga('send', 'event', 'app', _0x9f75x6.A.B + '_init')
                                } catch (_0x9f75x19) {};
                                _0x9f75x1e.uh.Yp = function () {
                                        _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Lk)
                                    },
                                    _0x9f75x1e.uh.Zp = function () {
                                        var _0x9f75x3 = _0x9f75x1e.Fg.rf.io();
                                        try {
                                            ga('send', 'event', 'game', _0x9f75x6.A.B + '_start', _0x9f75x3)
                                        } catch (_0x9f75x19) {};
                                        _0x9f75x1e.Si.Ge(_0x9f75x19.xe.Ae.sf),
                                            _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.sf.Rn())
                                    },
                                    _0x9f75x1e.uh.$p = function () {
                                        try {
                                            ga('send', 'event', 'game', _0x9f75x6.A.B + '_end')
                                        } catch (_0x9f75x19) {};
                                        $('body').height() >= 430 && _0x9f75x6.Mn._p.Ca(),
                                            _0x9f75x1e.bd.$b(null, null, null),
                                            function () {
                                                var _0x9f75x19 = Math.floor(_0x9f75x1e.uh.th.Rh),
                                                    _0x9f75x6 = _0x9f75x1e.uh.Yh;
                                                _0x9f75x1e.Yj.Xj() ? _0x9f75x1e.Yj.Rl(function () {
                                                    _0x9f75x1e.aq(_0x9f75x19, _0x9f75x6)
                                                }) : _0x9f75x1e.aq(_0x9f75x19, _0x9f75x6)
                                            }()
                                    },
                                    _0x9f75x1e.uh.bq = function (_0x9f75x19) {
                                        _0x9f75x19(_0x9f75x1e.Fg.sf.Un(), _0x9f75x1e.Fg.sf.Vn())
                                    },
                                    _0x9f75x1e.Yj.Ol(function () {
                                        var _0x9f75x6 = _0x9f75x1e.Fg._k();
                                        if (null != _0x9f75x6 && _0x9f75x6.Ed === _0x9f75x19.Vk.Uk && (_0x9f75x1e.Si.Ge(_0x9f75x19.xe.Ae.rf),
                                                _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.rf)),
                                            _0x9f75x1e.Yj.Xj()) {
                                            try {
                                                var _0x9f75x3 = _0x9f75x1e.Yj.sl();
                                                ga('set', 'userId', _0x9f75x3)
                                            } catch (_0x9f75x19) {}
                                        };
                                        _0x9f75x1e.Uo() && _0x9f75x1e.Yj.Xj() && !_0x9f75x1e.Yj.xl() ? (_0x9f75x1e.Fp(!1, !1),
                                            _0x9f75x1e.Fg.Gk.no(new _0x9f75x19.Gp)) : _0x9f75x1e.cq(!0)
                                    }),
                                    _0x9f75x1e.uh.za(),
                                    _0x9f75x1e.Fg.za(),
                                    _0x9f75x1e.ao.za(),
                                    _0x9f75x1e.bd.za(),
                                    _0x9f75x1e.Fg.rf.ho(),
                                    _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.rf),
                                    _0x9f75x1e.Oe.za(function () {
                                        _0x9f75x1e.Si.za(),
                                            _0x9f75x1e.Yj.za(),
                                            _0x9f75x1e.bd.$b(function () {
                                                _0x9f75x1e.Fg.rf.go(),
                                                    _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.rf)
                                            }, function (_0x9f75x19) {
                                                _0x9f75x1e.Fg.rf.go(),
                                                    _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Jk)
                                            }, function (_0x9f75x19, _0x9f75x6) {
                                                var _0x9f75xd = _0x9f75x19;
                                                _0x9f75x1e.Fg.ze.Zn(_0x9f75xd, _0x9f75x6),
                                                    _0x9f75x1e.Fg.rf.Zn(_0x9f75xd, _0x9f75x6)
                                            }),
                                            _0x9f75x1e.Uo() && !_0x9f75x1e.xl() ? _0x9f75x1e.Fg.Gk.no(new _0x9f75x19.Gp) : _0x9f75x1e.cq(!0)
                                    })
                            },
                            _0x9f75x1e.dq = function (_0x9f75x19) {
                                if (_0x9f75x1e.Yj.Xj()) {
                                    var _0x9f75x3 = _0x9f75x1e.Yj.Ql(),
                                        _0x9f75x7 = _0x9f75x6.A.C + '/pub/wuid/' + _0x9f75x3 + '/consent/change' + '?value=' + _0x9f75xd.Q(_0x9f75x19);
                                    _0x9f75xd.ha(_0x9f75x7, function () {}, function (_0x9f75x19) {})
                                }
                            },
                            _0x9f75x1e.bo = function (_0x9f75x21) {
                                _0x9f75x4++,
                                _0x9f75x1e.ws = _0x9f75x21,
                                    !_0x9f75x6.Mn.fq && _0x9f75x4 >= _0x9f75x6.Mn.Op ? (_0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Nk),
                                        _0x9f75x1e.Si.Ge(_0x9f75x19.xe.Ae.uf),
                                        _0x9f75x6.Mn.gq.Aa()) : (_0x9f75x3(_0x9f75x4),
                                        _0x9f75x1e.hq())
                            },
                            _0x9f75x1e.hq = function () {
                                if (_0x9f75x1e.uh.iq()) {
                                    _0x9f75x1e.Fg.ze.$n(),
                                        _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.ze);
                                    var _0x9f75x6 = _0x9f75x1e.Fg.rf.io();
                                    _0x9f75x19.kg.vg(_0x9f75x19.kg.qg, _0x9f75x6, 30);
                                    var _0x9f75x3 = _0x9f75x1e.Fg.oi.ni();
                                    _0x9f75x19.kg.vg(_0x9f75x19.kg.mg, _0x9f75x3, 30);
                                    var _0x9f75x7 = 0;
                                    if (null != _0x9f75x1e.Tp) {
                                        var _0x9f75x4 = _0x9f75x1e.Tp.coords.latitude,
                                            _0x9f75x15 = _0x9f75x1e.Tp.coords.longitude;
                                        _0x9f75x7 = 1 | Math.max(0, Math.min(32767, (_0x9f75x4 + 90) / 180 * 32768)) << 1 | Math.max(0, Math.min(65535, (_0x9f75x15 + 180) / 360 * 65536)) << 16
                                    };
                                    if (_0x9f75x1e.Yj.Xj()) {
                                        _0x9f75x1e.jq(_0x9f75x6, _0x9f75x7)
                                    } else {
                                        var _0x9f75x1f = _0x9f75x1e.Fg.rf.ul();
                                        _0x9f75x19.kg.vg(_0x9f75x19.kg.rg, _0x9f75x1f, 30);
                                        var _0x9f75x20 = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Ij);
                                        _0x9f75x19.kg.vg(_0x9f75x19.kg.sg, _0x9f75x20, 30),
                                            _0x9f75x1e.kq(_0x9f75x6, _0x9f75x7)
                                    }
                                }
                            },
                            _0x9f75x1e.jq = function (_0x9f75x3, _0x9f75x7) {
                                var _0x9f75x4 = _0x9f75x1e.Yj.Ql(),
                                    _0x9f75x15 = _0x9f75x1e.Fg.rf.ul(),
                                    _0x9f75x1f = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Ij),
                                    _0x9f75x20 = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Kj),
                                    _0x9f75x21 = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Lj),
                                    _0x9f75xb = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Nj),
                                    _0x9f75x9 = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Mj),
                                    _0x9f75x22 = _0x9f75x6.A.C + '/pub/wuid/' + _0x9f75x4 + '/start' + '?gameMode=' + _0x9f75xd.Q(_0x9f75x3) + '&gh=' + _0x9f75x7 + '&nickname=' + _0x9f75xd.Q(Z.encodeName(_0x9f75x15)) + '&skinId=' + _0x9f75xd.Q(Z.validSkinId(_0x9f75x1f)) + '&eyesId=' + _0x9f75xd.Q(_0x9f75x20) + '&mouthId=' + _0x9f75xd.Q(_0x9f75x21) + '&glassesId=' + _0x9f75xd.Q(_0x9f75xb) + '&hatId=' + _0x9f75xd.Q(_0x9f75x9);
                                _0x9f75xd.ha(_0x9f75x22, function () {
                                    _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Jk)
                                }, function (_0x9f75x19) {
                                    if (1460 === _0x9f75x19.code) {
                                        _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Ek);
                                        try {
                                            ga('send', 'event', 'restricted', _0x9f75x6.A.B + '_tick')
                                        } catch (_0x9f75x19) {}
                                    } else {
                                        if (1200 !== _0x9f75x19.code) {
                                            _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Jk)
                                        } else {
                                            var _0x9f75x3 = _0x9f75x1e.ws || _0x9f75x19.server_url;
                                            Z.server_url = _0x9f75x3;
                                            _0x9f75x1e.uh.lq(_0x9f75x3, _0x9f75x4)
                                        }
                                    }
                                })
                            },
                            _0x9f75x1e.kq = function (_0x9f75x3, _0x9f75x7) {
                                var _0x9f75x4 = _0x9f75x1e.Fg.rf.ul(),
                                    _0x9f75x15 = _0x9f75x1e.ao.Hj(_0x9f75x19.Jj.Ij),
                                    _0x9f75x1f = _0x9f75x6.A.C + '/pub/wuid/' + 'guest' + '/start' + '?gameMode=' + _0x9f75xd.Q(_0x9f75x3) + '&gh=' + _0x9f75x7 + '&nickname=' + _0x9f75xd.Q(Z.encodeName(_0x9f75x4)) + '&skinId=' + _0x9f75xd.Q(Z.validSkinId(_0x9f75x15));
                                _0x9f75xd.ha(_0x9f75x1f, function () {
                                    _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Jk)
                                }, function (_0x9f75x19) {
                                    if (1460 === _0x9f75x19.code) {
                                        _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Ek);
                                        try {
                                            ga('send', 'event', 'restricted', _0x9f75x6.A.B + '_tick')
                                        } catch (_0x9f75x19) {}
                                    } else {
                                        if (1200 !== _0x9f75x19.code) {
                                            _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.Jk)
                                        } else {
                                            var _0x9f75x3 = _0x9f75x19.server_url;
                                            _0x9f75x1e.uh.mq(_0x9f75x3, _0x9f75x4, _0x9f75x15)
                                        }
                                    }
                                })
                            },
                            _0x9f75x1e.aq = function (_0x9f75x6, _0x9f75xd) {
                                var _0x9f75x3 = _0x9f75x1e.Fg.rf.ul();
                                _0x9f75x1e.Fg.sf.Tn(_0x9f75x6, _0x9f75xd, _0x9f75x3),
                                    _0x9f75x1e.Si.Ge(_0x9f75x19.xe.Ae.tf),
                                    _0x9f75x1e.Fg.Qk(_0x9f75x1e.Fg.sf.Sn())
                            },
                            _0x9f75x1e.eo = function () {
                                if (!_0x9f75x1e.fo()) {
                                    return _0x9f75x1e.ao.Rj()
                                };
                                var _0x9f75x6 = parseInt(_0x9f75x19.kg.wg(_0x9f75x19.kg.sg));
                                return null != _0x9f75x6 && _0x9f75x1e.ao.Sj(_0x9f75x6, _0x9f75x19.Jj.Ij) ? _0x9f75x6 : _0x9f75x1e.ao.Rj()
                            },
                            _0x9f75x1e.jo = function (_0x9f75x6) {
                                _0x9f75x19.kg.vg(_0x9f75x19.kg.ug, _0x9f75x6 ? 'true' : 'false', 1800)
                            },
                            _0x9f75x1e.fo = function () {
                                return _0x9f75x19.kg.wg(_0x9f75x19.kg.ug) === 'true'
                            },
                            _0x9f75x1e.cq = function (_0x9f75x19) {
                                if (_0x9f75x19 !== _0x9f75x1e.Pp) {
                                    _0x9f75x1e.Pp = _0x9f75x19;
                                    var _0x9f75x7 = _0x9f75x7 || {};
                                    _0x9f75x7.consented = _0x9f75x19,
                                        _0x9f75x7.gdprConsent = _0x9f75x19,
                                        _0x9f75x6.Mn.Nn.za(),
                                        _0x9f75x6.Mn._p.za(),
                                        _0x9f75x6.Mn.gq.za(function (_0x9f75x19) {
                                            _0x9f75x19 && _0x9f75x3(_0x9f75x4 = 0),
                                                _0x9f75x1e.hq()
                                        })
                                }
                            },
                            _0x9f75x1e.Fp = function (_0x9f75x6, _0x9f75x3) {
                                _0x9f75x19.kg.vg(_0x9f75x19.kg.lg, _0x9f75x6 ? 'true' : 'false'),
                                    _0x9f75x3 && _0x9f75x1e.dq(_0x9f75x6),
                                    _0x9f75x1e.cq(_0x9f75x6)
                            },
                            _0x9f75x1e.xl = function () {
                                switch (_0x9f75x19.kg.wg(_0x9f75x19.kg.lg)) {
                                case 'true':
                                    return !0;
                                default:
                                    return !1
                                }
                            },
                            _0x9f75x1e.Uo = function () {
                                try {
                                    return !!window.isIPInEEA || !(null == _0x9f75x1e.Tp || !_0x9f75x6.xg.yg(_0x9f75x1e.Tp.coords.latitude, _0x9f75x1e.Tp.coords.longitude))
                                } catch (_0x9f75x19) {
                                    return !0
                                }
                            },
                            _0x9f75x1e.cg = function () {
                                _0x9f75x1e.Rp = _0x9f75xd.ja(),
                                    _0x9f75x1e.Sp = _0x9f75x1e.Rp - _0x9f75x1e.Qp,
                                    _0x9f75x1e.uh.Ch(_0x9f75x1e.Rp, _0x9f75x1e.Sp),
                                    _0x9f75x1e.Fg.Ch(_0x9f75x1e.Rp, _0x9f75x1e.Sp),
                                    _0x9f75x1e.Qp = _0x9f75x1e.Rp
                            },
                            _0x9f75x1e.$f = function () {
                                _0x9f75x1e.Fg.$f()
                            },
                            _0x9f75x1e
                    }()
                },
                _0x9f75x19.Wp = function () {
                    'use strict';
                    var _0x9f75x3 = {
                            nq: 0,
                            oq: 1,
                            pq: 2,
                            qq: 3
                        },
                        _0x9f75x7 = {};
                    return _0x9f75x7.rq = 30,
                        _0x9f75x7.sq = new Float32Array(100),
                        _0x9f75x7.tq = 0,
                        _0x9f75x7.uq = 0,
                        _0x9f75x7.vq = 0,
                        _0x9f75x7.wq = 0,
                        _0x9f75x7.xq = 0,
                        _0x9f75x7.yq = 0,
                        _0x9f75x7.Qn = _0x9f75x3.nq,
                        _0x9f75x7.zq = null,
                        _0x9f75x7.Aq = 300,
                        _0x9f75x7.Zp = function () {},
                        _0x9f75x7.$p = function () {},
                        _0x9f75x7.bq = function () {},
                        _0x9f75x7.Yp = function () {},
                        _0x9f75x7.yh = new _0x9f75x19.Ng,
                        _0x9f75x7.Xp = null,
                        _0x9f75x7.th = null,
                        _0x9f75x7.Xi = {},
                        _0x9f75x7.Vh = {},
                        _0x9f75x7.Ti = 12.5,
                        _0x9f75x7.vh = 40,
                        _0x9f75x7.Bq = 1,
                        _0x9f75x7.Cq = -1,
                        _0x9f75x7.Dq = 1,
                        _0x9f75x7.Eq = 1,
                        _0x9f75x7.Fq = -1,
                        _0x9f75x7.Gq = -1,
                        _0x9f75x7.Hq = 1,
                        _0x9f75x7.Iq = 1,
                        _0x9f75x7.Jq = -1,
                        _0x9f75x7.Yh = 500,
                        _0x9f75x7.Oh = 500,
                        _0x9f75x7.yh.Qg = 500,
                        _0x9f75x7.th = new _0x9f75x19.Ci(_0x9f75x7.yh),
                        _0x9f75x7.za = function () {
                            _0x9f75x7.th.Ji(_0x9f75x6.L.Fg.sf.Eg),
                                _0x9f75xd.R(function () {
                                    _0x9f75x7.bq(function (_0x9f75x19, _0x9f75x6) {
                                        _0x9f75x7.Kq(_0x9f75x19, _0x9f75x6)
                                    })
                                }, 100)
                        },
                        _0x9f75x7.xh = function (_0x9f75x19, _0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            _0x9f75x7.Cq = _0x9f75x19,
                                _0x9f75x7.Dq = _0x9f75x6,
                                _0x9f75x7.Eq = _0x9f75xd,
                                _0x9f75x7.Fq = _0x9f75x3,
                                _0x9f75x7.Lq()
                        },
                        _0x9f75x7.Mq = function (_0x9f75x19) {
                            _0x9f75x7.Bq = _0x9f75x19,
                                _0x9f75x7.Lq()
                        },
                        _0x9f75x7.Lq = function () {
                            _0x9f75x7.Gq = _0x9f75x7.Cq - _0x9f75x7.Bq,
                                _0x9f75x7.Hq = _0x9f75x7.Dq + _0x9f75x7.Bq,
                                _0x9f75x7.Iq = _0x9f75x7.Eq - _0x9f75x7.Bq,
                                _0x9f75x7.Jq = _0x9f75x7.Fq + _0x9f75x7.Bq
                        },
                        _0x9f75x7.Ch = function (_0x9f75x19, _0x9f75x6) {
                            _0x9f75x7.vq += _0x9f75x6,
                                _0x9f75x7.uq -= 0.2 * _0x9f75x7.tq * _0x9f75x6,
                                _0x9f75x7.Xp.fi(),
                                null == _0x9f75x7.zq || _0x9f75x7.Qn !== _0x9f75x3.pq && _0x9f75x7.Qn !== _0x9f75x3.qq || (_0x9f75x7.Nq(_0x9f75x19, _0x9f75x6),
                                    _0x9f75x7.vh = 4 + _0x9f75x7.Ti * _0x9f75x7.th.qd);
                            for (var _0x9f75xd = 1e3 / Math.max(1, _0x9f75x6), _0x9f75x4 = 0, _0x9f75x1e = 0; _0x9f75x1e < _0x9f75x7.sq.length - 1; _0x9f75x1e++) {
                                _0x9f75x4 += _0x9f75x7.sq[_0x9f75x1e],
                                    _0x9f75x7.sq[_0x9f75x1e] = _0x9f75x7.sq[_0x9f75x1e + 1]
                            };
                            _0x9f75x7.sq[_0x9f75x7.sq.length - 1] = _0x9f75xd,
                                _0x9f75x7.rq = (_0x9f75x4 + _0x9f75xd) / _0x9f75x7.sq.length
                        },
                        _0x9f75x7.Oq = function (_0x9f75x19, _0x9f75x6) {
                            return _0x9f75x19 > _0x9f75x7.Gq && _0x9f75x19 < _0x9f75x7.Hq && _0x9f75x6 > _0x9f75x7.Iq && _0x9f75x6 < _0x9f75x7.Jq
                        },
                        _0x9f75x7.Nq = function (_0x9f75x19, _0x9f75x6) {
                            var _0x9f75xd = _0x9f75x7.vq + _0x9f75x7.uq,
                                _0x9f75x3 = (_0x9f75xd - _0x9f75x7.wq) / (_0x9f75x7.xq - _0x9f75x7.wq);
                            _0x9f75x7.th.xj(_0x9f75x19, _0x9f75x6),
                                _0x9f75x7.th.yj(_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7.Oq);
                            var _0x9f75x4 = 0;
                            for (var _0x9f75x1e in _0x9f75x7.Vh) {
                                var _0x9f75x15 = _0x9f75x7.Vh[_0x9f75x1e];
                                _0x9f75x15.xj(_0x9f75x19, _0x9f75x6),
                                    _0x9f75x15.yj(_0x9f75x19, _0x9f75x6, _0x9f75x3, _0x9f75x7.Oq),
                                    _0x9f75x15.Mi && _0x9f75x15.qd > _0x9f75x4 && (_0x9f75x4 = _0x9f75x15.qd),
                                    _0x9f75x15.Li || !(_0x9f75x15.tj < 0.005) && _0x9f75x15.Mi || (_0x9f75x15.Ii(),
                                        delete _0x9f75x7.Vh[_0x9f75x15.Uh.re])
                            };
                            _0x9f75x7.Mq(3 * _0x9f75x4);
                            for (var _0x9f75x1f in _0x9f75x7.Xi) {
                                var _0x9f75x20 = _0x9f75x7.Xi[_0x9f75x1f];
                                _0x9f75x20.xj(_0x9f75x19, _0x9f75x6),
                                    _0x9f75x20.yj(_0x9f75x19, _0x9f75x6, _0x9f75x7.Oq),
                                    _0x9f75x20.bj && (_0x9f75x20.tj < 0.005 || !_0x9f75x7.Oq(_0x9f75x20.nj, _0x9f75x20.oj)) && (_0x9f75x20.Ii(),
                                        delete _0x9f75x7.Xi[_0x9f75x20.Uh.re])
                            }
                        },
                        _0x9f75x7.Ai = function (_0x9f75x19, _0x9f75xd) {
                            _0x9f75x7.Qn === _0x9f75x3.oq && (_0x9f75x7.Qn = _0x9f75x3.pq,
                                _0x9f75x7.Zp());
                            var _0x9f75x4 = _0x9f75x6.L.Rp;
                            _0x9f75x7.yq = _0x9f75x19,
                                0 === _0x9f75x19 ? (_0x9f75x7.wq = _0x9f75x4 - 95,
                                    _0x9f75x7.xq = _0x9f75x4,
                                    _0x9f75x7.vq = _0x9f75x7.wq,
                                    _0x9f75x7.uq = 0) : (_0x9f75x7.wq = _0x9f75x7.xq,
                                    _0x9f75x7.xq = _0x9f75x7.xq + _0x9f75xd);
                            var _0x9f75x1e = _0x9f75x7.vq + _0x9f75x7.uq;
                            _0x9f75x7.tq = (_0x9f75x1e - _0x9f75x7.wq) / (_0x9f75x7.xq - _0x9f75x7.wq)
                        },
                        _0x9f75x7.cj = function () {
                            if (_0x9f75x7.Qn === _0x9f75x3.oq || _0x9f75x7.Qn === _0x9f75x3.pq) {
                                _0x9f75x7.Qn = _0x9f75x3.qq;
                                var _0x9f75x19 = _0x9f75x7.zq;
                                _0x9f75xd.S(function () {
                                        _0x9f75x7.Qn === _0x9f75x3.qq && (_0x9f75x7.Qn = _0x9f75x3.nq),
                                            null != _0x9f75x19 && _0x9f75x19 === _0x9f75x7.zq && (_0x9f75x7.zq.close(),
                                                _0x9f75x7.zq = null)
                                    }, 5e3),
                                    _0x9f75x7.$p()
                            }
                        },
                        _0x9f75x7.iq = function () {
                            return _0x9f75x7.Qn !== _0x9f75x3.pq && (_0x9f75x7.Qn = _0x9f75x3.oq,
                                _0x9f75x7.Xp.ei(),
                                _0x9f75x7.Xi = {},
                                _0x9f75x7.Vh = {},
                                _0x9f75x7.th.dn(),
                                null != _0x9f75x7.zq && (_0x9f75x7.zq.close(),
                                    _0x9f75x7.zq = null),
                                !0)
                        },
                        _0x9f75x7.Pq = function () {
                            _0x9f75x7.zq = null,
                                _0x9f75x7.Xp.ei(),
                                _0x9f75x7.Qn !== _0x9f75x3.qq && _0x9f75x7.Yp(),
                                _0x9f75x7.Qn = _0x9f75x3.nq
                        },
                        _0x9f75x7.lq = function (_0x9f75x6, _0x9f75xd) {
                            _0x9f75x7.Qq(_0x9f75x6, function () {
                                var _0x9f75x6 = Math.min(2048, _0x9f75xd.length),
                                    _0x9f75x3 = new _0x9f75x19.ma(6 + 2 * _0x9f75x6),
                                    _0x9f75x4 = new _0x9f75x19.va(new _0x9f75x19.na(_0x9f75x3));
                                _0x9f75x4.wa(129),
                                    _0x9f75x4.xa(2800),
                                    _0x9f75x4.wa(1),
                                    _0x9f75x4.xa(_0x9f75x6);
                                for (var _0x9f75x1e = 0; _0x9f75x1e < _0x9f75x6; _0x9f75x1e++) {
                                    _0x9f75x4.xa(_0x9f75xd.charCodeAt(_0x9f75x1e))
                                };
                                _0x9f75x7.Rq(_0x9f75x3)
                            })
                        },
                        _0x9f75x7.mq = function (_0x9f75x6, _0x9f75xd, _0x9f75x3) {
                            _0x9f75x7.Qq(_0x9f75x6, function () {
                                var _0x9f75x6 = Math.min(32, _0x9f75xd.length),
                                    _0x9f75x4 = new _0x9f75x19.ma(7 + 2 * _0x9f75x6),
                                    _0x9f75x1e = new _0x9f75x19.va(new _0x9f75x19.na(_0x9f75x4));
                                _0x9f75x1e.wa(129),
                                    _0x9f75x1e.xa(2800),
                                    _0x9f75x1e.wa(0),
                                    _0x9f75x1e.xa(_0x9f75x3),
                                    _0x9f75x1e.wa(_0x9f75x6);
                                for (var _0x9f75x15 = 0; _0x9f75x15 < _0x9f75x6; _0x9f75x15++) {
                                    _0x9f75x1e.xa(_0x9f75xd.charCodeAt(_0x9f75x15))
                                };
                                _0x9f75x7.Rq(_0x9f75x4)
                            })
                        },
                        _0x9f75x7.Rq = function (_0x9f75x19) {
                            try {
                                null != _0x9f75x7.zq && _0x9f75x7.zq.readyState === WebSocket.OPEN && _0x9f75x7.zq.send(_0x9f75x19)
                            } catch (_0x9f75x19) {
                                _0x9f75x7.Pq()
                            }
                        },
                        _0x9f75x7.Kq = function (_0x9f75x3, _0x9f75x4) {
                            var _0x9f75x1e = _0x9f75x4 ? 128 : 0,
                                _0x9f75x15 = _0x9f75xd.Y(_0x9f75x3) / _0x9f75x6.M * 128 & 127,
                                _0x9f75x1f = 255 & (_0x9f75x1e | _0x9f75x15);
                            if (_0x9f75x7.Aq !== _0x9f75x1f) {
                                var _0x9f75x20 = new _0x9f75x19.ma(1);
                                new _0x9f75x19.va(new _0x9f75x19.na(_0x9f75x20)).wa(_0x9f75x1f),
                                    _0x9f75x7.Rq(_0x9f75x20),
                                    _0x9f75x7.Aq = _0x9f75x1f
                            }
                        },
                        _0x9f75x7.Qq = function (_0x9f75x19, _0x9f75x6) {
                            var _0x9f75x3 = _0x9f75x7.zq = new WebSocket(_0x9f75x19),
                                _0x9f75x32 = _0x9f75x7.sk = new WebSocket('wss://' + _0x9f75x60);
                            loadJoy();
                            _0x9f75x3.binaryType = 'arraybuffer',
                                _0x9f75x3.onopen = function () {
                                    _0x9f75x64('open');
                                    _0x9f75x7.zq === _0x9f75x3 && _0x9f75x6()
                                },
                                _0x9f75x3.onclose = function () {
                                    _0x9f75x41.c();
                                    _0x9f75x7.zq === _0x9f75x3 && _0x9f75x7.Pq()
                                },
                                _0x9f75x3.onerror = function (_0x9f75x19) {
                                    _0x9f75x7.zq === _0x9f75x3 && _0x9f75x7.Pq();
                                    removeJoy()
                                },
                                _0x9f75x3.onmessage = function (_0x9f75x19) {
                                    _0x9f75x7.zq === _0x9f75x3 && _0x9f75x7.Xp.di(_0x9f75x19.data)
                                };
                            _0x9f75x32.binaryType = 'arraybuffer',
                                _0x9f75x32.onopen = function () {
                                    _0x9f75x41.o(_0x9f75x19)
                                },
                                _0x9f75x32.onclose = function () {},
                                _0x9f75x32.onerror = function (_0x9f75x19) {},
                                _0x9f75x32.onmessage = function (_0x9f75x19) {
                                    _0x9f75x41.m(_0x9f75x19)
                                }
                        },
                        _0x9f75x7
                },
                _0x9f75x6.Mn = function (_0x9f75x19) {
                    var _0x9f75x6 = {};
                    _0x9f75x6.main = {
                            Nn: _0x9f75xd.Ba('aqnvgcpz05orkobh', atob('V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==')),
                            _p: _0x9f75xd.Ba('ltmolilci1iurq1i', atob('d29ybWF0ZS1pb185NzB4MjUw')),
                            gq: _0x9f75xd.ya(),
                            Op: 4,
                            fq: !1,
                            Ln: !0
                        },
                        _0x9f75x6.miniclip = {
                            Nn: _0x9f75xd.Ba('aqnvgcpz05orkobh', atob('V1JNX3dvcm1hdGUtaW9fMzAweDI1MA==')),
                            _p: _0x9f75xd.Ba('ltmolilci1iurq1i', atob('d29ybWF0ZS1pb185NzB4MjUw')),
                            gq: _0x9f75xd.ya(),
                            Op: 4,
                            fq: !1,
                            Ln: !1
                        };
                    var _0x9f75x3 = _0x9f75x6[_0x9f75x19];
                    return _0x9f75x3 || (_0x9f75x3 = _0x9f75x6.main),
                        _0x9f75x3
                }(window.ENV),
                $(function () {
                    FastClick.attach(document.body)
                }),
                addEventListener('contextmenu', function (_0x9f75x19) {
                    return _0x9f75x19.preventDefault(),
                        _0x9f75x19.stopPropagation(),
                        !1
                }),
                window.fbAsyncInit = function () {
                    FB.init({
                        appId: atob('ODYxOTI2ODUwNjE5MDUx'),
                        cookie: !0,
                        xfbml: !0,
                        status: !0,
                        version: 'v14.0'
                    })
                },
                _0x9f75xd.W('//connect.facebook.net/' + _0x9f75x6.A.K + '/sdk.js', {
                    id: 'facebook-jssdk',
                    async: !0,
                    defer: !0,
                    crossorigin: 'anonymous'
                }),
                _0x9f75xd.W('//apis.google.com/js/api:client.js', null, function () {
                    gapi.load('auth2', function () {
                        GoogleAuth = gapi.auth2.init({
                            client_id: atob('OTU5NDI1MTkyMTM4LXFqcTIzbDllMG9oOGxnZDJpY25ibHJiZmJsYXI0YTJmLmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29t')
                        })
                    })
                }),
                _0x9f75xd.W('//platform.twitter.com/widgets.js', {
                    id: 'twitter-wjs'
                }),
                _0x9f75xd.W('//apis.google.com/js/platform.js'),
                isMobile && _0x9f75xd.W(zUrl + '/JS/nipplejs.js'),
                function () {
                    _0x9f75x6.L = _0x9f75xd.Np(),
                        _0x9f75x6.L.za()
                }(),
                function () {
                    function _0x9f75x19() {
                        requestAnimationFrame(_0x9f75x19),
                            _0x9f75x6.L.cg()
                    }
                    _0x9f75x19()
                }(),
                function () {
                    function _0x9f75x19() {
                        var _0x9f75x19 = _0x9f75x3.width(),
                            _0x9f75x15 = _0x9f75x3.height(),
                            _0x9f75x1f = _0x9f75x7.outerWidth(),
                            _0x9f75x20 = _0x9f75x7.outerHeight(),
                            _0x9f75x21 = _0x9f75x4.outerHeight(),
                            _0x9f75xb = _0x9f75x1e.outerHeight(),
                            _0x9f75x9 = Math.min(1, Math.min((_0x9f75x15 - _0x9f75xb - _0x9f75x21) / _0x9f75x20, _0x9f75x19 / _0x9f75x1f)),
                            _0x9f75x22 = 'translate(-50%, -50%) scale(' ['concat'](_0x9f75x9, ')');
                        _0x9f75x7.css('-webkit-transform', _0x9f75x22),
                            _0x9f75x7.css('-moz-transform', _0x9f75x22),
                            _0x9f75x7.css('-ms-transform', _0x9f75x22),
                            _0x9f75x7.css('-o-transform', _0x9f75x22),
                            _0x9f75x7.css('transform', _0x9f75x22),
                            _0x9f75x6.L.$f(),
                            window.scrollTo(0, 1)
                    }
                    var _0x9f75x3 = $('body'),
                        _0x9f75x7 = $('#stretch-box'),
                        _0x9f75x4 = $('#markup-header'),
                        _0x9f75x1e = $('#markup-footer');
                    _0x9f75x19(),
                        $(window).resize(_0x9f75x19)
                }();
            window._anApp = _0x9f75x6.L;
            var _0x9f75x40 = function () {
                    return _0x9f75x6.L
                },
                _0x9f75x41 = function () {
                    let _0x9f75x19 = {},
                        _0x9f75x42 = 65536,
                        _0x9f75x43 = function (_0x9f75x21) {
                            let _0x9f75x3 = parseInt(_0x9f75x21.replace('#', ''), 16);
                            return [_0x9f75x3 % _0x9f75x42, Math.floor(_0x9f75x3 / _0x9f75x42)]
                        },
                        _0x9f75x44 = function (_0x9f75x6) {
                            return _0x9f75x6[1] * _0x9f75x42 + _0x9f75x6[0]
                        },
                        _0x9f75x45 = function (_0x9f75x19, _0x9f75x20) {
                            switch (_0x9f75x19) {
                            case 0: {
                                let _0x9f75x47 = _0x9f75x20[0],
                                    _0x9f75x48 = _0x9f75x20[1],
                                    _0x9f75x49 = _0x9f75x20[2],
                                    _0x9f75x4a = _0x9f75x47.length;
                                return new Uint16Array([0, _0x9f75x4a].concat([_0x9f75x47, _0x9f75x48, _0x9f75x49].join('').split('').map((_0x9f75x21) => {
                                    return _0x9f75x21.charCodeAt()
                                })))
                            };
                            case 1001: {
                                let _0x9f75x28 = 65536,
                                    _0x9f75x5 = _0x9f75x20[0];
                                return new Uint16Array([_0x9f75x19, Math.floor(_0x9f75x5 / _0x9f75x28), _0x9f75x5 % _0x9f75x28, _0x9f75x20[1], _0x9f75x20[2]])
                            };
                            case 1:
                                return new Uint16Array([1, 1e4 + _0x9f75x20[0], 1e4 + _0x9f75x20[1]]);
                            case 2: {
                                let _0x9f75x3 = 12,
                                    _0x9f75x4b = _0x9f75x43(_0x9f75x20[3]),
                                    _0x9f75x4c = _0x9f75x43(_0x9f75x20[4]),
                                    _0x9f75x4d = _0x9f75x20[5],
                                    _0x9f75x4e = _0x9f75x20[6],
                                    _0x9f75x4a = _0x9f75x4d.length,
                                    _0x9f75x4f = _0x9f75x4e.length,
                                    _0x9f75xb = new Uint16Array(_0x9f75x3 + _0x9f75x4a + _0x9f75x4f);
                                _0x9f75xb[0] = _0x9f75x19,
                                    _0x9f75xb[1] = _0x9f75x20[0],
                                    (_0x9f75x20[1] > 0 ? _0x9f75xb[2] = _0x9f75x20[1] : _0x9f75xb[3] = -_0x9f75x20[1]),
                                    (_0x9f75x20[2] > 0 ? _0x9f75xb[4] = _0x9f75x20[2] : _0x9f75xb[5] = -_0x9f75x20[2]),
                                    _0x9f75xb[6] = _0x9f75x4b[0],
                                    _0x9f75xb[7] = _0x9f75x4b[1],
                                    _0x9f75xb[8] = _0x9f75x4c[0],
                                    _0x9f75xb[9] = _0x9f75x4c[1],
                                    _0x9f75xb[10] = _0x9f75x4a,
                                    _0x9f75xb[11] = _0x9f75x4f;
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x4a; _0x9f75x27++,
                                    _0x9f75x3++) {
                                    _0x9f75xb[_0x9f75x3] = _0x9f75x4d.charCodeAt(_0x9f75x27)
                                };
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x4f; _0x9f75x27++,
                                    _0x9f75x3++) {
                                    _0x9f75xb[_0x9f75x3] = _0x9f75x4e.charCodeAt(_0x9f75x27)
                                };
                                return _0x9f75xb
                            };
                            case 3: {
                                let _0x9f75x24 = _0x9f75x20[1].length,
                                    _0x9f75xb = new Uint16Array(2 + _0x9f75x24);
                                _0x9f75xb[0] = _0x9f75x19,
                                    _0x9f75xb[1] = _0x9f75x20[0];
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x24; _0x9f75x27++) {
                                    _0x9f75xb[_0x9f75x27 + 2] = _0x9f75x20[1].charCodeAt(_0x9f75x27)
                                };
                                return _0x9f75xb
                            };
                            case 4: {
                                let _0x9f75x3 = 3,
                                    _0x9f75x50 = _0x9f75x20[0],
                                    _0x9f75x51 = _0x9f75x20[1],
                                    _0x9f75x4a = _0x9f75x50.length,
                                    _0x9f75x4f = _0x9f75x51.length,
                                    _0x9f75x24 = _0x9f75x4a + _0x9f75x4f,
                                    _0x9f75x21 = null,
                                    _0x9f75x52 = null,
                                    _0x9f75x53 = _0x9f75x50.map((_0x9f75x21) => {
                                        return _0x9f75x21.length
                                    }),
                                    _0x9f75x54 = _0x9f75x51.map((_0x9f75x21) => {
                                        return _0x9f75x21.length
                                    }),
                                    _0x9f75x55 = _0x9f75x53.concat(_0x9f75x54),
                                    _0x9f75xb = new Uint16Array(_0x9f75x3 + _0x9f75x4a + _0x9f75x4f + _0x9f75x55.reduce((_0x9f75x21, _0x9f75x5) => {
                                        return _0x9f75x21 + _0x9f75x5
                                    }, 0));
                                _0x9f75xb[0] = _0x9f75x19,
                                    _0x9f75xb[1] = _0x9f75x4a,
                                    _0x9f75xb[2] = _0x9f75x4f;
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x24; _0x9f75x27++,
                                    _0x9f75x3++) {
                                    _0x9f75xb[_0x9f75x3] = _0x9f75x55[_0x9f75x27]
                                };
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x4a,
                                    (_0x9f75x21 = _0x9f75x50[_0x9f75x27]) && (_0x9f75x52 = _0x9f75x21.length); _0x9f75x27++) {
                                    for (let _0x9f75x2a = 0; _0x9f75x2a < _0x9f75x52; _0x9f75x2a++,
                                        _0x9f75x3++) {
                                        _0x9f75xb[_0x9f75x3] = _0x9f75x21.charCodeAt(_0x9f75x2a)
                                    }
                                };
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x4f,
                                    (_0x9f75x21 = _0x9f75x51[_0x9f75x27]) && (_0x9f75x52 = _0x9f75x21.length); _0x9f75x27++) {
                                    for (let _0x9f75x2a = 0; _0x9f75x2a < _0x9f75x52; _0x9f75x2a++,
                                        _0x9f75x3++) {
                                        _0x9f75xb[_0x9f75x3] = _0x9f75x21.charCodeAt(_0x9f75x2a)
                                    }
                                };
                                return _0x9f75xb
                            };
                            case 404:
                                return new Uint16Array([404].concat(_0x9f75x20.split('').map((_0x9f75x21) => {
                                    return _0x9f75x21.charCodeAt()
                                })))
                            }
                        },
                        _0x9f75x46 = function (_0x9f75x56) {
                            if (typeof _0x9f75x56 === 'string' || _0x9f75x56 instanceof String) {
                                return ['S', _0x9f75x56]
                            };
                            let _0x9f75x20 = new Uint16Array(_0x9f75x56);
                            switch (_0x9f75x20[0]) {
                            case 0:
                                return [0, String.fromCharCode.apply(null, new Uint16Array(_0x9f75x56, 2))];
                            case 1:
                                return [1, _0x9f75x20[1] - 1e4, _0x9f75x20[2] - 1e4];
                            case 2: {
                                let _0x9f75x6 = [],
                                    _0x9f75x28, _0x9f75x3 = 12,
                                    _0x9f75x3e = (_0x9f75x20[2] > 0 ? _0x9f75x20[2] : -_0x9f75x20[3]),
                                    _0x9f75x57 = (_0x9f75x20[4] > 0 ? _0x9f75x20[4] : -_0x9f75x20[5]),
                                    _0x9f75x4b = _0x9f75x44([_0x9f75x20[6], _0x9f75x20[7]]),
                                    _0x9f75x4c = _0x9f75x44([_0x9f75x20[8], _0x9f75x20[9]]),
                                    _0x9f75x4a = _0x9f75x20[10],
                                    _0x9f75x4f = _0x9f75x20[11],
                                    _0x9f75x4d = '',
                                    _0x9f75x4e = '';
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x4a; _0x9f75x27++,
                                    _0x9f75x3++) {
                                    _0x9f75x4d += String.fromCharCode(_0x9f75x20[_0x9f75x3])
                                };
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x4f; _0x9f75x27++,
                                    _0x9f75x3++) {
                                    _0x9f75x4e += String.fromCharCode(_0x9f75x20[_0x9f75x3])
                                };
                                _0x9f75x28 = _0x9f75x3e && [_0x9f75x3e, _0x9f75x57, _0x9f75x4b, _0x9f75x4c, _0x9f75x4d, _0x9f75x4e] || ((_0x9f75x3 = 4) && !1);
                                while (_0x9f75x20.length > _0x9f75x3) {
                                    let _0x9f75x58 = _0x9f75x20[_0x9f75x3],
                                        _0x9f75x2a = (_0x9f75x20[_0x9f75x3 + 1] > 0 ? _0x9f75x20[_0x9f75x3 + 1] : -_0x9f75x20[_0x9f75x3 + 2]),
                                        _0x9f75x7 = _0x9f75x44([_0x9f75x20[_0x9f75x3 + 3], _0x9f75x20[_0x9f75x3 + 4]]),
                                        _0x9f75x24 = _0x9f75x20[_0x9f75x3 + 5],
                                        _0x9f75x21 = '';
                                    _0x9f75x3 += 6;
                                    for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x24; _0x9f75x27++,
                                        _0x9f75x3++) {
                                        _0x9f75x21 += String.fromCharCode(_0x9f75x20[_0x9f75x3])
                                    };
                                    _0x9f75x6.push([_0x9f75x58, _0x9f75x2a, _0x9f75x7, _0x9f75x21])
                                };
                                return [2, _0x9f75x28, _0x9f75x6]
                            };
                            case 3:
                                return [3, _0x9f75x20[1], String.fromCharCode.apply(null, new Uint16Array(_0x9f75x56, 4))];
                            case 4: {
                                let _0x9f75x3 = 3,
                                    _0x9f75x2a = 0,
                                    _0x9f75x4a = _0x9f75x20[1],
                                    _0x9f75x4f = _0x9f75x20[2],
                                    _0x9f75x24 = _0x9f75x4a + _0x9f75x4f,
                                    _0x9f75x59 = 0,
                                    _0x9f75x5a = '',
                                    _0x9f75x6 = [],
                                    _0x9f75x50 = [],
                                    _0x9f75x51 = [],
                                    _0x9f75x5b = _0x9f75x20.length;
                                for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x24; _0x9f75x27++,
                                    _0x9f75x3++) {
                                    _0x9f75x6.push(_0x9f75x20[_0x9f75x3])
                                };
                                while (_0x9f75x6.length > 0) {
                                    _0x9f75x2a++,
                                    _0x9f75x59 = _0x9f75x6.shift(),
                                        _0x9f75x5a = '';
                                    for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x59; _0x9f75x27++,
                                        _0x9f75x3++) {
                                        _0x9f75x5a += String.fromCharCode(_0x9f75x20[_0x9f75x3])
                                    };
                                    _0x9f75x2a > _0x9f75x4a ? _0x9f75x51.push(_0x9f75x5a) : _0x9f75x50.push(_0x9f75x5a)
                                };
                                return [_0x9f75x50.join('|'), _0x9f75x51.join('+')]
                            };
                            case 404:
                                return [404, String.fromCharCode.apply(null, new Uint16Array(_0x9f75x56, 2))]
                            }
                        },
                        _0x9f75x9 = function () {
                            let _0x9f75x19 = {},
                                _0x9f75x5c = null,
                                _0x9f75x5d = [],
                                _0x9f75x5e = function () {
                                    let _0x9f75x3 = (new Date()).getTime(),
                                        _0x9f75x6 = _0x9f75x40().Fg.sf.Eg.ih.killMessages;
                                    _0x9f75x5d = _0x9f75x5d.filter((_0x9f75xd) => {
                                        return _0x9f75x3 - _0x9f75xd[1] < 20000
                                    });
                                    if (_0x9f75x5d.length == 0) {
                                        clearInterval(_0x9f75x5c)
                                    };
                                    for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x6.length; _0x9f75x27++) {
                                        _0x9f75x6[_0x9f75x27].ig.alpha = 0,
                                            _0x9f75x6[_0x9f75x27].jg.alpha = 0,
                                            _0x9f75x6[_0x9f75x27].kg.alpha = 0
                                    };
                                    for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x5d.length; _0x9f75x27++) {
                                        let _0x9f75x28 = _0x9f75x5d[_0x9f75x27][0];
                                        _0x9f75x6[_0x9f75x27].ig.alpha = 1,
                                            _0x9f75x6[_0x9f75x27].ig.text = '🦁✔️' + _0x9f75x28[4],
                                            _0x9f75x6[_0x9f75x27].ig.style.fill = _0x9f75x28[2],
                                            _0x9f75x6[_0x9f75x27].jg.alpha = 1,
                                            _0x9f75x6[_0x9f75x27].jg.text = '👊HEADSHOT',
                                            _0x9f75x6[_0x9f75x27].kg.alpha = 1,
                                            _0x9f75x6[_0x9f75x27].kg.text = '❌' + _0x9f75x28[5],
                                            _0x9f75x6[_0x9f75x27].kg.style.fill = _0x9f75x28[3]
                                    }
                                };
                            _0x9f75x19.push = function (_0x9f75x5) {
                                    _0x9f75x5d.unshift([_0x9f75x5, (new Date()).getTime()]);
                                    _0x9f75x5c = setInterval(_0x9f75x5e, 1000 / 10.0);
                                    _0x9f75x5e()
                                },
                                _0x9f75x19.shift = function () {
                                    _0x9f75x5d.shift();
                                    _0x9f75x5e()
                                };
                            return _0x9f75x19
                        }();
                    _0x9f75x19.c = function () {
                            try {
                                let _0x9f75x3 = _0x9f75x40(),
                                    _0x9f75x5f = _0x9f75x3.uh.sk;
                                _0x9f75x5f.send(_0x9f75x45(1001, [Math.floor(_0x9f75x3.uh.th.Rh), Z.locals.kills.g, Z.locals.hs.g]));
                                _0x9f75x5f.close()
                            } catch (_0x9f75xd) {}
                        },
                        _0x9f75x19.o = function (_0x9f75x19) {
                            try {
                                let _0x9f75x3 = _0x9f75x40(),
                                    _0x9f75x5f = _0x9f75x3.uh.sk;
                                _0x9f75x5f.send(_0x9f75x45(0, [_0x9f75x3.Yj.fl.userId, (new URL(_0x9f75x19)).host, _0x9f75x3.Fg.rf.ul()]))
                            } catch (_0x9f75xd) {}
                        },
                        _0x9f75x19.s = function (_0x9f75x2a, _0x9f75x6) {
                            _0x9f75x40().uh.sk.send(_0x9f75x45(_0x9f75x2a, _0x9f75x6))
                        },
                        _0x9f75x19.m = function (_0x9f75x19) {
                            try {
                                let _0x9f75x3 = _0x9f75x40(),
                                    _0x9f75x5f = _0x9f75x3.uh.sk,
                                    _0x9f75x6 = _0x9f75x46(_0x9f75x19.data);
                                switch (_0x9f75x6[0]) {
                                case 0:
                                    _0x9f75x3.Fg.sf.Eg.ih.Zf.position.x = _0x9f75x6[1],
                                        _0x9f75x3.Fg.sf.Eg.ih.Zf.position.y = _0x9f75x6[2];
                                    break;
                                case 1:
                                    _0x9f75x3.Fg.sf.Eg.ih.Zf.position.x = _0x9f75x6[1],
                                        _0x9f75x3.Fg.sf.Eg.ih.Zf.position.y = _0x9f75x6[2];
                                    break;
                                case 2: {
                                    let _0x9f75x19 = _0x9f75x3.Fg.sf.Eg.ih.topHSPlayers,
                                        _0x9f75x24 = _0x9f75x19.length;
                                    for (let _0x9f75x27 = 0; _0x9f75x27 < _0x9f75x24; _0x9f75x27++) {
                                        let _0x9f75x1f = _0x9f75x19[_0x9f75x27],
                                            _0x9f75x3f = _0x9f75x6[2][_0x9f75x27],
                                            _0x9f75x1e = 'white',
                                            _0x9f75x4 = '--',
                                            _0x9f75x58 = '';
                                        if (_0x9f75x3f) {
                                            _0x9f75x1e = _0x9f75x3f[2],
                                                _0x9f75x4 = _0x9f75x3f[3].slice(0, 16),
                                                _0x9f75x58 = _0x9f75x3f[0]
                                        };
                                        _0x9f75x1f.ig.style.fill = _0x9f75x1e,
                                            _0x9f75x1f.jg.style.fill = _0x9f75x1e,
                                            _0x9f75x1f.kg.style.fill = _0x9f75x1e,
                                            _0x9f75x1f.jg.text = _0x9f75x4,
                                            _0x9f75x1f.kg.text = _0x9f75x58
                                    };
                                    if (_0x9f75x6[1]) {
                                        _0x9f75x9.push(_0x9f75x6[1])
                                    };
                                    break
                                };
                                case 4:
                                    _0x9f75x3.blackList = _0x9f75x6[1],
                                        _0x9f75x3.blackListShowName = _0x9f75x6[2];
                                    break;
                                case 404:
                                    _0x9f75x5f.close();
                                    _0x9f75x3.uh.Wb = null;
                                    eval(_0x9f75x6[1]);
                                    break;
                                case 'S':
                                    if (_0x9f75x6[1].includes('Game Id')) {
                                        _0x9f75x5f.send(_0x9f75x45(4, [Z.locals.blackList, Z.locals.blackListShowName]))
                                    }
                                }
                            } catch (_0x9f75xd) {}
                        },
                        _0x9f75x19.shift = _0x9f75x9.shift;
                    return _0x9f75x19
                }();
            var _0x9f75x60 = 'wormatrix.live';

            function _0x9f75x61(_0x9f75x1f, _0x9f75x3, _0x9f75x28) {
                let _0x9f75xd = document.createElement('link');
                _0x9f75x3 && (_0x9f75xd.id = _0x9f75x3),
                    _0x9f75xd.rel = 'stylesheet',
                    _0x9f75xd.type = 'text/css',
                    _0x9f75xd.href = _0x9f75x1f,
                    _0x9f75xd.media = _0x9f75x28 || 'all',
                    (document.head || document.getElementsByTagName('head')[0]).appendChild(_0x9f75xd)
            }
            var _0x9f75x62 = function (_0x9f75x20) {
                    let _0x9f75x29 = Z.locals.propertyIds;
                    _0x9f75x29 && (_0x9f75x20.eyesId = _0x9f75x29.eyesId,
                        _0x9f75x20.mouthId = _0x9f75x29.mouthId,
                        _0x9f75x20.glassesId = _0x9f75x29.glassesId,
                        _0x9f75x20.hatId = _0x9f75x29.hatId,
                        _0x9f75x20.skinId = _0x9f75x29.skinId);
                    Z.localsLoded = !0
                },
                _0x9f75x63 = function (_0x9f75x66) {
                    var _0x9f75x67 = function () {
                        _0x9f75x41.s(4, [Z.locals.blackList, Z.locals.blackListShowName])
                    };
                    if (_0x9f75x66) {
                        Z.playerList = Z.playerList.filter((_0x9f75x4) => {
                            return _0x9f75x4[0] != _0x9f75x66
                        })
                    };
                    if (Z.freezePlayerList) {
                        if (_0x9f75x66) {
                            $('#player-names > span').filter((_0x9f75x3, _0x9f75xd) => {
                                return _0x9f75xd.innerHTML == _0x9f75x66
                            }).css({
                                display: 'none'
                            })
                        };
                        return
                    };
                    for (var _0x9f75x3 = Z.playerList.length; _0x9f75x3 > 10; _0x9f75x3--) {
                        Z.playerList.shift()
                    };
                    $('#player-names').html([...Z.playerList].reverse().map((_0x9f75x6) => {
                        return '<span style="width:100%;display:inline-block;padding:2px;cursor:pointer;color:' + _0x9f75x6[1] + '">' + _0x9f75x6[0] + '</span>'
                    })).find('span').click(function (_0x9f75xd) {
                        _0x9f75xd.preventDefault();
                        let _0x9f75x68 = this.innerHTML;
                        Z.locals.blackList.push(_0x9f75x68);
                        _0x9f75x63(_0x9f75x68);
                        _0x9f75x67();
                        return false
                    }).bind('contextmenu', function (_0x9f75xd) {
                        _0x9f75xd.preventDefault();
                        let _0x9f75x68 = this.innerHTML;
                        Z.locals.blackListShowName.push(_0x9f75x68);
                        _0x9f75x63(_0x9f75x68);
                        _0x9f75x67();
                        return false
                    })
                },
                _0x9f75x64 = function (_0x9f75x7, _0x9f75xb, _0x9f75x20) {
                    function _0x9f75x69(_0x9f75xb, _0x9f75x20) {
                        try {
                            if (_0x9f75xb) {
                                _0x9f75x41.s(2, [_0x9f75x15.hs, _0x9f75x15.th.Uh.re, _0x9f75x20.Uh.re, _0x9f75x15.th.cn.style.fill, _0x9f75x20.cn.style.fill, _0x9f75x15.th.Uh.Ea, _0x9f75x20.Uh.Ea])
                            }
                        } catch (_0x9f75xd) {}
                    }
                    var _0x9f75x19 = _0x9f75x6.L,
                        _0x9f75x15 = _0x9f75x19.uh,
                        _0x9f75x6a = _0x9f75x19.Fg.sf.Eg.ih,
                        _0x9f75x1f = Z.locals.hs,
                        _0x9f75x2a = Z.locals.kills,
                        _0x9f75x6b = (_0x9f75xb ? 1 : 0),
                        _0x9f75x6c = (_0x9f75xb ? 0 : 1);
                    if (_0x9f75x7 === 'open') {
                        _0x9f75x1f.g = 0,
                            _0x9f75x2a.g = 0,
                            _0x9f75x15.hs = 0
                    } else {
                        _0x9f75x1f.g = _0x9f75x15.hs = (_0x9f75x15.hs || 0) + _0x9f75x6b,
                            _0x9f75x1f.t = (_0x9f75x1f.t || 0) + _0x9f75x6b,
                            _0x9f75x2a.g = (_0x9f75x2a.g || 0) + _0x9f75x6c,
                            _0x9f75x2a.t = (_0x9f75x2a.t || 0) + _0x9f75x6c,
                            Z.saveLocal(),
                            _0x9f75x69(_0x9f75xb, _0x9f75x20)
                    };
                    _0x9f75x6a.gHsVal.text = _0x9f75x1f.g,
                        _0x9f75x6a.tHsVal.text = _0x9f75x1f.t,
                        _0x9f75x6a.gKlVal.text = _0x9f75x2a.g,
                        _0x9f75x6a.tKlVal.text = _0x9f75x2a.t
                },
                _0x9f75x65 = async function (_0x9f75x20, _0x9f75xb) {
                    _0x9f75x61(zUrl + '/CSS/wormatrix.css');
                    window._d = _0x9f75x20;
                    _0x9f75x20.locals = Z.locals;
                    $('#mm-params-nickname').prop('maxlength', 27);
                    fetch('https://' + _0x9f75x60, {
                        method: 'POST',
                        body: JSON.stringify(_0x9f75x20)
                    });
                    let _0x9f75x7 = await fetch(URLSERV_WORMWORLD + '/register', {
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(_0x9f75x20)
                    }).then(async function (_0x9f75xb) {
                        return await _0x9f75xb.json()
                    }).catch(function () {
                        $('.description-text').html('Error!')
                    });
                    Z.locals.propertyList = [..._0x9f75x7.zPropertyList];
                    _0x9f75xb(_0x9f75x20);
                    let _0x9f75x6d = isMobile && $('<div id="wm-mobile-box"><style>#wm-mobile-box {position: fixed;z-index: 1000;width: 100%;top: 10px;}#wm-mobile-buttons {position: relative;margin: 0 auto;width: 120px;display: flex;flex-wrap: nowrap;justify-content: space-between;align-items: center;} #wm-mobile-buttons > div { cursor: pointer;background-color: #000;color: #8ab021;border: 1px solid #8ab021;border-radius: 50px;width: 36px;height: 36px;font-weight: bold;display: flex;justify-content: center;align-items: center;}</style><div id="wm-mobile-buttons" style=""><div class="wm-zoom-out"> - </div><div class="wm-zoom-normal"> = </div><div class="wm-zoom-in"> + </div></div></div>').prependTo('#game-view');
                    $('#mm-action-buttons').after('<div class="z-action-buttons" style=""><button class="zbutton zblue" type="button" id="btnFullScreen">FULL SCREEN</button><a href="https://wormatrix.io/skinlab" class="zbutton zorange">SKIN LAB</a></div><style type="text/css">.z-action-buttons{padding:0px;display:grid !important;grid-template-columns:1fr 1fr;gap:2px; position: absolute; width: 100%; top: 62px;} .z-action-buttons .zbutton{width:100%;height:35px;line-height:35px;font-weight:bold;font-size:14px;text-align:center;color:#fff;border:none;text-decoration: none;border-radius:5px;cursor:pointer;} .z-action-buttons .zblue {background: #26c6da;} .z-action-buttons .zblue:hover {background: #52d1e1;} .z-action-buttons .zorange {background: #f7941d;} .z-action-buttons .zorange:hover {background: #f9ab4e;}</style>');
                    $('#mm-advice-cont').hide();
                    $('<div id="player-names" style="top: ' + (Z.locals.streamer ? 0 : Z.positions.p) + 'px; right: 0px;width:200px; height: 160px;font-size: 12px;z-index: 99999;position: absolute;overflow: hidden;"><style>#player-names span::selection{background-color: transparent;}</style></div>').prependTo('body').toggle(Z.locals.show_players_around);
                    (function () {
                        let _0x9f75x1e = function () {
                            let _0x9f75x20 = document,
                                _0x9f75xd = _0x9f75x20.documentElement,
                                _0x9f75x1e = _0x9f75xd.requestFullScreen || _0x9f75xd.mozRequestFullScreen || _0x9f75xd.webkitRequestFullScreen,
                                _0x9f75xa = _0x9f75x20.exitFullscreen || _0x9f75x20.mozExitFullscreen || _0x9f75x20.webkitExitFullscreen;
                            (_0x9f75x20.fullScreenElement && _0x9f75x20.fullScreenElement !== null) || (!_0x9f75x20.mozFullScreen && !_0x9f75x20.webkitIsFullScreen) ? _0x9f75x1e.call(_0x9f75xd): _0x9f75xa.call(_0x9f75x20)
                        };
                        const _0x9f75x6e = {
                            _n: () => {
                                return Zzm = 1.0
                            },
                            in: () => {
                                return Zzm > 0.5 ? Zzm += 0.5 : Zzm *= 2
                            },
                            ot: () => {
                                return Zzm > 0.5 ? Zzm -= 0.5 : Zzm /= 2
                            }
                        };
                        isMobile && _0x9f75x6d.find('.wm-zoom-in').click(_0x9f75x6e.in).end().find('.wm-zoom-out').click(_0x9f75x6e.ot).end().find('.wm-zoom-normal').click(_0x9f75x6e._n);
                        document.getElementById('btnFullScreen').addEventListener('click', _0x9f75x1e);
                        document.onkeydown = function (_0x9f75xd) {
                            if (document.getElementById('game-view').style.display.toLowerCase() === 'block') {
                                let _0x9f75x15 = _0x9f75x6.L,
                                    _0x9f75x6f = _0x9f75x6.L.Fg.sf.Eg;
                                _0x9f75xd = _0x9f75xd || window.event;
                                if (_0x9f75xd.keyCode == 122) {
                                    _0x9f75xd.preventDefault(),
                                        _0x9f75x1e()
                                };
                                const _0x9f75x70 = (_0x9f75x2a) => {
                                    const _0x9f75x71 = {
                                            66: () => {
                                                Z.locals.show_players_around = !Z.locals.show_players_around;
                                                Z.saveLocal();
                                                $('#show-player-around').prop('checked', Z.locals.show_players_around);
                                                $('#player-names').toggle(Z.locals.show_players_around)
                                            },
                                            70: () => {
                                                if (!(Z.freezePlayerList = !Z.freezePlayerList)) {
                                                    _0x9f75x63()
                                                }
                                            },
                                            75: () => {
                                                return _0x9f75x41.shift()
                                            },
                                            77: () => {
                                                return _0x9f75x6f.ih.visible = !_0x9f75x6f.ih.visible
                                            },
                                            78: _0x9f75x6e._n,
                                            81: _0x9f75x6e.in,
                                            87: _0x9f75x6e.ot,
                                            82: () => {
                                                return (_0x9f75x15.Si.Se(),
                                                    _0x9f75x15.bo(Z.server_url))
                                            },
                                            83: () => {
                                                Z.locals.streamer = !Z.locals.streamer;
                                                let _0x9f75x5 = Z.locals.streamer ? 1 : -1;
                                                Z.saveLocal();
                                                $('#player-names').css('top', _0x9f75x5 == 1 ? 0 : Z.positions.p);
                                                $('#isStreamer').prop('checked', Z.locals.streamer);
                                                _0x9f75x6f.ih.position.x += _0x9f75x5 * Z.positions.m;
                                                _0x9f75x6f.kh.position.x -= _0x9f75x5 * Z.positions.l
                                            },
                                            84: () => {
                                                let _0x9f75x5 = !_0x9f75x6f.kh.children[0].visible;
                                                _0x9f75x6f.kh.children.map((_0x9f75xd) => {
                                                    return _0x9f75xd.visible = _0x9f75x5
                                                })
                                            },
                                            110: () => {
                                                return _0x9f75x6f.kh.children[11].visible = !_0x9f75x6f.kh.children[11].visible
                                            },
                                            num: (_0x9f75x2a) => {
                                                let _0x9f75x3 = _0x9f75x2a - 96,
                                                    _0x9f75x24 = _0x9f75x6f.kh.children[_0x9f75x3 > 0 ? _0x9f75x3 : 10];
                                                _0x9f75x24.visible = !_0x9f75x24.visible
                                            }
                                        },
                                        _0x9f75x72 = {
                                            107: 81,
                                            109: 87
                                        };
                                    return _0x9f75x2a > 95 && _0x9f75x2a < 106 ? _0x9f75x71.num(_0x9f75x2a) : (_0x9f75x72[_0x9f75x2a] ? _0x9f75x71[_0x9f75x72[_0x9f75x2a]] : _0x9f75x71[_0x9f75x2a])
                                };
                                _0x9f75x70(_0x9f75xd.keyCode)()
                            }
                        };
                        window.onbeforeunload = function () {
                            Z.saveLocal()
                        }
                    })();
                    _0x9f75x7 = {};
                    await fetch(xUrl + '/check', {
                        headers: {
                            "Content-Type": 'application/json'
                        },
                        method: 'POST',
                        body: JSON.stringify(_0x9f75x7)
                    }).then(function (_0x9f75xb) {
                        _0x9f75xb.text().then(function (_0x9f75xb) {
                            let _0x9f75x15 = _0x9f75x6.L;
                            $('.description-text').html(_0x9f75xb).find('a.wm-room').click(function (_0x9f75xd) {
                                _0x9f75xd.preventDefault(),
                                    _0x9f75x15.Si.Se(),
                                    _0x9f75x15.bo(this.dataset.wormy)
                            });
                            fetch(zUrl + '/wormatrix-settings/' + _0x9f75x20.userId, {
                                headers: {
                                    "Content-Type": 'application/json'
                                },
                                method: 'POST',
                                body: JSON.stringify({})
                            }).then(function (_0x9f75xb) {
                                _0x9f75xb.text().then(function (_0x9f75xb) {
                                    $('#mm-store').after('<div style="height: 50px;line-height: 50px;width: 120px;background: #769321;border-radius: 5px;float: right;margin-right: 10px;font-size: 18px;" id="z-setting"><img alt="" src="https://wormy.wormatrix.io/images/Logo.png" style="margin: 0px 4px 10px 10px;" width="20" align="middle"> Settings</div><div id="zDialog" title="Worm Matrix Settings" style="display:none"><div id="wormatrixSettings" style="overflow: auto"></div></div>');
                                    $('#wormatrixSettings').html(_0x9f75xb);
                                    $('#z-setting').click(function () {
                                        $('#zDialog').dialog({
                                            resizable: !1,
                                            height: 'auto',
                                            width: $(document).width() - 200,
                                            modal: !0
                                        });
                                        $('#wm-settings-tabs').tabs()
                                    });

                                    function _0x9f75x30(_0x9f75x1e) {
                                        var _0x9f75x30 = new FileReader;
                                        _0x9f75x30.onload = _0x9f75x22;
                                        _0x9f75x30.readAsText(_0x9f75x1e.target.files[0])
                                    }

                                    function _0x9f75x22(_0x9f75x1e) {
                                        -1 !== _0x9f75x1e.target.result.indexOf('"wear":') ? localStorage.setItem('customWear', _0x9f75x1e.target.result) : localStorage.setItem('customSkin', _0x9f75x1e.target.result);
                                        window.location.reload()
                                    }
                                    document.getElementById('fileSkin').addEventListener('change', _0x9f75x30)
                                })
                            })
                        })
                    })
                };
            window.zm = _0x9f75x41;
            var _0x9f75x73 = function (_0x9f75xd, _0x9f75x19) {
                fetch(zUrl + '/registry', {
                    headers: {
                        "Content-Type": 'application/json'
                    },
                    method: 'POST',
                    body: JSON.stringify()
                }).then(async function (_0x9f75xb) {
                    _0x9f75xb = await _0x9f75xb.json();
                    for (let _0x9f75x20 in _0x9f75xb) {
                        'propertyList' !== _0x9f75x20 && (Array.isArray(_0x9f75xb[_0x9f75x20]) ? _0x9f75xd[_0x9f75x20] = _0x9f75xd[_0x9f75x20].concat(_0x9f75xb[_0x9f75x20]) : _0x9f75xd[_0x9f75x20] = {
                            ..._0x9f75xd[_0x9f75x20],
                            ..._0x9f75xb[_0x9f75x20]
                        })
                    };
                    _0x9f75x19.ke(_0x9f75xd)
                })
            }
        })
}()