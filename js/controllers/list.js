(function(){

	angular
		.module("turtleFacts")
		.controller("listCtrl", ListController);

        ListController.$inject = ['quizMetrics', 'DataService']

		function ListController(quizMetrics, DataService){
			var vm = this;

            vm.quizMetrics = quizMetrics;
			vm.data = DataService.turtlesData;
			vm.activeTurtle = {}; // will be used in the view to hold the data of currently active turtle
			vm.changeActiveTurtle = changeActiveTurtle;
            vm.search = "";
            vm.quizActive = false;
            vm.activateQuiz = activateQuiz;

			function changeActiveTurtle(index){
				vm.activeTurtle = index;
			}

            function activateQuiz(){
                quizMetrics.changeState("quiz", true);
            }

		}
 

})();