(function () {
   function ModalInstanceCtrl (Room, $uibModalInstance) {
      var modal = this;
      var RoomObject = Room;

         modal.ok = function () {
           RoomObject.add(this.newRoom.name);
           $uibModalInstance.close();
         };

         modal.cancel = function () {
           $uibModalInstance.close('cancel');
         };

   }

   angular
      .module('blocChat')
      .controller('ModalInstanceCtrl', ['Room', '$uibModalInstance', ModalInstanceCtrl]);
})();
