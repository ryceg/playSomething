/**
 * @author Kate
 */

var grammars = {
    playSomething: {
        directionVariation: [
            "#direction.capitalize#",
            ""
        ],
        direction: [
            "you should try and play it",
            "play it (if possible)",
            "play it",
            "play it",
            "play it",
            "play it",
            "play it",
            "play it",
            "to the best of your ability, play it"
        ],
        dynamic: [
            "so friggin' quiet you can barely hear anything",
            "pianississimo",
            "extremely softly",
            "pianissimo",
            "softly",
            "softly",
            "moderately quietly",
            "loudly initially, and then getting progressively softer and softer",
            "softly to start, and then get progressively louder",
            "in a constant shifting pattern of crescendos and decrescendos",
            "while decrescendoing",
            "while crescendoing",
            "mezzo-piano",
            "mezzo-forte",
            "moderately loud",
            "reasonably loud",
            "louder than anybody else, then very quiet",
            "obnoxiously loud",
            "forte",
            "fortissimo"
        ],
        genre: [
            "country",
            "metal",
            "rock",
            "classical"
        ],
        meter: [
            "in common time",
            "in 4/4",
            "like a waltz",
            "in 3/4",
            "like a boogie",
            "like dubstep",
            "like you're Jacob Collier"
        ],
        modifier: [
            "#dynamic#",
            "#speed#",
            "#liccModifier#",
            "#liccModifier#",
            "#technique#"
        ],
        technique: [
            "in a way that your instrument is not normally played",
            "staccato",
            "legato",
            "with microtonal variations",
            "with slight detunings (if possible)"
        ],
        directionHandler: [
            ". #direction.capitalize# #modifier#",
            ". #direction.capitalize# #modifier#",
            ", and #direction# #modifier#",
            " #modifier#",
            " #modifier#",
            " #modifier#",
            " #modifier#"
        ],
        noise: [
            "loud noise",
            "as close to an explosion as you can",
            "ominously"
        ],
        note: [
            "something#directionHandler#",
            "anything#directionHandler#",
            "#letterNotes.a#",
            "something interesting#directionHandler#",
            "something that contrasts nicely#directionHandler#",
            "something in groups of #number.s#. #direction.capitalize# #modifier#",
            "#letterNotes.a# at any pitch. #direction.capitalize# #letterNotesModifier#",
            "#letterNotes.a# and #letterNotes.a# #shortSpeedOrNo# in your #register# register",
            "#letterNotes.a# and #letterNotes.a# #shortSpeedOrNo# in your #register# register#letterNotesDirectionHandler#"
        ],
        letterNotesModifier: [
            "#speed# #forHowLong#",
            "#number# times",
            "#forHowLong#"
        ],
        letterNotesDirectionHandler: [
            ". #direction.capitalize# #letterNotesModifier#",
            ". #direction.capitalize# #letterNotesModifier#",
            ", and #direction# #letterNotesModifier#",
            " #letterNotesModifier#",
            " #letterNotesModifier#",
            " #letterNotesModifier#",
            " #letterNotesModifier#"
        ],
        notesOrSilence: [
            "#note#",
            "#collab#",
            "#note##forHowLongChance#",
            "#silence#"
        ],
        collab: [
            "progressively quieter, letting someone else take over. Then, join back in with #note#",
            "nothing while you listen to what themes are developing around you. Once you've heard a motif, start to do call and response with the musician",
            "with a friend, starting a duo. Perform it as musically as possible, developing the themes that you've been working on in this piece",
            "a steady pulse for somebody else to play off of",
            "a cool beat for the others to jam to",
            "whatever the person to your left is playing",
            "something with the person to your right",
            "with feeling",
            "with #adjective#",
            "with one of the other musicians. Ignore this now, and just follow them, contributing to the music as best you can",
            "like you're in a well rehearsed band, and take a step back from the music if somebody else is having a solo",
            "with the other musicians. Don't worry about this, and listen to the music, and play intuitively, rather than doing whatever this app tells you to",
            "like you're not being told what to do by a couple lines of code"
        ],
        adjective: [
            "unbridled enthusiasm",
            "joy",
            "deep sadness",
            "melancholy",
            "rising tension"
        ],
        number: [
            "two",
            "three",
            "three",
            "five",
            "eleven"
        ],
        register: [
            "high",
            "middle",
            "low"
        ],
        silence: [
            "nothing#forHowLongChance#",
            "nothing#forHowLongChance#",
            "nothing#forHowLongChance#",
            "nothing, and listen to what other people are playing",
            "nothing, and notice what sort of motifs other people are playing. When you play again, try and incorporate them into your improv",
            "nothing. Let someone else have a solo",
            "nothing. Let someone else have a solo",
            "nothing. Let someone else have a solo",
            "a supporting role for someone else to have a solo",
            "nothing. Appreciate what the other musicians are playing",
            "only when it would enhance what other people are playing",
            "nothing. Be absolutely still, for as long as you feel is necessary",
            "nothing. Don't move an inch",
            "nothing. Don't even think of moving a muscle",
            "nothing, but dance around as if you're playing the most complex solo in the world"
        ],
        shortSpeedOrNo: [
            "",
            "#shortSpeed#"
        ],
        shortSpeed: [
            "rapidly",
            "slowly",
            "as fast as possible",
            "moderately quickly",
            "as fast as a trill"
        ],
        speed: [
            "rather slowly",
            "at a decent pace",
            "hectically, changing between two different tempos at random intervals",
            "as slowly as possible",
            "as briefly as possible, with lots of space between them",
            "at the tempo of #tempo.a#",
            "at the tempo of #tempo.a#",
            "#meter#",
            "#meter#",
            "#meter#",
            "at the tempo of #tempo.a# #meter#"
        ],
        tempo: [
            "larghetto",
            "largo",
            "andante",
            "andantino",
            "allegro",
            "allegretto",
            "presto",
            "presstissimo"
        ],
        forHowLong: [
            "for as long as you feel necessary#forHowLongChance#",
            "for approximately #number# seconds#forHowLongChance#",
            "until you've developed the idea sufficiently#forHowLongChance#",
            "until you run out of breath#forHowLongChance#",
            "until you get bored#forHowLongChance#",
            "until everyone else gets bored#forHowLongChance#"
        ],
        forHowLongChance: [
            "",
            ". #forHowLongThen#"
        ],
        forHowLongThen: [
            "#then.capitalize# #afterOriginNoFullStop#",
            "#then.capitalize# pause for a moment. Then, #afterOriginNoFullStop#"
        ],
        then: [
            "then, ",
            "after that, ",
            "immediately following that, ",
            "afterwards, "
        ],
        afterOriginNoFullStop: [
            "continue your motif. Then, play #notesOrSilence#",
            "build on your motif; theme and variations style. Then, play #notesOrSilence#",
            "repeat your motif #forHowLong#",
            "play your motif#forHowLongChance#",
            "develop your motif #forHowLong#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play #notesOrSilence#",
            "play the licc #liccModifier#",
            "take the opportunity to do some call and response with another musician",
            "#afterOriginSpecial#."
        ],
        afterOrigin: [
            "continue your motif. Then, play #notesOrSilence#.",
            "build on your motif; theme and variations style. Then, play #notesOrSilence#.",
            "repeat your motif #forHowLong#.",
            "play your motif#forHowLongChance#.",
            "develop your motif #forHowLong#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#.",
            "play #notesOrSilence#. If now's a good time to finish up, then start to do so.",
            "play #notesOrSilence#. If now's a good time to wind up, then wind it up.",
            "play the licc #liccModifier#.",
            "if you are playing in a group, take the opportunity to do some call and response with another musician.",
            "#afterOriginSpecial#."
        ],
        afterOriginSpecial: [
            "if you are playing in a group, take the opportunity to do some call and response with another musician",
            "play #letterNotes.a# and then scream at the top of your lungs",
            "take this moment to text a friend and tell them that you value them",
            "take a drink of water. If you don't have water, take a drink of beer. If you don't have beer, take a moment to re-evaluate your life choices",
            "take a bow",
            "Play your motif in a completely unrecognizable way through extended techniques. Then, gradually use fewer and fewer extended techniques until you play your motif in it’s original form"
        ],
        originStart: [
            "Build a motif out of #notesOrSilence#.",
            "Play #notesOrSilence# (making a motif out of it).",
            "Play the head to your favourite jazz standard. Then, play #notesOrSilence#.",
            "Try playing the hardest scale you know. Then, play #notesOrSilence#.",
            "Fake out the audience, by pretending to play. Then, play #notesOrSilence#.",
            "Play a motif (make sure to build on it as you improvise). Then, once you have played your motif, play #notesOrSilence#.",
            "Play a fragment of your favourite jazz standard. Then, play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play #notesOrSilence#.",
            "Play the licc #liccModifier#."
        ],
        origin: [
            "Play Something is #pieceOrCode.a# #written# by Rhys Gray. It is a #simpleWebapp# that #makes# #instructions# for #originPeople# to improvise over. #playWhatItTellsYouToDo# #moveOn# #clickToContinue#."
        ],
        playWhatItTellsYouToDo: [
            "Play what it tells you to do.",
            "Do what it tells you.",
            "Do what the app says.",
            "Follow the instructions presented to you.",
            "To your best ability, follow the directions."
        ],
        moveOn: [
            "If it doesn't tell you when to move on, you are free to move on at any time.",
            "If there are no instructions for when to move on, you are free to move on at any time.",
            "If it doesn't tell you when to move on, you are free to move on at any time.",
            "If there are no instructions for when to move on, you are free to move on at any time.",
            "If it doesn't tell you when to move on, you are free to move on at any time.",
            "If there are no instructions for when to move on, you are free to move on at any time.",
            "If it doesn't say when to go, go whenever. It's an app, not your mum."
        ],
        clickToContinue: [
            "Click to continue",
            "Press on the screen (assuming you're using a phone) to continue",
            "Click to start the music",
            "Click to start the chaos",
            "Click to begin"
        ],
        simpleWebapp: [
            "simple webapp",
            "simple webapp",
            "simple webapp",
            "simple webapp",
            "simple webapp",
            "simple webapp",
            "simple webapp",
            "needlessly complex webapp",
            "needlessly complex webapp",
            "needlessly complex webapp",
            "poor excuse of a composition"
        ],
        makes: [
            "makes",
            "produces",
            "creates"
        ],
        pieceOrCode: [
            "piece",
            "piece of code",
            "musical work",
            "abomination",
            "terrible piece of code"
        ],
        written: [
            "written",
            "composed",
            "coded",
            "created",
            "birthed"
        ],
        instructions: [
            "random instructions",
            "random performance directions",
            "totally random instructions",
            "complete gibberish"
        ],
        originPeople: [
            "any number of #people#",
            "as many #people# as you like",
            "as many #people# as you are comfortable with",
            "at least four #people#, but no more than 236",
        ],
        people: [
            "people",
            "musicians",
            "players",
            "people",
            "musicians",
            "players",
            "poor sods"
        ],
        liccModifier: [
            "#speed# #forHowLong#",
            "#number# times",
            "in the key of #letterNotes# #forHowLong#",
            // "",
            "#forHowLong#"
        ],
        letterNotes: [
            "A",
            "B flat",
            "B",
            "C",
            "C sharp",
            "D",
            "E flat",
            "E",
            "F",
            "F sharp",
            "G",
            "G sharp"
        ]
    }
//     neverbar : {
//         vipTitle : ["Dr.", "Professor", "Lord", "Sir", "Captain", "His Majesty"],
//         occupationBase : ["firefighter", "scientist", "spy", "smuggler", "mechanic", "astronaut", "adventurer", "pirate", "cowboy", "vampire", "detective", "soldier", "marine", "doctor", "ninja"],
//         occupation : ["space #occupationBase#", "erotic #occupationBase#", "professional #occupationBase#", "gentleman #occupationBase#", "#occupationBase#"],
//         name : ["Chesty", "Butch", "Saber", "Drake", "Thorax", "Brash", "Abs", "Burt", "Slate", "Bret", "Duke"],
//         surnameStart : "Up Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest Pants Chest West Long East North River South Snith Cross Aft Aver Ever Down Whit Rob Rod Hesel Kings Queens Ed Sift For Farring Coven Craig Cath Chil Clif Grit Grand Orla Prat Milt Wilt Berk Draft Red Black".split(" "),
//         surnameEnd : "castle hammer master end wrench bottom hammer wick shire gren glen swith bury every stern ner brath mill bly ham tine field groat sythe well bow bone wind storm horn thorne cart bry ton man watch leath heath ley".split(" "),
//         characterType : "android velociraptor dragon gorilla sasquatch alien squid cuttlefish".split(" "),
//         character : ["#characterType#", "#characterMod# #characterType#"],

//         drink : ["cup of chamomile tea", "glass of milk", "shot of vodka", "dry martini", "fuzzy navel", "appletini", "double shot of gin", "Campari", "glass of champagne", "bottle of Domaine Leroy Musigny Grand Cru"],
//         said : ["purred", "whispered", "said", "murmurred", "growled"],
//         characterMod : ["cybernetic", "robotic"],
//         description : ["muscled", "sexy", "dark", "well-dressed", "masculine", "dramatic", "dramatically lit", "boyish", "burly", "handsome", "erotic"],
//         surname : ["Mc#surnameStart.capitalize##surnameEnd#", "#surnameStart.capitalize##surnameEnd#"],

//         locationAdj : ["dimly lit", "crowded", "smoke-filled"],
//         locationBase : ["space station", "film studio", "70s nightclub", "undersea research station"],

//         titleNoun : ["desire", "night", "awakening", "surrender", "obsession", "vision", "proposition", "game", "promise", "arrangement", "treasure", "dream", "embrace", "struggle", "pleasure", "discovery", "wish", "need"],
//         titleAdj : ["dark", "erotic", "leather", "rough", "punishing", "burly", "country", "neon", "big-city", "whiskey", "shattered", "broken", "breathless", "tangled", "complicated", "captured", "priceless", "bound", "sinful", "forgotten", "forbidden", "gothic", "interstellar"],
//         title : ["#titleAdj.a# #titleNoun#", "#titleAdj# #titleNoun.s#", "#mcName#'s #titleNoun#"],
       
// response:[" <p>The #description# #scType# looked at him with interest.  'I'm #scName#.  #vipTitle# #scName# #surname#, #occupation#,' the #scType# #said#. 'I'll have #drink.a#.' <p>"],
//         meeting: ["#scType.a.capitalize# was sitting by the bar, alone, #description#, #description#.  #mcName# introduced himself.  'I'm #mcName#', he #said#. 'I'm #occupation.a#.  Can I buy you a drink?'"],
//  entry : ["...<p>#mcName# #surname# walked into the #locationAdj# #place#."],
//         plot : ["<h2>#title.capitalizeAll#</h2><p>#entry#<p>#meeting#<p>#response#"],
//         origin : "#[place:#locationBase#][mcType:#character#][scType:#character#][mcName:#name#][scName:#name#]plot#",

//     },

//     nightvale : {
//         introTheWeather : ["And now, the weather."],
//         instrument : ["ukulele", "vocals", "guitar", "clarinet", "piano", "harmonica", "sitar", "tabla", "harp", "dulcimer", "violin", "accordion", "concertina", "fiddle", "tamborine", "bagpipe", "harpsichord", "euphonium"],
//         musicModifier : ["heavy", "soft", "acoustic", "psychedelic", "light", "orchestral", "operatic", "distorted", "echoing", "melodic", "atonal", "arhythmic", "rhythmic", "electronic"],
//         musicGenre : ["metal", "electofunk", "jazz", "salsa", "klezmer", "zydeco", "blues", "mariachi", "flamenco", "pop", "rap", "soul", "gospel", "buegrass", "swing", "folk"],
//         musicPlays : ["echoes out", "reverberates", "rises", "plays"],
//         musicAdv : ["too quietly to hear", "into dissonance", "into a minor chord", "changing tempo", "to a major chord", "staccatto", "into harmony", "without warning", "briskly", "under the melody", "gently", "becoming #musicGenre#"],
//         song : ["melody", "dirge", "ballad", "poem", "beat poetry", "slam poetry", "spoken word performance", "hymn", "song", "tone poem", "symphony"],
//         musicAdj : ["yielding", "firm", "joyful", "catchy", "folksy", "harsh", "strong", "soaring", "rising", "falling", "fading", "frantic", "calm", "childlike", "rough", "sensual", "erotic", "frightened", "sorrowful", "gruff", "smooth"],
//         themeAdj : ["lost", "desired", "redeemed", "awakened", "forgotten", "promised", "broken", "forgiven", "remembered", "betrayed"],
//         themeNoun : ["the future", "love", "drinking", "space travel", "the railroad", "your childhood", "summertime", "the ocean", "sexuality", "wanderlust", "war", "divorce", "nature", "pain", "hope", "a home", "a lover", "a friend", "a marriage", "family", "death"],
//         theme : ["#themeNoun# #themeAdj#"],
//         weatherSentence : ["You recall #themeNoun# and #themeNoun#.", "It reminds you of the time you had #themeAdj# #themeNoun#.", "This is #musicAdj.a# #song# about #musicTopic#.", "#musicTopic.capitalize# is like #theme#, #musicAdj#.", "The singer's voice is #musicAdj#, #musicAdj#, yet #musicAdj#.", "#musicModifier.capitalize# #musicGenre# #instrument# #musicPlays# #musicAdv#."],
//         weatherDescription : ["#weatherSentence# #weatherSentence#"],
//         theWeather : ["#introTheWeather#<p class='weather'>Music plays. #[musicTopic:#theme#]weatherDescription#"],
//         react : ["shake", "moan", "cry", "scream", "wail", "rejoice", "dance", "cower", "howl"],

//         color : "orange blue white black grey purple indigo".split(" "),
//         animal : "spider raven crow scorpion coyote eagle owl lizard deer".split(" "),
//         concept : "#substance# #emotion# darkness love childhood time loss victory memory art thought belief life death caring".split(" "),
//         transitiveEmotion : ["fear", "regret", "long for", "love", "distrust", "trust", "envy", "care for"],
//         sense : ["feel", "hear", "see", "know"],

//         natureNoun : ["ocean", "mountain", "forest", "cloud", "river", "tree", "sky", "earth", "void", "desert"],
//         concreteNoun : ["#animal#", "#natureNoun#"],
//         verb : ["#transitiveEmotion#", "#react#"],
//         never : ["never", "never again", "hardly ever", "barely", "almost always", "always", "probably never", "even"],

//         glowing : ["glowing", "rising", "hovering", "pulsing", "blinking", "glistening"],
//         beingWith : ["talking to", "walking with", "listening to"],
//         weirdAdj : ["weird", "arcane", "dark"],
//         truly : ["safely", "truly", "legally", "ever", "already"],
//         person : ["angel", "woman", "man", "figure"],
//         character : ["#charAdj# #person#"],
//         charAdj : ["old", "young", "hooded", "headless", "dead-eyed", "faceless"],
//         charDescription : ["#never# #react.s# when they #sense# the #natureNoun#"],
//         arentReal : ["are illegal", "don't exist"],
//         ofCourse : ["obviously", "well, clearly", "seriously", "as we #truly# know", "as everybody knows"],

//         youKnow : ["#ofCourse#", "I mean", "well", "I guess", "you know", "#maybe#"],
//         episode : ["This is a story about #mc.a#. You know, the #mc# who #mcDesc#. Well, I was #beingWith# the #mc#, when we both saw this #myNoun#.  #glowing.capitalize#, #color#...well, more of #color.a#ish #color#.   We backed away because #ofCourse#, #myNoun.s# #arentReal#. That was the last we saw of it. #theWeather#  <p>You know, I miss the #myNoun#.  It was #evaluationAdj#.  I mean, #evaluationAdj#, for a #myNoun#.  #someday.capitalize#, I hope it comes back.  We'll see it, #glowing#, #color#...well, more of #color.a#ish #color#.  But it'll be back. #youKnow.capitalize#, #someday#. If not, #vagueReaction#. "],

//         anyway : ["anyway", "in such a world as this", "if it were truly so", "if anything ever was"],
//         butThen : ["but then", "if you could imagine", "for certain"],
//         ominousStatement : ["who could you #truly# #transitiveEmotion#, #anyway#?", "if you understand my meaning.", "everyone knows that.", "you had known that for years.", "you knew that already."],
//         recommend : ["mandate", "recommend", "advise", "suggest"],
//         asMyGrandmotherSaid : ["as #authority# always said", "as #authority# tells us", "as #recommend.ed# by #authority#"],
//         substance : "blood sand dust nothingness darkness light soil earth mud tar water bones flies honey".split(" "),
//         emotion : "fear love trust desire pride sorrow regret confusion glee happiness contentment terror anger rage jealousy".split(" "),
//         evaluationAdjBare : ["good", "great", "wonderful", "terrifying", "bewildering", "perfect", "beautiful", "terrible"],
//         evaluationAdj : ["just #evaluationAdjBare#", "pretty #evaluationAdjBare#", "#evaluationAdjBare#", "really #evaluationAdjBare#"],
//         maybe : ["I think", "maybe", "probably", "almost certainly"],
//         someday : ["in the end", "if the sun rises again", "when the time comes", "in a while", "eventually", "sooner or later"],
//         relative : ["mother", "father", "grandmother", "grandfather"],
//         authority : ["the government", "the sheriff's secret police", "the law", "the radiochip implanted in your mind", "the Constitution", "a secret, yet menacing government society", "your own #relative#", "my own #relative#"],
//         fullOf : ["full of", "covered in", "made of"],

//         vagueReaction : ["we all #react# and #react# in #emotion#", "it's about time", "it's #evaluationAdj#", "it's just so #evaluationAdj#", "I couldn't be happier", "isn't that #evaluationAdj#", "there's nothing that can be done", "but it hasn't always been that way", "but it won't always be that way"],
//         foo : ["#never# trust a #concreteNoun#. You can trust a #concreteNoun#, #maybe#", "I #verb#, therefore I am", "it's #concreteNoun.s# all the way down", "#concept# is the new #concept#", "the only good #concreteNoun# is a dead #concreteNoun#"],

//         saying : ["Don't #transitiveEmotion# the #myThing# because the #myThing# is #fullOf# #mySub#.  You will be #fullOf# #mySub#, too, #someday#.", "The #myThing# #react.s#.  The #myThing# #react.s#. The #myThing# #react.s# with #emotion# because it #sense.s# the #concept# that it will never have.", "We #sense# the #myThing# and #react# with #emotion#.  You #sense# the #myThing# and #react# with #emotion#.  The #myThing# #sense.s# you but does not #react#.", "The #natureNoun# is made of #mySub#. The #natureNoun# is made of #mySub#. We are all made of #mySub# and #vagueReaction#.", "[emo1:#transitiveEmotion#]#never.capitalize# #emo1# #concept#. Only ever #emo1# #concept#.  How could you #emo1# what you can #never# #sense#?"],
//         origin : ["#[myThing:#concreteNoun#][mySub:#substance#]saying#<p>Welcome to Night Vale. <p>...</p>#[mc:#character#][mcDesc:#charDescription#][myNoun:#concreteNoun#]episode#<p>...</p>Goodnight, Night Vale, goodnight."]
//     },

//     poem : {
//         move : ["flock", "race", "glide", "dance", "flee", "lie"],

//         bird : ["swan", "heron", "sparrow", "swallow", "wren", "robin"],
//         agent : ["cloud", "wave", "#bird#", "boat", "ship"],

//         transVerb : ["forget", "plant", "greet", "remember", "embrace", "feel", "love"],
//         emotion : ["sorrow", "gladness", "joy", "heartache", "love", "forgiveness", "grace"],
//         substance : ["#emotion#", "mist", "fog", "glass", "silver", "rain", "dew", "cloud", "virtue", "sun", "shadow", "gold", "light", "darkness"],
//         adj : ["fair", "bright", "splendid", "divine", "inseparable", "fine", "lazy", "grand", "slow", "quick", "graceful", "grave", "clear", "faint", "dreary"],
//         doThing : ["come", "move", "cry", "weep", "laugh", "dream"],

//         verb : ["fleck", "grace", "bless", "dapple", "touch", "caress", "smooth", "crown", "veil"],
//         ground : ["glen", "river", "vale", "sea", "meadow", "forest", "glade", "grass", "sky", "waves"],

//         poeticAdj : ["#substance#-#verb.ed#"],
//         poeticDesc : ["#poeticAdj#", "by #substance# #verb#'d", "#adj# with #substance#", "#verb.ed# with #substance#"],

//         ah : ["ah", "alas", "oh", "yet", "but", "and"],
//         on : ["on", "in", "above", "beneath", "under", "by"],

// punctutation: [",", ":", " ", "!", ".", "?"],

//         noun : ["#ground#", "#agent#"],
//         line : ["My #noun#, #poeticDesc#, my #adj# one", "More #adj# than #noun# #poeticDesc#", "#move.capitalize# with me #on# #poeticAdj# #ground#", "The #agent.s# #move#, #adj# and #adj#", "#poeticDesc.capitalize#, #poeticDesc#, #ah#, #poeticDesc#", "How #adj# is the #poeticDesc# #sub#", "#poeticDesc.capitalize# with #emotion#, #transVerb.s# the #noun#"],
//       poem: ["#line##punctutation#<br>#line##punctutation#<br>#line##punctutation#<br>#line#."],
//         origin : "#[sub:#noun#]poem#",
//     },

//     conference : {
//         "greetings" : ["Salud", "Bonjour", "Shalom", "Nihao", "Hello", "Aloha"],
//         "subjectAdj" : ["Digital", "Electronic", "Telekinetic", "Virtual", "Interactive"],
//         "subjectNoun" : ["Storytelling", "Narrative", "Intelligence", "Art", "Media", "Games"],
//         "subject" : ["#subjectAdj# #subjectNoun#", "#reimagining# #subjectAdj# #subjectNoun#"],
//         "reimagining" : ["Advancing", "The Future of", "Reimagining", "Inventing", "Reinventing", "New Directions in"],
//         "area" : ["Brazil", "Kauai", "Cape Verde", "Shanghai", "Barsoom", "Utopia", "Anchorage", "Europa", "Discworld", "world", "Miami", "Santa Cruz"],
//         "institute" : ["Academy", "Guild", "Symposium", "Hall", "Center", "University", "Laboratory", "Library", "Association"],
//         "conference" : ["Conference", "Workshop", "Symposium", "Forum"],
//         "place" : ["#area# #institute# of #subject#", "#subject# #institute# of #area#", "#conference# on #subject#"],

//         "controls" : ["keyboard", "mouse", "interpretive dance", "set of mechanical levers", "series of yelps and howls", "pattern of vocal ululations", "joystick", "Kinect", "EEG headset", "DDR mat", "Powerglove", "midi keyboard", "plastic guitar"],
//         "hardware" : ["Arduino", "Raspberry PI", "XBox360", "Android", "Altair 8800", "Commodore 64", "hacked toaster", "jail-broken iPhone", "Apple Lisa", "computer running Windows 95"],
//         "display" : ["shadow puppetry screen", "a set of teleprescence robots", "70mm film projector", "Sony Aibo", "vintage VCR", "Atari 2600", "Soviet-era military screen", "VirtualBoy", "Oculus Rift", "1957 oscilloscope", "1977 Apple II", "40ft projection"],
//         "showSpace" : ["the outside of DANM", "the inside of the DARC lab", "the DANM stairwell", "the women's restroom", "the UCSC cattle pens"],
//         "useCase" : ["exploring themes of #abstractThing#", "using the lens of #litDevice# from #field#", "in a one-time performance", "for the blind", "to be projected on #showSpace#", "played on a #hardware#", "running on a #hardware#", "shown on a #display#"],
//         "culturalProduction" : ["drama", "reality television show", "children's game", "playground rhyme", "poem", "novel", "jazz perfomance", "folk song", "puppet show", "opera", "theater performance", "poem", "musical production", "religious ceremony"],
//         "digitalArtifact" : ["webapp", "tabletop RPG", "open world game", "interactive #culturalProduction#", "digitally-enhanced #culturalProduction#", "hypertext fiction", "chose-your-own-adventure", "text adventure", "Flash-animated #culturalProduction#", "interactive #culturalProduction#", "Twine game"],
//         "litDevice" : ["iambic pentameter", "intersectional feminism", "alliteration", "parody", "the feeling of agency", "first-person narration", "magical realism", "unreliable narration", "foreshadowing", "irony", "frame stories", "breaking the fourth wall", "oral storytelling", "the 'hero' journey'", "the American dream", "gender roles", "plot structure", "character development", "the myth of Sisyphus", "the 'other'", "technological literacy", "narrative structure"],
//         "field" : ["the #nationality# diaspora", "contemporary American #culturalProduction.s#", "the #nationality#-American experience", "traditional #nationality# #culturalProduction.s#"],
//         "setting" : ["Edo Japan", "Medieval France", "graduate school", "the basement of the British Museum", "a neighborhood bar", "a suburban home", "a coffeeshop at closing time", "Weimar Germany", "a prison in an unnamed country", "1950s San Francisco", "pre-Columbian Mesoamerica", "ancient Egypt", "an era of space exploration", "a time far in the future", "a time before #abstractThing#", "London in the 60s", "high school in the 1980s", "the height of the drug wars"],
//         "abstractThing" : ["internal turmoil", "regret", "alcoholism", "body dysmorphia", "first dates", "coming-of-age", "passion", "love", "quiet desperation", "deperate loneliness", "hatred", "world-changing choices", "#nationality# imperialism", "#nationality# pride", "deep sorrows", "immeasurable loss", "rising hope", "boundless despair", "laughter", "societal disapproval", "instability", "difficult choices", "sacrifice", "cruel betrayal"],
//         "someDramaticStuff" : ["#abstractThing# in a time of #abstractThing#"],
//         "influence" : ["influence"],
//         "person" : ["a Mary-Sue character", "a strugging artist", "a teenage girl", "a nameless child", "an elderly woman", "an invisible observer", "an old man", "a young boy", "the author", "a cat", "a famous historical figure", "a high-ranking official"],
//         "aProtagonist" : ["#person#", "#person# lost in #setting#", "#person# in #setting#"],
//         "tellTheStory" : ["relate a tale", "paint a picture", "simulate the experience", "spin a story", "describe a world", "tell"],
//         "examination" : ["examination", "reimagining", "interpretation", "appropriation", "mythologization", "colonization", "deconstruction", "(de)#examination#", "(re)#examination#"],
//         "complexTopic" : ["#litDevice# in #field#"],
//         "system" : ["a neural network", "a procedural system", "an advanced AI", "a decision tree"],
//         "explore" : ["navigate", "control", "explore", "interact"],
//         "implementedOn" : ["as instantiated on", "proceduralized with", "controlled by", "simulated on"],
//         "project" : ["#litDevice.capitalize# and #litDevice# #tellTheStory# of #abstractThing# in this #digitalArtifact# about #aProtagonist#.", "#abstractThing.capitalize# in #setting# is explored with #litDevice# #implementedOn# a #digitalArtifact#.", "#useCase.capitalize#, #aProtagonist# is used to #tellTheStory# of #abstractThing# using #litDevice#, as #implementedOn# a #hardware#.", "A #examination# of #litDevice# to explore #abstractThing# in a #digitalArtifact#", "The user #explore.s# with #aProtagonist# and must defeat #abstractThing# using a #controls# to activate #abstractThing#, but can only experience their world through a #display#.", "A #culturalProduction# performed on #display#, which the user #explore.s# with a #controls#.", "A project to #tellTheStory# of #aProtagonist# and their #abstractThing#, with a #digitalArtifact#.", "#system.capitalize# to implement #litDevice# for #digitalArtifact.s#, #useCase#.", "A #examination# of themes of #abstractThing#,  using #litDevice# in a #digitalArtifact#.", "A #digitalArtifact# about #complexTopic#, #useCase#.", "A #digitalArtifact# using #litDevice# and #litDevice# to #tellTheStory# of #someDramaticStuff#"],
//         "nationality" : ["North #nationality#", "West #nationality#", "Outer #nationality#", "New #nationality#", "Mongolian", "Merovingian", "Californian", "Texan", "Viennese", "Indonesian", "Malaysian", "Gibraltan", "Roman", "Hungarian", "Transylvanian", "Iowan", "Minnesotan", "Guatemalan", "Cantonese", "Irish", "Caspian", "Eurasian", "Pan-American", "Frankish", "Byzantine", "Alexandrian", "Persian", "Mongolian"],
//         "titlePart" : ["#subjectAdj# ", "Psycho", "Out", "Neuro", "Tele", "Cyber", "Flash", "Re:", "De", "Un", "Dys"],
//         "titleNoun" : ["#culturalProduction#", " Spaces", "the Praxis", "Text", "the Text", "Academia", "Presence", "Experience", "the Divine", "the diaspora", "#field#", "#field#"],
//         "titleMod" : ["No", "Only", "New", "#titleVerb#"],
//         "titleVerb" : ["finding", "interrogating", "stabilizing", "navigating", "being", "uncovering", "mixing", "freeing", "appropriating", "searching"],
//         "title" : ["#titleMod# #titleNoun#", "#titlePart.capitalize##titlePart.capitalize##titleVerb# #titleNoun#", "#titlePart.capitalize##titleVerb.capitalize#"],

//         "projectDesc" : "<b>#title#:</b> #project#",
//         "origin" : "<h3>#greetings#, and welcome to the #place#</h3><p>Schedule:</p><p>#projectDesc#<p>#projectDesc#<p>#projectDesc#"
//     },

//     scifi : {

//         firstSyl : "B C D F G H J K L M N P Qu R S T V W X Y Z St Fl Bl Pr Kr Ll Chr Sk Br Sth Ch Dhr Dr Sl Sc Sh Thl Thr Pl Fr Phr Phl Wh".split(" "),
//         middleSyl : "an all ar art air aean af av ant app ab er en eor eon ent enth irt ian ion iont ill il ipp in is it ik ob ov orb oon ion uk uf un ull urk estr antr okl ackl".split(" "),
//         lastSyl : "a ia ea u y en am is on an o io i el ios ax ox ix ex izz ius ian ean ekang anth".split(" "),

//         butchName : ["Chesty", "Manley", "Brock", "Stone", "Brick", "Butch", "Bruce", "Steel", "Saber", "Tex", "Rock", "Drake", "Ace", "Knute", "Wolf", "Thorax", "Brad", "Abs", "Burt", "Slate", "Bret", "Duke"],

//         alienName : ["#firstSyl##middleSyl##lastSyl#", "#firstSyl##lastSyl#", "#firstSyl##lastSyl#-#firstSyl##lastSyl#"],

//         sexy : ["muscled", "sexy", "dark", "well-dressed", "masculine", "dramatic", "dramatically lit", "boyish", "burly", "handsome", "erotic", "many-bossomed", "supple", "nude"],
//         occupation : ["lumberjack", "firefighter", "scientist", "spy", "wizard", "radio broadcaster", "smuggler", "mechanic", "astronaut", "adventurer", "pirate", "cowboy", "vampire", "detective", "soldier", "marine", "doctor", "ninja", "waitress", "burlesque dancer", "ballerina", "opera singer", "gogo dancer", "rollerskater"],

//         physicsParticle : ["quark", "photon", "lepton", "muon"],
//         scienceVerb : ["evaporate", "decay", "phase-shift", "teleport", "destabilize", "sublimate"],
//         scienceBlargleStart : ["holo", "hyper", "transmuto", "digi", "nano", "electro", "transma", "magna"],

//         communicationDevice : ["#physicsParticle#-transmitter", "#scienceBlargleStart#phone", "#scienceBlargleStart#pager", "#scienceBlargleStart#beeper", "#scienceBlargleStart#view", "#scienceBlargleStart#scope", "#scienceBlargleStart#cam"],

//         shortTime : ["in a sec", "right now", "two clicks", "a moment's time", "the blink of an eye", "no time at all", "the time it takes a single unstable #physicsParticle# to #scienceVerb#", "#firstSyl##middleSyl#sday"],
//         conversationally : ["expressively", "noncommitally", "with relief", "dispassionately"],
//         mcResponded : ["'That was unexpected,' #mc# said.", "#mc# shrugged #conversationally#", "#mc# sighed #conversationally#"],

//         transitPlain : ["bus", "plane", "jet", "tram", "rail", "tube", "beam"],
//         transitMod : ["nonstop", "express", "commuter", "prismatic", "red-eye", "pneumatic", "crosstown"],
//         transportSystem : ["#scienceBlargleStart##transitPlain#", "#transitMod# #scienceBlargleStart# #transitPlain#"],
//         travelPlot : ["#mc# punched '#mcDestinationSystem#' into the #communicationDevice#. There was still one ticket left on the #transportSystem#, but he'd have to take a #transportSystem# the rest of the way to Planet #mcDestination#.'"],

//         vipTitle : ["Vice President", "Mr.", "Detective", "Senator", "Chairman", "Princess", "Lord", "Lady", "Professor", "Grand Inquisistor", "High Priest", "President"],
//         boss : ["#vipTitle# #alienName#"],

//         artFormBasic : ["novel", "sculpture", "film", "painting", "poem", "play"],
//         artForm : ["prisma#artFormBasic#", "holo#artFormBasic#", "photo#artFormBasic#", "hyper#artFormBasic#"],
//         artDemand : ["'Your #mcArt# is late, #mc#', shrieked #mcBoss# over the #communicationDevice#.", "'I need that #mcArt# by #shortTime#' yelled #mcBoss#.", "'Where's the #mcArt#, #mc#? You promised it'd be finished by last #firstSyl##middleSyl#sday,' #mcBoss#'s voice came through the #communicationDevice#."],
//         artQuest : ["The only thing that could really, I mean really, inspire a #mcArt# would be the famously #sexy# #occupation.s# of Planet #mcDestination# and for that, he'd have to go to the #mcDestinationSystem# system. #travelPlot#"],
//         artPlot : ["#artDemand#  'Yeah, I'll have it done in #shortTime#', #mc# promised, hanging up the #communicationDevice#. #mcResponded#.#[mcDestination:#alienName#][mcDestinationSystem:#alienName#]artQuest#"],

//         plot : ["#[mcArt:#artForm#][mcBoss:#boss#]artPlot#"],

//         origin : ["#[mc:#butchName#]plot#"]

//     },

}
