# ddirarchitecture

# Routes
- /
- /about-us
- /awards
- /contact-us
- /category_name
- /dynamic-slugs
- /search/project_name

# Components
- Navbar
- Landing
- Dynamic Project
- More Project Card
- Category wise data show
- Search
- About
- Contact
- Footer

# Data
- name
- location
- description
- site_area
- built-area
- category
- awards
- photos

# Flow

## Navbar
- Visible on all Components
- Includes:
-- logo
-- categories
-- social icons
-- search bar
- Logo will navigate to `/`
- Categories will show all available categories and redirect to `category_name`

## Landing
- Default Webpage
- Hero Image will be shown
- Description around 3 paragraphs
- Frontend sends get all request to node
- Node sends response of the data sorted according to awards count
- Frontend will display html of cards 
- If Clicked on Image it will redirect to `dynamic-slugs`

## Dynamic Project
- Frontend sends request to access specific ObjectId
- Node send response of particular id's data 
- Frontend will show data as per:
-- One Hero image 
-- Project Name
-- Location
-- Awards Count
-- Site Area and Build Area
-- Description with Primary Image
-- Secondary Images in 4 Tile Gallery
-- `More Project` Component

## More Project Card
- Frontend sends request to get data of same category
- Node sends response of data of same category
- Carousel of 4 Images per Slide
- If Clicked on Image it will redirect to `dynamic-slugs`

## Category Wise Data Show
- Frontend sends request to fetch category specific data
- Node sends response of data of specific catgory
- Data will be displayed in Horizontal Full Width Card
- If Clicked on Image it will redirect to `dynamic-slugs`

## Search
- Frontend gets search param from url params
- Frontend sends request of data that aligns with search param
- Node sends response of data w.r.t search params
- Input Bar with Search Param (onchange)=updates url params
- Vertically Scrolled List showing data 
- If Clicked on Image it will redirect to `dynamic-slugs`

## Footer
- Social Icons
- Contact Info
- Navs
- Logo
- Small Search Bar

# Github Rules
- Make a new Branch for new feature starting name from `feature-..`
- Make a Pull Reuqest and Approve from Ishita and Sumant before merging
- Frequently take a parent branch pull 
- Test the feature from your side locally before merging
- Deployement will be done on production every Saturday

# Team
- Nikhil (Product Manager)
- Ishita (Developer)
- Sumant (Developer)
