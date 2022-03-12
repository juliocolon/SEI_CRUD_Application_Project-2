const React = require('react');
const DefaultLayout = require('../Default.jsx');

class Index extends React.Component {
    render() {
        const { shoes } = this.props
        return (
            <DefaultLayout title="SNEAKERS">
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
                            <img src="/images/salomon.png" alt="Salomon Raid Wind Advanced" width="1100" height="500" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/newbalanceblue.png" alt="New Balance 550" width="700" height="400" />
                        </div>
                        <div class="carousel-item">
                            <img src="/images/nikeAF1.png" alt="Nike AF1" width="700" height="400" />
                        </div>
                    </div>

                    <a class="carousel-control-prev" href="#shoe-carousel" data-slide="prev">
                        <span class="carousel-control-prev-icon"></span>
                    </a>
                    <a class="carousel-control-next" href="#shoe-carousel" data-slide="next">
                        <span class="carousel-control-next-icon"></span>
                    </a>
                </div>
                <div>

                    {
                        shoes.map((shoes, i) => {
                            return (
                                <div class="card-deck">
                                    <div class="card">
                                        <a href={`/sneakers/${shoes._id}`}>
                                            <img id="card-section" src={shoes.img} class="card-img-top" alt="Picture of Shoe" />
                                        </a>
                                        <div class="card-body">
                                            <h5 class="card-title">{shoes.name}</h5>
                                            <p class="card-text"><small class="text-muted">${shoes.price}</small></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </DefaultLayout>
        )
    }
}

module.exports = Index;

