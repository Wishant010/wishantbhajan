const ghpages = require('gh-pages');
const fs = require('fs');
const path = require('path');

// Backup and temporarily replace .gitignore
const gitignorePath = path.join(__dirname, '.gitignore');
const backupPath = path.join(__dirname, '.gitignore.deploy-backup');

const originalGitignore = fs.readFileSync(gitignorePath, 'utf8');
fs.writeFileSync(backupPath, originalGitignore);

// Minimal gitignore that won't block assets
fs.writeFileSync(gitignorePath, 'node_modules\n');

console.log('Deploying to gh-pages...');

ghpages.publish('dist', {
  dotfiles: true,
  remove: '**/*'
}, (err) => {
  // Restore original .gitignore
  fs.writeFileSync(gitignorePath, originalGitignore);
  fs.unlinkSync(backupPath);
  
  if (err) {
    console.error('Deploy failed:', err);
    process.exit(1);
  } else {
    console.log('✅ Deploy successful!');
  }
});
