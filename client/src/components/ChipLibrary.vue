<template>
  <div class="library-painel">

    <div class="library-item" v-for="(item, index) in library" :key="index">
      <b-form-checkbox switch :checked="isInMyChips(item)" size="lg" @change="onChange(item, $event)"></b-form-checkbox>
      <chip-item :battleChip="item"></chip-item>
    </div>
  </div>           
</template>

<script>
import { mapState } from 'vuex';
import ChipItem from './ChipItem.vue'

export default {
  name: 'ChipLibrary',
  components: {
    ChipItem
  },
  computed: {
    ...mapState({
      library: state => state.chips.all,
      myChips: state => state.session.myChips
    }),
  },
  methods: {
    onChange(item, value) {
      if(value) {
        this.$store.commit('session/addToMyChips', {
          index: 0,
          item: item
        });
      } else {
        var myChip = this.myChips.find(x => x.Id === item.Id); 
        if(myChip) {
          this.$store.commit('session/removeFromMyChips', this.myChips.indexOf(myChip));
        }
      }
    },
    isInMyChips(item) {
      return this.myChips.some(x => x.Id === item.Id);
    }
  }  
}
</script>

<style lang="scss">
  .library-painel {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    max-height: 391px;
    
    .library-item {
      max-width: 110px;
      margin: 20px;
      float: left;
      text-align: center;

      .custom-switch {
        margin-bottom: 5px;
      }
    }

  }

</style>