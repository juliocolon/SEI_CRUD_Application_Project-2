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
                <form action="/sneakers" method="POST">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">SNEAKER NAME</label>
                        <div class="col-sm-10">
                            <input type="text" name="name" placeholder='enter sneaker name' class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ASKING PRICE</label>
                        <div class="col-sm-10">
                            <input type="text" name="price" placeholder='enter asking price' class="form-control" />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">DESCRIPTION</label>
                        <div class="col-sm-10">
                            <textarea type="text" name="desc" placeholder='enter sneaker description' class="form-control">
                            </textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">IMAGE URL</label>
                        <div class="col-sm-10">
                            <input type="text" name="img" placeholder='enter image url' class="form-control"/>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                        <input type="submit" value="Create a Shoe" />
                        </div>
                    </div>
                </form>

            </DefaultLayout>
        )
    }
}

module.exports = New;