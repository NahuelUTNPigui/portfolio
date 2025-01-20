<script>
    let checked = '';

    function handleClick() {
        (checked == 'checked') ? checked = '': checked = 'checked';

    }
</script>
<div class="drawer">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" bind:checked={checked}/>
    <div class="drawer-content w-full">
      <!-- Page content here -->
        <div class="navbar bg-gray-900 border-b-2 border-gray-800">
            <div class="flex-none">
                <button class="btn btn-square btn-ghost" on:click={handleClick}>
                    
                    <!--<svg

                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        class="inline-block h-5 w-5 stroke-current">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 6h16M4 12h16M4 18h16">
                        </path>
                    </svg>-->
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="white" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>                      
                </button>
            </div>
            <div class="flex-1">
                <a class="btn btn-ghost text-xl text-white" href="/" >CORTECS</a>
            </div>
        </div>
        <slot/>
    </div>
    <div class="drawer-side">
      <label for="my-drawer" aria-label="close sidebar" class="drawer-overlay"></label>    
      <ul class="menu bg-gray-900 text-base-content min-h-full w-60 p-2 mt-0">
        <h1 class="text-lg text-white italic mb-2 mt-3 ml-2">CORTECS</h1>
        <hr class="h-px border-0 bg-gray-700 mb-2">
        <li>
            <a class="text-xl text-white mx-1" href="/" on:click={handleClick}>
                <div class="my-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                    </svg>
                </div>
                Inicio
            </a>
        </li>
        <li>
            <a class="text-xl text-white mx-1" href="/proyectos" on:click={handleClick}>
                <div class="my-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
                      </svg>
                                           
                </div>
                Proyectos
            </a>
        </li>
        <li>
            <a class="text-xl text-white mx-1" href="/contacto" on:click={handleClick}>
                <div class="my-0 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
                    </svg>
                      
                </div>
                Contacto
            </a>
        </li>
      </ul>
    </div>
</div>

