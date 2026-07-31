import DefaultTheme from 'vitepress/theme'
import './custom.css'
import BentoHome from './components/BentoHome.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('BentoHome', BentoHome)
  }
}
