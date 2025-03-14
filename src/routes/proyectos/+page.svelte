<script>
    import proyectos from "$lib/data/proyectos"
</script>
<div class="bg-gray-900 mainbody">
    <div class="flex-1 col gap-5 px-1 sm:px-3 md:px-4 py-4 sm:py-8 md:py-12">
        <h1
            class={`font-black tracking-[4px] text-center text-[3.5em] lg:text-[4em] text-slate-200`}
            style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
        >
            PROYECTOS
        </h1>
    </div>
    
    {#each proyectos as p}
        <div class="flex flex-wrap justify-center mx-2 lg:mx-1 mt-2 mb-1 lg:mb-10">
            <section class={`${p.color} rounded-lg`}  >
                <div class="gap-16 items-center py-8 px-10 mx-auto max-w-screen-xl lg:grid lg:grid-cols-3 lg:py-16 lg:px-6">
                    <div class="font-light sm:text-lg text-gray-400">
                        <div class="flex items-center mb-1">
                            <div
                                class="w-8 h-8 mr-3 inline-flex items-center justify-center text-white flex-shrink-0">
                                <img src={p.src} alt={p.alt} class="rounded-none" height={"100"} width={"100"}/>
                            </div>
                        </div>
                        <h2 class={`mb-4 text-4xl tracking-tight font-extrabold ${p.texttitle}` }>{p.nombre}</h2>
                        <p class={`mb-4 ${p.textcolor}`} >{p.descripcion}</p>
                        <a href={"/proyectos/"+p.id} class={`mt-3 ${p.textcolor} hover:text-blue-600 inline-flex items-center `}>Ver proyecto
                            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                              
                        </a>

                        {#if p.link != ""}
                        <br>
                            <a href={p.link} class={`mt-3 ${p.textcolor} hover:text-blue-600 inline-flex items-center `}>Link del proyecto</a>
                        {/if}
                    </div>
                    <div class="grid col-span-2 gap-2 mt-8">
                        <img class="w-full rounded-lg" src={p.mainimage.src} alt={p.alt}>
                    </div>
                </div>
            </section>
        </div>
    {/each}

    <p class="text-transparent">hola</p>
</div>
<style>
	
</style>