<template>
  <navbar :pages="pages" :active-page="activePage"></navbar>
  <!-- <page-viewer :page="pages[activePage]"></page-viewer> -->
  <create-page @page-created="pageCreated"> </create-page>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import PageViewer from "./components/PageViewer.vue";
import CreatePage from "./components/CreatePage.vue";

export default {
  components: {
    PageViewer,
    Navbar,
    CreatePage,
  },
  async created() {
    await this.getPages();

    this.$bus.$on("navbarLinkActivated", (index) => {
      this.activePage = index;
    });
  },
  data() {
    return {
      activePage: 0,
      pages: [],
    };
  },
  methods: {
    async getPages() {
      let res = await fetch("pages.json");
      let data = await res.json();

      this.pages = data;
    },
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
};
</script>
