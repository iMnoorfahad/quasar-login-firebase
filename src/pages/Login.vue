<template>
  <q-page class="flex q-pa-md row justify-center">
    <div class="col-md-6 ">
      <q-card class="full-width">
        <q-tabs
          v-model="tab"
          dense
          class="bg-primary text-white shadow-2"
          active-color="yellow"
          indicator-color="yellow"
          align="justify"
          narrow-indicator
          inline-label
        >
          <q-tab name="login" icon="person" label="Login" />
          <q-tab name="register" icon="person_add" label="Register" />
        </q-tabs>


        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="login">
            <AuthComponent :tab="tab" />
          </q-tab-panel>

          <q-tab-panel name="register">
            <AuthComponent :tab="tab"/>
          </q-tab-panel>
        </q-tab-panels>
      </q-card>
    </div>
  </q-page>
</template>
<script>
// create function and log values
import AuthComponent from "components/AuthComponent";
export default {
  components: { AuthComponent },
  data () {
    return {
      tab: 'login'
    }
  }
}

</script>

<style>

</style>