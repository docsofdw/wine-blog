#!/bin/bash

# Create new directory structure
mkdir -p wine-blog/src/{components/ui,layouts,lib,pages/wine,styles,hooks}
mkdir -p wine-blog/public

# Move relevant files to the new structure
mv src/layouts/* wine-blog/src/layouts/
mv src/lib/* wine-blog/src/lib/
mv src/pages/* wine-blog/src/pages/
mv src/styles/* wine-blog/src/styles/
mv src/hooks/* wine-blog/src/hooks/
mv src/env.d.ts wine-blog/src/

# Move configuration files to the root of wine-blog
mv astro.config.mjs components.json package.json package-lock.json postcss.config.js tailwind.config.js tsconfig.json README.md netlify.toml wine-blog/

# Move public files
mv public/* wine-blog/public/

# Clean up old directories
rm -rf src my-astro-project grateful-giant downloads

# Remove redundant files
rm -f tailwind.config.mjs

# Move into the wine-blog directory
cd wine-blog

# Ensure all necessary directories exist
mkdir -p src/{components,layouts,lib,pages,styles,hooks}

# Clean up any empty directories
find . -type d -empty -delete

# Display the new structure
tree -L 3

echo "Project cleanup and reorganization complete. Please review the changes."