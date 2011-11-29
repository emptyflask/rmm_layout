Inflector = {
/*
     * The order of all these lists has been reversed from the way 
     * ActiveSupport had them to keep the correct priority.
     */
    Inflections: {
        plural: [
            [/(x|ch|ss|sh)$/i,         "$1es"   ],
            [/([^aeiouy]|qu)y$/i,      "$1ies"  ],
            [/(?:([^f])fe|([lr])f)$/i, "$1$2ves"],
            [/sis$/i,                  "ses"    ],
            [/([ti])um$/i,             "$1a"    ],
            [/s$/i,                    "s"      ],
            [/$/,                      "s"      ]
        ],
        singular: [
            [/(x|ch|ss|sh)es$/i,                                               "$1"     ],
            [/([^aeiouy]|qu)ies$/i,                                            "$1y"    ],
            [/([lr])ves$/i,                                                    "$1f"    ],
            [/(tive)s$/i,                                                      "$1"     ],
            [/(hive)s$/i,                                                      "$1"     ],
            [/([^f])ves$/i,                                                    "$1fe"   ],
            [/([ti])a$/i,                                                      "$1um"   ],
            [/s$/i,                                                            ""       ]
        ],
        irregular: [
            ['person', 'people'  ]
        ],
        uncountable: []
    },
    ordinalize: function(number) {
        if (11 <= parseInt(number) % 100 && parseInt(number) % 100 <= 13) {
            return number + "th";
        } else {
            switch (parseInt(number) % 10) {
                case  1: return number + "st";
                case  2: return number + "nd";
                case  3: return number + "rd";
                default: return number + "th";
            }
        }
    },
    pluralize: function(word) {
        for (var i = 0; i < Inflector.Inflections.uncountable.length; i++) {
            var uncountable = Inflector.Inflections.uncountable[i];
            if (word.toLowerCase() == uncountable) {
                return uncountable;
            }
        }
        for (var i = 0; i < Inflector.Inflections.irregular.length; i++) {
            var singular = Inflector.Inflections.irregular[i][0];
            var plural   = Inflector.Inflections.irregular[i][1];
            if ((word.toLowerCase() == singular) || (word == plural)) {
                return plural;
            }
        }
        for (var i = 0; i < Inflector.Inflections.plural.length; i++) {
            var regex          = Inflector.Inflections.plural[i][0];
            var replace_string = Inflector.Inflections.plural[i][1];
            if (regex.test(word)) {
                return word.replace(regex, replace_string);
            }
        }
    }
}
