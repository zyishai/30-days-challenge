<script>
	import 'virtual:windi.css';
	import ListItem from './ListItem.svelte';
</script>

<main class="h-screen w-screen grid place-content-center">
	<div class="text-sm font-medium mb-3 underline">Animals</div>
	<ul class="w-72 grid gap-y-3">
		{#each ['Zebra', 'Lion', 'Dog'] as animal}
			<ListItem
				class="w-full"
				value={animal} />
		{/each}
	</ul>
</main>

<style windi:global windi:preflights:global windi:safelist:global>
</style>