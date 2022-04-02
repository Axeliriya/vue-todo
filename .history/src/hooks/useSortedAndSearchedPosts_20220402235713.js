import { onMounted, ref } from 'vue';

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('');

  const sortedAndSearchedPosts = () => {
    return sortedPosts.filter(({ title }) =>
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
