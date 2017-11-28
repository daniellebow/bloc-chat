(function() {
   function ModalCtrl ($uibModal, Room, $log, $document) {
      var modal = this;
      modal.animationsEnabled=true;

        modal.open = function ($uibModal, size, parentSelector) {
          var parentElem = parentSelector ?
            angular.element($document[0].querySelector('model-demo' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: modal.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../templates/modal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: 'sm',
            appendTo: parentElem,
            resolve: {
               input: function () {
                  return modal.items;
               }
            }
         });
         modalInstance.result.then(function (name) {
            Room.add(name);
         }, function () {
            $log.info('Modal dismissed at: ' + new Date());
         });
      };
   }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', '$log', '$document', ModalCtrl]);
})();
