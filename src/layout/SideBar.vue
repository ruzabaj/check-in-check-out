<template>
  <div>
      <!-- <div class="side-navbar" :class=" status ? 'toggle-active' : '' "> -->
    <div class="side-navbar" :class=" status ? 'toggle-active' : '' ">
        <b-sidebar id="sidebar-no-header"  aria-labelledby="sidebar-no-header-title"  no-header shadow>
        <template >
        <div class="side-menu no-underline">
            <nav class="navbar navbar-expand d-flex flex-column align-item-start" id="sidebar">
                <ul class="navbar-nav d-flex flex-column mt-5 w-100">
                    <li class="item text-black w-100" v-for="(menu, index) in sidebarMenu" :key="index" style="color:black;">
                        <template v-if="menu.hasChild">
                            <div>
                                <b-button v-b-toggle.collapse-2 class="report-button">
                                    <img :src="menu.img" :alt="menu.text">
                                    <template v-if="status">
                                        {{menu.text}}
                                    </template>
                                </b-button>

                                <b-collapse id="collapse-2">
                                    <b-card class="collapsible-content">
                                        <ul>
                                            <li class="item text-black w-100" v-for="(child, i) in menu.children" :key="i">
                                                <router-link :to="`/${child.text}`" class="no-underline" v-b-toggle.collapse-2 >
                                                    <img :src="child.img" :alt="child.text" > 
                                                    <template v-if="status">
                                                        {{child.text}}
                                                    </template>
                                                </router-link>
                                            </li>
                                        </ul>
                                    </b-card>
                                </b-collapse>

                            </div>
                        </template>
                        <template v-else>
                            <router-link :to="`/${menu.text}`" class="no-underline">
                                <img :src="menu.img" :alt="menu.text"> 
                                <template v-if="status">
                                    {{menu.text}}
                                </template>
                            </router-link>
                        </template>
                    </li>
                </ul> 
            </nav>
        </div>
        </template>
        </b-sidebar>
  </div>
  </div>
</template>

<script>
export default {
    name: 'SideBar',
    data: () => ({
        status: false,
        sidebarMenu: [
            {
                img: 'Dashboard.svg',
                text: 'Dashboard',
                hasChild: false,
                children: []
            },
            {
                img: 'Clock.svg',
                text: 'Check In/Check Out',
                hasChild: false,
                children: []
            },
            {
                img: 'Leave.svg',
                text: 'Leave',
                hasChild: false,
                children: []
            },
            {
                img: 'Report.svg',
                text: 'Reports',
                hasChild: true,
                children: [
                    {
                        img: 'file.png',
                        text: 'Working Hours'
                    },
                    {
                        img: 'Performance.png',
                        text: 'Performance'
                    },
                ]
            },
            {
                img: 'Announcement.svg',
                text: 'Announcements'
            }
        ]
    }),
    created() {
        this.$bus.on('main-sidebar-toggle', (data) => {
            this.status = data;
        })
        
    },
    destroyed() {
        this.$bus.off('main-sidebar-toggle');
    }
}
</script>

<style scoped>
/* CSS for new sidebar */
.navbar-nav {
    margin-left: 0 !important;
    width: 100%;
    
}
.navbar-nav .item{
    height: 58px;
    display: flex;
    align-items:center ;
    margin-left: 0 !important;
    border-left: 08px solid transparent;
}
.navbar-nav .item a{
    color: black;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 150%;
}
.navbar-nav .item:hover{
    background-color: white;
    border-left-color: #7CB342;
}

 .dropdown-content .item{
    padding-left: 0;
}

.side-bar ul{
    padding-left: 0 !important;
    margin-left: 0 !important ;
}

/* CSS for sidebar 
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
} */
/* .dropdown-content .btn:active{
    font-size: 30px;
} 
.switches ul li:hover{
    padding-left: 0;
    text-decoration: none;
    background-color: white;
    border-left-color:  #7CB342;
    color: black;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
}
*/
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
/* important for sidebar */
.navbar{
    padding: 0 !important;
}

/* imporatnt headbar css */
.bar .btn{
    background-color: transparent !important;
    outline:transparent !important;
    border:transparent !important;
}
.bar .btn:active{
    outline: transparent !important;
    box-shadow: transparent !important;
}
/* CSS for sidebar important */
#sidebar-no-header{
    background: #FCFDFC;
    transition: 0.5s;
    width:60px;
    height:1000px;
    z-index:-1;
    position: fixed;
    top: 0;
    left:0;
    right: 0;
    margin-left: 0;
    transition: width 200ms;
    display: block !important;
    transition: width 300ms ease-in-out 0s;
    padding-top: 30px;
}
.text-black{
    color: black;
}
.toggle-active #sidebar-no-header {
    display: block !important;
    transition: width 300ms ease-in-out 0s;
    width: 270px;
}
.b-sidebar-outer {
    z-index: 0 !important;
}
</style>