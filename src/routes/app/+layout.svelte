<script lang="ts">
  import { page } from '$app/stores';

  let { children } = $props();

  let menuAbierto = false;

  const menu = [
    {
      nombre: 'Inicio',
      ruta: '/app',
      icono: '🏠'
    },
    {
      nombre: 'Explorar',
      ruta: '/app/explorar',
      icono: '🔎'
    },
    
    {
      nombre: 'Ubicaciones',
      ruta: '/app/ubicaciones',
      icono: '📍'
    },

    {
      nombre: 'Registro',
      ruta: '/app/registro',
      icono: '✍️'
    },
    {
      nombre: 'Login',
      ruta: '/app/login',
      icono: '🔐'
    },
    {
      nombre: 'Administrar',
      ruta: '/app/administrar',
      icono: '⚙️'
    }
  ];

  function cerrarMenu() {
    menuAbierto = false;
  }
</script>

<div class="min-h-screen bg-[#fffaf8]">

  <!-- ================================================ -->
  <!-- HEADER -->
  <!-- ================================================ -->

  <header
    class="sticky top-0 z-50 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 text-white shadow-lg"
  >

    <div
      class="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
    >

      <!-- LOGO / NOMBRE -->

      <a
        href="/app"
        class="flex items-center gap-3"
      >

        <div
          class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-xl shadow-sm backdrop-blur"
        >
          🛍️
        </div>

        <div>
          <p
            class="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70"
          >
            Plataforma
          </p>

          <p class="font-black leading-none">
            Tiendas & Bazares
          </p>
        </div>

      </a>


      <!-- ================================================ -->
      <!-- MENÚ ESCRITORIO -->
      <!-- ================================================ -->

      <nav
        class="hidden items-center gap-1 xl:flex"
      >

        {#each menu.slice(0, 5) as item}

          <a
            href={item.ruta}
            class={`flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition
              ${
                $page.url.pathname === item.ruta
                  ? 'bg-white text-purple-700 shadow'
                  : 'text-white/90 hover:bg-white/15 hover:text-white'
              }
            `}
          >

            <span>
              {item.icono}
            </span>

            <span>
              {item.nombre}
            </span>

          </a>

        {/each}

      </nav>


      <!-- ================================================ -->
      <!-- ACCIONES ESCRITORIO -->
      <!-- ================================================ -->

      <div
        class="hidden items-center gap-2 xl:flex"
      >

        <a
          href="/app/login"
          class="rounded-xl border border-white/30 px-4 py-2 text-sm font-bold transition hover:bg-white/10"
        >
          Ingresar
        </a>

        <a
          href="/app/registro"
          class="rounded-xl bg-white px-4 py-2 text-sm font-black text-purple-700 shadow transition hover:-translate-y-0.5"
        >
          Registrar tienda
        </a>

      </div>


      <!-- ================================================ -->
      <!-- BOTÓN MENÚ MÓVIL -->
      <!-- ================================================ -->

      <button
        type="button"
        aria-label="Abrir menú"
        onclick={() => {
          menuAbierto = !menuAbierto;
        }}
        class="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 text-2xl transition hover:bg-white/20 xl:hidden"
      >

        {#if menuAbierto}
          ×
        {:else}
          ☰
        {/if}

      </button>

    </div>


    <!-- ================================================ -->
    <!-- MENÚ MÓVIL -->
    <!-- ================================================ -->

    {#if menuAbierto}

      <div
        class="border-t border-white/20 bg-purple-700/95 px-4 py-4 backdrop-blur xl:hidden"
      >

        <nav
          class="mx-auto grid max-w-7xl gap-2"
        >

          {#each menu as item}

            <a
              href={item.ruta}
              onclick={cerrarMenu}
              class={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-bold transition
                ${
                  $page.url.pathname === item.ruta
                    ? 'bg-white text-purple-700'
                    : 'text-white hover:bg-white/10'
                }
              `}
            >

              <div
                class="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10 text-lg"
              >
                {item.icono}
              </div>

              <span>
                {item.nombre}
              </span>

            </a>

          {/each}

        </nav>

      </div>

    {/if}

  </header>


  <!-- ================================================ -->
  <!-- SIDEBAR ESCRITORIO -->
  <!-- ================================================ -->

  <div class="flex">

    <aside
      class="sticky top-16 hidden h-[calc(100vh-4rem)] w-64 shrink-0 border-r border-slate-100 bg-white p-4 lg:block"
    >

      <!-- PERFIL -->

      <div
        class="mb-5 rounded-2xl bg-gradient-to-br from-rose-50 to-purple-50 p-4"
      >

        <div
          class="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-rose-500 to-purple-600 text-xl text-white shadow"
        >
          🛍️
        </div>

        <p
          class="mt-3 text-sm font-black text-slate-800"
        >
          Explora tiendas
        </p>

        <p
          class="mt-1 text-xs leading-5 text-slate-500"
        >
          Bazares, librerías y emprendimientos en un solo lugar.
        </p>

      </div>


      <!-- LINKS -->

      <nav class="space-y-1.5">

        {#each menu as item}

          <a
            href={item.ruta}
            class={`group flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold transition
              ${
                $page.url.pathname === item.ruta
                  ? 'bg-gradient-to-r from-rose-50 to-purple-50 text-purple-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-purple-700'
              }
            `}
          >

            <div
              class={`flex h-9 w-9 items-center justify-center rounded-xl transition
                ${
                  $page.url.pathname === item.ruta
                    ? 'bg-white shadow-sm'
                    : 'bg-slate-50 group-hover:bg-white'
                }
              `}
            >
              {item.icono}
            </div>

            <span class="flex-1">
              {item.nombre}
            </span>


            {#if $page.url.pathname === item.ruta}

              <span
                class="h-2 w-2 rounded-full bg-purple-600"
              ></span>

            {/if}

          </a>

        {/each}

      </nav>


      <!-- INFORMACIÓN INFERIOR -->

      <div
        class="absolute bottom-5 left-4 right-4 rounded-2xl border border-slate-100 bg-slate-50 p-4"
      >

        <p
          class="text-xs font-black text-slate-700"
        >
          ¿Tienes un negocio?
        </p>

        <p
          class="mt-1 text-xs leading-5 text-slate-500"
        >
          Registra tu tienda y publica tus productos.
        </p>

        <a
          href="/app/registro"
          class="mt-3 flex w-full items-center justify-center rounded-xl bg-purple-600 px-3 py-2.5 text-xs font-bold text-white transition hover:bg-purple-700"
        >
          Registrar mi tienda
        </a>

      </div>

    </aside>


    <!-- ================================================ -->
    <!-- CONTENIDO -->
    <!-- ================================================ -->

    <main class="min-w-0 flex-1">

      {@render children()}

    </main>

  </div>

</div>