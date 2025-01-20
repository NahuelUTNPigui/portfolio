<script>
    let numero ="111"
    let email="nahuelpiguillem@gmail.com"
	let linkdn = "https://www.linkedin.com/in/nahuel-piguillem-b7a8631ab/"
	let gh = "https://github.com/NahuelUTNPigui"
</script>

<div class="p-10 space-y-4 mainbody bg-gray-900">
	<div class="p-10 flex flex-col items-center space-y-4">
		<h1
			class={`font-black tracking-[4px] text-center text-[3.5em] lg:text-[4em] text-slate-200`}
			style="background: linear-gradient(var(--main-text), var(--accent-text-hover)); -webkit-background-clip: text; background-clip: text;"
		>
			CONTACTO
		</h1>
	</div>
	
	<br/>
	
	<div
		class="col self-center flex-1 md:flex-row md:slef-stretch justify-center lg:justify-between items-center p-y-0px p-x-10px"
	>
		<p class="text-[var(--tertiary-text)]  text-center text-[1.2em] text-slate-200">
            Si tienes alguna inquietud o si quieres desarrollar un proyecto.
		</p>
        <p class="text-[var(--tertiary-text)]  text-center text-[1.2em] text-slate-200">
            ¡Contáctate!
		</p>
		<br>
		
		<p class="text-[var(--tertiary-text)]  text-center  text-[1.2em]  mb-2">
			<a href={linkdn} class={`mt-3  text-slate-200 hover:text-blue-600 inline-flex items-center `}>Linkedin
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
					stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
				  
			</a>
			
		</p>
		<p class="text-[var(--tertiary-text)]  text-center  text-[1.2em] text-slate-200 mb-3">
			<a href={gh} class={`mt-3  text-slate-200 hover:text-blue-600 inline-flex items-center `}>Github
				<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
					stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
					<path d="M5 12h14M12 5l7 7-7 7"></path>
				</svg>
				  
			</a>
		</p>
		<p class="text-[var(--tertiary-text)]  text-center  text-[1.2em] text-slate-200 mb-2">
			Email: {email}
		</p>
	</div>

</div>
<style>
	.mainbody{
		min-height: 85vh;
	}
	
</style>