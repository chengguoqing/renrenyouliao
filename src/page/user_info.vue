<!--我的-->
<template>
	<div class="  sd_dertx ov">
		<section class=" dsf_jh_derer">
			<van-notice-bar text="足协杯战线连续第2年上演广州德比战，上赛季半决赛上恒大以两回合5-3的总比分淘汰富力。" left-icon="https://img.yzcdn.cn/public_files/2017/8/10/6af5b7168eed548100d9041f07b7c616.png" />
		</section>
		<toububg class=""></toububg>
    <section class="pd pr d_kjj_dertr pm20">
          <img src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_3fa96b9e84871da3ef5e5a54f2ad6600.jpg" class="yj user_icon cz">
        <span class="fz14  ml10">毒液</span>
        <van-icon name="qr" class="cz ml20"  @click="show=true"/>
        
          <section class="yj4 bk bgff pd pt10 pm10 erdf_deert">
                <p class="cen fz12">余额(元)</p>
              <p class="cen red fz40 mt10">
                384.3
                </p>
              
              <table class="cen fz12 w100 df_drrtyc ">
                    <thead>
                        <tr>
                            <td></td>
                            <td>直售</td>
                            <td>代售</td>
                            <td>卖料提成</td>
                            <td>买料提成</td>
                            <td>红包</td>
                        </tr>
                    </thead>
                  <tbody>
                    <tr>
                        <td>今日121</td>
                        <td>21</td>
                         <td>12.4</td>
                         <td>15.21</td>
                         <td>15.21</td>
                         <td>54</td>
                    </tr>
                      <tr>
                        <td>历史121</td>
                        <td>21</td>
                         <td>12.4</td>
                         <td>15.21</td>
                         <td>15.21</td>
                         <td>54</td>
                    </tr>
                </tbody>
            </table>
              
        </section>
        
        
            <section class="yj4 bk bgff pd pt10  mt10">
            <section class="box">
                    <section class="box_a">
       <van-button type="default" class="sd_jhh_der ad df_deert"  size="small">提现</van-button>
                    </section>
                 <section class="box_a tr">
        <van-button type="default" class="sd_jhh_der ac"  size="small">粉丝14</van-button>
                    </section>
                
                 <section class="box_a tr">
           <van-button type="default" class="sd_jhh_der ac"  size="small">关注3</van-button>
                    </section>
            </section>    
                
                <van-cell-group>
                    <van-cell  is-link v-for="sd in list_data" :to="sd.href">
                    <img src="https://duxinggj-2018-1251133427.cos.ap-guangzhou.myqcloud.com/upload_3fa96b9e84871da3ef5e5a54f2ad6600.jpg" class="yj user_icon_er cz">
        <span class="fz14  ml10">{{sd.name}}</span>    
    </van-cell>
                </van-cell-group>
                
                    
    </section>
        
        
        
    </section>
      
        <van-dialog
  v-model="show"
 confirm-button-text="关闭"
>
        <section class="pt40 pm40">
        <section class="qc_deert ">
        <img src="https://qr.api.cli.im/qr?data=duxinggj.com&level=H&transparent=false&bgcolor=%23ffffff&forecolor=%23000000&blockpixel=12&marginblock=1&logourl=&size=260&kid=cliim&key=fd6b21fa8c057c48ac40d2495c86dd3b">
            <p class="fz12 cen z6 ">长按二维码分享</p>
        </section>
            </section>
    </van-dialog>
        
        
<dibu idxd="3"></dibu>

</div>
</template>
<script>
    import toububg from "../components/toububg"
    import dibu from "../components/dibu"
    export default {
        data() {
            return {
                show: false,
                list_data: [{
                    name: "自建料售卖明细",
                    href: "sale_subsidiary"
                }, {
                    name: "代理料售卖明细",
                    href: "sale_subsidiary"
                }, {
                    name: "推广用户卖料提成统计",
                    href: "commission_statistics"
                }, {
                    name: "推广用户买料提成统计",
                    href: "commission_statistics"
                }, {
                    name: "推广用户统计",
                    href: "promotion_statistics"
                }, {
                    name: "推广用户排行",
                    href: "seniority"
                }, {
                    name: "消息",
                    href: "message"
                }, {
                    name: "帮助",
                    href: "help"
                }]
            }
        },
        components: {
            toububg,
            dibu
        },
        methods: {

        },
        mounted() {

        },
    }

</script>
<style scoped>
    .d_kjj_dertr {
        margin-top: -120px;
    }

    .df_deert {
        width: 12rem;
    }

    .erdf_deert {
        margin-top: 25px;
    }
    .qc_deert{
        width: 220px;
        margin: auto;
        background: #f8f8f8;
        padding: 10px;
    }
    .qc_deert img{
        width: 100%;
        height: 200px
    }
</style>
