let pokusaji = 0;

function proveri() {
	let input = document.getElementById("input").value;
	if (input == 2120) {
		document.getElementById("rezultat").innerHTML = "Jeste!";
	} else {
		document.getElementById("rezultat").innerHTML = "Nije!";
	}
	pokusaji++;
	document.getElementById("broj pokusaja").innerHTML = "Broj pokušaja: " + pokusaji; 
}
