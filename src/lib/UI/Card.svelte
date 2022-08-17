<script lang="ts" >
  import type {User} from "$lib/data/types"
  import CardBody from "./CardBody.svelte";
  // import CardHeader from "./CardHeader.svelte";
  export let user: User
</script>

<div class="card">
	<!-- {#each users as user} -->

	<h3>Info générale</h3>
  <CardBody {user} />
	
</div>

<style lang="scss" >
 /*  .card {
  //    * {
  // padding-left: 1rem;
  // padding-right: 1rem;
  //    }
  
  h3 {
    margin: 0;
    padding: 6px 1rem;
    color: #600;
    background: #0df;
  }

  
}
@media (min-width: 640px) {
  .card {
    width: 620px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 0 auto;
    h3 {
      border-radius: 7px 7px 0 0;
    }

  }
}

@media (min-width: 768px) {
  .card {
    width: 750px;
  }
}

@media (min-width: 1024px) {
  .card {
    width: 1000px;
  }
  
}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}
 */</style>
  