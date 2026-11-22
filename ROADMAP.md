# Tinder Clone: Vanilla JS Learning Roadmap

A step-by-step checklist for building a Tinder-style swiping app from scratch with plain HTML, CSS, JavaScript, and Node.js. No frameworks.

- **Starting level:** knows some HTML/CSS
- **Pace:** under 5 hours/week (about 4-5 months total)
- **Goal:** learning project

**How to use this file:** Tick boxes by changing `[ ]` to `[x]`. Do the steps in order. Never skip a milestone: each one proves the phase works before you build on it. If a step takes longer than expected, that is normal. Stop, take notes on what confused you, and continue next session.

**Session rhythm (about 1 hour each, 4-5 per week):**
1. 5 min: reread what you did last time and run it.
2. 40 min: do the next 1-3 checklist items.
3. 10 min: commit to Git with a clear message.
4. 5 min: write down one thing you learned and one thing you're stuck on.

---

## Table of Contents
- [Phase 0: Setup](#phase-0-setup-week-1-first-session)
- [Phase 1: JavaScript Fundamentals](#phase-1-javascript-fundamentals-weeks-1-3)
- [Phase 2: The DOM and a Static Card UI](#phase-2-the-dom-and-a-static-card-ui-weeks-4-5)
- [Phase 3: Swipe Interaction](#phase-3-swipe-interaction-weeks-6-7)
- [Phase 4: State and Persistence](#phase-4-state-and-persistence-weeks-8-9)
- [Phase 5: Backend with Node.js](#phase-5-backend-with-nodejs-weeks-10-13)
- [Phase 6: Database and Accounts](#phase-6-database-and-accounts-weeks-14-17)
- [Phase 7: Matching and Real-Time Chat](#phase-7-matching-and-real-time-chat-weeks-18-21)
- [Phase 8: Polish and Deploy](#phase-8-polish-and-deploy-weeks-22)
- [Final Folder Structure](#final-folder-structure)
- [Resources](#resources)
- [Troubleshooting](#troubleshooting)

---

## Phase 0: Setup (Week 1, first session)

**Goal:** a working dev environment and an empty project tracked in Git.

### 0.1 Install tools
- [/] Install **VS Code** from https://code.visualstudio.com
- [/] Install the VS Code extension **Live Server** (Ritwick Dey). It auto-reloads your page when you save.
- [/] Install the VS Code extension **Prettier** and turn on *Format on Save* (Settings, search "format on save").
- [/] Install **Node.js LTS** from https://nodejs.org (choose the "LTS" button)
- [/] Verify the install. Open a terminal (in VS Code: Terminal > New Terminal) and run:
  ```bash
  node --version    # should print v20.x.x or higher
  npm --version     # should print a number like 10.x.x
  ```
- [/] Install **Git** from https://git-scm.com, then verify:
  ```bash
  git --version
  ```
- [/] Create a free **GitHub** account at https://github.com

### 0.2 Configure Git (one time only)
- [/] Set your identity:
  ```bash
  git config --global user.name "Your Name"
  git config --global user.email "you@example.com"
  ```

### 0.3 Create the project
- [/] Create a folder and open it in VS Code:
  ```bash
  mkdir tinder-clone
  cd tinder-clone
  code .
  ```
- [/] Create these files inside it (right-click in the VS Code explorer > New File):
  - `index.html`
  - `style.css`
  - `app.js`
  - `README.md` (paste this roadmap here or keep it beside the project)
- [/] Put this starter in `index.html`:
  ```html
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Spark</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello</h1>
    <script src="app.js"></script>
  </body>
  </html>
  ```
- [/] Put `console.log("app.js is connected");` in `app.js`
- [/] Right-click `index.html` > **Open with Live Server**. Open browser DevTools (F12 or Ctrl/Cmd+Shift+I) > **Console** tab. You should see your message.

### 0.4 Version control
- [/] Initialize the repo and make the first commit:
  ```bash
  git init
  git add .
  git commit -m "Initial project setup"
  ```
- [/] Create an empty repo on GitHub named `tinder-clone` (do NOT add a README there), then connect it:
  ```bash
  git branch -M main
  git remote add origin https://github.com/YOUR-USERNAME/tinder-clone.git
  git push -u origin main
  ```

✅ **Milestone 0:** the page shows "Hello", the console shows your message, and your code is on GitHub.

---

## Phase 1: JavaScript Fundamentals (Weeks 1-3)

**Goal:** be comfortable with the JS you need for the rest of the project. Practice in `app.js` and read results in the browser console (or run files with `node filename.js`).

### 1.1 Variables and types
- [/] Learn `let`, `const` (use `const` by default), and why to avoid `var`.
- [/] Learn the types: string, number, boolean, `null`, `undefined`.
- [/] Learn template literals: `` `Hi ${name}` ``.
- [/] **Exercise:** create variables for a person (`name`, `age`, `bio`) and `console.log` a sentence using all three.

### 1.2 Operators and conditionals
- [/] Learn `===` vs `==` (always use `===`), `&&`, `||`, `!`.
- [/] Learn `if / else if / else`, and the ternary `condition ? a : b`.
- [/] **Exercise:** write code that logs "adult" or "minor" based on age (the real app will need an 18+ check).

### 1.3 Functions
- [/] Learn function declarations, arrow functions, parameters, return values.
- [/] Learn the difference between a function that *returns* something and one that only *does* something.
- [/] **Exercise:** write `formatProfile(person)` that returns `"Ana, 25"`.

### 1.4 Arrays and objects
- [/] Learn how to create, read, add (`push`), and remove (`pop`, `splice`) array items.
- [/] Learn objects: dot notation, bracket notation, nested objects, adding and deleting properties.
- [/] Learn destructuring: `const { name, age } = person;`
- [/] Learn the spread operator: `{ ...person, age: 26 }`.
- [ ] **Exercise:** create an array of 5 profile objects, each with `id`, `name`, `age`, `bio`, `photo` (a URL string).

### 1.5 Loops and array methods
- [ ] Learn `for`, `for...of`, and `while`.
- [ ] Learn `forEach`, `map`, `filter`, `find`, `some`, `sort`.
- [ ] **Exercise:** from your 5 profiles, (a) get only names with `map`, (b) get people over 25 with `filter`, (c) find the profile with `id` 3 with `find`, (d) sort by age with `sort((a, b) => a.age - b.age)`.

### 1.6 Errors and debugging
- [ ] Learn to read a console error: the message, the file, and the line number.
- [ ] Learn `console.log`, `console.table`, and setting a **breakpoint** in DevTools > Sources.
- [ ] Learn `try / catch`.

### 1.7 Mini project: matching logic
- [ ] Write this in plain JS (no HTML yet):
  ```js
  const likesA = [2, 4, 7];          // ids person A liked
  const likesB = [1, 4, 9];          // ids person B liked
  // Write isMatch(aId, bId, likesByUser) that returns true only if both liked each other.
  ```
- [ ] Write `getMutualLikes(listA, listB)` that returns the shared items.

✅ **Milestone 1:** you can write, from memory, a function that filters an array of objects and returns a new, transformed array. Commit: `git commit -am "Phase 1 complete"`.

---

## Phase 2: The DOM and a Static Card UI (Weeks 4-5)

**Goal:** show profile data on the page and respond to button clicks.

### 2.1 The DOM basics
- [ ] Learn what the DOM is: the browser's tree of your HTML as JS objects.
- [ ] Learn `document.querySelector`, `querySelectorAll`, `getElementById`.
- [ ] Learn changing content: `.textContent`, `.src`, `.classList.add/remove/toggle`, `.style`.
- [ ] Learn creating elements: `document.createElement`, `.append`, `.remove`.
- [ ] **Exercise:** make a button that changes an `<h1>`'s text when clicked.

### 2.2 Events
- [ ] Learn `addEventListener("click", handler)`, the `event` object, and `event.target`.
- [ ] Learn keyboard events (`keydown`) and `event.key`.

### 2.3 Layout review (CSS)
- [ ] Review the box model (`margin`, `padding`, `border`) and set `box-sizing: border-box` on everything.
- [ ] Review **flexbox**: `display: flex`, `justify-content`, `align-items`, `gap`, `flex-direction`.
- [ ] Review `position: relative/absolute` and `overflow: hidden`.
- [ ] Learn CSS variables: `:root { --pink: #fd5068; }` and `color: var(--pink)`.
- [ ] Learn `aspect-ratio`, `object-fit: cover` (for photos), and `border-radius`.

### 2.4 Build the card
- [ ] Add a `profiles` array to the top of `app.js` (reuse your Phase 1 data). Use real image URLs from `https://picsum.photos/400/600?random=1` (change the number per profile).
- [ ] In `index.html`, replace `<h1>` with:
  ```html
  <main class="app">
    <div id="card-stack"></div>
    <div class="buttons">
      <button id="nope-btn" aria-label="Nope">✕</button>
      <button id="like-btn" aria-label="Like">♥</button>
    </div>
  </main>
  ```
- [ ] Write `createCard(profile)` that **returns** a `<div class="card">` containing an `<img>`, the name and age, and the bio.
- [ ] Style `.card`: fixed size (about 340px by 500px), `border-radius: 16px`, `box-shadow`, image filling the card, text overlaid at the bottom with a gradient.
- [ ] Center `.app` on the page with flexbox.
- [ ] Style the buttons as large round buttons.

### 2.5 Wire up the buttons
- [ ] Keep a variable `let currentIndex = 0;`.
- [ ] Write `showNextCard()` that clears `#card-stack` and appends the card for `profiles[currentIndex]`.
- [ ] On Like or Nope click: record the decision (for now, `console.log("liked", profile.name)`), increment `currentIndex`, call `showNextCard()`.
- [ ] Handle the end of the list: when `currentIndex >= profiles.length`, show a "No more profiles" message instead of crashing.
- [ ] Add keyboard support: ArrowRight = like, ArrowLeft = nope.

✅ **Milestone 2:** you can click through all profiles, see an end-of-list message, and nothing in the console errors. Commit: `git commit -am "Phase 2: static card UI"`.

---

## Phase 3: Swipe Interaction (Weeks 6-7)

**Goal:** drag the card with mouse or finger, like real Tinder.

### 3.1 Learn the concepts first
- [ ] Learn Pointer Events: `pointerdown`, `pointermove`, `pointerup`, `pointercancel` (they work for both mouse and touch).
- [ ] Learn `element.setPointerCapture(event.pointerId)` so dragging keeps working if the pointer leaves the card.
- [ ] Learn CSS `transform: translateX(...) rotate(...)` and `transition`.
- [ ] Add `touch-action: none;` to `.card` in CSS so the browser doesn't scroll while dragging.
- [ ] Add `user-select: none;` and `-webkit-user-drag: none;` on the card and its image.

### 3.2 Build the drag
- [ ] Write `attachSwipe(cardElement, onDecision)`.
- [ ] On `pointerdown`: save `startX = event.clientX`, set `isDragging = true`, remove any CSS transition (`card.style.transition = "none"`).
- [ ] On `pointermove` (only if dragging): `deltaX = event.clientX - startX`, then
  ```js
  card.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 20}deg)`;
  ```
- [ ] On `pointerup`: set `isDragging = false` and decide:
  - If `deltaX > 120` → swipe right (like)
  - If `deltaX < -120` → swipe left (nope)
  - Otherwise → snap back: set `transition = "transform 0.3s"` and `transform = "translateX(0) rotate(0)"`.
- [ ] To fling the card away, set `transform` to `translateX(±1000px) rotate(±30deg)` with a transition, then after 300ms (listen for `transitionend`) call `onDecision("like" | "nope")`.

### 3.3 Visual feedback
- [ ] Add LIKE and NOPE stamp labels (absolutely positioned in the card, `opacity: 0`).
- [ ] As the card moves, set stamp opacity from drag distance: `Math.min(Math.abs(deltaX) / 120, 1)`.
- [ ] Make the Like/Nope buttons also fling the card (reuse the same fling function instead of duplicating code).
- [ ] Show the next card underneath, slightly scaled down (`transform: scale(0.95)`), so the stack feels real.

### 3.4 Edge cases
- [ ] Prevent double-swipes: ignore input while a card is animating.
- [ ] Handle `pointercancel` the same as a release below the threshold.
- [ ] Test on your phone: find your computer's local IP, run Live Server, and open `http://YOUR-IP:5500` on the phone over the same Wi-Fi.

✅ **Milestone 3:** the card follows your finger, rotates, shows stamps, flings away past the threshold, and snaps back otherwise. Commit: `git commit -am "Phase 3: swipe gestures"`.

---

## Phase 4: State and Persistence (Weeks 8-9)

**Goal:** remember what the user did and add multiple screens.

### 4.1 Learn the concepts
- [ ] Learn what **state** is: the data that describes your app right now.
- [ ] Learn `localStorage.setItem(key, value)` and `getItem(key)`. It only stores strings, so use `JSON.stringify` and `JSON.parse`.
- [ ] Learn the separation pattern: **data** (state), **logic** (functions that change state), **render** (functions that draw state to the page).

### 4.2 Refactor into a state object
- [ ] Create one object:
  ```js
  const state = {
    profiles: [...],
    likedIds: [],
    passedIds: [],
    screen: "swipe",
  };
  ```
- [ ] Write `saveState()` (stores `likedIds`, `passedIds` to localStorage) and `loadState()` (called on page load).
- [ ] Update the swipe handler: push the id to `likedIds` or `passedIds`, call `saveState()`.
- [ ] Filter the deck so already-seen profiles don't reappear on refresh.
- [ ] Add a **Reset** button that clears localStorage and reloads the deck (useful for testing).

### 4.3 Multiple screens
- [ ] Add a bottom navigation bar with three tabs: Swipe, Likes, Profile.
- [ ] Create three `<section>` elements, one per screen. Show only the active one by toggling a `.hidden { display: none; }` class.
- [ ] **Likes screen:** render a grid of the people you liked (photo + name).
- [ ] **Profile screen:** a form for your own name, age, bio. Save it to localStorage.
- [ ] Split `app.js` into modules: `state.js`, `render.js`, `swipe.js`, `main.js`. Use `<script type="module" src="main.js">` and `export` / `import`.

✅ **Milestone 4:** refresh the page and your likes, passes, and profile are still there; you can navigate between three screens. Commit: `git commit -am "Phase 4: state and persistence"`.

---

## Phase 5: Backend with Node.js (Weeks 10-13)

**Goal:** move profile data to a server and fetch it over HTTP.

### 5.1 Learn the concepts first
- [ ] Learn the client-server model, what a request and response are, and what an API is.
- [ ] Learn HTTP methods (GET, POST, PUT, DELETE) and status codes (200, 201, 400, 401, 404, 500).
- [ ] Learn JSON as the data format between client and server.
- [ ] Learn Promises and `async/await`, and `fetch`:
  ```js
  const res = await fetch("/api/profiles");
  const data = await res.json();
  ```
- [ ] Open DevTools > **Network** tab and inspect requests on any website you use.

### 5.2 Set up the server project
- [ ] Reorganize the folder into `client/` (your existing files) and `server/`.
- [ ] In `server/`, run:
  ```bash
  npm init -y
  npm install express
  ```
- [ ] Create `server/index.js`:
  ```js
  const express = require("express");
  const app = express();
  app.use(express.json());
  app.use(express.static("../client"));

  app.get("/api/profiles", (req, res) => {
    res.json([{ id: 1, name: "Ana", age: 25 }]);
  });

  app.listen(3000, () => console.log("Server on http://localhost:3000"));
  ```
- [ ] Run it with `node index.js` and visit `http://localhost:3000/api/profiles` in the browser.
- [ ] Install auto-restart for development: `npm install --save-dev nodemon`, then add `"dev": "nodemon index.js"` under `scripts` in `package.json`. Run with `npm run dev`.
- [ ] Add a `.gitignore` file containing `node_modules` and `.env`. **Never commit `node_modules`.**

### 5.3 Build the endpoints
- [ ] `GET /api/profiles`: return all profiles from a JSON file (`server/data/profiles.json`).
- [ ] `GET /api/profiles/:id`: return one profile, or `404` if missing (`req.params.id`).
- [ ] `POST /api/swipes`: accept `{ profileId, direction }`, validate it (400 if invalid), store it in memory, return `201`.
- [ ] Test every endpoint with the browser, then with a tool: install **Thunder Client** (VS Code extension) or use `curl`.

### 5.4 Connect the front end
- [ ] Replace the hardcoded `profiles` array with `fetch("/api/profiles")` on app load.
- [ ] Add a loading state ("Loading...") and an error state (a message plus a Retry button) for failed requests.
- [ ] Send swipes with `fetch("/api/swipes", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({...}) })`.

### 5.5 Understand middleware
- [ ] Write a logger middleware that prints `METHOD URL` for every request.
- [ ] Write an error-handling middleware (four arguments: `err, req, res, next`) that returns `500` JSON.

✅ **Milestone 5:** the front end loads its profiles from your own server and posts swipes to it; killing the server shows your error message instead of a blank page. Commit: `git commit -am "Phase 5: Express backend"`.

---

## Phase 6: Database and Accounts (Weeks 14-17)

**Goal:** real users who sign up, log in, and have their own persistent data.

### 6.1 Learn SQL basics
- [ ] Learn `CREATE TABLE`, `INSERT`, `SELECT ... WHERE`, `UPDATE`, `DELETE`.
- [ ] Learn primary keys, foreign keys, and `JOIN`.
- [ ] Practice free at https://sqlbolt.com before touching the project.
- [ ] Install a SQLite viewer: the VS Code extension **SQLite Viewer** or the app **DB Browser for SQLite**.

### 6.2 Add the database
- [ ] Install:
  ```bash
  npm install better-sqlite3
  ```
- [ ] Create `server/db.js` that opens `app.db` and runs these table definitions if they don't exist:
  ```sql
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    name TEXT NOT NULL,
    age INTEGER NOT NULL,
    bio TEXT DEFAULT '',
    photo TEXT DEFAULT '',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS swipes (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    swiper_id INTEGER NOT NULL REFERENCES users(id),
    target_id INTEGER NOT NULL REFERENCES users(id),
    direction TEXT NOT NULL CHECK (direction IN ('like', 'nope')),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (swiper_id, target_id)
  );
  ```
- [ ] Add `app.db` to `.gitignore`.
- [ ] Write a seed script (`server/seed.js`) that inserts 15-20 fake users.
- [ ] Switch `GET /api/profiles` to read from the `users` table.

### 6.3 Authentication
- [ ] Learn why passwords must be **hashed** (never stored as text) and what a salt is.
- [ ] Install: `npm install bcrypt jsonwebtoken cookie-parser dotenv`
- [ ] Create `server/.env`:
  ```
  JWT_SECRET=replace-this-with-a-long-random-string
  ```
  Load it with `require("dotenv").config()` at the top of `index.js`.
- [ ] `POST /api/auth/signup`: validate input (email format, password 8+ chars, age 18+), hash with `bcrypt.hash(password, 10)`, insert the user, return `201`. Return `409` if the email already exists.
- [ ] `POST /api/auth/login`: look up the user, `bcrypt.compare`, and on success create a JWT with `jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: "7d" })` and set it in an **httpOnly cookie**. Return `401` with a generic "Invalid email or password" for either failure.
- [ ] `POST /api/auth/logout`: clear the cookie.
- [ ] Write `requireAuth` middleware: read the cookie, verify the JWT, attach `req.userId`, else return `401`.
- [ ] Protect `/api/profiles` and `/api/swipes` with `requireAuth`.
- [ ] `GET /api/profiles` should return only users the current user has **not** swiped on and is not themselves.
- [ ] `POST /api/swipes` should store the swipe with `swiper_id = req.userId`.

### 6.4 Front-end auth screens
- [ ] Build sign-up and login forms (`<form>`, `<input type="email">`, `<input type="password">`). Use `event.preventDefault()` on submit.
- [ ] After login, show the swipe screen; if any API call returns `401`, send the user back to login.
- [ ] Add a logout button.

### 6.5 Photo upload
- [ ] Install `npm install multer`.
- [ ] `POST /api/profile/photo`: accept an image only (check mimetype is `image/jpeg` or `image/png`), limit size to 5 MB, save to `server/uploads/`, store the path in the user row.
- [ ] Serve uploads with `app.use("/uploads", express.static("uploads"))`. Add `uploads/` to `.gitignore`.

### 6.6 Security checklist (do not skip)
- [ ] Always use parameterized queries: `db.prepare("SELECT * FROM users WHERE email = ?").get(email)`. **Never** build SQL by concatenating user input.
- [ ] Validate and sanitize every input on the server (the client can be bypassed).
- [ ] Use `textContent` instead of `innerHTML` when displaying user-written text (prevents XSS).
- [ ] Never return `password_hash` in any API response.
- [ ] Never commit `.env`.

✅ **Milestone 6:** two different accounts can sign up, log in, and each see their own deck and swipe history after restarting the server. Commit: `git commit -am "Phase 6: database and auth"`.

---

## Phase 7: Matching and Real-Time Chat (Weeks 18-21)

**Goal:** mutual likes become matches, and matches can chat live.

### 7.1 Matching
- [ ] Add a `matches` table:
  ```sql
  CREATE TABLE IF NOT EXISTS matches (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_a INTEGER NOT NULL REFERENCES users(id),
    user_b INTEGER NOT NULL REFERENCES users(id),
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (user_a, user_b)
  );
  ```
  Always store the smaller id as `user_a` so the same pair is never saved twice.
- [ ] In `POST /api/swipes`, after saving a `like`, check whether the target has already liked the current user. If yes, insert a match and return `{ matched: true, profile }`.
- [ ] On the front end, if `matched` is true, show an "It's a match!" overlay with both photos and buttons "Send a message" / "Keep swiping".
- [ ] `GET /api/matches`: return the current user's matches with the other person's name and photo.
- [ ] Build a Matches screen listing them.

### 7.2 Messages (without real time first)
- [ ] Add a `messages` table (`id`, `match_id`, `sender_id`, `body`, `created_at`).
- [ ] `GET /api/matches/:id/messages`: return messages, but **first verify the current user belongs to that match** (otherwise `403`).
- [ ] `POST /api/matches/:id/messages`: same ownership check, validate `body` is non-empty and under 1000 characters.
- [ ] Build a chat screen with a message list and an input. Load messages with `fetch`.

### 7.3 Real time with WebSockets
- [ ] Learn the difference between HTTP (request/response) and WebSockets (a persistent two-way connection).
- [ ] Install: `npm install ws`.
- [ ] Attach a WebSocket server to your HTTP server; on connection, read the JWT from the cookie to know who connected. Close the socket if it is invalid.
- [ ] Keep a `Map` of `userId -> socket`.
- [ ] When a message is posted, save it to the database, then send it through the recipient's socket if they're online.
- [ ] On the front end: `const ws = new WebSocket("ws://localhost:3000")`, handle `ws.onmessage` by appending the message to the chat.
- [ ] Add reconnect logic: when `ws.onclose` fires, retry after 2 seconds.
- [ ] Add a "new match" push through the same socket so the other user sees the match overlay immediately.

✅ **Milestone 7:** with two browser windows (one normal, one incognito) logged in as different users, you can match and exchange messages instantly. Commit: `git commit -am "Phase 7: matching and chat"`.

---

## Phase 8: Polish and Deploy (Week 22+)

**Goal:** make it solid, pretty, and live.

### 8.1 Quality
- [ ] Make the layout responsive: test at 360px, 768px, and 1280px wide using DevTools device mode. Use `@media (max-width: 600px)`.
- [ ] Add loading spinners and empty states ("No matches yet, keep swiping!").
- [ ] Add accessibility basics: `alt` text on photos, `aria-label` on icon buttons, visible focus styles, sufficient color contrast.
- [ ] Add rate limiting on login: `npm install express-rate-limit`.
- [ ] Add `helmet` for secure headers: `npm install helmet`, then `app.use(helmet())`.
- [ ] Write a proper project README with screenshots and setup instructions.
- [ ] Review your code: delete unused code, rename unclear variables, split any function over about 30 lines.

### 8.2 Optional extras (pick any)
- [ ] Age range and distance filters
- [ ] Undo last swipe
- [ ] Unmatch and block
- [ ] Multiple photos per profile
- [ ] Typing indicator in chat
- [ ] Unread message badge

### 8.3 Deploy
- [ ] Learn what environment variables are on a host.
- [ ] Make the server read `process.env.PORT || 3000`.
- [ ] Add a `"start": "node index.js"` script in `package.json`.
- [ ] Note that SQLite and uploaded files need persistent disk storage on the host. Choose a host that offers it (Render with a disk, Railway with a volume, or Fly.io with a volume), or move to a hosted database later.
- [ ] Push to GitHub, connect the repo to the host, set `JWT_SECRET` in the host's environment settings, and deploy.
- [ ] Use `wss://` (not `ws://`) for WebSockets in production, and cookies with `secure: true`.
- [ ] Test the live URL on your phone.

✅ **Milestone 8:** a live link you can send to friends. Commit and tag it: `git tag v1.0 && git push --tags`.

---

## Final Folder Structure

```
tinder-clone/
├── client/
│   ├── index.html
│   ├── style.css
│   └── js/
│       ├── main.js
│       ├── state.js
│       ├── render.js
│       ├── swipe.js
│       ├── api.js
│       └── chat.js
├── server/
│   ├── index.js
│   ├── db.js
│   ├── seed.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── profiles.js
│   │   ├── swipes.js
│   │   └── messages.js
│   ├── middleware/
│   │   └── requireAuth.js
│   ├── uploads/          (git-ignored)
│   ├── .env              (git-ignored)
│   └── package.json
├── .gitignore
└── README.md
```

---

## Resources

| Topic | Where |
|---|---|
| JavaScript fundamentals | https://javascript.info |
| Any web API reference | https://developer.mozilla.org (MDN) |
| Practice exercises | https://www.freecodecamp.org, https://exercism.org/tracks/javascript |
| Full curriculum alternative | https://www.theodinproject.com |
| SQL practice | https://sqlbolt.com |
| CSS flexbox game | https://flexboxfroggy.com |
| Express docs | https://expressjs.com |
| Git basics | https://learngitbranching.js.org |

---

## Troubleshooting

- **Nothing happens when I click:** open the Console (F12). A red error tells you the file and line number. Most often it is a typo in an element id or the script loading before the HTML (put `<script>` at the end of `<body>`, or use `defer`).
- **`Cannot read properties of null`:** `querySelector` didn't find the element. Check the id/class spelling.
- **Changes not showing:** hard refresh (Ctrl/Cmd+Shift+R), and make sure you saved the file.
- **`EADDRINUSE` on starting the server:** port 3000 is already used. Stop the old process (Ctrl+C in its terminal) or change the port.
- **CORS errors:** serve your front end from the same Express server (as set up in Phase 5), which avoids them entirely.
- **Stuck for more than 30 minutes:** write down exactly what you expected vs. what happened, shrink the problem to the smallest example, then search the exact error message or ask for help with that example.

Keep each session small, commit often, and enjoy the build.