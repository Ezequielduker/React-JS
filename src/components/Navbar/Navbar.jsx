import Categorias from "./Categorias/Categorias";
import CardWidget from "../CartWidget/CardWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="text-warning">E-commerce</span>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#menu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="menu">
          <Categorias />
          <hr className=" text-white-50" />
          <ul className="navbar-nav flex-row flex-wrap text-light">
            <li className="nav-item col-6 col-md-auto p-2">
             <a href="#" className="text-white"> <CardWidget /></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar