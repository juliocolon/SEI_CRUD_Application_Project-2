const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { shoes } = this.props
        return (
            <DefaultLayout title="Show Page">
                <div>


                    <div class="card text-center">
                        <div class="card-header">
                            <h1>{shoes.name} </h1>
                        </div>
                        <div class="card-body">
                            <img class="show-page-img" src={shoes.img} alt="Shoe Image" />
                            <p class="card-text">{shoes.desc}</p>
                            <p class="card-text">${shoes.price}</p>
                            <div>
                                <a href={`/sneakers/${shoes._id}/edit`} class="btn btn-primary btn-show">{`Edit ${shoes.name} Listing`}</a>
                            </div>

                        </div>
                        <div class="card-footer text-muted">
                            <form id="delete" action={`/sneakers/${shoes._id}?_method=DELETE`} method="POST">
                                <input type="submit" value="Delete Listing" />
                            </form>
                        </div>
                    </div>
                </div>

            </DefaultLayout>
        )
    }
}

module.exports = Show; 