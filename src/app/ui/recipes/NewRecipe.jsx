"use client";
import { useState } from "react";
import "@/app/ui/form/form.module.css";
import copyStyles from "@/app/ui/recipes/Recipe.module.css";
import styles from "@/app/ui/recipes/NewRecipe.module.css";
import Input from "@/app/ui/form/Input";
import TextArea from "@/app/ui/form/TextArea";
import StepListInputs from "@/app/ui/form/StepListInputs";

export default function NewRecipe() {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([""]);
  const [directions, setDirections] = useState([""]);
  const [isInvalid, setIsInvalid] = useState({
    name: null,
    ingredients: null,
    directions: null,
    image: null,
  });

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    const data = {
      name: name,
      image: image,
      description: description,
      ingredients: ingredients.filter((ingredient) => ingredient.length > 0),
      directions: directions.filter((direction) => direction.length > 0),
    };
    const currIsInvalid = {};
    for (const key in isInvalid) {
      if (!data[key] || data[key].length === 0) currIsInvalid[key] = true;
    }
    if (Object.keys(currIsInvalid).length > 0) {
      setIsInvalid(currIsInvalid);
      return;
    }
    // RecipeCtx.onAdd(data);
    // navigate("/");
  }
  return (
    <form
      className={`${copyStyles.recipe} ${styles.recipe}`}
      onSubmit={handleSubmit}
    >
      <div className={copyStyles.header}>
        <div className={styles["image-control"]}>
          <div className={`${styles.imageWrap} ${copyStyles.imageWrap}`}>
            <div className={styles["image-input"]}>
              <Input
                className={styles["image-input"]}
                type="file"
                id="image-input"
                name="img"
                style={{ display: "none" }}
                label=" "
                onChange={handleImageUpload}
              ></Input>
            </div>
            <img
              className={copyStyles.image}
              src={image}
              alt="Your Image Here"
              style={{ visibility: image ? "visible" : "hidden" }}
            />
          </div>
          <div className="control-error">
            {isInvalid.image && <p>Please upload an image of the dish</p>}
          </div>
        </div>
        <div className={copyStyles.summary}>
          <Input
            className={`${copyStyles.name} ${styles.name}`}
            id="name"
            name="name"
            placeholder="What's cooking?"
            value={name}
            onChange={(e) => setName(e.target.value)}
            error={isInvalid.name && "Please name your recipe"}
          />
        </div>
        <div className={copyStyles.description}>
          <TextArea
            className={`${styles.lines} ${styles.description} ${copyStyles.description}`}
            id="description"
            name="description"
            maxLength="138"
            rows="3"
            cols="56"
            placeholder="Sounds delicious! Describe it here..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className={`${copyStyles.body} ${styles.body}`}>
        <div>
          <h3>Ingredients:</h3>
          <ul className={`${copyStyles.ingredients} ${styles.ingredients}`}>
            <StepListInputs
              array={ingredients}
              setArray={setIngredients}
              name={"ingredients"}
              placeholder={"List an ingredient..."}
              maxLength="50"
              rows="1"
              cols="26"
            />
          </ul>
          <div className="control-error">
            {isInvalid.ingredients && (
              <p>Please list at least one ingredient</p>
            )}
          </div>
        </div>
        <div>
          <h3>Directions:</h3>
          <ol className={`${copyStyles.directions} ${styles.directions}`}>
            <StepListInputs
              array={directions}
              setArray={setDirections}
              name={"directions"}
              placeholder={"Specify a prep step..."}
              maxLength="120"
              rows="2"
              cols="25"
            />
          </ol>
          <div className="control-error">
            {isInvalid.directions && (
              <p>Please specify at least one preperation step</p>
            )}
          </div>
        </div>
      </div>
      <div className={styles.control}>
        <button className={styles.submit} type="submit">
          Save
        </button>
      </div>
    </form>
  );
}
