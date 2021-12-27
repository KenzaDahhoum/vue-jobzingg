<template>
  <div>
    <DataTable :value="products">
      <Column
        field="id"
        header="Code"
      />
      <Column
        field="title"
        header="Name"
      />
      <Column
        field="body"
        header="Category"
      />
    </DataTable>
    <Button>test</Button>
  </div>
</template>

<script>
import Column from 'primevue/column'
import Button from 'primevue/button'
import DataTable from 'primevue/datatable'
import postsServices from '../store/modules/PostsServices'

export default {
  components: {
    Column,
    Button,
    DataTable,
  },
  data() {
    return {
      products: null,
    }
  },
  productService: null,
  created() {
    this.productService = new ProductService()
  },
  mounted() {
    this.productService.getPosts().then(data => this.products = data)
  },
}

</script>

<style scoped>

</style>
