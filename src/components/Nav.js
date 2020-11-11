import React, {Component} from 'react';
class Nav extends Component {
    render() {
        return(
            <nav className="navbar navbar-expand-lg navbar-light">
                <img src="./img/return.png" alt="" />
                <button className="btn btn-outline-dark">Go backup</button>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample08" aria-controls="navbarsExample08" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse justify-content-md-center" id="navbarsExample08">
                    <img src="./img/logo.png" alt="" />
                </div>
                <div className="form-inline my-2 my-md-0">
                    <button className="btn btn-outline-dark">Sign up</button>
                </div>  
            </nav>
        )
    }
}
export default Nav;