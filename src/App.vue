<template>
<v-app>
  <v-main style="max-height: 100vh;">
    <transition name="custom">
      <router-view />
    </transition>
  </v-main>
</v-app>
</template>

<script>
export default {
  name: 'App'
};
</script>

<style>
::-webkit-scrollbar {
  width: 0px;
}

.custom-enter-active {
  transition: opacity .75s;
  transition-delay: .75s;
}

.custom-leave-active {
  transition: opacity .75s;
}

.custom-enter,
.custom-leave-to
{
  opacity: 0;
}
</style>
