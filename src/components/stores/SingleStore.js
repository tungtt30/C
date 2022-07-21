// import './base.css'

const SingleStore = ({ store: { _id, item, description, cost, user: { username } } }) => {
    let lowCost = 0

    return (
        <div className="grid__column-2-4">

            <div className="home-product-item">
                <div className="home-product-item__img">

                </div>
                <h4 className="home-product-item__name">{item}</h4>
                <div className="home-product-item__price">
                    <span className="home-product-item__price-current">{cost} $</span>
                </div>
                <div className="home-product-item__des">
                    <span>{description}</span>
                </div>
                <div className="home-product-item__action">

                    <span className="home-product-item__like home-product-item__like--liked">
                        <i className="home-product-item_like-icon-empty far fa-heart"></i>
                        <i className="home-product-item_like-icon-fill fas fa-heart"></i>
                    </span>
                    <div className="home-product-user">
                        <span>Người đăng: {username}</span>
                    </div>
                    <div className="home-product-item__rating">
                        <i className="home-product-item__star--gold far fa-star"></i>
                        <i className="home-product-item__star--gold far fa-star"></i>
                        <i className="home-product-item__star--gold far fa-star"></i>
                        <i className="home-product-item__star--gold far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                    <span className="home-product-item__sold">88 đã bán</span>
                </div>
                <div className="home-product-item__favourite">
                    <i className="fas fa-check"></i>
                    Yêu thích
                </div>

            </div>
        </div>
    )
}

export default SingleStore

