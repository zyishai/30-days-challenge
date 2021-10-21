<script>
  import { createEventDispatcher } from 'svelte';
  
  export let text = '';
  export let editMode = false;
  /**
   * @type {<() => any} [onTextClick] - handle clicks on the span
  */
  export let onTextClick = null;

  const dispatch = createEventDispatcher();
  const not = (value) => !value;
  const textSpanClickDefaultBehavior = () => {
    dispatch('textClick:before');
    editMode = true;
    dispatch('textClick');
  }
</script>

<li class="list-none">
  {#if not(editMode)}
    <span
      class="inline-block hover:(underline underline-offset-4 underline-dotted) {$$props.class}"
      on:click={onTextClick || textSpanClickDefaultBehavior}>
      {text}
    </span>
  {:else}
    <input type="text" bind:value={text} class="inline-block {$$props.class}">
  {/if}
</li>