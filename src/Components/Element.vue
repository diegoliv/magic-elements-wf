<template>
  <li>
    <button 
      class="element-selector"
      @click="$emit('insert')"
    >
      <div class="icon">
        <img :src="getImageUrl(el.id)" />    
      </div>
      <div class="content">
        <h3 class="title">{{ el.title }}</h3>
        <p class="description">{{ el.label }}</p>
      </div>
      <div class="info">
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
          <circle opacity=".4" cx="17" cy="15" r="12" stroke="currentColor" stroke-width="2"/>
          <path d="M15 8a3 3 0 0 0-3 3v1h2v-1a1 1 0 0 1 1-1h3.652a1 1 0 0 1 .759 1.65l-2.689 3.137A3 3 0 0 0 16 16.74V18h2v-1.26a1 1 0 0 1 .24-.65l2.69-3.138C22.596 11.006 21.214 8 18.651 8H15Zm2 14.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" fill="currentColor"/>
        </svg>
      </div>
    </button>
  </li>
</template>

<script>
  const getImg = (id) => new URL(`../Icons/${id}.svg`, import.meta.url).href 
  
  export default {
    name: "Element",
    props: ['el'],
    methods: {
      showDescription() {
        this.$emit('showdescription', el);
      },
      getImageUrl(id) {
        return getImg(id)
      },      
    }  
  }
</script>

<style lang="scss">
.element-selector{
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin: 0;
  padding: 12px;
  border: 2px solid transparent;
  border-radius: var(--border-radius);
  background-color: var(--background2);
  color: var(--text1);
  text-align: left;
  cursor: pointer;
  
  &:hover {
    background-color: var(--background3);
    // border-color: var(--blueBorder);
  }

  .description {
    color: var(--text2);
  }

  .icon{
    width: 40px;
    height: 40px;
    margin-right: 12px;
    border-radius: 2px;
    flex-shrink: 0;
    background-color: var(--background3);
    overflow: hidden;
  }

  .info{
    width: 16px;
    height: 16px;
    position: absolute;
    top: 8px;
    right: 8px;
    color: var(--text2);
    cursor: pointer;

    &:hover {
      color: var(--text1);
    }
  }
}
</style>