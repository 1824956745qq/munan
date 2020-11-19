<template>
	<view >
		<!-- 上卡片 -->
	<view  class="topa">
<u-swiper :list="list" img-mode="scaleToFill" height="700" mode="dot"></u-swiper>
 <view class="uni-flex" style="margin: 20rpx 10rpx;"><u-icon name="rmb" color="red" size="22"></u-icon>
 <text style="color: red;font-size: 45rpx;">699</text> 
 <view style="text-decoration: line-through;color: #999999;padding-left: 15rpx;">
	 <u-icon name="rmb" color="#999999" size="19">
 </u-icon><text style="color: #999999; font-size: 26rpx;">999</text></view>	</view>	
	<view class="uni-flex topaone">
  <view><text>【LT新款】拉夏贝尔纯棉T恤女新款夏装韩版宽松俏皮直筒宽松短袖女</text></view>
	<view class="shu"><u-icon name="zhuanfa" size="35rpx" ></u-icon><text style="font-size: 20rpx;">分享</text></view></view>
	</view>
	<!-- 中卡片 -->
	<view class="middle">
		
		<view>
			<view class="uni-flex">
				<view class="middleletf">选择</view>
			<view class="middleright" >
				<view class="uni-flex" style="justify-content:space-between">
					<text>颜色、尺码</text> <u-icon  name="arrow-right"></u-icon></view>
				<view class="middleone u-flex">
					<u-avatar :src="src" :bg-color="color" :text="text"  style="margin-right: 10rpx;" size="85"></u-avatar>
				<u-avatar :src="src"  :bg-color="color" :text="text" style="margin-right: 10rpx;" size="85"></u-avatar>
				<u-avatar :src="src"  :bg-color="color" :text="text" style="margin-right: 10rpx;" size="85"></u-avatar>
				<text>共3种颜色可选</text></view>
			</view>
			</view>
		</view>
	<view>
		<view class="uni-flex">
			<view class="middleletf" style="height: 150rpx;">配送</view>
		<view class="middleright"  style="height: 150rpx;" >
			<view class="u-flex" style="justify-content:space-between"><text>至  九江市濂溪区莲花镇</text> <u-icon  name="arrow-right"></u-icon></view>
		</view>
		</view>
	</view>
	<view>
		<view class="uni-flex">
			<view class="middleletf"  style="height: 100rpx;">运费</view>
		<view class="middleright" style="height: 100rpx;" >
			<view class="u-flex" style="justify-content:space-between"><text>免运费</text> <u-icon  name="arrow-right"></u-icon></view>
		</view>
		</view>
	</view>
	<view class="uni-flex" style="background-color:#EFEFF4;height: 80rpx;align-items: center;padding-left: 15rpx;">
		<u-icon name="checkmark-circle" color="red"></u-icon><text style="color: #BEBEBE">商家发货&售后</text>
		<u-icon name="checkmark-circle" color="red"></u-icon><text style="color: #BEBEBE">30天无理由退货</text>
		<u-icon name="checkmark-circle" color="red"></u-icon><text style="color: #BEBEBE">运费险</text>
	</view>	
	</view>
	<!-- //评价 -->
	<view class="oneping uni-flea">
		<view class="uni-flex pimhjia">
		    <view style="font-weight: bold;font-size: 35rpx;"> 商品评价(86)</view>
		    <view style="color: red;">好评 83.50%<u-icon  name="arrow-right"></u-icon></view>
		</view>
	<view class="pingjiaone">
		<view style="float: left; margin-bottom: 10rpx; "><text class="pingjiatext">质量很好(16)</text></view>
		<view  style="float: left;margin-bottom: 10rpx; "><text class="pingjiatext">尺码合适(8)</text></view>
	<view  style="float: left;margin-bottom: 10rpx; "><text class="pingjiatext">面料舒服(7)</text></view>
	<view  style="float: left;margin-bottom: 10rpx; "><text class="pingjiatext">外形漂亮(5)</text></view>
		<view  style="float: left;margin-bottom: 10rpx; "><text class="pingjiatext">颜色漂亮(4)</text></view>
		<view  style="float: left;margin-bottom: 10rpx; "><text class="pingjiatext">衣服漂亮(4)</text></view>
			<view  style="float: left;margin-bottom: 10rpx; "><text class="pingjiatext">物流快(3)</text></view>
	</view>
	</view>
	<!-- //店铺 -->
	<view>
		
	
	<view class="uni-flex dianpumc" style="background-color: #FFFFFF;height: 180rpx;" >
		<view class="u-flex">
		<u-image shape="circle" width="100rpx" height="100rpx" bgColor="red" src="https://www.xibeimn.cn/src/img/sptp1.jpg"></u-image>
	<view class="uni-flea dianpumcone">
		<view style="font-size: 30rpx;">拉夏贝尔旗舰店</view>
		<view >
			<u-icon name="tags" color="#c0c4cc"></u-icon><text style="color: #c0c4cc;padding-right:20rpx ;">品牌商入驻</text >
			<u-icon name="hourglass" color="#c0c4cc"></u-icon><text style="color: #c0c4cc;">服务保障</text>
		</view>
		</view>
	</view>
	<view style="color: red;padding-right: 10rpx;">进店看看<u-icon name="arrow-right"></u-icon></view>
	</view>
	
	<view class="uni-flex dpxiangqing" style="background-color: #FFFFFF;margin-top: 5rpx;margin-bottom: 10rpx; height: 140rpx;">
		<view class="uni-flea dpxiangqingone">
			<text style="font-size: 28rpx;">145</text>
			<text style="color: #909399;">全部商品</text>
		</view>
		<view class="uni-flea dpxiangqingone">
			<text  style="font-size: 28rpx;">4.7</text>
			<text style="color: #909399;">综合评分</text>
			
		</view>
	</view>
	</view>
	<!-- //详情 -->
	<view  style="margin-bottom: 100rpx;">
		
	
			<u-divider>图文详情</u-divider>
		<view style="margin: 10rpx 10rpx;padding-bottom: 20rpx;">
			<!-- 表格 -->
				<u-table align="left" >
					<u-tr >
						<u-th>产品信息</u-th>
						
					</u-tr>
					<u-tr>
						<u-td width="30%">款式</u-td>
						<u-td>宽松型</u-td>
						
					</u-tr>
					<u-tr>
						<u-td width="30%">衣长</u-td>
						<u-td>常规型</u-td>
					
					</u-tr>
					<u-tr>
						<u-td width="30%">适用群体</u-td>
						<u-td>学生青少年白领女</u-td>
						
					</u-tr>
				<u-tr>
					<u-td width="30%">风格</u-td>
					<u-td>简约韩版</u-td>
					
				</u-tr>
				<u-tr>
					<u-td width="30%">袖型</u-td>
					<u-td>其他</u-td>
					
				</u-tr>
				<u-tr>
					<u-td width="30%">流行元素</u-td>
					<u-td>简约</u-td>
					
				</u-tr>
				<u-tr>
					<u-td width="30%">适用季节</u-td>
					<u-td>秋</u-td>
					
				</u-tr>
				<u-tr>
					<u-td width="30%">产品材质</u-td>
					<u-td>纤维</u-td>
					
				</u-tr>
				<u-tr>
					<u-td width="30%">上市时间</u-td>
					<u-td>2020秋季</u-td>
					
				</u-tr>
				<u-tr>
					<u-td width="30%">适用群体</u-td>
					<u-td>学生青少年白领女</u-td>
					
				</u-tr>
				</u-table>
				
		</view>
		<!-- //图片 -->
		<view>
	<u-image width="100%" height="800rpx" mode="scaleToFill" :src="list[0].image"></u-image>
	<u-image width="100%" height="800rpx" mode="scaleToFill" :src="list[0].image"></u-image>
		</view>
		<!-- //公告 -->
		<!-- <view>{{gaosi}}</view> -->
		<view  v-for="(item,index) in gaosi" :key="index" class="uni-flea" style="padding:15rpx 15rpx;">
			<view  class="u-flex" style="justify-content: center;font-weight: bold;">{{item.name}}</view>
		<text  v-for="(liem,index) in item.foods" :key="index" style="font-size: 25rpx;padding-bottom: 20rpx;">{{liem.name}}</text> 
		</view >
	</view>
	<!-- //底部购物车 -->
	<view class="gouwuc u-flex">
	<view class="uni-flea gucico" ><u-icon name="home" size="30"></u-icon><text>首页</text></view>
	<view class="uni-flea gucico"> <u-icon name="bag" size="30"></u-icon>店铺</view>
	<view class="uni-flea gucico" > <u-icon name="shopping-cart" size="30"></u-icon>购物车</view>
	<view class="u-flex" style="height: 100%;flex: 1;">
	<view class="gucleft u-flex" style="background-color: #ffcc00;"  >立刻购买</view>
	<view class="gucright u-flex" style="background-color: #ff6600;">加入购物车</view>
	</view>
	</view>
	</view>
