function init_reveal() {
	// Full list of configuration options available here:
	// https://github.com/hakimel/reveal.js#configuration
	Reveal.initialize({
		controls: false,
		history: true,
		dependencies: [
	        // Syntax highlight for <code> elements
	        { src: 'plugin/highlight/highlight.js', async: true, callback: function() { hljs.initHighlightingOnLoad(); } },
	    ]
	});

	/* now built-in to reveal 3.0.0
	init_slide(Reveal.getCurrentSlide())
	Reveal.addEventListener( 'slidechanged', function( event ) {
		init_slide(event.currentSlide);
	} );
	function init_slide(slide) {		
	    // activate iframe
	    $(slide).find('iframe, img').each(function() {
	    	if (this.getAttribute('data-src'))
		    	this.setAttribute('src', this.getAttribute('data-src'))
	    })
	}*/
}

init_reveal();
