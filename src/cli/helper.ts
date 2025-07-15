import chalk from "chalk";
export function printMessages(messages: string[]) {
  console.log(messages.join("\n"));
}


export function isLowerCaseEqual(str1: string, str2: string) {
  if (str1 && str2) {
    return str1.toLowerCase() === str2.toLowerCase();
  }

  return !str1 && !str2;
}


export function padding(message = '', before = 1, after = 1) {
  return (
    new Array(before).fill(' ').join('') +
    message +
    new Array(after).fill(' ').join('')
  );
}

export function geneDashLine(message: string, length: number) {
  const finalMessage = new Array(Math.max(2, length - message.length + 2)).join(
    '-',
  );
  return padding(chalk.dim(finalMessage));
}