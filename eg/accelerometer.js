var five = require("../lib/johnny-five.js"),
    board, accel;

board = five.Board({
  debug: true
});

board.on("ready", function() {

  // Create a new `Accelerometer` hardware instance.
  //
  // five.Accelerometer([ x, y[, z] ]);
  //
  // five.Accelerometer({
  //   pins: [ x, y[, z] ]
  //   freq: ms
  // });
  //

  accel = five.Accelerometer({
    pins: [ "A3", "A4", "A5" ],
    freq: 100
  });

  // Accelerometer Event API

  // "acceleration"
  //
  // Fires once every N ms, equal to value of freg
  // Defaults to 500ms
  //
  accel.on("acceleration", function( err, timestamp ) {

    console.log( "acceleration", this.pitch, this.roll );
  });

  // "axischanged"
  //
  // Fires only when X, Y or Z has changed
  //
  accel.on("axischanged", function( err, timestamp ) {

    console.log( "axischanged", this.raw );
  });
});
