<template>
  <div>
    <div v-for="i in this.$store.state.news" v-bind:key="i.id"> {{ i.title }} </div>
  </div>
</template>

<script>

export default {
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }


}
</script>

<style>

</style>