<template>
<div>
    <div class="conatiner-fluid">
        <main>
            <div class="container">
                <div class="request">
                    <div class="make-leave">
                        <b-button v-b-modal.modal-1 class="leave-request">Make a leave request</b-button>
                        <img src="Page.png" class="page">

                    <b-modal id="modal-1" title="BootstrapVue">
                        <div class="container">  
                            <div class="modal-header border-0">
                                <router-link to="./leave">
                                    <img style="height: 10px" src="modal-backicon.png"/>
                                </router-link>
                                <a href="#">
                                    <img style="height: 50px" src="modal-crossicon.png" class="" data-bs-dismiss="modal" aria-label="Close" />
                                </a>
                            </div>
                        
                        <div class="modal-body">                      
                            <h4>Apply For Leave</h4>                                                 
                                <div id="leave-category">
                                    <label for="leave category" id="leave-category" class="heading">Leave Category</label>
                                    <div>
                                        <select id="selected" v-model="answer">
                                            <option value="0"></option>
                                            <option value="1">Paternity Leave</option>
                                            <option value="2">Sick leave</option>
                                            <option value="3">Maternity Leave</option>
                                            <option value="4">Bereavement Leave</option>
                                            <option value="5">Personal Leave</option>
                                            <option value="6">Annual Leave</option>
                                            <option value="7">Compensatory Leave</option>
                                            <option value="8">Emergency Leave</option>
                                            <option value="8">Compulsory Leave</option>
                                        </select>
                                    </div>
                                </div>
                                <div id="leave-type">
                                    <label for="leave type" id="leave-type" class="heading">Leave Type</label>
                                    <div>
                                        <select id="selected" v-model="answer">
                                        <option value="0"></option>
                                        <option value="1">Half Day</option>
                                        <option value="2">Full Day</option>
                                        <option value="3">Custom</option>
                                    </select>
                                    </div>
                                </div>
                       
                            <div id="from">
                                <div class="heading">
                                    <label for="from" class="heading">From</label>
                                </div>
                                <div class="picker">
                                    <div class="date-picker d-flex" id="selected">
                                    <Datepicker/>
                                    <span><img src="calendar.svg" id="calendar"></span>
                                </div>
                                </div>
                            </div>
    
                            <div id="to">
                                <div class="heading" >
                                    <label for="to" class="heading">To</label>
                                </div>
                                <div class="date-picker d-flex" id="selected" >
                                    <Datepicker/>
                                    <span><img src="calendar.svg" id="calendar"></span>
                                </div>
                            </div>

                            <div id="reason-heading">
                                <div class="heading">
                                    <label for="subject" class="heading">Reason</label>
                                </div>
                                <div class="reason">
                                    <textarea iid="selected" class="reason-placeholder" name="reason" placeholder="Write something.." v-model="answer"></textarea>
                                </div>
                            </div>

                            <div class="buttons d-flex">
                                <button type="submit" class="apply" @click="apply()" >Apply</button>
                                <button  type="reset" class="cancel ">Cancel</button>
                            </div>
                        </div>
                    </div>

                    </b-modal>              
                    </div> 
                </div>     
                
                <!-- <div class="leave">
                    <div class="on-leave">
                        <img class="onleave" src="Leave.png">
                    </div>
                </div> -->
            
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
    
                                    <tbody >
                                        <!-- v-for="(applicants,index) in application" :key="index" -->
                                        <tr class="reasons"  >
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
                                        <!-- <tr class="reasons">
                                            <td>{{applicants.to_date}}</td>
                                            <td>{{applicants.from_date}}</td>
                                            <td><span class="full-day">{{applicants.leave_category}}</span></td>
                                            <td>{{applicants.leave_message}}</td>
                                        </tr> -->
                                        
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
                              <li class="page-item"><a class="page-link" href="#">8</a></li>
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
                </div>
                <!-- <div class="footer">
                        <div class="copyright">
                            <p><span aria-hidden="true">&#169;</span> 2022 Copyright </p> 
                        </div>
                </div>  -->
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
  },
  data() {
      return{
        answer: '',
        application:'',
        formdata:[]
      }
  },
  methods: {
    //   reason: {}
    apply(){
 
        if(document.getElementById("selected").value== null || document.getElementById("selected").value==""){
            alert("Please select all the options and try again")
        }
        console.log(this.formdata) 
    }
  },
  created(){
      this.$store.dispatch('leaveform', this.formdata)
      ,
        this.$store.dispatch('leaveapply').then(res=>{
            this.application=res
        })

  }
