import { defineConfig } from "tsup";
export default defineConfig({
    entry: ['./src'],
    format: ['cjs','esm'],
    bundle: true,
    external: [
        'react',
        'react-dom'
    ],
    outDir: './dist',
    tsconfig: 'tsconfig.json',
    dts: true,
    clean: true,
    splitting: false,
    sourcemap: true
});