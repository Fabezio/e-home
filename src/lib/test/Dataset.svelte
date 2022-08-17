<script lang="ts" >
  
  export let dataset: any[]
</script>

<pre>
  <!-- {JSON.parse(`${dataset}`)} -->
  {typeof dataset}
  {JSON.stringify(dataset, null, 2)}
</pre>