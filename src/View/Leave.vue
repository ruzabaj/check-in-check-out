<template>
<div>
    <div class="conatiner-fluid">
        <main>
            <div class="container">
                <div class="request">
                    <div class="make-leave">
                        <!-- <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" style="float: left;">
                            <span>Make a leave request.</span> 
                        <img src="Page.png" class="page">
                        </button>   -->
                        <b-button v-b-modal.modal-1>Make a leave request.</b-button>
                        <img src="Page.png" class="page">
                    <b-modal id="modal-1" title="BootstrapVue">
                    
                    <div class="container">  
                        <div class="modal-body">                      
                                                   
                                <div class="title">
                                    <h4>Apply For Leave</h4>
                                </div>
                            <label for="leave category" class="heading ps-3">Leave Category</label>
                            <div class="dropdown p-3"> 
                                <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2" style="color:transparent; width:100%"><span class="caret"></span>
                                    <b-dropdown-item>Sick leave</b-dropdown-item>
                                    <b-dropdown-item>Maternity Leave</b-dropdown-item>
                                    <b-dropdown-item>Paternity Leave</b-dropdown-item>
                                </b-dropdown>

                            </div>

                            <label for="leave type" class="heading ps-3">Leave Type</label>
                            <div class="dropdown p-3"> 
                                <b-dropdown id="dropdown-1" text="Dropdown Button" class="m-md-2" style="color:transparent; width:100%"><span class="caret"></span>
                                    <b-dropdown-item>Half Day</b-dropdown-item>
                                    <b-dropdown-item>Full Day</b-dropdown-item>
                                    <b-dropdown-item>Custom</b-dropdown-item>
                                </b-dropdown>

                            </div>
                            <div class="from">
                                <div class="heading">
                                    <label for="from">From</label>
                                </div>
                                <div class="date-picker">
                                    <Datepicker/>
                                </div>
                                
                                
                                <!-- <span class="input-group-text bg-white">
                                    <i class="fas fa-calendar-alt" id="icon"></i>
                                    </span> -->
                            </div>
    
                            <div class="to">
                                <div class="heading">
                                    <label for="to">To</label>
                                </div>
                                <div class="date-picker">
                                    <Datepicker/>
                                </div>
                                <!-- <span class="input-group-text bg-white">
                                    <i class="fas fa-calendar-alt" id="icon"></i>
                                    </span> -->
                            </div>
                            <div class="row ">
                                <div class="heading">
                                    <label for="subject">Reason</label>
                                </div>
                                <div class="reason">
                                    <textarea id="reason" class="reasons" name="reason" placeholder="Write something.."
                                        style="height:100px; width: 100%;"></textarea>
                                </div>
                            </div>
                            <div class="buttons d-flex">
                                <button class="apply me-2">Apply</button>
                                <button class="cancel ms-2">Cancel</button>
                            </div>
                        </div>
                    </div>

                    </b-modal>              
                    </div> 
                </div>     
                
                <div class="leave">
                    <div class="on-leave">
                        <img class="onleave" src="Leave.png">
                    </div>
                </div>
            
                <div class="leave-table">
                    <div class="cards">
                        <div class="leave-days">
                            <h1>My Leave Days</h1>
                            <div class="leave-types">
                                <table class="table-design">
                                    <thead>
                                        <tr class="text_gray p-3">
                                            <td>Date</td>
                                            <td>Leave Type</td>
                                            <td>Reason</td>
                                        </tr>
                                    </thead>
    
                                    <tbody>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <div id="days"><td ><span class="full-day">Full Day</span></td></div>
                                            <td>Severe cold and fever followed by....</td>
                                        </tr>
                                        <tr class="reasons" style="background: #F2F4F3;">
                                            <td>14/06/21</td>
                                            <td><span class="half-day">Half Day</span></td>
                                            <td>Official Work for......</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td> <span class="custom-day">Custom</span></td>
                                            <td>Family Event have to attend for 5 days</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td><span class="full-day">Full Day</span></td>
                                            <td>Severe cold and fever followed by....</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td><span class="full-day">Full Day</span></td>
                                            <td>Official Work for......</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td><span class="half-day">Half Day</span></td>
                                            <td>Family Event have to attend for 5 days</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td> <span class="custom-day">Custom</span></td>
                                            <td>Severe cold and fever followed by....</td>
                                        </tr>
                                        <tr class="reasons" style="background: #F2F4F3;">
                                            <td>14/06/21</td>
                                            <td><span class="half-day">Half Day</span></td>
                                            <td>Official Work for.....</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td ><span class="full-day">Full Day</span></td>
                                            <td>Family Event have to attend for 5 days</td>
                                        </tr>
                                        <tr class="reasons">
                                            <td>14/06/21</td>
                                            <td> <span class="custom-day">Custom</span></td>
                                            <td>Family Event have to attend for 5 days</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>        
                </div>
                <div class="top-pagination">
                    <div class="pagination">
                         <nav aria-label="Page_navigation">
                            <ul>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                  <span aria-hidden="true" style="color: green;">&laquo;</span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true" style="color: green;"><i class="fa fa-chevron-left" aria-hidden="true"></i></span>
                                </a>
                            </li>
                              <li class="page-item"><a class="page-link" href="#">1</a></li>
                              <li class="page-item"><a class="page-link" href="#">2</a></li>
                              <li class="page-item"><a class="page-link" href="#">3</a></li>
                              <li class="page-item"><a class="page-link" href="#">4</a></li>
                              <li class="page-item"><a class="page-link" href="#">5</a></li>
                              <li class="page-item"><a class="page-link" href="#">6</a></li>
                              <li class="page-item"><a class="page-link" href="#">7</a></li>
                              <li class="page-item"><a class="page-link"  href="#">8</a></li>
                              <li class="page-item"><a class="page-link" href="#">9</a></li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Previous">
                                    <span aria-hidden="true" style="color: green;"><i class="fa fa-chevron-right" aria-hidden="true"></i></span>
                                </a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#" aria-label="Next">
                                  <span aria-hidden="true" style="color: green;">&raquo;</span>
                                </a>
                            </li>
                            </ul>
                          </nav>          
                    </div>
                    <div class="footer">
                        <div class="copyright">
                            <p><span aria-hidden="true">&#169;</span> 2022 Copyright Susankya Tech</p> 
                        </div>
                    </div> 
                </div>
            </div>           
        </main>
    </div>
