<template>
  <div class="form-container">
    <div class="display-4 mb-4 login-title">Add User</div>
    <div class="col-6 form">
      <div class="card shadow-large p-5  bg-light">
        <form>
          <div class="form-group">
              <input v-model="user.name" type="text" class="form-control" placeholder="Name">
          </div>
          <div class="form-group">
              <input v-model="user.email" type="email" class="form-control" aria-describedby="emailHelp" placeholder="Email">
          </div>
          <div class="form-group">
              <input v-model="user.password" type="password" class="form-control"  placeholder="Password">
          </div>
          <div class="form-group">
              <input v-model="user.username" type="text" class="form-control" placeholder="Username">
          </div>
          <div class="form-group">
              <input v-model="user.role" type="text" class="form-control" placeholder="Role">
          </div>
          <button  @click="submit" class="btn mt-2">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        email: '',
        password: '',
        name: '',
        username: '',
        role: ''
      }
    }
  },
  methods: {
    submit () {
      console.log(this.user)
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
