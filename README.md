# UZIWORKS Portfolio

A black, editorial-style Python/Flask portfolio for photography and videography.

## 1. Install Python

Use Python 3.10+.

## 2. Install Flask

```bash
pip install flask
```

## 3. Add your work

Photography:
- `static/media/photography/cover.jpg`
- `static/media/photography/photo-01.jpg`
- `static/media/photography/photo-02.jpg`
- etc.

Videography:
- `static/media/videography/cover.jpg`
- `static/media/videography/video-01.mp4`
- `static/media/videography/video-01.jpg` (poster/thumbnail)
- etc.

You can rename the files, but if you do, update the matching filenames in the HTML templates.

## 4. Customize your About page

Open:
`templates/about.html`

Replace the placeholder text with your story, experience, goals, and photography/videography description.

## 5. Add your social links

Open:
`templates/contact.html`

Replace each `href="#"` with your Instagram, TikTok and Facebook URLs.

## 6. Run

From the UZIWORKS folder:

```bash
python app.py
```

Then open:

`http://127.0.0.1:5000`

## Pages

- `/` — Home
- `/photography` — Photography portfolio
- `/videography` — Videography portfolio
- `/about` — About
- `/works` — Home/work selector
- `/contact` — Social links

## Design

The site is intentionally:
- Black background
- White typography
- Large editorial headings
- Hamburger navigation
- Full-width Photography/Videography home choices
- Masonry photography gallery
- Video portfolio grid
- Responsive/mobile friendly
- Image lightbox support
