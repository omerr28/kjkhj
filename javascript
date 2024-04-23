window.onload = function() {
    const fill = document.querySelector(".fill");
    const empties = document.querySelectorAll(".empty");

    fill.addEventListener("dragstart",dragStart);
    fill.addEventListener("dragend",dragEnd);

    for(const empty of empties){
        empty.addEventListener("dragover",dragOver);
        empty.addEventListener("dragenter",dragEnter);
        empty.addEventListener("dragleave",dragLeave);
        empty.addEventListener("drop",dragDrop);
    }

    var resimURL = "https://source.unsplash.com/random/300x300";
    fill.style.backgroundImage = "Url('"+resimURL+"')";

    function dragStart(){
        this.className += " hold";
    }

    function dragEnd(){
        this.className = "fill";
    }

    function dragOver(e){
        e.preventDefault();
    }

    function dragEnter(e){
        e.preventDefault();
        this.className += " hovered";
    }

    function dragLeave(){
        this.className = "empty";
    }

    function dragDrop(){
        this.className= "empty";
        this.append(fill);
    }
    
}



