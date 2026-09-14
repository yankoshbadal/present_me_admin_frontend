# Present-Me Landing Page — React Component Refactoring

## Overview

The Present-Me landing page was originally implemented inside a single large `IntroPage.jsx` component.

The component contained the complete landing page UI along with:

* Navigation
* Mobile menu
* Loading state
* Animations
* Background effects
* Hero section
* Statistics
* Features
* Attendance methods
* User types
* Benefits
* CTA section
* Footer
* Navigation logic
* Static data

To make the code easier to maintain and understand, the landing page was refactored into **multiple React components**.

The main `IntroPage.jsx` now acts as the **main page/container**, while individual sections and repeated UI elements are separated into reusable components.

---

# Project Structure

The current structure is:

```text
src/
│
├── assets/
│   └── image.png
│
├── components/
│   ├── Navbar.jsx
│   ├── DevelopmentBanner.jsx
│   ├── ScrollProgress.jsx
│   ├── BackgroundOrbs.jsx
│   │
│   ├── HeroSection.jsx
│   │
│   ├── HowItWorks.jsx
│   ├── AttendanceMethodCard.jsx
│   │
│   ├── Features.jsx
│   ├── FeatureCard.jsx
│   │
│   ├── UsersSection.jsx
│   ├── UserTypeCard.jsx
│   │
│   ├── BenefitsSection.jsx
│   ├── BenefitCard.jsx
│   │
│   ├── CTASection.jsx
│   └── Footer.jsx
│
├── data/
│   └── landingData.js
│
└── IntroPage.jsx
```

```text
src/components/
```

---

# Before Refactoring

Previously, the landing page was implemented as one large component:

```text
IntroPage.jsx
```

It contained all sections and logic in a single file.

The structure was approximately:

```text
IntroPage.jsx
│
├── Loading
├── Development Banner
├── Scroll Progress
├── Background Effects
├── Navbar
├── Hero
├── Stats
├── How It Works
├── Features
├── Users
├── Benefits
├── CTA
└── Footer
```

This made the file large and harder to navigate.

---

# After Refactoring

The landing page is now divided into meaningful components:

```text
IntroPage
│
├── DevelopmentBanner
├── ScrollProgress
├── BackgroundOrbs
├── Navbar
│
├── HeroSection
│
├── HowItWorks
│   └── AttendanceMethodCard
│
├── Features
│   └── FeatureCard
│
├── UsersSection
│   └── UserTypeCard
│
├── BenefitsSection
│   └── BenefitCard
│
├── CTASection
│
└── Footer
```

This makes each part of the application easier to understand and modify.

---

# `IntroPage.jsx`

`IntroPage.jsx` is the main landing page.

It is responsible for:

* Rendering the landing-page components
* Managing the initial loading state
* Handling navigation
* Handling smooth scrolling between sections
* Maintaining the overall page structure

The page now mainly acts as a composition layer:

```jsx
<DevelopmentBanner />

<ScrollProgress />

<BackgroundOrbs />

<Navbar />

<main>
    <HeroSection />
    <HowItWorks />
    <Features />
    <UsersSection />
    <BenefitsSection />
    <CTASection />
</main>

<Footer />
```

The UI implementation itself is handled by the individual components.

---

# Components

## `Navbar.jsx`

Handles the website navigation.

### Responsibilities

* Present-Me logo
* Desktop navigation
* Mobile navigation
* Mobile menu
* Login button
* Get Started button
* Smooth scrolling

The mobile menu uses React state:

```jsx
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
```

The navigation functions are passed from `IntroPage.jsx`.

---

## `DevelopmentBanner.jsx`

Displays the website development notification.

Desktop displays:

```text
Website is under development.
```

Mobile displays:

```text
Dev Mode
```

This was separated because the development banner is an independent UI element.

---

## `ScrollProgress.jsx`

Handles the scroll progress indicator displayed at the top of the page.

It uses Framer Motion:

```jsx
useScroll()
useSpring()
```

The current scroll position is converted into a horizontal scale value for the progress bar.

Keeping this functionality in its own component prevents scroll-related animation logic from cluttering `IntroPage.jsx`.

---

## `BackgroundOrbs.jsx`

Handles the decorative blurred gradient circles used in the page background.

These are purely visual elements, so they are isolated into their own component.

---

# `HeroSection.jsx`

Contains the main hero section of Present-Me.

### Includes

* Education badge
* Main heading
* Product description
* Download App button
* Watch Demo button
* Statistics

The main heading is:

```text
Smart Attendance,
Smarter Learning
```

The statistics are imported from:

```text
data/landingData.js
```

---

# `HowItWorks.jsx`

Displays the three attendance methods:

```text
Face Detection
WiFi/Hotspot
Manual Entry
```

The component gets its content from `landingData.js`.

The attendance methods are rendered dynamically using `.map()`:

```jsx
attendanceMethods.map((method, index) => (
    <AttendanceMethodCard
        method={method}
        index={index}
    />
))
```

This avoids manually repeating the same card structure.

---

# `AttendanceMethodCard.jsx`

Represents one attendance-method card.

It receives the method information through props:

```jsx
method
index
```

The component dynamically displays:

* Icon
* Title
* Description
* Gradient
* Background styling

This makes the card reusable.

---

# `Features.jsx`

Displays the complete list of Present-Me features.

Current features include:

