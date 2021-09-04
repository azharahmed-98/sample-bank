<template>
  <div>
    <h1>{{ componentName }}</h1>
  </div>
</template>

<script>
import appCommonMixin from '@/mixins/appCommonMixin';

export default {
  name: 'Contact-Us',
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
