import axios from 'axios';
import { ref } from 'vue';

export function usePosts() {
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
            _page: page.value,
            _limit: limit.value,
          },
        },
      );
      totalPages.value = Math.ceil(res.headers['x-total-count'] / limit.value);
      posts.value = res.data;
    } catch (e) {
      console.log(e?.message);
    } finally {
      isLoading.value = false;
    }
  }