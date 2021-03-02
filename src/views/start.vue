<template>
  <div class="d-flex flex-column align-center justify-center" style="height: 100%;">
    <img src="@/assets/logo.png" />
    <span class="text-h3">MY SHANK</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    }
  },
  created() {
    setTimeout(() => {
      this.$router.push('home')
    }, 6000)
  },
}
</script>

<style>
.fadeIn-enter-active {
  transition: all 5s ease;
}

.fadeIn-enter {
  opacity: 0;
}
</style>
