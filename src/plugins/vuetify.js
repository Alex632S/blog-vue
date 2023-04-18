import { aliases, md }      from 'vuetify/iconsets/md'
import { createVuetify }    from 'vuetify'
import * as components      from 'vuetify/components'
import * as directives      from 'vuetify/directives'
import colors               from 'vuetify/lib/util/colors'
import                           'vuetify/styles'
import                           'material-design-icons-iconfont/dist/material-design-icons.css'

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
  theme: {
    themes: {
      light: {
        dark: false,
        colors: {
          primary: colors.blue.darken1, // #E53935
          secondary: colors.red.lighten4, // #FFCDD2
        }
      },
    },
  },
})