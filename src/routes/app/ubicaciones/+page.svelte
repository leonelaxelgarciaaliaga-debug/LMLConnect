<script lang="ts">
  type Tienda = {
    id: number;
    nombre: string;
    descripcion: string;
    direccion: string;
    ciudad: string;
    telefono: string;
    categoria: string;
    logo: string;
    googleMaps: string;
  };

  let busqueda = '';

  /*
    POR AHORA SOLO EXISTE UNA TIENDA REGISTRADA.

    Más adelante esta información vendrá directamente
    desde la tabla TIENDAS de Supabase.
  */

  const tiendas: Tienda[] = [
    {
      id: 1,
      nombre: 'Diseño y Creaciones ALE',
      descripcion:
        'Tienda dedicada a detalles personalizados, arreglos, flores eternas, regalos y productos para fechas especiales.',
      direccion: 'Dirección pendiente de registro',
      ciudad: 'La Paz, Bolivia',
      telefono: '69931281',
      categoria: 'Bazar y detalles',
      logo: '/logo-ale.jpeg',

      /*
        Cuando tengamos la ubicación exacta,
        aquí irá el enlace real de Google Maps.
      */
      googleMaps:
        'https://www.google.com/maps/search/?api=1&query=' +
        encodeURIComponent('Diseño y Creaciones ALE La Paz Bolivia')
    }
  ];

  function normalizar(texto: string) {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function obtenerTiendasFiltradas(): Tienda[] {
    const textoBusqueda = normalizar(busqueda.trim());

    if (!textoBusqueda) {
      return tiendas;
    }

    return tiendas.filter((tienda) => {
      const contenido = normalizar(
        `${tienda.nombre} ${tienda.descripcion} ${tienda.ciudad} ${tienda.categoria}`
      );

      return contenido.includes(textoBusqueda);
    });
  }

  function limpiarBusqueda() {
    busqueda = '';
  }
</script>

<svelte:head>
  <title>Ubicaciones | Tiendas y Bazares</title>

  <meta
    name="description"
    content="Encuentra las tiendas registradas en la plataforma."
  />
</svelte:head>


<div class="min-h-screen bg-[#fff9fb]">

  <!-- ===================================================== -->
  <!-- PORTADA -->
  <!-- ===================================================== -->

  <section
    class="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-100"
  >

    <div
      class="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"
    ></div>


    <div
      class="relative mx-auto max-w-6xl px-4 py-14 text-center sm:px-6 lg:px-8 lg:py-20"
    >

      <div
        class="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-lg"
      >
        📍
      </div>


      <p
        class="mt-6 text-sm font-black uppercase tracking-[0.18em] text-rose-500"
      >
        Ubicaciones
      </p>


      <h1
        class="mx-auto mt-2 max-w-3xl text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
      >
        Encuentra la tienda que estás buscando
      </h1>


      <p
        class="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base"
      >
        Busca bazares, librerías y emprendimientos registrados en nuestra
        plataforma y consulta su ubicación.
      </p>


      <!-- ================================================= -->
      <!-- BUSCADOR -->
      <!-- ================================================= -->

      <div
        class="mx-auto mt-8 max-w-2xl"
      >

        <div
          class="relative rounded-2xl border border-white bg-white shadow-[0_15px_45px_rgba(126,34,206,0.10)]"
        >

          <div
            class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5 text-slate-400"
          >
            🔎
          </div>


          <input
            type="search"
            bind:value={busqueda}
            placeholder="Buscar tienda, bazar o librería..."
            class="h-14 w-full rounded-2xl border-0 bg-transparent pl-14 pr-14 text-sm text-slate-800 outline-none placeholder:text-slate-400"
          />


          {#if busqueda}

            <button
              type="button"
              onclick={limpiarBusqueda}
              aria-label="Limpiar búsqueda"
              class="absolute inset-y-0 right-0 flex w-14 items-center justify-center text-xl text-slate-400 transition hover:text-purple-600"
            >
              ×
            </button>

          {/if}

        </div>

      </div>

    </div>

  </section>



  <!-- ===================================================== -->
  <!-- RESULTADOS -->
  <!-- ===================================================== -->

  <main
    class="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14"
  >

    <div
      class="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between"
    >

      <div>

        <p
          class="text-sm font-black uppercase tracking-[0.16em] text-purple-600"
        >
          Tiendas registradas
        </p>

        <h2
          class="mt-1 text-2xl font-black text-slate-900"
        >
          Resultados
        </h2>

      </div>


      <p
        class="text-sm text-slate-500"
      >
        <strong class="text-slate-800">
          {obtenerTiendasFiltradas().length}
        </strong>

        {obtenerTiendasFiltradas().length === 1
          ? ' tienda encontrada'
          : ' tiendas encontradas'}
      </p>

    </div>


    <!-- ================================================= -->
    <!-- SI EXISTEN RESULTADOS -->
    <!-- ================================================= -->

    {#if obtenerTiendasFiltradas().length > 0}

      <div
        class="grid gap-6"
      >

        {#each obtenerTiendasFiltradas() as tienda}

          <article
            class="overflow-hidden rounded-[30px] border border-slate-100 bg-white shadow-[0_15px_45px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(126,34,206,0.12)]"
          >

            <div
              class="grid lg:grid-cols-[280px_1fr]"
            >

              <!-- ========================================= -->
              <!-- LOGO -->
              <!-- ========================================= -->

              <div
                class="flex min-h-[230px] items-center justify-center bg-gradient-to-br from-amber-50 via-rose-50 to-purple-100 p-6"
              >

                <div
                  class="flex h-48 w-48 items-center justify-center overflow-hidden rounded-[26px] border border-white bg-white p-2 shadow-lg"
                >

                  <img
                    src={tienda.logo}
                    alt={`Logo de ${tienda.nombre}`}
                    class="h-full w-full rounded-[20px] bg-white object-contain"
                  />

                </div>

              </div>


              <!-- ========================================= -->
              <!-- INFORMACIÓN -->
              <!-- ========================================= -->

              <div
                class="flex flex-col justify-center p-6 sm:p-8"
              >

                <div
                  class="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between"
                >

                  <div>

                    <span
                      class="inline-flex rounded-full bg-purple-50 px-3 py-1.5 text-xs font-black text-purple-700"
                    >
                      {tienda.categoria}
                    </span>


                    <h3
                      class="mt-3 text-2xl font-black text-slate-900"
                    >
                      {tienda.nombre}
                    </h3>


                    <p
                      class="mt-3 max-w-2xl text-sm leading-6 text-slate-500"
                    >
                      {tienda.descripcion}
                    </p>

                  </div>


                  <span
                    class="w-fit rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-bold text-emerald-700"
                  >
                    ● Registrada
                  </span>

                </div>


                <!-- DATOS -->

                <div
                  class="mt-6 grid gap-3 sm:grid-cols-2"
                >

                  <div
                    class="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                  >

                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-purple-100"
                    >
                      📍
                    </div>


                    <div>

                      <p
                        class="text-xs font-medium text-slate-400"
                      >
                        Ciudad
                      </p>

                      <p
                        class="mt-0.5 text-sm font-bold text-slate-700"
                      >
                        {tienda.ciudad}
                      </p>

                    </div>

                  </div>


                  <div
                    class="flex items-center gap-3 rounded-2xl bg-slate-50 p-4"
                  >

                    <div
                      class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-100"
                    >
                      ☎
                    </div>


                    <div>

                      <p
                        class="text-xs font-medium text-slate-400"
                      >
                        Contacto
                      </p>

                      <p
                        class="mt-0.5 text-sm font-bold text-slate-700"
                      >
                        {tienda.telefono}
                      </p>

                    </div>

                  </div>

                </div>


                <!-- DIRECCIÓN -->

                <div
                  class="mt-4 rounded-2xl border border-amber-100 bg-amber-50/70 p-4"
                >

                  <div
                    class="flex gap-3"
                  >

                    <span>
                      🧭
                    </span>


                    <div>

                      <p
                        class="text-xs font-bold uppercase tracking-wider text-amber-700"
                      >
                        Dirección
                      </p>


                      <p
                        class="mt-1 text-sm text-amber-900"
                      >
                        {tienda.direccion}
                      </p>


                      {#if tienda.direccion === 'Dirección pendiente de registro'}

                        <p
                          class="mt-1 text-xs leading-5 text-amber-700"
                        >
                          El administrador todavía no ha registrado la dirección
                          exacta del negocio.
                        </p>

                      {/if}

                    </div>

                  </div>

                </div>


                <!-- BOTONES -->

                <div
                  class="mt-6 flex flex-wrap gap-3"
                >

                  <a
                    href="/app/explorar"
                    class="rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-5 py-3 text-sm font-bold text-white shadow transition hover:-translate-y-0.5"
                  >
                    Ver tienda
                  </a>


                  <a
                    href={tienda.googleMaps}
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-xl border border-purple-200 bg-white px-5 py-3 text-sm font-bold text-purple-700 transition hover:bg-purple-50"
                  >
                    Abrir Google Maps
                  </a>


                  <a
                    href={`https://wa.me/591${tienda.telefono}`}
                    target="_blank"
                    rel="noreferrer"
                    class="rounded-xl border border-emerald-200 bg-emerald-50 px-5 py-3 text-sm font-bold text-emerald-700 transition hover:bg-emerald-100"
                  >
                    WhatsApp
                  </a>

                </div>

              </div>

            </div>

          </article>

        {/each}

      </div>


    <!-- ================================================= -->
    <!-- SIN RESULTADOS -->
    <!-- ================================================= -->

    {:else}

      <div
        class="rounded-[30px] border border-dashed border-slate-300 bg-white px-6 py-20 text-center"
      >

        <div
          class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-purple-50 text-4xl"
        >
          🔎
        </div>


        <h3
          class="mt-5 text-2xl font-black text-slate-800"
        >
          No encontramos esa tienda
        </h3>


        <p
          class="mx-auto mt-3 max-w-lg text-sm leading-6 text-slate-500"
        >
          Actualmente todavía hay pocas tiendas registradas. Intenta buscar
          utilizando otro nombre.
        </p>


        <button
          type="button"
          onclick={limpiarBusqueda}
          class="mt-6 rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white hover:bg-purple-800"
        >
          Mostrar tiendas disponibles
        </button>

      </div>

    {/if}


    <!-- ================================================= -->
    <!-- INFORMACIÓN -->
    <!-- ================================================= -->

    <div
      class="mt-10 rounded-3xl bg-gradient-to-r from-amber-50 via-rose-50 to-purple-50 p-6 sm:p-8"
    >

      <div
        class="flex flex-col gap-4 sm:flex-row sm:items-center"
      >

        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white text-2xl shadow-sm"
        >
          🏪
        </div>


        <div>

          <h3
            class="font-black text-slate-800"
          >
            La plataforma seguirá creciendo
          </h3>


          <p
            class="mt-1 text-sm leading-6 text-slate-500"
          >
            Cuando nuevos propietarios registren sus negocios y agreguen su
            ubicación, aparecerán automáticamente en esta sección.
          </p>

        </div>

      </div>

    </div>

  </main>

</div>