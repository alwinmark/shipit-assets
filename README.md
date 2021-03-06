# shipit-assets

Asset syncing tasks for [Shipit](https://github.com/shipitjs/shipit).

**Features:**

- Works via [shipit-cli](https://github.com/shipitjs/shipit) and [grunt-shipit](https://github.com/shipitjs/grunt-shipit)

## Install

```
npm install shipit-assets
```

## Usage

### Example `shipitfile.js`

```js
module.exports = function (shipit) {
  require('shipit-assets')(shipit);

  shipit.initConfig({
    default: {
      assets: {
        paths: ['public/storage'],
        options: {
          ignores: ['cache']
        },
      }
    },
  });
};
```

Push your local assets to remote:

```
shipit staging assets:push
```

Pull your remote assets to local:

```
shipit staging assets:pull
```

### Example `Gruntfile.js`
```js
grunt.initConfig({
    shipit: {
      options: {
        workspace: '/tmp/github-monitor',
        deployTo: '/tmp/deploy_to',
        repositoryUrl: 'https://github.com/user/repo.git',
        ignores: ['.git', 'node_modules'],
        keepReleases: 2,
        key: '/path/to/key',
        shallowClone: true,
        assets: {
          'paths': [
            'public/uploads',
            'backup'
          ]
        },
      },
      staging: {
        servers: 'user@myserver.com'
      }
    }
  });

  grunt.loadNpmTasks('grunt-shipit');
  grunt.loadNpmTasks('shipit-deploy');
  grunt.loadNpmTasks('shipit-assets');
```

To run shipit-assets you have to call:
`grunt shipit:staging assets:push`


## Options (`shipit.config.assets`)

### `assets.paths`

Type: `Array`

Paths to sync between remote and local. Paths are relative to project root.

### `assets.localPaths`

Type: `Array`

If your local paths are mapped differently than remote, you may specify here. If specified, the array must have the same length as `assets.paths`. Default: `assets.paths`

### `assets.options`

Options to pass to [`shipit.remoteCopy`](https://github.com/shipitjs/shipit#shipitremotecopysrc-dest-options-callback).

## License

MIT
