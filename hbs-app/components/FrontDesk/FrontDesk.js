import React from 'react';
import RoomCards from '../RoomCards/RoomCards';

const FrontDesk = () => {
  return (
    <div>
      <RoomCards 
        roomName="Deluxe Suite" 
        imageUrl="path-to-your-image.jpg" 
      />
      {/* ...other components... */}
    </div>
  );
};

export default FrontDesk;
