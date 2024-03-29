> **Note** This project was created over a weekend and serves solely as a learning tool. Nothing more

# Xplora 🍄

A CLI tool to visualize directories and files right in your browser, it also watches for changes in specified directories.

![Xplora](./.github/screenshot-01.png)

## Installation

To test the project easily, I've published it to npm. **Feel free to skip this section if you'll like to do all the setup on your machine.**

### Install Globally

```
npm i -g xplora-cli
```

### Test without permanent global installation(npx)

```
npx xplora-cli [LIST OF DIRECTORIES]
```

[See Usage](#usage)

## Usage

```
$ xplora-cli DIRECTORIES | [LIST OF DIRECTORIES]
```

### Examples

<br/>

Opens `~/Desktop` with xplora

```
$ xplora-cli ~/Desktop
```

Opens current directory with xplora

```
$ xplora-cli .
```

Opens `thisDirectory` and `anotherDirectory` with xplora

```
$ xplora-cli thisDirectory anotherDirectory
```

## Clone and Run Locally

This repo is a monorepo with two packages

1.  The CLI (`packages/xplora-cli`)
2.  The Frontend (`packages/frontend`)

### Install dependecies

This uses [yarn workspaces](https://classic.yarnpkg.com/lang/en/docs/workspaces/) to intall dependecies for each package in their [respective directories](https://classic.yarnpkg.com/blog/2018/02/15/nohoist/)

```
yarn
```

### Run test

```
 yarn test
```

### Build a distributable version

```
yarn build
```

### Testing `xplora-cli` locally

```
cd dist
```

```
yarn link
```

```
$ xplora-cli DIRECTORY | [LIST OF DIRECTORIES]
```

[See Usage](#usage)

### Development

```
yarn develop
```

This spins up:

- A react react app in development mode
- A nodejs server listening on port `3001` 

## TODO

- [ ] Write more test cases
- [ ] Front end theming
- [ ] Make frontend more accessible
- [ ] Use Typescript in the CLI package
- [ ] Make the CLI more interactive
