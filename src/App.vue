<template>
  <div class="app-wrapper">
    <div class="app-ui" v-if="isElSelected">
      <Search v-model="searchInput" />
      <ElementsList 
        :search="searchInput"
        @insert="insertEl"
        @details="displayDetails"
      />
    </div>
    <DetailsPanel
      v-if="displayDetailsEl && showDetails"
      :el="displayDetailsEl"
      :active="showDetails"
      @close="showDetails = false"
      @insert="insertFromDetails"
    />
    <NotSelected v-if="!isElSelected" />
  </div>
</template>

<script>
import Search from "./Components/Search.vue";
import ElementsList from "./Components/ElementsList.vue";
import DetailsPanel from "./Components/DetailsPanel.vue";
import NotSelected from "./Components/NotSelected.vue";

import { createElement } from "./utils/utils";

export default {
  components: {
    Search,
    ElementsList,
    DetailsPanel,
    NotSelected
  },
  data() {
    return {
      searchInput: "",
      isElSelected: false,
      selectedEl: null,
      showDetails: false,
      displayDetailsEl: null,
      // List of elements that shouldn't be a wrapper for an element
      notAllowed: [
        'Paragraph',
        // 'List',
        'Heading',
        // 'Blockquote',
        // 'RichText',
        // 'DynamoWrapper',
        // 'DynamoList',
        // 'FormWrapper',
        // 'FormBlockLabel',
        // 'TabsWrapper',
        // 'TabsMenu',
        // 'TabsContent',
      ]   
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
      if (element && element.children && element.configurable && this.notAllowed.indexOf(element.type) === -1) {
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
    },
    displayDetails(el) {
      this.displayDetailsEl = el;
      this.showDetails = true;
    },
    insertFromDetails(el) {
      this.insertEl(el);
      this.showDetails = false;
      setTimeout(() => {
        this.displayDetailsEl = null;
      }, 500);
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