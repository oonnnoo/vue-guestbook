<template>
  <li :id="'#comment-'+comment.id">
  <!-- <li> -->
    <article>
      <div class="comment-meta">
        <a :href="comment.url" v-text="comment.author"></a>
        <div>
          <a :href="'#comment-'+comment.id" v-text="comment.create_at"></a>
        </div>
      </div>
      <div class="comment-body" v-text="comment.message">
      </div>
      <div class="reply">
        回复
      </div>
    </article>
  </li>
</template>
<script>
export default {
  props: {
    comment: {
      type: Object,
      default () {
        return {
          id: '',
          url: '',
          message: '',
          author: '',
          create_at: ''
        }
      }
    }
  }
}
</script>
<style scoped>

</style>
