<template>
  <!-- modal -->
  <div class="modal-outline">   
    <div class="modal-dialog ">
      <div class="modal-content border-0">
        <div  class="modal-header border-0">
          <a href ="#">
          <img style="height: 10px; " src="modal-backicon.png">
          </a>
          <a href="#">
          <img style="height: 50px; " src="modal-crossicon.png"  class="" data-bs-dismiss="modal" aria-label="Close">
          </a>
        </div>
        
        <ModalsTime/>

          <div style="font-size: 36px;" class="d-flex justify-content-center">
                     
            <div  id="day"></div>
            <div id="monthly"></div>
            <div id="monthly-num"></div>
          </div>
          <div class="modal-body modal-body-checkin">
            <div class="center-align">
              <canvas  id="canvas" width="200" height="200" style="background-color:transparent; height: 227px;
              width: 227px;"></canvas>
                       
            </div>
            <div>
              <router-link to="./checkin-description"> <button type="button"  class="div-modal-btn" id="checkin" >Check-in</button></router-link>
            </div>
          </div>
      </div>
    </div>
              
    <!-- modal end -->
      
      
  </div>
</template>

<script>
import ModalsTime from './ModalsTime'
export default {
  components:{
    ModalsTime,
  }
}
</script>

<style >
.center-align{

}
</style>