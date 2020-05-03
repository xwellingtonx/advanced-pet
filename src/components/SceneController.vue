<template>
    <component v-bind:is="componentFile"></component>
</template>

<script>
import { mapState } from 'vuex'
//import { SceneNames } from '../common/constants';


export default {
  name: 'SceneController',
  computed: {
    ...mapState({
      currentScene: state => state.session.currentScene
    }),
    componentFile() {
      return this.importComponent(this.currentScene)
    }
  },
  mounted() {
    //timer
    // setInterval(() => {
    //   if(this.currentScene === SceneNames.OptionTime ||
    //     this.currentScene === SceneNames.StandBy) {
    //       this.$store.commit('updateTime');
    //   }
    // }, 1000);
  },
  methods: {
    importComponent(path) {
      return () => import(`@/components/scenes/${path}.vue`)
    }
  }
}
</script>

<style scoped lang="scss">

</style>