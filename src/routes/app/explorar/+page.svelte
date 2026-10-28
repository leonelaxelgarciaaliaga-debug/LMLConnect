<script lang="ts">
  type Producto = {
    id: number;
    categoria: 'Feliz Cumpleaños' | 'Halloween';
    nombre: string;
    descripcion: string;
    precio: string;
    disponibilidad: string;
    imagen: string;
  };

  const tienda = {
    nombre: 'Diseño y Creaciones ALE',
    lema: 'Siempre un detalle para ti',
    descripcion:
      'Emprendimiento dedicado a detalles personalizados, regalos y productos para ocasiones especiales.',
    telefono: '69931281',
    whatsapp: '59169931281',
    facebook: 'Diseño y Creaciones ALE',
    tiktok: '@ale_.dyc',
    ciudad: 'La Paz, Bolivia',
    googleMaps:
      'https://www.google.com/maps/search/?api=1&query=' +
      encodeURIComponent('Diseño y Creaciones ALE La Paz Bolivia')
  };

  const categorias = [
    'Todos',
    'Feliz Cumpleaños',
    'Halloween'
  ];

  let categoriaSeleccionada = 'Todos';
  let busqueda = '';

  const productos: Producto[] = [
    // =====================================================
    // CUMPLEAÑOS
    // =====================================================

    {
      id: 1,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Arreglo Hot Wheels con globo y peluche',
      descripcion:
        'Peluche, globo burbuja, 3 autos Hot Wheels, globo metalizado y golosinas.',
      precio: 'Bs 80',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image22.png'
    },

    {
      id: 2,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Arreglo de cumpleaños con peluche',
      descripcion:
        'Caja con globo burbuja, peluche, globo metalizado y variedad de golosinas.',
      precio: 'Bs 60',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image23.png'
    },

    {
      id: 3,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Combo peluche y ramo de rosas eternas',
      descripcion:
        'Caja con peluche, globo burbuja, globo metalizado, golosinas y ramo de rosas de cinta de satín.',
      precio: 'Bs 100',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image24.png'
    },

    {
      id: 4,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Personaje de foamy con dulcero',
      descripcion:
        'Personaje a elección elaborado en goma EVA con técnica 2D, dulcero, golosinas y topper.',
      precio: 'Bs 35',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image25.png'
    },

    {
      id: 5,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Payasito decorativo de foamy',
      descripcion:
        'Fofucha decorativa elaborada en goma EVA para cumpleaños y decoración.',
      precio: 'Bs 80 c/u',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image26.png'
    },

    {
      id: 6,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Payasita decorativa de foamy',
      descripcion:
        'Fofucha decorativa elaborada en goma EVA para celebraciones infantiles.',
      precio: 'Bs 80 c/u',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image27.png'
    },

    {
      id: 7,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Velita personalizada de foamy',
      descripcion:
        'Velita decorativa personalizada con personaje, nombre y número a elección.',
      precio: 'Bs 20 c/u',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image28.png'
    },

    {
      id: 8,
      categoria: 'Feliz Cumpleaños',
      nombre: 'Velita personalizada con personaje',
      descripcion:
        'Decoración personalizada para pastel con personaje y número a elección.',
      precio: 'Bs 20 c/u',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image29.png'
    },

    // =====================================================
    // HALLOWEEN
    // =====================================================

    {
      id: 9,
      categoria: 'Halloween',
      nombre: 'Fofucha dulcero de Halloween',
      descripcion:
        'Personaje de Halloween elaborado en goma EVA acompañado de dulcero y golosinas.',
      precio: 'Bs 35',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image30.png'
    },

    {
      id: 10,
      categoria: 'Halloween',
      nombre: 'Fofucha temática de Halloween',
      descripcion:
        'Figura decorativa elaborada en foamy para celebraciones y decoraciones de Halloween.',
      precio: 'Bs 35',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image31.png'
    },

    {
      id: 11,
      categoria: 'Halloween',
      nombre: 'Fofupluma brujita de foamy',
      descripcion:
        'Muñeca brujita decorativa elaborada artesanalmente en goma EVA.',
      precio: 'Bs 35',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image32.png'
    },

    {
      id: 12,
      categoria: 'Halloween',
      nombre: 'Canasta dulcera de Halloween',
      descripcion:
        'Canasta para dulces con personaje de Halloween elaborada en goma EVA.',
      precio: 'Bs 20',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image33.png'
    },

    {
      id: 13,
      categoria: 'Halloween',
      nombre: 'Canasta temática de Halloween',
      descripcion:
        'Canasta decorativa para golosinas con temática de Halloween.',
      precio: 'Bs 20',
      disponibilidad: 'Solo a pedido',
      imagen: '/catalogo/image34.png'
    }
  ];

  function normalizar(texto: string): string {
    return texto
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '');
  }

  function obtenerProductosFiltrados(): Producto[] {
    const textoBusqueda = normalizar(busqueda.trim());

    return productos.filter((producto) => {
      const coincideCategoria =
        categoriaSeleccionada === 'Todos' ||
        producto.categoria === categoriaSeleccionada;

      const contenido = normalizar(
        `${producto.nombre} ${producto.descripcion} ${producto.categoria}`
      );

      const coincideBusqueda =
        textoBusqueda === '' ||
        contenido.includes(textoBusqueda);

      return coincideCategoria && coincideBusqueda;
    });
  }

  function abrirWhatsapp(producto?: Producto): string {
    let mensaje =
      'Hola, vi Diseño y Creaciones ALE en la aplicación y quisiera más información.';

    if (producto) {
      mensaje =
        `Hola, vi el producto "${producto.nombre}" ` +
        `con precio ${producto.precio}. ` +
        `Quisiera más información.`;
    }

    return (
      `https://wa.me/${tienda.whatsapp}?text=` +
      encodeURIComponent(mensaje)
    );
  }
