'use strict';var a120_0x3eac83=a120_0x3d06;(function(_0x1f0ad1,_0x3749bd){var _0x1dfea3=a120_0x3d06,_0x8d5aa9=_0x1f0ad1();while(!![]){try{var _0x4a3cda=parseInt(_0x1dfea3(0xf0))/0x1+parseInt(_0x1dfea3(0xec))/0x2+-parseInt(_0x1dfea3(0xfc))/0x3*(-parseInt(_0x1dfea3(0xf4))/0x4)+-parseInt(_0x1dfea3(0x12d))/0x5*(-parseInt(_0x1dfea3(0x111))/0x6)+parseInt(_0x1dfea3(0x132))/0x7*(parseInt(_0x1dfea3(0x11b))/0x8)+parseInt(_0x1dfea3(0x109))/0x9*(parseInt(_0x1dfea3(0x125))/0xa)+parseInt(_0x1dfea3(0xd1))/0xb*(-parseInt(_0x1dfea3(0x103))/0xc);if(_0x4a3cda===_0x3749bd)break;else _0x8d5aa9['push'](_0x8d5aa9['shift']());}catch(_0x1325dc){_0x8d5aa9['push'](_0x8d5aa9['shift']());}}}(a120_0x4569,0x3cb99));var _interopRequireDefault=require('@babel/runtime/helpers/interopRequireDefault');exports['__esModule']=!![],exports[a120_0x3eac83(0x102)]=void 0x0;var _regenerator=_interopRequireDefault(require('@babel/runtime/regenerator')),_asyncToGenerator2=_interopRequireDefault(require('@babel/runtime/helpers/asyncToGenerator')),_defineProperty2=_interopRequireDefault(require('@babel/runtime/helpers/defineProperty')),_networkUtils=require('../env/node/networkUtils'),_ConnectSettings=require('../data/ConnectSettings'),_CoinInfo=require('./CoinInfo'),_FirmwareInfo=require('./FirmwareInfo'),_TransportInfo=require('./TransportInfo'),_parseUri=_interopRequireDefault(require('parse-uri')),_versionUtils=require('../utils/versionUtils'),_BLEFirmwareInfo=require('./BLEFirmwareInfo');function a120_0x4569(){var _0x2c7a07=['httpRequest','length','Object','constructor','927269ynHtel','stop','icon','isWhitelisted','getDebugSettings','done','end','?r=','string','next','message','keys','split','forEach','106909sPAaoY','UPDATE_NRF_DATA','priority','location','parseCoinsJson','getTime','host','defineProperties','range','getOwnPropertyDescriptor','getOwnPropertyDescriptors','settings','log','name','call','origin','timestamp','prev','apply','messages','changelog_cn','bridge','type','catch','slice','knownHosts','trustedHost','314850iMDIXh','env','isManagementAllowed','parseBLEFirmware','38353fBPGYo','min','management','getConfig','19964DOzgPv','join','find','toString','getProtobufMessages','parseBridgeJSON','getPriority','firmware-t1','39gYMaiQ','postMessage','load','firmware-mini','config','Invalid\x20attempt\x20to\x20iterate\x20non-iterable\x20instance.\x0aIn\x20order\x20to\x20be\x20iterable,\x20non-array\x20objects\x20must\x20have\x20a\x20[Symbol.iterator]()\x20method.','default','924PvidJd','webusb','push','ble','parent','getOwnPropertySymbols','29943dZxcpj','whitelist','mini','number','nrf','@@iterator','https://data.onekey.so/version.json?noCache=','undefined','59586SeHlTE','Arguments','isArray','web','url','prototype','map','debug','max','enumerable','8mkaHec','mini_firmware','popup','versionCompare','parseFirmware','Map','getHostLabel','webextension','abrupt','configSrc','890MWgNmI','getSettings','sent','localhost','from','value','json','assets','155dAnDdN'];a120_0x4569=function(){return _0x2c7a07;};return a120_0x4569();}function ownKeys(_0x4013a3,_0x4d413a){var _0x5e1968=a120_0x3eac83,_0x5f1043=Object[_0x5e1968(0xce)](_0x4013a3);if(Object[_0x5e1968(0x108)]){var _0x37ddce=Object[_0x5e1968(0x108)](_0x4013a3);_0x4d413a&&(_0x37ddce=_0x37ddce['filter'](function(_0x48f97e){var _0x586e9f=_0x5e1968;return Object[_0x586e9f(0xda)](_0x4013a3,_0x48f97e)[_0x586e9f(0x11a)];})),_0x5f1043[_0x5e1968(0x105)][_0x5e1968(0xe3)](_0x5f1043,_0x37ddce);}return _0x5f1043;}function _objectSpread(_0x4bc6ce){var _0xa03aa8=a120_0x3eac83;for(var _0x4ddab9=0x1;_0x4ddab9<arguments['length'];_0x4ddab9++){var _0xabaeba=arguments[_0x4ddab9]!=null?arguments[_0x4ddab9]:{};if(_0x4ddab9%0x2)ownKeys(Object(_0xabaeba),!![])[_0xa03aa8(0xd0)](function(_0x3f93fa){var _0x23ec9e=_0xa03aa8;(0x0,_defineProperty2[_0x23ec9e(0x102)])(_0x4bc6ce,_0x3f93fa,_0xabaeba[_0x3f93fa]);});else Object[_0xa03aa8(0xdb)]?Object[_0xa03aa8(0xd8)](_0x4bc6ce,Object[_0xa03aa8(0xdb)](_0xabaeba)):ownKeys(Object(_0xabaeba))[_0xa03aa8(0xd0)](function(_0x13533f){Object['defineProperty'](_0x4bc6ce,_0x13533f,Object['getOwnPropertyDescriptor'](_0xabaeba,_0x13533f));});}return _0x4bc6ce;}function a120_0x3d06(_0x3c8a8e,_0x43894c){var _0x45697f=a120_0x4569();return a120_0x3d06=function(_0x3d0630,_0x1b3822){_0x3d0630=_0x3d0630-0xc9;var _0x255d38=_0x45697f[_0x3d0630];return _0x255d38;},a120_0x3d06(_0x3c8a8e,_0x43894c);}function _createForOfIteratorHelperLoose(_0x1f6e9e,_0x5f3a7d){var _0x1bbb90=a120_0x3eac83,_0x13fe2f=typeof Symbol!==_0x1bbb90(0x110)&&_0x1f6e9e[Symbol['iterator']]||_0x1f6e9e[_0x1bbb90(0x10e)];if(_0x13fe2f)return(_0x13fe2f=_0x13fe2f[_0x1bbb90(0xdf)](_0x1f6e9e))[_0x1bbb90(0xcc)]['bind'](_0x13fe2f);if(Array[_0x1bbb90(0x113)](_0x1f6e9e)||(_0x13fe2f=_unsupportedIterableToArray(_0x1f6e9e))||_0x5f3a7d&&_0x1f6e9e&&typeof _0x1f6e9e[_0x1bbb90(0x12f)]===_0x1bbb90(0x10c)){if(_0x13fe2f)_0x1f6e9e=_0x13fe2f;var _0x1b5670=0x0;return function(){var _0x4d47c7=_0x1bbb90;if(_0x1b5670>=_0x1f6e9e[_0x4d47c7(0x12f)])return{'done':!![]};return{'done':![],'value':_0x1f6e9e[_0x1b5670++]};};}throw new TypeError(_0x1bbb90(0x101));}function _unsupportedIterableToArray(_0x10277e,_0x1e3178){var _0x313571=a120_0x3eac83;if(!_0x10277e)return;if(typeof _0x10277e===_0x313571(0xcb))return _arrayLikeToArray(_0x10277e,_0x1e3178);var _0x332fef=Object[_0x313571(0x116)][_0x313571(0xf7)]['call'](_0x10277e)[_0x313571(0xe9)](0x8,-0x1);if(_0x332fef===_0x313571(0x130)&&_0x10277e[_0x313571(0x131)])_0x332fef=_0x10277e['constructor'][_0x313571(0xde)];if(_0x332fef===_0x313571(0x120)||_0x332fef==='Set')return Array[_0x313571(0x129)](_0x10277e);if(_0x332fef===_0x313571(0x112)||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/['test'](_0x332fef))return _arrayLikeToArray(_0x10277e,_0x1e3178);}function _arrayLikeToArray(_0x1f7065,_0x2360f4){var _0x2a569e=a120_0x3eac83;if(_0x2360f4==null||_0x2360f4>_0x1f7065[_0x2a569e(0x12f)])_0x2360f4=_0x1f7065[_0x2a569e(0x12f)];for(var _0xa5a26b=0x0,_0xf00f50=new Array(_0x2360f4);_0xa5a26b<_0x2360f4;_0xa5a26b++){_0xf00f50[_0xa5a26b]=_0x1f7065[_0xa5a26b];}return _0xf00f50;}var parseConfig=function parseConfig(_0x284ada){var _0x56ca97=_0x284ada;return _0x56ca97;},DataManager=(function(){var _0x28ebc9=a120_0x3eac83;function _0x2cc365(){}return _0x2cc365[_0x28ebc9(0xfe)]=(function(){var _0xf86b27=_0x28ebc9,_0x25895e=(0x0,_asyncToGenerator2[_0xf86b27(0x102)])(_regenerator[_0xf86b27(0x102)]['mark'](function _0x3d6c7c(_0x1c8815,_0x31f7f5){var _0x3916fa,_0x204c5b,_0x394159,_0x36f404,_0x10213e,_0x19df6a,_0x33c979,_0x460ff2,_0x35914d,_0x4f2155,_0x5e9adc,_0x59d7ad,_0x4198b9,_0x25c7da,_0x1d3d42,_0x3fc4a8,_0x2ac197,_0x4f6169,_0x5ad153,_0x21bf16,_0x35b7c4,_0x443744,_0x57384d,_0x16671e,_0x5c0a0b,_0x4e6471;return _regenerator['default']['wrap'](function _0x1892c4(_0x44d57f){var _0x3b63da=a120_0x3d06;while(0x1){switch(_0x44d57f['prev']=_0x44d57f['next']){case 0x0:_0x31f7f5===void 0x0&&(_0x31f7f5=!![]);_0x204c5b=_0x1c8815['env']===_0x3b63da(0x114)?_0x3b63da(0xca)+_0x1c8815[_0x3b63da(0xe1)]:'',this['settings']=_0x1c8815,_0x44d57f['next']=0x5;return(0x0,_networkUtils[_0x3b63da(0x12e)])(''+_0x1c8815[_0x3b63da(0x124)]+_0x204c5b,_0x3b63da(0x12b));case 0x5:_0x394159=_0x44d57f[_0x3b63da(0x127)],this['config']=parseConfig(_0x394159),_0x36f404=typeof window!==_0x3b63da(0x110)&&window[_0x3b63da(0xd4)]?window['location']['hostname']===_0x3b63da(0x128):!![],_0x10213e=_0x2cc365[_0x3b63da(0x135)](this['settings'][_0x3b63da(0xe0)]||''),this[_0x3b63da(0xdc)]['trustedHost']=(_0x36f404||!!_0x10213e)&&!this['settings']['popup'];!this[_0x3b63da(0xdc)][_0x3b63da(0xeb)]&&(this[_0x3b63da(0xdc)][_0x3b63da(0x11d)]=!![]);!this[_0x3b63da(0xdc)][_0x3b63da(0xeb)]&&!_0x10213e&&(this[_0x3b63da(0xdc)][_0x3b63da(0x118)]=![]);this[_0x3b63da(0xdc)][_0x3b63da(0xd3)]=_0x2cc365[_0x3b63da(0xfa)](_0x10213e),_0x19df6a=_0x2cc365['getHostLabel'](this[_0x3b63da(0xdc)]['extension']||this['settings'][_0x3b63da(0xe0)]||'');_0x19df6a&&(this[_0x3b63da(0xdc)]['hostLabel']=_0x19df6a['label'],this[_0x3b63da(0xdc)]['hostIcon']=_0x19df6a[_0x3b63da(0x134)]);this[_0x3b63da(0xdc)][_0x3b63da(0x11d)]&&this[_0x3b63da(0xdc)][_0x3b63da(0x104)]&&this[_0x3b63da(0xdc)][_0x3b63da(0xed)]!==_0x3b63da(0x122)&&(this[_0x3b63da(0xdc)][_0x3b63da(0x104)]=![]);if(_0x31f7f5){_0x44d57f[_0x3b63da(0xcc)]=0x12;break;}return _0x44d57f[_0x3b63da(0x123)]('return');case 0x12:_0x33c979=_createForOfIteratorHelperLoose(this['config'][_0x3b63da(0x12c)]);case 0x13:if((_0x460ff2=_0x33c979())[_0x3b63da(0x137)]){_0x44d57f[_0x3b63da(0xcc)]=0x1b;break;}_0x35914d=_0x460ff2[_0x3b63da(0x12a)],_0x44d57f[_0x3b63da(0xcc)]=0x17;return(0x0,_networkUtils[_0x3b63da(0x12e)])(''+_0x35914d[_0x3b63da(0x115)]+_0x204c5b,_0x35914d[_0x3b63da(0xe7)]||_0x3b63da(0x12b));case 0x17:_0x4f2155=_0x44d57f[_0x3b63da(0x127)],this[_0x3b63da(0x12c)][_0x35914d['name']]=_0x4f2155;case 0x19:_0x44d57f[_0x3b63da(0xcc)]=0x13;break;case 0x1b:_0x5e9adc=this[_0x3b63da(0x12c)][_0x3b63da(0x10d)],_0x44d57f[_0x3b63da(0xe2)]=0x1c,_0x59d7ad=new Date()[_0x3b63da(0xd6)](),_0x44d57f['next']=0x20;return fetch(_0x3b63da(0x10f)+_0x59d7ad);case 0x20:_0x4198b9=_0x44d57f[_0x3b63da(0x127)],_0x44d57f[_0x3b63da(0xcc)]=0x23;return _0x4198b9[_0x3b63da(0x12b)]();case 0x23:_0x25c7da=_0x44d57f[_0x3b63da(0x127)],_0x1d3d42=_0x25c7da['firmware'],_0x3fc4a8=_0x25c7da['ble'],_0x2ac197=_0x25c7da[_0x3b63da(0x11c)];_0x3fc4a8&&Array[_0x3b63da(0x113)](_0x3fc4a8)&&(_0x5e9adc=_0x3fc4a8[0x0]);_0x1d3d42&&Array[_0x3b63da(0x113)](_0x1d3d42)&&(_0x4f6169=_0x1d3d42[_0x3b63da(0x117)](function(_0x469d38){var _0x7bd15e=_0x3b63da;if(_0x469d38['changelog'])return _0x469d38;return _objectSpread(_objectSpread({},_0x469d38),{},{'changelog':_0x469d38[_0x7bd15e(0xe5)]});}),this['assets']['firmware-t1']=_0x4f6169,this['assets'][_0x3b63da(0x106)]=_0x3fc4a8);_0x2ac197&&Array[_0x3b63da(0x113)](_0x2ac197)&&(_0x5ad153=_0x2ac197['map'](function(_0x3ae830){var _0x5935fd=_0x3b63da;if(_0x3ae830['changelog'])return _0x3ae830;return _objectSpread(_objectSpread({},_0x3ae830),{},{'changelog':_0x3ae830[_0x5935fd(0xe5)]});}),this['assets'][_0x3b63da(0xff)]=_0x5ad153);_0x44d57f[_0x3b63da(0xcc)]=0x2f;break;case 0x2c:_0x44d57f[_0x3b63da(0xe2)]=0x2c,_0x44d57f['t0']=_0x44d57f[_0x3b63da(0xe8)](0x1c),console[_0x3b63da(0xdd)]('fetch\x20data\x20error',_0x44d57f['t0'][_0x3b63da(0xcd)]);case 0x2f:typeof window!==_0x3b63da(0x110)&&(_0x3916fa=window)!=null&&_0x3916fa[_0x3b63da(0x107)]&&((_0x21bf16=window)==null?void 0x0:(_0x35b7c4=_0x21bf16[_0x3b63da(0x107)])==null?void 0x0:_0x35b7c4[_0x3b63da(0xfd)]==null?void 0x0:_0x35b7c4[_0x3b63da(0xfd)]({'type':_0x3b63da(0xd2),'data':(_0x443744=_0x5e9adc)!=null?_0x443744:this[_0x3b63da(0x12c)]['nrf']},'*'));_0x57384d=_createForOfIteratorHelperLoose(this['config'][_0x3b63da(0xe4)]);case 0x31:if((_0x16671e=_0x57384d())[_0x3b63da(0x137)]){_0x44d57f['next']=0x39;break;}_0x5c0a0b=_0x16671e[_0x3b63da(0x12a)],_0x44d57f[_0x3b63da(0xcc)]=0x35;return(0x0,_networkUtils[_0x3b63da(0x12e)])(''+_0x5c0a0b['json']+_0x204c5b,_0x3b63da(0x12b));case 0x35:_0x4e6471=_0x44d57f[_0x3b63da(0x127)],this['messages'][_0x5c0a0b[_0x3b63da(0xde)]]=_0x4e6471;case 0x37:_0x44d57f[_0x3b63da(0xcc)]=0x31;break;case 0x39:(0x0,_TransportInfo[_0x3b63da(0xf9)])(this['assets'][_0x3b63da(0xe6)]),(0x0,_CoinInfo[_0x3b63da(0xd5)])(this[_0x3b63da(0x12c)]['coins']),(0x0,_FirmwareInfo[_0x3b63da(0x11f)])(this[_0x3b63da(0x12c)][_0x3b63da(0xfb)],0x1),(0x0,_FirmwareInfo[_0x3b63da(0x11f)])(this[_0x3b63da(0x12c)]['firmware-t2'],0x2),(0x0,_FirmwareInfo[_0x3b63da(0x11f)])(this['assets'][_0x3b63da(0xff)],_0x3b63da(0x10b)),(0x0,_BLEFirmwareInfo[_0x3b63da(0xef)])(this[_0x3b63da(0x12c)][_0x3b63da(0x106)]);case 0x3f:case _0x3b63da(0xc9):return _0x44d57f[_0x3b63da(0x133)]();}}},_0x3d6c7c,this,[[0x1c,0x2c]]);}));function _0x5e4dee(_0x25f800,_0x530746){var _0x1dc39a=_0xf86b27;return _0x25895e[_0x1dc39a(0xe3)](this,arguments);}return _0x5e4dee;}()),_0x2cc365[_0x28ebc9(0xf8)]=function _0x4dfc8c(_0x5ac540){var _0x5f0113=_0x28ebc9;if(!_0x5ac540||!_0x5ac540[_0x5f0113(0x12f)])return this['messages'][_0x5f0113(0x102)];var _0x111f92=_0x5ac540[0x0]-0x1,_0x4635b6=this[_0x5f0113(0x100)]['messages'][_0x5f0113(0xf6)](function(_0x12ea5c){var _0x3d00e0=_0x5f0113,_0x14a632=_0x12ea5c[_0x3d00e0(0xd9)][_0x3d00e0(0xf1)][_0x111f92],_0x23d043=_0x12ea5c[_0x3d00e0(0xd9)][_0x3d00e0(0x119)]?_0x12ea5c[_0x3d00e0(0xd9)][_0x3d00e0(0x119)][_0x111f92]:_0x5ac540;return(0x0,_versionUtils[_0x3d00e0(0x11e)])(_0x5ac540,_0x14a632)>=0x0&&(0x0,_versionUtils[_0x3d00e0(0x11e)])(_0x5ac540,_0x23d043)<=0x0;});return this[_0x5f0113(0xe4)][_0x4635b6?_0x4635b6[_0x5f0113(0xde)]:'default'];},_0x2cc365[_0x28ebc9(0x135)]=function _0x2b86ad(_0x1e76b8){var _0x36bb4f=_0x28ebc9;if(!this[_0x36bb4f(0x100)])return null;var _0x2e159c=(0x0,_parseUri[_0x36bb4f(0x102)])(_0x1e76b8);if(_0x2e159c&&typeof _0x2e159c[_0x36bb4f(0xd7)]===_0x36bb4f(0xcb)){var _0x2f1009=_0x2e159c[_0x36bb4f(0xd7)][_0x36bb4f(0xcf)]('.');return _0x2f1009['length']>0x2&&(_0x2e159c[_0x36bb4f(0xd7)]=_0x2f1009['slice'](_0x2f1009[_0x36bb4f(0x12f)]-0x2,_0x2f1009[_0x36bb4f(0x12f)])[_0x36bb4f(0xf5)]('.')),this[_0x36bb4f(0x100)][_0x36bb4f(0x10a)]['find'](function(_0x460c46){var _0xcd20fc=_0x36bb4f;return _0x460c46[_0xcd20fc(0xe0)]===_0x1e76b8||_0x460c46['origin']===_0x2e159c[_0xcd20fc(0xd7)];});}},_0x2cc365[_0x28ebc9(0xee)]=function _0x1d89b1(){var _0x43d697=_0x28ebc9,_0x5d54e8=this;if(!this[_0x43d697(0x100)])return;var _0x253ecf=(0x0,_parseUri[_0x43d697(0x102)])(this[_0x43d697(0xdc)][_0x43d697(0xe0)]);if(_0x253ecf&&typeof _0x253ecf[_0x43d697(0xd7)]===_0x43d697(0xcb)){var _0xb59964=_0x253ecf['host']['split']('.');return _0xb59964[_0x43d697(0x12f)]>0x2&&(_0x253ecf[_0x43d697(0xd7)]=_0xb59964[_0x43d697(0xe9)](_0xb59964[_0x43d697(0x12f)]-0x2,_0xb59964[_0x43d697(0x12f)])[_0x43d697(0xf5)]('.')),this['config'][_0x43d697(0xf2)][_0x43d697(0xf6)](function(_0x3f6ca5){var _0x155ef6=_0x43d697;return _0x3f6ca5[_0x155ef6(0xe0)]===_0x5d54e8['settings']['origin']||_0x3f6ca5[_0x155ef6(0xe0)]===_0x253ecf[_0x155ef6(0xd7)];});}},_0x2cc365['getPriority']=function _0x3b21ed(_0x588998){var _0x24ff41=_0x28ebc9;if(_0x588998)return _0x588998[_0x24ff41(0xd3)];return _ConnectSettings['DEFAULT_PRIORITY'];},_0x2cc365[_0x28ebc9(0x121)]=function _0x1d1c12(_0x247745){var _0x3fbfb7=_0x28ebc9;return this[_0x3fbfb7(0x100)][_0x3fbfb7(0xea)][_0x3fbfb7(0xf6)](function(_0xd566ff){var _0x20684d=_0x3fbfb7;return _0xd566ff[_0x20684d(0xe0)]===_0x247745;});},_0x2cc365[_0x28ebc9(0x126)]=function _0x53abba(_0x3cfe94){var _0x17043c=_0x28ebc9;if(!this[_0x17043c(0xdc)])return null;if(typeof _0x3cfe94===_0x17043c(0xcb))return this['settings'][_0x3cfe94];return this[_0x17043c(0xdc)];},_0x2cc365[_0x28ebc9(0x136)]=function _0x572078(_0x4d9d96){return![];},_0x2cc365[_0x28ebc9(0xf3)]=function _0x26df07(){return this['config'];},_0x2cc365;}());exports['default']=DataManager,(0x0,_defineProperty2['default'])(DataManager,a120_0x3eac83(0x12c),{}),(0x0,_defineProperty2[a120_0x3eac83(0x102)])(DataManager,a120_0x3eac83(0xe4),{});