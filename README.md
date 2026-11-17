# Little Beginnings — ETCH206 Digital Portfolio

A responsive, multi-page static website for GitHub Pages. Built with HTML, CSS and vanilla JavaScript. No build tools or framework are required.

## Pages

- `index.html` — home page and portfolio navigation
- `foundations.html` — theories, EYLF V2.0, NQS and children's rights
- `pedagogy.html` — slow pedagogy, relational teaching and care routines
- `environments.html` — indoor/outdoor play environments and QA3
- `planning.html` — interactive five-stage planning cycle
- `cognitive.html` — cognitive development and three age-tiered experiences
- `social.html` — social development and three age-tiered experiences
- `emotional.html` — emotional development and three age-tiered experiences
- `language.html` — language and literacy and three age-tiered experiences
- `perceptual.html` — perceptual development and three age-tiered experiences
- `resources.html` — seven media activities, video placeholders and searchable APA references

## Preview locally

Open `index.html` in a browser. For a local web server, run:

```bash
python -m http.server 8000
```

Then visit `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `etch206-digital-portfolio`.
2. Upload all files and folders from this project to the repository root.
3. Open **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select `main` and `/ (root)`, then save.
6. Wait for the Pages deployment. GitHub will show the public website URL in Settings → Pages.

The site uses relative links, so it works when published at a GitHub Pages project URL.

## Add your seven videos

Copy your final, permission-cleared recordings into `media/` using these filenames:

- `video-01-green-sheep.mp4`
- `video-02-baby-business.mp4`
- `video-03-twinkle-lullaby.mp4`
- `video-04-happy-know-it.mp4`
- `video-05-incy-wincy.mp4`
- `video-06-row-your-boat.mp4`
- `video-07-sleeping-bunnies.mp4`

Then replace each `.video-placeholder` block in `resources.html` with:

```html
<video controls preload="metadata" playsinline>
  <source src="media/video-01-green-sheep.mp4" type="video/mp4">
  Your browser does not support the video element.
</video>
```

Use the corresponding filename for each video. Add this CSS if desired:

```css
.video-card video {
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  object-fit: contain;
  background: #26372f;
}
```

**GitHub repository size:** GitHub Pages is best for static sites and smaller media. If the seven videos make the repository large, upload them to an approved video host or use Git LFS only if it fits your hosting arrangement, then embed the approved video URLs. Do not commit confidential footage or identifiable child recordings without appropriate consent and service approval.

## Important content checks before submission

- The website uses the seven media items and references listed in the supplied portfolio text. This is deliberate: it differs from the earlier suggested Australian media list.
- Check every reference against the original publication and your prescribed unit readings. The source text supplied for the site may contain bibliographic details that need verification.
- Confirm current regulatory requirements, safe-sleep guidance, equipment standards and service policies before using environment or activity suggestions.
- Adapt all experiences to the child, service risk assessment, allergies, family information and supervision requirements.
- Update the AI acknowledgement so it accurately describes the group’s actual use of generative AI and follows Ikon’s current requirements.
- Add the group timeline, task allocation, evidence of contributions, Team Charter and peer evaluation as required by the assessment. These group-work documents are not included as public website content by default.

## Customisation

- Colours and typography: edit `css/styles.css`.
- Navigation and interactive tabs: edit `js/site.js`.
- Page content: edit the individual `.html` files.
- Brand name: search for `Little Beginnings` in the HTML files and replace it with your group or portfolio name.
