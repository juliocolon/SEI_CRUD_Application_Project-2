const React = require('react');
const DefaultLayout = require('../Default');

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="SELL SNEAKERS">
                <div class="new-intro-text">
                    <p>
                        THE MARKET PLACE FOR SNEAKER LOVERS EVERYWHERE. LOOKING TO SELL YOUR SNEAKERS TODAY? SUBMIT THE FORM BELOW!
                    </p>
                </div>
                <form>
                    <div class="form-group row">
                        <label for="inputEmail3" class="col-sm-2 col-form-label">SNEAKER NAME</label>
                        <div class="col-sm-10">
                            <input type="text" class="form-control" id="inputEmail3" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="inputPassword3" class="col-sm-2 col-form-label">ASKING PRICE</label>
                        <div class="col-sm-10">
                            <input type="password" class="form-control" id="inputPassword3" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">UPLOAD IMAGE</button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">SUBMIT</button>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <button type="submit" class="btn btn-primary">HOME</button>
                        </div>
                    </div>
                </form>

            </DefaultLayout>
        )
    }
}

module.exports = New;