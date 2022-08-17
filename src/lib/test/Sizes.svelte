<script lang="ts" >
  $: innerWidth = 0 
  $: innerHeight = 0
  $: outerWidth = 0 
  $: outerHeight = 0
  export let show = false

</script>

<svelte:window 
  bind:innerWidth 
  bind:innerHeight
  bind:outerWidth 
  bind:outerHeight
 />
 {#if show}
 <div>
   <!-- <pre> -->
     externe: {outerWidth} &times; {outerHeight}
     interne: {innerWidth} &times; {innerHeight}
   <!-- </pre> -->
 
 </div>
  
 {/if} 

<style>
  div {
    
    
background-color: rgba(0, 0, 0, 0.1); 
border: 1pt solid rgba(0, 0, 0, 0.2);
border-radius: 2em;

opacity: 0.5;
  }
  /* div:nth-child(2) {
    background-color: rgba(0, 255, 0, 0.2);
  } */
</style>
