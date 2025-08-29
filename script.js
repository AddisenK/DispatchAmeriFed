// AmeriFed Dispatch System - Main JavaScript

// Route data
const routes = {
    domesticPax: [
        { id: '1112', origin: 'KLAX', destination: 'KJFK', duration: '5:30', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1341', origin: 'KLAS', destination: 'KABQ', duration: '1:10', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1213', origin: 'KJFK', destination: 'KMIA', duration: '2:30', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '5739', origin: 'KMSY', destination: 'KPHL', duration: '3:00', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1229', origin: 'KFLL', destination: 'KPHL', duration: '2:30', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1339', origin: 'KMIA', destination: 'KPHL', duration: '3:00', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '3913', origin: 'KPHL', destination: 'KMIA', duration: '3:00', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1939', origin: 'KMSP', destination: 'KPHL', duration: '2:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '9239', origin: 'KEYW', destination: 'KPHL', duration: '3:15', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '3992', origin: 'KPHL', destination: 'KEYW', duration: '3:15', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1193', origin: 'KDEN', destination: 'KSEA', duration: '2:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '3806', origin: 'KCLT', destination: 'KDFW', duration: '2:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '3639', origin: 'KTPA', destination: 'KPHL', duration: '2:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '3919', origin: 'KPHL', destination: 'KMSP', duration: '2:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '3936', origin: 'KPHL', destination: 'KTPA', duration: '2:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '162', origin: 'KIAH', destination: 'KSTL', duration: '2:00', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '6201', origin: 'KSTL', destination: 'KIAH', duration: '1:45', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '833', origin: 'KSLC', destination: 'KSEA', duration: '2:15', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '2239', origin: 'KATL', destination: 'KPHL', duration: '2:00', type: 'Domestic Passenger', airline: 'American Airlines' },
        { id: '1177', origin: 'KAUS', destination: 'KCLT', duration: '2:10', type: 'Domestic Passenger', airline: 'American Airlines' }
    ],
    domesticCargo: [
        { id: '178', origin: 'KONT', destination: 'KEWR', duration: '5:30', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '1574', origin: 'KONT', destination: 'KGSO', duration: '5:00', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '2039', origin: 'KOAK', destination: 'KMEM', duration: '4:00', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '216', origin: 'KMEM', destination: 'KLAS', duration: '3:55', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '2508', origin: 'KAFW', destination: 'KSLC', duration: '2:50', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '4802', origin: 'KSAN', destination: 'KMEM', duration: '3:10', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '3902', origin: 'KPHL', destination: 'KMEM', duration: '2:35', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '105', origin: 'KIAH', destination: 'KIND', duration: '1:45', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '1815', origin: 'KDEN', destination: 'KPHX', duration: '1:40', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '6905', origin: 'KEWR', destination: 'KIND', duration: '1:30', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '759', origin: 'KSLC', destination: 'KMEM', duration: '3:10', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '908', origin: 'KOAK', destination: 'KSLC', duration: '1:50', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '2202', origin: 'KMEM', destination: 'KMCO', duration: '1:45', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '392', origin: 'KFLL', destination: 'KMEM', duration: '2:25', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '148', origin: 'KMEM', destination: 'KFLL', duration: '2:20', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '2905', origin: 'KAUS', destination: 'KIND', duration: '2:30', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '239', origin: 'KMEM', destination: 'KPHL', duration: '2:00', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '284', origin: 'KMEM', destination: 'KGJT', duration: '2:35', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '2404', origin: 'KCOS', destination: 'KAFW', duration: '1:45', type: 'Domestic Cargo', airline: 'FedEx' },
        { id: '4625', origin: 'KORD', destination: 'KAFW', duration: '2:10', type: 'Domestic Cargo', airline: 'FedEx' }
    ],
    internationalPax: [
        { id: '7012', origin: 'LGAV', destination: 'KJFK', duration: '10:00', type: 'International Passenger', airline: 'American Airlines' },
        { id: '1195', origin: 'KMIA', destination: 'SBGR', duration: '8:15', type: 'International Passenger', airline: 'American Airlines' },
        { id: '125', origin: 'PHNL', destination: 'KIAH', duration: '8:00', type: 'International Passenger', airline: 'American Airlines' },
        { id: '9613', origin: 'MKJP', destination: 'KMIA', duration: '2:00', type: 'International Passenger', airline: 'American Airlines' },
        { id: '1066', origin: 'MMMX', destination: 'KIAH', duration: '1:45', type: 'International Passenger', airline: 'American Airlines' },
        { id: '6106', origin: 'KDFW', destination: 'MMMX', duration: '3:00', type: 'International Passenger', airline: 'American Airlines' },
        { id: '2852', origin: 'KORD', destination: 'TJSJ', duration: '4:20', type: 'International Passenger', airline: 'American Airlines' },
        { id: '643', origin: 'KDFW', destination: 'NZAA', duration: '15:00', type: 'International Passenger', airline: 'American Airlines' },
        { id: '8994', origin: 'KORD', destination: 'EGLL', duration: '8:30', type: 'International Passenger', airline: 'American Airlines' },
        { id: '6611', origin: 'EGLL', destination: 'KLAX', duration: '12:00', type: 'International Passenger', airline: 'American Airlines' }
    ],
    internationalCargo: [
        { id: '7302', origin: 'SPJC', destination: 'KMEM', duration: '7:00', type: 'International Cargo', airline: 'FedEx' },
        { id: '84', origin: 'KMEM', destination: 'MMMX', duration: '3:10', type: 'International Cargo', airline: 'FedEx' },
        { id: '5950', origin: 'EDDK', destination: 'LEMD', duration: '2:15', type: 'International Cargo', airline: 'FedEx' },
        { id: '1030', origin: 'MMMX', destination: 'KMEM', duration: '3:00', type: 'International Cargo', airline: 'FedEx' },
        { id: '3102', origin: 'EGSS', destination: 'KMEM', duration: '9:10', type: 'International Cargo', airline: 'FedEx' },
        { id: '2661', origin: 'PANC', destination: 'PAFA', duration: '1:00', type: 'International Cargo', airline: 'FedEx' },
        { id: '9151', origin: 'EBLG', destination: 'KMEM', duration: '9:15', type: 'International Cargo', airline: 'FedEx' },
        { id: '231', origin: 'KMEM', destination: 'EGSS', duration: '8:25', type: 'International Cargo', airline: 'FedEx' },
        { id: '2844', origin: 'PHNL', destination: 'YSSY', duration: '10:00', type: 'International Cargo', airline: 'FedEx' },
        { id: '2179', origin: 'KMEM', destination: 'CYVR', duration: '3:30', type: 'International Cargo', airline: 'FedEx' }
    ]
};

