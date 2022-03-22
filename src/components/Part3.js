import img from '../imgs/pic1.png';
const Part3 = () => <div className="part3">
    <div className="title">Liberate your everyday wellness</div>
    <div className="sub-title">Shop our self-care products</div>
    <div className="description">Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. 
        And, we always list our ingredients - so what you see is what you get.   
    </div>
    <div className="img-text">
        <div class="text">
            <button>Upgrade your self-care</button>
            <p>#NoNasties, we promise!</p>
        </div>
        <img src={img} alt="img not loaded"/>
    </div>
</div>;

export default Part3;