#Guidelines for designing and implementing for multiscreen on the Windows platform

This document contains a synopsis of Microsoft’s guidelines as well as a repository on the knowledge gained from firsthand experience. 

###Source Guidelines:
* [Narrow Layouts](http://msdn.microsoft.com/en-us/library/windows/apps/hh465371.aspx)
* [Scaling to pixel density](http://msdn.microsoft.com/en-us/library/windows/apps/hh465362.aspx)
* [Guidelines for supporting multiple screen sizes](http://msdn.microsoft.com/en-us/library/windows/apps/hh465349.aspx)

## *For Designers*
## Pixel Density
Dots per inch(DPI) is the general measure used when describing pixel density.  However Microsoft tends to use a scaling factor to describe the various densities.
### Designing for Pixel Density
Windows Store Apps will automatically scale the UI for the appropriate screen size(in inches on the diagonal) and the screen resolution(in pixels). To ensure smooth results and avoid pixel rounding use typographic grid units(em) based on the grid of 20px for major grid units and 5px for minor grid units.

The scaling plateaus used by the platform are:
* 1 Base scale
* 1.4
* 1.8

Windows Phone
* 1 Base scale
* 1.4
* 2.4

### Creating Assets for Pixel Density
In order to support the auto scaling functionality on the Windows platform multiple files need to be created for each asset.
A simple example:

| Original Asset Name | Original Assest Resolution | Scaled Names           | Scaled Resolutions |
| ------------------- | -------------------------- | ---------------------- | ------------------ |
| Logo.png            | 100x100                    | Logo.scale-100.png     | 100x100            |
|                     |                            | Logo.scale-140.png     | 140x140            |
|                     |                            | Logo.scale-180.png     | 180x180            |

formatting template: *name*.scale-*scalingValue*.*ext*

[Further reading on image scaling](http://msdn.microsoft.com/en-us/library/windows/apps/xaml/hh965325.aspx)


## Multiple Resolutions
### Designing for multiscreen
While we need make designs that can smoothly scale across a spectrum of resolutions, Microsoft has called out some key resolutions to set as boundaries in the design.

#### Resolution boundaries

| Resolution | Description |
| ---------- | ----------- |
| 1366x768	|Tablets, convertibles, and many laptops (16:9 aspect ratio); baseline laptop/desktop resolution|
| 1920x1080	| Large laptops and devices (16:9 aspect ratio) |
| 2560x1440	| Very large all-in-one device (16:9 aspect ratio) |
| 1280x800 and 800x1280 |	Portrait-first small devices (16:10 aspect ratio) |
| 1024x768 and 768x1024 |	Landscape-first small devices (4:3 aspect ratio) |
| 1371x857 and 857x1371 |	Small devices (16:10 aspect ratio) |
| 384x640 |	4.5" phone (15:9 aspect ratio) |
| 400x711 |	4.7" phone (16:9 aspect ratio) |
| 450x800 |	5.5" phone (16:9 aspect ratio) |
| 491x873 |	6" phone (16:9 aspect ratio) |



#### Mimimum Screen Sizes
Another aspect to consider is when an app is windowed(sharing the screen with another app). Again Microsoft provides some design check points.

|Split screen size (effective pixel resolution) |    Description |
| --------------------------------------------- | -------------- |
| 672x768 |	Screen split in half on a 1366x768 device |
| 500x768 |	Default minimum size for app; Screen split in half on a 1024x768 device |
| 320x768 |	Minimum size for apps that support 320 pixel minimum width |

For windowing a design decision should be made about what the minimum width for the app should be.  Windows Store Apps provide two possible values: `500px`, `320px`. The phone has the fixed minimum widths of `384px` in portrait and `640px` in landscape.

#### Ratios
To facilitate translation from design to implementation the layout of a page should be described in ratios(no pun intended) not fixed pixel sizes. Fo instance, a header might be `0.125` leaving `0.875` for the rest of the body. As you add sub sections to the page, a grid for example, the ratios should represent the values for the elements that make up that sub section. So in the case of the grid we might want a margin around the grid of top/bottom `0.1`, left/right `0.15` with the grid itself denoted as `0.7`x`0.8` following the standard practice of `width`x`height`.

####Considerations for specific control types
When laying out the page there are some things to remember about certain controls that provide a better experience for the user.

##### Grid
When designing grids, in particular complex variable size grids, think about how you would expect them to grow and shrink as the resolution changes.  For example, is there a minimum number of cells horizontally(for landscape) or vertically(for portrait) to consider for the design to still function.  If there is a complex pattern of cell sizes, 1x1, 2x1, 1x2, 2x2, etc. and if these are ordered in a specific fashion consider how the the pattern should continue as more screen real estate becomes available.

##### Input Controls
* To retain a usable input a minimum width should be chosen.  
* Consider how the layout of inputs should appear when the soft keyboard is on screen to ensure that none of the inputs are covered. It's possible to implement different layouts for when the keyboard is on/off screen so one can best make use of the visible screen under both conditions.

##### Flyouts(Popups)
When the screen is reduced to the minimum consider in what ways if any the size/content of the flyouts should change to accommodate the smaller size.

##### Text (Input or Display)
One specific issue to think about in terms of labels and input fields is whether or not the app requires localization.  The word might be short in English and look great, but may cause clipping or overlaps when displayed with another language.



## *For Developers*


