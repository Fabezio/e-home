<script lang="ts" >
  import type {Intro} from "$lib/data/types"
  export let intro: Intro

</script>
<!-- <article> -->
	<div class="frame">
		<img src={intro.image} alt="user info" />
			<div class="desc">
				{intro.firstname}
				{intro.lastname}
		</div>
	</div>
<!-- </article>	 -->

<style lang="scss">
	// .img-container {
	// 	display: flex;
	// 	justify-content: center;

	// }
	.frame {
		position: relative;
		width: 350px;
		height: 450px;
		text-align: center;
	}
	img, .desc {
		position: absolute;
		left: 0;
		width: 350px;
		
	}
	img {
		top: 0;
		max-height: 450px;

	}
	.desc {
		bottom: 0;
		border-radius: 0 0 8px 8px; background: rgba(0,0,0, .25); padding: 8px 0; color: whitesmoke;
		font-size: 25px;
		letter-spacing: 1px;
		// hyphens: ;
		font-weight: 300;
		text-align: center;

	}

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

	/* 
  figure, .frame {
    // height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2em auto;
    img {
			position: absolute;
			border-radius: 12px;
			left: center;
			max-width: 360px;
      max-height: 360px;
    }
		figcaption {
			position: absolute;
			left: center;
			bottom: 0px;
			width: 305px;
			font-size: 30px;
			border-radius: 0 0 12px 12px;
			background: rgba(0,0,0, .5);
			padding: 8px 0;
			color: whitesmoke;
			// width: 100%;
			text-align: center;

		}
  }  

	@media (min-width: 1024px) {  
    .frame {
      margin: 0;
      justify-content: flex-start;
    }
    }
 */</style>


