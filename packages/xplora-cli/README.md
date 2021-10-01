# Xplora 🍄

A CLI tool to visualize directories on your file system right in your browser, it also watches for changes in specified directories.

![Xplora](/packages/xplora-cli/.github/screenshot-01.png)

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