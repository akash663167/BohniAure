<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <!-- font awesome -->
        <script
            src="https://kit.fontawesome.com/2eb177939b.js"
            crossorigin="anonymous"
        ></script>
        <link
            rel="stylesheet"
            href="https://unpkg.com/bootstrap@5.0.2/dist/css/bootstrap.min.css"
            />
        <link rel="stylesheet" href="./deselect/css/dselect.css" />
        <link rel="stylesheet" href="./assets/css/common.css" />
        <link rel="stylesheet" href="./assets/css/index.css" />
        <link rel="stylesheet" href="./assets/css/Audience.css" />
        <link rel="stylesheet" href="./assets/css/create_audience.css" />
        <title>Dashboard</title>
    </head>
    <body>
        <section class="popWrapper email_you_popup">
            <div class="popup">
                <div class="head">
                    <i class="fa-solid fa-sd-card"></i>
                    <h1>Audience Name</h1>

                    <span class="close_icon"><i class="fa-solid fa-xmark"></i></span>
                </div>
                <div class="body_area">
                    <input type="text" placeholder="Enter Project Name"  id="project_name"/>
                    <input type="text" placeholder="Enter Audience Name"  id="audience_name" />
                </div>
                <div class="bottom">
                    <div class="button_wrapper">
                        <button class="cancel_button">Cancel</button>
                        <button class="save_button_account">Save</button>
                    </div>
                </div>
            </div>
        </section>


        <section class="dashobard_container">
            <aside>
                <a href="#" class="logo"> Au-Re </a>

                <nav>
                    <li>
                        <a href="./dashboard.jsp"> Dashboard </a>
                    </li>
                    <li class="active">
                        <a href="./CreateAudience.jsp"> Create Audience </a>
                    </li>
                    <li >
                        <a href="./Audience.html"> My Audience </a>
                    </li>
                    <li>
                        <a href="./AddPIO.html"> Add POI </a>
                    </li>
                </nav>
            </aside>

            <div class="dashboardbody_wraper">
                <section class="dashboard_body">
                    <h1>Create Audiences</h1>

                    <div class="burger_icon">
                        <i class="fa-solid fa-bars-staggered"></i>
                    </div>

                    <section class="group_wrapper">
                        <div class="group">
                            <div class="head">
                                <p>Group 1</p>
                                <i class="fa-solid fa-chevron-up"></i
                                ><i class="fa-solid fa-xmark"></i>
                            </div>
                            <div class="body_area">
                                <div class="row_custom">
                                    <div class="or_select">
                                        <select class="form-select">
                                            <option value="OR">OR</option>
                                            <option value="AND">AND</option>
                                        </select>
                                    </div>

                                    <div>
                                        <select class="form-select category_selection">
                                            <option value="">Select Category</option>   
                                            <option value="CITY">City</option>
                                            <option value="AREA">Area</option>
                                            <option value="POI">POI</option>
                                            <option value="DURATION">Duration</option>
                                        </select>
                                    </div>
                                    <div>
                                        <select class="form-select condition" >
                                            <option value="Is">Is</option>
                                            <option value="IsNot">Is Not</option>

                                        </select>
                                    </div>  


                                    <div class="select_right_wrapper">
                                        <select class="form-select sub_values" id="example-area" multiple>

                                        </select>
                                    </div>  

                                </div>
                            </div>
                        </div>

                        <div class="or_button">
                            <button href="./CreateAudience.jsp" disabled>   <i class="fa-solid fa-plus"></i> OR </button>

                            </button>
                        </div>
                    </section>




                </section>
                <div class="bottom_calulation_Araea">
                    <button class="calculate_button" id="calc-btn" >
                        <i class="fa-solid fa-arrow-rotate-right"></i>
                        Calulate
                    </button>

                    <img src="./assets/img/loader.gif"  class="loader" alt="" >
                    <div class="answer">
                        <h1>estimated reach</h1>
                        <p id="est_count">N.A</p>
                    </div>
                    <button class="save_aud" id="save-btn">
                        Save Audience
                    </button>
                </div>

            </div>
        </section>

        <script src="https://unpkg.com/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
        <script src="./deselect/js/dselect.js"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>

        <script>
            // multiple
            dselect(document.querySelector("#example-area"));

            $('#calc-btn').click(function (e) {
                e.preventDefault();
                var array = new Array();
                $('.group_wrapper .group').find('.row_custom').each(function (index, ele) {
                    var object = new Object();
                    object['category'] = $(ele).find('.category_selection').val();
                    object['condition'] = $(ele).find('.condition').val();
                    object['sub_values'] = $(ele).find('.sub_values').val();
                    array.push(object);
                });

                console.log('data ========', array);
                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(array),
                    url: 'getCategoryAudienceCount',
                    processData: false,
                    dataType: 'json',
                    contentType: 'application/json',
                    success: function (data, textStatus, jqXHR) {
                        let count = JSON.parse(data);
                        if(Number(count)>=0)
                            $('#est_count').text(count);
                    },
                    error: function (jqXHR, textStatus, errorThrown) {

                    }
                });
            });

            $('#save-btn').click(function (e) {
                e.preventDefault();
                
                    var object = new Object();
                  object['PROJECT_NAME']= $('#project_name').val();
                  object['AUDIENCE_NAME']= $('#audience_name').val();
                console.log('data ========', object);
                $.ajax({
                    method: 'POST',
                    data: JSON.stringify(array),
                    url: 'Login',
                    processData: false,
                    contentType: 'false',
                    success: function (data, textStatus, jqXHR) {

                    },
                    error: function (jqXHR, textStatus, errorThrown) {

                    }
                });
            });
    



        </script>


        <!-- <script src="./assets/js/LogicCreate.js" type="module"></script> -->
        <script src="./assets/js/common.js"></script>
        <script src="./assets/js/CreateAudience.js" type="module"></script>
    </body>
</html>
