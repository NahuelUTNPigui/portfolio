<script>
    export let src = "favicon.png"
    export let alt = "nose"
    export let titulo = "nose"
    $: outerWidth = 0
	$: innerWidth = 0
	$: outerHeight = 0
	$: innerHeight = 0
    let isHovered = false
</script>
<svelte:window bind:innerWidth bind:outerWidth bind:innerHeight bind:outerHeight />
<div class="flex justify-center items-center bg-black-900">
    <!-- svelte-ignore a11y -->
    <div 
        class="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl"
        on:mouseenter={() => isHovered = true}
        on:mouseleave={() => isHovered = false}

        on:click={()=> isHovered = !isHovered}
    >
        <img    
            src={src}
            alt={alt}
            width="800"
            class="w-full max-w-800 h-full object-cover"
        />
        {#if innerWidth > 600}
        <div >
            <div 
                class="absolute top-0 right-0 h-full w-1/3 bg-black bg-opacity-95 p-6 text-white transition-transform duration-300 ease-in-out"
                class:translate-x-0={isHovered}
                class:translate-x-full={!isHovered}
                on:click={()=> isHovered = !isHovered}
            >
                <h2 class="text-2xl font-bold mb-4">{titulo}</h2>
                <p class="text-md">
                    {alt}
                </p>
            </div>
        </div>
        {:else}
        <div >
            <div
                id="expandable-content"
                class="absolute left-0 right-0 bottom-0 bg-black bg-opacity-75 text-white p-4 transition-all duration-300 ease-in-out"
                class:translate-y-full={!isHovered}
                class:translate-y-0={isHovered}
            >
                <h2 class="text-lg font-bold mb-1">{titulo}</h2>
                <p class="text-md">
                    {alt}
                </p>
            </div>
        </div>
        {/if}
        
    </div>
</div>