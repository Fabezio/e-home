<script lang="ts" >
  export let title="titre"
  // export let content="contenu"

</script>
<div><strong>{title}:</strong> <slot />
</div>

<style lang="scss" >
  /* 
    div {
    padding: 2pt 0;
    strong {
      padding: 0;
    }
  }
 */
</style>
