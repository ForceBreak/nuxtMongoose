<template>
  <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="10"
      :rules="nameRules"
      label="Password"
      required
    ></v-text-field>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="send"
    >
      Sign Up
    </v-btn>

  </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: 'Name',
      password: 'nlknlk',
      nameRules: [
        v => !!v || 'Field is required',
        v => (v && v.length <= 10) || 'Must be less than 10 characters',
      ],
      email: 'sfdsf@sfs.df',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      send () {
        if (this.$refs.form.validate()) {
          this.$axios.post('/users', {
            name: this.name,
            email: this.email,
            password: this.password
          })
          // .then((res) => {
          //   return this.$auth.loginWith('custom', {
          //     data: {
          //       login: res.data.name,
          //       email: res.data.email
          //     }
          //   })
          // })
          // .then(() => {
          //   this.$router.push('/')
          // })
        }
      },
      reset () {
        this.$refs.form.reset()
      },
    },
  }
</script>

<style>

</style>