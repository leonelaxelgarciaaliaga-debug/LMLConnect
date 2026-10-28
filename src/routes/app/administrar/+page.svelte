
<script lang="ts">
  type Producto = {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria: string;
    disponibilidad: string;
    imagen: string;
  };

  let productos: Producto[] = [];
  let mostrarFormularioProducto = false;

  let nombreProducto = '';
  let descripcionProducto = '';
  let precioProducto = '';
  let categoriaProducto = 'Regalos';
  let disponibilidadProducto = 'Disponible';

  let imagenProducto = '';
  let archivoProducto: File | null = null;

  let mensajeProducto = '';
  let errorProducto = '';

  const categoriasProducto = [
    'Regalos',
    'Papelería',
    'Flores',
    'Decoración',
    'Feliz Día',
    'Cumpleaños',
    'Día de la Madre',
    'Día del Padre',
    'Halloween',
    'Graduación',
    'Otros'
  ];

  function abrirFormularioProducto() {
    nombreProducto = '';
    descripcionProducto = '';
    precioProducto = '';
    categoriaProducto = 'Regalos';
    disponibilidadProducto = 'Disponible';
    imagenProducto = '';
    archivoProducto = null;
    mensajeProducto = '';
    errorProducto = '';
    mostrarFormularioProducto = true;
  }

  function cerrarFormularioProducto() {
    mostrarFormularioProducto = false;
    nombreProducto = '';
    descripcionProducto = '';
    precioProducto = '';
    imagenProducto = '';
    archivoProducto = null;
    errorProducto = '';
  }

  function seleccionarImagenProducto(event: Event) {
    const input = event.currentTarget as HTMLInputElement;
    const archivo = input.files?.[0];

    if (!archivo) return;

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(archivo.type)) {
      errorProducto = 'Selecciona una imagen JPG, PNG o WebP.';
      input.value = '';
      return;
    }

    if (archivo.size > 5 * 1024 * 1024) {
      errorProducto = 'La fotografía no debe superar los 5 MB.';
      input.value = '';
      return;
    }

    archivoProducto = archivo;
    errorProducto = '';

    const lector = new FileReader();

    lector.onload = () => {
      if (typeof lector.result === 'string') {
        imagenProducto = lector.result;
      }
    };

    lector.onerror = () => {
      errorProducto = 'No se pudo leer la fotografía. Intenta otra vez.';
    };

    lector.readAsDataURL(archivo);
  }

  function publicarProducto() {
    mensajeProducto = '';
    errorProducto = '';

    if (!nombreProducto.trim()) {
      errorProducto = 'Escribe el nombre del producto.';
      return;
    }

    if (!descripcionProducto.trim()) {
      errorProducto = 'Escribe la información del producto.';
      return;
    }

    if (!precioProducto.trim()) {
      errorProducto = 'Introduce el precio del producto.';
      return;
    }

    const precio = Number(precioProducto);

    if (!Number.isFinite(precio) || precio < 0) {
      errorProducto = 'Introduce un precio válido.';
      return;
    }

    if (!archivoProducto || !imagenProducto) {
      errorProducto = 'Selecciona una fotografía del producto.';
      return;
    }

    const nuevoProducto: Producto = {
      id: Date.now(),
      nombre: nombreProducto.trim(),
      descripcion: descripcionProducto.trim(),
      precio,
      categoria: categoriaProducto,
      disponibilidad: disponibilidadProducto,
      imagen: imagenProducto
    };

    productos = [...productos, nuevoProducto];
    mensajeProducto = 'Producto agregado al catálogo de esta sesión.';

    cerrarFormularioProducto();
  }

  function eliminarProducto(id: number) {
    if (!window.confirm('¿Deseas eliminar este producto del catálogo?')) {
      return;
    }

    productos = productos.filter((producto) => producto.id !== id);
    mensajeProducto = 'Producto eliminado del catálogo de esta sesión.';
  }
</script>

<svelte:head>
  <title>Administrar productos | LML CONNECT</title>
  <meta
    name="description"
    content="Administra los productos, fotografías, precios y categorías de tu tienda."
  />
