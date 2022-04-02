import { computed, onMounted, ref } from 'vue';

export function useSortedAndSearchedPosts(sortedPosts) {
  const searchQuery = ref('');

  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.filter(({ title }) =>
      title.toLowerCase().includes(searchQuery.value.toLowerCase()),
    );
  });

  onMounted(sortedAndSearchedPosts);

  return {
    searchQuery,
    sortedAndSearchedPosts,
  };
}
