<script lang="ts">
  import { goto } from '$app/navigation';

  let correo = '';
  let password = '';

  let mostrarPassword = false;
  let cargando = false;

  let mensaje = '';
  let tipoMensaje: 'success' | 'error' | '' = '';

  async function iniciarSesion() {
    mensaje = '';
    tipoMensaje = '';

    // ================================
    // VALIDACIONES
    // ================================

    if (!correo.trim()) {
      tipoMensaje = 'error';
      mensaje = 'Ingresa tu correo electrónico.';
      return;
    }

    if (!password) {
      tipoMensaje = 'error';
      mensaje = 'Ingresa tu contraseña.';
      return;
    }

    if (!correo.includes('@')) {
      tipoMensaje = 'error';
      mensaje = 'Ingresa un correo electrónico válido.';
      return;
    }

    cargando = true;

    try {
      /*
        ===========================================
        AQUÍ SE CONECTARÁ CON SUPABASE
        ===========================================

        Este acceso será solamente para usuarios
        administradores de tiendas.

        Posteriormente podemos hacer:

        1. Buscar el correo.
        2. Verificar contraseña.
        3. Comprobar que el usuario sea ADMINISTRADOR.
        4. Identificar la tienda que administra.
        5. Enviarlo a /app/administrar.

        Ejemplo futuro:

        const { data, error } = await supabase.auth.signInWithPassword({
          email: correo,
          password: password
        });

        if (error) {
          throw error;
        }

      */

      // Simulación temporal
      await new Promise((resolve) => setTimeout(resolve, 800));

      tipoMensaje = 'success';
      mensaje = 'Acceso correcto. Ingresando al panel...';

      setTimeout(() => {
        goto('/app/administrar');
      }, 700);
    } catch (error) {
      console.error(error);

      tipoMensaje = 'error';
      mensaje = 'Correo o contraseña incorrectos.';
    } finally {
      cargando = false;
    }
  }
</script>

<svelte:head>
  <title>Acceso administrativo | Chocolates Princesa</title>

  <meta
    name="description"
    content="Acceso exclusivo para administradores de tiendas."
  />
</svelte:head>


<!-- ================================================= -->
<!-- CONTENEDOR PRINCIPAL -->
<!-- ================================================= -->

