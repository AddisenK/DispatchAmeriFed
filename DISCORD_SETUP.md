# 🚁 AmeriFed Dispatch System - Discord Setup & Deployment

## ✅ Discord Webhook Configuration

Your Discord webhook is already configured in the code:
- **Webhook URL:** `https://discord.com/api/webhooks/1410824671301206108/1tjGN1ZCnsczKz_-CA7t7RwfPT74Dn4idYsVH2nl6m37CPKcSrJTC2T5xqM34bOizyci`
- **Channel:** `#https://discord.com/channels/1316939552434421820/1410736141182701640`

## 🚀 Deployment Instructions

### Step 1: Deploy to Vercel

#### Option A: Drag & Drop (Easiest)
1. Go to [vercel.com](https://vercel.com)
2. Sign up/Login with your GitHub account
3. Click **"New Project"**
4. Drag your entire `amerifed-dispatch` folder to the upload area
5. Click **"Deploy"**
6. Your site will be live at: `https://your-project-name.vercel.app`

#### Option B: GitHub Integration
1. Push your code to GitHub:
   ```bash
   git init
   git add .
   git commit -m "Initial commit - AmeriFed Dispatch System"
   git branch -M main
   git remote add origin https://github.com/yourusername/amerifed-dispatch.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com)
3. Click **"New Project"**
4. Import your GitHub repository
5. Click **"Deploy"**

### Step 2: Test Discord Integration

1. **Open your deployed site**
2. **Enter a pilot name** (e.g., "John Smith")
3. **Select any route** by clicking on it
4. **Click "Complete Route"** or **"Cancel Route"**
5. **Check your Discord channel** - you should see a message like:

```
✅ Route Completed
John Smith has successfully completed route 1112

Route Details:
ID: 1112
Origin: KLAX
Destination: KJFK
Duration: 5:30

Flight Info:
Type: Domestic Passenger
Airline: American Airlines
Time: [timestamp]
```

## 🔧 Troubleshooting

### If Discord messages aren't working:

1. **Check webhook URL:**
   - Verify the webhook is still active in Discord
   - Go to Discord → Server Settings → Integrations → Webhooks
   - Make sure your webhook is enabled

2. **Test webhook manually:**
   - Use the `test-webhook.html` file included in your project
   - Open it in a browser and click "Test Webhook"

3. **Check browser console:**
   - Press F12 in your browser
   - Look for any error messages in the Console tab

4. **Verify CORS:**
   - Discord webhooks should work from any domain
   - If you see CORS errors, the issue is likely elsewhere

### If routes aren't displaying:

1. **Check JavaScript console:**
   - Press F12 → Console tab
   - Look for any error messages

2. **Verify file structure:**
   - Make sure `script.js` is in the same folder as `index.html`
   - Check that all files were uploaded to Vercel

## 📱 Features

### What pilots can do:
1. **Enter their name** (saved locally)
2. **Browse routes** by category:
   - Domestic Passenger (20 routes) - American Airlines
   - Domestic Cargo (20 routes) - FedEx
   - International Passenger (10 routes) - American Airlines
   - International Cargo (10 routes) - FedEx
3. **Select a route** (visual feedback)
4. **Complete or cancel** the selected route
5. **See Discord notifications** sent automatically

### Discord notifications include:
- ✅ **Route completed** (green embed)
- ❌ **Route cancelled** (red embed)
- **Pilot name**
- **Route details** (ID, origin, destination, duration)
- **Flight info** (type, airline, timestamp)

## 🎯 Next Steps

1. **Deploy to Vercel** using the instructions above
2. **Test the Discord integration** by completing/cancelling a route
3. **Share the URL** with your AmeriFed pilots
4. **Monitor the Discord channel** for route updates

## 📞 Support

If you encounter any issues:
1. Check the browser console for errors
2. Verify the Discord webhook is active
3. Test with the included `test-webhook.html` file
4. Make sure all files are properly uploaded to Vercel

Your AmeriFed Dispatch System is ready to go! 🚁✈️
