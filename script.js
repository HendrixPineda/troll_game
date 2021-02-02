// definition of the trollGame() function which runs the game
function  trollBattle() {
	//initial prompt question for the user which gets stored in a variable
	let action = window.prompt("You're walking through the forest minding your own business and a troll suddenly appears!\n\nDo you FIGHT the troll?\n\nDo you RUN from the troll?\n\nDo you BRIBE the troll?").toUpperCase();
	//switch statement to handle the initial player's choice
	switch(action) {
		case "FIGHT": {
			let skill= window.prompt("Are you a skilled fighter? (YES or NO)").toUpperCase();
			let strong= window.prompt("Are you stronger than a troll?(YES or NO)").toUpperCase();
		// IF statememnt that analyzes the user's responses
		if(skill ==="YES" || strong ==="YES") {
			// the use responded yes to at least one of those prompts
			// write positive result to the document
			document.getElementById("result").innerHTML = "You can be either stronger or more skilled than a troll to survive!<br/> You live another day!";
			//clear any losing messages from the document
			document.getElementById("death").innerHTML = "";
		    // play the winning audio file
		    document.getElementById("win").play();
		 }else {
		 	// the user responded NO to BOTH of the prompts
		 	//write the negative result to the document
		 	document.getElementById("death").innerHTML = "You're not skilled or strong? Why did you fight a troll?<br/> You have died!";
		 	//clear any positive messages from the document
		 	document.getElementById("result").innerHTML = "";
		 	//play the losing audio file
		 	document.getElementById("lose").play();
		 }
		break;
		}
		case "RUN":{
			var fast = window.prompt("Are you fast? (YES or NO)").toUpperCase();
			// IF statement that analyzes the user's response
			if(fast ==="YES"){
				// write positive result to the document
			document.getElementById("result").innerHTML = "Your speed has allowed you to survivee!<br/> But can you live with your cowardice?";
			//clear any losing messages from the document
			document.getElementById("death").innerHTML = "";
		    // play the winning audio file
		    document.getElementById("win").play();

			} else {
				//write the negative result to the document
		 	document.getElementById("death").innerHTML = "You coward! If you are going to run, at least be fast! <br/> You have died...";
		 	//clear any positive messages from the document
		 	document.getElementById("result").innerHTML = "";
		 	//play the losing audio file
		 	document.getElementById("lose").play();

			}
			break;
		}

		case "BRIBE":{
			let money = window.prompt("You have to pay the troll-toll.\nDo you have any money? (YES or NO)").toUpperCase();
			//if statement that checks the value of the money variable. if they say yes, continue asking how much
			if(money === "YES") {
				let amount = window.prompt("How much money do you have?\nPlease enter a NUMERIC VALUE.").toUpperCase();
				// convert the string you get from a promt to an integer
				amount = parseInt(amount);
				// check to see if the amount is enough to survive
				if(amount > 50) {
					// write positive result to the document
				document.getElementById("result").innerHTML = "Great job! The troll is happy. <br/> You can pass with your life!";
				//clear any losing messages from the document
				document.getElementById("death").innerHTML = "";
		    	// play the winning audio file
		    	document.getElementById("win").play();	
				}else {
					// you dont have enough money and you lose
					//write the negative result to the document
		 		document.getElementById("death").innerHTML = "The troll needs more money than that to let you pass!<br/>You have died...";
		 		//clear any positive messages from the document
		 		document.getElementById("result").innerHTML = "";
		 		//play the losing audio file
		 		document.getElementById("lose").play();
				}
			} else {
				// you said no to having money, you lose
            //write the negative result to the document
		 	document.getElementById("death").innerHTML = "What were you going to bribe with, your looks? Bruh!<br/>You have died...";
		 	//clear any positive messages from the document
		 	document.getElementById("result").innerHTML = "";
		 	//play the losing audio file
		 	document.getElementById("lose").play();
			}
			break;
		}

		default: {
			// the user has NOT entered a valid choice to the initial prompt
			window.alert("You entered: " + action + ". Not a valid choice, please try again!");
			trollBattle();
			break;
		}
	}//end of switch statememnt
}