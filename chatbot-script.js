    <script>
        const API_KEY = 'YOUR-API-KEY';

        function toggleChat() {
            var chatContainer = document.getElementById('chatbot-container');
            if (chatContainer.style.display === 'none' || chatContainer.style.display === '') {
                chatContainer.style.display = 'flex';
            } else {
                chatContainer.style.display = 'none';
            }
        }

        async function sendMessage() {
            const userInput = document.getElementById('user-input');
            const chatMessages = document.getElementById('chat-messages');
            
            if (userInput.value.trim() === '') return;
            
            chatMessages.innerHTML += `<p><strong>Tu:</strong> ${userInput.value}</p>`;
            
            try {
                const response = await fetch('/chat', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        messages: [{role: "user", content: userInput.value}]
                    })
                });
                
                if (!response.ok) {
                    const errorData = await response.json();
                    throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(errorData)}`);
                }
                
                const data = await response.json();
                console.log('API Response:', data);
                
                if (data.content && data.content[0] && data.content[0].text) {
                    const botReply = data.content[0].text;
                    chatMessages.innerHTML += `<p><strong>Bot:</strong> ${botReply}</p>`;
                } else {
                    throw new Error('Răspunsul API nu are structura așteptată');
                }
            } catch (error) {
                console.error('Eroare detaliată:', error);
                chatMessages.innerHTML += `<p><strong>Eroare:</strong> ${error.message}</p>`;
            }
            
            userInput.value = '';
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    </script>
