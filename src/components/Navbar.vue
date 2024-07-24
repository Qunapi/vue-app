<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 flex-row">
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item ps-2 pe-2"
          :key="index"
          :page="page"
          :isActive="activePage === index"
          :index="index"
          @activated="$emit('activated')"
        ></navbar-link>
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
  props: ["pages", "activePage"],
  data() {
    return {
      theme: "light",
    };
  },

  created() {
    this.getThemeSetting();
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
