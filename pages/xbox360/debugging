# Xbox 360 Debugging

Overview
--------
We have developed a few tools and techniques which are specific to the Xbox 360, to assist with debugging (primarily RatioTV) applications.

Xanadu
------
This is a debugging tool along the veins of "xbwatson" but with many additional features. It may some day become part of the official RatioTV offering.

Fiddler
-------
Fiddler is an invaluable, free, general HTTP/HTTPS traffic debugging tool, [available here](http://www.telerik.com/fiddler).
The Xbox 360 devkits (but not retail kits) support the configuration of a network proxy, which can be used to see the Xbox 360 web traffic, and even sometimes decrypt HTTPS traffic.
It may be possible to debug web traffic with other tools, but here are a couple ways that have worked well for us, through Fiddler:

#### Xanadu Fiddler Setup
* Launch Fiddler, and export a HTTPS decryption certificate to your desktop. (With recent versions of Fiddler, this may be Tools -> Fiddler Options -> HTTPS tab -> Actions -> Export Root Certificate to Desktop.)
* Launch Xanadu.
* Select the NetworkConfigurator tab; you may need to expand the right window pane a bit to discover the tab names.
* Double-click the IP address of your PC. (If there are multiple IP addresses listed, check ipconfig to determine which one the Xbox 360 will be able to use; For example, directing the Xbox 360 to use a virtual IP address as a proxy won't go as well.)
* Restart Fiddler, and reboot the Xbox 360.
* To disable the Fiddler proxy: Launch Xanadu, select the NetworkConfigurator tab, and select the "Stop Fiddler Proxy" button.

#### Manual Fiddler Setup
* Launch Fiddler, and export a HTTPS decryption certificate to your desktop. (With recent versions of Fiddler, this may be Tools -> Fiddler Options -> HTTPS tab -> Actions -> Export Root Certificate to Desktop.)
* Open the "Xbox 360 Command Prompt" on your PC.
* Run ipconfig to determine your applicable PC IP address.
* Run xbsetcfg with that IP address, IE: xbsetcfg.exe /httpproxy set 1.2.3.4 8888 /cert "%USERPROFILE%\desktop\FiddlerRoot.cer"
* Restart Fiddler, and reboot the Xbox 360.
* To disable the Fiddler proxy: xbsetcfg.exe /httpproxy clear
