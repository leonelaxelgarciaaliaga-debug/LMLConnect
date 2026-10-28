import { createClient, type SupabaseClient } from '@supabase/supabase-js';

/**
 * Cliente único de Supabase para LML CONNECT.
 * Configura VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY en el archivo .env.
 * Nunca coloques la service_role key en el frontend.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const supabaseConfigurado = Boolean(supabaseUrl && supabaseAnonKey);

function crearCliente(): SupabaseClient {
  if (!supabaseUrl || !supabaseAnonKey) {
    // Mantiene un error explícito y entendible en lugar de fallar con un mensaje críptico.
    throw new Error(
      'Supabase no está configurado. Copia .env.example a .env y completa VITE_SUPABASE_URL y VITE_SUPABASE_ANON_KEY.'
    );
  }

  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true
    }
  });
}

/**
 * Cliente perezoso: permite que las páginas que aún no usan Supabase
 * sigan abriendo aunque el archivo .env no esté configurado todavía.
 * Al acceder a `supabase`, la configuración se valida.
 */
let cliente: SupabaseClient | undefined;

export const supabase: SupabaseClient = new Proxy({} as SupabaseClient, {
  get(_target, propiedad, receptor) {
    cliente ??= crearCliente();
    const valor = Reflect.get(cliente as object, propiedad, receptor);
    return typeof valor === 'function' ? valor.bind(cliente) : valor;
  }
});

/** Tipos iniciales basados en las tablas indicadas en el respaldo recibido. */
export type TablaPrincipal =
  | 'CLIENTES'
  | 'USUARIOS'
  | 'TIENDAS'
  | 'PRODUCTOS'
  | 'VENTAS'
  | 'RESERVAS';

/** Sube una imagen a un bucket de Storage y devuelve su URL pública.
 * El bucket debe existir y sus políticas de Storage deben permitir la operación.
 */
export async function subirImagen(
  bucket: string,
  ruta: string,
  archivo: File
): Promise<string> {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(ruta, archivo, {
      upsert: true,
      contentType: archivo.type || undefined,
      cacheControl: '3600'
    });

  if (error) throw error;

  const { data: urlData } = supabase.storage
    .from(bucket)
    .getPublicUrl(data.path);

  return urlData.publicUrl;
}
