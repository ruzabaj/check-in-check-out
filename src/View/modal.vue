<template>
<div>
    <div class="side-navbar">
        <b-sidebar id="sidebar-no-header" aria-labelledby="sidebar-no-header-title" no-header shadow>
        <template >
        <div class="side-menu no-underline">
            <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
                <ul class="navbar-nav d-flex flex-column mt-5 w-100">
                    <li class="item w-100">
                        <router-link to="/dashboard" class="no-underline"><img src="Dashboard.svg" alt="Dashboard"> Dashboard</router-link>
                    </li>
                    <li class="item w-100">
                        <router-link to="/check" class="no-underline"><img src="Clock.svg" alt="Check"> Check In/Check Out</router-link>
                    </li>
                    <li class="item w-100">
                        <router-link to="/leave" class="no-underline"><img src="Leave.svg" alt="Leave"> Leave</router-link>
                    </li>
                    <li class="item w-100">
                        <div class="dropdown-content">
                            <!-- <router-link to="/report" class="no-underline"></router-link> -->
                            <b-button v-b-toggle.collapse-2 class="report-button"><img src="Report.svg" alt="reports">Reports</b-button>
                            <!-- Element to collapse -->
                            <b-collapse id="collapse-2">
                            <b-card class="collapsible-content">
                                <ul>
                                    <li class="item w-100"><router-link to="/working" class="no-underline"><img src="file.png" alt="Working Hours" > Working Hours</router-link></li>
                                    <li class="item w-100"><router-link to="/performance" class="no-underline"><img src="Performance.png" alt="Performance" >Performance</router-link></li>
                                </ul>
                            </b-card>
                            </b-collapse>
                        </div>
                    </li>
                    <li class="item w-100"><router-link to="/announcement" class="no-underline"><img src="Announcement.svg" alt="Announcements">Announcements</router-link></li>
                </ul> 
            </nav>
        </div>
        </template>
        </b-sidebar>
  </div>  



<div class="header navbar-expand-sm fixed-top">
    <nav class="head-bar d-flex justify-content-between">
            <div class="left-side d-flex">
                <div class="bar">
                    <label for="nav-toggle">
                         <b-button v-b-toggle.sidebar-no-header><span><img src="Vector.png"></span></b-button>
                    </label>
                </div>

                <router-link to="/main" class="no-underline">
                <div class="d-flex">
                    <img class="logo" src="susankya logo 1.svg" alt="logo of susankya">
                    <p class="p-name ">Susankya Tech</p>
                </div>
                </router-link>

            </div>

            <div class="middle-side mt-3 d-flex">
                <span class="fas fa-search"></span>
                <input type="text" class="texts" placeholder="Search or type a command">
            </div>

            <div class="right-side">
                <a href="#" class="link m-2"><img class="profile" src="Background.svg" alt="Profile-pic"></a>
                <a href="#" class="link m-2"><img class="notification" src="Vector.svg" alt="bell"></a>
                <a href="#" class="link m-2"> <img class="cross" src="cross.svg" alt="X"></a>
            </div>
        </nav>   
    </div>
</div>
</template>

<script>
export default {
    name:'RightSide',
    data(){
        return{
            query:''
        }
    },
    methods: {
    async getData(){
      console.log(this.query)
        }
    }
}
</script>
<style>
* {
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style-type: none;
}

.head-bar {
    width: 100%;
    height: 70px;
    z-index: 10;
    background: #FCFDFC;
    box-shadow: 0px 6px 14px rgba(172, 172, 172, 0.06);
    border-radius: 4px 4px 0px 0px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
}

.head-bar .bar {
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 20px;
}

#nav-toggle {
    display: none;
}

/* Left side of navbar */
.left-side {
    margin-left: 20px;
}

.logo {
    margin: 15px 10px;
    height: 48px;
    width: 48px;
}

.p-name {
    margin-top: 25px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    overflow-x: hidden;
    color: black;
}

