<script lang="ts">
	let title = "GRUPO LML";
	let subtitle = "Desarrollado con Svelte 5 y Tailwind CSS Y descubriendo";
</script>

<header class="relative overflow-hidden bg-linear-to-r from-blue-700 via-sky-600 to-cyan-500 text-white">
	<!-- Fondo decorativo -->
	<div class="absolute inset-0 opacity-10">
		<div class="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-white blur-3xl"></div>
		<div class="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-white blur-3xl"></div>
	</div>

	<div class="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-8 lg:px-10">
		<!-- Logo + Texto -->
		<div class="flex items-center gap-4">
			<div
				class="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 backdrop-blur-md shadow-lg">
				<span class="text-3xl font-bold"> L.M.L. </span>
			</div>

			<div>
				<h1 class="text-3xl font-extrabold tracking-wide">
					{title}
				</h1>

				<p class="mt-1 text-sm text-blue-100">
					{subtitle}
				</p>
			</div>
		</div>

		<!-- Botones -->
		<div class="hidden items-center gap-3 md:flex">
			<button
				class="rounded-xl border border-white/30 px-5 py-2 font-medium transition hover:bg-white/10">
				Conocer más
			</button>

			<button
				class="rounded-xl bg-white px-5 py-2 font-semibold text-blue-700 shadow-lg transition hover:scale-105 hover:bg-blue-50">
				Comenzar
			</button>
		</div>
	</div>
</header>
