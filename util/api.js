var serverUrl = "http://47.97.83.18:8080/scmanage1009/";
// var serverUrl = "http://192.168.1.6:8080/";
//获取活动列表
var GetPromoteList=serverUrl+'GetPromoteList'
//登录
var UserLogin=serverUrl+'Login'
//新增站点
var SiteInfoMs=serverUrl+'SiteInfoMs'
//新增用户
var UserInfoMs=serverUrl+'UserInfoMs'
//站点列表
var GetSiteList=serverUrl+'GetSiteList'
//验证码
var DYSendSms=serverUrl+'DYSendSms'
//验证码验证
var CheckValidate=serverUrl+'CheckValidate'
//新增活动
var PromoteMs=serverUrl+'PromoteMs'
//修改密码
var ChangeUserInfo=serverUrl+'ChangeUserInfo'
//购买电子券
var SaleCouponCode=serverUrl+'SaleCouponCode'
//活动管理
var PromoteMs=serverUrl+'PromoteMs'
//站点管理
var SiteInfoMs=serverUrl+'SiteInfoMs'
//电子券查询
var CouponInfoMs=serverUrl+'CouponInfoMs'
//检查登录状态
var GetLoginState=serverUrl+'GetLoginState'
//获取备付金
var GetReserveInfo=serverUrl+'GetReserveInfo'
//验证码登录
var LoginFromCode=serverUrl+'LoginFromCode'
//判断备付金
var CheckReserver=serverUrl+'CheckReserver'
//可用活动列表
var validlist=serverUrl+'validlist'
//新增商户
var MerchantMs=serverUrl+'MerchantMs'
var Message='请先登录自己的账户'
function FlagToken(){
	var UserInfo=JSON.parse(JSON.parse(localStorage.getItem('UserInfo')))
	var UserPsd=md5(JSON.parse(localStorage.getItem('UserLoginInfo')).password).slice(0,16).toUpperCase()
	var UserToken={
		method:'loginstate',
		userid:UserInfo.PM0003_ID,
		token:UserInfo.PM0003_TOKEN
	}
	console.log(UserToken)
	console.log(UserPsd)
	var Flag=false
	var TokenAesJson=encodeURIComponent(encrypt(JSON.stringify(UserToken),UserPsd))
	$.ajax(`${GetLoginState}?params=${TokenAesJson}&smsusername=${UserInfo.PM0003_PHONE}`,{
		data:{},
		dataType:'json',//服务器返回json格式数据
		type:'POST',//HTTP请求类型
		async:false,  //同步方式
		timeout:10000,//超时时间设置为10秒；
		success:function(response){
			console.log(response)
			if(parseInt(response.LOGINSTATUS)==2&&parseInt(response.RESULT)==0){
				localStorage.removeItem('UserInfo')
				localStorage.removeItem('UserLoginInfo')
				mui.toast("账号已在另一方登录，已下线",{
					duration:500
				});
				setTimeout(function(){
					window.location.href='index.html'
				},1000)
				
				Flag=false
			}
			else{
				Flag=true
			}
		},
		error:function(xhr,type,errorThrown){
			console.log(xhr)
		}
	});
	return Flag
}