import React, { useState } from 'react';
import './Like.css'; 

const Like = () => {
    // 임시 데이터
    const [likedProducts, setLikedProducts] = useState([
        { id: 1, name: '상품 1', price: '30,000', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: '상품 2', price: '40,000', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: '상품 3', price: '50,000', imageUrl: 'https://via.placeholder.com/150' },
        { id: 4, name: '상품 4', price: '60,000', imageUrl: 'https://via.placeholder.com/150' },
    ]);

    // 삭제 함수
    const handleDeleteProduct = (productId) => {
        const updatedLikedProducts = likedProducts.filter(product => product.id !== productId);
        setLikedProducts(updatedLikedProducts);
    };

    return (
        <div className="Like">
            <h2>찜</h2>
            <table>
                <thead>
                    <tr>
                        <th>상품</th>
                        <th>가격</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {likedProducts.map(product => (
                        <tr key={Like.id}>
                            <td>
                                <div className="Like-info">
                                    <img src={Like.imageUrl} alt={Like.name} className="Like-image" />
                                    <span className="Like-name">{Like.name}</span>
                                </div>
                            </td>
                            <td>{Like.price}</td>
                            <td>
                                <button onClick={() => handleDeleteProduct(product.id)}>삭제</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Like;
