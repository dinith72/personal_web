const Portfolio = function() {
	function makeWords() {
		var words = [
			{
				text: "rapping",
				weight: 12.3
			}, {
				text: "css3",
				weight: 8
			}, {
				text: "javascript",
				weight: 14
			}, {
				text: "jquery",
				weight: 3
			}, {
				text: "programming",
				weight: 7
			}, {
				text: "python",
				weight: 10
			}, {
				text: "java",
				weight: 9
			}, {
				text: "qazi",
				weight: 15
			}, {
				text: "newText",
				weight: 7
			}
		];
		return words;
	}

	function makeWordCloud(words) {
		$('.teaching-domains').jQCloud(words, {delay: 120});
	}

	function displayWordCloud() {
		var count = 1;
		$(window).on('scroll', function() {
			var y_scroll_pos = window.pageYOffset;
			var scroll_pos_test = 2700; // set to whatever you want it to be
			var words = makeWords();
			if (y_scroll_pos > scroll_pos_test && count <= 1) {
				makeWordCloud(words);
				count++;
			}
		});
	}

	function designForm() {
		$("#my-modal form").addClass("my-form");
	}


// ****************** creating the type animation *******************/

	function typeAnimation() {
		
			Typed.new("#writing-text", {
				strings: [
					"am a Full-Stack Web Developer.", "love to code.", "create impact through developing.", "solve problems."
				],
				// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
				stringsElement: null,
				// typing speed
				typeSpeed:0,
				backDelay:1000,
				contentType: 'text',
				callback: function() {
					setTimeout(() => {
						typeAnimation();
					}, 2000);
					//$("#writing-text").css({"color": "#fff", "background-color": "#C8412B"});
					//typeAnimation();
				},
				preStringTyped: function() {},
				onStringTyped: function() {}
			});
			
		
		
	}

	return {
		displayWordCloud: displayWordCloud,
		typeAnimation: typeAnimation
	}

}();


Portfolio.displayWordCloud();
Portfolio.typeAnimation();


/********   creating the pdf file download ******* */

function downloadfile(){
	console.log("download");
	var element = document.createElement('a');
  element.setAttribute('href', './assets/Dinith_Jayabodhi_CV.pdf');
  element.setAttribute('download', 'Dinith_Jayabodhi_CV.pdf');
  element.setAttribute('target','_blank');

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}