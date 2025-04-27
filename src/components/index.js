// 把components中的所组件都进行全局化注册
// 通过插件的方式
import ImageViewIndex from './ImageView/ImageViewIndex.vue'
import SkuIndex from './XtxSku/index.vue'
export const componentPlugin = {
    install (app) {
        // app.component('组件名字'，组件配置对象)
        app.component('ImageViewIndex', ImageViewIndex)
        app.component('SkuIndex', SkuIndex)
    }
}