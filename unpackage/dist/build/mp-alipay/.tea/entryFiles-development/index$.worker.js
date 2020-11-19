if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


      if( navigator.userAgent && (navigator.userAgent.indexOf('LyraVM') > 0 || navigator.userAgent.indexOf('AlipayIDE') > 0) ) {
        var AFAppX = self.AFAppX.getAppContext ? self.AFAppX.getAppContext().AFAppX : self.AFAppX;
      } else {
        importScripts('https://appx/af-appx.worker.min.js');
        var AFAppX = self.AFAppX;
      }
      self.getCurrentPages = AFAppX.getCurrentPages;
      self.getApp = AFAppX.getApp;
      self.Page = AFAppX.Page;
      self.App = AFAppX.App;
      self.my = AFAppX.bridge || AFAppX.abridge;
      self.abridge = self.my;
      self.Component = AFAppX.WorkerComponent || function(){};
      self.$global = AFAppX.$global;
      self.requirePlugin = AFAppX.requirePlugin;
    

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../uview-ui/components/u-icon/u-icon?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-search/u-search?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../components/uni-icons/uni-icons?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-checkbox-group/u-checkbox-group?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-checkbox/u-checkbox?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../uview-ui/components/u-mask/u-mask?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../uview-ui/components/u-popup/u-popup?hash=93778e59e9c142492cad72fd41ad6441b3624d39');
require('../../uview-ui/components/u-number-box/u-number-box?hash=cf3366fbb6f8f5d580f2256f66f7bbc6e70278a2');
require('../../components/zy-search/zy-search?hash=ec7c5687c7f2ffa836caf3a93e877914426baff6');
require('../../pages/zy/index?hash=686d571b8c31899772edfca87e9c00cadcb29b1a');
require('../../pages/fenlei/index?hash=686d571b8c31899772edfca87e9c00cadcb29b1a');
require('../../pages/gouwuce/index?hash=3f7730c97d1f5f98d5ac69573816406b21478539');
require('../../pages/wode/index?hash=af30089a14de5bba22f51cbb6b3d48bc536087f6');
require('../../pages/zy/shousuo/new_file?hash=8bf9d4b80a3553409c1fa7769f2d7dd8d986a657');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}