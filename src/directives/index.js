import {useIntersectionObserver} from "@vueuse/core";

export const lazyPlugin = {
    install(app) {
        // 懒加载指令逻辑（img-lazy自定义内容，在<img/>中使用v-img-lazy即可实现图片懒加载
        app.directive('img-lazy', {
            mounted (el, binding) {
                // el: 指令绑定的那个元素 img
                // binding: binding.value  指令等于号后面绑定的表达式的值（v-img-lazy 后面的值）  图片url
                const {stop} = useIntersectionObserver(
                    el,
                    ([{ isIntersecting }]) => {
                        if (isIntersecting) {
                            // 进入视口区域
                            el.src = binding.value
                            stop()
                        }
                    },
                )
            }
        })
    }
}