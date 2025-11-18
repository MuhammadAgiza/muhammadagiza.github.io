# Muhammad Agiza's Professional Portfolio

This repository contains the source code for my personal portfolio website, showcasing my projects, skills, and professional experience as a Software Engineer. The site is built with [Jekyll](https://jekyllrb.com/) and hosted on [GitHub Pages](https://pages.github.com/).

**Live Site:** [https://muhammadagiza.github.io](https://muhammadagiza.github.io)

## ✨ Features

- **Dynamic Content:** Projects, bio, experience, and skills are managed via simple Markdown and JSON files.
- **Responsive Design:** Built on the [TechFolios](https://techfolios.github.io/) Jekyll theme.
- **Automated Deployment:** Deployed automatically to GitHub Pages via GitHub Actions.

## 🚀 Getting Started

Follow these instructions to set up a local development environment for editing and testing.

### Prerequisites

- [Ruby](https://www.ruby-lang.org/en/documentation/installation/) (version 3.1 or as specified in `.ruby-version`)
- Bundler

### Local Development

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/muhammadagiza/muhammadagiza.github.io.git
    cd muhammadagiza.github.io
    ```

2.  **Install dependencies:**
    ```bash
    bundle install
    ```

3.  **Run the Jekyll server:**
    This command builds the site and serves it locally. The `--livereload` flag automatically refreshes the page when you make changes.
    ```bash
    bundle exec jekyll serve --livereload
    ```

4.  **Access the site:**
    Open your browser and navigate to `http://127.0.0.1:4000`.

## ✍️ How to Edit and Test

Content and structure are managed through data files and markdown pages.

### Editing Content

-   **Bio & Personal Information:**
    Update your summary, contact details, skills, education, and work experience by editing `/_data/bio.json`.

-   **Technologies & Skills:**
    To add or update the skills and technologies listed in your portfolio, edit the `skills` section inside `/_data/bio.json`.

-   **Projects:**
    -   **Add a new project:** Create a new Markdown file (e.g., `new-project.md`) in the `/projects` directory. Use the structure from existing project files as a template.
    -   **Edit a project:** Modify the corresponding Markdown file in the `/projects` directory. You can control the sort order by setting the `date` (year) and `priority` (higher numbers appear first within the same year).


-   **Career Changelog:**
    To add or update entries in your career timeline, edit `/_data/career_changelog.json`.

-   **Analytics:**
    To add or update analytics tracking (e.g., Google Analytics), edit the `/_includes/analytics.html` file. This is typically where you would paste your tracking script.

### Testing Changes

After making any changes to the files, the local server (if running with `--livereload`) will automatically rebuild the site. Simply refresh your browser at `http://127.0.0.1:4000` to see the updates. This allows you to verify that your changes appear correctly before pushing them to the `main` branch.

## 🚀 Deployment

The portfolio is automatically deployed to GitHub Pages whenever changes are pushed to the `main` branch. The deployment workflow is defined in `.github/workflows/main.yml`.

## 📄 License

This project is licensed under the MIT License. See the LICENSE.md file for details.

## 🙏 Acknowledgments

This portfolio is based on the TechFolios Jekyll theme.
