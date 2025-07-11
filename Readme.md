# ClueAI Desktop Download Page

This project provides a simple, static landing page to download the ClueAI desktop application. It automatically detects the user's operating system and provides the appropriate download link.

## How it Works

The `public/index.html` file contains the logic to determine the user's OS (Windows, macOS, or Linux) and points them to the correct application installer hosted on GitHub Releases.

## Setup

1.  **Update Links:** Open `public/index.html` and replace `your-username` in the `repoUrl` variable with the GitHub username or organization that owns the `clueai-desktop` repository.
2.  **Host the Page:** Deploy the contents of the `public` directory to a static hosting service like GitHub Pages, Netlify, or Vercel.
3.  **Create Releases:** Ensure that you have a public repository for your desktop application (e.g., `clueai-desktop`) with releases that contain the installer files (e.g., `.exe`, `.dmg`, `.AppImage`). The links in `index.html` must point to these release assets.

# ClueAI Desktop Application Releases

This repository is used to host and manage the releases for the ClueAI desktop application. It uses GitHub Actions to automate the creation of releases when new application installers are added.

## Directory Structure

The `releases` directory is organized by operating system and architecture:

```
releases/
├── linuxos/
│   ├── arm64/    # Linux ARM64 builds (.AppImage, .deb, .rpm)
│   └── x64/      # Linux x64 builds (.AppImage, .deb, .rpm)
├── macos/
│   ├── arm64/    # macOS Apple Silicon builds (.dmg)
│   └── x64/      # macOS Intel builds (.dmg)
└── windowos/
    ├── arm64/    # Windows ARM64 builds (.exe)
    ├── ia32/     # Windows 32-bit builds (.exe)
    └── x64/      # Windows 64-bit builds (.exe)
```

## How it Works

When you add a new application installer to any subdirectory in the `releases` folder and push the changes to the `main` branch, a GitHub Actions workflow is triggered. This workflow automatically:

1.  Creates a new GitHub Release.
2.  Determines the version number from the installer's filename (e.g., `AppName-1.2.3.exe` becomes `v1.2.3`). If no version is found, it uses a timestamp.
3.  Attaches all the installers from the `releases` directory as assets to the new release.

## Your Workflow

1.  **Add Installers:** Place your new application installers into the appropriate subdirectories within the `releases` folder based on the target OS and architecture. The filename should include the version number, like `AppName-1.2.3.exe`.

   Examples:
   - Windows 64-bit: `releases/windowos/x64/ClueAI-1.2.3.exe`
   - macOS Apple Silicon: `releases/macos/arm64/ClueAI-1.2.3.dmg`
   - Linux x64: `releases/linuxos/x64/ClueAI-1.2.3.AppImage`

2.  **Commit and Push:** Commit the new installer files to the `main` branch.
    ```bash
    git add releases/
    git commit -m "Add new version of ClueAI v1.2.3"
    git push origin main
    ```
    ```bash
      git add . && git commit -m "Fix workflow: remove empty file and add proper release settings" && git push origin main

    ```
3.  **Automatic Release:** The GitHub Action will run and create a new release with your installers attached. You can then find the direct download links on the "Releases" page of this repository.

## Download Links

After a release is created, users can download the appropriate version using direct links like:
- Windows x64: `https://github.com/ant-copilot/clueai-desktop-download/releases/download/v1.2.3/ClueAI-1.2.3.exe`
- macOS ARM64: `https://github.com/ant-copilot/clueai-desktop-download/releases/download/v1.2.3/ClueAI-1.2.3.dmg`
- Linux x64: `https://github.com/ant-copilot/clueai-desktop-download/releases/download/v1.2.3/ClueAI-1.2.3.AppImage`

## Deleting a Release (Advanced)

Permanently deleting a release and its associated files is a two-step process. This is a destructive action that will rewrite your repository's history.

### Step 1: Delete the Release on GitHub

1.  Go to the **Releases** page of this repository.
2.  Find the release you want to delete.
3.  Click the **...** menu next to the release title and select **Delete**. This will remove the release and its assets.

### Step 2: Remove Files from Git History

Deleting the release does not remove the installer files from your repository's history. To do that, you'll need to use a tool like `git-filter-repo`.

**Warning:** This will rewrite your Git history. All collaborators will need to fetch the updated history.

1.  **Install `git-filter-repo`:**
    ```bash
    pip install git-filter-repo
    ```

2.  **Remove Files from Git History:** Run the following command, replacing the path with the actual path to the installer you want to remove.
    ```bash
    git filter-repo --path releases/windowos/x64/AppName-1.2.3.exe --invert-paths
    ```
    You will need to run this command for each installer file associated with the deleted release.

3.  **Force-push the changes:**
    ```bash
    git push origin main --force
    ```