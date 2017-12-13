
(function () {
   function UserNameInstanceCtrl ($uibModalInstance) {

         this.ok = function (userName) {
           $uibModalInstance.close(this.userName);
         };
   }
   angular
      .module('blocChat')
      .controller('UserNameInstanceCtrl', ['$uibModalInstance', UserNameInstanceCtrl]);
})();
