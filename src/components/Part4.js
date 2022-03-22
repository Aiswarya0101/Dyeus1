import Girl1 from '../imgs/girl1.png';
import Girl2 from '../imgs/girl2.png';
import Girl3 from '../imgs/girl3.png';
import Girl4 from '../imgs/girl4.png';

const Part4 = () => <div className="part4">
    <div className="title">Track your mood</div>
    <div className="description">All days and all moods are not made equal. 
        But we can only improve what we measure. 
        Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 
    </div>
    <button>Track you mood on the app</button>
    <div className="img-gallery">
        <img src={Girl1} alt="img not loaded"/>
        <img src={Girl2} alt="img not loaded"/>
        <img src={Girl3} alt="img not loaded"/>
        <img src={Girl4} alt="img not loaded"/>
    </div> 
</div>;

export default Part4;