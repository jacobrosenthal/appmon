'use strict';

var FLAG_SECURE_VALUE = "";

Java.perform(function() {
  var Window = Java.use("android.view.Window");
  var WindowManager = Java.use("android.view.WindowManager");
  var SurfaceView = Java.use("android.view.SurfaceView");

  if (Window.setFlags) {
    //Ref: https://developer.android.com/reference/android/view/Window.html#setFlags(int, int)
    Window.setFlags.implementation = function(flag, mask) {
      if (WindowManager.LayoutParams && flag === WindowManager.LayoutParams.FLAG_SECURE) {
        console.log("setFlags FLAG_SECURE: True");
        FLAG_SECURE_VALUE = true;
      }
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'FLAG_SECURE';
      send_data.lib = 'android.view.Window';
      send_data.method = 'setFlags';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "FLAG_SECURE";
      data.value = FLAG_SECURE_VALUE;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.setFlags.apply(this, arguments);
    }
  }

  if (Window.addFlags) {
    //Ref: https://developer.android.com/reference/android/view/Window.html#addFlags(int)
    Window.addFlags.implementation = function(flag) {
      if (WindowManager.LayoutParams && flag === WindowManager.LayoutParams.FLAG_SECURE) {
        console.log("addFlags FLAG_SECURE: True");
        FLAG_SECURE_VALUE = true;
      }

      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'FLAG_SECURE';
      send_data.lib = 'android.view.Window';
      send_data.method = 'setFlags';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "FLAG_SECURE";
      data.value = FLAG_SECURE_VALUE;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.addFlags.call(this, flag);
    }
  }

  if (SurfaceView.setSecure) {
    //Ref: https://developer.android.com/reference/android/view/SurfaceView.html#setSecure(boolean)
    SurfaceView.setSecure.implementation = function(isSecure) {
      console.log("SurfaceView setSecure: " + isSecure);
      /*   --- Payload Header --- */
      var send_data = {};
      send_data.time = new Date();
      send_data.txnType = 'FLAG_SECURE';
      send_data.lib = 'android.view.SurfaceView';
      send_data.method = 'setSecure';
      send_data.artifact = [];
      /*   --- Payload Body --- */
      var data = {};
      data.name = "isSecure";
      data.value = isSecure;
      data.argSeq = 0;
      send_data.artifact.push(data);

      send(JSON.stringify(send_data));

      return this.setSecure.call(this, isSecure);
    }
  }
});