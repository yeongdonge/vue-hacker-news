<template>
  <div>
    <list-items></list-items>
  </div>
</template>

<script>
import ListItems from '../components/ListItem.vue'
export default {
  components: {
    ListItems,
  }
  // computed: {
  //   ...mapGetters({
  //     jobs: "fetchedJobs",
  //   }),
  // },
  // created() {
  //   this.$store.dispatch("FETCH_JOBS");
  // },
};
</script>

<style>
</style>