* Face Detection
* WiFi/Hotspot
* Manual Entry
* Real-Time Tracking
* One-Click Download
* Assignment Management
* Smart Notices
* Analytics & Insights
* Time Management

The feature data is imported from:

```text
data/landingData.js
```

The component uses `.map()` to generate the feature cards.

---

# `FeatureCard.jsx`

Represents an individual feature.

It receives a feature object through props.

The component displays:

* Feature icon
* Feature title
* Feature description
* Gradient styling

The icon is dynamically rendered.

For example:

```jsx
const Icon = feature.icon;

<Icon className="w-6 h-6" />
```

---

# `UsersSection.jsx`

Displays the different types of users supported by Present-Me.

The current user types are:

```text
For Students
For Teachers
For HOD & Dean
```

The information is stored in:

```text
data/landingData.js
```

The cards are generated dynamically using `.map()`.

---

# `UserTypeCard.jsx`

Represents an individual user-type card.

Each card contains:

* User icon
* User type
* Feature list
* Action button

The action depends on the user type.

For example:

```text
Student
→ Download App

Teacher
→ Download App

HOD & Dean
→ Login to Dashboard
```

---

# `BenefitsSection.jsx`

Displays the main benefits of Present-Me.

Current benefits are:

```text
Lightning Fast
Secure & Reliable
Access Anywhere
Powerful Analytics
```

The data comes from:

```text
data/landingData.js
```

The benefits are rendered dynamically.

---

# `BenefitCard.jsx`

Represents an individual benefit.

It receives the benefit data through props and displays:

* Icon
* Title
* Description
* Animation

The component can be reused for additional benefits in the future.

---

# `CTASection.jsx`

Contains the final call-to-action section.

It provides actions for:

### Download App

Used for users who want to get started with Present-Me.

### HOD/Dean Login

Navigates administrators to:

```text
/signin
```

The component uses React Router navigation.

---

# `Footer.jsx`

Contains the complete website footer.

The footer contains:

### Brand

```text
PRESENT-ME
```

### Quick Links

```text
Features
How it Works
For Users
Download
```

### Contact Information

```text
support@presentme.in
+91 7007458210
Gorakhpur, UP, India
```

### Legal Links

```text
Privacy Policy
Terms of Service
Cookie Policy
Delete Account
```

It also uses the smooth-scroll function for landing-page navigation.

---

# `data/landingData.js`

Static landing-page data has been separated from the UI components.

This file contains data such as:

```jsx
features
stats
userTypes
benefits
attendanceMethods
```

Instead of keeping these large arrays inside `IntroPage.jsx`, they are stored in one dedicated data file.

For example:

```jsx
export const features = [
    {
        icon: Users,
        title: "Face Detection",
        description:
            "AI-powered facial recognition for secure and contactless attendance marking",
        gradient: "from-blue-500 to-cyan-500",
    },
];
```

Components can then import the required data:

```jsx
import { features } from "../data/landingData";
```

---

# Static Data and UI Separation

The refactoring follows this basic structure:

```text
landingData.js
       │
       │  Data
       ▼
React Components
       │
       │  UI
       ▼
IntroPage.jsx
       │
       │  Page composition
       ▼
Landing Page
```

This makes it easier to modify content without searching through large JSX files.

---

# Dynamic Icons

Icons are stored as component references in `landingData.js`.

Instead of:

```jsx
icon: <Users />
```

the data stores:

```jsx
icon: Users
```

The component can then render the icon dynamically:

```jsx
const Icon = feature.icon;

return <Icon className="w-6 h-6" />;
```

This keeps the data file cleaner and separates data from JSX.

---

# React Router

React Router is used for application navigation.

`useNavigate()` is used for programmatic navigation:

```jsx
navigate("/signin");
navigate("/signup");
```

`Link` is used for regular application links:

```jsx
<Link to="/privacy-policy">
    Privacy Policy
</Link>
```

---

# Smooth Scrolling

The landing page contains section IDs:

```html
<section id="features">
<section id="how-it-works">
<section id="users">
<footer id="contact">
```

`IntroPage.jsx` contains the `scrollToSection()` function.

The function finds the required section:

```jsx
document.getElementById(sectionId)
```

and scrolls to it:

```jsx
window.scrollTo({
    top: elementPosition + window.pageYOffset - offset,
    behavior: "smooth",
});
```

This function is passed to components such as `Navbar` and `Footer`.

---

# Framer Motion

Framer Motion is used for animations throughout the landing page.

Examples include:

```jsx
initial
animate
whileInView
whileHover
transition
```

For example:

```jsx
<motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
>
```

Animations are now kept inside the components where they are used.

---

# Loading State

The loading state remains inside `IntroPage.jsx`.

This is because it controls the loading of the entire landing page.

The page initially displays a loading screen and then renders the actual landing page.

```jsx
const [isLoading, setIsLoading] = useState(true);
```

After the initial delay:

```jsx
setIsLoading(false);
```

the landing page is rendered.

---

# Component Communication

The implementation mainly uses **props** and **imported data**.

## Props

Functions can be passed from `IntroPage.jsx` to child components.

Example:

```jsx
<Navbar
    scrollToSection={scrollToSection}
    navigate={navigate}
/>
```

The Navbar can then use these functions.

---

## Imported Data

Components import static data directly from:

```text
data/landingData.js
```

Example:

```jsx
import { features } from "../data/landingData";
```

This prevents unnecessary prop passing for static content.

---