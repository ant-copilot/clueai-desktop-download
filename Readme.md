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

## How it Works

When you add a new application installer to the `releases` directory and push the changes to the `main` branch, a GitHub Actions workflow is triggered. This workflow automatically:

1.  Creates a new GitHub Release.
2.  Determines the version number from the installer's filename (e.g., `AppName-1.2.3.exe` becomes `v1.2.3`). If no version is found, it uses a timestamp.
3.  Attaches all the installers from the `releases` directory as assets to the new release.

## Your Workflow

1.  **Add Installers:** Place your new application installers (`.exe`, `.dmg`, `.AppImage`, etc.) into the appropriate subdirectories within the `releases` folder (`releases/windows`, `releases/macos`, `releases/linux`). The filename should include the version number, like `AppName-1.2.3.exe`.
2.  **Commit and Push:** Commit the new installer files to the `main` branch.
    ```bash
    git add releases/
    git commit -m "Add new version of ClueAI"
    git push origin main
    ```
3.  **Automatic Release:** The GitHub Action will run and create a new release with your installers attached. You can then find the direct download links on the "Releases" page of this repository.