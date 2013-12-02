iOS Design Guidelines
===

Pixel dimensions are defined in code with following device sizes:

* iPad - 768x1024
* iPhone 5 - 320x568
* iPhone 4 - 320x480

Redlines should use the non-retina dimensions listed above.  All assets should be delivered at 2x sizes for retina devices.  Whether or not non-retina assets are required depends upon the supported iOS versions and devices.  For iOS 7 apps, iPhone/iPod devices are all retina while iPad apps must support both.

To specify a high-resolution version of an image, create a version whose width and height (measured in pixels) are twice that of the original. When saving the image, use the same base name but include the string @2x between the base filename and the filename extension.

App icon and launch images
---------------------

https://developer.apple.com/library/ios/documentation/iphone/conceptual/iphoneosprogrammingguide/App-RelatedResources/App-RelatedResources.html

Backgrounds and Rotation
---------------------

When you are using a background that is intended for a device that supports rotation, design the background to be square with the long dimension and pinned top-center.  For example, an iPad background should be 1024x1024 so that when it rotates, it stays centered under the content

All iPad apps should support portrait and landscape orientations with layout and designs for both.

File naming convensions
---------------------

Ideally, assets are delivered in an asset catalog with all the launch icons defined:

https://developer.apple.com/library/ios/recipes/xcode_help-image_catalog-1.0/Recipe.html

However, this requires a Mac with xCode installed so alternatively, we can create the catalog.  Assets should be delivered with the following conventions:

* MyImage.png - Default version of an image resource.
* MyImage@2x.png - High-resolution version of an image resource for devices with Retina displays.
* MyImage~iphone.png - Version of an image for iPhone and iPod touch.
* MyImage@2x~iphone.png - High-resolution version of an image for iPhone and iPod touch devices with Retina displays.
* MyImage~ipad.png - Version of an image for iPad.
* MyImage@2x~ipad.png - High-resolution version of an image for iPad with Retina displays.
* MyImage-568h@2x.png - Full-sceen image for an iPhone 5.

iOS 7 Considerations
---------------------

* The status bar is either white or black.  Comps should include the status bar.  The views are defined full-screen and will, by default, slide under the status bar and navigation bars (top and bottom).

* Apps should be designed to have a color pallette or "tint" for use throughout the app.  Actionable items should be a different color from static text.  iOS 7 default is blue for actionable and black for static.  Comps should include what the color pallette would look like when "dimmed" by applying a gray-scale filter to the colors.  Developers should plan for how to handle this in their apps if multiple tint colors are used.

* Gestures are heavily used throughout iOS 7 UX and transitions should be considered as a part of the design process.
