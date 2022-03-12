const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Edit extends React.Component {
    render() {
        const { shoes } = this.props;
        return (
            <DefaultLayout>
                <div class="new-intro-text">
                    <p>
                        EDIT LISTING
                    </p>
                </div>
                <form action={`/sneakers/${shoes._id}?_method=PUT`} method="POST">
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">SNEAKER NAME</label>
                        <div class="col-sm-10">
                            <input type="text" name="name" placeholder='enter sneaker name' class="form-control" defaultValue={shoes.name} required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">ASKING PRICE</label>
                        <div class="col-sm-10">
                            <input type="text" name="price" placeholder='enter asking price' class="form-control" defaultValue={shoes.price} required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">DESCRIPTION</label>
                        <div class="col-sm-10">
                            <textarea type="text" name="desc" placeholder='enter sneaker description' class="form-control" defaultValue={shoes.desc} required>
                            </textarea>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">SIZE</label>
                        <div class="col-sm-10">
                            <input type="text" name="size" placeholder='enter sneaker size' class="form-control" defaultValue={shoes.size} required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label">IMAGE URL</label>
                        <div class="col-sm-10">
                            <input type="text" name="img" placeholder='enter image url' class="form-control" defaultValue={shoes.img} required />
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-10">
                            <input type="submit" value={`Edit ${shoes.name}`} />
                        </div>
                    </div>
                </form>
            </DefaultLayout>
        )
    }
}

module.exports = Edit; 