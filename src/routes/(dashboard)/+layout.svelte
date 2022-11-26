<script lang="ts">
	import NavigationMenu from '../../lib/components/NavigationMenu.svelte';
</script>

<div class="grid min-h-screen grid-cols-12 gap-x-16 bg-whisper">
	<NavigationMenu />

	<main class="col-span-8 py-10">
		<slot />
	</main>
</div>
