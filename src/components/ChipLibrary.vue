<template>
  <div class="library-painel">

    <div class="library-item" v-for="(item, index) in chipItems" :key="index">
      <!-- <b-form-checkbox switch size="lg"></b-form-checkbox> -->
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
      chipItems: state => state.battleChips.all,
    })
  },
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