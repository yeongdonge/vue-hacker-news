<template>
  <div>
    <div v-for="i in askItems" v-bind:key="i.id"> {{ i.title }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import {} from '../store/index.js'
export default {
    computed: {
            ...mapGetters({
                askItems: 'fetchedAsk',
            })
        },
    created() {
        this.$store.dispatch('FETCH_ASK')
    },

}
</script>

<style>

</style>