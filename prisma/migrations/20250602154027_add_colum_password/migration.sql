/*
  Warnings:

  - Added the required column `password` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
-- ALTER TABLE "User" ADD COLUMN     "password" TEXT NOT NULL;
-- Ajout de la colonne comme nullable
ALTER TABLE "User" ADD COLUMN "password" TEXT;

-- Mise à jour des valeurs existantes
UPDATE "User" SET "password" = 'temporary_password' WHERE "password" IS NULL;

-- Modification de la colonne en non nullable
ALTER TABLE "User" ALTER COLUMN "password" SET NOT NULL;