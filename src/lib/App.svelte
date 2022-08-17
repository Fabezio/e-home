<script lang="ts">
	import * as Frame from '$lib/frame/index';
	import * as Test from '$lib/test/index';

	import '../app.scss';
	// console.log(innerWidth)
	// import '../main.css';
	// $:innerWidth = 0
</script>
<!-- <svelte:window bind:innerWidth /> -->
<!-- {#if innerWidth >= 480} -->
	
<!-- <div id="app"> -->
	<!-- <div class="nav"> -->
		<Frame.Nav />

	<!-- </div> -->
	<!-- <Frame.Header /> -->
	<!-- <div id="body"> -->
		<Frame.Main>
			<slot />
			<!-- <Test.Sizes show /> -->
      <!-- <div id="msg">
		
			</div> -->
			<!-- <div id="slot"> -->
			<!-- </div> -->
			<!--  -->
		</Frame.Main>

	<!-- </div> -->
	<Frame.Footer />
<!-- </div> -->
<!-- {:else}
<div class="alert">Resolution too low</div>
{/if} -->


<style lang="scss" >

  // #app {
  //   // position: relative;
  //   // min-height: 100vh;
  //   // /* min-height: 100vh; */
  //   // display: flex;
  //   // gap: 2em;
  //   // // min-height: 100%;
  //   // // display: flex;
  //   // flex-direction: column;
  //   // justify-content: space-between;
  //   // justify-items: space-between;
  // }
	// .nav {
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	z-index:1;
	// 	width: 33%;
	// 	height: 100vh;
	// 	// z-index: 1;
	// 	// order: 1;
	// }

	// #body {
	// 	z-index: 0;
	// 	position: absolute;
	// 	top: 0;
	// 	left: 0;
	// 	width: 100%;
	// 	height: 100%;
	// 	// overflow: auto;
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

	// @media (min-width: 640px) {
	// }

	// @media (min-width: 768px) {
	// }

	// @media (min-width: 1024px) {
	// 	main {
	// 		position: initial;
	// 		&>* {
	// 			// position: initial;
	// 		}
	// 	}
  //   #app {
  //     flex-direction: column;
  //     display: flex;
  //     justify-content: space-between;
  //     justify-items: space-between;
    
  //   }
	// 	.nav {
	// 		// position: initial;
  //     width: 100%;
  //     height: 3em;
	// 		// padding: 1em 0;
	// 		// gap:0;

  //     // border-right: none;
  //     // border-bottom: 1px solid #ccc;
  //     // justify-content: center;
  //   }
  //   #body {
  //     position: initial;
  //   }
	// }

	// @media (min-width: 1280px) {
	// }

	// @media (min-width: 1536px) {
	// }

</style>

