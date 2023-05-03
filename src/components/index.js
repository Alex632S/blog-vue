import { defineAsyncComponent } from 'vue'

export function requireComponents (app) {
    Object.entries(import.meta.glob('./**/*.vue')).map(item => {
        app.component(item[0].replace(/.*\/([\w\-]+)\.vue/gi, "$1"), defineAsyncComponent(() => item[1]()))
    })
}