import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import { aliases, md }      from 'vuetify/iconsets/md'
import { createVuetify }    from 'vuetify'
import * as components      from 'vuetify/components'
import * as directives      from 'vuetify/directives'

export default createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'md',
    aliases,
    sets: {
      md,
    },
  },
})