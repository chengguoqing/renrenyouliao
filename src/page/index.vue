<template>
<div class="pd pt10">
    <section class="yj4 pd   d_ggaserr pr bk">
        <i class="dx icon-wenhao fz20 cz"></i>
        <span class="cz fz12 ml5">标题规范-如何稳定拥有收入</span>
        <i class="dx icon-right right_icon"></i>
    </section>  
    
    <section class="bk mt10 yj4 bgff ">
        
        <section class="pd pm10">
            <p class="title_oiud fz14">主标题</p>
         
                <input type="text" placeholder="加个标题吧~(不超过18个字符)"  class="jih_namer">
       
        </section>
        
        <van-collapse v-model="activeNames">
  <van-collapse-item title="免费内容" name="1">
    <textarea placeholder="尽情发挥吧" class="sd_jh_dert" rows="6"></textarea>
  </van-collapse-item>
    </van-collapse>
          <section class="pd pm10">
            <p class="title_oiud fz14">付费内容</p>
         
              <textarea placeholder="尽情发挥吧" class="sd_jh_dert" rows="6"></textarea>
        </section>
    
           <section class="pd pm10">
            <van-row gutter="10">
                <van-col span="8" v-for="(sd,idx) in um_img">
                    <section class="pr">
                        <van-icon name="close" class="bgff df_deertt yj fz18" @click="closeer(idx)"/>
                            <img :src="sd" class="df_jh_dsert">
                    </section>
                </van-col>
            </van-row>   
               
            <p class="title_oiud fz14 z6  pr">
                <i class="dx icon-add z6 cz"></i>
                添加图片
                <van-uploader :after-read="onRead">

</van-uploader>
                
                
        </p>
               
    </section>
        
        
    </section>
  
      <section class="pd ">
            <p class="title_oiud fz12 z9">付费方式.2选1</p>
          
    </section>
    
        <section class="bk  yj4 bgff sdf_d_Ertx">
           <van-tabs v-model="active">
  <van-tab title="单卖">
    
      <section class="pd pm10">
            <p class="title_oiud fz14">金额</p>
         
                <input type="text" placeholder="填写金额.元,0则为免费"  class="jih_namer">
       
        </section>
            <section class="pd pm10 btm">
            <section class="title_oiud fz14 pr">
                限时售卖 <i class="dx  icon-iconfontwenhao1 fz14"></i>
                <section class="kaiguyane">
          <van-switch v-model="checked" />
    </section>
  
            </section>
              <section class="title_oiud fz14 pr btm ">
              购买截止日期
                  <i class="dx icon-down dojhh_deert"></i>
    </section>
         
                
       
        </section>
      
    </van-tab>
  <van-tab>
     <div slot="title">
     包时段 <i class="dx  icon-iconfontwenhao1 fz14"></i>
    </div>
      
      22
    
    </van-tab>
</van-tabs>
            
            
    </section>
    
    
    
    <van-popup v-model="show_er" position="bottom" >  
        <van-datetime-picker
  v-model="currentDate"
  type="datetime"
  :min-date="minDate"
  :max-date="maxDate"
/>
    
    </van-popup>
</div>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                checked: true,
                show_er: true,
                activeNames: [],
                um_img: [],

                minHour: 10,
                maxHour: 20,
                minDate: new Date(),
                maxDate: new Date(2019, 10, 1),
                currentDate: new Date()
            }
        },
        components: {

        },
        methods: {
            closeer(idx) {
                this.um_img.splice(idx, 1);
            },
            onRead(data) {
                this.um_img.push(data.content)
            }
        },
        mounted() {

        },
    }

</script>
<style>
    .title_oiud .van-uploader {
        position: absolute;
        left: 0px;
        top: 0px;
        width: 100%;
        height: 100%
    }

    .kaiguyane {
        position: absolute;
        right: 0px;
        top: 8px
    }

    .sdf_d_Ertx .van-tab {
        color: #666
    }

    .sdf_d_Ertx .van-tab--active {
        color: #333
    }

    .sdf_d_Ertx .van-tabs__line {
        background-color: #333
    }

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

    .df_jh_dsert {
        width: 100%;
        height: 7rem;
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

</style>
