# AmeriFed Dispatch System - Deployment Guide

## Quick Deploy to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Prepare your project:**
   - Ensure all files are in your project directory
   - Files should include: `index.html`, `script.js`, `vercel.json`, `package.json`, `README.md`

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with your GitHub account
   - Click "New Project"
   - Import your GitHub repository or drag & drop your project folder
   - Vercel will automatically detect it as a static site
   - Click "Deploy"

3. **Your site will be live at:** `https://your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI:**
   ```bash
   npm install -g vercel
   ```

2. **Deploy:**
   ```bash
   cd amerifed-dispatch
   vercel
   ```

3. **Follow the prompts:**
   - Link to existing project or create new
   - Set project name
   - Confirm deployment

### Option 3: Deploy via GitHub Integration

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AmeriFed Dispatch System"
   git branch -M main
   git remote add origin https://github.com/yourusername/amerifed-dispatch.git
   git push -u origin main
   ```

2. **Connect to Vercel:**
   - Go to Vercel dashboard
   - Import your GitHub repository
   - Vercel will auto-deploy on every push

## Testing Your Deployment

1. **Test Route Selection:**
   - Open your deployed site
   - Enter pilot name and ID
   - Click on any route to select it
   - Verify the selected route display appears

2. **Test Discord Integration:**
   - Select a route
   - Click "Complete Route" or "Cancel Route"
   - Check your Discord channel for the webhook message
   - Verify the route status updates on the website

3. **Test Responsiveness:**
   - Test on mobile devices
   - Verify all elements are properly sized
   - Check that route cards are clickable

## Troubleshooting

### Common Issues:

1. **Discord webhook not working:**
   - Verify the webhook URL is correct in `script.js`
   - Check Discord channel permissions
   - Ensure the webhook is active

2. **Routes not displaying:**
   - Check browser console for JavaScript errors
   - Verify all files are properly uploaded
   - Check file permissions

3. **Styling issues:**
   - Ensure Tailwind CSS CDN is accessible
   - Check Font Awesome CDN connection
   - Verify CSS classes are properly applied

### Support:

- Check browser console for error messages
- Verify all files are present in your deployment
- Test locally before deploying

## Customization

### Adding New Routes:
Edit the `routes` object in `script.js` to add new routes:

```javascript
domesticPax: [
    // Add new routes here
    { id: 'NEW123', origin: 'KXXX', destination: 'KYYY', duration: '2:30', type: 'Domestic Passenger', airline: 'American Airlines' }
]
```

### Changing Discord Webhook:
Update the `DISCORD_WEBHOOK_URL` constant in `script.js`

### Modifying Styling:
Edit the Tailwind CSS classes in `index.html` or add custom CSS

## Security Notes

- The Discord webhook URL is visible in the client-side code
- For production use, consider moving sensitive data to environment variables
- The current setup is suitable for internal company use

## Performance

- Static files are served directly by Vercel
- No server-side processing required
- Fast loading times with CDN distribution
- Optimized for mobile and desktop use
