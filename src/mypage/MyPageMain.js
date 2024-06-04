import React, { useState }  from 'react';
import PurchaseHistory from './PurchaseHistory';
import SalesHistory from './SalesHistory';
import './MyPageMain.css';
import UserProfile from './UserProfile';



const MyPageMain = ({ username }) => {
    const [selectedContent, setSelectedContent] = useState('userprofile');
  
    const handlePurchaseHistoryClick = () => {
      setSelectedContent('purchase');
    };
  
    const handleSalesHistoryClick = () => {
      setSelectedContent('sales');
    };
  
    return (
      <div className="mypageMain">
        <h2>안녕하세요, {username}님</h2>
        <div className="buttonContainer">
          <button onClick={handlePurchaseHistoryClick}>구매내역</button>
          <button onClick={handleSalesHistoryClick}>판매내역</button>
        </div>

        {selectedContent === 'userprofile' && (
        <div className="info-section">
          <UserProfile />
        </div>
      )}
        {selectedContent === 'purchase' && (
        <div className="history-section">
          <PurchaseHistory />
        </div>
      )}
      {selectedContent === 'sales' && (
        <div className="history-section">
          <SalesHistory />
        </div>
      )}
    </div>
  );
};
  
  export default MyPageMain;
