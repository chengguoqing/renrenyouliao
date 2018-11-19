<!--查看料-->
<template>
	<div class="bg_deert">
	<p class="pt20 cf fz14 cen">长按图片保存并分享</p>
        <section class="bung_sdf mt20">
    <section class=" yj4 dsf_deeertt">
        <img src="../assets/img/liao.jpg" class="w100 cz">
    </section>
            
            <van-row  class="cen pt20 pm30">
                <van-col span="8">
                    <section class="sd_jh_Deertt" @click="tongzhi">
                        <p class="sd_hjert">
    <i class="dx icon-nitification cf fz30 cz"> </i>
                        </p>
                        <p class="cf fz14">{{istongzh?'通知粉丝':'已通知过粉丝'}} </p>
                    </section>
    
                </van-col>
                 <van-col span="8">
                    <section class="sd_jh_Deertt" @click="gongkai_er">
                        <p class="sd_hjert">
    <i class="dx icon-suo cf fz26 cz"> </i>
                        </p>
                        <p class="cf fz14">
                            {{gongkai?"一键公开":"已公开"}}
                            </p>
                    </section>
    
                </van-col>
                
                 <van-col span="8">
                    <section class="sd_jh_Deertt" @click="hf('shouyimx')">
                        <p class="sd_hjert">
    <i class="dx icon-shouyi cf fz30 cz"> </i>
                        </p>
                        <p class="cf fz14">收益明细</p>
                    </section>
    
                </van-col>
                
                
                
                
                 <van-col span="8">
                    <section class="sd_jh_Deertt">
                        <p class="sd_hjert">
    <i class="dx icon-wenjian cf fz30 cz"> </i>
                        </p>
                        <p class="cf fz14">查看详情</p>
                    </section>
    
                </van-col>
                
                
                
                 <van-col span="8">
                    <section class="sd_jh_Deertt">
                        <p class="sd_hjert">
    <i class="dx icon-compile cf fz30 cz"> </i>
                        </p>
                        <p class="cf fz14">更新</p>
                    </section>
    
                </van-col>
                
                
                
                 <van-col span="8">
                    <section class="sd_jh_Deertt" @click="sanchu">
                        <p class="sd_hjert">
    <i class="dx icon-lajixiang cf fz30 cz"> </i>
                        </p>
                        <p class="cf fz14">删除</p>
                    </section>
    
                </van-col>
                
                
                
            </van-row>
            
            
            
</section>
	</div>
</template>
<script>
    export default {
        data() {
            return {
                istongzh: true,
                gongkai: true
            }
        },
        components: {

        },
        methods: {
            tongzhi() {
                if (this.istongzh) {
                    this.istongzh = false
                    this.$toast('已通知粉丝');
                }

            },
            gongkai_er() {
                if (this.gongkai) {
                    this.gongkai = false
                    this.$toast('已公开料');
                } else {
                    this.gongkai = true
                    this.$toast('已关闭公开料');

                }
            },
            sanchu() {
                
                this.$dialog.confirm({
                    title: '删除提醒',
                    message: '确定删除此条消息吗'
                }).then((e) => {
                     this.$toast('删除成功');
                    this.$router.back(-1)
                })
            }


        },
        mounted() {

        },
    }

</script>
<style scoped>
    .bg_deert {
        background: url("../assets/img/bg.png") 100% 0 no-repeat #000;
        background-size: 200% auto;
        position: relative;
        top: 80px;
        margin-top: -80px;
    }

    .bung_sdf {
        width: 310px;
        margin: auto;
    }

    .dsf_deeertt {
        border: 2px solid #fff;
    }

    .sd_hjert {
        line-height: 35px;
    }

    .sd_jh_Deertt {
        padding-top: 10px;
        padding-bottom: 10px;
    }

</style>
