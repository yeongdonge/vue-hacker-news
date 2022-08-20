<template>
  <div>
    <div v-for="i in asks" v-bind:key="i.id"> {{ i.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js';
export default {
    data() {
        return {
            asks: []
        }
    },
    created() {
        fetchAskList()
        .then(e => this.asks = e.data)
        .catch(error => console.log(error))
    },

}
</script>

<style>

</style>