# Francisco Lopez-Martin Portfolio Website

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Jekyll](https://img.shields.io/badge/Jekyll-4.3-red.svg)](https://jekyllrb.com/)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen.svg)](https://eumenes78.github.io)

A responsive, cyberpunk-themed portfolio website for Francisco Lopez-Martin, Professor of Spanish at Denison University. This site showcases digital humanities projects, academic publications, and course materials with a modern, interactive design.

🌐 **Live Site:** [https://eumenes78.github.io](https://eumenes78.github.io)

## Features

### 🎨 Design & User Experience
- **Cyberpunk Aesthetic**: Neon color palette with green (#00ff88), pink (#ff0080), and cyan (#00ccff)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Animations**: Neural network visualization and smooth transitions
- **Accessibility**: Keyboard navigation, screen reader support, and reduced motion options
- **Performance Optimized**: Lazy loading, efficient animations, and minimal bundle size

### 📱 Technical Features
- **Single Page Application**: Smooth section transitions without page reloads
- **Mobile-First Design**: Collapsible navigation and touch-friendly interactions
- **Publication Filtering**: Dynamic filtering system for academic publications
- **Cyberpunk Music Player**: Interactive audio player with volume controls and equalizer visualization
- **Dark Theme**: Cyberpunk-inspired dark color scheme
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

### 🎵 Music Player Features
- **Play/Pause Controls**: Toggle background music with cyberpunk atmosphere
- **Volume Control**: Adjustable volume with mute/unmute functionality
- **Collapsible Interface**: Minimizable player that doesn't interfere with content
- **Equalizer Visualization**: Animated bars that respond to play/pause state
- **Keyboard Shortcuts**: Space bar for play/pause, M key for mute/unmute
- **Persistent Settings**: Volume preferences saved across sessions
- **Responsive Design**: Optimized for all screen sizes and devices

### 🎓 Academic Content
- **Digital Projects**: Showcase of computational literary analysis projects
- **CV Section**: Academic appointments, education, and professional achievements
- **Publications**: Filterable list of research papers and academic contributions
- **Course Materials**: Digital humanities courses and teaching resources

## Quick Start

This repository is set up to work with GitHub Pages. Any changes pushed to the main branch will automatically be deployed to the live site.

### Local Development

To run this site locally:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/eumenes78/eumenes78.github.io.git
   cd eumenes78.github.io
   ```

2. **Install dependencies:**
   ```bash
   # Install Ruby and Bundler (if not already installed)
   # On macOS with Homebrew:
   brew install ruby
   
   # Install Jekyll and dependencies
   bundle install
   ```

3. **Serve the site locally:**
   ```bash
   bundle exec jekyll serve --livereload
   ```

4. **Open your browser and navigate to:** `http://localhost:4000`

The `--livereload` flag automatically refreshes the browser when you make changes.

### Project Structure

```
eumenes78.github.io/
├── index.html              # Main HTML file with all sections
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
├── README.md               # This documentation
├── LICENSE                 # MIT License
├── assets/
│   ├── css/
│   │   └── style.css       # Cyberpunk theme styles
│   └── js/
│       └── script.js       # Interactive functionality
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions deployment
```

## 🛠 Technologies Used

- **Frontend**: HTML5, CSS3 (Grid/Flexbox), Vanilla JavaScript
- **Fonts**: Google Fonts (Orbitron, Rajdhani)
- **Icons**: Font Awesome 6
- **Build**: Jekyll Static Site Generator
- **Deployment**: GitHub Pages with GitHub Actions
- **Styling**: CSS Custom Properties, CSS Animations
- **Responsive**: Mobile-first approach with CSS Grid

## 📝 Content Management

### Adding New Projects

To add a new digital project, edit the `#projects` section in `index.html`:

```html
<div class="project-card">
    <div class="project-header">
        <h3>Your Project Title</h3>
        <div class="project-tech">
            <span class="tech-tag">Python</span>
            <span class="tech-tag">NLP</span>
        </div>
    </div>
    <p class="project-description">Your project description...</p>
    <div class="project-links">
        <a href="#" class="btn btn-primary">
            <i class="fab fa-github"></i> Code
        </a>
        <a href="#" class="btn btn-secondary">
            <i class="fas fa-external-link-alt"></i> Demo
        </a>
    </div>
</div>
```

### Adding Publications

Add new publications to the `#publications` section with appropriate data attributes for filtering:

```html
<div class="publication-item" data-category="article digital-humanities">
    <div class="publication-header">
        <h3>Publication Title</h3>
        <span class="publication-type">Journal Article</span>
    </div>
    <p class="publication-details">
        <strong>Journal Name</strong>, Vol. X, No. Y (Year), pp. 1-20.
    </p>
    <p class="publication-abstract">Abstract text...</p>
    <div class="publication-links">
        <a href="#" class="btn btn-primary">
            <i class="fas fa-file-pdf"></i> PDF
        </a>
        <a href="#" class="btn btn-secondary">
            <i class="fas fa-external-link-alt"></i> DOI
        </a>
    </div>
</div>
```

## 🚀 Deployment

### Automatic Deployment (Recommended)

This site uses GitHub Actions for automatic deployment:

1. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Set Source to "GitHub Actions"

2. **Push changes to main branch:**
   ```bash
   git add .
   git commit -m "Update content"
   git push origin main
   ```

3. **Monitor deployment:**
   - Check the Actions tab for build status
   - Site will be live at `https://eumenes78.github.io`

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the site
bundle exec jekyll build

# The built site will be in _site/ directory
# Upload contents to your web server
```

## 🎨 Customization

### Color Scheme

The cyberpunk theme uses CSS custom properties in `assets/css/style.css`:

```css
:root {
    --primary-color: #00ff88;      /* Neon green */
    --secondary-color: #ff0080;    /* Hot pink */
    --accent-color: #00ccff;       /* Cyan */
    --bg-primary: #0a0a0a;         /* Dark background */
    --bg-secondary: #1a1a1a;       /* Card backgrounds */
}
```

### Typography

Two Google Fonts are used:
- **Orbitron**: For headings and tech elements
- **Rajdhani**: For body text and descriptions

### Animations

The site includes several CSS animations:
- Neural network visualization in hero section
- Card hover effects with glow
- Smooth section transitions
- Skill bar animations

## 🔧 Browser Support

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

Graceful degradation for older browsers with fallbacks for:
- CSS Grid → Flexbox
- CSS Custom Properties → Fixed values
- CSS Animations → Static states

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## ♿ Accessibility Features

- Semantic HTML structure
- Keyboard navigation support
- Screen reader compatibility
- High contrast color scheme
- Reduced motion support (`prefers-reduced-motion`)
- Focus indicators
- Alt text for images

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

While this is a personal portfolio site, suggestions and improvements are welcome:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

**Francisco Lopez-Martin**
- 📧 Email: lopezf@denison.edu
- 🏛️ Institution: Denison University
- 🔗 GitHub: [@eumenes78](https://github.com/eumenes78)

---

*Built with ❤️ and lots of ☕ using Jekyll and GitHub Pages*

## Contributing

While this is a personal website, I welcome suggestions and feedback! Feel free to:

- Open an issue for bug reports or feature requests
- Submit a pull request with improvements
- Reach out via the contact information on the website

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

- GitHub: [@eumenes78](https://github.com/eumenes78)
- Website: [https://eumenes78.github.io](https://eumenes78.github.io)

---

⭐ If you found this repository helpful, please consider giving it a star!
