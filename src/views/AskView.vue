<template>
    <div>
        <p v-for="i in askItems" v-bind:key="i.id">
            <router-link v-bind:to="`/item/${i.id}`"> {{i.title}} </router-link>
            <small> - {{ i.time_ago}} by {{ i.user }}</small>
        </p>
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