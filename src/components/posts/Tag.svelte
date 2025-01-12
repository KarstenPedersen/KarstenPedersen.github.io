<script lang="ts">
  import type { Tag } from "$lib/types/types";

  interface Props {
    tag: Tag;
  }

  const { tag }: Props = $props();  
</script>

<a class="" href={`/posts?tag=${tag}`}>{tag}</a>
