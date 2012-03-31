/*
 *
 */

;( function( window, document, undefined ) {

    var app = (function() {        

        function init() {

            document.getElementById('example1').onclick = function( evt ){ 
                example1( evt );
            };

            document.getElementById('example2').onclick = function( evt ){ 
                example2( evt );
            };

            document.getElementById('easeInOut').onclick = function( evt ) {
                example3(evt.target.value);
            };
            document.getElementById('easeOut').onclick = function( evt ) {
                example3(evt.target.value);
            };
            
        }

        function animate( opts ) {

            var start = new Date;

            var id = setInterval( function() {

                var timePassed = new Date() - start;
                var progress = timePassed / opts.duration;
                
                if ( progress > 1 )
                    progress = 1;

                var delta = opts.delta( progress );
                opts.step( delta );
                
                if ( progress === 1 )
                    clearInterval( id );

            }, opts.delay || 10 );
        
        }

        // Example 1 --------------------------------------------------------
        function example1( evt ) {

            if ( evt.target.children.length ) { // not allow click in airplane

                var element = evt.target.firstElementChild,
                    left = 0;

                function frame() {
                    left++;  // update parameters 
                    element.style.left = left + 'px'; // show frame 
                    if ( left == 100 )  // check finish condition
                        clearInterval( id );
                }

                var id = setInterval( frame, 10 ); // draw every 10ms
            }
        }

        // Example 2 --------------------------------------------------------
        function example2( evt ) {

            if ( evt.target.children.length ) { // not allow click in airplane

                var element = evt.target.firstElementChild,
                    to = evt.target.clientWidth - element.clientWidth;

                animate({
                    delay: 10,
                    duration: 1000, // 1 sec by default
                    delta: makeEaseOut( bounce ),
                    step: function( delta ) {
                        element.style.left = to * delta + 'px'
                    }
                });
            }
        }

        function example3( effect ) {
        
            var textarea = document.getElementById('example3'),
                text = textarea.value,
                to = text.length, 
                from = 0;

            effect = effect === 'easeInOut' ? makeEaseInOut( bounce ) : makeEaseOut( bounce );

            animate({
                delay: 20,
                duration: 3000,
                delta: effect,
                step: function( delta ) {
                    var result = ( to - from ) * delta + from;
                    textarea.value = text.substr( 0, Math.ceil( result ) );
                }
            });
        }

        return {
            init : init
        };

    })();

    app.init();

})( window, document );


