import React, { useEffect, useRef } from 'react';

const CardMatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const parent = canvas.parentElement;
    if (!parent) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set dimensions to match parent
    let width = parent.clientWidth;
    let height = parent.clientHeight;
    
    const setSize = () => {
        if(parent) {
            width = parent.clientWidth;
            height = parent.clientHeight;
            canvas.width = width;
            canvas.height = height;
        }
    };
    
    setSize();

    const chars = '01'; // Binary only for a simpler, "faint" tech look, or standard matrix chars. Let's stick to standard but maybe sparse.
    // User asked for "very faint matrix effect".
    const charString = 'ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890';
    const charArray = charString.split('');
    
    const fontSize = 14; 
    const columns = width / fontSize;

    const drops: number[] = [];
    // Initialize drops randomly above the canvas to stagger entry
    for (let i = 0; i < columns; i++) {
        drops[i] = Math.random() * -50; 
    }

    const draw = () => {
      // Clear with high transparency for long trails? Or standard fade.
      // Standard fade
      ctx.fillStyle = 'rgba(12, 12, 14, 0.2)'; // Match card bg color roughly with opacity for fade
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = 'rgba(34, 197, 94, 0.15)'; // Very faint green
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset
        if (drops[i] * fontSize > height && Math.random() > 0.98) {
          drops[i] = 0;
        }

        drops[i]++;
      }
    };

    const interval = setInterval(draw, 40); // Slightly slower

    const resizeObserver = new ResizeObserver(() => {
        setSize();
        // Reset cols
        const newCols = width / fontSize;
        drops.length = 0;
        for(let i=0; i<newCols; i++) drops[i] = Math.random() * -50;
    });
    
    resizeObserver.observe(parent);

    return () => {
      clearInterval(interval);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
      style={{ opacity: 1 }} 
    />
  );
};

export default CardMatrixRain;
