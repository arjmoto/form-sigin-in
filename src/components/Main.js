import React, {Component} from 'react';
class Main extends Component {
    render() {
        return(
  
                <div className="form-signin ">
                    <h1 className="m-5 text-center">Sign in</h1>
                  <form >
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input type="email" className="form-control" id="username" aria-describedby="emailHelp" placeholder="Enter username" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" id="password" placeholder="Password" />
                        </div>
                            <div className="form-check m-3 text-center">
                            <input type="checkbox" className="form-check-input" id="check" />
                            <label className="form-check-label" htmlFor="check">Keep me singed in</label>
                        </div>
                        <button className="btn btn-lg btn-success btn-block mb-3" type="submit">Signin to coderX</button>
                        <p><a href="#" className="text-dark pr-5">Forgot username?</a><a href="#" className="text-dark">Forgot password?</a></p>
                    </form>
                </div>

        )
    }
}
export default Main;