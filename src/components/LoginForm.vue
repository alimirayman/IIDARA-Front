<template>
  <div class="form-container">
    <div class="col-6 form">
      <div class="card shadow-large p-5">
        <form>
          <div class="form-group">
              <label>Email address</label>
              <input v-model="form.email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
              <label>Password</label>
              <input v-model="form.password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn">Submit</button>
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
  method: {
    submit () {
      this.$store.dispatch('LOGIN', this.form)
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
  }

  .form {
    margin-bottom: 80px;
  }

  ::placeholder {
    color: #6f6f6f;
  }
  .form-control{
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
</style>
