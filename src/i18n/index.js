import Vue from 'vue';
import VueI18n from 'vue-i18n'
import messages from './langs';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: localStorage.getItem('CASUALUI_LANGUAGE') || 'zh',
  messages
})

export default i18n