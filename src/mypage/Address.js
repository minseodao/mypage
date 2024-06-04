import React, { useState, useRef } from 'react';
import './Address.css';

const Address = () => {
  const [addresses, setAddresses] = useState([
    { id: 1, name: '박민서', address: '경기 고양시 덕양구 동헌로 305', DetailAddress: 101, phone: '010-1234-5678' },
    { id: 2, name: '가나다', address: '서울 송파구 올림픽로 240 (롯데월드)', phone: '010-9876-5432' },
  ]);
  const [newAddress, setNewAddress] = useState({ name: '', address: '', DetailAddress: '', phone: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const nameInputRef = useRef(null);
  const addressInputRef = useRef(null);
  const detailAddressInputRef = useRef(null);
  const phoneInputRef = useRef(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAddress({ ...newAddress, [name]: value });
  };

  const handleAddAddress = () => {
    if (isEditing) {
      setAddresses(addresses.map(addr => addr.id === currentId ? newAddress : addr));
      setIsEditing(false);
      setCurrentId(null);
    } else {
      setAddresses([...addresses, { ...newAddress, id: Date.now() }]);
    }
    setNewAddress({ name: '', address: '', DetailAddress: '', phone: '' });
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  const handleEditAddress = (id) => {
    const addressToEdit = addresses.find(addr => addr.id === id);
    setNewAddress(addressToEdit);
    setIsEditing(true);
    setCurrentId(id);
    if (nameInputRef.current) {
      nameInputRef.current.focus();
    }
  };

  const handleDeleteAddress = (id) => {
    setAddresses(addresses.filter(addr => addr.id !== id));
  };

  const handleAddressFocus = () => {
    new window.daum.Postcode({
      oncomplete: (data) => {
        setNewAddress({ ...newAddress, address: data.address });
        if (detailAddressInputRef.current) {
          detailAddressInputRef.current.focus();
        }
      }
    }).open();
  };

  const handleDetailAddressEnter = (e) => {
    if (e.key === 'Enter' && phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  };

  const handleAddressEnter = (e) => {
    if (e.key === 'Enter' && detailAddressInputRef.current) {
      detailAddressInputRef.current.focus();
    }
  };

  const handleDetailAddressFocus = () => {
    if (detailAddressInputRef.current) {
      detailAddressInputRef.current.select();
    }
  };

  const handlePhoneEnter = (e) => {
    if (e.key === 'Enter') {
      handleAddAddress();
    }
  };

  return (
    <div className="addressContainer">
      <h2>배송지 관리</h2>
      <div className="addressForm">
        <input
          type="text"
          name="name"
          placeholder="이름"
          value={newAddress.name}
          onChange={handleInputChange}
          onKeyPress={handleAddressEnter}
          ref={nameInputRef}
        />
        <input
          type="text"
          name="address"
          placeholder="주소"
          value={newAddress.address}
          onChange={handleInputChange}
          onFocus={handleAddressFocus}
          ref={addressInputRef}
          onKeyPress={handleDetailAddressEnter}
        />
        <input
          type="text"
          name="DetailAddress"
          placeholder="상세주소"
          value={newAddress.DetailAddress}
          onChange={handleInputChange}
          ref={detailAddressInputRef}
          onFocus={handleDetailAddressFocus}
          onKeyPress={handlePhoneEnter}
        />
        <input
          type="text"
          name="phone"
          placeholder="전화번호"
          value={newAddress.phone}
          onChange={handleInputChange}
          ref={phoneInputRef}
          onKeyPress={handlePhoneEnter}
        />
        <button onClick={handleAddAddress}>
          {isEditing ? '수정하기' : '추가하기'}
        </button>
      </div>
      <div className="addressList">
        {addresses.map(addr => (
          <div key={addr.id} className="addressItem">
            <p><strong>이름:</strong> {addr.name}</p>
            <p><strong>주소:</strong> {addr.address} {addr.DetailAddress}</p>
            <p><strong>전화번호:</strong> {addr.phone}</p>
            <button onClick={() => handleEditAddress(addr.id)}>수정</button>
            <button onClick={() => handleDeleteAddress(addr.id)}>삭제</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Address;
