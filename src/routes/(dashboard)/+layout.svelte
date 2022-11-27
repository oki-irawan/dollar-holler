<script lang="ts">
	import NavigationMenu from '../../lib/components/NavigationMenu.svelte';
</script>

<div class="grid min-h-screen grid-cols-12 bg-whisper md:gap-x-16">
	<NavigationMenu />

	<main class="col-span-12 px-4 pt-4 md:col-span-8 md:py-10">
		<slot />
	</main>
</div>
