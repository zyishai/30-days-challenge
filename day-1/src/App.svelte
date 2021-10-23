<script>
  import 'virtual:windi.css';
  import ListItem from './ListItem.svelte';
</script>

<main class="windi-o7kgup">
  <div class="windi-1bxy4xb">Animals</div>
  <ul class="windi-d0lu4u">
    {#each ['Zebra', 'Lion', 'Dog'] as animal}
    <ListItem class="windi-10cf8i0" value={animal} />
    {/each}
  </ul>
</main>

<style windi:global windi:preflights:global windi:safelist:global>
</style>
