'use strict';var a169_0x5ddec2=a169_0x182a;(function(_0x1113e3,_0xa19174){var _0x2576cc=a169_0x182a,_0x2245b1=_0x1113e3();while(!![]){try{var _0x3a4b68=-parseInt(_0x2576cc(0x1c3))/0x1*(parseInt(_0x2576cc(0x1f3))/0x2)+parseInt(_0x2576cc(0x1ee))/0x3*(-parseInt(_0x2576cc(0x1c2))/0x4)+-parseInt(_0x2576cc(0x1b1))/0x5+-parseInt(_0x2576cc(0x19a))/0x6*(-parseInt(_0x2576cc(0x1a7))/0x7)+-parseInt(_0x2576cc(0x19d))/0x8+parseInt(_0x2576cc(0x1b7))/0x9*(-parseInt(_0x2576cc(0x1cd))/0xa)+-parseInt(_0x2576cc(0x1be))/0xb*(-parseInt(_0x2576cc(0x1b5))/0xc);if(_0x3a4b68===_0xa19174)break;else _0x2245b1['push'](_0x2245b1['shift']());}catch(_0x2b9f66){_0x2245b1['push'](_0x2245b1['shift']());}}}(a169_0x2a1e,0x2868d));exports['__esModule']=!![],exports['selectFee']=exports[a169_0x5ddec2(0x19c)]=void 0x0;function a169_0x182a(_0x3091f1,_0x349bc9){var _0x2a1ef9=a169_0x2a1e();return a169_0x182a=function(_0x182a3c,_0x2750ef){_0x182a3c=_0x182a3c-0x18f;var _0x208e7b=_0x2a1ef9[_0x182a3c];return _0x208e7b;},a169_0x182a(_0x3091f1,_0x349bc9);}var _builder=require('../../message/builder'),UI=_interopRequireWildcard(require('../../constants/ui')),_common=require('./common'),_formatUtils=require('../../utils/formatUtils');function _getRequireWildcardCache(_0x3e3a63){if(typeof WeakMap!=='function')return null;var _0x4ed0a2=new WeakMap(),_0xafc339=new WeakMap();return(_getRequireWildcardCache=function _0x39393d(_0x5464c5){return _0x5464c5?_0xafc339:_0x4ed0a2;})(_0x3e3a63);}function _interopRequireWildcard(_0x1fe45c,_0x5b1937){var _0x3476e7=a169_0x5ddec2;if(!_0x5b1937&&_0x1fe45c&&_0x1fe45c[_0x3476e7(0x1c0)])return _0x1fe45c;if(_0x1fe45c===null||typeof _0x1fe45c!==_0x3476e7(0x1e1)&&typeof _0x1fe45c!==_0x3476e7(0x1b3))return{'default':_0x1fe45c};var _0x1e7fb4=_getRequireWildcardCache(_0x5b1937);if(_0x1e7fb4&&_0x1e7fb4[_0x3476e7(0x1cf)](_0x1fe45c))return _0x1e7fb4[_0x3476e7(0x1d2)](_0x1fe45c);var _0x15aa4f={},_0x2ffea3=Object[_0x3476e7(0x1a3)]&&Object[_0x3476e7(0x1a6)];for(var _0x184902 in _0x1fe45c){if(_0x184902!=='default'&&Object[_0x3476e7(0x1e7)]['hasOwnProperty']['call'](_0x1fe45c,_0x184902)){var _0x195bb6=_0x2ffea3?Object[_0x3476e7(0x1a6)](_0x1fe45c,_0x184902):null;_0x195bb6&&(_0x195bb6[_0x3476e7(0x1d2)]||_0x195bb6[_0x3476e7(0x1f2)])?Object[_0x3476e7(0x1a3)](_0x15aa4f,_0x184902,_0x195bb6):_0x15aa4f[_0x184902]=_0x1fe45c[_0x184902];}}return _0x15aa4f[_0x3476e7(0x1f4)]=_0x1fe45c,_0x1e7fb4&&_0x1e7fb4[_0x3476e7(0x1f2)](_0x1fe45c,_0x15aa4f),_0x15aa4f;}var fees=[],selectedFee,updateCustomFee=function updateCustomFee(_0x19088e){var _0x2ee389=a169_0x5ddec2,_0x53bcdb=_common[_0x2ee389(0x196)][_0x2ee389(0x1f1)](_0x2ee389(0x1e8))[0x0],_0x27871d=_common['container'][_0x2ee389(0x1f1)](_0x2ee389(0x1d4))[0x0],_0x37cb10=_0x27871d[_0x2ee389(0x1f1)]('fee-info')[0x0];if(_0x53bcdb['className'][_0x2ee389(0x1aa)](_0x2ee389(0x1e9))<0x0)return;fees[_0x2ee389(0x1cb)](0x0,fees[_0x2ee389(0x1da)]),fees[_0x2ee389(0x1b0)][_0x2ee389(0x1e2)](fees,_0x19088e[_0x2ee389(0x1df)]);var _0x3e073a=fees['find'](function(_0x27c03a){var _0x16abcf=_0x2ee389;return _0x27c03a[_0x16abcf(0x1e3)]===_0x16abcf(0x194);});_0x3e073a&&(_0x3e073a['fee']==='0'?_0x37cb10[_0x2ee389(0x1de)]=_0x2ee389(0x199):_0x37cb10['innerHTML']='\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-amount\x22>'+(0x0,_formatUtils[_0x2ee389(0x1d9)])(_0x3e073a[_0x2ee389(0x1e4)],_0x19088e[_0x2ee389(0x1c5)])+_0x2ee389(0x193)+(0x0,_formatUtils[_0x2ee389(0x1a9)])(_0x3e073a[_0x2ee389(0x1c6)])+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20'),validation(_0x19088e[_0x2ee389(0x1c5)]);};exports['updateCustomFee']=updateCustomFee;function a169_0x2a1e(){var _0x4d3455=['remove','[data-fee]','data-fee','push','1224805snQUXe','isArray','function','send-button','331644VhdclZ','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20disabled\x20class=\x22list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-title\x22>','1251gXeKyO','Missing\x20fee','oninput','UiMessage','input','hasAttribute','select-fee-list','385rFEdhu','click','__esModule','disabled','139448ZEbnQB','1006pyxBsb','select-fee','coinInfo','minutes','join','getElementsByTagName','querySelectorAll','focus','splice','item','910hgRFwl','showView','has','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-time\x22>','maxFeeSatoshiKb','get','normal','opener','selectFee','total','Send','createEvent','formatAmount','length','[data-fee=\x22normal\x22]','RECEIVE_FEE','.list','innerHTML','feeLevels','feePerByte','object','apply','name','fee','Fee\x20is\x20too\x20big','minFeeSatoshiKb','prototype','custom-fee','active','getAttribute','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-info\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-amount\x22>','removeAttribute','Send\x20','24lBxDOc','\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<button\x20data-fee=\x22','initEvent','getElementsByClassName','set','514VEvRkN','default','Incorrect\x20fee','find','value','add','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-time\x22>','custom','Event','container','Composing...','Fee\x20is\x20too\x20low','Insufficient\x20funds','186ouBMeD','toString','updateCustomFee','213304RtxREO','<span>','addEventListener','onclick','classList','</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20','defineProperty','postMessage','className','getOwnPropertyDescriptor','4501uQwubY','setAttribute','formatTime','indexOf','compose-custom','currentTarget'];a169_0x2a1e=function(){return _0x4d3455;};return a169_0x2a1e();}var validation=function validation(_0x2b0205){var _0x1fbb1e=a169_0x5ddec2,_0x1df64d=_common[_0x1fbb1e(0x196)][_0x1fbb1e(0x1f1)](_0x1fbb1e(0x1b4))[0x0];if(!selectedFee){_0x1df64d[_0x1fbb1e(0x1a8)]('disabled',_0x1fbb1e(0x1c1)),_0x1df64d[_0x1fbb1e(0x1de)]=_0x1fbb1e(0x1d7);return;}var _0x422a29=selectedFee[_0x1fbb1e(0x1ea)](_0x1fbb1e(0x1af))||_0x1fbb1e(0x194),_0x58f7fa=fees[_0x1fbb1e(0x190)](function(_0x4b9c29){var _0x500412=_0x1fbb1e;return _0x4b9c29[_0x500412(0x1e3)]===_0x422a29;});_0x58f7fa&&_0x58f7fa[_0x1fbb1e(0x1e4)]!=='0'?(_0x1df64d[_0x1fbb1e(0x1ec)](_0x1fbb1e(0x1c1)),_0x1df64d[_0x1fbb1e(0x1de)]=_0x1fbb1e(0x1ed)+(0x0,_formatUtils[_0x1fbb1e(0x1d9)])(_0x58f7fa[_0x1fbb1e(0x1d6)],_0x2b0205)):(_0x1df64d[_0x1fbb1e(0x1a8)](_0x1fbb1e(0x1c1),'disabled'),_0x1df64d[_0x1fbb1e(0x1de)]=_0x1fbb1e(0x1d7));},selectFee=function selectFee(_0x103a94){var _0x47a0dd=a169_0x5ddec2;if(!_0x103a94||!Array[_0x47a0dd(0x1b2)](_0x103a94[_0x47a0dd(0x1df)]))return;(0x0,_common[_0x47a0dd(0x1ce)])(_0x47a0dd(0x1c4)),selectedFee=null,fees[_0x47a0dd(0x1cb)](0x0,fees[_0x47a0dd(0x1da)]),fees['push'][_0x47a0dd(0x1e2)](fees,_0x103a94[_0x47a0dd(0x1df)]);var _0x1afd65=[];fees['forEach'](function(_0x2effb6,_0x33d32c){var _0x15670a=_0x47a0dd;if(_0x2effb6[_0x15670a(0x1e3)]===_0x15670a(0x194))return;var _0x257d46=_0x2effb6['name'];_0x2effb6[_0x15670a(0x1e3)]===_0x15670a(0x1d3)&&_0x2effb6[_0x15670a(0x1e4)]!=='0'&&(_0x257d46=_0x15670a(0x19e)+_0x2effb6[_0x15670a(0x1e3)]+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-subtitle\x22>recommended</span>'),_0x2effb6[_0x15670a(0x1e4)]!=='0'?_0x1afd65[_0x15670a(0x1b0)](_0x15670a(0x1ef)+_0x2effb6[_0x15670a(0x1e3)]+'\x22\x20class=\x22list\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-title\x22>'+_0x257d46+_0x15670a(0x1eb)+(0x0,_formatUtils['formatAmount'])(_0x2effb6[_0x15670a(0x1e4)],_0x103a94[_0x15670a(0x1c5)])+_0x15670a(0x1d0)+(0x0,_formatUtils['formatTime'])(_0x2effb6[_0x15670a(0x1c6)])+_0x15670a(0x1a2)):_0x1afd65[_0x15670a(0x1b0)](_0x15670a(0x1b6)+_0x257d46+'</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<span\x20class=\x22fee-info\x22>Insufficient\x20funds</span>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20</button>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20');});var _0x1f654d=_common['container']['getElementsByClassName'](_0x47a0dd(0x1bd))[0x0];_0x1afd65[_0x47a0dd(0x1b0)](_0x1f654d[_0x47a0dd(0x1de)]),_0x1f654d['innerHTML']=_0x1afd65[_0x47a0dd(0x1c7)]('');var _0x4e16d8=_common['container'][_0x47a0dd(0x1f1)]('send-button')[0x0],_0x684581=_common[_0x47a0dd(0x196)]['getElementsByClassName'](_0x47a0dd(0x1d4))[0x0],_0x3366d5=_0x684581['getElementsByClassName']('fee-info')[0x0],_0x5ad3b7=function _0x19fb6e(_0x3f47bb){var _0x4cce58=_0x47a0dd;_0x3f47bb[_0x4cce58(0x1ac)]instanceof HTMLElement&&(selectedFee&&selectedFee[_0x4cce58(0x1a1)][_0x4cce58(0x1ad)]('active'),selectedFee=_0x3f47bb[_0x4cce58(0x1ac)],selectedFee[_0x4cce58(0x1a1)][_0x4cce58(0x192)](_0x4cce58(0x1e9)),validation(_0x103a94[_0x4cce58(0x1c5)]));},_0x4e699c=_0x1f654d[_0x47a0dd(0x1c9)](_0x47a0dd(0x1ae));for(var _0xf68b6c=0x0;_0xf68b6c<_0x4e699c[_0x47a0dd(0x1da)];_0xf68b6c++){_0x4e699c[_0x47a0dd(0x1cc)](_0xf68b6c)[_0x47a0dd(0x19f)](_0x47a0dd(0x1bf),_0x5ad3b7);}var _0x521000=0x0;_0x684581[_0x47a0dd(0x1a0)]=function(){var _0x182e1e=_0x47a0dd;if(_0x684581[_0x182e1e(0x1a5)][_0x182e1e(0x1aa)](_0x182e1e(0x1e9))>=0x0)return;selectedFee&&selectedFee['classList'][_0x182e1e(0x1ad)]('active');var _0xc82c5=fees['find'](function(_0x19607d){return _0x19607d['name']==='custom';}),_0x27e0b6='0';if(!_0xc82c5){if(selectedFee){var _0xa37c44=selectedFee['getAttribute'](_0x182e1e(0x1af)),_0x2f3fd7=fees[_0x182e1e(0x190)](function(_0x51beaa){var _0xc4a1b8=_0x182e1e;return _0x51beaa[_0xc4a1b8(0x1e3)]===_0xa37c44;});_0x2f3fd7&&_0x2f3fd7['fee']!=='0'&&(_0x27e0b6=_0x2f3fd7[_0x182e1e(0x1e0)]);}!_0x27e0b6==='0'&&(_0x27e0b6='1');}else _0xc82c5[_0x182e1e(0x1e4)]!=='0'&&(_0x27e0b6=_0xc82c5[_0x182e1e(0x1e0)]);_0x684581[_0x182e1e(0x1a1)]['add'](_0x182e1e(0x1e9)),selectedFee=_0x684581,_0x381498(_0x27e0b6);};var _0x381498=function _0x453673(_0x1cfba1){var _0x5d1ce7=_0x47a0dd,_0x295a48=_common[_0x5d1ce7(0x196)][_0x5d1ce7(0x1c8)](_0x5d1ce7(0x1bb))[0x0];setTimeout(function(){var _0x4bcd0f=_0x5d1ce7;_0x295a48[_0x4bcd0f(0x1b9)]=_0x477d20;if(_0x1cfba1){_0x295a48[_0x4bcd0f(0x191)]=_0x1cfba1[_0x4bcd0f(0x19b)]();var _0x2073cb=document[_0x4bcd0f(0x1d8)](_0x4bcd0f(0x195));_0x2073cb[_0x4bcd0f(0x1f0)](_0x4bcd0f(0x1bb),!![],!![]),_0x295a48['dispatchEvent'](_0x2073cb);}_0x295a48[_0x4bcd0f(0x1ca)]();},0x1);},_0x20128d=_0x103a94['coinInfo'][_0x47a0dd(0x1e6)]/0x3e8,_0x557d83=_0x103a94[_0x47a0dd(0x1c5)][_0x47a0dd(0x1d1)]/0x3e8,_0x477d20=function _0x237847(_0x1d3dff){var _0x51a16f=_0x47a0dd;window['clearTimeout'](_0x521000),_0x4e16d8['setAttribute'](_0x51a16f(0x1c1),_0x51a16f(0x1c1));var _0x1e77f9=_0x1d3dff['currentTarget'][_0x51a16f(0x191)],_0x77664c=parseInt(_0x1e77f9);if(isNaN(_0x77664c))_0x1e77f9[_0x51a16f(0x1da)]>0x0?_0x3366d5[_0x51a16f(0x1de)]=_0x51a16f(0x18f):_0x3366d5['innerHTML']=_0x51a16f(0x1b8);else{if(_0x77664c[_0x51a16f(0x19b)]()!==_0x1e77f9)_0x3366d5[_0x51a16f(0x1de)]=_0x51a16f(0x18f);else{if(_0x77664c<_0x20128d)_0x3366d5[_0x51a16f(0x1de)]=_0x51a16f(0x198);else{if(_0x77664c>_0x557d83)_0x3366d5['innerHTML']=_0x51a16f(0x1e5);else{_0x3366d5[_0x51a16f(0x1de)]=_0x51a16f(0x197);var _0x2fc7a2=function _0x2be0e9(){var _0x5c1c85=_0x51a16f;(0x0,_common[_0x5c1c85(0x1a4)])((0x0,_builder[_0x5c1c85(0x1ba)])(UI[_0x5c1c85(0x1dc)],{'type':_0x5c1c85(0x1ab),'value':_0x1e77f9}));};_0x521000=window['setTimeout'](_0x2fc7a2,0x320);}}}}},_0x35c9aa=_common[_0x47a0dd(0x196)]['getElementsByClassName']('back-button')[0x0];_0x35c9aa['onclick']=function(){var _0xc6fff9=_0x47a0dd;(0x0,_common[_0xc6fff9(0x1a4)])((0x0,_builder['UiMessage'])(UI[_0xc6fff9(0x1dc)],{'type':'change-account'})),(0x0,_common['showView'])('loader');},_0x4e16d8[_0x47a0dd(0x1a0)]=function(){var _0x232abf=_0x47a0dd;if(!selectedFee)return;var _0x1bbf34=selectedFee[_0x232abf(0x1ea)](_0x232abf(0x1af));(0x0,_common['postMessage'])((0x0,_builder[_0x232abf(0x1ba)])(UI[_0x232abf(0x1dc)],{'type':'send','value':_0x1bbf34||_0x232abf(0x194)})),(0x0,_common[_0x232abf(0x1ce)])('loader');};var _0x23db17=_0x1f654d['querySelectorAll'](_0x47a0dd(0x1db))[0x0];if(_0x23db17)_0x23db17['click']();else{var _0xd0035=_0x1f654d[_0x47a0dd(0x1c9)](_0x47a0dd(0x1dd));for(var _0x50a931=0x0;_0x50a931<_0xd0035['length'];_0x50a931++){if(!_0xd0035[_0x50a931][_0x47a0dd(0x1bc)](_0x47a0dd(0x1c1))){_0xd0035[_0x50a931][_0x47a0dd(0x1bf)]();break;}}}};exports[a169_0x5ddec2(0x1d5)]=selectFee;