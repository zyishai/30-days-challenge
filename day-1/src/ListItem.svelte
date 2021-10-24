<script>
  // value
  export let value = '';
  let tempValue = value;

  // mode toggle
  export let editMode = false;
  const moveToEditMode = () => (editMode = true);
  const moveToDisplayMode = () => (editMode = false);
</script>

<div
  class="flex items-center border-2 rounded pointer-events-auto group"
  class:border-blue-400={editMode}
  class:border-transparent={!editMode}
  on:click={moveToEditMode}
>
  {#if $$slots.start}
    <div class="pl-3">
      <slot name="start" />
    </div>
  {/if}
  <input
    type="text"
    class="{$$props.class} default-styles group-focus:cursor-text"
    bind:value={tempValue}
    on:blur={moveToDisplayMode}
    readonly={!editMode || null}
  />
  {#if $$slots.end}
    <div class="pr-3">
      <slot name="end" />
    </div>
  {/if}
</div>

<style scoped>
  .default-styles {
    @apply appearance-none w-full py-2 px-3 text-gray-700 leading-tight cursor-default outline-none;
  }
</style>
