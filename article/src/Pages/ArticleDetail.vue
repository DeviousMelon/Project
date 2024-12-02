<template>
  <div class="article-detail" v-if="article">
    <h1>{{ article.title }}</h1>
    <p>{{ article.content }}</p>
    <router-link class="back-link" to="/">Back to Home</router-link>
  </div>
  <div v-else>
    <h1>Article Not Found</h1>
    <p>The article you are looking for does not exist.</p>
    <router-link class="back-link" to="/">Back to Home</router-link>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const article = ref(null); // Initialize article as null
    const articles = [
      { id: 1, title: 'Economic Growth Initiatives', content: 'Overview of the government’s initiatives to promote economic growth.' },
      { id: 2, title: 'Healthcare Reforms', content: 'Recent reforms in the healthcare sector by the Irish government.' },
      { id: 3, title: 'Climate Change Policies', content: 'Analysis of the latest climate change policies and their impact.' },
      { id: 4, title: 'Technology Advancements', content: 'Exploring the latest advancements in technology and innovation.' },
      { id: 5, title: 'Education Reforms', content: 'Discussion on the recent reforms in the education sector.' },
      { id: 6, title: 'Sports Updates', content: 'Latest updates from the world of sports and upcoming events.' },
    ];

    onMounted(() => {
      article.value = articles.find(a => a.id === parseInt(props.id));
    });

    return { article };
  },
};
</script>

<style>
.article-detail {
  padding: 20px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.back-link {
  display: inline-block;
  margin-top: 20px;
  color: #4CAF50; /* Green link */
  font-weight: bold;
}
</style>