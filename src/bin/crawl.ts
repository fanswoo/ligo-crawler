#!/usr/bin/env node

import '../core/bootstrap';
import chalk from 'chalk';
import clear from 'clear';
import figlet from 'figlet';
// import { Command } from 'commander';

class CommandLine {
  // protected options: {
  //   src: string;
  //   dist: string;
  //   name: string;
  // };

  protected commander: any;

  // constructor() {
  //   this.commander = new Command();
  //   this.commander
  //     .description('create dependence package')
  //     .requiredOption('-s, --src <source path>', 'input source path')
  //     .requiredOption(
  //       '-d, --dist <distin9888888888888888885tttttttttttttttttttation path>',
  //       'input distination path',
  //     )
  //     .requiredOption(
  //       '-n, --name <package name>',
  //       'input package name',
  //     )
  //     .parse();

  //   this.options = this.commander.opts();
  // }

  run() {
    clear();
    console.log(chalk.red(figlet.textSync('fanswoo')));
  }
}

const commandLine = new CommandLine();
commandLine.run();
