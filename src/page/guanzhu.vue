<!--关注-->
<template>
	<div class="  sd_dertx ov">
		<section class=" dsf_jh_derer">
			<van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" />
		</section>
		<toububg class=""></toububg>
    <section class="pl5 pr5 pr d_kjj_dertr">
       		<van-tabs v-model="active">
       		    <van-tab title="新料提醒">
       		        <section class="s_jhdfg bk yj4 ov">
                        <ul>
                            <li class="pd pt10 bbm pm10" v-for="sd in 8" @click="hf('liaoxiangq')">
                                <p class="fz14 z3 dian">双色球20150142期必中 包30天98元</p>
                                <section class="box mt5">
                            <section class="box_a jzhh dian">
            <img src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_3fa96b9e84871da3ef5e5a54f2ad6600.jpg" class="yj user_icon_er cz">
                                <span class="fz12 ml5 cz">作者名称 2018-11-13 13::24:12</span>
                        </section>
                                    <section class="box_a tr">
                            <van-button size="mini" type="default" class="sd_jhh_der ">支付宝购买</van-button>
                                         <van-button size="mini" type="default" class="sd_jhh_der ab">微信购买</van-button>
                            </section>
                                </section>
                            </li>
                        </ul>
                    </section>
                    
                    <section class="mt10 tr fz12">
                    共56条 <span>6页</span>
                        <span v-for="(sd,idx) in 5" class="ml10">{{idx+1}}</span>
                        
                              <van-button size="mini" type="default" class="sd_jhh_der ac ml10">上一页</van-button>
                              <van-button size="mini" type="default" class="sd_jhh_der ac">下一页</van-button>
                        
                    </section>
       		    </van-tab>
                    <van-tab title="关注的作者">
       		             <section class="s_jhdfg bk yj4 ov">
                        <ul>
                     <li class="pd pt10 bbm pm10" v-for="sd in 10" @click="hf('liaoxiangq')">
                        <section class="box">
                            <section class="box_a">
                           <img src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_3fa96b9e84871da3ef5e5a54f2ad6600.jpg" class="yj user_icon cz">
                                <span class="fz15 ml10">作者名称</span>
                            </section>
                            <section class="box_a tr">
    
     <van-button size="mini" type="default" class="sd_jhh_der ac">取消关注</van-button>
                            </section>
                        </section>
                    </li>
    </ul>
                             
    </section>
                        
                          <section class="mt10 tr fz12">
                    共56条 <span>6页</span>
                        <span v-for="(sd,idx) in 5" class="ml10">{{idx+1}}</span>
                        
                              <van-button size="mini" type="default" class="sd_jhh_der ac ml10">上一页</van-button>
                              <van-button size="mini" type="default" class="sd_jhh_der ac">下一页</van-button>
                        
                    </section>
       		    </van-tab>
       		</van-tabs>
        
        
    </section>
	<dibu idxd="2"></dibu>
</div>
</template>
<script>
    import dibu from "../components/dibu"
    import toububg from "../components/toububg"
    export default {
        data() {
            return {
                active:0
            }
        },
        components: {
            dibu,
            toububg
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>

    .d_kjj_dertr{
        margin-top: -120px;
    }
   .sd_jhh_der {
   padding: 0px 10px;
       height: 26px;
}
   
</style>
