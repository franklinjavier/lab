(function( window, document, undefined ) {

    function init() {

        $('.readFile').on( 'click', function( evt ) {
            evt.preventDefault();
            evt.stopPropagation();

            var url = $(this).data('file'),
                $result = $('#result'),
                template = '';

            $result.empty();
            
            $.getJSON( url, function( result ) {

                // Se retornar um JSON invalido, interrompe aqui
                if ( result === undefined || 
                     ( typeof result !== 'object' && 
                     ( typeof result === 'string' && $.trim(result).charAt(0) !== '{' )) ) { 
                         return false;
                } 

                // Se o retorno for do tipo string, converte para objeto JSON
                if ( typeof result === 'string' ) {
                    result = $.parseJSON( result );
                }

                traverse( result.data, function( i, v ) {

                    var template = '<div class="wrapper">';

                    $.each( v, function( idx, val ) {

                        if ( typeof val === 'object' ) {

                            $.each( val, function( ii, vv ) {

                                template += '<div class="box">' + 
                                            '   <label>' + ii + '</label> <br />' +
                                            '   <textarea>' + vv + '</textarea>' + 
                                            '</div>';
                            });

                        } else {

                            template += '<div class="box">' + 
                                        '   <label>' + idx + '</label> <br />' +
                                        '   <textarea>' + val + '</textarea>' + 
                                        '</div>';
                        }

                    });

                    template += '</div>';  // wrapper

                    $result.append( template );
                
                });

            });
           
        });
        
    }

    var traverse = function ( obj, callback ) {

        for ( i in obj ) {

            callback.apply( this, [i, obj[i]] );  

            if ( i !== [i, obj[i]][0] && typeof obj[i] === "object" ) {
                traverse( obj[i], callback );
            }

        }
    }

    init();

})( window, document );