</svelte:head>

<div class="min-h-screen bg-[#fff9fb] px-4 py-8 text-slate-800 sm:px-6 lg:px-10">

  <!-- ENCABEZADO -->
  <header class="mb-8 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <p class="text-xs font-black uppercase tracking-[0.2em] text-rose-500">
        Panel de administración
      </p>

      <h1 class="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
        Administrar productos
      </h1>

      <p class="mt-3 max-w-2xl text-sm leading-6 text-slate-500">
        Publica tus productos con fotografías, precios e información para que
        tus clientes puedan descubrirlos en el catálogo.
      </p>
    </div>

    <button
      type="button"
      onclick={abrirFormularioProducto}
      class="rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-6 py-3.5 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
    >
      + Agregar producto
    </button>
  </header>

  <!-- MENSAJE DE RESULTADO -->
  {#if mensajeProducto}
    <div
      role="status"
      class="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-800"
    >
      {mensajeProducto}
    </div>
  {/if}

  <!-- FORMULARIO -->
  {#if mostrarFormularioProducto}
    <section class="mb-10 overflow-hidden rounded-[28px] border border-purple-100 bg-white shadow-[0_20px_60px_rgba(126,34,206,0.10)]">

      <div class="flex items-center justify-between gap-4 border-b border-slate-100 bg-gradient-to-r from-rose-50 to-purple-50 px-5 py-5 sm:px-8">
        <div>
          <p class="text-xs font-black uppercase tracking-widest text-purple-600">
            Nuevo producto
          </p>
          <h2 class="mt-1 text-xl font-black text-slate-900 sm:text-2xl">
            Publicar en mi catálogo
          </h2>
        </div>

        <button
          type="button"
          onclick={cerrarFormularioProducto}
          aria-label="Cerrar formulario"
          class="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-2xl text-slate-500 shadow-sm hover:text-rose-600"
        >
          ×
        </button>
      </div>

      <form
        class="grid gap-8 p-5 sm:p-8 lg:grid-cols-[0.85fr_1.15fr]"
        onsubmit={(event) => {
          event.preventDefault();
          publicarProducto();
        }}
      >

        <!-- FOTOGRAFÍA -->
        <div>
          <label for="fotografiaProducto" class="mb-3 block text-sm font-bold text-slate-700">
            Fotografía del producto *
          </label>

          {#if imagenProducto}
            <div class="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-50">
              <img
                src={imagenProducto}
                alt="Vista previa del producto"
                class="aspect-square w-full object-contain"
              />

              <button
                type="button"
                onclick={() => {
                  imagenProducto = '';
                  archivoProducto = null;
                  const input = document.getElementById('fotografiaProducto') as HTMLInputElement | null;
                  if (input) input.value = '';
                }}
                class="absolute right-3 top-3 rounded-xl bg-white px-4 py-2 text-xs font-black text-purple-700 shadow"
              >
                Cambiar foto
              </button>
            </div>
          {:else}
            <label
              for="fotografiaProducto"
              class="flex aspect-square cursor-pointer flex-col items-center justify-center rounded-3xl border-2 border-dashed border-purple-200 bg-gradient-to-br from-purple-50 via-white to-rose-50 p-6 text-center transition hover:border-purple-400 hover:bg-purple-50"
            >
              <span class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-3xl shadow-sm">
                📷
              </span>

              <span class="mt-4 font-black text-slate-700">
                Seleccionar fotografía
              </span>

              <span class="mt-2 text-xs leading-5 text-slate-400">
                Busca una imagen en tu celular o computadora.
              </span>

              <span class="mt-3 text-xs font-bold text-purple-600">
                JPG, PNG o WebP · Máximo 5 MB
              </span>
            </label>
          {/if}

          <input
            id="fotografiaProducto"
            type="file"
            accept="image/jpeg,image/png,image/webp"
            onchange={seleccionarImagenProducto}
            class="hidden"
          />

          <div class="mt-4 rounded-2xl bg-amber-50 p-4">
            <p class="text-xs font-black text-amber-800">Consejo para tu catálogo</p>
            <p class="mt-1 text-xs leading-5 text-amber-700">
              Utiliza una foto clara y bien iluminada. Procura mostrar el
              producto completo para que tus clientes puedan apreciarlo.
            </p>
          </div>
        </div>

        <!-- DATOS DEL PRODUCTO -->
        <div class="space-y-5">

          <div>
            <label for="nombreProducto" class="mb-2 block text-sm font-bold text-slate-700">
              Nombre del producto *
            </label>
            <input
              id="nombreProducto"
              bind:value={nombreProducto}
              maxlength="150"
              required
              placeholder="Ej. Ramo de flores eternas"
              class="w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
            />
          </div>

          <div>
            <div class="mb-2 flex items-center justify-between gap-3">
              <label for="descripcionProducto" class="text-sm font-bold text-slate-700">
                Información del producto *
              </label>
              <span class="text-xs text-slate-400">
                {descripcionProducto.length}/500
              </span>
            </div>

            <textarea
              id="descripcionProducto"
              bind:value={descripcionProducto}
              maxlength="500"
              rows="4"
              required
              placeholder="Describe los materiales, colores, tamaños y características del producto."
              class="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm leading-6 outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
            ></textarea>
          </div>

          <div class="grid gap-4 sm:grid-cols-2">
            <div>
              <label for="precioProducto" class="mb-2 block text-sm font-bold text-slate-700">
                Precio en bolivianos *
              </label>

              <div class="relative">
                <span class="absolute inset-y-0 left-0 flex items-center pl-4 font-black text-purple-600">
                  Bs
                </span>

                <input
                  id="precioProducto"
                  type="number"
                  min="0"
                  max="999999999"
                  step="0.01"
                  bind:value={precioProducto}
                  required
                  placeholder="0.00"
                  class="w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3 pl-12 pr-3 text-sm outline-none transition focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />
              </div>
            </div>

            <div>
              <label for="categoriaProducto" class="mb-2 block text-sm font-bold text-slate-700">
                Categoría
              </label>

              <select
                id="categoriaProducto"
                bind:value={categoriaProducto}
                class="w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
              >
                {#each categoriasProducto as categoria}
                  <option value={categoria}>{categoria}</option>
                {/each}
              </select>
            </div>
          </div>

          <div>
            <label for="disponibilidadProducto" class="mb-2 block text-sm font-bold text-slate-700">
              Disponibilidad
            </label>

            <select
              id="disponibilidadProducto"
              bind:value={disponibilidadProducto}
              class="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:border-purple-400 focus:ring-4 focus:ring-purple-100"
            >
              <option value="Disponible">Disponible</option>
              <option value="Solo a pedido">Solo a pedido</option>
              <option value="Agotado">Agotado</option>
            </select>
          </div>

          <!-- VISTA PREVIA -->
          <div class="rounded-2xl border border-slate-100 bg-slate-50 p-4">
            <p class="text-xs font-black uppercase tracking-wider text-slate-400">
              Vista previa de información
            </p>

            <div class="mt-3 flex items-center justify-between gap-4">
              <div class="min-w-0">
                <p class="break-words font-black text-slate-800">
                  {nombreProducto || 'Nombre del producto'}
                </p>
                <p class="mt-1 text-xs text-slate-500">
                  {categoriaProducto} · {disponibilidadProducto}
                </p>
              </div>

              <p class="shrink-0 text-xl font-black text-purple-700">
                Bs {precioProducto ? Number(precioProducto).toFixed(2) : '0.00'}
              </p>
            </div>
          </div>

          {#if errorProducto}
            <div
              role="alert"
              class="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700"
            >
              {errorProducto}
            </div>
          {/if}

          <!-- ACCIONES -->
          <div class="flex flex-col-reverse gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:justify-end">
            <button
              type="button"
              onclick={cerrarFormularioProducto}
              class="rounded-2xl border border-slate-200 bg-white px-6 py-3 text-sm font-bold text-slate-600 transition hover:bg-slate-50"
            >
              Cancelar
            </button>

            <button
              type="submit"
              class="rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-7 py-3 text-sm font-black text-white shadow-lg transition hover:-translate-y-0.5"
            >
              Publicar producto
            </button>
          </div>

          <p class="text-xs leading-5 text-slate-400">
            Los campos marcados con * son obligatorios.
          </p>
        </div>
      </form>
    </section>
  {/if}

  <!-- CATÁLOGO DEL ADMINISTRADOR -->
  <section>
    <div class="mb-6 flex items-end justify-between gap-4">
      <div>
        <h2 class="text-2xl font-black text-slate-900">
          Mi catálogo
        </h2>
        <p class="mt-1 text-sm text-slate-500">
          Administra los productos que has agregado.
        </p>
      </div>

      <span class="rounded-full bg-purple-50 px-4 py-2 text-sm font-black text-purple-700">
        {productos.length} {productos.length === 1 ? 'producto' : 'productos'}
      </span>
    </div>

    {#if productos.length > 0}
      <div class="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {#each productos as producto (producto.id)}
          <article class="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">

            <div class="aspect-[4/3] overflow-hidden bg-slate-50">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                class="h-full w-full object-contain"
              />
            </div>

            <div class="p-5">
              <div class="flex flex-wrap items-center justify-between gap-2">
                <span class="rounded-full bg-purple-50 px-3 py-1 text-xs font-bold text-purple-700">
                  {producto.categoria}
                </span>

                <span class={`rounded-full px-3 py-1 text-xs font-bold ${
                  producto.disponibilidad === 'Agotado'
                    ? 'bg-rose-50 text-rose-700'
                    : 'bg-emerald-50 text-emerald-700'
                }`}>
                  {producto.disponibilidad}
                </span>
              </div>

              <h3 class="mt-4 break-words text-lg font-black text-slate-900">
                {producto.nombre}
              </h3>

              <p class="mt-2 whitespace-pre-line break-words text-sm leading-6 text-slate-500">
                {producto.descripcion}
              </p>

              <div class="mt-5 flex items-center justify-between gap-3 border-t border-slate-100 pt-4">
                <div>
                  <p class="text-xs font-bold text-slate-400">Precio</p>
                  <p class="mt-1 text-2xl font-black text-purple-700">
                    Bs {producto.precio.toFixed(2)}
                  </p>
                </div>

                <button
                  type="button"
                  onclick={() => eliminarProducto(producto.id)}
                  class="rounded-xl border border-rose-200 px-4 py-2.5 text-xs font-black text-rose-600 transition hover:bg-rose-50"
                >
                  Eliminar
                </button>
              </div>
            </div>
          </article>
        {/each}
      </div>
    {:else}
      {#if !mostrarFormularioProducto}
        <div class="rounded-[28px] border-2 border-dashed border-slate-200 bg-white px-6 py-16 text-center">
          <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-purple-50 text-4xl">
            📦
          </div>

          <h3 class="mt-5 text-xl font-black text-slate-900">
            Tu catálogo está esperando su primer producto
          </h3>

          <p class="mx-auto mt-2 max-w-md text-sm leading-6 text-slate-500">
            Agrega una fotografía, escribe la información y el precio para
            comenzar a organizar tu catálogo.
          </p>

          <button
            type="button"
            onclick={abrirFormularioProducto}
            class="mt-6 rounded-2xl bg-purple-700 px-6 py-3 text-sm font-black text-white transition hover:bg-purple-800"
          >
            + Agregar mi primer producto
          </button>
        </div>
      {/if}
    {/if}
  </section>

  <!-- AVISO DE PERSISTENCIA -->
  <footer class="mt-10 rounded-2xl border border-amber-200 bg-amber-50 p-4">
    <p class="text-sm font-black text-amber-900">
      Importante sobre el guardado
    </p>
    <p class="mt-1 text-sm leading-6 text-amber-800">
      Esta versión permite probar el formulario y visualizar los productos,
      pero los datos permanecen únicamente en la sesión actual. Para guardarlos
      permanentemente y mostrarlos a otros visitantes, hay que conectar la
      publicación con Supabase Storage y la tabla PRODUCTOS, asociándolos a la
      tienda del usuario autenticado.
    </p>
  </footer>

</div>
