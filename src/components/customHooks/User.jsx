import { useState, useEffect } from 'react';

function UseFriendStatus(friendID) {
  //const [isOnline, setIsOnline] = useState(false);

  //useEffect(() => {
    alert(friendID)
/*    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };*/
  //});

  return friendID;
}

export {UseFriendStatus}