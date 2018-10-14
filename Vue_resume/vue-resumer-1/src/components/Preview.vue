<template>
    <div id="preview">
      <section v-show="resume.profile">
          <h1>{{resume.profile.itemData[0].name}}</h1>
          <h2>{{resume.profile.title}}</h2>
          <p>
              {{resume.profile.itemData[0].city}} {{resume.profile.itemData[0].birth}}
          </p>
      </section>

      <section v-show="resume.work">
          <h2>{{resume.work.title}}</h2>
          <ol>
              <li v-for="item in resume.work.itemData">
                  <h3>{{item.company}}</h3>
                  <h4>{{item.duration}}</h4>
                  <p>{{item.content}}</p>
              </li>
          </ol>
      </section>

      <section v-show="resume.study">
          <h2>{{resume.study.title}}</h2>
          <ol>
              <li v-for="item in resume.study.itemData">
                  <h3>{{item.school}}</h3>
                  <h4>{{item.duration}}</h4>
                  <p>{{item.major}}</p>
                  <p>{{item.degree}}</p>
              </li>
          </ol>
      </section>

      <section v-show="resume.project">
          <h2>{{resume.project.title}}</h2>
          <ol>
              <li v-for="item in resume.project.itemData">
                  <h3>{{item.name}}</h3>
                  <p>{{item.content}}</p>
              </li>
          </ol>
      </section>

      <section v-show="resume.reward">
          <h2>{{resume.reward.title}}</h2>
          <ol>
              <li v-for="item in resume.reward.itemData">
                  <h3>{{item.name}}</h3>
                  <p>{{item.content}}</p>
              </li>
          </ol>
      </section>

      <section v-show="resume.contact">
          <h2>{{resume.profile.title}}</h2>
          <ol>
              <li v-for="(value,key) in resume.contact.itemData[0]">
                  <h3>{{key}}</h3>
                  <p>{{value}}</p>
              </li>
          </ol>
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