<template>
    <div>
        <ul class="news-list">
            <li v-for="i in askItems" v-bind:key="i.id" class="post">
            <!-- 포인트 영역 -->
            <div class="points">
                {{ i.points }}
            </div>
            <!-- 기타 정보 영역 -->
            <div>
                <p class="news-title">
                    <router-link v-bind:to="`/item/${i.id}`">
                    {{ i.title }}
                    </router-link>
                </p>
                <small class="link-text">
                    - {{ i.time_ago }} by
                    <router-link class="link-text" v-bind:to="`/user/${i.user}`">
                    {{ i.user }}
                    </router-link>
                </small>
            </div>
            </li>
        </ul>
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
.news-list {
    margin: 0;
    padding: 0;
}
.post {
    list-style: none;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #eee;
}
.points {
    width: 80px;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #42b883;
}
.news-title {
    margin: 0;
}
.link-text {
    color: #828282;
}

</style>