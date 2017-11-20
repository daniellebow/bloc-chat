(function() {
    function ModalCtrl(Room, $uibModalInstance) {
       this.cancel = function() {
        $uibModalInstance.close();
      };

       this.submit = function() {
        Room.add(this.newRoom.name);
        $uibModalInstance.close();
      };

    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['Room', '$uibModalInstance', ModalCtrl]);
})();
