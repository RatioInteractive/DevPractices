Project Setup Documentation Includes
===
- Project name
- Description
- Dependencies, SDKs, 3rd Party Libraries
 - name - version - link
- Project setup steps 


Examples
===
BigApp5000 for Android
---
BigApp5000 is a port of the iOS app which targets Android 4.3 for connecting to BLE sensors.

### Dependencies
#### Required SDKs
- Kindle device drivers from Amazon - add this url to your download manager add-ons:
http://kindle-sdk.s3.amazonaws.com/addon.xml 

#### 3rd party libraries
- [SlidingMenu](https://github.com/RatioInteractive/SlidingMenu) - this is repository referenced as a submodule in the project

### Project setup
#### Clone the repo and initialize the submodule:  
`git clone <git@github.com:RatioInteractive/BigApp5000.git>`  
`git submodule update --init --recursive`  

#### Update project references
1. In eclipse, right click on the project explorer on the left hand side from the context menu, select "Import..", then from the dialog, select "Android", then "Existing Android code into Workspace"

- In the next dialog, enter the path that you checked the code out into (your home directory)/BigApp5000, select "BigApp5000" and "Sliding Menu".

- Issue with SlidingMenu library reference in BigApp5000 project (this is an Eclipse problem) right click on the BigApp5000 folder in the project explorer, and select "properties", select "library" from the left hand list if the Library reference for Sliding menu has a red "X" next to it, delete the library reference, then pick "Add.." and select the SlidingMenu project.