#!/usr/bin/env node
import os from "os";
import fs from "fs";
import ora from "ora";

const nameservers = ["nameserver 178.22.122.100", "nameserver 185.51.200.2"];

let spinner = ora({
  text: "Detecting OS...",
  spinner: "dots",
}).start();

const platform = os.platform();

let resolvConfPath;

switch (platform) {
  case "linux":
    resolvConfPath = "/etc/resolv.conf";
    break;
  case "darwin":
    spinner.info("You're on macOS. Please change your DNS settings manually.");
    spinner.stop();
    process.exit(0);
    break;
  case "win32":
    spinner.info(
      "You're on Windows. Please change your DNS settings manually."
    );
    spinner.stop();
    process.exit(0);
    break;
  default:
    spinner.info(
      "Unsupported platform. Please change your DNS settings manually."
    );
    spinner.stop();
    process.exit(0);
    break;
}

spinner.text = "Adding shecan to " + resolvConfPath + "...";

try {
  let resolvConf = fs.readFileSync(resolvConfPath, "utf8");
  spinner.text = "Successfully read existing " + resolvConfPath + ".";

  let needToUpdateResolvConf = false;
  for (const ns of nameservers) {
    if (!resolvConf.includes(ns)) {
      needToUpdateResolvConf = true;
      break;
    }
  }

  if (needToUpdateResolvConf) {
    spinner.text = "Updating " + resolvConfPath + "...";
    resolvConf = nameservers.join("\n") + "\n" + resolvConf;
    fs.writeFileSync(resolvConfPath, resolvConf);
    spinner.succeed("Successfully added shecan to " + resolvConfPath + ".");
  } else {
    spinner.info(resolvConfPath + " is already up to date. No changes made.");
  }
} catch (error) {
  spinner.fail("Failed to update " + resolvConfPath + ": " + error.message);
}
spinner.stop();
