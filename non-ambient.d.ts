
// this file is generated — do not edit it


declare module "svelte/elements" {
	export interface HTMLAttributes<T> {
		'data-sveltekit-keepfocus'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-noscroll'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-preload-code'?:
			| true
			| ''
			| 'eager'
			| 'viewport'
			| 'hover'
			| 'tap'
			| 'off'
			| undefined
			| null;
		'data-sveltekit-preload-data'?: true | '' | 'hover' | 'tap' | 'off' | undefined | null;
		'data-sveltekit-reload'?: true | '' | 'off' | undefined | null;
		'data-sveltekit-replacestate'?: true | '' | 'off' | undefined | null;
	}
}

export {};


declare module "$app/types" {
	type MatcherParam<M> = M extends (param : string) => param is (infer U extends string) ? U : string;

	export interface AppTypes {
		RouteId(): "/" | "/app" | "/app/administrar" | "/app/explorar" | "/app/login" | "/app/registro" | "/app/ubicaciones";
		RouteParams(): {
			
		};
		LayoutParams(): {
			"/": Record<string, never>;
			"/app": Record<string, never>;
			"/app/administrar": Record<string, never>;
			"/app/explorar": Record<string, never>;
			"/app/login": Record<string, never>;
			"/app/registro": Record<string, never>;
			"/app/ubicaciones": Record<string, never>
		};
		Pathname(): "/" | "/app" | "/app/administrar" | "/app/explorar" | "/app/login" | "/app/registro" | "/app/ubicaciones";
		ResolvedPathname(): `${"" | `/${string}`}${ReturnType<AppTypes['Pathname']>}`;
		Asset(): "/catalogo/image1.png" | "/catalogo/image10.png" | "/catalogo/image11.png" | "/catalogo/image12.png" | "/catalogo/image13.png" | "/catalogo/image14.png" | "/catalogo/image15.png" | "/catalogo/image16.png" | "/catalogo/image17.png" | "/catalogo/image18.png" | "/catalogo/image19.png" | "/catalogo/image2.png" | "/catalogo/image20.png" | "/catalogo/image21.png" | "/catalogo/image22.png" | "/catalogo/image23.png" | "/catalogo/image24.png" | "/catalogo/image25.png" | "/catalogo/image26.png" | "/catalogo/image27.png" | "/catalogo/image28.png" | "/catalogo/image29.png" | "/catalogo/image3.png" | "/catalogo/image30.png" | "/catalogo/image31.png" | "/catalogo/image32.png" | "/catalogo/image33.png" | "/catalogo/image34.png" | "/catalogo/image35.png" | "/catalogo/image36.png" | "/catalogo/image37.png" | "/catalogo/image38.png" | "/catalogo/image39.png" | "/catalogo/image4.png" | "/catalogo/image40.png" | "/catalogo/image5.png" | "/catalogo/image6.png" | "/catalogo/image7.png" | "/catalogo/image8.png" | "/catalogo/image9.png" | "/logo-ale.jpeg" | string & {};
	}
}