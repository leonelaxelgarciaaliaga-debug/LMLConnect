# src/lib

- `supabase.ts`: cliente compartido de Supabase y helper para subir imágenes a Storage.
- `index.js`: utilidades compartidas de la aplicación.
- `assets/`: recursos importados desde componentes; los archivos públicos (logo y fotos del catálogo) están en `static/`.

## Configuración de Supabase

1. Copia `.env.example` como `.env` en la raíz del proyecto.
2. En Supabase abre **Project Settings → API** y copia la Project URL y la clave pública `anon`/publishable.
3. No uses la clave `service_role` en el navegador.
4. Instala la dependencia con `npm install` (incluye `@supabase/supabase-js`).
5. Crea políticas RLS para que cada administrador solo pueda modificar su tienda y sus productos.

El archivo de respaldo recibido enumera las tablas CLIENTES, USUARIOS, TIENDAS, PRODUCTOS, VENTAS y RESERVAS. Un respaldo de tablas no contiene necesariamente la URL ni las claves API del proyecto, por eso deben completarse en `.env`.
