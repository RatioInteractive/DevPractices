Ratio WinJS Best Practice (Draft)
=================================

WinJS
-----

### Using Promise
* The simple example showing how to use Promise
* http://code.msdn.microsoft.com/windowsapps/Promise-e1571015

### ~~Is .then await?~~
* Explain the similarity and difference between Promise then and C# await.
* Show C# and JS code for comparison.
* Maybe create a slide or Gist?

### Promise Chaining vs promise join
* When we should use promise join, when we should use promise chaining.
* http://code.msdn.microsoft.com/windowsapps/Promise-e1571015

### ~~ListView example~~
* Using external data such as Bing.
* Using multi-stage rendering for better perf.
* Incremental loading / Pagination.


JavaScript
----------

### Reduce the number of layout passes / updates
* Eliminating the unnecessary layout pass/update will improve the performance of the app.
* Think about the layout pass when you are dealing with DOMs in the loop.
* Layout pass is a complex procedure to apply the CSS style and other layout calculation to render the element. Even though it doesn't take long for one layout pass, it can be easily increased when it's been used in the loop.
* Accessing the height or width of an element is one of the calls that trigger a layout pass.
* Look at the Ratio WinJS best practice app for more detail.
```JavaScript
    function funcInefficient() {
        var total = getCount();
        for (var i = 0; i < total; i++) {
            var container = document.getElementById('testContainer');
            var childDiv = document.createElement('div');
            childDiv.className = "box";
            childDiv.innerHTML = i.toString();
            container.appendChild(childDiv);
            childDiv.style.backgroundColor = getRandomColor();
            container.style.height = (container.clientHeight + 200) + 'px';
        }
    }

    function funcBetter() {
        var total = getCount();
        var container = document.getElementById('testContainer');
        var expectedHeight = container.clientHeight;
        var docFragment = document.createDocumentFragment();
        for (var i = 0; i < total; i++) {
            var childDiv = document.createElement('div');
            childDiv.innerHTML = i.toString();
            childDiv.className = "box";
            childDiv.style.backgroundColor = getRandomColor();
            docFragment.appendChild(childDiv);
            expectedHeight += 200;
        }
        container.style.height = expectedHeight + 'px';
        container.appendChild(docFragment);
    }
```

CSS
---

### Use CSS nesting to avoid CSS conflict
* Common symptom is the unexpected style change when navigating in and out.
* Once the CSS style is loaded, it is not unloaded even when you navigate into the new page. If there's a style defined again using the same class name or same css selector, it'll override the current style. To Avoid the unwanted style change, use css nesting which can differentiate the style.
```CSS
	.CSSConflict .page-section .inner-section .css-conflict-div-1 {
		/* defined with .CSSConflict class which can be used as the unique identifier */
	}
	
	.inner-section .css-conflict-div-2 {
		/* this can be overridden easily*/
	}

```
* Look at the Ratio WinJS best practice app

### Media Query - Put the media query section at the end of file. (if you want to define some style to override).
* Define the media query at the end of CSS file. If not, the media query style will be over-written by the original style.
* We usually define media query with some style we want to override. Because it's overriding the original style, it should be defined after the original style is defined.
* Look at the Ratio WinJS best practice app


### ~~Organizing CSS Styles~~
* For better readability.
* Add comments in CSS too.
* Pre-compiling CSS

HTML
----
### Use the static markup and defer loading non-vital (for initializing the app) JS file
* Get the benefit of bytecode caching by using the static markup.
* Use defer loading the script that doesn’t need to be loaded at the launch. 
* Be careful if your app can be launched with any page, such as launching the app from the toast, or launching the app with the previously viewed page.

```HTML
<script type="text/javascript" src='myjs.js' defer='defer'></script>

```

### ~~Use CSS for layout not html tag such as table~~
* Why?
* Separate content from presentation

