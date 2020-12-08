<template>
  <div class="item" :class="{active:isActive}" @click="handleClick">
    <slot />
  </div>
</template>

<script>
export default {
    props:{
        isActive:{
            type:Boolean,
            // required:true,
            default:false
        }
    },
    methods:{
      handleClick(){
        this.$emit("activeItem")
      }
    }
};
</script>

<style scoped>
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
  transition:all .3s;
}
.item:hover {
  background: #f4f4f4;
}
.active {
  background: #e7e7e7;
}
</style>
