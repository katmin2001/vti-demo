<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';
const data1 = ref([]); // Tạo reactive property "data1" dưới dạng một mảng rỗng
const data2 = ref([]); // Tạo reactive property "data2" dưới dạng một mảng rỗng
const config = import.meta.env.VITE_URL

const category_list = ref([])
const bestSales = ref({})
const products = ref([])

const productsByCategory = ref([])
async function getProductByCategoryId(category) {
    try {
        if (category == null) {
            const response = await axios.get(`http://localhost:8082/home/product-list`);
            productsByCategory.value = response.data.data
        }
        else {
            const response = await axios.get(`http://localhost:8082/product-list/${category.id}`);
            productsByCategory.value = response.data.data
        }

    } catch (error) {
        console.error(error);
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
    <header>
        <div class="content_left">
            <div class="logo">
                <img src="../../assets/images/Logo.png" alt="">
                <label for="">S-Zone</label>
            </div>
            <div class="search">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
                    viewBox="0 0 16 16">
                    <path
                        d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
                <input type="text" placeholder="Search...">
            </div>
        </div>
        <div class="content_right">
            <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.4184 6.47H16.6232C19.3152 6.47 21.5 8.72 21.5 11.48V17C21.5 19.76 19.3152 22 16.6232 22H7.3768C4.6848 22 2.5 19.76 2.5 17V11.48C2.5 8.72 4.6848 6.47 7.3768 6.47H7.58162C7.60113 5.27 8.05955 4.15 8.8886 3.31C9.72741 2.46 10.8003 2.03 12.0098 2C14.4286 2 16.3891 4 16.4184 6.47ZM9.91273 4.38C9.36653 4.94 9.06417 5.68 9.04466 6.47H14.9553C14.9261 4.83 13.6191 3.5 12.0098 3.5C11.2587 3.5 10.4784 3.81 9.91273 4.38ZM15.7064 10.32C16.116 10.32 16.4379 9.98 16.4379 9.57V8.41C16.4379 8 16.116 7.66 15.7064 7.66C15.3065 7.66 14.9748 8 14.9748 8.41V9.57C14.9748 9.98 15.3065 10.32 15.7064 10.32ZM8.93737 9.57C8.93737 9.98 8.6155 10.32 8.20585 10.32C7.80595 10.32 7.47433 9.98 7.47433 9.57V8.41C7.47433 8 7.80595 7.66 8.20585 7.66C8.6155 7.66 8.93737 8 8.93737 8.41V9.57Z"
                        fill="#4E4AF2" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M15.85 2.50016C16.481 2.50016 17.111 2.58916 17.71 2.79016C21.401 3.99016 22.731 8.04016 21.62 11.5802C20.99 13.3892 19.96 15.0402 18.611 16.3892C16.68 18.2592 14.561 19.9192 12.28 21.3492L12.03 21.5002L11.77 21.3392C9.48102 19.9192 7.35002 18.2592 5.40102 16.3792C4.06102 15.0302 3.03002 13.3892 2.39002 11.5802C1.26002 8.04016 2.59002 3.99016 6.32102 2.76916C6.61102 2.66916 6.91002 2.59916 7.21002 2.56016H7.33002C7.61102 2.51916 7.89002 2.50016 8.17002 2.50016H8.28002C8.91002 2.51916 9.52002 2.62916 10.111 2.83016H10.17C10.21 2.84916 10.24 2.87016 10.26 2.88916C10.481 2.96016 10.69 3.04016 10.89 3.15016L11.27 3.32016C11.3618 3.36913 11.4649 3.44396 11.554 3.50863C11.6104 3.5496 11.6612 3.5865 11.7 3.61016C11.7163 3.61979 11.7329 3.62947 11.7496 3.63923C11.8354 3.68928 11.9247 3.74142 12 3.79916C13.111 2.95016 14.46 2.49016 15.85 2.50016ZM18.51 9.70016C18.92 9.68916 19.27 9.36016 19.3 8.93916V8.82016C19.33 7.41916 18.481 6.15016 17.19 5.66016C16.78 5.51916 16.33 5.74016 16.18 6.16016C16.04 6.58016 16.26 7.04016 16.68 7.18916C17.321 7.42916 17.75 8.06016 17.75 8.75916V8.79016C17.731 9.01916 17.8 9.24016 17.94 9.41016C18.08 9.58016 18.29 9.67916 18.51 9.70016Z"
                        fill="#4E4AF2" />
                </svg>
            </div>
            <button class="sign_in">
                Sign in
            </button>
            <button class="sign_up">
                Sign up
            </button>
            <div class="avatar_label">
                <div class="text">
                    <div class="name">Name</div>
                    <div class="description">Description</div>
                </div>
                <div class="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor"
                        class="bi bi-person-circle" viewBox="0 0 16 16">
                        <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                        <path fill-rule="evenodd"
                            d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                    </svg>
                </div>
            </div>
        </div>
    </header>
    <div class="banner">
    </div>
    <main>
        <div class="features">
            <h1>TRENDING</h1>
            <div class="item-list">
                <a class="item" v-for="(item, index) in  bestSales.data" :key="index">
                    <!-- <pre>{{ item?.productImages[0]?.source_image }}</pre> -->
                    <img :src="`${config}/${item?.productImages[0].source_image}`" alt="">
                    <div class="card-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                            <rect y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                            <rect x="19" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                            <rect x="38" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                        </svg>
                        <div class="name">{{ item.name }}</div>
                        <div class="price">Price: {{ item.price }} VND</div>
                    </div>
                </a>
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
            <div v-if="productsByCategory === null" class="item-list">
                <a class="item" v-for="(item, index) in  products" :key="index" v-show="item.status === true">
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
                        <div class="price">Price: {{ item.price }} VND</div>
                    </div>
                </a>
            </div>
            <div v-if="productsByCategory.length > 0" class="item-list">
                <a class="item" v-for="(item, index) in  productsByCategory" :key="index">
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
                            <div class="price">Price: {{ item.price }} VND</div>
                        </div>
                    </div>
                    <div v-else>
                        <div class="image-container">
                            <img :src="`${config}/${item?.productImages[0].source_image}`" alt="">
                            <div class="sold-out">Hết hàng</div>
                        </div>
                        <div class="card-detail">
                            <svg xmlns="http://www.w3.org/2000/svg" width="52" height="5" viewBox="0 0 52 5" fill="none">
                                <rect y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#05E6B7" />
                                <rect x="19" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#F701A8" />
                                <rect x="38" y="0.810547" width="14" height="4.10557" rx="2.05279" fill="#00009D" />
                            </svg>
                            <div class="name">{{ item.name }}</div>
                            <div class="price">Price: {{ item.price }} VND</div>
                        </div>
                    </div>
                </a>
            </div>
            <div v-else class="item-list">
                <div class="nothing">Nothing</div>
            </div>
        </div>
    </main>
    <footer></footer>
</template>

<style>
@import url('home.scss');
</style>