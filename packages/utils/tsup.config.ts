import { defineConfig } from "tsup";
export default defineConfig({
    entry: ['./src/index.ts'],
    format: ['cjs','esm'],
    bundle: true,
    external: [
        'react',
        'react-dom'
    ],
    outDir: './dist',
    tsconfig: 'tsconfig.json',
    dts: true,
    clean: true
});