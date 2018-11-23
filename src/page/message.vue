<!--消息-->
<template>
	<div class="  sd_dertx ov pm20">
		<section class=" dsf_jh_derer">
			<van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" />
		</section>
		<toububg class=""></toububg>
    <section class="pd pr d_kjj_dertr">
        	<p class="cf  fz14 df_dfd_ert">
                <span @click="$router.back(-1)">
                <van-icon name="arrow-left" class="cz"/> <span class="cz ml5">返回</span>
    </span>
                </p>
        <section class="bk yj4    bgff">
    
                <ul>
                    <li class="pd bbm pt10 pm10 fz12 ln " v-for="sd in 10">
                       <span class="cz"> 退款消息：你购买的xx料被作者判定为不中，退款8元至微信。2018-11-13 14:22</span>
                    </li>
                </ul>
                                                                                                                      
                                                                                                                      
        </section>
        
        
         <section class="mt10 tr fz12">
                    共56条 <span>6页</span>
                        <span v-for="(sd,idx) in 5" class="ml10">{{idx+1}}</span>
                        
                              <van-button size="mini" type="default" class="sd_jhh_der ac ml10">上一页</van-button>
                              <van-button size="mini" type="default" class="sd_jhh_der ac">下一页</van-button>
                        
                    </section>
        
        
        
    </section>
        

</div>
</template>
<script>
    import toububg from "../components/toububg"
    export default {
        data() {
            return {

            }
        },
        components: {
toububg
        },
        methods: {

        },
        mounted() {
window.scrollTo(0,0);
        },
    }

</script>
<style scoped>
     .d_kjj_dertr{
        margin-top: -100px;
    }

</style>
