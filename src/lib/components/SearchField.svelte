<script>
	import Search from '$lib/components/icons/Search.svelte';
</script>

<div class="relative flex w-full items-baseline">
	<div class="mr-2 mt-auto text-pastelPurple"><Search /></div>
	<input
		type="text"
		name="search"
		placeholder="Search by keyword"
		class="w-full border-b-2 border-b-2 border-dashed border-b-pastelPurple bg-transparent font-sansSerif text-base text-black outline-none focus:border-solid focus:border-b-lavenderIndigo md:w-[14rem] lg:text-xl"
	/>
	<button class="font-sansSerif text-lg text-pastelPurple lg:text-xl">Search</button>
</div>
