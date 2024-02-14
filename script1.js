 // Add your custom JavaScript and jQuery code for form submission
 $(document).ready(function() {
    $('#contactForm').submit(function(e) {
        e.preventDefault();
        // Add your form submission logic here
        // You can use AJAX to send the form data to a server-side script
        // Example: $.post('submit_form.php', $(this).serialize(), function(response) { /* Handle response */ });
    });
});

    const socket = io('http://localhost:3000'); // Replace with your WebSocket server address

    // Handle incoming messages
    socket.on('chat message', function (msg) {
        // Display the message in your chat UI
        console.log('Received message:', msg);
        // You can append the message to your chat UI here
    });

    // Function to send a message
    function sendMessage(message) {
        // Emit the message to the server
        socket.emit('chat message', message);
    }

