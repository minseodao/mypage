import React from 'react';

const Sidebar = ({ setSelectedMenu }) => {
    return (
        <div className="sidebar">
            <h2 className="sidebarTitle">MYPAGE</h2>
            <hr className="sidebarDivider" /> 
            <h3 className='sidebarTitle2'>내정보</h3>
            <ul className="sidebarMenu">
                <li className="sidebarItem" onClick={() => setSelectedMenu('UserProfile')}>회원정보</li>
                <li className="sidebarItem" onClick={() => setSelectedMenu('Address')}>배송지관리</li>
                <li className="sidebarItem" onClick={() => setSelectedMenu('Like')}>찜</li>
                
                
            </ul>
            <hr className="sidebarDivider" /> 
            <h3 className='sidebarTitle2'>주문정보</h3>
            <ul className="sidebarMenu">
                <li className="sidebarItem" onClick={() => setSelectedMenu('PurchaseHistory')}>구매내역</li>
                <li className="sidebarItem" onClick={() => setSelectedMenu('SalesHistory')}>판매내역</li>
                
            </ul>
            
    

        </div>
    );
}

export default Sidebar;
