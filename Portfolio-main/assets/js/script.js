fetch('https://api.github.com/users/Krishnaraj017').then(response => response.json()).then(data =>{
    let stars = document.getElementsByClassName('stars')[1];   
    let forks = document.getElementsByClassName('forks')[1]; 
    stars.innerHTML+=" " + data['stargazers_count']; 
    forks.innerHTML+=" " + data['forks_count'];
}).catch((err)=>{
    console.log(err);
})
// Function to handle the like button click event
// Flag variable to track if the like button has been clicked
var likeButtonClicked = false;

// Function to handle the like button click event
function likeButtonClickedHandler() {
  // Check if the like button has already been clicked
  if (!likeButtonClicked) {
    var likeCountElement = document.getElementById('likeCount');
    var currentCount = parseInt(likeCountElement.innerText);
    var newCount = currentCount + 17;
    likeCountElement.innerText = newCount;

    // Update the message in Gmail
    var messageElement = document.getElementById('message');
    messageElement.innerText = 'You liked this page!';

    // Set the flag variable to true to indicate the button has been clicked
    likeButtonClicked = true;
    
    // Disable the like button
    likeButton.disabled = true;
  }
}

// Attach event listener to the like button
var likeButton = document.getElementById('likeButton');
likeButton.addEventListener('click', likeButtonClickedHandler);
