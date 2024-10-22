import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faFileLines } from '@fortawesome/free-regular-svg-icons'

library.add(faEnvelope, faFileLines, faGithub, faLinkedinIn)

config.autoAddCss = false

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('fontawesome', FontAwesomeIcon, {})
})