<template>

	<view  v-if="ongujia">
		<uni-skeleton :SkelttionType="gujia"></uni-skeleton>
	</view>
			<view v-else class="quanju">
	<view class="goutop  uni-flex">
			<view class="goutuop1 uni-flex">
		<uni-icons type="location-filled" size="20" color="#000"></uni-icons>
	<text>{{chengshi}}</text>
	</view>
	<view style="margin-right: 10rpx;">
	<button type="default" plain="true" style="border: none; font-size: 35rpx;">编辑</button>
	</view>	
	</view>	
	
	
	<view class="zhongjian">
		 <scroll-view class="main-scroll"  scroll-y style="height: 100%">
			 
	<view  v-for="(site,index) in dataList" :key ="site" class="liebiao">
		<view class="liebiaotop uni-flex">
<u-checkbox-group>
	<u-checkbox v-model="site.checked" @change="checkedka(index,site.checked)" shape="circle" active-color="red" size="45"></u-checkbox>
</u-checkbox-group>
		<u-icon name="home" size="35"></u-icon>
		<text style="padding: 0 12rpx ;font-weight: bold;font-size: 32rpx;">{{site.shopname}}</text>
		<u-icon name="arrow-right" size="30"></u-icon>
		</view>
		<view   v-for="(sites,indexx) in site.goodsList" :key ="sites"  class="liebiaoln uni-flex">
			<u-checkbox-group>
				<u-checkbox v-model="sites.checked"  shape="circle" active-color="red" size="45"  @change="checkedkb(indexx,site.id)"></u-checkbox>
			</u-checkbox-group>
			<image :src="sites.img"></image>
			<view class="liebiaolnleft">
				<text class="liebiaolnlefttext">{{sites.name}}</text>
				<u-popup v-model="show" mode="bottom" length="50%">
							<text>出淤泥而不染，濯清涟而不妖</text>
							<button @click="aaaaa()">1111</button>
						</u-popup>
							<view  @click="show = true"    class="ubuttonaa"><text>{{sites.guige}}</text><u-icon name="arrow-down" size="5"></u-icon></view>
						<view class="liebiaolnleftbutton uni-flex">
							<view><u-icon name="rmb" size="30" color="#FF9900"></u-icon>{{sites.price}}</view>
							<view>	<u-number-box v-model="sites.quantity" :min="1" :input-width="55" :input-height="37" ></u-number-box></view>
				</view>
			</view>
		</view>	
	</view>
	  </scroll-view>
	</view>
	<view class="goubuttom uni-flex">
		<u-checkbox-group >
			<u-checkbox  	@change="checkedAll('aaa')"  v-model="checked" shape="circle" active-color="red" size="45"  >全选</u-checkbox>
		</u-checkbox-group>
		<view class="uni-flex" style="align-items: center;">
		<view class="goubuttomleft" style="align-items: center;">
			<view>
			<text>合计：</text>
		<u-icon name="rmb" size="30" color="#FF9900"></u-icon>
		
		<text style="color:red;font-size:35rpx;">{{total()}}</text>
			</view>
		<view>
			<text>已优惠：</text>
			<u-icon name="rmb" size="20"></u-icon>
				<text>{{faae}}</text>
				</view>
		</view>
		<view class="goubuttomrigh ">去结算({{zjian()}})</view>
	</view>
	</view>
	</view>
	
</template>

