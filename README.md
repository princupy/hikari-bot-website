<div align="center">

# 🎵 Hikari & Akari - Discord Music Bots

<img src="https://img.shields.io/badge/Next.js-15.0-black?style=for-the-badge&logo=next.js" />
<img src="https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript" />
<img src="https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css" />
<img src="https://img.shields.io/badge/Framer_Motion-11.0-ff0055?style=for-the-badge&logo=framer" />
<img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=for-the-badge&logo=vercel" />

**Premium Discord music bots with high-quality streaming and advanced features**

[🌐 Live Demo](https://hikari-bot-website.vercel.app) • [📚 Documentation](#features) • [🚀 Deploy](#deployment) • [💬 Support](#support)

<img src="https://raw.githubusercontent.com/andreasbm/readme/master/assets/lines/rainbow.png" />

</div>

## 📋 Table of Contents

- [✨ Features](#-features)
- [🎨 Tech Stack](#-tech-stack)
- [🚀 Quick Start](#-quick-start)
- [📁 Project Structure](#-project-structure)
- [🎯 Usage](#-usage)
- [🌐 Deployment](#-deployment)
- [🎨 Customization](#-customization)
- [📸 Screenshots](#-screenshots)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [💬 Support](#-support)

## ✨ Features

### 🎵 **Hikari - Free Music Bot**
- 🎶 High-quality music streaming (128kbps)
- 📜 Queue management (up to 50 songs)
- 🎛️ Basic audio filters (5+)
- 🔊 Volume control
- ⏯️ Play, pause, skip, resume controls
- 📱 Responsive Discord embeds
- 🌸 Beautiful cherry blossom theme

### ⭐ **Akari - Premium Music Bot**
- 💎 Ultra HD audio quality (320kbps)
- ∞ Unlimited queue and playlists
- 🎚️ Advanced audio filters (20+)
- 🎵 Spotify integration
- 📝 Live lyrics display
- 🤖 AI song recommendations
- ⚡ Priority response time
- 🛡️ 99.99% uptime guarantee
- 💜 Premium purple/blue gradient theme

### 🌐 **Website Features**
- 🎨 Modern, animated UI with Framer Motion
- 🎵 Built-in background music player with controls
- 📊 Live statistics dashboard
- 💬 Interactive command simulator
- 📱 Fully responsive design (mobile-optimized)
- 🌙 Dark mode optimized
- ⚡ Lightning-fast performance
- 🎭 Smooth page transitions
- 🌸 Animated cherry blossom effects
- ✨ Particle systems and sparkles

## 🎨 Tech Stack

### **Frontend Framework**
- ⚛️ **Next.js 15.0** - React framework with App Router
- 🔷 **TypeScript 5.0** - Type-safe development
- ⚡ **React 18** - Latest React features

### **Styling & Animation**
- 🎨 **Tailwind CSS 3.4** - Utility-first CSS framework
- 🎭 **Framer Motion 11.0** - Production-ready animations
- 💫 Custom gradient effects
- 🌸 Particle systems

### **UI Components**
- 🎵 Custom music player with visualizer
- 📊 Interactive statistics
- 💬 Command terminal simulator
- 🎨 Dynamic gradient backgrounds
- ✨ Animated sparkle effects

### **Icons & Assets**
- 🎨 **Heroicons** - Beautiful hand-crafted icons
- 🖼️ Custom SVG illustrations

### **Deployment**
- 🚀 **Vercel** - Serverless deployment platform
- 🌐 Global CDN distribution
- 🔒 Automatic HTTPS/SSL
- 📈 Built-in analytics

## 🚀 Quick Start

### **Prerequisites**

```bash
Node.js 18.0 or higher
npm, yarn, or pnpm package manager
Git
```

### **Installation**

```bash
# Clone the repository
git clone https://github.com/princupy/hikari-bot-website.git

# Navigate to project directory
cd hikari-bot-website

# Install dependencies
npm install
# or
yarn install
# or
pnpm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site in your browser.

### **Build for Production**

```bash
# Create optimized production build
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## 📁 Project Structure

```
hikari-bot-website/
│
├── 📁 app/                              # Next.js App Router
│   ├── 📄 layout.tsx                   # Root layout with metadata
│   ├── 📄 page.tsx                     # Homepage (Hikari)
│   ├── 📄 globals.css                  # Global styles & Tailwind
│   ├── 📄 icon.png                     # Favicon/app icon
│   │
│   ├── 📁 premium/                     # Premium section (Akari)
│   │   ├── 📄 page.tsx                # Premium homepage
│   │   └── 📁 commands/               # Commands documentation
│   │       └── 📄 page.tsx
│   │
│   └── 📁 support/                     # Support & help
│       └── 📄 page.tsx
│
├── 📁 components/                       # React components
│   ├── 🎨 Navbar.tsx                  # Navigation bar
│   ├── 🎨 Footer.tsx                  # Footer component
│   ├── 🎨 Hero.tsx                    # Hero section
│   ├── 🎨 Features.tsx                # Features grid
│   ├── 🎨 Stats.tsx                   # Statistics display
│   ├── 🎵 BackgroundMusicPlayer.tsx   # Music player with controls
│   ├── 🌸 CherryBlossom.tsx           # Cherry blossom animation
│   ├── ✨ AkariSparkles.tsx           # Sparkle particle effects
│   └── 💬 SimpleCommandDemo.tsx        # Command simulator
│
├── 📁 public/                           # Static assets
│   ├── 📁 music/                       # Background music files
│   │   ├── song1.mp3
│   │   ├── song2.mp3
│   │   └── song3.mp3
│   └── 🖼️ images/                     # Images and icons
│
├── 📄 package.json                      # Dependencies & scripts
├── 📄 tailwind.config.ts               # Tailwind configuration
├── 📄 tsconfig.json                    # TypeScript configuration
├── 📄 next.config.js                   # Next.js configuration
├── 📄 .gitignore                       # Git ignore rules
├── 📄 README.md                        # This file
└── 📄 LICENSE                          # MIT License
```

## 🎯 Usage

### **Development Commands**

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run ESLint
npm run lint

# Type check
npx tsc --noEmit
```

### **Adding Custom Music**

1. **Add MP3 files** to `public/music/` folder
2. **Update playlist** in `components/BackgroundMusicPlayer.tsx`:

```typescript
const playlist: Song[] = [
  {
    title: 'Your Song Name',
    artist: 'Artist Name',
    url: '/music/your-song.mp3',
    cover: '🎵',
  },
  // Add more songs...
];
```

### **Updating Bot Invite Links**

Replace bot IDs in these files:
- `components/Navbar.tsx` (line ~50)
- `app/page.tsx` (Hero section)
- `app/premium/page.tsx` (CTA buttons)

```typescript
// Update this URL
const HIKARI_INVITE = 'https://discord.com/oauth2/authorize?client_id=1388435176610336868&permissions=321751086336768&integration_type=0&scope=bot';
const AKARI_INVITE = 'https://discord.com/oauth2/authorize?client_id=1426105190196707399&permissions=321751086336768&integration_type=0&scope=bot';
```

### **Customizing Bot Statistics**

Update stats in respective page files:

```typescript
const stats = [
  { label: 'Servers', value: '10K+' },
  { label: 'Users', value: '500K+' },
  { label: 'Songs Played', value: '50M+' },
  // Update with your bot's actual stats
];
```

## 🌐 Deployment

### **Deploy to Vercel (Recommended)**

**One-Click Deploy:**

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/princupy/hikari-bot-website)

**Manual Deployment:**

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### **Deploy to Netlify**

```bash
# Build settings
Build command: npm run build
Publish directory: .next
```

### **Deploy to GitHub Pages**

```bash
# Install static export package
npm install -D @next/static-export

# Add to package.json scripts
"export": "next build && next export"

# Build and export
npm run export

# Deploy 'out' folder to GitHub Pages
```

### **Environment Variables**

If using API keys or secrets, add to Vercel:

```bash
# In Vercel Dashboard → Project Settings → Environment Variables
NEXT_PUBLIC_DISCORD_CLIENT_ID=your_client_id
NEXT_PUBLIC_API_URL=your_api_url
```

## 🎨 Customization

### **Color Themes**

Edit `app/globals.css` to change brand colors:

```css
/* Hikari Theme (Pink/Purple) */
.gradient-text {
  background: linear-gradient(to right, #ec4899, #a855f7);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Akari Theme (Purple/Blue) */
.gradient-text-akari {
  background: linear-gradient(to right, #a855f7, #3b82f6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Custom colors */
.glow-pink {
  box-shadow: 0 0 20px rgba(236, 72, 153, 0.5);
}

.glow-purple {
  box-shadow: 0 0 20px rgba(168, 85, 247, 0.5);
}
```

### **Animation Speeds**

Modify animation durations in component files:

```typescript
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }} // ← Adjust this
>
  Your content
</motion.div>
```

### **Typography**

Change fonts in `app/layout.tsx`:

```typescript
import { Inter, Poppins } from 'next/font/google';

const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['400', '600', '700']
});
```

### **Metadata & SEO**

Update in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: 'Your Bot Name - Discord Music Bot',
  description: 'Your custom description here',
  keywords: ['discord', 'music', 'bot'],
  // Add more SEO metadata
};
```

## 📸 Screenshots

<div align="center">

### 🏠 Homepage (Hikari)
*Beautiful landing page with animated hero section*

### ⭐ Premium Page (Akari)
*Premium features showcase with comparison table*

### 📚 Commands Page
*Complete command documentation with categories*

### 💬 Support Page
*Interactive support options with FAQ*

### 🎵 Music Player
*Floating music player with playlist and controls*

</div>

## 🤝 Contributing

Contributions are always welcome! Here's how you can help:

### **How to Contribute**

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### **Contribution Guidelines**

- ✅ Use TypeScript for all new files
- ✅ Follow existing code formatting
- ✅ Add comments for complex logic
- ✅ Test responsiveness on mobile devices
- ✅ Update documentation as needed
- ✅ Keep commits atomic and descriptive

### **Code Style**

```typescript
// Use descriptive variable names
const userPlaylist = [];

// Add JSDoc comments for functions
/**
 * Fetches user's favorite songs
 * @param userId - The Discord user ID
 * @returns Array of song objects
 */
function getUserSongs(userId: string) {
  // Implementation
}

// Use TypeScript interfaces
interface Song {
  title: string;
  artist: string;
  duration: number;
}
```

## 📄 License

This project is licensed under the **MIT License**.

```
MIT License

Copyright (c) 2025 Hikari & Akari Discord Bots

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

See the [LICENSE](LICENSE) file for full details.

## 💬 Support

Need help? We're here for you! 💜

### **Contact Options**

- 📧 **Email:** support@hikaribot.com
- 💬 **Discord:** [Join our server](https://discord.gg/thelastride)
- 🐛 **Bug Reports:** [GitHub Issues](https://github.com/princupy/hikari-bot-website/issues)
- 💡 **Feature Requests:** [GitHub Discussions](https://github.com/princupy/hikari-bot-website/discussions)
- 📖 **Documentation:** [Wiki](https://github.com/princupy/hikari-bot-website/wiki)

### **FAQ**

**Q: How do I add my own music to the player?**  
A: Add MP3 files to `public/music/` and update the playlist in `BackgroundMusicPlayer.tsx`

**Q: Can I use this for my own bot?**  
A: Yes! It's open source under MIT license. Just update the bot details and deploy.

**Q: Is backend required?**  
A: No! This is a pure frontend website. All features work without a backend.

**Q: How do I change colors?**  
A: Edit the gradients in `app/globals.css` and Tailwind config.

## 🌟 Acknowledgments

Special thanks to:

- **Next.js Team** - For the amazing React framework
- **Vercel** - For the incredible hosting platform
- **Tailwind CSS** - For the utility-first CSS framework
- **Framer Motion** - For the smooth animation library
- **Heroicons** - For the beautiful icon set
- **Open Source Community** - For inspiration and support

## 📊 Project Stats

<div align="center">

![GitHub stars](https://img.shields.io/github/stars/princupy/hikari-bot-website?style=social)
![GitHub forks](https://img.shields.io/github/forks/princupy/hikari-bot-website?style=social)
![GitHub watchers](https://img.shields.io/github/watchers/princupy/hikari-bot-website?style=social)
![GitHub issues](https://img.shields.io/github/issues/princupy/hikari-bot-website)
![GitHub pull requests](https://img.shields.io/github/issues-pr/princupy/hikari-bot-website)
![GitHub last commit](https://img.shields.io/github/last-commit/princupy/hikari-bot-website)
![GitHub code size](https://img.shields.io/github/languages/code-size/princupy/hikari-bot-website)

</div>

## 🗺️ Roadmap

### **Completed ✅**
- [x] Initial website launch
- [x] Hikari free bot section
- [x] Akari premium bot section
- [x] Background music player
- [x] Interactive animations
- [x] Mobile responsive design
- [x] Commands documentation
- [x] Support page

### **In Progress 🚧**
- [ ] User authentication dashboard
- [ ] Bot statistics API integration
- [ ] Real-time server count display

### **Planned 📋**
- [ ] Multi-language support (Hindi, Spanish, French)
- [ ] Blog section for updates
- [ ] Advanced analytics dashboard
- [ ] User playlist sharing
- [ ] Discord OAuth integration
- [ ] Premium subscription system
- [ ] Community features
- [ ] Mobile app version

## 💻 Development Tips

### **Performance Optimization**

```bash
# Analyze bundle size
npm run build
npx @next/bundle-analyzer

# Optimize images
npm install sharp
# Images auto-optimized by Next.js
```

### **Debugging**

```typescript
// Enable verbose logging
export const dynamic = 'force-dynamic';

// Add error boundaries
// In app/error.tsx
'use client';
export default function Error({ error, reset }) {
  return <div>Error: {error.message}</div>;
}
```

### **Testing**

```bash
# Add testing libraries
npm install -D @testing-library/react @testing-library/jest-dom jest

# Run tests
npm test
```

## 💖 Show Your Support

If this project helped you, please consider:

- ⭐ **Star this repository** on GitHub
- 🐛 **Report bugs** to help improve the project
- 💡 **Suggest features** you'd like to see
- 🔀 **Fork and contribute** your improvements
- 📢 **Share** with other Discord bot developers

## 👨‍💻 Author

**Your Name**

- GitHub: [@princupy](https://github.com/princupy)
- Discord: _itsme_prince#0000
- Instagram: [yourwebsite.com](https://www.instagram.com/tanmoy_here8388/)

## 🎯 Built With

This project was built with ❤️ using:

- ☕ Coffee
- 🎵 Good Music
- 🌙 Late Nights
- 💻 Passion for Coding

---

<div align="center">

### 🎵 **Made with ❤️ for the Discord Community** 🎵

**If you found this helpful, give it a ⭐!**

[⬆ Back to Top](#-hikari--akari---discord-music-bots)

</div>
