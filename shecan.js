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

spinner.text = "Removing shecan from " + resolvConfPath + "...";

try {
  let resolvConf = fs.readFileSync(resolvConfPath, "utf8");
  spinner.text = "Successfully read existing " + resolvConfPath + ".";

  let needToUpdateResolvConf = false;
  let updatedResolvConfLines = resolvConf.split("\n").filter((line) => {
    for (const ns of nameservers) {
      if (line === ns) {
        needToUpdateResolvConf = true;
        return false;
      }
    }
    return true;
  });

  if (needToUpdateResolvConf) {
    spinner.text = "Updating " + resolvConfPath + "...";
    let updatedResolvConf = updatedResolvConfLines.join("\n");
    fs.writeFileSync(resolvConfPath, updatedResolvConf);
    spinner.succeed("Successfully removed shecan from " + resolvConfPath + ".");
  } else {
    spinner.info(resolvConfPath + " is already up to date. No changes made.");
  }
} catch (error) {
  spinner.fail("Failed to update " + resolvConfPath + ": " + error.message);
}
spinner.stop();
