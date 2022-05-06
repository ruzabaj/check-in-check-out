<template>
  <div>
      <main>
          <!-- <p>Insert Check In page with clock plus router access of check in left. fix dashboard issues</p>  class=" col-sm-9 "-->
          <div id="rightcontents">
            <div class="bgimg">
                        
                <img src="blue.jpg">

                <div class="div-bg-contents">
                <span>A little bit of motivation for you to start your work!</span>
                    <!-- <p>“nsdcjnwd csdcvndksov snspcmdcodc sdklcmsdpoc csdcmsdoc vskmsdoc kvlsdvmsdlcm csldcsd;sdvcsdv.”</p> -->
                </div>
            </div>

            <CheckinModal/>
            
            <!-- bg circular shapes -->
            <div  class="shapes">
                <img  src="1.png" alt="">
            </div>
        
            <!-- bg circular shapes end -->
            <div class="footer-content">
                <span>&copy; 2022 Copyright</span>
            </div>
  ``</div>
      </main>
  </div>
</template>

<script>
import CheckinModal from '../modals/CheckinModal.vue'
// import '../assets/css/buttonsAndShapes.css';  


export default {
    name:'testC',
    components: {
        CheckinModal
    }
}
</script>

<style scoped>
@import '../assets/css/buttonsAndShapes.css'; 
main{
    margin-top: 05%;
}
/* .shapes{
    position: relative;
    right: 113px;
    top: 24px;
} */
.shapes{
    z-index: -1 !important;
}
.shapes img{
  width: 100%;
}

#rightcontents{
   padding: 0;
}

.bgimg{
   display: flex;
    justify-content: center;
}

.bgimg img{
   width: 100%;
   height: 400px;
   /* position: relative; */
}
.div-bg-contents{
   position: absolute;
   top: 154px;
   text-align: center;
   flex-direction: column;
   display: flex;
   width: 70%;
   align-items: center;
   color: #FFFFFF;
  }
 .div-bg-contents span{
    font-size: 40px;
    font-weight: 700;
    
 }
 .div-bg-contents p{
    width: 74%;
    font-size: 18px;
 }
 .footer-content{

   text-align: center;
   color: #B3B5C8;
   
}

</style>