//   computed:{
//       apply(){
//           if(document.getElementById(this.reason))
//       }
//   }
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
    background: linear-gradient(270.25deg, #100051 -1.9%, #9942c5 99.74%);
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
    margin-top: -25px;
    margin-left: -72px;
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
    scrollbar-color: rgb(30, 30, 133);
    scrollbar-width: thin;    
    /* background-color: #5E5873; */
}
.make-leave .btn[data-v-1e58e8e6] {
    font-size: 18px;
    font-weight: 500;
}
input [type=text]{
    background: none !important;
    width: 100%;
}
.date-picker #span{
    height: 28px;
    margin-left:-26px;
    z-index:100;
}
.picker{
    background: none !important;
    width: 100%;
}
/* button{
    width: 385px !important;
} */

#dropdown-1__BV_toggle_ .dropdown-menu{
    width: 800px !important;
}
.enter{
    margin-top: -10px;
    margin-top: -125px;;
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
    border-left-color: rgb(30, 30, 133);
    background-color: whitesmoke;
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
    background: rgb(30, 30, 133);
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
    background: linear-gradient(270.25deg, #4919b7 -1.9%, #9542b3 99.74%);
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

.btn p{
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    letter-spacing: 0.0048em;
    color: #FFFFFF;
    text-align: center;
}
.modal-body{
    top: -45px;
}
/* heeading name for each input and button */
/* .modal-body label{
    padding: 10px;
} */
</style>

<style>
/* .element.style{
    padding: 16px 0 0 0;
} */
.modal-dialog .modal-content{
    max-height: 840px !important;
    border-radius: 10px;
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
    background: rgb(30, 30, 133);
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
    text-align: center !important;
}
</style>

<style>
.reason textarea{
    height: 144px;
    width: 400px;
    background: #FFFFFF;
    border: 0.75px solid #F4F4F4;
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
}
select{
    width: 400px;
    height: 40px;
    border: 0.75px solid rgb(30, 30, 133);
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
}
.modal-header{
        border-bottom: 0px !important;
}
.modal-header button{
    display: none !important;
    border: none !important;
    background-color: transparent;
} 
.modal-header h5, .modal-footer{
    display: none !important;
}
 /* apply and cancel are button of leave modal */
.buttons .apply{
    width: 165.15px;
    height: 50px;
    margin: 10px;
    background: linear-gradient(270.25deg, #280055 -1.9%, #793fdd 99.74%);
    box-shadow: 0px 3px 5px #9CB087;
    border-radius: 10px;
    color: #FFFFFF;
}
.buttons .cancel{
    background: #FFFFFF;
    box-shadow: 0px 7px 23px rgba(0, 0, 0, 0.05);
    border-radius: 15px;
    width: 165px;
    height: 50px;
    margin: 10px;
    color:  rgb(30, 30, 133);
}
</style>

<style>
#leave-type, #leave-category, #to, #from, #reason-heading, h4{
    margin: 1px 0px;
    padding: 10px;
}

/* datepicker css */
.vdp-datepicker input{
    width:391px !important;
    height: 40px;
    z-index: -1;
    width: 447px;
    border: 0.75px solid rgb(30, 30, 133);
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
}
.vdp-datepicker__calendar{
    width: 395px !important;
}
/* for button in the modal */
#dropdown-1{
    width: 387px;
    height: 40px;
    background: transparent !important;
    background: #FFFFFF;
    border: 0.75px solid rgb(30, 30, 133);
    box-shadow: 0px 12px 25px rgba(114, 114, 114, 0.05);
    border-radius: 8px;
}
.btn .dropdown-menu{
    width: 350px !important;
}
.btn-secondary{
    background-color: transparent !important;;
}
.btn-secondary:hover{
    background-color: transparent !important;
    color: white;
}
#dropdown-1__BV_toggle_ .dropdown-menu{
    width: 100%;
}
</style>