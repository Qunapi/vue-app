<template>
  <li>
    <a
      class="nav-link"
      :class="activeClasses"
      aria-current="page"
      :href="page.link.linkUrl"
      :title="`this link goes to ${page.link.linkText}`"
      @click.prevent="$bus.$emit('navbarLinkActivated', index)"
      >{{ page.link.linkText }}</a
    >
  </li>
</template>

<script>
export default {
  props: ["page", "index", "isActive"],
  computed: {
    activeClasses() {
      return {
        active: this.isActive,
        emphasize: this.isActive,
      };
    },
  },
};
</script>

<style scoped>
.emphasize {
  text-decoration: underline !important;
}
</style>
