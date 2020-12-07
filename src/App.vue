<template>
  <div>
    <div style="width: 100px; height: 30px; border: 1px solid red">
      <Item :isActive="curActive === 'cartoon'" @activeItem="curActive = 'cartoon'"> 全部 </Item>
      <!-- <Item :isActive="false"> asdf </Item> -->
    </div>
    <div style="width: 100px; height: 30px; border: 1px solid red">
      <Item :isActive="curActive === 'e-sports'" @activeItem="curActive = 'e-sports'">
        动漫</Item
      >
    </div>
  </div>
</template>

<script>
import Item from "./components/Item.vue";
export default {
  name: "App",
  components: {
    Item,
  },
  data() {
    return {
      curActive: "",
    };
  },
  methods: {
    doSomething(e) {
      console.log("e: ", e);
    },
  },
};
</script>

<style></style>
