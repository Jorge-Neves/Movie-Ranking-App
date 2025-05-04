# Movie Ranking App

A React + Vite application for browsing and ranking movies, built with Material UI and TypeScript.

---

## Live Demo

Check out the production site here:

[https://movie-ranking-app-production.netlify.app/](https://movie-ranking-app-production.netlify.app/)

---

## Recommended Setup

* **Node.js:** v23 or later
* **Package manager:** npm

---

## Development Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/movie-ranking-app.git
   cd movie-ranking-app
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

After running npm run dev (assuming the port isnt occupied by any other application you are running locally) you can locally view the app at http://localhost:5173/

---

## Code Quality

Before pushing any changes to this repo please run the following commands

* **Lint the code**

  ```bash
  npm run lint
  ```

* **Format the code**

  ```bash
  npm run format
  ```

---

## Production Site

The app is deployed to Netlify at:

[https://movie-ranking-app-production.netlify.app/](https://movie-ranking-app-production.netlify.app/)

---

## How to Contribute

1. **Create an issue**

   * Go to the GitHub Issues tab and open a new issue describing your improvement or bugfix.

2. **Create a branch**

   ```bash
   git checkout -b feature/your-issue-title
   ```

3. **Make your changes and commit**

   ```bash
   git commit -m "Add: your descriptive commit message"
   ```

4. **Push your branch**

   ```bash
   git push origin feature/your-issue-title
   ```

5. **Create a pull request**

   * Go to the GitHub repository and open a new pull request targeting the `main` branch.

---

##  Future Improvements

* Make the app mobile responsive
* Create a seperate Staging enviroment for testing new features before they are merged to main and thus production
* Create a CI/CD pipeline to trigger a deply to production when a new tag is released (currently it is deployed on each push to main branch)
* Improve accessibility (ARIA, keyboard support, screen reader)
* Containerize the app with Docker
* Add virtual loading / infinite scroll optimization
* Implement better error handling and user-friendly error pages
* Add animations and transition effects for smoother UX

---

## License

This project is open-source and free to use under the [MIT License](LICENSE).
