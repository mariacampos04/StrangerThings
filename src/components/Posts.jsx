export default function Posts() {
  
    const postContainer = document.getElementById("all-posts-container");
    const cohortName = "2302-ACC-CT-WEB-PT-B"
    const API_URL = `https://strangers-things.herokuapp.com/api/${cohortName}`;
    
    
    
    const fetchPosts = async() =>{
      try{
        const response = await fetch ("https://strangers-things.herokuapp.com/api/2302-ACC-CT-WEB-PT-B/posts");
        const result = await response.json();
        return result;
      }
      catch(err){
        console.error('Uh oh, trouble fetching posts!')
      }
    };
    
    
    const renderPosts = (postList) =>{
      try{
        const posts = fetchPosts();
        posts.innerHTML = '';
        postList.forEach((post) => {
    
          const postElement = document.createElement('div')
          postElement.classList.add('post');
    
          postElement.innerHTML = `
          <h2>${post.title}</h2>
          <p> Description: ${post.description}</p>
          <p> Price: ${post.price}</p>
          <p> Created on: ${post.createdAt}</p>
          <p> Updated on: ${post.updatedAt}</p>
          <p> Author: ${post.isAuthor}</p>
          <p> Location: ${post.location}</p>
          <p> Delivery: ${post.willDeliver}</p>
          <p> Message: ${post.messages}</p>
        `;
        postContainer.appendChild(postElement);
      });
      }
    
      catch(err){
        console.error("Uh oh, trouble rendering posts!");
      }
    };
    
    //initiate the function
    const init = async () => {
      try {
          const posts = await fetchPosts();
          renderPosts(posts);
      } catch (error) {
          console.log("Error", error);
      }
    }
    
    init();
    

    // return (
    //     <div className="posts">
    //         <h1>POSTS</h1>
    //     </div>
    // );
}