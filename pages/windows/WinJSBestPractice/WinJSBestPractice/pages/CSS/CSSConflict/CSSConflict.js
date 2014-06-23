// For an introduction to the Page Control template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232511
(function () {
    "use strict";

    WinJS.UI.Pages.define("/pages/CSS/CSSConflict/CSSConflict.html", {
        // This function is called whenever a user navigates to this page. It
        // populates the page elements with the app's data.
        ready: function (element, options) {
            // TODO: Initialize the page here.
            var item = Data.resolveItemReference(options.item);
            element.querySelector(".titlearea .pagetitle").textContent = item.title;
            moveToProblematicPage.onclick = this.onMoveToButtonClick;
        },

        unload: function () {
            // TODO: Respond to navigations away from this page.
        },

        updateLayout: function (element) {
            /// <param name="element" domElement="true" />

            // TODO: Respond to changes in layout.
        },

        onMoveToButtonClick : function (evt) {
            WinJS.Navigation.navigate("/pages/CSS/CSSConflict/problematicPage.html", {  });
        }

    });
})();
