<!--查看料-->
<template>
	<div class="bg_deert">
<!--		<p class="pt20 cf fz16 cen">长按图片保存并分享</p>-->
     
        
		<section class="bung_sdf pt10 pm20">
            
    
            <p>
                <span class="fz14 cf hsjh_dert">选择海报样式</span>
            </p>
                   
                   
                   <section class="sd_jh_deert mt10">
                    <section class="sd_jh_drxc" v-for="sd in sd_sf" :class="sd.cls" @click="sd_dff(sd)">
                    <img src="../assets/img/liao.jpg">
                    </section>
            </section>
            
                   
                   
                   
                   
  
            
             
            
			<section class=" yj4 dsf_deeertt mt10">
				<img src="../assets/img/liao.jpg" class="w100 cz">
			</section>
            
            
            <p class="pt20 cf fz16 cen">长按图片保存并分享</p>

			<van-row class="cen pt20 pm10" gutter="10">
				<van-col span="8">
                    <section class="dsfd_Drrttx">
					<section class="sd_jh_Deertt" @click="tongzhi">
						<p class="sd_hjert">
							<i class="dx icon-nitification cf fz30 cz"> </i>
						</p>
						<p class="cf fz16">{{istongzh?'通知粉丝':'已通知过粉丝'}} </p>
					</section>
 </section>
				</van-col>
				<van-col span="8">
                      <section class="dsfd_Drrttx">
					<section class="sd_jh_Deertt" @click="gongkai_er">
						<p class="sd_hjert">
							<i class="dx icon-suo cf fz26 cz"> </i>
						</p>
						<p class="cf fz16">
							{{gongkai?"一键公开":"已公开"}}
    </p></section>
					</section>

				</van-col>

				<van-col span="8">
                      <section class="dsfd_Drrttx">
					<section class="sd_jh_Deertt" @click="hf('shouyimx')">
						<p class="sd_hjert">
							<i class="dx icon-shouyi cf fz30 cz"> </i>
						</p>
						<p class="cf fz16">收益明细</p>
					</section>
    </section>
				</van-col>




				<van-col span="8">
                      <section class="dsfd_Drrttx">
					<section class="sd_jh_Deertt">
						<p class="sd_hjert">
							<i class="dx icon-wenjian cf fz30 cz"> </i>
						</p>
						<p class="cf fz16">查看详情</p>
					</section>
    </section>
				</van-col>



				<van-col span="8">
                      <section class="dsfd_Drrttx">
					<section class="sd_jh_Deertt">
						<p class="sd_hjert">
							<i class="dx icon-compile cf fz30 cz"> </i>
						</p>
						<p class="cf fz16">更新</p>
					</section>
    </section>
				</van-col>



				<van-col span="8">
                      <section class="dsfd_Drrttx">
					<section class="sd_jh_Deertt" @click="sanchu">
						<p class="sd_hjert">
							<i class="dx icon-lajixiang cf fz30 cz"> </i>
						</p>
						<p class="cf fz16">删除</p>
					</section>
    </section>
				</van-col>



			</van-row>



            
                  <p>
                <span class="fz14 cf hsjh_dert">售卖配置</span>
            </p>
            
            <section class="yj4 bk bgff pd pt10 mt10 pm10">
            <p class="fz14 z3">单卖</p>
                <section class="pl20 fz12 ln mt5">
                        价格 N元<br>
                    允许查看时间 不设置<br>
                    售卖结束时间 2018/11/13 11:52 或 不设置<br>
                    售卖结束后免费查看 关<br>
                    不对包退 关
                </section>
                
                     <p class="fz14 z3 mt5">允许代理售卖 开</p>
                <section class="pl20 fz12 ln">
                       给代理售卖者30%佣金
                </section>
                
                
    
                </section>
            
            
		</section>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				istongzh: true,
				gongkai: true,
                sd_sf:[
                    {
                        cls:"act"
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    },{
                        cls:""
                    }
                ]
			}
		},
		components: {

		},
		methods: {
            sd_dff(sd){
                this.sd_sf.map(a=>{
                    a.cls=""
                })
                sd.cls="act"
            },
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
        		background: linear-gradient(to bottom, #FF6600, #FF9836);
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
        display: inline-block;
	}

	.sd_jh_Deertt {
		padding-top: 10px;
		padding-bottom: 10px;
         text-align: left !important;
	}
    .sd_jh_Deertt p i{
        font-size: 16px !important;
        margin-right: 5px;
        
    }
    .sd_jh_Deertt p{
        display: inline-block;
        font-size: 12px !important;
        text-align: left !important;
    }
    .hsjh_dert{
        border-left: 2px solid #fff;
        padding-left: 10px;
        line-height: 1
    }
    
       .sd_jh_deert{
        white-space:nowrap;
        overflow: auto;
    }
    .sd_jh_drxc{
        width: 60px;
        height: 80px;
        display: inline-block;
        margin-right: 10px;
    }
    .sd_jh_drxc:last-child{
        margin-right: 0px;
    }
    .sd_jh_drxc.act{

        width: 62px;
        height: 82px;

        border: 1px solid #fff
    }
    .sd_jh_drxc img{
        width: 100%;
        height: 100%;
    }
    .sd_jh_Deertt{
        padding: 0px;
    }
    .dsfd_Drrttx{
        margin-bottom: 10px;
/*	background: linear-gradient(to bottom, #FF6600, #FF9836);*/
        background: #FF6600;
            box-shadow: 0 4px 0 #FF9836;
/*        border-radius: 4px;*/
        padding-left: 10px;
        line-height: 1 !important;
       
      
    }
    .dsfd_Drrttx p,.dsfd_Drrttx p i{
         color: #333 !important;
    }
</style>
