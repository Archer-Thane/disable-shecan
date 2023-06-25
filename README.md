# enable-shecan

![npm](https://img.shields.io/npm/v/enable-shecan)
![license](https://img.shields.io/npm/l/enable-shecan)

Automatically update the `resolv.conf` of Ubuntu servers to have Shecan set, with a single command.

🐋 Does Shecan get removed every time Docker Compose is run? <br />
⌨️ If so, execute `sudo enable-shecan` before deploying ! <br />
🕛 Fast and Easy setting Shecan Configs inside your `resolv.conf` file <br />
⚠️ Please note that this module works only with Ubuntu servers, and need sudo permissions.<br />

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Installation

You can install `enable-shecan` globally using npm:

```bash
npm install -g enable-shecan
```

This will allow you to run the `enable-shecan` command from anywhere.

## Usage

After installing, you can run the command using:

```bash
sudo enable-shecan
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
