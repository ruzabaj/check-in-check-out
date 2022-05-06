<template>
    <div class="modal-outline">
        <div class="modal-dialog">
            <div id="modalmain" class="modal-content border-0">
                <div class="modal-header border-0">
                    <a href="checkin.html">
                        <img style="height: 10px" src="modal-backicon.png"/>
                    </a>
                    <a href="#">
                        <img style="height: 50px" src="modal-crossicon.png" class="" data-bs-dismiss="modal" aria-label="Close" />
                    </a>
                </div>

                <div class="modal-body">
                    <div style="font-size: 36px; line-height: 45px; font-weight: 500; text-align: center;" id="">
                        <span>What are you going to do today?</span>
                    </div>
                    <div>
                        <form>
                        <textarea id="descriptionbox" type="text" placeholder="Description..." v-model="description" required></textarea>
                        </form>
                    </div>
                    
                </div>
                <div>
                    
                        <button type="button"  v-on:click="checkDesc()" class="div-modal-btn">
                            SUBMIT
                        </button>
                 
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
      if (document.getElementById("descriptionbox").value == null || document.getElementById("descriptionbox").value == "") {
        alert("blank textarea")
      }
      else{
           this.$router.push("/checkin-success")
      }
      

        }
      },
  components: {},
};
</script>

<style>
#descriptionbox {
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
textarea{
    outline-color: #7CB342;
}
#descriptionbox::placeholder {
  color: #b3b5c8;
}
</style>