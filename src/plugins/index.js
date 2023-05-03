import  vuetify             from '@/plugins/vuetify.js';
import  router              from '@/router';
import  { createPinia }     from 'pinia';

export function registerPlugins (app) {
  app
    .use(createPinia())
    .use(router)
    .use(vuetify)
}
