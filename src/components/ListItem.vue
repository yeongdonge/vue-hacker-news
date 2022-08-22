<template>
  <div>
    <ul class="news-list">
      <li v-for="i, count in listItems" v-bind:key="i.id" class="post">
        <!-- 포인트 영역 -->
        <div class="points">
          {{ i.points || count + 1 }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <p class="news-title">
            <template v-if="i.domain">
              <a v-bind:href="i.url">
                {{ i.title }}
              </a>
            </template>
            <template v-else>
              <router-link v-bind:to="`/item/${i.id}`">
                {{ i.title }}
              </router-link>
            </template>
          </p>
          <small class="link-text">
            - {{ i.time_ago }} by
            <router-link
              v-if="i.user"
              class="link-text"
              v-bind:to="`/user/${i.user}`">
              {{ i.user }}
            </router-link>
            <a v-bind:href="i.url" v-else>
              {{ i.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      return this.$store.state.list;
    },
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