</div>
</template>

<script>
import Datepicker from 'vuejs-datepicker';
export default {
    name:'leaveS',
     components: {
    Datepicker
  }
}
</script>

<style scoped>

main{
    background-color:  #F8F9FA;
    margin-top: 0px;
    padding: 4rem 0px;
    margin-top: 70px;
    width: 100%;
    height: 170vh;   
}
/* Make a leave request */
.make-leave .btn{
    Width :300px;
    Height :54px;
    background: linear-gradient(270.25deg, #5F6C37 -1.9%, #7CB342 99.74%);
    box-shadow: 0px 3px 5px #9CB087;
    border-radius: 15px;
}
.make-leave span{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.0048em;
    color: #FFFFFF;
}
.make-leave img{
    margin-top: -30px;
}
.btn-primary{
    border-color: transparent;
}
.btn p{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.0048em;
    color: #FFFFFF;
    text-align: center;
}

/* Image of onleave (center the image)*/
.request{
    margin-top: 0%;
}
.leave{
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
}
.on-leave{
    margin-top: 25px;
}
.onleave{  
    max-width: 100%;
    max-height: 100%;
    margin: auto;
    display: block;
}

.name{
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #5E5873;
}

/* for Table */
.leave-table{
    padding-top: 32px;
    display: flex;
    justify-content:center;
    align-items: center;
}
.cards{
    width: 1485px;
    height:486px;
    background: #FFFFFF;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    border-radius: 15px;
}
.leave-days{
    padding: 30px 0px 10px 53px;
}

.leave-types{
    height: 400px;
    overflow-y:scroll;
    scrollbar-color: green;
    scrollbar-width: thin;    
    /* background-color: #5E5873; */
}

.leave-days h1{
    /* margin: 30px 20px; */
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height: 45px;
    color: #2D3748;
}
tbody tr{
    font-weight: 500;
    font-size: 16px;
    line-height:  22px;
    color: #2D3748;
    border: 1px solid #E2E8F0;
    border-right: none;
    border-left: 10px solid transparent;
}
tbody tr:hover{
    width: 10px;
    border-left-color: #7CB342 ;
}
/* For horizontal line under table */
table thead td {
    width: 395px;
    height: 64px;
    border-bottom: 2px solid #E2E8F0;
}
.text_gray{
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #A0AEC0;
}
/* Height of the reason table */
tbody .reasons{
    
    height: 64px;
}

.full-day{
    width: 79px;
    height:35px;
    padding: 4px 9px;
    color: #037D98;
    background: #C0DCF7;
    border-radius: 15px;
}
.half-day{
    width: 79px;
    height:35px;
    padding: 4px 9px;
    color:  #E7B550;
    background: rgba(253, 212, 131, 0.35);
    border-radius: 15px;
}
.custom-day{
    width: 79px;
    height:35px;
    padding: 4px 9px;
    color:#FA4E4E;
    background: rgba(250, 78, 78, 0.15);
    border-radius: 15px;
}
/* For Pagination */
.top-pagination{
    display:flex ;
    flex-direction: column;
    margin-top: 7px;
}
.pagination{
    margin-top: 26px;
    display: block;
    /* float: right; */
    border: none !important;
    border-radius: 20px;
    outline: none !important;
    list-style: none;
}
.trial-pagination a{
    padding: 10px;
}
.pagination a{
    float: right;
    border: none !important;
    outline: none !important;
    text-decoration: none;
}
.pagination a:hover{
    background-color: #E2E8F0;
}
.pagination a:active{
    background: #7CB342;
    border-radius: 29px;
    color: white;
}


/* Footer part */
.footer{
    margin-top: 7px;   
    
}
.copyright{
    font-weight: 500;
    font-size: 16px;
    line-height:24px;
    color: #B3B5C8;
    text-align: center;
}

/* Make a leave request */
.request{
  margin-top: 05%;
}
.make-leave .btn{
    Width :300px;
    Height :54px;
    background: linear-gradient(270.25deg, #5F6C37 -1.9%, #7CB342 99.74%);
    box-shadow: 0px 3px 5px #9CB087;
    border-radius: 15px;
}
.make-leave span{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.0048em;
    color: #FFFFFF;
}
.make-leave img{
    margin-top: -30px;
}
.btn p{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.0048em;
    color: #FFFFFF;
    text-align: center;
}

</style>

<style>
.element.style{
    padding: 16px 0 0 0;
}
.pagination{
    margin-top: 02%;
    margin-right: 30px;
    float: right;
    border: none;
    outline: none;
}
.pagination ul{
    list-style: none;
}
.pagination a{
    float: right;
}
.pagination a:hover{
    background-color: #E2E8F0;
}
.pagination a:active{
    background: #7CB342;
    border-radius: 29px;
    color: white;
}

/* Footer part */
.footer{
    margin-top: 03%;
}
main p{
    font-weight: 500;
    font-size: 16px;
    line-height:24px;
    color: #B3B5C8;
    text-align: center;
}
</style>

<style>
#dropdown-1__BV_toggle_, .date-picker{
    width: 100%;
    height: 40px;
    background: transparent !important;
    background: #FFFFFF;
    border: 0.75px solid #7CB342;
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
}
#dropdown-1__BV_toggle_ .dropdown-menu{
    width: 100%;
}
.modal-header, .modal-footer{
    display: none !important;
}

.apply{
    width: 178.15px;
    height: 56px;
    background: linear-gradient(270.25deg, #5F6C37 -1.9%, #7CB342 99.74%);
    box-shadow: 0px 3px 5px #9CB087;
    border-radius: 10px;
    color: #FFFFFF;
}
.cancel{
    background: #FFFFFF;
    box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    width: 178px;
    height: 56spx;
    color:  #7CB342;
}
</style>