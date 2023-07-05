function showImageHereFunc() {
    var total_file=document.getElementById("uploadImageFile").files.length;
    for(var i=0;i<total_file;i++) {
      $('#showImageHere').append("<div class='cardo'><img src='"+
      URL.createObjectURL(event.target.files[i])+"'><button onclick='borrar(this)'>Eliminar</button></div>");
    }
  }
  
  function borrar(div) { 
    div.parentNode.remove();
  }