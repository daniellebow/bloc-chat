(function() {
    function HomeCtrl(Room, Message, $cookies) {
      this.Rooms = Room.all;
      this.messages=null;
      this.userName = $cookies.get('blocChatCurrentUser');

      this.selectRoom=function(room){
        this.currentRoom=room;
        this.messages=Message.getByRoomId(room.$id);
      }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', 'Message','$cookies', HomeCtrl]);
})();
