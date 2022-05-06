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
        <div style="font-size:48px; font-weight: 700; text-align: center;" id="timenow"></div>
        <div style="font-size: 36px;" class="d-flex justify-content-center">
                    
          <div id="day"></div>
          <div id="monthly"></div>
          <div id="monthly-num"></div>
        </div>
        <div style="display: grid; place-items: center; 
          padding: 36px 0 14px 0;">
        <div style="text-align: center; ">Checked in at</div>
        <div style="font-size:26px; background: -webkit-linear-gradient(#5F6C37, #7CB342); -webkit-background-clip: text;
          -webkit-text-fill-color: transparent; font-weight: 700; text-align: center;" id="pausetime"></div>
        </div>
        <div class="modal-body">
          <div>
            <a href="checkout.html"><button type="button"  action= "" class="resume-modal-btn ">RESUME</button></a>
          </div>
          <div>
            <button type="button" class="resume-checkout-modal-btn">CHECK OUT</button>
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