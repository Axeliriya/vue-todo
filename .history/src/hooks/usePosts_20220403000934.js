import axios from 'axios';
import { onMounted, ref } from 'vue';

export function usePosts(limit = 5) {
  const posts = ref([]);
  const totalPages = ref(1);
  const isLoading = ref(true);

  const fatching = async () => {
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts?limit=5',
      );
      totalPages.value = Math.ceil(res.headers['x-total-count'] / limit);
      posts.value = res.data;
    } catch (e) {
      console.log(e?.message);
    } finally {
      isLoading.value = false;
    }
  };

  onMounted(fatching);

  return {
    posts,
    totalPages,
    isLoading,
  };
}
