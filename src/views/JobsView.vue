<template>
  <div>
    <div v-for="i in jobs" v-bind:key="i.id"> {{i.title}} </div>
  </div>
</template>

<script>
import { mapGetters} from 'vuex';
export default {
    computed: {
        ...mapGetters({
            jobs: 'fetchedJobs',
        })
    },
    created() {
        this.$store.dispatch('FETCH_JOBS')
    }

}
</script>

<style>

</style>