import { onMounted, ref } from 'vue';

export function useSortedPosts(posts) {
  const selectedSort = ref([]);
  const totalPages = ref(1);
  const isLoading = ref(true);

  const sortedPosts = () => {
      return [...this.posts].sort((a, b) =>
        a[this.selectedSort]?.localeCompare(b[this.selectedSort]),
  };

  onMounted(fatching);

  return {
    posts,
    totalPages,
    isLoading,
  };
}
