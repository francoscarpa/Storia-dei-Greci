document.addEventListener('DOMContentLoaded', function () {
    var timelineContainer = document.getElementById('timeline');
    var resetButton = document.getElementById('ResetTimelineButton');

    resetButton.addEventListener('click', function () {
        timeline.fit({
            animation: {
                duration: 1000,
                easingFunction: 'easeInOutQuad'
            }
        });
    });

    var timelineOptions = {
        min: '-005000',
        max: '2030-12-31',
        editable: false,
        zoomMin: 1577847600000,
        zoomMax: 315360000000000,
        tooltip: {
            followMouse: true,
            overflowMethod: "cap",
        }
    };

    var timeline = new vis.Timeline(timelineContainer, items, timelineOptions);

    timeline.on('select', function (properties) {
        if (properties.items.length > 0) {
            var item = items.get(properties.items[0]);

            if (!item) return;

            // Determine the window to set
            var buffer = 1000 * 60 * 60 * 24; // 1 day buffer, adjust as needed

            if (item.end) {
                // Range item
                var start = new Date(item.start).getTime();
                var end = new Date(item.end).getTime();
                var duration = end - start;
                timeline.setWindow(
                    new Date(start - duration * 0.2), // 20% buffer before
                    new Date(end + duration * 0.2),   // 20% buffer after
                    { animation: { duration: 1000, easingFunction: 'easeInOutQuad' } }
                );
            } else {
                // Point item
                var start = new Date(item.start).getTime();
                timeline.setWindow(
                    new Date(start - buffer),
                    new Date(start + buffer),
                    { animation: { duration: 1000, easingFunction: 'easeInOutQuad' } }
                );
            }
        }
    });

    var charactersContainer = document.getElementById('characters');

    var options = {
        layout: {
            hierarchical: {
                enabled: true,
                direction: "UD",
                sortMethod: "directed",
                nodeSpacing: 200,
                treeSpacing: 250,
                levelSeparation: 150
            }
        },
        physics: {
            enabled: false
        },
        interaction: {
            dragNodes: false
        },
        nodes: {
            shape: "box"
        }
    };

    var network;

    window.SelectGreekMythologyNode = function (Id) {
        data = { nodes: greekMythologyNodes, edges: greekMythologyEdges };
        network = new vis.Network(charactersContainer, data, options);
        Focus(network, Id);
    };

    window.Test = function (Id) {
        data = { nodes: ricercatoriNodes, edges: ricercatoriEdges };
        network = new vis.Network(charactersContainer, data, options);
        network.focus(Id);
    };

    function Focus(Network, Id) {
        try {
            var options = {
                scale: 1,
                animation: {
                    duration: 1000,
                    easingFunction: "easeInOutQuad"
                }
            }

            Network.focus(Id, options);
        } catch (error) {
            console.error(error);
        }
    }
});