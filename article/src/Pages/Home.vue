<template>
  <div class="home">
    <h1>Latest News</h1>
    <ul class="article-list">
      <li v-for="article in articles" :key="article.id" class="article-item">
        <h2>{{ article.title }}</h2>
        <p>{{ article.content }}</p>
        <router-link class="read-more" :to="{ name: 'ArticleDetail', params: { id: article.id } }">Read more</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      articles: [
        { id: 1, title: 'Economic Growth Initiatives', content: 'Overview of the government’s initiatives to promote economic growth.' },
        { id: 2, title: 'Healthcare Reforms', content: 'Recent reforms in the healthcare sector by the Irish government.' },
        { id: 3, title: 'Climate Change Policies', content: 'Analysis of the latest climate change policies and their impact.' },
        { id: 4, title: 'Technology Advancements', content: 'Exploring the latest advancements in technology and innovation.' },
        { id: 5, title: 'Education Reforms', content: 'Discussion on the recent reforms in the education sector.' },
        { id: 6, title: 'Sports Updates', content: 'Latest updates from the world of sports and upcoming events.' },
      ],
    };
  },
};
</script>

<style>
.home {
  padding: 20px;
}

.article-list {
  list-style: none;
  padding: 0;
}

.article-item {
  background: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin: 10px 0;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.article-item h2 {
  margin: 0 0 10px;
}

.read-more {
  color: #4CAF50; /* Green link */
  font-weight: bold;
}
</style>