'use strict';function a95_0x576a(_0x1f6758,_0x253176){var _0x1e32df=a95_0x1e32();return a95_0x576a=function(_0x576af8,_0x1a4ecc){_0x576af8=_0x576af8-0xa8;var _0x529367=_0x1e32df[_0x576af8];return _0x529367;},a95_0x576a(_0x1f6758,_0x253176);}var a95_0x1552ba=a95_0x576a;(function(_0x466c5d,_0x283749){var _0x16c23d=a95_0x576a,_0x26dd22=_0x466c5d();while(!![]){try{var _0x536810=parseInt(_0x16c23d(0xc8))/0x1*(parseInt(_0x16c23d(0xaa))/0x2)+parseInt(_0x16c23d(0xb2))/0x3*(parseInt(_0x16c23d(0xb7))/0x4)+-parseInt(_0x16c23d(0xc0))/0x5*(parseInt(_0x16c23d(0xb6))/0x6)+-parseInt(_0x16c23d(0xc5))/0x7*(-parseInt(_0x16c23d(0xb9))/0x8)+-parseInt(_0x16c23d(0xc7))/0x9*(parseInt(_0x16c23d(0xbf))/0xa)+-parseInt(_0x16c23d(0xa9))/0xb+parseInt(_0x16c23d(0xbb))/0xc*(parseInt(_0x16c23d(0xb4))/0xd);if(_0x536810===_0x283749)break;else _0x26dd22['push'](_0x26dd22['shift']());}catch(_0xdbd19a){_0x26dd22['push'](_0x26dd22['shift']());}}}(a95_0x1e32,0x88874));exports['__esModule']=!![],exports[a95_0x1552ba(0xc3)]=exports[a95_0x1552ba(0xb1)]=exports['validateAddressParameters']=void 0x0;var _paramsValidator=require('../helpers/paramsValidator'),_pathUtils=require('../../../utils/pathUtils'),validateAddressParameters=function validateAddressParameters(_0x2b0c73){var _0xfa3ddd=a95_0x1552ba;(0x0,_paramsValidator[_0xfa3ddd(0xb3)])(_0x2b0c73,[{'name':'addressType','type':_0xfa3ddd(0xc4),'obligatory':!![]},{'name':_0xfa3ddd(0xad),'obligatory':!![]},{'name':_0xfa3ddd(0xc2),'type':'string'}]),(0x0,_pathUtils[_0xfa3ddd(0xb8)])(_0x2b0c73[_0xfa3ddd(0xad)]),_0x2b0c73['stakingPath']&&(0x0,_pathUtils[_0xfa3ddd(0xb8)])(_0x2b0c73[_0xfa3ddd(0xac)]),_0x2b0c73[_0xfa3ddd(0xab)]&&(0x0,_paramsValidator[_0xfa3ddd(0xb3)])(_0x2b0c73[_0xfa3ddd(0xab)],[{'name':_0xfa3ddd(0xc1),'type':_0xfa3ddd(0xc4),'obligatory':!![]},{'name':_0xfa3ddd(0xbe),'type':_0xfa3ddd(0xc4),'obligatory':!![]},{'name':_0xfa3ddd(0xba),'type':_0xfa3ddd(0xc4),'obligatory':!![]}]);};exports[a95_0x1552ba(0xb0)]=validateAddressParameters;var addressParametersToProto=function addressParametersToProto(_0x53f2f0){var _0x331afe=a95_0x1552ba,_0x490643=(0x0,_pathUtils[_0x331afe(0xb8)])(_0x53f2f0[_0x331afe(0xad)],0x3),_0x5e1f96=[];_0x53f2f0[_0x331afe(0xac)]&&(_0x5e1f96=(0x0,_pathUtils[_0x331afe(0xb8)])(_0x53f2f0[_0x331afe(0xac)],0x3));var _0x34fa8b;return _0x53f2f0[_0x331afe(0xab)]&&(_0x34fa8b={'block_index':_0x53f2f0[_0x331afe(0xab)][_0x331afe(0xc1)],'tx_index':_0x53f2f0[_0x331afe(0xab)][_0x331afe(0xbe)],'certificate_index':_0x53f2f0[_0x331afe(0xab)]['certificateIndex']}),{'address_type':_0x53f2f0[_0x331afe(0xc9)],'address_n':_0x490643,'address_n_staking':_0x5e1f96,'staking_key_hash':_0x53f2f0[_0x331afe(0xc2)],'certificate_pointer':_0x34fa8b};};exports[a95_0x1552ba(0xb1)]=addressParametersToProto;function a95_0x1e32(){var _0x1b6f88=['stakingKeyHash','addressParametersFromProto','number','4502309NdIioF','staking_key_hash','567fvTheb','1xNruBD','addressType','address_n_staking','9822219shZCuj','1538444DNYgrB','certificatePointer','stakingPath','path','block_index','address_n','validateAddressParameters','addressParametersToProto','75mDrZdQ','validateParams','4147RlSFhR','certificate_pointer','116010fJPoDw','74604shHsKy','validatePath','8QKDEUP','certificateIndex','12048omdouo','tx_index','address_type','txIndex','26470mwcBAv','150RYxVvS','blockIndex'];a95_0x1e32=function(){return _0x1b6f88;};return a95_0x1e32();}var addressParametersFromProto=function addressParametersFromProto(_0x58ade6){var _0x549117=a95_0x1552ba,_0x49cef4;return _0x58ade6[_0x549117(0xb5)]&&(_0x49cef4={'blockIndex':_0x58ade6[_0x549117(0xb5)][_0x549117(0xae)],'txIndex':_0x58ade6[_0x549117(0xb5)][_0x549117(0xbc)],'certificateIndex':_0x58ade6[_0x549117(0xb5)]['certificate_index']}),{'addressType':_0x58ade6[_0x549117(0xbd)],'path':_0x58ade6[_0x549117(0xaf)],'stakingPath':_0x58ade6[_0x549117(0xa8)],'stakingKeyHash':_0x58ade6[_0x549117(0xc6)],'certificatePointer':_0x49cef4};};exports[a95_0x1552ba(0xc3)]=addressParametersFromProto;