// Discord webhook URL
const DISCORD_WEBHOOK_URL = 'https://discord.com/api/webhooks/1410824671301206108/1tjGN1ZCnsczKz_-CA7t7RwfPT74Dn4idYsVH2nl6m37CPKcSrJTC2T5xqM34bOizyci';

// Global variables
let selectedRoute = null;
let selectedRouteElement = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    console.log('AmeriFed Dispatch System initialized');
    renderRoutes();
    setupEventListeners();
    loadPilotInfo();
});

// Render all routes
function renderRoutes() {
    console.log('Rendering routes...');
    renderRouteCategory('domesticPax', 'domesticPax');
    renderRouteCategory('domesticCargo', 'domesticCargo');
    renderRouteCategory('internationalPax', 'internationalPax');
    renderRouteCategory('internationalCargo', 'internationalCargo');
}

// Render a specific route category
function renderRouteCategory(categoryId, containerId) {
    const container = document.getElementById(containerId);
    const categoryRoutes = routes[categoryId];
    
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }
    
    if (!categoryRoutes) {
        console.error('Routes not found for category:', categoryId);
        return;
    }
    
    console.log(`Rendering ${categoryRoutes.length} routes for ${categoryId}`);
    
    container.innerHTML = categoryRoutes.map(route => `
        <div class="route-card border border-gray-200 rounded-lg p-4 cursor-pointer hover:shadow-md transition-all duration-200" 
             data-route-id="${route.id}" data-category="${categoryId}">
            <div class="flex justify-between items-center">
                <div>
                    <h3 class="font-semibold text-gray-800">Route ${route.id}</h3>
                    <p class="text-gray-600">${route.origin} → ${route.destination}</p>
                    <p class="text-sm text-gray-500">Duration: ${route.duration}</p>
                </div>
                <div class="text-right">
                    <p class="text-sm font-medium text-gray-700">${route.airline}</p>
                    <p class="text-xs text-gray-500">${route.type}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Setup event listeners
function setupEventListeners() {
    // Route selection
    document.addEventListener('click', function(e) {
        if (e.target.closest('.route-card')) {
            const routeCard = e.target.closest('.route-card');
            const routeId = routeCard.dataset.routeId;
            const category = routeCard.dataset.category;
            selectRoute(routeId, category, routeCard);
        }
    });

    // Complete route button
    const completeBtn = document.getElementById('completeRoute');
    if (completeBtn) {
        completeBtn.addEventListener('click', completeRoute);
    }
    
    // Cancel route button
    const cancelBtn = document.getElementById('cancelRoute');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', cancelRoute);
    }
}

// Select a route
function selectRoute(routeId, category, routeElement) {
    // Clear previous selection
    if (selectedRouteElement) {
        selectedRouteElement.classList.remove('selected-route');
    }
    
    // Find the route data
    const route = routes[category].find(r => r.id === routeId);
    if (!route) return;
    
    // Update selection
    selectedRoute = route;
    selectedRouteElement = routeElement;
    routeElement.classList.add('selected-route');
    
    // Show selected route display
    showSelectedRoute();
}

// Show selected route information
function showSelectedRoute() {
    if (!selectedRoute) return;
    
    const display = document.getElementById('selectedRouteDisplay');
    const info = document.getElementById('selectedRouteInfo');
    
    if (!display || !info) return;
    
    info.innerHTML = `
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
                <p class="text-sm font-medium text-gray-500">Route ID</p>
                <p class="text-lg font-semibold text-gray-800">${selectedRoute.id}</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500">Origin</p>
                <p class="text-lg font-semibold text-gray-800">${selectedRoute.origin}</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500">Destination</p>
                <p class="text-lg font-semibold text-gray-800">${selectedRoute.destination}</p>
            </div>
            <div>
                <p class="text-sm font-medium text-gray-500">Duration</p>
                <p class="text-lg font-semibold text-gray-800">${selectedRoute.duration}</p>
            </div>
        </div>
        <div class="mt-4 pt-4 border-t border-gray-200">
            <p class="text-sm font-medium text-gray-500">Airline</p>
            <p class="text-lg font-semibold text-gray-800">${selectedRoute.airline}</p>
            <p class="text-sm text-gray-500">${selectedRoute.type}</p>
        </div>
    `;
    
    display.classList.remove('hidden');
}

// Complete a route
async function completeRoute() {
    if (!selectedRoute) {
        showStatus('Please select a route first', 'error');
        return;
    }
    
    const pilotName = document.getElementById('pilotName').value.trim();
    
    if (!pilotName) {
        showStatus('Please enter pilot name', 'error');
        return;
    }
    
    try {
        await sendDiscordMessage('completed', pilotName);
        showStatus('Route completed successfully!', 'success');
        
        // Update route status
        selectedRouteElement.classList.remove('selected-route');
        selectedRouteElement.classList.add('completed-route');
        selectedRouteElement.innerHTML += '<div class="mt-2 text-green-600 text-sm font-medium"><i class="fas fa-check mr-1"></i>Completed</div>';
        
        // Hide selected route display
        document.getElementById('selectedRouteDisplay').classList.add('hidden');
        
        // Reset selection
        selectedRoute = null;
        selectedRouteElement = null;
        
    } catch (error) {
        showStatus('Failed to complete route. Please try again.', 'error');
        console.error('Error completing route:', error);
    }
}

// Cancel a route
async function cancelRoute() {
    if (!selectedRoute) {
        showStatus('Please select a route first', 'error');
        return;
    }
    
    const pilotName = document.getElementById('pilotName').value.trim();
    
    if (!pilotName) {
        showStatus('Please enter pilot name', 'error');
        return;
    }
    
    try {
        await sendDiscordMessage('cancelled', pilotName);
        showStatus('Route cancelled successfully!', 'success');
        
        // Update route status
        selectedRouteElement.classList.remove('selected-route');
        selectedRouteElement.classList.add('cancelled-route');
        selectedRouteElement.innerHTML += '<div class="mt-2 text-red-600 text-sm font-medium"><i class="fas fa-times mr-1"></i>Cancelled</div>';
        
        // Hide selected route display
        document.getElementById('selectedRouteDisplay').classList.add('hidden');
        
        // Reset selection
        selectedRoute = null;
        selectedRouteElement = null;
        
    } catch (error) {
        showStatus('Failed to cancel route. Please try again.', 'error');
        console.error('Error cancelling route:', error);
    }
}

// Send Discord message
async function sendDiscordMessage(action, pilotName) {
    const timestamp = new Date().toLocaleString();
    const route = selectedRoute;
    
    let color, title, description;
    
    if (action === 'completed') {
        color = 0x10B981; // Green
        title = '✅ Route Completed';
        description = `${pilotName} has successfully completed route ${route.id}`;
    } else if (action === 'cancelled') {
        color = 0xEF4444; // Red
        title = '❌ Route Cancelled';
        description = `${pilotName} has cancelled route ${route.id}`;
    }
    
    const embed = {
        title: title,
        description: description,
        color: color,
        fields: [
            {
                name: 'Route Details',
                value: `**ID:** ${route.id}\n**Origin:** ${route.origin}\n**Destination:** ${route.destination}\n**Duration:** ${route.duration}`,
                inline: true
            },
            {
                name: 'Flight Info',
                value: `**Type:** ${route.type}\n**Airline:** ${route.airline}\n**Time:** ${timestamp}`,
                inline: true
            }
        ],
        timestamp: new Date().toISOString()
    };
    
    const payload = {
        embeds: [embed],
        username: 'AmeriFed Dispatch BOT'
    };
    
    try {
        const response = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error sending Discord message:', error);
        throw error;
    }
}

// Show status message
function showStatus(message, type) {
    const statusDiv = document.getElementById('statusMessage');
    const colors = {
        success: 'bg-green-500',
        error: 'bg-red-500',
        info: 'bg-blue-500'
    };
    
    statusDiv.className = `fixed top-4 right-4 p-4 rounded-lg shadow-lg ${colors[type]} text-white z-50`;
    statusDiv.textContent = message;
    statusDiv.classList.remove('hidden');
    
    setTimeout(() => {
        statusDiv.classList.add('hidden');
    }, 5000);
}

// Load pilot information from localStorage
function loadPilotInfo() {
    const savedName = localStorage.getItem('amerifed_pilot_name');
    
    if (savedName) document.getElementById('pilotName').value = savedName;
    
    // Save pilot info when changed
    document.getElementById('pilotName').addEventListener('input', function() {
        localStorage.setItem('amerifed_pilot_name', this.value);
    });
}
