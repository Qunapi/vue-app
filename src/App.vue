<template>
  <navbar></navbar>
  <router-view></router-view>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./views/PageViewer.vue";

export default {
  components: {
    PageViewer,
    Navbar,
  },
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
