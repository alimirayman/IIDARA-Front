<template>
  <div class="form-container">
    <div class="display-4 mb-4 login-title">Login</div>
    <div class="col-md-8 col-lg-6   form">
      <div class="card shadow-large p-5 bg-light">
        <form>
          <div class="form-group">
              <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="form-group">
              <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button @click.prevent="submit" class="btn mt-2">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    async submit () {
      await this.$store.dispatch('LOGIN', this.form)
      this.$router.push({name: 'DashBoard'})
    }
  }
}
</script>

<style scoped>
  .form-container {
    height: calc(100vh - 80px);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .form {
    margin-bottom: 80px;
  }

  ::placeholder {
    color: #6f6f6f;
  }

  .form-control{
    border: none;
    background: transparent;
    color: #222 !important;
  }

  .form-control:focus{
    box-shadow: none
  }

  option{
    color: #444;
  }

  .login-title {
    border-bottom: 1px solid gray;
    padding-bottom: 1rem;
  }

  .card{
    border-width: 0;
    border-radius: 4px;
  }
</style>
