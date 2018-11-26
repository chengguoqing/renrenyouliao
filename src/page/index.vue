<template>
	<div class="  sd_dertx ov">
		<section class=" dsf_jh_derer">
			<van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" />
		</section>
		<toububg class=""></toububg>


		<section class="pd pr tinggf_dert">
			<p class="cf tr fz14 df_dfd_ert">千里耳,消息即价值.</p>
			<section class="bk mt10 yj4 bgff ">

				<section class="pd pm10">
					<p class="title_oiud fz14 b">主标题</p>

					<input type="text" placeholder="加个标题吧~(不超过18个字符)" class="jih_namer">

				</section>

				<van-collapse v-model="activeNames">
					<van-collapse-item title="说明(免费内容)" name="1">
						<textarea placeholder="尽情发挥吧" class="sd_jh_dert" rows="6"></textarea>
                        
                        
                        <up_img></up_img>
					</van-collapse-item>
				</van-collapse>
				<section class="pd pm10">
					<p class="title_oiud fz14 b">付费内容</p>

					<textarea placeholder="尽情发挥吧" class="sd_jh_dert" rows="6"></textarea>
				</section>

				<section class="pd pm10">
				
<up_img></up_img>
				</section>


			</section>

			<section class="pd ">
				<p class="title_oiud fz12 z3 fz15">付费方式</p>

			</section>

			<section class="bk  yj4 bgff sdf_d_Ertx">
				<van-tabs v-model="active">
					<van-tab title="单卖">

						<section class="pd pm10">
							<p class="title_oiud fz14 b">金额</p>

							<input type="text" placeholder="填写金额.元,0则为免费" class="jih_namer">

						</section>


						<section class="pd  btm">

							<section class="title_oiud fz14 pr">付费内容开始查看时间 <i class="dx  icon-iconfontwenhao1 fz14" @click="is_shjow_er=true"></i>
								<section class="kaiguyane">
									<van-switch v-model="checked_si" />
								</section>

							</section>
							<section class="title_oiud fz14 pr btm " @click="is_time=0;show_er=true" v-if="checked_si">

								{{time_yi||"购买截止日期"}}
								<i class="dx icon-down dojhh_deert"></i>
							</section>



						</section>






						<section class="pd  btm">

							<section class="title_oiud fz14 pr">限时售卖 <i class="dx  icon-iconfontwenhao1 fz14" @click="is_shjow_er=true"></i>
								<section class="kaiguyane">
									<van-switch v-model="checked" />
								</section>

							</section>
							<section class="title_oiud fz14 pr btm " @click="is_time=1;show_er=true" v-if="checked">

								{{time_de||"购买截止日期"}}
								<i class="dx icon-down dojhh_deert"></i>
							</section>



							<section class="  btm pr" v-if="checked">
								<p class="title_oiud fz14"> 到期免费看
									<i class="dx  icon-iconfontwenhao1 fz14" @click="is_shjow_er=true"></i>
								</p>
								<section class="kaiguyane">
									<van-switch v-model="checked_san" />

								</section>
							</section>
						</section>


						<section class="pd pm10 btm">
							<p class="title_oiud fz14">不中必退</p>

							<van-row>
								<van-col span="19">

									<section class="z9 fz14">需要买家在比赛结束后确认中或不中才可手动退款
									</section>
								</van-col>
								<van-col span="5">
									<section class="pr">
										<section class="kaiguyane">
											<van-switch v-model="checked_er" />
										</section>
									</section>
								</van-col>
							</van-row>

						</section>




					</van-tab>
					<van-tab>
						<div slot="title">
							包时段 <i class="dx  icon-iconfontwenhao1 fz14" @click="is_shjow=true"></i>
						</div>

						<section class="pt10 fz12 z9 pd ln">
							支持资源更新，卖家从支付日起，在包时段内可以看到卖家的更新内容
						</section>

						<section class="pd pm10">
							<p class="title_oiud fz14 b">时长</p>
							<section class="sd_jh_drttx yj4 ">
								<van-row gutter="5">
									<van-col span="8" v-for="sd in jh_bs">
										<section class="sd_djhfgf yj4" :class="sd.cls" @click="gxsd(sd)">
											{{sd.name}}
										</section>
									</van-col>
								</van-row>

							</section>
							<input type="number" placeholder="输入天数" class="jih_namer mt15" v-model="tianshu">

						</section>

						<section class="pd pm10 btm">
							<p class="title_oiud fz14 b">金额</p>

							<input type="text" placeholder="填写金额.元" class="jih_namer">

						</section>

					</van-tab>
				</van-tabs>


			</section>



			<section class="pd ">
				<p class="title_oiud fz12 z3 fz15">多推广途径选择</p>

			</section>

			<section class="bk  yj4 bgff sdf_d_Ertx">

				<section class="pd  btm">

					<section class="title_oiud fz14 pr">允许代理售卖
						<i class="dx  icon-iconfontwenhao1 fz14" @click="is_shjow_er=true"></i>
						<section class="kaiguyane">
							<van-switch v-model="checked_wu" />
						</section>

					</section>


					<section class="pd pm10 btm" v-if="checked_wu">
						<p class="title_oiud fz14">给代理售卖者百分之多少佣金</p>
						<section class="sd_jh_drttx yj4 ">
							<van-row gutter="5">
								<van-col span="8" v-for="sd in jh_bs_er">
									<section class="sd_djhfgf yj4" :class="sd.cls" @click="gxsd_er(sd)">
										{{sd.name}}
									</section>
								</van-col>
							</van-row>

						</section>
						<input type="number" placeholder="输入比例" class="jih_namer mt15" v-model="tianshu_er">

					</section>





				</section>
			</section>



			<section class="mt20 pd">
				<van-row gutter="10" class="Df_eerrt">
					<van-col span="24">
						<van-button type="danger" class="w100" @click="hf('chakanliao')">创建</van-button>
					</van-col>
					<!--
            <van-col span="6">
        <van-button type="default" class="w100"><i class="dx icon-wenjian"></i> 预览</van-button>
            </van-col>
