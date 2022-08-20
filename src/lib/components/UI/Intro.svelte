<script lang="ts">
	import type { Intro } from '$lib/data/types';
	export let intro: Intro;
</script>

<div class="frame">
	<img src={intro.image} alt="user info" />
	<div class="desc">
		{intro.firstname}
		{intro.lastname}
	</div>
</div>
