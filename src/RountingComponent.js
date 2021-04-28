import React, { useState } from 'react'
import { BrowserRouter, Route } from 'react-router-dom';
import App from './App'
import Description from './Description';

const RountingComponent = () => {
    const [movielist, setMovielist] = useState([
        {
          id: Math.random(),
          image:
            "https://static.cinemagia.ro/img/resize/db/movie/21/12/925/joker-612646l-1600x1200-n-756e3b25.jpg",
          rating: 4,
          name: "JOKER",
    
          type: "Action | Crime",
          description:
            "The film focuses its original and hitherto unseen action on the big screens around one of the most controversial negative characters in the DC universe. With a broad and complex vision, Phillips explores the trajectory of Arthur Fleck (Phoenix), an individual ignored by society, with an unpredictable and fascinating personality that cannot be included in any stereotype. What is obtained is a study of a character despised by society who becomes not only a gloomy social case; but also a story…",
            trailer:"https://www.youtube.com/embed/zAGVQLHvwOY"
        },
        {
          id: Math.random(),
          image:
            "https://static.cinemagia.ro/img/resize/db/movie/48/53/53/ride-along-858943l-1600x1200-n-003b9ccf.jpg",
          rating: 5,
          name: "Ride Along",
    
          type: "Adventure | action",
          description:
            "Kevin Hart and Ice Cube are the protagonists of the action comedy ONE POLICEMAN AND A HALF, the new production of the director and producer of the blockbuster comedy Think Like a Man..",
            trailer:"https://www.youtube.com/embed/5klp6rkHIks"
        },
        {
          id: Math.random(),
          image:
            "https://static.cinemagia.ro/img/resize/db/movie/58/16/00/honest-thief-704768l-1600x1200-n-9e28ddd7.jpg",
          rating: 4,
          name: "Honest Thief",
    
          type: "Crime | Drama",
          description:
            "An honest thief is the story of an old bank robber who wants to surrender because ... he fell in love. But everything gets complicated because of two corrupt FBI agents ..",
            trailer: "https://www.youtube.com/embed/ZUIEOMOxIDo"
        },
        {
          id: Math.random(),
          image:
            "https://static.cinemagia.ro/img/db/movie/59/89/07/boyka-undisputed-iv-837221l.jpg?ts=1496667304",
          rating: 4,
          name: "Undisputed IV",
    
          type: "Action | Adventure",
          description:
            "Scott Adkins, the one who gives life to the tough Yuri Boyka. Returning to the right path, the hero of the third part of the series will be faced with new adventures and new trials...",
        trailer: "https://www.youtube.com/embed/KQtB3-NMfnU"
        },
        {
          id: Math.random(),
          image:
            "https://static.cinemagia.ro/img/resize/db/movie/61/51/29/fast-furious-8-374929l-1600x1200-n-13d454eb.jpg",
          rating: 3,
          name: "Fast & Furious 8",
    
          type: "action | Crime",
          description:
            "the team will travel the globe in an attempt to stop an anarchist from unleashing global chaos and bringing the man home. which made them a family..",
        trailer:"https://www.youtube.com/embed/uisBaTkQAEs"
        },
        {
          id: Math.random(),
          image:
            "https://static.cinemagia.ro/img/resize/db/movie/00/27/43/how-high-688609l-1600x1200-n-93b1d918.jpg",
          rating: 5,
          name: "How High",
    
          type: "Action",
          description:
            "The lead character, called 'The Bride,' was a member of the Deadly Viper Assassination Squad, led by her lover 'Bill.'The Bride' decided to escape her life as a killer.",
        trailer:"https://www.youtube.com/embed/B5h2xRYmANk"
        },
        {
          id: Math.random(),
          image: "https://p7.storage.canalblog.com/75/51/1349409/126155780_o.jpg",
          rating: 5,
          name: "Évasion 3",
    
          type: " Biography | Crime | Drama  ",
          description:
            "Ray Breslin's partner has been kidnapped. Ray, the specialist in high security systems, can count on his band of experts, Hush the computer scientist and Trent de Rosa, the mercenary, to storm the impenetrable penitentiary where she is being held captive. Together, they will develop the most delicate extraction of their prestigious career.",
        trailer:"https://www.youtube.com/embed/KTAj_M6a-HY"
        },
      ]);
    return (
        <BrowserRouter>
            <Route exact path='/' render={(props)=><App movielist={movielist} setMovielist={setMovielist} {...props}></App>}></Route>
            <Route path='/description/:id' render={(props)=><Description {...props} movieList={movielist}></Description>}></Route>
     
        </BrowserRouter>
    )
}

export default RountingComponent
