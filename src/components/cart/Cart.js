import React from 'react'

const Cart = () => {



    return (
        <div className="header__cart">
            <div className="header__cart-wrap">
                <i className="fas fa-shopping-cart header__cart-icon"></i>
                <span className="header__cart-notice">3</span>

                <div className="header__cart-list">
                    <img src="./assets/img/empty-cart.png" alt="" className="header__cart-no-cart-img" />
                    <p className="header__cart-list-no-cart-msg">Chưa có sản phẩm</p>

                    <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
                    <ul className="header__cart-list-item">
                        <li className="header__cart-item">
                            <img src="./assets/img/notify.jpg" alt="" className="header__cart-img" />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-head">
                                    <h5 className="header__cart-item-name">Bộ kem đặc trị mắt</h5>
                                    <div className="header__cart-cart-item-price-wrap">
                                        <span className="header__cart-item-price">2.000.000 Mora</span>
                                        <span className="header__cart-item-multiply">x</span>
                                        <span className="header__cart-item-qnt">2</span>
                                    </div>
                                </div>
                                <div className="header__cart-item-body">
                                    <span className="header__cart-item-description">
                                        Phân loại: Bạc
                                    </span>
                                    <span className="header__cart-item-remove">Xoá</span>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">

                            <img src="./assets/img/notify2.jpg" alt="" className="header__cart-img" />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-head">
                                    <h5 className="header__cart-item-name">Bộ hòm premium</h5>
                                    <div className="header__cart-cart-item-price-wrap">
                                        <span className="header__cart-item-price">3.690.000 Mora</span>
                                        <span className="header__cart-item-multiply">x</span>
                                        <span className="header__cart-item-qnt">10</span>
                                    </div>
                                </div>
                                <div className="header__cart-item-body">
                                    <span className="header__cart-item-description">
                                        Phân loại: Cao cấp
                                    </span>
                                    <span className="header__cart-item-remove">Xoá</span>
                                </div>
                            </div>
                        </li>
                        <li className="header__cart-item">
                            <img src="./assets/img/notify5.jpg" alt="" className="header__cart-img" />
                            <div className="header__cart-item-info">
                                <div className="header__cart-item-head">
                                    <h5 className="header__cart-item-name">Bộ pháo hoa banh nóc</h5>
                                    <div className="header__cart-cart-item-price-wrap">
                                        <span className="header__cart-item-price">25.000.000 Mora</span>
                                        <span className="header__cart-item-multiply">x</span>
                                        <span className="header__cart-item-qnt">400</span>
                                    </div>
                                </div>
                                <div className="header__cart-item-body">
                                    <span className="header__cart-item-description">
                                        Phân loại: Nguyên tử
                                    </span>
                                    <span className="header__cart-item-remove">Xoá</span>
                                </div>
                            </div>
                        </li>
                    </ul>

                    <button className="header__cart-view-cart btn btn--primary">Xem giỏ hàng</button>
                </div>
            </div>
        </div>
    )
}

export default Cart