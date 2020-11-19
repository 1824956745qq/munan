<script>
export default {
	methods:{
		qrequest :function(){
			 let that=this
			 uni.getSetting({
			          success(res) {
			             // console.log("授权：",res);
			            if (!res.authSetting['scope.userInfo']) {
			                 console.log("当前未授权");
							   uni.setStorageSync('zhuangtai', false);
							   console.log(  uni.getStorageSync('zhuangtai'));
			            } else {	
							wx.login({
							  success (loginRes) {
						  uni.setStorageSync('zhuangtai', true);
						   console.log(  uni.getStorageSync('zhuangtai'));
			                 console.log("当前已授权");
							 uni.getUserInfo({
							   provider: 'weixin',					 
							   success: function (infoRes) {	
								   uni.request({
								   url:"https://www.xibeimn.cn:3001/getshuju",
								      method:"POST",
								       dataType: 'json',
								      	 data: {
								      	     cdk: loginRes.code,
								   		 name:infoRes.userInfo.nickName
								      	    }
								      })
								      .then((res)=>{
											console.log(res[1].data)
										getApp().globalData.uniid=res[1].data
								      })
								      .catch((err)=>{
								      	console.log(err)
								      })
									 uni.setStorageSync('name', infoRes.userInfo.nickName);
							     console.log('用户昵称为：' + infoRes.userInfo.nickName);
								 	 uni.setStorageSync('img', infoRes.userInfo.avatarUrl);
							 		 console.log('用户昵称为：' + infoRes.userInfo.avatarUrl);
							   },
							 	fail(err){
									 console.log(err);
									}
							 });
							}
							 });
			            }
						
			          }
			        })
		
		},
			},
	onLaunch: function() {
	this.qrequest()
	
		console.log('App Launch');
	},
	onShow: function() {
		// this.qrequest()
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	},
	globalData:{
	            url: 'xxxxx',
				uniid:"xxxxx",
				name:""
	        }
};
</script>

<style  lang="scss">
	@import "uview-ui/index.scss";
	@import url("./common/uni.css");
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */

</style>
