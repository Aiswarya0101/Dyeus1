

function Navbar() {
    return <div className="navbar">
        <div className="left-icons">
            <i className="fa-solid fa-bars" style={{fontSize:'24px'}}></i>
        </div>
       <div className="right-icons">
            <i className="fa-solid fa-cart-shopping" style={{fontSize:'24px',marginRight:'24px'}}></i>
            <i className="fa-solid fa-bell" style={{fontSize:'24px'}}></i>
       </div>
    </div>;
}

export default Navbar;