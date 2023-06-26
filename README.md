# disable-shecan

![npm](https://img.shields.io/npm/v/disable-shecan)
![license](https://img.shields.io/npm/l/disable-shecan)

Automatically remove Shecan configuration, from the `resolv.conf` of Ubuntu servers, with a single command.

✨ For adding shecan automatically, please see [enable-shecan](https://www.npmjs.com/package/enable-shecan) <br />
⌨️ Execute `sudo disable-shecan` to remove shecan from `resolv.conf` file! <br />
⚠️ Please note that this module works only with Ubuntu servers, and need sudo permissions.<br />

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `disable-shecan` globally using npm:

```bash
npm install -g disable-shecan
```

This will allow you to run the `disable-shecan` command from anywhere.

## Usage

After installing, you can run the command using:

```bash
sudo disable-shecan
```

Please note that in many systems, writing to `/etc/resolv.conf` requires administrative (root) privileges, so you need to use `sudo` before the command.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the ISC license. For more information, see the [LICENSE](LICENSE) file.

## Keywords

- Shecan
- DNS settings
- Ubuntu resolv.conf
- Docker Compose
