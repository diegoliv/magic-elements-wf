<template>
  <div class="details-panel">
    <div class="details-panel-backdrop"></div>
    <div class="details-panel-body">
      <header>
        <span>{{ el.title }} Details</span>
        <button 
          class="close"
          @click="$emit('close')"
        >
          <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
            <path d="M3.414 2 2 3.414 6.586 8 2 12.586 3.414 14 8 9.414 12.585 14 14 12.585 9.414 8 14 3.415 12.585 2 8 6.586 3.414 2Z" fill="currentColor"/>
          </svg>
        </button>
      </header>
      <div class="panel-body">
        <div class="panel-preview"></div>
        <div class="panel-description">
          <header>
            <span>{{ el.title }}</span>
            <code>{{ el.html }}</code>
          </header>
          <p>{{ el.description }}</p>
          <a :href="el.mdn" class="mdn-docs" target="_blank">
            <span>MDN Web Docs</span>
            <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
              <path d="M8.146 4.147a2.621 2.621 0 1 1 3.707 3.707l-1 1-.707-.707 1-1a1.621 1.621 0 1 0-2.292-2.293l-1 1-.708-.707 1-1ZM5.854 7.854l-1 1a1.621 1.621 0 0 0 2.292 2.293l1-1 .708.707-1 1a2.621 2.621 0 1 1-3.708-3.707l1-1 .708.707Z" fill="currentColor"/>
              <path d="m6.854 9.854 3-3-.708-.707-3 3 .708.707Z" fill="currentColor"/>
            </svg>
          </a>
        </div>
        <footer>
          <button @click="$emit('insert', el)">Insert Element</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailsPanel',
    props: ['el', 'active']
  }
</script>

<style lang="scss">
.details-panel {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
  backdrop-filter: blur(5px);
  transform: all .5s;

  .details-panel-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;
    opacity: .7;
    transition: all .5s;
    background-color: #000;
  }

  .details-panel-body {
    position: relative;
    z-index: 1;
    width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    opacity: 1;
    border-radius: var(--border-radius);
    transform: all .5s;
    background-color: var(--background2);
    box-shadow: 0px 40px 80px -40px #000, 
                0px 24px 40px -24px rgba(0, 0, 0, 0.25), 
                0px 16px 24px -16px rgba(0, 0, 0, 0.25), 
                0px 4px 8px -4px rgba(0, 0, 0, 0.25);  

    > header{
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: space-between;
      padding: 8px;
      line-height: 1.1;
      font-weight: 600;
      font-size: var(--font-size-large);
      color: var(--text1);
      border-bottom: 1px solid var(--border1);

      .close {
        padding: 0;
        margin: 0;
        background-color: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        color: var(--text3);

        svg {
          width: 16px;
          height: 16px;
        }

        &:hover {
          color: var(--text1);
        }
      }
    }

    .panel-preview {
      width: 100%;
      height: 120px;
      background-color: var(--blueText);
      margin-bottom: 8px;
    }

    .panel-body {
      padding: 8px;
    }

    .panel-description {
      color: var(--text1);
      header {
        display: flex;
        flex-shrink: 0;
        align-items: center;
        justify-content: space-between;
        line-height: 1.1;
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-large);
        margin-bottom: 8px;

      }

      code {
        font-weight: var(--font-weight-normal);
        color: var(--orangeBorder);
      }

      .mdn-docs {
        margin-top: 4px;
        display: inline-flex;
        align-items: center;
        text-decoration: none;
        color: var(--purpleText);

        svg {
          width: 16px;
          height: 16px;
        }
      }

      p {
        font-weight: var(--font-weight-normal);
        color: var(--text2);
      }
    }

    footer {
      margin-top: 8px;

      button {
        display: block;
        width: 100%;
        padding: 4px;
        color: var(--actionPrimaryText);
        background-color: var(--actionPrimaryBackground);
        border: none;
        border-radius: var(--border-radius);
        box-shadow: var(--boxShadows-action-colored);
        cursor: pointer;

        &:hover {
          background-color: var(--actionPrimaryBackgroundHover);
        }
      }
    }
  }
  // &.v-enter-active,
  // &.v-leave-active {
  //   backdrop-filter: blur(8px);
  //   .details-panel-backdrop {
  //     opacity: .7;
  //   }
  //   .details-panel-body {
  //     transform: translate3d(0, 0%,0) scale(1);
  //     opacity: 1;
  //   }
  // }

  // &.v-enter-from,
  // &.v-leave-to {
  //   backdrop-filter: blur(0);
  //   .details-panel-backdrop {
  //     opacity: 0;
  //   }
  //   .details-panel-body {
  //     transform: translate3d(0, 100%,0) scale(0.9);
  //     opacity: 0;
  //   }
  // }
}
</style>