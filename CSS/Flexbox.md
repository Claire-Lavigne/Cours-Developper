# FLEXBOX

## `flexbox.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" type="text/css" href="flex.css">
</head>
<body>

    <div class="container1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
--------------------
    <div class="container2">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
    </div>
--------------------
    <div class="container3">
        <header>Header</header>
        <section class="A">Section A</section>
        <section class="B">Section B</section>
        <section class="C">Section C</section>
        <footer>Footer</footer>
    </div>
--------------------
    <div class="container4">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
    </div>
</body>
</html>
```

## `flexbox.css`
```css
* {
  font-family: Helvetica;
  font-size: 1.2em;
  color: black;
  text-align: center;
  /* Pré requis indispensable aux flexbox */
  /* padding et bordure ne fonctionnent plus sur cet élément */
  box-sizing: border-box;
}

.flex-container {
    display: flex;
    flex-flow: 
    */ = flex-direction + flex-wrap /*
    justify-content : 
    align-items : 
    align-content:
}

.flex-item {
  order :
  align-self:
  flex-basis:
  flex-grow:
  flex-shrink:
}


/* ------------------------------- */

.container1 {
    display: flex;
}

.container1 div {
    /* flex-basis: 100px;  starting width for all */
    background: blue;
    border: 1px solid black;
    margin: 0 auto;
    flex-grow: 1;
}

.container1 div:nth-child(1), div:nth-child(6) {
    flex-grow: 3;
    /* flex-shrink: 3; CES ÉLÉMENTS RÉTRÉCISSENT 3X + VITE  */
}

/* 
FLEX = 1 3 100PX; SUR UNE DIV NTH CHILD
flex-grow
flex-shrink
flex-basis 
*/


/* ------------------------------- */

.container2 {
    display: grid;
    /* grid-template-columns: 20% 20% 20%; = Setting up 3 columns of 20% width */
    /* grid-template-columns: repeat(4, 1fr); = 1 sur 4 (fraction) = 25% */ 
    /* grid-template-rows: 3em 1.6em 1.6em; = Setting up 3 lines (of 3 columns) with different height */
    /* grid-auto-rows: 1.6em; = Setting up auto height for the next lines created */
    grid-template: repeat(3, 1.6em) / repeat(3, 1fr); /* row / column */
    grid-gap: 10px; /* Setting up a gap between columns and rows */
    /* grid-column-gap */
}

/* or by id #one #six */
.container2 div:nth-child(odd) {
    background-color: #B8336A;
}
  
.container2 div {
    background-color: #726DA8;
}

.container2 div:nth-child(4) {
    background-color: #A0D2DB;
    /*  grid-column-start: 1;
        grid-column-end: 4; */
    grid-column: 1 / 4; /* S'étend sur 3 colonnes */
    /*  grid-column: 1 / span 3; = S'étend sur 3 colonnes
        grid-column: 1 / -1; = S'étend jusqu'à la dernière colonne */
}

.container2 div:nth-child(5) {
    background-color: #C490D1;
    grid-row: 2 / 4;
}



/* ------------------------------- */


.container3 {
    display: grid;
    grid-template: repeat(4, 80px) / repeat(4, 1fr);
    grid-template-areas:
       " H H H H"
       " A A B C"
       " A A B C"
       " F F F F";
}

header {
    grid-area: H;
    background: #D0021B;
}

.A {
    grid-area: A;
    background: #9013FE;
}

.B {
    grid-area: B;
    background: #F8E71C;
}

.C {
    grid-area: C;
    background: #F5A623;
}

footer {
    grid-area: F;
    background: #50E3C2;
}


/* ------------------------------- */


.container4 {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  }
  
  .container4 div:nth-child(odd) {
    background-color: #B8336A;
  }
  
  .container4 div {
    background-color: #726DA8;
  }
