<template>
   <div style="font-size:48px; font-weight: 800; text-align: center;" >{{dateTime.hours}} : {{dateTime.minutes}} {{dateTime.am_pm}}</div>
</template>

<script>
const current = new Date();
export default {
  data(){
    return{
      dateTime:{
        hours: current.getHours()> 12 ? current.getHours() - 12 : current.getHours(),
        minutes: current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes(),
        am_pm: current.getHours() >= 12 ? "PM" : "AM",
        
      },
      timer:undefined,
    }
  },
  methods: {
    
    currentTime(){
      const current = new Date();
      this.dateTime={
      hours: current.getHours() > 12 ? current.getHours() - 12 : current.getHours(),
      minutes:  current.getMinutes() < 10 ? "0" + current.getMinutes() : current.getMinutes(),
      am_pm: current.getHours() >= 12 ? "PM" : "AM",
     
      
      }
    },
   
 
  },
 
  beforeMount() {
    this.timer = setInterval(this.currentTime, 1000);
  },
  beforeUnmount() {
    clearInterval(this.timer);
  },

}
</script>

<style>

</style>