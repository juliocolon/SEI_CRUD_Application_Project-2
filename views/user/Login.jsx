const React = require('react');
const DefaultLayout = require('../Default');

class Login extends React.Component {
    render() {
        const { username } = this.props
        return (
            <DefaultLayout username={username}>
                <div class="new-intro-text" >
                    <p>
                        THE MARKET PLACE FOR SNEAKER LOVERS EVERYWHERE.
                    </p>
                </div>
                <form action="/user/login" method="POST">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ENTER USER NAME</label>
                        <div class="col-sm-6">
                            <input type="text" name="username" placeholder='enter your user name' class="form-control" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ENTER PASSWORD</label>
                        <div class="col-sm-6">
                            <input type="password" name="password" placeholder='enter your password' class="form-control" required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <input type="submit" value="LOGIN" />
                        </div>
                    </div>
                </form>

            </DefaultLayout>
        )
    }
}


module.exports = Login; 