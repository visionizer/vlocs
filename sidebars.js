module.exports = {
  docs: [
    {
      type: 'category',
      label: 'Introduction',
      items: ['introduction/what-is-v'],
    },
    {
      type: 'category',
      label: 'Getting Started',
      items: ['getting_started/install-v'],
    },
    {
      type: "category",
      label: "Learning V",
      items: [
        "learning_v/documentation-goals",
        "learning_v/hello-world",
        "learning_v/comments",
        "learning_v/basic-types",
        "learning_v/variables",
        "learning_v/functions",
      {
        type: "category",
        label: "More Complex V",
        items: [
          "learning_v/complex_v/error-handling",
          {
            type: "category",
            label: "More about Basic Types",
            items: [
              "learning_v/complex_v/more_about_basic_types/strings",
              "learning_v/complex_v/more_about_basic_types/numbers",              
            ],
          },
          {
            type: "category",
            label: "Complex Types",
            items: [
              "learning_v/complex_v/complex_types/arrays",
              "learning_v/complex_v/complex_types/maps",
              "learning_v/complex_v/complex_types/structs"
            ]
          },
          {
            type: "category",
            label: "Keywords, Statements & Expressions",
            items: [
              "learning_v/complex_v/keywords/keywords",
              "learning_v/complex_v/keywords/if",
              "learning_v/complex_v/keywords/for-loop",
              "learning_v/complex_v/keywords/in",
            ],
          },
          {
            type: "category",
            label: "Even more complex V",
            items: [
              {
                type: "category",
                label: "Modules, Importing and Standard Libraries",
                items: [
                  "learning_v/complex_v/modules_and_more/modules/imports",
                  "learning_v/complex_v/modules_and_more/modules/stdlib",
                ]
              },
            ]
          },
        ],
      },
      "learning_v/project-structure"
    ],
    },
    {
      type: "category",
      label: "V by Example",
      items: ["learning_v/documentation-goals"],
    },
    {
      type: "category",
      label: "V's Standard Libraries",
      items: [
        "learning_v/complex_v/modules_and_more/modules/stdlib"
      ],
    }
  ],
};
