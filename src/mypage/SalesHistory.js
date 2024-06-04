import React, { Component } from 'react';
import './SalesHistory.css'; 

class SalesHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            salesHistory: [], // 판매내역 데이터 배열
        };
    }

    componentDidMount() {
        // 임시 데이터 
        const sampleSalesData = [
            { id: 1, name: '휴대폰', price: '50,000', date: '2024.06.01', imageUrl: 'https://via.placeholder.com/150' },
            { id: 2, name: '아이패드', price: '60,000', date: '2024.06.02', imageUrl: 'https://via.placeholder.com/150' },
            { id: 3, name: '노트북', price: '70,000', date: '2024.06.03', imageUrl: 'https://via.placeholder.com/150' },
            { id: 4, name: '티셔츠', price: '80,000', date: '2024.06.04', imageUrl: 'https://via.placeholder.com/150' },
        ];

        this.setState({ salesHistory: sampleSalesData });
    }

    render() {
        return (
            <div className="sales">
                <h2>판매내역</h2>
                <table>
                    <thead>
                        <tr>
                            <th>판매날짜</th>
                            <th>상품</th>
                            <th>가격</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.salesHistory.map(product => (
                            <tr key={product.id}>
                                <td>{product.date}</td>
                                <td>
                                    <div className="salesProductInfo">
                                        <img src={product.imageUrl} alt={product.name} className="salesProductImage" />
                                        <span className="salesProductName">{product.name}</span>
                                    </div>
                                </td>
                                <td>{product.price}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default SalesHistory;
