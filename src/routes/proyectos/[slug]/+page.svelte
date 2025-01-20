<script>
    import { page } from '$app/stores';
    import { onMount } from 'svelte';
    import proyectos from '$lib/data/proyectos';
    import HoverCard from '$lib/Card/HoverCard.svelte';
    
    let slug = ""
    let proyecto = {nombre:"",id:",",descripcion:"",longdescripcion:"",parrafosdesc:[{text:""}],src:"",alt:"",images:[{src:"",descripcion:"",titulo:""}]}
    let srcimagen = ""
    let descripcionimagen=""
    let listaparrafos=[]
    onMount(async()=>{
        slug = $page.params.slug
        proyecto = proyectos.filter(p=>p.id==slug)[0]
        listaparrafos = proyecto.longdescripcion.split(".")
    })
    function showmodal(src="",descripcion=""){
        srcimagen = src
        descripcionimagen=descripcion
        //@ts-ignore
        modalimagen.showModal()
    }
</script>

<div class="p-10 space-y-4 bg-gray-900">
	<div class="p-10 flex flex-col items-center space-y-4">
        <h1
			class={`font-black tracking-[4px] text-center text-[2.5em] lg:text-[4em] text-slate-200`}
			style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
		>
            {proyecto.nombre.toUpperCase()}
		</h1>
		
	</div>
    <div class="grid grid-cols-1 mx-1  place-items-center lg:place-items-start lg:mx-10">
        {#each proyecto.parrafosdesc as parr}
            <div class="text-justify lg:text-left text-[1.2em] mx-0 lg:mx-10">
                
                <p>{parr.text}</p>
                <br>
            </div>    
        {/each}
    </div>
    
    <hr class="h-px mb-10 border-0 bg-gray-800">
    
    <div class="grid grid-cols-1 gap-4">
        {#each proyecto.images as imagen}
            <HoverCard titulo={imagen.titulo} src={imagen.src} alt={imagen.descripcion}></HoverCard>
        {/each}
            
    </div>
    
</div>
