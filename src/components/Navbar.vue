<template>
  <v-app-bar app dark color="#694ed6">
    <router-link to="/">
      <img
        class="mt-1 ml-n3"
        :src="require('../assets/finastra.png')"
        height="60px"
        width="120px"
      />
    </router-link>
    <v-spacer></v-spacer>
    <div
      v-for="(navItem, index) in navigationConfiguration"
      :key="index"
      router
      class="hidden-sm-and-down"
    >
      <v-tooltip bottom small>
        <template v-slot:activator="{ on }">
          <v-btn color="#694ed6" depressed v-on="on" :to="navItem.path">
            <v-icon left>{{ navItem.icon }}</v-icon>
            {{ navItem.name }}</v-btn
          >
        </template>
        <span>{{ navItem.name }}</span>
      </v-tooltip>
    </div>
    <div class="hidden-md-and-up">
      <v-btn color="#694ed6" depressed fab small>
        <v-icon>
          mdi-dots-vertical
        </v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      navigationConfiguration: [
        { name: 'About Us', icon: 'fas fa-address-card', path: '/about' },
        { name: 'Products', icon: 'fas fa-box-open', path: '/products' },
        { name: 'News Rooms', icon: 'far fa-newspaper', path: '/newsRooms' },
        { name: 'Contact Us', icon: 'fas fa-phone-alt', path: '/contactUs' },
      ],
    };
  },
};
</script>
