# AmeriFed Dispatch System

A web-based dispatch system for AmeriFed pilots to select routes and manage flight assignments with Discord integration.

## Features

- **Route Selection**: Browse and select from domestic/international passenger and cargo routes
- **Pilot Management**: Enter pilot name and ID for route assignments
- **Route Actions**: Complete or cancel selected routes
- **Discord Integration**: Automatic notifications sent to Discord channel via webhook
- **Responsive Design**: Modern, mobile-friendly interface

## Route Categories

### Domestic Passenger (American Airlines)
- 20 routes covering major US airports
- Flight durations from 1:10 to 5:30 hours

### Domestic Cargo (FedEx)
- 20 routes covering major US airports
- Flight durations from 1:30 to 5:30 hours

### International Passenger (American Airlines)
- 10 routes covering international destinations
- Flight durations from 2:00 to 15:00 hours

### International Cargo (FedEx)
- 10 routes covering international destinations
- Flight durations from 1:00 to 10:00 hours

## Deployment

### Deploy to Vercel

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy the project:
   ```bash
   vercel
   ```

3. Follow the prompts to configure your project

### Manual Deployment

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically deploy on each push

## Configuration

The Discord webhook URL is configured in `script.js`. Update the `DISCORD_WEBHOOK_URL` constant if needed.

## Usage

1. Enter your pilot name and ID
2. Browse available routes by category
3. Click on a route to select it
4. Use the action buttons to complete or cancel the route
5. Discord notifications will be sent automatically

## Technologies Used

- HTML5
- CSS3 (Tailwind CSS)
- JavaScript (ES6+)
- Discord Webhook API
- Vercel for deployment

## Support

For issues or questions, contact the AmeriFed dispatch team.
