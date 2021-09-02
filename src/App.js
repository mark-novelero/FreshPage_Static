import React, { Component } from 'react';
import MainPage from './New_Story/MainPage';
import SiteCollection from './SiteCollection/SiteCollection';
import Home from './HomeUserPage/Home';
import {Route, Switch} from 'react-router-dom';
import UserHome from './HomeUserPage/UserHome';
import PublishedBlog from './New_Story/PublishedBlog';
import SiteBlogPage from './SiteCollection/SiteBlogPage';
import CollectionCard from './HomeUserPage/CollectionCard';
import FixedHeader from './fixed_header/FixedHeader';



export default class App extends React.Component{

  state = {
    home: true, 
    allUsers: [],
    blogs: [],
    photos: [], 
    currentUser: 2,
    currentUserBlogs: [], 
    currentUserPhotos:[],
    newestStory:"",
    selectPhoto: [],   
    siteSelectedPhoto: [], 
    siteStories: [], 
    submitStatus: false, 
    photoUserCollection: [], 
    storyUserCollection: "",
  }

componentDidMount(){

  var allPhotos = [
    {id: 1, 
    photo_url: "https://i.imgur.com/hbvFyVH.jpgh.png" },
    {id: 2, 
    photo_url: "https://i.imgur.com/WmlLWVmh.jpg" },
    {id: 3, 
    photo_url: "https://i.imgur.com/MiLUaIph.jpg" },
    {id: 4, 
    photo_url: "https://i.imgur.com/FRZt58Mh.jpg" },
    {id: 5, 
    photo_url: "https://i.imgur.com/c78R35hh.jpg" },
    {id: 6, 
    photo_url: "https://i.imgur.com/lsNv2ckh.jpg" },
    {id: 7, 
    photo_url: "https://i.imgur.com/9dFk53mh.jpg" },
    {id: 8, 
    photo_url: "https://i.imgur.com/AnQSuM3h.jpg" },
    {id: 9, 
    photo_url: "https://i.imgur.com/bqG5aIhh.jpg" },
    {id: 10, 
    photo_url: "https://i.imgur.com/gGKpw9Ih.jpg" },
    {id: 11, 
    photo_url: "https://i.imgur.com/lQUk7c3h.jpg" },
    {id: 12, 
    photo_url: "https://i.imgur.com/1v2minhh.png" },
    {id: 13, 
    photo_url: "https://i.imgur.com/cn6TN3o.jpg" },
    {id: 15, 
    photo_url: "https://i.imgur.com/Ul3CL21h.png" },
    {id: 17, 
    photo_url: "https://i.imgur.com/Dx9NiTnh.png" },
    {id: 18, 
    photo_url: "https://i.imgur.com/tIKz0Psh.png" },
    {id: 19, 
    photo_url: "https://i.imgur.com/RMdXx93h.jpg" },
    {id: 20, 
    photo_url: "https://i.imgur.com/fwA52X4h.png" },
    {id: 21, 
    photo_url: "https://i.imgur.com/YvDpwXKh.png" },
    {id: 22, 
    photo_url: "https://i.imgur.com/rwWmVakh.png" },
    {id: 23, 
    photo_url: "https://i.imgur.com/By4iBklh.png" },
    {id: 24, 
    photo_url: "https://i.imgur.com/f8c68Djh.png" },
    {id: 25, 
    photo_url: "https://i.imgur.com/EWphm4Eh.jpg" },
    {id: 26, 
    photo_url: "https://i.imgur.com/7vMTSO1h.png" },
    {id: 14, 
    photo_url: "https://i.imgur.com/CLXi1R5h.jpg" },
    {id: 27, 
    photo_url: "https://i.imgur.com/HrgolBX.jpg" },
    {id: 28, 
    photo_url: "https://i.imgur.com/SSrRD3gh.jpg" },
    {id: 29, 
    photo_url: "https://i.imgur.com/y5tjcQth.jpg" },
    {id: 30, 
    photo_url: "https://i.imgur.com/pjC7mxkh.jpg" },
    {id: 31, 
    photo_url: "https://i.imgur.com/vgKjB43h.jpg" },
  ]

  var blogs = [{
    "photo_ids": 20, 
    "user_ids": 5, 
    "story": "Your slightest look easily will unclose me though I have closed myself as fingers, you open always petal by petal myself as Spring opens(touching skilfully,mysteriously)her first rose"
    }, 
    {
        "photo_ids": 6, 
        "user_ids": 5, 
        "story": "1492. As children we were taught to memorize this year with pride and joy as the year people began living full and imaginative lives on the continent of North America. Actually, people had been living full and imaginative lives on the continent of North America for hundreds of years before that. 1492 was simply the year sea pirates began to rob, cheat, and kill them."
    },
    {
        "photo_ids": 19, 
        "user_ids": 5, 
        "story": "If you want to really hurt you parents, and you don’t have the nerve to be gay, the least you can do is go into the arts. I’m not kidding. The arts are not a way to make a living. They are a very human way of making life more bearable. Practicing an art, no matter how well or badly, is a way to make your soul grow, for heaven’s sake. Sing in the shower. Dance to the radio. Tell stories. Write a poem to a friend, even a lousy poem. Do it as well as you possible can. You will get an enormous reward. You will have created something"
    },
    {
        "photo_ids": 19, 
        "user_ids":  3, 
        "story": "“Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter. It’s round and wet and crowded. On the outside, babies, you’ve got a hundred years here. There’s only one rule that I know of, babies-“God damn it, you’ve got to be kind.”"
    },
    {
        "photo_ids": 12, 
        "user_ids":  5, 
        "story": "Another Kilgore Trout book there in the window was about a man who built a time machine so he could go back and see Jesus. It worked, and he saw Jesus when Jesus was only twelve years old. Jesus was learning the carpentry trade from his father. Two Roman soldiers came into the shop with mechanical drawing on papyrus of a device they wanted built by sunrise the next morning. It was a cross to be used in the execution of a rabble-rouser.  Jesus and his father built it. They were glad to have the work. And the rabble-rouse was executed on it. So it goes."
    },
    {
        "photo_ids": 13, 
        "user_ids":  5, 
        "story": "God grant me the serenity to accept the things I cannot change, courage to change the things I can, and wisdom always to tell the difference."
    },
    {
        "photo_ids": 9, 
        "user_ids": 5, 
        "story": "Mankind is drawn to the heavens for the same reason we were once drawn into unknown lands and across the open sea. We choose to explore space because doing so improves our lives, and lifts our national spirit. So let us continue the journey."
    },
    {
        "photo_ids": 22, 
        "user_ids":  9, 
        "story": "How little we know of what there is to know. I wish that I were going to live a long time instead of going to die today because I have learned much about life in these four days; more, I think than in all other time. I’d like to be an old man to really know. I wonder if you keep on learning or if there is only a certain amount each man can understand. I thought I knew so many things that I know nothing of. I wish there was more time."
    },
    {
        "photo_ids": 20, 
        "user_ids": 6 , 
        "story": "He remembered the time he had hooked one of a pair of marlin. The male fish always let the female fish feed first and the hooked fish, the female, made a wild, panic-stricken, despairing fight that soon exhausted her, and all the time the male had stayed with her, crossing the line and circling with her on the surface. He had stayed so close that the old man was afraid he would cut the line with his tail which was sharp as a scythe and almost of that size and shape. When the old man had gaffed her and clubbed her, holding the rapier bill with its sandpaper edge and clubbing her across the top of her head until her colour turned to a colour almost like the backing of mirrors, and then, with the boy’s aid, hoisted her aboard, the male fish had stayed by the side of the boat."
    },
    {
        "photo_ids": 22, 
        "user_ids": 8, 
        "story": "If people bring so much courage to this world the world has to kill them to break them, so of course it kills them. The world breaks every one and afterward many are strong at the broken places. But those that will not break it kills. It kills the very good and the very gentle and the very brave impartially. If you are none of these you can be sure it will kill you too but there will be no special hurry"
    },
    {
        "photo_ids": 22, 
        "user_ids": 1, 
        "story": "If people bring so much courage to this world the world has to kill them to break them, so of course it kills them. The world breaks every one and afterward many are strong at the broken places. But those that will not break it kills. It kills the very good and the very gentle and the very brave impartially. If you are none of these you can be sure it will kill you too but there will be no special hurry."
    },
    {
        "photo_ids": 13, 
        "user_ids":  3, 
        "story": "I did not say anything. I was always embarrassed by the words sacred, glorious, and sacrifice and the expression in vain. We had heard them, sometimes standing in the rain almost out of earshot, so that only the shouted words came through, and had read them, on proclamations that were slapped up by billposters over other proclamations, now for a long time, and I had seen nothing sacred, and the things that were glorious had no glory and the sacrifices were like the stockyards at Chicago if nothing was done with the meat except to bury it. There were many words that you could not stand to hear and finally only the names of places had dignity. Certain numbers were the same way and certain dates and these with the names of the places were all you could say and have them mean anything. Abstract words such as glory, honor, courage, or hallow were obscene besides the concrete names of villages, the number of roads, the names of rivers, the numbers of regiments and the dates."
    },
    {
        "photo_ids": 13, 
        "user_ids":  4, 
        "story": "Forget your personal tragedy. We are all bitched from the start and you especially have to hurt like hell before you can write seriously. But when you get the damned hurt use it—don't cheat with it. Be as faithful to it as a scientist—but don't think anything is of any importance because it happens to you or anyone belonging to you."
    },
    {
        "photo_ids": 8, 
        "user_ids":  4, 
        "story": "But we were never lonely and never afraid when we were together. I know that the night is not the same as the day: that all things are different, that the things of the night cannot be explained in the day, because they do not then exist, and the night can be a dreadful time for lonely people once their loneliness has started. But with Catherine there was almost no difference in the night except that it was an even better time. If people bring so much courage to this world the world has to kill them to break them, so of course it kills them. The world breaks every one and afterward many are strong at the broken places. But those that will not break it kills."
    },
    {
        "photo_ids": 8, 
        "user_ids":  10, 
        "story": "I had seen nothing sacred, and the things that were glorious had no glory and the sacrifices were like the stockyards at Chicago if nothing was done with the meat except to bury it. There were many words that you could not stand to hear and finally only the names of places had dignity. Certain numbers were the same way and certain dates and these with the names of the places were all you could say and have them mean anything. Abstract words such as glory, honor, courage, or hallow were obscene beside the concrete names of villages, the numbers of roads, the names of rivers, the numbers of regiments and the dates."
    },
    {
        "photo_ids": 8, 
        "user_ids": 11, 
        "story": "There is no lonelier man in death, except the suicide, than that man who has lived many years with a good wife and then outlived her. If two people love each other there can be no happy end to it."
    },
    {
        "photo_ids": 9, 
        "user_ids": 11, 
        "story": "I must not fear. Fear is the mind-killer. Fear is the little-death that brings total obliteration. I will face my fear. I will permit it to pass over me and through me. And when it has gone past I will turn the inner eye to see its path. Where the fear has gone there will be nothing. Only I will remain."
    },
    {
        "photo_ids": 28, 
        "user_ids":  8, 
        "story": "This is what you shall do; Love the earth and sun and the animals, despise riches, give alms to every one that asks, stand up for the stupid and crazy, devote your income and labor to others, hate tyrants, argue not concerning God, have patience and indulgence toward the people, take off your hat to nothing known or unknown or to any man or number of men, go freely with powerful uneducated persons and with the young and with the mothers of families, read these leaves in the open air every season of every year of your life, re-examine all you have been told at school or church or in any book, dismiss whatever insults your own soul, and your very flesh shall be a great poem and have the richest fluency not only in its words but in the silent lines of its lips and face and between the lashes of your eyes and in every motion and joint of your body."
    },
    {
        "photo_ids": 27, 
        "user_ids":  2, 
        "story": "It’s a very Greek idea, and a very profound one. Beauty is terror. Whatever we call beautiful, we quiver before it. And what could be more terrifying and beautiful, to souls like the Greeks or our own, than to lose control completely? To throw off the chains of being for an instant, to shatter the accident of our mortal selves? Euripides speaks of the Maenads: head thrown I back, throat to the stars, “more like deer than human being.” To be absolutely free! One is quite capable, of course, of working out these destructive passions in more vulgar and less efficient ways. But how glorious to release them in a single burst! To sing, to scream, to dance barefoot in the woods in the dead of night, with no more awareness of mortality than an animal! These are powerful mysteries. The bellowing of bulls. Springs of honey bubbling from the ground. If we are strong enough in our souls we can rip away the veil and look that naked, terrible beauty right in the face; let God consume us, devour us, unstring our bones. Then spit us out reborn."
    },
    {
        "photo_ids": 26, 
        "user_ids":  2, 
        "story": "We are the music-makers, And we are the dreamers of dreams, Wandering by lone sea-breakers, And sitting by desolate streams. World-losers and world-forsakers, Upon whom the pale moon gleams; Yet we are the movers and shakers, Of the world forever, it seems."
    },
    {
        "photo_ids": 25, 
        "user_ids":  3, 
        "story": "A green hunting cap squeezed the top of the fleshy balloon of a head. The green earflaps, full of large ears and uncut hair and the fine bristles that grew in the ears themselves, stuck out on either side like turn signals indicating two directions at once. Full, pursed lips protruded beneath the bushy black moustache and, at their corners, sank into little folds filled with disapproval and potato chip crumbs. In the shadow under the green visor of the cap Ignatius J. Reilly’s supercilious blue and yellow eyes looked down upon the other people waiting under the clock at the D.H. Holmes department store, studying the crowd of people for signs of bad taste in dress. Several of the outfits, Ignatius noticed, were new enough and expensive enough to be properly considered offenses against taste and decency. Possession of anything new or expensive only reflected a person’s lack of theology and geometry; it could even cast doubts upon one’s soul."
    },
    {
        "photo_ids": 24, 
        "user_ids":  6, 
        "story": "Mother died today. Or maybe yesterday, I don’t know. I had a telegram from the home: ‘Mother passed away. Funeral tomorrow. Yours sincerely.’ That doesn’t mean anything. It may have been yesterday."
    },
    {
        "photo_ids": 25, 
        "user_ids":  3, 
        "story": "America was never innocent. We popped our cherry on the boat over and looked back with no regrets. You can’t ascribe our fall from grace to any single event or set of circumstances. You can’t lose what you lacked at conception."
    },
    {
        "photo_ids": 17, 
        "user_ids": 10, 
        "story": "Call me Ishmael. Some years ago — never mind how long precisely — having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen, and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off — then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me."
    },
    {
        "photo_ids": 17, 
        "user_ids": 12, 
        "story": "In the late summer of that year we lived in a house in a village that looked across the river and the plain to the mountains. In the bed of the river there were pebbles and boulders, dry and white in the sun, and the water was clear and swiftly moving and blue in the channels. Troops went by the house and down the road and the dust they raised powdered the leaves of the trees. The trunks of the trees too were dusty and the leaves fell early that year and we saw the troops marching along the road and the dust rising and leaves, stirred by the breeze, falling and the soldiers marching and afterward the road bare and white except for the leaves."
    },
    {
        "photo_ids": 9, 
        "user_ids": 8, 
        "story": "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair, we had everything before us, we had nothing before us, we were all going direct to Heaven, we were all going direct the other way — in short, the period was so far like the present period, that some of its noisiest authorities insisted on its being received, for good or for evil, in the superlative degree of comparison only."
    },
    {
        "photo_ids": 16, 
        "user_ids": 7, 
        "story": "I first met Dean not long after my wife and I split up. I had just gotten over a serious illness that I won’t bother to talk about, except that it had something to do with the miserably weary split-up and my feeling that everything was dead. With the coming of Dean Moriarty began the part of my life you could call my life on the road. Before that I’d often dreamed of going West to see the country, always vaguely planning and never taking off. Dean is the perfect guy for the road because he actually was born on the road, when his parents were passing through Salt Lake City in 1926, in a jalopy, on their way to Los Angeles. First reports of him came to me through Chad King, who’d shown me a few letters from him written in a New Mexico reform school. I was tremendously interested in the letters because they so naively and sweetly asked Chad to teach him all about Nietzsche and all the wonderful intellectual things that Chad knew. At one point Carlo and I talked about the letters and wondered if we would ever meet the strange Dean Moriarty. This is all far back, when Dean was not the way he is today, when he was a young jailkid shrouded in mystery. Then news came that Dean was out of reform school and was coming to New York for the first time; also there was talk that he had just married a girl called Marylou."
    },
    {
        "photo_ids": 16, 
        "user_ids": 7, 
        "story": "Hale knew, before he had been in Brighton three hours, that they meant to murder him. With his inky fingers and his bitten nails, his manner cynical and nervous, anybody could tell he didn’t belong – belong to the early summer sun, the cool Whitsun wind off the sea, the holiday crowd. They came in by train from Victoria every five minutes, rocked down Queen’s Road standing on the tops of the little local trams, stepped off in bewildered multitudes into fresh and glittering air: the new silver paint sparkled on the piers, the cream houses ran away into the west like a pale Victorian water-colour; a race in miniature motors, a band playing, flower gardens in bloom below the front, an aeroplane advertising something for the health in pale vanishing clouds across the sky."
    },
    {
        "photo_ids": 30, 
        "user_ids": 2, 
        "story": "It must have been around a quarter to eleven. A sailor came in and ordered a chile dog and coffee. I sliced a bun, jerked a frank out of the boiling water, nested it, poured a half-dipper of chile over the frank and sprinkled it liberally with chopped onions. I scribbled a check and put it by his plate. I wouldn’t have recommended the unpalatable mess to a starving animal. The sailor was the only customer, and after he ate his dog he left. That was the exact moment she entered. A small woman, hardly more than five feet. She had the figure of a teenage girl. Her suit was a blue tweed, smartly cut, and over her thin shoulders she wore a fur jacket, bolero length. Tiny gold circular earrings clung to her small pierced ears. Her hands and feet were small, and when she seated herself at the counter I noticed she wasn’t wearing any rings."
    },
    {
        "photo_ids": 29, 
        "user_ids":  2, 
        "story": "It is a truth universally acknowledged, that a single man in possession of a good fortune must be in want of a wife. However little known the feelings or views of such a man may be on his first entering a neighbourhood, this truth is so well fixed in the minds of the surrounding families, that he is considered as the rightful property of some one or other of their daughters."
    },
    {
        "photo_ids": 29, 
        "user_ids": 3, 
        "story": "Dark spruce forest frowned on either side of the frozen waterway. The trees had been stripped by a recent wind of their white covering of frost, and they seemed to lean toward each other, black and ominous, in the fading light. A vast silence reigned over the land. The land itself was a desolation, lifeless, without movement, so lone and cold that the spirit of it was not even that of sadness. There was a hint in it of laughter, but of a laughter more terrible than any sadness — a laughter that was mirthless as the smile of the Sphinx, a laughter cold as the frost and partaking of the grimness of infallibility. It was the masterful and incommunicable wisdom of eternity laughing at the futility of life and the effort of life. It was the Wild, the savage, frozen-hearted Northland Wild."
    },
    {
        "photo_ids": 28, 
        "user_ids": 6, 
        "story": "ABANDON ALL HOPE YE WHO ENTER HERE is scrawled in blood red lettering on the side of the Chemical Bank near the corner of Eleventh and First and is in print large enough to be seen from the backseat of the cab as it lurches forward in the traffic leaving Wall Street and just as Timothy Price notices the words a bus pulls up, the advertisement for Les Miserables on its side blocking his view, but Price who is with Pierce & Pierce and twenty-six doesn't seem to care because he tells the driver he will give him five dollars to turn up the radio, on WYNN, and the driver, black, not American, does so."
    },
    {
        "photo_ids": 27, 
        "user_ids": 1, 
        "story": "I am a sick man. ... I am a spiteful man. I am an unattractive man. I believe my liver is diseased. However, I know nothing at all about my disease, and do not know for certain what ails me. I don't consult a doctor for it, and never have, though I have a respect for medicine and doctors. Besides, I am extremely superstitious, sufficiently so to respect medicine, anyway (I am well-educated enough not to be superstitious, but I am superstitious). No, I refuse to consult a doctor from spite. That you probably will not understand. Well, I understand it, though. Of course, I can't explain who it is precisely that I am mortifying in this case by my spite: I am perfectly well aware that I cannot pay out the doctors by not consulting them; I know better than anyone that by all this I am only injuring myself and no one else. But still, if I don't consult a doctor it is from spite. My liver is bad, well then let it hurt even worse!"
    },
    {
        "photo_ids": 27, 
        "user_ids": 1, 
        "story": "No live organism can continue for long to exist sanely under conditions of absolute reality; even larks and katydids are supposed, by some, to dream. Hill House, not sane, stood by itself against its hills, holding darkness within; it had stood so for eighty years and might stand for eighty more. Within, walls continued upright, bricks met neatly, floors were firm, and doors were sensibly shut; silence lay steadily against the wood and stone of Hill House, and whatever walked there, walked alone…"
    },
    {
        "photo_ids": 32, 
        "user_ids": 2, 
        "story": "As Gregor Samsa awoke one morning from uneasy dreams he found himself transformed in his bed into a gigantic insect. He was lying on his hard, as it were armor-plated, back and when he lifted his head a little he could see his dome-like brown belly divided into stiff arched segments on top of which the bed quilt could hardly keep in position and was about to slide off completely. His numerous legs, which were pitifully thin compared to the rest of his bulk, waved helplessly before his eyes."
    },
    {
        "photo_ids": 9, 
        "user_ids": 1, 
        "story": "I am an invisible man. No, I am not a spook like those who haunted Edgar Allan Poe; nor am I one of your Hollywood-movie ectoplasms. I am a man of substance, of flesh and bone, fiber and liquids—and I might even be said to possess a mind. I am invisible, understand, simply because people refuse to see me. Like the bodiless heads you see sometimes in circus sideshows, it is as though I have been surrounded by mirrors of hard, distorting glass. When they approach me they see only my surroundings, themselves, or figments of their imagination—indeed, everything and anything except me."
    },
    {
        "photo_ids": 22, 
        "user_ids": 8, 
        "story": "You don't know about me without you have read a book by the name of The Adventures of Tom Sawyer; but that ain't no matter. That book was made by Mr. Mark Twain, and he told the truth, mainly. There was things which he stretched, but mainly he told the truth. That is nothing. I never seen anybody but lied one time or another, without it was Aunt Polly, or the widow, or maybe Mary. Aunt Polly - Tom's Aunt Polly, she is - and Mary, and the Widow Douglas is all told about in that book, which is mostly a true book, with some stretchers, as I said before."
    },
    {
        "photo_ids": 2, 
        "user_ids": 6, 
        "story": "I was 37 then, strapped in my seat as the huge 747 plunged through dense cloud cover on approach to Hamburg Airport. Cold November rains drenched the earth. lending everything the gloomy air of a Flemish landscape: the ground crew in waterproofs, a flag atop a squat building, a BMW billboard. So - Germany again."
    },
    {
        "photo_ids": 2, 
        "user_ids": 7, 
        "story": "We believe that we can change the things around us in accordance with our desires—we believe it because otherwise we can see no favourable outcome. We do not think of the outcome which generally comes to pass and is also favourable: we do not succeed in changing things in accordance with our desires, but gradually our desires change. The situation that we hoped to change because it was intolerable becomes unimportant to us. We have failed to surmount the obstacle, as we were absolutely determined to do, but life has taken us round it, led us beyond it, and then if we turn round to gaze into the distance of the past, we can barely see it, so imperceptible has it become"
    },
    {
        "photo_ids": 3, 
        "user_ids": 6, 
        "story": "Hello babies. Welcome to Earth. It’s hot in the summer and cold in the winter. It’s round and wet and crowded. On the outside, babies, you’ve got a hundred years here. There’s only one rule that I know of, babies-“God damn it, you’ve got to be kind."
    },
    {
        "photo_ids": 3, 
        "user_ids": 7, 
        "story": "Just remember that the things you put into your head are there forever, he said. You might want to think about that You forget some things, dont you? Yes. You forget what you want to remember and you remember what you want to forget."
    },
    {
        "photo_ids": 13, 
        "user_ids": 8, 
        "story": "You can tell yourself that you would be willing to lose everything you have in order to get something you want. But it’s a catch-22: all of those things you’re willing to lose are what make you recognizable. Lose them, and you’ve lost yourself."
    },
    {
        "photo_ids": 13, 
        "user_ids": 9, 
        "story": "Sometimes fate is like a small sandstorm that keeps changing directions. You change direction but the sandstorm chases you. You turn again, but the storm adjusts. Over and over you play this out, like some ominous dance with death just before dawn. Why? Because this storm isn’t something that blew in from far away, something that has nothing to do with you. This storm is you. Something inside of you. So all you can do is give in to it, step right inside the storm, closing your eyes and plugging up your ears so the sand doesn’t get in, and walk through it, step by step. There’s no sun there, no moon, no direction, no sense of time. Just fine white sand swirling up into the sky like pulverized bones. That’s the kind of sandstorm you need to imagine."
    },
    {
        "photo_ids": 14, 
        "user_ids": 8, 
        "story": "The most important things are the hardest to say. They are the things you get ashamed of, because words diminish them — words shrink things that seemed limitless when they were in your head to no more than living size when they’re brought out. But it’s more than that, isn’t it? The most important things lie too close to wherever your secret heart is buried, like landmarks to a treasure your enemies would love to steal away. And you may make revelations that cost you dearly only to have people look at you in a funny way, not understanding what you’ve said at all, or why you thought it was so important that you almost cried while you were saying it. That’s the worst, I think. When the secret stays locked within not for want of a teller but for want of an understanding ear."
    },
    {
        "photo_ids": 14, 
        "user_ids": 9, 
        "story": "I don’t have any problem understanding why people flunk out of college or quit their jobs or cheat on each other or break the law or spray-paint walls. A little bit outside of things is where some people feel each other. We do it to replace the frame of family. We do it to erase and remake our origins in their own images. To say, I too was here."
    },
    {
        "photo_ids": 6, 
        "user_ids": 8, 
        "story": "Lolita, light of my life, fire of my loins. My sin, my soul. Lo-lee-ta: the tip of the tongue taking a trip of three steps down the palate to tap, at three, on the teeth. Lo. Lee. Ta. She was Lo, plain Lo, in the morning, standing four feet ten in one sock. She was Lola in slacks. She was Dolly at school. She was Dolores on the dotted line. But in my arms she was always Lolita. Did she have a precursor? She did, indeed she did. In point of fact, there might have been no Lolita at all had I not loved, one summer, an initial girl-child. In a princedom by the sea. Oh when? About as many years before Lolita was born as my age was that summer. You can always count on a murderer for a fancy prose style. Ladies and gentlemen of the jury, exhibit number one is what the seraphs, the misinformed, simple, noble-winged seraphs, envied. Look at this tangle of thorns."
    },
    {
        "photo_ids": 15, 
        "user_ids": 9, 
        "story": "You think because he doesn’t love you that you are worthless. You think that because he doesn’t want you anymore that he is right — that his judgement and opinion of you are correct. If he throws you out, then you are garbage. You think he belongs to you because you want to belong to him. Don’t. It’s a bad word, ‘belong.’ Especially when you put it with somebody you love. Love shouldn’t be like that. Did you ever see the way the clouds love a mountain? They circle all around it; sometimes you can’t even see the mountain for the clouds. But you know what? You go up top and what do you see? His head. The clouds never cover the head. His head pokes through, beacuse the clouds let him; they don’t wrap him up. They let him keep his head up high, free, with nothing to hide him or bind him. You can’t own a human being. You can’t lose what you don’t own. Suppose you did own him. Could you really love somebody who was absolutely nobody without you? You really want somebody like that? Somebody who falls apart when you walk out the door? You don’t, do you? And neither does he. You’re turning over your whole life to him. Your whole life, girl. And if it means so little to you that you can just give it away, hand it to him, then why should it mean any more to him? He can’t value you more than you value yourself."
    },
    {
        "photo_ids": 15, 
        "user_ids": 7, 
        "story": "…I think we are well-advised to keep on nodding terms with the people we used to be, whether we find them attractive company or not. Otherwise they turn up unannounced and surprise us, come hammering on the mind’s door at 4 a.m. of a bad night and demand to know who deserted them, who betrayed them, who is going to make amends. We forget all too soon the things we thought we could never forget. We forget the loves and the betrayals alike, forget what we whispered and what we screamed, forget who we were."
    },
    {
        "photo_ids": 11, 
        "user_ids": 12, 
        "story": "I wanted so badly to lie down next to her on the couch, to wrap my arms around her and sleep. Not fuck, like in those movies. Not even have sex. Just sleep together in the most innocent sense of the phrase. But I lacked the courage and she had a boyfriend and I was gawky and she was gorgeous and I was hopelessly boring and she was endlessly fascinating. So I walked back to my room and collapsed on the bottom bunk, thinking that if people were rain, I was drizzle and she was hurricane."
    },
    {
        "photo_ids": 10, 
        "user_ids": 13, 
        "story": "If you’re going to try, go all the way. Otherwise, don’t even start. This could mean losing girlfriends, wives, relatives and maybe even your mind. It could mean not eating for three or four days. It could mean freezing on a park bench. It could mean jail. It could mean derision. It could mean mockery–isolation. Isolation is the gift. All the others are a test of your endurance, of how much you really want to do it. And, you’ll do it, despite rejection and the worst odds. And it will be better than anything else you can imagine. If you’re going to try, go all the way. There is no other feeling like that. You will be alone with the gods, and the nights will flame with fire. You will ride life straight to perfect laughter. It’s the only good fight there is."
    },
    {
        "photo_ids": 10, 
        "user_ids": 8, 
        "story": "I will be very careful the next time I fall in love, she told herself. Also, she had made a promise to herself that she intended on keeping. She was never going to go out with another writer: no matter how charming, sensitive, inventive or fun they could be. They weren’t worth it in the long run. They were emotionally too expensive and the upkeep was complicated. They were like having a vacuum cleaner around the house that broke all the time and only Einstein could fix it. She wanted her next lover to be a broom."
    },
    {
        "photo_ids": 1, 
        "user_ids": 11, 
        "story": "Usually we walk around constantly believing ourselves. “I’m okay” we say. “I’m alright”. But sometimes the truth arrives on you and you can’t get it off. That’s when you realize that sometimes it isn’t even an answer–it’s a question. Even now, I wonder how much of my life is convinced"
    },
    {
        "photo_ids": 1, 
        "user_ids": 3, 
        "story": "I love you without knowing how, or when, or from where. I love you simply, without problems or pride: I love you in this way because I do not know any other way of loving but this, in which there is no I or you, so intimate that your hand upon my chest is my hand, so intimate that when I fall asleep your eyes close."
    },
    {
        "photo_ids": 4, 
        "user_ids": 4, 
        "story": "It doesn’t interest me what you do for a living. I want to know what you ache for, and if you dare to dream of meeting your heart’s longing. It doesn’t interest me how old you are. I want to know if you will risk looking like a fool for love, for your dream, for the adventure of being alive. It doesn’t interest me what planets are squaring your moon. I want to know if you have touched the center of your own sorrow, if you have been opened by life’s betrayals or have become shriveled and closed from fear of further pain!I want to know if you can sit with pain, mine or your own, without moving to hide it or fade it, or fix it."
    },
    {
        "photo_ids": 14, 
        "user_ids": 11, 
        "story": "As I took another breath, I saw the three stars again. They were not calling to me; they were letting me go, leaving me to the black universe I had wandered for so many lifetimes. I drifted into the black, and it got brighter and brighter. It wasn't black at all—it was blue. Warm, vibrant, brilliant blue... I floated into it with no fear at all."
    },
    {
        "photo_ids": 14, 
        "user_ids": 8, 
        "story": "Religion is like language or dress. We gravitate toward the practices with which we were raised. In the end, though, we are all proclaiming the same thing. That life has meaning. That we are grateful for the power that created us."
    },
    {
        "photo_ids": 14, 
        "user_ids": 6, 
        "story": "First, let no one rule your mind or body. Take special care that your thoughts remain unfettered... Give men your ear, but not your heart. Show respect for those in power, but don't follow them blindly. Judge with logic and reason, but comment not. Consider none your superior whatever their rank or station in life. Treat all fairly, or they will seek revenge. Be careful with your money. Hold fast to your beliefs and others will listen."
    },
    {
        "photo_ids": 5, 
        "user_ids": 4, 
        "story": "On the girl's brown legs there were many small white scars. I was thinking, Do those scars cover the whole of you, like the stars and the moons on your dress? I thought that would be pretty too, and I ask you right here please to agree with me that a scar is never ugly. That is what the scar makers want us to think. But you and I, we must make an agreement to defy them. We must see all scars as beauty. Okay? This will be our secret. Because take it from me, a scar does not form on the dying. A scar means, I survived."
    }
]

  var users = [
    {
      id: 1, 
      username: "Sample"
    }, 
    {
     id: 2, 
     username: "Bill"
    }, 
    {
      id: 3, 
      username: "Steve"
     }, 
     {
      id: 4, 
      username: "Jess"
     }, 
     {
      id: 5, 
      username: "Evi"
     }, 
     {
      id: 6, 
      username: "Samoa"
     }, 
     {
      id: 7, 
      username: "Tendi"
     }, 
     {
      id: 8, 
      username: "GME"
     }, 
     {
      id: 9, 
      username: "Cros"
     }, 
     {
      id: 10, 
      username: "WeBull"
     }, 
     {
      id: 11, 
      username: "Dowe"
     }, 
     {
       id: 12, 
       username: "Vai"
     }, 
     {
       id: 13, 
       username: "Cersi", 
     }
]

let randomIndex = Math.floor(Math.random() * 24)

this.setState({
  photos: allPhotos,
  selectPhoto: allPhotos[randomIndex], 
  blogs: blogs, 
  allUsers: users
})

      fetch('http://localhost:9292/blogs')
      .then(res => res.json())
      .then(userBlogs => this.setState(
        {blogs: userBlogs}
      ))

      fetch('http://localhost:9292/users')
      .then(res => res.json())
      .then(users => this.setState(
        {allUsers: users}
      ))
} 

getUserBlogs= ()=> {
    
  const userCollection = this.state.blogs.filter(siteBlogs => siteBlogs.user_ids === this.state.currentUser)
    
  this.setState({
    currentUserBlogs:[...userCollection]
  })
}

  
getPhotoUserCollection=(photoObj)=>{

  const story= this.state.currentUserBlogs.find(blog => blog.photo_ids === photoObj.id)
  const photoStory = this.state.photos.find(photo => photo.id===photoObj.id)
  
  this.setState({
    photoUserCollection: photoStory,
    storyUserCollection: story.story
  })
}

siteCollectionPhoto = (obj) =>{  
  const siteCollectionStories = this.state.blogs.filter(blogo => blogo.photo_ids === obj.id)
  const siteCollectionPhoto = this.state.photos.find(photo => photo.id===obj.id)
  
  this.setState({
    siteSelectedPhoto: siteCollectionPhoto, 
    siteStories: [...siteCollectionStories],
  })
}

addNewBlog = (blogObj) =>{

  this.setState({
    newestStory: blogObj.story,
    submitStatus: !this.state.submitStatus
  })

  let newBlog = {
    user_ids: blogObj.user_ids, 
    photo_ids: blogObj.photo_ids, 
    story: blogObj.story 
  }

    fetch('http://localhost:9292/blogs', {
     method: "POST",
     headers: {
     "Content-Type": "application/json",
    },
      body: JSON.stringify(newBlog),
    })
    .then (res => res.json())
    .then (newBlogo => {
    this.setState({
      blogs: [...this.state.blogs, newBlogo]
      })
    })
}

changeHome = () => {
  this.setState({
    home: !this.state.home
  })
}

changeSubmitStatus = () => {
  this.setState({
    submitStatus: !this.state.submitStatus
  })
}

switchPhoto= () => {
  let randomIndex2 = Math.floor(Math.random() * 30)
  this.setState({
    selectPhoto: this.state.photos[randomIndex2]
  })
}

