<template>
  <div>
      <main>
            <div class="cards d-flex justify-content-around">
                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <img class="diagram" src="dashboard-projects.svg">
                        <div style="padding-right: 20px;">
                            <div class="sub-title mt-1">Total Projects</div> 
                            <span class="numbers p-3">9</span>
                        </div>
                    </div>
                </div>

                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                    <img class="stop-watch" src="MicrosoftTeams-image3">
                        <div style="padding-right: 10px;">
                            <div class="sub-title mt-1">Total Working Hours</div>
                            <span class="numbers  p-3">486</span>
                        </div>
                    </div>
                </div>
                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                    <img class="leave" src="dashboard-leave.svg"> 
                        <div style="padding-right: 10px;">
                            <div class=" sub-title mt-1"> Total Leave Days</div>
                            <span class="numbers  p-3">5</span>                          
                        </div>
                    </div>
                </div>

                <div class="card-singles">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                    <img class="present" src="MicrosoftTeams-image2">
                        <div style="padding-right: 10px;">
                            <span class="sub-title mt-1"> Total Present Days</span>
                            <span class="numbers p-3">16</span>                           
                        </div>
                    </div>
                </div>
            </div>
            <div class="images">
                <div class="sub d-flex justify-content-around">
                    <img src="ontime.jpg" alt="ontime" class="ontime img-fluid">
                    <img src="Second Card.jpg" class="second img-fluid"> 
                </div>
                <div class="average">
                    <img class="avg img-fluid" src="avg.jpg">
                </div>
                
                <p>2022 Copyright at Susankya Tech</p>
            </div>
        </main> 
  </div>
</template>

<script>

export default {
    name: 'dashBoard',
    
}
</script>

<style scoped>

main{
    background-color:  #F8F9FA;
    margin-top: 70px;
    padding: 4rem 0px;
    height: 200%;
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
</style>