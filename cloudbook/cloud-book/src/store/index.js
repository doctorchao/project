import Vue from 'vue'
import Vuex from 'vuex'
import {fetch} from '@/utils/index'
import api from '@/utils/api'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)// 装载vuex

const store = new Vuex.Store({
	state: {
		usermsg: {}
	},
	mutations: {
		'CHANGE_USER_MSG' (state, usermsg) {
			state.usermsg = usermsg
		}
	},
	actions: {
		getusermsg (context) {
      fetch.get(api.getuser).then(res => {
        context.commit('CHANGE_USER_MSG', res.data)
      })
    }
  },
  // plugins:[
  //   function(){
  //     console.log('哈哈哈')
  //   }
  // ],
	plugins: [
    createPersistedState({
      localStorage: {
        getItem: key => localStorage.get(key),
        // Please see https://github.com/js-cookie/js-cookie#json, on how to handle JSON.
        setItem: (key, value) =>
          localStorage.set(key, value, { expires: 3, secure: true }),
        removeItem: key => localStorage.remove(key),
      },
    })
  ]
})

export default store