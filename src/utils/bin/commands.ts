// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' | ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
`;
};

// Redirection
/* export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
}; */

// About
export const about = async (args: string[]): Promise<string> => {
  return `ROOT CTF is an online platform initiated in 2022 that aims to connect employers and employees through cybersecurity-themed competitions, known as Capture-the-Flag events. The platform, a website, offers a safe environment for participants to improve their incident response strategies, promote learning and teamwork, and foster a culture of continuous learning and improvement. The website provides a range of challenges covering different areas of cybersecurity and is suitable for companies, organizations, cybersecurity enthusiasts, and students. ROOT CTF aims to provide a fun and engaging way for individuals and teams to develop their cybersecurity skills.`;
};

/* export const resume = async (args: string[]): Promise<string> => {
  window.open(`${config.resume_url}`);
  return 'Opening resume...';
}; */

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
here are the ways you can support my work:
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

/* export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
}; */

export const linkedin = async (args: string[]): Promise<string> => {
  window.open(`https://www.linkedin.com/company/${config.social.linkedin}/`);

  return 'Opening linkedin...';
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `music
documents
photos
projects
passwords.txt`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

/* export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
}; */

export const sudo = async (args: string[]): Promise<string> => {
  return `I'm sorry, ${config.ps1_username}. I'm afraid I can't do that.`;
};

// Home
export const home = (args?: string[]): string => {
  return `

  ██████╗░░█████╗░░█████╗░████████╗  ░█████╗░████████╗███████╗
  ██╔══██╗██╔══██╗██╔══██╗╚══██╔══╝  ██╔══██╗╚══██╔══╝██╔════╝
  ██████╔╝██║░░██║██║░░██║░░░██║░░░  ██║░░╚═╝░░░██║░░░█████╗░░
  ██╔══██╗██║░░██║██║░░██║░░░██║░░░  ██║░░██╗░░░██║░░░██╔══╝░░
  ██║░░██║╚█████╔╝╚█████╔╝░░░██║░░░  ╚█████╔╝░░░██║░░░██║░░░░░
  ╚═╝░░╚═╝░╚════╝░░╚════╝░░░░╚═╝░░░  ░╚════╝░░░░╚═╝░░░╚═╝░░░░░

Welcome to ROOT CTF!
Type 'home' to return to this page.
Type 'help' to see the list of available commands.
Type 'about' to learn more about ROOT CTF.
Type 'donate' to support #ROOT CTF.
Type 'email' to contact us.`;
};
