<template>
  <div>
    <ul class="jobs-list">
      <li v-for="(i, count) in jobs" v-bind:key="i.id" class="post">
        <!-- 번호 -->
        <div class="points">
          {{ count + 1 }}
        </div>
        <!-- 기타 정보 -->
        <div>
          <p class="jobs-title">
            <a v-bind:href="i.url">
              {{ i.title }}
            </a>
          </p>

          <small class="link-text">
            - {{ i.time_ago }} by
            <a class="link-text" v-bind:href="`${i.url}`">
              {{ i.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
    <!-- <p v-for="i in jobs" v-bind:key="i.id">
            <a v-bind:href="i.url">
                {{ i.title }}
            </a>
            <small> - {{ i.time_ago}} by {{ i.domain }}</small>
        </p> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      jobs: "fetchedJobs",
    }),
  },
  created() {
    this.$store.dispatch("FETCH_JOBS");
  },
};
</script>

<style>
.jobs-list {
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
.jobs-title {
    margin: 0;
}
.link-text {
    color: #828282;
}
</style>