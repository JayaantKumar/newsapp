import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import Proptypes from 'prop-types'

export class News extends Component {

  "articles" = [
    {
        "source": {
            "id": "al-jazeera-english",
            "name": "Al Jazeera English"
        },
        "author": "Al Jazeera",
        "title": "New Zealand pilot Phillip Mehrtens freed by Papua rebels after 19 months - Al Jazeera English",
        "description": "Indonesian police say Mehrtens has been flown out of mountainous Nduga and appears in good health.",
        "url": "https://www.aljazeera.com/news/2024/9/21/indonesian-pilot-phillip-mehrtens-freed-by-papua-rebels-after-19-months",
        "urlToImage": "https://www.aljazeera.com/wp-content/uploads/2023/02/AP23045613006810.jpg?resize=1920%2C1440",
        "publishedAt": "2024-09-21T05:15:00Z",
        "content": "New Zealand pilot Phillip Mehrtens has been freed by rebels in Indonesias troubled eastern region of Papua 19 months after he was kidnapped.\r\nToday, we have picked up pilot Phillip, who is in good he… [+1286 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "[Removed]"
        },
        "author": null,
        "title": "[Removed]",
        "description": "[Removed]",
        "url": "https://removed.com",
        "urlToImage": null,
        "publishedAt": "2024-09-21T04:30:00Z",
        "content": "[Removed]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Kim Bellware",
        "title": "Police seek motive for sheriff accused of shooting Kentucky judge - The Washington Post",
        "description": "The death of Kevin Mullins on Thursday shocked close-knit Whitesburg, Kentucky. The sheriff charged with murder is accused of ignoring sexual abuse inside the courthouse.",
        "url": "https://www.washingtonpost.com/nation/2024/09/20/kentucky-judge-mullins-shooting-sheriff-stines/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/TPTOL3YSVXIKLQEWLVWKN2SVNU_size-normalized.jpg&w=1440",
        "publishedAt": "2024-09-21T04:22:00Z",
        "content": "This article has been revised to remove the name of a woman who accused Letcher County Sheriff's Deputy Ben Fields of coercing a woman into sex because The Washington Post typically does not name vic… [+5325 chars]"
    },
    {
        "source": {
            "id": "reuters",
            "name": "Reuters"
        },
        "author": "Laila Bassam, Maayan Lubell",
        "title": "Top Hezbollah commander among 14 killed in Israeli strike on Beirut - Reuters",
        "description": "Hezbollah's operations commander Ibrahim Aqil, who served on the group's top military body, was killed alongside members of Hezbollah's elite Radwan Unit.",
        "url": "https://www.reuters.com/world/middle-east/un-peacekeepers-lebanon-urge-de-escalation-after-heavy-airstrikes-2024-09-20/",
        "urlToImage": "https://www.reuters.com/resizer/v2/M266ZIOLB5KBTN5OHJTNV7JK6M.jpg?auth=0262b0299856b4154f55227177ede49238889f4fa71e37173fb15c0a3d9dbf15&height=1005&width=1920&quality=80&smart=true",
        "publishedAt": "2024-09-21T04:17:00Z",
        "content": "BEIRUT/JERUSALEM, Sept 20 (Reuters) - Israel killed a top Hezbollah commander and other senior figures in the Lebanese movement in an airstrike on Beirut on Friday, vowing to press on with a new mili… [+6753 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Yahoo Entertainment"
        },
        "author": "Jack Baer",
        "title": "Shohei Ohtani receives standing ovation after reaching 50-50, then reaches 52-52 - Yahoo Sports",
        "description": "Ohtani isn't stopping after hitting 50-50.",
        "url": "https://sports.yahoo.com/shohei-ohtani-receives-standing-ovation-after-reaching-50-50-then-reaches-52-52-035341563.html",
        "urlToImage": "https://s.yimg.com/ny/api/res/1.2/S3QHvu63mq7hw8iGfNMKWQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-09/e20aff60-77cc-11ef-b9ff-f61346c79e2f",
        "publishedAt": "2024-09-21T04:12:00Z",
        "content": "Shohei Ohtani returned to Dodger Stadium as a conquering hero Friday after clinching the first 50-50 season in MLB history. Then he kept doing what he does best.\r\nAfter reaching 50-50 and 51-51 in th… [+2181 chars]"
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "DIANE JEANTET",
        "title": "Shocking rape trial highlights the systematic struggles French sexual abuse victims face - The Associated Press",
        "description": "The trial of dozens of men accused of raping an unconscious woman whose husband repeatedly drugged her has highlighted the difficulties that sexual violence victims can face in France. Seventy-one-year-old Dominique Pelicot and his 50 co-defendants each face …",
        "url": "https://apnews.com/article/france-rape-trial-unconscious-wife-3b82c8b9df2e402b301e3c93d07849a1",
        "urlToImage": "https://dims.apnews.com/dims4/default/f8ba913/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F93%2F9a%2F7d293cb3a0d7442967f145c94eae%2F74a08c20a4ba4c4396a16ab6ef57a699",
        "publishedAt": "2024-09-21T04:07:00Z",
        "content": "AVIGNON, France (AP) The trial of dozens of men accused of raping an unconscious woman whose husband repeatedly drugged her over the course of nearly a decade has highlighted the difficulties that se… [+7969 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Rolling Stone"
        },
        "author": "Charisma Madarang",
        "title": "Erik Menendez Slams Ryan Murphy’s ‘Monsters’ Portrayal of Brothers: ‘Vile and Appalling’ - Rolling Stone",
        "description": "Following the release of Netflix's 'Monsters: The Lyle and Erik Menendez Story,' Erik Menendez denounced the show as a \"dishonest portrayal.\"",
        "url": "http://www.rollingstone.com/tv-movies/tv-movie-news/erik-menendez-slams-ryan-murphy-monsters-netflix-1235108630/",
        "urlToImage": "https://www.rollingstone.com/wp-content/uploads/2024/09/Menendez-brothers-trial.jpg?w=1600&h=900&crop=1",
        "publishedAt": "2024-09-21T04:04:00Z",
        "content": "Following the release of Netflix‘s Monsters: The Lyle and Erik Menendez Story, Erik Menendez released a statement denouncing the show as a “dishonest portrayal of the tragedies surrounding our crime.… [+2893 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Marshall Cohen, Jason Morris",
        "title": "Georgia election board requires ballots be hand-counted despite warning from key GOP state officials - CNN",
        "description": "Allies of former President Donald Trump who control the Georgia State Election Board approved a controversial new rule Friday requiring counties to hand-count the of ballots cast at polling places on Election Day, despite bipartisan objections from election o…",
        "url": "https://www.cnn.com/2024/09/20/politics/georgia-republican-election-rules-hand-count/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/c-ap24264510555935.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-21T03:35:00Z",
        "content": "Allies of former President Donald Trump who control the Georgia State Election Board approved a controversial new rule Friday requiring counties to hand-count the number of ballots cast at polling pl… [+6496 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "BBC News"
        },
        "author": null,
        "title": "Secret Service admits 'complacency' before Trump rally shooting - BBC.com",
        "description": "The agency's director cites a failure to secure the building the shooter fired from among a litany of security breakdowns.",
        "url": "https://www.bbc.com/news/articles/c870dx37y2qo",
        "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/cfb9/live/90337670-779c-11ef-82fc-8f6b668b4a57.jpg",
        "publishedAt": "2024-09-21T03:29:46Z",
        "content": "A US Secret Service internal review has identified poor planning and a communication breakdown among a litany of security failures on the day of the attempted assassination of Donald Trump two months… [+2500 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Hannah Knowles, Amy Gardner",
        "title": "Porn site user linked to Mark Robinson also praised Hitler’s Mein Kampf - The Washington Post",
        "description": "The Republican nominee for governor in North Carolina has denied writing the posts, which have upended his campaign in the battleground state",
        "url": "https://www.washingtonpost.com/politics/2024/09/20/mark-robinson-mein-kampf-porn-posts/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/WFP2H3QY6T7PJKG5RBRXCDX4SQ.JPG&w=1440",
        "publishedAt": "2024-09-21T03:02:38Z",
        "content": "A porn site user linked to North Carolina gubernatorial nominee Mark Robinson praised Adolf Hitlers book Mein Kampf in addition to declaring himself a black NAZI, according to screenshots obtained by… [+3630 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Sarah Rumpf-Whitten",
        "title": "Arizona Supreme Court rules 98,000 people whose citizenship is unconfirmed can vote in pivotal election - Fox News",
        "description": "The Arizona Supreme Court ruled Friday that nearly 98,000 people whose citizenship documents hadn’t been confirmed can vote in state and local races.",
        "url": "https://www.foxnews.com/politics/arizona-supreme-court-rules-98000-people-citizenship-unconfirmed-vote-pivotal-election",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/Oklahoma-Voting-Election-2.jpg",
        "publishedAt": "2024-09-21T02:27:00Z",
        "content": "Nearly 98,000 people whose U.S. citizenship has not been confirmed will be allowed to vote in the upcoming state and local elections, the Arizona Supreme Court ruled Friday.\r\nThe ruling came after a … [+1864 chars]"
    },
    {
        "source": {
            "id": "cnn",
            "name": "CNN"
        },
        "author": "Ashley R. Williams",
        "title": "South Carolina death row inmate dies by state’s first lethal injection in 13 years - CNN",
        "description": "South Carolina death row inmate Freddie Owens died by lethal injection on Friday during the state’s first execution in 13 years.",
        "url": "https://www.cnn.com/2024/09/20/us/freddie-owens-south-carolina-execution/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/freddieeugeneowens.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2024-09-21T02:00:00Z",
        "content": "South Carolina death row inmate Freddie Owens died by lethal injection on Friday during the states first execution in 13 years.\r\nOwens, 46, was sentenced to death in 1999 for killing a convenience st… [+6117 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "CBS Sports"
        },
        "author": "",
        "title": "College football picks, schedule: Predictions against the spread, odds for NCAA top 25 games in Week 4 - CBS Sports",
        "description": "A closer look at the top games for the fourth week of the 2024 college football season",
        "url": "https://www.cbssports.com/college-football/news/college-football-picks-schedule-predictions-against-the-spread-odds-for-ncaa-top-25-games-in-week-4/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/09/20/0d4b6d1f-b8b6-4d59-8fab-1a3f48044dbd/thumbnail/1200x675/614e1e18fd136c4f5acce3dbb8316021/tennessee.png",
        "publishedAt": "2024-09-21T01:35:00Z",
        "content": "Week 4 of the 2024 college football season brings plenty action with three games featuring top-25 teams squaring off highlighting the weekend slate. Two games feature opponents that ranked inside the… [+4037 chars]"
    },
    {
        "source": {
            "id": "fox-news",
            "name": "Fox News"
        },
        "author": "Ryan Morik",
        "title": "Nick Saban blames Panthers for Bryce Young's struggles: 'Did not' have talent around him - Fox News",
        "description": "Bryce Young has been benched in favor of Andy Dalton after just two games in his second season in the NFL, which has been nothing short of disastrous.",
        "url": "https://www.foxnews.com/sports/nick-saban-places-blame-panthers-bryce-youngs-struggles-did-not-have-pieces-around-him",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/09/saban-bryce.jpg",
        "publishedAt": "2024-09-21T01:32:00Z",
        "content": "Everyone figured it would be a struggle for Bryce Young, but it was tough to predict this.\r\nThe Carolina Panthers traded up from the ninth spot in last year's draft to the top selection to select Bry… [+1884 chars]"
    },
    {
        "source": {
            "id": "the-washington-post",
            "name": "The Washington Post"
        },
        "author": "Daniel Gilbert",
        "title": "FTC sues pharmacy insurance managers, alleging unfair drug prices - The Washington Post",
        "description": "The FTC accuses the largest pharmacy benefit manager companies of unfairly boosting prices on prescription drugs.",
        "url": "https://www.washingtonpost.com/business/2024/09/20/prescription-drugs-insurance-ftc-pbm/",
        "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/56CX5QZO6JDYHKEWFNQSZNNCRA.jpg&w=1440",
        "publishedAt": "2024-09-21T01:20:59Z",
        "content": "The Federal Trade Commission sued the three dominant pharmacy-benefit managers in the United States, alleging they inflated the cost of insulin by using their position as middlemen in the U.S. drug s… [+3583 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Faris Tanyos",
        "title": "U.S. soldier who crossed into North Korea pleads guilty to desertion - CBS News",
        "description": "Travis King fled into North Korea in July 2023 while taking part in a guided tour of the Korean Demilitarized Zone.",
        "url": "https://www.cbsnews.com/news/travis-king-u-s-soldier-north-korea-pleads-guilty-desertion/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/19/ada7c4fb-a732-41ff-809e-8c6dd211b71f/thumbnail/1200x630/5037295258c942d7391e29ac701d6bb5/travis-king-korea.jpg?v=159d4576ec63c034c87559bf5085176a",
        "publishedAt": "2024-09-21T00:41:00Z",
        "content": "Travis King, the U.S. soldier who crossed into North Korea last year, has pleaded guilty to desertion and other charges, the U.S. Army announced Friday. \r\nAs part of a deal with prosecutors, the 24-y… [+2268 chars]"
    },
    {
        "source": {
            "id": "abc-news",
            "name": "ABC News"
        },
        "author": "ABC News",
        "title": "New York state reports 1st human case of EEE in nearly a decade - ABC News",
        "description": null,
        "url": "https://abcnews.go.com/Health/new-york-state-reports-human-case-eee/story?id\\\\u003d113888979",
        "urlToImage": null,
        "publishedAt": "2024-09-21T00:15:51Z",
        "content": null
    },
    {
        "source": {
            "id": "associated-press",
            "name": "Associated Press"
        },
        "author": "COLLEEN LONG, AMANDA SEITZ, JOSH BOAK",
        "title": "'She should be alive today' — Harris spotlights woman's death to blast abortion bans and Trump - The Associated Press",
        "description": "For the first time since she ascended to the top of the Democratic ticket, Vice President Kamala Harris has given a speech focused squarely on abortion rights. She did so Friday in Georgia, where she highlighted the death of a woman who developed sepsis while…",
        "url": "https://apnews.com/article/harris-election-abortion-rights-georgia-amber-thurman-5ba5dabf0dc3c98de12389c34b47475d",
        "urlToImage": "https://dims.apnews.com/dims4/default/3591880/2147483647/strip/true/crop/4896x2754+0+255/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F69%2F8f%2F0ef6fb4a764e7df166210efc7dea%2F1c1320592e97488ba54aa12a0f588384",
        "publishedAt": "2024-09-21T00:04:00Z",
        "content": "ATLANTA (AP) Kamala Harris blasted Donald Trump as a threat to womens freedoms and their very lives, warning in a speech in the battleground state of Georgia on Friday that Republicans would continue… [+5770 chars]"
    },
    {
        "source": {
            "id": null,
            "name": "Suntimes.com"
        },
        "author": "Georgia Nicols",
        "title": "Horoscope for Friday, September 20, 2024 - Chicago Sun-Times",
        "description": null,
        "url": "https://chicago.suntimes.com/horoscopes/2024/09/20/horoscopes-today-friday-september-20-2024",
        "urlToImage": "https://cst.brightspotcdn.com/dims4/default/2145dbd/2147483647/strip/true/crop/870x497+0+67/resize/1461x834!/quality/90/?url=https%3A%2F%2Fchorus-production-cst-web.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fac%2Ffd%2F790f04b15195427014757adc0272%2Fgeorgia-nicols.jpg",
        "publishedAt": "2024-09-20T23:54:00Z",
        "content": "Moon Alert\r\nAvoid shopping or important decisions from 3 to 4:30 a.m. After that, the moon moves from Aries into Taurus.\r\nAries (March 21-April 19)\r\nThis is a tricky day. You might feel unsure of you… [+4021 chars]"
    },
    {
        "source": {
            "id": "cbs-news",
            "name": "CBS News"
        },
        "author": "Cara Tabachnick",
        "title": "Message in a bottle, written 200 years ago by an archaeologist, found on a French clifftop - CBS News",
        "description": "P.J Féret, who conducted a dig at France's Cité de Limes site in January 1825, wrote the message, archaeologists say.",
        "url": "https://www.cbsnews.com/news/france-archaeologist-200-message-clifftop-cite-de-limes/",
        "urlToImage": "https://assets3.cbsnewsstatic.com/hub/i/r/2024/09/20/2784573f-7bf2-4b46-bc37-45d9f7e98597/thumbnail/1200x630/dec5e069dcadd4ca2400019416221697/screen-shot-2024-09-20-at-6-08-15-pm.png?v=159d4576ec63c034c87559bf5085176a",
        "publishedAt": "2024-09-20T23:04:08Z",
        "content": "Volunteers on an archaeological dig in the ruins of an ancient Gaulish village high above the cliffs in northern France this week uncovered a small glass vial —and within it a neatly rolled, 200-year… [+2146 chars]"
    }
]

    static defaultPorps = {
        country: 'in',
        pageSize: 5,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }

  constructor() {
    super();
    this.state = {
      articles: this.articles,
      loading: false,
      page: 1
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h1 className="text-center">NewsApp - Top Headlines</h1>
        <Spinner/>
        <div className="row">
        {this.state.articles.map((element) => {
          return  <div className="col-md-4" key={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} imageUrl={element.urlToImage} url={element.url}/>
          </div>
        })}
        </div>
      </div>
    );
  }
}

export default News;
