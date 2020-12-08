<template>
  <div class="channel">
    <Item :isActive="isActive" @activeItem="$emit('activeItem')">
      <div class="inner">
        <div class="left">
          <span class="channel-name">{{data.name}}</span>
        </div>
        <div class="right">
          <span class="channel-num">{{data.channel_count}}</span>
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
    data:{
        type:Object,
        default:() => ({})
    }
  },
  methods: {
    handleClick() {
      this.$emit("activeItem");
    },
  },
};
</script>

<style scoped>
.channel{
  width: 100%;
  height: 40px;
  line-height: 40px;
}
.inner {
  padding: 0 20px;
}
.channel-name{
    font-size: 14px;
    color:#212121;
}
.channel-num{
    font-size: 12px;
    color:#999;
    margin-left:8px;
    width:50%;
}
.channel-name,
.channel-name{
    float:left;
}
</style>
