//using the simplified commonJS wrapper syntax
define('app', function (require, exports, module) {
    var $ = require('jquery');
    var tasks = require('tasks');
    var logger = require('logger');
    
    //private members prefixed with underscore.
    function _addTask() {
        tasks.add();
        logger.add('new task added');
    }
    
    function _deleteAllTasks() {
        tasks.clear();
        logger.add('all tasks cleared');
    }
    
    function _saveChanges() {
        tasks.save();
        logger.add('new task saved');
    }
    
    function _cancelChanges() {
        tasks.cancel();
    }
    
    function _deleteTask(clickEvent) {
        tasks.remove(clickEvent);
        logger.add('task removed');
    }
    
    //public members do not have underscore prefix
    function registerEventHandlers() {
        $("#new-task-button").on("click", _addTask);
        $("#delete-all-button").on("click", _deleteAllTasks);
        $("#save-button").on("click", _saveChanges);
        $("#cancel-button").on("click", _cancelChanges);
        $("#task-list").on("click", ".delete-button", _deleteTask);
    }
    
    //assign public members to exports to be returned.
    exports.init = function () {
        registerEventHandlers();
        logger.clear();
        tasks.render();
    }
});