<script lang="ts">
  let nombre = '';
  let apellido = '';
  let correo = '';
  let telefono = '';
  let password = '';
  let confirmarPassword = '';

  let mostrarPassword = false;
  let mostrarConfirmacion = false;
  let aceptarTerminos = false;

  let cargando = false;
  let mensaje = '';
  let tipoMensaje: 'success' | 'error' | '' = '';

  async function registrar() {
    mensaje = '';
    tipoMensaje = '';

    if (
      !nombre.trim() ||
      !apellido.trim() ||
      !correo.trim() ||
      !password ||
      !confirmarPassword
    ) {
      tipoMensaje = 'error';
      mensaje = 'Completa los campos obligatorios para continuar.';
      return;
    }

    if (password.length < 6) {
      tipoMensaje = 'error';
      mensaje = 'La contraseña debe tener al menos 6 caracteres.';
      return;
    }

    if (password !== confirmarPassword) {
      tipoMensaje = 'error';
      mensaje = 'Las contraseñas no coinciden.';
      return;
    }

    if (!aceptarTerminos) {
      tipoMensaje = 'error';
      mensaje = 'Debes aceptar los términos y condiciones.';
      return;
    }

    cargando = true;

    try {
      /*
        AQUÍ CONECTAREMOS SUPABASE.

        Ejemplo futuro:

        const { data, error } = await supabase
          .from('CLIENTES')
          .insert({
            ...
          });

        Todavía no agregamos nombres de columnas
        para no inventar campos que no existan en tu BD.
      */

      await new Promise((resolve) => setTimeout(resolve, 700));

      tipoMensaje = 'success';
      mensaje = 'Datos validados correctamente. El registro está listo para conectarse a Supabase.';
    } catch (error) {
      tipoMensaje = 'error';
      mensaje = 'Ocurrió un problema al procesar el registro.';
    } finally {
      cargando = false;
    }
  }
</script>

<svelte:head>
  <title>Registro | Diseño y Creaciones ALE</title>
  <meta
    name="description"
    content="Crea tu cuenta y descubre los productos de Chocolates Princesa."
  />
</svelte:head>

<div class="min-h-screen bg-[#fffaf8]">
  <div
    class="relative isolate overflow-hidden px-4 py-10 sm:px-6 lg:px-8 lg:py-16"
  >
    <!-- Decoración de fondo -->
    <div
      class="pointer-events-none absolute -left-20 top-20 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-purple-400/20 blur-3xl"
    ></div>

    <div
      class="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-300/15 blur-3xl"
    ></div>

    <div class="relative mx-auto max-w-6xl">
      <div
        class="overflow-hidden rounded-[32px] border border-white/80 bg-white shadow-[0_25px_80px_rgba(88,28,135,0.10)]"
      >
        <div class="grid lg:grid-cols-[0.85fr_1.15fr]">
          <!-- ================================================= -->
          <!-- PANEL IZQUIERDO -->
          <!-- ================================================= -->
          <section
            class="relative overflow-hidden bg-gradient-to-br from-amber-500 via-rose-500 to-purple-700 px-7 py-10 text-white sm:px-10 lg:px-12 lg:py-14"
          >
            <div
              class="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-white/10"
            ></div>

            <div
              class="absolute -bottom-24 -left-16 h-72 w-72 rounded-full border-[35px] border-white/5"
            ></div>

            <div class="relative z-10 flex h-full flex-col">
              <!-- Marca -->
              <div class="mb-12 flex items-center gap-3">
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
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m5.6 5.6 1.8 1.8m9.2 9.2 1.8 1.8m0-12.8-1.8 1.8m-9.2 9.2-1.8 1.8"
                    />
                  </svg>
                </div>

                <div>
                  <p class="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">
                    Bienvenido a
                  </p>
                  <h2 class="text-lg font-bold">
                    LML CONNECT
                  </h2>
                </div>
              </div>

              <div class="my-auto">
                <span
                  class="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                >
                  Tu experiencia comienza aquí
                </span>

                <h1
                  class="mt-6 max-w-md text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl"
                >
                  Un espacio pensado para ti.
                </h1>

                <p
                  class="mt-5 max-w-md text-[15px] leading-7 text-white/80 sm:text-base"
                >
                  Crea tu cuenta para explorar productos, descubrir promociones
                  y disfrutar una experiencia más personalizada.
                </p>

                <!-- Beneficios -->
                <div class="mt-9 space-y-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-5 w-5"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="m5 12 4 4L19 6"
                        />
                      </svg>
                    </div>

                    <p class="text-sm font-medium text-white/90">
                      Descubre nuestros productos fácilmente
                    </p>
                  </div>

                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-5 w-5"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 3v18M17 7.5c0-1.65-2.24-3-5-3s-5 1.35-5 3 2.24 3 5 3 5 1.35 5 3-2.24 3-5 3-5-1.35-5-3"
                        />
                      </svg>
                    </div>

                    <p class="text-sm font-medium text-white/90">
                      Accede a novedades y promociones
                    </p>
                  </div>

                  <div class="flex items-center gap-3">
                    <div
                      class="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/15"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        class="h-5 w-5"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M12 15.75A3.75 3.75 0 1 0 12 8.25a3.75 3.75 0 0 0 0 7.5Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M4.5 20.25a8.1 8.1 0 0 1 15 0"
                        />
                      </svg>
                    </div>

                    <p class="text-sm font-medium text-white/90">
                      Mantén tus datos y preferencias organizados
                    </p>
                  </div>
                </div>
              </div>

              <p class="mt-12 text-xs leading-5 text-white/60">
                Diseñado para ofrecerte una experiencia sencilla, segura y
                cercana.
              </p>
            </div>
          </section>

          <!-- ================================================= -->
          <!-- FORMULARIO -->
          <!-- ================================================= -->
          <section class="px-6 py-9 sm:px-10 lg:px-14 lg:py-12">
            <div class="mx-auto max-w-2xl">
              <div>
                <p
                  class="text-sm font-bold uppercase tracking-[0.16em] text-rose-500"
                >
                  Crear cuenta
                </p>

                <h2
                  class="mt-2 text-3xl font-black tracking-tight text-slate-900 sm:text-[34px]"
                >
                  Queremos conocerte
                </h2>

                <p class="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                  Completa tus datos. Solo te tomará un momento.
                </p>
              </div>

              <form
  class="mt-8 space-y-6"
  onsubmit={(event) => {
    event.preventDefault();
    registrar();
  }}
