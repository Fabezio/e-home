<script lang="ts" >
  import {page} from '$app/stores';
  import {grayscale} from "$lib/store"
  import {links} from "./links"
  import Sizes from '$lib/test/Sizes.svelte';
	import Dataset from "$lib/test/Dataset.svelte"
	// import About from 'src/routes/about.svelte';
  let showNavbar = false
  $: console.log(showNavbar)
  function collapse() {
    showNavbar = !showNavbar
    if (showNavbar) $grayscale = "50%"
    else $grayscale = "0%"

  }

</script>
<Sizes />
<nav on:click={collapse} class:drawer={showNavbar == false}>
	
	<ul>
		{#each links as {url, label}}
		<li class:active={$page.url.pathname === url}><a sveltekit:prefetch href={url}>{label}</a></li>
    {/each}
		
	</ul>

</nav>
<!-- <Dataset dataset={links} /> -->

<style lang="scss" >
nav {
  background-color: rgba(255, 255, 255, 0.25);
  // width: auto;
  height: 100vh;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1em;
  box-sizing: border-box;
  transition: all 0.5s ease 0.1s;
  // &::after {
  //   position: absolute;
  //   right: -21px;
  //   top: 0;
  //   rotate: 90deg;
  //   padding: 3px ;

  //   background:rgba(255, 255, 255, 0.25);
  //   content: "...";

  // }
  
}
.drawer {
  transform: translateX(-80%);
  // right: 90%;
}
//   background-color: rgba(255, 255, 255, 0.5);
//   border-right: 1px solid #ccc;
//   // z-index: 10;
//   /* width:  */
//   /* --background: rgba(255, 255, 255, 0.7); */
// }
// ul {
//   display: flex;
//   height: 1;
//   align-items: center;

// }
a {
  // padding: 0 1em;
  color: var(--heading-color);
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  text-decoration: none;
  transition: color 0.2s linear;
}
// .drawer {
//   display: none;
// }

ul {
  // position: relative;
  padding: 1em 0;
  // padding: 0;
  margin: 0;
  // height: 3em;
  max-width: auto;
  display: flex;
  gap: 1em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  list-style: none;
  background: var(--background);
  background-size: contain;
}

// li {
//   // position: relative;
//   // height: 0;
//   // height: 100%;
//   &.active::before {
//     --size: 6px;
//     content: '';
//     width: 0;
//     height: 0;
//     position: absolute;
//     top: 0;
//     left: calc(50% - var(--size));
//     border: var(--size) solid transparent;
//     border-top: var(--size) solid var(--accent-color);
//   }
// }
// @media (min-width: 640px) {
// 	}

// 	@media (min-width: 768px) {
// 	}

// 	@media (min-width: 1024px) {
//     nav, ul {
//       flex-direction: row;
//     }
//     nav {
//       width: 100%;
//       height: 3em;

//       // border-right: none;
//       // border-bottom: 1px solid #ccc;
//       justify-content: center;
//     }
//     ul {
//       justify-content: center;
//     }
// 	}

// 	@media (min-width: 1280px) {
// 	}

// 	@media (min-width: 1536px) {
// 	}



</style>