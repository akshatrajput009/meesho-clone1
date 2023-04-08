

export default function Navbar() {
  
  return (
    <div>
       <nav className="navbar navbar-expand">
        <a className=" bar-brand" href="app.js">meesho</a>

        <form className="d-flex bar-form"  role="search">
            <div className="bar-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <input className="search"  type="search" placeholder=' Try Saree, Kurit or Search by Product Code' aria-label="Search"></input>
            </form>

        <ul className="navbar-nav ms-auto">
            <li className="nav-item item-border">
            <a className="nav-link bar-link bar-link-hover" href="app.js"><i className="fa-solid fa-mobile-screen-button"></i> Download App</a>  
            </li>
            
            <li className="nav-item item-border">
                <a className="nav-link bar-link bar-link-nhover" href="app.js">Become a Supplier</a>  
            </li>
            <li className="nav-item">
                <a className="nav-link bar-link bar-link-hover" href="app.js">Profile </a>   
            </li>
            <li className="nav-item">
                <a className="nav-link bar-link bar-link-nhover " href="app.js"> Cart</a>  
            </li>
        </ul>


    </nav>
    </div>
  )
}
