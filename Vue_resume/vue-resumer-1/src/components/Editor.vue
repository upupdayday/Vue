<template>
    <div id="editor">
      <nav>
        <ol>
            <li v-for="i in [0,1,2,3,4,5]"
                :class="{active: currentTab === i}" 
                @click="currentTab = i"
            >
              <svg class="icon" >
                <use :xlink:href="`#icon-${icons[i]}`"></use>
              </svg>
            </li>
        </ol>
      </nav>
      <ol class="panels">
            <li v-for="i in [0,1,2,3,4,5]"
                :class="{active: currentTab === i}" 
            >
                tab{{i}}
            </li>
      </ol>
    </div>
</template>


<script>
export default {
  data() {
    return {
      currentTab: 0,
      icons: ['shenfenzheng', 'ziyuan', 'book', 'heart', 'jiangbei', 'phone']
    }
  }
}
</script>


<style lang="scss">
  #editor{
    background: #fff;
    width: 35%;
    margin-right: 16px;
    box-shadow:0 1px 3px 0 rgba(0,0,0,0.25);
    display: flex;
    overflow: hidden;

    > nav {
      background: #409EFF;
      width: 80px;  
      padding: 16px 0;  
      > ol > li {
        padding: 8px 0;
        text-align: center;
        > .icon {
          width:36px;
          height:36px;
          fill: #fff;
        }
        &.active {
          background: #fff;
          >.icon {
            fill: #409EFF;
          }
        }
      }
    }
    
    > .panels{
      > li {
        display:none;
        &.active{
          display: block;
        }
      }
    }
  }
</style>