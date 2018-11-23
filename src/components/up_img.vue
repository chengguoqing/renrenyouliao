<!--上传图片-->
<template>
<div >

    	<van-row gutter="10">
						<van-col span="8" v-for="(sd,idx) in um_img" class="pt10">
							<section class="pr">
<!--								<van-icon name="close" class="bgff df_deertt yj fz18" @click="closeer(idx)" />-->
								<img :src="sd" class="df_jh_dsert">
                                <section class="box cen pt5">
                                    <p class="box_a" v-if="idx!=0" @click="weizhi(0,idx)">
                                        <i class="dx icon-left z6"></i>
                                    </p>
                                     <p class="box_a" v-if="idx<um_img.length-1" @click="weizhi(1,idx)">
                                        <i class="dx icon-right1 z6"></i>
                                    </p>
                                        <p class="box_a " @click="del_img(idx)">
                                        <i class="dx icon-close z6 cz"></i>
                                    </p>
                                </section>
							</section>
						</van-col>
					</van-row>

					<p class="title_oiud fz14 z6  pr">
						<i class="dx icon-add z6 cz"></i>
						添加图片
						<van-uploader :after-read="onRead">

						</van-uploader>


					</p>
    

</div>
</template>
<script>
        import Vue from 'vue'
    export default {
        data() {
            return {
                um_img: [],
            }
        },
        components: {

        },
        methods: {
            onRead(data) {
                this.um_img.push(data.content)
            },
            weizhi(ty, idx) { //图片换位置 ty= 0前  1后
                if (ty) {
                    var sd_df_a = this.um_img[idx],
                        sd_df_b = this.um_img[idx + 1]
                    Vue.set(this.um_img, idx, sd_df_b)
                    Vue.set(this.um_img, idx + 1, sd_df_a)

                } else {

                    var sd_df_a = this.um_img[idx],
                        sd_df_b = this.um_img[idx - 1]

                    Vue.set(this.um_img, idx - 1, sd_df_a)
                    Vue.set(this.um_img, idx, sd_df_b)
                }

            },
            del_img(idx) { //删除图片
                this.$dialog.confirm({
                    title: '提示',
                    message: '确认要删除吗？'
                }).then(() => {
                    this.um_img.splice(idx, 1);
                }).catch(() => {

                });
            },
        },
        mounted() {

        },
    }

</script>
<style scoped>
    .title_oiud {
        line-height: 40px;
    }

    .df_jh_dsert {
        width: 100%;
        height: 7rem;
    }

</style>
