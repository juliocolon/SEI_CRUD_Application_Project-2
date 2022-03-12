const React = require('react');
const DefaultLayout = require('../Default');

class Signup extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div class="new-intro-text">
                    <p>
                        THE MARKET PLACE FOR SNEAKER LOVERS EVERYWHERE.
                    </p>
                </div>
                <form action="/user/signup" method="POST">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">CREATE A USER NAME</label>
                        <div class="col-sm-10">
                            <input type="text" name="username" placeholder='enter a user name' class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">CREATE A PASSWORD</label>
                        <div class="col-sm-10">
                            <input type="text" name="password" placeholder='enter password' class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <input type="submit" value="Create a User" />
                        </div>
                    </div>
                </form>

            </DefaultLayout>
        )
    }
}


module.exports = Signup; 