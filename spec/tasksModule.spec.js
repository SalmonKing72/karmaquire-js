describe("The taskModule", function () {        
    
    describe("add function", function() {
        //use done param to hold test open until done is called.
        it("calls taskRenderer.renderNew", function (done) {
            //mock modules
            define("renderers/taskRenderer", [], function () {
                return {
                    renderNew: function () {}
                }
            });
            
            define("data/taskData", [], function () {
                return {};
            });
            //end mock modules
            
            require(["src/js/tasks", "renderers/taskRenderer"], function (tasks, taskRenderer) {
                spyOn(taskRenderer, 'renderNew');
                tasks.add();
                expect(taskRenderer.renderNew).toHaveBeenCalled();
                done();
            },
            function (error) {
                done.fail(error);
            });
        });        
    });
});