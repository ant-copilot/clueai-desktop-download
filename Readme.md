# ClueAI Desktop Download

A desktop application for ClueAI.

## Prerequisites

- Node.js 18 or higher
- npm

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd clueai-desktop-download
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

## Development

To start development:
```bash
npm start
```

## Building

To build the application:
```bash
npm run build
```

## Release

### Automated Release (Recommended)

The project uses GitHub Actions for automated releases. To create a new release:

1. Create and push a new tag:
   ```bash
   git tag v1.0.0
   git push origin v1.0.0
   ```

2. The GitHub Actions workflow will automatically:
   - Build the application for Windows, macOS, and Linux
   - Create a GitHub release with the built artifacts

### Manual Release

To manually build and release:
```bash
npm run release
```

**Note:** Manual releases require a `GITHUB_TOKEN` environment variable for publishing to GitHub.

## Supported Platforms

- Windows (windows-latest)
- macOS (macos-latest)
- Linux (ubuntu-latest)

## Scripts

- `npm start` - Start development server
- `npm run build` - Build the application
- `npm run release` - Build and create release
- `npm ci` - Install dependencies