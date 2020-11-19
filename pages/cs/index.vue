<template>
	<view>
		<view>
			<u-tabs-swiper activeColor="#f29100" ref="tabs" :list="list" :current="current" @change="change" :is-scroll="false" swiperWidth="750"></u-tabs-swiper>
		</view>
<view v-show="swiperCurrent===0"  @transition="transition"  @animationfinish="animationfinish">
	1
</view>
<view v-show="swiperCurrent===1">
	2
</view>
	<view v-show="swiperCurrent===2">
		3
	</view>
		<view v-show="swiperCurrent===3">
			4
		</view>
		
	</view>
	

	
</template>

<script>
	export default {
		data() {
			return {
			list: [
				{
					name: '待付款'
				},
				{
					name: '待发货'
				},
				{
					name: '待收货'
				},
				{
					name: '待评价',
					
				}
			],
				// 因为内部的滑动机制限制，请将tabs组件和swiper组件的current用不同变量赋值
				current: 0, // tabs组件的current值，表示当前活动的tab选项
				swiperCurrent: 0, // swiper组件的current值，表示当前那个swiper-item是活动的
			};
		},
		methods: {
			change(index) {
				this.swiperCurrent = index;
				this.current=index;
			},
			transition({ detail: { dx } }) {
				this.$refs.tabs.setDx(dx);
			},
			animationfinish({ detail: { current } }) {
			//	this.$refs.tabs.setFinishCurrent(current);
				this.swiperCurrent = current;
				this.current = current;
			}
		}
	};
</script>
