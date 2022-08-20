<template>
    <div>
        <p v-for="i in jobs" v-bind:key="i.id">
            <a v-bind:href="i.url">
                {{ i.title }}
            </a>
            <small> - {{ i.time_ago}} by {{ i.domain }}</small>
        </p>
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