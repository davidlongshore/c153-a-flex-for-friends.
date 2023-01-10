AFRAME.registerComponent("terrain-rotation-reader", {
    schema: {
        speedofrotation: { type: "number", default: 0 }
    },

    init: function () {
        window.addEventListener("keydown", (e) => {
          if (e.key === "ArrowRight") {
            if (this.data.speedofrotation < 0.1) {
              this.data.speedofrotation += 0.01;
            }
          }
          if (e.key === "ArrowLeft") {
            if (this.data.speedofrotation > -0.1) {
              this.data.speedofrotation -= 0.01;
            }
          }
        });
      },

    tick: function () {
        var maprotation = this.el.getAttribute("rotation");
        maprotation.y += this.data.speedofrotation;

        this.el.setAttribute("rotation", { y: maprotation.y })
    }

    

})

//plane rotation component
AFRAME.registerComponent("plane-rotation-reader", {
  schema: {
    speedOfRotation: { type: "number", default: 0 },
    speedOfAscent: { type: "number", default: 0 }
  },
  init: function () {
    window.addEventListener("keydown", (e) => {

      //get the data from the attributes
      this.data.speedOfRotation = this.el.getAttribute("rotation");      
      this.data.speedOfAscent = this.el.getAttribute("position");

      var planeRotation = this.data.speedOfRotation;      
      var planePosition = this.data.speedOfAscent;

      //control the attributes with the Arrow Keys
      if (e.key === "ArrowRight") {
        if (planeRotation.x < 10) {
          planeRotation.x += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowLeft") {
        if (planeRotation.x > -10) {
          planeRotation.x -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
      }
      if (e.key === "ArrowUp") {
        if (planeRotation.z < 20) {
          planeRotation.z += 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y < 2) {
          planePosition.y += 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
      if (e.key === "ArrowDown") {
        if (planeRotation.z > -10) {
          planeRotation.z -= 0.5;
          this.el.setAttribute("rotation", planeRotation);
        }
        if (planePosition.y > -2) {
          planePosition.y -= 0.01;
          this.el.setAttribute("position", planePosition);
        }
      }
    });
  }
});