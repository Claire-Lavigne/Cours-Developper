Every table has Primary key with unique id

# Commands
```sql
SELECT *                                        -- select all columns (for small tables only)
SELECT user_id                                  -- select one
SELECT user_id, firstname                       -- select multiple in this order
SELECT (points + 10) * 100                      -- maths : () * / - +
SELECT user_id AS ID                            -- renamme column : ID / user_ID / 'user ID'
SELECT DISTINCT firstname                       -- show duplicates in same line

FROM Users                                      -- table
FROM sql_store.orders                           -- fichier.table

JOIN users ON orders.user_id = users.user_id    -- same as INNER JOIN : get user_id column that are same in orders and users table

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
