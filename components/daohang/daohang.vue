<template>
	<view >
		<view class="status_bar">
		          <!-- 这里是状态栏 -->  
		      </view>
	<view class="dhlaa">
		
		<slot></slot>
	</view>
			
		    
	</view>
</template>

<script>
	export default {
		
		methods: {
			
		}
	}
</script>

<style>
.status_bar {
      height: var(--status-bar-height);
      width: 100%;
	  
  }
.dhlaa {
	  line-height: 50px;
	  background-color: #00CE47;
  }
</style>

