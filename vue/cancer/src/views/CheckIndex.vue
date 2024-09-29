<template>
  <div>
    <div class="wrapper">
      <div class="header">
        <div class="banner">
          <a class="logo">癌憂Away</a>
          <nav>
            <div>
              <router-link :to="'/CheckIndex'"><a>今日事務</a></router-link>
            </div>
            <div>
              <router-link :to="'/index'"><a>病患資料</a></router-link>
            </div>
            <div>
              <router-link :to="'/depressionIndex'"
                ><a>憂鬱症專區</a></router-link
              >
            </div>
            <div>
              <router-link :to="'/setting'"><a>設定</a></router-link>
            </div>
          </nav>
        </div>
      </div>

      <div class="container">
        <!-- 搜尋代辦事項 -->
        <div class="searchTodo">
          <div class="searchTime">
            <input
              type="date"
              name="searchTime"
              id="searchTime"
              v-model="searchTime"
            />
          </div>
          <div class="searchWork">
            <input
              type="text"
              id="searchWork"
              v-model="searchWork"
              placeholder="搜尋日期 or 代辦事項"
            />
          </div>
          <div class="searchBtn">
            <button @click="handleSearch()">搜尋</button>
          </div>
        </div>

        <!-- 新增代辦事項 -->
        <div class="insertTodo">
          <div>
            <label for="todo">代辦事項</label>
            <input type="text" id="work" v-model="work" />
          </div>
          <div>
            <label for="todoTime">時間</label>
            <input type="datetime-local" id="todoTime" v-model="todoTime" />
          </div>
          <div>
            <button id="insertButton" @click="addList()">新增</button>
          </div>
        </div>
        <div class="todoSelection">
          <div>
            <a
              :class="{ active: visibility == 'today' }"
              id="today"
              @click="todaylists(), (visibility = 'today')"
              href="#"
              >今天</a
            >
          </div>
          <div>
            <a
              :class="{ active: visibility == 'all' }"
              id="all"
              @click="todolists(), (visibility = 'all')"
              href="#"
              >全部</a
            >
          </div>
          <div>
            <a
              :class="{ active: visibility == 'done' }"
              id="done"
              @click="doneList(), (visibility = 'done')"
              href="#"
              >已完成</a
            >
          </div>
          <div>
            <a
              :class="{ active: visibility == 'doing' }"
              id="doing"
              @click="doingList(), (visibility = 'doing')"
              href="#"
              >未完成</a
            >
          </div>
        </div>
        <div class="todo">
          <div class="todolist">
            <todolist
              v-for="item in todolistData"
              :key="item.id"
              :item="item"
              @updateList="updateItem"
              @deleteList="deleteItem"
              @finishList="finishItem"
            />
          </div>
        </div>
      </div>

      <div class="footer">
        <div class="footerBg" :class="{ footerBgAbsolute: fullHeight < '500' }">
          <router-link :to="'/CheckIndex'" class="router-link-footer">
            <div>
              <img src="../assets/img/check.png" alt="今日事務" />
              <a>今日事務</a>
            </div>
          </router-link>

          <router-link :to="'/index'" class="router-link-footer">
            <div>
              <img src="../assets/img/patient-un.png" alt="病患資料" />
              <a>病患資料</a>
            </div>
          </router-link>

          <router-link :to="'/depressionIndex'" class="router-link-footer">
            <div>
              <img src="../assets/img/broken-heart-un.png" alt="憂鬱症專區" />
              <a>憂鬱症專區</a>
            </div>
          </router-link>

          <router-link :to="'/setting'" class="router-link-footer">
            <div>
              <img src="../assets/img/settings-un.png" alt="設定" />
              <a>設定</a>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import todolistData from "../data/todolistData.json";
import todolist from "../components/todolist.vue";
import {
  searchList,
  todayList,
  allList,
  insertList,
  updateList,
  deleteList,
  finishList,
  getDoingList,
  getDoneList,
} from "../services/api";
import Cookies from "js-cookie";

