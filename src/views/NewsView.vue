<template>
  <div>
    <div v-for="i in news" v-bind:key="i.id"> {{ i.title }} </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters({
            news: 'fetchedNews',
        })
    },  
    created() {
        this.$store.dispatch('FETCH_NEWS');
    }


}
</script>

<style>

</style>