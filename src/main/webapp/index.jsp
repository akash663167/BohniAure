2<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
         pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="ISO-8859-1">
        <title>Insert title here</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.bundle.min.js">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js">

        <style>
            body {
                color: #000;
                overflow-x: hidden;
                height: 100%;
                background-color: #B0BEC5;
                background-repeat: no-repeat
            }

            .card0 {
                box-shadow: 0px 4px 8px 0px #757575;
                border-radius: 0px
            }

            .card2 {
                margin: 0px 40px
            }

            .logo {
                width: 200px;
                height: 100px;
                margin-top: 20px;
                margin-left: 35px
            }

            .image {
                width: 360px;
                height: 280px
            }

            .border-line {
                border-right: 1px solid #EEEEEE
            }

            .facebook {
                background-color: #3b5998;
                color: #fff;
                font-size: 18px;
                padding-top: 5px;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                cursor: pointer
            }

            .twitter {
                background-color: #1DA1F2;
                color: #fff;
                font-size: 18px;
                padding-top: 5px;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                cursor: pointer
            }

            .linkedin {
                background-color: #fff; /* #2867B2 */
                color: #fff;
                font-size: 18px;
                padding-top: 0px;
                border-radius: 50%;
                width: 35px;
                height: 35px;
                cursor: pointer
            }

            .line {
                height: 1px;
                width: 45%;
                background-color: #E0E0E0;
                margin-top: 10px
            }

            .or {
                width: 10%;
                font-weight: bold
            }

            .text-sm {
                font-size: 14px !important
            }

            ::placeholder {
                color: #BDBDBD;
                opacity: 1;
                font-weight: 300
            }

            :-ms-input-placeholder {
                color: #BDBDBD;
                font-weight: 300
            }

            ::-ms-input-placeholder {
                color: #BDBDBD;
                font-weight: 300
            }

            input,
            textarea {
                padding: 10px 12px 10px 12px;
                border: 1px solid lightgrey;
                border-radius: 2px;
                margin-bottom: 5px;
                margin-top: 2px;
                width: 100%;
                box-sizing: border-box;
                color: #2C3E50;
                font-size: 14px;
                letter-spacing: 1px
            }

            input:focus,
            textarea:focus {
                -moz-box-shadow: none !important;
                -webkit-box-shadow: none !important;
                box-shadow: none !important;
                border: 1px solid #304FFE;
                outline-width: 0
            }

            button:focus {
                -moz-box-shadow: none !important;
                -webkit-box-shadow: none !important;
                box-shadow: none !important;
                outline-width: 0
            }

            a {
                color: inherit;
                cursor: pointer
            }

            .btn-blue {
                background-color: #1A237E;
                width: 150px;
                color: #fff;
                border-radius: 2px
            }

            .btn-blue:hover {
                background-color: #000;
                cursor: pointer
            }

            .bg-blue {
                color: #fff;
                background-color: #1A237E
            }

            @media screen and (max-width: 991px) {
                .logo {
                    margin-left: 0px
                }

                .image {
                    width: 300px;
                    height: 220px
                }

                .border-line {
                    border-right: none
                }

                .card2 {
                    border-top: 1px solid #EEEEEE !important;
                    margin: 0px 15px
                }
            }
        </style>
    </head>
    <body>
        <div class="container-fluid px-1 px-md-5 px-lg-1 px-xl-5 py-5 mx-auto">
            <div class="card card0 border-0">
                <div class="row d-flex">
                    <div class="col-lg-6">
                        <div class="card1 pb-5">
                            <!-- <div class="row"> <img src="login-bg.jpg" class="logo"> </div> -->
                            <div class="row px-3 justify-content-center mt-4 mb-5 border-line"><img src="webasset/img/svg/billboardTruck.svg" class="svgImg"></div>		
                            <!-- <div class="row px-3 justify-content-center mt-4 mb-5 border-line"> <img src="webasset/img/icons/billBoard.png" class="image"> </div> -->
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="card2 card border-0 px-4 py-5">
                            <div class="row mb-4 px-3">
                                <h6 class="mb-0 mr-4 mt-2">Sign in with</h6>
                                <!-- <div class="facebook text-center mr-3">
                                    <div class="fa fa-facebook"></div>
                                </div>
                                <div class="twitter text-center mr-3">
                                    <div class="fa fa-twitter"></div>
                                </div> -->
                                <!-- <div class="linkedin text-center mr-3">
                                    <div class="fa fa-linkedin"></div>
                                </div> -->
                                <form action="" class="frmBx" method="post" autocomplete="off">
                                    <button class="linkedin text-center mr-3">
                                        <!-- <div class="fa fa-mobile-phone" ></div> -->
                                        <span style="content: "\1F4F1";">&#128241;</span><!-- style="background-color: #2867B2;" -->
                                    </button>
                                </form>
                            </div>
                            <div class="row px-3 mb-4">
                                <div class="line"></div> <small class="or text-center">Or</small>
                                <div class="line"></div>
                            </div>
                            <form  id="login-form" class="frmBx" method="post" autocomplete="on">
                                <div class="row px-3"> <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Email Address</h6>
                                    </label> <input class="mb-4" type="email" id="emailid" name="emailid" placeholder="Enter a valid email address" required /> </div>
                                <div class="row px-3"> <label class="mb-1">
                                        <h6 class="mb-0 text-sm">Password</h6>
                                    </label> <input type="password" name="password" id="password" placeholder="Enter password" /> </div>
                                <div class="row px-3 mb-4">
                                    <div class="custom-control custom-checkbox custom-control-inline"> <input id="chk1" type="checkbox" name="chk" class="custom-control-input"> <label for="chk1" class="custom-control-label text-sm">Remember me</label> </div> 
                                    <!-- <a href="#" class="ml-auto mb-0 text-sm">Forgot Password?</a> -->
                                </div>
                                <div class="row mb-3 px-3"> <button type="submit" class="btn btn-blue text-center">Login</button> </div>
                                <div class="row mb-4 px-3"> <small class="font-weight-bold">Don't have an account? <a class="text-danger ">Register</a></small> </div>
                            </form>
                            <div class="container mt-4 text-center text-white   rounded"  id="msg-container" style="display:none;">
                                <p class="msg" id="msg"></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-blue py-4">
                    <center>
                        <h2><img src="webasset/img/bohniWhite.png">Done?</h2>
                        <!-- <p>Making Advertising More Meaningful</p> -->
                        <a href="Bohni_index.jsp" class="signup-btn"><i class="fa fa-chevron-left" aria-hidden="true"></i>&nbsp;&nbsp;Back to Home</a>

                        <!-- <button class="signup-btn btn-outline-warning">Sign Up</button> -->

                    </center>
                    <!-- <div class="row px-3"> <small class="ml-4 ml-sm-5 mb-2">Copyright &copy; 2019. All rights reserved.</small>
                        <div class="social-contact ml-4 ml-sm-auto"> <span class="fa fa-facebook mr-4 text-sm"></span> <span class="fa fa-google-plus mr-4 text-sm"></span> <span class="fa fa-linkedin mr-4 text-sm"></span> <span class="fa fa-twitter mr-4 mr-sm-5 text-sm"></span> </div>
                    </div> -->
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="js/main.js"></script> 

        <script>

            $('#login-form').submit(function (e) {

                e.preventDefault();
                var   form = new FormData(e.target);
                debugger;
                form.append('emailid', $('#emailid').val());
                form.append('password', $('#password').val());
                console.log('formdata ' + form);

                $.ajax({
                    method: 'POST',
                    data: form,
                    url: 'Login',
                    processData: false,
                    contentType: false,
                    success: function (data, textStatus, jqXHR) {
                        console.log("respoonse" + data)
                        if (data.trim() == 'notdone') {
                            $('#msg-container').show();
                            $('#msg').html('Login Failed... Please try again!!');
                            $('#msg').addClass('alert alert-danger');
                            $('#loader').hide();
                            $('#submit').show();
                        } else {
                            window.location.href = "profile.jsp";
                        }

                    },
                    error: function (jqXHR, textStatus, errorThrown) {
                        $('#msg-container').show();
                        $('#msg-container').html('Login Failed!!');
                        $('#msg-container').addClass('bg-danger');
                        $('#loader').hide();
                        $('#submit').show();
                    }
                });
            });
        </script>
    </body>
</html>