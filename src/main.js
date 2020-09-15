import Vue from 'vue'
import App from './App.vue'
import './styles/common.scss'
import _ from 'lodash';
import Components from './components';

_.forEach(_.toPairs(Components), ([ name, component ]) => {
  Vue.component(name, component)
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

