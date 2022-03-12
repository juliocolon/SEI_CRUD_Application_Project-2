const React = require('react');
const Shoes = require('../models/shoes');


class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang='en'>
                <head>
                    <meta charSet='UTF-8' />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous" />
                    <title>SNEAKERS</title>
                    <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32" />
                    <link rel="stylesheet" href="/css/app.css" />
                </head>
                <body>

                    <header>
                        <nav class="navbar navbar-expand-md navbar-light bg-light">
                            <div class="container-md">
                                <a class="navbar-brand" href="/sneakers">
                                    <img src="/images/SNEAKERS.png" alt="Logo Image" height="150" width="150" />
                                </a>
                                <div>
                                    <ul class="navbar-nav mr-auto">
                                        <li class="nav-item active">
                                            <a id="top" class="nav-link" href="/sneakers/#card-section">FOOTWEAR</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/sneakers/sell">SELL</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/user/signup">SIGN UP</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/user/login">LOGIN</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="/logout">LOGIN</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#contact">CONTACT</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer class="page-footer pt-4">


                        <div class="container-sm text-center text-md-left">

                            <div class="row">


                                <div class="col text-center">

                                  <a href="/sneakers/#top"><p id="contact">SNEAKERS</p></a>  
                                    <p>Contact: JCOLON1092@GMAIL.COM</p>
                                    <p>Twitter: @JCCOLOGNE</p>
                                    <p>Instagram:@_JULIOCOLON</p>

                                </div>

                            </div>

                        </div>

                        <div class="footer-copyright text-center py-3">© 2022 Copyright:
                            <a href="#">Julio Colon</a>
                        </div>

                    </footer>
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>

                </body >

            </html >

        )
    }
}


module.exports = DefaultLayout; 