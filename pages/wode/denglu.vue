<template>
	<view class="a1">
		{{testMsg}}
	<u-button type="success" @click="changeTxt()">一键快速登陆</u-button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				testMsg:"aa",
			}
			
			
		
			},
			methods:{
				  changeTxt:function(){
				      let that=this;
				    that.testMsg="修改后的文本值";
				       
				      // that.$nextTick(function(){  //使用vue.$nextTick()方法可以dom数据更新后延迟执行
				      //  that.testMsg="修改后的文本值"; 
				      //   console.log(domTxt);  //输出可以看到vue数据修改后并没有DOM没有立即更新，
				      //   if(domTxt==="原始值"){
				      //     console.log("文本data被修改后dom内容没立即更新");
				      //   }else {
				      //     console.log("文本data被修改后dom内容被马上更新了");
				      //   }
				      // });
				    },
				aa:function(){
					    uni.setStorageSync('storage_key',"ccc");
				
				  }
			},
			onShow(){
				}
	   }
</script>

<style>
	.a1{
		margin:  0 30rpx;
	}
</style>
