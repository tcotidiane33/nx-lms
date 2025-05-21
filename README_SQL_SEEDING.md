# Database Seeding with SQL for NX-LMS

## Overview

This repository contains SQL scripts to populate your NX-LMS database tables with sample data. These scripts are an alternative to the TypeScript-based seeding approach using Prisma's seed.ts.

## Files Included

1. **sql_seed_queries.sql** - Contains all the SQL INSERT statements needed to populate your database tables in the correct order, respecting foreign key constraints.

2. **SQL_INSTRUCTIONS.md** - Detailed instructions for using the SQL queries, including prerequisites, execution options, and troubleshooting tips.

## Quick Start

1. Ensure your PostgreSQL database is running and accessible
2. Make sure your database schema is created (typically via Prisma migrations)
3. Run the SQL script:

```bash
psql -U your_username -d your_database -f sql_seed_queries.sql
```

## Data Structure

The SQL scripts create the following data:

- 3 users (admin, instructor, student)
- 2 categories (Web Development, Data Science)
- 1 course with 2 chapters
- Purchase records, user progress, reviews, and more

## Benefits of Using SQL for Seeding

- Direct database access without ORM overhead
- Can be used in environments where Node.js is not available
- Easier to customize for specific testing scenarios
- Can be run directly in database management tools

## Next Steps

After running these scripts, you'll have a fully populated database ready for testing and development. You can:

1. Log in with the created user accounts
2. Browse the sample courses and categories
3. View the student's progress and purchase history

For more detailed information, please refer to the SQL_INSTRUCTIONS.md file.
