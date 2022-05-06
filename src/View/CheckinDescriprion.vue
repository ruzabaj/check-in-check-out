<template>
    <div class="container-fluid">
        <main>
          <!-- <p>Insert Check In page with clock plus router access of check in left. fix dashboard issues</p>  class=" col-sm-9 "-->
          <div id="rightcontents">
            <div class="bgimg">
                        
                <img src="bg.png">

                <div class="div-bg-contents">
                <span>A little bit of motivation for you to start your work!</span>
                    <!-- <p>“nsdcjnwd csdcvndksov snspcmdcodc sdklcmsdpoc csdcmsdoc vskmsdoc kvlsdvmsdlcm csldcsd;sdvcsdv.”</p> -->
                </div>
            </div>

            <CheckinDescriptionModal/>
            
            <!-- bg circular shapes -->
            <div  class="shapes">
                <img  src="1.png" alt="">
            </div>
        
            <!-- bg circular shapes end -->
            <div class="footer-content">
                <span>&copy; 2022 Copyright at Susankya Tech</span>
            </div>
  ``</div>
      </main>
        
  
    </div>
   
    
</template>

<script>

import CheckinDescriptionModal from '../modals/CheckinDescriptionModal.vue'
export default {
    name:"CheckinPage",
    components:{
        
        CheckinDescriptionModal    
    }
}
</script>

<style>

</style>