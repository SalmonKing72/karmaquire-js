define(['jquery', 'data/loggerData', 'renderers/logRenderer'], function ($, logData, logRenderer) {
    function add(message) {
        logRenderer.renderNew(message);
        _save();
    }

    function remove(clickEvent) {
        var logElement = clickEvent.target;
        $(logElement).closest(".log").remove();
    }

    function clear() {
        logData.clear();
        render();
    }
    
    //private
    function _save() {
        var logs = [];
        $("#log-list .log").each(function (index, log) {
            var $log = $(log);
            logs.push({
                message: $log.find(".message").text(),
                timeStamp: $log.find(".timestamp").text()
            });
        });

        logData.save(logs);
    }

    function cancel() {
        render();
    }

    function render() {
        logRenderer.renderLogs(logData.load());
    }
    
    return {
        add: add,
        remove: remove,
        clear: clear,
        cancel: cancel,
        render: render
    };
});