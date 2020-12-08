<template>
  <div class="channel-list">
    <div class="item" v-for="item in channels" :key="item.id">
      <Channel :data="item"/>
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";

export default {
  components: {
    Channel,
  },
  data() {
    return {
      channels: [
        { id: 100, name: "热门", channel_count: "99" },
        { id: 0, name: "全部", channel_count: "2701" },
      ],
    };
  },
};
</script>

<style scoped>
.channel-list {
  overflow: hidden;
}
.item {
  float: left;
  width: 50%;
}
</style>
