<template>
  <div>
    <list-items></list-items>
  </div>
</template>

<script>
import ListItems from "../components/ListItem.vue";
import bus from "../utils/bus.js";
export default {
  components: {
    ListItems,
  },
  created() {
    bus.$emit("start:spinner");
    setTimeout(() => {
      this.$store
        .dispatch("FETCH_JOBS")
        .then(() => {
          console.log("fetched");
          bus.$emit("end:spinner");
        })
        .catch((error) => console.log(error));
    }, 3000);
  },
};
</script>

<style>
</style>