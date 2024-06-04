import React, { useState } from 'react';
import Sidebar from './Sidebar'; 
import UserProfile from './UserProfile'; 
import PurchaseHistory from './PurchaseHistory'; 
import SalesHistory from './SalesHistory'; 
import Like from './Like'; 
import Address from './Address'; 
import MyPageMain from './MyPageMain';



const MyPage = () => {
  const [username, setUsername] = useState('OOO'); 
  const [selectedMenu, setSelectedMenu] = useState('MyPageMain');

  const renderContent = () => {
    switch (selectedMenu) {
      case 'UserProfile':
        return <UserProfile />;
      case 'PurchaseHistory':
        return <PurchaseHistory />;
      case 'SalesHistory':
        return <SalesHistory />;
      case 'Like':
        return <Like />;
      case 'Address':
        return <Address />;
        
    
      case 'MyPageMain': 
        return <MyPageMain username={username} />; 
      default:
        return <MyPageMain username={username} />; 
    }
  };

  return (
    <div className="app">
      <Sidebar setSelectedMenu={setSelectedMenu} />
      <div className="content">
        {renderContent()}
      </div>
    </div>
  );
}

export default MyPage;
