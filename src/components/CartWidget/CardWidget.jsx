import {Link} from 'react-router-dom';
const CardWidget = () => {
    return (
        <div>
            <Link to={'/cart'} className='nav-link'><i className="fa-solid fa-cart-shopping mx-4">0</i></Link>
        </div>
    );
}

export default CardWidget;
