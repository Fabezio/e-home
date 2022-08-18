<script lang="ts" >
  import type {User} from "$lib/data/types"
  import StrongItem from "./StrongItem.svelte";
  export let user: User
</script>

<div class="card-body">
	<!-- <div class="frame">
		<img src="favicon.png" alt="user info" />
	</div> -->
	<div class="main-info">
		<StrongItem title="Age" >{user.main.age} ans</StrongItem>
		<StrongItem title="Profession" >{user.main.job}</StrongItem>
		<StrongItem title="Passe-temps" >
			<ul>
				{#each user.hobbies as hobby}
					<li>{hobby}</li>
				{/each}
			</ul>
		</StrongItem>
	</div>

	<!-- <hr> -->

	<div class="contact">
		<StrongItem title="Adresse" >
			<ul>
				<li>{user.address.number} {user.address.street},</li>
				<li>{user.address.zipcode}</li>
				<li>{user.address.city}, {user.address.country}</li>
			</ul>
		</StrongItem>
		<StrongItem title="Téléphone" >{user.main.phone}</StrongItem>
		<StrongItem title="Adresse courriel" >{user.main.email}</StrongItem>
	</div>
</div>

<style lang="scss" >
  /* 
.card-body {
  margin: 10px 0;
  display: flex;
  flex: 1 0 auto;
  gap: 2em;
  flex-wrap: wrap;
  justify-content: flex-start;
  flex-direction: column;
  ul {
  margin: 0;
  padding: 0;
  list-style: none;
  text-indent: -6px;
  }
  // .frame {
  //   width: 175px;
  //   max-height: 225px;
  //   height: auto;
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   margin: 0 auto;
  //   img {
  //     max-width: 175px;
  //     max-height: 225px;
  //   }
  // }  
}

@media (min-width: 1024px) {  
  .card-body {
    flex-wrap: wrap;
    flex-direction: row;
    .frame {
      margin: 0;
      justify-content: flex-start;
    }
    &>div {
      display: flex;
      flex-direction: column;
    }
  }
}
@media (min-width: 768px) {}

@media (min-width: 1024px) {}

@media (min-width: 1280px) {}

@media (min-width: 1536px) {}


 */
</style>