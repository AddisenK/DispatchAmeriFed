# 🚁 AmeriFed Dispatch System - Production Troubleshooting

## 🔧 Common Production Issues & Solutions

### Issue 1: Routes Not Displaying
**Symptoms:** Page loads but no routes show up
**Solutions:**
1. **Check browser console** (F12 → Console)
2. **Look for error messages**
3. **Verify all files uploaded** to Vercel
4. **Check if you see "AmeriFed Dispatch System initializing..."**

### Issue 2: Discord Webhook Not Working
**Symptoms:** Routes work but Discord messages don't send
**Solutions:**
1. **Test webhook manually** with `test-webhook.html`
2. **Check Discord channel permissions**
3. **Verify webhook is still active**
4. **Check browser console for CORS errors**

### Issue 3: Page Won't Load
**Symptoms:** Blank page or 404 error
**Solutions:**
1. **Verify `index.html` is in root directory**
2. **Check Vercel deployment logs**
3. **Ensure all files are uploaded**
4. **Try redeploying**

## 🚀 Quick Fix Deployment

### Step 1: Clean Deploy
1. **Delete your current Vercel project**
2. **Create new project** in Vercel
3. **Upload fresh files** (drag & drop entire folder)
4. **Deploy**

### Step 2: Verify Files
Ensure these files are in your project root:
- ✅ `index.html`
- ✅ `script.js`
- ✅ `vercel.json`
- ✅ `package.json`

### Step 3: Test Locally First
1. **Open `index.html` in browser**
2. **Press F12 → Console**
3. **Check for error messages**
4. **Verify routes display**

## 🔍 Debug Steps

### 1. Check Browser Console
```javascript
// You should see these messages:
"AmeriFed Dispatch System initializing..."
"Rendering routes..."
"Routes rendered successfully"
"AmeriFed Dispatch System initialized successfully"
```

### 2. Test Discord Webhook
1. **Open `test-webhook.html`**
2. **Click "Test Webhook"**
3. **Check Discord channel**

### 3. Verify File Structure
```bash
ls -la
# Should show:
# index.html
# script.js
# vercel.json
# package.json
# test-webhook.html
```

## 🎯 Production Checklist

- [ ] **All files uploaded** to Vercel
- [ ] **No JavaScript errors** in console
- [ ] **Routes display** in all 4 categories
- [ ] **Discord webhook** sends test message
- [ ] **Route selection** works
- [ ] **Complete/Cancel** buttons work
- [ ] **Discord notifications** sent

## 📞 If Still Not Working

1. **Share your Vercel URL** so I can check
2. **Share browser console errors**
3. **Check Vercel deployment logs**
4. **Try deploying to GitHub Pages** as alternative

## 🚀 Alternative Deployment

If Vercel continues to fail, try:
1. **GitHub Pages** (free, reliable)
2. **Netlify** (drag & drop deployment)
3. **Firebase Hosting** (Google's platform)

Your AmeriFed Dispatch System should work! 🚁✈️
