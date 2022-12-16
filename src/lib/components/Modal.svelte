<script lang="ts">
	import Portal from '$lib/components/Portal.svelte';
	import Overlay from '$lib/components/Overlay.svelte';
	import Close from '$lib/components/icons/Close.svelte';

	import { createEventDispatcher } from 'svelte';

	export let isVisible = false;
	const dispatch = createEventDispatcher();
</script>

<svelte:window
	on:keydown={(event) => {
		if (event.key === 'Escape') {
			dispatch('close');
		}
	}}
/>

{#if isVisible}
	<Portal>
		<Overlay />
		<div class="center fixed inset-0 z-modal">
			<div
				class="relative relative min-h-[230px] w-full max-w-[450px] rounded-lg bg-white px-10 py-7"
			>
				<button
					on:click={() => dispatch('close')}
					class="absolute right-4 top-4 text-pastelPurple hover:text-daisyBush"
				>
					<Close />
				</button>

				<slot />
			</div>
		</div>
	</Portal>
{/if}
