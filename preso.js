function init_reveal() {
	// Full list of configuration options available here:
	// https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		controls: false,
		progress: true,
		history: true,
		center: true,

		theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
		transition: Reveal.getQueryHash().transition || 'default', // default/cube/page/concave/zoom/linear/fade/none

		// Parallax scrolling
		// parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
		// parallaxBackgroundSize: '2100px 900px',

		// Optional libraries used to extend on reveal.js
		dependencies: [
			{ src: 'libs/revealjs/reveal.js-2.6.2/lib/js/classList.js', condition: function() { return !document.body.classList; } },
			{ src: 'libs/revealjs/reveal.js-2.6.2/plugin/markdown/marked.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'libs/revealjs/reveal.js-2.6.2/plugin/markdown/markdown.js', condition: function() { return !!document.querySelector( '[data-markdown]' ); } },
			{ src: 'libs/revealjs/reveal.js-2.6.2/plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
			{ src: 'libs/revealjs/reveal.js-2.6.2/plugin/zoom-js/zoom.js', async: true, condition: function() { return !!document.body.classList; } },
			{ src: 'libs/revealjs/reveal.js-2.6.2/plugin/notes/notes.js', async: true, condition: function() { return !!document.body.classList; } }
		]
	});

	Reveal.addEventListener( 'slidechanged', function( event ) {
	    // event.previousSlide, event.currentSlide, event.indexh, event.indexv

	    // activate iframe
	    $(event.currentSlide).find('iframe').each(function() {
	    	console.log(this.getAttribute('data-src'))
	    	this.setAttribute('src', this.getAttribute('data-src'))
	    })
	} );
}

init_reveal();
