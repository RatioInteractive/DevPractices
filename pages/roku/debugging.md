Roku Debugging
--------------
There are a number of tool sets which you can choose for Roku debugging, as suits your own development practices.
* There is a decent walk-through for getting up and running with the minimal set of tools, [here](http://sdkdocs.roku.com/display/sdkdoc/Developer+Guide#DeveloperGuide-60DevelopmentOverview).
 - Note that the Telnet Client is not installed by default in modern Windows installations, but can be enabled with the "Turn Windows features on and off" work-flow, and putting a checkmark on "Telnet client".
* There is an [Eclipse plug-in guide](http://sdkdocs.roku.com/display/sdkdoc/Eclipse+Plugin+Guide) for setting up Roku debugging.
* Ratio has had success with setting up a Visual Studio solution, for an optional, often-familiar editing environment.
 - This gives a functional Solution Explorer and code-searching tools, but does not support direct debugging.
 - For debugging, if available, our Xanadu is the best option. Or you can switch to use the command-line console in Eclipse, or use the Telnet interface directly. Using a client like PuTTY which doesn't constantly resize and can save the session details, can also be useful. (See: http://sdkdocs.roku.com/display/sdkdoc/Brightscript+Debug+Console)

## Debugging Network Traffic
Rokus do not seem to have support for configuring an HTTP proxy, so using Fiddler as a middle man does not seem to be an option for this platform. Instead, we have successfully debugged network traffic by routing the Roku through your PC via Internet Connection Sharing, and using Wireshark. Getting at the data is harder, but possible.
* You will need two NICs; an easy option is to attach an Ethernet USB adapter.
* Go to Network Properties control panel.
* Select "Change adapter settings".
* Right-click your regular NIC (not the one that the Roku is connected to) and select Properties.
* The window title should be something like "Ethernet Properties". If you do not have a "Sharing" tab, you have likely invoked the Properties from the wrong place.
* Select the Sharing tab, and select "Allow other network users to connect through..."
* Select the identity of the second NIC (where Roku is connected).
* Note that you will likely need to repeat the above steps if you disconnect your second NIC (IE to take a laptop to a meeting); Even if it still lists your second NIC by name, it will likely not be functional until you disable sharing and re-enable it.
* On the Roku, ensure your Network Settings for Wired (Ethernet) look functional. Sometimes it will fail to detect the network anyway; you may also need to repeat the above steps to try again until Roku reports an IP address, etc.
* Run Wireshark. (Download and install it if necessary: https://www.wireshark.org/download.html)
* Near the green "Start" shark fin, select your regular NIC, then click Start.
* Note that Wireshark is quite spammy as it is a full network stack sniffer rather than just an HTTP debugger. The Filter option is finicky; you may find you often have to re-apply filters.
* You may want to ask around for someone a bit familiar with Wireshark to get started.
