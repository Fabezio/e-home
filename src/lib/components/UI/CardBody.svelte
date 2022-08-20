<script lang="ts">
	import type { User } from '$lib/data/types';
	import StrongItem from './StrongItem.svelte';
	export let user: User;
</script>

<div class="card-body">
	<!-- <div class="frame">
		<img src="favicon.png" alt="user info" />
	</div> -->
	<div class="main-info">
		<StrongItem title="Age">{user.main.age} ans</StrongItem>
		<StrongItem title="Profession">{user.main.job}</StrongItem>
		<StrongItem title="Passe-temps">
			<ul>
				{#each user.hobbies as hobby}
					<li>{hobby}</li>
				{/each}
			</ul>
		</StrongItem>
	</div>

	<!-- <hr> -->

	<div class="contact">
		<StrongItem title="Adresse">
			<ul>
				<li>{user.address.number} {user.address.street},</li>
				<li>{user.address.zipcode}</li>
				<li>{user.address.city}, {user.address.country}</li>
			</ul>
		</StrongItem>
		<StrongItem title="Téléphone">{user.main.phone}</StrongItem>
		<StrongItem title="Adresse courriel">{user.main.email}</StrongItem>
	</div>
</div>
