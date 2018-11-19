<!--我的-->
<template>
	<div class="bgff pd">
	   <p class="z9 fz14 cen pt20">
        余额 · 元
        </p>
        <p class="cen fz30 z3  mt10">
    0
        </p>
        <p class="mt10 pt15  fz14 cen btm z6">
    今日收益  0元 <span class="ml10">总收益  0元</span>
        </p>
        <section class="mt20">
        <van-button type="danger"  class="w100"><i class="dx icon-tixian fz24 cz"></i> 提现</van-button>
        </section>
        
        <van-row class="cen fz14  z6 mt20">
            <van-col span="12">我的粉丝 0</van-col>
            <van-col span="12">我的关注 0</van-col>
        </van-row>
        <van-cell-group class="mt30 dsf_deert">
            <van-cell  is-link>
               <p class="yj dsf_jh_deert cz">
                    <i class="dx icon-shouyi cf fz20"></i>
                </p> 
                <span class="ml10 fz16">账单明细</span>
    </van-cell>
            <van-cell  is-link>
               <p class="yj dsf_jh_deert cz ab">
                    <i class="dx icon-nitification cf fz20 "></i>
                </p> 
                <span class="ml10 fz16">消息</span>
    </van-cell>
            <van-cell  is-link>
               <p class="yj dsf_jh_deert cz ac">
                    <i class="dx icon-plus-set cf fz16 "></i>
                </p> 
                <span class="ml10 fz16">设置</span>
    </van-cell>
            
        </van-cell-group>
        
        <section class="cen mt20 fz14 z9 pm20">
        账号切换遇到问题？<ins class="b">点击重新登录</ins> <br>
人人有料 v2.5.0
    
        </section>
    <dibu idxd="2"></dibu>
	</div>
</template>
<script>
    import dibu from "../components/dibu"
    export default {
        data() {
            return {

            }
        },
        components: {
            dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style>
    .dsf_deert .van-cell__right-icon {
        line-height: 40px !important;
    }

</style>
<style scoped>
    .dsf_jh_deert {
        display: inline-block;
        width: 40px;
        text-align: center;
        line-height: 40px;
        height: 40px;
        background: #407FE7
    }

    .dsf_jh_deert.ab {
        background: #F88629
    }

    .dsf_jh_deert.ac {
        background: #999999
    }

</style>
