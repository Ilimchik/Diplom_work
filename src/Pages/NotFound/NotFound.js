import './NotFound.css';
import {Link} from 'react-router-dom'


function NotFound() {
  return (
    <>
    <div className="not_found">404</div>
    <p className='not_found_txt'>Oops, go 
    <Link to="/" className="home">home</Link>
    </p>
    

    </>
  );
}

export default NotFound;