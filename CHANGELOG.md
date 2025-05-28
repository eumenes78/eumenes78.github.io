# Changelog

All notable changes to Francisco Lopez-Martin's Portfolio Website will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2025-05-28

### Added
- Cyberpunk-themed music player with full functionality:
  - Play/pause controls for cyberpunk.mp3 background music
  - Volume control with mute/unmute functionality
  - Collapsible player interface with toggle button
  - Animated equalizer visualization during playback
  - Keyboard shortcuts (Space for play/pause, M for mute)
  - Volume preference persistence using localStorage
  - Looping audio with error handling
  - Browser autoplay policy compliance
- Enhanced user experience with atmospheric background music
- Comprehensive music player testing suite

### Technical Improvements
- Audio element integration with proper error handling
- CSS-based equalizer animations with play/pause states
- Responsive music player design for all screen sizes
- Accessibility features with proper ARIA labels and keyboard navigation

## [1.0.0] - 2025-05-28

### Added
- Initial release of Francisco Lopez-Martin's cyberpunk-themed portfolio website
- Responsive single-page application design with five main sections:
  - Home with hero section and neural network animation
  - Digital Projects showcase with interactive cards
  - Academic CV with sidebar layout
  - Publications with filtering system
  - Course Materials section
- Cyberpunk color palette with neon green (#00ff88), hot pink (#ff0080), and cyan (#00ccff)
- Interactive JavaScript functionality:
  - Section navigation system
  - Mobile hamburger menu
  - Publication filtering by category
  - Neural network visualization with animated nodes and connections
  - Smooth transitions and hover effects
- Typography using Google Fonts (Orbitron for headings, Rajdhani for body)
- Responsive design with mobile-first approach
- Accessibility features:
  - Keyboard navigation support
  - Screen reader compatibility
  - High contrast design
  - Reduced motion support for users with vestibular disorders
- SEO optimization with meta tags and semantic HTML
- Jekyll configuration for GitHub Pages deployment
- GitHub Actions workflow for automated deployment
- Comprehensive documentation in README.md

### Technical Features
- CSS Grid and Flexbox for layout
- CSS Custom Properties for consistent theming
- Vanilla JavaScript (no external dependencies)
- Progressive enhancement approach
- Performance optimizations:
  - Lazy loading for images
  - Will-change properties for animated elements
  - Efficient CSS animations
- Print-friendly styles
- Cross-browser compatibility

### Content
- Academic profile for Francisco Lopez-Martin, Professor of Spanish at Denison University
- Digital humanities project showcases:
  - Cervantes Digital Archive
  - Golden Age Theater Network
  - Spanish Colonial Texts NLP Analysis
- Academic publications with filtering by:
  - All publications
  - Articles
  - Books & chapters
  - Digital humanities
  - Conference papers
- Course materials for digital humanities courses:
  - Digital Spanish Literature
  - Computational Text Analysis
  - Cultural Analytics
- Professional CV with timeline and skills

### Development Tools
- Jekyll static site generator
- GitHub Pages hosting
- GitHub Actions CI/CD
- Ruby/Bundler dependency management
- Local development server support

### Files Structure
```
├── index.html              # Main HTML file
├── _config.yml             # Jekyll configuration
├── Gemfile                 # Ruby dependencies
├── README.md               # Documentation
├── CHANGELOG.md            # This file
├── LICENSE                 # MIT License
├── favicon.svg             # Cyberpunk-themed favicon
├── deploy.sh               # Deployment script
├── .gitignore              # Git ignore rules
├── assets/
│   ├── css/
│   │   └── style.css       # Cyberpunk theme styles
│   └── js/
│       └── script.js       # Interactive functionality
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Actions workflow
```

### Browser Support
- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

---

## Future Releases

### Planned Features (v1.1.0)
- [ ] Blog section for digital humanities articles
- [ ] Contact form with email integration
- [ ] Dark/light theme toggle
- [ ] Advanced search functionality for publications
- [ ] Multi-language support (English/Spanish)
- [ ] Integration with academic databases (ORCID, Google Scholar)

### Planned Improvements (v1.2.0)
- [ ] Progressive Web App (PWA) capabilities
- [ ] Enhanced animation performance
- [ ] Social media integration
- [ ] RSS feed for publications
- [ ] Advanced analytics integration
- [ ] Content Management System integration

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Francisco Lopez-Martin**
- Professor of Spanish, Denison University
- Email: lopezf@denison.edu
- GitHub: [@eumenes78](https://github.com/eumenes78)

## Acknowledgments

- Cyberpunk aesthetic inspiration from modern UI design trends
- Jekyll and GitHub Pages communities
- Digital humanities community for content guidance
- Open source fonts and icons used in the project
