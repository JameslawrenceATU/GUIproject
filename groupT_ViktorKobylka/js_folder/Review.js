//made by Dmytro Kupreiev g00425387

let i = 0; //declaring a counting variable

function clickFunction(){ //this function works when you press the button under text area
    let textInBox; // declaring variable that will hold a string
    let nameInBox; // declaring variable that will hold a string
    textInBox=document.getElementById("inBox").value; // gets the string value of the review by id
    nameInBox=document.getElementById("inBoxName").value; // gets the string value of the name by id
    i++; // increment value in order to fill the review box
    switch(i) { // switch checks what number of the review we working on 
        case 1: // working on 1 review
            document.getElementById("myReview1").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview1 id
            document.getElementById("Name1").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName1 id
            break; // exit the switch statement
        case 2: // working on 2 review
            document.getElementById("myReview2").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview2 id
            document.getElementById("Name2").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName2 id
            break; // exit the switch statement
        case 3: // working on 3 review
            document.getElementById("myReview3").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview3 id
            document.getElementById("Name3").innerHTML ="Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName3 id
            break; // exit the switch statement
        case 4: // working on 4 review
            document.getElementById("myReview4").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview4 id
            document.getElementById("Name4").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName4 id
            break; // exit the switch statement
        case 5: // working on 5 review
            document.getElementById("myReview5").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview5 id
            document.getElementById("Name5").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName5 id
            break; // exit the switch statement
        case 6: // working on 6 review
            document.getElementById("myReview6").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview6 id
            document.getElementById("Name6").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName6 id
            break; // exit the switch statement
        case 7: // working on 7 review
            document.getElementById("myReview7").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview7 id
            document.getElementById("Name7").innerHTML = "Name: " +  nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName7 id
            break; // exit the switch statement
        case 8: // working on 8 review
            document.getElementById("myReview8").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview8 id
            document.getElementById("Name8").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName8 id
            break; // exit the switch statement
        case 9: // working on 9 review
            document.getElementById("myReview9").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview9 id
            document.getElementById("Name9").innerHTML = "Name: " + nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName9 id
            break; // exit the switch statement
        case 10: // working on 10 review
            document.getElementById("myReview10").innerHTML = textInBox; // gets the value of textarea and pass it to the <p> tag with myReview10 id
            document.getElementById("Name10").innerHTML = "Name: " +  nameInBox; // gets the value of textarea name and pass it to the <h1> tag with myName10 id
            break; // exit the switch statement
        default:
            break; // exit the switch statement
    }
}

