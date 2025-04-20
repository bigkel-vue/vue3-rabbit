import {getBannerApi} from '@/apis/home.js'
import {onMounted, ref} from "vue";

export function getBanner() {
    const bannerList = ref([])

    const getBanner = async () => {
        const res = await getBannerApi({
            distributionSite: '2'
        });
        bannerList.value = res.result
    }

    onMounted(() => {
        getBanner()
    })

    return {
        bannerList
    }
}
