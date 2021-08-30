<template>
  <v-app-bar app dark color="#694ed6">
    <router-link to="/">
      <img
        class="mt-1 ml-n3"
        :src="require('../assets/finastra.png')"
        height="55px"
        width="120px"
      />
    </router-link>
    <v-spacer></v-spacer>
    <!-- <div> -->
    <v-tabs background-color="#694ed6" right dark icons-and-text class="hidden-sm-and-down">
      <v-tabs-slider></v-tabs-slider>
      <v-tab v-for="(navItem, index) in navigationConfiguration" :key="index" :to="navItem.path">
        {{ navItem.name }}
        <v-icon>{{ navItem.icon }}</v-icon>
      </v-tab>
    </v-tabs>
    <!-- </div> -->
    <!-- <div
      v-for="(navItem, index) in navigationConfiguration"
      :key="index"
      router
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
    </div> -->
    <div class="hidden-md-and-up">
      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="#694ed6" depressed fab small v-on="on">
            <v-icon>
              mdi-dots-vertical
            </v-icon>
          </v-btn>
        </template>
        <v-list router>
          <v-list-item
            v-for="(item, index) in navigationConfiguration"
            :key="index"
            :to="item.path"
          >
            <v-list-item-icon>
              <v-icon color="#694ed6">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title color="#694ed6">{{ item.name }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
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
