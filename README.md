# Deploy: [Link](https://mitrofanzxc.github.io/angular-test/) 

### `npm i` 

Install all dependencies. 

### `npm run start` 

Run the app in the development mode. 

### `npm run test` 

Run the app test. 

## Requirements of the project: 

- [x] The latest version of Angular. 
- [x] TypeScript. 
- [x] Bootstrap 5 as CSS framework. 
- [x] The application must consists of 2 pages: 
    - List page (“/navigator” URL); 
    - Summary page (“/” URL); 
- [x] Store data in JSON format. 
- [x] The “List” page is a tab set. Each tab has a simple table. It has 2 columns. First column is “Name” or some other object identity. Second column is some amount or quantity. Please use the image below for your guidance. It’s rows are objects from the JSON above, filtered by “type” property. The “Income” tab will display only those objects, which have “type” === “income”. 
Other 3 tabs have exactly same filtering logic. 
The URL of the page should be: /navigator?tab=<0..3>, where tab query parameter corresponds to a currently selected tab, and the type by which the table is filtered. 
- [x] This page is displayed at the root URL (/). It has cards, please use Bootstrap 4 “card” SCSS classes. This page uses exactly the same JSON data, as the “List” page. 
  - First card is “Heading” card - it displays total number of objects and text. 
  - Next 4 cards are very similar. They differ only by the Text and by the type of objects counted: 
    - Income card: displays count of type=income , “See all” is a routerlink=/navigator?tab=0 
    - Outcome, Loan, Investment : similar to the cards above. 
