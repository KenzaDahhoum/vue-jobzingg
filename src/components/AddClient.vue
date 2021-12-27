<template>
  <div>
    <b-button
      v-b-modal.modal-center
      class="bg-gradient-primary"
    >
      Add Client
    </b-button>

    <b-modal
      id="modal-center"
      ref="my-modal"
      centered
      hide-footer
      hide-header
    >
      <form>
        <form-title>
          <h2><b>Create Client</b></h2>
        </form-title>
        <div class="form-group">
          <label>Client Name</label>
          <input
            v-model="name"
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Location</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Website</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div>
          <b-button
            class="mr-1"
            variant="outline-primary"
            @click="close"
          >
            Cancel
          </b-button>
          <b-button
            class="bg-gradient-primary"
            @click="submit"
          >
            Saave
          </b-button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
import {
  BButton, BModal,
} from 'bootstrap-vue'
import { mapActions } from 'vuex'

export default {
  components: {
    BButton,
    BModal,
  },
  methods: {
    close() {
      this.$refs['my-modal'].hide()
    },
    ...mapActions(['addClient']),

    submit() {
      this.addClient(this.name)
      this.$refs['my-modal'].hide()
    },
  },
  data() {
    return {
      name: '',
    }
  },
}
</script>