export default {
  components: {
    todolist,
  },

  data() {
    return {
      // todolistData: todolistData,
      todolistData: [],
      id: "",
      todoTime: "",
      work: "",
      state: "",
      token: "",
      searchTime: "",
      searchWork: "",
      fullHeight: 0,
      fullWidth: 0,
      visibility: "today",
    };
  },
  methods: {
    //搜尋todo
    handleSearch() {
      searchList({
        token: this.token,
        date: this.searchTime,
        work: this.searchWork,
      }).then((res) => {
        console.log(res);
        this.todolistData = res.data;
      });
    },

    // 所有todo（今天）
    todaylists() {
      todayList({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.todolistData = res.data;
      });
    },

    // 所有todo（全部）
    todolists() {
      allList({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.todolistData = res.data;
      });
    },

    //新增todo
    addList() {
      if (this.todoTime == "" || this.work == "") {
        alert("內容及時間不得為空！");
      } else {
        insertList({
          todoTime: this.todoTime,
          work: this.work,
          state: "0",
          token: this.token,
        }).then(() => {
          alert("新增成功");
          this.todoTime = "";
          this.work = "";
          this.state = "";
          this.$router.go(0);
          // this.todolists();
        });
      }
    },

    //修改todo
    updateItem(id, todoTime, work, state) {
      updateList({
        id: id,
        todoTime: todoTime,
        work: work,
        state: state,
        token: this.token,
      }).then(() => {
        this.$router.go(0);
        alert("修改成功");
      });
    },

    //刪除todo
    deleteItem(id) {
      deleteList({ id: id, token: this.token }).then(() => {
        alert("刪除成功");
        this.todolists();
      });
    },

    //完成todo
    finishItem(id, state) {
      finishList({ id: id, state: state, token: this.token });
    },

    //已完成todo
    doneList() {
      getDoneList({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.todolistData = res.data;
      });
    },

    //未完成todo
    doingList() {
      getDoingList({
        token: this.token,
      }).then((res) => {
        console.log(res);
        this.todolistData = res.data;
      });
    },
  },

  mounted() {
    this.token = Cookies.get("token");
    this.todaylists();
    // this.handleSearch();
    // 取得頁面高度
    const vm = this;
    vm.fullWidth = window.innerWidth;
    vm.fullHeight = window.innerHeight;
    window.onresize = () => {
      vm.fullWidth = window.innerWidth;
      vm.fullHeight = window.innerHeight;
    };
  },
};
</script>

<style  scoped>
.insertTodo label {
  font-weight: bold;
}

.insertTodo input {
  padding: 0 10px;
}

.insertTodo button:hover {
  background-color: #a7b59d;
}

.banner {
  width: 100%;
}

.searchTodo label {
  font-weight: bold;
}

.searchTodo button:hover {
  background-color: #a7b59d;
}

::placeholder {
  color: rgb(176, 176, 176);
}

