Release Checklist Examples
===

Android
---
### Before building
- Comment out debug code on in MainActivity.java, line 17
  - This will change log setting from verbose to error only
- Increment the versionName and versionNumber in the manifest
- Commit release changes with a message indicating the same
- Ensure there are no other pending changes or unpushed commits
- Run project, smoke test, ensure no unknown or unexpected scripts are pulled in

### After building
- Sign the build with the store certificate
- Update build notes with current version number and major feature additions

### After deployment
- tag the release according to the [versioning for release doc](../master/pages/versioning_for_release.md)