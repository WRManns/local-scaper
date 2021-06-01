var resultTextEl = document.querySelector('#result-text');
var resultContentEl = document.querySelector('#result-content');
var resultSummaryEl = document.querySelector('#result-summary');

var count=0;
var count2=0;
let commit;
let libraryGetEl;
let linkButtonEl;
let saveButtonEl;

async function fetchArticles() {
    let response = await fetch("https://news67.p.rapidapi.com/feed?limit=10&skip=0&language=en&source=apnews.com", {
		method: "GET",
		headers: {
			"x-rapidapi-key": "47f533e0d5msh186f53b5ecb9125p19c322jsn6064e31069db",
			"x-rapidapi-host": "news67.p.rapidapi.com"
		}
	})
  
    libraryGetEl = document.createElement('a');
	libraryGetEl.textContent = 'Show Stored Articles';
	libraryGetEl.classList.add('btn', 'btn-dark');
	libraryGetEl.setAttribute('id', "libGet");
	resultContentEl.append(libraryGetEl); 
    
    commit = await response.json();
	
htmlOutput();
	    
}
	

	
 

/*.then(response => {
	//console.log(response);
	//resultTextEl.textContent = response.json();
	resultTextEl.textContent =  response.text();
	
    //let text = await response.text(); // read response body as text

//alert(text.slice(0, 80) + '...');
})
.catch(err => {	console.error(err);
});*/


function htmlOutput(){
for(i=0;i<10;i++){
	
	var resultCard = document.createElement('div');
	resultCard.classList.add('card', 'bg-light', 'text-dark', 'mb-3', 'p-3');
  

	var resultBody = document.createElement('div');
    //resultBody.classList.add('card-body');
    resultCard.append(resultBody);

	var bodyContentEl = document.createElement('p');
	bodyContentEl.innerHTML =
	  commit[i].Cities[0].city_names + '<br>' + commit[i].Title ;
	     
	  resultBody.append( bodyContentEl);
       
	
	  linkButtonEl = document.createElement('a');
	  linkButtonEl.textContent = 'Read More';
	  linkButtonEl.setAttribute('href', commit[i].Url);
	  linkButtonEl.classList.add('btn', 'btn-dark');
	  
	 if(i==0){ 
	  
		var instructionEl = document.createElement('h6');
	
	  instructionEl.innerHTML = "Click Back Arrow on Browser to return from Read More";
	 }
	  
	 
	  saveButtonEl = document.createElement('button');
	  saveButtonEl.textContent = 'Save Article to Library';
	  saveButtonEl.setAttribute('type', 'button');
	  saveButtonEl.setAttribute('id', i.toString());
	  saveButtonEl.classList.add('btn', 'btn-dark');
	
	  $('button').click(storeArticle)
	  $('#libGet').click(libFetch);
	  	

    if (i==0){
	  resultBody.append( bodyContentEl, linkButtonEl, saveButtonEl, instructionEl);
	
		resultContentEl.append(resultCard);
	  }
	else {resultBody.append( bodyContentEl, linkButtonEl, saveButtonEl);
	
		resultContentEl.append(resultCard);
	  }
	
	}
	
	count=0;
	count2=0;
}

//        Storing and Saving Articles
	  

function libFetch(){
	//alert("libStore");
	while(count2++ < 1){
		 alert("fetching");
	}
   return 1;
  }	


function storeArticle () {
   while(count++ < 1){
   var saveID = $( this ).attr("id");
   var saveIDInt=parseInt(saveID);
   alert(commit[saveIDInt].Url);
   return 1;
   } 
  }


fetchArticles();
 