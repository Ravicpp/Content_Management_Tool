document.addEventListener('DOMContentLoaded', () => {
  const blogList = document.getElementById('blog-list');
  const blogContent = document.getElementById('blog-content');
  const postTitleInput = document.getElementById('post-title');
  const postContentInput = document.getElementById('post-content');
  const savePostButton = document.getElementById('save-post');

  let posts = [];

  function renderBlogPosts() {
    blogList.innerHTML = '';
    posts.forEach((post, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = post.title;
      listItem.addEventListener('click', () => showPostContent(index));
      blogList.appendChild(listItem);
    });
  }

  function showPostContent(index) {
    blogContent.innerHTML = `
      <h2>${posts[index].title}</h2>
      <p>${posts[index].content}</p>
    `;
  }

  function savePost() {
    const title = postTitleInput.value;
    const content = postContentInput.value;
    if (title && content) {
      const newPost = { title, content };
      posts.push(newPost);
      renderBlogPosts();
      postTitleInput.value = '';
      postContentInput.value = '';
    }
  }

  savePostButton.addEventListener('click', savePost);
});
