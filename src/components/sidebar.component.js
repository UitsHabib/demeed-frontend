
const Sidebar = () => {
    return (
        <div className="col-lg-3 my-lg-0 my-md-1">
                <div id="sidebar" className="bg-purple">
                    <div className="h4 text-white">Account</div>
                    <ul>
                        <li className="active">
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-box pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Account</div>
                                    <div className="link-desc">View & Manage orders and returns</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-box-open pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Orders</div>
                                    <div className="link-desc">View & Manage orders and returns</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="far fa-address-book pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Address Book</div>
                                    <div className="link-desc">View & Manage Addresses</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="far fa-user pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">My Profile</div>
                                    <div className="link-desc">Change your profile details & password</div>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-decoration-none d-flex align-items-start">
                                <div className="fas fa-headset pt-2 me-3"></div>
                                <div className="d-flex flex-column">
                                    <div className="link">Help & Support</div>
                                    <div className="link-desc">Contact Us for help and support</div>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
    )
}

export default Sidebar;