<template>
  <title-menu :isActive="selected" @activeItem="test">
    <template v-slot:title>
      <!-- 给title具名插槽传递内容 -->
      发现频道
    </template>
     <template v-slot:icon>
      >
    </template>
  </title-menu>
</template>

<script>
import TitleMenu from "./components/TitleMenu.vue";
export default {
  name: "App",
  components: {
    TitleMenu,
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
