// rewrite of script file to be all jquery, good luck have fun :3

$(document).ready(function()
{
	//hide all of the list items prior to user clicking the see item button
	$("#ingredientsList > li").hide();
	$("#stepsList > li").hide();

	//allowing button to drop down the items
	$("#showNextIngredients").click(function(event)
	{
		$('#ingredientsList > li:hidden:first').show();

		return false;
	})

	$("#showNextSteps").click(function(event)
	{
		$('#stepsList > li:hidden:first').show();

		return false;
	})

	//allowing user to add input to lists
	$('#ingredientsButton').click(function(event)
	{
		if($('#ingredientsInput').val() != "")
		{
			//$('#ingredientsList').append("test"); 

			$("#ingredientsList").append('<li>' + $('#ingredientsInput').val() + '</li>');

			$("#ingredientsInput").val("");

		}

		//$('#ingredientsList').append($('#ingredientsInput').val());

		return false;
	})

	$('#stepsButton').click(function(event)
	{
		if($('#stepsInput').val() != "")
		{
			//$('#ingredientsList').append("test"); 

			$("#stepsList").append('<li>' + $('#stepsInput').val() + '</li>');

			$("#stepsInput").val("");

		}

		//$('#ingredientsList').append($('#ingredientsInput').val());

		return false;
	})
})