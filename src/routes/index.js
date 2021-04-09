import Vue from 'vue';
import Router from 'vue-router';

// 기본 로그인 페이지 
import Login from '../components/common/Login'

// 기본 랜딩페이지
import Landing from '../components/Landing'


// 녹화장치 관리
import RecordingManagement from '../components/board/device/RecordingManagement'


// 카메라 관리
import CCTVadd from '../components/board/camera/CCTVadd'
import CCTVgroup from '../components/board/camera/CCTVgroup'
import ConcentrationGroup from '../components/board/camera/ConcentrationGroup'
import RTSPinfo from '../components/board/camera/RTSPinfo'
import Report from '../components/board/camera/Report'

// 사용자 관리
import UserInfo from '../components/board/user/UserInfo'

// 이벤트 관리
import EventSetting from '../components/board/event/EventSetting'

// 통계
import Status from '../components/board/statistics/Status'
import TimeStatus from '../components/board/statistics/TimeStatus'
import LocalStatus from '../components/board/statistics/LocalStatus'
import ReportStatus from '../components/board/statistics/ReportStatus'
import ReportSetting from '../components/board/statistics/ReportSetting'

// 로그
import EventLog from '../components/board/log/EventLog'
import SystemLog from '../components/board/log/SystemLog'

// 시스템 관리
import SystemInfo from '../components/board/system/SystemInfo'

Vue.use(Router) //vue 라우터 사용

export default new Router({ //라우터 연결
	routes:[
		{
			path:'/'
			,name:Login
			,component:Login
		},
		// 랜딩페이지
		{
			path:'/main'
			,name:Landing
			,component:Landing
		}
		// 녹화장치 관리
		,{
			path:'/board/recording'
			,name:RecordingManagement
			,component:RecordingManagement
		}
		// 카메라 관리
		,{
			path:'/board/CCTVadd'
			,name:CCTVadd
			,component:CCTVadd
		}
		,{
			path:'/board/CCTVgroup'
			,name:CCTVgroup
			,component:CCTVgroup
		}
		,{
			path:'/board/ConcentrationGroup'
			,name:ConcentrationGroup
			,component:ConcentrationGroup
		}
		,{
			path:'/board/RTSPinfo'
			,name:RTSPinfo
			,component:RTSPinfo
		}
		,{
			path:'/board/Report'
			,name:Report
			,component:Report
		}

		// 사용자 정보
		,{
			path:'/board/UserInfo'
			,name:UserInfo
			,component:UserInfo
		}
		// 이벤트 관리
		,{
			path:'/board/EventSetting'
			,name:EventSetting
			,component:EventSetting
		}
		// 통계
		,{
			path:'/board/Status'
			,name:Status
			,component:Status
		}
		,{
			path:'/board/TimeStatus'
			,name:TimeStatus
			,component:TimeStatus
		}
		,{
			path:'/board/LocalStatus'
			,name:LocalStatus
			,component:LocalStatus
		}
		,{
			path:'/board/ReportStatus'
			,name:ReportStatus
			,component:ReportStatus
		}
		,{
			path:'/board/ReportSetting'
			,name:ReportSetting
			,component:ReportSetting
		}
		// 로그
		,{
			path:'/board/EventLog'
			,name:EventLog
			,component:EventLog
		}
		,{
			path:'/board/SystemLog'
			,name:SystemLog
			,component:SystemLog
		}

		// 시스템 관리
		,{
			path:'/board/SystemInfo'
			,name:SystemInfo
			,component:SystemInfo
		}
		

		
	]
})