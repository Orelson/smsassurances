import React from 'react'
import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => {
    return (
        <>
            <html>
                <Head>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                    <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
                    <link rel="stylesheet" href="/assets/css/animate.min.css" />
                    <link rel="stylesheet" href="/assets/css/fontawesome.min.css" />
                    <link rel="stylesheet" href="/assets/css/flaticon.css" />
                    <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
                    <link rel="stylesheet" href="/assets/css/slick.min.css" />
                    <link rel="stylesheet" href="/assets/css/meanmenu.css" />
                    <link rel="stylesheet" href="/assets/css/magnific-popup.min.css" />
                    <link rel="stylesheet" href="/assets/css/odometer.min.css" />
                    <link rel="stylesheet" href="/assets/css/nice-select.min.css" />
                    <link rel="stylesheet" href="/assets/css/style.css" />
                    <link rel="stylesheet" href="/assets/css/responsive.css" />
                    <link rel="stylesheet" href="/assets/css/additional.css" />
                    <title> SMS Assurances - Bienvenue sur le site web officiel </title>
                    <link rel="icon" type="image/png" href="/assets/img/favicon.png" />
                </Head>

                <body>
                    <Header />

                    { children }

                    <Footer />

                    <div className="go-top"><i className="fas fa-chevron-up"></i><i className="fas fa-chevron-up"></i></div>
                    <script src="/assets/js/jquery.min.js"></script>
                    <script src="/assets/js/popper.min.js"></script>
                    <script src="/assets/js/bootstrap.min.js"></script>
                    <script src="/assets/js/parallax.min.js"></script>
                    <script src="/assets/js/owl.carousel.min.js"></script>
                    <script src="/assets/js/slick.min.js"></script>
                    <script src="/assets/js/jquery.meanmenu.js"></script>
                    <script src="/assets/js/jquery.appear.min.js"></script>
                    <script src="/assets/js/odometer.min.js"></script>
                    <script src="/assets/js/jquery.nice-select.min.js"></script>
                    <script src="/assets/js/jquery.magnific-popup.min.js"></script>
                    <script src="/assets/js/wow.min.js"></script>
                    <script src="/assets/js/jquery.ajaxchimp.min.js"></script>
                    <script src="/assets/js/form-validator.min.js"></script>
                    <script src="/assets/js/contact-form-script.js"></script>
                    <script src="/assets/js/main.js"></script>
                    <script src="/assets/js/merci.js"></script>
                </body>
            </html>
            <div className="go-top"><i className="fas fa-chevron-up"></i><i className="fas fa-chevron-up"></i></div>
{/* 
            <script src="/assets/js/showModal.js"></script> */}
        </>
    )
}

export default Layout