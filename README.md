# sanity-plugin-plausible-iframe

This is for Sanity Studio V2.

Simple plugin to show Plausible analytics as an iframe inside of the Sanity Dashboard. 
This is my very first plugin.

![sanity dashboard widget](https://github.com/mainlyno/sanity-plugin-plausible-iframe/blob/main/image.png?raw=true)

## Installation

```
sanity install plausible-iframe
```

## Configuration

The plugin can be configured through `<your-studio-folder>/config/plausible-iframe.json`:

```json
{
  "site": "<domain.com?auth=xxxx>"
}
```

## Configuration Plausible

1. Create a new Shared Link without password-protection.
2. Copy the end of the link to <your-studio-folder>/config/plausible-iframe.json

## License

MIT © Ole Svennevig
See LICENSE
