RatioTV Debugging Tools
===

**Download Android SDK Tools**  
We recommend you download the Android SDK Tools so you can have access to the logs that the app is outputting.  We find it easier to do the whole Android Studio install rather than just installing the stand-alone tools, but it's at your discretion.  The tools will help with:  
* Identifying any exceptions that are occurring within the app
* Seeing the http request urls that the app is making  
* Setting up a proxy(see instructions below)
  
The SDK Tools can be downloaded here: https://developer.android.com/sdk/installing/index.html?pkg=tools  

*We recommend using Android Studio to monitor Logcat.  Just create a new Android studio project, which will then expose the 'Android Monitor' tab which shows Logcat output.
  
*To see log output in the command line, execute the following command line command: adb logcat  
  
*If you are on a unix machine, and you want to filter log output for your app only, execute:  
``adb logcat | grep `adb shell ps | grep {app.package.name} | cut -c10-15` ``  
  
*If you are on a unix machine, and you want to filter log output to see http request urls for your app only, execute:  
``adb logcat | grep `adb shell ps | grep {app.package.name} | cut -c10-15` | grep getText``  
  
*NOTE: replace {app.package.name} with your app's package name
  
**Switch Config/Bootstrap URL's**  
* For the phone/tablet version, you can switch feeds by long pressing on the center of the ActionBar
* For the FireTV version, you can switch feeds by long pressing the Play/Pause button on the remote
* NOTE: feed switching is only enabled on non-release builds AND if the setting is_proxy_allowed = true for your specific Application  
  
**Proxying**  
You may find it useful to set up a proxy with a tool like Charles or Fiddler.  This will enable you to see details all of the network traffic that is occurring within the app.  
  
To set up proxying, you will need to have the Android SDK Tools installed on your computer.  You will push a file named "proxyFile.json" to a specific location on your test device.  The location is "/sdcard/RatioTV/proxyFile.json".  Here is a sample proxyFile.json:  
  
{  
  "isProxyEnabled": true,  
  "proxyIp": "192.168.21.146",  
  "proxyPort": 8888  
}  
  
NOTE: Use your own values for isProxyEnabled, proxyIp and proxyPort.  If your proxyIp address changes and isProxyEnabled = true, you will get network errors.  Also, the proxyFile is checked upon application launch, so you will need to kill and relaunch your application to see changes take effect.
  
Here are the commands you will need to issue in a command line to push the file:  
adb shell  
cd sdcard  
mkdir RatioTV  
exit  
adb push ./proxyFile.json /sdcard/RatioTV/proxyFile.json  
  
(Once you create the RatioTV folder, you won't need to make it again.  You can just re-push the file)
