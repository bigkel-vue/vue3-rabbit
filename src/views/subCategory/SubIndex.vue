<script setup>

import {getCategoryFilterAPI, getSubCategoryAPI} from "@/apis/subCategory.js";
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import GoodsItem from "@/views/home/components/GoodsItem.vue";

const route = useRoute();

const categoryFilter = ref({})

const getCategoryFilter = async () => {
    const res = await getCategoryFilterAPI(route.params.id);
    categoryFilter.value = res.result
}

onMounted(() => {
    getCategoryFilter()
})


const reqData = ref({
    categoryId: route.params.id,
    page: 1,
    pageSize: 20,
    sortField: 'publishTime'
})
const goodList = ref([])
const getGoodList = async () => {
    const res = await getSubCategoryAPI(reqData.value)
    goodList.value = res.result.items
}
onMounted(() => {
    getGoodList()
})

const tabChange = () => {
    reqData.value.page = 1
    getGoodList()
}

// 无线滚动
const disabled = ref(false)
const loadMore = async () => {
    reqData.value.page += 1;
    const res = await getSubCategoryAPI(reqData.value);
    goodList.value = [...goodList.value, ...res.result.items]

    if (res.result.items.length === 0) {
        disabled.value = true
    }
}

</script>

<template>
    <div class="container ">
        <!-- 面包屑 -->
        <div class="bread-container">
            <el-breadcrumb separator=">">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: `/category/${categoryFilter.parentId}` }">{{ categoryFilter.parentName }}
                </el-breadcrumb-item>
                <el-breadcrumb-item>{{categoryFilter.name}}</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="sub-container">
            <!-- tab切换之后，name中的内容会绑定到v-model指定的字段中 -->
            <el-tabs v-model="reqData.sortField" @tab-change="tabChange">
                <el-tab-pane label="最新商品" name="publishTime"></el-tab-pane>
                <el-tab-pane label="最高人气" name="orderNum"></el-tab-pane>
                <el-tab-pane label="评论最多" name="evaluateNum"></el-tab-pane>
            </el-tabs>
            <div class="body" v-infinite-scroll="loadMore" :infinite-scroll-disabled="disabled">
                <GoodsItem v-for="good in goodList" :goods="good" :key="good.id" />
            </div>
        </div>
    </div>

</template>



<style lang="scss" scoped>
.bread-container {
    padding: 25px 0;
    color: #666;
}

.sub-container {
    padding: 20px 10px;
    background-color: #fff;

    .body {
        display: flex;
        flex-wrap: wrap;
        padding: 0 10px;
    }

    .goods-item {
        display: block;
        width: 220px;
        margin-right: 20px;
        padding: 20px 30px;
        text-align: center;

        img {
            width: 160px;
            height: 160px;
        }

        p {
            padding-top: 10px;
        }

        .name {
            font-size: 16px;
        }

        .desc {
            color: #999;
            height: 29px;
        }

        .price {
            color: $priceColor;
            font-size: 20px;
        }
    }

    .pagination-container {
        margin-top: 20px;
        display: flex;
        justify-content: center;
    }


}
</style>