import {onBeforeRouteUpdate, useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {getTopCategoryAPI} from "@/apis/category.js";

export function getCategory() {
    const categoryData = ref({})
    const getCategory = async (id) => {
        const res = await getTopCategoryAPI(id)
        categoryData.value = res.result
    }

    const route = useRoute()

    onMounted(() => {
        getCategory(route.params.id)
    })
    // target是切换之后的路由
    // 同一组件实例，参数变化时才会触发。不同组件实例时，不会触发
    onBeforeRouteUpdate((target) => {
        getCategory(target.params.id)
    })

    return {
        categoryData
    }

}