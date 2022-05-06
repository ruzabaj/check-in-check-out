<template>
    <nav class="head-bar d-flex justify-content-between">
        <div class="left-side d-flex">
            <slot name="toggle_btn"></slot>
            <p class="name ">Office App</p>
        </div>

        <!-- <div class="middle-side mt-3 d-flex">
            <span class="fas fa-search"></span>
            <input type="text" class="texts" placeholder="Search or type a command">
        </div> -->

        <div class="search-div">
            <div class="search">
                <div>
                        <img src="search.png">
                </div>
                <div>
                    <input type="text" class="searchTerm" placeholder="Search or type a command">
                </div>
            </div>
        </div>

        <div class="right-side">
            <!-- <a href="#" class="dropdown-menu m-2"><img class="profile" src="Profile.svg" alt="Profile-pic" v-if="isActive" ></a> -->
            <Dropdown title="logout" :items="logout"/>
            <!-- <a href="#" class="link m-2"><img class="profile" src="Profile.svg" alt="Profile-pic"></a>
            <a href="#" class="link m-2"><img class="notification" src="Vector.jpg" alt="bell"></a> -->
            <a href="#" @click="logout()" class="link m-2"> <img class="cross" src="topbar-cross.svg" alt="X"></a> 
        </div>
    </nav>
</template>

<script>
// import dropdown from '../component/dropdown.vue'
// import { component } from 'vue/types/umd'


export default {
    name:'AppBar',
    components: {
        // dropdown
        // sideBar
    },
    data(){
        return{
            
        }
        
    },methods:{
        logout(){
            localStorage.removeItem('user')
            localStorage.removeItem('token')
            location.reload()
        }
    }
}
    
</script>

<style>
main p {
    text-align: left !important;
}
.head-bar{
    width: 100%;
    height: 70px;
    z-index:10;
    background: #FCFDFC;
    box-shadow: 0px 6px 14px rgba(172, 172, 172, 0.06);
    border-radius: 4px 4px 0px 0px;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
}
.head-bar .bar{
    display: flex;
    align-items: center;
    font-size: 1.1rem;
    cursor: pointer;
}
.left-side{
    margin-left:20px;
}
.logo{
    margin:15px 10px;
    height: 48px;
    width: 48px; 
}
.name{
    margin-top: 25px;
    font-style: normal;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    font-size: 20px;
    overflow-x: hidden;
}

/* Search box */
/* .middle-side{
    margin:08px;  
    width: 468px;
    height: 45px;  
    background:rgba(223, 223, 224, 0.15);
    border: 1px solid #ccc;
    border-radius: 4px;
    display: flex;
    align-items: center;
}
.middle-side span{
    padding-left: 20px;
    color: rgb(172, 93, 224);
}
input{ 
    border:  none;
    outline: none; 
    background:rgba(223, 223, 224, 0.15); 
    width: 100%;
    text-align: center;
}
button[type="submit"] {
    border: none;
    outline:none;
    background-color:transparent;
} */

/* New search input */
.search-div{
   width: 486px;
   background: rgba(223, 223, 224, 0.15);
   border-radius: 4px;
}
.search-div .search {
  
   position: relative;
   display: flex;
   justify-content: center;
   
 }
 .search-div .searchTerm {
   width: 108%;
   background-color: transparent;
   opacity: 15%;
   border: none;
   padding: 5px;
   outline: none;
   
 }

/* Right side of navbar */
.right-side{
    margin: 0px 40px ;
    display: flex;
    align-items: center;
    cursor: pointer;
}
/* .link{
    /* background: linear-gradient(270.25deg, #5F6C37 -1.9%, #7CB342 99.74%); 
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
} */

.notification{
    Width:25px;
    Height:25px;
}
.profile{
    height: 30px;
    width: 30px;
}
.cross{
    Width: 22px;
    Height:22px;
}

/* For larger devices *//* lesser than 1200px and greater than 768px */
@media only screen and (max-width:1200px) and (min-width:768px){
    input[type=text]{
        width: 268px;
    }
    .right-side{
        margin-right: 5px;
    }
    .name{
        font-size: 15px;
    }
    .middle-side{
        display: none;
    }
}

</style>