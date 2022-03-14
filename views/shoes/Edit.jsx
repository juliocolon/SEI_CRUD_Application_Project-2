const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { shoes, username } = this.props;
        return (
            <DefaultLayout username={username}>
                <div class="new-intro-text">
                    <p>
                        EDIT LISTING
                    </p>
                </div>
                <form action={`/sneakers/${shoes._id}?_method=PUT`} method="POST">
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">SNEAKER NAME</label>
                    <div class="col-sm-6">
                        <input type="text" name="name" placeholder={shoes.name} class="form-control" required />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">ASKING PRICE</label>
                    <div class="col-sm-2">
                        <input type="text" name="price" placeholder={shoes.price} class="form-control" required />
                    </div>
                </div>
                <div class="form-group row">
                    <label id="counter" class="col-sm-2 col-form-label">SIZE</label>
                    <div class="col-sm-2">
                        <input type="number" min="1" max="20" name="size" placeholder={shoes.size} class="form-control" required />
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">DESCRIPTION</label>
                    <div class="col-sm-6">
                        <textarea type="text" name="desc" placeholder={shoes.desc} class="form-control" required>
                        </textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <label class="col-sm-2 col-form-label">IMAGE URL</label>
                    <div class="col-sm-6">
                        <input type="text" name="img" placeholder={shoes.img} class="form-control" required />
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-10">
                        <input type="submit" value={`Edit ${shoes.name}`} />
                    </div>
                </div>
            </form>
            </DefaultLayout >
        )
    }
}

module.exports = Edit; 