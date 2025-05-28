#!/bin/bash

# Francisco Lopez-Martin Portfolio Website
# Deployment Script for GitHub Pages

set -e  # Exit on any error

echo "🚀 Francisco Lopez-Martin Portfolio Deployment Script"
echo "=================================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "index.html" ] || [ ! -f "_config.yml" ]; then
    print_error "This script must be run from the root of the portfolio website directory"
    exit 1
fi

print_status "Checking prerequisites..."

# Check if git is installed and repo is initialized
if ! command -v git &> /dev/null; then
    print_error "Git is not installed. Please install Git first."
    exit 1
fi

# Check if this is a git repository
if [ ! -d ".git" ]; then
    print_error "This is not a Git repository. Please initialize with 'git init' first."
    exit 1
fi

# Check git remote
if ! git remote get-url origin &> /dev/null; then
    print_warning "No Git remote 'origin' found. You may need to add one:"
    echo "git remote add origin https://github.com/eumenes78/eumenes78.github.io.git"
fi

print_success "Prerequisites check completed"

# Check for uncommitted changes
if ! git diff-index --quiet HEAD -- 2>/dev/null; then
    print_warning "You have uncommitted changes. Here's what will be committed:"
    git status --porcelain
    echo ""
    read -p "Do you want to continue and commit these changes? (y/N): " -n 1 -r
    echo ""
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        print_error "Deployment cancelled by user"
        exit 1
    fi
fi

# Add all files and commit
print_status "Adding files to Git..."
git add .

# Get commit message from user or use default
echo ""
read -p "Enter commit message (or press Enter for default): " commit_message
if [ -z "$commit_message" ]; then
    commit_message="Update portfolio website - $(date '+%Y-%m-%d %H:%M:%S')"
fi

print_status "Committing changes..."
git commit -m "$commit_message" || print_warning "Nothing to commit"

# Push to GitHub
print_status "Pushing to GitHub..."
if git push origin main; then
    print_success "Successfully pushed to GitHub!"
else
    print_error "Failed to push to GitHub. Check your remote configuration."
    exit 1
fi

# Check if GitHub Pages is enabled
print_status "Deployment completed!"
echo ""
echo "📋 Next Steps:"
echo "1. Go to https://github.com/eumenes78/eumenes78.github.io/settings/pages"
echo "2. Set Source to 'GitHub Actions' if not already set"
echo "3. Wait for the GitHub Actions workflow to complete (check the Actions tab)"
echo "4. Your site will be available at: https://eumenes78.github.io"
echo ""
echo "🔧 Local Development:"
echo "To test locally: python3 -m http.server 8000"
echo "Then visit: http://localhost:8000"
echo ""
echo "📊 Check deployment status:"
echo "https://github.com/eumenes78/eumenes78.github.io/actions"

print_success "Deployment script completed successfully! 🎉"
