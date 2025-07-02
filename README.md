# synology-api

nodejs synology api wrapper

## develop

- vitest for tests
- tsup for cjs module bundle
- tsc for esm module bundle

## Usage

```js
import SynologyApi from '@fett/synology-api';

// Create a new instance
const synologyApi = new SynologyApi(
     server: "https:192.168.1.1:5001",
    username: "admin",
    password: "password",
);

// Connect to the server
await synologyApi.connect();

```

## API
