$(document).ready(function () {
  $("#submit").click(function (e) {
    e.preventDefault();
    console.log("Submit button clicked");

    let displayName = $("#displayName").val().trim();
    let commentText = $("#comment").val().trim();

    console.log("Display Name:", displayName);
    console.log("Comment Text:", commentText);

    if (displayName && commentText) {
      console.log("Condition passed");

      let commentHtml = `<div class="comment">
<div class="profile-icon"></div>
<div class="comment-content">
    <p class="comment-author">${displayName}</p>
    <p>${commentText}</p>
    <div class="comment-actions">
        <button class="edit-comment">Edit</button>
        <button class="delete-comment">Delete</button>
    </div>
</div>
</div>`;

      console.log("Generated HTML:", commentHtml);
      $(".comments-section").prepend(commentHtml);
      console.log("Comment should be added now");

      $("#displayName").val("");
      $("#comment").val("");
    } else {
      console.log("Condition failed - one of the fields is empty");
    }
  });

  $(document).on("click", ".delete-comment", function () {
    $(this).closest(".comment").remove();
    console.log("Comment deleted");
  });

  $(document).on("click", ".edit-comment", function () {
    let commentDiv = $(this).closest(".comment");
    let commentP = commentDiv.find("p:first");
    let currentText = commentP.text();
    let editText = prompt("Edit your comment:", currentText);
    if (editText !== null) {
      commentP.text(editText);
      console.log("Comment edited");
    } else {
      console.log("Edit cancelled");
    }
  });
});
