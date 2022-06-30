/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_RAPID_API_KEY: string
  readonly VITE_RAPID_HOST_GYM: string
  readonly VITE_RAPID_HOST_VIDEO: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}