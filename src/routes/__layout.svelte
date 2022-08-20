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
