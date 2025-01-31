document.getElementById("copyright").innerHTML = 
`© Copyright ${new Date().getFullYear()} DEVXNET. All rights reserved.`;


// function updateDateTime() {
//     const now = new Date();
//     const options = { 
//         weekday: 'short', 
//         year: 'numeric', 
//         month: 'short', 
//         day: 'numeric', 
//         hour: '2-digit', 
//         minute: '2-digit', 
//         second: '2-digit', 
//         hour12: true 
//     };
//     document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
// }

// // Update every second
// setInterval(updateDateTime, 1000);

// // Initial call to display immediately
// updateDateTime();
