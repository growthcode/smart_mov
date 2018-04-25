// import Vue from 'vue' //  Vue without the compiler, which means you cannot
// use Vue to target elements in your existing html templates. You would
// need to always use single file components.

import Vue from 'vue/dist/vue.esm' // Use this to be able to target elements in
// your existing html/erb templates
// Add <%= javascript_pack_tag 'file_name' %> to your layout

import App from '../app.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#hello',
    data: {
      message: "Can you say hello?"
    },
    components: { App }
  })
})
