import { onMounted, ref } from 'vue';

export function useSortedPosts(posts) {
  const selectedSort = ref('');

  const sortedPosts = () => {
    return [...posts].sort((a, b) =>
      a[selectedSort.value]?.localeCompare(b[selectedSort.value]),
    );
  };

  onMounted(sortedPosts);

  return {
    selectedSort,
  };
}
