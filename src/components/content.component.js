
const Content = () => {
    return (
        <div className="col-lg-9 my-lg-0 my-1">
                <div id="main-content" className="bg-white border">
                    <div className="d-flex flex-column">
                        <div className="h5">Hello Jhon,</div>
                        <div>Logged in as: someone@gmail.com</div>
                    </div>
                    <div className="d-flex my-4 flex-wrap">
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/box-png/cardboard-box-brown-vector-graphic-pixabay-2.png"
                                alt="" />
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag">Orders placed</div>
                                <div className="ms-auto number">10</div>
                            </div>
                        </div>
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"
                                alt="" />
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag">Items in Cart</div>
                                <div className="ms-auto number">10</div>
                            </div>
                        </div>
                        <div className="box me-4 my-1 bg-light">
                            <img src="https://www.freepnglogos.com/uploads/love-png/love-png-heart-symbol-wikipedia-11.png"
                                alt="" />
                            <div className="d-flex align-items-center mt-2">
                                <div className="tag">Wishlist</div>
                                <div className="ms-auto number">10</div>
                            </div>
                        </div>
                    </div>
                    <div className="text-uppercase">My recent orders</div>
                    <div className="order my-3 bg-light">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="d-flex flex-column justify-content-between order-summary">
                                    <div className="d-flex align-items-center">
                                        <div className="text-uppercase">Order #fur10001</div>
                                        <div className="blue-label ms-auto text-uppercase">paid</div>
                                    </div>
                                    <div className="fs-8">Products #03</div>
                                    <div className="fs-8">22 August, 2020 | 12:05 PM</div>
                                    <div className="rating d-flex align-items-center pt-1">
                                        <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                            alt="" /><span className="px-2">Rating:</span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="far fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                                    <div className="status">Status : Delivered</div>
                                    <div className="btn btn-primary text-uppercase">order info</div>
                                </div>
                                <div className="progressbar-track">
                                    <ul className="progressbar">
                                        <li id="step-1" className="text-muted green">
                                            <span className="fas fa-gift"></span>
                                        </li>
                                        <li id="step-2" className="text-muted green">
                                            <span className="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" className="text-muted green">
                                            <span className="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" className="text-muted green">
                                            <span className="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" className="text-muted green">
                                            <span className="fas fa-box-open"></span>
                                        </li>
                                    </ul>
                                    <div id="tracker"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="order my-3 bg-light">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="d-flex flex-column justify-content-between order-summary">
                                    <div className="d-flex align-items-center">
                                        <div className="text-uppercase">Order #fur10001</div>
                                        <div className="green-label ms-auto text-uppercase">cod</div>
                                    </div>
                                    <div className="fs-8">Products #03</div>
                                    <div className="fs-8">22 August, 2020 | 12:05 PM</div>
                                    <div className="rating d-flex align-items-center pt-1">
                                        <img src="https://www.freepnglogos.com/uploads/like-png/like-png-hand-thumb-sign-vector-graphic-pixabay-39.png"
                                            alt="" /><span className="px-2">Rating:</span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="fas fa-star"></span>
                                        <span className="far fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="d-sm-flex align-items-sm-start justify-content-sm-between">
                                    <div className="status">Status : Delivered</div>
                                    <div className="btn btn-primary text-uppercase">order info</div>
                                </div>
                                <div className="progressbar-track">
                                    <ul className="progressbar">
                                        <li id="step-1" className="text-muted green">
                                            <span className="fas fa-gift"></span>
                                        </li>
                                        <li id="step-2" className="text-muted">
                                            <span className="fas fa-check"></span>
                                        </li>
                                        <li id="step-3" className="text-muted">
                                            <span className="fas fa-box"></span>
                                        </li>
                                        <li id="step-4" className="text-muted">
                                            <span className="fas fa-truck"></span>
                                        </li>
                                        <li id="step-5" className="text-muted">
                                            <span className="fas fa-box-open"></span>
                                        </li>
                                    </ul>
                                    <div id="tracker"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Content;