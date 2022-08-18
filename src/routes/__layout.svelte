<script lang="ts">
	
	import App from '$lib/components/App.svelte';
	import * as Frame from '$lib/components/layout/index';
	import * as Test from '$lib/test/index';

	import '../app.scss';
	// import '../main.css';
	
</script>

<App>
	
	<slot/>
</App>




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
