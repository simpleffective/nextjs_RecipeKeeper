const { db } = require("@vercel/postgres");
const {
  users,
  recipes,
  records,
  replies,
} = require("../src/app/lib/placeholder-data.js");

async function seedUsers(client) {
  try {
    // Create the "users" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      user_id SERIAL PRIMARY KEY,
      google_user_id VARCHAR(255) UNIQUE NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      display_name VARCHAR(255),
      given_name VARCHAR(255),
      family_name VARCHAR(255),
      image_url VARCHAR(255),
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

    console.log(`Created "users" table`);

    // Insert data into the "users" table
    const insertedUsers = await Promise.all(
      users.map(async (user) => {
        return client.sql`
        INSERT INTO users (user_id, google_user_id, email, display_name, given_name, family_name, image_url)
        VALUES (${user.user_id}, ${user.google_user_id}, ${user.email}, ${user.display_name},
          ${user.given_name}, ${user.family_name}, ${user.image_url})
        ON CONFLICT (user_id) DO NOTHING;
      `;
      })
    );

    console.log(`Seeded ${insertedUsers.length} users`);

    return {
      createTable,
      users: insertedUsers,
    };
  } catch (error) {
    console.error("Error seeding users:", error);
    throw error;
  }
}

async function seedRecipes(client) {
  try {
    // Create the "invoices" table if it doesn't exist
    const createTable = await client.sql`
    CREATE TABLE IF NOT EXISTS recipes (
    recipe_id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    image_url VARCHAR(255),
    ingredients TEXT[] NOT NULL,
    directions TEXT[] NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
  );
`;

    console.log(`Created "recipes" table`);

    // Insert data into the "invoices" table
    const insertedRecipes = await Promise.all(
      recipes.map(
        (recipe) => client.sql`
        INSERT INTO recipes (recipe_id, user_id, name, description, image_url, ingredients, directions)
        VALUES (${recipe.recipe_id}, ${recipe.user_id}, ${recipe.name}, ${recipe.description}, ${recipe.image_url},
           ARRAY[${recipe.ingredients}], ARRAY[${recipe.directions}])
        ON CONFLICT (recipe_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedRecipes.length} recipes`);

    return {
      createTable,
      recipes: insertedRecipes,
    };
  } catch (error) {
    console.error("Error seeding recipes:", error);
    throw error;
  }
}

async function seedRecords(client) {
  try {
    // Create the "customers" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS records (
        record_id SERIAL PRIMARY KEY,
        user_id INT NOT NULL,
        recipe_id INT NOT NULL,
        comment TEXT NOT NULL,
        image_url_1 VARCHAR(255),
        image_url_2 VARCHAR(255),
        image_url_3 VARCHAR(255),
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (user_id) REFERENCES users(user_id),
        FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id)
      );
    `;

    console.log(`Created "records" table`);

    // Insert data into the "customers" table
    const insertedRecords = await Promise.all(
      records.map(
        (record) => client.sql`
        INSERT INTO records (record_id, user_id, recipe_id, comment, image_url_1, image_url_2, image_url_3)
        VALUES (${record.record_id}, ${record.user_id}, ${record.recipe_id} ,${record.comment},
           ${record.image_url_1}, ${record.image_url_2}, ${record.image_url_3})
        ON CONFLICT (record_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedRecords.length} records`);

    return {
      createTable,
      records: insertedRecords,
    };
  } catch (error) {
    console.error("Error seeding records:", error);
    throw error;
  }
}

async function seedReplies(client) {
  try {
    // Create the "revenue" table if it doesn't exist
    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS replies (
        reply_id SERIAL PRIMARY KEY,
        reply TEXT NOT NULL,
        record_id INT NOT NULL,
        user_id INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (record_id) REFERENCES records(record_id),
        FOREIGN KEY (user_id) REFERENCES users(user_id)
      );
    `;

    console.log(`Created "replies" table`);

    // Insert data into the "replies" table
    const insertedReplies = await Promise.all(
      replies.map(
        (reply) => client.sql`
        INSERT INTO replies (reply_id, reply, record_id, user_id)
        VALUES (${reply.reply_id}, ${reply.reply}, ${reply.record_id}, ${reply.user_id})
        ON CONFLICT (reply_id) DO NOTHING;
      `
      )
    );

    console.log(`Seeded ${insertedReplies.length} replies`);

    return {
      createTable,
      replies: insertedReplies,
    };
  } catch (error) {
    console.error("Error seeding replies:", error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();

  await seedUsers(client);
  await seedRecipes(client);
  await seedRecords(client);
  await seedReplies(client);

  await client.end();
}

main().catch((err) => {
  console.error(
    "An error occurred while attempting to seed the database:",
    err
  );
});
