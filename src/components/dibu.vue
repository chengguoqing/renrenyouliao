<template>
	<div class="cen bgff dsf_derttx">
		<van-tabbar class="bgff dsf_deert">



			<van-tabbar-item v-for="(sd,idx) in dibu" class="z9" :class="idx==idxd?'z3':''" @click="hf(sd.href)">
				<p class="sd_jh_der">
					<i class="dx " :class="[sd.icon,sd.size,sd.cls]"></i>
				</p>
				<span>{{sd.name}}</span>
			</van-tabbar-item>



		</van-tabbar>

	</div>
</template>
<script>
	export default {
		props: {
			idxd: ""
		},
		data() {
			return {
				dibu: [{
					name: "新建料",
					icon: "icon-add",
					href: "",
					size: "",
					cls: ""
				}, {
					name: "我的料",
					icon: "icon-wenjian",
					href: "myliao",
					size: "fz20",
					cls: ""
				}, {
					name: "关注",
					icon: "icon-xin",
					href: "guanzhu",
					size: "fz16",
					cls: ""
				},{
					name: "我的",
					icon: "icon-cc-user",
					href: "user_info",
					size: "fz20",
					cls: ""
				}]
			}
		},
		components: {

		},
		methods: {

		},
		mounted() {},
	}
</script>
<style scoped>
	.z3 {
		color: #FF7C18 !important
	}

	.sd_dfert {
		display: block;
		margin: auto;
		margin-bottom: 4px;
		width: 23px;
		height: 23px;
	}

	.dsf_deert {
		z-index: 10 !important
	}

	.sd_jh_der {
		line-height: 22px;
	}
</style>
