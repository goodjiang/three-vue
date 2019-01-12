import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

var state={
    users:[
        {email1:"姜长坤",email2:"13253422387",email3:"河南省郑州市二七区",email4:"千锋教育"}
    ],
    token:''
}

var  mutations={
    add( state , data ){
        state.users.push( data )
    },
    del( state , i ){
        state.users.splice( i , 1 )
    },
    addcart(state,data){
        state.cart.push(data)
    },
    del(state,i){
        state.cart.splice( i , 1 )
    },
    cun:function(a,b){
		a.token=b
	}
   
}


var actions = {
    addUser( {commit} , data ){
        commit('add',data)
    },
    delUser( {commit} , i ){
        commit( 'del' , i )
    },
    cun( {commit} , i ){
        commit( 'cun' , i )
    },
    
}

var getters = {
    allUsers(state){
        return state.users
    },
    list(state){
        return state.list
    },
    cun(state){
        return state.token
    }
}
var modules={
	status:{
		state:{
			status:''
		},
		getters:{
			status:function(state){
				return state.status
			}
		},
		mutations:{
			select:function(a,b){
				a.status=b
			}
		},
		actions:{
			select:({commit},b)=>{
				commit('select',b)
			}
		}
	}
}


export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})
