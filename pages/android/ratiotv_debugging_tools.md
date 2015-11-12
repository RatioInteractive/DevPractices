RatioTV Debugging Tools
===

**Download Android SDK Tools**  
We recommend you download the Android SDK Tools so you can have access to the logs that the app is outputting.  This will help with:  
* Identifying any exceptions that are occurring within the app
* Seeing the http request urls that the app is making  
* Setting up a proxy(see instructions below)
  
The SDK Tools can be downloaded here: https://developer.android.com/sdk/installing/index.html?pkg=tools  
  
*To see log output, execute the following command line command: adb logcat  
*If you are on a unix machine, and you want to filter log output for your app only, execute:  
``adb logcat | grep `adb shell ps | grep com.sony.funimation | cut -c10-15` ``  
*If you are on a unix machine, and you want to filter log output to see http request urls for your app only, execute:  
``adb logcat | grep `adb shell ps | grep com.sony.funimation | cut -c10-15` | grep getText``

  
**Switch Config/Bootstrap URL's**  
* For the phone/tablet version, you can switch feeds by clicking on the ActionBar
* For the FireTV version, you can switch feeds by clicking the FF button on the remote
* NOTE: feed switching is only enabled if LOGGING_ENABLED = true for your specific Application  
  
**Proxying**  
You may find it useful to set up a proxy with a tool like Charles or Fiddler.  This will enable you to see details all of the network traffic that is occurring within the app.  
  
To set up proxying, you will need to have the Android SDK Tools installed on your computer.  You will push a file named "proxyFile.json" to a specific location on your test device.  The location is "/sdcard/RatioTV/proxyFile.json".  Here is a sample proxyFile.json:  
  
{  
  "isProxyEnabled": false,  
  "proxyIp": "192.168.21.146",  
  "proxyPort": 8888  
}  
  
Here are the commands you will need to issue in a command line to push the file:  
adb shell  
cd sdcard  
mkdir RatioTV
exit  
adb push ./proxyFile.json /sdcard/RatioTV/proxyFile.json  
  
(Once you create the RatioTV folder, you won't need to make it again.  You can just re-push the file)
  
NOTE: Proxying will only work if LOGGING_ENABLED = true for your specific Application.  Also, the contents of the proxyFile.json are checked on each request.
