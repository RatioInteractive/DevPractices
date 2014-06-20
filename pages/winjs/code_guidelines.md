This is a draft version of WinJS Best Practice
==============================================

WinJS
-----

### Using Promise
* The simple example showing how to use Promise
* http://code.msdn.microsoft.com/windowsapps/Promise-e1571015

### Is .then await?
* Explain the similarity and difference between Promise then and C# await.
* Show C# and JS code for comparison.
* Maybe create a slide or Gist?

### Promise Chaining vs promise join
* When we should use promise join, when we should use promise chaining.
* http://code.msdn.microsoft.com/windowsapps/Promise-e1571015

### ListView example
* Using external data such as Bing.
* Using multi-stage rendering for better perf.
* Incremental loading / Pagination.

CSS
---

### CSS for single page app - unexpected style change when navigating in and out.
* Use CSS nesting

### Media Query - Put the media query section at the end of file. (if you want to define some style to override).
* If not, the media query style will be over-written by the original style.

### Organizing CSS Styles
* For better readability.
* Add comments in CSS too.
* Pre-compiling CSS

HTML
----

### Use CSS for layout not html tag such as table
* Why?
* Separate content from presentation

