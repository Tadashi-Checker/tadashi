/**
 * 
 *  Tadashi Open Source
 *  
*/

class ComponentFunction {

    /**
     * 
     * @arg obj var ex = new ComponentFunction(); ex.extend({blah: "chi"})
     *  
    */
    
    extend(obj: object) {
        
        for(var i in obj){

            this[i] = obj[i];

        }

    }

}


/**
 *
 * $grammar checks the grammar of text
 * $spelling checks the spelling of text
 * Both are part of the main constructor ComponentFunction 
 * 
*/

var $grammar = new ComponentFunction();
$grammar.extend({check: function(){}})

function TadasiCheckString(text : string){

    /**
     * 
     *  @param text The text that is run through spellcheck and grammar check.
     *  
    */

    var err = [];

    return err;

}