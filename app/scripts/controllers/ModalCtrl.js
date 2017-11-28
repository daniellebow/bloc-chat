(function() {
   function ModalCtrl ($uibModal, $log, $document) {
      var modal = this;
      modal.animationsEnabled=true;

        modal.open = function (size) {
          var modalInstance = $uibModal.open({
            animation: modal.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '../templates/modal.html',
            controller: 'ModalInstanceCtrl',
            controllerAs: 'modal',
            size: 'sm',
            resolve: {
               input: function () {
                  return modal.items;
               }
            }
         });
      };
   }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModal', 'Room', '$log', '$document', ModalCtrl]);
})();
