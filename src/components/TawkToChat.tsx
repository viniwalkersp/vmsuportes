import { useEffect } from 'react';

declare global {
  interface Window {
    Tawk_API?: any;
    Tawk_LoadStart?: Date;
  }
}

function TawkToChat() {
  useEffect(() => {
    var s1 = document.createElement("script");
    var s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/67a77d263a842732607be5f3/1ijj41odn';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode?.insertBefore(s1, s0);

    // Cleanup quando o componente for desmontado
    return () => {
      s1.remove();
    };
  }, []);

  return null;
}

export default TawkToChat;