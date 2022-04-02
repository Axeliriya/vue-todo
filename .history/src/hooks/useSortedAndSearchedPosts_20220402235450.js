import { onMounted, ref } from 'vue';

export function useSortedAndSearchedPosts(limit = 5) {
  const posts = ref([]);
  const totalPages = ref(1);
  const isLoading = ref(true);

  const sortedAndSearchedPosts = () => {
    return this.sortedPosts.filter(({ title }) =>
      title.toLowerCase().includes(this.searchQuery.toLowerCase()),
    );
  };

  onMounted(fatching);

  return {
    posts,
    totalPages,
    isLoading,
  };
}
