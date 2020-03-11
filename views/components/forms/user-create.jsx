import React from 'react';

class CreateUserForm extends React.Component {
    render() {
        return (
            <div className="form user-form">
                <form action="/signup" autoComplete="off" method="POST">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="name">Name:</label>
                        <input type="text" name="username" />
                    </div>
                    <div className="col-sm-6">
                        <label for="name">Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="col-sm-6">
                        <label for="name">Password:</label>
                        <input type="text" name="password" />
                    </div>
                </div>
                <div className="form-button">
                    <input className="button-submit" type="submit" />
                </div>
                </form>
            </div>
        )
    }
}

export default CreateUserForm;

// ReactDOM.render(<App />, document.getElementById('app'));
