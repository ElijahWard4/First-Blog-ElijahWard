console.log('form.js loaded');

document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    // Get form values
    var username = document.querySelector('input[name="username"]').value;
    var title = document.querySelector('input[name="title"]').value;
    var content = document.querySelector('textarea[name="content"]').value;

    // Check if form is complete
    if (username.trim() === '' || title.trim() === '' || content.trim() === '') {
        alert('Please complete the form.'); // Show alert message
    } else {
        // Store blog post data to localStorage
        var postData = {
            username: username,
            title: title,
            content: content
        };
        localStorage.setItem('postData', JSON.stringify(postData));
        
        // Redirect to posts page (index.html)
        window.location.href = 'blog.html';
    }
});

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}