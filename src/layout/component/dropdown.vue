<template>
<div>
  <div class="sub-item" @click="isOpen=!isOpen">
      <a href="">{{title}}</a>
  </div>
  <div class="sub-menu" v-if="isOpen">
      <div class="menu-items">
          <a :href="more.link">{{more.title}}</a>
      </div>
  </div>
  </div>
</template>

<script>
export default {
    name:'dashBoard',
    props: ['logout','more'],
    data() {
        return{
            isOpen:false
        }
    }
}
</script>

<style>

</style>