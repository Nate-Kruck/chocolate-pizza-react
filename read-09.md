# SQL lessons 5-8

1. Try and write some queries to find the information requested in the tasks you know. You may have to use a different combination of clauses in your query for each task. Once you're done, continue onto the next lesson to learn about queries that span multiple tables.

1. Up to now, we've been working with a single table, but entity data in the real world is often broken down into pieces and stored across multiple orthogonal tables using a process known as normalization

1. Database normalization is useful because it minimizes duplicate data in any single table, and allows for data in the database to grow independently of each other (ie. Types of car engines can grow independent of each type of car). As a trade-off, queries get slightly more complex since they have to be able to find data from different parts of the database, and performance issues can arise when working with many large tables.

1. Tables that share information about a single entity need to have a primary key that identifies that entity uniquely across the database. One common primary key type is an auto-incrementing integer (because they are space efficient), but it can also be a string, hashed value, so long as it is unique.

1. Using the JOIN clause in a query, we can combine row data across two separate tables using this unique key. The first of the joins that we will introduce is the INNER JOIN.

1. The INNER JOIN is a process that matches rows from the first table and the second table which have the same key (as defined by the ON constraint) to create a result row with the combined columns from both tables. After the tables are joined, the other clauses we learned previously are then applied.

1. Depending on how you want to analyze the data, the INNER JOIN we used last lesson might not be sufficient because the resulting table only contains data that belongs in both of the tables.

1. If the two tables have asymmetric data, which can easily happen when data is entered in different stages, then we would have to use a LEFT JOIN, RIGHT JOIN or FULL JOIN instead to ensure that the data you need is not left out of the results.

1. Like the INNER JOIN these three new joins have to specify which column to join the data on.
When joining table A to table B, a LEFT JOIN simply includes rows from A regardless of whether a matching row is found in B. The RIGHT JOIN is the same, but reversed, keeping rows in B regardless of whether a match is found in A. Finally, a FULL JOIN simply means that rows from both tables are kept, regardless of whether a matching row exists in the other table.

1. An alternative to NULL values in your database is to have data-type appropriate default values, like 0 for numerical data, empty strings for text data, etc. But if your database needs to store incomplete data, then NULL values can be appropriate if the default values will skew later analysis (for example, when taking averages of numerical data).

1. ometimes, it's also not possible to avoid NULL values, as we saw in the last lesson when outer-joining two tables with asymmetric data. In these cases, you can test a column for NULL values in a WHERE clause by using either the IS NULL or IS NOT NULL constraint.

# Database Normalization

1. Database normalization is a process used to organize a database into tables and columns.  The main idea with this is that a table should be about a specific topic and only supporting topics included. Take a spreadsheet containing the information as an example, where the data contains salespeople and customers serving several purposes:  
    - Identify salespeople in your organization
    - List all customers your company calls upon to sell a product
    - Identify which salespeople call on specific customers

1. There are three normal forms most databases adhere to using.  As tables satisfy each successive database normalization form, they become less prone to database modification anomalies and more focused toward a sole purpose or topic.

## Reasons for Database Normalization

1. There are three main reasons to normalize a database.  
        - The first is to minimize duplicate data  
        - The second is to minimize or avoid data modification issues  
        - The third is to simplify queries.

1. Having the table serve many purposes introduces many of the challenges; namely, data duplication, data update issues, and increased effort to query data.

## Data Duplication and Modification Anomalies

1. Notice that for each SalesPerson we have listed both the SalesOffice and OfficeNumber. There are duplicate salesperson data. Duplicated information presents two problems:

- It increases storage and decrease performance.
- It becomes more difficult to maintain data changes.

1. There are three modification anomalies that can occur:
        - Insert Anomaly  
            - There are facts we cannot record until we know information for the entire row.  In our example we cannot record a new sales office until we also know the sales person.   
        - Update Anomaly  
            - In this case we have the same information in several rows. For instance if the office number changes, then there are multiple updates that need to be made.  If we don’t update all rows, then inconsistencies appear.  
        - Deletion Anomaly  
            - Deletion of a row causes removal of more than one set of facts.  For instance, if John Hunt retires, then deleting that row cause us to lose information about the New York office.

## Search and Sort Issues

1. Clearly if the customer were somehow in one column our query would be simpler.  Also, consider if you want to run a query and sort by customer. 

## Definition of Database Normalization

The forms are progressive, meaning that to qualify for 3rd normal form a table must first satisfy the rules for 2nd normal form, and 2nd normal form must adhere to those for 1st normal form. Before we discuss the various forms and rules in detail, let’s summarize the various forms:

1. First Normal Form – The information is stored in a relational table with each column containing atomic values. There are no repeating groups of columns.  
1. Second Normal Form – The table is in first normal form and all the columns depend on the table’s primary key.  
1. Third Normal Form – the table is in second normal form and all of its columns are not transitively dependent on the primary key

# Visual Representation of SQL Joins

1. This is just a simple article visually explaining SQL JOINs. In this article I am going to discuss seven different ways you can return data from two relational tables. The seven Joins I will discuss are: Inner JOIN, Left JOIN, Right JOIN, Outer JOIN, Left Excluding JOIN, Right Excluding JOIN, Outer Excluding JOIN, while providing examples of each.

1. Inner Join
    - This is the simplest, most understood Join and is the most common. This query will return all of the records in the left table (table A) that have a matching record in the right table (table B).

1. Left Join
    - This query will return all of the records in the left table (table A) regardless if any of those records have a match in the right table (table B). It will also return any matching records from the right table.

1. Right Join
    - This query will return all of the records in the right table (table B) regardless if any of those records have a match in the left table (table A). It will also return any matching records from the left table.

1. Outer Join
    - This Join can also be referred to as a FULL OUTER JOIN or a FULL JOIN. This query will return all of the records from both tables, joining records from the left table (table A) that match records from the right table (table B).

1. Left Exluding Join
    - This query will return all of the records in the left table (table A) that do not match any records in the right table (table B).

1. Right Exluding Join
    - This query will return all of the records in the right table (table B) that do not match any records in the left table (table A).

1. Outer Exluding Join
    - This query will return all of the records in the left table (table A) and all of the records in the right table (table B) that do not match.