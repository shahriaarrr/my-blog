import type {
  LicenseConfig,
  NavBarConfig,
  ProfileConfig,
  SiteConfig,
} from './types/config'
import { LinkPreset } from './types/config'

export const siteConfig: SiteConfig = {
  title: 'Shahriaarrr',
  subtitle: 'shahriaarr\'s personal notes :)',
  lang: 'fa',         // 'en', 'zh_CN', 'zh_TW', 'ja', 'ko', 'es', 'th'
  themeColor: {
    hue: 250,         // Default hue for the theme color, from 0 to 360. e.g. red: 0, teal: 200, cyan: 250, pink: 345
    fixed: false,     // Hide the theme color picker for visitors
  },
  banner: {
    enable: true,
    src: 'assets/images/my-banner.png',   // Relative to the /src directory. Relative to the /public directory if it starts with '/'
    position: 'center',      // Equivalent to object-position, only supports 'top', 'center', 'bottom'. 'center' by default
    credit: {
      enable: false,         // Display the credit text of the banner image
      text: '',              // Credit text to be displayed
      url: ''                // (Optional) URL link to the original artwork or artist's page
    }
  },
  toc: {
    enable: true,           // Display the table of contents on the right side of the post
    depth: 2                // Maximum heading depth to show in the table, from 1 to 3
  },
  favicon: [    // Leave this array empty to use the default favicon
    // {
    //   src: '/favicon/icon.png',    // Path of the favicon, relative to the /public directory
    //   theme: 'light',              // (Optional) Either 'light' or 'dark', set only if you have different favicons for light and dark mode
    //   sizes: '32x32',              // (Optional) Size of the favicon, set only if you have favicons of different sizes
    // }
  ]
}

export const navBarConfig: NavBarConfig = {
  links: [
    LinkPreset.Home,
    LinkPreset.Archive,
    LinkPreset.About,
    // {
    //   name: 'GitHub',
    //   url: 'https://github.com/shahriaarrr',     // Internal links should not include the base path, as it is automatically added
    //   external: true,                               // Show an external link icon and will open in a new tab
    // },
  ],
}

export const profileConfig: ProfileConfig = {
  avatar: 'assets/images/avatar.png',  // Relative to the /src directory. Relative to the /public directory if it starts with '/'
  name: 'شهریار قاسم پور',
  bio: 'به دفترچه نوشته های من خوش اومدی:)  اینجا من قراره از تجربیات جدید و اتفاقاتی که داره میفته و کارهایی که میکنم بنویسم',
  links: [
    {
      name: 'X', // Replacing Twitter with X
      icon: 'fa6-brands:twitter', // Replace with the correct icon code for X if needed
      url: 'https://x.com/shahriaarrr',
    },
    {
      name: 'YouTube',
      icon: 'fa6-brands:youtube',
      url: 'https://www.youtube.com/@shahriaarrr', // Change to your YouTube channel URL
    },
    {
      name: 'LinkedIn',
      icon: 'fa6-brands:linkedin',
      url: 'https://www.linkedin.com/in/shahriaarrr', // Change to your LinkedIn profile URL
    },
    {
      name: 'Telegram Channel',
      icon: 'fa6-brands:telegram',
      url: 'https://t.me/shahriaarrr12', // Change to your Telegram URL
    },
    {
      name: 'Website',
      icon: 'fa6-solid:globe', // A globe icon to represent your website
      url: 'https://shahriaarrr.ir', // Replace with your actual website URL
    },
    {
      name: 'GitHub',
      icon: 'fa6-brands:github',
      url: 'https://github.com/saicaca/shahriaarrr',
    },
  ],
}

export const licenseConfig: LicenseConfig = {
  enable: true,
  name: 'CC BY-NC-SA 4.0',
  url: 'https://creativecommons.org/licenses/by-nc-sa/4.0/',
}
