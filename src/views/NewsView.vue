<template>
  <div>
    <div v-for="i in news" v-bind:key="i.id"> {{ i.title }} </div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js';
export default {
    data() {
        return {
            news: [],
        }
    },
    created() {
        fetchNewsList()
        .then(e => this.news = e.data)
        .catch(error => console.log(error));
    }


}
</script>

<style>

</style>