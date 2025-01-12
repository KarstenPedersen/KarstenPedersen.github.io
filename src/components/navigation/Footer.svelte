<script lang="ts">
  import { getEntry } from "astro";
</script>

<footer class="content-grid bg-dark text-light mt-auto">
  <div class="flex flex-col sm:flex-row items-center justify-between py-4 border-dark border-t-2 dark:border-darkgray">
    <ul class="flex items-center gap-x-4 min-h-[40px] list-none flex-wrap">
      <Social social={githubSocial} />
      <Social social={linkedInSocial} />
      <Social social={mailSocial} />
    </ul>
    <BackToTop />
  </div>
</footer>
