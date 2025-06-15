import './styles/global.css'
import './styles/main.css'
import './styles/navigation.css'
import './styles/section.css'
import './styles/skills.css'
import 'material-icons/iconfont/material-icons.css'

import { createApp } from 'vue'
import { Quasar } from 'quasar'
import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/dist/quasar.css'

import App from './App.vue'

const app = createApp(App)
app.use(Quasar, {
    plugins: {},
    config: {
        brand: {
            primary: '#1976D2',
            secondary: '#26A69A',
            accent: '#9C27B0',
            dark: '#1D1D1D',
            positive: '#21BA45',
            negative: '#C10015',
            info: '#31CCEC',
            warning: '#F2C037'
        }
    }
})
app.mount('#app')
