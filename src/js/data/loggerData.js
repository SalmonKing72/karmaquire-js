define([], function () {
    'use strict';

    var STORE_NAME = "logger";

    function saveLogData(logs) {
        localStorage.setItem(STORE_NAME, JSON.stringify(logs));
    }

    function loadLogData() {
        var storedLogs = localStorage.getItem(STORE_NAME);
        if (storedLogs) {
            return JSON.parse(storedLogs);
        }
        return [];
    }

    function clearLogData() {
        localStorage.removeItem(STORE_NAME);
    }
    
    return {
        save: saveLogData,
        load: loadLogData,
        clear: clearLogData
    };
});