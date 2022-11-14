# Create a “Hello world!” PHP script
```php
<?php echo('Hello world!') ?>
```

# Closing tags, semicolons & line breaks in PHP
```php
<?php
echo('Hello world!');
echo('Hello world!!!');
```

# Alternate method of calling PHP language constructs
```php
<?php
echo 'Hello world!';
```

# Write short echo tags in PHP
```php
<h1><?= 'Hello world!' ?></h1>
```

# Create & name variables in PHP
```php
<?php
$title = 'My Blog';
?>
<h1><?= $title ?></h1>
```

# PHP data type assignments
```php
<?php
$title = 'My Blog';
$numPosts = 10;
?>
<h1><?= $title ?></h1>
<p><?= gettype($title) ?></p>
<h2><?= $numPosts ?></h2>
<p><?= gettype($numPosts) ?></p>
```

# Type casting in PHP
```php
<?php
$title = (int) 'My Blog';
$numPosts = (string) 10;
?>
<h1><?= $title ?></h1>
<p><?= gettype($title) ?></p>
```

# Type juggling (coercion) in PHP
```php
<?php
$title = 'My Blog';
$numPosts = '10' . '10';
?>
<h1><?= $title ?></h1>
<p><?= gettype($title) ?></p>
```

# Concatenating strings in PHP
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$numPostsDisplay = $numPosts . ' posts';
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
```

# String interpolation & escaping in PHP
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
```

# Create a constant in PHP to store a fixed value
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$numPosts = $numPosts + 10;
define('MIN_NUM_POSTS', 0);
const MAX_NUM_POSTS = 100;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<h3>Minimum: <?= MIN_NUM_POSTS ?></h3>
<h3>Maximum: <?= MAX_NUM_POSTS ?></h3>
```

# Create a Boolean variable in PHP
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php var_dump($hasPosts) ?>
```

# Conditionally execute PHP code with an if statement
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php
if ($hasPosts) {
    echo 'Posts exist.';
}
?>
```

# Write multiple conditions to execute alternate PHP code
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php
if ($numPosts === 3) {
    echo 'There are exactly 3 posts.';
} elseif ($hasPosts) {
    echo 'Posts exist.';
} else {
    echo 'There are no posts.';
}
?>
```

# Alternate PHP if statement syntax for view files
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php if ($hasPosts): ?>
    <?php if ($numPosts === 3): ?>
        There are exactly 3 posts.
    <?php else: ?>
        Posts exist.
    <?php endif ?>
<?php else: ?>
    There are no posts.
<?php endif ?>
```

# Refactor a PHP if else statement into a ternary
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?= $hasPosts ? 'Posts exist.' : 'There are no posts.' ?>
```

# Use a PHP switch statement for advanced conditional logic
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
switch ($numPosts) {
    case 0:
        $message = 'There are no posts.';
        break;
    case 1:
    case 2:
    case 3:
        $message = 'There are a few posts.';
        break;
    default:
        $message = 'There are many posts.';
}
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<p><?= $message ?></p>
```

# Use a match statement for advanced PHP data checks
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
$message = match ($numPosts) {
    0 => 'There are no posts.',
    1, 2, 3 => 'There are some posts.',
    default => 'There are many posts.',
};
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<p><?= $message ?></p>
```

# Create a list using a PHP array
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
$tags = ['php', 'docker', 'mysql'];
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
```

# Display the contents of an array with a foreach loop
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
$tags = ['php', 'docker', 'mysql'];
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php
foreach ($tags as $tag) {
    echo "$tag<br/>";
}
?>
```

# Use an array key to determine current iteration
```php
<?php
$title = 'My Blog';
$numPosts = 10;
$hasPosts = $numPosts > 0;
$numPostsDisplay = "\"$numPosts\" posts";
$tags = ['php', 'docker', 'mysql'];
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php
foreach ($tags as $key => $tag) {
    echo "$key: $tag<br/>";
}
?>
```

# Create a key/value store within a PHP array
```php
<?php
$title = 'My Blog';
$post = [
    'title' => 'How to learn PHP',
    'content' => 'This is how you learn PHP.',
];
$numPosts = 10;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<h3><?= $post['title'] ?></h3>
<p><?= $post['content'] ?></p>
```

