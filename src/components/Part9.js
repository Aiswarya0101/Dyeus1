const Part9 = () => <div className="part9">
    <div className="icons">
        <i class="fa-brands fa-facebook-f" style={{color:'#fff'}}></i>
        <i class="fa-brands fa-twitter" style={{color:'#fff'}}></i>
    </div>
    <div className="options">
        <div className="option">Products&nbsp;&nbsp;<i class="fa-solid fa-angle-right" style={{fontSize:'16px'}}></i></div>
        <div className="option">Our Science&nbsp;&nbsp;<i class="fa-solid fa-angle-right" style={{fontSize:'16px'}}></i></div>
        <div className="option">Vision & Mission&nbsp;&nbsp;<i class="fa-solid fa-angle-right" style={{fontSize:'16px'}}></i></div>
        <div className="option">About Us&nbsp;&nbsp;<i class="fa-solid fa-angle-right" style={{fontSize:'16px'}}></i></div>
    </div>
    <hr style={{marginTop:'24px',marginBottom:'17px'}}/>
    <small style={{fontFamily:'Quicksand'}}>Subscribe to our Newsletter</small>
    <div className="contact" style={{marginTop:'6px'}}>
        <input type="text" style={{width:'216px',padding:'6px'}} placeholder="Enter your email..."/>
        <button style={{marginLeft:'6px'}}><i class="fa-solid fa-envelope" ></i> Activate</button>
    </div>
</div>;

export default Part9;