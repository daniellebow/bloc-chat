(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.Rooms = Room.all;
      this.messages=null;
      this.currentRoom=null;
      this.username = $cookies.get('blocChatCurrentUser');

      this.selectRoom=function(room){
        this.currentRoom=room;
        this.messages=Message.getByRoomId(room.$id);
      }
      this.sendMessage = function () {
          this.message.roomID = this.currentRoom.$id;
          this.message.username = this.username;
          this.message.sentAt = firebase.database.ServerValue.TIMESTAMP;
          Message.send(this.message);
      }
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$cookies', HomeCtrl]);
})();
