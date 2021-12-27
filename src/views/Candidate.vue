<template>
  <div>
    <b-row>
      <b-col
        md="3"
        cols="12"
        class="content-header-right text-md-right d-md-block d-none mb-1 mt-0"
      >
        <AddCandidate />
      </b-col>
    </b-row>
    <div
      v-for="candidate in allCandidates"
      :key="candidate.candidate.id"
    >
      {{ candidate.candidate.name }}</span>
    </div>
    <b-card-code title="Basic Table">
      <!-- search input -->
      <div class="custom-search d-flex justify-content-end">
        <b-form-group>
          <div class="d-flex align-items-center">
            <label class="mr-1">Search</label>
            <b-form-input
              v-model="searchTerm"
              placeholder="Search"
              type="text"
              class="d-inline-block"
            />
          </div>
        </b-form-group>
      </div>


      <template #code>
        {{ codeBasic }}
      </template>
    </b-card-code>
  </div>
</template>

<script>
// import axios from 'axios'
import BCardCode from '@core/components/b-card-code/BCardCode.vue'
import {
  BAvatar,
  BBadge,
  BPagination,
  BFormGroup,
  BFormInput,
  BFormSelect,
  BDropdown,
  BDropdownItem,
} from 'bootstrap-vue'
import { VueGoodTable } from 'vue-good-table'
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'
import store from '@/store/index'
import { codeBasic } from './code'
import AddCandidate from '@/components/AddCandidate.vue'

export default {
  components: {
    BCardCode,
    VueGoodTable,
    BAvatar,
    BBadge,
    BPagination,
    BFormGroup,
    BFormInput,
    BFormSelect,
    BDropdown,
    AddCandidate,
    BDropdownItem,
  },
  computed: mapGetters(['allCandidates']),
  methods: mapActions(['fetchCandidates', 'remove']),
  created() {
    // this.fetchCandidates()
    this.fetchCandidates()
  },
  // another way
  // mounted() {
  //   this.$store.dispatch('fetchCandidates')
  // },
  data() {
    return {
      pageLength: 3,
      dir: false,
      codeBasic,
      columns: [
        {
          label: 'Candidate Name',
          field: 'candidate_name',
        },
        {
          label: 'Candidate Reference',
          field: 'location',
        },
        {
          label: 'Candidate Location',
          field: 'location',
        },
        {
          label: 'Current Position',
          field: 'location',
        },
        {
          label: 'Notice Period',
          field: 'location',
        },
        {
          label: 'Current Salary',
          field: 'location',
        },
        {
          label: 'Expected Salary',
          field: 'location',
        },
        {

          label: 'Candidate Owner',
          field: 'location',
        },
        {
          label: 'Action',
          field: 'action',
        },
      ],
      candidate: [],
      searchTerm: '',
      // status: [
      //   {
      //     1: 'Current',
      //     2: 'Professional',
      //     3: 'Rejected',
      //     4: 'Resigned',
      //     5: 'Applied',
      //   },
      //   {
      //     1: 'light-primary',
      //     2: 'light-success',
      //     3: 'light-danger',
      //     4: 'light-warning',
      //     5: 'light-info',
      //   },
      // ],
    }
  },
  // computed: {
  //   statusVariant() {
  //     const statusColor = {
  //       /* eslint-disable key-spacing */
  //       Current: 'light-primary',
  //       Professional: 'light-success',
  //       Rejected: 'light-danger',
  //       Resigned: 'light-warning',
  //       Applied: 'light-info',
  //       /* eslint-enable key-spacing */
  //     }

  //     return status => statusColor[status]
  //   },
  //   direction() {
  //     if (store.state.appConfig.isRTL) {
  //       // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  //       this.dir = true
  //       return this.dir
  //     }
  //     // eslint-disable-next-line vue/no-side-effects-in-computed-properties
  //     this.dir = false
  //     return this.dir
  //   },
  // },
  // mounted() {
  //   axios.get('http://localhost:3005/candidate').then(res => {
  //     this.rows = res.data
  //     console.log('kenza', res.data)
  //   })
  // },

}
</script>