<script>
		import uniSkeleton from"../../components/uni-skeleton.vue"
	// import uniIcons from '@/components/uni-icons/uni-icons.vue'
	export default {
		data() {
			return {
				gujia:"prouct",
				ongujia:true,
				show: false,
				chengshi:" 九江市",
				checked:false,
                  dataList: [],	
			}
		},
		components:{
			uniSkeleton
		},
		// components:{
		// 	uniIcons
		// },
		computed: {
			//价格
	
			 fullName: function () {
				 
				 var c=this.dataList[0].goodsList[0].price;
			      return c.toFixed(2)
			    }
			},
		methods: {
			aaaaa:function(){
				this.show=false,
				console.log("aaaaaaa");
			},
		// 	checkboxChange(e) {
		// 				console.log(e);
					
		// 			},
		
		// 			valChange() {
		// 				console.log('当前值为: ' + e.value)
		// 				return(e.value)
		// 			},
					//全选，通过获取多选框值进行修改
					checkedAll(e) {
						if(this.checked==false){
							
						this.dataList.map(val => {
							val.checked = true;
							val.goodsList.map(va2 => {
								va2.checked = true;
								
							})
						})
						}else{
							this.dataList.map(val => {
								val.checked = false;
								val.goodsList.map(va2 => {
									va2.checked = false;
									
								})
									})
	
						}
					},
					//板块多选，通过id和当前是否选择判断
					checkedka(e,a) {
							
						if(a==false){
						console.log('当前值为2: ' + e)
							
							this.dataList[e].goodsList.map(va2 => {
								va2.checked = true;
								
							})
						
						}else{
							console.log('当前值为: 1' + e)
							this.dataList[e].goodsList.map(va2 => {
								va2.checked = false;
								
							})
						
						}
					},
					//单选选满板块
				
					checkedkb: function(e,b) {
					let that=this
							if(!that.dataList[b].goodsList[e].checked){
									that.dataList[b].goodsList[e].checked=true;
										var c=0
							for(var d=0;d<that.dataList[b].goodsList.length;d++){
						
							if(that.dataList[b].goodsList[d].checked ){
								++c
							}
							if(c==that.dataList[b].goodsList.length)
							that.dataList[b].checked=true;
							}
								}else{
										that.dataList[b].goodsList[e].checked=false;
									that.dataList[b].checked=false;
								}
					},
					
					//总价
					total: function(){
					
					        	var total = 0;
					
					        	this.dataList.forEach(function(s){
									
										s.goodsList.forEach(function(c){
									
					        		if (c.checked){
					        			total+= c.quantity*c.price;
					        		}
									
										});
					        	});
					
					    	   return total.toFixed(2);
					        },
							//总件
					zjian: function(){				
	        	var total = 0;
					        	this.dataList.forEach(function(s){
										s.goodsList.forEach(function(c){									
					        		if (c.checked){
					        			total+= c.quantity;
					        		}
										});
					        	});
					    	   return total;
					        },
							 gouwuce :function(){
							uni.request({
							url:"https://www.xibeimn.cn:3001/gouwuce",
							//	url:"http://localhost:3000/getshuju",
								method:"POST",
								dataType: 'json',
								 data: {
								        openid:100254,
										
								    }
							   })
							   .then((res)=>{
                             this.dataList =res[1].data;
																	
							   })
							   .catch((err)=>{
							   	console.log(err)
							   })
							
							},
							
							yanci:function(){
								setTimeout(()=>{
									this.ongujia=false
								},1000)
							}
				},
				onLoad(){
						this.gouwuce()
						this.yanci()
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
<style>
	

	.main-scroll{
	  position: absolute;
	  left: 0;
	  right: 0;
	  top: 0;
	  bottom: 0;
	}
	.quanju{
		
		display: flex;
		  flex-direction: column;
		   width: 100%;
		    height:100%;

		}
		.zhongjian{
			flex: 1;

 position: relative;

			}
	.goutop{
		justify-content: space-between;
		align-items: center;
		padding-left: 15rpx;
		background-color: #FFFFFF;
		line-height: 100rpx;
		flex: 0 0 100rpx; /* 不放大不缩小固定100rpx */
		
	}
	.goutuop1{
		align-items: center;
		color: #AAAAAA;
		}
		
		.liebiao{
			background-color:#FFFFFF;
			margin-left: 20rpx;
			margin-right: 20rpx;
			margin-top: 30rpx;
			padding-bottom: 30rpx;
			border-radius: 6rpx;
			
			}
			.ubuttonaa{
				  width: 270rpx;
				height: 30rpx;
				line-height: 30rpx;
				font-size: 25rpx;
			white-space: nowrap;/*内容超宽后禁止换行显示*/
							
			overflow: hidden;/*超出部分隐藏*/
							
			text-overflow:ellipsis;
				margin-top: 10rpx;
			}
			.ubuttonaa text{
				
					padding: 0 5rpx;
					border-radius: 5rpx;
			}
			.liebiaotop{
				height: 90rpx;
				align-items: center;
				padding-left: 20rpx;
				}
				.liebiaoln{
					align-items: center;
					margin-top: 35rpx;
					padding-left: 20rpx;
					}
					.liebiaoln image{
						width: 200rpx;
						height: 200rpx;
					}
					.liebiaolnleft{
						width: 330rpx;
						margin-left: 20rpx;
						font-size: 20rpx;
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
						margin-bottom: 20rpx;
					}
				.liebiaolnleftbutton{
					margin-top: 10rpx;
	font-weight: bold;
	justify-content: space-between;
	align-items: center;
	
					color:#FF9900;
						
				}
				
					.goubuttom{
						flex: 0 0 100rpx; 
					padding-left: 20rpx;
						align-items: center;
						justify-content: space-between;
						background-color: #FFFFFF;
					}
				
						.goubuttomrigh{
							height: 110rpx;
							margin-left: 20rpx;
							line-height: 110rpx;
							color: #FFFFFF;
							padding: 0 28rpx;
						background-color: red;
							}
					
						
</style>
