-- SQL Queries to populate database tables for NX-LMS
-- These queries follow the same structure and data as the seed.ts file

-- Step 1: Create Users
INSERT INTO "User" (id, name, email, "imageUrl", "clerkId", role, "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'Admin User', 'admin@example.com', 'https://ui-avatars.com/api/?name=Admin+User', NULL, 'admin', NOW(), NOW()),
  (gen_random_uuid(), 'Instructor User', 'instructor@example.com', 'https://ui-avatars.com/api/?name=Instructor+User', NULL, 'instructor', NOW(), NOW()),
  (gen_random_uuid(), 'Student User', 'student@example.com', 'https://ui-avatars.com/api/?name=Student+User', NULL, 'user', NOW(), NOW());

-- Step 2: Create Categories
INSERT INTO "Category" (id, name, description, "imageUrl", "createdAt", "updatedAt")
VALUES
  (gen_random_uuid(), 'Web Development', 'Learn web development technologies like HTML, CSS, JavaScript, and more.', 'https://placehold.co/600x400?text=Web+Development', NOW(), NOW()),
  (gen_random_uuid(), 'Data Science', 'Learn data science, machine learning, and AI.', 'https://placehold.co/600x400?text=Data+Science', NOW(), NOW());

-- Step 3: Create Courses (requires User and Category IDs)
-- Note: You'll need to replace the placeholder IDs with actual IDs from your database
INSERT INTO "Course" (id, "userId", title, description, "imageUrl", price, "isPublished", "categoryId", "totalStudents", rating, "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM "User" WHERE email = 'instructor@example.com'),
    'Introduction to Web Development',
    'Learn the basics of web development with HTML, CSS, and JavaScript.',
    'https://placehold.co/600x400?text=Web+Dev+Course',
    29.99,
    TRUE,
    (SELECT id FROM "Category" WHERE name = 'Web Development'),
    0,
    0,
    NOW(),
    NOW()
  );

-- Step 4: Create Chapters (requires Course ID)
INSERT INTO "Chapter" (id, title, description, "videoUrl", position, "isPublished", "isFree", "courseId", "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    'Introduction to HTML',
    'Learn the basics of HTML, the building block of the web.',
    NULL,
    1,
    TRUE,
    TRUE,
    (SELECT id FROM "Course" WHERE title = 'Introduction to Web Development' LIMIT 1),
    NOW(),
    NOW()
  ),
  (
    gen_random_uuid(),
    'CSS Fundamentals',
    'Learn how to style your HTML with CSS.',
    NULL,
    2,
    TRUE,
    FALSE,
    (SELECT id FROM "Course" WHERE title = 'Introduction to Web Development' LIMIT 1),
    NOW(),
    NOW()
  );

-- Step 5: Create Purchases (requires User and Course IDs)
INSERT INTO "Purchase" (id, "userId", "courseId", amount, currency, status, "paymentId", "paymentType", "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM "User" WHERE email = 'student@example.com'),
    (SELECT id FROM "Course" WHERE title = 'Introduction to Web Development' LIMIT 1),
    29.99,
    'EUR',
    'completed',
    NULL,
    'stripe',
    NOW(),
    NOW()
  );

-- Step 6: Create UserProgress (requires User and Chapter IDs)
INSERT INTO "UserProgress" (id, "userId", "chapterId", progress, "isCompleted", "lastAccessed", notes, "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM "User" WHERE email = 'student@example.com'),
    (SELECT id FROM "Chapter" WHERE title = 'Introduction to HTML' LIMIT 1),
    100,
    TRUE,
    NOW(),
    NULL,
    NOW(),
    NOW()
  );

-- Step 7: Create a Review (requires User and Course IDs)
INSERT INTO "Review" (id, "userId", rating, comment, "courseId", "isPublished", "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM "User" WHERE email = 'student@example.com'),
    5,
    'Great course! I learned a lot about web development basics.',
    (SELECT id FROM "Course" WHERE title = 'Introduction to Web Development' LIMIT 1),
    TRUE,
    NOW(),
    NOW()
  );

-- Step 8: Create an Attachment (requires Course ID)
INSERT INTO "Attachment" (id, name, url, type, size, description, "courseId", "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    'Course Resources',
    'https://example.com/resources.zip',
    'application/zip',
    1024000,
    'Additional resources for the course',
    (SELECT id FROM "Course" WHERE title = 'Introduction to Web Development' LIMIT 1),
    NOW(),
    NOW()
  );

-- Step 9: Create MuxData (requires Chapter ID)
-- Note: This would typically be created by the Mux API integration, but here's an example
INSERT INTO "MuxData" (id, "assetId", "playbackId", duration, "chapterId")
VALUES
  (
    gen_random_uuid(),
    'mux-asset-123456',
    'mux-playback-123456',
    1800,
    (SELECT id FROM "Chapter" WHERE title = 'Introduction to HTML' LIMIT 1)
  );

-- Step 10: Create StripeCustomer (requires User ID)
INSERT INTO "StripeCustomer" (id, "userId", "stripeCustomerId", email, name, "createdAt", "updatedAt")
VALUES
  (
    gen_random_uuid(),
    (SELECT id FROM "User" WHERE email = 'student@example.com'),
    'cus_example123456',
    'student@example.com',
    'Student User',
    NOW(),
    NOW()
  );

-- Note: After running these queries, you may want to update the Course.totalStudents field
-- based on the number of purchases:
UPDATE "Course"
SET "totalStudents" = (
  SELECT COUNT(*) FROM "Purchase"
  WHERE "courseId" = "Course".id AND status = 'completed'
)
WHERE id IN (SELECT id FROM "Course");

-- And update the Course.rating field based on the average of reviews:
UPDATE "Course"
SET rating = (
  SELECT COALESCE(AVG(rating), 0) FROM "Review"
  WHERE "courseId" = "Course".id AND "isPublished" = TRUE
)
WHERE id IN (SELECT id FROM "Course");
