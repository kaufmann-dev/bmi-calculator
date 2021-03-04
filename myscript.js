$(document).ready(function() {
	$cm = $('#cm');
	$kg = $('#kg');
	$bmi = $('#bmi');
	$input = $('input');

	function CheckCalc() {
		let inputs = 0;
		$input.each(function() {
			if($(this).val()) {
				inputs++;
			}
		});
		return inputs === 2;
	}

	function CheckReset() {
		let isTrue = false;
		$input.each(function() {
			if($(this).val()) {
				isTrue = true;
			}
		});
		return isTrue;
	}

	$input.on("change paste keyup", function() {
		UpdateButtons();
	});

	$('#calc').click(function() {
		if(!$cm.val()) {
			new CalculateHeight();
		} else if(!$kg.val()) {
			new CalculateWeight();
		} else {
			new CalculateBMI();
		}
		UpdateButtons();
	});

	$('#reset').click(function() {
		$input.each(function() {
			$(this).val("");
		});
		UpdateButtons();
	});

	function UpdateButtons() {
		if(CheckCalc()) {
			$('button#calc').prop("disabled", false);
		} else {
			$('button#calc').prop("disabled", true);
		}

		if(CheckReset()) {
			$('button#reset').prop("disabled", false);
		} else {
			$('button#reset').prop("disabled", true);
		}
	}

	function CalculateHeight() {
		console.log("Calculating height...");

		let result = Math.sqrt($kg.val() / $bmi.val()) * 100;

		console.log("Height: " + result);
		$cm.val(parseFloat(result.toFixed(1)));
		$(this).focus();
	}

	function CalculateWeight() {
		console.log("Calculating weight...");

		let result = $bmi.val() * (($cm.val() / 100) * ($cm.val() / 100));

		console.log("Weight: " + result);
		$kg.val(parseFloat(result.toFixed(1)));
		$(this).focus();
	}

	function CalculateBMI() {
		console.log("Calculating BMI...");

		let result = $kg.val() / (($cm.val() / 100) * ($cm.val() / 100));

		console.log("BMI: " + result);
		$bmi.val(parseFloat(result.toFixed(1)));
		$(this).focus();
	}
});