-->
				</van-row>
			</section>

		</section>

		<van-popup v-model="show_er" position="bottom">
			<van-datetime-picker v-model="currentDate" type="datetime" @cancel="show_er=false" @confirm="queren" :min-date="minDate"
			 :max-date="maxDate" />

		</van-popup>

		<dibu idxd="0"></dibu>

		<van-popup v-model="is_shjow">
			<section class="sd_jhmt pd  pm10  bgff ov">
				<p class="title_oiud fz14">包时段说明</p>
				<section class="fz12 z6 ln">
					<p> · 卖家设置的时长是卖家可读取料的时长。</p>
					<p class="mt10">· 不同买家，在不同时间购买此料，会在各自对应的时长内有效。</p>
					<p class="mt10">· 卖家创建包时段料后，不可修改价格。</p>
					<p class="mt10">· 卖家可在【我的料】中找到包时段的料进行内容的更新。</p>
					<p class="mt10">· 卖家可在收益明细中看到买家买入的时间，并且保证买家买到的料在有效期内获得更新。</p>
				</section>
				<p class="tr mt10">
					<van-button type="danger" class="fz14 dsf_jh_dert" @click="is_shjow=false">确定</van-button>
				</p>
			</section>
		</van-popup>


		<van-popup v-model="is_shjow_er">
			<section class="sd_jhmt pd  pm10  bgff ov">
				<p class="title_oiud fz14"> 限时售卖</p>
				<section class="fz12 z6 ln">
					<p> · 卖家设定为【否】时，买家对于购买的料的内容读取无时间限制。</p>
					<p class="mt10">· 卖家设定为【是】并选择了限时打开，买家只能在设定的时间内付款打开，过了设定的时间，买家无法购买。
						举个例子：卖家设定单料读取的时间是2018年5月14日8点30分，那么买家在2018年5月14日8点30分前都可以购买此料，超过8点30分无法购买。</p>
					<p class="mt10">· 该设定只对单卖有效。</p>
				</section>
				<p class="tr mt10">
					<van-button type="danger" class="fz14 dsf_jh_dert" @click="is_shjow_er=false">确定</van-button>
				</p>
			</section>
		</van-popup>


		<van-popup v-model="is_shjow_san">
			<section class="sd_jhmt pd  pm10  bgff ov">
				<p class="title_oiud fz14"> 提示</p>
				<section class="fz12 z6 ln">
					<p>· 敬请大家在新建料的标题中严禁使用且包含“ <span class="red">足彩 、竞彩、彩票、亚盘、足球、大小球、盘口</span>”等敏感词汇。</p>
					<p class="mt10">· 如有发现，人人有料平台有权对其料进行下架和删除处理，感谢大家的配合。。</p>
					<p class="mt10">· 该设定只对单卖有效。</p>
				</section>
				<p class="tr mt10">
					<van-button type="danger" class="fz14 dsf_jh_dert" @click="is_shjow_san=false">确定</van-button>
				</p>
			</section>
		</van-popup>




	</div>
