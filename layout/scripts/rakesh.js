$(document).ready(
	function(){
		$("#more1").hide();
		$("#more2").hide();
		$("#more3").hide();
		$("#more1btn").hide();
		$("#more2btn").hide();
		$("#more3btn").hide();
		$("#less1btn").click(
			function(){
				$("#less1").hide();
				$("#more1").show();
				$("#less1btn").hide();
				$("#more1btn").show();

			}
			);

		$("#less2btn").click(
			function(){
				$("#less2").hide();
				$("#more2").show();
				$("#less2btn").hide();
				$("#more2btn").show();
			}
			);

		$("#less3btn").click(
			function(){
				$("#less3").hide();
				$("#more3").show();
				$("#less3btn").hide();
				$("#more3btn").show();
			}
			);

		$("#more1btn").click(
			function(){
				$("#more1").hide();
				$("#less1").show();
				$("#more1btn").hide();
				$("#less1btn").show();				
			}
			);

		$("#more2btn").click(
			function(){
				$("#more2").hide();
				$("#less2").show();
				$("#more2btn").hide();
				$("#less2btn").show();
			}
			);

		$("#more3btn").click(
			function(){
				$("#more3").hide();
				$("#less3").show();
				$("#more3btn").hide();
				$("#less3btn").show();
			}
			);
	}
	);