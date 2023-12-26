const users = [
  {
    user_id: 1,
    google_user_id: "dummy1",
    email: "dummy1@gmail.com",
    display_name: "Oren",
    given_name: "Oren",
    family_name: "Pinkas",
    image_url: "/users/demo-drawn.jpeg",
  },
  {
    user_id: 2,
    google_user_id: "dummy2",
    email: "dummy2@gmail.com",
    display_name: "Guy",
    given_name: "Guy",
    family_name: "Pinkas",
    image_url: "/users/demo-drawn.jpeg",
  },
  {
    user_id: 3,
    google_user_id: "dummy3",
    email: "dummy3@gmail.com",
    display_name: "Sahar",
    given_name: "Sahar",
    family_name: "Pinkas",
    image_url: "/users/demo-drawn.jpeg",
  },
  {
    user_id: 4,
    google_user_id: "dummy4",
    email: "dummy4@gmail.com",
    display_name: "Avraham",
    given_name: "Avraham",
    family_name: "Pinkas",
    image_url: "/users/demo-drawn.jpeg",
  },
];

const recipes = [
  {
    recipe_id: 1,
    name: "Chicken and Gnocchi with Mushrooms and Brown Butter",
    description:
      "This quick and easy Chicken and Gnocchi with Mushrooms, garlic, sage, and thyme is tossed in a rich brown butter sauce. Ready from start to finish in less than 30 minutes, it’s the perfect weeknight dinner. Serve the tender potato gnocchi with a side of crusty bread and a crisp green salad.",
    image_url: "/foods/1633512634_780222_Large400_ID-4503899.jpg",
    ingredients: [
      "Gnocchi",
      "Olive oil",
      "Sliced fresh mushrooms",
      "Salted butter",
      "Shallot",
      "Garlic",
      "Thyme and sage",
      "Chicken",
      "Kosher salt and black pepper",
      "Toasted pumpkin seeds, chopped toasted nuts, Parmesan Cheese, or additional herbs",
    ],
    directions: [
      "Cook the gnocchi in a large pot of salted boiling water according to the package instructions, about 3-4 minutes. Drain.",
      "Sauté the mushrooms in olive oil in a large skillet",
      "Make the brown butter sauce in the same skillet.",
      "Stir in the cooked gnocchi and chicken; heat through for about 1 more minute.",
      "Garnish with optional toppings and serve!",
    ],
    user_id: 1,
  },
  {
    recipe_id: 2,
    name: "Grilled BBQ Chicken Breast",
    description:
      "The best summer meal! Whether you're entertaining friends for a cookout or just preparing a quick weeknight meal, this grilled bbq chicken breast always wins rave reviews. Season the boneless, skinless chicken breast with a simple rub, throw it onto a gas or charcoal grill, and baste with barbecue sauce. Served with pasta salad, mac and cheese, cornbread or coleslaw, this grilled chicken recipe is a picnic favorite!",
    image_url: "/foods/Grilled-BBQ-Chicken-Breast-2-1024x1536.jpg",
    ingredients: [
      "Boneless skinless chicken breasts: you can also substitute with boneless, skinless chicken thighs.",
      "Olive oil: helps the chicken brown, adds flavor, and prevents it from sticking to the grill.",
      "BBQ dry rub: we always use this simple homemade BBQ seasoning blend, which we keep in a big jar in our pantry for easy access.",
      "Barbecue sauce: use your favorite homemade bbq sauce or pick a high-quality store-bought sauce.",
    ],
    directions: [
      "Pound chicken breasts until ½-inch thick. You don't want them as thin as cutlets, but pounding them to an even thickness will help the chicken cook quickly and evenly so that it stays tender and juicy.",
      "Rub chicken with olive oil and season with bbq rub",
      "Grill the chicken until the meat reaches an internal temperature of 165°F.",
      "Baste the chicken with the bbq sauce towards the end.",
      "Let the chicken rest before slicing and serving.",
    ],
    user_id: 1,
  },
  {
    recipe_id: 3,
    name: "Italian Wedding Soup",
    description:
      "This lovely Italian wedding soup recipe is a combination of homemade meatballs with sliced escarole, carrots, and orzo pasta in a flavorsome broth. Serve hot, garnished with fresh parsley and extra Parmesan cheese.",
    image_url:
      "/foods/13024-ItalianWeddingSoup1-mfs-Step2-0982-c67c5322950d437692f20d53d414de94.webp",
    ingredients: [
      "½ pound extra-lean ground beef",
      "1 large egg, lightly beaten",
      "2 tablespoons dry bread crumbs",
      "1 tablespoon grated Parmesan cheese",
      "½ teaspoon dried basil",
      "½ teaspoon onion powder",
      "5 ¾ cups chicken broth",
      "2 cups thinly sliced escarole",
      "1 cup uncooked orzo pasta",
      "⅓ cup finely chopped carrot",
    ],
    directions: [
      "Combine ground beef, egg, bread crumbs, Parmesan cheese, basil, and onion powder in a bowl.",
      "Shape beef mixture into 3/4-inch balls and place on a parchment-lined tray.",
      "Heat broth in a large pot over medium-high heat until boiling. Stir in escarole, orzo, carrot, and meatballs and return to boil. Reduce heat to medium and cook at slow boil, stirring frequently to prevent sticking, until pasta is tender yet firm to the bite, about 10 minutes.",
      "Serve hot and enjoy!",
    ],
    user_id: 2,
  },
  {
    recipe_id: 4,
    name: "Homemade Beef Stew",
    description:
      "A homemade beef stew recipe for the stovetop. This traditional stew is good eaten from a bowl or poured over biscuits. Substitute lamb and voila!... Irish stew! If thicker stew is desired, add more cornstarch and/or take the cover off for the last 15 to 20 minutes. The longer this simmers, the better! Vary the herbs to your taste.",
    image_url:
      "/foods/25678-beef-stew-vi-humblepieliving-001-4x3-96b76b098c8642aea824065bce96df7e.webp",
    ingredients: [
      "3 tablespoons vegetable oil",
      "2 pounds cubed beef stew meat",
      "4 cubes beef bouillon, crumbled",
      "4 cups water",
      "1 teaspoon dried rosemary",
      "1 teaspoon dried parsley",
      "½ teaspoon ground black pepper",
      "3 large potatoes, peeled and cubed",
      "4 carrots, cut into 1 inch pieces",
      "4 stalks celery, cut into 1 inch pieces",
      "1 large onion, chopped",
      "2 teaspoons cornstarch",
      "2 teaspoons cold water",
    ],
    directions: [
      "Heat oil in a large pot or Dutch oven over medium-high heat; add beef and cook until well browned.",
      "Dissolve bouillon in 4 cups water and pour into the pot; stir in rosemary, parsley, and pepper. Bring to a boil; reduce heat to low, cover, and simmer for 1 hour. Stir in potatoes, carrots, celery, and onion.",
      "Dissolve cornstarch in 2 teaspoons of cold water; stir into stew. Cover and simmer until beef is tender, about 1 hour.",
    ],
    user_id: 2,
  },
  {
    recipe_id: 5,
    name: "Pineapple upside-down cake",
    description:
      "This brings back so many childhood memories for me – my primary school used to bake a cracking upside-down cake. Embracing the beauty of tinned fruit, this version delivers big on old-school flavour. I’m also making the most of store-cupboard classics, which come together to create one of the easiest desserts ever – you’ll soon know the recipe by heart.",
    image_url: "/foods/142229885.webp",
    ingredients: [
      "200 ml runny honey",
      "2 x 425 g tins of pineapple rings in juice",
      "200 ml vegetable oil",
      "200 g self-raising flour",
      "500 ml natural yoghurt",
      "200 g desiccated coconut",
      "2 large eggs",
      "12 glacé cherries (60g)",
    ],
    directions: [
      "Preheat the oven to 180°C/350°F/gas 4. Place your largest non-stick frying pan on a medium-high heat with 1 tablespoon of the honey, then arrange 12 pineapple rings on top in a single layer, reserving the juice for later. (This might be a bit of a squeeze, but you’ll fit them in – see the tip for what to do with any leftover pineapple.) Cook for 4 to 5 minutes on just one side, or until the honey has almost disappeared and the pineapple is starting to caramelise.",
      "Place the remaining honey into a large mixing bowl with the vegetable oil, flour, 200ml of yoghurt and most of the desiccated coconut. Crack in the eggs and use a spatula to mix together, then loosen with 2 tablespoons of the reserved pineapple juice.",
      "Line a 30cm x 20cm roasting tray with greaseproof paper. Arrange the pineapple rings in the tray caramelised-side down and so they’re slightly overlapping, drizzling over any remaining pan juices, then place a glacé cherry in the centre of each ring. Pour over the batter, level off the top, then bake for 30 minutes, or until beautifully golden.",
      "Carefully turn the cake out onto a board and peel off the greaseproof. Top with a dollop of yoghurt and sprinkle over the reserved desiccated coconut, to serve.",
    ],
    user_id: 3,
  },
  {
    recipe_id: 6,
    name: "Lime & coconut roulade",
    description:
      "Don't be daunted by the length of the recipe or the rolling – this tropical roulade is surprisingly uncomplicated. And whether it's for a celebration or an afternoon-tea treat, it'll definitely impress.",
    image_url: "/foods/50242467.webp",
    ingredients: [
      "300 g white chocolate",
      "150 ml coconut cream",
      "2 limes",
      "unsalted butter , for greasing",
      "100 g plain flour",
      "25 g desiccated coconut",
      "300 g granulated sugar",
      "1 teaspoon baking powder",
      "½ teaspoon bicarbonate of soda",
      "5 large free-range eggs",
      "100 ml flavourless oil , (vegetable or groundnut oil work well)",
      "100 ml coconut milk",
      "3 tablespoons icing sugar , plus extra for dusting",
      "toasted coconut shavings , plus extra to serve (optional)",
    ],
    directions: [
      "Start by making the filling. Finely chop the chocolate and place in a heatproof bowl. Heat the coconut cream in a small pan until hot but not quite boiling, then pour it over the chocolate.",
      "Finely grate over the lime zest, reserving a little for garnish, then leave to stand for 1 minute. Whisk together until smooth, then cover and pop in the fridge while you get on with the sponge.",
      "Preheat the oven to 180ºC/350ºF/gas 4. Grease a 37cm x 26.5cm baking tray with the unsalted butter and line the base with greaseproof paper.",
      "In a mixing bowl, whisk together the plain flour, desiccated coconut, 175g of granulated sugar, the baking powder, bicarb of soda and 1 good pinch of sea salt.",
      "In a larger mixing bowl, whisk together 3 egg yolks (reserving the whites), the oil and coconut milk until combined. Add half of the dry mix to the bowl and stir, then add the remaining mixture and stir until smooth and combined.",
      "Place the 5 egg whites in a large mixing bowl (reserving the yolks for another recipe) and whisk on a medium speed with an electric whisk or a free-standing mixer until soft peaks form. Increase the speed and gradually add 75g of the remaining sugar until you have glossy stiff peaks.",
      "Add a large spoonful of the whisked egg whites into the cake mixture and fold through with a metal spoon. Add the remaining whisked egg whites and fold, so it’s still light and airy.",
      "Spoon the batter into the prepared baking tray and bake for 16 to 18 minutes, or until golden and cooked through.",
      "Cut a piece of greaseproof paper, a good 10cm larger than the sponge, and sift with the icing sugar. Carefully loosen the edge of the cake and turn it out onto the paper. Peel off the top piece of greaseproof paper and leave to cool for 5 to 10 minutes.",
      "Starting lengthways, roll the sponge up like a swiss roll, using the greaseproof paper as a guide. While the sponge cools completely, make the syrup.",
      "Squeeze the juice from the limes into a small pan and add the final 50g of granulated sugar. Place over a medium heat, gently bring to the boil, then reduce the heat and simmer until you have a light syrup. Leave to one side to cool.",
      "To put the roulade together, remove the white chocolate mixture from the fridge and whisk until thickened and smooth.",
      "Unroll the sponge, and drizzle over the lime syrup. Spread over the thickened white chocolate mixture, leaving a slight border around the edge, then roll up again lengthways, using the greaseproof paper as an aid. Set it on a platter and pop in the fridge until you are ready to serve.",
      "Finish by dusting with a little more icing sugar, and sprinkle with lime zest and toasted coconut flakes, if you like.",
    ],
    user_id: 4,
  },
];

