
<template>
    <div class="modal-outline">
        <div class="modal-dialog ">
            <div class="modal-content border-0">
                <div class="modal-header border-0">
                    <router-link to="./leave">
                        <img style="height: 10px; " src="modal-backicon.png">
                    </router-link>
                    <router-link to="./">
                        <img style="height: 50px; " src="modal-crossicon.png" class=""
                                        data-bs-dismiss="modal" aria-label="Close">
                    </router-link>
                </div>

                <div class="modal-body">

                    <div class="sucess-img">
                        <img style="height: 216px;" src="success.png">
                    </div>
                    <div style="font-size:36px; line-height: 45px; width: 100%; font-weight: 500; text-align: center;" id="">
                        <span>Your leave request has been sent successfully!</span>
                    </div>
                </div>



            </div>
        </div>
    </div>
</template>

<script>
export default {
   

  
}
</script>

<style scoped>
.modal-outline{
    top: 100px !important;
}
.success-img img{
    display: flex;
    justify-content: center;
}
</style>