const searchInput = document.getElementById('searchInput');
const profiles = document.querySelectorAll('.profile');

searchInput.addEventListener('keyup', function(event) {
  const searchText = event.target.value.toLowerCase();
  
  profiles.forEach(function(profile) {
    const name = profile.querySelector('h2').textContent.toLowerCase();
    
    if (name.includes(searchText)) {
      profile.style.display = 'block';
    } else {
      profile.style.display = 'none';
    }
  });
});