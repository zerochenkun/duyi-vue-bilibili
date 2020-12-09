<template>
<div>
  <title-menu :isActive="activeId === 100" @active="activeId = 0">
    <template v-slot:title>
      <!-- 给title具名插槽传递内容 -->
      发现频道
    </template>
     <template v-slot:icon>
      >
    </template>
  </title-menu>
  <ChannelList  :activeId="activeId" @active="activeId = $event" />
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
      activeId: 100
    };
  }
};
</script>
