<template>
  <div class="list">
    <div class="check">
      <input
        v-if="item.state == '1'"
        type="checkbox"
        checked="checked"
        @click="(unFinish = !unFinish), (judge = !judge), unfinishItem(item.id)"
      />
      <input
        v-else-if="item.state == '0'"
        type="checkbox"
        @click="(isFinish = !isFinish), (judge = !judge), finishItem(item.id)"
      />
    </div>
    <div class="textbox">
      <div v-if="this.judge && !this.isEdit" class="completed">
        <a class="textbox-time">{{ item.todoTime.slice(0, -3) }}</a>
        <a class="textbox-name">{{ item.work }}</a>
      </div>
      <div v-else-if="!this.judge && !this.isEdit" class="unCompleted">
        <a class="textbox-time">{{ item.todoTime.slice(0, -3) }}</a>
        <a class="textbox-name">{{ item.work }}</a>
      </div>
      <div v-else-if="!this.isEdit && !this.isFinish">
        <a class="textbox-time">{{ item.todoTime.slice(0, -3) }}</a>
        <a class="textbox-name">{{ item.work }}</a>
      </div>
      <div v-else-if="!this.isEdit && this.isFinish" class="completed">
        <a class="textbox-time">{{ item.todoTime.slice(0, -3) }}</a>
        <a class="textbox-name">{{ item.work }}</a>
      </div>
      <!-- 修改輸入框 -->
      <div class="editList" v-else>
        <input
          type="datetime-local"
          class=""
          v-model="item.todoTime"
          required="required"
          id="todoTime"
        />
        <input
          type="text"
          class=""
          v-model="item.work"
          required="required"
          id="work"
        />
      </div>
    </div>
    <div class="listBtn">
      <button
        class="listBtn-edit"
        v-if="!this.isEdit"
        @click="isEdit = !isEdit"
      >
        編輯
      </button>
      <button
        class="listBtn-confirm"
        v-if="this.isEdit"
        @click="updateItem(item.id, item.todoTime, item.work, item.state)"
      >
        確認
      </button>
      <button class="listBtn-delete" @click="deleteItem(item.id)">刪除</button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      isEdit: false,
      isFinish: false,
      unFinish: false,
      judge: false,
    };
  },
  methods: {
    updateItem(id, todoTime, work, state) {
      if (todoTime == "" || work == "" || state == "") {
        alert("請確認輸入內容");
      } else {
        this.isEdit = !this.isEdit;
        this.$emit("updateList", id, todoTime, work, state);
      }
    },
    deleteItem(id) {
      this.$emit("deleteList", id);
    },

    finishItem(id) {
      let state;
      if (this.isFinish) {
        state = "1";
      } else {
        state = "0";
      }
      this.$emit("finishList", id, state);
    },

    unfinishItem(id) {
      let state;
      if (this.unFinish) {
        state = "0";
      } else {
        state = "1";
      }
      this.$emit("finishList", id, state);
    },
  },

  mounted() {
    if (this.item.state == "1") {
      this.judge = true;
    } else if (this.item.state == "0") {
      this.judge = false;
    }
  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
  color: #c0c0c0;
}

.unCompleted {
  text-decoration: none;
}

.check {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto 0;
}

.listBtn-edit {
  background-color: #c0c0c0;
}

.listBtn-confirm {
  background-color: #c0c0c0;
}

.listBtn-delete {
  background-color: rgb(187, 87, 87);
}

.listBtn-confirm,
.listBtn-edit:hover {
  background-color: gray;
}

.listBtn-delete:hover {
  background-color: rgb(147, 52, 52);
}

