<template>
<div>
  <title-menu :isActive="selected" @activeItem="test">
    <template v-slot:title>
      <!-- 给title具名插槽传递内容 -->
      发现频道
    </template>
     <template v-slot:icon>
      >
    </template>
  </title-menu>
  <ChannelList  :data="{name:'动漫',channel_count:'222'}" />
</div>
</template>

<script>
import TitleMenu from "./components/TitleMenu.vue";
import ChannelList from "./components/ChannerList.vue"

export default {
  name: "App",
  components: {
    TitleMenu,
    ChannelList
  },
  data() {
    return {
      selected: false,
    };
  },
  methods: {
    test(e) {
      console.log("e: ", e);
    },
  },
};
</script>
