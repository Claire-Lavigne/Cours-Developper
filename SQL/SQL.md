Every table has Primary key with unique id

# Commands
```sql
USE sql_store                                   -- indicate database name

SELECT *                                        -- select all columns (for small tables only)
SELECT user_id                                  -- select one
SELECT user_id, firstname                       -- select multiple in this order
SELECT (points + 10) * 100                      -- maths : () * / - +
SELECT user_id AS ID                            -- renamme column : ID / user_ID / 'user ID'
SELECT DISTINCT firstname                       -- show duplicates in same line

FROM Users                                      -- table
FROM sql_store.orders                           -- databasename.table

JOIN users ON orders.user_id = users.user_id    -- same as INNER JOIN : get user_id column that are same in orders and users table
JOIN sql_store.orders o                         -- get orders table from sql_store database
LEFT JOIN                                       -- return results even if the condition is false
RIGHT JOIN                                      -- LEFT/RIGHT JOIN same as LEFT OUTER JOIN/RIGHT OUTER JOIN ; prefer left join only

WHERE user_id = 1                               -- conditions : = != <> <= >= < >
WHERE points > 3000
WHERE firstname = 'lola'                        -- strings and dates
WHERE firstname = 'lola' AND lastname = 'bee'   -- combine conditions : AND OR NOT
WHERE firstname IN ('lola', 'paulo')            -- combine OR condition
WHERE firstname NOT IN ('lola', 'paulo')        -- combine OR condition
WHERE points BETWEEN 1000 AND 3000              -- combine maths operators (>= <=)
WHERE NOT firstname = 'lola'                    -- all without 'lola'
WHERE lastname LIKE 'b%'                        -- starts with 'b' and as any character (uppercase and lowercase)
WHERE lastname LIKE '%ru%'                      -- starts with any character + 'ru' + any character
WHERE lastname LIKE '_y'                        -- two letters : first letter 'any' and last one 'y'
WHERE phone IS NUL                              -- where doesn't have value
WHERE phone IS NOT NUL                          -- where has value
-- WHERE user_id = 1                            -- comment line

REGEXP '^mac|ose$|t[aoe]t|[a-z]e'               -- strings starts with "mac" or ends with "ose" or has "tat/tot/tet" or has "from a to z + e"

ORDER BY lastname DESC                          -- Sort results from Z to A
ORDER BY state DESC, firstname                  -- Sort first state from Z to A and firstname from A to Z

LIMIT 3                                         -- limit to 3 first results
LIMIT 6, 1                                      -- dont take first 6 results and get only one after
ORDER BY 1, 2                                   -- Sort by 1st column and 2nd colmun NOT RECOMMENDED
```

# Commands join tables
```sql
SELECT 
  user_id, 
  u.meta_id,                                    -- when a column is in the 2 tables, specify the table alias
  firstname, 
  lastname
FROM users u
JOIN metas m
  -- ON u.meta_id = m.meta_id
  USING (meta_id);                              -- same as upper line

SELECT 
  u.user_id, 
  u.firstname,
  m.firstname AS manager
FROM users u
JOIN users m
  ON u.reports_to = m.user_id;                  -- JOIN ON = join datas in same table
  
SELECT                                          -- JOIN 3 tables
  o.order_id,
  o.order_date,
  c.firstname,
  c.lastname,
  os.name AS status
FROM orders o
JOIN customers c
  ON o.customer_id = c.customer_id
JOIN order_statuses os
  ON o.status = os.order_status_id;
  
SELECT 
  user_id, 
  u.meta_id,                                    -- when a column is in the 2 tables, specify the table alias
  firstname, 
  lastname
FROM users u
JOIN metas m
  -- ON u.meta_id = m.meta_id
  -- AND u.user_id = m.user_id                  -- AND used to join two tables with primary key
  USING (meta_id, user_id);                     -- same as upper lines
  
SELECT
  c.firstname AS customer,
  p.name AS product
FROM customers c
CROSS JOIN products p                           -- get all results from 2 tables
-- FROM customers c, orders o;                  -- same as user lines

SELECT
  firstname,
  lastname,
  'ok' AS order                                 -- add alias or column "order" with value "ok"
FROM customers
WHERE order > '2019'
UNION                                           -- combine 2 queries
SELECT
  firstname,
  lastname,
  'not ok' AS order
FROM customers
WHERE order < '2019'
```

# VALUES
id = int(11) PK NOT NULL (NN) AUTO INCREMENT (AI)
firstname = VARCHAR(50) NN
birthdate = DATE
phone = VARCHAR(50)

# INSERT ROW(S)
```sql
-- 1 ROW
INSERT INTO customers (
  firstname,
  lastname,
  birthdate,
)
VALUES (
  DEFAULT, 
  'Abraham', 
  'Lincoln', 
  NULL,
)

-- MULTIPLE ROWS
INSERT INTO customers (name)
VALUES 
  ('Paul'),
  ('John'),
  ('Clark')
```
