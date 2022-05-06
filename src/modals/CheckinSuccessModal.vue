<template>
    <div class="modal-outline">
        <div class="modal-dialog ">
            <div class="modal-content border-0">
                <div class="modal-header border-0">
                    <a href="#">
                        <img style="height: 10px; " src="modal-backicon.png">
                    </a>
                    <router-link to="./checkin-pause">
                        <img style="height: 50px; " src="modal-crossicon.png" class=""
                                        data-bs-dismiss="modal" aria-label="Close">
                    </router-link>
                </div>

                <div class="modal-body">

                    <div>
                        <img style="height: 216px;" src="success.png">
                    </div>
                    <div style="font-size:36px;line-height: 45px; width: 100%; font-weight: 500; text-align: center;" id="">
                        <span>Checked In Successfully!</span>
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

<style>

</style>