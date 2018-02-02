<template>
  <form id="commentform" method="post" @submit.prevent="submitNewComment">
    <div>
      <textarea cols="100" rows="10" id="comment"></textarea>
    </div>
    <div>
      <div style="float:left">
          <div><input type="text" id="author" name="author" v-model="formdata.author"></div>
          <div><input type="text" id="email" name="email" v-model="formdata.email"></div>
          <div><input type="text" id="url" name="url" v-model="formdata.url"></div>
      </div>
      <div style="float:left">
          <button type="submit">提交</button>
      </div>
      <div style="clear:both"></div>

    </div>
  </form>
</template>
<script>
  import {postComment} from '@/api/index'
  export default {
    data() {
      return {
        formdata: {}
      }
    },
    methods:{
      // 发表新留言
      submitNewComment(){
        postComment(this.formdata).then(response=>{
          if(response.data.data="success"){
            console.log('发表成功')
          }else{
            console.log('发表失败')
            console.log(response.data)
          }
        }).catch(function(err){
          console.error(err)
        })
      },
    }
  }

</script>
<style scoped>
  body {
    background: #ffffff
  }

</style>
