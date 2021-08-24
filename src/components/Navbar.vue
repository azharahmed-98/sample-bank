<template>
  <v-app-bar app dark color="#694ed6">
    <router-link to="/">
      <img
        v-if="headerConfig.logo"
        class="mt-1 ml-n3"
        :src="require('../assets/finastra.png')"
        height="60px"
        width="120px"
      />
    </router-link>
    <v-spacer></v-spacer>
    <v-tooltip v-if="headerConfig.about" bottom>
      <template v-slot:activator="{ on }">
        <v-icon> </v-icon>
        <v-btn color="#694ed6" depressed v-on="on">About Us</v-btn>
      </template>
      <span>About</span>
    </v-tooltip>
    <v-tooltip v-if="headerConfig.products" bottom>
      <template v-slot:activator="{ on }">
        <v-icon> </v-icon>
        <v-btn color="#694ed6" depressed v-on="on">Products</v-btn>
      </template>
      <span>Products</span>
    </v-tooltip>
    <v-tooltip v-if="headerConfig.newsRoom" bottom>
      <template v-slot:activator="{ on }">
        <v-icon> </v-icon>
        <v-btn color="#694ed6" depressed v-on="on">News Rooms</v-btn>
      </template>
      <span>News Rooms</span>
    </v-tooltip>
    <v-tooltip v-if="headerConfig.contactUs" bottom>
      <template v-slot:activator="{ on }">
        <v-icon> </v-icon>
        <v-btn color="#694ed6" depressed v-on="on">Contact Us</v-btn>
      </template>
      <span>Contact Us</span>
    </v-tooltip>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    headerConfig: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      navigationConfiguration: [],
    };
  },
};
</script>
