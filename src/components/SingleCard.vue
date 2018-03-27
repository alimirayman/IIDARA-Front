<template>
  <div>
    <div class="card shadow-large bg-light my-5">
      <div class="card-body">
        <div class="row no-gutters">
          <div class="col-sm-8">
            <p> {{card.title}} </p>
          </div>
          <div class="col-sm-4 mt-3">
            <p class="text-right"> {{card.allocated_time}} </p>
          </div>
        </div>
        <div class="card-text p-1">
          {{ card.description }}
        </div>
        <div class="card-text px-3 pt-3" v-if="card.images.length">
          <p>Images</p>
          <div class="row">
            <a :href="image" class="col-4 pb-3" target="_blank" v-for="(image, key) in card.images" :key="key">
              <img :src="image" class="img-fluid rounded ">
            </a>
          </div>
        </div>
        <div class="card-text px-3 pt-3" v-if="card.attachments.length">
          <p>Files</p>
          <div class="row">
            <a :href="f" class="col-4 pb-3" target="_blank" v-for="(f, key) in form.attachments" :key="key">
              <div class="file flex-column text-center d-flex justify-content-center border rounded"> File {{ key+1 }}</div>
            </a>
          </div>
        </div>
      </div>
      <!-- <div class="progress" v-if="uploading">
        <div
          class="progress-bar" role="progressbar"
          :style="{width: uploading+'%'}" :aria-valuenow="uploading"
          aria-valuemin="0" aria-valuemax="100"
          >
        </div>
      </div> -->
      <div class="card-footer">
        <!-- <input type="file" ref="fileSelect" @change="fileOnChange" class="d-none">
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
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    card () {
      return this.$store.getters.card(this.id)
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
