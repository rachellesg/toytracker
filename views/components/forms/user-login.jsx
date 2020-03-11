import React from 'react';

class LogInUserForm extends React.Component {
    render() {
        return (
            <div className="form user-form">
                <form action="/login" autocomplete="off" method="POST">
                <div className="row">
                    <div className="col-sm-6">
                        <label for="name">Email:</label>
                        <input type="text" name="email" />
                    </div>
                    <div className="col-sm-6">
                        <label for="name">Password:</label>
                        <input type="text" name="password" />
                    </div>
                </div>
                <div class="form-button">
                    <input class="button-submit" type="submit" />
                </div>
                </form>
            </div>
        )
    }
}

export default LogInUserForm;

// ReactDOM.render(<App />, document.getElementById('app'));
