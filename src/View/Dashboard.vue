<template>
  <div>
      <main>
          <div class="container">
            <div class="cards d-flex justify-content-around">
                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <img class="diagram" src="dashboard-projects.svg">
                        <div style="padding-right: 20px;">
                            <div class="sub-title mt-1"  >Total Projects</div> 
                            <span class="numbers p-3" >{{projects.data.projects}}</span>
                        </div>
                    </div>
                </div>

                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                    <img class="stop-watch" src="MicrosoftTeams-image3">
                        <div style="padding-right: 10px;">
                            <div class="sub-title mt-1">Total Working Days</div>
                            <span class="numbers  p-3">{{projects.data.working_days}}</span>
                        </div>
                    </div>
                </div>
                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                    <img class="leave" src="dashboard-leave.svg"> 
                        <div style="padding-right: 10px;">
                            <div class=" sub-title mt-1"> Total Absent Days</div>
                            <span class="numbers  p-3" >{{projects.data.absent_days}}</span>  
                                                    <!--v-if="data.data" {{data.data['absent_days]}}  -->
                        </div>
                    </div>
                </div>

                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                    <img class="present" src="MicrosoftTeams-image2">
                        <div style="padding-right: 10px;">
                            <div class="sub-title mt-1"> Total Present Days</div>
                            <span class="numbers p-3" >{{projects.data.present_days}}</span>                           
                        </div>
                    </div>
                </div>
                
            </div>
            <!-- <div class="sub d-flex justify-content-around mt-3">
                    <img src="ontime.jpg" alt="ontime" class="ontime img-fluid" > 
                    <img src="overall.jpg" class="overall img-fluid" alt="overall performance"> 
                </div>
                <div class="average mt-3">
                    <img class="avg img-fluid" src="avg.jpg" alt="average chart here">
                </div> -->

            <!-- <div  class="shapes">
                <img  src="blue-image.jpg" alt="">
            </div> -->
            <p> <span aria-hidden="true">&#169;</span>2022 Copyright </p>
        </div>
        </main> 
  </div>
</template>

<script>
// import axios from 'axios'
//  import { mapGetters } from 'vuex'

export default {
    name: 'dashBoard',
    data(){
        return{
            projects:{}
            // projects:[],
            // errors:[],
            // results:[]
        }
        
    },
//      computed: {
//     ...mapGetters({
//       userdata: 'userdata',
//     })
//   }

// dispatch from the store
    created(){
        this.$store.dispatch('dashuser').then(res=>{
            this.projects=res
        })
     }
   
}
</script>

<style scoped>

main{
    background-color:  #F8F9FA;
    margin-top: 70px;
    padding: 4rem 0px;
    height: auto;
}
main p{
    margin: 15px 0px;
    /* text-align:  center !important; */
}
.cards{
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;
}  
.card-singles{
    width: 250px;
    height: 100px;
    background: #FFFFFF;
    box-shadow: 0px 3.5px 5.5px rgba(0, 0, 0, 0.02);
    border-radius: 15px;
   
}
.card-singles div:first-child{
    text-align: right;
}
.card-singles .sub-title{ 
    font-weight: bold;
    font-size: 16px;
    line-height: 24px;
    color: #B3B5C8; 
}
.card-singles .numbers{
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    line-height:39px;
    color: #163314;
}
.diagram{ 
    width: 96px;
    height: 96px;
    margin-left: -20px;
}
.stop-watch{
    width: 96px;
    height: 96px;
    margin-left: -40px;
}
.leave{
    width: 96px;
    height: 96px;
    margin-left: -40px;
}
.present{
    width: 96px;
    height: 96px;
    margin-left: -40px;
}
.average{
    display: flex;
    align-items: center;
    justify-content: center;
}
.avg{
    width: 95%;
    height: 500px;
}
.ontime, .overall{
    width: 600px;
    height: 500px;
}
</style>