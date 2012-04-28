(function( window, document, undefined ) {

    function init() {

        $('#readFile').on( 'click', function( evt ) {
            evt.preventDefault();
            evt.stopPropagation();

            var url = 'data/bebe-mes-a-mes.js',
                $result = $('#result');
            

            $.getJSON( url, function( result ){

                traverse( result.data.bebe, function( i, v ) {

                    $.each(v, function( idx, val ) {
                        if ( typeof val === 'object' ) {
                            $. each( val, function( ii, vv ) {
                                console.log(ii + ' - ' + vv);
                            });
                        }
                        console.log(idx + ' - ' + val);
                    });
                    
                
                });
                /*
                var p = result.data;

                for (var key in p ) {
                    if (p.hasOwnProperty(key)) {
                        console.log(key + " -> " + JSON.stringify(p[key]));
                    }
                }
                */

                /*
                $.each( result.data, function( idx, val ) {

                    //if ( typeof idx === 'string' ) {
                    //
                        $.each( val, function( i, v ) {

                            console.log(i, v);
                            $.each(v, function( ii, vv ) {

                                console.log(ii, vv);
                                
                                if ( typeof vv === 'object' ) {

                                    $.each( vv, function( iii, vvv ) {
                                        console.log(iii, vvv);
                                        if ( typeof iii === 'string' )
                                            $result.append( vvv ).append('<br />');
                                        else 
                                            $result.append( iii + 'YYY' + vvv ).append('<br />');
                                    });

                                } else if ( typeof vv === 'string' ) {

                                    $result.append( vv ).append('<br />');

                                }

                            });
                        });
                    //}
                });
                */
                
            });
           
        });
        
    }

//called with every property and it's value
function process(key,value) {
}

function traverse(o,func) {
        for (i in o) {
            func.apply(this,[i,o[i]]);  
            if ( i !== [i,o[i]][0] && typeof(o[i]) == "object" ) {
                //going on step down in the object tree!!
                traverse(o[i], func);
            }
        }
}

    init();

})( window, document );
