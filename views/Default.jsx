const React = require('react');
// import image from '../images/Sneakers.png'; 


class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang='en'>
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous" />
                    <title>SNEAKERS</title>
                    <link rel="icon" href="/images/favicon-32x32.png" sizes="32x32"/>
                </head>
                <body>
                    <header>
                        <nav class="navbar navbar-expand-lg  navbar-light bg-light">
                            <div class="container-fluid">
                                <a class="navbar-brand" href="#">
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

                    </main>
                    <footer>

                    </footer>
                </body>

            </html>

        )
    }
}


module.exports = DefaultLayout; 