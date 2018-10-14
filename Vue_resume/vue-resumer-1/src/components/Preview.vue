<template>
    <div id="preview">
      <section v-show="resume.profile">
          <h1>{{resume.profile.itemData[0].name}}</h1>
          <h2>{{resume.profile.title}}</h2>
          <p>
              {{resume.profile.itemData[0].city}} {{resume.profile.itemData[0].birth}}
          </p>
      </section>
    </div>
</template>

<script>
    export default{
      computed: {
        resume(){
          return this.$store.state.resume
        }
      }
    }
</script>

<style lang="scss">
  #preview{
    /* border: 1px solid black; */
    background: #fff;
    border-radius: 5px;
    overflow: hidden;
    flex: 1;
    /* width: 888px;
    height: 925px; */
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
  }
</style>