<div class="min-h-screen bg-[#fffaf8]">

  <main
    class="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-10 sm:px-6"
  >

    <!-- ================================================= -->
    <!-- DECORACIÓN DEL FONDO -->
    <!-- ================================================= -->

    <div
      class="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-amber-300/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-rose-300/20 blur-3xl"
    ></div>


    <!-- ================================================= -->
    <!-- TARJETA LOGIN -->
    <!-- ================================================= -->

    <div
      class="relative z-10 grid w-full max-w-5xl overflow-hidden rounded-[34px] border border-white/80 bg-white shadow-[0_30px_90px_rgba(88,28,135,0.12)] lg:grid-cols-[0.9fr_1.1fr]"
    >

      <!-- ================================================= -->
      <!-- PANEL IZQUIERDO -->
      <!-- ================================================= -->

      <section
        class="relative hidden overflow-hidden bg-gradient-to-br from-amber-500 via-rose-500 to-purple-700 px-10 py-14 text-white lg:flex lg:flex-col"
      >

        <!-- Decoración -->

        <div
          class="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10"
        ></div>

        <div
          class="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border-[38px] border-white/5"
        ></div>


        <!-- Marca -->

        <div class="relative z-10 flex items-center gap-3">

          <div
            class="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-lg backdrop-blur"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="h-6 w-6"
              stroke="currentColor"
              stroke-width="1.8"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 8.25h7.5v7.5h-7.5z"
              />

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 2.75v2.5M12 18.75v2.5M2.75 12h2.5M18.75 12h2.5"
              />
            </svg>

          </div>

          <div>
            <p
              class="text-xs font-semibold uppercase tracking-[0.24em] text-white/70"
            >
              Chocolates
            </p>

            <h2 class="text-lg font-black">
              Princesa
            </h2>
          </div>

        </div>


        <!-- Contenido -->

        <div class="relative z-10 my-auto">

          <div
            class="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur"
          >

            <span
              class="h-2 w-2 rounded-full bg-emerald-300"
            ></span>

            <span class="text-xs font-semibold">
              Portal administrativo
            </span>

          </div>


          <h1
            class="mt-7 max-w-md text-4xl font-black leading-[1.08] tracking-tight"
          >
            Gestiona tu tienda desde un solo lugar.
          </h1>


          <p
            class="mt-5 max-w-md text-[15px] leading-7 text-white/80"
          >
            Accede al panel administrativo para gestionar productos,
            información y operaciones de tu tienda.
          </p>


          <!-- Características -->

          <div class="mt-9 space-y-4">

            <div class="flex items-center gap-3">

              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-5 w-5"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 7.5h15v12h-15z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M7.5 7.5V5.25A2.25 2.25 0 0 1 9.75 3h4.5a2.25 2.25 0 0 1 2.25 2.25V7.5"
                  />
                </svg>
              </div>

              <span class="text-sm font-medium text-white/90">
                Gestión de productos
              </span>

            </div>


            <div class="flex items-center gap-3">

              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-5 w-5"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 20.25h16.5"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 17V9m6 8V4.5m6 12.5v-5"
                  />
                </svg>

              </div>

              <span class="text-sm font-medium text-white/90">
                Control de información
              </span>

            </div>


            <div class="flex items-center gap-3">

              <div
                class="flex h-9 w-9 items-center justify-center rounded-xl bg-white/15"
              >

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="h-5 w-5"
                  stroke="currentColor"
                  stroke-width="1.8"
                >

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3 5.25 6v5.25c0 4.25 2.85 8.15 6.75 9.75 3.9-1.6 6.75-5.5 6.75-9.75V6L12 3Z"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m9 12 2 2 4-4"
                  />

                </svg>

              </div>

              <span class="text-sm font-medium text-white/90">
                Acceso administrativo seguro
              </span>

            </div>

          </div>

        </div>


        <p
          class="relative z-10 text-xs leading-5 text-white/60"
        >
          Acceso exclusivo para personal autorizado.
        </p>

      </section>



      <!-- ================================================= -->
      <!-- PANEL DERECHO -->
      <!-- ================================================= -->

      <section
        class="flex items-center px-6 py-12 sm:px-10 lg:px-16 lg:py-16"
      >

        <div class="mx-auto w-full max-w-md">


          <!-- Icono superior -->

          <div
            class="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-rose-100 to-purple-100 text-purple-700 lg:hidden"
          >

            <svg
              viewBox="0 0 24 24"
              fill="none"
              class="h-7 w-7"
              stroke="currentColor"
              stroke-width="1.8"
            >

              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3 5.25 6v5.25c0 4.25 2.85 8.15 6.75 9.75 3.9-1.6 6.75-5.5 6.75-9.75V6L12 3Z"
              />

            </svg>

          </div>


          <!-- Encabezado -->

          <div>

            <p
              class="text-sm font-bold uppercase tracking-[0.18em] text-rose-500"
            >
              Administración
            </p>

            <h2
              class="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-[36px]"
            >
              Bienvenido de nuevo
            </h2>

            <p
              class="mt-3 text-sm leading-6 text-slate-500"
            >
              Ingresa con las credenciales asignadas para administrar tu tienda.
            </p>

          </div>



          <!-- ================================================= -->
          <!-- FORMULARIO -->
          <!-- ================================================= -->

          <form
            class="mt-9 space-y-6"
            onsubmit={(event) => {
              event.preventDefault();
              iniciarSesion();
            }}
          >


            <!-- CORREO -->

            <div>

              <label
                for="correo"
                class="mb-2 block text-sm font-semibold text-slate-700"
              >
                Correo electrónico
              </label>


              <div class="relative">

                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z"
                    />

                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m4.5 7.5 7.5 5.25 7.5-5.25"
                    />

                  </svg>

                </div>


                <input
                  id="correo"
                  name="correo"
                  type="email"
                  bind:value={correo}
                  autocomplete="email"
                  placeholder="administrador@correo.com"
                  class="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                />

              </div>

            </div>



            <!-- CONTRASEÑA -->

            <div>

              <div class="mb-2 flex items-center justify-between">

                <label
                  for="password"
                  class="block text-sm font-semibold text-slate-700"
                >
                  Contraseña
                </label>

              </div>


              <div class="relative">

                <div
                  class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400"
                >

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="h-5 w-5"
                    stroke="currentColor"
                    stroke-width="1.8"
                  >

                    <rect
                      x="5"
                      y="10"
                      width="14"
                      height="10"
                      rx="2"
                    />

                    <path
                      stroke-linecap="round"
                      d="M8 10V7a4 4 0 0 1 8 0v3"
                    />

                  </svg>

                </div>


                <input
                  id="password"
                  name="password"
                  type={mostrarPassword ? 'text' : 'password'}
                  bind:value={password}
                  autocomplete="current-password"
                  placeholder="Ingresa tu contraseña"
                  class="h-13 w-full rounded-2xl border border-slate-200 bg-slate-50/70 py-3.5 pl-12 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                />


                <button
                  type="button"
                  aria-label="Mostrar u ocultar contraseña"
                  onclick={() => {
                    mostrarPassword = !mostrarPassword;
                  }}
                  class="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition hover:text-purple-600"
                >

                  {#if mostrarPassword}

                    <!-- Ojo cerrado -->

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-5 w-5"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3 3l18 18"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.6 10.7a2 2 0 0 0 2.7 2.7"
                      />

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.9 4.4A10 10 0 0 1 12 4.2c5.3 0 8.7 4.8 8.7 4.8a13 13 0 0 1-2.5 3.1"
                      />

                    </svg>

                  {:else}

                    <!-- Ojo abierto -->

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      class="h-5 w-5"
                      stroke="currentColor"
                      stroke-width="1.8"
                    >

                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M2.7 12s3.4-5.25 9.3-5.25S21.3 12 21.3 12s-3.4 5.25-9.3 5.25S2.7 12 2.7 12Z"
                      />

                      <circle
                        cx="12"
                        cy="12"
                        r="2.5"
                      />

                    </svg>

                  {/if}

                </button>

              </div>

            </div>



            <!-- MENSAJES -->

            {#if mensaje}

              <div
                class={`flex items-start gap-3 rounded-2xl border px-4 py-3.5 text-sm ${
                  tipoMensaje === 'success'
                    ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                    : 'border-rose-200 bg-rose-50 text-rose-700'
                }`}
              >

                {#if tipoMensaje === 'success'}

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="mt-0.5 h-5 w-5 shrink-0"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m5 12 4 4L19 6"
                    />
                  </svg>

                {:else}

                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    class="mt-0.5 h-5 w-5 shrink-0"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <circle cx="12" cy="12" r="9" />

                    <path
                      stroke-linecap="round"
                      d="M12 8v4"
                    />

                    <path
                      stroke-linecap="round"
                      d="M12 16h.01"
                    />
                  </svg>

                {/if}


                <span>
                  {mensaje}
                </span>

              </div>

            {/if}



            <!-- BOTÓN LOGIN -->

            <button
              type="submit"
              disabled={cargando}
              class="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(225,29,72,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(126,34,206,0.22)] disabled:pointer-events-none disabled:opacity-60"
            >

              <!-- Brillo animado -->

              <span
                class="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]"
              ></span>


              {#if cargando}

                <span
                  class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                ></span>

                Verificando acceso...

              {:else}

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  class="mr-2 h-5 w-5"
                  stroke="currentColor"
                  stroke-width="1.8"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6A2.25 2.25 0 0 0 5.25 5.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15"
                  />

                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m18 8.25 3.75 3.75L18 15.75M21.75 12H9"
                  />
                </svg>

                Ingresar al panel

              {/if}

            </button>

          </form>



          <!-- ================================================= -->
          <!-- AVISO DE SEGURIDAD -->
          <!-- ================================================= -->

          <div
            class="mt-7 flex items-start gap-3 rounded-2xl bg-slate-50 px-4 py-4"
          >

            <div
              class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-purple-100 text-purple-600"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                class="h-4.5 w-4.5"
                stroke="currentColor"
                stroke-width="1.8"
              >

                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 3 5.25 6v5.25c0 4.25 2.85 8.15 6.75 9.75 3.9-1.6 6.75-5.5 6.75-9.75V6L12 3Z"
                />

              </svg>

            </div>


            <div>

              <p
                class="text-xs font-bold text-slate-700"
              >
                Acceso restringido
              </p>

              <p
                class="mt-1 text-xs leading-5 text-slate-500"
              >
                Este portal está destinado únicamente a administradores
                autorizados de las tiendas.
              </p>

            </div>

          </div>



          <!-- Volver -->

          <div class="mt-7 text-center">

            <a
              href="/app"
              class="inline-flex items-center gap-1.5 text-sm font-semibold text-slate-500 transition hover:text-purple-700"
            >

              <svg
                viewBox="0 0 24 24"
                fill="none"
                class="h-4 w-4"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m15 18-6-6 6-6"
                />
              </svg>

              Volver al inicio

            </a>

          </div>

        </div>

      </section>

    </div>

  </main>

</div>