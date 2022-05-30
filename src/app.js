import { createApp } from 'vue'

import App from './App.vue'

import SectionContent from './components/SectionContent/index.vue'
import CirclePattern from './components/CirclePattern/index.vue'

import infos from '/public/infos.json'

const app = createApp(App)

// injeet the data in the app
app.provide('infos', infos)

// Global components
app.component('section-content', SectionContent)
app.component('circle-pattern', CirclePattern)

// Mount the app after 1 sec
setTimeout(() => app.mount('#app'), 1000)