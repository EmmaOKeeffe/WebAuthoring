// Emma O'Keeffe

// This function attaches or removes a classname to change the nav bar UI based on user click.
function showNavListOnClick() {
	// Gets the html element that has the id mainNavBar
    var x = document.getElementById("mainNavBar");
    if (x.className === "navBar") {
    	// if the element has a class name of just navBar when the click occurs then add the class responsive to it to activate the css for that class
      	x.className += " responsive";
    } else {
    	// Otherwise assign just navBar to it so it activates the css that hides the rest of the nav from the userand collapses the list.
      	x.className = "navBar";
    }
}