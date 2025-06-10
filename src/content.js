const SAMPLE_CONTENT = {
  en: {
    siteName: "Coding Guide",
    subtitle: "Your Path to Knowledge Starts Here 🌟",
    tagline: "Bite-Sized Learning, Big Results 🍎",
    startGrade9: "Start Grade 9",
    startGrade10: "Start Grade 10",
    startEssentials: "Essential Skills",
    about: "About",
    search: "Search lessons...",
    previous: "← Previous",
    next: "Next →",
    downloadPdf: "📄 Download PDF",
    progressText: "Your Progress",
    darkMode: "🌙",
    lightMode: "☀️",
    grades: {
      grade9: {
        title: "Grade 9 Computer Science",
        topics: [
{
  "id": "internet-lesson",
  "title": " What is the Internet?",
  "icon": "🧩",
  "lessons": [
    {
      "id": "internet-intro-question",
      "title": "🌟Internet ",
      "content": `
        <h3>Internet = Something You’ve Already Used!</h3>
        <p>❓ Have you ever used Facebook, TikTok, or Google?</p>
        <p>If yes—you’ve already used the internet.</p>
        <p>You just didn’t know its real name yet.</p>
      
    
        <h2>📘 Imagine this:</h2>
        <p>You write a letter and mail it. It reaches your friend’s house. That’s communication.</p>
        <p>Now imagine your phone or computer sends that message <strong>instantly</strong>.</p>
        <p>👉 That’s the <strong>internet</strong>—a magic system that connects phones, computers, and people worldwide.</p>
        <p>Think of it like a giant invisible spider-web 🌐 connecting:</p>
        <ul>
          <li>Your mobile phone 📱</li>
          <li>Your friend’s computer 💻</li>
          <li>Videos, games, and websites 🧠</li>
        </ul>
      `
    },
    {
      "id": "internet-what-can-you-do",
      "title": "🌍What Can You DO on the Internet?",
      "content": `
        <p><strong>✅Here are things you’ve probably already done:</strong></p>
        <ul>
          <li>Watched videos on YouTube</li>
          <li>Used Facebook, TikTok</li>
          <li>Sent messages on Messenger or WhatsApp</li>
          <li>Googled something you didn’t know</li>
          <li>Played Free Fire 😁</li>
          <li>Searched for song lyrics or match results</li>
        </ul>
        <p>🎯 All of these are possible because of the internet.</p>
        <p>The internet isn’t just “Google” or “Facebook”—it’s what connects you to them.</p>
      `
    },
    {
      "id": "internet-what-you-need",
      "title": "💡What Do You NEED to Use the Internet?",
      "content": `
        <h3>Think of it like going to a dance show:</h3>
        <ul>
          <li>📶 <strong>Internet data or Wi‑Fi</strong> — your ticket</li>
          <li>📱 <strong>Phone or computer</strong> — the device to watch</li>
          <li>🌐 <strong>App or browser</strong> — the door to enter</li>
        </ul>
        <table>
          <tr><th>Need</th><th>What it does</th></tr>
          <tr><td><strong>Phone/Laptop</strong></td><td>Like a TV or radio</td></tr>
          <tr><td><strong>Internet/Data</strong></td><td>Like electricity—powers everything</td></tr>
          <tr><td><strong>Browser</strong></td><td>Like a remote control to switch channels</td></tr>
        </table>
      `
    },
    {
      "id": "internet-glossary",
      "title": "🤖Tech Words You Hear But Don’t Understand",
      "content": `
        <table>
          <tr><th>Word</th><th>Think of It As...</th></tr>
          <tr><td><strong>Website</strong></td><td>A shop on the internet (e.g. YouTube = a video shop)</td></tr>
          <tr><td><strong>Webpage</strong></td><td>One page inside that shop</td></tr>
          <tr><td><strong>Browser</strong></td><td>The app that opens shops (like Chrome)</td></tr>
          <tr><td><strong>Google</strong></td><td>A helper who finds things for you</td></tr>
          <tr><td><strong>URL</strong></td><td>The shop’s address (like www.facebook.com)</td></tr>
          <tr><td><strong>Hyperlink</strong></td><td>A word or button you click that jumps to another page</td></tr>
        </table>
      `
    },
    {
      "id": "internet-metaphor",
      "title": "🏘 Real-Life Metaphor",
      "content": `
        <p>📬 <strong>Internet</strong> = Big digital city</p>
        <p>🏘 <strong>Website</strong> = House/shop</p>
        <p>🛵 <strong>Data</strong> = Delivery bike</p>
        <p>🧑‍🎓 <strong>You</strong> = Visitor</p>
        <p>🌐 <strong>Browser</strong> = Map/guide</p>
     
        <table>
          <tr><th>Use</th><th>Example</th></tr>
          <tr><td>📩 <strong>Sending messages</strong></td><td>Messenger, Email</td></tr>
          <tr><td>🎥 <strong>Watching videos</strong></td><td>YouTube, TikTok</td></tr>
          <tr><td>🎮 <strong>Playing games</strong></td><td>Free Fire, Ludo</td></tr>
          <tr><td>📚 <strong>Studying</strong></td><td>Online classes, Google</td></tr>
          <tr><td>📰 <strong>Reading news</strong></td><td>Online news sites</td></tr>
          <tr><td>🛍️ <strong>Shopping</strong></td><td>Daraz, online stores</td></tr>
        </table>
      `
    },
    {
      "id": "internet-common-mistakes",
      "title": "❌ Common Mistakes Students Make",
      "content": `
        <table>
          <tr><th>Mistake</th><th>Better Way to Understand</th></tr>
          <tr><td>"Google is the internet"</td><td>❌ Google is just one part of the internet</td></tr>
          <tr><td>"Browser is the internet"</td><td>❌ Browser is the door, internet is the road</td></tr>
          <tr><td>Can’t type website addresses correctly</td><td>✅ Always start with "www." and check spelling</td></tr>
          <tr><td>Don’t know difference between Facebook and Internet</td><td>✅ Facebook works because of the internet</td></tr>
        </table>
      `
    },
    {
      "id": "internet-exam-focus",
      "title": "✏️ Exam‑Focus Answers",
      "content": `
        <p>1. <strong>What is internet?</strong><br>
        👉 The internet is a system that connects phones, computers, and people around the world. It helps us send messages, watch videos, play games, and search for information.</p>
        
        <p>2. <strong>Name any 2 services of the internet?</strong><br>
        👉 Email, video calls, chat, web browsing, e‑learning.</p>
        
        <p>3. <strong>Name 2 good and 2 bad sides of the internet?</strong><br>
        ✅ Good: Learn from home, fast messaging<br>
        ❌ Bad: Addiction, fake news</p>
      `
    }
  ]
},
 
                {
            id: "web-development",
            title: " Introduction to Web Development",
            icon: "💻",
            lessons: [
              {
                id: "what-is-website",
                title: "🌐What is a Website?",
                content: `
                  <h2>K ho  Website? 🚗</h2>
                  <p>A website is like a street with houses (pages). Your browser (Chrome/Firefox) is the car that drives you there.</p>
                  
                  <h3>Key Facts:</h3>
                  <ul>
                    <li>✔ Each page is a separate file (e.g., home.html, contact.html)</li>
                    <li>✔ Websites open in <strong>browsers</strong>, not app stores</li>
                  </ul>

                  <h3>⚠️ Common Mistake:</h3>
                  <p>If you type the wrong address (e.g., contat.html), your ‘car’ won’t find the house!</p>
                `
              },
              {
                id: "html-tags",
                title: "🏷️HTML Tags: The Labels",
                content: `
                  <h3>HTML Tags: The Labels 🏷️</h3>
                  <p>Tags are like name tags: <code>&lt;h1&gt;</code> is the principal’s tag (biggest), <code>&lt;p&gt;</code> is a student’s tag (normal). Forgetting <code>&lt;/h1&gt;</code> is like wearing half a uniform!</p>
                  
                  <h3>Must-Know Tags:</h3>
                  <table>
                    <tr>
                      <th>Tag</th>
                      <th>Purpose</th>
                      <th>Example</th>
                    </tr>
                    <tr>
                      <td><code>&lt;h1&gt;</code></td>
                      <td>Main heading</td>
                      <td><code>&lt;h1&gt;My School&lt;/h1&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;p&gt;</code></td>
                      <td>Paragraph</td>
                      <td><code>&lt;p&gt;Welcome!&lt;/p&gt;</code></td>
                    </tr>
                    <tr>
                      <td><code>&lt;img&gt;</code></td>
                      <td>Image</td>
                      <td><code>&lt;img src="photo.jpg"&gt;</code></td>
                    </tr>
                  </table>

                  <h3>💡 Teacher’s Tip:</h3>
                  <p>Always close tags like shoes – left (<code>&lt;h1&gt;</code>) and right (<code>&lt;/h1&gt;</code>)!</p>
                `
              },
              {
                id: "links",
                title: "🔗Links: The Bridges",
                content: `
                  <h2>Links: The Bridges 🌉</h2>
                  <p>A link (<code>&lt;a&gt;</code>) is a bridge between pages. A broken bridge (href='wrong.html') means you fall!</p>
                  
                  <h3>Code Example:</h3>
                  <pre><code>&lt;a href="about.html"&gt;About Us&lt;/a&gt;</code></pre>

                  <h3>🔍 Error Check:</h3>
                  <ol>
                    <li>Does about.html exist?</li>
                    <li>Is the spelling <strong>exact</strong>?</li>
                  </ol>
                `
              },
              {
                id: "images",
                title: "🖼️Images",
                content: `
                  <h2>Images: The Photo Frames 🖼️</h2>
                  <p><code>&lt;img&gt;</code> is a frame. <code>src='dog.jpg'</code> is the picture inside. Wrong name? Empty frame!</p>
                  
                  <h3>Critical Checks:</h3>
                  <ul>
                    <li>✔ File exists (e.g., dog.jpg is in the same folder)</li>
                    <li>✔ No typos (e.g., dgo.jpg won’t work)</li>
                  </ul>
                `
              },
              {
                id: "folders",
                title: "📁Folders",
                content: `
                  <h2>Folders: The Filing Cabinet 🗄️</h2>
                  <p>Your website folder is a filing cabinet. If index.html and photo.jpg are in different drawers, the browser gets lost!</p>
                  
                  <h3>Correct Structure:</h3>
                  <pre><code>my_website/\n├── index.html\n├── about.html\n└── photo.jpg</code></pre>
                `
              },            
    
    {
      id: "html-analogy",
      title: "3. Real‑life Analogy",
      content: `
        <p>🧠 Imagine decorating a page in your notebook:</p>
        <ul>
          <li>Write the title big</li>
          <li>Underline it</li>
          <li>Paste an image</li>
          <li>Write bullet points</li>
        </ul>
        <p>That's exactly what HTML does—but on your computer screen!</p>
      `
    },
    
    
    {
      id: "html-tag-meanings",
      title: "🏷️Tag Meanings",
      content: `
        <table>
          <tr><th>Tag</th><th>What It Means</th></tr>
          <tr><td>&lt;html&gt;</td><td>Start of the webpage</td></tr>
          <tr><td>&lt;head&gt;</td><td>Hidden info (not visible on page)</td></tr>
          <tr><td>&lt;title&gt;</td><td>Title seen in browser tab</td></tr>
          <tr><td>&lt;body&gt;</td><td>The visible page content</td></tr>
          <tr><td>&lt;h1&gt;</td><td>Heading (big text)</td></tr>
          <tr><td>&lt;p&gt;</td><td>Paragraph (normal text)</td></tr>
          <tr><td>&lt;/tag&gt;</td><td>Closes the tag (like saying “Stop”)</td></tr>
        </table>
      `
    },
    {
      id: "html-more-tags",
      title: "📝 Must‑Know HTML Tags",
      content: `
        <h3>1. Text Formatting</h3>
        <table>
          <tr><th>Tag</th><th>Effect</th><th>Example</th></tr>
          <tr><td>&lt;b&gt;</td><td>Bold</td><td><code>&lt;b&gt;Hi&lt;/b&gt;</code> → <b>Hi</b></td></tr>
          <tr><td>&lt;i&gt;</td><td>Italic</td><td><code>&lt;i&gt;Hi&lt;/i&gt;</code> → <i>Hi</i></td></tr>
          <tr><td>&lt;u&gt;</td><td>Underline</td><td><code>&lt;u&gt;Hi&lt;/u&gt;</code> → <u>Hi</u></td></tr>
          <tr><td>&lt;br&gt;</td><td>Line break</td><td><code>Hello&lt;br&gt;World</code> → Hello<br>World</td></tr>
        </table>

        <h3>2. Lists</h3>
        <strong>Bullet List:</strong>
        <pre><code>
<ul>
  <li>Maths</li>
  <li>Science</li>
</ul>
        </code></pre>
        <strong>Numbered List:</strong>
        <pre><code>
<ol>
  <li>Wake up</li>
  <li>Brush teeth</li>
</ol>
        </code></pre>

        <h3>3. Tables</h3>
        <pre><code>
<table border="1">
  <tr>
    <th>Period</th>
    <th>Subject</th>
  </tr>
  <tr>
    <td>1</td>
    <td>Maths</td>
  </tr>
</table>
        </code></pre>

        <h3>4. Images & Links</h3>
        <ul>
          <li><code>&lt;img src="school.jpg" width="100"&gt;</code> – adds an image</li>
          <li><code>&lt;a href="https://google.com"&gt;Visit Google&lt;/a&gt;</code> – makes a link</li>
        </ul>
      `
    },
    {
      id: "html-common-mistakes",
      title: "❌ Mistakes Students Make",
      content: `
        <table>
          <tr><th>Mistake</th><th>How to Avoid It</th></tr>
          <tr><td>Not saving file with .html</td><td>✅ Save as mypage.html</td></tr>
          <tr><td>Tags in CAPITAL letters</td><td>✅ Use small letters like &lt;p&gt;</td></tr>
          <tr><td>Forgetting to close tags</td><td>✅ Always write &lt;/p&gt; after &lt;p&gt;</td></tr>
          <tr><td>Writing code but opening in Notepad</td><td>✅ Right‑click → Open in Chrome</td></tr>
        </table>
      `
    },
    {
      id: "html-exam-practice",
      title: "📋 Exam‑Style Practice",
      content: `
        <p>1. <strong>What is HTML?</strong><br>👉 HTML is a tool to make webpages using tags like &lt;h1&gt;, &lt;p&gt;, &lt;img&gt;, etc.</p>
        <p>2. <strong>Write two tags and their uses.</strong><br>👉 &lt;b&gt; makes text bold, &lt;p&gt; creates a paragraph.</p>
        <p>3. <strong>Write an HTML code to show your name as a heading.</strong></p>
        <pre><code>
<html>
  <body>
    <h1>My name is Anil</h1>
  </body>
</html>
        </code></pre>
      `
    }
  ]
},
{
  id: "css-basics",
  title: " CSS परिचय",
  icon: "🎨",
  lessons: [
  
  {
    id: "css-lesson-1",
    title: "🎨 Lesson 1: What is CSS?",
    content: `
      <p><strong>CSS</strong> stands for <strong>Cascading Style Sheets</strong>.</p>
      <p>It helps you <strong>decorate your webpage</strong> — like decorating a classroom.</p>
      <p>HTML builds the structure — like making a simple house.<br>
      CSS adds color, curtains, design, and places everything nicely.</p>
      <p><em>🧠 Example:</em> HTML = plain t-shirt. CSS = designs on it — color, pattern, logo, etc.</p>
      <p>✏️ Remember:</p>
      <ul>
        <li>CSS = Style</li>
        <li>HTML = Structure</li>
      </ul>`
  },
  {
    id: "css-lesson-2",
    title: "🌈 Why use CSS?",
    content: `
      <p>Without CSS, all webpages feel dull like plain paper.<br>
      CSS adds:</p>
      <ul>
        <li><strong>Color and size</strong> to text</li>
        <li><strong>Backgrounds</strong></li>
        <li>Moves items left, right, or center</li>
        <li><strong>Shapes and borders</strong></li>
        <li><strong>Designs for mobile or computer</strong></li>
      </ul>
      <p><em>🧠 Example:</em> How boring would your schoolbook feel if it had no colors?</p>`
  },
  {
    id: "css-lesson-3",
    title: "🛠️ Where to write CSS?",
    content: `
      <p>Three ways:</p>
      <ol>
        <li><strong>Inline CSS</strong> – Inside HTML tag<br>
          <code>&lt;p style="color:red;"&gt;Hello&lt;/p&gt;</code></li>
        <li><strong>Internal CSS</strong> – Inside HTML's <code>&lt;head&gt;</code><br>
          <code>&lt;style&gt; p { color: red; } &lt;/style&gt;</code></li>
        <li><strong>External CSS</strong> – In a separate <code>.css</code> file<br>
          <code>p { color: red; }</code><br>
          Link it in HTML:<br>
          <code>&lt;link rel="stylesheet" href="style.css"&gt;</code></li>
      </ol>
      <p><em>🧠 Example:</em> Inline = sticky note on hand<br>
      Internal = note inside book<br>
      External = separate notebook</p>`
  },
  {
    id: "css-lesson-4",
    title: "📝 CSS Syntax",
    content: `
      <p>CSS rules look like this:</p>
      <pre><code>selector {
  property: value;
}</code></pre>
      <p><strong>Example:</strong></p>
      <pre><code>h1 {
  color: blue;
  font-size: 24px;
}</code></pre>
      <p>Here:</p>
      <ul>
        <li><code>h1</code> – what you want to style (Selector)</li>
        <li><code>color</code> – feature to change (Property)</li>
        <li><code>blue</code> – value</li>
      </ul>
      <p>✏️ Important:</p>
      <ul>
        <li>End each line with <code>;</code></li>
        <li>Use <code>{ }</code> for rule blocks</li>
      </ul>
      <p><em>🧠 Example:</em> "h1 is the student, rule: wear blue shoes."</p>`
  },
  {
    id: "css-lesson-5",
    title: "📚 Common CSS Properties",
    content: `
      <table>
        <tr>
          <th>Property</th><th>What it changes?</th><th>Example</th>
        </tr>
        <tr><td>color</td><td>Text color</td><td><code>color: red;</code></td></tr>
        <tr><td>background</td><td>Background color/image</td><td><code>background: yellow;</code></td></tr>
        <tr><td>font-size</td><td>Text size</td><td><code>font-size: 20px;</code></td></tr>
        <tr><td>text-align</td><td>Text position</td><td><code>text-align: center;</code></td></tr>
        <tr><td>border</td><td>Creates a border</td><td><code>border: 1px solid black;</code></td></tr>
        <tr><td>padding</td><td>Inside spacing</td><td><code>padding: 10px;</code></td></tr>
        <tr><td>margin</td><td>Outside spacing</td><td><code>margin: 10px;</code></td></tr>
      </table>
      <p><em>🧠 Example:</em> Padding = space inside a bag<br>
      Margin = space between two bags<br>
      Border = the zipper of the bag</p>`
  },
  {
    id: "css-lesson-6",
    title: "🔍 CSS Selectors",
    content: `
      <p>Selector means: who do you want to style?</p>
      <p>Common selectors:</p>
      <ul>
        <li><code>h1</code>, <code>p</code>, <code>div</code> – tags</li>
        <li><code>.class</code> – starts with dot</li>
        <li><code>#id</code> – starts with hash</li>
      </ul>
      <pre><code>h1 { color: green; }
.red-text { color: red; }
#main-box { color: blue; }</code></pre>
      <p><em>🧠 Example:</em> Teacher = selector, Rule = style, Students = HTML elements</p>`
  },
  {
    id: "css-lesson-7",
    title: "🔗 How to connect HTML and CSS?",
    content: `
      <p>To use External CSS:</p>
      <ol>
        <li>Create a file named <code>style.css</code></li>
        <li>Write your CSS rules there</li>
        <li>Add this in the HTML <code>&lt;head&gt;</code>:</li>
      </ol>
      <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
      <p>✅ Done! HTML and CSS now work together.</p>`
  },
  {
    id: "css-lesson-8",
    title: "🎨 CSS Colors",
    content: `
      <p>Ways to give color:</p>
      <ul>
        <li>By name – <code>color: red;</code></li>
        <li>By HEX – <code>color: #ff0000;</code></li>
        <li>By RGB – <code>color: rgb(255, 0, 0);</code></li>
      </ul>
      <p>✏️ For easier exams:<br>
      Just use simple names like “blue”, “green”, “orange”.</p>`
  },
  {
    id: "css-lesson-box-model",
    title: "📦 CSS Box Model (In Short)",
    content: `
      <p><strong>CSS Box Model</strong> means: every item on a webpage is inside a <strong>box</strong> — with space inside and outside.</p>
      <p><em>🧠 Like your lunchbox:</em></p>
      <table>
        <tr><th>Part</th><th>Real Life</th><th>On Webpage</th></tr>
        <tr><td><strong>Content</strong></td><td>Food</td><td>Text, image, etc.</td></tr>
        <tr><td><strong>Padding</strong></td><td>Inner wrapper</td><td>Space inside the box</td></tr>
        <tr><td><strong>Border</strong></td><td>Lunchbox wall</td><td>The line around the box</td></tr>
        <tr><td><strong>Margin</strong></td><td>Space around the box</td><td>Outer space of the box</td></tr>
      </table>
      <p>✅ <strong>Quick Code:</strong></p>
      <pre><code>.box {
  margin: 20px;        /* Outer space */
  border: 2px solid black;  /* Box wall */
  padding: 10px;       /* Inner space */
}</code></pre>`
  }
]
},

{
  id: "programming-basics",
  title: " Introduction to Programming",
  icon: "💻",
  lessons: [
    {
      id: "programming-lesson-1",
      title: "🧩 Lesson 1: What is Computer Programming?",
      content: `
        <p><strong>📘 Simple Explanation </strong><br>
        Computer programming is simply <strong>giving instructions(Aadesh)to the computer</strong> so it can do what <em>you</em> want.</p>
        <p>You are the teacher, and the computer is your student. You write small steps—like a recipe—and the computer <strong>follows them one by one</strong>.</p>
        <p>✅ If your steps are correct, the computer works perfectly.<br>
        ❌ If the steps are wrong, the computer gets confused.</p>
        <p>programming is using special languages to instruct a computer to perform tasks .</p>
        
        <h3>🧠 Real-Life Analogy: Making Tea 🍵</h3>
        <ol>
          <li>Boil water</li>
          <li>Add tea leaves</li>
          <li>Add sugar</li>
          <li>Add milk</li>
          <li>Stir and serve</li>
        </ol>
        <p>If your brother follows these steps, tea is ready. The same way, when you give steps to the computer—it <strong>follows them</strong> and does your task.</p>

      `
    },
  {
    id: "programming-lES",
    title: "🧩 What is program? ",
    content: `
      
      <p><strong>A computer program</strong> is like a  plan('योजना') to complete a certain work</p>
      <p>And,</p>
      <p><strong>Each plan consists of many small steps, which we call 'instructions'.</strong></p>

      <h3>🧠  example (making tea 🍵)</h3>
      <p>Imagine you need to make tea:</p>
      <ul>
        <li><strong>The entire tea-making process</strong> (from start to finish) is one <strong>computer program</strong>.</li>
      </ul>
      <p>Now, what steps do you perform when making tea?</p>
      <ol>
        <li>'Boil water' – this is an <strong>'instruction'</strong>.</li>
        <li>'Add tea leaves' – another <strong>'instruction'</strong>.</li>
        <li>'Add sugar' – also an <strong>'instruction'</strong>.</li>
        <li>'Add milk' – one more <strong>'instruction'</strong>.</li>
      </ol>

      <p><strong>In this way, many small 'instructions' together form a complete computer program.  
      The computer follows the list of instructions you gave it and completes the task.</strong></p>
    `
  },

    {
      id: "programming-lesson-2",
      title: "🧩  What Language Does the Computer Understand?",
      content: `
        <p>You can’t talk to the computer in Nepali or English.</p>
        <p>The computer only understands special languages called <strong>programming languages</strong>—like QBASIC, C, Python, etc.</p>
        <p>You must learn one of them to talk with the computer—just like learning English or Nepali to talk with friends.</p>
        <p>This matches the idea that programming is writing code so computers can execute tasks .</p>

        <h3>🧠 Analogy: Talking to a Foreigner</h3>
        <p>If a tourist only speaks English and you only speak Nepali—you need a common language to talk. Programming is that common language to <strong>talk to the computer</strong>.</p>`
    },
    {
      id: "programming-lesson-3",
      title: "🧩What Do We Do in Programming?",
      content: `
        <p>In any program, you do just <strong>3 things</strong>:</p>
        <ol>
          <li><strong>Give data (input)</strong> — like numbers or names</li>
          <li><strong>Do something with that data (process)</strong></li>
          <li><strong>Show the result (output)</strong></li>
        </ol>
        <h3>🧠 Analogy: Calculator</h3>
        <p>You enter <code>5 + 3</code></p>
        <ul>
          <li><strong>5</strong> and <strong>3</strong> = input</li>
          <li><strong>+</strong> = processing</li>
          <li><strong>8</strong> = output</li>
        </ul>
        <p>That's all programming is!</p>`
    },

  ]
}


                
              
         
        
          
        ]
      },
      grade10: {
        title: "Grade 10 Computer Science",
        topics: [
         {
           
  id: "qbasic-basics",
  title: "🎮 QBASIC Made Simple",
  icon: "🧱",
  lessons: [
    {
      id: "qbasic-intro",
      title: "QBASIC = Your Computer’s Toy Box!",
      content: `
        <h2>QBASIC = Your Computer’s Toy Box! 🎁</h2>
        <p>QBASIC is a <strong>language</strong> like English or Nepali, but it talks to a <strong>computer</strong> instead of people.</p>
        
                 

        <h3>🔧 Real-Life Code Examples</h3>
        <ul>
          <li><code>PRINT "HELLO"</code> → Computer writes <strong>HELLO</strong></li>
          <li><code>PRINT 5+3</code> → Computer calculates and shows <strong>8</strong></li>
        </ul>

        <h3>🚀 Try This:</h3>
        <ol>
          <li>Open QBASIC (Start → Type <kbd>QBASIC</kbd> → Hit <kbd>Enter</kbd>)</li>
          <li>Type this code: <code>PRINT "MY NAME IS _____"</code></li>
          <li>Press <kbd>F5</kbd> → ✨ Your name appears on screen!</li>
        </ol>
      `
    },
    {
      id: "qbasic-break-code",
      title: "Break the Code (Like a Tiffin Box!)",
      content: `
        <h2>Break the Code 🍱</h2>
        <p>Think of each QBASIC command like a lunchbox with different sections.</p>

        <h3>📦 Code Parts:</h3>
        <table>
          <tr><th>Part</th><th>Description</th><th>Examples</th></tr>
          <tr><td>COMMAND</td><td>Action word</td><td>PRINT, CLS, INPUT</td></tr>
          <tr><td>DATA</td><td>What to use/show</td><td>"HELLO", 5+3, X$</td></tr>
        </table>

        <h3>🔍 Example Breakdown:</h3>
        <ul>
          <li><code>PRINT "HI"</code> → <strong>PRINT</strong> is the command, <strong>"HI"</strong> is the data → Shows HI</li>
          <li><code>CLS</code> → Clears the screen</li>
        </ul>

        <h3>⚠️ Common Mistake:</h3>
        <p><code>PRNT "HELLO"</code> ❌ (Wrong spelling)<br><code>PRINT "HELLO"</code> ✅ (Correct spelling)</p>
      `
    },
    {
      id: "qbasic-syntax",
      title: "Computer’s Traffic Rules (Syntax)",
      content: `
        <h2>Computer's Traffic Rules 🚦 (Syntax)</h2>
        <p>Syntax is like grammar. Computers need things to be just right!</p>

        <h3>📏 QBASIC Syntax Rules:</h3>
        <ul>
          <li>✅ Spelling counts: Use <code>PRINT</code>, not <code>PRNT</code></li>
          <li>✅ Use quotes: <code>PRINT "HELLO"</code></li>
          <li>✅ No spaces in math: <code>PRINT 5+3</code></li>
        </ul>

        <h3>🧠 Practice Question:</h3>
        <p>Which one is correct?</p>
        <ul>
          <li><strong>A:</strong> <code>PRINT "BYE"</code> ✅</li>
          <li><strong>B:</strong> <code>PRINT BYE</code> ❌</li>
          <li><strong>C:</strong> <code>PRNT "BYE"</code> ❌</li>
        </ul>
      `
    },
    {
      id: "qbasic-mini-project",
      title: "Mini Project – Talk to Computer!",
      content: `
        <h2>Mini Project – Talk to Computer! 💬</h2>
        <p>This project lets the computer ask your name and reply.</p>

        <h3>📄 Code:</h3>
        <pre><code>
CLS
INPUT "WHAT’S YOUR NAME? "; N$
PRINT "HELLO "; N$; "! YOU ARE AWESOME!"
        </code></pre>

        <h3>🔄 Modify It:</h3>
        <ul>
          <li>Change <code>AWESOME</code> to <code>COOL</code>, <code>SMART</code>, or <code>THE BEST</code></li>
        </ul>
      `
    },
    {
      id: "qbasic-tips",
      title: "Notes for Slow Learners",
      content: `
        <h2>Notes for Slow Learners 🐢</h2>
        <p>Take your time and try step by step!</p>

        <ul>
          <li>⏸️ Re-read just the last 2 lines if stuck</li>
          <li>📝 Copy and run code <strong>exactly</strong></li>
          <li>🤝 Ask a friend or teacher – Don’t give up!</li>
        </ul>
      `
    }
  ]
},

          {
            id: "DBMS",
            title: "DBMS",
            icon: "🐍",
            lessons: [
              {
                id:"Basics",
                title:"Basics",
                content:`
                                                <h3>🔹 1. Let’s Understand the Basics — Like a Story</h3>
    <p><strong>Imagine</strong> your school has 500 students. If all names, rolls, and marks are written in <em>random papers</em>, it will be a mess! 😵</p>
    <p>But if you write them neatly in <strong>one register</strong> with:</p>
    <ul>
      <li>Roll No</li>
      <li>Name</li>
      <li>Class</li>
      <li>Marks</li>
    </ul>
    <p>🧠 This register is a <strong>Database</strong>.<br>
       The <strong>teacher managing the register</strong> is a <strong>DBMS</strong>.</p>

    <h3>🔹 2. Okay, So What is a Database?</h3>
    <p>A <strong>database</strong> is a digital copy of your school register — stored in a table (rows and columns).</p>
    <table>
      <thead><tr><th>Roll</th><th>Name</th><th>Class</th><th>Marks</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Sita</td><td>10</td><td>85</td></tr>
        <tr><td>2</td><td>Ram</td><td>10</td><td>75</td></tr>
      </tbody>
    </table>

    <h3>🔹 3. What is DBMS?</h3>
    <p>A <strong>DBMS (Database Management System)</strong> is software that helps you:</p>
    <ul>
      <li>Create a database</li>
      <li>Add, remove, update data</li>
      <li>Search and manage results</li>
    </ul>
    <p>🧠 <strong>DBMS is like a smart librarian</strong> who keeps data in order.</p>

    <h3>🔹 4. Popular DBMS Software</h3>
    <ul>
      <li>Microsoft Access ✔️</li>
      <li>MySQL</li>
      <li>Oracle</li>
      <li>PostgreSQL</li>
      <li>DB2</li>
    </ul>

                `
              },
              {
                id:"create",
                title:"Create a table",
                content:`
                  <h3>🔹 5. Create a Simple Database in MS Access</h3>
    <ol>
      <li>
      <strong>Open Access</strong>: Start → Search "Access"</li>
      <li><strong>Create new:</strong> Click "Blank Database" → Name it → Click "Create"</li>
      <li><strong>Design Table:</strong>
        <ul>
          <li>View → Design View → Name table: StudentTable</li>
          <li>Add fields:</li>
          <table>
            <tr><th>Field Name</th><th>Data Type</th></tr>
            <tr><td>RollNo</td><td>AutoNumber (Primary Key)</td></tr>
            <tr><td>Name</td><td>Short Text</td></tr>
            <tr><td>Class</td><td>Number</td></tr>
            <tr><td>Marks</td><td>Number</td></tr>
          </table>
        </ul>
      </li>
      <li><strong>Set Primary Key:</strong> Select RollNo → Click 🔑 icon</li>
      <li><strong>Save & Datasheet View:</strong> Save → Switch to Datasheet → Enter data</li>
      <li><strong>Create Form:</strong> Create tab → Form → Use for entry</li>
      <li><strong>Create Query:</strong> Query Design → Select fields → Set criteria >80 → Run</li>
      <li><strong>Make Report:</strong> Create → Report Wizard → Select fields → Finish</li>
    </ol>  



                `
              }
             
            ]
          },
          {
            id: "Modular",
            title: " Modular Programming",
            icon: "🚀",
            lessons: [
              { 
                id:"Introduction",
                title:"🌟Introduction",
                content:`
<h2>🧩 <strong>Lesson 9: Modular Programming – Super Easy Version</strong></h2>

  <div class="lang-en">
  

    <h3>🔹 1. Let’s Start with a Story…</h3>
    <p>👩 Imagine you're doing a big school project — say, making a science model.</p>
    <ul>
      <li>You paint the board</li>
      <li>Your friend cuts the paper</li>
      <li>Another friend writes the labels</li>
    </ul>
    <p>🌟 In the end — <strong>everyone gives their part</strong>, and the whole project is done faster!</p>
    <p>👉 This is <strong>modular programming</strong>:<br><em>Break big work into small parts (modules), and join them to get full output.</em></p>

    <h3>🔹 2. Why Break the Program?</h3>
    <ul>
      <li>Big code is <strong>confusing</strong> 😩</li>
      <li>Each part is <strong>easy to test and fix</strong></li>
      <li>You can <strong>reuse the same part</strong> later</li>
      <li>Teamwork is possible!</li>
    </ul>
    <p>🍰 Cake = Full Program<br>
       🍰‍🍾 Cake Slices = Modules</p>
                `

              },
              {
                id:"modules",
                title:"🎓Modules in QBASIC", 
                content:`
                 <h3>🔹 3. What Are Modules in QBASIC?</h3>
    <table>
      <tr><th>Module Type</th><th>What It Does</th></tr>
      <tr><td>Sub Procedure</td><td>Does something but <strong>gives no answer back</strong></td></tr>
      <tr><td>Function Procedure</td><td>Does something and <strong>returns an answer</strong></td></tr>
    </table>

    <h3>🔧 Sub Procedure – Let’s Learn It Like a Game</h3>
    <div class="code-example">
      
       <pre><code>DECLARE SUB Series()
            CALL Series
            END

            SUB Series
              X = 1
              Y = 1
              FOR Z = 1 TO 4
                PRINT X;
                Y = Y + 1
                X = X * 10 + Y
              NEXT Z
            END SUB</code></pre>
            </div>

    <h4>🤔 How to Think About It:</h4>
    <ul>
      <li><code>DECLARE SUB</code> → Declares the sub</li>
      <li><code>CALL Series</code> → Runs the sub</li>
      <li><code>SUB</code> block → Work happens here</li>
    </ul>

    <h3>🔹 Function Procedure – For Getting Back Answers</h3>
    <pre><code>DECLARE FUNCTION area(l, b)
CLS
INPUT "Enter length: ", l
INPUT "Enter breadth: ", b
PRINT "Area = "; area(l, b)
END

FUNCTION area(l, b)
  area = l * b
END FUNCTION</code></pre>

    <h4>🤔 How This Works:</h4>
    <ul>
      <li>Sends l and b to function</li>
      <li>Does calculation</li>
      <li>Returns result</li>
    </ul>

    <h3>🔹 6. Important Words You MUST Know</h3>
    <table>
      <tr><th>Term</th><th>Means…</th></tr>
      <tr><td>Main Module</td><td>Main program</td></tr>
      <tr><td>Sub Module</td><td>Small task part</td></tr>
      <tr><td>Actual Parameter</td><td>Real values you send</td></tr>
      <tr><td>Formal Parameter</td><td>Placeholders in function/sub</td></tr>
      <tr><td>Local Variable</td><td>Works only inside</td></tr>
      <tr><td>Global Variable</td><td>Use in all parts (use SHARED)</td></tr>
    </table>

    <h3>🎨 Let’s Draw a Simple Diagram</h3>
    <pre><code>[ Main Program ]
       |
       |--- Calls → Sub A
       |--- Calls → Function B</code></pre>

    <h3>❌ Common Mistakes Students Make</h3>
    <table>
      <tr><th>Mistake</th><th>Fix</th></tr>
      <tr><td>Not using CALL</td><td>Use CALL for sub</td></tr>
      <tr><td>No DECLARE</td><td>Use DECLARE at top</td></tr>
      <tr><td>No return in function</td><td>Write: <code>functionName = value</code></td></tr>
      <tr><td>Local variable used outside</td><td>Use COMMON SHARED</td></tr>
    </table>
                `
              }
            ]
          },
          {
            id:"File-Handling",
            title:"File Handling",
            icon:"📁",
            lessons:[
              {
                id:"file-handling",
                title:"🏀File Handling",
                content:`
        
  <h3> What is File Handling? (Simple Example)</h3>
  <p>Imagine you write a program to store student names and marks. But when the program ends, <strong>all data is lost!</strong> 😞<br>
  👉 <strong>File Handling</strong> is a way to <strong>save data permanently</strong> in a file (like a notebook).</p>

  <div class="example">
    <strong>✅ Real-Life Example:</strong>
    <ul>
      <li>Writing student names on paper → <strong>Saving in a file</strong></li>
      <li>Losing notebook → <strong>Computer never forgets!</strong></li>
    </ul>
  </div>
<hr>

  <h3> File Modes (3 Types – Easy Trick to Remember)</h3>
  <table>
    <thead>
      <tr><th>Mode</th><th>Purpose</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td><code>OUTPUT</code></td><td>Create & Write New File</td><td>Writing on a blank page</td></tr>
      <tr><td><code>INPUT</code></td><td>Read Existing File</td><td>Reading an old notebook</td></tr>
      <tr><td><code>APPEND</code></td><td>Add Data to Old File</td><td>Adding new notes at the end</td></tr>
    </tbody>
  </table>
  <p><strong>⚠️ Easy Trick:</strong></p>
  <ul>
    <li><strong>OUTPUT = O → "Open New"</strong></li>
    <li><strong>INPUT = I → "Inspect Old"</strong></li>
    <li><strong>APPEND = A → "Add More"</strong></li>
  </ul>
  `
              },
              {
                id:"commands",
                title:"🚠 Essential Commands",
                content:`
                <h2>🚠 3. 4 Essential Commands (OPEN, WRITE, INPUT, CLOSE)</h2>

  <h3>📌 Writing to a File (OUTPUT Mode)</h3>
  <pre><code>OPEN "student.txt" FOR OUTPUT AS #1
WRITE #1, "Ram", 45, 67
CLOSE #1</code></pre>

  <h3>📌 Reading from a File (INPUT Mode)</h3>
  <pre><code>OPEN "student.txt" FOR INPUT AS #1
INPUT #1, name$, m1, m2
CLOSE #1
PRINT "Name: "; name$</code></pre>

  <h3>📌 Adding Data (APPEND Mode)</h3>
  <pre><code>OPEN "student.txt" FOR APPEND AS #1
WRITE #1, "Hari", 78, 89
CLOSE #1</code></pre>

  <hr>

                `
              },
              {
                id:"Filemgmt",
                title:"📒  File Management Commands (Important!)",
                content:`
                <h2>File Management Commands (Important!)</h2>

  <h3>📌 6 Useful Commands</h3>
  <table>
    <thead>
      <tr><th>Command</th><th>Purpose</th><th>Example</th></tr>
    </thead>
    <tbody>
      <tr><td><code>FILES</code></td><td>List all files in folder</td><td><code>FILES</code></td></tr>
      <tr><td><code>NAME</code></td><td>Rename a file</td><td><code>NAME "old.txt" AS "new.txt"</code></td></tr>
      <tr><td><code>KILL</code></td><td>Delete a file</td><td><code>KILL "temp.txt"</code></td></tr>
      <tr><td><code>MKDIR</code></td><td>Create a new folder</td><td><code>MKDIR "DATA"</code></td></tr>
      <tr><td><code>CHDIR</code></td><td>Change current folder</td><td><code>CHDIR "DATA"</code></td></tr>
      <tr><td><code>RMDIR</code></td><td>Delete a folder</td><td><code>RMDIR "DATA"</code></td></tr>
    </tbody>
  </table>
  <p><strong>⚠️ Warning:</strong> <br>
  - <code>KILL</code> and <code>RMDIR</code> delete permanently! <br>
  - <code>NAME</code> only works if the file exists.</p>

  <hr>

  <h2>❌ 5. Common Mistakes & Fixes</h2>

  <h3>❌ Mistake 1: Forgetting <code>OPEN</code> before <code>WRITE</code></h3>

  <pre><code>WRITE #1, "Ram"  ' ❌ ERROR!</code></pre>
  <p><strong>✅ Correct Way:</strong></p>
  
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "Ram"
CLOSE #1</code></pre>

  <h3>❌ Mistake 2: Forgetting <code>CLOSE</code></h3>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "Hello"</code></pre>
  <p><strong>✅ Correct Way:</strong></p>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "Hello"
CLOSE #1</code></pre>

  <h3>❌ Mistake 3: Using <code>WRITE</code> in <code>INPUT</code> mode</h3>
  <pre><code>OPEN "file.txt" FOR INPUT AS #1
WRITE #1, "Hi"  ' ❌ ERROR!</code></pre>
  <p><strong>✅ Correct Way:</strong></p>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "Hi"
CLOSE #1</code></pre>

  <hr>
                
                `
              },
              {
                id:"exam",
                title:"📝 Exam Questions",
                content:`
                <h2>📝 6. Exam Questions (Practice These!)</h2>

  <h3>Question 1: Write a program to store a student’s name, address, and age in a file.</h3>
  <pre><code>OPEN "student.txt" FOR OUTPUT AS #1
INPUT "Name: ", name$
INPUT "Address: ", address$
INPUT "Age: ", age
WRITE #1, name$, address$, age
CLOSE #1</code></pre>

  <h3>Question 2: Read data from a file and display it.</h3>
  <pre><code>OPEN "student.txt" FOR INPUT AS #1
INPUT #1, name$, address$, age
PRINT "Name: "; name$
PRINT "Address: "; address$
PRINT "Age: "; age
CLOSE #1</code></pre>

  <hr>

  <h2>💡 7. Quick Memory Tricks</h2>
  <ul>
    <li><strong>OPEN → WRITE/INPUT → CLOSE</strong> (Never forget the order!)</li>
    <li><code>OUTPUT</code> = New File, <code>INPUT</code> = Read, <code>APPEND</code> = Add</li>
    <li>Always use <code>#1</code> for file handling commands</li>
    <li><code>KILL</code> deletes, <code>NAME</code> renames</li>
  </ul>

                `
          }
          ]
          },
          {
            id:"C",
            title:"C Programming",
            icon:"💻",
            lessons:[
              {
                id:"structure",
                title:"What is Structured Programming?",
                content:`
 <h3>🔹 1. First, what is “Structured Programming”?</h3>
    <p>📘 Structured Programming means:</p>
    <blockquote>
      Writing a program in a <strong>clean, step-by-step way</strong> — like solving a problem one part at a time.
    </blockquote>
    <p>Just like when you:</p>
    <ul>
      <li><strong>First</strong> wake up ☀️</li>
      <li><strong>Then</strong> brush your teeth 🪥</li>
      <li><strong>Then</strong> go to school 🏫</li>
    </ul>
    <p>👉 Step-by-step = Structured. No skipping or jumping randomly.</p>
    <p><strong>C language uses this style. That's why it’s called a structured language.</strong></p>


                `

              } ,
              {
                id:"need",
                title:"Why Structured Programming?",
                content:`

    <h3>🔹 2. Why Do We Use Structured Programming?</h3>
    <p>Because it helps you:</p>
    <ul>
      <li>✅ Understand code easily</li>
      <li>✅ Fix errors faster</li>
      <li>✅ Write big programs in parts (modules)</li>
      <li>✅ Work in teams — one person writes one function</li>
      <li>✅ Reuse code</li>
    </ul>

    <h3>🔹 3. Key Rule = <strong>Single Entry, Single Exit</strong></h3>
    <p>This means:</p>
    <ul>
      <li>👉 In every block (like <code>if</code>, <code>while</code>, or <code>function</code>),</li>
      <li>Code enters <strong>from one point</strong>,</li>
      <li>Code exits <strong>from one point</strong> = No shortcuts, no jumps like “goto”</li>
    </ul>
                `

              },
              {
                id:"main",
                title:"Main Structured Used",
                content:`
     <h3>🧠 Real-Life Analogy</h3>
    <p>📘 Think of writing a <strong>recipe</strong>:</p>
    <ol>
      <li>Add flour</li>
      <li>Mix water</li>
      <li>Heat the pan</li>
      <li>Cook</li>
    </ol>
    <p>Each step comes one after another — that’s what <strong>structured programming</strong> is!</p>
    <h3>🔹 4. What are the Main Structures Used?</h3>
    <p>C programs mostly use 3 structures:</p>

    <h4>(i) Sequence</h4>
    <p>Just do steps one after another:</p>
    <pre><code>a = 5;
b = 6;
sum = a + b;</code></pre>
    <p>📘 *Like brushing teeth → then eating breakfast → then going to school*</p>

    <h4>(ii) Selection (Decision-making)</h4>
    <p>Using <code>if</code>, <code>else</code>, or <code>switch</code>:</p>
    <pre><code>if (marks >= 40)
   printf("Pass");
else
   printf("Fail");</code></pre>
    <p>📘 *Like: “If it’s raining, take umbrella. Else, go without it.”*</p>

    <h4>(iii) Looping (Repeating)</h4>
    <p>Do something again and again:</p>
    <pre><code>for (i = 1; i <= 10; i++)
   printf("%d", i);</code></pre>
    <p>📘 *Like clapping 10 times — 1 to 10 — same action, repeated*</p>

    <h3>🔹 5. What Does a C Program Look Like? (Structure)</h3>
    <pre><code>#include &lt;stdio.h&gt;      // Preprocessor
#include &lt;conio.h&gt;      // Optional

int main()              // Main function starts
{
   // Declarations
   // Statements (inputs, calculations, outputs)
   return 0;
}</code></pre>
    <p>📘 You can tell students to draw this block diagram:</p>
    <pre><code>[ Preprocessor ]
[ main() Function ]
     |
     |-- Declarations
     |-- Statements
     |-- Functions</code></pre>

    <h3>🔹 6. Example Program: Add 2 Numbers</h3>
    <pre><code>#include &lt;stdio.h&gt;
void main() {
   int a, b, sum;
   printf("Enter two numbers: ");
   scanf("%d%d", &a, &b);
   sum = a + b;
   printf("Sum = %d", sum);
}</code></pre>
    <p>👨‍🏫 <strong>Explain slowly</strong>:</p>
    <ul>
      <li><code>#include</code> = tells the computer which library to use</li>
      <li><code>int a, b, sum;</code> = 3 boxes to store numbers</li>
      <li><code>scanf()</code> = to read values</li>
      <li><code>sum = a + b;</code> = adding</li>
      <li><code>printf()</code> = to show answer</li>
    </ul>

                `
              },
              {
                id:"datatype",
                title:"Data Types",
                content:`
<h3>🔹 7. Data Types You MUST Know</h3>
    <table>
      <tr><th>Data Type</th><th>What it stores</th><th>Example</th></tr>
      <tr><td><code>int</code></td><td>Whole number</td><td>5, 100, -32</td></tr>
      <tr><td><code>float</code></td><td>Decimal numbers</td><td>3.14, 2.5</td></tr>
      <tr><td><code>char</code></td><td>One letter/character</td><td>'A', 'z'</td></tr>
    </table>
    <p>📘 *Tell them: int = number, float = decimal, char = letter*</p>

    <h3>🔹 8. Important C Keywords (they must memorize)</h3>
    <p><code>int</code>, <code>float</code>, <code>char</code>, <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>switch</code>, <code>return</code>, <code>void</code></p>
    <p>🧠 Tip: Only use <strong>small letters</strong> — C is <strong>case sensitive</strong></p>

    <h3>❌ Common Mistakes Students Make</h3>
    <table>
      <tr><th>Mistake</th><th>Easy Fix</th></tr>
      <tr><td>Missing semicolon <code>;</code></td><td>Always end each line with <code>;</code></td></tr>
      <tr><td>Using capital in keywords</td><td>Write <code>main</code>, not <code>Main</code></td></tr>
      <tr><td>Wrong format in <code>scanf()</code></td><td>Use <code>"%d"</code> for int, <code>"%f"</code> for float</td></tr>
      <tr><td>Using wrong variable name</td><td>Use same names as declared</td></tr>
    </table>

                `

              }
            ]
          }
        ]
      },
      essentials: {
        title: "Essential Skills & Life Hacks",
        topics: [
          {
            id: "smart-life-skills",
            title: "🧠 Smart Life Skills",
            icon: "💡",
            description: "Useful hacks that students will wish they knew earlier",
            lessons: [
              {
                id: "gas-cylinder-check",
                title: "How to check if a gas cylinder is expired",
                content: `
                  <h2>How to Check if a Gas Cylinder is Expired 🔥</h2>
                  <p>Every gas cylinder has an expiry date that you should check regularly for safety.</p>
                  <img src="./images/cylinder.png" class="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md" alt="Your Snapshot of Changunarayan">
                  <div class="safety-warning">
                    ⚠️ <strong>Safety First:</strong> Using expired gas cylinders can be extremely dangerous!
                  </div>

                  <h3>Step-by-Step Guide:</h3>
                  <ol>
                    <li><strong>You can find the date as shown in fig above</li>
                    <li>A=(January-March)First Quarter</li>
                    <li>B=(April-June)Second Quarter</li>
                    <li>C=(July-September)Third Quarter</li>
                    <li>D=(October-December)Fourth Quarter</li>
                    <li><strong>Year</strong>The last two digit represents yearr</li>
                    <li>Example<strong>B.13</strong>The cylinder will expire by 2013,June</li>
                    
                    
                  </ol>

                  <h3>Warning Signs:</h3>
                  <ul>
                    <li>🔴 Rust or corrosion on the cylinder</li>
                    <li>🔴 Dents or physical damage</li>
                    <li>🔴 Smell of gas when valve is closed</li>
                    <li>🔴 Difficulty in connecting regulator</li>
                  </ul>

                  <div class="pro-tip">
                    💡 <strong>Pro Tip:</strong> Always buy from authorized dealers and keep your purchase receipt!
                  </div>
                `
              },
              {
                id: "boil-water-safely",
                title: "How to boil water and store it safely",
                content: `
                  <h2>How to Boil Water and Store it Safely 🫧</h2>
                  <p>Proper water boiling and storage is crucial for health, especially during monsoon season.</p>

                  <h3>Boiling Process:</h3>
                  <ol>
                    <li><strong>Use Clean Pot:</strong> Wash your pot with soap before use</li>
                    <li><strong>Fill with Water:</strong> Use the cleanest water source available</li>
                    <li><strong>Bring to Rolling Boil:</strong> Water should bubble vigorously for 1-3 minutes</li>
                    <li><strong>Let it Cool:</strong> Allow to cool naturally, don't add ice</li>
                  </ol>

                  <h3>Safe Storage:</h3>
                  <ul>
                    <li>🧽 Use clean, covered containers</li>
                    <li>❄️ Store in cool, dark places</li>
                    <li>🕐 Use within 24 hours for best quality</li>
                    <li>🚫 Never store in metal containers for long periods</li>
                  </ul>

                  <div class="health-tip">
                    🏥 <strong>Health Tip:</strong> Boiled water prevents waterborne diseases like diarrhea and typhoid!
                  </div>
                `
              },
              {
                id: "electric-shock-response",
                title: "What to do when someone gets an electric shock",
                content: `
                  <h2>What to Do When Someone Gets an Electric Shock ⚡</h2>
                  <p>Electric shock can be life-threatening. Quick and proper response can save lives.</p>

                  <div class="emergency-warning">
                    🚨 <strong>EMERGENCY:</strong> Call 102 (ambulance) immediately for serious shocks!
                  </div>

                  <h3>Immediate Steps:</h3>
                  <ol>
                    <li><strong>DON'T TOUCH the person directly!</strong></li>
                    <li><strong>Turn off power source</strong> if possible (switch/main breaker)</li>
                    <li><strong>Use non-conductive object</strong> (dry wood, plastic) to move person</li>
                    <li><strong>Check breathing and pulse</strong></li>
                    <li><strong>Call for medical help</strong> immediately</li>
                  </ol>

                  <h3>What NOT to do:</h3>
                  <ul>
                    <li>❌ Don't touch the person with bare hands</li>
                    <li>❌ Don't use wet or metal objects</li>
                    <li>❌ Don't move the person unnecessarily</li>
                    <li>❌ Don't give water or food</li>
                  </ul>

                  <h3>Prevention:</h3>
                  <ul>
                    <li>🔌 Don't touch electrical appliances with wet hands</li>
                    <li>🔧 Get faulty wiring fixed immediately</li>
                    <li>⚡ Use proper earthing for heavy appliances</li>
                  </ul>
                `
              },
              {
                id: "earthquake-safety",
                title: "What to do in an earthquake (Nepal-focused)",
                content: `
                  <h2>What to do in an Earthquake (Nepal-focused) 🏔️</h2>
                  <p>Nepal is earthquake-prone. Knowing what to do can save your life and others.</p>

                  <h3>During the Earthquake:</h3>
                  <ol>
                    <li><strong>DROP:</strong> Get on hands and knees</li>
                    <li><strong>COVER:</strong> Hide under strong desk/table</li>
                    <li><strong>HOLD ON:</strong> Grip your shelter and protect your head</li>
                    <li><strong>Stay where you are</strong> until shaking stops</li>
                  </ol>

                  <h3>If You're Indoors:</h3>
                  <ul>
                    <li>🏠 Stay inside, don't run outside</li>
                    <li>🚪 Stay away from windows and doors</li>
                    <li>🛗 Don't use elevators</li>
                    <li>⛪ Be careful of falling objects</li>
                  </ul>

                  <h3>If You're Outdoors:</h3>
                  <ul>
                    <li>🌳 Stay away from buildings, trees, power lines</li>
                    <li>🏔️ Be aware of landslides in hilly areas</li>
                    <li>🚗 If driving, stop safely and stay in car</li>
                  </ul>

                  <h3>After the Earthquake:</h3>
                  <ul>
                    <li>📱 Check for injuries and call 100/102 if needed</li>
                    <li>🔍 Check for gas leaks, electrical damage</li>
                    <li>📻 Listen to radio for official updates</li>
                    <li>💧 Store water and food supplies</li>
                  </ul>

                  <div class="nepal-tip">
                    🇳🇵 <strong>Nepal Emergency Numbers:</strong> Police: 100, Fire: 101, Ambulance: 102
                  </div>
                `
              },
              {
                id: "fake-currency-detection",
                title: "How to identify fake Rs.1000 and Rs.500 notes",
                content: `
                  <h2>How to Identify Fake Rs.1000 and Rs.500 Notes 💸</h2>
                  <p>Learn to spot fake Nepali currency to protect yourself from fraud.</p>

                  <h3>Rs. 1000 Note Security Features:</h3>
                  <ul>
                    <li>🔍 <strong>Watermark:</strong> Clear image of Mount Everest when held to light</li>
                    <li>✨ <strong>Security Thread:</strong> Embedded thread with "NRB" text</li>
                    <li>🎨 <strong>Color Changing Ink:</strong> Denomination changes color when tilted</li>
                    <li>📏 <strong>Microprinting:</strong> Tiny text visible under magnification</li>
                    <li>🖼️ <strong>Raised Printing:</strong> Feel the texture, genuine notes feel raised</li>
                  </ul>

                  <h3>Rs. 500 Note Security Features:</h3>
                  <ul>
                    <li>🏔️ <strong>Watermark:</strong> Tiger head visible when held to light</li>
                    <li>🔒 <strong>Security Thread:</strong> Vertical thread with "Nepal Rastra Bank"</li>
                    <li>🌈 <strong>Color Changing Ink:</strong> Number 500 changes from green to blue</li>
                    <li>🔍 <strong>See-through Register:</strong> Perfect alignment when held to light</li>
                  </ul>

                  <h3>Quick Check Method:</h3>
                  <ol>
                    <li><strong>Feel:</strong> Genuine notes have a unique texture</li>
                    <li><strong>Look:</strong> Check watermark against light</li>
                    <li><strong>Tilt:</strong> See if colors change</li>
                    <li><strong>Compare:</strong> With a note you know is genuine</li>
                  </ol>

                  <div class="warning-tip">
                    ⚠️ <strong>Warning:</strong> If you receive a fake note, report to police immediately. Don't try to use it!
                  </div>
                `
              }
            ]
          },
          {
            id: "tech-tricks",
            title: "📱 Tech Tricks You'll Actually Use",
            icon: "🔧",
            description: "Everyday tech survival - smart phone, smarter student",
            lessons: [
              {
                id: "delete-facebook-permanently",
                title: "How to delete a Facebook account permanently",
                content: `
                  <h2>How to Delete a Facebook Account Permanently 📱</h2>
                  <p>If you want to permanently remove your Facebook account, follow these steps carefully.</p>

                  <div class="warning-tip">
                    ⚠️ <strong>Warning:</strong> This action cannot be undone! Make sure you really want to delete your account.
                  </div>

                  <h3>Before You Delete:</h3>
                  <ul>
                    <li>📥 Download your data (photos, posts, messages)</li>
                    <li>📞 Inform friends of alternative contact methods</li>
                    <li>🔗 Unlink Facebook from other apps/websites</li>
                    <li>💳 Cancel any Facebook-linked subscriptions</li>
                  </ul>

                  <h3>Deletion Steps:</h3>
                  <ol>
                    <li><strong>Log into Facebook</strong> on a computer or mobile browser</li>
                    <li><strong>Go to Settings & Privacy</strong> → Settings</li>
                    <li><strong>Click "Your Facebook Information"</strong></li>
                    <li><strong>Select "Deactivation and Deletion"</strong></li>
                    <li><strong>Choose "Delete Account"</strong> and click Continue</li>
                    <li><strong>Enter your password</strong> and click Continue</li>
                    <li><strong>Click "Delete Account"</strong></li>
                  </ol>

                  <h3>What Happens Next:</h3>
                  <ul>
                    <li>⏰ Account enters 30-day grace period</li>
                    <li>🚫 Don't log in during this time or deletion cancels</li>
                    <li>🗑️ After 30 days, account and data are permanently deleted</li>
                  </ul>

                  <div class="pro-tip">
                    💡 <strong>Alternative:</strong> Consider deactivation first if you're unsure about permanent deletion.
                  </div>
                `
              },
              {
                id: "disable-location-tracking",
                title: "How to turn off location tracking in your phone",
                content: `
                  <h2>How to Turn Off Location Tracking in Your Phone 📍</h2>
                  <p>Protect your privacy by controlling location access for apps and services.</p>

                  <h3>For Android Phones:</h3>
                  <ol>
                    <li><strong>Open Settings</strong> app</li>
                    <li><strong>Go to "Location"</strong> or "Privacy"</li>
                    <li><strong>Turn off "Use location"</strong> toggle</li>
                    <li><strong>Or manage per app:</strong> Tap "App permissions"</li>
                    <li><strong>Select specific apps</strong> and change permissions</li>
                  </ol>

                  <h3>For iPhone:</h3>
                  <ol>
                    <li><strong>Open Settings</strong> app</li>
                    <li><strong>Tap "Privacy & Security"</strong></li>
                    <li><strong>Select "Location Services"</strong></li>
                    <li><strong>Turn off completely</strong> or manage per app</li>
                    <li><strong>Scroll down</strong> for system services</li>
                  </ol>

                  <h3>Google Account Settings:</h3>
                  <ul>
                    <li>🌐 Go to myaccount.google.com</li>
                    <li>📍 Click "Data & Privacy"</li>
                    <li>🗺️ Find "Location History" and turn off</li>
                    <li>📱 Turn off "Web & App Activity"</li>
                  </ul>

                  <h3>What You Should Know:</h3>
                  <ul>
                    <li>📱 Some apps need location for core functionality</li>
                    <li>🗺️ Maps, weather, and ride-sharing apps work better with location</li>
                    <li>🔋 Turning off location can improve battery life</li>
                    <li>📸 Photo location tags will stop working</li>
                  </ul>

                  <div class="privacy-tip">
                    🔒 <strong>Privacy Tip:</strong> Review location permissions regularly - many apps don't really need it!
                  </div>
                `
              }
            ]
          },
          {
            id: "home-hacks",
            title: "🧼 Home Hacks for Students",
            icon: "🏠",
            description: "Things to protect you, your phone, your home, and your health",
            lessons: [
          
  {
    id: "study-hacks-lesson-1",
    title: "✏️ Free Highlighting Trick & DIY Sticky Notes",
    content: `
      <h3>Free Highlighting Trick</h3>
      <p>🔶 Instead of buying highlighters, use the <strong>corner of a soap bar (slightly wet)</strong> to underline textbook lines.</p>
      <p>💡 Easy to wash off and super eco-friendly!</p>

      <h3>DIY Sticky Notes</h3>
      <p>🗒 Cut used paper into small squares.</p>
      <p>🖍 kunai euta edge ma glue lagau ra let it dry ..</p>
      <p>✅ Now you have reusable sticky notes—no need to buy new ones!</p>
    `
  },
  {
    id: "lighting-hacks-lesson-2",
    title: "💡 Lighting Hacks",
    content: `
      <h3>Phone Flashlight Study Lamp</h3>
      <p>🔦 Place your phone’s flashlight <strong>under a clear water bottle</strong>.</p>
      <p>✨ The bottle diffuses the light like a mini lamp—perfect for reading or studying during power cuts!</p>
    `
  },

              {
                id: "fix-phone-charging",
                title: "How to fix weak phone charging (dust removal trick)",
                content: `
                  <h2>How to Fix Weak Phone Charging (Dust Removal Trick) 🔌</h2>
                  <p>If your phone charges slowly or won't charge, the problem might be dust in the charging port.</p>

                  <h3>What You'll Need:</h3>
                  <ul>
                    <li>🧹 Soft toothbrush (clean and dry)</li>
                    <li>🔦 Flashlight or phone torch</li>
                    <li>💨 Compressed air (optional)</li>
                    <li>🧽 Cotton swab</li>
                  </ul>

                  <h3>Step-by-Step Cleaning:</h3>
                  <ol>
                    <li><strong>Turn off your phone</strong> completely</li>
                    <li><strong>Use flashlight</strong> to look inside charging port</li>
                    <li><strong>Gently brush</strong> with toothbrush in one direction</li>
                    <li><strong>Blow out debris</strong> with compressed air</li>
                    <li><strong>Use cotton swab</strong> for stubborn dirt</li>
                    <li><strong>Test charging</strong> after cleaning</li>
                  </ol>

                  <h3>What NOT to Use:</h3>
                  <ul>
                    <li>❌ Metal objects (paperclips, needles)</li>
                    <li>❌ Water or any liquids</li>
                    <li>❌ Vacuum cleaners (too powerful)</li>
                    <li>❌ Sharp objects that can damage contacts</li>
                  </ul>

                  <h3>Prevention Tips:</h3>
                  <ul>
                    <li>🔌 Use a case that covers the charging port</li>
                    <li>👖 Keep phone in separate pocket from keys/coins</li>
                    <li>🧹 Clean charging port monthly</li>
                    <li>🏠 Store in clean, dust-free places</li>
                  </ul>

                  <div class="pro-tip">
                    💡 <strong>Pro Tip:</strong> If cleaning doesn't help, the charging cable or adapter might be faulty!
                  </div>
                `
              }
            ]
          },
          
          {
            id: "emergency-safety",
            title: "🆘 Emergency & Safety Zone",
            icon: "🚨",
            description: "The content that might literally save their life one day",
            lessons: [
        
  {
    id: "first-aid-lesson-1",
    title: "🌟 First Aid for ",
    content: `
      <h3>1. Cuts 🤕</h3>
      <ul>
        <li>✔️ Wash your hands.before touching it  – germs are icky!</li>
        <li>✔️ Rinse the cut with cool water.</li>
        <li>✔️ Press gently with a clean tissue/bandage.</li>
        <li>✔️ Cover it to keep it safe.</li>
      </ul>
      <p><strong>Uh-oh, Don't Do This:</strong></p>
      <ul>
        <li>✖️ Don’t blow on it.</li>
        <li>✖️ No alcohol—it stings!</li>
        <li>✖️ Don’t pick the scab.the outer layer helps you heal</li>
         <img src="./images/scab.png" class="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md" alt="Your Snapshot of Changunarayan">
      </ul>
      

      <h3>2. Hot Hot Burns 🔥</h3>
      <p><strong>Be a Hero:</strong></p>
      <ul>
        <li>✔️ Put under cool (not cold) water for 10 min.</li>
        <li>✔️ Cover with a clean cloth.</li>
      </ul>
      <p><strong>Uh-oh, Don't Do This:</strong></p>
      <ul>
        <li>✖️ No ice.</li>
        <li>✖️ Don’t pop blisters.</li>
        <li>✖️ No butter.</li>
      </ul>
     
      <h3>3. Nose Ninja (Nosebleeds) 👃</h3>
      <p><strong>Be a Hero:</strong></p>
      <ul>
        <li>✔️ Sit up and pinch the soft part of your nose.</li>
        <li>✔️ Aagadhi jhukne (), use a cold cloth.</li>
      </ul>
      <p><strong>Uh-oh, Don't Do This:</strong></p>
      <ul>
        <li>✖️ Don’t tilt your head back. (pachaadi jhukne haina)</li>
        <li>✖️ No tissue stuffing.</li>
        <li>✖️ Don’t blow your nose right after.</li>
      </ul>
      
    `
  },


              {
                id: "fainting-response",
                title: "What to do when someone faints",
                content: `
                  <h2>What to Do When Someone Faints 😵</h2>
                  <p>Fainting (syncope) is temporary loss of consciousness. Quick action can help the person recover safely.</p>

                  <h3>Immediate Response:</h3>
                  <ol>
                    <li><strong>Check responsiveness:</strong> Gently shake and call their name</li>
                    <li><strong>Position safely:</strong> If unconscious, lay them flat</li>
                    <li><strong>Elevate legs:</strong> Raise legs 8-12 inches if possible</li>
                    <li><strong>Loosen clothing:</strong> Unbutton tight clothes around neck</li>
                    <li><strong>Check breathing:</strong> Ensure airways are clear</li>
                  </ol>

                  <h3>When They Wake Up:</h3>
                  <ul>
                    <li>🧘 Keep them lying down for a few minutes</li>
                    <li>💧 Offer water if they can swallow safely</li>
                    <li>🍯 Give sugar/glucose if available</li>
                    <li>🌬️ Ensure fresh air circulation</li>
                  </ul>

                  <h3>Call for Help If:</h3>
                  <ul>
                    <li>🚨 Person doesn't wake up within 2 minutes</li>
                    <li>💓 No pulse or breathing</li>
                    <li>🤕 They hit their head while falling</li>
                    <li>🩸 There's bleeding or injury</li>
                    <li>🔄 They faint again</li>
                  </ul>

                  <h3>Common Causes:</h3>
                  <ul>
                    <li>🍽️ Low blood sugar (hunger)</li>
                    <li>🌡️ Heat exhaustion</li>
                    <li>💧 Dehydration</li>
                    <li>😰 Emotional shock or stress</li>
                    <li>🩸 Sudden blood pressure drop</li>
                  </ul>

                  <div class="emergency-tip">
                    🚨 <strong>Emergency Numbers Nepal:</strong> Ambulance: 102, Police: 100
                  </div>
                `
              }
            ]
          },
          {
            id: "diy-corner",
            title: "⚙️ Fix It Yourself (DIY Corner)",
            icon: "🔧",
            description: "Show them they can solve problems - confidence boost",
            lessons: [
{
  id:"playdough",
  title:"🎉playdough",
  content: `
              <div class="playdough-lesson p-4 bg-yellow-50 rounded-xl shadow-md">
              <img src="./images/playdough.png"  class="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md" alt="Your Snapshot of Changunarayan">
  <h2 class="text-2xl font-bold mb-3">DIY chamalkoAata Playdough</h2>
  <p class="mb-4"><strong>Kina?</strong> Surakshit chha, sasto chha, ra gharmai bhaeko samagri prayog garchha.</p>

  <h3 class="text-xl font-semibold mb-2">🧂 Samagri (Ingredients):</h3>
  <ul class="list-disc list-inside mb-4">
    <li><strong>1 cup</strong> chamal ko aata (wa ramrari pisheko chamal ko dhulo)</li>
    <li><strong>½ cup</strong> baki dal ko pani (siddhaeko dal ko lassi) <br><em>Haina bhane:</em> ½ cup maida (seto aata) + pani</li>
    <li><strong>1 tbsp</strong> tel (kunai pani khane tel)</li>
    <li>Food coloring (besar, chukandar ko ras, wa pisheko leaves haru)</li>
  </ul>

  <h3 class="text-xl font-semibold mb-2">👩‍🍳 Bidhi (Steps):</h3>
  <ol class="list-decimal list-inside mb-4 space-y-1">
    <li>Chamal ko aata + dal ko pani ek bhadama misaaunus (lumps nabanauna dhilo dhilo pani halnus).</li>
    <li>1 tbsp tel halnus (yesle playdough lai naram rakhchha).</li>
    <li>5 minute samma musnus jab samma yo chapati ko aata jastai hunna.
      <ul class="list-disc list-inside ml-4 text-sm">
        <li>Dherai chipleko chha? Ajha chawal ko aata halnus.</li>
        <li>Dherai sukha chha? Haatma pani lagayera musnus.</li>
      </ul>
    </li>
    <li>Bhaag lagayera rang dinus:
      <ul class="list-disc list-inside ml-4 text-sm">
        <li><strong>Pahilo:</strong> Besar ko dhulo</li>
        <li><strong>Gulabi:</strong> Chukandar ko ras</li>
        <li><strong>Hariyo:</strong> Palungo/Dhania ko paste</li>
      </ul>
    </li>
    <li>Dubbo ma rakhnus (fridge bina 1 hapta samma tikchha).</li>
  </ol>

  <h3 class="text-xl font-semibold mb-2">🛠️ Chamal ko Aata Chaina? Yo Prayog Garnus:</h3>
  <ul class="list-disc list-inside">
    <li><strong>Rotiko aata</strong> (aata + pani + tel) – thorai kam khichaune hunchha tara kaam garchha.</li>
    <li><strong>Prayog gareko chiya pati</strong> (sukayera pisnus) texture ko lagi.</li>
  </ul>
</div>
`
},
              {
                id: "phone-stand-diy",
                title: "How to make a phone stand from paper/cardboard",
                content: `
                  <h2>How to Make a Phone Stand from Paper/Cardboard 📱</h2>
                  <p>Create a useful phone stand with materials you have at home!</p>

                  <h3>What You'll Need:</h3>
                  <ul>
                    <li>📄 Thick cardboard or several sheets of paper</li>
                    <li>✂️ Scissors</li>
                    <li>📏 Ruler</li>
                    <li>✏️ Pencil</li>
                    <li>🖇️ Tape or glue</li>
                  </ul>

                  <h3>Simple Triangle Stand:</h3>
                  <ol>
                    <li><strong>Cut rectangle:</strong> 6 inches wide, 4 inches tall</li>
                    <li><strong>Mark fold lines:</strong> 2 inches from each end</li>
                    <li><strong>Cut slot:</strong> 1/4 inch wide, 1 inch deep in center</li>
                    <li><strong>Fold triangles:</strong> Create supporting legs</li>
                    <li><strong>Test angle:</strong> Adjust for your phone size</li>
                  </ol>

                  <h3>Advanced Adjustable Stand:</h3>
                  <ol>
                    <li><strong>Cut base:</strong> 8×6 inch rectangle</li>
                    <li><strong>Cut support:</strong> 6×4 inch rectangle with angle cut</li>
                    <li><strong>Create hinges:</strong> Use tape for adjustable angles</li>
                    <li><strong>Add phone groove:</strong> Cut shallow groove for phone</li>
                  </ol>

                  <h3>Decoration Ideas:</h3>
                  <ul>
                    <li>🎨 Cover with decorative paper</li>
                    <li>✨ Add stickers or drawings</li>
                    <li>🌈 Paint with watercolors</li>
                    <li>📰 Use newspaper for vintage look</li>
                  </ul>

                  <div class="diy-tip">
                    💡 <strong>DIY Tip:</strong> Test with different phone sizes and cases before final assembly!
                  </div>
                `
              }
            ]
          }
        ]
      }
    }
  },
  np: {
    siteName: "Coding Guide",
    subtitle: "ज्ञानको यात्रा यहाँबाट सुरु हुन्छ 🌟",
    tagline: "छोटो सिकाई, ठूलो नतिजा 🍎",
    startGrade9: "कक्षा ९ सुरु गर्नुहोस्",
    startGrade10: "कक्षा १० सुरु गर्नुहोस्",
    startEssentials: "आवश्यक सीपहरू",
    about: "बारेमा",
    search: "पाठहरू खोज्नुहोस्...",
    previous: "← अघिल्लो",
    next: "अर्को →",
    downloadPdf: "📄 PDF डाउनलोड",
    progressText: "तपाईंको प्रगति",
    darkMode: "🌙",
    lightMode: "☀️",
    grades: {
      grade9: {
        title: "कक्षा ९ कम्प्युटर विज्ञान",
        topics: [

  
{
  id: "internet-lesson",
  title: " इन्टरनेट के हो?",
  icon: "🌐",
  lessons: [
    {
      "id": "internet-intro-question",
      "title": "🧩इन्टरनेट ?",
      "content": `
        <h2>इन्टरनेट = तपाईंले प्रयोग गरिरहनुभएको चीज!</h2>
        <p>❓ तपाईंले कहिल्यै Facebook, TikTok, वा Google प्रयोग गर्नुभएको छ?</p>
        <p>यदि हो—तपाईंले इन्टरनेट प्रयोग गर्नुभएको छ।</p>      
     
        <h3>📘Just Imagine</h3>
        <p>तपाईंले Ram lai  letter  लेख्नुभयो। चिठ्ठी पुग्यो। यो सञ्चार हो।</p>
        <p>अब तपाईंको फोन वा कम्प्युटरले त्यो सन्देश <strong>क्षणमै पठाउँछ</strong>.</p>
        <p>👉 त्यो नै <strong>इन्टरनेट</strong> हो—फोन, कम्प्युटर र मानिसहरूलाई इनस्टेन्टमा जोड्ने जादू जाल।</p>
        <p>इसेलाई ठूलो अदृश्य मकडी जाल 🌐 झैं सोच्नुहोस्—विश्वभर फैलिएको:</p>
        <ul>
          <li>तपाईंको मोबाइल 📱</li>
          <li>तपाईंको साथीको कम्प्युटर 💻</li>
          <li>भिडियो, खेल, र वेबसाइटहरू 🧠</li>
        </ul>
      `
    },
    {
      title: "📱इन्टरनेटमा के–के गर्न सकिन्छ?",
      id: "internet-what-can-you-do",
      content: `
        <p>तपाईंले यी सम्भवतः गरिसक्नुभएको छ:</p>
        <ul>
          <li>YouTube मा भिडियो हेर्नु</li>
          <li>Facebook, TikTok प्रयोग गर्नु</li>
          <li>Messenger वा WhatsApp मा मेसेज पठाउनु</li>
          <li>Google मा खोज्नु</li>
          <li>Free Fire खेल्नु 😁</li>
          <li>गीतका शब्द वा नतिजा खोज्नु</li>
        </ul>
        <p>🎯 यी सबै इन्टरनेटको कारण सम्भव छन्।</p>
        <p>इन्टरनेट भनेको 'Google' मात्र होइन— यो त्यो उपकरण हो जसले तपाईलाई तिनीहरूसँग जोड्छ।</p>
      `
    },
    {
      id: "internet-what-you-need",
      title: "🗃️ इन्टरनेट प्रयोग गर्न के चाहिन्छ?",
      content: `
        <h3>डान्स शो जस्तो सोच्नुहोस्:</h3>
        <ul>
          <li>📶 <strong>डेटा वा Wi‑Fi</strong> — टिकट जस्तो</li>
          <li>📱 <strong>फोन वा कम्प्युटर</strong> — हेर्नको लागि उपकरण</li>
          <li>🌐 <strong>एप वा ब्राउजर</strong> — शोमा प्रवेश गर्ने ढोका</li>
        </ul>
        <table>
          <tr><th>चाहिन्छ</th><th>के गर्छ</th></tr>
          <tr><td><strong>फोन/ल्यापटप</strong></td><td>टिभी वा रेडियो जस्तै</td></tr>
          <tr><td><strong>इन्टरनेट/डेटा</strong></td><td>बिजुलीजस्तै—सबै काम गराउँछ</td></tr>
          <tr><td><strong>ब्राउजर</strong></td><td>रिमोट कन्ट्रोल जस्तै—च्यानल परिवर्तन गर्छ</td></tr>
        </table>
      `
    },
    {
      id: "internet-glossary",
      title: "🌐टेक शब्दहरूको अर्थ",
      content: `
        <table>
          <tr><th>शब्द</th><th>कल्पना गर्नुहोस्</th></tr>
          <tr><td><strong>Website</strong></td><td>इन्टरनेटमा पसल (जस्तै YouTube = भिडियोक पसल)</td></tr>
          <tr><td><strong>Webpage</strong></td><td>त्यस पसलभित्रको एक पेज</td></tr>
          <tr><td><strong>Browser</strong></td><td>पसल खोल्ने एप (Chrome जस्तो)</td></tr>
          <tr><td><strong>Google</strong></td><td>तपाईंको लागि खोज्ने सहयोगी</td></tr>
          <tr><td><strong>URL</strong></td><td>पसलको ठेगाना (जस्तै www.facebook.com)</td></tr>
          <tr><td><strong>Hyperlink</strong></td><td>क्लिक गर्दा अर्को पेजमा जाने बटन/शब्द</td></tr>
        </table>
      `
    },
    {
      id: "internet-metaphor",
      title: "🌴 वास्तविक उदाहरण",
      content: `
        <p>📬 <strong>इन्टरनेट</strong> = ठूलो डिजिटल शहर</p>
        <p>🏘 <strong>Website</strong> = घर/पसल</p>
        <p>🛵 <strong>Data</strong> = डेलिभरी बाइक</p>
        <p>🧑‍🎓 <strong>तपाईं</strong> = आगन्तुक</p>
        <p>🌐 <strong>Browser</strong> = नक्शा/Google गाइड</p>
      `
    },
    {
      id: "internet-uses",
      title: " 🎮इन्टरनेट प्रयोगका उदाहरणहरू",
      content: `
        <table>
          <tr><th>प्रयोग</th><th>उदाहरण</th></tr>
          <tr><td>📩 <strong>सन्देश पठाउने</strong></td><td>Messenger, Email</td></tr>
          <tr><td>🎥 <strong>भिडियो</strong></td><td>YouTube, TikTok</td></tr>
          <tr><td>🎮 <strong>खेलहरू</strong></td><td>Free Fire, Ludo</td></tr>
          <tr><td>📚 <strong>पढ्ने</strong></td><td>अनलाइन कक्षा, Google</td></tr>
          <tr><td>📰 <strong>समाचार</strong></td><td>अनलाइन समाचार पढ्ने</td></tr>
          <tr><td>🛍️ <strong>किनमेल</strong></td><td>Daraz, अनलाइन पसलहरू</td></tr>
        </table>
      `
    },
    {
      id: "internet-common-mistakes",
      title: "❌ धेरै विद्यार्थीले गर्ने गल्तीहरू",
      content: `
        <table>
          <tr><th>गल्ती</th><th>सही बुझाइ</th></tr>
          <tr><td>"Google नै इन्टरनेट हो"</td><td>❌ Google इन्टरनेटको एउटा भाग मात्र हो</td></tr>
          <tr><td>"Browser इन्टरनेट हो"</td><td>❌ Browser ढोका हो, इन्टरनेट बाटो</td></tr>
          <tr><td>वेबसाइट ठेगाना टाइप गर्न सक्दैनन्</td><td>✅ www. लेखेर स्पेलिङ जाँच्नुहोस्</td></tr>
          <tr><td>"Facebook र Internet फरक थाहा छैन"</td><td>✅ Facebook इन्टरनेटबाट काम गर्छ</td></tr>
        </table>
      `
    },
    {
      "id": "internet-exam-focus",
      "title": "✏️ परीक्षा केन्द्रित उत्तरहरू",
      "content": `
        <p>1. <strong>इन्टरनेट के हो?</strong><br>
        👉 इन्टरनेट एउटा प्रणाली हो जसले फोन, कम्प्युटर र मानिसहरूलाई विश्वभर्‌मा जोड्छ। यसले सन्देश, भिडियो, खेल, र जानकारी खोज्न मद्दत गर्छ।</p>
        
        <p>2. <strong>इन्टरनेटका कुनै पनि २ सेवा?</strong><br>
        👉 Email, भिडियो कल, च्याट, वेब ब्राउजिङ, ई‑लर्निङ</p>
        
        <p>3. <strong>इन्टरनेटका २ राम्रो र २ नराम्रो पक्ष?</strong><br>
        ✅ राम्रो: घरबाट सिक्न सकिन्छ, द्रुत सन्देश<br>
        ❌ नराम्रो: लत लाउने, फेक समाचार</p>
      `
    }
  ]
},
{
  id: "web-development",
  title: " वेब विकास परिचय",
  icon: "💻",
  lessons: [
    {
      id: "what-is-website",
      title: "🌐 वेबसाइट के हो?",
      content: `
        <h2>वेबसाइट के हो? 🚗</h2>
        <p>वेबसाइट एउटा सडक जस्तो हो ,जुनमा घरहरू (पेजहरू) हुन्छन्। तपाईंको ब्राउजर (Chrome/Firefox) तपाईंलाई त्यहाँ पुर्‍याउने गाडी हो।</p>
        
        <h3>महत्त्वपूर्ण तथ्यहरू:</h3>
        <ul>
          <li>✔ प्रत्येक पेज छुट्टै फाइल हुन्छ (जस्तै home.html, contact.html)</li>
          <li>✔ वेबसाइटहरू <strong>ब्राउजरमा</strong> खुल्छन्, एप स्टोरमा होइन</li>
        </ul>

        <h3>⚠️ सामान्य गल्ती:</h3>
        <p>यदि तपाईले ठेगाना गलत लेख्नुभयो भने (राम्रो contat.html मा contat.html लेख्नुभयो), तपाईंको ‘गाडी’ घर फेला पार्दैन!</p>
      `
    },
    {
      id: "html-tags",
      title: "🏷️ HTML ट्यागहरू: लेबलहरू",
      content: `
        <h2>HTML ट्यागहरू: लेबलहरू 🏷️</h2>
        <p>ट्यागहरू नाम ट्याग जस्ता हुन्छन्:
         <h3>प्रधानाध्यापकको लेबल (सबैभन्दा ठूलो)</h3>,
         </h4> विद्यार्थीको लेबल (सामान्य)</h4>। <code>&lt;/h1&gt;</code> नबन्द गरेको भनेको आधा पोशाक लगाएको जस्तै हो!</p>
        
        <h3>जान्नै पर्ने ट्यागहरू:</h3>
        <table>
          <tr>
            <th>ट्याग</th>
            <th>उद्देश्य</th>
            <th>उदाहरण</th>
          </tr>
          <tr>
            <td><code>&lt;h1&gt;</code></td>
            <td>मुख्य शीर्षक</td>
            <td><code>&lt;h1&gt;मेरो स्कूल&lt;/h1&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;p&gt;</code></td>
            <td>प्यारा ग्राफ</td>
            <td><code>&lt;p&gt;स्वागत छ!&lt;/p&gt;</code></td>
          </tr>
          <tr>
            <td><code>&lt;img&gt;</code></td>
            <td>तस्बिर</td>
            <td><code>&lt;img src="photo.jpg"&gt;</code></td>
          </tr>
        </table>

        <h3>💡 शिक्षकको सुझाव:</h3>
        <p>ट्यागहरू सधैं बाँया (<code>&lt;h1&gt;</code>) र दायाँ (<code>&lt;/h1&gt;</code>) जुत्ता जस्तै जोडीमा बाँध्नुहोस्!</p>
      `
    },
    {
      id: "links",
      title: "🌉 लिंकहरू: पुलहरू",
      content: `
        <h2>लिंकहरू: पुलहरू 🌉</h2>
        <p><code>&lt;a&gt;</code> एउटा पेजबाट अर्को पेजसम्म जाने पुल हो। Broken पुल (href='wrong.html') भयो भने तपाईं खस्न सक्नुहुन्छ!</p>
        
        <h3>कोड उदाहरण:</h3>
        <pre><code>&lt;a href="about.html"&gt;हाम्रोबारे&lt;/a&gt;</code></pre>

        <h3>🔍 गल्ती जाँच:</h3>
        <ol>
          <li>के about.html फाइल छ?</li>
          <li>के स्पेलिङ <strong>ठीक</strong> छ?</li>
        </ol>
      `
    },
    {
      id: "images",
      title: "🖼️ तस्बिरहरू: फोटो फ्रेमहरू",
      content: `
        <h2>तस्बिरहरू: फोटो फ्रेमहरू 🖼️</h2>
        <p><code>&lt;img&gt;</code> फ्रेम हो। <code>src='dog.jpg'</code> फ्रेमभित्रको तस्बिर हो। नाम गलत भए—खाली फ्रेम!</p>
        
        <h3>महत्त्वपूर्ण जाँचहरू:</h3>
        <ul>
          <li>✔ फाइल अवस्थित छ (जस्तै dog.jpg एउटै फोल्डरमा छ)</li>
          <li>✔ स्पेलिङमा गल्ती छैन (जस्तै dgo.jpg ले काम गर्दैन)</li>
        </ul>
      `
    },
    {
      id: "folders",
      title: "🗄️ फोल्डरहरू: फाइलिंग क्याबिनेट",
      content: `
        <h2>फोल्डरहरू: फाइलिंग क्याबिनेट 🗄️</h2>
        <p>Hajurharule Aafno euta jutta kitchen ma ra arko school ma rakhna mildaina. eutai joda ko jutta eutai thyau ma vae jastai। यदि index.html र photo.jpg फरक ड्रअरमा छन् भने, ब्राउजर chaldain!</p>
        
        <h3>सही संरचना:</h3>
        <pre><code>my_website/
├── index.html
├── about.html
└── photo.jpg</code></pre>
      `
    },
   
    {
      id: "html-tag-meanings",
      title: "🏷️ ट्यागहरूको अर्थ",
      content: `
        <table>
          <tr><th>ट्याग</th><th>अर्थ</th></tr>
          <tr><td>&lt;html&gt;</td><td>वेबपेजको सुरुवात</td></tr>
          <tr><td>&lt;head&gt;</td><td>प्रदाता (view मा देख्दैन)</td></tr>
          <tr><td>&lt;title&gt;</td><td>ब्राउजर ट्याबमा देखिने टाइटल</td></tr>
          <tr><td>&lt;body&gt;</td><td>स्क्रिनमा देखिने सामग्री</td></tr>
          <tr><td>&lt;h1&gt;</td><td>हेडिङ (ठूलो अक्षर)</td></tr>
          <tr><td>&lt;p&gt;</td><td>प्याराग्राफ (साधारण लेख)</td></tr>
          <tr><td>&lt;/tag&gt;</td><td>ट्याग बन्द गर्ने संकेत</td></tr>
        </table>
      `
    },
    {
      id: "html-more-tags",
      title: "📚  जान्नु पर्ने ट्यागहरू",
      content: `
        <h3>1. टेक्स्ट फर्म्याटिङ</h3>
        <table>
          <tr><th>ट्याग</th><th>इफेक्ट</th><th>उदाहरण</th></tr>
          <tr><td>&lt;b&gt;</td><td>Bold</td><td><code>&lt;b&gt;नमस्ते&lt;/b&gt;</code> → <b>नमस्ते</b></td></tr>
          <tr><td>&lt;i&gt;</td><td>Italic</td><td><code>&lt;i&gt;नमस्ते&lt;/i&gt;</code> → <i>नमस्ते</i></td></tr>
          <tr><td>&lt;u&gt;</td><td>Underline</td><td><code>&lt;u&gt;नमस्ते&lt;/u&gt;</code> → <u>नमस्ते</u></td></tr>
          <tr><td>&lt;br&gt;</td><td>Line break</td><td><code>नमस्ते&lt;br&gt;विश्व</code> → नमस्ते<br>विश्व</td></tr>
        </table>

        <h3>2. लिस्टहरू</h3>
        <strong>बुलेट लिस्ट:</strong>
        <pre><code>
<ul>
  <li>गणित</li>
  <li>विज्ञान</li>
</ul>
        </code></pre>
        <strong>नम्बरिएको लिस्ट:</strong>
        <pre><code>
<ol>
  <li>जाग्नुहोस्</li>
  <li>दाँत माझ्नुहोस्</li>
</ol>
        </code></pre>

        <h3>3. टेबलहरू</h3>
        <pre><code>
<table border="1">
  <tr>
    <th>पाठ</th>
    <th>विषय</th>
  </tr>
  <tr>
    <td>1</td>
    <td>गणित</td>
  </tr>
</table>
        </code></pre>

        <h3>4. तस्बिर र लिंकहरू</h3>
        <ul>
          <li><code>&lt;img src="school.jpg" width="100"&gt;</code> – फोटो थप्न</li>
          <li><code>&lt;a href="https://google.com"&gt;Google जानुहोस्&lt;/a&gt;</code> – लिंक बनाउन</li>
        </ul>
      `
    },
    {
      id: "html-common-mistakes",
      title: "⚠️ विद्यार्थीहरू गर्ने गल्तीहरू",
      content: `
        <table>
          <tr><th>गल्ती</th><th>जोगाउने तरिका</th></tr>
          <tr><td>.html बिना फाइल बचत गर्नु</td><td>✅ mypage.html भनेर बचत गर्नुहोस्</td></tr>
          <tr><td>ट्यागहरू CAPITAL मा लेख्नु</td><td>✅ साना अक्षरमा लेख्नुहोस् जस्तै &lt;p&gt;</td></tr>
          <tr><td>ट्याग बन्द गर्न भुल्नु</td><td>✅ &lt;/p&gt; लेख्न नबिर्सनुहोस्</td></tr>
          <tr><td>कोड  लेख्न मुभमा Notepad मा खोल्नु</td><td>✅ Right‑click → Open in Chrome गर्नुहोस्</td></tr>
        </table>
      `
    }
  ]
},

          {
  id: "css-basics",
  title: "CSS परिचय",
  icon: "🖌️",
  lessons: [
    {
      id: "css-lesson-1",
      title: "🧩 Lesson 1: CSS के हो?",
      content: `
        <p><strong>CSS</strong> को पूरा नाम हो <strong>Cascading Style Sheets</strong>.</p>
        <p>यो तपाईंको <strong>वेबपेजलाई सजाउन</strong> मद्दत गर्छ — जस्तै कक्षा सजाउँदा।</p>
        <p>HTML बनाउँछ संरचना — जस्तै साधारण घर बनाउनु।<br>
        CSS ले रङ हाल्छ, पर्दा राख्छ, डिज़ाइन गर्छ, र सबै कुरा ठ्याक्कै राख्छ।</p>
        <p><em>🧠 उधाहरण:</em> HTML = सादा–टी–शर्ट। CSS = उसमा डिजाइन — रङ, प्याटर्न, लोगो आदि।</p>
        <p>✏️ सम्झनुहोस्:</p>
        <ul>
          <li>CSS = Style</li>
          <li>HTML = Structure</li>
        </ul>`
    },
    {
      id: "css-lesson-2",
      title: "🧩CSS किन प्रयोग गर्छौ?",
      content: `
        <p>CSS बिना, सबै वेबपेजहरू सक्कली कागज जस्तै उदास लाग्छ।<br>
        CSS ले थप्छ:</p>
        <ul>
          <li>लेखलाई <strong>रंगीन र ठूलो/साना</strong></li>
          <li><strong>पृष्ठभूमि</strong> थप्छ</li>
          <li>वस्तुहरूलाई बाँया, दायाँ, वा केन्द्रमा सार्न</li>
          <li><strong>आकार र सीमाहरू</strong> थप्न</li>
          <li><strong>मोबाइल या कम्प्युटर अनुसार डिजाइन</strong></li>
        </ul>
        <p><em>🧠 उधाहरण:</em> तपाईंको स्कुलको किताब जुन रङ–रहित हो भने कति उब्बल लाग्थ्यो?</p>`
    },
    {
      id: "css-lesson-3",
      title: "🧩 CSS कहाँ लेख्ने?",
      content: `
      <p>तीन तरिका:</p>
<ol>
  <li><strong>Inline CSS</strong> – HTML ट्याग भित्र<br>
    <div class="code-example">
      <pre><code>&lt;p style="color:red;"&gt;Hello&lt;/p&gt;</code></pre>
    </div>
  </li>
  <li><strong>Internal CSS</strong> – HTML कागजातको <code>&lt;head&gt;</code> भित्र<br>
    <div class="code-example">
      <pre><code>&lt;style&gt; p { color: red; } &lt;/style&gt;</code></pre>
    </div>
  </li>
  <li><strong>External CSS</strong> – छुट्टै <code>.css</code> फाइलमा<br>
    <div class="code-example">
      <pre><code>p { color: red; }</code></pre>
    </div>
    HTML मा लिंक गर्ने:<br>
    <div class="code-example">
      <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
    </div>
  </li>
</ol>
<p><em>🧠 उदाहरण:</em> Inline = हातमा टाँसेको नोट<br>
Internal = किताबभित्रको नोट<br>
External = छुट्टै नोटबुकमा लेखेको नोट।</p>
      `
    },
    {
      id: "css-lesson-4",
      title: "🧩CSS Syntax (लेखन शैली)",
      content: `
        <p>CSS को नियम यस्तो हुन्छ:</p>
        <div class="code-example">
        <pre><code>selector {
  property: value;
}</code></pre>
</div>
        <p><strong>उदाहरण:</strong></p>
        <pre><code>h1 {
  color: blue;
  font-size: 24px;
}</code></pre>
        <p>यहाँ:</p>
        <ul>
          <li><code>h1</code> – जे स्टाइल गर्न खोज्दैछौं (Selector)</li>
          <li><code>color</code> – गुण (Property)</li>
          <li><code>blue</code> – मान (Value)</li>
        </ul>
        <p>✏️ जरूरी:</p>
        <ul>
          <li>हरेक लाइनको अन्त्यमा <code>;</code> राख्नुहोस्</li>
          <li>हरेक नियम ब्लकमा <code>{ }</code> प्रयोग गर्नुपर्छ</li>
        </ul>
        <p><em>🧠 उधाहरण:</em> "h1 विद्यार्थी हो, नियम: निलो जुत्ता लगाउँ।"</p>`
    },
    {
      id: "css-lesson-5",
      title: "🧩 साझा CSS Properties",
      content: `
        <table>
          <tr>
            <th>Property</th><th>के परिवर्तन गर्छ?</th><th>उदाहरण</th>
          </tr>
          <tr><td>color</td><td>लेखको रङ</td><td><code>color: red;</code></td></tr>
          <tr><td>background</td><td>पृष्ठभूमि रंग/छवि</td><td><code>background: yellow;</code></td></tr>
          <tr><td>font-size</td><td>लेखको आकार</td><td><code>font-size: 20px;</code></td></tr>
          <tr><td>text-align</td><td>लेखको स्थान</td><td><code>text-align: center;</code></td></tr>
          <tr><td>border</td><td>सीमा बनाउँछ</td><td><code>border: 1px solid black;</code></td></tr>
          <tr><td>padding</td><td>भित्रको स्थान</td><td><code>padding: 10px;</code></td></tr>
          <tr><td>margin</td><td>बाहिरको स्थान</td><td><code>margin: 10px;</code></td></tr>
        </table>
        <p><em>🧠 उधाहरण:</em> Padding = झोलामा राखेको वस्तुको वरिपरि स्पेस<br>
        Margin = दुई झोला बीचको दूरी<br>
        Border = झोलाको फूल्डर जस्तो</p>`
    },
    {
      id: "css-lesson-6",
      title: "🧩 CSS Selectors",
      content: `
        <p>Selector भन्नाले हुन्छ: तपाईं **कसलाई** स्टाइल गर्न चाहनुहुन्छ।</p>
        <p>साझाselectors:</p>
        <ul>
          <li><code>h1</code>, <code>p</code>, <code>div</code> – ट्याग</li>
          <li><code>.class</code> – डटबाट सुरु</li>
          <li><code>#id</code> – ह्यासबाट सुरु</li>
        </ul>
        <pre><code>h1 { color: green; }
.red-text { color: red; }
#main-box { color: blue; }</code></pre>
        <p><em>🧠 उधाहरण:</em> शिक्षक = selector, नियम = style, विद्यार्थीहरू = HTML तत्वहरू</p>`
    },
    {
      id: "css-lesson-7",
      title: "🧩HTML र CSS कसरी जोड्ने?",
      content: `
        <p>External CSS प्रयोग गर्न:</p>
        <ol>
          <li><code>style.css</code> नामको फाइल बनाउनुहोस्</li>
          <li>CSS नियम त्यहाँ लेख्नुहोस्</li>
          <li>HTML को <code>&lt;head&gt;</code> भित्र यो थप्नुहोस्:</li>
        </ol>
        <pre><code>&lt;link rel="stylesheet" href="style.css"&gt;</code></pre>
        <p>✅ हुन्छ! HTML र CSS अब मिलेर काम गर्छन्।</p>`
    },
    {
      id: "css-lesson-8",
      title: "🧩 CSS रंग (Colors)",
      content: `
        <p>रंग दिने तरिका:</p>
        <ul>
          <li>नाम – <code>color: red;</code></li>
          <li>HEX – <code>color: #ff0000;</code></li>
          <li>RGB – <code>color: rgb(255, 0, 0);</code></li>
        </ul>
        <p>✏️ परीक्षा सजिलो राख्न:<br>
        बस “blue”, “green”, “orange” जस्ता नाम प्रयोग गर्नुहोस्।</p>`
    },
    {
      id: "css-lesson-box-model",
      title: "🧩 CSS Box Model (सारांशमा)",
      content: `
        <p><strong>CSS Box Model</strong> बताउँछ: वेबपेजमा रहेको प्रत्येक वस्तु एक <strong>बक्स</strong> भित्र हुन्छ — जसको भित्र र बाहिर स्पेस हुन्छ।</p>
        <p><em>🧠 जस्तो तपाईंको टिफिन बक्स:</em></p>
        <table>
          <tr><th>Part</th><th>साँचो जीवन</th><th>वेबपेजमा</th></tr>
          <tr><td><strong>Content</strong></td><td>रोटी वा खाना</td><td>लेख, तस्बिर आदि</td></tr>
          <tr><td><strong>Padding</strong></td><td>भित्रको रैपर</td><td>बक्सको भित्र स्पेस</td></tr>
          <tr><td><strong>Border</strong></td><td>टिफिनको पर्खाल</td><td>बक्स चिरिएको लाइन</td></tr>
          <tr><td><strong>Margin</strong></td><td>बक्स वरिपरि स्पेस</td><td>बक्सको बाहिर स्पेस</td></tr>
        </table>
        <p>✅ <strong>छिटो कोड:</strong></p>
        <pre><code>.box {
  margin: 20px;        /* बाहिरको दूरी */
  border: 2px solid black;  /* बक्सको पर्खाल */
  padding: 10px;       /* भित्रको स्पेस */
}</code></pre>`
    }
  ]
},
{
  id: "programming-basics",
  title: " कम्प्युटर प्रोग्रामिङ परिचय",
  icon: "🧠",
  lessons: [
    {
      id: "programming-lesson-1",
      title: "🧩 कम्प्युटर प्रोग्रामिङ के हो?",
      content: `
        
       📘 कम्प्युटर प्रोग्रामिङ भनेको केवल <strong>कम्प्युटरलाई निर्देशन दिनु</strong> हो—ताकि ति तपाईं चाहेको काम गर्दोस्।</p>
        <p>तपाईं गुरु, कम्प्युटर विद्यार्थी। तपाईंले बनाउनुहुन्छ सानो–सानो कदमहरू—जस्तै नाश्ताको विधि—र कम्प्युटर ती सबै <strong>एक–एक गरी पालना गर्छ</strong>।</p>
        <p>✅ सही निर्देशन लेख्नु भयो भने कम्प्युटर ठिक काम गर्छ।<br>
        ❌ नत्र, कम्प्युटर अलमलिन्छ।</p>
        <p>यो परिभाषा अनुसार, “प्रोग्रामिङ भनेको कम्प्युटरले पालना गर्न मिल्ने चरणहरू लेख्नु” भन्ने हो </p>

        <h3>🧠 दैनिक तालिका: चिया बनाउने प्रक्रिया 🍵</h3>
        <ol>
          <li>पानी उमाल्नुहोस्</li>
          <li>चिया पात राख्नुहोस्</li>
          <li>चिनी थप्नुहोस्</li>
          <li>दूध हाल्नुहोस्</li>
          <li>मिसाएर पस्कनुहोस्</li>
        </ol>
        <p>यदि भाइले यो सबै विधि पालना गर्छ भने चिया बन्यो। <strong>त्यस्तै, तपाईंले कम्प्युटरलाई निर्देशन दिनुभयो भने—ऊ पालना गर्छ र काम पुरा गर्छ।</strong></p>
`
    },

  {
    id: "programming-lesson-1",
    title: "🧩 program?",
    content: `
     
      <p><strong>कम्प्युटर कार्यक्रम (Program)</strong> भनेको एउटै काम गर्ने पूरा ‘योजना’ (plan) हो।</p>
      <p>र,</p>
      <p><strong>हरेक योजनामा साना–सानो काम हुन्छन्, जसलाई हामी ‘निर्देश’ (instructions) भन्छौं।</strong></p>

      <h3>🧠 बुझाउने तरिका (चिया बनाउने उदाहरण 🍵)</h3>
      <p>कल्पना गरौं, तपाईँले चिया बनाउनु पर्नेछ:</p>
      <ul>
        <li><strong>चिया बनाउने पूरा प्रक्रिया</strong> (सुरुदेखि अन्त्यसम्म) नै एउटा <strong>‘कम्प्युटर कार्यक्रम’</strong> हो।</li>
      </ul>
      <p>अब चिया बनाउन के‑के गर्नुहुन्छ?</p>
      <ol>
        <li>'पानी उमाल्नुहोस्' – यो एउटा <strong>‘निर्देश’</strong> हो।</li>
        <li>'चियापत्ती राख्नुहोस्' – यो अर्को <strong>‘निर्देश’</strong> हो।</li>
        <li>'चिनी हाल्नुहोस्' – यो पनि एउटा <strong>‘निर्देश’</strong> हो।</li>
        <li>'दूध हाल्नुहोस्' – यो पनि एउटा <strong>‘निर्देश’</strong> हो।</li>
      </ol>

      <p><strong>यसरी, धेरै साना 'निर्देश' (instructions) हरू मिलेर एउटा पूरा 'कम्प्युटर कार्यक्रम' (Program) बन्छ।  
      कम्प्युटरले तपाईँले दिएको यही 'निर्देश' हरूको सूची (list) लाई पालना गर्छ र काम पूरा गर्छ।</strong></p>
    `
  },

    {
      id: "programming-lesson-2",
      title: "🧩  कम्प्युटरले कुन भाषा बुझ्छ?",
      content: `
        <p>तपाईं नेपाली वा अंग्रेजीमा कम्प्युटरसँग कुरा गर्न सक्नुहुन्न।</p>
        <p>कम्प्युटरले मात्र बुझ्छ विशेष भाषा—जस्तै QBASIC, C, Python आदि।</p>
        <p>यी भाषाहरूलाई भन्छौं <strong>प्रोग्रामिङ भाषाहरू</strong>। तपाईंले यी मध्ये एउटा सिक्नु पर्छ, कम्प्युटरसँग कुरा गर्नका लागि—जस्तै अंग्रेजी वा नेपाली सिक्दै साथीहरूसँग बोल्न प्रयोग गर्नुहुन्छ।</p>
        <p>यसले प्रमाणित गर्छ: प्रोग्रामिङ भनेको “कम्प्युटरलाई चलाउन मिल्ने भाषा” प्रयोग गरेर निर्देशनहरू लेख्नु हो</p>

        <h3>🧠 उधाहरण: विदेशीसँग कुरा</h3>
        <p>यदि एउटा पर्यटक अंग्रेजी मात्र बोल्छ र तपाईं नेपाली मात्र—तपाईंलाई कुराकानी गर्न साझा भाषा चाहिन्छ। <strong>प्रोग्रामिङ त्यो साझा भाषा हो, कम्प्युटरसँग कुराकानी गर्न।</strong></p>`
    },
    {
      id: "programming-lesson-3",
      title: "🧩  प्रोग्रामिङमा के गर्छौ?",
      content: `
        <p>प्रत्येक प्रोग्राममा तपाईंले मात्र तीन कुरा गर्नुहुन्छ:</p>
        <ol>
          <li><strong>डेटा दिनुहोस् (Input)</strong> — जस्तै अंक वा नाम</li>
          <li><strong>डेटा प्रयोग गरेर काम गर्नुहोस् (Process)</strong></li>
          <li><strong>नतिजा देखाउनुहोस् (Output)</strong></li>
        </ol>

        <h3>🧠 उदाहरण: क्याल्कुलेटर</h3>
        <p>तपाईंले लेख्नुहुन्छ <code>5 + 3</code></p>
        <ul>
          <li><strong>5</strong> र <strong>3</strong> = इनपुट</li>
          <li><strong>+</strong> = प्रोसेस (गणना)</li>
          <li><strong>8</strong> = आउटपुट</li>
        </ul>
        <p>त्यस्तै, प्रोग्रामिङ नै यही हो—इनपुट, प्रोसेस, आउटपुट! </p>`
    },

    
  ]
}    
         ]
      },
      grade10: {
        title: "कक्षा १० कम्प्युटर विज्ञान",
        topics: [
          
           {
  "id": "qbasic-basics",
  "title": "🎮 QBASIC सजिलो बनाउनुहोस्",
  "icon": "🧱",
  "lessons": [
    {
      "id": "qbasic-intro",
      "title": "QBASIC = तपाइँको कम्प्युटरको खेलौना बाकस!",
      "content": `
        <h2>QBASIC = तपाइँको कम्प्युटरको खेलौना बाकस! 🎁</h2>
        <p>QBASIC एउटा <strong>भाषा</strong> हो, अंग्रेजी वा नेपाली जस्तै, तर यो मानिस कहाँ होइन, <strong>कम्प्युटर</strong>सँग बोल्छ।</p>

        <h3>🔧 वास्तविक कोड उदाहरणहरू</h3>
        <ul>
          <li><code>PRINT "नमस्ते"</code> → कम्प्युटरले लेख्छ <strong>नमस्ते</strong></li>
          <li><code>PRINT 5+3</code> → कम्प्युटरले गणना गर्छ र देखाउछ <strong>8</strong></li>
        </ul>

        <h3>🚀 यो प्रयास गर्नुहोस्:</h3>
        <ol>
          <li>
           <img src="./images/1(2).png" class="w-full md:w-3/4 lg:w-1/2 mx-auto rounded-lg shadow-md" alt="Your Snapshot of Changunarayan">
          QBASIC खोल्नुहोस् (Start → टंक्नुहोस् <kbd>QBASIC</kbd> → प्रेस गर्नुहोस् <kbd>Enter</kbd>)</li>
          <li>यस कोड टाइप गर्नुहोस्: <code>PRINT "मेरो नाम _____ हो"</code></li>
          <li>प्रेस गर्नुहोस् <kbd>F5</kbd> → ✨ तपाइँको नाम स्क्रीनमा देखिन्छ!</li>
        </ol>
      `
    },
    {
      "id": "qbasic-break-code",
      "title": "कोड तोड्नुहोस् (जस्तै टिफिन बाकस!)",
      "content": `
        <h2>कोड तोड्नुहोस् 🍱</h2>
        <p>प्रत्येक QBASIC आदेशलाई टिफिनको बाकस जस्तै सम्झनुहोस् जसमा बिभाग हुन्छन्।</p>

        <h3>📦 कोडका भागहरू:</h3>
        <table>
          <tr><th>भाग</th><th>वर्णन</th><th>उदाहरणहरू</th></tr>
          <tr><td>COMMAND</td><td>कार्य शब्द</td><td>PRINT, CLS, INPUT</td></tr>
          <tr><td>DATA</td><td>के प्रयोग गर्ने/देखाउने</td><td>"नमस्ते", 5+3, X$</td></tr>
        </table>

        <h3>🔍 उदाहरण विश्लेषण:</h3>
        <ul>
          <li><code>PRINT "HI"</code> → <strong>PRINT</strong> आदेश हो, <strong>"HI"</strong> डेटा हो → स्क्रीनमा HI देखिन्छ</li>
          <li><code>CLS</code> → स्क्रीन खाली गर्छ</li>
        </ul>

        <h3>⚠️ सामान्य गल्ती:</h3>
        <p><code>PRNT "HELLO"</code> ❌ (अगल्ति स्पेलिङ)<br><code>PRINT "HELLO"</code> ✅ (सही स्पेलिङ)</p>
      `
    },
    {
      "id": "qbasic-syntax",
      "title": "कम्प्युटरका ट्राफिक नियम (सिन्ट्याक्स)",
      "content": `
        <h2>कम्प्युटरका ट्राफिक नियम 🚦 (Syntax)</h2>
        <p>सिन्ट्याक्स भनेको व्याकरण जस्तै हो। कम्प्युटरलाई ठीक साँचो हुनु पर्छ!</p>

        <h3>📏 QBASIC सिन्ट्याक्स नियमहरू:</h3>
        <ul>
          <li>✅ स्पेलिङ महत्त्वपूर्ण छ: <code>PRINT</code> प्रयोग गर्नुहोस्, <code>PRNT</code> होइन</li>
          <li>✅ उद्धरण चिह्न प्रयोग गर्नुहोस्: <code>PRINT "HELLO"</code></li>
          <li>✅ गणितमा कुनै स्पेस नराख्नुहोस्: <code>PRINT 5+3</code></li>
        </ul>

        <h3>🧠 अभ्यास प्रश्न:</h3>
        <p>धेरै जाँच गर्नुहोस् कुन सही हो?</p>
        <ul>
          <li><strong>A:</strong> <code>PRINT "BYE"</code> ✅</li>
          <li><strong>B:</strong> <code>PRINT BYE</code> ❌</li>
          <li><strong>C:</strong> <code>PRNT "BYE"</code> ❌</li>
        </ul>
      `
    },
    {
      "id": "qbasic-mini-project",
      "title": "सानो प्रोजेक्ट – कम्प्युटरसँग कुरा गर्नुहोस्!",
      "content": `
        <h2>सानो प्रोजेक्ट – कम्प्युटरसँग कुरा गर्नुहोस्! 💬</h2>
        <p>यस प्रोजेक्टले कम्प्युटरलाई तपाईंको नाम सोध्न र जवाफ दिन मद्दत गर्छ।</p>

        <h3>📄 कोड:</h3>
        <pre><code>
CLS
INPUT "तपाईंको नाम के हो? "; N$
PRINT "नमस्ते "; N$; "! तपाईं शानदार हुनुहुन्छ!"
        </code></pre>

        <h3>🔄 यसलाई परिमार्जन गर्नुहोस्:</h3>
        <ul>
          <li><code>शानदार</code> लाई <code>कूल</code>, <code>बुद्धिमान</code>, वा <code>सबभन्दा राम्रो</code> मा परिवर्तन गर्नुहोस्</li>
        </ul>
      `
    },
    {
      "id": "qbasic-tips",
      "title": "धैर्यपूर्वक सिक्नेहरूका लागि नोटहरू",
      "content": `
        <h2>धैर्यपूर्वक सिक्नेहरूका लागि नोटहरू 🐢</h2>
        <p>धेरै बिस्तारै अगाडि बढ्नुहोस् र एक–एक गर्दै प्रयास गर्नुहोस्!</p>

        <ul>
          <li>⏸️ अलमल परेको बेला पछिल्लो २ लाइन फेरि पढ्नुहोस्</li>
          <li>📝 कोड ठीक–ठीक टिप्नुहोस् र चलाउनुहोस्</li>
          <li>🤝 साथी वा शिक्षकलाई सोध्नुहोस् – हार नमान्नुहोस्!</li>
        </ul>
      `
    }
  ]
},

          {
           id:"DBMS",
           title:"डाटाबेस व्यवस्थापन प्रणाली",
           icon:"",
           lessons:[
             {
               id:"Basics",
               title:"Dbms intro",
               content:`
<h3>🔹 १. DBMS भनेको के हो? कथा शैलीमा बुझौं</h3>
    <p>कल्पना गर्नुहोस् — तपाईंको स्कूलमा ५०० विद्यार्थी छन्। सबै विवरण कागजमा छ भने हेर्न गाह्रो पर्छ।</p>
    <p>तर एउटै रेजिष्टरमा नाम, रोल, अंक लेख्यो भने सजिलो हुन्छ।</p>
    <p>👉 <strong>रेजिष्टर = डाटाबेस</strong><br><strong>शिक्षक = DBMS (software)</strong></p>

    <h3>🔹 २. Database भन्नाले के बुझिन्छ?</h3>
    <p>📘 Database भनेको कम्प्युटरमा तालिका जस्तो संरचना हो।</p>

    <h3>🔹 ३. DBMS भनेको के हो?</h3>
    <p>📘 DBMS (Database Management System) भनेको यस्तो software हो जसले:</p>
    <ul>
      <li>Database बनाउन</li>
      <li>डाटा राख्न/हटाउन</li>
      <li>Search गर्न र प्रिन्ट गर्न सहयोग गर्छ</li>
    </ul>

    <h3>🔹 ४. DBMS Software हरू</h3>
    <ul>
      <li>Microsoft Access ✔️</li>
      <li>MySQL</li>
      <li>Oracle</li>
      <li>PostgreSQL</li>
      <li>DB2</li>
    </ul>


               
               `
             },
             {
              id:"create",
              title:"Database बनाउने तरिका",
              content:`
              <h3>🔹 ५. MS Access मा Database बनाउने तरिका</h3>
    <ol>
      <li>MS Access खोल्ने → Start बाट खोज्ने</li>
      <li>Blank Database → नाम राख्ने → Create</li>
      <li>Design View → Table को नाम राख्ने: StudentTable</li>
      <li>Field थप्ने:
        <table>
          <tr><th>Field Name</th><th>Data Type</th></tr>
          <tr><td>RollNo</td><td>AutoNumber (Primary Key)</td></tr>
          <tr><td>Name</td><td>Short Text</td></tr>
          <tr><td>Class</td><td>Number</td></tr>
          <tr><td>Marks</td><td>Number</td></tr>
        </table>
      </li>
      <li>Primary Key सेट गर्ने</li>
      <li>Save गरेर Datasheet मा डाटा राख्ने</li>
      <li>Form बनाउने</li>
      <li>Query बनाउने → Criteria >80 राख्ने</li>
      <li>Report बनाउने → Field छानेर Finish</li>
    </ol>

    <h3>🔍 परिभाषा (Simple Nepali)</h3>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>Field</td><td>तालिकाको Column</td></tr>
      <tr><td>Record</td><td>Row</td></tr>
      <tr><td>Table</td><td>सबै विवरण भएको तालिका</td></tr>
      <tr><td>Primary Key</td><td>Unique पहिचान</td></tr>
      <tr><td>Query</td><td>Search/filter गर्न प्रयोग</td></tr>
      <tr><td>Form</td><td>फारम</td></tr>
      <tr><td>Report</td><td>प्रिन्ट योग्य नतिजा</td></tr>
    </table>
              `
             }
           ]
          },
          { 
            id:"Modular programming",
            title:"मोड्युलर प्रोग्रामिङ",
            icon:"🛠️",
            lessons:[
              {
                id:"introduction",
                title:"मोड्युलर प्रोग्रामिङ",
                content:`
                 <h3>🔹 १. कथा सुन्दा बुझिन्छ – Modular Programming</h3>
    <p>👧 ठूलो साइन्स प्रोजेक्ट बनाउन मिलेर काम गर्नु पर्‍यो:</p>
    <ul>
      <li>एउटाले बोर्ड रंगाउँछ</li>
      <li>अर्कोले कागज काट्छ</li>
      <li>लेबल टाँस्ने अरू</li>
    </ul>
    <p><strong>यही हो Modular Programming</strong>: <em>ठूलो कामलाई सानो सानो भागमा बनाएर काम पुरा गर्ने तरिका।</em></p>

    <h3>🔹 २. किन भाग–भागमा बनाउने?</h3>
    <ul>
      <li>बुझ्न सजिलो हुन्छ</li>
      <li>जाँच्न, सुधार्न सजिलो</li>
      <li>पुनः प्रयोग गर्न मिल्ने</li>
      <li>ग्रुप वर्क सम्भव!</li>
    </ul>
          
                                `
              },
              {
                id:"modules",
                title:"दुई प्रकारका Modules",
                content:`
                <h3>🔹 ३. QBASIC मा दुई प्रकारका Modules</h3>
    <table>
      <tr><th>मोड्युल</th><th>काम</th></tr>
      <tr><td>Sub Procedure</td><td>काम गर्छ पर जवाफ दिंदैन</td></tr>
      <tr><td>Function Procedure</td><td>जवाफ ल्याउंछा बाटाओछ</td></tr>
    </table>

    <h3>🔧 Sub Procedure कोड</h3>
    <pre><code>DECLARE SUB Series()
CALL Series
END

SUB Series
  X = 1
  Y = 1
  FOR Z = 1 TO 4
    PRINT X;
    Y = Y + 1
    X = X * 10 + Y
  NEXT Z
END SUB</code></pre>

    <h3>🔹 Function Procedure कोड</h3>
    <pre><code>DECLARE FUNCTION area(l, b)
CLS
INPUT "लम्बाइ लेख: ", l
INPUT "चौडाइ लेख: ", b
PRINT "क्षेत्रफल = "; area(l, b)
END

FUNCTION area(l, b)
  area = l * b
END FUNCTION</code></pre>

    <h3>📚 जन्ने झास्ने शब्दहरूका</h3>
    <table>
      <tr><th>शब्द</th><th>अर्थ</th></tr>
      <tr><td>Main Module</td><td>मुख्य प्रोग्राम</td></tr>
      <tr><td>Sub Module</td><td>छोटो काम गर्ने टुक्रा</td></tr>
      <tr><td>Actual Parameter</td><td>कोड मा गयका मूल्य</td></tr>
      <tr><td>Formal Parameter</td><td>नाममात्र प्रयोग घोषणा</td></tr>
      <tr><td>Local Variable</td><td>चार भित्र मात्रा</td></tr>
      <tr><td>Global Variable</td><td>COMMON SHARED द्वारा</td></tr>
    </table>   
                `
              }
            ]
          },
          {
            id:"File-Handling",
            title:"qbasic मा फाइल ह्यान्डलिङ",
            icon:"📁",
            lessons:[
              {
                id:"file-handling",
                title:"🎯 १. फाइल ह्यान्डलिङ के हो?",
                content:`
                <h3>🎯  फाइल ह्यान्डलिङ के हो? (भाग्न नसक्ने सजिलो उदाहरण)</h3>
  <p>
         तपाईंले <strong>डायरी</strong> लेख्नुभयो, तर बिर्सनुभयो। अर्को दिन खोल्दा <strong>खाली छ</strong>! 😢<br />
    👉 <strong>फाइल ह्यान्डलिङ</strong> भनेको कम्प्युटरलाई <strong>"याद गर्न लगाउने तरिका"</strong> हो।
  </p>
  <ul>
    <li>विद्यालयमा विद्यार्थीको नाम, अंक <strong>कागजमा लेख्नु</strong> → <strong>फाइलमा लेख्नु</strong></li>
    <li>पढाइ सकिएपछि <strong>कापी बिर्सिने</strong> → <strong>कम्प्युटरले नबिर्सने</strong></li>
  </ul>

  <h3>📂 २. फाइलका ३ प्रकार (मोड) – राम्रोसँग याद गर्ने तरिका</h3>
  <table>
    <thead>
      <tr>
        <th>मोड</th>
        <th>काम</th>
        <th>उदाहरण</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>OUTPUT</code></td>
        <td>नयाँ फाइल बनाउनु</td>
        <td>नयाँ कापीमा पहिलो पेज लेख्नु</td>
      </tr>
      <tr>
        <td><code>INPUT</code></td>
        <td>पुरानो फाइल पढ्नु</td>
        <td>पढाइ सकिएको कापी हेर्नु</td>
      </tr>
      <tr>
        <td><code>APPEND</code></td>
        <td>फाइलमा थप गर्नु</td>
        <td>कापीमा अर्को पेज जोड्नु</td>
      </tr>
    </tbody>
  </table>
  <p><strong>⚠️ याद गर्ने ट्रिक:</strong></p>
  <ul>
    <li><strong>OUTPUT = O</strong> → "ओपन नयाँ"</li>
    <li><strong>INPUT = I</strong> → "इन्टर पुरानो"</li>
    <li><strong>APPEND = A</strong> → "अझै थप्ने"</li>
  </ul>

                `
              },
              {
                id: "commands",
                title: "जरुरी कमाण्डहरू",
                content: `
                <h2>🛠️  जरुरी कमाण्डहरू (OPEN, WRITE, INPUT, CLOSE)</h2>

  <h3>📌 फाइल लेख्ने (OUTPUT)</h3>
        <pre><code>OPEN "student.txt" FOR OUTPUT AS #1
      WRITE #1, "राम", 45, 67
      CLOSE #1</code></pre>

  <h3>📌 फाइल पढ्ने (INPUT)</h3>
        <pre><code>OPEN "student.txt" FOR INPUT AS #1
      INPUT #1, name$, m1, m2
      CLOSE #1
      PRINT "नाम: "; name$</code></pre>

          <h3>📌 फाइलमा थप्ने (APPEND)</h3>
          <pre><code>OPEN "student.txt" FOR APPEND AS #1
        WRITE #1, "हरि", 78, 89
        CLOSE #1</code></pre>

                `
              },
              {
                id: "Filemgmt",
                title: "फाइल व्यवस्थापन",
                content: `
<h2>🗂️ ४. फाइल व्यवस्थापन (File Management – नयाँ भाग)</h2>

  <table>
    <thead>
      <tr>
        <th>कमाण्ड</th>
        <th>काम</th>
        <th>उदाहरण</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td><code>FILES</code></td>
        <td>सबै फाइल देखाउने</td>
        <td><code>FILES</code></td>
      </tr>
      <tr>
        <td><code>NAME</code></td>
        <td>फाइलको नाम बदल्ने</td>
        <td><code>NAME "old.txt" AS "new.txt"</code></td>
      </tr>
      <tr>
        <td><code>KILL</code></td>
        <td>फाइल मेट्ने</td>
        <td><code>KILL "temp.txt"</code></td>
      </tr>
      <tr>
        <td><code>MKDIR</code></td>
        <td>नयाँ फोल्डर बनाउने</td>
        <td><code>MKDIR "DATA"</code></td>
      </tr>
      <tr>
        <td><code>CHDIR</code></td>
        <td>फोल्डर परिवर्तन गर्ने</td>
        <td><code>CHDIR "DATA"</code></td>
      </tr>
      <tr>
        <td><code>RMDIR</code></td>
        <td>फोल्डर मेट्ने</td>
        <td><code>RMDIR "DATA"</code></td>
      </tr>
    </tbody>
  </table>
  <p><strong>⚠️ ध्यान दिनुहोस्:</strong></p>
  <ul>
    <li><code>KILL</code> र <code>RMDIR</code> ले <strong>सबै हटाउँछ</strong> (रिकभर गर्न सकिदैन!)</li>
    <li><code>NAME</code> गर्दा <strong>फाइल अवश्य हुनुपर्छ</strong></li>
  </ul>

  <h2>🚫 ५. गल्तीहरू र समाधान (नबुझेका विद्यार्थीका लागि)</h2>

  <h3>❌ गल्ती 1: <code>OPEN</code> नगरी <code>WRITE</code> गर्ने</h3>
  <pre><code>WRITE #1, "राम"  ' ❌ ERROR!</code></pre>
  <p>✅ ठीक तरिका:</p>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "राम"
CLOSE #1</code></pre>

  <h3>❌ गल्ती 2: <code>CLOSE</code> बिर्सने</h3>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "Hello"  ' ❌ CLOSE बिर्सियो!</code></pre>
  <p>✅ ठीक तरिका:</p>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "Hello"
CLOSE #1</code></pre>

  <h3>❌ गल्ती 3: <code>INPUT</code> मोडमा <code>WRITE</code> गर्ने</h3>
  <pre><code>OPEN "file.txt" FOR INPUT AS #1
WRITE #1, "नमस्ते"  ' ❌ ERROR!</code></pre>
  <p>✅ ठीक तरिका:</p>
  <pre><code>OPEN "file.txt" FOR OUTPUT AS #1
WRITE #1, "नमस्ते"
CLOSE #1</code></pre>


                `
              },
              {
                id: "exam",
                title: " परीक्षामा आउने प्रश्नहरू",
                content: `
<h2>📝 ६. परीक्षामा आउने प्रश्नहरू (अभ्यास गर्नुहोस्!)</h2>

  <h3>प्रश्न 1: विद्यार्थीको नाम, ठेगाना, उमेर लेख्ने प्रोग्राम लेख्नुहोस्।</h3>
  <pre><code>OPEN "student.txt" FOR OUTPUT AS #1
INPUT "नाम: ", name$
INPUT "ठेगाना: ", address$
INPUT "उमेर: ", age
WRITE #1, name$, address$, age
CLOSE #1</code></pre>

  <h3>प्रश्न 2: फाइलबाट डाटा पढेर देखाउने प्रोग्राम लेख्नुहोस्।</h3>
  <pre><code>OPEN "student.txt" FOR INPUT AS #1
INPUT #1, name$, address$, age
PRINT "नाम: "; name$
PRINT "ठेगाना: "; address$
PRINT "उमेर: "; age
CLOSE #1</code></pre>

  <h2>💡 ७. याद गर्ने टिप्स (कम समयमा धेरै याद गर्न)</h2>
  <ul>
    <li><strong>OPEN → WRITE/INPUT → CLOSE</strong> (क्रम नबिर्सनु!)</li>
    <li><code>OUTPUT</code> = नयाँ लेख्ने, <code>INPUT</code> = पढ्ने, <code>APPEND</code> = थप्ने</li>
    <li><code>#1</code> सधैं OPEN, WRITE, INPUT, CLOSE मा राख्ने</li>
    <li><code>KILL</code> र <code>NAME</code> ले फाइल हटाउँछ/बदल्छ</li>
  </ul>

                `
              }
            ]
          },
          {
            id:"intro-to-c",
            title:" Structured Programming",
            icon:"💻",
            lessons:[
{
            id:"cprogramming",
            title:"Structured Programming in C",
            content:`
            <h2>Structured Programming in C – **Super Simple Version**</h2>
    <p>🎯 C भाषा प्रति डराउने, सिङ्कटमा हराउने, र कहाँबाट सुरु गर्ने थाहा नपाउने विद्यार्थीहरूको लागि</p>

    <h3>🔹 १. Structured Programming भनेको के हो?</h3>
    <p>📘 Structured programming भनेको:</p>
    <blockquote>
      प्रोग्राम लेख्दा <strong>step-by-step</strong>, मिलाएर, बुझिने तरिकाले लेख्ने शैली हो।
    </blockquote>
    <p>👉 जस्तै:</p>
    <ul>
      <li>पहिले उठ्ने</li>
      <li>अनि दाँत माझ्ने</li>
      <li>अनि स्कूल जाने</li>
    </ul>
    <p>(सिधा! एकै पटक सब कुरा होइन)</p>
    <p><strong>C भाषा (C Language) पनि यस्तो क्रमानुसार चल्ने भाषा हो — त्यसैले यसलाई Structured Language भनिन्छ।</strong></p>
            `
          },
          {
            id:"why",
            title:" किन Structured Programming चाहिन्छ?",
            content:`
            
    <h3>🔹 २. किन Structured Programming चाहिन्छ?</h3>
    <p>✅ प्रोग्राम बुझ्न सजिलो हुन्छ</p>
    <p>✅ गल्ती फेला पार्न सजिलो</p>
    <p>✅ सानो–साना भागमा लेख्न सकिन्छ</p>
    <p>✅ कोड पुन: प्रयोग गर्न सकिन्छ</p>
    <p>✅ धेरैजनाले मिलेर काम गर्न मिल्छ</p>
    <p>👉 ठुलो कामलाई सानो–सानो भागमा मिलाएर गर्नु <strong>समझदारी हो।</strong></p>

    <h3>🔹 ३. एउटा मुख्य Rule = Single Entry, Single Exit</h3>
    <p>यसको अर्थ:</p>
    <ul>
      <li>एकटा block (जस्तै: <code>if</code>, <code>while</code>, <code>function</code>) मा</li>
      <li>👉 <strong>एकै ठाउँबाट भित्र पस्यो</strong></li>
      <li>👉 <strong>एकै ठाउँबाट बाहिर निस्कियो</strong></li>
    </ul>
    <p>❌ कुद्ने, “goto” जस्ता हल्लिने style allowed छैन।</p>
            `
           
          },
          {
          id:"used",
          title:" ३ Structure",
          content:`
           <h3>🔹 ४. Structured Programming मा प्रयोग हुने ३ Structure</h3>
    <h4>(१) Sequence (क्रम अनुसार)</h4>
    <pre><code>a = 5;
b = 6;
sum = a + b;</code></pre>
    <p>🧠 काम Step-by-step: १ → २ → ३</p>

    <h4>(२) Selection (चुनौटि / निर्णय)</h4>
    <pre><code>if (marks >= 40)
   printf("Pass");
else
   printf("Fail");</code></pre>
    <p>🧠 "यदि पास भयो भने... होइन भने..."</p>

    <h4>(३) Looping (घुमाइ / दोहोरिने काम)</h4>
    <pre><code>for (i = 1; i <= 10; i++)
   printf("%d", i);</code></pre>
    <p>🧠 एकै काम १० पटक दोहोर्याउनु — जस्तै: “१० पटक ताली बजाउने”</p>

    <h3>🔹 ५. C प्रोग्राम कस्तो देखिन्छ?</h3>
    <pre><code>#include &lt;stdio.h&gt;

int main() {
   // Variable घोषणा
   // काम लेख्ने ठाउँ
   return 0;
}</code></pre>
    <p>📘 विद्यार्थीलाई यस्तो चित्र बनाउन भन्नुहोस्:</p>
    <pre><code>[ #include (Header) ]
[ main() function ]
     |
     |-- Variable घोषणा
     |-- Input, हिसाब
     |-- Output</code></pre>
    <p>👉 main() भनेको <strong>प्रोग्राम सुरु हुने ठाउँ</strong> हो।</p>

    <h3>🔹 ६. उदाहरण: दुई अंकको योग गर्ने प्रोग्राम</h3>
    <pre><code>#include &lt;stdio.h&gt;
void main() {
   int a, b, sum;
   printf("दुई अंक लेख्नुहोस्: ");
   scanf("%d%d", &a, &b);
   sum = a + b;
   printf("योगफल = %d", sum);
}</code></pre>
    <p>🧠 बिस्तारै सम्झाऔं:</p>
    <ul>
      <li><code>#include</code> → कम्प्युटरलाई भन्नुहोस् कुन लाइब्रेरी चाहिन्छ</li>
      <li><code>int a, b, sum;</code> → तीन वटा box बनाइयो</li>
      <li><code>scanf()</code> → मान लियो</li>
      <li><code>sum = a + b;</code> → हिसाब गर्‍यो</li>
      <li><code>printf()</code> → देखायो</li>
    </ul>

          
          `
          },
          {
            id:"datatype",
            title:"Datatype",
            content:`
             <h3>🔹 ७. C मा प्रयोग हुने मुख्य Data Type</h3>
    <table>
      <tr><th>Data Type</th><th>के राखिन्छ?</th><th>उदाहरण</th></tr>
      <tr><td><code>int</code></td><td>पूर्ण संख्या (पूरा अंक)</td><td>5, 100, -32</td></tr>
      <tr><td><code>float</code></td><td>दशमलव संख्या</td><td>3.14, 2.5</td></tr>
      <tr><td><code>char</code></td><td>अक्षर/एकवटा क्यारेक्टर</td><td>'A', 'z', '5'</td></tr>
    </table>
    <p>🧠 <code>int</code> → अंक, <code>float</code> → दशमलव, <code>char</code> → अक्षर</p>

    <h3>🔹 ८. C का केही महत्वपूर्ण Keywords (सबै साना अक्षरमा)</h3>
    <p>👉 याद गर्नैपर्ने शब्दहरू:</p>
    <p><code>int</code>, <code>float</code>, <code>char</code>, <code>if</code>, <code>else</code>, <code>for</code>, <code>while</code>, <code>switch</code>, <code>return</code>, <code>void</code></p>
    <p>📌 C मा <code>Main</code> होइन <code>main</code> लेख्नुपर्छ — <strong>case-sensitive</strong> हुन्छ। </p>

    <h3>❌ विद्यार्थीले गर्ने सामान्य गल्तीहरू</h3>
    <table>
      <tr><th>गल्ती</th><th>समाधान</th></tr>
      <tr><td>Missing semicolon <code>;</code></td><td>हरेक लाइनपछि <code>;</code> लेख्नैपर्छ</td></tr>
      <tr><td>Capital ले लेख्नु (<code>Main</code>)</td><td>सानो अक्षर: <code>main</code> लेख्नुपर्छ</td></tr>
      <tr><td>Wrong format in <code>scanf()</code></td><td>सही प्रकार प्रयोग गर्नुहोस् (<code>"%d"</code>)</td></tr>
      <tr><td>Variable गलत नाम राख्नु</td><td>जस्तै नाम फेरि प्रयोग गर्नुहोस्</td></tr>
    </table>

    <h3>✏️ परीक्षा केन्द्रित प्रश्नहरू</h3>
    <p>📄 <strong>सैद्धान्तिक प्रश्नहरू</strong>:</p>
    <ul>
      <li>Structured Programming भनेको के हो?</li>
      <li>C को दुई विशेषता लेख्नुहोस्।</li>
      <li>Control Structure के–के छन्?</li>
    </ul>
    <p>📄 <strong>प्रोग्राम लेख्ने</strong>:</p>
    <ul>
      <li>३ अंकको योग गर्ने प्रोग्राम</li>
      <li>पास/फेल देखाउने प्रोग्राम</li>
      <li>१ देखि १० सम्म छाप्ने लुप</li>
      <li>आयात/चौडाइ दिएर क्षेत्रफल निकाल्ने</li>
    </ul>

    <h3>🎯 Practical लाई सम्झाउने जीवनसँग तुलना</h3>
    <p>📘 Structured प्रोग्राम लेख्नु भनेको <strong>राम्रो recipe लेख्नु जस्तै</strong> हो:</p>
    <ol>
      <li>पीठो राख</li>
      <li>पानी हाल</li>
      <li>राम्रोसँग मिसाऊ</li>
      <li>पकाऊ</li>
    </ol>
    <p>👉 हरेक Step ठिक ठाउँमा — <strong>त्यो नै Structured Programming हो।</strong></p>
  
            `
          }
            ]
          },
        ]
      },
      essentials: {
        title: "आवश्यक सीपहरू र जीवन युक्तिहरू",
        topics: [
          {
            id: "smart-life-skills",
            title: "🧠 स्मार्ट जीवन सीपहरू",
            icon: "💡",
            description: "विद्यार्थीहरूले पहिले जान्न चाहने उपयोगी युक्तिहरू",
            lessons: [
              {
                id: "gas-cylinder-check",
                title: "ग्यास सिलिन्डर म्याद सकिएको छ कि छैन कसरी जाँच्ने",
                content: `
                  <h2>ग्यास सिलिन्डर म्याद सकिएको छ कि छैन कसरी जाँच्ने 🔥</h2>
                  <p>हरेक ग्यास सिलिन्डरको म्याद मिति हुन्छ जुन तपाईंले सुरक्षाका लागि नियमित जाँच गर्नुपर्छ।</p>
                  
                  <div class="safety-warning">
                    ⚠️ <strong>सुरक्षा पहिले:</strong> म्याद सकिएको ग्यास सिलिन्डर प्रयोग गर्नु अत्यन्त खतरनाक हुन सक्छ!
                  </div>
                `
              }
            ]
          }
        ]
      }
    }
  }
};
export default SAMPLE_CONTENT;


