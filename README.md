# Syncron Security Awareness Scavenger Hunt

An interactive security awareness scavenger hunt application built with React, TypeScript, and Vite.

## Deployment to Vercel

This project is configured for easy deployment to Vercel with zero configuration needed. Follow these steps for a successful deployment:

### Prerequisites
1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Create a free account at [vercel.com](https://vercel.com)

### Deployment Steps
1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "New Project"
3. Import your Git repository
4. Vercel will automatically detect this is a Vite project
5. Keep the default settings:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
6. Click "Deploy"

### Configuration
This project includes a `vercel.json` file with optimal settings for deployment:
- Uses the static build preset
- Configures the output directory correctly
- Sets up routing for client-side navigation

### Environment Variables
If your application requires environment variables:
1. Add them in the Vercel project settings under "Environment Variables"
2. Reference them in your code using `import.meta.env.VITE_VARIABLE_NAME`

### Custom Domain (Optional)
1. After deployment, go to your project settings
2. Navigate to the "Domains" section
3. Add your custom domain and follow the DNS configuration instructions

## Development

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Setup
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

### Preview Production Build
```bash
npm run preview
```

## Features
- Interactive scavenger hunt interface
- Progress tracking
- Completion certificate with unique code
- Responsive design for all devices
- Security awareness education

## Technologies Used
- React 18 with TypeScript
- Vite for fast builds
- Tailwind CSS for styling
- Lucide React for icons
- Supabase client for backend integration

## Troubleshooting
If you encounter build errors:
1. Check that all dependencies are correctly installed
2. Ensure environment variables are properly configured
3. Verify the build command in Vercel settings is `npm run build`