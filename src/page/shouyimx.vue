<!--收益明细-->
<template>
	<div>
		<section class="bgff pt20 cen">
			<p class="fz14 z6">收益总额 · 元</p>
			<p class="fz34 red pt10">0</p>

			<p class="pd tl fz16 mt40 z9 pm20">交易记录</p>
		</section>


		<kongbai msg="您还未购买记录！"></kongbai>

	</div>
</template>
<script>
	import kongbai from "../components/kongbai"
	export default {
		data() {
			return {

			}
		},
		components: {
			kongbai
		},
		methods: {

		},
		mounted() {

		},
	}
</script>
<style scoped>


</style>
