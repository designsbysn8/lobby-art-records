When adding a new record we need to create a new `.html` file. Below is a template for the file. Things that need to be filled in are in [brackets]. This was originally taken from the MWSS record, so feel free to reference that one as well if you're not sure what is supposed to go in the brackets.

In the `p` tags at the bottom you can pretty much put any content you want. Release dates, review stuff, etc.I left them as-is because I think it's clearer that way.  We can go over this more specifically and I'll add more info here as needed.

```
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Lobby Art</title>
    <link rel="stylesheet" href="../styles/styles.css">
  </head>
  <body>
    <div id="page-container">
      <div id="nav">
        <a href="../index.html">lobby</a>
        <a href="../art.html">art</a>
        <a href="../records.html">records</a>
      </div>
      <div id="content">
        <p class="spaced">[catalog #]</p>
        <div id="album-image-container">
          <img id="album-cover-big"
               src="../images/album-covers/[album-name]_big.jpg"
               height="400" />
          <img id="cassette-mockup"
               src="../images/cassettes/[album-name].jpg"
               height="400" />
        </div>
        <p class="spaced">[artist name] - [album name]</p>
        <iframe style="border: 0; padding: 1em; width: 50%; height: 42px;"
                src="[bandcamp embed link]/"
                seamless>
          <a href="[bandcamp album link]">
            [album name]
          </a>
        </iframe>
        //////////
        <p>
          "The pleasant tone of Sam Wenc’s delivery who probably grew up on 70s
          Appalachian Highland music before discovering Elliot Smith and MMJ six
          months after picking up a guitar. Mystery World Science Show is the
          somber country trot of three dudes through lame romance, daydreams of
          Tennessee and good food, and some saxophone"
          - <a href="http://www.tinymixtapes.com/chocolate-grinder/premiere-post-moves-mystery-world-science-show">
            Tiny Mix Tapes
          </a>
        </p>
        \\\\\\\\\\
        <p>
          "Mystery World Science Show uses the surrealist language of dreams to
          whisper both silly and heartbreaking rumors about reality. This tone
          perfectly captures the golden state between sleep and consciousness,
          but also steadily builds an uneasy feeling of existential tension
          throughout the album."
          - <a href="http://www.portlandmercury.com/music/2016/05/25/18110740/record-review-post-moves-mystery-world-science-show">
            Portland Mercury
          </a>
        </p>
        //////////
        <p>
          "Romantic Dimwits” encompasses the raging tension between caring and
          not caring, hating to feel but fearing not feeling at all. The same
          voice that sings the words “booty shakers” sings the crushing line,
          'I look upon a field of iced-over dreams / Baby in this life I am
          thawing meat.' Far from the gentle image of its creators and the city
          they come from, it is a song that packs an existential punch"
          - <a href="http://www.thrdcoast.com/read/2016/5/5/premiere-post-moves-romantic-dimwits">
            Thrd Coast
          </a>
        </p>
        \\\\\\\\\\
      </div>
    </div>
  </body>
</html>
```
