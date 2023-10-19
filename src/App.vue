<template>
  <div class="app-wrapper">
    <div class="app-ui" v-if="isElSelected">
      <Search v-model="searchInput" />
      <ElementsList 
        :search="searchInput"
        @insert="insertEl"       
      />
    </div>
    <NotSelected v-if="!isElSelected" />
  </div>
</template>

<script>
import Search from "./Components/Search.vue";
import ElementsList from "./Components/ElementsList.vue";
import NotSelected from "./Components/NotSelected.vue";

import { createElement } from "./utils/utils";

export default {
  components: {
    Search,
    ElementsList,
    NotSelected
  },
  data() {
    return {
      searchInput: "",
      isElSelected: false,
      selectedEl: null,
      // // List of elements that shouldn't be a wrapper for an SVG icon
      // notAllowed: [
      //   'Paragraph',
      //   'List',
      //   'Heading',
      //   'Blockquote',
      //   'RichText',
      //   'DynamoWrapper',
      //   'DynamoList',
      //   'FormWrapper',
      //   'FormBlockLabel',
      //   'TabsWrapper',
      //   'TabsMenu',
      //   'TabsContent',
      // ]   
    }
  },
  mounted() {
    webflow.subscribe('selectedelement', this.selectedElementCallback);
  },
  computed: {
    isValidInput() {
      return this.searchInput.length > 0 && typeof this.searchInput !== undefined;
    }
  },
  methods: {
    selectedElementCallback(element) {
      if (element && element.children) {
        this.isElSelected = true;
        this.selectedEl = element;
      } else {
        this.isElSelected = false;
        this.selectedEl = null;
      }
    },
    insertEl(el) {
      createElement(el, this.selectedEl)
        .then(() => {
          webflow.notify({ type: 'Success', message: `Added ${el.title} to the canvas.` })
        })
        .catch((error) => {
          webflow.notify({ type: 'Error', message: error })
        });
    }
  }
}
</script>

<style lang="scss">
  .app-wrapper {
    position:relative;
    height: 460px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .app-ui {
      width: 100%;
      height: 100%;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>