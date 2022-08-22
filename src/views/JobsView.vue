<template>
  <div>
    <list-items></list-items>
  </div>
</template>

<script>
import ListItems from "../components/ListItem.vue";
import ListMixin from "../mixins/ListMixin.js";
export default {
  components: {
    ListItems,
  },
  mixins: [ListMixin],
};
</script>

<style>
</style>