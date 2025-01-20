<script lang="ts">
	export let title = '';
    export let color=""
    export let textcolor=""
	let isHovered = false;
	let x=0;
	let y=0;
	
	function mouseOver(event:any) {
		isHovered = true;
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseMove(event:any) {
		x = event.pageX + 5;
		y = event.pageY + 5;
	}
	function mouseLeave() {
		isHovered = false;
	}
</script>

<div
	on:mouseover={mouseOver}
    on:mouseleave={mouseLeave}
	on:mousemove={mouseMove}>
	<slot />
</div>

{#if isHovered}
	<div style="top: {y}px; left: {x}px;" class={`tooltip bg-opacity-75 rounded-lg border-2 ${color} ${textcolor}` }>{title}</div>
{/if}

<style>
	.tooltip {

		padding: 4px;
		position: absolute;
	}
</style>