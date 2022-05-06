<template>
  <div class="modal-outline">
    <div class="modal-dialog ">
      <div class="modal-content border-0">
        <div class="modal-header border-0">
          <a href ="#">
            <img style="height: 10px; " src="modal-backicon.png">
          </a>
          <a href="#">
            <img style="height: 50px; " src="modal-crossicon.png"  class="" data-bs-dismiss="modal" aria-label="Close">
          </a>
        </div>

        <div class="modal-body">
          <div style="font-size:36px;line-height: 45px;  text-align: center; width: 288px;" id="">
            <span >What did you do today?</span>
                    
          </div>
        
          <div>
            <textarea id="description"  type="text" placeholder="Description..."  v-model="description" required></textarea>
          </div>
          <div>
           
              <button type="button" v-on:click="checkDesc()" class="div-modal-btn">SUBMIT</button>
           
          </div>
        </div>
                  
      </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
   return{
            description:'',
            
           
        }
},
methods:{
        checkDesc(){
      if (document.getElementById("description").value == null || document.getElementById("description").value == "") {
        alert("blank textarea")
      }
      else{
           this.$router.push("/checkout-success")
      }
      

        }
      },
}
</script>

<style>
textarea{
    outline-color: #7CB342;
}
#description{
 background-color: #ffffff;
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.05);
  border: none;
  border-radius: 15px;
  height: 224px;
  width: 400px;
  font-size: 14px;
  padding: 24px;
  margin: 30px 0;
  }
</style>