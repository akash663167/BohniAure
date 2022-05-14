<%-- 
    Document   : newjsp
    Created on : May 14, 2022, 1:25:38 PM
    Author     : Admin
--%>

<%@page contentType="text/html" pageEncoding="windows-1252"%>
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
            href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css"
            />

        <link rel="stylesheet" href="assets/css/common.css" />
        <link rel="stylesheet" href="assets/css/index.css" />
        <link rel="stylesheet" href="assets/css/common.css" type="text/css">

        <title>Dashboard</title>
    </head>
    <body>
        <section class="popWrapper email_you_popup">
            <div class="popup">
                <div class="head">
                    <span class="close_icon"><i class="fa-solid fa-xmark"></i></span>
                </div>
                <div class="body_area">
                    <h1>Au - RE will email you in 48 hours</h1>
                </div>
                <div class="bottom"></div>
            </div>
        </section>
        <section class="popWrapper account_id_popup">
            <div class="popup">
                <div class="head">
                    <i class="fa-solid fa-sd-card"></i>
                    <h1>Ad Account ID</h1>

                    <span class="close_icon"><i class="fa-solid fa-xmark"></i></span>
                </div>
                <div class="body_area">
                    <input type="text" placeholder="Accont ID" />
                </div>
                <div class="bottom">
                    <div class="button_wrapper">
                        <button>Cancel</button>
                        <button class="save_button_account">Save</button>
                    </div>
                </div>
            </div>
        </section>

        <section class="dashobard_container">
            <aside>
                <a href="#" class="logo"> Au-Re </a>

                <nav>
                    <li class="active">
                        <a href="./index.html"> Dashboard </a>
                    </li>
                    <li>
                        <a href="./CreateAudience.html"> Create Audience </a>
                    </li>
                    <li>
                        <a href="./Audience.html"> My Audience </a>
                    </li>
                    <li>
                        <a href="./AddPIO.html"> Add POI </a>
                    </li>
                </nav>
            </aside>

            <section class="dashboard_body">
                <h1>Dashboard</h1>
                <div class="burger_icon">
                    <i class="fa-solid fa-bars-staggered"></i>
                </div>

                <section class="dashboard_inner_chart">
                    <div class="body_area">
                        <div class="presentation_area">
                            <div class="box_area">
                                <h1>City</h1>
                                <p>Mumbai</p>
                            </div>
                            <div class="box_area area_map">
                                <h1>Area</h1>
                                <p>Thane</p>
                            </div>
                            <div class="box_area audience_count">
                                <h1>Project</h1>
                                <p>5667733</p>
                            </div>
<!--                            <div class="box_area">
                                <h1>Clubs</h1>
                                <p>5667209</p>
                            </div>
                            <div class="box_area">
                                <h1>Corporative Parks</h1>
                                <p>563009</p>
                            </div>-->div
                        </div>
                        <div id="mapid"></div>
                    </div>
                </section>

                <form class="search_area">
                    <div class="input_wrapper">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input
                            type="text"
                            placeholder="Search your Audience"
                            id="searchinput"
                            />
                    </div>

                    <button class="outline_button">
                        <i class="fa-solid fa-layer-group"></i>
                        <p>Add to Set</p>
                    </button>
                    <button class="active_button">
                        <i class="fa-solid fa-rocket"></i>
                        <p>Activate</p>
                    </button>
                </form>

                <div class="badge_wrapper">
                    <span class="badges">
                        <input type="checkbox" name="" id="all" />
                        <label for="all">All</label>
                    </span>
                    <span class="badges">
                        <input type="checkbox" name="" id="Brands" />
                        <label for="Brands">Brands</label>
                    </span>
                    <span class="badges">
                        <input type="checkbox" name="" id="categories" />
                        <label for="categories">Place categories</label>
                    </span>
                    <span class="badges">
                        <input type="checkbox" name="" id="Demographics" />
                        <label for="Demographics">Demographics</label>
                    </span>
                    <span class="badges">
                        <input type="checkbox" name="" id="mobile" />
                        <label for="mobile">mobile</label>
                    </span>
                    <span class="badges">
                        <input type="checkbox" name="" id="interets" />
                        <label for="interets">interets</label>
                    </span>
                    <span class="badges">
                        <input type="checkbox" name="" id="app" />
                        <label for="app">app name</label>
                    </span>
                </div>

                <div class="table_area">
                    <table>
                        <thead>
                            <tr>
                                <td>Area</td>
                                <td>Sub - category<i class="fa-solid fa-sort"></i></td>
                                <td>Count<i class="fa-solid fa-sort"></i></td>

                                <td><p style="margin-left: 70px">Activate</p></td>
                            </tr>
                        </thead>
                        <tbody></tbody>
                    </table>
                </div>
            </section>
        </section>
        <script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <script src="assets/js/indexMap.js"></script>
        <script src="assets/js/index.js" ></script>
        <script src="assets/js/common.js"></script>
    </body>
</html>
