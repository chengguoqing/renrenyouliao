<!--推广用户统计-->
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
       <section class="bk yj4    bgff pt10">
    
               <table class="cen fz12 w100 df_drrtyc ">
                <thead>
                <tr>
            <td>日期</td>
                     <td>总用户数</td>
                     <td>一级量</td>
                     <td>二级量</td>
                     <td>三级量</td>
            </tr>
                </thead>
                   <tbody>
                    <tr v-for="sd in 10">
                    <td>11-16</td>
                         <td>541</td>
                         <td>635</td>
                         <td>874</td>
                           <td>874</td>
                </tr>
                         <tr>
                    <td>月总合计</td>
                         <td>4521</td>
                         <td>635</td>
                         <td>874</td>
                           <td>874</td>
                </tr>
            </tbody>
            </table>                                                                                            
                                                                                                                      
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
