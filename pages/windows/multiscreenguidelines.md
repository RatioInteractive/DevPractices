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

The scaling platues used by the platform are:
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
## Multiple Resolutions
### Designing for multiscreen
While we need make designs that can smoothly scale across a spectrum of resolutions, Microfsoft has called out some key resolutions to set as check points in the design.

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


### Designing for multiple orientations

## *For Developers*


