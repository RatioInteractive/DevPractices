// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/JavaScript/ReduceLayoutPass/reduceLayoutPass.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var item = Data.resolveItemReference(options.item);
            element.querySelector(".titlearea .pagetitle").textContent = item.title;
            layoutPassApproachA.onclick = this.addDomUsingApproachA;
            layoutPassApproachB.onclick = this.addDomUsingApproachB;
            layoutPassReset.onclick = this.resetDom;
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },

        addDomUsingApproachA: function () {
            markStart();
            funcInefficient();
            markEnd();
        },

        addDomUsingApproachB: function () {
            markStart();
            funcBetter();
            markEnd();
        },
        resetDom: function () {
            testContainer.innerHTML = "";
            testContainer.style.height = '400px';
        }
    });

    var timeStarted = null;
    function markStart() {
        timeStarted = new Date();
    }

    function markEnd() {
        var timeEnded = new Date();
        measuredTime.innerHTML = 'total time elapsed: ' + (timeEnded - timeStarted) + " ms";
    }

    function getCount() {
        return Number(totalNumber.value);
    }

    function getRandomColor() {
        var randomR = Math.floor((Math.random() * 255));
        var randomG = Math.floor((Math.random() * 255)); 
        var randomB = Math.floor((Math.random() * 255));

        return "rgb(" + randomR + "," + randomG + "," + randomB + ")";
    }

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
})();
