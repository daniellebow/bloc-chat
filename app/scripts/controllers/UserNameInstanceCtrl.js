
(function () {
   function UserNameInstanceCtrl ($uibModalInstance, $cookies) {
       this.ok = function (userName) {
        if (!this.userName || this.userName==" "){
        alert("You must enter a username");
      }else{
        $cookies.put('blocChatCurrentUser', this.userName);
        $uibModalInstance.close();
      }
    };
  }

   angular
      .module('blocChat')
      .controller('UserNameInstanceCtrl', ['$uibModalInstance','$cookies', UserNameInstanceCtrl]);
})();