const records = [
  {
    record_id: 1,
    comment: "I made this and it turned out great!",
    image_url_1: "/record-foods/3f150caf-5216-4e9b-a281-7d57c2976d4b.jpeg",
    image_url_2: "/record-foods/33a66518-0718-4555-93d2-23670a6fbeff.jpeg",
    image_url_3: "/record-foods/1954ee38-dd85-4507-9048-2cddc775f0d5.jpeg",
    recipe_id: 1,
    user_id: 2,
  },
  {
    record_id: 2,
    comment: "I made this and it turned out nasty!",
    image_url_1: "/record-foods/ebc17471-fa3e-4e30-95a6-00322170be36.jpeg",
    image_url_2: "/record-foods/ebecd749-517e-48ec-ba91-507df44aee74.jpeg",
    image_url_3: "/record-foods/images (1).jpeg",
    recipe_id: 1,
    user_id: 2,
  },
  {
    record_id: 3,
    comment: "I made this and it turned out poorly",
    image_url_1: "/record-foods/download (1).jpeg",
    image_url_2: "/record-foods/download.jpeg",
    image_url_3: "/record-foods/download (2).jpeg",
    recipe_id: 2,
    user_id: 3,
  },
  {
    record_id: 4,
    comment: "I made this and it turned out gooda",
    image_url_1: "/record-foods/7409fb2a-fc26-49c7-b4d5-57d8f99213bd.jpeg",
    image_url_2: "/record-foods/94dbfb66-4e27-4af9-9c9d-88c7f3b1e40d.jpeg",
    image_url_3: "/record-foods/9573cad2-c41e-476c-abda-c8497bb09841.jpeg",
    recipe_id: 2,
    user_id: 4,
  },
  {
    record_id: 5,
    comment: "I made this and it turned out",
    image_url_1: "/record-foods/images.jpeg",
    image_url_2: "/record-foods/images.jpeg",
    image_url_3: "/record-foods/images (1).jpeg",
    recipe_id: 3,
    user_id: 4,
  },
  {
    record_id: 6,
    comment: "I made this",
    image_url_1: "/record-foods/images.jpeg",
    image_url_2: "/record-foods/94dbfb66-4e27-4af9-9c9d-88c7f3b1e40d.jpeg",
    image_url_3: "/record-foods/ebecd749-517e-48ec-ba91-507df44aee74.jpeg",
    recipe_id: 4,
    user_id: 1,
  },
];

const replies = [
  {
    reply_id: 1,
    reply: "Looks great!",
    record_id: 1,
    user_id: 3,
  },
  {
    reply_id: 2,
    reply: "Well done!",
    record_id: 1,
    user_id: 4,
  },
  {
    reply_id: 3,
    reply: "OMG",
    record_id: 1,
    user_id: 4,
  },
  {
    reply_id: 4,
    reply: "just as i remember it. Mom.",
    record_id: 1,
    user_id: 2,
  },
  {
    reply_id: 5,
    reply: "yas,,,,",
    record_id: 2,
    user_id: 2,
  },
  {
    reply_id: 6,
    reply: "this is a reply.",
    record_id: 2,
    user_id: 1,
  },
  {
    reply_id: 7,
    reply: "Way to go chump",
    record_id: 6,
    user_id: 1,
  },
];

module.exports = {
  users,
  recipes,
  records,
  replies,
};