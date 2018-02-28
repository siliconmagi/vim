<!-- Basic Component -->
<template>
  <div>

  </div>
</template>

<script>

</script>

<!-- Import Component -->
<script>
  import Client from '../../components/Client'

  export default {
    components: {
      Client
    }
  }
</script>

<!-- Vuex data binding to store -->
<!-- 1) Input text component -->
<template>
  <div>
    <h2>Calculator</h2>
    <input :value="txtNumer" @input="txtUpdate" placeholder="Enter a word">
    <p>{{ txtNumer }}</p>
  </div>
</template>

<script>
  import {
    mapState
  } from 'vuex'

  export default {
    computed: {
      ...mapState({
        // Map input value to store.txtNumer
        txtNumer: state => state.txtNumer
      })
    },
    methods: {
      txtUpdate(e) {
        // On input, run mutation txtUpdate 
        this.$store.commit('txtUpdate', e.target.value)
      }
    }
  }
</script>

<!-- 2) Vuex Store -->
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  txtNumer: ""
}

const mutations = {
  txtUpdate(state, txtNumer) {
    state.txtNumer = txtNumer
  }
}

const actions = {
  
}

const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