</script>

<svelte:head>
  <title>Diseño y Creaciones ALE | Explorar</title>
</svelte:head>

<div class="min-h-screen bg-[#fff9fb] text-slate-800">

  <!-- PORTADA -->
  <section
    class="relative overflow-hidden border-b border-slate-100 bg-gradient-to-br from-amber-50 via-rose-50 to-purple-100"
  >
    <div
      class="absolute -left-20 top-10 h-72 w-72 rounded-full bg-rose-300/20 blur-3xl"
    ></div>

    <div
      class="absolute -right-20 top-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"
    ></div>

    <div
      class="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
    >
      <span
        class="inline-flex rounded-full border border-rose-200 bg-white/80 px-4 py-2 text-xs font-black uppercase tracking-[0.17em] text-rose-500"
      >
        Tienda registrada
      </span>

      <h1
        class="mt-5 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl"
      >
        Diseño y Creaciones
        <span
          class="bg-gradient-to-r from-rose-500 to-purple-700 bg-clip-text text-transparent"
        >
          ALE
        </span>
      </h1>

      <p class="mt-3 text-xl font-bold text-rose-500">
        {tienda.lema}
      </p>

      <p
        class="mt-5 max-w-3xl text-sm leading-7 text-slate-600 sm:text-base"
      >
        {tienda.descripcion}
      </p>

      <div class="mt-7 flex flex-wrap gap-3">
        <a
          href={abrirWhatsapp()}
          target="_blank"
          rel="noreferrer"
          class="rounded-2xl bg-emerald-500 px-6 py-3.5 text-sm font-black text-white shadow-lg"
        >
          Contactar por WhatsApp
        </a>

        <a
          href={tienda.googleMaps}
          target="_blank"
          rel="noreferrer"
          class="rounded-2xl border border-purple-200 bg-white px-6 py-3.5 text-sm font-black text-purple-700"
        >
          Ver en Google Maps
        </a>
      </div>
    </div>
  </section>

  <!-- CATÁLOGO -->
  <main
    class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16"
  >

    <div
      class="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between"
    >
      <div>
        <p
          class="text-sm font-black uppercase tracking-[0.18em] text-rose-500"
        >
          Catálogo
        </p>

        <h2
          class="mt-2 text-3xl font-black text-slate-900 sm:text-4xl"
        >
          Cumpleaños y Halloween
        </h2>

        <p
          class="mt-3 text-sm text-slate-500"
        >
          Actualmente el catálogo público reconoce únicamente estas dos categorías.
        </p>
      </div>

      <div class="relative w-full lg:max-w-sm">
        <span
          class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4"
        >
          🔎
        </span>

        <input
          type="search"
          bind:value={busqueda}
          placeholder="Buscar producto..."
          class="h-12 w-full rounded-2xl border border-slate-200 bg-white pl-11 pr-4 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
        />
      </div>
    </div>

    <!-- FILTROS -->
    <div
      class="mt-8 flex gap-2 overflow-x-auto pb-3"
    >
      {#each categorias as categoria}
        <button
          type="button"
          onclick={() => {
            categoriaSeleccionada = categoria;
          }}
          class={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold transition ${
            categoriaSeleccionada === categoria
              ? 'bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-lg'
              : 'border border-slate-200 bg-white text-slate-600 hover:bg-purple-50 hover:text-purple-700'
          }`}
        >
          {categoria}
        </button>
      {/each}
    </div>

    <p class="mt-5 text-sm text-slate-500">
      <strong class="text-slate-800">
        {obtenerProductosFiltrados().length}
      </strong>
      productos encontrados
    </p>

    <!-- PRODUCTOS -->
    {#if obtenerProductosFiltrados().length > 0}

      <div
        class="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
      >
        {#each obtenerProductosFiltrados() as producto (producto.id)}
          <article
            class="group flex overflow-hidden rounded-[26px] border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
          >
            <div class="flex w-full flex-col">

              <div
                class="relative aspect-[4/3] overflow-hidden bg-slate-50 p-2"
              >
                <img
                  src={producto.imagen}
                  alt={producto.nombre}
                  loading="lazy"
                  class="h-full w-full object-contain transition duration-500 group-hover:scale-[1.03]"
                />

                <span
                  class={`absolute left-3 top-3 rounded-full px-3 py-1.5 text-[11px] font-black shadow ${
                    producto.categoria === 'Halloween'
                      ? 'bg-slate-900 text-white'
                      : 'bg-white text-purple-700'
                  }`}
                >
                  {producto.categoria}
                </span>
              </div>

              <div class="flex flex-1 flex-col p-5">
                <h3
                  class="text-base font-black leading-6 text-slate-800"
                >
                  {producto.nombre}
                </h3>

                <p
                  class="mt-2 text-sm leading-6 text-slate-500"
                >
                  {producto.descripcion}
                </p>

                <div class="mt-4">
                  <span
                    class="rounded-full bg-amber-50 px-3 py-1.5 text-xs font-bold text-amber-700"
                  >
                    {producto.disponibilidad}
                  </span>
                </div>

                <div class="mt-auto pt-5">
                  <p
                    class="text-xs font-bold uppercase tracking-wider text-slate-400"
                  >
                    Precio
                  </p>

                  <p
                    class="mt-1 text-2xl font-black text-purple-700"
                  >
                    {producto.precio}
                  </p>

                  <a
                    href={abrirWhatsapp(producto)}
                    target="_blank"
                    rel="noreferrer"
                    class="mt-4 flex w-full items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-4 py-3 text-sm font-black text-white shadow"
                  >
                    Consultar producto
                  </a>
                </div>
              </div>

            </div>
          </article>
        {/each}
      </div>

    {:else}

      <div
        class="mt-8 rounded-[28px] border border-dashed border-slate-300 bg-white px-6 py-16 text-center"
      >
        <div class="text-5xl">
          🔎
        </div>

        <h3
          class="mt-4 text-xl font-black text-slate-800"
        >
          No encontramos productos
        </h3>

        <p
          class="mt-2 text-sm text-slate-500"
        >
          Prueba con otra palabra o selecciona otra categoría.
        </p>

        <button
          type="button"
          onclick={() => {
            busqueda = '';
            categoriaSeleccionada = 'Todos';
          }}
          class="mt-5 rounded-xl bg-purple-700 px-5 py-3 text-sm font-bold text-white"
        >
          Mostrar todos
        </button>
      </div>

    {/if}

  </main>

</div>