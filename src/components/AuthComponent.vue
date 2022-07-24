<template>
  <div>
    <template v-if="tab === 'register'">
      <p class="text-center">Sign up with credentials</p>
    </template>
    <template v-else>
      <p class="text-center">Sign in with credentials</p>
    </template>

    <q-form @submit="submitForm" ref="loginEmailForm">
      <q-input 
        outlined
        class="q-mb-md"
        type="email"
        label="Email"
        v-model="formData.email"
        lazy-rules
        :rules="[val => (val && val.length > 0) || 'Please type your email']" />
      <q-input outlined class="q-mb-md" type="password" label="Password" v-model="formData.password" lazy-rules
            :rules="[val => (val && val.length > 0) || 'Please type your password']" />
      <div class="row">
        <q-space />
        <q-btn type="submit" color="primary" :label="tab" />
      </div>
    </q-form>
    <div class="text-center q-my-md">
      <q-btn flat label="Forgot Password?" color="white" class="text-capitalize rounded-borders bg-red"
        v-if="tab !== 'register'" @click="forgotPassword" />
    </div>
    <q-dialog v-model="resetPwdDialog">
      <ForgotPassword />
    </q-dialog>
  </div>
</template>
<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import ForgotPassword from "./ForgotPassword.vue";
export default {
  name: "AuthComponent",
  props: ['tab'],
  components: { ForgotPassword },
  data (){
    return {
      formData: {
        email: '',
        password: ''
      },
      resetPwdDialog: false
    }
  },
  methods: {
    submitForm () {
      if (this.tab === 'login') {
         this.signInExistingUser(this.formData.email, this.formData.password)
      } else {
        this.createUser(this.formData.email, this.formData.password)
      }
    },
     signInExistingUser (email, password) {
        firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/home')
        })
        .catch(error => { console.log(error)})
    },
    createUser(email, password) {
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(auth => {
        this.$q.notify({message: 'Sign In Success.'})
        this.$router.push('/home')
        })
        .catch(error => {console.log(error)
        })
    },
    forgotPassword () {
      this.resetPwdDialog = true
    }
  }
}
</script>