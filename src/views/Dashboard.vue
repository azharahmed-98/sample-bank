<template>
  <div class="dashboard">
    <v-container class="my-5">
      <h1 class="my-5 heading">Account</h1>
      <div class="ml-4">
        <v-row>
          <h2 class="grey--text text--darken-1">Savings Accounts</h2>
        </v-row>
        <v-row>
          <v-col cols="12" sm="12" md="4" lg="3">
            <v-hover v-slot="{ hover }">
              <v-card
                :elevation="hover ? 12 : 2"
                class="mx-auto { 'on-hover': hover }"
                max-width="300"
              >
                <v-img
                  height="200"
                  width="300"
                  :src="require('@/assets/superSavings.png')"
                ></v-img>
                <v-card-title class="justify-center">Super Savings</v-card-title>
                <v-divider class="mx-4"></v-divider>
                <v-card-text>
                  <v-chip label color="deep-purple lighten-4" class="mb-2 mr-2">
                    <pre class="font-weight-bold">ROI </pre>
                    <span>5.0 %</span>
                  </v-chip>
                  <v-chip large label color="deep-purple lighten-4">
                    <v-icon>
                      mdi-database
                    </v-icon>
                    <div>
                      <div>
                        <span class="mx-1 text-caption font-weight-bold"
                          >Max transaction / day</span
                        >
                      </div>
                      <div>
                        <span class="mx-1" text-color="black">5000 GBP</span>
                      </div>
                    </div>
                  </v-chip>
                </v-card-text>
                <v-card-actions>
                  <v-btn text class="text-uppercase" color="#c137a2">
                    Apply
                    <v-icon right>mdi-arrow-right</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-hover>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',

  components: {},
};
</script>

<style scoped>
.v-chip__content {
  height: auto !important;
}
</style>
