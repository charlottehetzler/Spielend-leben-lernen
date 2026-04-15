// Dropdown menu toggle
document.addEventListener("DOMContentLoaded", function () {
  const dropdownButton = document.getElementById("dropdownMenuButton");
  const dropdownMenu = document.querySelector(".dropdown-menu");

  if (dropdownButton && dropdownMenu) {
    dropdownButton.addEventListener("click", function (e) {
      e.stopPropagation();
      dropdownMenu.classList.toggle("show");
    });

    // Close dropdown when clicking outside
    document.addEventListener("click", function (e) {
      if (
        !dropdownMenu.contains(e.target) &&
        !dropdownButton.contains(e.target)
      ) {
        dropdownMenu.classList.remove("show");
      }
    });
  }
});

// Mapbox initialization (only on contact page)
document.addEventListener("DOMContentLoaded", function () {
  const mapElement = document.getElementById("map");

  if (mapElement && typeof mapboxgl !== "undefined") {
    // IMPORTANT: Replace this with your actual Mapbox access token
    mapboxgl.accessToken =
      "pk.eyJ1IjoiY2hldHpsZXIiLCJhIjoiY2sxbmprZzVsMDhnMDNucnljYnZuYjg3MSJ9.bfpBECHO7lItHCBmwTbrIQ";

    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: [8.6, 50],
      zoom: 8,
    });

    // Marker for Frankfurt (panta rhei)
    new mapboxgl.Marker().setLngLat([8.67, 50.13]).addTo(map);

    // Marker for Seeheim-Jugenheim (Menschenraum)
    new mapboxgl.Marker().setLngLat([8.65, 49.76]).addTo(map);
  }
});

// Set active nav link based on current page
document.addEventListener("DOMContentLoaded", function () {
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(
    "#navbar-items a, .dropdown-menu a",
  );

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (
      currentPath.endsWith(href) ||
      (href === "index.html" &&
        (currentPath === "/" || currentPath.endsWith("/")))
    ) {
      link.classList.add("active");
    }
  });
});
