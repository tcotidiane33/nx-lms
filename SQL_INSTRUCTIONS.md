# SQL Instructions for Populating Database Tables

This document provides instructions for using the SQL queries in `sql_seed_queries.sql` to populate your database tables for the NX-LMS application.

## Prerequisites

- PostgreSQL database set up and running
- Database connection details configured in your environment
- Database schema created (tables should already exist, typically created by Prisma migrations)

## How to Use These Queries

### Option 1: Run the entire script at once

You can run the entire SQL script using the PostgreSQL command line:

```bash
psql -U your_username -d your_database -f sql_seed_queries.sql
```

Or using a PostgreSQL client like pgAdmin or DBeaver.

### Option 2: Run queries step by step

For more control, you can run each section of the script separately in the following order:

1. Create Users
2. Create Categories
3. Create Courses
4. Create Chapters
5. Create Purchases
6. Create UserProgress records
7. Create Reviews
8. Create Attachments
9. Create MuxData records
10. Create StripeCustomer records
11. Run the UPDATE statements to maintain data consistency

## Understanding the Queries

### Foreign Key References

The queries use subqueries to reference related records. For example:

```sql
(SELECT id FROM "User" WHERE email = 'instructor@example.com')
```

This approach ensures that the correct relationships are maintained without requiring you to manually find and enter IDs.

### UUID Generation

The queries use `gen_random_uuid()` to generate unique IDs for each record. This is consistent with the UUID approach used in the Prisma schema.

### Timestamps

The `NOW()` function is used for timestamp fields like `createdAt` and `updatedAt`.

## Customizing the Data

You can customize the data by modifying the values in the INSERT statements. For example:

- Change user names, emails, and roles
- Add more categories
- Create additional courses
- Add more chapters to courses
- Create more user progress records

## Maintaining Data Consistency

The script includes UPDATE statements at the end to maintain data consistency:

1. Updates the `totalStudents` field in the Course table based on the number of completed purchases
2. Updates the `rating` field in the Course table based on the average of published reviews

## Troubleshooting

If you encounter errors when running the queries:

1. Make sure your database tables exist (run Prisma migrations if needed)
2. Check that the column names match your schema (they should match the Prisma schema)
3. Verify that the data types are correct (e.g., numeric values for price fields)
4. Ensure that unique constraints are not violated (e.g., duplicate emails)

## Additional Notes

- These queries are designed to work with the schema defined in `schema.prisma`
- The data is based on the seed data in `seed.ts`
- You may need to adjust the queries if your schema has been modified
