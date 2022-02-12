/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_GOOGLE_MAP_TOKEN: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
