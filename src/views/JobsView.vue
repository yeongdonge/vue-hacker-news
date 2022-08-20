<template>
  <div>
    <div v-for="i in jobs" v-bind:key="i.id"> {{i.title}} </div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'

export default {
    data() {
        return {
            jobs: []
        }
    },
    created() {
        fetchJobsList()
        .then(e => this.jobs = e.data)
        .catch(error => console.log(error));
    }

}
</script>

<style>

</style>