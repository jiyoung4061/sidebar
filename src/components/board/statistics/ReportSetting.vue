<template>
<div>
  <SideBar/>
    <div id="content">
      <div class="title-wrapper">
        <span class="title">리포트 설정</span>
        <span class="addContainer" v-on:click="addReportBtn">
            <i class="addBtn fas fa-plus fa" aria-hidden="true"></i>
        </span>
        <span class="addContainer" v-on:click="modifyReportBtn">
            <i class="fas fa-pencil-alt" aria-hidden="true"></i>
        </span>
        <span class="addContainer" v-on:click="deleteReportBtn">
            <i class="fas fa-trash-alt" aria-hidden="true"></i>
        </span>
      </div>

        <!-- 리포트 설정 팝업 -->
        <!-- <Modal v-if="reportSetModal" v-on:close="reportSetModal = false">
            <div slot="header">리포트 추가
                <i class="closeModalBtn fas fa-times" v-on:click="reportSetModal = false" aria-hidden="true"></i>
            </div>
            <div slot="body">
                <div>리포트 정보</div>
                <div>이름<input type="text" placeholder="사용자 ID"/></div>
                <div>주기
                    <select name="selectingPeriod" v-model="selectPeriod">
                        <option value="daily">일간</option>
                        <option value="weekly">월간</option>
                        <option value="yearly">연간</option>
                    </select>
                </div>
                <br>
            </div>
            <div  slot="body">
                <div>이벤트 타입</div>
                <div>이벤트 추가
                    <select name="selectingEvent" v-model="selectEvent">
                        <option v-for="event in events" :key="event" >
                            {{ event.eventName }}
                        </option>
                    </select>
                </div>
                <div>
                <button>추가</button>
                </div>
            </div>

            <span slot="footer" v-on:click="reportSetModal = false">
                <button v-on:click="addReport" >추가</button>
                <button v-on:click="userInfoSetModal = false">취소</button>
            </span>
        </Modal> -->
        <table class="table1">
            <colgroup>
                <col width="4%">
                <col width="1%">
                <col width="28%">
                <col width="28%">
                <col width="28%">
                <col width="11%">
            </colgroup>
            <thead>
                <tr class="table1-head-title">
                  <th></th>
                    <th><input type="checkbox" disabled/></th>
                    <th>이름</th>
                    <th>주기</th>
                    <th>이벤트 타입</th>
                    <th></th>
                </tr>
                <!-- <tr v-for="val in values" :key="val">
                    <td><input type="checkbox" /></td>
                    <td>{{val.name}}</td>
                    <td>{{val.period}}</td>
                    <td>{{val.eType}}</td>
                    <td>{{val.download}}</td>
                </tr> -->
                <tr class="table1-body">
                  <td></td>
                    <td><input type="checkbox" /></td>
                    <td>화재 보고</td>
                    <td>월간</td>
                    <td>화재</td>
                    <td><button style="width:96px; height:30px; border-radius:1px; background-color:#0b6ad5; border: 1px solid #0b6ad5; font-size: 13px; letter-spacing:0px; color: #ffffff; text-align:center;">Download</button></td>
                </tr>
                <tr class="table1-body">
                  <td></td>
                    <td><input type="checkbox" /></td>
                    <td>화재 보고</td>
                    <td>연간</td>
                    <td>움직임</td>
                                        <td><button style="width:96px; height:30px; border-radius:1px; background-color:#0b6ad5; border: 1px solid #0b6ad5; font-size: 13px; letter-spacing:0px; color: #ffffff; text-align:center;">Download</button></td>

                </tr>
            </thead>
        </table>
</div>
    </div>
</template>
<script>
import SideBar from '../../common/SideBar.vue'

export default {
    name: "ReportSetting",
    components:{
                SideBar: SideBar

    }
}
</script>
<style lang="">
table {
    border-collapse: collapse;
}
</style>
