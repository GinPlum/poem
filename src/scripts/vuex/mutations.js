export default{
    changeM(state){
        state.model.switch = !state.model.switch;
    },
    showDate(state,data){
        // state.nowDate = data.year+'-'+data.month+'-'+data.day;
        // state.lunarDate = '农历'+data.cnmonth+'月'+data.cnday;
        var date = new Date();
        state.nowDate = date.getFullYear()+'-'+(date.getMonth()*1+1)+'-'+date.getDate();
    },
    doActiveIdx(state,idx){
        state.activeIdx = idx;
    },
    refresh(state){
    },
    showMenu(state){
        state.menuState = true;
    },
    hideMenu(state){
        state.menuState = false;
    },
    getOrigin(state,originDot){
        state.originDot = originDot;
    },
    dologin(state,userinfo){
        state.user = userinfo;
        state.user.avatar = "";
        state.user.follows = "0";
        state.user.followers = "0";
        state.user.sex="";
        state.user.birthday="";
    },
    nextmsg(state,data){
        state.codeNum = data;
    },
    getPoem(state,data){
        state.poemList = data;
    },
    getAllPoem(state,data){
        console.log(data);
        if(!state.allpoem){
            // console.log(1)
            state.allpoem = data ;
        }else if(data){
            // console.log(2)
            var obj=[];
            for(var i = 0;i<state.allpoem.length;i++){
                obj.push(state.allpoem[i])
                // console.log(state.allpoem[i])
            }
            // console.log(obj)
            // console.log(Object.assign(obj,data))
            state.allpoem = Object.assign(obj,data);
        }
    }
    
}