<template>
  <li>
    <router-link
      class="nav-link"
      aria-current="page"
      active-class="active emphasize"
      :to="`/${index}`"
      :title="`this link goes to ${page.link.linkText}`"
      >{{ page.link.linkText }}</router-link
    >
  </li>
</template>

<script>
export default {
  props: ["page", "index"],
};
</script>
