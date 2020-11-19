<strong></strong><template>
	
	<view >
		
	<view class="uni-flea" style="background-color:#FFFFFF;margin-top:40rpx;margin-left: 20rpx;margin-right: 20rpx;border-radius: 4px;" >
	
		<view v-if="hasUserInfo==false"   style="margin: 10rpx  10rpx; " >
			<button class="uni-flex" plain="true" style="border: none; align-items: center;" open-type="getUserInfo" lang="zh_CN" @getuserinfo="wxGetUserInfo">
			<view class="tou1 uni-inline-item">
				<image src="../../static/wd/timg.jpg" ></image>
			</view>
			<view class="tou3 ">
				<text  style="font-weight: bold; font-size: 35rpx;">登陆/注册</text>
			</view>
			<uni-icons type="arrowright" size="25"></uni-icons>
			</button>
					
			</view>
		
	
	
	<view v-else class="uni-flex" style="margin: 10rpx  10rpx;" >
		<view class="tou1 uni-inline-item">
			<image :src="avatarUrl" ></image>
		</view>
		<view class="tou2 uni-flea">
			<view class="tou3">
				<text  style="font-weight: bold; font-size: 45rpx;">{{name}}</text>
			</view>
			<view class="tou3">
				<text>{{id}}</text>
			</view>
		</view>
		
		
		<view class="tou4 uni-flea"> 
		<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
			<button type="default" plain="true" style="border: none;">
				<uni-icons type="arrowright" size="25"></uni-icons>
			</button>
		</navigator>
		</view>
	</view>
	
	<view class="sa uni-flex">
		<view class="di1 uni-flea">
			<text>0</text>
			<text>优惠价</text>
		</view>
		<view class="di1 uni-flea">
			<text>&yen;0.00</text>
			<text>余额</text>
		</view>
		<view class="di1 uni-flea">
			<text>0</text>
			<text>粉丝</text>
		</view>
		<view class="di1 uni-flea">
			<text>0</text>
			<text>关注</text>
		</view>
	</view>
	</view>
	
	<view  class="uni-flea dingd1" >
		<view class="dingd2">
			<view class="dingd5 uni-flex">
			<text style="font-weight: bold; font-size: 35rpx;">我的订单</text>
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<uni-icons type="arrowright" size="15"></uni-icons>
				</button>
			</navigator>
			</view>
		</view>
		<view class="dingd3 uni-flex">
			
			<view class="dingd4 uni-flea">
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default" plain="true" style="border: none;">
						<image src="../../static/wd/daifu.png"></image>
					</button>
				</navigator>
				<text>待付款</text>
			</view>
			
			<view class="dingd4 uni-flea">
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default" plain="true" style="border: none;">
						<image src="../../static/wd/daisouhuo.png"></image>
					</button>
				</navigator>
				<text>待收货</text>
			</view>
			
			<view class="dingd4 uni-flea">
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default" plain="true" style="border: none;">
						<image src="../../static/wd/daipingjia.png"></image>
					</button>
				</navigator>
				<text>待评价</text>
			</view>
			
			<view class="dingd4 uni-flea">
				<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
					<button type="default" plain="true" style="border: none;">
						<image src="../../static/wd/shouhou.png"></image>
					</button>
				</navigator>
				<text>退款/售后</text>
			</view>
			
		</view>
	</view>
	
	<view class="uni-flea dibux1">
<view class="dibuix2 uni-inline-item">
	<text style="font-weight: bold; font-size: 35rpx;">我的服务</text>
</view>
<view  class="dibuix3 uni-flea">
	<view class="dibuix4 uni-flex">
	
		<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/bangzhuzx.png"></image>
				</button>
			</navigator>
			<text>帮助中心</text>
		</view>

	<view class="dingd4 uni-flea">
		<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
			<button type="default" plain="true" style="border: none;">
				<image src="../../static/wd/yijianfankiu.png"></image>
			</button>
		</navigator>
		<text>意见反馈</text>
	</view>
<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/shouhuodiz.png"></image>
				</button>
			</navigator>
			<text>收货地址</text>
		</view>
		<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/paajjj.png"></image>
				</button>
			</navigator>
			<text>我的评价</text>
		</view>
		<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/sehzi.png"></image>
				</button>
			</navigator>
			<text>设置</text>
		</view>
	</view>
	<view class="dibuix4 uni-flex">
		<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/huiyuanaa.png"></image>
				</button>
			</navigator>
			<text>会员中心</text>
		</view>
		<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/shouhuokefu.png"></image>
				</button>
			</navigator>
			<text>联系客服</text>
		</view>
		<view class="dingd4 uni-flea">
			<navigator url="/pages/tabBar/extUI/extUI" open-type="switchTab" hover-class="other-navigator-hover">
				<button type="default" plain="true" style="border: none;">
					<image src="../../static/wd/zhuji.png"></image>
				</button>
			</navigator>
			<text>我的足迹</text>
		</view>
		<view class="dingd4 uni-flea">
			</view>
			<view class="dingd4 uni-flea">
				</view>
	</view>
</view>
		
	</view>
	
	
	</view>
</template>

<script>
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		data() {
			return {
				
				hasUserInfo:false,
				name: "",
				id:"",
				avatarUrl: "",
				aa:uni.getStorageSync('storage_key'),
			}
			
			
		
			},
		components:{
			uniIcons
		},
		methods: {
		wxGetUserInfo: function() {
		let that=this;
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
											this.id=res[1].data
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
			  
		},
		
		
		onLoad(){
		this.hasUserInfo=uni.getStorageSync('zhuangtai')
		this.name=uni.getStorageSync('name')
		this.avatarUrl=uni.getStorageSync('img')
		// this.id=uni.getStorageSync('id')
		 this.id=getApp().globalData.uniid
		}
		
		
		}
</script>

<style>
	
@import url("wode.css");
page {
background-color: #f8f8f8;
}
.dibux1{
	margin-top: 30rpx;
	height: 500rpx;
	margin-left: 20rpx;
	margin-right: 20rpx;
	border-radius: 4px;
	background-color: #FFFFFF;
}
.dibuix2{
		margin-left: 4rpx;
		-webkit-flex: 1;flex: 1;
}
.dibuix3{
		-webkit-flex: 5;flex: 5;
		
}
.dibuix4{
		-webkit-flex: 1;flex: 1;
		
	
	}
.buttonaa{
border: 10rpx #FFFFFF;
	}
</style>