>
                <!-- Nombre y apellido -->
                <div class="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      for="nombre"
                      class="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Nombre
                      <span class="text-rose-500">*</span>
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
                            d="M15.75 6.75a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.5 20.25a7.5 7.5 0 0 1 15 0"
                          />
                        </svg>
                      </div>

                      <input
                        id="nombre"
                        type="text"
                        bind:value={nombre}
                        autocomplete="given-name"
                        placeholder="Ej. Carlos"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      for="apellido"
                      class="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Apellido
                      <span class="text-rose-500">*</span>
                    </label>

                    <input
                      id="apellido"
                      type="text"
                      bind:value={apellido}
                      autocomplete="family-name"
                      placeholder="Ej. Mendoza"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    />
                  </div>
                </div>

                <!-- Correo -->
                <div>
                  <label
                    for="correo"
                    class="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Correo electrónico
                    <span class="text-rose-500">*</span>
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
                      type="email"
                      bind:value={correo}
                      autocomplete="email"
                      placeholder="nombre@correo.com"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    />
                  </div>
                </div>

                <!-- Teléfono -->
                <div>
                  <label
                    for="telefono"
                    class="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Número de teléfono
                    <span class="ml-1 text-xs font-normal text-slate-400">
                      Opcional
                    </span>
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
                          d="M8.25 3.75h7.5A2.25 2.25 0 0 1 18 6v12a2.25 2.25 0 0 1-2.25 2.25h-7.5A2.25 2.25 0 0 1 6 18V6a2.25 2.25 0 0 1 2.25-2.25Z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M10.5 17.25h3"
                        />
                      </svg>
                    </div>

                    <input
                      id="telefono"
                      type="tel"
                      bind:value={telefono}
                      autocomplete="tel"
                      placeholder="Ej. 71234567"
                      class="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/70 pl-12 pr-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100"
                    />
                  </div>
                </div>

                <!-- Contraseñas -->
                <div class="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      for="password"
                      class="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Contraseña
                      <span class="text-rose-500">*</span>
                    </label>

                    <div class="relative">
                      <input
                        id="password"
                        type={mostrarPassword ? 'text' : 'password'}
                        bind:value={password}
                        autocomplete="new-password"
                        placeholder="Mínimo 6 caracteres"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />

                      <button
                        type="button"
                        aria-label="Mostrar u ocultar contraseña"
                        onclick={() => (mostrarPassword = !mostrarPassword)}
                        class="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition hover:text-purple-600"
                      >
                        {#if mostrarPassword}
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
                              d="M3 3l18 18M10.6 10.7A2 2 0 0 0 13.3 13.4M9.9 4.4A10 10 0 0 1 12 4.2c5.3 0 8.7 4.8 8.7 4.8a13.2 13.2 0 0 1-2.5 3.1M6.4 6.5C4.3 7.9 3.3 9 3.3 9S6.7 13.8 12 13.8c.7 0 1.3-.1 1.9-.2"
                            />
                          </svg>
                        {:else}
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
                            <circle cx="12" cy="12" r="2.5" />
                          </svg>
                        {/if}
                      </button>
                    </div>
                  </div>

                  <div>
                    <label
                      for="confirmar"
                      class="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Confirmar
                      <span class="text-rose-500">*</span>
                    </label>

                    <div class="relative">
                      <input
                        id="confirmar"
                        type={mostrarConfirmacion ? 'text' : 'password'}
                        bind:value={confirmarPassword}
                        autocomplete="new-password"
                        placeholder="Repite tu contraseña"
                        class="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50/70 px-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-purple-400 focus:bg-white focus:ring-4 focus:ring-purple-100"
                      />

                      <button
                        type="button"
                        aria-label="Mostrar u ocultar confirmación"
                        onclick={() =>
                          (mostrarConfirmacion = !mostrarConfirmacion)}
                        class="absolute inset-y-0 right-0 flex w-12 items-center justify-center text-slate-400 transition hover:text-purple-600"
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
                            d="M2.7 12s3.4-5.25 9.3-5.25S21.3 12 21.3 12s-3.4 5.25-9.3 5.25S2.7 12 2.7 12Z"
                          />
                          <circle cx="12" cy="12" r="2.5" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <!-- Indicador contraseña -->
                <div class="rounded-2xl bg-slate-50 px-4 py-3">
                  <div class="flex items-center justify-between gap-3">
                    <p class="text-xs font-medium text-slate-500">
                      Seguridad de contraseña
                    </p>

                    <p
                      class={`text-xs font-bold ${
                        password.length >= 8
                          ? 'text-emerald-600'
                          : password.length >= 6
                            ? 'text-amber-600'
                            : 'text-slate-400'
                      }`}
                    >
                      {password.length >= 8
                        ? 'Buena'
                        : password.length >= 6
                          ? 'Aceptable'
                          : 'Por definir'}
                    </p>
                  </div>

                  <div class="mt-2 flex gap-1.5">
                    <div
                      class={`h-1.5 flex-1 rounded-full ${
                        password.length >= 1 ? 'bg-rose-400' : 'bg-slate-200'
                      }`}
                    ></div>

                    <div
                      class={`h-1.5 flex-1 rounded-full ${
                        password.length >= 6 ? 'bg-amber-400' : 'bg-slate-200'
                      }`}
                    ></div>

                    <div
                      class={`h-1.5 flex-1 rounded-full ${
                        password.length >= 8 ? 'bg-purple-500' : 'bg-slate-200'
                      }`}
                    ></div>
                  </div>
                </div>

                <!-- Términos -->
                <label
                  class="flex cursor-pointer items-start gap-3 rounded-2xl border border-slate-100 p-4 transition hover:bg-slate-50"
                >
                  <input
                    type="checkbox"
                    bind:checked={aceptarTerminos}
                    class="mt-0.5 h-4 w-4 rounded border-slate-300 accent-rose-500"
                  />

                  <span class="text-sm leading-6 text-slate-500">
                    Acepto los
                    <span class="font-semibold text-purple-700">
                      términos y condiciones
                    </span>
                    y el tratamiento de mis datos personales.
                  </span>
                </label>

                <!-- Mensaje -->
                {#if mensaje}
                  <div
                    class={`rounded-2xl border px-4 py-3 text-sm ${
                      tipoMensaje === 'success'
                        ? 'border-emerald-200 bg-emerald-50 text-emerald-700'
                        : 'border-rose-200 bg-rose-50 text-rose-700'
                    }`}
                  >
                    {mensaje}
                  </div>
                {/if}

                <!-- Botón -->
                <button
                  type="submit"
                  disabled={cargando}
                  class="group relative flex h-13 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 px-6 py-3.5 text-sm font-bold text-white shadow-[0_12px_30px_rgba(225,29,72,0.20)] transition hover:-translate-y-0.5 hover:shadow-[0_15px_35px_rgba(126,34,206,0.22)] disabled:pointer-events-none disabled:opacity-60"
                >
                  <span
                    class="absolute inset-0 translate-x-[-110%] bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-[110%]"
                  ></span>

                  {#if cargando}
                    <span
                      class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
                    ></span>
                    Creando cuenta...
                  {:else}
                    Crear mi cuenta

                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      class="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m9 18 6-6-6-6"
                      />
                    </svg>
                  {/if}
                </button>

                <!-- Login -->
                <div class="flex items-center gap-4 py-1">
                  <div class="h-px flex-1 bg-slate-200"></div>
                  <span class="text-xs text-slate-400">
                    ¿Ya eres parte de nosotros?
                  </span>
                  <div class="h-px flex-1 bg-slate-200"></div>
                </div>

                <a
                  href="/app/login"
                  class="flex h-12 w-full items-center justify-center rounded-2xl border border-purple-200 bg-purple-50/60 text-sm font-bold text-purple-700 transition hover:border-purple-300 hover:bg-purple-100"
                >
                  Iniciar sesión
                </a>
              </form>
            </div>
          </section>
        </div>
      </div>

      <p class="mt-5 text-center text-xs text-slate-400">
        Chocolates Princesa · Una experiencia hecha con dedicación
      </p>
    </div>
  </div>
</div>