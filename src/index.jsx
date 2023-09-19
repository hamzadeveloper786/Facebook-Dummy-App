import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {  HandThumbsUp, ChatLeftText, Send } from "react-bootstrap-icons";
import iphone15 from "./iphone15.png"
import { RWebShare } from "react-web-share";
import { useState } from 'react'

const Post = ({ profileImg, name, date, text, img }) => {
  const [like, setLike] = useState(100),
  [isLike, setIsLike] = useState(false),
onLikeButtonClick = () => {
  setLike(like + (isLike?-1:1));
  setIsLike(!isLike);
}

  return(
  <div className="post">
    <div className="postHead">
      <img src={profileImg} width={65} height={65} alt="" />
      <div>
        <h1> {name} </h1>
        <div className="date"> {date}</div>
      </div>
    </div>
    <br />

    <p> {text}</p>

    <img className="postImg" src={img} alt="" />

    <div className="postFooter">
    <div id='like' className={"like-button " + (isLike ? "liked" : "disLike")}
        onClick={onLikeButtonClick} >
        <HandThumbsUp /> {like}
      </div>
      <div className="button">
        <ChatLeftText /> Comment
      </div>
      <RWebShare
                data={{
                    text: "Template",
                    url: "facebook-post-2.web.app",
                    title: "Template",
                }}
                onClick={() => console.log("shared successfully!")}
            >
      <div className="button">
        <Send /> Share
      </div>
            </RWebShare>
              
    </div>
  </div>
)};

ReactDOM.render(
  <div>
    <Post
      profileImg="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Elon_Musk_Colorado_2022_%28cropped2%29.jpg/220px-Elon_Musk_Colorado_2022_%28cropped2%29.jpg"
      name="Elon Musk"
      date="30-Jun-2023 4:30 pm"
      text="Elon Reeve Musk (born June 28, 1971) is a business magnate and investor. Musk is the founder, chairman, CEO and chief technology officer of SpaceX; angel investor, CEO, product architect and former chairman of Tesla, Inc.; owner, chairman and CTO of X Corp.; founder of the Boring Company; co-founder of Neuralink and OpenAI; and president of the Musk Foundation. He is the wealthiest person in the world, with an estimated net worth of US$226 billion as of September 2023, according to the Bloomberg Billionaires Index, and $249 billion according to Forbes, primarily from his ownership stakes in both Tesla and SpaceX"
    />
    <Post
      profileImg="https://cdn.britannica.com/16/138916-050-93D18857/coffee-beans-ground-paper-bags.jpg"
      name="History of Coffee"
      img="https://www.tastingtable.com/img/gallery/new-study-reveals-your-morning-coffee-may-lead-to-a-longer-life/intro-1654022678.jpg"
      date="30-Aug-2023 4:30 pm"
      text="As it’s thought that coffee originated in Ethiopia, it’s also believed it made its way north, across the red sea into Yemen in the 15th Century. It then started to be grown here in the Yemeni district of Arabia, and by the 16th century it was known in Persia, Egypt, Syria, and Turkey.

      It was immensely popular for its qualities to help improve alertness and wakefulness, allowing people to devote more time to spiritual matters and praying.
      
      The world’s first coffee house was opened in Constantinople in 1475, now known as Istanbul. Coffee was drunk at home as part of the daily routine, as well as to show hospitality to guests. Outside of the home, people visited coffee houses to not only drink coffee but to engage in conversation, listen to music, watch performers, play chess, gossip and catch up on news. Without the modern technologies we have today, coffee houses quickly became the epicentre for exchanging and gaining information. They were often referred to as “Schools of the Wise.”
      
      And with thousands of pilgrims visiting Mecca each year from all over the world, knowledge of this “wine of Araby”, which it quickly became referred to, began to spread."
    />
    <Post
      profileImg="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
      name="About Nature"
      date="20-Jun-2023 5:00 pm"
      img="https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1631&q=80"
      text="Plants communicate with neighbouring plants to activate an airborne defence against aphids. However, the genetic pathway underlying this defence mechanism is unknown. A signalling cascade centred around the gaseous form of the chemical methyl salicylate was found to control this interaction between plants.)."
    />
    <Post
      profileImg="https://www.tailorbrands.com/wp-content/uploads/2021/01/apple_logo_1988.jpg"
      name="Apple"
      date="10-Sep-2023 5:00 pm"
      img={iphone15}
      text="iPhone 15 Pro and iPhone 15 Pro Max will be available in four stunning new finishes, including black titanium, white titanium, blue titanium, and natural titanium. Pre-orders begin Friday, September 15, with availability beginning Friday, September 22.)."
    />
  </div>,
  document.querySelector("#root")
);
