/****
 * 
 * Magara Etchien N'gouan
 * 
 * 
 * 
 * Description:
 * 
 * Create multiple squares/boxes with letters inside. There should be 26 squares/boxes for all the letters (A to Z) next to each other.
Make all the squares draggable.
You should be able to drag and drop the letters depending on their coordinates x and y.
 */

function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
 }
 function draggingNow(event) {
    document.getElementById("box").innerHTML = "Dragged successfully!";
 }
 function dropNow(event) {
    event.preventDefault();
 }
 function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
    document.getElementById("box").innerHTML = "The element dropped successfully!";
 }