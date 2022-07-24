<template>
  <q-page class="flex q-pa-md">
    <p class="text-h3">
      Welcome Home {{ user }} {{ email }}
    </p>
    <q-space />
    <div>
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
    </div>
  </q-page>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
export default {
name: "Home",
  data () {
    return {
      user: '',
      email: ''
    }
  },
  created() {
    console.log('Home created');
    firebase.auth().onAuthStateChanged((auth) => {
      if (auth) {
        this.user = auth.displayName
        this.email = auth.email
      } else {
        console.log('user name is null')
      }
    })
  },
  methods: {
    logout() {
      firebase.auth().signOut()
      this.$router.push('/')
        .then(() => {
        this.$q.notify({message: 'Sign Out Success.'})
      })
      .catch(error =>  console.log('error',error))
    }  
  }
}
</script>
