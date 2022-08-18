<script lang="ts">
	import * as Frame from '$lib/components/layout/index';
	import * as Test from '$lib/test/index';

	// import '../app.scss';
	// console.log(innerWidth)
	// import '../main.css';
	// $:innerWidth = 0
</script>

<!-- <svelte:window bind:innerWidth /> -->

<!-- <Frame.Nav /> -->
<!-- <Frame.Header /> -->

<Frame.Main>
	<slot />
	<Test.Sizes />
</Frame.Main>

<!-- <Frame.Footer /> -->

<style lang="scss" >
	

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


</style>

