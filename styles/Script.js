function  Modal(){
	let modal = document.querySelector('.modal')
	let fundo = document.querySelector('.background_modal')

	modal.style.display="block";
	fundo.style.display = "block"
}

function FecharModal(){
	let modal = document.querySelector('.modal')
	let fundo = document.querySelector('.background_modal')

	modal.style.display="none";
	fundo.style.display = "none"

}