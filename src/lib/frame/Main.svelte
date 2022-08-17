<script>
	import {grayscale} from "$lib/store"

</script>
<main style="filter: grayscale({$grayscale})">
	<slot />
</main>

<style lang="scss" >
	main {
		/* height: auto; */
		width: 100%;
		max-height: 100vh;

		// height: calc(100vh - 48px - 60px);
		margin: 1em auto;
		
		// box-sizing: border-box;
		overflow-y: scroll;
		transition: all 0.3s linear 0.1s;
	}


	// @media (min-width: 640px) {
		
	// }

	// @media (min-width: 768px) {
	// }

	// @media (min-width: 1024px) {
	// }

	// @media (min-width: 1280px) {
	// }

	// @media (min-width: 1536px) {
	// }
</style>

