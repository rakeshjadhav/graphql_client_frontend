import React from 'react'

const Navbar = () => {
    return (
        <div>
           <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                <a className="navbar-brand" href="/">Customer Manager</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="nav navbar-nav menu">
                    <li className="nav-item">
                        <a className="nav-link active"  href="/">Customers <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="/">Orders</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="/">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link"  href="/">Login</a>
                    </li>
                    </ul>
                </div>
                </nav> 
        </div>
    )
}

export default Navbar;