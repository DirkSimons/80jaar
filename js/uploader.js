$("#Foto").on("change", function(e){
  console.log(e.target.files[0]);
  var storageRef = firebase.storage().ref('previews/'+e.target.files[0].name);
  var uploadTask = storageRef.put(e.target.files[0]);

  uploadTask.on('state_changed',
  function(snapshot) {
  // Observe state change events such as progress, pause, and resume
  // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
  var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  console.log('Upload is ' + progress + '% done');
  switch (snapshot.state) {
    case firebase.storage.TaskState.PAUSED: // or 'paused'
      console.log('Upload is paused');
      break;
    case firebase.storage.TaskState.RUNNING: // or 'running'
      console.log('Upload is running');
      break;
  }
}, function(error) {
  // Handle unsuccessful uploads
}, function() {
  // Handle successful uploads on complete
  // For instance, get the download URL: https://firebasestorage.googleapis.com/...
  downloadURL = uploadTask.snapshot.downloadURL;
  console.log(downloadURL);

  });
  //uploadTask.on('state_changed', function bezig, function error, function gedaan)
});
