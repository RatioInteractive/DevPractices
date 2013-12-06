**Installing Ubuntu**  
*[Ubuntu Download link:](http://www.ubuntu.com/download/desktop) (top link)
*Run the iso file from Windows and let it finish the installation.
*After installation is finished reboot the machine and you should get the option to boot either Windows or Ubuntu.
  
  
**Installing JDK/JRE**  
*For the default jdk (currently openjdk-6):
**“sudo apt-get install default-jdk”
*If you want openjdk-7:
**“sudo apt-get install openjdk-7-jdk”
*(these commands should install all dependencies automatically)
*If you want the Oracle jdk, follow instructions here: 
**http://www.webupd8.org/2012/01/install-oracle-java-jdk-7-in-ubuntu-via.html
 
**Installing Android SDK**  
*[Android SDK download link](http://developer.android.com/sdk/index.html)
*Launch the eclipse from the eclipse directory inside the adt-bundle directory.
*Go to Window > Android SDK Manager. It will launch the Android SDK Manager window. Install all the required tools and API packages.
*In eclipse I ran into an error that it cannot find adb. I found this useful link http://stackoverflow.com/questions/13571145/android-adb-not-found that suggests use command “apt-get install ia32-libs” to install IA32 library and that should fix the issue.
 
**Importing SSH keys**
*Generate a pair of keys by following command
**“ssh-keygen -t rsa -b 4096”
*In my case keys were generated under Home directory and I used following commands to move them to the location where git looks for it by default
**“mv your_public_key.pub $HOME/.ssh/id_rsa.pub”
**“mv your_private_key $HOME/.ssh/id_rsa”
*Add the SSH key to github. Go to following link
**https://github.com/settings/ssh
**Click Add SSH Key then give it a name and paste the content from your public key(.pub) in the box and hit Add button at the bottom.
*You should now be able to clone, pull and push from/to github.