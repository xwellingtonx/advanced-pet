<template>
  <div>
    <vddl-list class="mychips-painel"
      :list="chipItems"
      :horizontal="false"
      :drop="onDrop" v-if="chipItems.length > 0">

      <vddl-draggable v-for="(item, index) in chipItems" :key="item.name"
        :draggable="item"
        :index="index"
        :dragstart="sendParentMessage"
        effect-allowed="copy">
          <chip-item :battle-chip="item"></chip-item>
      </vddl-draggable>

    </vddl-list>
    <p v-if="chipItems.length == 0">No chips added to my chips!</p>    
  </div>       
</template>

<script>
import { mapState } from 'vuex';
import ChipItem from './ChipItem.vue'

export default {
  name: 'MyChips',
  components: {
    ChipItem
  },
  computed: {
    ...mapState({
      chipItems: state => state.session.myChips,
    })
  },
  methods: {
    onMoved(event) {
      this.$store.commit('session/removeFromMyChips', event.index);
    },
    onDrop(draggable) {
      var oldItem = this.chipItems.find(x => x.Id === draggable.item.Id);
      //Remove the old item 
      this.$store.commit('session/removeFromMyChips', this.chipItems.indexOf(oldItem));

      //Add the new item moved
      this.$store.commit('session/addToMyChips', draggable);
    },
    sendParentMessage() {
      setTimeout(() => {
        this.$emit('dragstart');
      }, 3);
    }
  }
}
</script>

<style lang="scss">
  .mychips-painel {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    max-height: 391px;
    min-height: 391px;
    
    .vddl-draggable {
      max-width: 110px;
      position: relative;
      z-index: 2;
      background-color: transparent;
      margin: 20px;
      float: left;

      &:hover {
        cursor: move;
      }
    }
  }

  p {
    text-align: center;
  }
</style>