<template>
  <div class="elements-list">
    <ul v-if="filteredList.length > 0">      
      <Element
        v-for="(el,key) in filteredList" 
        :key="key"
        :el="el"
        @insert="$emit('insert', el)"
      />
    </ul>
    <NotFound v-if="filteredList.length <= 0" />
  </div>
</template>

<script>
import elements from "../utils/elementsList";
import Element from "./Element.vue";
import NotFound from "./NotFound.vue";

export default {
  components: {
    Element,
    NotFound
  },
  props: ["search"],
  data() {
    return {
      elements
    }
  },
  computed: {
    filteredList() {
      if (this.search.length === 0 || typeof this.search === undefined) {
        return this.elements;
      }

      return this.elements.filter(el => {
        return el.title.toLowerCase().indexOf(this.search.toLowerCase()) !== -1;
      });
    }
  }
}
</script>

<style lang="scss">
.elements-list {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  > ul {
    width: 100%;
    margin: 0;
    padding: 8px;
    display: grid;
    grid-template-columns: 1fr;
    list-style: none;
    gap: 8px;
  }
}
</style>