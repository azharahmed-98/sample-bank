<template>
  <div class="dashboard">
    <v-container class="my-5">
      <div v-for="(productCategory, index) in Object.keys(products)" :key="index">
        <h1 class="my-5 text-capitalize">{{ productCategory }}</h1>
        <div
          class="ml-4 my-5"
          v-for="(productSubCat, index) in Object.keys(products[productCategory])"
          :key="index"
        >
          <v-row>
            <h2 class="grey--text text--darken-1 text-capitalize">
              {{ products[productCategory][productSubCat][0].category }}
            </h2>
          </v-row>
          <v-row>
            <v-col
              v-for="(productType, index) in products[productCategory][productSubCat]"
              :key="index"
              cols="12"
              sm="12"
              md="4"
              lg="3"
            >
              <v-hover v-slot="{ hover }">
                <v-card
                  :elevation="hover ? 12 : 2"
                  class="mx-auto { 'on-hover': hover }"
                  max-width="300"
                >
                  <v-img
                    height="250"
                    width="300"
                    :src="require('@/assets/' + productType.image)"
                  ></v-img>
                  <v-card-title class="justify-center">{{ productType.title }}</v-card-title>
                  <v-divider></v-divider>
                  <v-card-text class="font-weight-medium">
                    <div>
                      <v-row>
                        <v-col cols="2" sm="2" md="2" lg="2">
                          <v-icon>mdi-cash</v-icon>
                        </v-col>
                        <v-col cols="10" sm="10" md="10" lg="10">
                          <span> ROI - {{ productType.interest }} % </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div>
                      <v-row v-if="productType.term">
                        <v-col cols="2" sm="2" md="2" lg="2">
                          <v-icon>mdi-calendar-account</v-icon>
                        </v-col>
                        <v-col cols="10" sm="10" md="10" lg="10">
                          <span> Term - {{ productType.term }} Years </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div>
                      <v-row v-if="productType.minTransaction && productType.maxTransaction">
                        <v-col cols="2" sm="2" md="2" lg="2">
                          <v-icon>mdi-bank-transfer</v-icon>
                        </v-col>
                        <v-col cols="10" sm="10" md="10" lg="10">
                          <span>
                            Min - Max Amount: {{ productType.minTransaction }} -
                            {{ productType.maxTransaction }} GBP
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                    <div>
                      <v-row v-if="productType.transaction">
                        <v-col cols="2" sm="2" md="2" lg="2">
                          <v-icon>mdi-bank-transfer</v-icon>
                        </v-col>
                        <v-col cols="10" sm="10" md="10" lg="10">
                          <span>
                            Maximum Transaction per Day - {{ productType.transaction }} GBP
                          </span>
                        </v-col>
                      </v-row>
                    </div>
                  </v-card-text>
                  <v-card-actions>
                    <v-btn text class="text-uppercase" color="#c137a2">
                      <v-icon right>mdi-arrow-right-drop-circle</v-icon>
                      Apply Now
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-hover>
            </v-col>
          </v-row>
        </div>
      </div>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data() {
    return {
      products: {
        accounts: {
          savingsAccounts: [
            {
              category: 'Savings Account',
              title: 'Super Savings',
              interest: 3.9,
              transaction: 5000,
              image: 'product-1.png',
            },
            {
              category: 'Savings Account',
              title: 'Silver Savings',
              interest: 4.5,
              transaction: 7000,
              image: 'product-2.png',
            },
            {
              category: 'Savings Account',
              title: 'Gold Savings',
              interest: 5.2,
              transaction: 9000,
              image: 'product-3.png',
            },
            {
              category: 'Savings Account',
              title: 'Diamond Savings',
              interest: 3,
              transaction: 9000,
              image: 'product-4.png',
            },
            {
              category: 'Savings Account',
              title: 'Big Gold Savings',
              interest: 5.2,
              transaction: 9000,
              image: 'product-5.png',
            },
            {
              category: 'Savings Account',
              title: 'Big Diamond Savings',
              interest: 3,
              transaction: 9000,
              image: 'product-6.png',
            },
          ],
        },
        deposits: {
          'Fixed Deposits': [
            {
              category: 'Fixed Deposits',
              title: 'Silver Fixed Deposits',
              term: 3,
              interest: 7.2,
              minTransaction: 5000,
              maxTransaction: 50000,
              image: 'product-7.png',
            },
            {
              category: 'Fixed Deposits',
              title: 'Gold Fixed Deposits',
              term: 3,
              interest: 7.2,
              minTransaction: 5000,
              maxTransaction: 50000,
              image: 'product-8.png',
            },
            {
              category: 'Fixed Deposits',
              title: 'Platinum Fixed Deposits',
              term: 3,
              interest: 7.2,
              minTransaction: 5000,
              maxTransaction: 50000,
              image: 'product-9.png',
            },
            {
              category: 'Fixed Deposits',
              title: 'Diamond Fixed Deposits',
              term: 3,
              interest: 7.3,
              minTransaction: 5000,
              maxTransaction: 50000,
              image: 'product-10.png',
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped>
.v-chip__content {
  height: auto !important;
}
</style>
