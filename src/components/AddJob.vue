<template>
  <div>
    <b-button
      v-b-modal.modal-center
      class="bg-gradient-primary"
    >
      Add Job
    </b-button>

    <b-modal
      id="modal-center"
      ref="my-modal"
      centered
      hide-header
      hide-footer
    >
      <form>
        <form-title>
          <h2><b>Create Job</b></h2>
        </form-title>
        <div class="form-group">
          <label>Position Name</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Client</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Headcount</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Minimum Salary</label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Maximum Salary</label>
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

export default {
  components: {
    BButton,
    BModal,
  },
  methods: {
    close() {
      this.$refs['my-modal'].hide()
    },
  },
}
</script>
