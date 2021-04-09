<template lang="">
    <div id=main>
        <Sidebar/>
        <br/>
        <h2 id="title">RTSP 정보
        <img v-on:click="modal" src="../../../assets/plus.png" class="png">
        </h2>

        <div v-show="is_show">
        <!-- 이부분을 모달로 -->
            <div>
                제조사<input type="text" v-model="newTodoItem">
                <button v-on:click="addTodo">추가</button>
                
            </div>
        </div>

        <!-- 이부분을 테이블로-->
        <section>
            <p>asdasd</p>
        <ul>
            <li v-for="todoItem in todoItems"> {{ todoItem }} </li>
        </ul>
        </section>

    </div>
</template>
<script>
import Sidebar from '../../common/SideBar'
import Modal from '../../common/modal'

export default {
    name: "RTSPinfo",
    components:{
        Sidebar,
        Modal
    },
    data(){
        return {
            newTodoItem: '',
            todoItems: [],
            is_show: false
        }
    },

    created() {
        console.log(localStorage.length);
        if(localStorage.length>0){
            for(var i=0; i<localStorage.length; i++){
                console.log(localStorage);
                this.todoItems.push(localStorage.key(i))
            }
        }
    },

    methods:{
        addTodo(){
            if(this.newTodoItem !== ""){
             console.log(this.newTodoItem);
             var value = this.newTodoItem && this.newTodoItem.trim();
             localStorage.setItem(value,value)
             this.clearInput();
            }
         },
        clearInput(){
            this.newTodoItem = '';     
         },
        modal(){
            console.log("바보");
            this.is_show = !this.is_show; // #2, #3
        },
    }
}
</script>
<style scope>

.h2{
    margin-block-start: 20000px;
}


.png { 
  width: 20px;
  height: 20px;
  object-fit: cover;
  }

</style> 