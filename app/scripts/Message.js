(function() {
  function Message($firebaseArray) {
    var Message = {};
    var ref = firebase.database().ref().child("messages");
    var messages = $firebaseArray(ref);

    Message.all=messages;

    Message.getByRoomId = function(roomID) {
        return $firebaseArray(ref.orderByChild('roomID').equalTo(roomID));
    };

    Message.send = function(message) {
       messages.$add(message);
   };

    return Message;
    };

  angular
    .module('blocChat')
    .factory('Message', ['$firebaseArray', Message]);
})();