</template>

<script>
		import gonggao from '@/common/shangpinggonggao.js';
	export default {
		data() {
			return {
				src:"https://www.xibeimn.cn/src/img/sptp1.jpg",
		   //	text:"无",
			color:"#ffcc00",
					gaosi: gonggao,
				list:[
					{
						image:"https://www.xibeimn.cn/src/img/sptp1.jpg",
					title:"111"
					}
				]
			}
		},
		methods: {

		}
	}
</script>
<style>
	/* page不能写带scope的style标签中，否则无效 */
page {
	background-color: #f8f8f8;
	
	  width: 100%;
	  height:100%;
	}
</style>
<style lang="scss" scoped>
	.topa {
display: flex;
background-color: #FFFFFF;
flex-direction: column;
	}

	.shu{
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction:  column;
		width: 100rpx;
	}
	.topaone{
		justify-content:  space-between;
		margin: 0 12rpx;
	}
	.middle{
		margin-top: 25rpx;
		background-color: #FFFFFF;
				border-radius: 15px;
	}
	.middleletf{
		height: 190rpx;
		padding: 20rpx;
	width: 20%;
		}
		.middleright{
			
			width: 78%;
				height: 190rpx;
				padding-top: 20rpx;
			}
				.middleone{
					margin-top: 20rpx;
					}
	.middleone image{
		width: 70rpx;
		border-radius: 50%;
		background-color:#4CD964;
		margin-right: 10rpx;
		height: 70rpx;
	}
	.middleone text{
		background-color: #f5f5f5;
		padding: 8rpx 20rpx;
			
						border-radius: 15px;
	}
	.oneping{
		background-color: #FFFFFF;
		margin: 20rpx 0;
		padding-bottom: 30rpx;
		}
	.pimhjia{
	justify-content: space-between;
	margin: 15rpx;
	}
		
	.pingjiaone{
		margin-left: 10rpx;
		margin-top: 15rpx;
		background-color: #FFFFFF;
	
	}
	.pingjiatext{
		background-color: #FDE2E2;
		padding: 5rpx 10rpx;
			color:#606266;
			
			margin-right: 20rpx;
						border-radius: 15px;
	}
	.dianpumc{
		align-items: center;
	justify-content: space-between;
	padding-left: 20rpx;
		}
		.dianpumcone{
			margin-left: 30rpx;
			}
			.dpxiangqing{
				justify-content: space-around;
				align-items: center;
				}
				.dpxiangqingone{
					justify-content: center;
					align-items: center;
					}
	.gouwuc{
		  position:fixed;
		  bottom: 0rpx;
		   height: 100rpx;
		   width: 100%;
		   background-color:#FFFFFF ;
		}
		.gucico{
			align-items: center;justify-content: center;
			padding-left:30rpx ;
		}
		.gucleft{
			height: 80%;
			justify-content: center;
			align-items: center;
			margin-left: 15rpx;
			flex: 1;
			border-radius:20px 0px 0px 20px;
			
		}
		.gucright{
			height: 80%;
				margin:0 10rpx;
			justify-content: center;
			align-items: center;
				flex: 1;
			
					border-radius:0px 20px 20px 0px;
		}
</style>
