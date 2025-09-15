#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🚀 Setting up Ayush Raj Portfolio...\n');

// Check if node_modules exists
if (!fs.existsSync('node_modules')) {
  console.log('📦 Installing dependencies...');
  const { execSync } = require('child_process');
  execSync('npm install', { stdio: 'inherit' });
  console.log('✅ Dependencies installed!\n');
}

console.log('🎨 Portfolio setup complete!');
console.log('\n📋 Next steps:');
console.log('1. Run "npm start" to start the development server');
console.log('2. Open http://localhost:3000 in your browser');
console.log('3. Customize the content in src/components/');
console.log('4. Deploy to Vercel, Netlify, or GitHub Pages');
console.log('\n🎉 Happy coding!');
