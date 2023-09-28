import { execSync } from "child_process";

export function remarkDatePublished() {
  return function (_, file) {
    const filepath = file.history[0];
    const result = execSync(
      `git log -1 --diff-filter=A --pretty="format:%cI" ${filepath}`
    );
    file.data.astro.frontmatter.datePublished = result.toString();
  };
}

export function remarkDateModified() {
  return function (_, file) {
    const filepath = file.history[0];
    const result = execSync(`git log -1 --pretty="format:%cI" ${filepath}`);
    file.data.astro.frontmatter.dateModified = result.toString();
  };
}
