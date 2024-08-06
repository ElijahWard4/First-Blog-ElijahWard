function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

function displaySubmittedContent() {
    var storedData = localStorage.getItem('postData');
    if (storedData) {
        var postData = JSON.parse(storedData);
        var postContainer = document.querySelector('.content');
        if (postContainer) {
            var postElement = document.createElement('div');
            postElement.classList.add('post');
            postElement.innerHTML = `
                <h2>${postData.title}</h2>
                <p>By: ${postData.username}</p>
                <p>${postData.content}</p>
            `;
            postContainer.appendChild(postElement);
        }
    }
}

displaySubmittedContent();

const backButton = document.querySelector('.back-button');
if (backButton) {
    backButton.addEventListener('click', function() {
        window.location.href = 'index.html';
    });
}