<template>
  <div class="admin-dashboard">
    <h1>Admin Dashboard</h1>
    <h2>Manage Articles</h2>
    <form @submit.prevent="addArticle">
      <input v-model="newArticle.title" placeholder="Article Title" required />
      <textarea v-model="newArticle.content" placeholder="Article Content" required></textarea>
      <button type="submit">Add Article</button>
    </form>
    <h2>Existing Articles</h2>
    <ul>
      <li v-for="article in articles" :key="article.id">
        <h3>{{ article.title }}</h3>
        <p>{{ article.content }}</p>
        <button @click="deleteArticle(article.id)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'AdminDashboard',
  data() {
    return {
      newArticle: {
        title: '',
        content: '',
      },
      articles: [
        { id: 1, title: 'Economic Growth Initiatives', content: 'Overview of the government’s initiatives to promote economic growth.' },
        { id: 2, title: 'Healthcare Reforms', content: 'Recent reforms in the healthcare sector by the Irish government.' },
      ],
    };
  },
  methods: {
    addArticle() {
      const newId = this.articles.length + 1;
      this.articles.push({ id: newId, title: this.newArticle.title, content: this.newArticle.content });
      this.newArticle.title = '';
      this.newArticle.content = '';
    },
    deleteArticle(id) {
      this.articles = this.articles.filter(article => article.id !== id);
    },
  },
};
</script>

<style scoped>
.admin-dashboard {

}
</style>