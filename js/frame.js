// Function to navigate the iframe with the id "ntnav_frame" back a page
function navigateBack() {
    // Get the iframe element with the id "ntnav_frame"
    var iframe = document.getElementById("ntnav_frame");
  
    // Check if the iframe exists and has a history object
    if (iframe && iframe.contentWindow.history) {
      // Go back a page in the iframe's history
      iframe.contentWindow.history.back();
    }
  }
  
  // Function to navigate the iframe with the id "ntnav_frame" forward a page
  function navigateForward() {
    // Get the iframe element with the id "ntnav_frame"
    var iframe = document.getElementById("ntnav_frame");
  
    // Check if the iframe exists and has a history object
    if (iframe && iframe.contentWindow.history) {
      // Go forward a page in the iframe's history
      iframe.contentWindow.history.forward();
    }
  }
  
  // Function to load a URL in the iframe with the id "ntnav_frame"
  function loadURL(url) {
    // Get the iframe element with the id "ntnav_frame"
    var iframe = document.getElementById("ntnav_frame");
    // Set the src property of the iframe to the specified URL
    iframe.src = url;
  }
  
  document.getElementById("ntnav_frame").addEventListener("load", function() {
    var url = document.getElementById("ntnav_frame").contentWindow.location.href;
    var urlText = document.getElementById("ntnav-url");
    console.log(url);
    urlText.innerHTML = "NTINT://" + url;
  });

  // Add a click event listener to the element with the id "ntnav-back-button"
  document.getElementById("ntnav-back-button").addEventListener("click", navigateBack);
  
  // Add a click event listener to the element with the id "ntnav-forward-button"
  document.getElementById("ntnav-next-button").addEventListener("click", navigateForward);
  
  // Add a click event listener to the element with the id "ntnav-home-button"
  document.getElementById("ntnav-home-button").addEventListener("click", function() {
    // Load the local file "content.html" in the iframe
    loadURL("content.html", "pehlanport.nt");
  });

  document.getElementById("ntnav-about-btn").addEventListener("click", function() {
    // Load the local file "content.html" in the iframe
    loadURL("content.html", "navigator.nt");
  });

  document.getElementById("ntnav-upgrades-btn").addEventListener("click", function() {
    // Load the local file "content.html" in the iframe
    loadURL("content.html", "navigator.nt/upgrade");
  });
