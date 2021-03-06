var config = {
        plugins: [
            // "video-png"     // Display the video feed as static pngs (work in every browser)
          // Display the video as a native h264 stream decoded in JS
          // , "hud"           // Display the artificial horizon, altimeter, compass, etc.
          "battery",       // Display a simple battery widget in the header bar
          "nav",
          "video-feed",         // Pilot the drone with the keyboard
          "flight-recorder",
          "HUD"
          // , "blackbox"      // Experimental: Records all mision data (navData, raw video, PaVE headers, etc.)
        //, "replay"        // Experimental: Replay the data recorded by the blackbox
        ],

        flightrecorder: {
          path: "./videos"
        }

        // Config for pilot plugin
        // keyboard: 'azerty',

        // Config for blackbox plugin. Path is an existing folder where to store mission data
        // Each new mission will have its own timestamped folder.
        // blackbox: {
        //     path: "/tmp"
        // },

        // Config for replay plugin. Path points to a specific mission folder to be replayed.
        // replay: {
        //     path: "/tmp/2013-06-03_09-10-33/"
        // }
};

module.exports = config;
