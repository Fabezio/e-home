<script lang="ts">
	
	import App from '$lib/App.svelte';
	import * as Frame from '$lib/frame/index';
	import * as Test from '$lib/test/index';

	import '../app.scss';
	// import '../main.css';
	
</script>

<App>
	
	<slot/>
</App>




<style lang="scss" >
	// #body {
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	overflow: auto;
	// }
	// main {
	// 	position: relative;
	// 	height: calc(100vh - 48px - 60px - 4rem);
	// 	& > * {
	// 		position: absolute;
			
	// 		top: 0;
	// 		left: 0;
	// 		width: 100%;
	// 	}

	// }
	// // #msg {
	// // 	padding: 1em;
	// // 	height: 2em;
	// // 	text-align: center;
	// // 	z-index: 0;
	// // 	order: 1;
	// // }
	// #slot {
	// 	z-index: 1;
	// 	order: 2;
	// }
	
	
	// @media (min-width: 640px) {}
	
	// @media (min-width: 768px) {}
	
	// @media (min-width: 1024px) {}
	
	// @media (min-width: 1280px) {}
	
	// @media (min-width: 1536px) {}
</style>