@media screen and (min-width: 1025px) {
  .searchTodo {
    width: 100%;
    max-width: 950px;
    height: 40px;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    border: 3px solid #859a75;
    /* border-radius: 20px; */
  }

  .searchTime {
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 10px;
    border-right: #859a75 3px solid;
  }

  .searchWork {
    /* width: 700px; */
    display: flex;
    justify-content: space-between;
  }

  .searchTime input[type="date"] {
    font-size: 16px;
    outline: none;
    border: 0;
    /* background-color: #ece9db; */
    border-radius: 10px;
    height: 30px;
    width: 120px;
  }

  .searchTodo input[type="text"] {
    font-size: 20px;
    border: 0;
    outline: none;
    padding-left: 8px;
    /* background-color: #ece9db; */
    /* border-radius: 10px; */
    height: 30px;
    width: 738px;
  }
  .searchBtn {
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
  }

  .searchBtn button {
    width: 75px;
    height: 38px;
    border: 0;
    /* border-radius: 20px; */
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
  }

  .searchBtn img {
    width: 40px;
    height: 40px;
  }

  .insertTodo {
    width: 100%;
    min-width: 950px;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin: 50px auto;
  }

  .insertTodo div {
    display: flex;
    align-content: center;
  }

  .insertTodo input {
    font-size: 16px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
    margin-left: 10px;
    margin-right: 40px;
  }

  .insertTodo button {
    width: 75px;
    height: 35px;
    /* line-height: 30px; */
    border: 0;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
  }

  .todoSelection {
    /* width: 50%; */
    max-width: 900px;
    font-size: 22px;
    font-weight: bold;
    /*text-decoration: underline;*/
    color: #fff;
    display: flex;
    /*justify-content: space-around;*/
    align-items: center;
    margin: 0 auto;
    /* border-bottom: 5px solid #c0c0c0;*/
  }

  .todoSelection div {
    width: 100px;
    height: 45px;
    background-color: #c0c0c0;
    margin-left: 30px;
    border-radius: 5px;
    transform: scale(1.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  /* .todoSelection a {
    width: 100px;
    height: 45px;
    background-color: #c0c0c0;
  } */

  /*.todoSelection a:hover {
    background-color: #859a75;
  }*/

  .active {
    color: #d89c52;
    /* border-bottom: 1px solid #fff; */
    background-color: #ece9db;
    border-radius: 5px;
    transform: scale(1.1);
    width: 100px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 5px solid #c0c0c0;
    width: 90%;
    max-width: 900px;
  }

  .todolist {
    /* max-width: 900px;
    width: 90%; */
    margin: 40px 0;
    /* margin-top: 50px;*/
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }
}

/* 平板 */
@media screen and (min-width: 767px) and (max-width: 1024px) {
  /* .container {
    padding-bottom: 100px;
  } */

  .container {
    margin-bottom: 50px;
  }

  .searchTodo {
    width: 100%;
    max-width: 700px;
    height: 40px;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    border: 3px solid #859a75;
    /* border-radius: 20px; */
  }

  .searchTime {
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-left: 5px; */
    border-right: #859a75 3px solid;
  }

  .searchTime input[type="date"] {
    font-size: 16px;
    outline: none;
    border: 0;
    /* background-color: #ece9db; */
    border-radius: 10px;
    height: 30px;
    width: 120px;
  }

  .searchWork {
    width: 700px;
    display: flex;
    justify-content: space-between;
  }

  .searchTodo input[type="text"] {
    font-size: 20px;
    border: 0;
    outline: none;
    padding-left: 8px;
    /* background-color: #ece9db; */
    /* border-radius: 10px; */
    height: 30px;
    width: 498px;
  }
  .searchBtn {
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
  }

  .searchBtn button {
    width: 75px;
    height: 37px;
    border: 0;
    /* border-radius: 20px; */
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
  }

  .insertTodo {
    width: 100%;
    max-width: 600px;
    font-size: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
  }

  .insertTodo div {
    line-height: 35px;
    display: flex;
    align-content: center;
    margin-bottom: 20px;
  }

  .insertTodo input {
    height: 35px;
    font-size: 16px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
    margin-left: 10px;
  }

  .insertTodo [type="text"] {
    width: 400px;
  }

  .insertTodo [type="time"] {
    margin-right: 140px;
  }

  .insertTodo button {
    width: 75px;
    height: 35px;
    line-height: 35px;
    border: 0;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
    margin-left: 10px;
  }

  .todoSelection {
    width: 90%;
    max-width: 750px;
    font-size: 20px;
    font-weight: bold;
    /* text-decoration: underline; */
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    /* margin-top: 30px; */
  }

  .todoSelection div {
    width: 90px;
    height: 40px;
    background-color: #c0c0c0;
    margin-left: 25px;
    border-radius: 5px;
    transform: scale(1.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    color: #d89c52;
    /* border-bottom: 1px solid #fff; */
    background-color: #ece9db;
    border-radius: 5px;
    transform: scale(1.1);
    width: 90px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 5px solid #c0c0c0;
    width: 90%;
    max-width: 750px;
  }

  .todolist {
    /* width: 80%; */
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    /* margin-top: 50px; */
  }
}

/* 手機 */
@media screen and (min-width: 551px) and (max-width: 767px) {
  /* .container {
    padding-bottom: 90px;
  } */

  .searchTodo {
    width: 90%;
    max-width: 540px;
    height: 40px;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    border: 3px solid #859a75;
    /* border-radius: 20px; */
  }

  .searchTime {
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-left: 5px; */
    border-right: #859a75 3px solid;
  }

  .searchTime input[type="date"] {
    font-size: 16px;
    outline: none;
    border: 0;
    /* background-color: #ece9db; */
    border-radius: 10px;
    height: 30px;
    width: 110px;
  }

  .searchWork {
    width: 320px;
    display: flex;
    justify-content: space-between;
  }

  .searchTodo input[type="text"] {
    font-size: 18px;
    border: 0;
    outline: none;
    padding-left: 8px;
    /* background-color: #ece9db; */
    /* border-radius: 10px; */
    height: 30px;
    width: 350px;
  }

  .searchBtn {
    width: 75px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
  }

  .searchBtn button {
    width: 75px;
    height: 40px;
    border: 0;
    /* border-radius: 20px; */
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
  }

  .insertTodo {
    width: 100%;
    max-width: 600px;
    font-size: 20px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    margin: 30px auto;
  }

  .insertTodo div {
    line-height: 32px;
    display: flex;
    align-content: center;
    margin-bottom: 25px;
  }

  .insertTodo input {
    height: 32px;
    font-size: 16px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
    margin-left: 10px;
    /* margin-right: 20px; */
  }

  .insertTodo [type="text"] {
    width: 350px;
  }

  .insertTodo [type="time"] {
    margin-right: 90px;
  }

  .insertTodo button {
    width: 75px;
    height: 32px;
    line-height: 35px;
    border: 0;
    border-radius: 20px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
    margin-left: 10px;
  }

  .todoSelection {
    width: 90%;
    max-width: 550px;
    font-size: 18px;
    font-weight: bold;
    /* text-decoration: underline; */
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    /* margin-top: 20px; */
  }

  .todoSelection div {
    width: 75px;
    height: 40px;
    background-color: #c0c0c0;
    margin-left: 25px;
    border-radius: 5px;
    transform: scale(1.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .active {
    color: #d89c52;
    /* border-bottom: 1px solid #fff; */
    background-color: #ece9db;
    border-radius: 5px;
    transform: scale(1.1);
    width: 75px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 5px solid #c0c0c0;
    width: 90%;
    max-width: 570px;
  }

  .todolist {
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

  .container {
    margin-bottom: 50px;
  }
}

@media screen and (max-width: 551px) {
  .container {
    min-width: 300px;
  }

  .searchTodo {
    width: 90%;
    max-width: 400px;
    height: 40px;
    font-size: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto;
    border: 3px solid #859a75;
    /* border-radius: 20px; */
  }

  .searchTime {
    width: 150px;
    height: 35px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* padding-left: 5px; */
    border-right: #859a75 3px solid;
  }

  .searchTime input[type="date"] {
    font-size: 16px;
    outline: none;
    border: 0;
    /* background-color: #ece9db; */
    border-radius: 10px;
    height: 30px;
    width: 90px;
  }

  .searchWork {
    width: 350px;
    display: flex;
    justify-content: space-between;
  }

  .searchTodo input[type="text"] {
    font-size: 16px;
    border: 0;
    outline: none;
    padding-left: 8px;
    /* background-color: #ece9db; */
    /* border-radius: 10px; */
    height: 30px;
    /* max-width: 200px; */
    width: 90%;
    max-width: 220px;
  }

  .searchBtn {
    width: 45px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 35px;
  }

  .searchBtn button {
    width: 50px;
    height: 40px;
    border: 0;
    /* border-radius: 20px; */
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
  }

  .insertTodo {
    height: 130px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;
    /* margin: 20px; */
  }

  .insertTodo div {
    width: 300px;
    /* line-height: 30px; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    /* margin-bottom: 25px; */
  }

  .insertTodo label{
    width: 40px;
  }

  .insertTodo input {
    height: 30px;
    font-size: 16px;
    outline: none;
    border: 0;
    background-color: #ece9db;
    border-radius: 10px;
    /* margin-left: 10px; */
  }

  .insertTodo [type="text"] {
    width: 200px;
  }

  .insertTodo input[type="datetime-local"] {
    width: 200px;
    /* margin-left: 45px; */
  }

  .insertTodo button {
    width: 55px;
    height: 30px;
    border: 0;
    border-radius: 20px;
    font-size: 16px;
    font-weight: bold;
    color: white;
    background-color: #859a75;
    margin: 0 auto;
    margin-top:10px;
  }

  /* 全部 已完成 未完成 */
  .todoSelection {
    width: 90%;
    max-width: 400px;
    min-width: 300px;
    font-size: 16px;
    font-weight: bold;
    /* text-decoration: underline; */
    color: #fff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0 auto;
    /* margin-top: 20px; */
  }

  .todoSelection div {
    width: 55px;
    height: 30px;
    background-color: #c0c0c0;
    margin-left: 17px;
    border-radius: 5px;
    transform: scale(1.15);
    display: flex;
    align-items: center;
    justify-content: center;
  
  }

    .active {
    color: #d89c52;
    /* border-bottom: 1px solid #fff; */
    background-color: #ece9db;
    border-radius: 5px;
    transform: scale(1.13);
    width: 55px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .todo {
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 5px solid #c0c0c0;
    width: 90%;
    max-width: 400px;
    min-width: 300px;
  }

  .todolist {
    margin: 40px 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
  }

    .container {
    margin-bottom: 50px;
  }
}
</style>