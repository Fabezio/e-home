<script>
	import {grayscale} from "$lib/store"

</script>
<main >
<!-- <main style="filter: grayscale({$grayscale})"> -->
	<slot />
</main>

<style lang="scss" >
	main {
		/* height: auto; */
		// width: 100%;
		min-height: 100vh;
		// text-align: center;

		// height: calc(100vh - 48px - 60px);
		// margin: 1em auto;
		
		// box-sizing: border-box;
		// overflow-x: scroll;
		transition: all 0.3s linear 0.1s;
		// * {
		// 	margin: auto;
		// }
	}

	@media (min-width: var(--sm)) {

}

@media (min-width: var(--md)) {

}

@media (min-width: var(--lg)) {

}

@media (min-width: var(--xl)) {

}

@media (min-width: var(--xxl)) {

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

