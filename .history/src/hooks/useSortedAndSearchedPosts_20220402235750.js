import { onMounted, ref } from 'vue';

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('');

  const sortedAndSearchedPosts = () => {
    return sortedPosts.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  };

  onMounted(sortedAndSearchedPosts);

  return {
    searchQuery,
  };
}
