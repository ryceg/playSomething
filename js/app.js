console.log("app");


$(document).ready(function() {
    
    function loadGrammar(name) {
        $("#output").html("");

        var grammar = tracery.createGrammar(grammars['playSomething']);
        $("#grammar").html(grammar.toText());
            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#output").append(div);
    }

    setTimeout(function() {
        loadGrammar("playSomething");

    }, 1);
    // var name = "playSomething"

    window.onclick = function loadGrammar(name) {
        $("#output").html("");

        var grammar = tracery.createGrammar(grammars['playSomething']);
        $("#grammar").html(grammar.toText());
            var s = grammar.flatten("#afterOrigin.capitalize#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#output").append(div);
    }

    // setTimeout(function() {
    //     loadGrammar("playSomething");

    // }, 1);

    // $('#grammarSelect').on('change', function() {
    //     loadGrammar(this.value);
    // });
});
