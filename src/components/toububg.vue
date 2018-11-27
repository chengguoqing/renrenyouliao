<!--头部背景-->
<template>
	<div class="sd_derttx">

<!--		<canvas id="waves" class="waves"></canvas>-->

         <vue-particles color="#dedede"   :linesWidth="1"   :lineOpacity="0.5" class="bg_fdert"></vue-particles>  


	</div>
</template>


<script>
	export default {
		data() {
			return {

			}
		},
		components: {

		},
		methods: {

		},
		mounted() {
          
            
            
            
		},
	}
    
    
    
    
    
</script>
<style scoped>
	.sd_derttx {
		height: 150px;
		background: linear-gradient(to bottom, #FF6600, #FF9836);
		position: relative;
		left: 0px;
		top: 0px;
		width: 100%;
	}
    .bg_fdert{
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%
    }
</style>