@media screen and (min-width: 1025px) {
  .list {
    display: flex;
    flex-direction: row;
    /* justify-content: space-around; */
    justify-content: flex-start;
    align-items: center;
    margin: 5px auto;
    font-size: 20px;
    /* width: 700px; */
    /* width: 90%;
    max-width: 900px; */
    height: 50px;
    /*background-color: #ece9db;*/
    /* border-radius: 7px; */
    /*transition: 0.2s;*/
    width: 80%;
    font-weight: bolder;
  }

  /* .list:hover {
    transform: scale(1.03);
    box-shadow: 3px 3px 7px rgba(58, 58, 58, 0.634);
  }*/

  .textbox {
    /* width: 80%; */
    /* max-width: 550px; */
    width: 570px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .textbox-time {
    width: 200px;
  }

  .textbox-name {
    margin-left: 20px;
    width: 350px;
  }

  .listBtn {
    width: 140px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .list button {
    width: 60px;
    height: 30px;
    font-size: 18px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    color: white;
  }

  input[type="checkbox"] {
    width: 25px;
    height: 25px;
    margin: auto 25px;
  }

  .editList {
    width: 500px;
    display: flex;
    justify-content: flex-start;
  }

  .editList input[type="time"] {
    font-size: 16px;
    outline: none;
  }
  .editList input[type="text"] {
    width: 320px;
    font-size: 18px;
    outline: none;
    margin-left: 10px;
    padding: 0 5px;
  }
}

@media screen and (min-width: 767px) and (max-width: 1024px) {
  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    /* margin-bottom: 20px; */
    margin: 5px auto;
    font-size: 20px;
    height: 50px;
    width: 90%;
    font-weight: bolder;
  }

  .textbox {
    width: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  .textbox-time {
    width: 200px;
  }

  .textbox-name {
    margin-left: 20px;
    width: 300px;
  }

  .listBtn {
    width: 135px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .list button {
    width: 60px;
    height: 30px;
    font-size: 18px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    color: white;
  }

  input[type="checkbox"] {
    width: 20px;
    height: 20px;
    margin: auto 20px;
  }

  .editList {
    width: 400px;
    display: flex;
    justify-content: flex-start;
  }

  .editList input[type="time"] {
    width: 120px;
    font-size: 15px;
    outline: none;
  }
  .editList input[type="text"] {
    width: 250px;
    font-size: 16px;
    outline: none;
    margin-left: 10px;
    padding: 0 5px;
  }
}

@media screen and (min-width: 551px) and (max-width: 767px) {
  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 18px;
    margin: 5px auto;
    height: 70px;
    width: 80%;
    font-weight: bolder;
  }

  .textbox {
    height: 70px;
    margin: 0 20px;
    display: flex;
    align-items: center;
    /* flex-direction: column; */
    /* justify-content: flex-start; */
  }

  .textbox div {
    /* width: 350px; */
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    height: 60px;
    /* flex-direction: column; */
    /* justify-content: space-between; */
  }

  .textbox-time {
    width: 160px;
  }

  .textbox-name {
    /* margin-left: 15px; */
    width: 200px;
  }

  .listBtn {
    width: 130px;
    /* min-width: 135px; */
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .list button {
    width: 60px;
    height: 30px;
    font-size: 16px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    color: white;
  }

  input[type="checkbox"] {
    width: 17px;
    height: 17px;
  }

  .editList {
    max-width: 400px;
    display: flex;
    justify-content: flex-start;
  }

  .editList input[type="time"] {
    width: 150px;
    font-size: 13px;
    outline: none;
  }
  .editList input[type="text"] {
    width: 100%;
    min-width: 150px;
    font-size: 15px;
    outline: none;
    margin-left: 10px;
    padding: 0 5px;
  }
}

@media screen and (max-width: 550px) {
  .list {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size: 15px;
    margin: 5px auto;
    height: 70px;
    width: 80%;
    font-weight: bolder;
  }

  .check {
    margin-right: 10px;
  }

  .textbox {
    width: 200px;
    height: 70px;
    margin: 0 10px;
    display: flex;
    align-items: center;
  }

  .textbox div {
    height: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  .listBtn {
    width: 70px;
    height: 65px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }

  .list button {
    width: 50px;
    height: 25px;
    font-size: 14px;
    border: none;
    font-weight: bold;
    border-radius: 20px;
    color: white;
  }

  input[type="checkbox"] {
    width: 15px;
    height: 15px;
  }

  .editList {
    height: 55px;
    max-width: 300px;
  }

  .editList input[type="time"] {
    width: 110px;
    font-size: 13px;
    outline: none;
  }
  .editList input[type="text"] {
    width: 100%;
    min-width: 150px;
    font-size: 15px;
    outline: none;
    /* border-top: 0;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid black; */
    padding: 0 5px;
  }
}
</style>