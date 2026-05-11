document.getElementById("sendBtn").addEventListener("click", () => {
  const userMessage = document.getElementById("userInput").value;
  if (!userMessage) return;

  // Onyesha message ya user
  const chatBox = document.getElementById("chat-box");
  chatBox.innerHTML += `<p><b>You:</b> ${userMessage}</p>`;

  // Tuma kwa backend
  fetch("bot.php", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: "message=" + encodeURIComponent(userMessage)
  })
  .then(res => res.json())
  .then(data => {
    chatBox.innerHTML += `<p><b>Bot:</b> ${data.reply}</p>`;
    chatBox.scrollTop = chatBox.scrollHeight;
  })
  .catch(err => {
    chatBox.innerHTML += `<p style="color:red;">Error: ${err}</p>`;
  });

  document.getElementById("userInput").value = "";
});