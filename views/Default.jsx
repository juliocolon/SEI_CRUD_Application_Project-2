const React = require('react');
// import image from '../images/Sneakers.png'; 


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
                                            <a class="nav-link" href="#">FOOTWEAR</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">LOGIN</a>
                                        </li>
                                        <li class="nav-item active">
                                            <a class="nav-link" href="#">CART</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                        </nav>
                    </header>
                    <main>
                        {this.props.children}
                    </main>
                    <footer>

                    </footer>
                    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>

                </body>

            </html>

        )
    }
}


module.exports = DefaultLayout; 