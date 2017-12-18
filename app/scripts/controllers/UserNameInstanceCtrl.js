
(function () {
   function UserNameInstanceCtrl ($uibModalInstance, $cookies) {

       this.ok = function (userName) {
        if (!userName || userName==" "){
        alert("You must enter a username");
      }else{
        $cookies.put('blocChatCurrentUser', userName);
        $uibModalInstance.close();
      }
    };
  }

   angular
      .module('blocChat')
      .controller('UserNameInstanceCtrl', ['$uibModalInstance','$cookies', UserNameInstanceCtrl]);
})();
