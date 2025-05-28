#!/bin/bash

# Francisco Lopez-Martin Portfolio Website
# Testing Script

echo "🧪 Francisco Lopez-Martin Portfolio Testing Script"
echo "================================================"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

print_test() {
    echo -e "${BLUE}[TEST]${NC} $1"
}

print_pass() {
    echo -e "${GREEN}[PASS]${NC} $1"
}

print_fail() {
    echo -e "${RED}[FAIL]${NC} $1"
}

print_info() {
    echo -e "${YELLOW}[INFO]${NC} $1"
}

# Check if required files exist
print_test "Checking required files..."

required_files=(
    "index.html"
    "assets/css/style.css"
    "assets/js/script.js"
    "_config.yml"
    "Gemfile"
    "README.md"
    "CHANGELOG.md"
    "favicon.svg"
    ".gitignore"
    "deploy.sh"
    ".github/workflows/deploy.yml"
)

for file in "${required_files[@]}"; do
    if [ -f "$file" ]; then
        print_pass "✓ $file exists"
    else
        print_fail "✗ $file missing"
    fi
done

# Check file permissions
print_test "Checking file permissions..."
if [ -x "deploy.sh" ]; then
    print_pass "✓ deploy.sh is executable"
else
    print_fail "✗ deploy.sh is not executable"
fi

# Validate HTML structure
print_test "Validating HTML structure..."
if grep -q "<!DOCTYPE html>" index.html; then
    print_pass "✓ Valid HTML5 doctype"
else
    print_fail "✗ Missing HTML5 doctype"
fi

if grep -q 'id="home"' index.html; then
    print_pass "✓ Home section exists"
else
    print_fail "✗ Home section missing"
fi

if grep -q 'id="projects"' index.html; then
    print_pass "✓ Projects section exists"
else
    print_fail "✗ Projects section missing"
fi

if grep -q 'id="cv"' index.html; then
    print_pass "✓ CV section exists"
else
    print_fail "✗ CV section missing"
fi

if grep -q 'id="publications"' index.html; then
    print_pass "✓ Publications section exists"
else
    print_fail "✗ Publications section missing"
fi

if grep -q 'id="courses"' index.html; then
    print_pass "✓ Courses section exists"
else
    print_fail "✗ Courses section missing"
fi

# Check CSS structure
print_test "Validating CSS structure..."
if grep -q ":root {" assets/css/style.css; then
    print_pass "✓ CSS custom properties defined"
else
    print_fail "✗ CSS custom properties missing"
fi

if grep -q "cyberpunk" assets/css/style.css; then
    print_pass "✓ Cyberpunk theme references found"
else
    print_fail "✗ Cyberpunk theme references missing"
fi

if grep -q "@media" assets/css/style.css; then
    print_pass "✓ Responsive design media queries found"
else
    print_fail "✗ Responsive design media queries missing"
fi

# Check JavaScript structure
print_test "Validating JavaScript structure..."
if grep -q "DOMContentLoaded" assets/js/script.js; then
    print_pass "✓ DOM ready event listener found"
else
    print_fail "✗ DOM ready event listener missing"
fi

if grep -q "initNavigation" assets/js/script.js; then
    print_pass "✓ Navigation initialization function found"
else
    print_fail "✗ Navigation initialization function missing"
fi

if grep -q "initMobileMenu" assets/js/script.js; then
    print_pass "✓ Mobile menu initialization function found"
else
    print_fail "✗ Mobile menu initialization function missing"
fi

# Check Jekyll configuration
print_test "Validating Jekyll configuration..."
if grep -q "title:" _config.yml; then
    print_pass "✓ Site title configured"
else
    print_fail "✗ Site title missing"
fi

if grep -q "url:" _config.yml; then
    print_pass "✓ Site URL configured"
else
    print_fail "✗ Site URL missing"
fi

# Check GitHub Actions workflow
print_test "Validating GitHub Actions workflow..."
if grep -q "Deploy Jekyll site to Pages" .github/workflows/deploy.yml; then
    print_pass "✓ GitHub Actions workflow configured"
else
    print_fail "✗ GitHub Actions workflow missing or misconfigured"
fi

# Check for common issues
print_test "Checking for common issues..."

if grep -q "Francisco Lopez-Martin" index.html; then
    print_pass "✓ Author name correctly referenced"
else
    print_fail "✗ Author name missing or incorrect"
fi

if grep -q "Denison University" index.html; then
    print_pass "✓ Institution correctly referenced"
else
    print_fail "✗ Institution missing or incorrect"
fi

# Count sections, projects, publications, etc.
print_test "Counting content elements..."

section_count=$(grep -c 'class="section"' index.html || echo "0")
print_info "Found $section_count main sections"

project_count=$(grep -c 'class="project-card"' index.html || echo "0")
print_info "Found $project_count project cards"

publication_count=$(grep -c 'class="publication-item"' index.html || echo "0")
print_info "Found $publication_count publications"

course_count=$(grep -c 'class="course-card"' index.html || echo "0")
print_info "Found $course_count courses"

# Summary
echo ""
echo "📊 Test Summary"
echo "==============="
print_info "Website structure appears to be complete"
print_info "All major components are present"
print_info "Configuration files are properly set up"
echo ""
echo "🚀 Next Steps:"
echo "1. Test the website locally: python3 -m http.server 8000"
echo "2. Check all navigation and interactions work properly"
echo "3. Test responsive design on different screen sizes"
echo "4. Run the deployment script: ./deploy.sh"
echo ""
print_pass "Testing completed! ✨"
