(function () {
    'use strict';

    angular
        .module('elogbooks.job')
        .controller('JobUpdateController', ['jobResponse', JobUpdateController]);

    function JobUpdateController(jobResponse) {
        var vm = this;
        vm.job = jobResponse;

        vm.job.status = {};
        vm.job.status.options = [{
            id: "0",
            name: "Open"
        }, {
            id: "1",
            name: "In Progress"
        }, {
            id: "2",
            name: "Closed"
        }];

        vm.update = update;

        function update() {
            $http.put(
                'http://localhost:8001/job',
                vm.job
            ).then(function (response) {
                $state.go('jobs.view', {id:response.data.id});
            }, function () {
                console.log('Request Failed');
            });
        }
    }
})();
