<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card tile dark color="#c137a2">
          <v-card-title class="headline text-uppercase justify-center">
            {{ componentName }}
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import appCommonMixin from '@/mixins/appCommonMixin';

export default {
  name: 'Products',
  mixins: [appCommonMixin],
  data() {
    return {
      componentName: '',
    };
  },
  created() {
    this.componentName = this.getComponentName();
  },
};
</script>

<style scoped></style>
