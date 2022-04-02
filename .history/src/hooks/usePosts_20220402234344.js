import axios from 'axios';
import { ref } from 'vue';

export function usePosts(page, limit=5) {
    const posts = ref([]);
    const page = ref(1);
    const totalPages = ref(1);
    const limit = ref(5);
    const isLoading = ref(true);
    
    try {
      const res = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
        {
          params: {
            _page: page,
            _limit: limit,
          },
        },
      );
      totalPages.value = Math.ceil(res.headers['x-total-count'] / limit);
      posts.value = res.data;
    } catch (e) {
      console.log(e?.message);
    } finally {
      isLoading.value = false;
    }
  }