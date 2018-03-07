<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
        <div class="card bg-light my-5">
          <!-- <img class="card-img-top" src="..." alt="Card image cap"> -->
          <div class="card-body">
            <div class="row no-gutters">
              <div class="col-sm-8">
                <input type="text" class="form-control form-control-lg" id="form.title" aria-describedby="form.title" placeholder="Card Title" v-model="form.title" >
              </div>
              <div class="col-sm-4 mt-3">
                <input type="text" class="form-control form-control-sm text-right" id="form.allocation_time" aria-describedby="form.allocation_time" placeholder="Card Allocation Time" v-model="form.allocation_time" >
              </div>
            </div>
            <div class="card-text p-1">
              <textarea type="text" class="form-control" id="form.description" aria-describedby="form.description" placeholder="Detailed Descreaption of the Task..." v-model="form.description" >
              </textarea>
            </div>
            <div class="card-text">
              <small class="text-muted">
                <select class="form-control" id="form.assigned_To" aria-describedby="form.assigned To" placeholder="Card Assigned To" v-model="form.assigned_to">
                  <option value="0">Card Assigned To</option>
                  <option v-for="k in karigor" :key="k.id" :value="k.id">{{k.name}}</option>
                </select>
              </small>
            </div>
          </div>
          <div class="card-footer text-white d-flex flex-row justify-content-between">
            <input type="file" ref="fileSelect" @change="fileOnChange" class="d-none">
            <div class="btn bg-dark" @click="$refs.fileSelect.click()">Upload Image</div>
            <div class="btn bg-dark" @click="addCard">Add Card</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      form: {
        title: '',
        description: '',
        assigned_to: '0',
        attocation_time: '',
        images: []
      },
      selectedFile: null
    }
  },
  computed: {
    ...mapGetters([
      'karigor'
    ])
  },
  methods: {
    fileOnChange (event) {
      this.selectedFile = event.targer.files
    },
    addCard () {
      this.$store.dispatch('POST_CARD', this.form)
    }
  }
}
</script>

<style scoped>
  ::placeholder {
    color: #6f6f6f;
  }
  .form-control{
    border: 0;
    background: transparent;
    color: #222 !important;
  }
  .form-control:focus{
    box-shadow: none
  }
  option{
    color: #444;
  }
  .card{
    border-radius: 2px;
  }
</style>
