<!--我的料-->
<template>
	<div class="sdf_d_Ertx">
		<van-tabs v-model="active" class="" sticky swipeable>
			<van-tab>
				<div slot="title" class="fz16">
					<i class="dx  icon-upload " @click="is_shjow=true"></i>
					我卖的料 <span class="sd_jh_dert">10</span>
				</div>


				<section class="pd">

					<section class="mt10 bk yj4 bgff pd pt10 pm10" v-for="sd in 10" @click="hf('chakanliao')">

						<section class="box">
							<section class="box_a">
								<p class="z9 fz12">
									2018-11-19 14:35:30
								</p>
								<p class="dianer fz18 mt10">测试测试测测试</p>
							</section>


							<section class="box_a">
								<p class="z9 fz12 tr">
									【限时】<i class="dx icon-time fz14 cz"></i>
									<span>已过期</span>
								</p>
								<p class="dian fz18 mt10 tr">
									￥3
								</p>
							</section>

						</section>
						<section class="btm box mt10 pt10 cen">
							<section class="box_a brm">
								<p class="fz14 z9">浏览</p>
								<p class="z3 fz20 mt5">2</p>
							</section>
							<section class="box_a brm">
								<p class="fz14 z9">已售</p>
								<p class="z3 fz20 mt5">2</p>
							</section>


							<section class="box_a ">
								<p class="fz14 z9">收益总额.元</p>
								<p class=" fz20 mt5 red">2</p>
							</section>



						</section>
					</section>
				</section>

			</van-tab>

			<van-tab>
				<div slot="title" class="fz16">
					<i class="dx  icon-upload xuanzsert cz" @click="is_shjow=true"></i>
					我买的料 <span class="sd_jh_dert">0</span>
				</div>

				<kongbai msg="您还未购买任何料！"></kongbai>
			</van-tab>


		</van-tabs>

		<dibu idxd="1"></dibu>
	</div>
</template>
<script>
	import kongbai from "../components/kongbai"
	import dibu from "../components/dibu"
	export default {
		data() {
			return {
				active: 0
			}
		},
		components: {
			kongbai,
			dibu
		},
		methods: {

		},
		mounted() {

		},
	}
</script>
<style scoped>
	.xuanzsert {
		display: inline-block;
		transform: rotate(180deg);
		position: relative;
		bottom: 2px;
	}

	.sd_jh_dert {
		display: inline-block;
		position: relative;
		font-size: 12px;
		top: -8px;
		margin-left: -2px;
	}
</style>