# Create a nested or multi-dimensional array in PHP
```php
<?php
$title = 'My Blog';
$posts = [
    [
        'title' => 'How to learn PHP',
        'content' => 'This is how you learn PHP.',
    ],
    [
        'title' => 'How to learn MySQL',
        'content' => 'This is how you learn MySQL.',
    ],
];
$numPosts = 10;
$numPostsDisplay = "\"$numPosts\" posts";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<pre><?php var_dump($posts) ?></pre>
```

# Get the count of a PHP array
```php
<?php
$title = 'My Blog';
$posts = [
    [
        'title' => 'How to learn PHP',
        'content' => 'This is how you learn PHP.',
    ],
    [
        'title' => 'How to learn MySQL',
        'content' => 'This is how you learn MySQL.',
    ],
];
$numPosts = count($posts);
$postText = $numPosts === 1 ? 'post' : 'posts';
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<pre><?php var_dump($posts) ?></pre>
```

# Display the contents of an array within a for loop
```php
<?php
$title = 'My Blog';
$posts = [
    [
        'title' => 'How to learn PHP',
        'content' => 'This is how you learn PHP.',
    ],
    [
        'title' => 'How to learn MySQL',
        'content' => 'This is how you learn MySQL.',
    ],
];
$numPosts = count($posts);
$postText = $numPosts === 1 ? 'post' : 'posts';
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Continue or break out of a PHP loop
```php
<?php
$title = 'My Blog';
$posts = [
    [
        'title' => 'How to learn PHP',
        'content' => 'This is how you learn PHP.',
    ],
    [
        'title' => 'How to learn MySQL',
        'content' => 'This is how you learn MySQL.',
    ],
    [
        'title' => 'How to learn Nginx',
        'content' => 'This is how you learn Nginx.',
    ],
];
$numPosts = count($posts);
$postText = $numPosts === 1 ? 'post' : 'posts';
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <?php
    if (str_contains($posts[$i]['title'], 'SQL')) :
        break;
    endif
    ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Create a function in PHP
```php
<?php
function getPosts()
{

}

$title = 'My Blog';
$posts = [
    [
        'title' => 'How to learn PHP',
        'content' => 'This is how you learn PHP.',
    ],
    [
        'title' => 'How to learn MySQL',
        'content' => 'This is how you learn MySQL.',
    ],
    [
        'title' => 'How to learn Nginx',
        'content' => 'This is how you learn Nginx.',
    ],
];
$numPosts = count($posts);
$postText = $numPosts === 1 ? 'post' : 'posts';
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <?php
    if (str_contains($posts[$i]['title'], 'SQL')) :
        break;
    endif
    ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Function & global scope in PHP
```php
<?php
function getPosts()
{
    $posts = [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
        ],
    ];
}

$title = 'My Blog';
$numPosts = count($posts);
$postText = $numPosts === 1 ? 'post' : 'posts';
$numPostsDisplay = "$numPosts $postText";
```

# Calling functions with return values in PHP
```php
<?php
function getPosts()
{
    return [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
        ],
    ];
}

$title = 'My Blog';
$posts = getPosts();
$numPosts = count($posts);
$postText = $numPosts === 1 ? 'post' : 'posts';
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Passing arguments to PHP functions
```php
<?php
function getPosts()
{
    return [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
        ],
    ];
}

function getPostText($numPosts)
{
    return $numPosts === 1 ? 'post' : 'posts';
}

$title = 'My Blog';
$posts = getPosts();
$numPosts = count($posts);
$postText = getPostText($numPosts);
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Defining function return & argument types in PHP
```php
<?php
function getPosts(): array
{
    return [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
        ],
    ];
}

function getPostText(int $numPosts): string
{
    return $numPosts === 1 ? 'post' : 'posts';
}
$title = 'My Blog';
$posts = getPosts();
$numPosts = count($posts);
$postText = getPostText($numPosts);
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Type coercion & strict data types in PHP
```php
<?php declare(strict_types=1);

function getPosts(): array
{
    return [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
        ],
    ];
}
function getPostText(int $numPosts): string
{
    return $numPosts === 1 ? 'post' : 'posts';
}
```

# Including or requiring files in PHP
```php
<?php declare(strict_types=1);

require('functions.php');

$title = 'My Blog';
$posts = getPosts();
$numPosts = count($posts);
$postText = getPostText($numPosts);
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
<?php endfor ?>
```

# Create a “Hello world!” PHP script
```php
```

# Create a “Hello world!” PHP script
```php
```

