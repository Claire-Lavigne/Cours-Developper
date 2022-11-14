# Summary

[Create a “Hello world!” PHP script](#create-a-hello-world-php-script)  
[Closing tags, semicolons & line breaks in PHP](#closing-tags-semicolons--line-breaks-in-php)  
[Alternate method of calling PHP language constructs](#alternate-method-of-calling-php-language-constructs)  
[Write short echo tags in PHP](#write-short-echo-tags-in-php)  
[Create & name variables in PHP](#create--name-variables-in-php)  
[PHP data type assignments](#php-data-type-assignments)  
[Type casting in PHP](#type-casting-in-php)  
[Type juggling (coercion) in PHP](#type-juggling-coercion-in-php)  
[Concatenating strings in PHP](#concatenating-strings-in-php)  
[String interpolation & escaping in PHP](#string-interpolation--escaping-in-php)  
[Create a constant in PHP to store a fixed value](#create-a-constant-in-php-to-store-a-fixed-value)  
[Create a Boolean variable in PHP](#create-a-boolean-variable-in-php)  
[Conditionally execute PHP code with an if statement](#conditionally-execute-php-code-with-an-if-statement)  
[Write multiple conditions to execute alternate PHP code](#write-multiple-conditions-to-execute-alternate-php-code)  
[Alternate PHP if statement syntax for view files](#alternate-php-if-statement-syntax-for-view-files)  
[Refactor a PHP if else statement into a ternary](#refactor-a-php-if-else-statement-into-a-ternary)  
[Use a PHP switch statement for advanced conditional logic](#use-a-php-switch-statement-for-advanced-conditional-logic)  
[Use a match statement for advanced PHP data checks](#use-a-match-statement-for-advanced-php-data-checks)  
[Create a list using a PHP array](#create-a-list-using-a-php-array)  
[Display the contents of an array with a foreach loop](#display-the-contents-of-an-array-with-a-foreach-loop)  
[Use an array key to determine current iteration](#use-an-array-key-to-determine-current-iteration)  
[Create a key/value store within a PHP array](#create-a-keyvalue-store-within-a-php-array)  
[Create a nested or multi-dimensional array in PHP](#create-a-nested-or-multi-dimensional-array-in-php)  
[Get the count of a PHP array](#get-the-count-of-a-php-array)  
[Display the contents of an array within a for loop](#display-the-contents-of-an-array-within-a-for-loop)  
[Continue or break out of a PHP loop](#continue-or-break-out-of-a-php-loop)  
[Create a function in PHP](#create-a-function-in-php)  
[Function & global scope in PHP](#function--global-scope-in-php)  
[Calling functions with return values in PHP](#calling-functions-with-return-values-in-php)  
[Passing arguments to PHP functions](#passing-arguments-to-php-functions)  
[Defining function return & argument types in PHP](#defining-function-return--argument-types-in-php)  
[Type coercion & strict data types in PHP](#type-coercion--strict-data-types-in-php)  
[Including or requiring files in PHP](#including-or-requiring-files-in-php)  
[Create & instantiate a class in PHP](#create--instantiate-a-class-in-php)  
[Run code on PHP class creation with a constructor](#run-code-on-php-class-creation-with-a-constructor)  
[Create class properties in previous versions of PHP](#create-class-properties-in-previous-versions-of-php)  
[Create promoted properties in PHP 8 classes](#create-promoted-properties-in-php-8-classes)  
[Retrieve public class properties with PHP’s arrow syntax](#retrieve-public-class-properties-with-phps-arrow-syntax)  
[Understanding scope in PHP classes](#understanding-scope-in-php-classes)  
[Refactoring functions into PHP classes](#refactoring-functions-into-php-classes)  
[Defining & using PHP namespaces](#defining--using-php-namespaces)  
[Replace PHP require statements with the Composer class autoloader](#replace-php-require-statements-with-the-composer-class-autoloader)  

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
#functions.php
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
#index.php
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

# Create & instantiate a class in PHP
```php
# Author.php
<?php declare(strict_types=1);

class Author
{

}

#functions.php
<?php declare(strict_types=1);

require('classes/Author.php');

function getPosts(): array
{
    $author = new Author();

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

# Run code on PHP class creation with a constructor
```php
#Author.php
<?php declare(strict_types=1);

class Author
{
    public function __construct($name)
    {
        var_dump($name);
    }
}

#functions.php
<?php declare(strict_types=1);
require('classes/Author.php');

function getPosts(): array
{
    $author = new Author('Mark Shust');

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

# Create class properties in previous versions of PHP
```php
<?php declare(strict_types=1);

class Author
{
    public string $name;

    public function __construct($name)
    {
        $this->name = $name;
    }
}
```

# Create promoted properties in PHP 8 classes
```php
<?php declare(strict_types=1);

class Author
{
    public function __construct(
        public string $name
    ) {}
}
```

# Retrieve public class properties with PHP’s arrow syntax
```php
#functions.php
<?php declare(strict_types=1);
require('classes/Author.php');

function getPosts(): array
{
    $author1 = new Author('Mark Shust');
    $author2 = new Author('Betsy Sue');

    return [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
            'author' => $author1->name,
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
            'author' => $author1->name,
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
            'author' => $author2->name,
        ],
    ];
}
function getPostText(int $numPosts): string
{
    return $numPosts === 1 ? 'post' : 'posts';
}

#index.php
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
    <p>By <?= $posts[$i]['author'] ?></p>
<?php endfor ?>
```

# Understanding scope in PHP classes
```php
#Author.php
<?php declare(strict_types=1);
class Author
{
    public function __construct(
        private string $name
    ) {}

    public function getName(): string
    {
        return $this->name;
    }
}

#functions.php
<?php declare(strict_types=1);
require('classes/Author.php');
function getPosts(): array
{
    $author1 = new Author('Mark Shust');
    $author2 = new Author('Betsy Sue');
    return [
        [
            'title' => 'How to learn PHP',
            'content' => 'This is how you learn PHP.',
            'author' => $author1->getName(),
        ],
        [
            'title' => 'How to learn MySQL',
            'content' => 'This is how you learn MySQL.',
            'author' => $author1->getName(),
        ],
        [
            'title' => 'How to learn Nginx',
            'content' => 'This is how you learn Nginx.',
            'author' => $author2->getName(),
        ],
    ];
}
function getPostText(int $numPosts): string
{
    return $numPosts === 1 ? 'post' : 'posts';
}
```

# Refactoring functions into PHP classes
```php
#Post.php
<?php declare(strict_types=1);

require('classes/Author.php');

class Post
{
    public static function getAll(): array
    {
        $author1 = new Author('Mark Shust');
        $author2 = new Author('Betsy Sue');

        return [
            [
                'title' => 'How to learn PHP',
                'content' => 'This is how you learn PHP.',
                'author' => $author1->getName(),
            ],
            [
                'title' => 'How to learn MySQL',
                'content' => 'This is how you learn MySQL.',
                'author' => $author1->getName(),
            ],
            [
                'title' => 'How to learn Nginx',
                'content' => 'This is how you learn Nginx.',
                'author' => $author2->getName(),
            ],
        ];
    }

    public static function getText(int $numPosts): string
    {
        return $numPosts === 1 ? 'post' : 'posts';
    }
}

#index.php
<?php declare(strict_types=1);

require('classes/Post.php');

$title = 'My Blog';
$posts = Post::getAll();
$numPosts = count($posts);
$postText = Post::getText($numPosts);
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
```

# Defining & using PHP namespaces
```php
#Author.php
<?php declare(strict_types=1);

namespace App;

class Author
{
    public function __construct(
        private string $name
    ) {}
    public function getName(): string
    {
        return $this->name;
    }
}

#Post.php
<?php declare(strict_types=1);

namespace App;

require('classes/Author.php');

class Post
{
    public static function getAll(): array
    {
        $author1 = new Author('Mark Shust');
        $author2 = new Author('Betsy Sue');
        return [
            [
                'title' => 'How to learn PHP',
                'content' => 'This is how you learn PHP.',
                'author' => $author1->getName(),
            ],
            [
                'title' => 'How to learn MySQL',
                'content' => 'This is how you learn MySQL.',
                'author' => $author1->getName(),
            ],
            [
                'title' => 'How to learn Nginx',
                'content' => 'This is how you learn Nginx.',
                'author' => $author2->getName(),
            ],
        ];
    }
    public static function getText(int $numPosts): string
    {
        return $numPosts === 1 ? 'post' : 'posts';
    }
}

#index.php
<?php declare(strict_types=1);

require('classes/Post.php');

use App\Post;

$title = 'My Blog';
$posts = Post::getAll();
$numPosts = count($posts);
$postText = Post::getText($numPosts);
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
    <p>By <?= $posts[$i]['author'] ?></p>
<?php endfor ?>
```

# Replace PHP require statements with the Composer class autoloader
```php
#Post.php
<?php declare(strict_types=1);

namespace App;

class Post
{
    public static function getAll(): array
    {
        $author1 = new Author('Mark Shust');
        $author2 = new Author('Betsy Sue');
        return [
            [
                'title' => 'How to learn PHP',
                'content' => 'This is how you learn PHP.',
                'author' => $author1->getName(),
            ],
            [
                'title' => 'How to learn MySQL',
                'content' => 'This is how you learn MySQL.',
                'author' => $author1->getName(),
            ],
            [
                'title' => 'How to learn Nginx',
                'content' => 'This is how you learn Nginx.',
                'author' => $author2->getName(),
            ],
    }
    public static function getText(int $numPosts): string
    {
        return $numPosts === 1 ? 'post' : 'posts';
    }
}

#composer.json
{
    "name": "markshust/myphp",
    "autoload": {
        "psr-4": {
            "App\\": "classes/"
        }
    },
    "authors": [
        {
            "name": "Mark Shust",
            "email": "mark@shust.com"
        }
    ],
    "require": {}
}

#index.php
<?php declare(strict_types=1);

require('vendor/autoload.php');

use App\Post;

$title = 'My Blog';
$posts = Post::getAll();
$numPosts = count($posts);
$postText = Post::getText($numPosts);
$numPostsDisplay = "$numPosts $postText";
?>
<h1><?= $title ?></h1>
<h2><?= $numPostsDisplay ?></h2>
<?php for ($i = 0; $i < $numPosts; $i++) : ?>
    <h3><?= $posts[$i]['title'] ?></h3>
    <p><?= $posts[$i]['content'] ?></p>
    <p>By <?= $posts[$i]['author'] ?></p>
<?php endfor ?>
```

