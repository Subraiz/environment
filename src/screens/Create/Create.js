import React, { useState } from "react";
import { withRouter } from "react-router";
import styles from "./styles.module.css";

const Input = ({ title, text, changeText, placeholder }) => {
  return (
    <div className={styles.inputContainer}>
      <p>{title}</p>
      <input
        placeholder={placeholder}
        value={text}
        onChange={(e) => {
          changeText(e.target.value);
        }}
      />
    </div>
  );
};

let Create = ({ store, addPost, history }) => {
  const user = store.users.filter((obj) => {
    return obj.id === store.currentUserId;
  })[0];

  const [desc, changeDesc] = useState("");
  const [photo, changePhoto] = useState("");
  const [shortContent, changeShort] = useState("");
  const [longContent, changeLong] = useState("");

  const submit = () => {
    if (checkForErrors()) {
      window.alert("Please fill out all fields.");
    } else {
      const userId = user.id;
      const id = "photo-" + [store.posts.length + 1];

      const post = {
        id,
        userId,
        photo,
        desc,
        shortContent,
        longContent,
        datetime: new Date().toISOString()
      };

      addPost(post);
      history.push("/home");
    }
  };

  const checkForErrors = () => {
    if (desc === "") {
      return true;
    }
    if (photo === "") {
      return true;
    }
    if (shortContent === "") {
      return true;
    }
    if (longContent === "") {
      return true;
    }

    return false;
  };

  return (
    <div>
      <div className={styles.createContainer}>
        <h3>Create New Post</h3>
        <Input
          title="Title"
          text={desc}
          changeText={changeDesc}
          placeholder={"Title"}
        />
        <Input
          title="Photo"
          text={photo}
          changeText={changePhoto}
          placeholder={"Paste image address"}
        />
        <Input
          title="Short Description"
          text={shortContent}
          changeText={changeShort}
          placeholder={"Short Description"}
        />
        <Input
          title="Description"
          text={longContent}
          changeText={changeLong}
          placeholder={"Description"}
        />
        <button
          className={styles.submit}
          onClick={() => {
            submit();
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

Create = withRouter(Create);

export { Create };
