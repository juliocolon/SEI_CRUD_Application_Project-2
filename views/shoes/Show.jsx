const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Show extends React.Component {
    render() {
        const { shoes } = this.props
        return (
            <DefaultLayout title="Show Page">
                <div>
                    <h1>This is the Show Page for {shoes.name} </h1>
                    <a href={`/sneakers/${shoes._id}/edit`}>Edit This Shoe</a>
                    <a href="/sneakers">Go Back to the index</a>
                    <p>{shoes.name}</p>
                    <p>{shoes.price}</p>
                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Show; 