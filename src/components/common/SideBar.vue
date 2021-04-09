<template>
	<div id="sidebar">
        <div id="infomation">
		    <h1 ><router-link to= "/main" class="logo"><img alt="Vue logo" src="../../assets/logo.png" width="80"></router-link></h1>
            <router-link to="/"><button id="logout">로그아웃</button></router-link>
        </div>
            <div class="menuWrap">
                <h4><img src="../../assets/list2.png" class="png"> 녹화장치 관리</h4>
				<a><router-link to="/board/recording">녹화장치 정보</router-link></a><br/><br/>
                
                <h4><img src="../../assets/camera.png" class="png"> 카메라 관리</h4>
				<a><router-link to="/board/CCTVadd">CCTV 등록</router-link></a><br/>
                <a><router-link to="/board/CCTVgroup">CCTV 그룹</router-link></a><br/>
                <a><router-link to="/board/ConcentrationGroup">집중관제 그룹</router-link></a><br/>
                <a><router-link to="/board/RTSPinfo">RTSP 정보</router-link></a><br/>
                <a><router-link to="/board/Report">고장 리포트</router-link></a><br/><br/>
                  
                <h4><img src="../../assets/user.png" class="png"> 사용자 관리</h4>
				<a><router-link to="/board/UserInfo">사용자 정보</router-link></a><br/><br/>

                <h4><img src="../../assets/table.png" class="png"> 이벤트 관리</h4>
				<a><router-link to="/board/EventSetting">이벤트 설정</router-link></a><br/><br/>

                <h4><img src="../../assets/piechart.png" class="png"> 통계</h4>
				<a><router-link to="/board/Status">처리 현황</router-link></a><br/>
                <a><router-link to="/board/TimeStatus">객체종류 시간별 통계</router-link></a><br/>
                <a><router-link to="/board/LocalStatus">객체종류 지역별 통계</router-link></a><br/>
                <a><router-link to="/board/ReportStatus">고장 리포트 통계</router-link></a><br/>
                <a><router-link to="/board/ReportSetting">리포트 설정</router-link></a><br/><br/>

                <h4><img src="../../assets/list.png" class="png"> 로그</h4>
				<a><router-link to="/board/EventLog">이벤트 로그</router-link></a><br/>
                <a><router-link to="/board/SystemLog">시스템 로그</router-link></a><br/><br/>

                <h4><img src="../../assets/setting.png" class="png"> 시스템 관리</h4>
				<a><router-link to="/board/SystemInfo">시스템 정보</router-link></a><br/><br/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Board'
}
</script>

<style scoped>
/* # => id 선택자, . => 클래스 선택자*/
                                  /*https://webclub.tistory.com/356 vh란?*/
#sidebar{float: left; border-right: 1px  solid #35495e; width: 220px; height:950px;}
#infomation{border-bottom:1px solid #35495e; height: 150px; }
#logout{ position: absolute; left: 130px}

.png { 
  width: 15px;
  height: 15px;
  object-fit: cover;
  }
h4 { margin: 5px; padding-left : 10px}
a { padding-left : 17px}

a{text-decoration:none; color:#333;}
</style>