//silence
if (typeof confetti === 'function') {
    confettiPrinter()

  } else {
    console.error('Confetti library not loaded');
  }

  function confettiPrinter(){
    let scalar = 2;
    let unicorn = confetti.shapeFromText({ text: '😹', scalar });

    let defaults = {
    spread: 360,
    ticks: 60,
    gravity: 0,
    decay: 0.96,
    startVelocity: 15,
    shapes: [unicorn],
    scalar
    };

    function shoot() {
    confetti({
        ...defaults,
        particleCount: 20
    });

    confetti({
        ...defaults,
        particleCount: 5,
        flat: true
    });

    confetti({
        ...defaults,
        particleCount: 15,
        scalar: scalar / 2,
        shapes: ['circle']
    });
    }

    setTimeout(shoot, 0);
    setTimeout(shoot, 100);
    setTimeout(shoot, 200);
    setTimeout(shoot, 300);
  }