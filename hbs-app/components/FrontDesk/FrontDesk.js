import React from 'react';
import RoomCards from '../RoomCards/RoomCards';
import Layout from '../Layout/Layout';

const FrontDesk = () => {
  return (
    <Layout>
    <div>
      <RoomCards 
        roomName="Deluxe Suite" 
        imageUrl="https://i.pinimg.com/564x/40/ba/1e/40ba1ed8aefdbb1251409bdb8a6b5e22.jpg" 
      />
      {/* ...other components... */}
    </div>
    </Layout>
  );
};

export default FrontDesk;
