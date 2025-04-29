---
layout: project
type: project
title: "Mr English"
image: img/mrenglish/mrenglish_square.jpg
thumbnail: img/mrenglish/mrenglish_square.jpg
date: 2022-2023
published: true
labels:
  - TypeScript
  - JavaScript
  - MySql
  - Nodejs
  - RESTful APIs
  - E-Learning
summary: "A non-profit educational app for Egyptian secondary students, offering interactive quizzes, daily challenges, a rich MCQ bank, and a structured grammar and vocabulary review system. I helped modernize the backend and added key features that improved learning and app reliability."
---

## Overview

*Mr English* was the **first specialized English mobile application** tailored for secondary school students in Egypt. Designed to help students master English through practice and testing, the app featured over 3,000 MCQs, grammar and vocabulary modules, essay writing, reading passages, and daily challenges. It aimed to make English learning accessible, interactive, and exam-focused.

The app was developed as a **non-profit initiative**, and despite its positive reception, it was eventually **shut down due to funding limitations**.

<a href="https://web.archive.org/web/20220915210507/https://play.google.com/store/apps/details?id=com.mrenglish.app" target="_blank">Archived app store listing (Wayback Machine)</a>

## My Contributions

### Version One (Mid to Late Stage)
- Joined the team **halfway through version one**, during the development of major features.
- Built the **Leaderboard system** to rank users based on quiz performance.
- Developed the **Challenge feature**, allowing users to take daily challenges and unlock more quizzes.
- Conducted a **security audit** and identified critical issues:
  - Passwords were stored in **plain text**.
  - Incoming **requests were not verified**, posing a major security risk.

### Version Two (Sole Backend Developer)
- Took over as the **only backend developer**.
- Migrated the codebase from **JavaScript to TypeScript** to improve type safety and maintainability.
- Refactored the entire backend to follow **modern architecture** principles.
- Replaced raw SQL queries with **Prisma ORM** for safer and cleaner database interaction.
- Rewrote the **authentication system** to fix session issues and improve multi-device support.
- Implemented **secure password hashing**.
- Added **request validation and verification** across all endpoints.
- Enhanced **notification reliability** using Firebase Cloud Messaging (FCM).
- Introduced **new core features**, including:
  - **Written questions** in quizzes.
  - The **Knowledge Bank**, an interactive review module for English grammar and vocabulary.

## Technologies Used

- **Languages & Runtime:** TypeScript, JavaScript (Node.js)
- **Database:** MySQL
- **ORM:** Prisma
- **Security:** bcrypt (or equivalent) for password hashing
- **Cloud & Messaging:** Firebase, FCM
- **Architecture:** REST APIs, modular structure, middleware-based request validation
- **Tools:** Git, CI/CD pipelines (if applicable)

## Key Features

- **MCQ Bank**: A rich collection of over 3,000 English questions.
- **Daily Challenge**: A gamified feature encouraging daily engagement.
- **Leaderboard**: Real-time ranking system to boost competition.
- **Written Question Support**: Open-ended responses added in version two.
- **Knowledge Bank**: An educational module for grammar and vocabulary.
- **Secure Auth System**: Implemented in version two with hashed passwords and verified requests.
- **Reliable Notifications**: Improved FCM delivery to support multi-device environments.

## Impact

- Strengthened the app's **security** by addressing critical vulnerabilities from version one.
- Enabled **scalable growth** through architectural modernization and ORM integration.
- Delivered a **clean, maintainable codebase** as the sole backend developer.
- Increased user **engagement and retention** with new learning tools and quiz formats.
- Despite the project's shutdown due to lack of funding, the technical foundation of version two positioned it well for potential relaunch or expansion.
