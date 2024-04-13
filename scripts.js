document.getElementById('toggle-mode').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelectorAll('.portfolio-item').forEach(function(item) {
        item.classList.toggle('dark-mode');
    });
});
