import axios from "axios";
axios.defaults.baseURL = "http://112.74.49.86:1234";
// var baseurl = "http://localhost:1234";
export default{
    changeModel({commit}){
        commit(changeM);
    },
    showDate({commit}){
        // axios.get('http://www.sojson.com/open/api/lunar/json.shtml')
        // .then(res=>{
        //     return res.data;
        // }).then(json=>{
        //     commit('showDate',json)
        // }).then({

        // })
        commit('showDate')
    },
    doActiveIdx({commit},idx){
        commit('doActiveIdx',idx)
    },
    refresh({commit}){
        commit('refresh');
    },
    showMenu({commit}){
        commit('showMenu');
    },
    hideMenu({commit}){
        commit('hideMenu');
    },
    getOrigin({commit},event){
        commit('getOrigin',event.touches[0].clientX)
    },
    dologin({commit},username){
        console.log(username);
        axios.post('userinfo',{
            username:username
        })
        .then(res=>{
            return res.data;
        }).then(json=>{
            if(json.msg!="error"){
                commit('dologin',json[0])
            }
        }).then({
            
        })
    },
    nextmsg({commit},data){
        commit('nextmsg',data);
    },
    getPoem({commit}){
        axios.get('/daily')
        .then(res=>{
            return res.data;
        }).then(json=>{
            if(json.state!=0){
                commit("getPoem",json.poem);
            }
        }).then(()=>{
            
        })
    },
    getAllPoem({commit},str){
        axios.get('/allpoem',{
            params:{
                count:str
            }
        })
        .then(res=>{
            return res.data;
        }).then(json=>{
            if(json.state!=0){
                commit("getAllPoem",json.data);
            }
        }).then(()=>{

        })
    }
}