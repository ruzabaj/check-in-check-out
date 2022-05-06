<template>
    <div class="modal-outline">
        <div class="modal-dialog ">
            <div class="modal-content border-0">
                <div class="modal-header border-0">
                    <a href="#">
                        <img style="height: 10px; " src="modal-backicon.png">
                    </a>
                    <a href="#">
                        <img style="height: 50px; " src="modal-crossicon.png" class=""
                        data-bs-dismiss="modal" aria-label="Close">
                    </a>
                </div>
                    <div class="modal-body">

                        <div>
                            <img style="height: 216px;" src="success.png">
                        </div>
                        <div style="font-size:36px; line-height: 45px; width: 100%; font-weight: 500; text-align: center;"  id="">
                            <span>Checked Out Successfully!</span>

                        </div>
                        <div style="display: flex;flex-direction: row; gap: 45px; ">
                            <div>
                                <div style="text-align: center;" >
                                    <div><img style="height: 48px; margin: 10px 0;" src="modal-clock.png"></div>
                                    <div style="font-size:16px; font-weight: 800; " id="timenow"></div>
                                    <div style="font-size:14px;">Check In</div>

                                </div>
                            </div>
                            <div>
                               
                                <div style="text-align: center;">
                                    <div><img style="height: 48px; margin: 10px 0;" src="checkout-icon2.png"></div>
                                    <div style="font-size:16px; font-weight: 800;  " id="pausetime"></div>
                                    <div style="font-size:14px;">Check Out</div>

                                </div>
                            </div>
                            <div>
                               
                                <div style="text-align: center;">
                                    <div><img style="height: 48px; margin: 10px 0;" src="checkout-icon3.png"></div>
                                    <div style="font-size:16px; font-weight: 800; " id="">7H 6M</div>
                                    <div style="font-size:14px;">Working Hours</div>

                                </div>
                            </div>

                            
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