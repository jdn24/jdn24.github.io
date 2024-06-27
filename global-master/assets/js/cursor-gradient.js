if (!('ontouchstart' in window)) {
    document.addEventListener('mousemove', function(e) {
      const x = e.clientX; // Get the horizontal coordinate
      const y = e.clientY; // Get the vertical coordinate
      const gradientSize = 100; // Size of the gradient effect

      // Update the background to a radial gradient centered on the cursor
    document.body.style.background = `radial-gradient(circle ${gradientSize}px at ${x}px ${y}px, #0f33ff3f, transparent)`;
    });
}