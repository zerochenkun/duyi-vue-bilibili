<template>
  <div style="width: 100px; height: 600px; border: 1px solid red">
    <Item > asdf </Item>
    <!-- <Item :isActive="true"> asdf </Item> -->
  </div>
</template>

<script>
import Item from "./components/Item.vue";
export default {
  name: "App",
  components: {
    Item,
  },
};
</script>

<style></style>
