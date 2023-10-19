<template>
  <div class="notice-full">
    <img src="../not-found.svg" />
    <div class="header">
      <h2 class="title">Element not found</h2>
    </div>
    <p>Looks like the element you're searching for is not on the supported list. Make sure that your search criteria maches the right element name.</p>
  </div>
</template>

<style lang="scss">
  .notice-full {
    width: 100%;
    height: 100%;
    min-height: 240px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px;
    text-align: center;
    color: var(--text1);

    .header{
      margin: 16px 0 32px;
    }

    .title {
      font-size: 24px;
    }

    .subtitle {
      font-size: 16px;
    }

    p {
      font-size: var(--font-size-small);
    }
  }
</style>