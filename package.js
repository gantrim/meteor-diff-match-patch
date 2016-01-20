Package.describe({
  name: 'gantrim:diff-match-patch',
  version: '0.1.0',
  summary: 'Makes the diff_match_patch_function available in your meteor app.',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gantrim/meteor-diff-match-patch',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.addFiles('lib/diff_match_patch.js');
});
