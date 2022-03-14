const React = require('react');
const DefaultLayout = require('./Default');

class Index extends React.Component {
    render() {
        const {username} = this.props; 
        return (
            <DefaultLayout username={username}>
                <div class="new-intro-text">
                    <p>
                        THE MARKET PLACE FOR SNEAKER LOVERS EVERYWHERE.
                    </p>

                </div>

                <div class="new-intro-text">
                    <p>
                        SIGN UP TO GET STARTED OR LOG IN WITH YOUR EXISTING ACCOUNT!
                    </p>
                </div>
                <div id="shoe-carousel" class="carousel slide" data-ride="carousel">
                    <ul class="carousel-indicators">
                        <li data-target="#shoe-carousel" data-slide-to="0" class="active"></li>
                        <li data-target="#shoe-carousel" data-slide-to="1"></li>
                        <li data-target="#shoe-carousel" data-slide-to="2"></li>
                        <li data-target="#shoe-carousel" data-slide-to="3"></li>
                        <li data-target="#shoe-carousel" data-slide-to="4"></li>
                    </ul>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/images/newbalance.png" alt="New Balance M5740LLG" width="700" height="400" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/airmax.png" alt="Nike Airmax 95" width="700" height="400" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/salomon.png" alt="Salomon Raid Wind Advanced" width="700" height="400" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/newbalanceblue.png" alt="New Balance 550" width="700" height="400" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/nikeAF1.png" alt="Nike AF1" width="700" height="400" />
                        </div>
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}


module.exports = Index; 