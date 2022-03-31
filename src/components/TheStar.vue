<template>
    <div class="card text-center m-3">
        <h1 class="card-header"> {{ hello }} </h1>
        <div v-for="article in pageOfItems" :key="article.title">
            <div class="card-body">
                <a v-bind:href="url" target="_blank">Link to the original article</a>
                <!-- https://www.the-star.co.ke/news/2022-03-31-cj-koome-blasts-ahmednasir-havi-over-comments-on-bbi-case/ -->
                <h2>{{ article.title }}</h2>
                <!-- <img src="{{ article.image.filepath }}" alt="Article Image"> -->
                <p>{{ article.plain_text }}</p>
            </div>
        </div>
        <div class="card-footer pb-0 pt-3">
            <Paginate :items="articles" @changePage="onChangePage" />
        </div>
    </div>
</template>

<script>
import axios from  'axios'
import Paginate from './Paginate.vue'
const customStyles = {
    ul: {
        border: '2px solid red'
    },
    li: {
        display: 'inline-block',
        border: '2px dotted green'
    },
    a: {
        color: 'blue'
    }
};

const customLabels = {
    first: '<<',
    last: '>>',
    previous: '<',
    next: '>'
};

let url = ''

export default {
    name: 'TheStar',

     components: {
        Paginate,
    },
    data() {
        return {
            hello: 'The-Star News',
            articles: {},
            pageOfItems: [],
            customStyles,
            customLabels,
            url,
        }
    },

    async mounted() {
        // Fetch the articles from source using the endpoint once the page is loaded
        const response = await axios.get('https://the-star.co.ke/apiv1/pub/articles/get-all')
        this.articles = response.data

        this.articles.forEach(article => {
            // Loop through all articles to get url of current article
            this.url = 'https://www.the-star.co.ke/' + article.pub_url
        });
    },

    methods: {
        onChangePage(pageOfItems) {
            // update article on the current page
            this.pageOfItems = pageOfItems;
        }
    },
}
</script>
