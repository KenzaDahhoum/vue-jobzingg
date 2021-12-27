<template>
  <div>
    <b-button
      v-b-modal.modal-center
      class="bg-gradient-primary"
    >
      Add Candidate
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
          <h2><b>Create Candidate</b></h2>
        </form-title>
        <div class="form-group">
          <label>Candidate Name</label>
          <input
            v-model="candidate.name"
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Phone Number</label>
          <input
            v-model="candidate.website"
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Location</label>
          <input
            v-model="candidate.location"
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Email </label>
          <input
            type="text"
            class="form-control"
          >
        </div>
        <div class="form-group">
          <label>Description</label>
          <input
            v-model="description"
            type="text"
            class="form-control"
          >
        </div>
      </form>
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
    </b-modal>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
// import axios from 'axios'
import { BButton, BModal } from 'bootstrap-vue'

export default {
  components: {
    BButton,
    BModal,
  },
  methods: {
    close() {
      this.$refs['my-modal'].hide()
    },
    ...mapActions(['addCandidate', 'fetchCandidates']),

    submit() {
      this.addCandidate(
        this.name,
        this.location,
        this.website,
        this.description,
      )
      console.log('testt')
      this.fetchCandidates()
      this.$refs['my-modal'].hide()
    },
  },
  data() {
    return {
      candidate: {
        name: '',
        location: '',
        website: '',
        description: '',
      },

      inputRules: [
        value => !!value || 'Required.',
        value => (value && value.length >= 3) || 'Min 3 characters',
      ],
    }
  },
}
</script>
