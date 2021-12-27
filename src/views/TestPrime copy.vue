<template>
  <div class="p-grid">
    <div class="p-col-12">
      <div class="p-shadow-1">
        <h5>test</h5>
        <!-- <DataTable :value="posts >
          <Column field="id" header="ID"></Column>
          <Column field="title" header="Title"/>
          <Column field="body" header="Body" />
        </DataTable> -->

      </div>
    </div>

  </div>
</template>

<script>

import PostsService from '../store/modules/PostsServices'

// export default {
//   data() {
//     return {
//         value: null,
//       posts: [],
//       postsService: null,
//     }
//   },
//   created() {
//     this.postsServices = new PostsService()
//   },
//   mounted() {
//     this.postsServices.getPosts().then(data => this.posts = data)
//     console.log('testprime', data)
//   },
// }
// </script>
