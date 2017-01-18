//TODO
//Build logging that logs Current date Day Month Year Time TimeZone for (saved tasks, deleted tasks, clear task list)

//TODO 
//Build a generic logger module
//Can log any message concatenated to the date as described above
//use the logger module in the app module
//logger module will have a renderer dependency
//logger module will have a data dependency for storing logs locally
//log renderer will use the log template to append the listed entries to the html element
define(['jquery', 'hbs!templates/logTemplate'], function ($, logTemplate) {
    'use strict';

    function renderLogs(logs) {
        var elementArray = $.map(logs, _renderLog);

        $("#log-list")
            .empty()
            .append(elementArray);
    }

    function renderNew(message) {
        var $logList = $("#log-list");
        $logList.prepend(_renderLog({message: message, timeStamp: new Date()}));
    }

    function _renderLog(log) {
        var $log = $(logTemplate(log));
        return $log;
    }
    
    return {
        renderLogs: renderLogs,
        renderNew: renderNew
    };
});