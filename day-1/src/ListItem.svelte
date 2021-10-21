<script>
  // value
  export let value = '';
  let tempValue = value;

  // mode toggle
  export let editMode = false;
  const moveToEditMode = () => editMode = true;
  const moveToDisplayMode = () => editMode = false;
</script>

<input
  type="text"
  class="{$$props.class} appearance-none border-2 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none cursor-default focus:cursor-text"
  class:border-blue-400={editMode}
  class:border-transparent={!editMode}
  bind:value={tempValue}
  on:click={moveToEditMode}
  on:blur={moveToDisplayMode}
  readonly={!editMode || null}>