<script lang="ts">
	export let label: string;
	export let isAnimated: boolean = true;
	export let variant: 'primary' | 'secondary' | 'destructive' = 'primary';
	export let onClick: () => void;
</script>

<button
	class="center relative  whitespace-nowrap rounded-lg py-2 px-5 font-sansSerif text-base font-black lg:py-3 lg:px-10 lg:text-xl"
	class:isAnimated
	class:isPrimary={variant === 'primary'}
	class:isSecondary={variant === 'secondary'}
	class:isDestructive={variant === 'destructive'}
	on:click={() => onClick()}
>
	{label}
</button>

<style lang="postcss">
	.isAnimated {
		@apply translate-y-0 shadow-colored transition-all hover:-translate-y-2 hover:shadow-coloredHover;
	}

	.isPrimary {
		@apply bg-lavenderIndigo text-white;
	}

	.isSecondary {
		@apply bg-gallery text-daisyBush;
	}

	.isDestructive {
		@apply bg-scarlet text-goldenFizz;
	}
</style>
