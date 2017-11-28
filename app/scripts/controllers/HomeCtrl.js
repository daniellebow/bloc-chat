(function() {
    function HomeCtrl($uibModal, Room) {
      this.Rooms = Room.all;

      this.addRoom=function(){
        $uibModal.open({
          templateUrl:'/templates/modal.html',
          size: 'sm',
          controller: 'ModalCtrl as modal'
        })
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal','Room', HomeCtrl]);
})();
