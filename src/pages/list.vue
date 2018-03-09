<template>
  <div class="commentform-wrapper">
    <publish></publish>
    <ol id="comments">
      <template v-for="item in componentsList">
        <listcell :comment="item"></listcell>
      </template>
    </ol>
  </div>
</template>
<script>
  import listcell from '@/components/listcell'
  import publish from '@/components/publish'
  import {
    getList
  } from '@/api/index'
  export default {
    data() {
      return {
        // 留言列表
        componentsList: []
      }
    },
    methods: {
      // 获取列表数据
      fetchList() {
        getList().then(response => {
          if (response.data.status === "success") {
            console.log(response.data.data)
            this.componentsList = response.data.data
          } else {
            console.log(response.data)
          }
        }).catch(function (err) {
          console.error(err)
        })
      },
    },

    components: {
      listcell: listcell,
      publish: publish
    },
    created() {
      this.fetchList()
    }
  }

</script>

<style scoped>
  .commentform-wrapper{
    width: 1000px;
    word-wrap: break-word;
    background: #ffffff;
    margin-left: auto;
    margin-right: auto;
  }
</style>