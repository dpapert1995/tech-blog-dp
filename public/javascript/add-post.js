// New Post Form Handler
async function newFormHandler(event) {
    event.preventDefault();
    const title = document.querySelector('input[name="post-title"]').value;
    const postText = document.querySelector('input[name="post-text"]').value;

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        postText
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  // Event Listener for the new post submit button
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);