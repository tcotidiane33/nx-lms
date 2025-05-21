# Advanced SQL Queries for NX-LMS

This document provides additional SQL queries that can be useful for data analysis, reporting, and maintenance of your NX-LMS database.

## Data Analysis Queries

### 1. Course Popularity Analysis

```sql
-- Get courses ordered by number of students
SELECT c.title, c."totalStudents", COUNT(p.id) as purchase_count, 
       AVG(r.rating) as average_rating, COUNT(r.id) as review_count
FROM "Course" c
LEFT JOIN "Purchase" p ON c.id = p."courseId" AND p.status = 'completed'
LEFT JOIN "Review" r ON c.id = r."courseId" AND r."isPublished" = TRUE
GROUP BY c.id, c.title, c."totalStudents"
ORDER BY c."totalStudents" DESC;
```

### 2. User Engagement Analysis

```sql
-- Get user engagement metrics
SELECT u.email, u.name, 
       COUNT(DISTINCT p."courseId") as courses_purchased,
       COUNT(DISTINCT up."chapterId") as chapters_accessed,
       COUNT(DISTINCT CASE WHEN up."isCompleted" = TRUE THEN up."chapterId" END) as chapters_completed
FROM "User" u
LEFT JOIN "Purchase" p ON u.id = p."userId" AND p.status = 'completed'
LEFT JOIN "UserProgress" up ON u.id = up."userId"
GROUP BY u.id, u.email, u.name
ORDER BY courses_purchased DESC, chapters_completed DESC;
```

### 3. Category Performance

```sql
-- Analyze category performance
SELECT cat.name, 
       COUNT(c.id) as course_count, 
       SUM(c."totalStudents") as total_students,
       AVG(c.rating) as average_rating
FROM "Category" cat
LEFT JOIN "Course" c ON cat.id = c."categoryId" AND c."isPublished" = TRUE
GROUP BY cat.id, cat.name
ORDER BY total_students DESC;
```

## Reporting Queries

### 1. Revenue Report

```sql
-- Generate revenue report by month
SELECT 
    DATE_TRUNC('month', p."createdAt") as month,
    COUNT(p.id) as purchase_count,
    SUM(p.amount) as total_revenue,
    AVG(p.amount) as average_purchase
FROM "Purchase" p
WHERE p.status = 'completed'
GROUP BY DATE_TRUNC('month', p."createdAt")
ORDER BY month DESC;
```

### 2. Course Completion Report

```sql
-- Course completion rates
SELECT 
    c.title,
    COUNT(DISTINCT p."userId") as enrolled_students,
    COUNT(DISTINCT CASE WHEN up."isCompleted" = TRUE THEN up."userId" END) as completed_students,
    ROUND(COUNT(DISTINCT CASE WHEN up."isCompleted" = TRUE THEN up."userId" END)::numeric / 
          NULLIF(COUNT(DISTINCT p."userId"), 0)::numeric * 100, 2) as completion_percentage
FROM "Course" c
JOIN "Chapter" ch ON c.id = ch."courseId"
LEFT JOIN "Purchase" p ON c.id = p."courseId" AND p.status = 'completed'
LEFT JOIN "UserProgress" up ON ch.id = up."chapterId" AND p."userId" = up."userId"
GROUP BY c.id, c.title
ORDER BY completion_percentage DESC;
```

### 3. User Activity Report

```sql
-- User activity over time
SELECT 
    DATE_TRUNC('day', up."lastAccessed") as activity_date,
    COUNT(DISTINCT up."userId") as active_users,
    COUNT(up.id) as progress_updates
FROM "UserProgress" up
GROUP BY DATE_TRUNC('day', up."lastAccessed")
ORDER BY activity_date DESC;
```

## Maintenance Queries

### 1. Identify Orphaned Records

```sql
-- Find chapters without a valid course
SELECT ch.id, ch.title
FROM "Chapter" ch
LEFT JOIN "Course" c ON ch."courseId" = c.id
WHERE c.id IS NULL;

-- Find attachments without a valid course
SELECT a.id, a.name
FROM "Attachment" a
LEFT JOIN "Course" c ON a."courseId" = c.id
WHERE c.id IS NULL;
```

### 2. Database Size Analysis

```sql
-- Get size of each table
SELECT
    table_name,
    pg_size_pretty(pg_total_relation_size(quote_ident(table_name))) as total_size,
    pg_size_pretty(pg_relation_size(quote_ident(table_name))) as table_size,
    pg_size_pretty(pg_total_relation_size(quote_ident(table_name)) - pg_relation_size(quote_ident(table_name))) as index_size
FROM
    information_schema.tables
WHERE
    table_schema = 'public'
ORDER BY
    pg_total_relation_size(quote_ident(table_name)) DESC;
```

### 3. Update Course Statistics

```sql
-- Update course statistics (totalStudents and rating)
-- This is useful if you've imported data or made manual changes

-- Update totalStudents
UPDATE "Course" c
SET "totalStudents" = (
    SELECT COUNT(DISTINCT p."userId")
    FROM "Purchase" p
    WHERE p."courseId" = c.id AND p.status = 'completed'
);

-- Update rating
UPDATE "Course" c
SET rating = (
    SELECT COALESCE(AVG(r.rating), 0)
    FROM "Review" r
    WHERE r."courseId" = c.id AND r."isPublished" = TRUE
);
```

## Performance Optimization Queries

### 1. Identify Missing Indexes

```sql
-- Find tables that might benefit from additional indexes
SELECT
    schemaname || '.' || relname as table,
    seq_scan,
    seq_tup_read,
    idx_scan,
    seq_tup_read / NULLIF(seq_scan, 0) as avg_seq_tuples,
    idx_tup_fetch / NULLIF(idx_scan, 0) as avg_idx_tuples
FROM
    pg_stat_user_tables
WHERE
    seq_scan > 0
ORDER BY
    seq_tup_read DESC;
```

### 2. Identify Slow Queries

```sql
-- Find slow queries (requires pg_stat_statements extension)
SELECT
    query,
    calls,
    total_time,
    total_time / calls as avg_time,
    rows / calls as avg_rows
FROM
    pg_stat_statements
ORDER BY
    total_time DESC
LIMIT 20;
```

## How to Use These Queries

1. Connect to your PostgreSQL database using a client like psql, pgAdmin, or DBeaver
2. Copy and paste the query you want to run
3. Modify the query as needed for your specific requirements
4. Execute the query and analyze the results

These queries are designed to work with the database schema defined in the Prisma schema file. You may need to adjust them if you've modified the schema.
