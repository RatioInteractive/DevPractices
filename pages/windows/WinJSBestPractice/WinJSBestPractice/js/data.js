(function () {
    "use strict";

    var list = new WinJS.Binding.List();
    var groupedItems = list.createGrouped(
        function groupKeySelector(item) { return item.group.key; },
        function groupDataSelector(item) { return item.group; }
    );

    // TODO: Replace the data with your real data.
    // You can add data from asynchronous sources whenever it becomes available.
    bestPracticeData().forEach(function (item) {
        //if (item.approved) {
            list.push(item);
       // }
    });

    WinJS.Namespace.define("Data", {
        items: groupedItems,
        groups: groupedItems.groups,
        getItemReference: getItemReference,
        getItemsFromGroup: getItemsFromGroup,
        resolveGroupReference: resolveGroupReference,
        resolveItemReference: resolveItemReference
    });

    // Get a reference for an item, using the group key and item title as a
    // unique reference to the item that can be easily serialized.
    function getItemReference(item) {
        return [item.group.key, item.title];
    }

    // This function returns a WinJS.Binding.List containing only the items
    // that belong to the provided group.
    function getItemsFromGroup(group) {
        return list.createFiltered(function (item) { return item.group.key === group.key; });
    }

    // Get the unique group corresponding to the provided group key.
    function resolveGroupReference(key) {
        return groupedItems.groups.getItemFromKey(key).data;
    }

    // Get a unique item from the provided string array, which should contain a
    // group key and an item title.
    function resolveItemReference(reference) {
        for (var i = 0; i < groupedItems.length; i++) {
            var item = groupedItems.getAt(i);
            if (item.group.key === reference[0] && item.title === reference[1]) {
                return item;
            }
        }
    }

    function bestPracticeData() {
        var groups = {
            WinJS: {
                key: "WinJS",
                title: "WinJS",
                subtitle: "Best practice for WinJS"
            },
            JavaScript: {
                key: "JavaScript",
                title:
                    "JavaScript",
                subtitle:
                    "Best practice for JavaScript in general"
            },
            CSS: {
                key: "CSS",
                title:
                    "CSS",
                subtitle:
                    "Best practice for CSS"
            },
            HTML: {
                key: "HTML",
                title:
                    "HTML",
                subtitle:
                    "Best practice for HTML"
            }
        };

        var bestPratices = [
            {
                group: groups["WinJS"],
                title: "Is .then await?",
                description: "Explain the similarity and difference between Promise then and C# await",
                page: "",
                approved: false
            },
            {
                group: groups["WinJS"],
                title: "Promise Chaining vs promise join",
                description: "When we should use promise join, when we should use promise chaining.",
                page: "",
                approved: false
            },
            {
                group: groups["JavaScript"],
                title: "Reduce the number of layout passes",
                description: "It will improve the app responsiveness dramatically",
                page: "",
                approved: false
            },
            {
                group: groups["CSS"],
                title: "Unexpected style change",
                description: "Do you see some style change after you navigated to a certain page and come back?",
                page: "/pages/CSS/CSSConflict/CSSConflict.html",
                approved: false
            },
            {
                group: groups["CSS"],
                title: "Media Query Broken?",
                description: "Why the style in the media query is not applied?",
                page: "",
                approved: false
            }

        ];
        return bestPratices;
    }

 })();
