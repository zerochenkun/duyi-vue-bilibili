<template>
  <div class="channel-list">
    <div class="item" v-for="item in channels" :key="item.id">
      <Channel @active="$emit('active',item.id)"
                :isActive="item.id === activeId" 
                :data="item" />
    </div>
  </div>
</template>

<script>
import Channel from "./Channel.vue";
import ChannelServe from "../services/channelServe.js";

export default {
  components: {
    Channel,
  },
  props: ["activeId"],
  data() {
    return {
      channels: [],
    };
  },
  async created() {
    console.log("created");
      this.channels = await ChannelServe.getChannels()
    // let datas = await ChannelServe.getChannels();
    // this.channels = datas.filter((item) => item.name !== "热门");
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
