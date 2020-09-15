<template>
  <div class="preview-container">
    <div>
      <h1>Input</h1>
      <hr>

      <div class="example">

        <div class="element">
          <p>Basic Input</p>
          <ui-input type="text" value="" label="아이디" placeholder="placeholder"></ui-input>
        </div>
        
        <div class="element">
          <p>Error Input</p>
          <ui-input type="text" value="짐살라빔" label="비밀번호" error></ui-input>
        </div>


        <div class="element">
          <p>Success Input</p>
          <ui-input type="text" value="짐살라빔" success></ui-input>
        </div>
        
      </div>

    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

.preview-container {
  padding: 10px;

  .example {
    display: flex;

    .element {
      margin-right: 20px;
      display: inline;
      padding: 15px;

    }
  }
}

</style>