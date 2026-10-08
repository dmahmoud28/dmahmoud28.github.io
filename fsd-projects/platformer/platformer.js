$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }
  }
  // Create walls - do not delete or modify this code
  createPlatform(-50, -50, canvas.width + 100, 50); // top wall
  createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(102, 1, 203)");
  // bottom wall
  createPlatform(-50, -50, 50, canvas.height + 500); // left wall
  createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

  //////////////////////////////////
  // ONLY CHANGE BELOW THIS POINT //
  //////////////////////////////////
  // TODO 1 - Enable the Grid
  toggleGrid();

  // TODO 2 - Create Platforms
  createPlatform(600, 300, 200, 20, "orange");
  createPlatform(1000, 545, 200, 20, "orange");
  createPlatform(1300, 300, 200, 20, "orange");
  createPlatform(200, 200, 150, 20, "orange");
  createPlatform(550, 150, 180, 20, "orange");
  createPlatform(850, 250, 150, 20, "orange");
  createPlatform(1100, 150, 180, 20, "orange");
  createPlatform(1400, 400, 150, 20, "orange");
  createPlatform(150, 700, 200, 20, "orange");
  createPlatform(800, 700, 200, 20, "orange");
  createPlatform(350, 600, 200, 20, "orange");
  createPlatform(350, 400, 200, 20, "orange");
  createPlatform(200, 475, 100, 20, "orange");

  // TODO 3 - Create Collectables
  createCollectable("grace", 200, 450, 0, 0);
  createCollectable("grace", 500, 350, 0, 0);
  createCollectable("grace", 800, 250, 0, 0);

  // TODO 4 - Create Cannons
  createCannon("top", 350, 1000,);
  createCannon("top", 1400, 1000,);
createCannon("top", 1500, 1000);
createCannon("right", 500, 1000);
  //////////////////////////////////
  // ONLY CHANGE ABOVE THIS POINT //
  //////////////////////////////////
  registerSetup(setup);
});
