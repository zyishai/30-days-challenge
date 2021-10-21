<script>
	import EditableListItem from "./EditableListItem.svelte";

	export let name;
</script>

<main class="h-screen w-screen grid place-content-center">
	<ul class="w-72 bg-red-50">
		<EditableListItem text={name} class="w-full" />
		<EditableListItem text={name} />
	</ul>
</main>

<style windi:preflights:global windi:safelist:global>
</style>