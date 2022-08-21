<template>
  <div>
    <ul class="news-list">
      <li v-for="i in news" v-bind:key="i.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ i.points }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <a v-bind:href="i.url">
            {{ i.title }}
            </a>
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
    <!-- <p v-for="i in news" v-bind:key="i.id">
      <a v-bind:href="i.url">
        {{ i.title }}
      </a>
      <small>
        - {{ i.time_ago }} by
        <router-link v-bind:to="`/user/${i.user}`"> {{ i.user }} </router-link>
      </small>
    </p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      news: "fetchedNews",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_NEWS");
  },
};
</script>

<style scoped>
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