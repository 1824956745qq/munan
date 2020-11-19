<template>
	


		<view  class="quanju">
				<u-sticky>
			<view class="goutop  ">
				<u-search placeholder="请输入搜索内容"  v-model="value"   style="margin-top: 10rpx;" ></u-search>
					</view>	
					</u-sticky>
																
	<view class="wrap">
				<view class="item-warp">
		<view class="item" v-for="(item, index) in commodity.slice(0,list)" :key="index">
	<image :src="item.img"  mode="aspectFill" style="width:345rpx;height: 400rpx;"></image>
		<text class="liebiaolnlefttext">{{item.name}}</text>
		<view style="margin-left: 15rpx;"> <u-icon name="rmb" size="25" color="red"></u-icon>
		<text style="color: red; font-weight: bold;font-size: 35rpx;">{{item.price}}</text></view>	
		<view class="u-flex">
			<text  class="dianputext" style="font-size: 10rpx; color: #C8C7CC;">{{item.shopname}}</text>	
			<view style="font-size: 10rpx;">进店<u-icon name="arrow-right" size="10"></u-icon></view>	
				</view>
		</view>
		</view>
		
			<u-loadmore :status="status"></u-loadmore>
	
</view>
	
	</view>
</template>

<script>
	export default {
		data() {
			return {
				img:"https://www.xibeimn.cn/src/img/sptp1.jpg",
				status: 'loadmore',
				list: 6,
				page: 0,
			  value:"",
				commodity:"",
			}
		},
		methods:{
			//请求商品数据
	shangping() {
		uni.request({
		url:"https://www.xibeimn.cn:3001/search",
			method:"POST",
			dataType: 'json',
			 data: {
					name:this.value,
			    }
		})
		.then((res)=>{
			this.commodity =res[1].data;
			console.log(res[1].data)
			//判断数组是否大于6，用于判断加载状态
			if(this.commodity.length<=6){
				this.status="nomore"
			}
		})
		.catch((err)=>{
			console.log(err)
		})
	},	
			},
			//加载更多
		onReachBottom() {
			if(this.list>= this.commodity.length) return ;
			this.status = 'loading';
			setTimeout(() => {
				this.list += 6;
				if(this.list >= this.commodity.length) this.status = 'nomore';
				else this.status = 'loading';
			}, 1000)
		},
		onLoad(){
			this.value=getApp().globalData.name;
			this.shangping();
			
			  console.log(getApp().globalData.name); //打印出上个页面传递的参数
			// this.id=getApp().globalData.name
		},
	
		
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

	.goutop{
		
	padding: 10rpx 15rpx;
		background-color: #FFFFFF;
		line-height: 100rpx;
		
		
	}


	.wrap {
		padding: 20rpx;
		display: block;
		
	}
	
	.item-warp {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	
	.item-warp .item {
		flex: 0 0 345rpx;
		height: 650rpx;
		margin-bottom: 20rpx;
		border-radius: 20rpx;
		
		background-color: #FFFFFF;
		
	}
	.liebiaolnlefttext {
		display: block;
		overflow :   hidden ;
		 text-overflow :   ellipsis ; 
		display :   -webkit-box ;
		 -webkit-line-clamp :   2 ; 
		-webkit-box-orient :   vertical ;
					
		overflow: hidden;
		text-overflow: ellipsis;				
			webkit-line-clamp:2; 
	margin: 15rpx 15rpx;
		
	}
	.dianputext {
		
		   width: 260rpx;/*定义块元素的宽度*/
		font-size: 20rpx;
		color: #C8C7CC;
		padding-left: 15rpx;
		            white-space: nowrap;/*内容超宽后禁止换行显示*/
		
		            overflow: hidden;/*超出部分隐藏*/
		
		            text-overflow:ellipsis;/*文字超出部分以省略号显示*/
	}
</style>