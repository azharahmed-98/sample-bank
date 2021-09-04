const appCommonMixin = {
  methods: {
    getComponentName() {
      return this.$route.name;
    },
  },
};

export default appCommonMixin;
