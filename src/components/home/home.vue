<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
import Header from '../common/header.vue'
// import Detail from './components/detail/detail.vue'


const config = import.meta.env.VITE_URL
const category_list = ref([])
const bestSales = ref({})
const products = ref([])
const page = ref(0)
const index = ref(0)
const productsByCategory = ref([])

async function getProductByCategoryId(category) {
    try {
        page.value = 0
        if (!category) {
            index.value = 0
            const response = await axios.get(`http://localhost:8082/home/product-list`);
            productsByCategory.value = response.data.data
        }
        else {
            index.value = category.id
            const response = await axios.get(`http://localhost:8082/product-list/${category.id}`);
            productsByCategory.value = response.data.data
        }

    } catch (error) {
        console.error(error);
    }
}

let fetchMore = async () => {
    page.value++
    try {
        console.log(index.value)
        console.log(page.value)
        if (index.value === 0) {
            let response = await axios.get(`http://localhost:8082/home/product-list?page=${page.value}`);
            productsByCategory.value = [...productsByCategory.value, ...response.data.data]
        }
        else {
            let response = await axios.get(`http://localhost:8082/product-list/${index.value}?page=${page.value}`);
            productsByCategory.value = [...productsByCategory.value, ...response.data.data]
        }

    } catch (e) {
        console.log(e)
    }
}
onMounted(() => {
    fetch('http://localhost:8082/home/category-list')
        .then(response => response.json())
        .then(data => category_list.value = data);
    fetch('http://localhost:8082/home/best-sales')
        .then(response => response.json())
        .then(data => bestSales.value = data);
    fetch('http://localhost:8082/home/product-list')
        .then(response => response.json())
        .then(data => products.value = data);
    getProductByCategoryId();
})

</script>

<template>
    <Header></Header>
    <div class="banner">
    </div>
    <main>
        <div class="features">
            <h1>TRENDING</h1>
            <div class="item-list">
                <router-link :to="/detail/+item.id" class="item" v-for="(item, index) in  bestSales.data" :key="index">
                    <div class="image-container">
                        <img :src="`${config}/${item?.productImages[0].source_image}`" alt="">
                        <div class="sold-out">HOT</div>
                    </div>
                    <div class="card-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                            <rect y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                            <rect x="19" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                            <rect x="38" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                        </svg>
                        <div class="name">{{ item.name }}</div>
                        <div class="price">Price: {{ new Intl.NumberFormat('de-DE').format(item?.price) }} VND</div>
                    </div>
                </router-link>
            </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="9" viewBox="0 0 110 9" fill="none">
            <rect y="0.513672" width="29.0109" height="7.48764" rx="3.74382" fill="#4E4AF2" />
            <rect x="37.4727" y="0.513672" width="19.3406" height="7.48764" rx="3.74382" fill="#37B6E9" />
            <rect x="64.0664" y="0.513672" width="19.3406" height="7.48764" rx="3.74382" fill="#37B6E9" />
            <rect x="90.6592" y="0.513672" width="19.3406" height="7.48764" rx="3.74382" fill="#37B6E9" />
        </svg>
        <div class="features">
            <h1>PRODUCT</h1>
            <div class="category-list">
                <a class="item" @click="getProductByCategoryId()">
                    All
                </a>
                <a class="item" v-for="(item, index) in  category_list.data" :key="index"
                    @click="getProductByCategoryId(item)">
                    {{ item.name }}
                </a>
            </div>
            <div v-if="!productsByCategory" class="item-list">
                <router-link :to="/detail/+item.id" class="item" v-for="(item, index) in  products" :key="index" v-show="item.status === true"
                    href="#   /detail">
                    <div class="image-container">
                        <img :src="`${config}/${item?.productImages[0].source_image}`" alt="">
                    </div>
                    <div class="card-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                            <rect y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                            <rect x="19" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                            <rect x="38" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                        </svg>
                        <div class="name">{{ item.name }}</div>
                        <div class="price">Price: {{ new Intl.NumberFormat('de-DE').format(item?.price) }} VND</div>
                    </div>
                </router-link>
            </div>
            <div v-if="productsByCategory.length > 0" class="item-list">
                <router-link :to="/detail/+item.id" class="item" v-for="(item, index) in  productsByCategory" :key="index">
                    <div v-if="item.status === true">
                        <div class="image-container">
                            <img :src="`${config}/${item?.productImages[0].source_image}`" alt="">
                        </div>
                        <div class="card-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                                <rect y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                                <rect x="19" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                                <rect x="38" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                            </svg>
                            <div class="name">{{ item.name }}</div>
                            <div class="price">Price: {{ new Intl.NumberFormat('de-DE').format(item?.price) }} VND</div>
                        </div>
                    </div>
                    <div v-else style="cursor: no-drop;">
                        <div class="image-container">
                            <img :src="`${config}/${item?.productImages[0].source_image}`" alt="">
                            <div class="sold-out">Sold out</div>
                        </div>
                        <div class="card-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                                <rect y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                                <rect x="19" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                                <rect x="38" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                            </svg>
                            <div class="name">{{ item.name }}</div>
                            <div class="price">Price: {{ new Intl.NumberFormat('de-DE').format(item?.price) }} VND</div>
                        </div>
                    </div>
                </router-link>
            </div>
            <div v-else class="item-list">
                <div class="nothing">Nothing</div>
            </div>
            <button v-show="productsByCategory.length >= (page + 1) * 8" class="load-more" @click="fetchMore()">Load
                More</button>
        </div>
    </main>
    <footer>
        <h1>FOOTER</h1>
    </footer>
</template>

<style>@import url('home.scss');</style>