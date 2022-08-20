<template>
  <div>
    <p v-for="i in news" v-bind:key="i.id"> 
        <a v-bind:href="i.url">
        {{ i.title }}
        </a>
        <small> - {{ i.time_ago}} by {{ i.user }}</small>
    </p>
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