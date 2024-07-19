document.getElementById('meowButton').addEventListener('click', async () => {
      await chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.scripting.executeScript({
        target: { tabId: tabs[0].id },
        function: meowify
      });
    });
  });
  
  function meowify() {
    // Define the elements to target
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, label, a, button, span, div');
  
    elements.forEach(element => {
      // Replace text content only
      if (element.childNodes) {
        element.childNodes.forEach(child => {
          if (child.nodeType === Node.TEXT_NODE && child.nodeValue.trim().length > 0) {
            child.nodeValue = child.nodeValue.split(' ').map(word => 'meow').join(' ');
          }
        });
      }
    });
  
    // Verifica si ya existe una imagen con la clase 'cat-image-meowify'
    const existingImg = document.querySelector('img.cat-image-meowify');
  
    if (!existingImg) {
      // Genera un número aleatorio entre 1 y 9
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      const imageUrl = `https://hectorvaldes.dev/meme-cats/meme-cat-extension%20(${randomNumber}).webp`;
  
      // Crea la nueva imagen si no existe
      const img = document.createElement('img');
      img.src = imageUrl;
      img.className = 'cat-image-meowify';
      document.body.appendChild(img);

      // Crea y agrega el estilo si no se ha añadido ya
    if (!document.querySelector('style.cat-image-meowify-style')) {
        const style = document.createElement('style');
        style.className = 'cat-image-meowify-style'; // Añade una clase para identificar el estilo
        style.innerHTML = `
          @keyframes slideUp {
            from {
              transform: translateY(100%);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          
          .cat-image-meowify {
            width: 300px;
            position: fixed;
            bottom: 0;
            right: 0;
            z-index: 1000;
            animation: slideUp 0.5s ease-out;
          }
        `;
        document.head.appendChild(style);
      }

      // Lanza el efecto de confeti
      confetti();
    }
  }
  