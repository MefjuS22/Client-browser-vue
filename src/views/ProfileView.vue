<template>
  <MainContent :id="id"></MainContent>
</template>
<script>
import MainContent from "../components/MainContent.vue";
export default {
  name: "App",
  components: {
    MainContent,
  },
  props: {
    id: {
      type: String,
      required: false,
    },
  },
};
</script>
<style></style>
