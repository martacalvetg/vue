<template>
  <AppHeader />
  <router-view></router-view>

  
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import router from './router';
import HomeView from './views/HomeView.vue';

export default {
  name: 'App',
  components: {
    AppHeader,
    HomeView
  }
}

</script>
