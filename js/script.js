
/* user review js script */
var userCount = 0;

	function submitComment() {
		// Get the comment from the textarea
		var comment = document.getElementById('comment').value;

		// Clear the textarea after submitting
		document.getElementById('comment').value = '';

		// Increment the user count
		userCount++;

		// Create a new div for the comment
		var newCommentDiv = document.createElement('div');
		newCommentDiv.className = 'userComment';

		// Set the text content of the div to include the user and comment
		newCommentDiv.textContent = 'User ' + userCount + ': ' + comment;

		// Append the comment div to the comment container
		document.getElementById('commentContainer').appendChild(newCommentDiv);
	}