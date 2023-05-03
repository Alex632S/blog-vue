import { createApp }            from 'vue/dist/vue.esm-bundler'
import { registerPlugins }      from '@/plugins'
import { requireComponents }    from '@/components'

const app = createApp({template:`<v-app><router-view/></v-app>`})

registerPlugins(app)
requireComponents(app)

app.mount('#app')