</template>
<script>

    import dibu from "../components/dibu"
    import toububg from "../components/toububg"
    import up_img from "../components/up_img"
    export default {
        data() {
            return {
                active: 0,
                is_shjow: false,
                checked: false, //限时售卖
                checked_er: false, //不中必退
                checked_san: false, //到期免费看
                show_er: false,
                is_shjow_er: false,
                is_shjow_san: false,
                checked_si: false, //付费内容开始查看时间
                checked_wu: false, //是否允许代理售卖
                activeNames: [],
               
                time_de: "",
                time_yi: "",
                is_time: 0, //0付费时间 1限售时间
                minHour: 10,
                maxHour: 20,
                minDate: new Date(),
                maxDate: new Date(2019, 10, 1),
                currentDate: new Date(),
                jh_bs: [{ //包时段时长
                    name: "包周",
                    cls: "",
                    num: "7"
                }, {
                    name: "包月",
                    cls: "",
                    num: "30"
                }, {
                    name: "自定义",
                    cls: "act",
                    num: ""
                }],
                jh_bs_er: [{ //售卖者比例
                    name: "20%",
                    cls: "",
                    num: "20"
                }, {
                    name: "30%",
                    cls: "",
                    num: "30"
                }, {
                    name: "自定义",
                    cls: "act",
                    num: ""
                }],
                tianshu: "",
                tianshu_er: ""
            }
        },
        components: {
            dibu,
            toububg,
            up_img
        },
        methods: {
            closeer(idx) {
                this.um_img.splice(idx, 1);
            },
        
        
            queren(e) {
                this.show_er = false
                if (this.is_time == 0) {
                    this.time_yi = this.time_d(e)
                }
                if (this.is_time == 1) {
                    this.time_de = this.time_d(e)
                }

            },
            gxsd(sd) {
                this.jh_bs.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.tianshu = sd.num
            },
            gxsd_er(sd) {
                this.jh_bs_er.map(a => {
                    a.cls = ""
                })
                sd.cls = "act"
                this.tianshu_er = sd.num
            }

        },
        mounted() {

        },
    }

</script>
<style>


</style>
<style scoped>
    .d_ggaserr {
        background: #F8ECDC;
        color: #D7AA78;
        line-height: 40px;

    }

    .right_icon {
        position: absolute;
        right: 10px;
        top: 2px;
    }

    .title_oiud {
        line-height: 40px;
    }

    .jih_namer {
        border: 0px;
        width: 100%;
        text-indent: 0px;
        font-size: 14px;
    }

    .sd_jh_dert {
        text-indent: 0px;
        font-size: 14px;
        border: 0px;
        width: 100%;
    }


    .df_deertt {
        position: absolute;
        right: 5px;
        top: 5px;
    }

    .dojhh_deert {
        position: absolute;
        right: 0px;
    }

    .sd_jh_drttx {
        height: 45px;
        line-height: 45px;
        background: #F2F2F2;
        padding: 5px;
    }

    .sd_djhfgf {
        line-height: 35px;
        text-align: center;
        font-size: 14px;
        color: #666
    }

    .sd_djhfgf.act {
        background: #fff;
        box-shadow: 0 0px 2px rgba(0, 0, 0, .1);
        color: #333
    }

    .Df_eerrt button {
        height: 40px;
        border: 0px;
    }

    .sd_jhmt {
        overflow: hidden;
        width: 300px;
    }

    .dsf_jh_dert {
        padding: 0px;
        padding-left: 15px;
        padding-right: 15px;
        height: 30px;
        line-height: 30px;
    }

    .dsf_jh_derer {
        position: relative;
        left: 0px;
        top: 0px;
        z-index: 100;
        width: 100%
    }

    .tinggf_dert {
        /*        padding-top: 100px;*/
        margin-top: -90px;
    }

 
</style>
