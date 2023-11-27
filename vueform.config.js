import ru from '@vueform/vueform/locales/ru'
import vueform from '@vueform/vueform/themes/vueform'
import { defineConfig } from '@vueform/vueform'

import '@vueform/vueform/themes/vueform/css/index.min.css';

export default defineConfig({
    theme: vueform,
    locales: { ru },
    locale: 'ru',
})