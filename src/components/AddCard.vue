<template>
  <div>
    <div class="row">
      <div class="col-lg-6 col-md-8 col-sm-10 col-xs-12 mx-auto">
        <div class="card shadow-large bg-light my-5">
          <img class="card-img-top" :src="selectedFile" alt="Card image cap" v-if="selectedFile" :style="{background: selectedFileColor}">
          <div class="card-body">
            <div class="row no-gutters">
              <div class="col-sm-8">
                <input type="text" class="form-control form-control-lg" id="form.title" aria-describedby="form.title" placeholder="Card Title" v-model="form.title" >
              </div>
              <div class="col-sm-4 mt-3">
                <input type="text" class="form-control form-control-sm text-right" id="form.allocation_time" aria-describedby="form.allocation_time" placeholder="Allocated Time" v-model="form.allocated_time" >
              </div>
            </div>
            <div class="card-text p-1">
              <textarea type="text" class="form-control" id="form.description" aria-describedby="form.description" placeholder="Detailed Descreaption of the Task..." v-model="form.description" >
              </textarea>
            </div>
            <div class="card-text">
              <small class="text-muted">
                <select class="form-control" id="form.assigned_To" aria-describedby="form.assigned To" placeholder="Card Assigned To" v-model="form.karigor_id">
                  <option value="0">Card Assigned To</option>
                  <option v-for="k in karigor" :key="k.id" :value="k.id">{{k.name}}</option>
                </select>
              </small>
            </div>
            <div class="card-text px-3 pt-3" v-if="images.length">
              <p>Images</p>
              <div class="row">
                <a :href="form.images[key]" class="col-4 pb-3" v-for="(image, key) in images" :key="key">
                  <img :src="image" class="img-fluid rounded ">
                </a>
              </div>
            </div>
            <div class="card-text px-3 pt-3" v-if="files.length">
              <p>Files</p>
              <div class="row">
                <a :href="files[key]" class="col-4 pb-3" v-for="(f, key) in files" :key="key">
                  <div class="file flex-column text-center d-flex justify-content-center border rounded"> File {{ key+1 }}</div>
                </a>
              </div>
            </div>
          </div>
          <div class="progress" v-if="uploading">
            <div
              class="progress-bar" role="progressbar"
              :style="{width: uploading+'%'}" :aria-valuenow="uploading"
              aria-valuemin="0" aria-valuemax="100"
              >
            </div>
          </div>
          <div class="card-footer">
            <input type="file" ref="fileSelect" @change="fileOnChange" class="d-none">
            <div class="d-flex flex-row justify-content-between">
              <button
                class="btn"
                @click="(!uploading) && $refs.fileSelect.click()"
                :class="{disabled: uploading}"
                >
                Upload Attachment</button>
              <button class="btn"
                @click="addCard"
                :class="{disabled: uploading}"
                >Add Card</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Vibrant from 'node-vibrant'

export default {
  data () {
    return {
      images: [],
      files: [],
      selectedFile: null,
      selectedFileColor: '',
      showImage: false
    }
  },
  computed: {
    ...mapGetters({
      karigor: 'karigor',
      form: 'newCard',
      uploading: 'uploaded'
    })
  },
  methods: {
    changeSelected (id) {
      this.selectedFile = this.images[id]
    },
    previewImage (file) {
      let vm = this
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function () {
        if (~reader.result.indexOf('image')) {
          let v = new Vibrant(reader.result)
          v.getPalette()
            .then(palette => {
              console.log(palette)
              if (palette.Muted) {
                vm.selectedFileColor = palette.Muted.getHex()
              } else if (palette.LightMuted) {
                vm.selectedFileColor = palette.LightMuted.getHex()
              } else if (palette.DarkVibrant) {
                vm.selectedFileColor = palette.DarkVibrant.getHex()
              }
            })
          vm.images.push(reader.result)
          vm.selectedFile = reader.result
          vm.showImage = true
        } else {
          vm.files.push(reader.result)
        }
      }
      reader.onerror = function (error) {
        console.log('Error: ', error)
      }
    },
    async fileOnChange (event) {
      let file = event.target.files[0]
      const fd = new FormData()
      fd.append('file', file, file.name)
      await this.$store.dispatch('UPLOAD_CARD_FILE', fd)
      this.previewImage(file, this)
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
    border-width: 0;
    border-radius: 4px;
  }
  img {
    max-height: 200px;
    object-fit: contain;
  }
  .progress {
    border-radius: 0;
    height: 4px;
  }
  .file{
    min-height: 100px;
    width: 100%;
    background: #444;
    color: #eee;
    font-size: 1.5rem;
  }
</style>
