# Xbox One Debugging

Overview
--------
Here are some debugging tips that Ratio has compiled for Xbox One.

Fiddler
-------
Fiddler is an invaluable, free, general HTTP/HTTPS traffic debugging tool, [available here](http://www.telerik.com/fiddler).
The Xbox One devkits support the configuration of a network proxy, which can be used to route the Xbox One web traffic through a proxy, and even sometimes decrypt HTTPS traffic.
It may be possible to debug web traffic with other tools, but here are a way that has worked well for us, through Fiddler:

#### Enable Fiddler proxy
* Make sure Tools->Options->Connections "Allow remote computers to connect" is checked.
* Export FiddlerRoot certificate to the desktop. (Tools->Options->HTTPS->Actions...)
* You may wish to save the rest of the steps as a batch file to move back and forth between using Fiddler or not.
* "%DurangoXDK%\bin\xbcp.exe" "%HOMEPATH%\Desktop\FiddlerRoot.cer" "xs:\Microsoft\Cert\FiddlerRoot.cer" (this copies the cert to the Xbox)
* @ECHO.192.168.[???].[???]:8888>"%TEMP%\TempProxyAddress.txt"
 - Where the IP address is an address for the PC running Fiddler, which the Xbox One can reach on the network. (IE it cannot be a virtual IP address or whatnot.) This generates a file in your temp folder.
* "%DurangoXDK%\bin\xbcp.exe" "%TEMP%\TempProxyAddress.txt" "xs:\Microsoft\Fiddler\ProxyAddress.txt" (this copies the proxy file to the Xbox)
* "%DurangoXDK%\bin\xbreboot.exe" (this restarts Xbox)

#### Disable Fiddler proxy
* "%DurangoXDK%\bin\xbdel.exe" "xs:\Microsoft\Fiddler\ProxyAddress.txt"
* "%DurangoXDK%\bin\xbreboot.exe"
 
