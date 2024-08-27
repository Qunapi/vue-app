<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
        <navbar-link v-for="(page, index) in publishedPages" :page="page" :index="index"></navbar-link>
        <li>
          <router-link aria-current="page" :to="`/pages`" class="nav-link" active-class="active"> Pages</router-link>
        </li>
      </ul>
      <form class="d-flex">
        <button class="btn btn-primary" @click.prevent="changeTheme()">Toggle Navbar</button>
      </form>
    </div>
  </nav>
</template>

<script>
import NavbarLink from "./NavbarLink.vue";

export default {
  components: { NavbarLink },
  inject: ["$pages", "$bus"],
  data() {
    return {
      theme: "light",
    };
  },

  created() {
    this.getThemeSetting();

    this.pages = this.$pages.getAllPages();

    this.$bus.$on("page-updated", () => {
      this.pages = [...this.$pages.getAllPages()];
    });
  },
  computed: {
    publishedPages() {
      return this.pages.filter((e) => e.published);
    },
  },
  methods: {
    changeTheme() {
      let theme = "light";
      if (this.theme === "light") {
        theme = "dark";
      }

      this.theme = theme;
      this.storeThemeSetting();
    },
    storeThemeSetting() {
      localStorage.setItem("theme", this.theme);
    },
    getThemeSetting() {
      let theme = localStorage.getItem("theme");

      if (theme) {
        this.theme = theme;
      }
    },
  },
};
</script>
