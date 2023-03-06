<script lang="ts">
	import type { DroneResponse } from '$lib/types';

	export let data: DroneResponse;
</script>

<div>
	<h1>Drones</h1>
	<div>
		{#each data.report.capture.drone as drone}
			<p>{drone.serialNumber}</p>
		{/each}
	</div>
</div>
