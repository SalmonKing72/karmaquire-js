describe("The loggerDataModule", function () {
    'use strict';
    var testlogs;
    
    beforeEach(function () {
        testlogs = [{message: "testing data", timestamp: ""}];
    })
    
    describe("save data function", function () {
        it("adds and stores log entry", function testAddData(done) {
            require(["src/js/data/loggerData"], function (loggerData) {
                loggerData.save(testlogs);
                var storedLogs = loggerData.load();
                expect(storedLogs.length).toEqual(1);
                done();
            },
            function (error) {
                done.fail(error);
            });
        });
    });
        
    describe("remove function", function () {
        it("clears the log entries", function testClearData(done) {
            require(["src/js/data/loggerData"], function (loggerData) {
                loggerData.clear();
                var storedLogs = loggerData.load();
                expect(storedLogs.length).toEqual(0);
                done();
            },
            function (error) {
                done.fail(error);
            });
        });
    });
});