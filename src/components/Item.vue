<template>
  <div class="item" :class="{active:isActive}">
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
    }
};
</script>

<style scoped>
.item {
  cursor: pointer;
  width: 100%;
  height: 100%;
}
.item:hover {
  background: #f4f4f4;
}
.active {
  background: #e7e7e7;
}
</style>
