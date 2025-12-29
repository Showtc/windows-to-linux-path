import { LaunchProps, showHUD, Clipboard } from "@raycast/api";

interface PathArgument {
  path: string;
}

export default async function main(props: LaunchProps<{ arguments: PathArgument }>) {
  let { path } = props.arguments;

  // Replace backslashes to slashes
  const regex = /\\/gi;
  path = path.replace(regex, "/");

  // Add a slash at the beginning, then lower case the first character, and remove the ":"
  path = "/" + path.substring(0, 1).toLowerCase() + path.substring(2);

  await Clipboard.copy(path);
  await showHUD("Copied path to clipboard");
}
