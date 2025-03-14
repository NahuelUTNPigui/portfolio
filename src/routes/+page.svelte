<script>
	import Logo2 from '$lib/assets/np.png'
	import herramientas from '$lib/data/herramientas';
	import Tooltip from '$lib/Tooltip/Tooltip.svelte';
	import proyectos  from '$lib/data/proyectos'
</script>
<div class="p-10 space-y-1 mainbody bg-gray-900">
	<div class="p-10 flex flex-col items-center space-y-1">
		<img alt="The project logo" src="/yo.jpg" class="mb-0 rounded-full h-40 w-40"/>
		<h1
			class={`mt-0 mb-0 font-black tracking-[4px] text-center text-[3.5em] lg:text-[4em] text-slate-200`}
			style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
		>
			
			NAHUEL PIGUILLEM
		</h1>
		<br>
		<div
			class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center mt-0 p-y-0px p-x-10px mb-1"
		>
			<p class="my-1  text-center md:text-left text-[1.2em] text-slate-300">
				Ingeniero en sistemas especializado en el desarrollo de aplicaciones web desde el diseño de las vistas hasta el despliegue del sistema.
			</p>
			<p class="my-1  text-center md:text-left text-[1.2em] text-slate-300">
				Enfoque principal en el diseño de sistemas intuitivos pensados para usuarios con poca familiaridad con el software
			</p>
			<p class="my-1  text-center md:text-left text-[1.2em] text-slate-300">
				Se tiene conocimiento de herramientas necesarias para la infraestructura de los sistemas.
                
			</p>
            <p class="my-1 text-center md:text-left text-[1.2em] text-slate-300">
				
                Con entusiasmo de aplicar lo que aprendo todos los dias.
			</p>
		</div>
	</div>
	<br/>
	<hr class="h-px mb-10 border-0 bg-gray-800">
	<div
		class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
	>
		<div class="text-center mt-5">
			<h3 class="text-3xl font-bold text-slate-200">TECNOLOGÍAS</h3>		
		</div>
		<br>
		<p class="text-[var(--tertiary-text)]  text-center text-[1.2em] text-slate-300">
			Herramientas modernas para garantizar calidad en un corto periodo de desarrollo.
		</p>
		<br>
		
		<div class="flex justify-center gap-2 lg:gap-10 ">
			{#each herramientas as h}
				<Tooltip title={h.nombre} color={h.color} textcolor={h.textcolor}>
					<div class={`rounded-lg h-30 w-30 border-2 ${h.color}`} >
						<img class="h-30 w-30" src={h.icono} alt={h.nombre} width={h.size} height={h.size}>
						
					</div>
				</Tooltip>
				
			{/each}
		</div>
		
		
	</div>
	<br>
	<hr class="h-px mb-10 border-0 bg-gray-800">
	<div
		class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
	>
		<div class="text-center mt-5">
			<h3 class="text-3xl font-bold text-slate-200">PROYECTOS</h3>		
		</div>
		<br>
		<p class="text-[var(--tertiary-text)]  text-center text-[1.2em] text-slate-300">
			Los proyectos actualmente en desarrollo
		</p>
		<br>
		<div class="flex justify-center gap-4 lg:gap-10">
			{#each proyectos as p}
				<a href={`/proyectos/${p.id}`}>
					<Tooltip title={p.nombre} color={p.iconcolor} textcolor={p.texticoncolor}>
						<div class={`rounded-lg h-30 w-30 border-2 ${p.iconcolor}`} >
							<img class="h-30 w-30" src={p.src} alt={p.nombre} width={60} height={60}>
							
						</div>
					</Tooltip>
				</a>
			{/each}
		</div>
	</div>
</div>
<style lang="postcss">
  	.mainbody{
		min-height: 85vh;
	}
</style>