/* Search box */
.middle-side {
    margin: 08px;
    width: 468px;
    height: 45px;
    background: rgba(223, 223, 224, 0.15);
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
}

.middle-side span {
    padding-left: 20px;
    color: rgb(172, 93, 224);
}

.middle-side input[type=text]{
    border: none;
    outline: none;
    background: rgba(223, 223, 224, 0.15);
    width: 100%;
    text-align: center;
}

button[type="submit"] {
    border: none;
    outline: none;
    background-color: transparent;
}

/* Right side of navbar */
.right-side {
    margin: 0px 40px;
    display: flex;
    align-items: center;
    cursor: pointer;
}

.notification {
    Width: 25px;
    Height: 25px;
}

.profile {
    height: 30px;
    width: 30px;
}

.cross {
    Width: 22px;
    Height: 22px;
}

/* For larger devices */
/* lesser than 1200px and greater than 768px */
@media only screen and (max-width:1200px) and (min-width:768px) {
    input[type=text] {
        width: 268px;
    }

    .right-side {
        margin-right: 5px;
    }

    .name {
        font-size: 15px;
    }

    .middle-side {
        display: none;
    }
}


/* Responsive navbar For mobile devices */
@media only screen and (max-width:425px) {
    .name {
        font-size: 10px;
    }

    .middle-side {
        display: none;
    }

    .right-side {
        display: none;
    }
}

</style>


<style scoped>
/* .side-bar .b-sidebar-outer{
    z-index: 0 !important;
}
.toggle{
    background-color: transparent;
    border: none;
}
.toggle:hover, .toggle:active, .toggle:focus{
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
} */
/* CSS for headbar */
.header{
    width :100%;
    height :70px;
    background-color: #FCFDFC;
    box-shadow: #ccc;
    position: fixed;
    top: 0;
    z-index: 10;
    padding: 10px;
}

.logo{
    margin: 5px;
    padding: 2px;
    width:50px;
    height: 50px;
}
/*
input[type=text]{
    margin:08px;
    width: 468px;
    height: 45px;
    background:rgba(223, 223, 224, 0.15);
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
    outline: none !important;
    padding: 5px;
} */

/* CSS for sidebar */
.dropdown-content .item{
    padding-left: 0;
}
.bar .btn{
    background-color: transparent !important;
    outline:transparent !important;
    border:transparent !important;
}
.bar .btn:active{
    outline: transparent;
    box-shadow: transparent !important;
}
#sidebar-no-header{
    background: #FCFDFC;
    transition: 0.5s;
    width:270px;
    height:1000px;
    z-index:-1;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    margin-left: 0;
    transition: width 200ms;
}
.side-bar ul{
    padding-left: 0 !important;
    margin-left: 0 !important ;
}
.switches ul{
    margin-top:28%;
    border: 1px #7CB342;
    list-style: none;
}
.switches ul li{
    display: block; 
    padding: 10px;
    line-height: 24px; 
    display: flex;
    align-items: center;
}
.switches ul li a, .dropdown-content ul li a{
    font-family: Plus Jakarta Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    color: black;
    border-left: 08px solid transparent;
}
/* .dropdown-content .btn:active{
    font-size: 30px;
} */
.switches ul li:hover{
    padding-left: 0;
    text-decoration: none;
    background-color: white;
    border-left-color:  #7CB342;
    color: black;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
}
.collapsible-content{
    background-color: #FCFDFC;
    outline: none !important;
    border: none !important;
}
.report-button{
    background-color: transparent !important;
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
    color:black;
    color: black;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    border-left: 05px solid transparent;
}
.report-button:hover{
    background-color: white;
    border-left-color:  #7CB342;
    color: black;
}
.title{
    color: black;
    font-size: 24px;
    font-weight: 600;
    text-decoration:none;
}
</style>

<style>
/* CSS for sidebar */
#sidebar-no-header{
    background: #FCFDFC;
    transition: 0.5s;
    width:270px;
    height:1000px;
    z-index:-1;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    margin-left: 0;
    transition: width 200ms;
}
</style>