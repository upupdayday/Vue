<template>
    <div id="preview">
      <section data-name="profile" v-show="resume.profile">
          <h1>{{resume.profile.itemData[0].name}}</h1>
          <h2>{{resume.profile.title}}</h2>
          <p>城市：{{resume.profile.itemData[0].city}}</p>
          <p>出生日期：{{resume.profile.itemData[0].birth}}</p>
      </section>

      <section data-name="work" v-show="resume.work">
          <h2>{{resume.work.title}}</h2>
          <ol>
              <li v-for="item in resume.work.itemData">
                  <h3>{{item.company}}  {{item.duration}}</h3>
                  <p>{{item.content}}</p>
              </li>
          </ol>
      </section>

      <section data-name="study" v-show="resume.study">
          <h2>{{resume.study.title}}</h2>
          <ol>
              <li v-for="item in resume.study.itemData">
                  <h3>{{item.school}}   {{item.duration}}</h3>
                  <p>专业：{{item.major}}</p>
                  <p>学位：{{item.degree}}</p>
              </li>
          </ol>
      </section>

      <section data-name="project" v-show="resume.project">
          <h2>{{resume.project.title}}</h2>
          <ol>
              <li v-for="item in resume.project.itemData">
                  <h3>{{item.name}}</h3>
                  <p>{{item.content}}</p>
              </li>
          </ol>
      </section>

      <section data-name="reward" v-show="resume.reward">
          <h2>{{resume.reward.title}}</h2>
          <ol>
              <li v-for="item in resume.reward.itemData">
                  <h3>{{item.name}}</h3>
                  <p>{{item.content}}</p>
              </li>
          </ol>
      </section>

      <section data-name="contact" v-show="resume.contact">
          <h2>{{resume.contact.title}}</h2>
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
    overflow:auto;
    padding: 2em;
    line-height: 1.2;
    color: #333;
    *{box-sizing: border-box; font-variant: normal; font-weight: normal;}
    ol{ list-style: none; }
    p{ white-space: pre-line; } // 去除用户输入中的空格，保留换行

    section + section{ margin-top: 2em; }/*设置section间距*/
    
    section{
        >h2{
            width: 100%;
            background: #409EFF; 
            display: inline-block;
            padding: .2em;
            margin-bottom:.5em;
        }
        li + li { margin-top: 1em; }
        li{
            line-height: 1.5;
            h3{ border-bottom: 1px solid #999; padding-bottom: .3em; margin-bottom: .3em; }
        }
    }

    section[data-name="profile"]{
        >h1{
            margin: .1em 0; 
            font-size:3em;
        }    
    }




    
  }
</style>