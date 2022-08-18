<script lang="ts">
	import * as Frame from '$lib/frame/index';
	import * as Test from '$lib/test/index';

	import '../app.scss';
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
<!-- 
<style lang="scss" >

</style> -->

