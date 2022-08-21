<template>
  <div>
    <p>title : {{ itemInfo.title }}</p>
    <div>
      points : {{ itemInfo.content }}
      </div>
    <p>user : {{ itemInfo.user }}</p>
    <p>time : {{ itemInfo.time }}</p>
    <p>comments : {{ itemInfo.comments }}</p>
  </div>
</template>

<script>
export default {
 computed: {
  itemInfo() {
    return this.$store.state.item;
  }
 },
 created() {
    const itemId = this.$route.params.id;
    this.$store.dispatch('FETCH_ITEM', itemId);
  }
 }
</script>

<style>
</style>