import React from 'react';

class Login extends React.Component {
    render() {
        return <div>
            <form>
                <label>Login</label>
                <input type='text'></input>
                
                <label>Password</label>
                <input type='password'></input>

                <button>Войти</button>
            </form>

        </div>
    }
}

export default Login;