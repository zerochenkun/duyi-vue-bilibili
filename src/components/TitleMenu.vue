<template>
  <div class="title-menu">
    <Item :isActive="isActive" @activeItem="$emit('activeItem')">
      <div class="inner">
        <div class="left">
          <slot name="title"></slot>
        </div>
        <div class="right">
          <slot name="icon"></slot>
        </div>
      </div>
    </Item>
  </div>
</template>

<script>
import Item from "./Item.vue";
export default {
  components: {
    Item,
  },
  props: {
    isActive: {
      type: Boolean,
      // required:true,
      default: false,
    },
  },
  methods: {
    handleClick() {
      this.$emit("activeItem");
    },
  },
};
</script>

<style scoped>
.title-menu {
  width: 100%;
  height: 46px;
  line-height: 46px;
}
.inner {
  padding: 0 20px;
}
.left {
  float: left;
  color: #212121;
  font-weight: 500;
}
.right {
  float: right;
  font-size: 12px;
  color: #999;
}
</style>
