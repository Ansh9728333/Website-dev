(function() {
  // 1. Load Google Fonts (Outfit)
  var fontLink = document.createElement("link");
  fontLink.rel = "stylesheet";
  fontLink.href = "https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600&display=swap";
  document.head.appendChild(fontLink);

  // 2. Inject Styles (Blue & Orange brand theme for Packers & Movers)
  var styles = `
    #kairali-chatbot-widget {
      position: fixed;
      bottom: 96px;
      right: 16px;
      z-index: 999999;
      font-family: 'Outfit', sans-serif;
      box-sizing: border-box;
    }
    #kairali-chatbot-widget * {
      box-sizing: border-box;
      font-family: 'Outfit', sans-serif;
    }
    
    /* Launcher Button */
    #kairali-chatbot-launcher {
      width: 72px;
      height: 72px;
      border-radius: 50%;
      padding: 4px;
      border: 4px solid #ffffff;
      background: #ffffff;
      color: #ffffff;
      box-shadow: 0 12px 32px rgba(15, 61, 122, 0.28);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    #kairali-chatbot-launcher:hover {
      transform: scale(1.08) translateY(-2px);
      box-shadow: 0 10px 28px rgba(15, 61, 122, 0.4);
    }
    #kairali-chatbot-launcher img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
    }
    #kairali-chatbot-launcher::after {
      content: "";
      position: absolute;
      right: 2px;
      bottom: 6px;
      width: 18px;
      height: 18px;
      border: 3px solid #ffffff;
      border-radius: 50%;
      background: #22c55e;
    }
    
    /* Chat Panel */
    #kairali-chatbot-panel {
      position: absolute;
      bottom: 76px;
      right: 0;
      width: 380px;
      height: 520px;
      background: #ffffff;
      border-radius: 20px;
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
      display: flex;
      flex-direction: column;
      overflow: hidden;
      opacity: 0;
      transform: scale(0.9) translateY(20px);
      pointer-events: none;
      transition: all 0.3s cubic-bezier(0.165, 0.84, 0.44, 1);
      border: 1px solid rgba(0,0,0,0.05);
      text-align: left;
    }
    
    /* Active State */
    #kairali-chatbot-widget.kairali-chatbot-open #kairali-chatbot-panel {
      opacity: 1;
      transform: scale(1) translateY(0);
      pointer-events: auto;
    }
    #kairali-chatbot-widget.kairali-chatbot-open #kairali-chatbot-launcher {
      transform: scale(0.9);
      box-shadow: 0 4px 12px rgba(15, 61, 122, 0.2);
    }
    
    /* Header styling with Logistics Deep Blue & Orange border */
    #kairali-chatbot-header {
      background: linear-gradient(135deg, #09244a 0%, #0f3d7a 100%);
      color: #ffffff;
      padding: 16px 20px;
      display: flex;
      align-items: center;
      gap: 12px;
      border-bottom: 3px solid #f97316; /* Orange brand accent border */
      position: relative;
      text-align: left;
    }
    .kairali-header-avatar {
      width: 44px;
      height: 44px;
      padding: 2px;
      background: #ffffff;
      border: 2px solid #f97316;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0f3d7a;
      position: relative;
    }
    .kairali-header-avatar img {
      width: 100%;
      height: 100%;
      display: block;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
    }
    .kairali-header-avatar svg {
      width: 26px;
      height: 26px;
    }
    .kairali-header-status-dot {
      width: 10px;
      height: 10px;
      background: #22c55e; /* Online Green */
      border-radius: 50%;
      position: absolute;
      bottom: 0;
      right: 0;
      border: 2px solid #0f3d7a;
    }
    .kairali-header-info {
      flex: 1;
    }
    .kairali-header-name {
      font-size: 16px;
      font-weight: 600;
      letter-spacing: 0.3px;
    }
    .kairali-header-title {
      font-size: 11px;
      color: #b0c4de;
      margin-top: 2px;
      font-weight: 300;
    }
    #kairali-chatbot-close {
      background: transparent;
      border: none;
      color: #ffffff;
      opacity: 0.8;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: opacity 0.2s;
    }
    #kairali-chatbot-close:hover {
      opacity: 1;
    }
    
    /* Body area containing message thread */
    #kairali-chatbot-body {
      flex: 1;
      padding: 20px;
      overflow-y: auto;
      overflow-x: hidden;
      background-color: #f8fafc;
      display: flex;
      flex-direction: column;
      gap: 12px;
      text-align: left;
    }
    
    /* Message bubble layouts */
    .kairali-message {
      display: flex;
      flex-direction: column;
      max-width: 85%;
      animation: kairaliFadeIn 0.3s ease;
    }
    .kairali-msg-user {
      align-self: flex-end;
    }
    .kairali-msg-bot {
      align-self: flex-start;
    }
    .kairali-msg-bubble {
      padding: 12px 16px;
      font-size: 14.5px;
      line-height: 1.45;
      border-radius: 18px;
      text-align: left;
      word-break: break-word;
      overflow-wrap: break-word;
    }
    .kairali-msg-user .kairali-msg-bubble {
      background: #0f3d7a;
      color: #ffffff;
      border-bottom-right-radius: 4px;
      box-shadow: 0 4px 10px rgba(15, 61, 122, 0.15);
    }
    .kairali-msg-bot .kairali-msg-bubble {
      background: #e2e8f0;
      color: #1e293b;
      border-bottom-left-radius: 4px;
      border: 1px solid rgba(0,0,0,0.02);
    }
    
    /* Quick action buttons style */
    .easy-quick-buttons-container {
      display: flex;
      flex-direction: column;
      gap: 8px;
      margin-top: 4px;
      max-width: 85%;
      align-self: flex-start;
      animation: kairaliFadeIn 0.3s ease;
    }
    .easy-quick-btn {
      background: #ffffff;
      border: 1.5px solid #0f3d7a;
      border-radius: 12px;
      padding: 8px 12px;
      text-align: left;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05);
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .easy-quick-btn:hover {
      background: #f0f4fa;
      border-color: #f97316;
      transform: translateY(-1px);
    }
    .easy-quick-btn-title {
      font-size: 13px;
      font-weight: 600;
      color: #0f3d7a;
    }
    .easy-quick-btn-subtitle {
      font-size: 10.5px;
      color: #64748b;
      margin-top: 1px;
    }
    
    /* Typing indicator styling */
    .kairali-typing {
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 12px 16px;
      background: #e2e8f0;
      border-radius: 18px;
      border-bottom-left-radius: 4px;
      width: max-content;
      margin-bottom: 4px;
      align-self: flex-start;
      animation: kairaliFadeIn 0.2s ease;
    }
    .kairali-typing span {
      width: 6px;
      height: 6px;
      background: #64748b;
      border-radius: 50%;
      display: inline-block;
      animation: kairaliBlink 1.4s infinite both;
    }
    .kairali-typing span:nth-child(2) { animation-delay: .2s; }
    .kairali-typing span:nth-child(3) { animation-delay: .4s; }

    @keyframes kairaliBlink {
      0% { opacity: .2; transform: scale(0.8); }
      20% { opacity: 1; transform: scale(1.2); }
      100% { opacity: .2; transform: scale(0.8); }
    }
    @keyframes kairaliFadeIn {
      from { opacity: 0; transform: translateY(8px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    /* Footer input box area */
    #kairali-chatbot-footer {
      padding: 12px 16px;
      background: #ffffff;
      border-top: 1px solid #e2e8f0;
      display: flex;
      align-items: center;
      gap: 8px;
      text-align: left;
    }
    #kairali-chatbot-input {
      flex: 1;
      border: 1px solid #cbd5e1;
      border-radius: 24px;
      padding: 10px 16px;
      font-size: 14px;
      outline: none;
      transition: border-color 0.2s;
      text-align: left;
    }
    #kairali-chatbot-input:focus {
      border-color: #0f3d7a;
    }
    #kairali-chatbot-send {
      background: #0f3d7a;
      border: none;
      color: #ffffff;
      width: 38px;
      height: 38px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: background-color 0.2s;
    }
    #kairali-chatbot-send:hover {
      background: #1e40af;
    }
    #kairali-chatbot-send svg {
      margin-left: 2px;
    }
    
    /* Brand footer text styles */
    #kairali-chatbot-brand-footer {
      font-size: 9px;
      color: #64748b;
      text-align: center;
      padding: 6px 10px;
      background: #f8fafc;
      border-top: 1px solid #e2e8f0;
      line-height: 1.3;
    }
    
    /* Clickable styling for parsed link anchor tags */
    .kairali-chatbot-link {
      color: #f97316;
      text-decoration: underline;
      font-weight: 500;
      transition: color 0.2s;
    }
    .kairali-chatbot-link:hover {
      color: #ea580c;
    }
    
    .kairali-fallback-link {
      color: #0f3d7a;
      text-decoration: underline;
      font-weight: 500;
    }
    
    /* Responsive Viewports */
    @media (max-width: 480px) {
      #kairali-chatbot-widget {
        bottom: 98px;
        right: 12px;
      }
      #kairali-chatbot-panel {
        bottom: 70px;
        right: 0;
        width: calc(100vw - 24px);
        height: calc(100vh - 100px);
        max-height: 580px;
      }
    }
  `;
  
  var styleTag = document.createElement("style");
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);

  // 3. Setup configurations & session variables
  var config = window.EasyIndiaChatbotConfig || window.KairaliChatbotConfig || {};
  var endpoint = config.endpoint || "";
  var businessName = config.businessName || "Easy India Packers Movers";
  var botName = config.botName || "Depika";
  var avatar = config.avatar || "assets/chatbot-dipika.jpg";
  
  // Generate or retrieve session id
  var sessionKey = "kairali_chatbot_session_id";
  var sessionId = localStorage.getItem(sessionKey);
  if (!sessionId) {
    sessionId = "session_" + new Date().getTime() + "_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem(sessionKey, sessionId);
  }

  // 4. Inject chatbot elements into the DOM
  var widgetContainer = document.createElement("div");
  widgetContainer.id = "kairali-chatbot-widget";
  widgetContainer.className = "kairali-chatbot-closed";
  
  widgetContainer.innerHTML = `
    <!-- Launcher Button -->
    <div id="kairali-chatbot-launcher" title="Chat with ${botName}">
      <img src="${avatar}" width="360" height="316" alt="${botName} chat assistant" loading="lazy">
    </div>
    
    <!-- Chat Panel -->
    <div id="kairali-chatbot-panel">
      <!-- Header -->
      <div id="kairali-chatbot-header">
        <div class="kairali-header-avatar">
          <img src="${avatar}" width="360" height="316" alt="${botName}" loading="lazy">
          <span class="kairali-header-status-dot"></span>
        </div>
        <div class="kairali-header-info">
          <div class="kairali-header-name">${botName}</div>
          <div class="kairali-header-title">Official Shifting Assistant</div>
        </div>
        <button id="kairali-chatbot-close" title="Minimize Chat">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>
      
      <!-- Body Message Threads -->
      <div id="kairali-chatbot-body">
        <div class="kairali-message kairali-msg-bot">
          <div class="kairali-msg-bubble">
            Hi, this is Depika from Easy India Packers Movers. How may I help you with your move today?
          </div>
        </div>
        
        <!-- Quick Action Buttons Container -->
        <div id="easy-quick-actions" class="easy-quick-buttons-container">
          <button class="easy-quick-btn" data-intent="Get Shifting Quote">
            <span class="easy-quick-btn-title">Get Shifting Quote</span>
            <span class="easy-quick-btn-subtitle">Home / office moving estimate</span>
          </button>
          <button class="easy-quick-btn" data-intent="Book Home Shifting">
            <span class="easy-quick-btn-title">Book Home Shifting</span>
            <span class="easy-quick-btn-subtitle">Local or intercity relocation</span>
          </button>
          <button class="easy-quick-btn" data-intent="Vehicle Transport">
            <span class="easy-quick-btn-title">Vehicle Transport</span>
            <span class="easy-quick-btn-subtitle">Car / bike transport support</span>
          </button>
          <button class="easy-quick-btn" data-intent="Talk to Moving Expert">
            <span class="easy-quick-btn-title">Talk to Moving Expert</span>
            <span class="easy-quick-btn-subtitle">Get help for your move</span>
          </button>
        </div>
      </div>
      
      <!-- Footer Input Area -->
      <div id="kairali-chatbot-footer">
        <input type="text" id="kairali-chatbot-input" placeholder="Please let me know how I can best assist you." autocomplete="off">
        <button id="kairali-chatbot-send" title="Send message">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
      
      <!-- Custom Brand Footer -->
      <div id="kairali-chatbot-brand-footer">
        Easy India Packers Movers | info@shifteasyindia.com | 8860688698 | Safe & reliable shifting support
      </div>
    </div>
  `;
  document.body.appendChild(widgetContainer);

  // 5. DOM Event Listeners
  var launcher = document.getElementById("kairali-chatbot-launcher");
  var closeBtn = document.getElementById("kairali-chatbot-close");
  var sendBtn = document.getElementById("kairali-chatbot-send");
  var textInput = document.getElementById("kairali-chatbot-input");
  var chatBody = document.getElementById("kairali-chatbot-body");
  var quickActions = document.getElementById("easy-quick-actions");

  // Open / Close Panel toggling
  launcher.addEventListener("click", function() {
    if (widgetContainer.classList.contains("kairali-chatbot-closed")) {
      widgetContainer.classList.remove("kairali-chatbot-closed");
      widgetContainer.classList.add("kairali-chatbot-open");
      textInput.focus();
    } else {
      widgetContainer.classList.remove("kairali-chatbot-open");
      widgetContainer.classList.add("kairali-chatbot-closed");
    }
  });

  closeBtn.addEventListener("click", function() {
    widgetContainer.classList.remove("kairali-chatbot-open");
    widgetContainer.classList.add("kairali-chatbot-closed");
  });

  // Quick Action Buttons click handler
  if (quickActions) {
    quickActions.addEventListener("click", function(e) {
      var btn = e.target.closest(".easy-quick-btn");
      if (!btn) return;
      var intent = btn.getAttribute("data-intent");
      if (intent) {
        // Remove the quick actions container so user can't click again
        quickActions.remove();
        // Send chosen intent as user message
        triggerMessageSend(intent);
      }
    });
  }

  // Sending Actions
  sendBtn.addEventListener("click", function() {
    triggerMessageSend();
  });

  textInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      triggerMessageSend();
    }
  });

  function scrollChatToBottom() {
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function appendUserMessage(text) {
    var msgDiv = document.createElement("div");
    msgDiv.className = "kairali-message kairali-msg-user";
    msgDiv.innerHTML = `<div class="kairali-msg-bubble">${escapeHtml(text)}</div>`;
    chatBody.appendChild(msgDiv);
    scrollChatToBottom();
  }

  function appendBotMessage(text) {
    var msgDiv = document.createElement("div");
    msgDiv.className = "kairali-message kairali-msg-bot";
    msgDiv.innerHTML = `<div class="kairali-msg-bubble">${formatBotReply(text)}</div>`;
    chatBody.appendChild(msgDiv);
    scrollChatToBottom();
  }

  function appendFallbackMessage() {
    var msgDiv = document.createElement("div");
    msgDiv.className = "kairali-message kairali-msg-bot";
    msgDiv.innerHTML = `
      <div class="kairali-msg-bubble" style="border-left: 3px solid #dc3545;">
        Sorry, I'm having trouble connecting right now. Please call or WhatsApp us at 
        <a class="kairali-fallback-link" href="https://wa.me/918860688698?text=Hello%20Easy%20India%20Packers%20Movers" target="_blank">+91-8860688698</a> or email 
        <a class="kairali-fallback-link" href="mailto:info@shifteasyindia.com">info@shifteasyindia.com</a>.
      </div>`;
    chatBody.appendChild(msgDiv);
    scrollChatToBottom();
  }

  function showTypingIndicator() {
    var typingDiv = document.createElement("div");
    typingDiv.id = "kairali-typing-indicator";
    typingDiv.className = "kairali-typing";
    typingDiv.innerHTML = "<span></span><span></span><span></span>";
    chatBody.appendChild(typingDiv);
    scrollChatToBottom();
  }

  function hideTypingIndicator() {
    var indicator = document.getElementById("kairali-typing-indicator");
    if (indicator) {
      indicator.remove();
    }
  }

  // Escape HTML string
  function escapeHtml(text) {
    var map = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, function(m) { return map[m]; });
  }

  // Parse markdown links & format linebreaks
  function formatBotReply(text) {
    var escaped = escapeHtml(text);
    
    // Replace Markdown Links [Label](URL) with Clickable Anchors
    var markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
    escaped = escaped.replace(markdownLinkRegex, function(match, label, url) {
      return '<a class="kairali-chatbot-link" href="' + url + '" target="_blank">' + label + '</a>';
    });
    
    return escaped.replace(/\n/g, '<br>');
  }

  function extractBotReply(data) {
    if (!data) return "";
    if (typeof data === "string") return data.trim();

    var possibleReply = data.reply || data.message || data.response || data.answer || data.text || data.output;
    if (possibleReply) return String(possibleReply).trim();

    if (data.data) return extractBotReply(data.data);
    if (data.result) return extractBotReply(data.result);

    return "";
  }

  function parseBotResponse(res) {
    if (!res.ok) {
      throw new Error("HTTP error " + res.status);
    }

    return res.text().then(function(rawText) {
      var trimmedText = rawText.trim();
      if (!trimmedText) {
        throw new Error("Empty chatbot response");
      }

      try {
        var parsed = JSON.parse(trimmedText);
        var reply = extractBotReply(parsed);
        if (reply) return reply;
      } catch (parseError) {
        if (/web app is active/i.test(trimmedText)) {
          throw new Error("Health-check response received instead of chatbot reply");
        }
        return trimmedText;
      }

      throw new Error("No reply found in chatbot response");
    });
  }

  function buildRequestPayload(message) {
    return {
      sessionId: sessionId,
      message: message,
      userMessage: message,
      query: message,
      businessName: businessName,
      botName: botName,
      pageUrl: window.location.href,
      pageTitle: document.title,
      userAgent: navigator.userAgent,
      timestamp: new Date().toISOString()
    };
  }

  function buildEndpointWithParams(message) {
    var separator = endpoint.indexOf("?") === -1 ? "?" : "&";
    return endpoint + separator + [
      "sessionId=" + encodeURIComponent(sessionId),
      "message=" + encodeURIComponent(message),
      "businessName=" + encodeURIComponent(businessName),
      "botName=" + encodeURIComponent(botName),
      "pageUrl=" + encodeURIComponent(window.location.href),
      "timestamp=" + encodeURIComponent(new Date().toISOString())
    ].join("&");
  }

  function requestJsonpBotReply(message) {
    return new Promise(function(resolve, reject) {
      var callbackName = "easyIndiaChatbotCallback_" + Date.now() + "_" + Math.random().toString(36).slice(2);
      var script = document.createElement("script");
      var timeoutId;

      function cleanup() {
        clearTimeout(timeoutId);
        delete window[callbackName];
        if (script.parentNode) {
          script.parentNode.removeChild(script);
        }
      }

      window[callbackName] = function(data) {
        cleanup();
        var reply = extractBotReply(data);
        if (reply) {
          resolve(reply);
        } else {
          reject(new Error("No reply found in JSONP response"));
        }
      };

      timeoutId = setTimeout(function() {
        cleanup();
        reject(new Error("JSONP chatbot request timed out"));
      }, 15000);

      script.onerror = function() {
        cleanup();
        reject(new Error("JSONP chatbot request failed"));
      };

      script.src = buildEndpointWithParams(message) + "&callback=" + encodeURIComponent(callbackName);
      document.body.appendChild(script);
    });
  }

  function requestBotReply(message) {
    var payload = buildRequestPayload(message);

    return fetch(endpoint, {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "text/plain;charset=utf-8"
      },
      body: JSON.stringify(payload)
    })
    .then(parseBotResponse)
    .catch(function(postError) {
      console.warn("Chatbot POST response was not readable, trying JSONP fallback:", postError);

      return requestJsonpBotReply(message)
      .catch(function(jsonpError) {
        console.warn("Chatbot JSONP response was not readable, sending no-cors fallback:", jsonpError);

        return fetch(endpoint, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "text/plain;charset=utf-8"
          },
          body: JSON.stringify(payload)
        })
        .then(function() {
          return "Thank you. I have received your message. Please share your mobile number, moving from city, moving to city and service type so our team can guide you quickly.";
        });
      });
    });
  }

  function triggerMessageSend(overrideMessage) {
    var message = (overrideMessage !== undefined) ? overrideMessage.trim() : textInput.value.trim();
    if (!message) return;
    
    if (overrideMessage === undefined) {
      textInput.value = "";
    }
    
    appendUserMessage(message);
    showTypingIndicator();

    if (!endpoint) {
      setTimeout(function() {
        hideTypingIndicator();
        appendBotMessage("Error: The chatbot backend Web App URL is not configured. Please paste your Google Apps Script URL in EasyIndiaChatbotConfig.");
      }, 800);
      return;
    }

    requestBotReply(message)
    .then(function(reply) {
      hideTypingIndicator();
      appendBotMessage(reply);
    })
    .catch(function(err) {
      console.error("Chatbot network error:", err);
      hideTypingIndicator();
      appendFallbackMessage();
    });
  }
})();