  render() {

    return (
      <div>
        { this.state.home === false ? <FixedHeader changeHome = {this.changeHome} home = {this.state.home}></FixedHeader> : null }
        
        <Switch>

        <Route path = "/userhome">
          <UserHome  currentUserBlogs = {this.state.currentUserBlogs} photos= {this.state.photos}
                     getPhotoUserCollection = {this.getPhotoUserCollection}/>
        </Route>

        <Route path = "/usercollectionstory">
          <CollectionCard photo = {this.state.photoUserCollection} story = {this.state.storyUserCollection}
                          switchPhoto = {this.switchPhoto}>
          </CollectionCard>
        </Route>

        <Route path = "/sitestory">
          <SiteBlogPage siteSelectedPhoto = {this.state.siteSelectedPhoto} 
                        siteStories = {this.state.siteStories}>
          </SiteBlogPage>
        </Route>

        <Route path = "/create">
        <MainPage mainPhoto = {this.state.selectPhoto} addNewBlog= {this.addNewBlog} 
                  switchPhoto = {this.switchPhoto} submitStatus = {this.state.submitStatus}
                  changeSubmitStatus = {this.changeSubmitStatus} getUserBlogs = {this.getUserBlogs}
                  />
        </Route>

        <Route path = "/publishedblog">
          <PublishedBlog mainPhoto = {this.state.selectPhoto} newestStory= {this.state.newestStory} 
                         switchPhoto = {this.switchPhoto}/>
        </Route>

        <Route path = "/sitecollection">
          <SiteCollection photos = {this.state.photos} siteCollectionPhoto = {this.siteCollectionPhoto}
                          siteSelectedPhoto = {this.state.siteSelectedPhoto} siteStories= {this.state.siteStories}/>
        </Route>

        <Route path= "/">
          <Home changeHome = {this.changeHome} home = {this.state.home} getUserBlogs = {this.getUserBlogs}/>
        </Route>

        </Switch>
      </div>
    )
  }
}

