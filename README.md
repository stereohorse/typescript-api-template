# :mushroom:

## Dev workflows

### Run local server with auto-reloading

```bash
> yarn start:dev
```

### Run tests

```bash
> yarn test
```

With auto-reloading:

```bash
> yarn watch:test
```

### Release new version

```bash
yarn release
```

This command will

1. increment version in `package.json`
2. generate `CHANGELOG.md`
3. commit that chages with tag

See [standard-version](https://github.com/conventional-changelog/standard-version) for details.

### Build Docker image

Requires tag on current commit

```bash
> yarn docker
```
