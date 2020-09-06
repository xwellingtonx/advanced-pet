<template>
    <component v-bind:is="componentFile"></component>
</template>

<script>
import { mapState } from 'vuex'
import { SceneNames } from '../../global/constants';

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
    setInterval(() => {
      if(this.currentScene === SceneNames.OptionTime ||
        this.currentScene === SceneNames.StandBy) {
          this.$store.dispatch('session/updateTime');
      }
    }, 6000);
  },
  methods: {
    importComponent(path) {
      return () => import(`@/components/game/scenes/${path}.vue`)
    }
  }
}
</script>
