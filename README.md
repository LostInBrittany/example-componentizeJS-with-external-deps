# Example of using external dependencies on ComponentizeJS by pre-bundling with RollupJS

## Building the example

To build the example, use:

```bash
npm run build
```

## Running the Component in Node.js

To run the component in Node.js, we need to first transpile the component with jco:

```bash
npx jco transpile dist/hello-world.wasm -o dist --map 'wasi-*=@bytecodealliance/preview2-shim/*'
```

To test the component:

```bash
node -e "import('./dist/hello-world.js').then(m => console.log(m.hello('Horacio')))"
```