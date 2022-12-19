<script lang="ts">
	import type { PageData, PageLoad } from './$types';

	export let data: PageData;
	console.log(data);

	const load: PageLoad = async ({ fetch }) => {
	try {
		const response = await fetch('https://assignments.reaktor.com/birdnest/drones');
		console.log(response)
	} catch (error) {
		console.error(error);
	}
}
	
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
